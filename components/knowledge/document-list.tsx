import { FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { KnowledgeDocument, DocumentStatus } from "@/types/aicc";

interface DocumentListProps {
  documents: KnowledgeDocument[];
}

const statusVariant: Record<DocumentStatus, "default" | "secondary" | "outline" | "destructive"> = {
  "인덱싱완료": "default",
  "인덱싱중": "secondary",
  "대기": "outline",
  "오류": "destructive",
};

export function DocumentList({ documents }: DocumentListProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>문서명</TableHead>
          <TableHead>형식</TableHead>
          <TableHead>크기</TableHead>
          <TableHead>상태</TableHead>
          <TableHead>인덱싱</TableHead>
          <TableHead className="text-right">청크</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {documents.map((doc) => (
          <TableRow key={doc.id}>
            <TableCell>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{doc.name}</span>
              </div>
            </TableCell>
            <TableCell>
              <Badge variant="outline">{doc.type}</Badge>
            </TableCell>
            <TableCell className="text-muted-foreground">{doc.size}</TableCell>
            <TableCell>
              <Badge variant={statusVariant[doc.status]}>{doc.status}</Badge>
            </TableCell>
            <TableCell className="w-32">
              <Progress value={doc.indexingProgress} className="h-2" />
            </TableCell>
            <TableCell className="text-right">
              {doc.chunks > 0 ? doc.chunks : "-"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
