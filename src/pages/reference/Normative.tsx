import { useState } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { normativeDocuments } from "@/data/referenceData";
import { Scale, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Normative() {
  const [expandedDoc, setExpandedDoc] = useState<string | null>(null);

  return (
    <div className="min-h-full">
      <PageHeader
        title="Нормативные документы"
        description="Федеральные законы и постановления, регулирующие деятельность УРРУ"
        icon={<Scale className="h-6 w-6" />}
      />

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {normativeDocuments.map((doc) => (
            <Card
              key={doc.id}
              className={cn(
                "transition-all duration-200 cursor-pointer",
                expandedDoc === doc.id ? "ring-2 ring-primary" : "hover:shadow-md"
              )}
              onClick={() =>
                setExpandedDoc(expandedDoc === doc.id ? null : doc.id)
              }
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="outline" className="mb-2">
                      {doc.shortName}
                    </Badge>
                    <CardTitle className="text-base leading-tight">
                      {doc.name}
                    </CardTitle>
                  </div>
                  {expandedDoc === doc.id ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0" />
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {doc.description}
                </p>

                {expandedDoc === doc.id && (
                  <div className="animate-fade-in border-t border-border pt-4">
                    <h4 className="text-sm font-medium mb-3">Ключевые положения:</h4>
                    <ul className="space-y-2">
                      {doc.keyPoints.map((point, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
