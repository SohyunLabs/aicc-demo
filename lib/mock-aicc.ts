// AICC SaaS 데모 프로토타입 mock 데이터
import type {
  AiccKpi,
  ActivityItem,
  SystemStatus,
  Scenario,
  ScenarioNode,
  ScenarioEdge,
  MonitoringKpi,
  CallRecord,
  KnowledgeDocument,
  KnowledgeTopic,
  TenantSettings,
  UserRecord,
  ApiKey,
  BillingPlan,
  TranscriptMessage,
  RecommendedResponse,
  ComplianceAlert,
  CustomerInfo,
  SentimentData,
  IndustryTemplate,
  PricingTier,
} from "@/types/aicc";

// === 대시보드 ===
export const mockAiccKpi: AiccKpi = {
  resolutionRate: 65,
  ahtReduction: 25,
  csatScore: 83,
  complianceViolation: 0.3,
};

export const mockActivities: ActivityItem[] = [
  {
    id: "act-1",
    type: "deploy",
    title: "보험 상담 시나리오 v2.1 배포",
    description: "자동차 보험 클레임 처리 시나리오가 프로덕션에 배포되었습니다.",
    timestamp: "2026-04-02T09:30:00Z",
  },
  {
    id: "act-2",
    type: "upload",
    title: "금융상품 FAQ 문서 업로드",
    description: "2026년 2분기 금융상품 FAQ 문서 48건이 인덱싱 완료되었습니다.",
    timestamp: "2026-04-02T08:15:00Z",
  },
  {
    id: "act-3",
    type: "alert",
    title: "컴플라이언스 경고 감지",
    description: "개인정보 처리 관련 응답에서 규정 위반 패턴이 발견되었습니다.",
    timestamp: "2026-04-01T17:45:00Z",
  },
  {
    id: "act-4",
    type: "update",
    title: "시스템 업데이트 완료",
    description: "RAG 엔진 v3.2 업데이트가 성공적으로 적용되었습니다.",
    timestamp: "2026-04-01T14:00:00Z",
  },
  {
    id: "act-5",
    type: "deploy",
    title: "이커머스 반품 시나리오 배포",
    description: "반품/교환 처리 시나리오가 스테이징 환경에 배포되었습니다.",
    timestamp: "2026-04-01T11:20:00Z",
  },
];

export const mockSystemStatus: SystemStatus = {
  service: "정상",
  responseTime: 245,
  activeScenarios: 12,
  uptime: 99.7,
};

// === 시나리오 빌더 ===
const scenarioNodes: ScenarioNode[] = [
  { id: "n1", type: "start", label: "시작", x: 80, y: 200, properties: { trigger: "인바운드 콜" } },
  { id: "n2", type: "intent", label: "의도 분류", x: 280, y: 200, properties: { model: "intent-classifier-v3", confidence: "0.85" } },
  { id: "n3", type: "response", label: "보험 안내", x: 480, y: 100, properties: { template: "insurance_guide", source: "KB-보험상품" } },
  { id: "n4", type: "response", label: "클레임 접수", x: 480, y: 300, properties: { template: "claim_form", source: "KB-클레임절차" } },
  { id: "n5", type: "transfer", label: "상담원 전환", x: 680, y: 300, properties: { queue: "보험전문", priority: "높음" } },
  { id: "n6", type: "end", label: "종료", x: 680, y: 100, properties: { survey: "만족도조사" } },
];

const scenarioEdges: ScenarioEdge[] = [
  { id: "e1", from: "n1", to: "n2", label: "" },
  { id: "e2", from: "n2", to: "n3", label: "보험 문의" },
  { id: "e3", from: "n2", to: "n4", label: "클레임" },
  { id: "e4", from: "n3", to: "n6", label: "해결" },
  { id: "e5", from: "n4", to: "n5", label: "복잡 건" },
  { id: "e6", from: "n4", to: "n6", label: "접수 완료" },
];

