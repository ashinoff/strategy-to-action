import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  badge?: string;
  badgeColor?: string;
  children?: React.ReactNode;
}

export function PageHeader({
  title,
  description,
  icon,
  badge,
  badgeColor = "bg-primary",
  children,
}: PageHeaderProps) {
  return (
    <div className="border-b border-border bg-card">
      <div className="container py-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            {icon && (
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                {icon}
              </div>
            )}
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-foreground">{title}</h1>
                {badge && (
                  <span
                    className={cn(
                      "px-2.5 py-0.5 rounded-full text-xs font-medium text-primary-foreground",
                      badgeColor
                    )}
                  >
                    {badge}
                  </span>
                )}
              </div>
              {description && (
                <p className="text-muted-foreground mt-1 max-w-2xl">
                  {description}
                </p>
              )}
            </div>
          </div>
          {children && <div className="flex items-center gap-2">{children}</div>}
        </div>
      </div>
    </div>
  );
}
