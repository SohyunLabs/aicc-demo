import type { TranscriptMessage, HandoffContext } from "@/types/aicc";
import { HandoffContextCard } from "./handoff-context-card";
import { TranscriptCard } from "./transcript-card";

interface TranscriptPanelProps {
  messages: TranscriptMessage[];
  handoffContext: HandoffContext;
  realtimeKeywords: string[];
}

export function TranscriptPanel({ messages, handoffContext, realtimeKeywords }: TranscriptPanelProps) {
  return (
    <div className="space-y-4">
      <HandoffContextCard handoffContext={handoffContext} realtimeKeywords={realtimeKeywords} />
      <TranscriptCard messages={messages} />
    </div>
  );
}
