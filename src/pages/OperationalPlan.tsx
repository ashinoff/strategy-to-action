import { useState } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { operationalPlanPhases } from "@/data/operationalPlanData";
import { Clock, Sunrise, Sun, Sunset, User } from "lucide-react";
import { cn } from "@/lib/utils";

const phaseIcons: Record<string, React.ReactNode> = {
  Sunrise: <Sunrise className="h-5 w-5" />,
  Sun: <Sun className="h-5 w-5" />,
  Sunset: <Sunset className="h-5 w-5" />,
};

export default function OperationalPlan() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemId: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(itemId)) {
      newChecked.delete(itemId);
    } else {
      newChecked.add(itemId);
    }
    setCheckedItems(newChecked);
  };

  return (
    <div className="min-h-full">
      <PageHeader
        title="Оперативный план"
        description="Ежедневная последовательность действий линейного и инженерного персонала УРРУ"
        icon={<Clock className="h-6 w-6" />}
        badge="День"
        badgeColor="bg-operational"
      />

      <div className="container py-8">
        <Tabs defaultValue="morning" className="space-y-6">
          <TabsList className="grid grid-cols-3 w-full max-w-lg mx-auto">
            {operationalPlanPhases.map((phase) => (
              <TabsTrigger
                key={phase.id}
                value={phase.id}
                className="flex items-center gap-2"
              >
                {phaseIcons[phase.icon]}
                <span className="hidden sm:inline">{phase.title}</span>
                <span className="sm:hidden">{phase.time.split(" - ")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {operationalPlanPhases.map((phase) => (
            <TabsContent key={phase.id} value={phase.id} className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-operational/10 rounded-xl border border-operational/20">
                <div className="p-3 bg-operational/20 rounded-lg text-operational">
                  {phaseIcons[phase.icon]}
                </div>
                <div>
                  <h2 className="font-semibold text-lg">{phase.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    {phase.time} • {phase.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {phase.sections.map((section) => {
                  const sectionItems = section.items;
                  const completedCount = sectionItems.filter((item) =>
                    checkedItems.has(item.id)
                  ).length;

                  return (
                    <Card key={section.id} className="border-l-4 border-l-operational">
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-base">
                            {section.title}
                          </CardTitle>
                          <Badge variant="outline" className="gap-1">
                            <User className="h-3 w-3" />
                            {section.responsible}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-success transition-all duration-300"
                              style={{
                                width: `${(completedCount / sectionItems.length) * 100}%`,
                              }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {completedCount}/{sectionItems.length}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {sectionItems.map((item) => (
                            <div
                              key={item.id}
                              className={cn(
                                "flex items-start gap-3 p-3 rounded-lg transition-colors",
                                checkedItems.has(item.id)
                                  ? "bg-success/10"
                                  : "bg-muted/50 hover:bg-muted"
                              )}
                            >
                              <Checkbox
                                id={item.id}
                                checked={checkedItems.has(item.id)}
                                onCheckedChange={() => toggleItem(item.id)}
                                className="mt-0.5"
                              />
                              <div className="flex-1">
                                <label
                                  htmlFor={item.id}
                                  className={cn(
                                    "text-sm cursor-pointer block",
                                    checkedItems.has(item.id) &&
                                      "line-through text-muted-foreground"
                                  )}
                                >
                                  {item.title}
                                  {item.required && (
                                    <span className="text-destructive ml-1">*</span>
                                  )}
                                </label>
                                {item.description && (
                                  <p className="text-xs text-muted-foreground mt-0.5">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
