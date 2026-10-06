import {
  ProjectItem,
  TestimonialItem,
  BlogPostItem,
  CareerItem,
  FAQItemData,
  SubsidyInfo,
  CustomerDashboardData,
} from '../types';

import imgResidential from '../assets/images/solar_hero_residential_1785068404255.jpg';
import imgCommercial from '../assets/images/solar_hero_commercial_1785068417548.jpg';
import imgIndustrial from '../assets/images/solar_hero_industrial_1785068433130.jpg';
import imgTechBattery from '../assets/images/solar_tech_battery_1785068449830.jpg';

import imgRooftopInstall from '../assets/images/rooftop_solar_install_1785072837136.jpg';
import imgCommercialPlant from '../assets/images/commercial_solar_plant_1785072851606.jpg';
import imgSolarWaterPump from '../assets/images/solar_water_pump_1785072865941.jpg';
import imgEngineersWork from '../assets/images/solar_engineers_work_1785072886854.jpg';
import imgResidentialPanel from '../assets/images/residential_solar_panel_1785072904221.jpg';
import imgSolarWaterHeater from '../assets/images/solar_water_heater_1785074230018.jpg';
import imgOnGridSystem from '../assets/images/ongrid_solar_system_1785074246272.jpg';
import imgOffGridSystem from '../assets/images/offgrid_solar_system_1785074260525.jpg';
import imgDirectorAbhijeetRoy from '../assets/images/director_abhijeet_roy_1785154351100.jpg';
import imgDirectorJyotiRoy from '../assets/images/director_jyoti_roy_1785154370090.jpg';
import imgDirectorDeepanshu from '../assets/images/director_deepanshu_c_1785154384339.jpg';

export const COMPANY_DETAILS = {
  name: 'Rejoy Solar Power',
  legalName: 'Rejoy Solar Power Private Limited',
  tagline: "Chhattisgarh's Premier CREDA Approved Solar EPC Company",
  logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQEgPzL7QDYVxA/company-logo_200_200/company-logo_200_200/0/1736868245072?e=2147483647&v=beta&t=zZec6Wdr22Wos81rpnFDN6iPe8nNNryNuqC8WE5GFC4',
  description: 'Rejoy Solar Power Private Ltd is a pioneering EPC (Engineering, Procurement, and Construction) company dedicated to transforming the energy landscape with innovative and sustainable solar solutions. We specialize in solar production, installation services, franchise development, and an extensive range of renewable solar products. Our goal is to make clean, renewable energy accessible and affordable, contributing to a greener and more sustainable future.',
  phone: '+91 97705 77527',
  phoneSecondary: '+91 97705 77527',
  phoneRaw: '+919770577527',
  whatsapp: '+91 97705 77527',
  whatsappRaw: '919770577527',
  email: 'info@rejoysolarpower.in',
  emailSecondary: 'support@rejoysolarpower.in',
  address: 'Pragati Nagar, Near Samaira Inn, Risali, Bhilai, Chhattisgarh 490006',
  city: 'Bhilai',
  state: 'Chhattisgarh',
  pincode: '490006',
  developedBy: 'Klyia Technology Pvt. Ltd.',
  rating: 4.9,
  reviewsCount: 1450,
  credaApproved: true,
  pmSuryaGharEmpaneled: true,
  stats: {
    mwInstalled: '100+ MW',
    projectsCompleted: '5,000+',
    happyCustomers: '4,800+',
    co2OffsetTons: '150,000+',
  },
};

export const COMPANY_STATS = [
  { value: '100+ MW', label: 'Solar Power Installed', sublabel: 'Across Chhattisgarh & Central India' },
  { value: '5,000+', label: 'Rooftop Solar Systems', sublabel: 'Homes, Business & Factories' },
  { value: '₹25 Cr+', label: 'Annual Electricity Savings', sublabel: 'Delivered to CSPDCL Consumers' },
  { value: '100%', label: 'PM Surya Ghar Subsidy Rate', sublabel: 'Direct Bank Transfer Up to ₹78,000' },
];