export const mockScenarios: Scenario[] = [
  {
    id: "sc-1",
    name: "자동차 보험 상담",
    status: "활성",
    nodes: scenarioNodes,
    edges: scenarioEdges,
    updatedAt: "2026-04-02T09:30:00Z",
  },
  {
    id: "sc-2",
    name: "이커머스 반품/교환",
    status: "활성",
    nodes: [],
    edges: [],
    updatedAt: "2026-04-01T11:20:00Z",
  },
  {
    id: "sc-3",
    name: "금융상품 문의",
    status: "편집중",
    nodes: [],
    edges: [],
    updatedAt: "2026-03-28T16:00:00Z",
  },
];

// === 모니터링 ===
export const mockMonitoringKpi: MonitoringKpi = {
  activeCalls: 23,
  avgWaitTime: 12,
  resolutionRate: 72,
  escalationRate: 18,
};

export const mockCallRecords: CallRecord[] = [
  { id: "call-1", customerName: "김지은", phoneNumber: "010-****-1234", scenario: "자동차 보험", status: "진행중", sentiment: "중립", duration: 180, startedAt: "2026-04-02T10:05:00Z" },
  { id: "call-2", customerName: "이승호", phoneNumber: "010-****-5678", scenario: "반품/교환", status: "진행중", sentiment: "부정", duration: 420, startedAt: "2026-04-02T10:01:00Z" },
  { id: "call-3", customerName: "박미영", phoneNumber: "010-****-9012", scenario: "금융상품 문의", status: "대기", sentiment: "긍정", duration: 0, startedAt: "2026-04-02T10:08:00Z" },
  { id: "call-4", customerName: "최현우", phoneNumber: "010-****-3456", scenario: "자동차 보험", status: "완료", sentiment: "긍정", duration: 240, startedAt: "2026-04-02T09:45:00Z" },
  { id: "call-5", customerName: "정다은", phoneNumber: "010-****-7890", scenario: "클레임 접수", status: "전환", sentiment: "부정", duration: 360, startedAt: "2026-04-02T09:50:00Z" },
  { id: "call-6", customerName: "한지민", phoneNumber: "010-****-2345", scenario: "보험 안내", status: "진행중", sentiment: "중립", duration: 90, startedAt: "2026-04-02T10:10:00Z" },
  { id: "call-7", customerName: "윤서준", phoneNumber: "010-****-6789", scenario: "금융상품 문의", status: "완료", sentiment: "긍정", duration: 300, startedAt: "2026-04-02T09:30:00Z" },
  { id: "call-8", customerName: "송민아", phoneNumber: "010-****-0123", scenario: "반품/교환", status: "대기", sentiment: "중립", duration: 0, startedAt: "2026-04-02T10:12:00Z" },
];

// === 지식 관리 ===
export const mockDocuments: KnowledgeDocument[] = [
  { id: "doc-1", name: "자동차보험_약관_2026.pdf", type: "PDF", size: "2.4 MB", status: "인덱싱완료", indexingProgress: 100, uploadedAt: "2026-03-15T10:00:00Z", chunks: 245 },
  { id: "doc-2", name: "금융상품_FAQ_Q2.docx", type: "DOCX", size: "1.1 MB", status: "인덱싱완료", indexingProgress: 100, uploadedAt: "2026-04-02T08:15:00Z", chunks: 128 },
  { id: "doc-3", name: "클레임_처리_절차.pdf", type: "PDF", size: "3.8 MB", status: "인덱싱중", indexingProgress: 67, uploadedAt: "2026-04-02T09:00:00Z", chunks: 0 },
  { id: "doc-4", name: "개인정보_처리방침.pdf", type: "PDF", size: "0.8 MB", status: "인덱싱완료", indexingProgress: 100, uploadedAt: "2026-02-20T14:00:00Z", chunks: 56 },
  { id: "doc-5", name: "반품교환_정책.txt", type: "TXT", size: "0.3 MB", status: "인덱싱완료", indexingProgress: 100, uploadedAt: "2026-03-01T09:00:00Z", chunks: 34 },
  { id: "doc-6", name: "상담원_매뉴얼_v3.docx", type: "DOCX", size: "5.2 MB", status: "대기", indexingProgress: 0, uploadedAt: "2026-04-02T10:00:00Z", chunks: 0 },
];

