import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/PageHeader";
import { StatCard } from "@/components/shared/StatCard";
import {
  Target,
  Calendar,
  Clock,
  BookOpen,
  ArrowRight,
  TrendingDown,
  Users,
  Zap,
  AlertTriangle,
  CheckCircle2,
  ClipboardList,
} from "lucide-react";

const planLevels = [
  {
    id: "strategic",
    title: "Стратегический план",
    period: "Год",
    icon: Target,
    description:
      "Годовые цели и мероприятия: снижение потерь, развитие ИСУ, работа с НУП/БДП",
    color: "bg-strategic",
    textColor: "text-strategic",
    bgLight: "bg-strategic/10",
    link: "/strategic",
    stats: { total: 8, categories: "категорий" },
  },
  {
    id: "tactical",
    title: "Тактический план",
    period: "Месяц",
    icon: Calendar,
    description:
      "Анализ балансов, планирование проверок, взаимодействие с ГП/ЭСК",
    color: "bg-tactical",
    textColor: "text-tactical",
    bgLight: "bg-tactical/10",
    link: "/tactical",
    stats: { total: 9, categories: "разделов" },
  },
  {
    id: "operational",
    title: "Оперативный план",
    period: "День",
    icon: Clock,
    description:
      "Ежедневные задачи: КСП, проверки ПУ, актирование НУП/БДП, работы по ТП",
    color: "bg-operational",
    textColor: "text-operational",
    bgLight: "bg-operational/10",
    link: "/operational",
    stats: { total: 3, categories: "этапа дня" },
  },
];

const quickStats = [
  {
    title: "Снижение потерь",
    value: "—",
    icon: <TrendingDown className="h-5 w-5" />,
    description: "Целевой показатель",
    colorClass: "bg-success/10 text-success",
  },
  {
    title: "Персонал УРРУ",
    value: "—",
    icon: <Users className="h-5 w-5" />,
    description: "Линейный + инженерный",
    colorClass: "bg-primary/10 text-primary",
  },
  {
    title: "Задачи сегодня",
    value: "—",
    icon: <ClipboardList className="h-5 w-5" />,
    description: "Демо-режим",
    colorClass: "bg-tactical/10 text-tactical",
  },
  {
    title: "Приоритетные",
    value: "—",
    icon: <AlertTriangle className="h-5 w-5" />,
    description: "Требуют внимания",
    colorClass: "bg-warning/10 text-warning",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-full">
      <PageHeader
        title="УРРУ Планировщик"
        description="Интерактивная система планирования работ начальника участка развития и реализации услуг"
        icon={<Zap className="h-6 w-6" />}
        badge="Демо"
        badgeColor="bg-accent"
      />

      <div className="container py-8 space-y-8">
        {/* Статистика */}
        <section>
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-muted-foreground" />
            Сводка
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickStats.map((stat) => (
              <StatCard key={stat.title} {...stat} />
            ))}
          </div>
        </section>

        {/* Уровни планирования */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Уровни планирования</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {planLevels.map((level) => (
              <Card
                key={level.id}
                className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className={`h-1 ${level.color}`} />
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div
                      className={`p-3 rounded-xl ${level.bgLight} ${level.textColor}`}
                    >
                      <level.icon className="h-6 w-6" />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${level.bgLight} ${level.textColor}`}
                    >
                      {level.period}
                    </span>
                  </div>
                  <CardTitle className="text-xl mt-4">{level.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {level.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">
                      <span className="font-semibold text-foreground">
                        {level.stats.total}
                      </span>{" "}
                      <span className="text-muted-foreground">
                        {level.stats.categories}
                      </span>
                    </span>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      <Link to={level.link}>
                        Открыть
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Справочник */}
        <section>
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-muted-foreground" />
            Справочник
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                  to="/reference/terms"
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-reference/10 text-reference">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium group-hover:text-primary transition-colors">
                      Термины и определения
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      15 терминов
                    </p>
                  </div>
                </Link>
                <Link
                  to="/reference/normative"
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-reference/10 text-reference">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium group-hover:text-primary transition-colors">
                      Нормативные документы
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      6 документов
                    </p>
                  </div>
                </Link>
                <Link
                  to="/reference/procedures"
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-reference/10 text-reference">
                    <ClipboardList className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium group-hover:text-primary transition-colors">
                      Процедуры и инструкции
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      5 процедур
                    </p>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Информация */}
        <section className="bg-muted/30 rounded-xl p-6 border border-border">
          <h3 className="font-semibold mb-2">О системе</h3>
          <p className="text-sm text-muted-foreground">
            Инструкция стратегического, тактического и оперативного планирования
            деятельности начальника участка развития и реализации услуг (УРРУ).
            Разработана в соответствии с требованиями ПП РФ №442, №354, №861,
            №890 и ФЗ №522.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Демо-версия • Данные не сохраняются
          </p>
        </section>
      </div>
    </div>
  );
}