export const HERO_SLIDES = [
  {
    id: 'res-cg',
    title: 'PM Surya Ghar Muft Bijli Yojana in Chhattisgarh',
    subtitle: 'Get up to ₹78,000 Direct Bank Subsidy on Rooftop Solar by CREDA Approved Rejoy Solar.',
    description: 'Slash your CSPDCL monthly electricity bill to zero! Complete turnkey setup with DCR Tier-1 Mono PERC panels, bi-directional net metering, and 25-year warranty.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-technician-installing-solar-panels-on-a-roof-41584-large.mp4',
    image: imgResidential,
    ctaText: 'Claim ₹78,000 Subsidy',
    ctaPage: 'residential' as const,
    targetPage: 'residential' as const,
  },
  {
    id: 'com-cg',
    title: 'Commercial & Industrial Solar EPC in Raipur & Durg',
    subtitle: 'Reduce operational electricity costs by up to 80% with 40% Accelerated Depreciation tax benefits.',
    description: 'Empowering steel mills, rice mills, hospitals, schools, and commercial hubs across Raipur, Bhilai, Bilaspur, and Korba with custom solar plants.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-solar-panels-on-the-roof-of-a-house-41582-large.mp4',
    image: imgCommercial,
    ctaText: 'Explore Commercial Solar',
    ctaPage: 'commercial' as const,
    targetPage: 'commercial' as const,
  },
  {
    id: 'ind-cg',
    title: 'Megawatt Industrial Solar & CREDA On-Grid Turnkey Projects',
    subtitle: 'Heavy-duty rooftop and ground-mounted solar power plants with SCADA fiber telemetry.',
    description: 'Full EPC execution from CREDA approval, CSPDCL net metering sanction, high-voltage transformer setup to lifetime maintenance.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-man-working-with-solar-panels-41583-large.mp4',
    image: imgIndustrial,
    ctaText: 'Explore Industrial EPC',
    ctaPage: 'industrial' as const,
    targetPage: 'industrial' as const,
  },
];

