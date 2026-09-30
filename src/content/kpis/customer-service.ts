import type { Kpi } from "../types";

export const customerServiceKpis: Kpi[] = [
  {
    id: "first-response-time",
    slug: "first-response-time",
    name: "First Response Time",
    acronym: "FRT",
    nameAr: "زمن الاستجابة الأولى",
    domains: ["customer-service", "it-saas"],
    category: { ar: "سرعة الاستجابة", en: "Responsiveness" },
    difficulty: "intermediate",
    unit: { ar: "دقائق أو ساعات", en: "Minutes or hours" },
    aggregation: "non-additive",
    definition: {
      ar: "الوقت المنقضي بين استلام طلب العميل وأول رد يقدّمه موظف دعم بشري. يُحسب لكل تذكرة على حدة، ثم يُلخَّص على مستوى الفترة أو القناة أو الفريق بالوسيط والمئين التسعين أكثر من المتوسط.",
      en: "The time elapsed between receiving a customer request and the first reply from a human support agent. It is computed per ticket, then summarised for a period, channel, or team — preferably with the median and 90th percentile rather than the mean.",
    },
    whyItMatters: {
      ar: "أول رد هو اللحظة التي يعرف فيها العميل أن أحدًا رأى مشكلته. التأخر فيها يولّد تواصلًا مكررًا عبر قنوات أخرى، فيرتفع حجم العمل ويتراجع الرضا حتى لو حُلّت المشكلة لاحقًا بشكل جيد.",
      en: "The first reply is the moment the customer learns someone has seen their problem. Delay here generates repeat contacts through other channels, inflating workload and lowering satisfaction even when the issue is later resolved well.",
    },
    interpretation: {
      ar: "وسيط 18 دقيقة يعني أن نصف التذاكر حصلت على رد بشري خلال 18 دقيقة أو أقل. أما المئين التسعين فيروي قصة العملاء الأسوأ حظًا: إن كان 6 ساعات فهناك واحد من كل عشرة عملاء ينتظر يوم عمل تقريبًا، وهذا لا يظهر في المتوسط ولا في الوسيط.",
      en: "A median of 18 minutes means half the tickets got a human reply within 18 minutes or less. The 90th percentile tells the story of the unluckiest customers: if it is 6 hours, one customer in ten waits nearly a working day, and neither the mean nor the median shows it.",
    },
    formula: "First Response Time = First Human Response Timestamp - Ticket Created Timestamp",
    numerator: {
      ar: "لكل تذكرة: الفرق الزمني بين وقت أول رد بشري ووقت إنشاء التذكرة، بالدقائق الفعلية المنقضية أو بدقائق ساعات العمل حسب التعريف المعتمد.",
      en: "Per ticket: the time difference between the first human reply and the ticket creation time, in elapsed minutes or business-hour minutes depending on the agreed definition.",
    },
    denominator: {
      ar: "عند التلخيص بالمتوسط: عدد التذاكر التي تلقت ردًا بشريًا خلال الفترة. التذاكر التي لم تتلقَّ ردًا بعد لا تدخل الحساب، ويجب عرض عددها بجانبه.",
      en: "When summarised as a mean: the number of tickets that received a human reply in the period. Tickets still awaiting a reply are not in the calculation, and their count must be shown next to it.",
    },
    timeGrain: {
      ar: "يُراقب يوميًا أو بالساعة للتشغيل، ويُلخَّص أسبوعيًا أو شهريًا للإدارة. ينسب كل تذكرة إلى تاريخ إنشائها حتى لا تهرب التذاكر المتأخرة إلى الفترة التالية.",
      en: "Monitored daily or hourly for operations, summarised weekly or monthly for management. Attribute each ticket to its creation date so late tickets do not slip into the next period.",
    },
    direction: {
      rising: {
        ar: "ارتفاع زمن الاستجابة يعني عادة ضغطًا على الطاقة أو خللًا في التوجيه أو الجدولة. افحص الساعات والقنوات التي ارتفع فيها قبل طلب موظفين إضافيين.",
        en: "A rising response time usually signals capacity pressure or a routing or scheduling problem. Check which hours and channels rose before asking for more staff.",
      },
      falling: {
        ar: "الانخفاض إيجابي في الظاهر، لكن تأكد أنه لم يأتِ من ردود قالبية فارغة لا تتقدم بالحل، أو من إدراج الإشعارات الآلية في الحساب.",
        en: "A fall looks positive, but make sure it did not come from empty template replies that move nothing forward, or from auto-acknowledgements creeping into the calculation.",
      },
      caveat: {
        ar: "الأسرع ليس الأفضل دائمًا. رد سريع بلا مضمون يحسّن المؤشر ويضر بالحل من التواصل الأول وبالرضا. اقرأه دائمًا مع FCR وCSAT.",
        en: "Faster is not always better. A quick reply with no substance improves the metric while hurting first contact resolution and satisfaction. Always read it alongside FCR and CSAT.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "وقت إنشاء التذكرة", en: "Ticket created" }, value: "10:00" },
        { label: { ar: "إشعار استلام آلي", en: "Automated acknowledgement sent" }, value: "10:01" },
        { label: { ar: "أول رد من موظف بشري", en: "First human response" }, value: "10:18" },
      ],
      steps: [
        { label: { ar: "زمن الاستجابة الأولى (رد بشري)", en: "First response time (human reply)" }, expression: "10:18 - 10:00 = 18 minutes" },
        { label: { ar: "لو احتُسب الإشعار الآلي خطأً", en: "If the auto-acknowledgement were wrongly counted" }, expression: "10:01 - 10:00 = 1 minute" },
      ],
      result: { label: { ar: "زمن الاستجابة الأولى", en: "First response time" }, value: "18 minutes" },
      reading: {
        ar: "التذكرة نفسها قد تظهر بزمن دقيقة واحدة أو 18 دقيقة حسب تعريف \"الرد\". هذا القرار وحده قد يغيّر أداء الفريق المعلن بأضعاف، لذلك يُحسم ويُوثّق قبل بناء أي لوحة.",
        en: "The same ticket can show 1 minute or 18 minutes depending on what counts as a \"response\". That single decision can change the team's reported performance many times over, so it is settled and documented before any dashboard is built.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "الوسيط والمئين التسعين لزمن الاستجابة الأولى", en: "Median and P90 first response time" },
        code: `-- FirstHumanResponseAt is the first reply by a human agent.
-- Auto-acknowledgements and bot messages are excluded upstream.

Responded Tickets :=
CALCULATE (
    COUNTROWS ( 'Ticket' ),
    NOT ISBLANK ( 'Ticket'[FirstHumanResponseAt] )
)

-- Show next to the KPI: these tickets are invisible to the duration measures.
Awaiting First Response :=
CALCULATE (
    COUNTROWS ( 'Ticket' ),
    ISBLANK ( 'Ticket'[FirstHumanResponseAt] )
)

Median FRT (min) :=
MEDIANX (
    FILTER ( 'Ticket', NOT ISBLANK ( 'Ticket'[FirstHumanResponseAt] ) ),
    DATEDIFF ( 'Ticket'[CreatedAt], 'Ticket'[FirstHumanResponseAt], MINUTE )
)

P90 FRT (min) :=
IF (
    [Responded Tickets] > 0,
    PERCENTILEX.INC (
        FILTER ( 'Ticket', NOT ISBLANK ( 'Ticket'[FirstHumanResponseAt] ) ),
        DATEDIFF ( 'Ticket'[CreatedAt], 'Ticket'[FirstHumanResponseAt], MINUTE ),
        0.9
    )
)

Avg FRT (min) :=
AVERAGEX (
    FILTER ( 'Ticket', NOT ISBLANK ( 'Ticket'[FirstHumanResponseAt] ) ),
    DATEDIFF ( 'Ticket'[CreatedAt], 'Ticket'[FirstHumanResponseAt], MINUTE )
)

-- Business-hours version: minutes are computed upstream against the
-- support calendar (opening hours, weekends, holidays).
Median FRT Business (min) :=
MEDIANX (
    FILTER ( 'Ticket', NOT ISBLANK ( 'Ticket'[FirstResponseBusinessMin] ) ),
    'Ticket'[FirstResponseBusinessMin]
)`,
        assumptions: [
          {
            ar: "'Ticket' بحبيبية تذكرة واحدة لكل صف، و CreatedAt و FirstHumanResponseAt من نوع تاريخ ووقت بنفس المنطقة الزمنية.",
            en: "'Ticket' is at one row per ticket, and CreatedAt and FirstHumanResponseAt are datetime values in the same time zone.",
          },
          {
            ar: "FirstHumanResponseAt يُشتق في مرحلة التحميل من سجل الرسائل باستبعاد الرسائل الآلية ورسائل الروبوت. إن كان النظام المصدر لا يميّز بينها فالمقياس سيقيس سرعة الأتمتة لا سرعة الفريق.",
            en: "FirstHumanResponseAt is derived at load time from the message log, excluding automated and bot messages. If the source system cannot tell them apart, the measure will time the automation rather than the team.",
          },
          {
            ar: "FirstResponseBusinessMin يُحسب خارج DAX (في Power Query أو قاعدة البيانات) مقابل تقويم ساعات العمل والعطل، لأن حسابه داخل مقياس مكلف ومعرّض للخطأ.",
            en: "FirstResponseBusinessMin is computed outside DAX (in Power Query or the database) against the business-hours and holiday calendar, because computing it inside a measure is expensive and error-prone.",
          },
          {
            ar: "جدول Date مرتبط بعمود CreatedDate، فتُنسب كل تذكرة إلى يوم إنشائها.",
            en: "The Date table is related to CreatedDate, so each ticket is attributed to the day it was created.",
          },
          {
            ar: "IF حول PERCENTILEX.INC يمنع استدعاءه على جدول فارغ ويعيد BLANK بدلًا من ذلك.",
            en: "The IF around PERCENTILEX.INC avoids calling it on an empty table and returns BLANK instead.",
          },
        ],
        requires: ["Ticket[CreatedAt]", "Ticket[FirstHumanResponseAt]", "Ticket[FirstResponseBusinessMin]", "Ticket[CreatedDate]"],
      },
    ],
    model: [
      {
        table: "Ticket",
        grain: { ar: "تذكرة واحدة لكل صف", en: "One row per ticket" },
        columns: ["TicketId", "CreatedAt", "CreatedDate", "FirstHumanResponseAt", "FirstResponseBusinessMin", "ChannelId", "Priority", "TeamId", "CategoryId"],
        role: { ar: "جدول الحقائق الأساسي للمؤشر", en: "Primary fact table for the metric" },
      },
      {
        table: "TicketMessage",
        grain: { ar: "رسالة واحدة لكل صف داخل التذكرة", en: "One row per message within a ticket" },
        columns: ["TicketId", "SentAt", "AuthorType", "IsAutomated"],
        role: { ar: "مصدر اشتقاق وقت أول رد بشري في مرحلة التحميل، ولا يُربط بالتقرير مباشرة", en: "Source for deriving the first human reply at load time; not needed in the report itself" },
      },
      {
        table: "Channel",
        grain: { ar: "قناة واحدة لكل صف", en: "One row per channel" },
        columns: ["ChannelId", "ChannelName", "IsSynchronous"],
        role: { ar: "التقسيم حسب القناة، لأن توقعات الدردشة تختلف جذريًا عن البريد", en: "Split by channel, since chat expectations differ radically from email" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "WeekKey", "MonthKey", "IsWorkingDay"],
        role: { ar: "يُربط بـ Ticket[CreatedDate]", en: "Related to Ticket[CreatedDate]" },
      },
    ],
    visuals: [
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "الوسيط والمئين التسعين وعدد التذاكر المنتظرة في بطاقة واحدة تمنع المتوسط وحده من إخفاء الذيل الطويل.",
          en: "Median, P90, and the count of waiting tickets in one card stop the mean alone from hiding the long tail.",
        },
      },
      {
        pattern: "heatmap-calendar",
        why: {
          ar: "خريطة حرارية لساعات اليوم مقابل أيام الأسبوع تكشف فجوات الجدولة التي يرتفع فيها زمن الاستجابة.",
          en: "A heatmap of hour of day against weekday exposes the scheduling gaps where response time spikes.",
        },
      },
      {
        pattern: "exception-table",
        why: {
          ar: "مصفوفة التذاكر التي تجاوزت هدف الاستجابة حسب الأولوية والفريق هي ما يعمل عليه قائد الوردية فعليًا.",
          en: "A matrix of tickets that exceeded the response target by priority and team is what the shift lead actually works from.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "احتساب الإشعارات الآلية كرد أول. هذا يجعل زمن الاستجابة دقيقة أو أقل لكل التذاكر ويفرّغ المؤشر من معناه. حدد صراحة هل يُحتسب الرد الآلي أم لا.",
        en: "Counting automated acknowledgements as the first response. This makes every ticket respond within a minute and empties the metric. State explicitly whether automated replies count.",
      },
      {
        ar: "خلط الوقت المنقضي بساعات العمل. تذكرة وصلت مساء الخميس ورُد عليها صباح الأحد تبدو كارثة بالوقت المنقضي وممتازة بساعات العمل. اختر تعريفًا واحدًا واذكره في عنوان المقياس.",
        en: "Mixing elapsed time with business hours. A ticket received on a Friday evening and answered on Monday morning looks disastrous in elapsed time and excellent in business hours. Pick one definition and name it in the measure title.",
      },
      {
        ar: "الاعتماد على المتوسط وحده. قلة من التذاكر المنسية لأيام تشد المتوسط بقوة، بينما الوسيط والمئين التسعين يصفان تجربة العميل النمطي والأسوأ بصدق أكبر.",
        en: "Relying on the mean alone. A few tickets forgotten for days pull the mean hard, while the median and P90 describe the typical and worst-case customer experience more honestly.",
      },
      {
        ar: "تجاهل التذاكر التي لم تتلقَّ ردًا بعد. هي خارج الحساب تمامًا، فكلما زاد الإهمال بدا المؤشر أفضل. اعرض عددها وعمر أقدمها بجانب المؤشر.",
        en: "Ignoring tickets that have not yet been answered. They are entirely outside the calculation, so the more neglect there is, the better the metric looks. Show their count and the age of the oldest one next to the KPI.",
      },
      {
        ar: "دمج القنوات في رقم واحد. الدردشة المباشرة والبريد الإلكتروني لهما توقعات مختلفة جذريًا، ورقم مدمج يتغير بتغير مزيج القنوات لا بتغير الأداء.",
        en: "Blending channels into one number. Live chat and email carry radically different expectations, and a blended figure moves with the channel mix rather than with performance.",
      },
    ],
    variants: [
      {
        label: { ar: "زمن الاستجابة بساعات العمل", en: "Business-hours first response time" },
        formula: "Business Minutes Between Created Timestamp And First Human Response",
        difference: {
          ar: "يستبعد خارج الدوام والعطل. أعدل لتقييم الفريق، لكنه لا يعكس ما ينتظره العميل فعلًا. كثير من المؤسسات تعرض الاثنين معًا.",
          en: "Excludes out-of-hours time and holidays. Fairer for judging the team, but it does not reflect what the customer actually waits. Many organizations show both.",
        },
      },
      {
        label: { ar: "زمن الاستجابة شاملًا الرد الآلي المفيد", en: "First response including useful automation" },
        formula: "First Response Timestamp (human or qualifying bot answer) - Created Timestamp",
        difference: {
          ar: "يحتسب رد الروبوت إذا قدّم إجابة حقيقية لا مجرد إشعار. يناسب الخدمة الذاتية، لكنه يتطلب تعريفًا دقيقًا لما هو \"مفيد\" وإلا عاد إلى مشكلة الإشعارات.",
          en: "Counts a bot reply if it delivered a real answer rather than a mere acknowledgement. Suits self-service models, but needs a precise definition of \"useful\" or it falls back into the acknowledgement problem.",
        },
      },
      {
        label: { ar: "متوسط زمن الرد على كل رسالة", en: "Average reply time (all replies)" },
        formula: "Average(Agent Reply Timestamp - Preceding Customer Message Timestamp)",
        difference: {
          ar: "يقيس سرعة الرد على كل رسالة في المحادثة لا الأولى فقط. يكشف التذاكر التي حصلت على رد أول سريع ثم أُهملت.",
          en: "Measures reply speed for every message in the conversation, not just the first. Reveals tickets that got a quick first reply and were then neglected.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "في أي توزيع، المئين التسعين أكبر من الوسيط أو يساويه. والمتوسط قد يتجاوز الوسيط بفارق كبير عندما يكون التوزيع ملتويًا نحو اليمين كما هو معتاد في أزمنة الانتظار.",
          en: "In any distribution the 90th percentile is greater than or equal to the median. The mean can exceed the median by a wide margin when the distribution is right-skewed, as waiting times usually are.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "استبعاد الإشعارات الآلية من تعريف الرد الأول، وتلخيص المؤشر بالوسيط والمئين التسعين، ممارستان شائعتان في تقارير مراكز الدعم.",
          en: "Excluding automated acknowledgements from the first response and summarising with the median and P90 are common practices in support-centre reporting.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "أهداف زمن الاستجابة لكل قناة وأولوية، واعتماد ساعات العمل أو الوقت المنقضي، قرارات داخلية أو تعاقدية لا يوجد فيها معيار عالمي.",
          en: "Response targets per channel and priority, and whether business hours or elapsed time is used, are internal or contractual decisions with no universal standard.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أوقات المثال (10:00 و10:01 و10:18) من تأليفنا للتوضيح ولا تمثل أداء مركز دعم حقيقي.",
          en: "The example times (10:00, 10:01, 10:18) are invented for illustration and represent no real support centre.",
        },
      },
    ],
    related: ["sla-achievement-rate", "avg-resolution-time", "csat", "first-contact-resolution"],
    exercise: {
      prompt: {
        ar: "الجزء الأول: خمس تذاكر كانت أزمنة استجابتها الأولى 4 و6 و7 و9 و124 دقيقة. احسب المتوسط والوسيط. الجزء الثاني: ساعات العمل من 08:00 إلى 17:00، ووصلت تذكرة الساعة 16:50 وجاء أول رد بشري الساعة 08:20 من صباح يوم العمل التالي. احسب زمن الاستجابة بالوقت المنقضي وبساعات العمل.",
        en: "Part 1: five tickets had first response times of 4, 6, 7, 9, and 124 minutes. Compute the mean and the median. Part 2: business hours are 08:00 to 17:00; a ticket arrived at 16:50 and the first human reply came at 08:20 the next working morning. Compute the response time in elapsed time and in business hours.",
      },
      hint: {
        ar: "الوسيط هو القيمة الوسطى بعد الترتيب. لساعات العمل، اجمع الدقائق المتبقية من اليوم الأول والدقائق المنقضية من اليوم الثاني فقط.",
        en: "The median is the middle value once sorted. For business hours, add only the minutes left in the first day and the minutes elapsed in the second.",
      },
      answer: {
        ar: "الجزء الأول: المجموع 150 دقيقة، فالمتوسط = 150 ÷ 5 = 30 دقيقة، والوسيط = 7 دقائق. تذكرة واحدة متأخرة رفعت المتوسط إلى أكثر من أربعة أضعاف الوسيط، فالمتوسط هنا لا يصف أي عميل فعلي. الجزء الثاني: الوقت المنقضي من 16:50 إلى 08:20 = 15 ساعة و30 دقيقة = 930 دقيقة. بساعات العمل = 10 دقائق (16:50 إلى 17:00) + 20 دقيقة (08:00 إلى 08:20) = 30 دقيقة. الفارق بين 930 و30 دقيقة يوضح لماذا يجب أن يُذكر التعريف المعتمد في عنوان المقياس.",
        en: "Part 1: the total is 150 minutes, so the mean = 150 ÷ 5 = 30 minutes and the median = 7 minutes. One late ticket pushed the mean above four times the median, so the mean here describes no actual customer. Part 2: elapsed time from 16:50 to 08:20 = 15 hours 30 minutes = 930 minutes. In business hours = 10 minutes (16:50 to 17:00) + 20 minutes (08:00 to 08:20) = 30 minutes. The gap between 930 and 30 minutes shows why the agreed definition must appear in the measure title.",
      },
    },
    references: [
      {
        title: "PERCENTILEX.INC function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/percentilex-inc-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع حساب المئين التسعين عبر تعبير يُقيَّم لكل تذكرة.",
          en: "Reference for computing the 90th percentile over an expression evaluated per ticket.",
        },
      },
      {
        title: "DATEDIFF function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/datediff-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع حساب الفرق بالدقائق بين وقت الإنشاء ووقت أول رد.",
          en: "Reference for computing the minute difference between creation and first reply.",
        },
      },
    ],
  },

  {
    id: "first-contact-resolution",
    slug: "first-contact-resolution",
    name: "First Contact Resolution",
    acronym: "FCR",
    nameAr: "الحل من التواصل الأول",
    domains: ["customer-service", "it-saas", "banking"],
    category: { ar: "جودة الحل", en: "Resolution quality" },
    difficulty: "intermediate",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة الحالات المؤهلة التي حُلّت من أول تواصل دون حاجة العميل إلى متابعة إضافية خلال نافذة زمنية محددة. التعريف هنا هو كل شيء: ما المقصود بـ\"محلولة\"، وما الحالات المؤهلة، وكم يومًا ننتظر قبل أن نتأكد أن العميل لم يعد.",
      en: "The share of eligible cases resolved at the first contact, without the customer needing to follow up within a defined window. The definition is everything: what \"resolved\" means, which cases are eligible, and how many days we wait before confirming the customer did not come back.",
    },
    whyItMatters: {
      ar: "كل تواصل متكرر يكلف مرتين: وقت موظف إضافي وصبر عميل يتآكل. رفع FCR يخفض حجم العمل ويحسن الرضا في آن واحد، ولهذا يُعد من أقوى روافع مراكز الخدمة.",
      en: "Every repeat contact costs twice: extra agent time and eroding customer patience. Raising FCR cuts workload and improves satisfaction at the same time, which is why it is one of the strongest levers a service centre has.",
    },
    interpretation: {
      ar: "FCR بنسبة 80% يعني أن 20 حالة من كل 100 احتاجت تواصلًا آخر على الأقل. كل نقطة مئوية مفقودة هي حجم عمل إضافي يمكن حسابه: بـ 900 حالة شهريًا، كل نقطة تعني نحو 9 تواصلات متكررة إضافية.",
      en: "An FCR of 80% means 20 cases in every 100 needed at least one more contact. Each lost point is measurable workload: at 900 cases a month, each point means about 9 extra repeat contacts.",
    },
    formula: "FCR % = Eligible Cases Resolved at First Contact / Eligible Cases x 100",
    numerator: {
      ar: "الحالات المؤهلة التي أُغلقت من التواصل الأول، ولم يعد العميل بشأنها ولم تُعَد فتحها خلال نافذة المتابعة المتفق عليها (مثلًا 7 أيام).",
      en: "Eligible cases closed at the first contact where the customer did not come back about the same issue and the case was not reopened within the agreed window (for example 7 days).",
    },
    denominator: {
      ar: "جميع الحالات المؤهلة في الفترة. تُستبعد عادة الحالات التي لا يمكن حلها من التواصل الأول بطبيعتها (كزيارة ميدانية مجدولة) والرسائل المزعجة والمكررة، ويجب توثيق قائمة الاستبعاد.",
      en: "All eligible cases in the period. Cases that by design cannot be solved at first contact (such as a scheduled field visit), spam, and duplicates are usually excluded, and the exclusion list must be documented.",
    },
    timeGrain: {
      ar: "شهري عادة. لا يمكن حساب الأيام الأخيرة من الفترة نهائيًا قبل انقضاء نافذة المتابعة، فالأرقام الحديثة مؤقتة ويجب وسمها كذلك.",
      en: "Usually monthly. The final days of a period cannot be scored definitively until the follow-up window has passed, so recent figures are provisional and should be labelled as such.",
    },
    direction: {
      rising: {
        ar: "ارتفاع FCR يعني عادة معرفة أفضل لدى الموظفين أو صلاحيات أوسع للحل الفوري. تحقق أنه لم يأتِ من إغلاق مبكر للتذاكر أو من توسيع قائمة الاستبعاد.",
        en: "Rising FCR usually means better agent knowledge or wider authority to resolve on the spot. Check it did not come from closing tickets prematurely or from widening the exclusion list.",
      },
      falling: {
        ar: "الانخفاض قد يشير إلى مشكلة منتج جديدة، أو موظفين جدد، أو ثغرة في قاعدة المعرفة. التقسيم حسب نوع المشكلة يكشف عادة السبب بسرعة.",
        en: "A fall can point to a new product issue, new agents, or a gap in the knowledge base. Splitting by issue type usually reveals the cause quickly.",
      },
      caveat: {
        ar: "مزيج الحالات يحرك المؤشر بقوة. إذا انتقلت الاستفسارات البسيطة إلى الخدمة الذاتية، ينخفض FCR لأن ما تبقى أصعب، وهذا نجاح لا فشل.",
        en: "Case mix moves the metric strongly. If simple enquiries shift to self-service, FCR drops because what remains is harder — and that is a success, not a failure.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "إجمالي الحالات في الشهر", en: "Total cases in the month" }, value: "1,000" },
        { label: { ar: "حالات مستبعدة (زيارة ميدانية بطبيعتها، مكررة)", en: "Excluded cases (field visit by design, duplicates)" }, value: "100" },
        { label: { ar: "حالات مؤهلة", en: "Eligible cases" }, value: "900" },
        { label: { ar: "حالات حُلّت من التواصل الأول دون عودة خلال 7 أيام", en: "Resolved at first contact, no repeat within 7 days" }, value: "720" },
      ],
      steps: [
        { label: { ar: "المقام بعد الاستبعاد", en: "Denominator after exclusions" }, expression: "1,000 - 100 = 900" },
        { label: { ar: "FCR", en: "FCR" }, expression: "720 / 900 = 80.0%" },
      ],
      result: { label: { ar: "الحل من التواصل الأول", en: "First contact resolution" }, value: "80%" },
      reading: {
        ar: "180 حالة احتاجت تواصلًا إضافيًا. لو قُسّمت حسب نوع المشكلة لظهر غالبًا أن عددًا قليلًا من الأنواع مسؤول عن معظمها، وهناك يبدأ التحسين.",
        en: "180 cases needed another contact. Split by issue type, a small number of types will usually account for most of them, and that is where improvement starts.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "FCR من أعلام محسوبة مسبقًا", en: "FCR from pre-computed flags" },
        code: `FCR Eligible Cases :=
CALCULATE (
    COUNTROWS ( 'Ticket' ),
    'Ticket'[IsFcrEligible] = TRUE ()
)

FCR Resolved Cases :=
CALCULATE (
    COUNTROWS ( 'Ticket' ),
    'Ticket'[IsFcrEligible] = TRUE (),
    'Ticket'[IsFirstContactResolved] = TRUE ()
)

FCR % :=
DIVIDE ( [FCR Resolved Cases], [FCR Eligible Cases] )

-- Closed at first contact but the customer came back: the gap
-- between "closure" and real resolution.
Repeat Contact Cases :=
CALCULATE (
    COUNTROWS ( 'Ticket' ),
    'Ticket'[IsFcrEligible] = TRUE (),
    'Ticket'[ClosedAtFirstContact] = TRUE (),
    'Ticket'[IsFirstContactResolved] = FALSE ()
)`,
        assumptions: [
          {
            ar: "'Ticket' بحبيبية حالة واحدة لكل صف. الأعلام IsFcrEligible و ClosedAtFirstContact و IsFirstContactResolved تُحسب في مرحلة التحميل (انظر مثال SQL) لا داخل DAX.",
            en: "'Ticket' is at one row per case. The flags IsFcrEligible, ClosedAtFirstContact, and IsFirstContactResolved are computed at load time (see the SQL sample), not inside DAX.",
          },
          {
            ar: "IsFirstContactResolved لا يكون TRUE إلا بعد انقضاء نافذة المتابعة. قبل ذلك يبقى FALSE أو BLANK، فأرقام الأيام الأخيرة ستبدو منخفضة مؤقتًا ويجب وسمها بأنها غير نهائية.",
            en: "IsFirstContactResolved only becomes TRUE once the follow-up window has passed. Until then it stays FALSE or BLANK, so the latest days look temporarily low and must be labelled provisional.",
          },
          {
            ar: "النسبة تُحسب من مجموع البسط ومجموع المقام في السياق الحالي، فتبقى صحيحة عند التجميع حسب الفريق أو الشهر أو السنة.",
            en: "The ratio is computed from the summed numerator and denominator in the current context, so it stays correct when aggregated by team, month, or year.",
          },
          {
            ar: "جدول Date مرتبط بـ Ticket[CreatedDate].",
            en: "The Date table is related to Ticket[CreatedDate].",
          },
        ],
        requires: ["Ticket[IsFcrEligible]", "Ticket[ClosedAtFirstContact]", "Ticket[IsFirstContactResolved]", "Ticket[CreatedDate]"],
      },
      {
        language: "sql",
        label: { ar: "اشتقاق علم الحل من التواصل الأول بنافذة 7 أيام", en: "Deriving the FCR flag with a 7-day window" },
        code: `-- One row per case. A case is FCR when it was closed after a single
-- customer contact AND the same customer did not open another case on
-- the same issue category within 7 days of closure.
SELECT
    t.TicketId,
    CASE WHEN t.ContactCount = 1 AND t.ClosedAt IS NOT NULL
         THEN 1 ELSE 0 END AS ClosedAtFirstContact,
    CASE
        WHEN t.ContactCount = 1
         AND t.ClosedAt IS NOT NULL
         AND t.ClosedAt <= DATEADD(day, -7, CURRENT_TIMESTAMP)
         AND t.ReopenCount = 0
         AND NOT EXISTS (
             SELECT 1
             FROM Ticket AS r
             WHERE r.CustomerId = t.CustomerId
               AND r.CategoryId = t.CategoryId
               AND r.TicketId <> t.TicketId
               AND r.CreatedAt >  t.ClosedAt
               AND r.CreatedAt <= DATEADD(day, 7, t.ClosedAt)
         )
        THEN 1 ELSE 0
    END AS IsFirstContactResolved
FROM Ticket AS t;`,
        assumptions: [
          {
            ar: "الصياغة بلهجة T-SQL. ContactCount هو عدد تواصلات العميل على الحالة، و ReopenCount عدد مرات إعادة فتحها.",
            en: "Written in T-SQL. ContactCount is the number of customer contacts on the case and ReopenCount the number of times it was reopened.",
          },
          {
            ar: "\"نفس المشكلة\" مُقرَّبة هنا بنفس العميل ونفس الفئة. بعض المؤسسات تستخدم ربطًا صريحًا بين الحالات أو سؤالًا في الاستبيان؛ التعريف قرار داخلي.",
            en: "\"Same issue\" is approximated here as same customer and same category. Some organizations use explicit case linking or a survey question instead; the definition is an internal decision.",
          },
          {
            ar: "الشرط ClosedAt <= الآن ناقص 7 أيام يمنع احتساب الحالة ناجحة قبل انقضاء النافذة.",
            en: "The condition ClosedAt <= now minus 7 days prevents a case from being scored as a success before the window has elapsed.",
          },
        ],
        requires: ["Ticket.TicketId", "Ticket.CustomerId", "Ticket.CategoryId", "Ticket.ContactCount", "Ticket.ReopenCount", "Ticket.CreatedAt", "Ticket.ClosedAt"],
      },
    ],
    model: [
      {
        table: "Ticket",
        grain: { ar: "حالة واحدة لكل صف", en: "One row per case" },
        columns: ["TicketId", "CustomerId", "CreatedDate", "ClosedAt", "ChannelId", "TeamId", "CategoryId", "ContactCount", "IsFcrEligible", "ClosedAtFirstContact", "IsFirstContactResolved"],
        role: { ar: "جدول الحقائق الأساسي، يحمل الأعلام المحسوبة مسبقًا", en: "Primary fact table carrying the pre-computed flags" },
      },
      {
        table: "IssueCategory",
        grain: { ar: "فئة مشكلة واحدة لكل صف", en: "One row per issue category" },
        columns: ["CategoryId", "CategoryName", "ParentCategory", "RequiresFieldVisit"],
        role: { ar: "تقسيم المؤشر حسب نوع المشكلة وتحديد الأهلية", en: "Splits the metric by issue type and drives eligibility" },
      },
      {
        table: "Team",
        grain: { ar: "فريق واحد لكل صف", en: "One row per team" },
        columns: ["TeamId", "TeamName", "Tier"],
        role: { ar: "المقارنة بين الفرق ومستويات الدعم", en: "Comparison across teams and support tiers" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "WeekKey", "MonthKey"],
        role: { ar: "يُربط بـ Ticket[CreatedDate]", en: "Related to Ticket[CreatedDate]" },
      },
    ],
    visuals: [
      {
        pattern: "period-over-period",
        why: {
          ar: "اتجاه FCR عبر الأشهر مع وسم الفترة الأخيرة كمؤقتة يمنع قراءة انخفاض وهمي سببه نافذة المتابعة.",
          en: "The FCR trend across months, with the latest period flagged provisional, prevents reading a false dip caused by the follow-up window.",
        },
      },
      {
        pattern: "decomposition-tree",
        why: {
          ar: "تفكيك الحالات غير المحلولة حسب نوع المشكلة ثم القناة ثم الفريق يقود مباشرة إلى مصدر التواصل المتكرر.",
          en: "Breaking unresolved cases down by issue type, then channel, then team leads straight to the source of repeat contacts.",
        },
      },
      {
        pattern: "variance-bar",
        why: {
          ar: "يعرض انحراف كل فريق أو فئة عن الهدف بحيث تبرز الفجوات الأكبر أولًا.",
          en: "Shows each team's or category's variance from target so the largest gaps stand out first.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "اعتبار إغلاق التذكرة دليلًا على الحل. الموظف قد يغلق التذكرة بسرعة ويعود العميل غدًا بتذكرة جديدة. بدون نافذة متابعة، يقيس المؤشر سرعة الإغلاق لا الحل.",
        en: "Treating ticket closure as proof of resolution. An agent can close a ticket quickly and the customer returns tomorrow with a new one. Without a follow-up window, the metric measures closing speed, not resolution.",
      },
      {
        ar: "عدم تحديد نافذة التواصل المتكرر أو تغييرها دون إعلان. الانتقال من 3 أيام إلى 7 أيام يخفض FCR فورًا دون أي تغير في الأداء.",
        en: "Not defining the repeat-contact window, or changing it silently. Moving from 3 days to 7 days lowers FCR immediately without any change in performance.",
      },
      {
        ar: "تجاهل التواصل المتكرر عبر قناة مختلفة. عميل راسل بالبريد ثم اتصل هاتفيًا بشأن المشكلة نفسها لم تُحل مشكلته من التواصل الأول، لكن نظامين منفصلين قد يسجلانها كحالتين ناجحتين.",
        en: "Missing repeat contacts through a different channel. A customer who emailed and then phoned about the same problem was not resolved at first contact, yet two separate systems may record two successful cases.",
      },
      {
        ar: "توسيع قائمة الحالات المستبعدة لتحسين الرقم. كل استبعاد يجب أن يكون موثقًا ومبررًا، وحجم المستبعد يُعرض بجانب المؤشر.",
        en: "Widening the exclusion list to improve the number. Every exclusion must be documented and justified, and the excluded volume shown next to the KPI.",
      },
      {
        ar: "حساب متوسط نسب FCR للفرق للحصول على رقم المركز. فريق صغير بنسبة مرتفعة يرفع المتوسط بشكل غير عادل؛ احسب من مجموع البسط والمقام.",
        en: "Averaging team FCR percentages to get the centre figure. A small team with a high rate lifts the average unfairly; compute from the summed numerator and denominator.",
      },
    ],
    variants: [
      {
        label: { ar: "FCR المعلن من العميل", en: "Customer-reported FCR" },
        formula: "Survey Respondents Answering 'Resolved in One Contact' / Survey Respondents",
        difference: {
          ar: "يعتمد على سؤال في الاستبيان بدل بيانات النظام. يلتقط رأي العميل الحقيقي لكنه يرث تحيز من يرد على الاستبيانات وعينته أصغر.",
          en: "Relies on a survey question instead of system data. Captures the customer's real view but inherits survey response bias and a smaller sample.",
        },
      },
      {
        label: { ar: "الحل من التواصل الأول الإجمالي", en: "Gross first contact resolution" },
        formula: "Cases Resolved at First Contact / All Cases",
        difference: {
          ar: "بلا استبعادات. أبسط وأصعب تلاعبًا، لكنه يعاقب الفرق التي تتعامل مع حالات لا يمكن حلها من أول تواصل بطبيعتها.",
          en: "No exclusions. Simpler and harder to game, but it penalizes teams handling cases that by nature cannot be solved at first contact.",
        },
      },
      {
        label: { ar: "معدل التواصل المتكرر", en: "Repeat contact rate" },
        formula: "Customers Contacting Again Within Window / Customers Contacting",
        difference: {
          ar: "المنظور المعاكس على مستوى العميل لا الحالة. مفيد عندما يكون ربط الحالات ببعضها صعبًا، ويكشف العملاء الذين يعودون مرارًا.",
          en: "The inverse view at customer level rather than case level. Useful when linking cases is hard, and it surfaces customers who keep coming back.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "مع ثبات عدد الحالات الجديدة، كل انخفاض في FCR يعني زيادة في عدد التواصلات الإضافية، لأن الحالات غير المحلولة من المرة الأولى تحتاج تواصلًا آخر على الأقل.",
          en: "With the number of new cases held constant, every drop in FCR means more follow-up contacts, because cases not resolved first time need at least one more contact.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "قياس FCR بنافذة متابعة زمنية بدل الاكتفاء بحالة الإغلاق ممارسة شائعة في مراكز الخدمة.",
          en: "Measuring FCR with a follow-up time window rather than closure status alone is a common practice in service centres.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "طول نافذة المتابعة، وتعريف \"نفس المشكلة\"، وقائمة الحالات المستبعدة، كلها قرارات داخلية تختلف من مؤسسة لأخرى.",
          en: "The follow-up window length, the definition of \"same issue\", and the list of excluded cases are all internal decisions that vary between organizations.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (900 حالة مؤهلة و720 حُلّت من التواصل الأول) من تأليفنا للتوضيح وليست معيارًا للقطاع.",
          en: "The example figures (900 eligible cases, 720 resolved at first contact) are invented for illustration and are not an industry benchmark.",
        },
      },
    ],
    related: ["avg-resolution-time", "csat", "first-response-time"],
    exercise: {
      prompt: {
        ar: "فريق دعم تعامل مع 1,150 حالة مؤهلة في الشهر، وأغلق 950 منها من التواصل الأول. لكن 53 من هذه الحالات المغلقة عاد أصحابها بشأن المشكلة نفسها خلال 7 أيام. احسب FCR المعلن بناءً على الإغلاق وFCR الحقيقي، والفجوة بينهما.",
        en: "A support team handled 1,150 eligible cases in a month and closed 950 of them at first contact. But 53 of those closed cases saw the customer return about the same issue within 7 days. Compute the closure-based FCR, the true FCR, and the gap between them.",
      },
      hint: {
        ar: "الحالات التي عاد أصحابها ليست محلولة من التواصل الأول، فتخرج من البسط وتبقى في المقام.",
        en: "Cases where the customer came back are not first-contact resolutions, so they leave the numerator but stay in the denominator.",
      },
      answer: {
        ar: "FCR المعلن = 950 ÷ 1,150 = 82.6%. الحالات المحلولة فعلًا = 950 - 53 = 897، فـ FCR الحقيقي = 897 ÷ 1,150 = 78.0%. الفجوة 4.6 نقطة مئوية، وهي بالضبط الفرق بين \"أغلقنا التذكرة\" و\"حللنا مشكلة العميل\". عرض الرقمين معًا يكشف ما إذا كان الفريق يغلق التذاكر مبكرًا.",
        en: "Closure-based FCR = 950 ÷ 1,150 = 82.6%. Truly resolved cases = 950 - 53 = 897, so true FCR = 897 ÷ 1,150 = 78.0%. The gap is 4.6 percentage points — exactly the difference between \"we closed the ticket\" and \"we solved the customer's problem\". Showing both figures reveals whether the team is closing tickets prematurely.",
      },
    },
    references: [
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع القسمة الآمنة التي تعيد BLANK عند غياب حالات مؤهلة.",
          en: "Reference for safe division that returns BLANK when there are no eligible cases.",
        },
      },
      {
        title: "CALCULATE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/calculate-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع تطبيق شروط الأهلية والحل كمرشحات على عدّ الحالات.",
          en: "Reference for applying the eligibility and resolution conditions as filters on the case count.",
        },
      },
    ],
  },

  {
    id: "csat",
    slug: "csat",
    name: "Customer Satisfaction Score",
    acronym: "CSAT",
    nameAr: "مؤشر رضا العملاء",
    domains: ["customer-service", "retail", "fnb", "it-saas"],
    category: { ar: "تجربة العميل", en: "Customer experience" },
    difficulty: "beginner",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة الردود الراضية من إجمالي الردود الصالحة على استبيان يُرسل بعد تقديم الخدمة. \"الراضي\" يحدده مقياس الاستبيان، وفي مقياس من 1 إلى 5 يُعد عادة من اختار 4 أو 5.",
      en: "The share of satisfied responses among valid responses to a survey sent after a service interaction. \"Satisfied\" is defined by the survey scale; on a 1-to-5 scale it is typically a 4 or 5.",
    },
    whyItMatters: {
      ar: "هو صوت العميل المباشر عن تفاعل محدد، فيربط تجربة الخدمة بالفريق والقناة ونوع المشكلة. بخلاف مؤشرات السرعة، يقيس ما شعر به العميل لا ما فعله الفريق.",
      en: "It is the customer's direct voice about a specific interaction, linking service experience to team, channel, and issue type. Unlike speed metrics, it measures what the customer felt rather than what the team did.",
    },
    interpretation: {
      ar: "CSAT بنسبة 84% يعني أن 84 من كل 100 عميل رد على الاستبيان كانوا راضين. لاحظ عبارة \"رد على الاستبيان\": الرقم لا يتحدث عن الذين لم يردوا، ولهذا لا يُقرأ دون عدد الردود ونسبة الاستجابة.",
      en: "A CSAT of 84% means 84 of every 100 customers who answered the survey were satisfied. Note \"who answered\": the number says nothing about those who did not, which is why it is never read without the response count and response rate.",
    },
    formula: "CSAT % = Satisfied Responses / Valid Survey Responses x 100",
    numerator: {
      ar: "عدد الردود الصالحة التي تقع في نطاق الرضا حسب مقياس الاستبيان (مثلًا 4 أو 5 على مقياس من 1 إلى 5).",
      en: "Count of valid responses falling in the satisfied band of the survey scale (for example 4 or 5 on a 1-to-5 scale).",
    },
    denominator: {
      ar: "جميع الردود الصالحة على سؤال الرضا خلال الفترة، بما فيها المحايدة وغير الراضية. تُستبعد الردود الفارغة والمكررة والاختبارية.",
      en: "All valid responses to the satisfaction question in the period, including neutral and dissatisfied ones. Blank, duplicate, and test responses are excluded.",
    },
    timeGrain: {
      ar: "أسبوعي أو شهري. مع أحجام ردود صغيرة يتذبذب الرقم كثيرًا، فالتجميع الشهري أو المتحرك أصدق لفريق صغير.",
      en: "Weekly or monthly. With small response volumes the figure swings a lot, so monthly or rolling aggregation is more honest for a small team.",
    },
    direction: {
      rising: {
        ar: "الارتفاع إيجابي عادة، لكن تحقق من عدد الردود ونسبة الاستجابة: قد يرتفع CSAT لأن غير الراضين توقفوا عن الرد لا لأن الخدمة تحسنت.",
        en: "A rise is usually positive, but check response count and response rate: CSAT can rise because dissatisfied customers stopped answering, not because service improved.",
      },
      falling: {
        ar: "الانخفاض يستدعي قراءة التعليقات النصية والتقسيم حسب نوع المشكلة والقناة. غالبًا يتركز السبب في فئة أو فريق محدد.",
        en: "A fall calls for reading verbatim comments and splitting by issue type and channel. The cause is usually concentrated in a specific category or team.",
      },
      caveat: {
        ar: "CSAT يقيس الرضا عن التفاعل لا عن المنتج أو العلاقة ككل. عميل راضٍ عن موظف مهذب قد يلغي اشتراكه لأن المشكلة الأساسية لم تُحل.",
        en: "CSAT measures satisfaction with the interaction, not with the product or the relationship. A customer pleased with a polite agent may still cancel because the underlying problem was not fixed.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "استبيانات مُرسلة", en: "Surveys sent" }, value: "2,000" },
        { label: { ar: "ردود صالحة", en: "Valid responses" }, value: "500" },
        { label: { ar: "ردود راضية (4 أو 5 من 5)", en: "Satisfied responses (4 or 5 out of 5)" }, value: "420" },
      ],
      steps: [
        { label: { ar: "CSAT", en: "CSAT" }, expression: "420 / 500 = 84.0%" },
        { label: { ar: "نسبة الاستجابة", en: "Response rate" }, expression: "500 / 2,000 = 25.0%" },
      ],
      result: { label: { ar: "مؤشر رضا العملاء", en: "Customer satisfaction score" }, value: "84%" },
      reading: {
        ar: "84% من المستجيبين راضون، لكن ثلاثة أرباع العملاء لم يردوا أصلًا. الرقم الصحيح للعرض هو \"84% من 500 رد، بنسبة استجابة 25%\"، لا 84% وحدها.",
        en: "84% of respondents are satisfied, but three quarters of customers did not answer at all. The honest display is \"84% of 500 responses, 25% response rate\", not 84% on its own.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "CSAT مع عدد الردود ونسبة الاستجابة", en: "CSAT with response count and response rate" },
        code: `CSAT Valid Responses :=
CALCULATE (
    COUNTROWS ( 'SurveyResponse' ),
    'SurveyResponse'[IsValid] = TRUE (),
    NOT ISBLANK ( 'SurveyResponse'[CsatScore] )
)

-- "Satisfied" = 4 or 5 on a 1-5 scale. Change the threshold if your scale differs.
CSAT Satisfied Responses :=
CALCULATE (
    COUNTROWS ( 'SurveyResponse' ),
    'SurveyResponse'[IsValid] = TRUE (),
    'SurveyResponse'[CsatScore] >= 4
)

CSAT % :=
DIVIDE ( [CSAT Satisfied Responses], [CSAT Valid Responses] )

Surveys Sent :=
COUNTROWS ( 'SurveyInvite' )

Survey Response Rate :=
DIVIDE ( [CSAT Valid Responses], [Surveys Sent] )`,
        assumptions: [
          {
            ar: "'SurveyResponse' بحبيبية رد واحد لكل استبيان، و 'SurveyInvite' بحبيبية دعوة واحدة لكل استبيان مُرسل، وكلاهما يحمل TicketId و SentDate.",
            en: "'SurveyResponse' is at one row per survey response and 'SurveyInvite' at one row per survey sent; both carry TicketId and SentDate.",
          },
          {
            ar: "CsatScore على مقياس من 1 إلى 5، والرضا يعني 4 أو 5. في مقياس آخر عدّل العتبة ووثّق التعريف.",
            en: "CsatScore is on a 1-to-5 scale and satisfied means 4 or 5. For another scale, change the threshold and document the definition.",
          },
          {
            ar: "جدول Date مرتبط بتاريخ إرسال الاستبيان في الجدولين، حتى تُقاس نسبة الاستجابة على نفس المجموعة من الدعوات.",
            en: "The Date table is related to the survey sent date in both tables, so the response rate is measured on the same cohort of invites.",
          },
          {
            ar: "الأبعاد المشتركة (الفريق، القناة، الفئة) تصل إلى الجدولين عبر علاقات بأبعاد مشتركة، لا عبر علاقة مباشرة بين الجدولين.",
            en: "Shared dimensions (team, channel, category) reach both tables through conformed dimension relationships, not through a direct relationship between the two facts.",
          },
        ],
        requires: ["SurveyResponse[IsValid]", "SurveyResponse[CsatScore]", "SurveyInvite[InviteId]", "SurveyResponse[SentDate]", "SurveyInvite[SentDate]"],
      },
    ],
    model: [
      {
        table: "SurveyResponse",
        grain: { ar: "رد واحد لكل استبيان", en: "One row per survey response" },
        columns: ["ResponseId", "InviteId", "TicketId", "SentDate", "ResponseDate", "CsatScore", "IsValid", "TeamId", "ChannelId", "CategoryId", "Comment"],
        role: { ar: "مصدر البسط والمقام", en: "Source of numerator and denominator" },
      },
      {
        table: "SurveyInvite",
        grain: { ar: "دعوة واحدة لكل استبيان مُرسل", en: "One row per survey sent" },
        columns: ["InviteId", "TicketId", "SentDate", "TeamId", "ChannelId", "CategoryId"],
        role: { ar: "مقام نسبة الاستجابة", en: "Denominator of the response rate" },
      },
      {
        table: "Team",
        grain: { ar: "فريق واحد لكل صف", en: "One row per team" },
        columns: ["TeamId", "TeamName"],
        role: { ar: "بُعد مشترك يرشّح الجدولين معًا", en: "Conformed dimension filtering both facts" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "WeekKey", "MonthKey"],
        role: { ar: "يُربط بـ SentDate في الجدولين", en: "Related to SentDate in both tables" },
      },
    ],
    visuals: [
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "CSAT مع عدد الردود ونسبة الاستجابة في بطاقة واحدة يمنع قراءة نسبة مرتفعة مبنية على عشرة ردود فقط.",
          en: "CSAT with response count and response rate in one card stops anyone reading a high score built on ten responses.",
        },
      },
      {
        pattern: "period-over-period",
        why: {
          ar: "الاتجاه عبر الفترات يكشف ما إذا كان التغيير مستمرًا أم تذبذبًا عابرًا بسبب صغر العينة.",
          en: "The trend across periods shows whether a change is sustained or a passing swing caused by a small sample.",
        },
      },
      {
        pattern: "decomposition-tree",
        why: {
          ar: "تفكيك الردود غير الراضية حسب القناة ونوع المشكلة والفريق يقود إلى محركات عدم الرضا.",
          en: "Breaking dissatisfied responses down by channel, issue type, and team leads to the drivers of dissatisfaction.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عرض CSAT دون عدد الردود ونسبة الاستجابة. المشاركة في الاستبيان ليست عشوائية، فالعملاء الغاضبون جدًا والراضون جدًا يردون أكثر من غيرهم.",
        en: "Showing CSAT without response count and response rate. Survey participation is not random: very angry and very happy customers answer more than others.",
      },
      {
        ar: "حساب متوسط الدرجات (مثل 4.2 من 5) وتسميته CSAT. هذا مؤشر مختلف؛ النسبة المئوية للراضين هي التعريف الشائع، والخلط بينهما يمنع المقارنة.",
        en: "Averaging scores (such as 4.2 out of 5) and calling it CSAT. That is a different metric; the percentage of satisfied responses is the common definition, and mixing the two breaks comparison.",
      },
      {
        ar: "متوسط نسب CSAT للفرق أو الأشهر. فريق بعشرة ردود يؤثر في المتوسط بقدر فريق بألف رد؛ احسب من مجموع الراضين ومجموع الردود.",
        en: "Averaging CSAT percentages across teams or months. A team with ten responses weighs as much as one with a thousand; compute from total satisfied over total responses.",
      },
      {
        ar: "تغيير نص السؤال أو المقياس أو توقيت الإرسال دون كسر السلسلة الزمنية. أي تغيير في الاستبيان يجعل المقارنة مع الفترة السابقة غير صالحة ويجب وسمه على الرسم.",
        en: "Changing the question wording, scale, or send timing without breaking the time series. Any survey change invalidates comparison with the prior period and must be annotated on the chart.",
      },
      {
        ar: "ربط CSAT بمكافآت الموظفين دون ضوابط. يشجع ذلك على اختيار من يُرسل لهم الاستبيان أو طلب تقييم مرتفع صراحة، فيتحسن الرقم وتسوء دقته.",
        en: "Tying CSAT to agent bonuses without controls. It encourages choosing who receives the survey or openly asking for high ratings, so the number improves while its accuracy worsens.",
      },
    ],
    variants: [
      {
        label: { ar: "متوسط درجة الرضا", en: "Mean satisfaction score" },
        formula: "Sum of CSAT Scores / Valid Responses",
        difference: {
          ar: "يعطي رقمًا مثل 4.2 من 5 بدل نسبة. أكثر حساسية للتغيرات داخل النطاق، لكنه يعامل المقياس الترتيبي كأنه رقمي ويصعب شرحه للإدارة.",
          en: "Gives a figure like 4.2 out of 5 instead of a percentage. More sensitive to movement within the scale, but it treats an ordinal scale as numeric and is harder to explain to management.",
        },
      },
      {
        label: { ar: "صافي الرضا", en: "Net satisfaction" },
        formula: "% Satisfied (4-5) - % Dissatisfied (1-2)",
        difference: {
          ar: "يطرح غير الراضين من الراضين على طريقة NPS. يكشف الاستقطاب الذي تخفيه النسبة البسيطة، لكنه ليس CSAT ولا يُقارن به مباشرة.",
          en: "Subtracts dissatisfied from satisfied, NPS-style. Reveals polarization the simple percentage hides, but it is not CSAT and does not compare with it directly.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "CSAT الإجمالي لعدة فرق هو متوسط مرجّح بعدد الردود لنسب الفرق، ولا يساوي المتوسط البسيط لنسبها إلا إذا تساوت أعداد الردود.",
          en: "The overall CSAT of several teams is the response-weighted average of team rates, and equals the simple average of their rates only when response counts are equal.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "اعتبار أعلى درجتين في مقياس من خمس درجات \"راضيًا\" هو التعريف الأكثر شيوعًا لـ CSAT.",
          en: "Treating the top two points of a five-point scale as \"satisfied\" is the most common CSAT definition.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "المقياس المستخدم، وعتبة الرضا، ومتى يُرسل الاستبيان ولمن، قرارات داخلية يجب توثيقها قبل مقارنة أي رقمين.",
          en: "The scale used, the satisfaction threshold, and when and to whom the survey is sent are internal decisions to document before comparing any two figures.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (2,000 استبيان، 500 رد، 420 راضيًا) من تأليفنا للتوضيح وليست معيارًا.",
          en: "The example figures (2,000 surveys, 500 responses, 420 satisfied) are invented for illustration and are not a benchmark.",
        },
      },
    ],
    related: ["nps", "first-contact-resolution", "first-response-time"],
    exercise: {
      prompt: {
        ar: "الفريق أ أرسل 1,000 استبيان وتلقى 100 رد، منها 90 راضية. الفريق ب أرسل 800 استبيان وتلقى 400 رد، منها 340 راضية. احسب CSAT ونسبة الاستجابة لكل فريق، ثم CSAT الإجمالي بالطريقة الصحيحة وبمتوسط النسبتين. أي فريق يحق له ادعاء الأداء الأفضل؟",
        en: "Team A sent 1,000 surveys and received 100 responses, 90 of them satisfied. Team B sent 800 surveys and received 400 responses, 340 satisfied. Compute CSAT and response rate for each team, then the overall CSAT correctly and as an average of the two rates. Which team can claim better performance?",
      },
      hint: {
        ar: "الإجمالي الصحيح = مجموع الراضين ÷ مجموع الردود. ثم فكر: ماذا تخبرك نسبة الاستجابة 10% عن موثوقية نسبة 90%؟",
        en: "The correct total = total satisfied ÷ total responses. Then consider: what does a 10% response rate tell you about the reliability of a 90% score?",
      },
      answer: {
        ar: "الفريق أ: CSAT = 90 ÷ 100 = 90.0%، ونسبة الاستجابة = 100 ÷ 1,000 = 10.0%. الفريق ب: CSAT = 340 ÷ 400 = 85.0%، ونسبة الاستجابة = 400 ÷ 800 = 50.0%. الإجمالي الصحيح = (90 + 340) ÷ (100 + 400) = 430 ÷ 500 = 86.0%، ومتوسط النسبتين = 87.5% وهو خاطئ. الفريق أ يبدو أفضل، لكن 90% من سمع صوتهم لا يمثلون إلا عُشر عملائه، بينما يعكس رقم الفريق ب نصف عملائه. لا يمكن الحكم بأفضلية الفريق أ قبل فهم سبب ضعف استجابته.",
        en: "Team A: CSAT = 90 ÷ 100 = 90.0%, response rate = 100 ÷ 1,000 = 10.0%. Team B: CSAT = 340 ÷ 400 = 85.0%, response rate = 400 ÷ 800 = 50.0%. Correct overall = (90 + 340) ÷ (100 + 400) = 430 ÷ 500 = 86.0%; the average of the two rates = 87.5%, which is wrong. Team A looks better, but its 90% speaks for only a tenth of its customers, while Team B's figure reflects half of its customers. Team A cannot be judged better until its low response rate is understood.",
      },
    },
    references: [
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع القسمة الآمنة لنسبة الرضا ونسبة الاستجابة عند غياب الردود.",
          en: "Reference for safe division of the satisfaction and response rates when there are no responses.",
        },
      },
      {
        title: "COUNTROWS function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/countrows-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع عدّ الردود والدعوات بحبيبية صف واحد لكل منها.",
          en: "Reference for counting responses and invites at one row each.",
        },
      },
    ],
  },

  {
    id: "nps",
    slug: "nps",
    name: "Net Promoter Score",
    acronym: "NPS",
    nameAr: "صافي نقاط الترويج",
    domains: ["customer-service", "marketing", "retail", "it-saas", "banking"],
    category: { ar: "ولاء العميل", en: "Customer loyalty" },
    difficulty: "beginner",
    unit: { ar: "نقاط من -100 إلى +100", en: "Points from -100 to +100" },
    aggregation: "ratio",
    definition: {
      ar: "مقياس لاستعداد العملاء للتوصية بالمنتج أو الخدمة، مبني على سؤال واحد بمقياس من 0 إلى 10. المروّجون من اختاروا 9 أو 10، والمنتقدون من اختاروا 0 إلى 6، والمحايدون 7 أو 8. النتيجة هي نسبة المروّجين مطروحًا منها نسبة المنتقدين.",
      en: "A measure of customers' willingness to recommend a product or service, based on a single 0-to-10 question. Promoters answer 9 or 10, detractors 0 to 6, and passives 7 or 8. The score is the percentage of promoters minus the percentage of detractors.",
    },
    whyItMatters: {
      ar: "يقيس العلاقة مع العلامة ككل لا تفاعلًا واحدًا، فيُستخدم لمتابعة الولاء عبر الزمن ومقارنة شرائح العملاء. بساطته تجعله لغة مشتركة بين الإدارة والتسويق والخدمة.",
      en: "It measures the relationship with the brand as a whole rather than a single interaction, so it is used to track loyalty over time and compare customer segments. Its simplicity makes it a shared language between management, marketing, and service.",
    },
    interpretation: {
      ar: "NPS بقيمة +35 لا يعني أن 35% من العملاء راضون. قد يعني 55% مروّجين و20% منتقدين، أو 40% مروّجين و5% منتقدين، وهما وضعان مختلفان جدًا. لذلك يُعرض دائمًا مع توزيع الفئات الثلاث.",
      en: "An NPS of +35 does not mean 35% of customers are satisfied. It could be 55% promoters and 20% detractors, or 40% promoters and 5% detractors — two very different situations. That is why it is always shown with the three-group distribution.",
    },
    formula: "NPS = (% Promoters - % Detractors), Promoters = 9-10, Detractors = 0-6 on a 0-10 scale",
    numerator: {
      ar: "عدد المروّجين (9 أو 10) مطروحًا منه عدد المنتقدين (0 إلى 6).",
      en: "Number of promoters (9 or 10) minus number of detractors (0 to 6).",
    },
    denominator: {
      ar: "جميع الردود الصالحة على سؤال التوصية، بما فيها المحايدون. المحايدون لا يظهرون في البسط لكنهم يخففون أثر الفئتين الأخريين عبر المقام.",
      en: "All valid responses to the recommendation question, including passives. Passives do not appear in the numerator but dilute the other two groups through the denominator.",
    },
    timeGrain: {
      ar: "ربع سنوي عادة لقياس العلاقة، وشهري إذا كان حجم الردود كافيًا. الأرقام الأسبوعية على عينات صغيرة تتذبذب بقوة ولا تصلح للقرار.",
      en: "Usually quarterly for relationship measurement, monthly if response volume allows. Weekly figures on small samples swing sharply and are not fit for decisions.",
    },
    direction: {
      rising: {
        ar: "الارتفاع يعني توازنًا أفضل بين المروّجين والمنتقدين. افحص أي الفئتين تحركت: تحويل المنتقدين إلى محايدين يرفع NPS بقدر كسب مروّجين جدد.",
        en: "A rise means a better balance of promoters to detractors. Check which group moved: turning detractors into passives lifts NPS as much as winning new promoters.",
      },
      falling: {
        ar: "الانخفاض يستدعي التقسيم حسب الشريحة والمنتج وقراءة التعليقات. قبل استنتاج أي شيء تأكد أن حجم العينة يكفي لتمييز التغير عن الضجيج.",
        en: "A fall calls for splitting by segment and product and reading the comments. Before concluding anything, check the sample is large enough to separate change from noise.",
      },
      caveat: {
        ar: "تغيّر بضع نقاط على عينة صغيرة قد يكون ضجيجًا إحصائيًا بحتًا. ومقارنة NPS بين قطاعات أو دول مختلفة مضللة لأن ثقافة التقييم تختلف.",
        en: "A shift of a few points on a small sample may be pure statistical noise. Comparing NPS across different industries or countries is misleading because rating culture differs.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "إجمالي الردود الصالحة", en: "Total valid responses" }, value: "400" },
        { label: { ar: "مروّجون (9-10)", en: "Promoters (9-10)" }, value: "220" },
        { label: { ar: "محايدون (7-8)", en: "Passives (7-8)" }, value: "100" },
        { label: { ar: "منتقدون (0-6)", en: "Detractors (0-6)" }, value: "80" },
      ],
      steps: [
        { label: { ar: "نسبة المروّجين", en: "% promoters" }, expression: "220 / 400 = 55%" },
        { label: { ar: "نسبة المنتقدين", en: "% detractors" }, expression: "80 / 400 = 20%" },
        { label: { ar: "NPS", en: "NPS" }, expression: "55 - 20 = +35" },
      ],
      result: { label: { ar: "صافي نقاط الترويج", en: "Net Promoter Score" }, value: "+35" },
      reading: {
        ar: "+35 نقطة وليست 35%. ربع المستجيبين محايدون لا يظهرون في النتيجة مباشرة، وخمسهم منتقدون، وهؤلاء هم المكان الأوضح لبدء التحسين.",
        en: "+35 is points, not 35%. A quarter of respondents are passives who do not appear directly in the result, and a fifth are detractors — the clearest place to start improving.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "NPS مع توزيع الفئات الثلاث", en: "NPS with the three-group distribution" },
        code: `NPS Responses :=
CALCULATE (
    COUNTROWS ( 'SurveyResponse' ),
    NOT ISBLANK ( 'SurveyResponse'[NpsScore] )
)

Promoters :=
CALCULATE (
    COUNTROWS ( 'SurveyResponse' ),
    'SurveyResponse'[NpsScore] >= 9
)

-- BLANK <= 6 evaluates as TRUE in DAX (BLANK is treated as 0),
-- so non-answers must be excluded explicitly.
Detractors :=
CALCULATE (
    COUNTROWS ( 'SurveyResponse' ),
    'SurveyResponse'[NpsScore] <= 6,
    NOT ISBLANK ( 'SurveyResponse'[NpsScore] )
)

Passives :=
[NPS Responses] - [Promoters] - [Detractors]

% Promoters :=
DIVIDE ( [Promoters], [NPS Responses] )

% Detractors :=
DIVIDE ( [Detractors], [NPS Responses] )

-- Points from -100 to +100, not a percentage: format as a whole number.
NPS :=
DIVIDE ( [Promoters] - [Detractors], [NPS Responses] ) * 100`,
        assumptions: [
          {
            ar: "'SurveyResponse' بحبيبية رد واحد لكل صف، و NpsScore عدد صحيح من 0 إلى 10 أو BLANK إذا لم يُجب على السؤال.",
            en: "'SurveyResponse' is at one row per response, and NpsScore is an integer from 0 to 10 or BLANK when the question was not answered.",
          },
          {
            ar: "المقارنة BLANK <= 6 تُقيَّم كـ TRUE لأن DAX يعامل BLANK كصفر في المقارنة، ولهذا أضيف شرط NOT ISBLANK إلى المنتقدين.",
            en: "The comparison BLANK <= 6 evaluates as TRUE because DAX treats BLANK as zero in comparisons, which is why NOT ISBLANK is added to the detractor filter.",
          },
          {
            ar: "ردود الاختبار والمكررة مستبعدة في مرحلة التحميل. إن بقيت في الجدول فأضف مرشح IsValid إلى المقاييس الثلاثة.",
            en: "Test and duplicate responses are removed at load time. If they remain in the table, add an IsValid filter to all three count measures.",
          },
          {
            ar: "جدول Date مرتبط بـ ResponseDate. إن كان الاستبيان دوريًا فاربطه بتاريخ الموجة بدلًا من ذلك.",
            en: "The Date table is related to ResponseDate. For a periodic relationship survey, relate it to the wave date instead.",
          },
        ],
        requires: ["SurveyResponse[NpsScore]", "SurveyResponse[ResponseDate]"],
      },
    ],
    model: [
      {
        table: "SurveyResponse",
        grain: { ar: "رد واحد لكل صف", en: "One row per response" },
        columns: ["ResponseId", "CustomerId", "ResponseDate", "NpsScore", "SurveyType", "Comment"],
        role: { ar: "مصدر الفئات الثلاث والمقام", en: "Source of the three groups and the denominator" },
      },
      {
        table: "Customer",
        grain: { ar: "عميل واحد لكل صف", en: "One row per customer" },
        columns: ["CustomerId", "Segment", "Region", "TenureBand", "Plan"],
        role: { ar: "مقارنة NPS بين الشرائح، وهي الاستخدام الأهم للمؤشر", en: "Compares NPS across segments — the metric's most important use" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "QuarterKey"],
        role: { ar: "يُربط بـ ResponseDate", en: "Related to ResponseDate" },
      },
    ],
    visuals: [
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "NPS مع عدد الردود ونسب الفئات الثلاث في بطاقة واحدة يمنع الخلط بين النقاط والنسبة المئوية.",
          en: "NPS with response count and the three group shares in one card prevents confusing points with a percentage.",
        },
      },
      {
        pattern: "stacked-bar",
        why: {
          ar: "شريط مكدس بنسب المنتقدين والمحايدين والمروّجين لكل شريحة يكشف ما يخفيه الرقم الصافي.",
          en: "A stacked bar of detractor, passive, and promoter shares per segment reveals what the net figure hides.",
        },
      },
      {
        pattern: "period-over-period",
        why: {
          ar: "الاتجاه ربع السنوي مع حجم الردود يوضح ما إذا كان التغير حقيقيًا أم ناتجًا عن عينة صغيرة.",
          en: "The quarterly trend with response volume shows whether a change is real or an artefact of a small sample.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "قراءة NPS كنسبة مئوية للعملاء الراضين. النطاق من -100 إلى +100، و+35 لا يعني 35% من أي شيء.",
        en: "Reading NPS as the percentage of satisfied customers. The range is -100 to +100, and +35 does not mean 35% of anything.",
      },
      {
        ar: "احتساب الردود الفارغة كمنتقدين في DAX. المقارنة BLANK <= 6 صحيحة في DAX، فيتضخم عدد المنتقدين إن لم تُستبعد الفراغات صراحة.",
        en: "Counting blank answers as detractors in DAX. BLANK <= 6 is true in DAX, so detractors are inflated unless blanks are excluded explicitly.",
      },
      {
        ar: "متوسط NPS عبر الشرائح أو الأشهر. احسب من مجموع المروّجين والمنتقدين والردود في السياق، لا من متوسط الأرقام الصافية.",
        en: "Averaging NPS across segments or months. Compute from total promoters, detractors, and responses in context, not from an average of net scores.",
      },
      {
        ar: "تفسير تغير بضع نقاط على عينة صغيرة. بمئة رد، تحوّل خمسة عملاء فقط يحرك المؤشر عشر نقاط. اعرض حجم العينة دائمًا.",
        en: "Interpreting a few-point change on a small sample. With 100 responses, just five customers switching moves the score ten points. Always show the sample size.",
      },
      {
        ar: "خلط NPS العلاقة (استبيان دوري) مع NPS التفاعل (بعد كل تذكرة) في سلسلة واحدة. يقيسان أشياء مختلفة وينتجان مستويات مختلفة.",
        en: "Mixing relationship NPS (periodic survey) with transactional NPS (after each ticket) in one series. They measure different things and produce different levels.",
      },
    ],
    variants: [
      {
        label: { ar: "NPS التفاعل", en: "Transactional NPS" },
        formula: "Same formula, surveyed right after a specific interaction",
        difference: {
          ar: "يُرسل بعد تذكرة أو شراء، فيتأثر بالتفاعل الأخير أكثر من العلاقة ككل. أقرب في سلوكه إلى CSAT، ويجب ألا يُقارن بـ NPS العلاقة.",
          en: "Sent after a ticket or purchase, so it is swayed by the latest interaction more than the overall relationship. Behaves closer to CSAT and should not be compared with relationship NPS.",
        },
      },
      {
        label: { ar: "متوسط درجة التوصية", en: "Mean likelihood-to-recommend" },
        formula: "Sum of 0-10 Scores / Valid Responses",
        difference: {
          ar: "يستخدم كل الدرجات بدل التصنيف إلى ثلاث فئات، فيلتقط التحسن من 3 إلى 6 الذي لا يغير NPS. أقل شهرة لكنه أكثر حساسية.",
          en: "Uses every score rather than three buckets, so it captures a move from 3 to 6 that leaves NPS unchanged. Less known but more sensitive.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "NPS محصور رياضيًا بين -100 (كل المستجيبين منتقدون) و+100 (كل المستجيبين مروّجون)، وتحويل منتقد إلى محايد يرفعه بمقدار تحويل محايد إلى مروّج نفسه.",
          en: "NPS is mathematically bounded between -100 (all detractors) and +100 (all promoters), and moving one detractor to passive raises it by exactly as much as moving one passive to promoter.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "تصنيف 9-10 مروّجين و7-8 محايدين و0-6 منتقدين على سؤال من 0 إلى 10 هو التعريف المتعارف عليه لـ NPS.",
          en: "Classifying 9-10 as promoters, 7-8 as passives, and 0-6 as detractors on a 0-to-10 question is the accepted NPS definition.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "من يُستطلع، ومتى، وكم مرة، ونوع الاستبيان (علاقة أو تفاعل)، قرارات داخلية تحدد ما إذا كانت أرقام فترتين قابلة للمقارنة.",
          en: "Who is surveyed, when, how often, and which survey type (relationship or transactional) are internal decisions that determine whether two periods are comparable.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (400 رد، 55% مروّجون، 20% منتقدون) من تأليفنا للتوضيح ولا تمثل معيارًا لأي قطاع.",
          en: "The example figures (400 responses, 55% promoters, 20% detractors) are invented for illustration and represent no industry benchmark.",
        },
      },
    ],
    related: ["csat", "churn-rate", "ltv"],
    exercise: {
      prompt: {
        ar: "استبيان ربع سنوي تلقى 640 ردًا: 256 مروّجًا و224 محايدًا و160 منتقدًا. احسب NPS. في الربع التالي، بقي عدد الردود والمروّجين كما هو، لكن 64 منتقدًا أصبحوا محايدين. احسب NPS الجديد وعلّق.",
        en: "A quarterly survey received 640 responses: 256 promoters, 224 passives, and 160 detractors. Compute NPS. Next quarter, responses and promoters stay the same, but 64 detractors become passives. Compute the new NPS and comment.",
      },
      hint: {
        ar: "احسب نسبة كل فئة من 640 أولًا. المحايدون لا يدخلون البسط لكنهم يبقون في المقام.",
        en: "Compute each group's share of 640 first. Passives are not in the numerator but remain in the denominator.",
      },
      answer: {
        ar: "الربع الأول: المروّجون = 256 ÷ 640 = 40%، والمنتقدون = 160 ÷ 640 = 25%، فـ NPS = 40 - 25 = +15. الربع التالي: المنتقدون = 160 - 64 = 96، أي 96 ÷ 640 = 15%، والمروّجون ما زالوا 40%، فـ NPS = 40 - 15 = +25. ارتفع المؤشر 10 نقاط دون كسب مروّج واحد جديد، فقط بتقليل عدم الرضا. لهذا يجب أن تعرض اللوحة الفئات الثلاث لا الرقم الصافي وحده.",
        en: "First quarter: promoters = 256 ÷ 640 = 40%, detractors = 160 ÷ 640 = 25%, so NPS = 40 - 25 = +15. Next quarter: detractors = 160 - 64 = 96, i.e. 96 ÷ 640 = 15%, promoters still 40%, so NPS = 40 - 15 = +25. The score rose 10 points without winning a single new promoter, purely by reducing dissatisfaction. That is why the dashboard must show all three groups, not the net figure alone.",
      },
    },
    references: [
      {
        title: "CALCULATE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/calculate-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع تطبيق شروط الفئات كمرشحات على عدّ الردود.",
          en: "Reference for applying the group conditions as filters on the response count.",
        },
      },
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع القسمة الآمنة التي تعيد BLANK عند غياب الردود بدلًا من خطأ.",
          en: "Reference for safe division returning BLANK rather than an error when there are no responses.",
        },
      },
    ],
  },

  {
    id: "avg-resolution-time",
    slug: "avg-resolution-time",
    name: "Average Resolution Time",
    nameAr: "متوسط زمن الحل",
    domains: ["customer-service", "it-saas"],
    category: { ar: "كفاءة الحل", en: "Resolution efficiency" },
    difficulty: "intermediate",
    unit: { ar: "ساعات لكل حالة", en: "Hours per case" },
    aggregation: "non-additive",
    definition: {
      ar: "متوسط الوقت اللازم لحل الحالة من لحظة إنشائها حتى حلها أو إغلاقها وفق تعريف الخدمة، محسوبًا على الحالات المحلولة المؤهلة فقط خلال الفترة.",
      en: "The average time taken to resolve a case from creation until it is resolved or closed per the service definition, computed only over eligible cases resolved in the period.",
    },
    whyItMatters: {
      ar: "يكشف أنواع الحالات الصعبة ونقاط الاختناق في العملية: التحويل بين الفرق، وانتظار رد العميل، والاعتماد على جهات خارجية. هو المؤشر الذي يترجم كفاءة التشغيل إلى وقت ينتظره العميل.",
      en: "It reveals difficult case types and process bottlenecks: hand-offs between teams, waiting on the customer, and dependence on third parties. It is the metric that translates operational efficiency into time the customer waits.",
    },
    interpretation: {
      ar: "متوسط 12 ساعة قد يخفي أن معظم الحالات تُحل في ساعتين بينما قلة تستغرق أيامًا. لهذا يُقرأ المتوسط مع الوسيط والمئين التسعين، ويُقسّم حسب الأولوية والفئة قبل أي استنتاج.",
      en: "A 12-hour average may hide that most cases close in two hours while a few take days. That is why the mean is read with the median and P90, and split by priority and category before drawing any conclusion.",
    },
    formula: "Average Resolution Time = Sum(Resolved Timestamp - Created Timestamp) / Number of Resolved Eligible Cases",
    numerator: {
      ar: "مجموع أزمنة الحل (الوقت بين الإنشاء والحل) للحالات المؤهلة التي حُلّت خلال الفترة، بالساعات المنقضية أو ساعات العمل حسب التعريف.",
      en: "Sum of resolution durations (time from creation to resolution) for eligible cases resolved in the period, in elapsed or business hours per the definition.",
    },
    denominator: {
      ar: "عدد الحالات المؤهلة التي حُلّت خلال الفترة. الحالات المفتوحة لا تدخل هنا إطلاقًا، ويُعرض عمر المتراكم منها في مؤشر منفصل.",
      en: "Number of eligible cases resolved in the period. Open cases never enter here; the age of the open backlog is reported as a separate metric.",
    },
    timeGrain: {
      ar: "أسبوعي أو شهري، منسوبًا إلى تاريخ الحل. نسبته إلى تاريخ الإنشاء بديل مشروع لكنه يجعل الفترات الحديثة غير مكتملة لأن حالاتها الطويلة لم تُحل بعد.",
      en: "Weekly or monthly, attributed to the resolution date. Attributing to creation date is a legitimate alternative, but it leaves recent periods incomplete because their long cases are not resolved yet.",
    },
    direction: {
      rising: {
        ar: "الارتفاع يشير إلى اختناق أو حالات أعقد أو نقص في الطاقة. لكنه قد يرتفع أيضًا عندما يُغلق الفريق أخيرًا حالات قديمة متراكمة، وهذا تحسن لا تراجع.",
        en: "A rise points to a bottleneck, more complex cases, or a capacity shortfall. But it can also rise when the team finally closes old backlog cases — an improvement, not a decline.",
      },
      falling: {
        ar: "الانخفاض إيجابي إذا جاء من حل أسرع. تحقق أنه لم يأتِ من إغلاق مبكر يتبعه إعادة فتح، أو من ترك الحالات الصعبة مفتوحة خارج الحساب.",
        en: "A fall is positive if it comes from faster resolution. Check it did not come from premature closure followed by reopening, or from leaving hard cases open and out of the calculation.",
      },
      caveat: {
        ar: "المؤشر يكافئ ضمنيًا حل الحالات السهلة أولًا وترك الصعبة، لأن الحالات المفتوحة لا تُحتسب. اقرأه دائمًا مع عمر المتراكم ونسبة إعادة الفتح.",
        en: "The metric implicitly rewards solving easy cases first and leaving hard ones, because open cases are not counted. Always read it with backlog age and reopen rate.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "حالات محلولة في الشهر", en: "Cases resolved in the month" }, value: "100" },
        { label: { ar: "مجموع ساعات الحل", en: "Total resolution hours" }, value: "1,200" },
        { label: { ar: "حالات مفتوحة في نهاية الشهر (خارج الحساب)", en: "Cases open at month end (outside the calculation)" }, value: "15" },
      ],
      steps: [
        { label: { ar: "متوسط زمن الحل", en: "Average resolution time" }, expression: "1,200 / 100 = 12 hours" },
      ],
      result: { label: { ar: "متوسط زمن الحل", en: "Average resolution time" }, value: "12 hours per case" },
      reading: {
        ar: "12 ساعة لكل حالة محلولة. الحالات المفتوحة الخمس عشرة لا تؤثر في الرقم مهما طال عمرها، فيجب أن يظهر عددها وعمرها بجانبه وإلا بدا المؤشر أفضل كلما تراكمت الحالات الصعبة.",
        en: "12 hours per resolved case. The 15 open cases do not affect the number however old they get, so their count and age must sit next to it — otherwise the metric looks better the more hard cases pile up.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "المتوسط والوسيط والمئين التسعين حسب تاريخ الحل", en: "Mean, median, and P90 by resolution date" },
        code: `-- The Date table has an active relationship to Ticket[CreatedDate]
-- and an inactive one to Ticket[ResolvedDate], activated here.

Resolved Cases :=
CALCULATE (
    COUNTROWS ( 'Ticket' ),
    NOT ISBLANK ( 'Ticket'[ResolvedAt] ),
    'Ticket'[IsEligible] = TRUE (),
    USERELATIONSHIP ( 'Date'[Date], 'Ticket'[ResolvedDate] )
)

Total Resolution Hours :=
CALCULATE (
    SUMX (
        FILTER (
            'Ticket',
            NOT ISBLANK ( 'Ticket'[ResolvedAt] ) && 'Ticket'[IsEligible] = TRUE ()
        ),
        DATEDIFF ( 'Ticket'[CreatedAt], 'Ticket'[ResolvedAt], MINUTE ) / 60
    ),
    USERELATIONSHIP ( 'Date'[Date], 'Ticket'[ResolvedDate] )
)

Avg Resolution Time (h) :=
DIVIDE ( [Total Resolution Hours], [Resolved Cases] )

Median Resolution Time (h) :=
CALCULATE (
    MEDIANX (
        FILTER (
            'Ticket',
            NOT ISBLANK ( 'Ticket'[ResolvedAt] ) && 'Ticket'[IsEligible] = TRUE ()
        ),
        DATEDIFF ( 'Ticket'[CreatedAt], 'Ticket'[ResolvedAt], MINUTE ) / 60
    ),
    USERELATIONSHIP ( 'Date'[Date], 'Ticket'[ResolvedDate] )
)

P90 Resolution Time (h) :=
IF (
    [Resolved Cases] > 0,
    CALCULATE (
        PERCENTILEX.INC (
            FILTER (
                'Ticket',
                NOT ISBLANK ( 'Ticket'[ResolvedAt] ) && 'Ticket'[IsEligible] = TRUE ()
            ),
            DATEDIFF ( 'Ticket'[CreatedAt], 'Ticket'[ResolvedAt], MINUTE ) / 60,
            0.9
        ),
        USERELATIONSHIP ( 'Date'[Date], 'Ticket'[ResolvedDate] )
    )
)

-- Reported separately: open cases never enter the averages above.
Open Backlog :=
CALCULATE (
    COUNTROWS ( 'Ticket' ),
    ISBLANK ( 'Ticket'[ResolvedAt] ),
    REMOVEFILTERS ( 'Date' )
)`,
        assumptions: [
          {
            ar: "'Ticket' بحبيبية حالة واحدة لكل صف، ويحتوي CreatedAt و ResolvedAt من نوع تاريخ ووقت، و ResolvedDate عمود تاريخ فقط مشتق من ResolvedAt.",
            en: "'Ticket' is at one row per case with CreatedAt and ResolvedAt as datetimes, and ResolvedDate is a date-only column derived from ResolvedAt.",
          },
          {
            ar: "العلاقة النشطة بين Date و CreatedDate، وعلاقة غير نشطة مع ResolvedDate تُفعّل بـ USERELATIONSHIP، فتُنسب كل حالة إلى شهر حلها.",
            en: "The active relationship runs from Date to CreatedDate, with an inactive one to ResolvedDate enabled by USERELATIONSHIP, so each case lands in the month it was resolved.",
          },
          {
            ar: "المقاييس هنا بالساعات المنقضية. لساعات العمل، احسب عمود ResolutionBusinessHours في مرحلة التحميل مقابل تقويم الدعم واستبدل تعبير DATEDIFF به.",
            en: "These measures use elapsed hours. For business hours, compute a ResolutionBusinessHours column at load time against the support calendar and substitute it for the DATEDIFF expression.",
          },
          {
            ar: "Open Backlog يزيل مرشح التاريخ ليعرض كل المفتوح حاليًا. إن أردت المتراكم كما كان في نهاية كل فترة فهذا مقياس لقطة مختلف يحتاج منطقًا شبه تجميعي.",
            en: "Open Backlog removes the date filter to show everything open now. Backlog as of each period end is a different snapshot measure that needs semi-additive logic.",
          },
          {
            ar: "IF حول PERCENTILEX.INC يمنع استدعاءه على جدول فارغ.",
            en: "The IF around PERCENTILEX.INC prevents calling it on an empty table.",
          },
        ],
        requires: ["Ticket[CreatedAt]", "Ticket[ResolvedAt]", "Ticket[ResolvedDate]", "Ticket[CreatedDate]", "Ticket[IsEligible]"],
      },
    ],
    model: [
      {
        table: "Ticket",
        grain: { ar: "حالة واحدة لكل صف", en: "One row per case" },
        columns: ["TicketId", "CreatedAt", "CreatedDate", "ResolvedAt", "ResolvedDate", "Priority", "CategoryId", "TeamId", "IsEligible", "ReopenCount"],
        role: { ar: "جدول الحقائق الأساسي للمؤشر", en: "Primary fact table for the metric" },
      },
      {
        table: "IssueCategory",
        grain: { ar: "فئة مشكلة واحدة لكل صف", en: "One row per issue category" },
        columns: ["CategoryId", "CategoryName", "ParentCategory"],
        role: { ar: "تحديد أنواع الحالات الأطول حلًا", en: "Identifies the slowest case types" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "WeekKey", "MonthKey", "IsWorkingDay"],
        role: { ar: "علاقة نشطة مع CreatedDate وغير نشطة مع ResolvedDate", en: "Active relationship to CreatedDate, inactive to ResolvedDate" },
      },
    ],
    visuals: [
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "المتوسط والوسيط والمئين التسعين معًا يكشفون فورًا ما إذا كان المتوسط تسحبه قلة من الحالات الطويلة.",
          en: "Mean, median, and P90 together instantly show whether a few long cases are dragging the mean.",
        },
      },
      {
        pattern: "scatter-quadrant",
        why: {
          ar: "رسم كل فئة بحجم الحالات مقابل زمن الحل يحدد الفئات الكبيرة والبطيئة التي يجب البدء بها.",
          en: "Plotting each category by case volume against resolution time pinpoints the large, slow categories to tackle first.",
        },
      },
      {
        pattern: "backlog-analysis",
        why: {
          ar: "عمر الحالات المفتوحة يُعرض منفصلًا لأنه الجزء الذي لا يراه متوسط زمن الحل إطلاقًا.",
          en: "Open-case age is shown separately because it is exactly what the average resolution time never sees.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "خلط الحالات المفتوحة مع المحلولة. الحالات المفتوحة ليست حالات محلولة؛ إدراجها بزمن حتى اليوم يخلط مؤشرين، وتجاهلها دون عرض المتراكم يخفي المشكلة.",
        en: "Mixing open cases with resolved ones. Open tickets are not resolved cases; including them with age-to-date blends two metrics, and ignoring them without showing the backlog hides the problem.",
      },
      {
        ar: "عدم تحديد معاملة ساعات العمل. حالة أُنشئت مساء الخميس وحُلّت صباح الأحد قد تكون 60 ساعة منقضية أو ساعتي عمل. التعريف يجب أن يظهر في عنوان المقياس.",
        en: "Not defining business-hours treatment. A case created on Friday evening and resolved on Monday morning may be 60 elapsed hours or two business hours. The definition must appear in the measure title.",
      },
      {
        ar: "الاكتفاء بالمتوسط. توزيع أزمنة الحل ملتوٍ بشدة، وحالة واحدة عالقة أسبوعًا قد ترفع متوسط فريق صغير إلى الضعف.",
        en: "Relying on the mean alone. Resolution times are heavily skewed, and one case stuck for a week can double a small team's average.",
      },
      {
        ar: "عدم معالجة إعادة الفتح. إن احتُسب زمن الحل حتى أول إغلاق فقط، فإن الإغلاق المبكر ثم إعادة الفتح يحسّن المؤشر زورًا. حدد هل يُقاس حتى الإغلاق النهائي.",
        en: "Not handling reopens. If resolution time runs only to the first closure, closing early and reopening falsely improves the metric. Decide whether it is measured to final closure.",
      },
      {
        ar: "خلط الأولويات في رقم واحد. الحالات الحرجة والعادية لها أهداف مختلفة، وتغير المزيج بينها يحرك المتوسط الإجمالي دون أي تغير في الأداء.",
        en: "Blending priorities into one number. Critical and routine cases have different targets, and a change in their mix moves the overall average without any change in performance.",
      },
    ],
    variants: [
      {
        label: { ar: "الوسيط والمئين التسعين لزمن الحل", en: "Median and P90 resolution time" },
        formula: "MEDIAN(Resolved - Created), PERCENTILE 90 (Resolved - Created)",
        difference: {
          ar: "يصفان الحالة النمطية والحالات الأسوأ دون تأثر بالقيم الشاذة. الأنسب للأهداف التشغيلية، بينما يبقى المتوسط مفيدًا لتخطيط الطاقة لأنه يرتبط بمجموع الساعات.",
          en: "Describe the typical case and the worst cases without being skewed by outliers. Best for operational targets, while the mean stays useful for capacity planning because it ties to total hours.",
        },
      },
      {
        label: { ar: "زمن الحل مع استبعاد الانتظار على العميل", en: "Resolution time excluding customer wait" },
        formula: "(Resolved - Created) - Time in 'Pending Customer' Status",
        difference: {
          ar: "يطرح الوقت الذي كانت فيه الحالة معلقة بانتظار رد العميل. أعدل لتقييم الفريق، لكنه يحتاج سجل تغيير الحالات ولا يعكس ما شعر به العميل.",
          en: "Subtracts time the case sat pending a customer reply. Fairer for judging the team, but it needs a status-change log and does not reflect what the customer experienced.",
        },
      },
      {
        label: { ar: "زمن الحل حسب فوج الإنشاء", en: "Resolution time by creation cohort" },
        formula: "Average(Resolved - Created) for cases created in the period",
        difference: {
          ar: "ينسب الحالات إلى شهر إنشائها. يمنع ظاهرة ارتفاع المتوسط عند إغلاق المتراكم القديم، لكن الأشهر الحديثة تبقى غير مكتملة حتى تُحل حالاتها الطويلة.",
          en: "Attributes cases to their creation month. Avoids the average jumping when old backlog is cleared, but recent months stay incomplete until their long cases resolve.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "متوسط زمن الحل مضروبًا في عدد الحالات المحلولة يساوي مجموع ساعات الحل، ولهذا يصلح المتوسط لتخطيط الطاقة بخلاف الوسيط.",
          en: "Average resolution time multiplied by resolved cases equals total resolution hours, which is why the mean suits capacity planning whereas the median does not.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "حساب زمن الحل على الحالات المحلولة فقط وعرض عمر المتراكم في مؤشر منفصل ممارسة شائعة في تقارير الدعم.",
          en: "Computing resolution time over resolved cases only and reporting backlog age as a separate metric is common practice in support reporting.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "تعريف \"محلولة\"، ومعاملة ساعات العمل والانتظار على العميل وإعادة الفتح، قرارات داخلية أو تعاقدية.",
          en: "What counts as \"resolved\", and how business hours, customer wait, and reopens are treated, are internal or contractual decisions.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (1,200 ساعة على 100 حالة) من تأليفنا للتوضيح وليست معيارًا.",
          en: "The example figures (1,200 hours across 100 cases) are invented for illustration and are not a benchmark.",
        },
      },
    ],
    related: ["first-response-time", "sla-achievement-rate", "first-contact-resolution", "mttr"],
    exercise: {
      prompt: {
        ar: "فريق حلّ 8 حالات هذا الأسبوع بأزمنة حل 2 و3 و3 و4 و5 و6 و8 و49 ساعة، وتبقى لديه 3 حالات مفتوحة أعمارها 30 و40 و50 ساعة. احسب المتوسط والوسيط لزمن الحل، ومتوسط عمر المتراكم. ماذا تعرض في لوحة المعلومات؟",
        en: "A team resolved 8 cases this week with resolution times of 2, 3, 3, 4, 5, 6, 8, and 49 hours, and still has 3 open cases aged 30, 40, and 50 hours. Compute the mean and median resolution time and the average backlog age. What do you show on the dashboard?",
      },
      hint: {
        ar: "مع عدد زوجي من القيم، الوسيط هو متوسط القيمتين في المنتصف. الحالات المفتوحة لا تدخل حساب زمن الحل.",
        en: "With an even count, the median is the average of the two middle values. Open cases do not enter the resolution-time calculation.",
      },
      answer: {
        ar: "مجموع ساعات الحل = 2 + 3 + 3 + 4 + 5 + 6 + 8 + 49 = 80، فالمتوسط = 80 ÷ 8 = 10 ساعات. الوسيط = (4 + 5) ÷ 2 = 4.5 ساعة. متوسط عمر المتراكم = (30 + 40 + 50) ÷ 3 = 40 ساعة. حالة واحدة (49 ساعة) رفعت المتوسط إلى أكثر من ضعف الوسيط، والحالات المفتوحة أقدم من أي حالة محلولة تقريبًا. تعرض اللوحة الوسيط والمتوسط والمئين التسعين، وبجانبها 3 حالات مفتوحة بمتوسط عمر 40 ساعة. الرقم 10 ساعات وحده يوحي بأداء جيد بينما المشكلة الحقيقية في المتراكم.",
        en: "Total resolution hours = 2 + 3 + 3 + 4 + 5 + 6 + 8 + 49 = 80, so the mean = 80 ÷ 8 = 10 hours. The median = (4 + 5) ÷ 2 = 4.5 hours. Average backlog age = (30 + 40 + 50) ÷ 3 = 40 hours. One case (49 hours) pushed the mean above twice the median, and the open cases are older than almost every resolved one. The dashboard shows median, mean, and P90, with 3 open cases averaging 40 hours beside them. The 10-hour figure alone suggests good performance while the real problem sits in the backlog.",
      },
    },
    references: [
      {
        title: "USERELATIONSHIP function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/userelationship-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع تفعيل العلاقة غير النشطة مع تاريخ الحل لنسب الحالات إلى شهر حلها.",
          en: "Reference for activating the inactive relationship to the resolution date so cases land in the month they were resolved.",
        },
      },
      {
        title: "PERCENTILEX.INC function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/percentilex-inc-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع حساب المئين التسعين لزمن الحل عبر تعبير يُقيَّم لكل حالة.",
          en: "Reference for computing the 90th percentile of resolution time over an expression evaluated per case.",
        },
      },
    ],
  },

  {
    id: "sla-achievement-rate",
    slug: "sla-achievement-rate",
    name: "SLA Achievement Rate",
    nameAr: "نسبة تحقيق اتفاقية مستوى الخدمة",
    domains: ["customer-service", "it-saas"],
    category: { ar: "مستوى الخدمة", en: "Service level" },
    difficulty: "intermediate",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة الحالات المؤهلة التي حققت هدف اتفاقية مستوى الخدمة (SLA) المنطبق عليها، سواء كان هدف استجابة أو هدف حل. كل حالة تُقيَّم مقابل هدفها هي حسب الأولوية ونوع العميل، لا مقابل رقم واحد للجميع.",
      en: "The share of eligible cases that met the service level agreement (SLA) target that applies to them, whether a response or a resolution target. Each case is judged against its own target by priority and customer tier, not against one number for all.",
    },
    whyItMatters: {
      ar: "هو المؤشر الذي يراقب الالتزامات التعاقدية، وقد ترتبط به غرامات أو خصومات أو تجديد العقود. الإخفاق فيه له تكلفة مالية مباشرة لا مجرد أثر على السمعة.",
      en: "It monitors contractual commitments, and penalties, service credits, or contract renewals may depend on it. Missing it carries a direct financial cost, not just a reputational one.",
    },
    interpretation: {
      ar: "تحقيق 95% يعني أن 5 حالات من كل 100 خرقت الاتفاقية. لكن النسبة الإجمالية قد تخفي أن الخروقات متركزة في الأولوية الحرجة، وهي عادة الأهم تعاقديًا والأقل عددًا.",
      en: "A 95% rate means 5 cases in every 100 breached the agreement. But the overall rate can hide breaches concentrated in the critical priority, which is usually the most important contractually and the smallest in volume.",
    },
    formula: "SLA Achievement % = Eligible Cases Meeting SLA / Eligible Cases x 100",
    numerator: {
      ar: "الحالات المؤهلة التي تحقق فيها الهدف (استجابة أو حل) ضمن الوقت المحدد لها، بعد تطبيق قواعد الإيقاف وتقويم العمل المتفق عليه.",
      en: "Eligible cases where the target (response or resolution) was met within its allotted time, after applying the agreed pause rules and business calendar.",
    },
    denominator: {
      ar: "الحالات المؤهلة التي انتهى أجل هدفها خلال الفترة أو اكتملت فيها. الحالات الجارية التي لم يحن أجلها لا تُحكم بعد، أما الجارية التي تجاوزت أجلها فهي خرق بالفعل وتدخل المقام.",
      en: "Eligible cases whose target fell due or was completed in the period. In-flight cases not yet due are not judged; in-flight cases already past their due time are breaches and do enter the denominator.",
    },
    timeGrain: {
      ar: "حسب فترة التقرير التعاقدية، غالبًا شهرية. يُراقب يوميًا للتشغيل، لكن الرقم الرسمي هو ما ينص عليه العقد.",
      en: "Per the contractual reporting period, usually monthly. Monitored daily for operations, but the official figure is whatever the contract specifies.",
    },
    direction: {
      rising: {
        ar: "الارتفاع يعني وفاءً أفضل بالالتزامات. تحقق أنه لم يأتِ من إساءة استخدام الإيقاف المؤقت أو من إعادة تصنيف الأولويات إلى مستويات بأهداف أطول.",
        en: "A rise means commitments are kept better. Check it did not come from abusing SLA pauses or from reclassifying priorities to levels with longer targets.",
      },
      falling: {
        ar: "الانخفاض يستدعي فحص مصفوفة الخروقات حسب الأولوية والفريق فورًا، لأن الخروقات في الأولوية الحرجة قد تكون لها تبعات تعاقدية مباشرة.",
        en: "A fall calls for checking the breach matrix by priority and team immediately, because critical-priority breaches may carry direct contractual consequences.",
      },
      caveat: {
        ar: "المؤشر ثنائي: حالة تأخرت دقيقة واحدة تساوي حالة تأخرت أسبوعًا. لذلك يُقرأ مع حجم التأخر في الحالات المخترقة، وإلا فقد يهمل الفريق الحالة بمجرد خرقها.",
        en: "The metric is binary: a case one minute late counts the same as one a week late. So it is read with the size of the overrun on breached cases; otherwise a team may abandon a case once it has breached.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "إجمالي الحالات في الشهر", en: "Total cases in the month" }, value: "1,040" },
        { label: { ar: "حالات غير مؤهلة (مكررة، خارج نطاق العقد)", en: "Ineligible cases (duplicates, out of contract scope)" }, value: "40" },
        { label: { ar: "حالات مؤهلة", en: "Eligible cases" }, value: "1,000" },
        { label: { ar: "حالات حققت هدف الحل", en: "Cases meeting the resolution SLA" }, value: "950" },
      ],
      steps: [
        { label: { ar: "المقام بعد الاستبعاد", en: "Denominator after exclusions" }, expression: "1,040 - 40 = 1,000" },
        { label: { ar: "نسبة تحقيق SLA", en: "SLA achievement" }, expression: "950 / 1,000 = 95.0%" },
        { label: { ar: "عدد الخروقات", en: "Breaches" }, expression: "1,000 - 950 = 50" },
      ],
      result: { label: { ar: "نسبة تحقيق اتفاقية مستوى الخدمة", en: "SLA achievement rate" }, value: "95%" },
      reading: {
        ar: "50 خرقًا من 1,000 حالة. الخطوة التالية هي معرفة توزيعها على الأولويات، فخمسون خرقًا في الأولوية المنخفضة تختلف كليًا عن خمسة في الأولوية الحرجة.",
        en: "50 breaches out of 1,000 cases. The next step is seeing how they spread across priorities: fifty breaches in low priority are entirely different from five in critical.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "نسبة تحقيق SLA بجدول لكل هدف", en: "SLA achievement with one row per target" },
        code: `-- 'TicketSla' has one row per ticket per SLA target (Response, Resolution).
-- Always filter SlaType: mixing the two double-counts every ticket.

SLA Eligible Cases :=
CALCULATE (
    COUNTROWS ( 'TicketSla' ),
    'TicketSla'[IsEligible] = TRUE ()
)

SLA Met Cases :=
CALCULATE (
    COUNTROWS ( 'TicketSla' ),
    'TicketSla'[IsEligible] = TRUE (),
    'TicketSla'[SlaStatus] = "Met"
)

SLA Achievement % :=
DIVIDE ( [SLA Met Cases], [SLA Eligible Cases] )

SLA Breaches :=
[SLA Eligible Cases] - [SLA Met Cases]

Resolution SLA % :=
CALCULATE ( [SLA Achievement %], 'TicketSla'[SlaType] = "Resolution" )

Response SLA % :=
CALCULATE ( [SLA Achievement %], 'TicketSla'[SlaType] = "Response" )

-- Guard for visuals without a SlaType filter.
SLA Achievement % (checked) :=
IF (
    HASONEVALUE ( 'TicketSla'[SlaType] ),
    [SLA Achievement %]
)`,
        assumptions: [
          {
            ar: "'TicketSla' بحبيبية صف واحد لكل تذكرة لكل نوع هدف (استجابة أو حل)، وفيه TargetDueAt و SlaStatus و IsEligible و DueDate.",
            en: "'TicketSla' is at one row per ticket per target type (response or resolution), carrying TargetDueAt, SlaStatus, IsEligible, and DueDate.",
          },
          {
            ar: "SlaStatus يُحسب في مرحلة التحميل أو من أداة الدعم: Met أو Breached. قواعد الإيقاف المؤقت وتقويم العمل تُطبق هناك لا في DAX.",
            en: "SlaStatus is computed at load time or by the support tool as Met or Breached. Pause rules and the business calendar are applied there, not in DAX.",
          },
          {
            ar: "IsEligible يكون FALSE للحالات الجارية التي لم يحن أجلها بعد، و TRUE للجارية التي تجاوزت أجلها مع SlaStatus = Breached، فلا تختفي الخروقات الجارية من المقام.",
            en: "IsEligible is FALSE for in-flight cases not yet due, and TRUE for in-flight cases past due with SlaStatus = Breached, so ongoing breaches do not vanish from the denominator.",
          },
          {
            ar: "جدول Date مرتبط بـ TicketSla[DueDate]، فتُنسب كل حالة إلى الفترة التي استحق فيها هدفها.",
            en: "The Date table is related to TicketSla[DueDate], so each case lands in the period its target fell due.",
          },
        ],
        requires: ["TicketSla[SlaType]", "TicketSla[IsEligible]", "TicketSla[SlaStatus]", "TicketSla[DueDate]"],
      },
    ],
    model: [
      {
        table: "TicketSla",
        grain: { ar: "صف واحد لكل تذكرة لكل نوع هدف", en: "One row per ticket per SLA target type" },
        columns: ["TicketId", "SlaType", "SlaPolicyId", "StartedAt", "TargetDueAt", "DueDate", "AchievedAt", "PausedMinutes", "SlaStatus", "IsEligible", "OverrunMinutes"],
        role: { ar: "جدول الحقائق الأساسي للمؤشر", en: "Primary fact table for the metric" },
      },
      {
        table: "SlaPolicy",
        grain: { ar: "سياسة واحدة لكل صف (أولوية × فئة عميل × نوع هدف)", en: "One row per policy (priority x customer tier x target type)" },
        columns: ["SlaPolicyId", "Priority", "CustomerTier", "SlaType", "TargetMinutes", "CalendarId"],
        role: { ar: "يوثق الهدف المنطبق على كل حالة", en: "Documents the target that applies to each case" },
      },
      {
        table: "Ticket",
        grain: { ar: "تذكرة واحدة لكل صف", en: "One row per ticket" },
        columns: ["TicketId", "TeamId", "CustomerId", "Priority", "CategoryId"],
        role: { ar: "بُعد يوفر الفريق والعميل والفئة لكل صف في TicketSla", en: "Dimension providing team, customer, and category for each TicketSla row" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "WeekKey", "MonthKey"],
        role: { ar: "يُربط بـ TicketSla[DueDate]", en: "Related to TicketSla[DueDate]" },
      },
    ],
    visuals: [
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "بطاقات منفصلة لتحقيق هدف الاستجابة وهدف الحل وعدد الخروقات تمنع دمج هدفين مختلفين في رقم واحد.",
          en: "Separate cards for response SLA, resolution SLA, and breach count stop two different targets being merged into one number.",
        },
      },
      {
        pattern: "actual-vs-target",
        why: {
          ar: "SLA التزام تعاقدي، فالمقارنة مع النسبة المتعاقد عليها لكل أولوية أهم من الاتجاه المطلق.",
          en: "An SLA is a contractual commitment, so comparison with the contracted rate per priority matters more than the raw trend.",
        },
      },
      {
        pattern: "exception-table",
        why: {
          ar: "مصفوفة الخروقات حسب الأولوية والفريق، مع الحالات المعرّضة للخرق قريبًا، هي ما يُدار به العمل اليومي.",
          en: "The breach matrix by priority and team, plus cases about to breach, is what daily work is managed from.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عدم تحديد أي SLA ينطبق. هدف الاستجابة وهدف الحل مختلفان، وأهداف الأولويات وفئات العملاء مختلفة. رقم واحد يخلط كل ذلك لا يطابق أي بند في العقد.",
        en: "Not defining which SLA applies. Response and resolution targets differ, as do targets by priority and customer tier. One number mixing them all matches no clause in the contract.",
      },
      {
        ar: "إساءة استخدام الإيقاف المؤقت. إذا كان وضع \"بانتظار العميل\" يوقف العداد دون ضوابط، يمكن لأي حالة أن تحقق الهدف. قواعد الإيقاف يجب أن تكون موثقة ومراقبة.",
        en: "Abusing pause rules. If a \"waiting on customer\" status stops the clock without controls, any case can meet its target. Pause rules must be documented and monitored.",
      },
      {
        ar: "تجاهل تقويم العمل والعطل. هدف 8 ساعات بساعات العمل يختلف جذريًا عن 8 ساعات متواصلة، والعقد هو الذي يحدد أيهما.",
        en: "Ignoring business calendars and holidays. An 8-hour target in business hours is radically different from 8 continuous hours, and the contract decides which.",
      },
      {
        ar: "استبعاد الحالات الجارية المتجاوزة لأجلها لأنها لم تُغلق بعد. هي خروقات مؤكدة، وتركها خارج المقام يرفع النسبة ويؤخر ظهور المشكلة إلى الشهر التالي.",
        en: "Excluding in-flight cases already past due because they are not closed yet. They are certain breaches, and leaving them out of the denominator inflates the rate and pushes the problem into next month.",
      },
      {
        ar: "الاكتفاء بالنسبة الإجمالية. خروقات قليلة في الأولوية الحرجة تضيع وسط آلاف الحالات العادية، بينما قد تكون هي وحدها موضوع الغرامة.",
        en: "Reporting only the overall rate. A few critical-priority breaches get lost among thousands of routine cases, yet they alone may be what triggers the penalty.",
      },
    ],
    variants: [
      {
        label: { ar: "تحقيق هدف الاستجابة فقط", en: "Response SLA achievement" },
        formula: "Cases With First Response Within Target / Eligible Cases",
        difference: {
          ar: "يقيس سرعة الرد الأول مقابل الهدف. أسهل تحقيقًا من هدف الحل وأقل دلالة على تجربة العميل، ولا يجوز خلطه معه.",
          en: "Measures first-reply speed against target. Easier to meet than the resolution target and less telling about customer experience; never blend the two.",
        },
      },
      {
        label: { ar: "تحقيق SLA مرجّح بالأولوية", en: "Priority-weighted SLA achievement" },
        formula: "Sum(Weight x Met) / Sum(Weight x Eligible)",
        difference: {
          ar: "يعطي الحالات الحرجة وزنًا أكبر حتى لا تذوب في حجم الحالات العادية. الأوزان قرار إداري يجب الاتفاق عليه وتوثيقه.",
          en: "Gives critical cases more weight so they do not dissolve into routine volume. The weights are a management decision to agree and document.",
        },
      },
      {
        label: { ar: "متوسط التجاوز في الحالات المخترقة", en: "Average overrun on breached cases" },
        formula: "Sum(Achieved - Target Due) / Breached Cases",
        difference: {
          ar: "مكمل لا بديل: يقيس حجم التأخر في الحالات التي خرقت الهدف، فيعالج الطبيعة الثنائية للمؤشر الأساسي.",
          en: "A complement rather than a replacement: measures how late breached cases were, addressing the binary nature of the main metric.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "نسبة التحقيق الإجمالية هي متوسط نسب الأولويات مرجحًا بعدد حالات كل أولوية، فأولوية قليلة الحالات لا تستطيع تحريك الرقم الإجمالي كثيرًا مهما كان أداؤها.",
          en: "The overall rate is the average of priority rates weighted by each priority's case count, so a low-volume priority cannot move the overall figure much however it performs.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "الفصل بين أهداف الاستجابة والحل، وتحديد الهدف حسب الأولوية، هما الهيكل الشائع لاتفاقيات مستوى الخدمة في الدعم.",
          en: "Separating response from resolution targets and setting targets by priority is the common structure of support SLAs.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "الأهداف الزمنية وقواعد الإيقاف وتقويم العمل والنسبة المتعاقد عليها كلها تحددها العقود والسياسات الداخلية ولا يوجد فيها معيار عالمي.",
          en: "Time targets, pause rules, business calendars, and the contracted achievement rate are all set by contracts and internal policy, with no universal standard.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (1,000 حالة مؤهلة، 950 حققت الهدف) من تأليفنا للتوضيح وليست معيارًا.",
          en: "The example figures (1,000 eligible cases, 950 meeting SLA) are invented for illustration and are not a benchmark.",
        },
      },
    ],
    related: ["first-response-time", "avg-resolution-time", "availability", "otif"],
    exercise: {
      prompt: {
        ar: "في شهر ما، كان لدى الفريق 40 حالة مؤهلة بأولوية حرجة حققت 30 منها هدف الحل، و960 حالة مؤهلة بأولويات أخرى حققت 936 منها الهدف. العقد يشترط 95% لكل أولوية على حدة. احسب النسبة لكل مجموعة والنسبة الإجمالية. هل التزم الفريق بالعقد؟",
        en: "In one month the team had 40 eligible critical-priority cases, of which 30 met the resolution SLA, and 960 eligible cases in other priorities, of which 936 met it. The contract requires 95% for each priority separately. Compute each group's rate and the overall rate. Did the team comply?",
      },
      hint: {
        ar: "الإجمالي = مجموع الحالات المحققة ÷ مجموع الحالات المؤهلة. ثم قارن كل مجموعة بشرط العقد على حدة.",
        en: "Overall = total met ÷ total eligible. Then compare each group with the contract condition separately.",
      },
      answer: {
        ar: "الحرجة: 30 ÷ 40 = 75.0%. الأخرى: 936 ÷ 960 = 97.5%. الإجمالي: (30 + 936) ÷ (40 + 960) = 966 ÷ 1,000 = 96.6%. الرقم الإجمالي يتجاوز 95% ويبدو ملتزمًا، لكن الفريق خرق العقد لأن الأولوية الحرجة عند 75% فقط، أي 10 خروقات من 40. هذا بالضبط ما تخفيه النسبة الإجمالية، ولهذا تُعرض المصفوفة حسب الأولوية دائمًا.",
        en: "Critical: 30 ÷ 40 = 75.0%. Other: 936 ÷ 960 = 97.5%. Overall: (30 + 936) ÷ (40 + 960) = 966 ÷ 1,000 = 96.6%. The overall figure exceeds 95% and looks compliant, but the team breached the contract because critical priority is at only 75% — 10 breaches out of 40. This is exactly what the overall rate hides, which is why the matrix by priority is always shown.",
      },
    },
    references: [
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع القسمة الآمنة لنسبة التحقيق عند غياب حالات مؤهلة.",
          en: "Reference for safe division of the achievement rate when there are no eligible cases.",
        },
      },
      {
        title: "HASONEVALUE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/hasonevalue-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع الحماية من دمج هدفي الاستجابة والحل في رقم واحد.",
          en: "Reference for guarding against merging response and resolution targets into one number.",
        },
      },
    ],
  },
];
