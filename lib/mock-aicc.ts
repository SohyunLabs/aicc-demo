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
  HandoffContext,
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
// 와이어프레임: "적금 문의 시나리오 v2.3" — 적금/대출/카드/기타 intent 분기
const scenarioNodes: ScenarioNode[] = [
  { id: "n1", type: "start", label: "인사말", x: 80, y: 200, properties: { trigger: "인바운드 콜", text: "안녕하세요, 뤼튼 금융 고객센터입니다. 무엇을 도와드릴까요?" } },
  { id: "n2", type: "intent", label: "의도 분류", x: 280, y: 200, properties: { model: "intent-classifier-v3", confidence: "0.85" } },
  { id: "n3", type: "response", label: "적금 안내", x: 500, y: 60, properties: { template: "savings_guide", source: "KB-적금상품", text: "적금 상품 안내입니다. 현재 연 4.5% 금리의 자유적금 상품을 추천드립니다.", citation: "KB-적금상품 §2.1" } },
  { id: "n4", type: "response", label: "대출 안내", x: 500, y: 180, properties: { template: "loan_guide", source: "KB-대출상품", text: "대출 상품 안내입니다. 신용대출 한도 및 금리를 확인해 드리겠습니다.", citation: "KB-대출상품 §3.2" } },
  { id: "n5", type: "response", label: "카드 안내", x: 500, y: 300, properties: { template: "card_guide", source: "KB-카드상품", text: "카드 상품 안내입니다. 고객님 소비 패턴에 맞는 카드를 추천해 드리겠습니다.", citation: "KB-카드상품 §1.4" } },
  { id: "n6", type: "transfer", label: "기타 → 상담원", x: 500, y: 420, properties: { queue: "일반상담", priority: "보통" } },
  { id: "n7", type: "end", label: "종료", x: 720, y: 180, properties: { survey: "만족도조사" } },
];

const scenarioEdges: ScenarioEdge[] = [
  { id: "e1", from: "n1", to: "n2", label: "" },
  { id: "e2", from: "n2", to: "n3", label: "적금" },
  { id: "e3", from: "n2", to: "n4", label: "대출" },
  { id: "e4", from: "n2", to: "n5", label: "카드" },
  { id: "e5", from: "n2", to: "n6", label: "기타" },
  { id: "e6", from: "n3", to: "n7", label: "해결" },
  { id: "e7", from: "n4", to: "n7", label: "해결" },
  { id: "e8", from: "n5", to: "n7", label: "해결" },
];