export const SERVICES_DATA = [
  {
    id: 'rooftop-installation',
    title: 'Rooftop Solar Installation',
    shortDesc: 'Turnkey residential and building rooftop solar engineering with up to ₹78,000 direct bank subsidy under PM Surya Ghar Yojana.',
    detailedDesc: 'Complete turnkey rooftop solar PV engineering including shadow analysis, heavy-duty hot-dip galvanized mounting structures, CSPDCL bi-directional net metering sanction, and Tier-1 DCR monocrystalline panels.',
    imageUrl: imgRooftopInstall,
    page: 'residential' as const,
    badge: 'PM Surya Ghar Approved',
    features: [
      'Up to ₹78,000 Direct Central Govt Subsidy',
      'Zero Monthly CSPDCL Electricity Bills',
      '25-Year Linear Power Output Warranty',
      'Bi-Directional Net-Metering Approval',
      '0% Interest Easy Bank EMI Finance Options',
    ],
    techSpecs: [
      { label: 'System Capacity', value: '1kW to 10kW+ Rooftop PV' },
      { label: 'Panel Tech', value: 'TopCon / Mono PERC Bifacial DCR' },
      { label: 'Inverter Rating', value: 'IP65 On-Grid Smart MPPT Inverter' },
      { label: 'Subsidy Portal', value: 'PM Surya Ghar Direct Credit' },
    ],
  },
  {
    id: 'commercial-plant',
    title: 'Commercial Solar Plant',
    shortDesc: 'High-efficiency solar power plants for commercial complexes, offices, schools, and hospitals to slash power bills by up to 80%.',
    detailedDesc: 'Custom industrial & commercial roof-mounted solar power plants with 40% accelerated tax depreciation, sub-3 year capital ROI payback, remote SCADA cloud monitoring, and zero operational interruption.',
    imageUrl: imgCommercialPlant,
    page: 'commercial' as const,
    badge: '40% Tax Benefit',
    features: [
      '40% Accelerated Depreciation Tax Benefits',
      'Sub-3 Year Capital Investment ROI',
      'Zero Operational Interruption Installation',
      'CSPDCL Commercial Net Metering Sanction',
      'Real-Time Smart SCADA Cloud Telemetry',
    ],
    techSpecs: [
      { label: 'Capacity Range', value: '10kW to 500kW+ Commercial' },
      { label: 'Monitored Metrics', value: 'Hourly kWh, Performance Ratio, PR %' },
      { label: 'Protection', value: 'DC Isolator, SPD, Lightning Arrester' },
      { label: 'Payback Period', value: '2.5 to 3.2 Years' },
    ],
  },
  {
    id: 'solar-water-pump',
    title: 'Solar Water Pump',
    shortDesc: 'CREDA & PM KUSUM approved high-capacity solar agricultural & industrial water pumping systems for uninterrupted irrigation.',
    detailedDesc: 'Eco-friendly solar powered water pumps engineered for agricultural farms, poultry farms, rural estates, and industrial facilities. Operates off-grid without diesel or high electricity tariffs.',
    imageUrl: imgSolarWaterPump,
    page: 'subsidy' as const,
    badge: 'PM KUSUM Subsidy Approved',
    features: [
      'Up to 60%-90% PM KUSUM Govt Subsidy',
      '3HP to 10HP Submersible & Surface Pumps',
      'Zero Diesel Fuel & Zero Grid Running Cost',
      'MPPT Controller with Dry Run Protection',
      'Weatherproof Heavy-Duty IP65 VFD Drive',
    ],
    techSpecs: [
      { label: 'Pump Capacities', value: '3 HP, 5 HP, 7.5 HP & 10 HP' },
      { label: 'Motor Type', value: 'AC/DC High-Head Submersible' },
      { label: 'Control Drive', value: 'MPPT Solar Variable Frequency Drive' },
      { label: 'Discharge Output', value: 'Up to 250,000 Liters / Day' },
    ],
  },
  {
    id: 'solar-engineers-work',
    title: 'Solar Engineers Working',
    shortDesc: 'CREDA empaneled site engineers executing 3D shadow CAD modeling, structural safety audits, and 24/7 AMC maintenance.',
    detailedDesc: 'Expert team of CREDA-certified solar engineers handling technical site feasibility, high-voltage transformer interconnection, thermal infrared drone inspections, earthing grid testing, and round-the-clock AMC maintenance.',
    imageUrl: imgEngineersWork,
    page: 'solar-epc' as const,
    badge: 'CREDA Certified Engineers',
    features: [
      'CREDA & MNRE Certified Site Engineers',
      '3D Shadow Analysis & CAD Roof Modeling',
      'Structural Load & Electrical Safety Audit',
      'Infrared Thermal Drone Panel Scanning',
      '24/7 Mobile App Telemetry & Rapid AMC',
    ],
    techSpecs: [
      { label: 'Engineering Certs', value: 'CREDA, MNRE & ISO 9001:2025' },
      { label: 'Site Audit', value: '3D Laser Survey & Structural Load Test' },
      { label: 'Maintenance', value: '24/7 On-Call Support & Annual AMC' },
      { label: 'Earthing Grid', value: 'Chemical Gel Earthing < 1 Ohm' },
    ],
  },
  {
    id: 'residential-panels',
    title: 'Residential Rooftop Panels',
    shortDesc: 'Tier-1 ALMM & DCR approved high-wattage monocrystalline solar panels engineered for maximum cell efficiency and durability.',
    detailedDesc: 'Premium DCR-compliant monocrystalline PV modules engineered with multi-busbar cell technology, anti-reflective tempered glass, and anodized aluminum frames designed for 25+ years of intense weather resistance.',
    imageUrl: imgResidentialPanel,
    page: 'residential' as const,
    badge: 'Tier-1 ALMM / DCR Grade',
    features: [
      'Tier-1 DCR Approved Monocrystalline Modules',
      '22.5%+ Ultra-High Cell Efficiency Rating',
      'Anti-Reflective & Hail-Resistant Tempered Glass',
      'Superior Low-Light & High-Temp Performance',
      '25-Year Linear Power Output Guarantee',
    ],
    techSpecs: [
      { label: 'Wattage Range', value: '540W to 670W Mono PERC / N-Type' },
      { label: 'Cell Efficiency', value: '22.5% to 23.2% Module Efficiency' },
      { label: 'Certifications', value: 'BIS, IEC 61215, ALMM Listed' },
      { label: 'Wind Resistance', value: 'Tested for 150 km/h Storm Winds' },
    ],
  },
  {
    id: 'solar-water-heater',
    title: 'Solar Water Heater',
    shortDesc: 'Evacuated Tube Collector (ETC) & Flat Plate Collector (FPC) solar water heating systems for 24/7 hot water in homes, hotels, and industrial facilities.',
    detailedDesc: 'High-grade stainless steel solar thermal water heaters with food-grade inner tanks and high-vacuum borosilicate glass tubes. Delivers up to 80°C hot water with zero electricity consumption and maximum heat retention during winter.',
    imageUrl: imgSolarWaterHeater,
    page: 'residential' as const,
    badge: 'Zero Electricity Cost',
    features: [
      'Zero Electricity Running Cost for Daily Hot Water',
      'Triple-Layer Borosilicate Vacuum Glass Tubes (ETC)',
      'SUS-304 Food-Grade Stainless Steel Inner Tank',
      'High-Density PUF Insulation for 24-Hour Heat Retention',
      'Hard Water & Corrosion Resistant Anti-Scaling Coating',
    ],
    techSpecs: [
      { label: 'Capacity Range', value: '100 LPD to 5,000+ LPD Industrial' },
      { label: 'Collector Tech', value: 'Triple Target Vacuum Tube (ETC) / FPC' },
      { label: 'Max Temperature', value: '60°C to 80°C Hot Water Output' },
      { label: 'Tank Material', value: 'SUS-304 L Grade Stainless Steel' },
    ],
  },
  {
    id: 'ongrid-solar-system',
    title: 'On-Grid Solar System',
    shortDesc: 'Utility grid-connected solar power plant with CSPDCL bi-directional net metering to feed excess power into grid and reduce electric bills by 90%.',
    detailedDesc: 'High-performance grid-tied solar PV system engineered with smart string inverters and net-metering. Automatically exports surplus daytime electricity to the CSPDCL power grid, earning energy credits and eliminating high slab tariffs.',
    imageUrl: imgOnGridSystem,
    page: 'residential' as const,
    badge: 'Net Metering Approved',
    features: [
      'Bi-Directional CSPDCL Net-Metering Integration',
      'Up to ₹78,000 PM Surya Ghar Govt Subsidy Eligible',
      'Zero Battery Maintenance & Fastest ROI Payback',
      'IP65 MPPT String Inverters with Mobile App Telemetry',
      '25-Year Linear Power Output Warranty',
    ],
    techSpecs: [
      { label: 'Capacity Range', value: '1kW to 500kW+ On-Grid PV' },
      { label: 'Grid Sync', value: 'Single Phase / 3-Phase 415V CSPDCL Grid' },
      { label: 'Inverter Efficiency', value: '98.6% Conversion Efficiency' },
      { label: 'Payback Period', value: '2.5 to 3.5 Years ROI' },
    ],
  },
  {
    id: 'offgrid-solar-system',
    title: 'Off-Grid Solar System',
    shortDesc: 'Standalone battery-backed solar system for 24/7 power backup in remote homes, farms, and areas with frequent power outages.',
    detailedDesc: 'Self-sustaining solar power infrastructure paired with lithium-ion (LiFePO4) or heavy-duty tubular battery banks. Provides 100% uninterrupted electricity independence without relying on the utility grid during blackouts.',
    imageUrl: imgOffGridSystem,
    page: 'solar-epc' as const,
    badge: '24/7 Uninterrupted Backup',
    features: [
      '100% Power Independence from Utility Grid Blackouts',
      'Long-Life LiFePO4 Lithium / C10 Tubular Battery Storage',
      'Smart Pure Sine Wave Hybrid Solar Inverter (PCU)',
      'Automatic Mains / Generator AC Transfer Switch',
      'Heavy-Duty Surge Protection & Short-Circuit Safety',
    ],
    techSpecs: [
      { label: 'System Capacity', value: '2kW to 30kW Off-Grid Setup' },
      { label: 'Battery Storage', value: 'Lithium LiFePO4 / C10 Tubular Bank' },
      { label: 'Inverter Type', value: 'Pure Sine Wave Hybrid MPPT PCU' },
      { label: 'Backup Duration', value: '6 Hours to 24+ Hours Full Load' },
    ],
  },
];

