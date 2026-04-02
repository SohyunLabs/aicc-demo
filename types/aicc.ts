// AICC SaaS 데모 프로토타입 전체 타입 정의

// === 대시보드 ===
export interface AiccKpi {
  resolutionRate: number; // 자동 해결률 (%)
  ahtReduction: number; // 평균 처리시간 감소율 (%)
  csatScore: number; // 고객 만족도 점수
  complianceViolation: number; // 컴플라이언스 위반율 (%)
}

export interface ActivityItem {
  id: string;
  type: "deploy" | "upload" | "alert" | "update";
  title: string;
  description: string;
  timestamp: string; // ISO 8601
}

export interface SystemStatus {
  service: "정상" | "점검중" | "장애";
  responseTime: number; // ms
  activeScenarios: number;
  uptime: number; // %
}

// === 시나리오 빌더 ===
export type NodeType = "start" | "intent" | "response" | "transfer" | "end";

export interface ScenarioNode {
  id: string;
  type: NodeType;
  label: string;
  x: number;
  y: number;
  properties: Record<string, string>;
}

export interface ScenarioEdge {
  id: string;
  from: string;
  to: string;
  label?: string;
}

export interface Scenario {
  id: string;
  name: string;
  status: "활성" | "비활성" | "편집중";
  nodes: ScenarioNode[];
  edges: ScenarioEdge[];
  updatedAt: string;
}

// === 모니터링 ===
export interface MonitoringKpi {
  activeCalls: number;
  avgWaitTime: number; // 초
  resolutionRate: number; // %
  escalationRate: number; // %
}

export type CallStatus = "진행중" | "대기" | "완료" | "전환";
export type SentimentType = "긍정" | "중립" | "부정";

export interface CallRecord {
  id: string;
  customerName: string;
  phoneNumber: string;
  scenario: string;
  status: CallStatus;
  sentiment: SentimentType;
  duration: number; // 초
  startedAt: string;
}

// === 지식 관리 ===
export type DocumentStatus = "인덱싱완료" | "인덱싱중" | "대기" | "오류";

export interface KnowledgeDocument {
  id: string;
  name: string;
  type: "PDF" | "DOCX" | "TXT" | "CSV";
  size: string;
  status: DocumentStatus;
  indexingProgress: number; // 0-100
  uploadedAt: string;
  chunks: number;
}

export interface KnowledgeTopic {
  id: string;
  name: string;
  documentCount: number;
  description: string;
  keywords: string[];
  lastUpdated: string;
}

// === 설정 ===
export interface TenantSettings {
  companyName: string;
  industry: string;
  timezone: string;
  language: string;
}

export interface UserRecord {
  id: string;
  name: string;
  email: string;
  role: "관리자" | "운영자" | "상담원";
  status: "활성" | "비활성";
  lastLogin: string;
}

export interface ApiKey {
  id: string;
  name: string;
  key: string; // 마스킹된 키
  createdAt: string;
  lastUsed: string;
  status: "활성" | "비활성";
}

export interface BillingPlan {
  name: string;
  price: number; // 월 (만원)
  callsIncluded: number;
  features: string[];
  current: boolean;
}

// === Agent Assist ===
export interface TranscriptMessage {
  id: string;
  speaker: "고객" | "상담원" | "봇";
  text: string;
  timestamp: string;
  keywords?: string[];
}

export interface RecommendedResponse {
  id: string;
  text: string;
  confidence: number; // 0-100
  source: string;
  category: string;
}

export interface ComplianceAlert {
  id: string;
  type: "warning" | "critical";
  message: string;
  regulation: string;
}

export interface CustomerInfo {
  name: string;
  phone: string;
  tier: "VIP" | "일반" | "신규";
  previousCalls: number;
  lastCallDate: string;
  issues: string[];
}

export interface SentimentData {
  current: number; // -1 ~ 1
  trend: { time: string; value: number }[];
}

// === 온보딩 ===
export interface OnboardingProfile {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
}

export interface IndustryTemplate {
  id: string;
  name: string;
  icon: string;
  description: string;
  scenarios: number;
  features: string[];
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  unit: string;
  features: string[];
  recommended: boolean;
}
