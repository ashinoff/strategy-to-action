import { PageHeader } from "@/components/shared/PageHeader";
import { TaskCard } from "@/components/shared/TaskCard";
import { strategicPlanCategories } from "@/data/strategicPlanData";
import {
  Target,
  TrendingDown,
  ArrowLeftRight,
  Search,
  FileWarning,
  Cpu,
  Users,
  Plug,
  FileText,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  TrendingDown: <TrendingDown className="h-5 w-5" />,
  ArrowLeftRight: <ArrowLeftRight className="h-5 w-5" />,
  Search: <Search className="h-5 w-5" />,
  FileWarning: <FileWarning className="h-5 w-5" />,
  Cpu: <Cpu className="h-5 w-5" />,
  Users: <Users className="h-5 w-5" />,
  Plug: <Plug className="h-5 w-5" />,
  FileText: <FileText className="h-5 w-5" />,
};

export default function StrategicPlan() {
  return (
    <div className="min-h-full">
      <PageHeader
        title="Стратегический план"
        description="Годовой план определяет ключевые направления деятельности УРРУ: снижение потерь, развитие ИСУ, анализ балансов, работа с НУП/БДП"
        icon={<Target className="h-6 w-6" />}
        badge="Год"
        badgeColor="bg-strategic"
      />

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {strategicPlanCategories.map((category) => (
            <TaskCard
              key={category.id}
              id={category.id}
              title={category.title}
              icon={iconMap[category.icon] || <Target className="h-5 w-5" />}
              description={category.description}
              tasks={category.tasks}
              colorClass="border-l-strategic"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