export const SERVICES_LIST = SERVICES_DATA;

export const OUR_BEGINNINGS = "With the foundation with our first firm Roy Solar Energy, launched in November 2019, just before the pandemic, we faced challenges of COVID-19, which kept us limited dormant until 2021. Post-pandemic, we regained momentum and began executing projects through outsourcing. As we progressed, the team evolved, and by focusing on an approach, the company became capable of installing over 100 kW of rooftop solar systems per month, ensuring efficient and timely project completion.";

export const TEAM_MEMBERS = [
  {
    name: 'Abhijeet Roy',
    role: 'CEO & MD',
    experience: "A commerce graduate with an MBA, Abhijeet also completed a 3-month advanced solar energy training at NISE. He plays a key role in shaping the company's vision and is instrumental in building the company from the ground up, ensuring it remains rooted in innovation and sustainability.",
    photoUrl: imgDirectorAbhijeetRoy,
  },
  {
    name: 'Jyoti Roy Singh',
    role: 'CFO & HR Manager',
    experience: "With a B.Com degree and certification as a CMA, Jyoti brings a wealth of financial expertise to the company. She has experience managing accounts at Vivo India's Raipur branch and is an expert in Tally. Her dedication ensures that the company maintains strong financial health and an efficient operational backbone.",
    photoUrl: imgDirectorJyotiRoy,
  },
  {
    name: 'Deepanshu Chandrawanshi',
    role: 'Director',
    experience: "One of our directors, Deepanshu Chandrawanshi, is a Mechanical Engineer with strong technical expertise and a practical approach to problem-solving. He plays a key role in overseeing project execution and ensuring quality standards are maintained across all installations. His knowledge and leadership contribute significantly to delivering efficient, reliable, and sustainable solar energy solutions.",
    photoUrl: imgDirectorDeepanshu,
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'CREDA Approved Vendor',
    desc: 'Empaneled and approved by Chhattisgarh State Renewable Energy Development Agency (CREDA) and MNRE.',
    icon: 'Shield',
  },
  {
    title: 'PM Surya Ghar Subsidy',
    desc: 'Hassle-free direct bank credit of up to ₹78,000 central subsidy under PM Surya Ghar Muft Bijli Yojana.',
    icon: 'CheckCircle2',
  },
  {
    title: 'Local Chhattisgarh Team',
    desc: 'Headquartered in Raipur with quick response service centers in Durg, Bhilai, Bilaspur, Korba, and Rajnandgaon.',
    icon: 'GraduationCap',
  },
  {
    title: 'CSPDCL Net Metering',
    desc: 'Complete end-to-end handling of CSPDCL bi-directional net meter application, testing, and commissioning.',
    icon: 'ZapFast',
  },
  {
    title: 'Tier-1 DCR Solar Panels',
    desc: 'ALMM & DCR compliant high-efficiency Mono PERC / N-Type TopCon panels with 25-year performance warranty.',
    icon: 'Medal',
  },
  {
    title: 'Easy EMI Loan Options',
    desc: 'Low-interest solar loans through SBI, PNB, Bank of Baroda, and Canara Bank with minimal documentation.',
    icon: 'DollarSign',
  },
  {
    title: '24/7 Mobile App Monitoring',
    desc: 'Track your daily electricity generation, grid export, and electricity bill savings in real time on your smartphone.',
    icon: 'Smartphone',
  },
  {
    title: 'Dedicated AMC Support',
    desc: 'Free 5-year maintenance with periodic site inspections, panel cleaning, and health audits.',
    icon: 'Headphones',
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'p1',
    title: 'Shree Krishna Residence',
    category: 'Residential',
    capacityKw: 5,
    location: 'VIP Estate, GE Road, Raipur, CG',
    description: '5kW On-Grid Rooftop Solar System under PM Surya Ghar Yojana, eliminating 95% of CSPDCL electricity bill.',
    imageUrl: imgResidential,
    image: imgResidential,
    completionYear: '2025',
    co2SavedAnnualTons: 6.2,
    annualSavings: '₹58,000 / yr',
    paybackPeriod: '2.8 Years',
    clientName: 'Rajesh Agarwal',
    highlights: ['540W DCR Mono PERC Panels', '₹78,000 Govt Subsidy Credit', 'CSPDCL Bi-directional Net Meter'],
  },
  {
    id: 'p2',
    title: 'Bhilai Steel Fabrication Unit',
    category: 'Commercial',
    capacityKw: 250,
    location: 'Industrial Area, Bhilai, CG',
    description: '250kW commercial rooftop solar plant with 40% accelerated tax depreciation for heavy industrial fabrication.',
    imageUrl: imgCommercial,
    image: imgCommercial,
    completionYear: '2025',
    co2SavedAnnualTons: 310,
    annualSavings: '₹22,50,000 / yr',
    paybackPeriod: '2.5 Years',
    clientName: 'Bhilai Engineering Works',
    highlights: ['High-Strength Structural Mounting', '40% Tax Depreciation Saved', 'SCADA Realtime Data Logger'],
  },
  {
    id: 'p3',
    title: 'Mahanadi Rice Mill & Solvent Plant',
    category: 'Industrial',
    capacityKw: 1200,
    location: 'Chakarbhatha, Bilaspur, CG',
    description: '1.2 MW high-voltage connected solar power project powering continuous rice milling machinery.',
    imageUrl: imgIndustrial,
    image: imgIndustrial,
    completionYear: '2024',
    co2SavedAnnualTons: 1450,
    annualSavings: '₹1.10 Crore / yr',
    paybackPeriod: '2.6 Years',
    clientName: 'Mahanadi Agri Products Ltd.',
    highlights: ['11kV Transformer Interconnect', 'CREDA Sanctioned Plant', 'Sub-3 Year Full ROI'],
  },
  {
    id: 'p4',
    title: 'Central Chhattisgarh Public School',
    category: 'Commercial',
    capacityKw: 100,
    location: 'Transport Nagar, Korba, CG',
    description: '100kW educational institute solar rooftop project providing 100% clean power for classrooms and labs.',
    imageUrl: imgIndustrial,
    image: imgIndustrial,
    completionYear: '2024',
    co2SavedAnnualTons: 120,
    annualSavings: '₹9,20,000 / yr',
    paybackPeriod: '2.9 Years',
    clientName: 'Korba Educational Trust',
    highlights: ['Zero Noise Operations', 'Student Educational Dashboard', '100% Green Campus'],
  },
];

