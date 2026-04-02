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

export type CallStatus = "진행중" | "대기" | "완료" | "전환" | "AI완결" | "보조해결" | "상담원전환";
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
  // 와이어프레임 확장 필드
  callType?: string; // 문의 유형 (적금 중도해지 등)
  time?: string; // 시각 (10:23 등)
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
  // 와이어프레임 확장 필드
  questionCount?: number; // 질문 수
  lastUsed?: string; // 최근 사용 일시
  relatedDocuments?: string[]; // 관련 문서명
  chunks?: { title: string; content: string }[]; // 관련 문서 청크
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
  recentTransaction?: string; // 최근 거래
  joinDate?: string; // 가입일
  lastConsultation?: string; // 최근 상담 (날짜 + 내용)
}

// 보이스봇 핸드오프 컨텍스트 구조화 데이터
export interface HandoffContext {
  customerIntent: string; // 고객 의도
  questionDetails: string; // 질문 내용
  botResponse: string; // 보이스봇 응답
  incompleteItems: string; // 미완료 항목
  transferReason: string; // 전환 사유
  customerEmotion: string; // 고객 감정 상태
  botCallDuration: string; // 통화 시간(보이스봇)
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
  // 성과 기반 과금 구조
  target: string; // 대상 (중소/SMB, 중견기업, 대기업)
  agentCount: string; // 상담원 규모
  voicebotPrice: string; // 보이스봇 건당 가격
  agentAssistPrice: string; // Agent Assist 건당 가격
  unresolvedPrice: string; // 미해결건 가격
  includes: string[]; // 포함 사항
  minimumCommitment: string; // 월 최소 또는 "별도 협의"
  recommended: boolean;
}
