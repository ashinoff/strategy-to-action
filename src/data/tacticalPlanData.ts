export interface TacticalTask {
  id: string;
  title: string;
  description?: string;
  deadline?: string;
  responsible?: string;
  normativeRef?: string;
}

export interface TacticalSection {
  id: string;
  title: string;
  icon: string;
  description: string;
  tasks: TacticalTask[];
}

export const tacticalPlanSections: TacticalSection[] = [
  {
    id: "balance-analysis",
    title: "Анализ балансов РЭС",
    icon: "BarChart3",
    description: "Ежемесячный расчет небалансов и выявление очагов потерь",
    tasks: [
      {
        id: "bal-1",
        title: "Получение данных по ВЛ 6–10 кВ, ТП и линиям 0,4 кВ",
        deadline: "До 10 числа",
        responsible: "Инженер УРРУ"
      },
      {
        id: "bal-2",
        title: "Проведение расчета небалансов",
        deadline: "До 12 числа",
        responsible: "Инженер УРРУ"
      },
      {
        id: "bal-3",
        title: "Формирование сводного отчета",
        description: "Выявление ТП и фидеров с отклонениями",
        deadline: "До 12 числа"
      },
      {
        id: "bal-4",
        title: "Сравнение данных перетоков с предыдущим месяцем",
        description: "Фиксация аномалий между РЭС"
      }
    ]
  },
  {
    id: "loss-detection",
    title: "Выявление очагов потерь",
    icon: "AlertTriangle",
    description: "Формирование адресного плана проверок",
    tasks: [
      {
        id: "loss-1",
        title: "Включение ТП с небалансами >10%",
        description: "В адресный план проверок"
      },
      {
        id: "loss-2",
        title: "Включение фидеров с ростом потерь",
        description: "Анализ причин увеличения потерь"
      },
      {
        id: "loss-3",
        title: "Выявление потребителей со снижением потребления",
        description: "Снижение >30% для ЮЛ, >20% для ФЛ"
      },
      {
        id: "loss-4",
        title: "Включение объектов с аномалиями ИСУ",
        description: "Отсутствие связи, скачки профиля мощности"
      },
      {
        id: "loss-5",
        title: "Включение ПУ с истекшим МПИ",
        description: "Межповерочный интервал"
      }
    ]
  },
  {
    id: "checks-planning",
    title: "Планирование проверок и КСП",
    icon: "ClipboardCheck",
    description: "Формирование адресного плана проверок",
    tasks: [
      {
        id: "check-1",
        title: "Формирование списка ЮЛ для проверки",
        description: "Снижение >30%, нулевое потребление, истекший МПИ, проверка >12 мес. назад"
      },
      {
        id: "check-2",
        title: "Формирование списка ФЛ для проверки",
        description: "Снижение/нулевое потребление >20%, истекший МПИ"
      },
      {
        id: "check-3",
        title: "Составление адресного плана",
        description: "Адрес, фидер, ТП, опора, номера ПУ, причины включения, даты"
      },
      {
        id: "check-4",
        title: "Распределение заданий по бригадам",
        description: "С учетом географии и загрузки персонала"
      }
    ]
  },
  {
    id: "gp-interaction",
    title: "Взаимодействие с ГП/ЭСК",
    icon: "Handshake",
    description: "Сверка данных и передача показаний",
    tasks: [
      {
        id: "gp-1",
        title: "Еженедельная сверка объемов",
        description: "Сверка данных ИСУ, КСП и показаний потребителей"
      },
      {
        id: "gp-2",
        title: "Передача показаний ФЛ",
        description: "Еженедельно после 10 числа, ежедневно в последнюю неделю, окончательно — до 17:00 26 числа"
      },
      {
        id: "gp-3",
        title: "Передача показаний ЮЛ",
        description: "Расчетные ПУ — до 26 числа, прочие — до 3 числа следующего месяца"
      },
      {
        id: "gp-4",
        title: "Передача актов НУП/БДП",
        description: "В течение 3 рабочих дней",
        normativeRef: "ПП РФ №442, п. 183"
      },
      {
        id: "gp-5",
        title: "Передача инструментальных проверок",
        description: "Формирование и направление пакета данных"
      }
    ]
  },
  {
    id: "engineering-work",
    title: "Работа инженерного персонала",
    icon: "Settings",
    description: "Ежемесячный цикл работ инженеров УРРУ",
    tasks: [
      {
        id: "eng-1",
        title: "Ведение СУТЭ",
        description: "Актуализация данных системы"
      },
      {
        id: "eng-2",
        title: "Обновление НСИ",
        description: "Нормативно-справочная информация по ПУ"
      },
      {
        id: "eng-3",
        title: "Загрузка актов КСП, проверок, НУП/БДП",
        description: "В день выполнения работ"
      },
      {
        id: "eng-4",
        title: "Проведение расчетов",
        description: "Объемы НУП/БДП, небалансы"
      },
      {
        id: "eng-5",
        title: "Подготовка отчетов",
        description: "По всем направлениям работы"
      },
      {
        id: "eng-6",
        title: "Планирование следующего месяца",
        description: "Формирование задач и адресных планов"
      }
    ]
  },
  {
    id: "consumer-requests",
    title: "Работа с заявками потребителей",
    icon: "MessageSquare",
    description: "Обработка обращений и жалоб",
    tasks: [
      {
        id: "req-1",
        title: "Обработка заявок о неисправности ПУ",
        description: "Регистрация и назначение выезда"
      },
      {
        id: "req-2",
        title: "Рассмотрение жалоб на учет",
        description: "Проверка корректности начислений"
      },
      {
        id: "req-3",
        title: "Заявки о повреждении пломб",
        description: "Выезд для осмотра и опломбирования"
      },
      {
        id: "req-4",
        title: "Обращения по ИСУ",
        description: "Проблемы со связью и передачей данных"
      }
    ]
  },
  {
    id: "tp-monthly",
    title: "Технологическое присоединение",
    icon: "Plug",
    description: "Ежемесячные работы по ТП",
    tasks: [
      {
        id: "tp-m-1",
        title: "Формирование списка заявок ТП",
        description: "Актуальный реестр заявок на присоединение"
      },
      {
        id: "tp-m-2",
        title: "Планирование осмотров",
        description: "График выездов на объекты ТП"
      },
      {
        id: "tp-m-3",
        title: "План монтажа ПУ",
        description: "В рамках ФЗ-522",
        normativeRef: "ФЗ №522"
      },
      {
        id: "tp-m-4",
        title: "Оформление актов ТП",
        description: "Подготовка документации по завершенным работам"
      },
      {
        id: "tp-m-5",
        title: "Формирование месячной заявки на оборудование",
        description: "ПУ, шкафы, модемы, расходные материалы"
      }
    ]
  },
  {
    id: "isu-monthly",
    title: "Развитие ИСУ",
    icon: "Cpu",
    description: "Ежемесячный анализ системы учета",
    tasks: [
      {
        id: "isu-m-1",
        title: "Анализ точек без связи",
        description: "Выявление и устранение причин"
      },
      {
        id: "isu-m-2",
        title: "Анализ аномалий в профиле мощности",
        description: "Выявление нехарактерных значений"
      },
      {
        id: "isu-m-3",
        title: "Проверка несоответствий НСИ",
        description: "Сверка с фактическими данными"
      },
      {
        id: "isu-m-4",
        title: "Оценка состояния оборудования",
        description: "Модемы, аккумуляторы, каналы связи"
      }
    ]
  },
  {
    id: "monthly-reports",
    title: "Формирование отчётности",
    icon: "FileText",
    description: "Ежемесячные отчеты УРРУ",
    tasks: [
      {
        id: "rep-m-1",
        title: "Отчёт по небалансам",
        description: "Анализ по ТП и фидерам"
      },
      {
        id: "rep-m-2",
        title: "Отчёт по НУП/БДП",
        description: "Выявленные нарушения за месяц"
      },
      {
        id: "rep-m-3",
        title: "Отчёт по ИСУ",
        description: "Состояние опроса и аномалии"
      },
      {
        id: "rep-m-4",
        title: "Отчёт по заявкам",
        description: "Статистика обращений потребителей"
      },
      {
        id: "rep-m-5",
        title: "Отчёт по ТП",
        description: "Выполнение плана присоединения"
      },
      {
        id: "rep-m-6",
        title: "Отчёт по выполнению адресного плана",
        description: "Результаты проверок за месяц"
      }
    ]
  }
];