export const PROJECTS_LIST = PROJECTS_DATA;

export const GOOGLE_REVIEWS: TestimonialItem[] = [
  {
    id: 'r1',
    name: 'Mahendra Sahu',
    role: 'Homeowner',
    companyOrLocation: 'VIP Estate, Raipur',
    rating: 5,
    comment: 'Rejoy Solar team in Raipur installed a 3kW solar system on my roof. I got ₹78,000 PM Surya Ghar subsidy credited directly into my bank account. My CSPDCL bill is now virtually zero! Highly recommended CREDA vendor in Chhattisgarh.',
    systemSize: '3 kW Residential',
    annualSavings: '₹36,000 / yr',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    verifiedGoogle: true,
    date: '2 weeks ago',
  },
  {
    id: 'r2',
    name: 'Sunil Agrawal',
    role: 'Managing Director',
    companyOrLocation: 'Bhilai Industrial Complex',
    rating: 5,
    comment: 'Rejoy Solar executed our 200kW commercial solar setup in Bhilai smoothly. Their engineering quality, CREDA paperwork, and CSPDCL net meter approval process was hassle-free. Saving over ₹1.8 Lakhs every month on factory power!',
    systemSize: '200 kW Commercial',
    annualSavings: '₹21,60,000 / yr',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    verifiedGoogle: true,
    date: '1 month ago',
  },
  {
    id: 'r3',
    name: 'Dr. Archana Chandra',
    role: 'Hospital Administrator',
    companyOrLocation: 'Bilaspur, CG',
    rating: 5,
    comment: 'We installed a 50kW rooftop solar plant with Rejoy Solar Power for our hospital in Bilaspur. They provided tier-1 panels, 5-year AMC warranty, and mobile app tracking. Very professional service team.',
    systemSize: '50 kW Commercial',
    annualSavings: '₹5,40,000 / yr',
    photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300',
    verifiedGoogle: true,
    date: '3 weeks ago',
  },
];

