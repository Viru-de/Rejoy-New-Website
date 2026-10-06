import React, { useState } from 'react';
import { PageType } from '../types';
import { COMPANY_DETAILS } from '../data/solarData';
import { MapPin, Phone, ShieldCheck, Sun, Zap, Building2, CheckCircle2, ArrowRight, Calculator, FileText, Search } from 'lucide-react';

interface LocationsPageProps {
  onNavigate: (page: PageType) => void;
  onOpenQuoteModal: () => void;
}

interface CityInfo {
  name: string;
  district: string;
  solarRadiation: string;
  avgSunHours: string;
  installationsCount: string;
  mwCapacity: string;
  discomOffice: string;
  credaOffice: string;
  popularAreas: string[];
  description: string;
  subsidyHighlights: string;
}

const CHHATTISGARH_CITIES: CityInfo[] = [
  {
    name: 'Bhilai',
    district: 'Durg',
    solarRadiation: '5.6 kWh/m²/day',
    avgSunHours: '300+ days/year',
    installationsCount: '850+ Homes & Commercial',
    mwCapacity: '42+ MW Installed',
    discomOffice: 'CSPDCL Bhilai City Division, Sector 1 & Risali',
    credaOffice: 'CREDA District Office, Civil Lines, Durg',
    popularAreas: ['Risali', 'Smriti Nagar', 'Nehru Nagar', 'Civic Center', 'Sector 1-10', 'Junwani', 'Hudco', 'Kumhari'],
    description: 'Bhilai is Rejoy Solar Power Headquarters. As the industrial steel hub of Chhattisgarh, Bhilai offers ideal solar irradiance for rooftop residential and large-scale industrial captive power plants.',
    subsidyHighlights: 'Full PM Surya Ghar subsidy up to ₹78,000 with CREDA fast-track net metering sanction in 15 days.',
  },
  {
    name: 'Raipur',
    district: 'Raipur',
    solarRadiation: '5.8 kWh/m²/day',
    avgSunHours: '310 days/year',
    installationsCount: '1,200+ Projects',
    mwCapacity: '68+ MW Installed',
    discomOffice: 'CSPDCL Head Office, Daganiya & Raipur City West/East',
    credaOffice: 'CREDA Head Office, VIP Road, Raipur',
    popularAreas: ['VIP Road', 'Telibandha', 'Shankar Nagar', 'Naya Raipur (Atal Nagar)', 'Gudhiyari', 'Tatibandh', 'Bhanpuri', 'Devendra Nagar'],
    description: 'Capital city of Chhattisgarh with heavy commercial electricity usage. Rejoy Solar delivers rooftop systems for corporate towers, shopping malls, hospitals, and luxury residential villas in Naya Raipur.',
    subsidyHighlights: 'Immediate CSPDCL bi-directional net meter sync with zero-upfront EMI solar options.',
  },
  {
    name: 'Durg',
    district: 'Durg',
    solarRadiation: '5.5 kWh/m²/day',
    avgSunHours: '298 days/year',
    installationsCount: '520+ Projects',
    mwCapacity: '28+ MW Installed',
    discomOffice: 'CSPDCL Durg Circle, Station Road',
    credaOffice: 'CREDA Durg Office, Collectorate Premises',
    popularAreas: ['Padmanabhpur', 'Durg City', 'Ganj Para', 'Pulgaon', 'Borsi', 'Utai Road'],
    description: 'Historical district center with high residential density and agricultural solar requirements. Our Durg teams handle domestic rooftop and solar pump installations.',
    subsidyHighlights: 'Special CREDA rural & urban rooftop incentive processing with complete paperwork support.',
  },
  {
    name: 'Bilaspur',
    district: 'Bilaspur',
    solarRadiation: '5.7 kWh/m²/day',
    avgSunHours: '305 days/year',
    installationsCount: '410+ Projects',
    mwCapacity: '35+ MW Installed',
    discomOffice: 'CSPDCL Bilaspur Division, Vyapar Vihar',
    credaOffice: 'CREDA Bilaspur Office, Old High Court Road',
    popularAreas: ['Vyapar Vihar', 'Link Road', 'Mangla', 'Rajendra Nagar', 'Sirgitti Industrial Area', 'Tifra', 'Torwa'],
    description: 'Major railway and industrial hub in North Chhattisgarh. Rejoy Solar powers Sirgitti industrial plants and residential colonies across Bilaspur.',
    subsidyHighlights: '40% Accelerated Tax Depreciation benefits for commercial establishments in Sirgitti & Tifra.',
  },
  {
    name: 'Korba',
    district: 'Korba',
    solarRadiation: '5.4 kWh/m²/day',
    avgSunHours: '290 days/year',
    installationsCount: '310+ Projects',
    mwCapacity: '45+ MW Installed',
    discomOffice: 'CSPDCL Korba Division, CSEB Colony',
    credaOffice: 'CREDA Korba Office, Collectorate Annexe',
    popularAreas: ['Transport Nagar', 'NTPC Township', 'BALCO Nagar', 'CSEB Colony', 'Katghora', 'Pali'],
    description: 'Power Capital of Chhattisgarh. Businesses in Korba transition to captive solar generation to cut energy costs and meet corporate sustainability ESG targets.',
    subsidyHighlights: 'Heavy-duty industrial solar EPC with customized anti-dust & coal-ash resistant module coatings.',
  },
  {
    name: 'Rajnandgaon',
    district: 'Rajnandgaon',
    solarRadiation: '5.6 kWh/m²/day',
    avgSunHours: '300 days/year',
    installationsCount: '280+ Projects',
    mwCapacity: '22+ MW Installed',
    discomOffice: 'CSPDCL Rajnandgaon Division, G.T. Road',
    credaOffice: 'CREDA District Office, Rajnandgaon',
    popularAreas: ['G.T. Road', 'Industrial Area', 'Dongargarh Road', 'Kaurinbhatha', 'Lakholi'],
    description: 'Key agricultural and rice-milling center. Rejoy Solar provides high-efficiency solar EPC for agro-processing units, cold storage, and residential complexes.',
    subsidyHighlights: 'Integrated agricultural solar pumps & rooftop solar combinations under PM-KUSUM & PM Surya Ghar.',
  },
  {
    name: 'Jagdalpur',
    district: 'Bastar',
    solarRadiation: '5.9 kWh/m²/day',
    avgSunHours: '315 days/year',
    installationsCount: '190+ Projects',
    mwCapacity: '18+ MW Installed',
    discomOffice: 'CSPDCL Jagdalpur Division, Dharampura',
    credaOffice: 'CREDA Bastar Division, Collectorate Campus',
    popularAreas: ['Geedam Road', 'Dharampura', 'Maharani Ward', 'Kumrawand', 'Nagarnar'],
    description: 'Primary commercial hub of South Chhattisgarh (Bastar region). High solar peak hours enable maximum daily kWh yield per panel.',
    subsidyHighlights: 'Off-grid hybrid solar with lithium battery backup for uninterrupted power in Bastar region.',
  },
  {
    name: 'Raigarh',
    district: 'Raigarh',
    solarRadiation: '5.6 kWh/m²/day',
    avgSunHours: '295 days/year',
    installationsCount: '240+ Projects',
    mwCapacity: '50+ MW Installed',
    discomOffice: 'CSPDCL Raigarh Division, Dhimrapur',
    credaOffice: 'CREDA Raigarh Office, TV Tower Road',
    popularAreas: ['Dhimrapur', 'Jindal Industrial Park', 'Boirdad', 'Kirodimal Nagar', 'Gharghoda'],
    description: 'Industrial heavyweights and steel mills in Raigarh rely on Rejoy Solar for megawatt-scale rooftop and ground-mounted solar installations.',
    subsidyHighlights: 'Sub-3 year ROI with 40% accelerated tax depreciation for Raigarh steel & power industries.',
  },
  {
    name: 'Ambikapur',
    district: 'Surguja',
    solarRadiation: '5.5 kWh/m²/day',
    avgSunHours: '295 days/year',
    installationsCount: '160+ Projects',
    mwCapacity: '12+ MW Installed',
    discomOffice: 'CSPDCL Ambikapur Division, School Road',
    credaOffice: 'CREDA Surguja Division, Collectorate Campus',
    popularAreas: ['Ring Road', 'Manendragarh Road', 'Kedarpur', 'Namnakala', 'Sainik School Road'],
    description: 'Gateway to North Chhattisgarh and Surguja region. Rejoy Solar delivers residential rooftop solar and eco-tourism hospitality solar power plants.',
    subsidyHighlights: 'Full PM Surya Ghar subsidy with expert cold-weather resistant panel framing.',
  },
  {
    name: 'Dhamtari',
    district: 'Dhamtari',
    solarRadiation: '5.7 kWh/m²/day',
    avgSunHours: '305 days/year',
    installationsCount: '175+ Projects',
    mwCapacity: '14+ MW Installed',
    discomOffice: 'CSPDCL Dhamtari Division, Civil Lines',
    credaOffice: 'CREDA Dhamtari Office, Collectorate premises',
    popularAreas: ['Sihawa Road', 'Gole Bazar', 'Rudri', 'Kurud', 'Nagri'],
    description: 'Rice bowl and irrigation hub of Central Chhattisgarh. Rejoy Solar supplies rooftop solar for commercial rice mills and residential households.',
    subsidyHighlights: 'Combined solar water pumping and rooftop solar Net Metering solutions.',
  },
  {
    name: 'Mahasamund',
    district: 'Mahasamund',
    solarRadiation: '5.7 kWh/m²/day',
    avgSunHours: '302 days/year',
    installationsCount: '150+ Projects',
    mwCapacity: '11+ MW Installed',
    discomOffice: 'CSPDCL Mahasamund Division, NH-53',
    credaOffice: 'CREDA Mahasamund Office, District HQ',
    popularAreas: ['Tumgaon Road', 'Pithora', 'Saraipali', 'Bagbahara', 'Basna'],
    description: 'Strategic district connecting Chhattisgarh and Odisha. Rapid adoption of PM Surya Ghar rooftop solar systems in urban Mahasamund.',
    subsidyHighlights: 'Fast-track CSPDCL bi-directional meter installation and bank financing support.',
  },
  {
    name: 'Janjgir & Champa',
    district: 'Janjgir-Champa',
    solarRadiation: '5.6 kWh/m²/day',
    avgSunHours: '300 days/year',
    installationsCount: '210+ Projects',
    mwCapacity: '25+ MW Installed',
    discomOffice: 'CSPDCL Janjgir Division, Kutchery Chowk',
    credaOffice: 'CREDA Janjgir Office, Collectorate Campus',
    popularAreas: ['Champa Industrial Area', 'Janjgir Town', 'Akaltara', 'Nawa Garh', 'Pamgarh'],
    description: 'Major thermal power & weaving hub in Chhattisgarh. Rejoy Solar installs commercial rooftop solar for spinning mills, schools, and homes.',
    subsidyHighlights: 'CREDA net metering with 100% direct bank subsidy transfer up to ₹78,000.',
  },
  {
    name: 'Kawardha',
    district: 'Kabirdham',
    solarRadiation: '5.6 kWh/m²/day',
    avgSunHours: '300 days/year',
    installationsCount: '120+ Projects',
    mwCapacity: '9+ MW Installed',
    discomOffice: 'CSPDCL Kawardha Division, Raipur Road',
    credaOffice: 'CREDA Kabirdham Office, Collectorate premises',
    popularAreas: ['Kawardha Town', 'Pandariya', 'Bodla', 'Sahaspur Lohara'],
    description: 'Sugar mill and agricultural zone at the Maikal hills border. Rejoy Solar powers rural sugarcane processing and domestic rooftops.',
    subsidyHighlights: 'PM Surya Ghar subsidies with CREDA certified solar structure durability.',
  },
  {
    name: 'Kanker',
    district: 'North Bastar Kanker',
    solarRadiation: '5.8 kWh/m²/day',
    avgSunHours: '310 days/year',
    installationsCount: '110+ Projects',
    mwCapacity: '8+ MW Installed',
    discomOffice: 'CSPDCL Kanker Division, NH-30',
    credaOffice: 'CREDA Kanker Office, District HQ',
    popularAreas: ['Kanker Town', 'Charama', 'Bhanupratappur', 'Antagarh', 'Pakhanjur'],
    description: 'Gateway to Bastar with rich sunshine. Rejoy Solar installs hybrid solar systems for government institutions, banks, and homes.',
    subsidyHighlights: 'Hybrid battery backup solutions with PM Surya Ghar subsidy integration.',
  },
  {
    name: 'Kondagaon',
    district: 'Kondagaon',
    solarRadiation: '5.8 kWh/m²/day',
    avgSunHours: '310 days/year',
    installationsCount: '95+ Projects',
    mwCapacity: '7+ MW Installed',
    discomOffice: 'CSPDCL Kondagaon Division, NH-30',
    credaOffice: 'CREDA Kondagaon Office, Civil Lines',
    popularAreas: ['Kondagaon Town', 'Keshkal', 'Farasgaon', 'Bade Rajpur', 'Makarbandha'],
    description: 'Bell metal craft and forest trade center. Clean solar power reduces reliance on diesel generators across Kondagaon.',
    subsidyHighlights: 'High-yield Mono PERC panels with CREDA net metering support.',
  },
  {
    name: 'Narayanpur',
    district: 'Narayanpur',
    solarRadiation: '5.8 kWh/m²/day',
    avgSunHours: '308 days/year',
    installationsCount: '45+ Projects',
    mwCapacity: '4+ MW Installed',
    discomOffice: 'CSPDCL Narayanpur Division',
    credaOffice: 'CREDA Narayanpur Office, Collectorate Premises',
    popularAreas: ['Narayanpur Town', 'Orcha', 'Garhbengal'],
    description: 'District in Abujhmad hill region. Solar power provides critical off-grid & hybrid energy independence for local communities.',
    subsidyHighlights: 'Lithium battery energy storage systems (BESS) with long warranty.',
  },
  {
    name: 'Dantewada',
    district: 'South Bastar Dantewada',
    solarRadiation: '5.9 kWh/m²/day',
    avgSunHours: '315 days/year',
    installationsCount: '80+ Projects',
    mwCapacity: '10+ MW Installed',
    discomOffice: 'CSPDCL Dantewada Division, NMDC Road',
    credaOffice: 'CREDA Dantewada Office, District Collectorate',
    popularAreas: ['Dantewada Town', 'Bacheli', 'Kirandul', 'Geedam'],
    description: 'Mining hub home to NMDC operations. High solar yield makes rooftop solar extremely profitable for commercial and domestic users.',
    subsidyHighlights: 'Heavy duty dust-resistant module frames with CREDA empanelment.',
  },
  {
    name: 'Sukma',
    district: 'Sukma',
    solarRadiation: '5.9 kWh/m²/day',
    avgSunHours: '315 days/year',
    installationsCount: '50+ Projects',
    mwCapacity: '5+ MW Installed',
    discomOffice: 'CSPDCL Sukma Division, NH-30',
    credaOffice: 'CREDA Sukma Office, District Collectorate',
    popularAreas: ['Sukma Town', 'Konta', 'Chhindgarh'],
    description: 'Southernmost district of Chhattisgarh. Solar power serves as the primary reliable energy solution for medical centers and homes.',
    subsidyHighlights: 'Full PM Surya Ghar subsidy with guaranteed 25-year panel performance.',
  },
  {
    name: 'Bijapur',
    district: 'Bijapur',
    solarRadiation: '5.9 kWh/m²/day',
    avgSunHours: '315 days/year',
    installationsCount: '40+ Projects',
    mwCapacity: '4+ MW Installed',
    discomOffice: 'CSPDCL Bijapur Division',
    credaOffice: 'CREDA Bijapur Office, Collectorate Campus',
    popularAreas: ['Bijapur Town', 'Bhopalpatnam', 'Bairamgarh'],
    description: 'Forest & mineral rich district bordering Telangana. Rejoy Solar provides reliable off-grid and on-grid solar power systems.',
    subsidyHighlights: 'Off-grid hybrid solar power with lithium storage.',
  },
  {
    name: 'Baikunthpur',
    district: 'Koriya',
    solarRadiation: '5.5 kWh/m²/day',
    avgSunHours: '295 days/year',
    installationsCount: '85+ Projects',
    mwCapacity: '6+ MW Installed',
    discomOffice: 'CSPDCL Baikunthpur Division',
    credaOffice: 'CREDA Koriya Office, Collectorate Annexe',
    popularAreas: ['Baikunthpur Town', 'Sonhat', 'Charcha Colliery'],
    description: 'Coal mining region in North Chhattisgarh. Transitioning mining townships to rooftop solar power.',
    subsidyHighlights: 'CSPDCL net metering approval with zero hassle paperwork.',
  },
  {
    name: 'Manendragarh',
    district: 'Manendragarh-Chirmiri-Bharatpur',
    solarRadiation: '5.5 kWh/m²/day',
    avgSunHours: '295 days/year',
    installationsCount: '90+ Projects',
    mwCapacity: '7+ MW Installed',
    discomOffice: 'CSPDCL Manendragarh Division',
    credaOffice: 'CREDA MCB District Office',
    popularAreas: ['Manendragarh Town', 'Chirmiri Colliery', 'Bharatpur', 'Khadgawan'],
    description: 'Newly created district with coal mining heritage. Rejoy Solar delivers rooftop solar for commercial complexes and residences.',
    subsidyHighlights: 'PM Surya Ghar ₹78,000 maximum direct bank transfer subsidy.',
  },
  {
    name: 'Surajpur',
    district: 'Surajpur',
    solarRadiation: '5.5 kWh/m²/day',
    avgSunHours: '295 days/year',
    installationsCount: '95+ Projects',
    mwCapacity: '8+ MW Installed',
    discomOffice: 'CSPDCL Surajpur Division',
    credaOffice: 'CREDA Surajpur Office, Collectorate Campus',
    popularAreas: ['Surajpur Town', 'Bishrampur', 'Bhaiyathan', 'Pratappur'],
    description: 'Key agricultural & mining hub in Surguja division. Solar power slashes irrigation and home lighting costs.',
    subsidyHighlights: 'CREDA certified equipment with 25 years warranty.',
  },
  {
    name: 'Balrampur',
    district: 'Balrampur-Ramanujganj',
    solarRadiation: '5.5 kWh/m²/day',
    avgSunHours: '295 days/year',
    installationsCount: '70+ Projects',
    mwCapacity: '5+ MW Installed',
    discomOffice: 'CSPDCL Balrampur Division',
    credaOffice: 'CREDA Balrampur Office, District HQ',
    popularAreas: ['Balrampur Town', 'Ramanujganj', 'Rajpur', 'Wadrafnagar'],
    description: 'Northern border district near UP and Jharkhand. Rejoy Solar powers border trade centers and residential areas.',
    subsidyHighlights: 'PM Surya Ghar Muft Bijli Yojana installation support.',
  },
  {
    name: 'Gariaband',
    district: 'Gariaband',
    solarRadiation: '5.7 kWh/m²/day',
    avgSunHours: '305 days/year',
    installationsCount: '80+ Projects',
    mwCapacity: '6+ MW Installed',
    discomOffice: 'CSPDCL Gariaband Division',
    credaOffice: 'CREDA Gariaband Office, Collectorate Premises',
    popularAreas: ['Gariaband Town', 'Rajim', 'Chhura', 'Fingeshwar', 'Mainpur'],
    description: 'Temple town of Rajim and diamond zone of Gariaband. Rooftop solar helps commercial businesses cut power bills by 90%.',
    subsidyHighlights: 'Quick net meter connection with CSPDCL.',
  },
  {
    name: 'Balod',
    district: 'Balod',
    solarRadiation: '5.6 kWh/m²/day',
    avgSunHours: '300 days/year',
    installationsCount: '130+ Projects',
    mwCapacity: '10+ MW Installed',
    discomOffice: 'CSPDCL Balod Division, Civil Lines',
    credaOffice: 'CREDA Balod Office, Collectorate Campus',
    popularAreas: ['Balod Town', 'Dalli Rajhara', 'Gurur', 'Gunderdehi', 'Dondekala'],
    description: 'Iron ore mining area near Dalli Rajhara. Solar power adoption is surging in domestic and commercial sectors.',
    subsidyHighlights: 'CREDA approved contractor with complete warranty backup.',
  },
  {
    name: 'Bemetara',
    district: 'Bemetara',
    solarRadiation: '5.6 kWh/m²/day',
    avgSunHours: '300 days/year',
    installationsCount: '110+ Projects',
    mwCapacity: '9+ MW Installed',
    discomOffice: 'CSPDCL Bemetara Division',
    credaOffice: 'CREDA Bemetara Office, District HQ',
    popularAreas: ['Bemetara Town', 'Saja', 'Berla', 'Nawagarh'],
    description: 'Agricultural heartland between Raipur and Durg. Rejoy Solar provides rooftop and solar pumping systems.',
    subsidyHighlights: 'PM Surya Ghar ₹78,000 direct bank subsidy.',
  },
  {
    name: 'Baloda Bazar',
    district: 'Baloda Bazar-Bhatapara',
    solarRadiation: '5.7 kWh/m²/day',
    avgSunHours: '305 days/year',
    installationsCount: '190+ Projects',
    mwCapacity: '22+ MW Installed',
    discomOffice: 'CSPDCL Baloda Bazar Division',
    credaOffice: 'CREDA Baloda Bazar Office',
    popularAreas: ['Baloda Bazar Town', 'Bhatapara', 'Simga', 'Kasdol', 'Palari'],
    description: 'Cement capital of India with giant industrial units. Rejoy Solar engineers commercial and heavy industrial solar plants.',
    subsidyHighlights: '40% Tax depreciation for cement and ancillary manufacturing units.',
  },
  {
    name: 'Khairagarh',
    district: 'Khairagarh-Chhuikhadan-Gandai',
    solarRadiation: '5.6 kWh/m²/day',
    avgSunHours: '300 days/year',
    installationsCount: '85+ Projects',
    mwCapacity: '6+ MW Installed',
    discomOffice: 'CSPDCL Khairagarh Division',
    credaOffice: 'CREDA KCG District Office',
    popularAreas: ['Khairagarh Town', 'Chhuikhadan', 'Gandai', 'Salhewara'],
    description: 'Cultural & music university city. Rejoy Solar installs green rooftop solar across academic institutions and homes.',
    subsidyHighlights: 'PM Surya Ghar subsidy with seamless bank EMI options.',
  },
  {
    name: 'Sarangarh',
    district: 'Sarangarh-Bilaigarh',
    solarRadiation: '5.6 kWh/m²/day',
    avgSunHours: '300 days/year',
    installationsCount: '95+ Projects',
    mwCapacity: '7+ MW Installed',
    discomOffice: 'CSPDCL Sarangarh Division',
    credaOffice: 'CREDA Sarangarh Office',
    popularAreas: ['Sarangarh Town', 'Bilaigarh', 'Baramkela'],
    description: 'Royal town and agro-trade area. High adoption of rooftop solar for residential and commercial establishments.',
    subsidyHighlights: 'CREDA approved equipment and fast DISCOM net metering.',
  },
  {
    name: 'Mohla',
    district: 'Mohla-Manpur-Ambagarh Chowki',
    solarRadiation: '5.6 kWh/m²/day',
    avgSunHours: '300 days/year',
    installationsCount: '60+ Projects',
    mwCapacity: '5+ MW Installed',
    discomOffice: 'CSPDCL Mohla Division',
    credaOffice: 'CREDA MMA District Office',
    popularAreas: ['Mohla Town', 'Manpur', 'Ambagarh Chowki'],
    description: 'Border district near Maharashtra. Rejoy Solar equips homes and local businesses with resilient solar energy.',
    subsidyHighlights: 'Hybrid and on-grid solar options with CREDA support.',
  },
  {
    name: 'Sakti',
    district: 'Sakti',
    solarRadiation: '5.6 kWh/m²/day',
    avgSunHours: '300 days/year',
    installationsCount: '100+ Projects',
    mwCapacity: '8+ MW Installed',
    discomOffice: 'CSPDCL Sakti Division',
    credaOffice: 'CREDA Sakti District Office',
    popularAreas: ['Sakti Town', 'Jaijaipur', 'Malkharoda', 'Dabhra'],
    description: 'Historical princely town and commercial center. Rejoy Solar delivers rooftop solar for shops, schools, and homes.',
    subsidyHighlights: 'Up to ₹78,000 direct central subsidy.',
  },
  {
    name: 'Mungeli',
    district: 'Mungeli',
    solarRadiation: '5.6 kWh/m²/day',
    avgSunHours: '300 days/year',
    installationsCount: '90+ Projects',
    mwCapacity: '7+ MW Installed',
    discomOffice: 'CSPDCL Mungeli Division',
    credaOffice: 'CREDA Mungeli Office',
    popularAreas: ['Mungeli Town', 'Lormi', 'Pathariya'],
    description: 'Agricultural hub near Achanakmar biosphere. Solar energy provides clean electricity without grid fluctuations.',
    subsidyHighlights: 'PM Surya Ghar scheme processing.',
  },
  {
    name: 'Pendra',
    district: 'Gaurela-Pendra-Marwahi',
    solarRadiation: '5.5 kWh/m²/day',
    avgSunHours: '295 days/year',
    installationsCount: '75+ Projects',
    mwCapacity: '5+ MW Installed',
    discomOffice: 'CSPDCL Pendra Division',
    credaOffice: 'CREDA GPM District Office',
    popularAreas: ['Gaurela', 'Pendra Town', 'Marwahi'],
    description: 'Scenic hill district near Amarkantak. Rejoy Solar supplies residential and resort rooftop solar power plants.',
    subsidyHighlights: 'High performance mono-facial and bi-facial solar modules.',
  },
  {
    name: 'Jashpur Nagar',
    district: 'Jashpur',
    solarRadiation: '5.5 kWh/m²/day',
    avgSunHours: '295 days/year',
    installationsCount: '80+ Projects',
    mwCapacity: '6+ MW Installed',
    discomOffice: 'CSPDCL Jashpur Division',
    credaOffice: 'CREDA Jashpur Office, Collectorate Campus',
    popularAreas: ['Jashpur Nagar', 'Kunkuri', 'Pathalgaon', 'Bagicha', 'Duldua'],
    description: 'Tea garden and tribal heartland of North-East Chhattisgarh. High solar adoption for schools, hospitals, and homes.',
    subsidyHighlights: 'Full government subsidy support with 25 years performance warranty.',
  }
];

