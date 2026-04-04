"use client";

import type { CustomerInfo, SentimentData } from "@/types/aicc";
import { CustomerInfoCard } from "./customer-info-card";
import { SentimentCard } from "./sentiment-card";

interface CustomerPanelProps {
  customer: CustomerInfo;
  sentiment: SentimentData;
}

export function CustomerPanel({ customer, sentiment }: CustomerPanelProps) {
  return (
    <div className="flex h-full flex-col gap-4">
      <CustomerInfoCard customer={customer} />
      <SentimentCard sentiment={sentiment} />
    </div>
  );
}