export const FAQ_DATA: FAQItemData[] = [
  {
    id: 'faq-1',
    category: 'PM Surya Ghar Scheme',
    question: 'How much government subsidy do I get under PM Surya Ghar Yojana in Chhattisgarh?',
    answer: 'Under the PM Surya Ghar Muft Bijli Yojana in Chhattisgarh: 1 kW gets ₹30,000 subsidy; 2 kW gets ₹60,000 subsidy; and 3 kW to 10 kW systems receive the maximum subsidy of ₹78,000. Rejoy Solar processes all PM Surya Ghar portal paperwork and CREDA approvals for you.',
  },
  {
    id: 'faq-2',
    category: 'Costs & Savings',
    question: 'How much can I save on my CSPDCL electricity bill with Rejoy Solar?',
    answer: 'A 3kW rooftop solar system in Chhattisgarh produces approximately 360-400 units of clean electricity per month. At average CSPDCL tariffs (~₹6 to ₹7.5 per unit), you save between ₹2,500 and ₹3,500 every month, recovering your investment in under 3 years.',
  },
  {
    id: 'faq-3',
    category: 'CSPDCL Net Metering',
    question: 'What is net metering and how does CSPDCL approval work?',
    answer: 'CSPDCL Net Metering allows excess solar power produced during daytime to be exported to the Chhattisgarh state electricity grid. At night, you draw power from the grid. CSPDCL adjusts exported units against consumed units in your monthly bill. Rejoy Solar handles 100% of the CSPDCL net meter application and meter installation.',
  },
  {
    id: 'faq-4',
    category: 'Installation & CREDA',
    question: 'Is Rejoy Solar Power an approved CREDA vendor in Chhattisgarh?',
    answer: 'Yes! Rejoy Solar Power Private Limited is an empaneled and registered solar EPC vendor under CREDA (Chhattisgarh State Renewable Energy Development Agency) and the National PM Surya Ghar portal.',
  },
  {
    id: 'faq-5',
    category: 'Solar Loans & EMI',
    question: 'Can I get a solar loan to finance my rooftop system?',
    answer: 'Yes! Nationalized banks like State Bank of India (SBI Surya Ghar Loan), Canara Bank, and Bank of Baroda offer solar loans at collateral-free low interest rates (~7% to 8.5% p.a.) with tenure up to 7 years. The monthly EMI is often lower than your monthly electricity savings!',
  },
];