export const mockScenarios: Scenario[] = [
  {
    id: "sc-1",
    name: "적금 문의 시나리오 v2.3",
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

// 와이어프레임 기준 콜 레코드: 시각, 고객, 유형, 상태(AI완결/보조해결/상담원전환/진행중), 소요시간
export const mockCallRecords: CallRecord[] = [
  { id: "call-1", customerName: "김지은", phoneNumber: "010-****-1234", scenario: "적금", status: "AI완결", sentiment: "긍정", duration: 185, startedAt: "2026-04-02T10:23:00Z", callType: "적금 중도해지", time: "10:23" },
  { id: "call-2", customerName: "이승호", phoneNumber: "010-****-5678", scenario: "대출", status: "보조해결", sentiment: "중립", duration: 342, startedAt: "2026-04-02T10:18:00Z", callType: "대출 금리 문의", time: "10:18" },
  { id: "call-3", customerName: "박미영", phoneNumber: "010-****-9012", scenario: "카드", status: "상담원전환", sentiment: "부정", duration: 278, startedAt: "2026-04-02T10:15:00Z", callType: "카드 분실 신고", time: "10:15" },
  { id: "call-4", customerName: "최현우", phoneNumber: "010-****-3456", scenario: "적금", status: "AI완결", sentiment: "긍정", duration: 156, startedAt: "2026-04-02T10:12:00Z", callType: "적금 상품 비교", time: "10:12" },
  { id: "call-5", customerName: "정다은", phoneNumber: "010-****-7890", scenario: "대출", status: "진행중", sentiment: "중립", duration: 90, startedAt: "2026-04-02T10:10:00Z", callType: "대출 한도 조회", time: "10:10" },
  { id: "call-6", customerName: "한지민", phoneNumber: "010-****-2345", scenario: "적금", status: "AI완결", sentiment: "긍정", duration: 203, startedAt: "2026-04-02T10:05:00Z", callType: "적금 만기 안내", time: "10:05" },
  { id: "call-7", customerName: "윤서준", phoneNumber: "010-****-6789", scenario: "카드", status: "보조해결", sentiment: "중립", duration: 412, startedAt: "2026-04-02T09:58:00Z", callType: "카드 혜택 문의", time: "09:58" },
  { id: "call-8", customerName: "송민아", phoneNumber: "010-****-0123", scenario: "적금", status: "AI완결", sentiment: "긍정", duration: 178, startedAt: "2026-04-02T09:50:00Z", callType: "자유적금 가입", time: "09:50" },
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
  { id: "topic-1", name: "자동차 보험", documentCount: 12, description: "자동차 보험 관련 약관, 보장 범위, 클레임 처리 절차", keywords: ["보험료", "보장범위", "사고접수", "면책사항"], lastUpdated: "2026-04-01", questionCount: 342, lastUsed: "2분 전", relatedDocuments: ["자동차보험_약관_2026.pdf", "클레임_처리_절차.pdf"], chunks: [{ title: "보장 범위 안내", content: "대인배상, 대물배상, 자기차량 손해를 포함합니다." }, { title: "클레임 접수 절차", content: "사고 발생 시 48시간 내 접수가 필요합니다." }] },
  { id: "topic-2", name: "금융 상품", documentCount: 8, description: "예금, 적금, 펀드 등 금융상품 안내 및 가입 절차", keywords: ["이자율", "가입조건", "해지", "수익률"], lastUpdated: "2026-04-02", questionCount: 256, lastUsed: "5분 전", relatedDocuments: ["금융상품_FAQ_Q2.docx"], chunks: [{ title: "적금 상품 안내", content: "자유적금은 월 1만원부터 100만원까지 납입 가능, 연 4.5% 금리 적용." }, { title: "해지 안내", content: "중도 해지 시 약정 금리의 50%가 적용됩니다." }] },
  { id: "topic-3", name: "컴플라이언스", documentCount: 5, description: "금융 규제, 개인정보보호법, 전자금융거래법 관련", keywords: ["개인정보", "동의", "규제준수", "고지의무"], lastUpdated: "2026-03-28", questionCount: 89, lastUsed: "1시간 전", relatedDocuments: ["개인정보_처리방침.pdf"], chunks: [{ title: "개인정보 처리 기준", content: "고객 개인정보는 수집 목적 달성 후 즉시 파기합니다." }] },
  { id: "topic-4", name: "반품/교환", documentCount: 4, description: "이커머스 반품 및 교환 정책, 환불 절차", keywords: ["반품기한", "환불", "교환조건", "배송"], lastUpdated: "2026-03-25", questionCount: 178, lastUsed: "15분 전", relatedDocuments: ["반품교환_정책.txt"], chunks: [{ title: "반품 기한 안내", content: "상품 수령일로부터 7일 이내 반품 신청이 가능합니다." }] },
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

// === Agent Assist (와이어프레임 UX-02: 적금 중도해지 시나리오) ===
export const mockHandoffContext: HandoffContext = {
  customerIntent: "적금 중도해지 위약금 문의",
  questionDetails: "중도해지 시 위약금 금액, 원금 보장 여부",
  botResponse: "중도해지 이율(연 0.5%) 안내 완료, 12개월 미만 해지 시 기본 이율 50% 적용 안내",
  incompleteItems: "위약금 구체 금액, 원금 반환 절차",
  transferReason: "위약금 상세 계산 요청 (복합 문의)",
  customerEmotion: "중립 (불안 요소 감지)",
  botCallDuration: "1분 42초",
};

export const mockRealtimeKeywords: string[] = ["적금", "중도해지", "위약금", "이자 손해", "원금"];

export const mockTranscript: TranscriptMessage[] = [
  { id: "t-1", speaker: "고객", text: "적금 중도해지하면 위약금이 얼마나 되나요?", timestamp: "14:32:15", keywords: ["적금", "중도해지", "위약금"] },
  { id: "t-2", speaker: "상담원", text: "네, 고객님. 중도해지 위약금 관련해서 안내드리겠습니다.", timestamp: "14:32:28", keywords: [] },
  { id: "t-3", speaker: "고객", text: "원금은 다 돌려받을 수 있는 거죠?", timestamp: "14:32:45", keywords: ["원금"] },
  { id: "t-4", speaker: "고객", text: "이자 손해가 얼마나 되는지 정확히 알고 싶어요", timestamp: "14:33:02", keywords: ["이자 손해"] },
];

export const mockRecommendations: RecommendedResponse[] = [
  {
    id: "rec-1",
    text: "중도해지 시 약정 이율이 아닌 중도해지 이율이 적용됩니다. 12개월 미만 해지 시 기본 이율의 50%가 적용됩니다.",
    confidence: 92,
    source: "정기적금 약관 제12조",
    category: "중도해지 안내",
  },
];

export const mockComplianceAlerts: ComplianceAlert[] = [
  {
    id: "ca-1",
    type: "critical",
    message: "면책조항 제22조 참조: 면책 기간(90일) 설명 필요",
    regulation: "보험업법 제95조 위반 감지",
  },
];

export const mockCustomerInfo: CustomerInfo = {
  name: "김OO",
  phone: "010-****-1234",
  tier: "VIP",
  previousCalls: 5,
  lastCallDate: "2025-03-28",
  issues: ["이자 문의"],
  recentTransaction: "정기적금 5,000만원",
  joinDate: "2024-03-15",
  lastConsultation: "2025-03-28 (이자 문의)",
};

export const mockSentimentData: SentimentData = {
  current: -0.15,
  trend: [
    { time: "0분", value: -0.4 },
    { time: "1분", value: -0.3 },
    { time: "2분", value: -0.1 },
    { time: "3분", value: 0.1 },
    { time: "4분", value: 0.2 },
  ],
};

// === 온보딩 ===
export const mockIndustryTemplates: IndustryTemplate[] = [
  {
    id: "tmpl-1",
    name: "금융",
    icon: "Shield",
    description: "적금/대출/카드 상담",
    scenarios: 8,
    features: ["출처 추적 응답", "금융상품 약관 검증", "불완전판매 방지"],
  },
  {
    id: "tmpl-2",
    name: "보험",
    icon: "ShoppingCart",
    description: "보험 설계/청구/면책 상담",
    scenarios: 6,
    features: ["설명의무 자동 체크", "면책조항 안내", "약관 출처 추적"],
  },
  {
    id: "tmpl-3",
    name: "이커머스",
    icon: "Wifi",
    description: "주문/배송/반품 상담",
    scenarios: 5,
    features: ["주문 상태 연동", "반품 정책 안내", "FAQ 자동 응답"],
  },
];

export const mockPricingTiers: PricingTier[] = [
  {
    id: "plan-1",
    name: "Starter",
    target: "중소/SMB",
    agentCount: "상담원 10-50명",
    voicebotPrice: "₩2,500/건",
    agentAssistPrice: "₩800/건",
    unresolvedPrice: "₩0",
    includes: ["보이스봇 코어"],
    minimumCommitment: "월 최소 ₩50만",
    recommended: false,
  },
  {
    id: "plan-2",
    name: "Professional",
    target: "중견기업",
    agentCount: "상담원 50-200명",
    voicebotPrice: "₩2,000/건",
    agentAssistPrice: "₩600/건",
    unresolvedPrice: "₩0",
    includes: ["+ 산업 특화 모듈", "+ 컴플라이언스 엔진"],
    minimumCommitment: "월 최소 ₩200만",
    recommended: true,
  },
  {
    id: "plan-3",
    name: "Enterprise",
    target: "대기업",
    agentCount: "상담원 200명+",
    voicebotPrice: "커스텀 (₩1,500~)",
    agentAssistPrice: "커스텀 (₩400~)",
    unresolvedPrice: "₩0",
    includes: ["+ 전용 인프라", "+ SLA 99.95%", "+ 전담 CSM"],
    minimumCommitment: "별도 협의",
    recommended: false,
  },
];
