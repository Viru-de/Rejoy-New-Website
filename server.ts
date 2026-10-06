import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
};

// API Health Check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    hasGeminiKey: !!process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== "MY_GEMINI_API_KEY",
    timestamp: new Date().toISOString(),
  });
});

// AI Solar Assistant Chatbot API
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const ai = getGeminiClient();

    if (!ai) {
      // Intelligent enterprise fallback response if API key is not configured
      const lower = message.toLowerCase();
      let reply = "Welcome to Rejoy Solar Power! I am your AI Clean Energy Consultant for Chhattisgarh. How can I assist with your residential rooftop solar, PM Surya Ghar subsidy, or commercial solar installation today?";

      if (lower.includes("cost") || lower.includes("price") || lower.includes("quote") || lower.includes("calculator")) {
        reply = "In Chhattisgarh, residential solar installation costs around ₹50,000–₹55,000 per kW before PM Surya Ghar subsidies. With the ₹78,000 PM Surya Ghar Govt. subsidy for a 3kW system, your net cost is approximately ₹87,000 with a payback period of just 2.5 to 3 years! Try our CSPDCL Solar Savings Calculator or request a free site survey in Raipur/Bhilai/Bilaspur.";
      } else if (lower.includes("subsidy") || lower.includes("government") || lower.includes("pm surya ghar") || lower.includes("creda")) {
        reply = "Under the PM Surya Ghar: Muft Bijli Yojana in Chhattisgarh, residential homeowners receive direct bank subsidies: ₹30,000 for 1kW, ₹60,000 for 2kW, and ₹78,000 for 3kW or higher systems. Rejoy Solar handles 100% of your CREDA & National Portal subsidy documentation!";
      } else if (lower.includes("commercial") || lower.includes("industrial") || lower.includes("factory")) {
        reply = "Rejoy Solar Power specializes in megawatt-scale industrial solar EPC, commercial rooftop plants, and CSPDCL HT net-metering across Chhattisgarh (Raipur, Bhilai, Korba, Bilaspur). Commercial projects enjoy 40% accelerated tax depreciation and up to 90% power bill reduction. Call +91 88899 88812 for a commercial site audit.";
      } else if (lower.includes("battery") || lower.includes("storage") || lower.includes("backup")) {
        reply = "We install high-reliability LFP lithium-ion hybrid solar battery storage systems with smart CSPDCL grid sync to ensure uninterrupted 24/7 power during load shedding.";
      } else if (lower.includes("contact") || lower.includes("whatsapp") || lower.includes("phone") || lower.includes("address")) {
        reply = "You can reach Rejoy Solar Power directly at +91 88899 88812 or +91 93000 93000, or visit our headquarters at Tatibandh Chowk, Near AIIMS, GE Road, Raipur, Chhattisgarh 492099.";
      }

      return res.json({ reply, isFallback: true });
    }

    const systemInstruction = `You are Rejoy Solar AI, the chief renewable energy consultant for Rejoy Solar Power Pvt. Ltd. (Chhattisgarh's leading CREDA-approved solar EPC company based in Raipur).
You provide expert, accurate, polite, and persuasive guidance on PM Surya Ghar subsidies (₹78,000 max subsidy), CSPDCL net metering, residential rooftop solar, commercial solar EPC, industrial plants, solar pumps, and battery storage across Chhattisgarh (Raipur, Bhilai, Durg, Bilaspur, Korba, etc.).
Keep answers clear, professional, structured, and helpful. Always encourage users to book a free site survey or use our online ROI calculator.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: message,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || "Thank you for reaching out to Rejoy Solar Power. Our solar consultant is preparing your detailed quote.";
    res.json({ reply });
  } catch (error: any) {
    console.error("Gemini Chat API Error:", error);
    res.status(500).json({
      error: "Failed to generate AI response",
      details: error.message,
    });
  }
});

// AI Solar Recommendation Engine API
app.post("/api/solar-recommendation", async (req, res) => {
  try {
    const { propertyType, billAmount, unitsConsumed, roofArea, roofType, city, provider } = req.body;

    const ai = getGeminiClient();

    // Mathematical estimation defaults
    const bill = Number(billAmount) || 8000;
    const roof = Number(roofArea) || 600;
    const estUnits = unitsConsumed ? Number(unitsConsumed) : Math.round(bill / 7.5);
    
    // System sizing: ~1kW generates 120 units/month, needs 80 sq.ft roof
    const recommendedKw = Math.max(1, Math.min(Math.round((estUnits / 120) * 10) / 10, Math.floor(roof / 80)));
    const panelsCount = Math.ceil((recommendedKw * 1000) / 540); // 540W mono-PERC panels
    const estRoofNeeded = panelsCount * 30; // 30 sq ft per panel with spacing
    const estAnnualGen = Math.round(recommendedKw * 1450); // 1450 kWh per kW per year
    const estAnnualSavings = Math.round(estAnnualGen * 8.5);
    const estCost = Math.round(recommendedKw * 52000); // estimated local currency / USD scale
    const estSubsidy = recommendedKw <= 3 ? Math.round(estCost * 0.35) : Math.round(estCost * 0.25);
    const netCost = estCost - estSubsidy;
    const paybackYears = (netCost / estAnnualSavings).toFixed(1);
    const co2ReductionTons = (estAnnualGen * 0.00082).toFixed(1);

    let aiAnalysisText = "";

    if (ai) {
      try {
        const prompt = `Analyze this solar property input and give 3 bullet points of high-value advice:
Property: ${propertyType}, Monthly Bill: ₹${bill}, Units: ${estUnits} kWh, Roof Area: ${roof} sq.ft (${roofType}), Location: ${city}, Provider: ${provider}.
Recommended Capacity: ${recommendedKw} kW (${panelsCount} panels).
Keep the advice concise, corporate, encouraging, and technically sound.`;

        const response = await ai.models.generateContent({
          model: "gemini-3.6-flash",
          contents: prompt,
        });

        aiAnalysisText = response.text || "";
      } catch (err) {
        console.warn("AI recommendation text gen failed, using fallback summary", err);
      }
    }

    if (!aiAnalysisText) {
      aiAnalysisText = `• Excellent solar potential identified for your ${propertyType} property in ${city || "your region"}.\n` +
        `• A ${recommendedKw} kW grid-tied solar system with ${panelsCount} high-efficiency bifacial panels will offset up to 90% of your energy costs.\n` +
        `• Your estimated payback period is approx ${paybackYears} years, yielding 20+ years of free clean energy.`;
    }

    res.json({
      propertyType,
      recommendedKw,
      panelsCount,
      estRoofNeeded,
      inverterSizeKw: Math.ceil(recommendedKw * 1.1),
      batteryRecommendation: recommendedKw > 5 ? "10kWh Lithium LFP Smart Storage" : "Optional 5kWh LFP Battery Backup",
      estAnnualGenKwh: estAnnualGen,
      co2ReductionTons,
      estGrossCost: estCost,
      estSubsidy,
      netInvestment: netCost,
      estAnnualSavings,
      est25YrSavings: Math.round(estAnnualSavings * 25 * 1.03), // 3% tariff inflation
      paybackYears,
      timelineDays: propertyType === "Industrial" ? "14 - 21 Days" : "5 - 7 Days",
      aiAnalysis: aiAnalysisText,
    });
  } catch (error: any) {
    res.status(500).json({ error: "Failed to calculate recommendation", details: error.message });
  }
});

// Vite & Static file handler setup
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Rejoy Solar Power Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