export const SUBSIDY_DATABASE: Record<string, SubsidyInfo> = {
  Chhattisgarh: {
    state: 'Chhattisgarh (PM Surya Ghar & CREDA)',
    capacityLimitKw: 10,
    subsidyRatePerKw: 26000,
    maxSubsidyAmount: 78000,
    eligibility: ['Residential House Owner in Chhattisgarh', 'CSPDCL Electricity Connection Holder', 'Rooftop Ownership or Consent'],
    documentsRequired: ['CSPDCL Recent Electricity Bill', 'Aadhaar Card of Consumer', 'Bank Passbook / Cancelled Cheque', 'Rooftop Photo & Land Proof'],
    processSteps: ['Register on PM Surya Ghar Portal', 'Select Rejoy Solar Power as Empaneled Vendor', 'Site Technical Survey & CSPDCL Net Meter Approval', 'Installation of Tier-1 DCR Panels', 'Commissioning & Direct Bank Transfer of ₹78,000'],
    officialPortalUrl: 'https://pmsuryaghar.gov.in',
  },
  India: {
    state: 'India (National PM Surya Ghar Scheme)',
    capacityLimitKw: 3,
    subsidyRatePerKw: 26000,
    maxSubsidyAmount: 78000,
    eligibility: ['Residential House Owner', 'DISCOM Electricity Connection in Name', 'Grid-tied Rooftop Installation'],
    documentsRequired: ['Aadhaar Card', 'Recent Electricity Bill', 'Bank Passbook / Cancelled Cheque', 'Rooftop Photo'],
    processSteps: ['Register on PM Surya Ghar National Portal', 'Choose Rejoy Solar Power as Certified Vendor', 'Engineering Inspection & Installation', 'Net Metering Commissioning', 'Direct Bank Transfer of ₹78,000'],
    officialPortalUrl: 'https://pmsuryaghar.gov.in',
  },
};

export const BLOG_ARTICLES: BlogPostItem[] = [
  {
    id: 'b1',
    title: 'The Complete 2026 Guide to Solar Tax Credits, Government Subsidies, and Net Metering',
    slug: '2026-guide-solar-subsidies-tax-credits',
    category: 'Government Policies',
    excerpt: 'Learn how to claim up to 40% government subsidy and federal clean energy tax credits for your residential or commercial solar installation.',
    snippet: 'Learn how to claim up to 40% government subsidy and federal clean energy tax credits for your residential or commercial solar installation.',
    content: 'Solar energy adoption has accelerated in 2026 thanks to expanded government tax incentives, streamlined net-metering laws, and declining lithium battery prices...',
    date: 'July 18, 2026',
    author: 'Elena Vance, Senior Solar Policy Analyst',
    readTime: '6 min read',
    imageUrl: imgResidential,
    image: imgResidential,
    tags: ['Solar Subsidy', 'Net Metering', 'Tax Credits', '2026 Solar Guide'],
  },
  {
    id: 'b2',
    title: 'Bifacial Solar Panels vs Monofacial Panels: Which Yields Higher ROI for Commercial Rooftops?',
    slug: 'bifacial-vs-monofacial-solar-panels-roi',
    category: 'Technology & Innovation',
    excerpt: 'Bifacial solar technology absorbs light from both front and rear surfaces, boosting energy generation by up to 28% on reflective roof surfaces.',
    snippet: 'Bifacial solar technology absorbs light from both front and rear surfaces, boosting energy generation by up to 28% on reflective roof surfaces.',
    content: 'When planning a commercial or industrial rooftop solar power plant, selecting panel architecture directly impacts your 25-year levelized cost of energy (LCOE)...',
    date: 'June 30, 2026',
    author: 'Dr. Rahul Sharma, Chief Solar Engineer',
    readTime: '8 min read',
    imageUrl: imgCommercial,
    image: imgCommercial,
    tags: ['Bifacial Solar', 'Solar Panel Tech', 'Commercial ROI', 'LCOE'],
  },
  {
    id: 'b3',
    title: 'How Lithium LFP Smart Battery Storage Enables 24/7 Off-Grid Power & Peak Tariff Shaving',
    slug: 'lithium-lfp-battery-storage-guide',
    category: 'Energy Storage',
    excerpt: 'Explore how modern high-voltage LFP batteries integrate with micro-inverters to protect your property against outages and eliminate peak grid pricing.',
    snippet: 'Explore how modern high-voltage LFP batteries integrate with micro-inverters to protect your property against outages and eliminate peak grid pricing.',
    content: 'Energy storage is no longer just a backup luxury—it is a core pillar of modern smart energy management...',
    date: 'May 14, 2026',
    author: 'Sarah Lin, Battery Systems Architect',
    readTime: '5 min read',
    imageUrl: imgTechBattery,
    image: imgTechBattery,
    tags: ['LFP Battery', 'Off-Grid Solar', 'Peak Shaving', 'Energy Independence'],
  },
];

