export interface ChecklistItem {
  id: string;
  title: string;
  description?: string;
  required?: boolean;
}

export interface DayPhase {
  id: string;
  title: string;
  icon: string;
  time: string;
  description: string;
  sections: {
    id: string;
    title: string;
    responsible: string;
    items: ChecklistItem[];
  }[];
}

export const operationalPlanPhases: DayPhase[] = [
  {
    id: "morning",
    title: "Начало рабочего дня",
    icon: "Sunrise",
    time: "08:00 - 09:00",
    description: "Подготовительный этап: формирование заданий и проверка готовности",
    sections: [
      {
        id: "task-formation",
        title: "Формирование ежедневных заданий",
        responsible: "Начальник УРРУ / Мастер",
        items: [
          {
            id: "task-1",
            title: "Определить перечень объектов",
            description: "Указать фидер, ТП, опору для каждого объекта",
            required: true
          },
          {
            id: "task-2",
            title: "Указать адрес, тип и номер ПУ",
            description: "Состояние пломб по данным НСИ",
            required: true
          },
          {
            id: "task-3",
            title: "Определить цель визита",
            description: "КСП, проверка ПУ, акт НУП/БДП, ТП, устранение аномалии ИСУ",
            required: true
          },
          {
            id: "task-4",
            title: "Указать причины включения",
            description: "Небаланс, снижение потребления, жалоба, истечение МПИ, недопуск ранее"
          }
        ]
      },
      {
        id: "document-issue",
        title: "Выдача документов и материалов",
        responsible: "Инженер УРРУ",
        items: [
          {
            id: "doc-1",
            title: "Оформить в СУТЭ выдачу пломб",
            description: "Операция 'Передача пломб в работу'",
            required: true
          },
          {
            id: "doc-2",
            title: "Выдать бланки актов",
            description: "Акты допуска, проверки, КСП, НУП/БДП",
            required: true
          },
          {
            id: "doc-3",
            title: "Сверить остатки пломб у работника",
            description: "Контроль пломбировочного материала"
          },
          {
            id: "doc-4",
            title: "Проверить исправность инструмента",
            description: "Клещи, индикаторы, тестеры, фото/видео устройства"
          }
        ]
      },
      {
        id: "personnel-check",
        title: "Проверка готовности персонала",
        responsible: "Мастер / Начальник УРРУ",
        items: [
          {
            id: "pers-1",
            title: "Служебное удостоверение",
            required: true
          },
          {
            id: "pers-2",
            title: "Удостоверение по электробезопасности",
            required: true
          },
          {
            id: "pers-3",
            title: "СИЗ: каска, диэлектрические перчатки, очки",
            required: true
          },
          {
            id: "pers-4",
            title: "Комплект исправного инструмента",
            required: true
          }
        ]
      }
    ]
  },
  {
    id: "daytime",
    title: "Работы в течение дня",
    icon: "Sun",
    time: "09:00 - 17:00",
    description: "Выполнение полевых работ согласно дневному заданию",
    sections: [
      {
        id: "ksp",
        title: "Контрольное снятие показаний (КСП)",
        responsible: "Линейный персонал",
        items: [
          {
            id: "ksp-1",
            title: "Идентифицировать ПУ",
            description: "Сверить номер и тип с заданием",
            required: true
          },
          {
            id: "ksp-2",
            title: "Выполнить визуальный осмотр",
            description: "Корпус, пломбы, место установки",
            required: true
          },
          {
            id: "ksp-3",
            title: "Снять показания всех тарифов",
            required: true
          },
          {
            id: "ksp-4",
            title: "Выполнить фотофиксацию",
            description: "ПУ, показания, место установки",
            required: true
          },
          {
            id: "ksp-5",
            title: "Заполнить акт КСП на месте",
            required: true
          }
        ]
      },
      {
        id: "pu-check",
        title: "Проверка приборов учета",
        responsible: "Линейный персонал",
        items: [
          {
            id: "pu-1",
            title: "Проверить схему подключения",
            required: true
          },
          {
            id: "pu-2",
            title: "Проверить целостность пломб и индикаторов вмешательства",
            required: true
          },
          {
            id: "pu-3",
            title: "Сверить данные ПУ с НСИ",
            description: "Тип, номер, коэффициенты",
            required: true
          },
          {
            id: "pu-4",
            title: "Проверить работоспособность ПУ",
            required: true
          },
          {
            id: "pu-5",
            title: "Оформить акт допуска/проверки",
            required: true
          }
        ]
      },
      {
        id: "nup-detection",
        title: "Выявление НУП/БДП",
        responsible: "Линейный персонал",
        items: [
          {
            id: "nup-1",
            title: "Зафиксировать нарушение",
            description: "При обнаружении вмешательства",
            required: true
          },
          {
            id: "nup-2",
            title: "Собрать доказательства",
            description: "Фото, видео нарушения",
            required: true
          },
          {
            id: "nup-3",
            title: "Заполнить акт НУП/БДП",
            description: "В присутствии потребителя или двух свидетелей",
            required: true
          },
          {
            id: "nup-4",
            title: "Изъять снятые пломбы",
            required: true
          },
          {
            id: "nup-5",
            title: "Передать акт инженеру в конце смены",
            required: true
          }
        ]
      },
      {
        id: "consumer-requests",
        title: "Работа с заявками потребителей",
        responsible: "Линейный персонал",
        items: [
          {
            id: "cr-1",
            title: "Выполнить заявки на неисправность ПУ"
          },
          {
            id: "cr-2",
            title: "Обработать жалобы на учет"
          },
          {
            id: "cr-3",
            title: "Устранить повреждение пломб"
          },
          {
            id: "cr-4",
            title: "Решить проблемы со связью в ИСУ"
          }
        ]
      },
      {
        id: "tp-works",
        title: "Работы по технологическому присоединению",
        responsible: "Линейный персонал",
        items: [
          {
            id: "tp-1",
            title: "Выполнить осмотры объектов по ТП"
          },
          {
            id: "tp-2",
            title: "Произвести монтаж ПУ",
            description: "В рамках ФЗ-522"
          },
          {
            id: "tp-3",
            title: "Оформить акты ТП"
          },
          {
            id: "tp-4",
            title: "Выполнить фотофиксацию схем подключения",
            required: true
          },
          {
            id: "tp-5",
            title: "Передать материалы инженеру"
          }
        ]
      },
      {
        id: "isu-anomalies",
        title: "Устранение аномалий ИСУ",
        responsible: "Линейный персонал",
        items: [
          {
            id: "isu-1",
            title: "Проверить модем, ПУ, проводку, питание"
          },
          {
            id: "isu-2",
            title: "Устранить причины отсутствия связи"
          },
          {
            id: "isu-3",
            title: "Зафиксировать обнаруженные вмешательства"
          },
          {
            id: "isu-4",
            title: "Провести опрос ПУ на месте",
            description: "Если технически возможно"
          }
        ]
      }
    ]
  },
  {
    id: "evening",
    title: "Конец рабочего дня",
    icon: "Sunset",
    time: "17:00 - 18:00",
    description: "Документооборот и обработка результатов",
    sections: [
      {
        id: "document-return",
        title: "Сдача документов линейным персоналом",
        responsible: "Линейный персонал",
        items: [
          {
            id: "ret-1",
            title: "Передать акты КСП",
            required: true
          },
          {
            id: "ret-2",
            title: "Передать акты проверки",
            required: true
          },
          {
            id: "ret-3",
            title: "Передать акты НУП/БДП",
            description: "При наличии выявленных нарушений"
          },
          {
            id: "ret-4",
            title: "Передать акты ТП",
            description: "При выполнении работ по присоединению"
          },
          {
            id: "ret-5",
            title: "Передать фотоматериалы",
            required: true
          },
          {
            id: "ret-6",
            title: "Сдать пломбы",
            description: "Использованные и неиспользованные",
            required: true
          }
        ]
      },
      {
        id: "data-processing",
        title: "Обработка данных инженером",
        responsible: "Инженер УРРУ",
        items: [
          {
            id: "proc-1",
            title: "Проверить правильность оформления актов",
            required: true
          },
          {
            id: "proc-2",
            title: "Внести данные в СУТЭ",
            description: "В день выполнения работ",
            required: true
          },
          {
            id: "proc-3",
            title: "Обновить НСИ",
            description: "При изменении данных ПУ"
          },
          {
            id: "proc-4",
            title: "Рассчитать объемы НУП",
            description: "При наличии выявленных нарушений"
          },
          {
            id: "proc-5",
            title: "Сформировать пакет документов для ГП/ЭСК"
          },
          {
            id: "proc-6",
            title: "Актуализировать статус актов",
            description: "Включение в расчет, оплата, движение"
          }
        ]
      },
      {
        id: "restrictions-control",
        title: "Контроль ограничений",
        responsible: "Инженер УРРУ / Начальник УРРУ",
        items: [
          {
            id: "restr-1",
            title: "Проверить соблюдение ограничений"
          },
          {
            id: "restr-2",
            title: "Оформить протоколы контрольных выездов"
          },
          {
            id: "restr-3",
            title: "Оформить восстановления электроснабжения",
            description: "ЮЛ — до 23 часов, ФЛ — 2 дня"
          }
        ]
      }
    ]
  }
];
