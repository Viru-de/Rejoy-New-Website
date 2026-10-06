import React, { useEffect } from 'react';
import { PageType } from '../types';
import { COMPANY_DETAILS, FAQ_DATA } from '../data/solarData';

interface SEOHeadAndSchemaProps {
  currentPage: PageType;
}

export const SEOHeadAndSchema: React.FC<SEOHeadAndSchemaProps> = ({ currentPage }) => {
  useEffect(() => {
    // Dynamic Page Titles & Descriptions with Chhattisgarh, CREDA & PM Surya Ghar Location Keywords
    const titleMap: Record<PageType, string> = {
      home: 'Rejoy Solar Power | Best CREDA Approved Solar Rooftop Company in Chhattisgarh (Bhilai, Raipur, Durg)',
      about: 'About Rejoy Solar Power | CREDA Registered Clean Energy Engineers in Chhattisgarh',
      residential: 'Residential Rooftop Solar System in Chhattisgarh | PM Surya Ghar ₹78,000 Subsidy',
      commercial: 'Commercial Rooftop Solar Panel Installation Chhattisgarh | 40% Depreciation Benefits',
      industrial: 'Industrial Megawatt Solar EPC Plants Chhattisgarh | Rejoy Solar Power',
      'solar-epc': 'Turnkey Solar EPC, Battery Storage & O&M Services in Bhilai Raipur Chhattisgarh',
      calculator: 'Solar Calculator Chhattisgarh | Monthly Savings, Net Metering & EMI Estimator',
      subsidy: 'PM Surya Ghar & CREDA Solar Subsidy Portal Chhattisgarh | Live Calculator',
      projects: 'Solar Projects & Case Studies in Chhattisgarh | Bhilai Raipur Bilaspur Korba',
      gallery: 'Solar Installation Drone Photo Gallery | Rejoy Solar Power Chhattisgarh',
      blog: 'Chhattisgarh Clean Energy Blog & 2026 PM Surya Ghar Subsidy Guide',
      faq: 'Chhattisgarh Solar FAQs, CSPDCL Net Metering & CREDA Approvals',
      contact: 'Contact Rejoy Solar Power Risali Bhilai | Schedule Free Site Visit in Chhattisgarh',
      privacy: 'Privacy Policy & Data Security | Rejoy Solar Power Chhattisgarh',
      locations: 'Solar System Installation Locations in Chhattisgarh | Bhilai, Raipur, Durg, Bilaspur, Korba',
      sitemap: 'Sitemap & Navigation Index | Rejoy Solar Power Chhattisgarh',
      llms: 'AI Search Knowledge Index & Generative Engine Optimization (llms.txt) | Rejoy Solar',
    };

    const descMap: Record<PageType, string> = {
      home: 'Rejoy Solar Power is Chhattisgarh’s top CREDA-approved solar EPC company in Risali Bhilai. We deliver PM Surya Ghar rooftop solar, commercial installations, and megawatt solar plants across Bhilai, Durg, Raipur, Bilaspur, Korba, and Rajnandgaon.',
      about: 'Learn about Rejoy Solar Power, Chhattisgarh’s trusted solar EPC engineers with 250+ MW installed projects and CREDA/CSPDCL empanelment.',
      residential: 'Slash electricity bills by up to 90% in Chhattisgarh with PM Surya Ghar ₹78,000 direct subsidy, CSPDCL net metering, and Tier-1 bifacial solar panels.',
      commercial: 'Commercial rooftop solar systems for offices, hospitals, and schools in Raipur, Bhilai, and Bilaspur with 40% accelerated tax depreciation.',
      industrial: 'Turnkey industrial megawatt solar EPC plants in Chhattisgarh for factories, steel plants, and cold storage with sub-3 year ROI.',
      'solar-epc': 'Turnkey Engineering, Procurement, Construction, lithium battery energy storage (BESS), and 24/7 AMC maintenance across Chhattisgarh.',
      calculator: 'Calculate recommended solar kW size, CSPDCL net metering savings, PM Surya Ghar subsidy, and bank EMI breakdown for Chhattisgarh.',
      subsidy: 'Check direct PM Surya Ghar Muft Bijli Yojana subsidy eligibility and CREDA application process in Chhattisgarh.',
      projects: 'Explore completed solar rooftop installations in Bhilai, Durg, Raipur, Bilaspur, Korba, and Rajnandgaon.',
      gallery: 'High-definition aerial drone photography of completed residential and commercial solar rooftops in Chhattisgarh.',
      blog: 'Stay updated with CSPDCL electricity tariffs, CREDA solar policy changes, and PM Surya Ghar application tutorials.',
      faq: 'Expert answers on solar cost in Chhattisgarh, CSPDCL net meter approval timeline, and 25-year panel performance warranties.',
      contact: `Get in touch with Rejoy Solar engineers in Risali Bhilai. Call ${COMPANY_DETAILS.phone} or book a free site survey anywhere in Chhattisgarh.`,
      privacy: 'Privacy policy and data compliance terms for Rejoy Solar Power Pvt. Ltd. Chhattisgarh.',
      locations: 'Explore solar rooftop installation services in Bhilai, Durg, Raipur, Bilaspur, Korba, Rajnandgaon, Jagdalpur, and Raigarh in Chhattisgarh.',
      sitemap: 'Full HTML sitemap and page directory for Rejoy Solar Power Pvt. Ltd., Chhattisgarh.',
      llms: 'Generative Engine Optimization (GEO) knowledge manifest and machine-readable llms.txt specs for AI search engines.',
    };

    document.title = titleMap[currentPage] || titleMap.home;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', descMap[currentPage] || descMap.home);
    }
  }, [currentPage]);

  // JSON-LD Structured Data Schemas
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_DETAILS.name,
    url: 'https://rejoysolarpower.in',
    logo: 'https://crm.rejoysolarpower.com/storage/uploads/logo/logo-dark.png?1785156592',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_DETAILS.phone,
      contactType: 'customer service',
      areaServed: ['Chhattisgarh', 'India'],
      availableLanguage: ['English', 'Hindi'],
    },
  };

  const solarContractorSchema = {
    '@context': 'https://schema.org',
    '@type': 'SolarEnergyContractor',
    name: COMPANY_DETAILS.name,
    image: 'https://crm.rejoysolarpower.com/storage/uploads/logo/logo-dark.png?1785156592',
    telephone: COMPANY_DETAILS.phone,
    email: COMPANY_DETAILS.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_DETAILS.address,
      addressLocality: COMPANY_DETAILS.city,
      addressRegion: COMPANY_DETAILS.state,
      postalCode: COMPANY_DETAILS.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 21.1764,
      longitude: 81.3323,
    },
    areaServed: [
      'Bhilai',
      'Durg',
      'Raipur',
      'Bilaspur',
      'Korba',
      'Rajnandgaon',
      'Jagdalpur',
      'Raigarh',
      'Ambikapur',
      'Dhamtari',
      'Mahasamund',
      'Janjgir-Champa',
      'Kabirdham (Kawardha)',
      'Kanker',
      'Kondagaon',
      'Narayanpur',
      'Dantewada',
      'Sukma',
      'Bijapur',
      'Koriya (Baikunthpur)',
      'Manendragarh-Chirmiri-Bharatpur',
      'Surajpur',
      'Balrampur',
      'Gariaband',
      'Balod',
      'Bemetara',
      'Baloda Bazar',
      'Khairagarh',
      'Sarangarh-Bilaigarh',
      'Mohla-Manpur',
      'Sakti',
      'Mungeli',
      'Gaurela-Pendra-Marwahi',
      'Jashpur',
      'Chhattisgarh',
    ],
    priceRange: '₹₹₹',
    openingHours: 'Mo-Sa 09:30-19:30',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: COMPANY_DETAILS.rating,
      reviewCount: COMPANY_DETAILS.reviewsCount,
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: COMPANY_DETAILS.name,
    url: 'https://rejoysolarpower.in',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://rejoysolarpower.in/sitemap?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_DATA.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([organizationSchema, solarContractorSchema, websiteSchema, faqSchema]),
      }}
    />
  );
};