export const BLOG_POSTS = BLOG_ARTICLES;

export const CAREERS_LIST: CareerItem[] = [
  {
    id: 'c1',
    title: 'Senior Solar EPC Project Engineer',
    department: 'Engineering & Construction',
    location: 'California, USA / Hybrid',
    type: 'Full-time',
    experience: '5+ Years',
    description: 'Lead technical design, structural simulation, and grid interconnection for megawatt-scale industrial solar plants.',
    responsibilities: [
      'Perform 3D CAD solar layout modeling and shadow analysis',
      'Manage DISCOM grid liaisoning and high-voltage substation connections',
      'Ensure strict OSHA and IEC electrical safety compliance',
    ],
    requirements: [
      'B.S. in Electrical, Mechanical, or Renewable Energy Engineering',
      'NABCEP / Certified Solar Professional License',
      'Proficiency in Helioscope, PVSyst, and AutoCAD',
    ],
  },
  {
    id: 'c2',
    title: 'AI Energy Data Analyst',
    department: 'Technology & Software',
    location: 'Remote / California Hub',
    type: 'Full-time',
    experience: '3+ Years',
    description: 'Develop predictive AI algorithms for solar generation forecasting and IoT battery storage optimization.',
    responsibilities: [
      'Build machine learning models analyzing solar inverter IoT streams',
      'Optimize energy arbitrage algorithms for smart batteries',
      'Integrate LLM API workflows into client energy management dashboards',
    ],
    requirements: [
      'Degree in Computer Science, Data Science, or Mathematics',
      'Strong Python, TypeScript, and Time Series Forecasting experience',
      'Familiarity with IoT MQTT protocols and clean energy metrics',
    ],
  },
];

export const MOCK_CUSTOMER_PORTAL: CustomerDashboardData = {
  customerId: 'RJS-884920',
  clientName: 'Rahul Sharma',
  systemCapacityKw: 10,
  installationAddress: 'Plot 42, Risali Sector, Bhilai, Chhattisgarh',
  currentStage: 'Installation',
  liveOutputKw: 7.82,
  todayGenKwh: 42.6,
  monthGenKwh: 1240,
  totalGenMwh: 18.4,
  totalSavings: 184500,
  stages: [
    { stage: '1', title: 'Site Survey & Engineering CAD', description: '3D Roof drone scan and structural audit completed.', status: 'Completed', targetDate: 'Jul 10, 2026', assignedEngineer: 'Marcus Vance' },
    { stage: '2', title: 'DISCOM Grid Sanction', description: 'Net metering net load approval received.', status: 'Completed', targetDate: 'Jul 14, 2026', assignedEngineer: 'David Chen' },
    { stage: '3', title: 'Tier-1 Hardware Dispatch', description: 'Bifacial 550W panels and 10kW hybrid inverter shipped.', status: 'Completed', targetDate: 'Jul 20, 2026', assignedEngineer: 'Dispatch Logistics' },
    { stage: '4', title: 'Rooftop Mounting & Cabling', description: 'Aluminum structural mounting & IP67 DC wiring on roof.', status: 'In Progress', targetDate: 'Jul 26, 2026', assignedEngineer: 'John Miller' },
    { stage: '5', title: 'Inverter & Net Meter Testing', description: 'Bi-directional meter installation and safety testing.', status: 'Upcoming', targetDate: 'Jul 29, 2026', assignedEngineer: 'Sarah Jenkins' },
    { stage: '6', title: 'Commissioning & App Sync', description: 'Official grid turn-on and remote IoT monitoring sync.', status: 'Upcoming', targetDate: 'Aug 01, 2026', assignedEngineer: 'Rejoy Support' },
  ],
  warrantyDetails: {
    panels: '25-Year Linear Power Output Warranty (Tier-1)',
    inverter: '10-Year On-Site Replacement Warranty',
    workmanship: '5-Year Structural & Waterproofing Guarantee',
  },
  amcStatus: 'Active - Platinum 24/7 Coverage',
};