export const mockTopics: KnowledgeTopic[] = [
  { id: "topic-1", name: "자동차 보험", documentCount: 12, description: "자동차 보험 관련 약관, 보장 범위, 클레임 처리 절차", keywords: ["보험료", "보장범위", "사고접수", "면책사항"], lastUpdated: "2026-04-01" },
  { id: "topic-2", name: "금융 상품", documentCount: 8, description: "예금, 적금, 펀드 등 금융상품 안내 및 가입 절차", keywords: ["이자율", "가입조건", "해지", "수익률"], lastUpdated: "2026-04-02" },
  { id: "topic-3", name: "컴플라이언스", documentCount: 5, description: "금융 규제, 개인정보보호법, 전자금융거래법 관련", keywords: ["개인정보", "동의", "규제준수", "고지의무"], lastUpdated: "2026-03-28" },
  { id: "topic-4", name: "반품/교환", documentCount: 4, description: "이커머스 반품 및 교환 정책, 환불 절차", keywords: ["반품기한", "환불", "교환조건", "배송"], lastUpdated: "2026-03-25" },
];

// === 설정 ===
export const mockTenantSettings: TenantSettings = {
  companyName: "ABC 보험",
  industry: "보험/금융",
  timezone: "Asia/Seoul",
  language: "한국어",
};

export const mockUsers: UserRecord[] = [
  { id: "u-1", name: "김관리", email: "admin@abc-insurance.com", role: "관리자", status: "활성", lastLogin: "2026-04-02T09:00:00Z" },
  { id: "u-2", name: "이운영", email: "ops@abc-insurance.com", role: "운영자", status: "활성", lastLogin: "2026-04-02T08:30:00Z" },
  { id: "u-3", name: "박상담", email: "agent1@abc-insurance.com", role: "상담원", status: "활성", lastLogin: "2026-04-01T17:00:00Z" },
  { id: "u-4", name: "최상담", email: "agent2@abc-insurance.com", role: "상담원", status: "비활성", lastLogin: "2026-03-25T12:00:00Z" },
];

export const mockApiKeys: ApiKey[] = [
  { id: "key-1", name: "프로덕션 API", key: "sk-****-****-abcd", createdAt: "2026-01-15", lastUsed: "2026-04-02T10:00:00Z", status: "활성" },
  { id: "key-2", name: "스테이징 API", key: "sk-****-****-efgh", createdAt: "2026-02-01", lastUsed: "2026-04-01T15:00:00Z", status: "활성" },
  { id: "key-3", name: "테스트 API", key: "sk-****-****-ijkl", createdAt: "2026-03-10", lastUsed: "2026-03-20T09:00:00Z", status: "비활성" },
];

export const mockBillingPlans: BillingPlan[] = [
  { name: "Starter", price: 50, callsIncluded: 1000, features: ["기본 시나리오 3개", "문서 10건", "이메일 지원"], current: false },
  { name: "Professional", price: 150, callsIncluded: 5000, features: ["무제한 시나리오", "문서 100건", "Agent Assist", "우선 지원"], current: true },
  { name: "Enterprise", price: 0, callsIncluded: 0, features: ["맞춤 구성", "무제한 문서", "전담 매니저", "SLA 보장", "온프레미스 옵션"], current: false },
];

// === Agent Assist ===
export const mockTranscript: TranscriptMessage[] = [
  { id: "t-1", speaker: "봇", text: "안녕하세요, ABC 보험 고객센터입니다. 무엇을 도와드릴까요?", timestamp: "10:05:00", keywords: [] },
  { id: "t-2", speaker: "고객", text: "네, 지난주에 접수한 자동차 사고 클레임 진행 상황을 확인하고 싶어서요.", timestamp: "10:05:08", keywords: ["클레임", "자동차 사고"] },
  { id: "t-3", speaker: "봇", text: "클레임 조회를 도와드리겠습니다. 접수 번호나 차량 번호를 말씀해 주세요.", timestamp: "10:05:12", keywords: ["클레임 조회"] },
  { id: "t-4", speaker: "고객", text: "접수 번호가 CLM-2026-0328이에요. 서류는 다 제출했는데 아직 연락이 없어서...", timestamp: "10:05:20", keywords: ["CLM-2026-0328", "서류 제출"] },
  { id: "t-5", speaker: "봇", text: "확인 중입니다. 잠시만 기다려 주세요.", timestamp: "10:05:25", keywords: [] },
  { id: "t-6", speaker: "봇", text: "상담원에게 연결해 드리겠습니다.", timestamp: "10:05:30", keywords: ["상담원 전환"] },
  { id: "t-7", speaker: "상담원", text: "안녕하세요, 김지은 고객님. 클레임 CLM-2026-0328 건 확인하겠습니다.", timestamp: "10:05:45", keywords: [] },
];

