import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Target,
  Calendar,
  Clock,
  BookOpen,
  FileText,
  Scale,
  ClipboardList,
  Zap,
} from "lucide-react";

const planningItems = [
  {
    title: "Обзор",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Стратегический план",
    url: "/strategic",
    icon: Target,
    description: "Год",
  },
  {
    title: "Тактический план",
    url: "/tactical",
    icon: Calendar,
    description: "Месяц",
  },
  {
    title: "Оперативный план",
    url: "/operational",
    icon: Clock,
    description: "День",
  },
];

const referenceItems = [
  {
    title: "Термины и определения",
    url: "/reference/terms",
    icon: BookOpen,
  },
  {
    title: "Нормативные документы",
    url: "/reference/normative",
    icon: Scale,
  },
  {
    title: "Процедуры и инструкции",
    url: "/reference/procedures",
    icon: ClipboardList,
  },
];

export function AppSidebar() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-sidebar-primary flex items-center justify-center">
            <Zap className="h-6 w-6 text-sidebar-primary-foreground" />
          </div>
          <div>
            <h1 className="font-bold text-sidebar-foreground">УРРУ</h1>
            <p className="text-xs text-sidebar-foreground/70">Планировщик</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="scrollbar-thin">
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/50 uppercase text-xs tracking-wider">
            Планирование
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {planningItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    className="transition-colors"
                  >
                    <NavLink to={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <div className="flex-1">
                        <span>{item.title}</span>
                        {item.description && (
                          <span className="ml-2 text-xs opacity-60">
                            ({item.description})
                          </span>
                        )}
                      </div>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/50 uppercase text-xs tracking-wider">
            Справочник
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {referenceItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    className="transition-colors"
                  >
                    <NavLink to={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-sidebar-border">
        <div className="text-xs text-sidebar-foreground/50 text-center">
          <p>ПАО «Россети Кубань»</p>
          <p className="mt-1">Демо-версия</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
