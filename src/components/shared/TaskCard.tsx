import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, FileText, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface TaskItem {
  id: string;
  title: string;
  description?: string;
  deadline?: string;
  normativeRef?: string;
  required?: boolean;
}

interface TaskCardProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  tasks: TaskItem[];
  colorClass?: string;
}

export function TaskCard({
  id,
  title,
  icon,
  description,
  tasks,
  colorClass = "border-l-primary",
}: TaskCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [checkedTasks, setCheckedTasks] = useState<Set<string>>(new Set());

  const toggleTask = (taskId: string) => {
    const newChecked = new Set(checkedTasks);
    if (newChecked.has(taskId)) {
      newChecked.delete(taskId);
    } else {
      newChecked.add(taskId);
    }
    setCheckedTasks(newChecked);
  };

  const completedCount = checkedTasks.size;
  const totalCount = tasks.length;
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <Card
      className={cn(
        "border-l-4 transition-all duration-200 hover:shadow-md",
        colorClass
      )}
    >
      <CardHeader
        className="cursor-pointer select-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-primary">{icon}</div>
            <div>
              <CardTitle className="text-base font-semibold">{title}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm font-medium">
                {completedCount}/{totalCount}
              </div>
              <div className="w-16 h-1.5 bg-muted rounded-full mt-1 overflow-hidden">
                <div
                  className="h-full bg-success transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            {isExpanded ? (
              <ChevronUp className="h-5 w-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            )}
          </div>
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="pt-0 animate-fade-in">
          <div className="space-y-3 border-t border-border pt-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className={cn(
                  "flex items-start gap-3 p-3 rounded-lg transition-colors",
                  checkedTasks.has(task.id)
                    ? "bg-success/10"
                    : "bg-muted/50 hover:bg-muted"
                )}
              >
                <Checkbox
                  id={task.id}
                  checked={checkedTasks.has(task.id)}
                  onCheckedChange={() => toggleTask(task.id)}
                  className="mt-0.5"
                />
                <div className="flex-1 min-w-0">
                  <label
                    htmlFor={task.id}
                    className={cn(
                      "text-sm font-medium cursor-pointer block",
                      checkedTasks.has(task.id) && "line-through text-muted-foreground"
                    )}
                  >
                    {task.title}
                    {task.required && (
                      <span className="text-destructive ml-1">*</span>
                    )}
                  </label>
                  {task.description && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {task.description}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {task.deadline && (
                      <Badge variant="outline" className="text-xs gap-1">
                        <Clock className="h-3 w-3" />
                        {task.deadline}
                      </Badge>
                    )}
                    {task.normativeRef && (
                      <Badge variant="secondary" className="text-xs gap-1">
                        <FileText className="h-3 w-3" />
                        {task.normativeRef}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
}