export const mockRecommendations: RecommendedResponse[] = [
  {
    id: "rec-1",
    text: "고객님의 클레임 CLM-2026-0328 건은 현재 손해사정 심사 단계에 있습니다. 서류 검토가 완료되어 3영업일 내 결과를 안내드릴 예정입니다.",
    confidence: 92,
    source: "KB-클레임처리절차 §4.2",
    category: "진행 현황",
  },
  {
    id: "rec-2",
    text: "추가 서류가 필요한 경우 별도로 연락드리며, 현재까지 접수된 서류는 모두 정상 확인되었습니다.",
    confidence: 87,
    source: "KB-클레임처리절차 §4.3",
    category: "서류 안내",
  },
  {
    id: "rec-3",
    text: "보상금은 심사 완료 후 등록하신 계좌로 5영업일 이내 입금됩니다.",
    confidence: 78,
    source: "KB-보상지급안내 §2.1",
    category: "보상 안내",
  },
];

export const mockComplianceAlerts: ComplianceAlert[] = [
  {
    id: "ca-1",
    type: "warning",
    message: "클레임 금액 언급 시 '예상' 금액임을 반드시 고지하세요.",
    regulation: "보험업법 제95조의3",
  },
];

export const mockCustomerInfo: CustomerInfo = {
  name: "김지은",
  phone: "010-****-1234",
  tier: "VIP",
  previousCalls: 5,
  lastCallDate: "2026-03-28",
  issues: ["자동차 보험 갱신", "클레임 접수 (CLM-2026-0328)", "보장 범위 문의"],
};

export const mockSentimentData: SentimentData = {
  current: -0.2,
  trend: [
    { time: "10:05", value: 0 },
    { time: "10:06", value: -0.1 },
    { time: "10:07", value: -0.3 },
    { time: "10:08", value: -0.2 },
  ],
};

// === 온보딩 ===
export const mockIndustryTemplates: IndustryTemplate[] = [
  {
    id: "tmpl-1",
    name: "금융/보험",
    icon: "Shield",
    description: "보험 클레임, 금융상품 안내, 계좌 관련 상담에 최적화된 템플릿",
    scenarios: 8,
    features: ["클레임 자동 접수", "상품 비교 안내", "본인 인증 연동", "컴플라이언스 체크"],
  },
  {
    id: "tmpl-2",
    name: "이커머스",
    icon: "ShoppingCart",
    description: "주문 조회, 반품/교환, 배송 추적 등 이커머스 고객 상담 템플릿",
    scenarios: 6,
    features: ["주문 상태 조회", "반품/교환 처리", "배송 추적", "쿠폰/프로모션 안내"],
  },
  {
    id: "tmpl-3",
    name: "통신/IT",
    icon: "Wifi",
    description: "요금제 변경, 기술 지원, 장애 신고 등 통신/IT 서비스 템플릿",
    scenarios: 5,
    features: ["요금제 비교", "기술 문제 해결", "장애 자동 신고", "회선 관리"],
  },
];

export const mockPricingTiers: PricingTier[] = [
  {
    id: "plan-1",
    name: "Starter",
    price: 50,
    unit: "만원/월",
    features: ["월 1,000콜", "기본 시나리오 3개", "문서 10건", "이메일 지원"],
    recommended: false,
  },
  {
    id: "plan-2",
    name: "Professional",
    price: 150,
    unit: "만원/월",
    features: ["월 5,000콜", "무제한 시나리오", "문서 100건", "Agent Assist", "우선 지원", "API 접근"],
    recommended: true,
  },
  {
    id: "plan-3",
    name: "Enterprise",
    price: 0,
    unit: "별도 협의",
    features: ["무제한 콜", "맞춤 구성", "무제한 문서", "전담 매니저", "SLA 보장", "온프레미스 옵션"],
    recommended: false,
  },
];
