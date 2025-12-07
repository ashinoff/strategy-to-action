import { useState } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { termsData } from "@/data/referenceData";
import { BookOpen, Search } from "lucide-react";

export default function Terms() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTerms = termsData.filter(
    (term) =>
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (term.abbreviation &&
        term.abbreviation.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-full">
      <PageHeader
        title="Термины и определения"
        description="Основные термины и понятия, применяемые в работе УРРУ"
        icon={<BookOpen className="h-6 w-6" />}
      />

      <div className="container py-8 space-y-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Поиск по терминам..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredTerms.map((term) => (
            <Card key={term.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-semibold text-foreground">{term.term}</h3>
                  {term.abbreviation && (
                    <Badge variant="secondary" className="shrink-0">
                      {term.abbreviation}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {term.definition}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              По запросу «{searchQuery}» ничего не найдено
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
