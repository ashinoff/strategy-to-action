import { PageHeader } from "@/components/shared/PageHeader";
import { TaskCard } from "@/components/shared/TaskCard";
import { tacticalPlanSections } from "@/data/tacticalPlanData";
import {
  Calendar,
  BarChart3,
  AlertTriangle,
  ClipboardCheck,
  Handshake,
  Settings,
  MessageSquare,
  Plug,
  Cpu,
  FileText,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  BarChart3: <BarChart3 className="h-5 w-5" />,
  AlertTriangle: <AlertTriangle className="h-5 w-5" />,
  ClipboardCheck: <ClipboardCheck className="h-5 w-5" />,
  Handshake: <Handshake className="h-5 w-5" />,
  Settings: <Settings className="h-5 w-5" />,
  MessageSquare: <MessageSquare className="h-5 w-5" />,
  Plug: <Plug className="h-5 w-5" />,
  Cpu: <Cpu className="h-5 w-5" />,
  FileText: <FileText className="h-5 w-5" />,
};

export default function TacticalPlan() {
  return (
    <div className="min-h-full">
      <PageHeader
        title="Тактический план"
        description="Ежемесячный план мероприятий: анализ балансов, планирование проверок, взаимодействие с ГП/ЭСК, работа с заявками"
        icon={<Calendar className="h-6 w-6" />}
        badge="Месяц"
        badgeColor="bg-tactical"
      />

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {tacticalPlanSections.map((section) => (
            <TaskCard
              key={section.id}
              id={section.id}
              title={section.title}
              icon={iconMap[section.icon] || <Calendar className="h-5 w-5" />}
              description={section.description}
              tasks={section.tasks.map((task) => ({
                ...task,
                deadline: task.deadline,
                description: task.description
                  ? `${task.description}${task.responsible ? ` • ${task.responsible}` : ""}`
                  : task.responsible,
              }))}
              colorClass="border-l-tactical"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
