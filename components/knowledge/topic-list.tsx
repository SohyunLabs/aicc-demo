"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, FileText, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { KnowledgeTopic } from "@/types/aicc";

interface TopicListProps {
  topics: KnowledgeTopic[];
}

export function TopicList({ topics }: TopicListProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="space-y-2">
      {topics.map((topic) => {
        const isExpanded = expandedId === topic.id;
        return (
          <div key={topic.id} className="rounded-lg border">
            <button
              onClick={() => setExpandedId(isExpanded ? null : topic.id)}
              className="flex w-full items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                )}
                <span className="font-medium">{topic.name}</span>
                <Badge variant="secondary" className="text-xs">
                  <FileText className="mr-1 h-3 w-3" />
                  {topic.documentCount}건
                </Badge>
              </div>
              <span className="text-xs text-muted-foreground">
                {topic.lastUpdated}
              </span>
            </button>

            {isExpanded && (
              <div className="border-t px-4 py-3 space-y-2">
                <p className="text-sm text-muted-foreground">
                  {topic.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {topic.keywords.map((keyword) => (
                    <Badge key={keyword} variant="outline" className="text-xs">
                      <Tag className="mr-1 h-3 w-3" />
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
