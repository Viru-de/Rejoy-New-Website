export type PageType =
  | 'home'
  | 'about'
  | 'residential'
  | 'commercial'
  | 'industrial'
  | 'solar-epc'
  | 'calculator'
  | 'subsidy'
  | 'projects'
  | 'gallery'
  | 'blog'
  | 'faq'
  | 'contact'
  | 'privacy'
  | 'locations'
  | 'sitemap'
  | 'llms';

export type ConsumerType = 'Residential' | 'Commercial' | 'Industrial' | 'Apartment' | 'School' | 'Hospital' | 'Factory';

export interface SolarRecommendationRequest {
  propertyType: ConsumerType;
  billAmount: number;
  unitsConsumed?: number;
  roofArea: number;
  roofType: 'Concrete Flat' | 'Metal Shed' | 'Tiled Slanted' | 'Open Ground';
  city: string;
  provider: string;
}

export interface SolarRecommendationResult {
  propertyType: ConsumerType;
  recommendedKw: number;
  panelsCount: number;
  estRoofNeeded: number;
  inverterSizeKw: number;
  batteryRecommendation: string;
  estAnnualGenKwh: number;
  co2ReductionTons: string;
  estGrossCost: number;
  estSubsidy: number;
  netInvestment: number;
  estAnnualSavings: number;
  est25YrSavings: number;
  paybackYears: string;
  timelineDays: string;
  aiAnalysis: string;
}

export interface CalculatorInputs {
  monthlyBill: number;
  monthlyUnits: number;
  roofArea: number;
  consumerType: ConsumerType;
  city: string;
  includeBattery: boolean;
}

export interface CalculatorOutputs {
  recommendedCapacityKw: number;
  annualGenerationKwh: number;
  annualSavings: number;
  grossCost: number;
  estimatedSubsidy: number;
  netInvestment: number;
  paybackYears: number;
  roiPercent: number;
  savings25Years: number;
  co2TreesEquivalent: number;
}

export interface EMICalculatorInputs {
  projectCost: number;
  downPaymentPercent: number;
  interestRate: number;
  loanTenureYears: number;
  processingFeePercent: number;
}

export interface EMICalculatorOutputs {
  loanAmount: number;
  downPaymentAmount: number;
  monthlyEmi: number;
  totalInterest: number;
  totalPayable: number;
  processingFeeAmount: number;
}

export interface SubsidyInfo {
  state: string;
  capacityLimitKw: number;
  subsidyRatePerKw: number;
  maxSubsidyAmount: number;
  eligibility: string[];
  documentsRequired: string[];
  processSteps: string[];
  officialPortalUrl: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Industrial' | 'Ground Mounted' | 'Government';
  capacityKw: number;
  location: string;
  image: string;
  imageUrl?: string;
  description?: string;
  completionYear: string;
  co2SavedAnnualTons: number;
  annualSavings?: string;
  paybackPeriod?: string;
  clientName: string;
  highlights: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  companyOrLocation: string;
  rating: number;
  comment: string;
  systemSize: string;
  annualSavings: string;
  photoUrl: string;
  verifiedGoogle: boolean;
  date: string;
}

export interface BlogPostItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  snippet?: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  imageUrl?: string;
  tags: string[];
}

export interface CareerItem {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export interface FAQItemData {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface InstallationStageItem {
  stage: string;
  title: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Upcoming';
  targetDate: string;
  assignedEngineer: string;
}

export interface CustomerDashboardData {
  customerId: string;
  clientName: string;
  systemCapacityKw: number;
  installationAddress: string;
  currentStage: string;
  liveOutputKw: number;
  todayGenKwh: number;
  monthGenKwh: number;
  totalGenMwh: number;
  totalSavings: number;
  stages: InstallationStageItem[];
  warrantyDetails: {
    panels: string;
    inverter: string;
    workmanship: string;
  };
  amcStatus: string;
}

export interface LeadFormPayload {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  serviceType: string;
  propertyType: ConsumerType;
  monthlyBill?: string;
  message?: string;
  preferredContact: 'Phone' | 'Email' | 'WhatsApp';
}
