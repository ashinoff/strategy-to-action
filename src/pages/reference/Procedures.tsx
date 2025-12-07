import { useState } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { proceduresData } from "@/data/referenceData";
import {
  ClipboardList,
  ChevronDown,
  ChevronUp,
  User,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Procedures() {
  const [expandedProcedure, setExpandedProcedure] = useState<string | null>(
    null
  );

  return (
    <div className="min-h-full">
      <PageHeader
        title="Процедуры и инструкции"
        description="Пошаговые руководства для выполнения основных операций УРРУ"
        icon={<ClipboardList className="h-6 w-6" />}
      />

      <div className="container py-8">
        <div className="space-y-4">
          {proceduresData.map((procedure) => (
            <Card
              key={procedure.id}
              className={cn(
                "transition-all duration-200 cursor-pointer",
                expandedProcedure === procedure.id
                  ? "ring-2 ring-primary"
                  : "hover:shadow-md"
              )}
              onClick={() =>
                setExpandedProcedure(
                  expandedProcedure === procedure.id ? null : procedure.id
                )
              }
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{procedure.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {procedure.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline" className="gap-1">
                        <User className="h-3 w-3" />
                        {procedure.responsible}
                      </Badge>
                      {procedure.normativeRef && (
                        <Badge variant="secondary" className="gap-1">
                          <FileText className="h-3 w-3" />
                          {procedure.normativeRef}
                        </Badge>
                      )}
                    </div>
                  </div>
                  {expandedProcedure === procedure.id ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0" />
                  )}
                </div>
              </CardHeader>

              {expandedProcedure === procedure.id && (
                <CardContent className="animate-fade-in border-t border-border pt-4">
                  <h4 className="text-sm font-medium mb-4">
                    Пошаговая инструкция:
                  </h4>
                  <ol className="space-y-3">
                    {procedure.steps.map((step, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-sm text-muted-foreground pt-0.5">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