export const LocationsPage: React.FC<LocationsPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [selectedCity, setSelectedCity] = useState<CityInfo>(CHHATTISGARH_CITIES[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCities = CHHATTISGARH_CITIES.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.popularAreas.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="pt-24 sm:pt-28 pb-16 space-y-10 sm:space-y-12">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#0B132B] via-[#0B4F6C] to-[#0B132B] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#FDB813]/20 text-[#FDB813] border border-[#FDB813]/30">
            <MapPin className="w-3.5 h-3.5" />
            CREDA Registered Solar EPC Across Chhattisgarh
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-poppins tracking-tight">
            Solar Rooftop Solutions in Chhattisgarh
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Authorized PM Surya Ghar Channel Partner serving Bhilai, Durg, Raipur, Bilaspur, Korba, Rajnandgaon, Jagdalpur, and Raigarh with guaranteed CSPDCL net metering and ₹78,000 direct subsidy.
          </p>
        </div>
      </section>

      {/* City Selector & Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm w-full md:w-auto">
            <Search className="w-4 h-4 text-[#0B4F6C] shrink-0" />
            <span>Filter Location / District:</span>
          </div>
          <input
            type="text"
            placeholder="Search city (e.g., Bhilai, Raipur, Risali, Smriti Nagar)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-96 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-[#0B4F6C]"
          />
        </div>

        {/* City Grid Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
          {filteredCities.map((city) => (
            <button
              key={city.name}
              onClick={() => setSelectedCity(city)}
              className={`p-3 rounded-2xl text-left border transition ${
                selectedCity.name === city.name
                  ? 'bg-[#0B4F6C] text-white border-[#0B4F6C] shadow-lg scale-102 font-bold'
                  : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-[#0B4F6C]/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold truncate">{city.name}</span>
                <MapPin className="w-3 h-3 shrink-0 opacity-70" />
              </div>
              <span className="text-[10px] block opacity-70 mt-0.5">{city.district} Dist.</span>
            </button>
          ))}
        </div>

        {/* Selected City Detailed Spotlight Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
            <div className="space-y-1">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                District: {selectedCity.district}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-poppins">
                Solar System Installation in {selectedCity.name}, Chhattisgarh
              </h2>
              <p className="text-xs text-slate-500">{selectedCity.description}</p>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="px-5 py-3 rounded-xl bg-[#0B4F6C] hover:bg-[#083c53] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition shrink-0"
            >
              <Zap className="w-4 h-4 text-[#FDB813]" />
              <span>Book Site Survey in {selectedCity.name}</span>
            </button>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40">
              <Sun className="w-5 h-5 text-amber-600 mb-1" />
              <span className="text-[10px] font-bold text-slate-500 uppercase block">Solar Irradiance</span>
              <strong className="text-sm font-bold text-slate-900 dark:text-white">{selectedCity.solarRadiation}</strong>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40">
              <ShieldCheck className="w-5 h-5 text-emerald-600 mb-1" />
              <span className="text-[10px] font-bold text-slate-500 uppercase block">CREDA Projects</span>
              <strong className="text-sm font-bold text-slate-900 dark:text-white">{selectedCity.installationsCount}</strong>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-800/40">
              <Zap className="w-5 h-5 text-blue-600 mb-1" />
              <span className="text-[10px] font-bold text-slate-500 uppercase block">Installed Capacity</span>
              <strong className="text-sm font-bold text-slate-900 dark:text-white">{selectedCity.mwCapacity}</strong>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-200/60 dark:border-purple-800/40">
              <Building2 className="w-5 h-5 text-purple-600 mb-1" />
              <span className="text-[10px] font-bold text-slate-500 uppercase block">Avg Sunny Days</span>
              <strong className="text-sm font-bold text-slate-900 dark:text-white">{selectedCity.avgSunHours}</strong>
            </div>
          </div>

          {/* District Offices & Areas Covered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#0B4F6C]" />
                DISCOM & CREDA Liaisoning Bodies
              </h4>
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <p>
                  <strong className="text-slate-900 dark:text-slate-200">CSPDCL Net Metering Division:</strong><br />
                  {selectedCity.discomOffice}
                </p>
                <p>
                  <strong className="text-slate-900 dark:text-slate-200">CREDA Nodal Office:</strong><br />
                  {selectedCity.credaOffice}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0B4F6C]" />
                Key Localities Covered in {selectedCity.name}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedCity.popularAreas.map((area) => (
                  <span
                    key={area}
                    className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Local Subsidy Callout */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">PM Surya Ghar Subsidy in {selectedCity.name}</p>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">{selectedCity.subsidyHighlights}</p>
              </div>
            </div>

            <button
              onClick={() => onNavigate('calculator')}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shrink-0 transition"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Calculate Savings</span>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0B132B] via-[#0B4F6C] to-[#0B132B] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-black font-poppins">
              Ready to Switch to Solar in Chhattisgarh?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Get an engineer site visit in Bhilai, Durg, Raipur, Bilaspur, or any district within 24 hours.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="px-5 py-3 rounded-xl bg-white text-[#0B4F6C] font-bold text-xs flex items-center gap-2 hover:bg-slate-100 transition shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Call {COMPANY_DETAILS.phone}</span>
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="px-5 py-3 rounded-xl bg-[#FDB813] text-slate-950 font-bold text-xs flex items-center gap-2 hover:bg-amber-400 transition shadow-md"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
