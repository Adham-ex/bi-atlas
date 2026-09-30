import type { Kpi } from "../types";

export const operationsKpis: Kpi[] = [
  {
    id: "oee",
    slug: "overall-equipment-effectiveness",
    name: "Overall Equipment Effectiveness",
    acronym: "OEE",
    nameAr: "الفعالية الكلية للمعدات",
    domains: ["manufacturing", "supply-chain"],
    category: { ar: "كفاءة التشغيل", en: "Operational efficiency" },
    difficulty: "advanced",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "حاصل ضرب ثلاثة مكونات: التوفر (هل كانت المعدة تعمل؟) والأداء (هل عملت بالسرعة المثالية؟) والجودة (هل أنتجت وحدات سليمة؟). يعبّر عن نسبة الوقت المخطط الذي أنتج فعلًا وحدات سليمة بالسرعة القصوى.",
      en: "The product of three components: availability (was the equipment running?), performance (did it run at ideal speed?), and quality (did it produce good units?). It expresses the share of planned time that actually produced good units at full speed.",
    },
    whyItMatters: {
      ar: "يجمع في رقم واحد ثلاثة أنواع من الفقد كانت تُقاس منفصلة، فيتيح مقارنة خطوط ومصانع مختلفة. لكن قوته هذه هي ضعفه: رقم OEE واحد لا يقول أي مكوّن تدهور، ولهذا لا يُعرض أبدًا بدون مكوناته.",
      en: "It folds three loss types that used to be measured separately into one number, enabling comparison across lines and plants. But that strength is its weakness: a single OEE figure does not say which component degraded, which is why it is never shown without its components.",
    },
    interpretation: {
      ar: "OEE بنسبة 65% يعني أن 35% من الوقت المخطط ضاع في توقفات أو بطء أو إنتاج معيب. لأن المكونات تُضرب، فإن 90% في كل بعد تعطي 72.9% لا 90%. هذا التركيب هو أول ما يُشرح لغير المتخصصين.",
      en: "An OEE of 65% means 35% of planned time was lost to stoppages, slow running, or defective output. Because the components multiply, 90% on each dimension yields 72.9%, not 90%. That compounding is the first thing to explain to non-specialists.",
    },
    formula: "OEE = Availability x Performance x Quality",
    numerator: {
      ar: "الوقت المنتج بالكامل: عدد الوحدات السليمة مضروبًا في زمن الدورة المثالي لكل وحدة.",
      en: "Fully productive time: good units multiplied by the ideal cycle time per unit.",
    },
    denominator: {
      ar: "الوقت المخطط للإنتاج. تعريف هذا المقام هو أهم قرار في المؤشر كله: هل تُستبعد الاستراحات والصيانة المجدولة وأيام عدم الطلب؟",
      en: "Planned production time. Defining this denominator is the single most consequential decision in the metric: are breaks, scheduled maintenance, and no-demand days excluded?",
    },
    timeGrain: {
      ar: "يُقاس لكل وردية ولكل خط. التجميع عبر الخطوط يجب أن يكون مرجّحًا بالوقت المخطط لا متوسطًا بسيطًا، وإلا حصل خط صغير على نفس وزن خط رئيسي.",
      en: "Measured per shift and per line. Aggregating across lines must be weighted by planned time rather than simply averaged, otherwise a small line carries the same weight as a main one.",
    },
    direction: {
      rising: {
        ar: "ارتفاع OEE يعني فقدًا أقل، لكن تحقق أولًا من أن الوقت المخطط لم يُقلّص — تقليص المقام يرفع النسبة بلا تحسّن حقيقي.",
        en: "A rising OEE means less loss, but check first that planned time did not shrink — cutting the denominator lifts the ratio with no real improvement.",
      },
      falling: {
        ar: "انخفاضه يستوجب فورًا النظر إلى المكوّن المسؤول: التوفر يشير للأعطال، والأداء للبطء والتوقفات الصغيرة، والجودة للمعيب.",
        en: "A decline immediately calls for looking at the responsible component: availability points to breakdowns, performance to slow running and micro-stops, quality to defects.",
      },
      caveat: {
        ar: "تعظيم OEE ليس هدفًا مطلقًا. تشغيل خط بأقصى طاقته لإنتاج مخزون لا طلب عليه يرفع OEE ويضر الشركة. المؤشر يقيس الكفاءة لا الجدوى.",
        en: "Maximising OEE is not an absolute goal. Running a line flat out to build stock nobody ordered raises OEE and hurts the company. The metric measures efficiency, not usefulness.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "الوقت المخطط للإنتاج في الوردية", en: "Planned production time per shift" }, value: "480 دقيقة" },
        { label: { ar: "إجمالي التوقفات المسجلة", en: "Total recorded downtime" }, value: "60 دقيقة" },
        { label: { ar: "الوحدات المنتجة إجمالًا", en: "Total units produced" }, value: "3,600" },
        { label: { ar: "الوحدات المعيبة", en: "Defective units" }, value: "108" },
        { label: { ar: "زمن الدورة المثالي لكل وحدة", en: "Ideal cycle time per unit" }, value: "0.1 دقيقة" },
      ],
      steps: [
        { label: { ar: "وقت التشغيل", en: "Run time" }, expression: "480 - 60 = 420 دقيقة" },
        { label: { ar: "التوفر", en: "Availability" }, expression: "420 / 480 = 87.5%" },
        { label: { ar: "الأداء", en: "Performance" }, expression: "(3,600 x 0.1) / 420 = 85.7%" },
        { label: { ar: "الجودة", en: "Quality" }, expression: "(3,600 - 108) / 3,600 = 97.0%" },
        { label: { ar: "OEE", en: "OEE" }, expression: "87.5% x 85.7% x 97.0% = 72.7%" },
      ],
      result: { label: { ar: "OEE للوردية", en: "Shift OEE" }, value: "72.7%" },
      reading: {
        ar: "أكبر فقد هنا في الأداء (85.7%) لا في التوفر كما يُفترض عادة. الفقد بالأداء غالبًا توقفات صغيرة غير مسجلة وتشغيل أبطأ من المعدل، وهو أصعب أنواع الفقد في الرصد وأكثرها إهمالًا.",
        en: "The biggest loss here is in performance (85.7%), not availability as is usually assumed. Performance loss is typically unrecorded micro-stops and running below rate — the hardest loss to detect and the most often ignored.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "OEE ومكوناته الثلاثة", en: "OEE and its three components" },
        code: `Planned Time (min) :=
SUM ( 'ProductionRun'[PlannedMinutes] )

Downtime (min) :=
SUM ( 'DowntimeEvent'[DurationMinutes] )

Run Time (min) :=
[Planned Time (min)] - [Downtime (min)]

Total Units :=
SUM ( 'ProductionRun'[UnitsProduced] )

Good Units :=
SUM ( 'ProductionRun'[UnitsProduced] ) - SUM ( 'ProductionRun'[UnitsDefective] )

Availability :=
DIVIDE ( [Run Time (min)], [Planned Time (min)] )

-- Ideal cycle time varies by product, so it must be weighted per run
-- rather than taken as one constant for the whole line.
Ideal Run Time (min) :=
SUMX (
    'ProductionRun',
    'ProductionRun'[UnitsProduced] * RELATED ( 'Product'[IdealCycleMinutes] )
)

Performance :=
DIVIDE ( [Ideal Run Time (min)], [Run Time (min)] )

Quality :=
DIVIDE ( [Good Units], [Total Units] )

-- Computed from the components so the card and its breakdown can never
-- disagree, and so any BLANK component propagates visibly.
OEE :=
[Availability] * [Performance] * [Quality]`,
        assumptions: [
          {
            ar: "'ProductionRun'[PlannedMinutes] يعكس تعريف الوقت المخطط المعتمد لدى المصنع. تغيير هذا التعريف يغيّر OEE بعشر نقاط أو أكثر دون أي تغيّر في الأداء الفعلي.",
            en: "'ProductionRun'[PlannedMinutes] reflects the plant approved definition of planned time. Changing that definition moves OEE by ten points or more with no change in actual performance.",
          },
          {
            ar: "زمن الدورة المثالي مأخوذ من جدول المنتج عبر RELATED، لأن خطًا واحدًا قد ينتج منتجات بسرعات مختلفة.",
            en: "Ideal cycle time comes from the product table via RELATED, because one line may run products at different speeds.",
          },
          {
            ar: "الأداء قد يتجاوز 100% إذا كان زمن الدورة المثالي المسجل أبطأ من الواقع. هذه إشارة إلى بيانات مرجعية قديمة لا إلى أداء خارق، وتستحق تنبيهًا في التقرير.",
            en: "Performance can exceed 100% when the recorded ideal cycle time is slower than reality. That signals stale master data rather than extraordinary performance and deserves a flag in the report.",
          },
          {
            ar: "حساب OEE بضرب المقاييس لا بصيغة مستقلة يضمن اتساق البطاقة مع تفكيكها في كل سياق ترشيح.",
            en: "Computing OEE by multiplying the measures rather than with an independent formula guarantees the card agrees with its breakdown in every filter context.",
          },
        ],
        requires: ["ProductionRun[PlannedMinutes]", "ProductionRun[UnitsProduced]", "ProductionRun[UnitsDefective]", "Product[IdealCycleMinutes]"],
      },
    ],
    model: [
      {
        table: "ProductionRun",
        grain: { ar: "تشغيلة واحدة لكل خط ومنتج ووردية", en: "One run per line, product, and shift" },
        columns: ["RunId", "LineId", "ProductId", "ShiftDate", "PlannedMinutes", "UnitsProduced", "UnitsDefective"],
        role: { ar: "جدول الحقائق الأساسي", en: "Primary fact table" },
      },
      {
        table: "DowntimeEvent",
        grain: { ar: "حدث توقف واحد", en: "One downtime event" },
        columns: ["EventId", "RunId", "ReasonCode", "DurationMinutes", "IsPlanned"],
        role: { ar: "مصدر مكوّن التوفر وتحليل باريتو للأسباب", en: "Source of the availability component and the reason Pareto" },
      },
      {
        table: "Product",
        grain: { ar: "منتج واحد لكل صف", en: "One row per product" },
        columns: ["ProductId", "ProductName", "IdealCycleMinutes"],
        role: { ar: "يحمل زمن الدورة المثالي المرجعي", en: "Holds the reference ideal cycle time" },
      },
    ],
    visuals: [
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "OEE بلا مكوناته رقم غامض؛ البطاقة متعددة القيم تفرض عرض الأربعة معًا.",
          en: "OEE without its components is an opaque number; a multi-value card forces all four to appear together.",
        },
      },
      {
        pattern: "decomposition-tree",
        why: {
          ar: "التنقل من OEE إلى المكوّن ثم إلى سبب التوقف ثم إلى المعدة هو مسار التحقيق الطبيعي في المصنع.",
          en: "Drilling from OEE to component to downtime reason to machine is the natural investigation path on the plant floor.",
        },
      },
      {
        pattern: "waterfall-variance",
        why: {
          ar: "يعرض الفجوة من 100% إلى OEE الفعلي كسلسلة من الفقد، وهو أوضح عرض لغير المتخصصين.",
          en: "Shows the gap from 100% down to actual OEE as a chain of losses — the clearest view for non-specialists.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "تجميع OEE بمتوسط بسيط عبر الخطوط أو الورديات. التجميع الصحيح يعيد الحساب من الدقائق والوحدات الإجمالية، لا من النسب.",
        en: "Aggregating OEE by simple average across lines or shifts. Correct aggregation recomputes from total minutes and units, not from percentages.",
      },
      {
        ar: "استبعاد التوقفات المخططة من المقام لتحسين الرقم. مشروع مقارنة لكنه يجعل OEE غير قابل للمقارنة مع أي جهة أخرى، ويخفي فرص تقليص زمن التحويل.",
        en: "Excluding planned downtime from the denominator to improve the number. Defensible but it makes OEE incomparable with anyone else and hides changeover reduction opportunities.",
      },
      {
        ar: "عدم تحديث زمن الدورة المثالي بعد ترقية المعدة، فيبدو الأداء فوق 100% ويفقد المكوّن معناه.",
        en: "Not refreshing ideal cycle time after an equipment upgrade, so performance shows above 100% and the component loses meaning.",
      },
      {
        ar: "احتساب إعادة التشغيل (Rework) ضمن الوحدات السليمة. الوحدة التي احتاجت إصلاحًا استهلكت وقتًا إضافيًا ويجب أن تظهر في فقد الجودة.",
        en: "Counting reworked units as good. A unit that needed repair consumed extra time and belongs in the quality loss.",
      },
      {
        ar: "الاعتماد على تسجيل يدوي لأسباب التوقف. التوقفات القصيرة لا تُسجل عادة فتظهر كفقد أداء مجهول السبب بدل فقد توفر معروف.",
        en: "Relying on manual downtime logging. Short stops usually go unrecorded and surface as unexplained performance loss instead of known availability loss.",
      },
    ],
    variants: [
      {
        label: { ar: "TEEP: الأداء الفعال الكلي للمعدة", en: "TEEP: Total Effective Equipment Performance" },
        formula: "OEE x Utilisation (Planned Time / All Calendar Time)",
        difference: {
          ar: "يقيس الفعالية منسوبة إلى الوقت التقويمي كله (24 ساعة × 7 أيام) لا إلى الوقت المخطط. يجيب سؤال الاستثمار: كم من طاقة الأصل مستغل؟",
          en: "Measures effectiveness against all calendar time (24x7) rather than planned time. It answers the investment question: how much of the asset capacity is used?",
        },
      },
      {
        label: { ar: "OEE بالوحدات بدل بالوقت", en: "Unit-based instead of time-based OEE" },
        formula: "Good Units / (Planned Time / Ideal Cycle Time)",
        difference: {
          ar: "يعطي نفس النتيجة رياضيًا لكنه أسهل في الشرح لفرق الإنتاج لأنه يقارن ما أُنتج بما كان يمكن إنتاجه.",
          en: "Mathematically equivalent but easier to explain to production teams because it compares what was made to what could have been made.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "OEE لا يمكن أن يتجاوز أصغر مكوّن من مكوناته الثلاثة، لأنه حاصل ضربها وكلها أقل من أو تساوي 1.",
          en: "OEE can never exceed its smallest component, because it is their product and each is at most 1.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "تقسيم الفعالية إلى توفر وأداء وجودة مرتبط بأدبيات الصيانة الإنتاجية الشاملة (TPM)، ويُنسب أصل المفهوم إلى سيئيتشي ناكاجيما.",
          en: "Splitting effectiveness into availability, performance, and quality comes from the Total Productive Maintenance literature, with the concept originally attributed to Seiichi Nakajima.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "تعريف الوقت المخطط، ومعاملة زمن التحويل والاستراحات، وحد الدقائق الذي يُسجل عنده التوقف — كلها قواعد داخلية لكل مصنع.",
          en: "The definition of planned time, the treatment of changeover and breaks, and the minute threshold at which a stop is logged are internal rules per plant.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام الوردية في المثال من تأليفنا، واختيرت لتُظهر أن الفقد الأكبر قد يكون في الأداء لا في التوفر. لا نقدم أي رقم كمعيار صناعي لـ OEE.",
          en: "The shift figures are invented, chosen to show that the largest loss may sit in performance rather than availability. We offer no industry benchmark for OEE.",
        },
      },
    ],
    related: ["inventory-turnover", "gross-profit-margin"],
    exercise: {
      prompt: {
        ar: "خط عمل 600 دقيقة مخططة، توقف 90 دقيقة، أنتج 4,200 وحدة منها 126 معيبة، وزمن الدورة المثالي 0.11 دقيقة. احسب المكونات الثلاثة وOEE، ثم حدد أي مكوّن يجب معالجته أولًا ولماذا.",
        en: "A line has 600 planned minutes, 90 minutes of downtime, produced 4,200 units of which 126 were defective, at an ideal cycle time of 0.11 minutes. Compute the three components and OEE, then say which component to tackle first and why.",
      },
      hint: {
        ar: "احسب وقت التشغيل أولًا، ثم قارن الوقت المثالي اللازم للوحدات المنتجة بوقت التشغيل الفعلي.",
        en: "Compute run time first, then compare the ideal time needed for the units produced against actual run time.",
      },
      answer: {
        ar: "وقت التشغيل = 600 − 90 = 510 دقيقة. التوفر = 510 ÷ 600 = 85.0%. الوقت المثالي = 4,200 × 0.11 = 462 دقيقة، فالأداء = 462 ÷ 510 = 90.6%. الجودة = (4,200 − 126) ÷ 4,200 = 97.0%. OEE = 85.0% × 90.6% × 97.0% = 74.7%. الأولوية للتوفر لأنه الأصغر (85.0%)، و90 دقيقة توقف تمثل أكبر كتلة فقد مفردة. لكن القرار النهائي يحتاج تحليل باريتو لأسباب التوقف: إذا كانت الـ 90 دقيقة كلها تحويلًا مخططًا بين منتجات فالمعالجة مختلفة تمامًا عما لو كانت أعطالًا مفاجئة.",
        en: "Run time = 600 − 90 = 510 minutes. Availability = 510 ÷ 600 = 85.0%. Ideal time = 4,200 x 0.11 = 462 minutes, so performance = 462 ÷ 510 = 90.6%. Quality = (4,200 − 126) ÷ 4,200 = 97.0%. OEE = 85.0% x 90.6% x 97.0% = 74.7%. Availability is the priority because it is the smallest (85.0%) and 90 minutes is the single largest block of loss. But the final decision needs a Pareto of downtime reasons: if all 90 minutes are planned changeovers, the remedy is entirely different from unplanned breakdowns.",
      },
    },
    references: [
      {
        title: "SUMX function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/sumx-function-dax",
        accessed: "2026-09-29",
        note: {
          ar: "أساس ترجيح زمن الدورة المثالي لكل تشغيلة بدل استخدام ثابت واحد.",
          en: "The basis for weighting ideal cycle time per run instead of using a single constant.",
        },
      },
    ],
  },

  {
    id: "average-length-of-stay",
    slug: "average-length-of-stay",
    name: "Average Length of Stay",
    acronym: "ALOS",
    nameAr: "متوسط مدة الإقامة",
    domains: ["healthcare"],
    category: { ar: "تدفق المرضى", en: "Patient flow" },
    difficulty: "intermediate",
    unit: { ar: "أيام", en: "Days" },
    aggregation: "non-additive",
    definition: {
      ar: "متوسط عدد الأيام التي يقضيها المريض الداخلي في المنشأة من الدخول حتى الخروج. يُحسب كإجمالي أيام المرضى مقسومًا على عدد حالات الخروج خلال الفترة.",
      en: "The average number of days an inpatient spends in the facility from admission to discharge, computed as total patient days divided by discharges in the period.",
    },
    whyItMatters: {
      ar: "مدة الإقامة تحدد الطاقة الاستيعابية الفعلية: تقليل يوم واحد من المتوسط يحرر أسرّة تعادل توسعة كاملة دون بناء. لكنه أيضًا مؤشر جودة غير مباشر، لأن الإقامة الأطول قد تعني مضاعفات والأقصر قد تعني خروجًا مبكرًا.",
      en: "Length of stay determines real capacity: cutting one day off the average frees beds equivalent to a whole expansion without building. It is also an indirect quality signal, since a longer stay may mean complications and a shorter one may mean premature discharge.",
    },
    interpretation: {
      ar: "متوسط 4.2 يومًا لا يعني شيئًا بمفرده. قسم الولادة وقسم العناية المركزة لهما متوسطات مختلفة جذريًا، والمقارنة المفيدة الوحيدة هي مع المتوقع لنفس مزيج الحالات وشدتها.",
      en: "An average of 4.2 days means nothing on its own. Maternity and intensive care have radically different averages, and the only useful comparison is against what is expected for the same case mix and severity.",
    },
    formula: "ALOS = Total Patient Days in Period / Number of Discharges in Period",
    numerator: {
      ar: "إجمالي أيام المرضى: مجموع الأيام التي قضاها كل المرضى الخارجين خلال الفترة.",
      en: "Total patient days: the sum of days spent by all patients discharged in the period.",
    },
    denominator: {
      ar: "عدد حالات الخروج خلال الفترة، لا عدد حالات الدخول. استخدام الدخول يشوّه الرقم لأن المرضى الذين ما زالوا مقيمين ليست لهم مدة نهائية بعد.",
      en: "The number of discharges in the period, not admissions. Using admissions distorts the figure because patients still in hospital have no final duration yet.",
    },
    timeGrain: {
      ar: "شهري أو ربع سنوي حسب تاريخ الخروج. الحساب اليومي بلا معنى لأن المؤشر يتطلب حالات مكتملة.",
      en: "Monthly or quarterly, keyed on discharge date. A daily computation is meaningless because the metric requires completed stays.",
    },
    direction: {
      rising: {
        ar: "ارتفاع المدة قد يعني حالات أشد، أو تأخر في التشخيص أو الإجراءات، أو صعوبة في ترتيب الخروج (رعاية منزلية غير متوفرة مثلًا).",
        en: "A rising stay can mean more severe cases, delays in diagnosis or procedures, or difficulty arranging discharge (unavailable home care, for instance).",
      },
      falling: {
        ar: "انخفاضها قد يعني تحسّن المسارات العلاجية، أو تحوّلًا نحو حالات أبسط، أو ضغطًا على الخروج المبكر.",
        en: "A falling stay can mean improved care pathways, a shift toward simpler cases, or pressure to discharge early.",
      },
      caveat: {
        ar: "الأقصر ليس أفضل. مدة إقامة أقل مع ارتفاع إعادة الدخول خلال 30 يومًا هي نقل للتكلفة لا توفير لها، وقد تكون ضارة بالمريض. المؤشران يُعرضان معًا دائمًا.",
        en: "Shorter is not better. A lower stay alongside rising 30-day readmissions shifts cost rather than saving it, and may harm patients. The two metrics are always shown together.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "عدد حالات الخروج في الشهر", en: "Discharges in the month" }, value: "420" },
        { label: { ar: "إجمالي أيام المرضى", en: "Total patient days" }, value: "1,890" },
        { label: { ar: "حالات خروج تجاوزت 30 يومًا", en: "Discharges exceeding 30 days" }, value: "6" },
        { label: { ar: "أيام المرضى لتلك الحالات الست", en: "Patient days for those six cases" }, value: "312" },
      ],
      steps: [
        { label: { ar: "المتوسط الحسابي", en: "Arithmetic mean" }, expression: "1,890 / 420 = 4.50 يوم" },
        {
          label: { ar: "المتوسط بعد استبعاد الحالات المتطرفة", en: "Mean excluding outliers" },
          expression: "(1,890 - 312) / (420 - 6) = 3.81 يوم",
        },
      ],
      result: { label: { ar: "متوسط مدة الإقامة", en: "Average length of stay" }, value: "4.50 يوم (3.81 بدون المتطرفات)" },
      reading: {
        ar: "ست حالات فقط من 420 (1.4%) ترفع المتوسط 0.69 يوم، أي 15%. في توزيعات ملتوية كهذه يكون الوسيط أصدق من المتوسط، ويجب عرض الاثنين معًا مع عدد الحالات المتطرفة.",
        en: "Just six of 420 cases (1.4%) raise the mean by 0.69 days, some 15%. In such a skewed distribution the median is more honest than the mean, and both should be shown alongside the outlier count.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "متوسط ووسيط مدة الإقامة مع عزل المتطرفات", en: "Mean and median length of stay with outlier isolation" },
        code: `-- Keyed on discharge date: only completed stays have a final duration.
Discharges :=
CALCULATE (
    COUNTROWS ( 'Encounter' ),
    NOT ISBLANK ( 'Encounter'[DischargeDate] )
)

Patient Days :=
SUMX (
    FILTER ( 'Encounter', NOT ISBLANK ( 'Encounter'[DischargeDate] ) ),
    DATEDIFF ( 'Encounter'[AdmitDate], 'Encounter'[DischargeDate], DAY )
)

ALOS :=
DIVIDE ( [Patient Days], [Discharges] )

-- The median resists the long right tail that a few very long stays create.
Median LOS :=
MEDIANX (
    FILTER ( 'Encounter', NOT ISBLANK ( 'Encounter'[DischargeDate] ) ),
    DATEDIFF ( 'Encounter'[AdmitDate], 'Encounter'[DischargeDate], DAY )
)

Long Stay Cases :=
COUNTROWS (
    FILTER (
        'Encounter',
        NOT ISBLANK ( 'Encounter'[DischargeDate] )
            && DATEDIFF ( 'Encounter'[AdmitDate], 'Encounter'[DischargeDate], DAY ) > 30
    )
)`,
        assumptions: [
          {
            ar: "جدول 'Date' مرتبط بـ DischargeDate لا بـ AdmitDate، وإلا نُسبت الإقامة إلى شهر الدخول وظهر تشوّه في الحالات الممتدة عبر الشهور.",
            en: "'Date' relates to DischargeDate rather than AdmitDate; otherwise a stay is attributed to the admission month and cases spanning months are distorted.",
          },
          {
            ar: "DATEDIFF بوحدة DAY تحسب فرق التواريخ لا الساعات. إقامة يوم واحد (دخول وخروج في نفس اليوم) تعطي صفرًا، وكثير من المنشآت تعدّها يومًا واحدًا — عدّل بإضافة 1 إن كانت هذه سياستك.",
            en: "DATEDIFF in DAY counts calendar difference, not hours. A same-day stay returns zero, and many facilities count it as one day — add 1 if that is your policy.",
          },
          {
            ar: "عتبة 30 يومًا للحالات الطويلة اختيار تحريري هنا؛ في الواقع تُشتق من توزيع كل قسم لا من رقم موحد.",
            en: "The 30-day long-stay threshold is an editorial choice here; in practice it is derived from each unit own distribution rather than one fixed number.",
          },
          {
            ar: "المرضى المقيمون حاليًا مستبعدون لأن DischargeDate فارغ لديهم، وهذا صحيح للمؤشر لكنه يعني أن الرقم لا يعكس الضغط الحالي على الأسرّة.",
            en: "Current inpatients are excluded because their DischargeDate is blank. That is correct for this metric, but it means the number does not reflect current bed pressure.",
          },
        ],
        requires: ["Encounter[AdmitDate]", "Encounter[DischargeDate]"],
      },
    ],
    model: [
      {
        table: "Encounter",
        grain: { ar: "حلقة علاجية واحدة لكل مريض", en: "One encounter per patient stay" },
        columns: ["EncounterId", "PatientKey", "AdmitDate", "DischargeDate", "UnitId", "DrgCode", "SeverityLevel"],
        role: { ar: "جدول الحقائق الأساسي للمؤشر", en: "Primary fact table for the metric" },
      },
      {
        table: "Unit",
        grain: { ar: "قسم أو جناح واحد", en: "One clinical unit or ward" },
        columns: ["UnitId", "UnitName", "Specialty", "BedCount"],
        role: { ar: "التقسيم الذي بدونه لا معنى للمقارنة", en: "The dimension without which comparison is meaningless" },
      },
      {
        table: "CaseMix",
        grain: { ar: "مجموعة تشخيصية واحدة", en: "One diagnosis-related group" },
        columns: ["DrgCode", "DrgDescription", "ExpectedLos"],
        role: { ar: "يوفّر المدة المتوقعة للمقارنة العادلة", en: "Provides expected stay for a fair comparison" },
      },
    ],
    visuals: [
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "المدة مع الوسيط ومعدل إعادة الدخول في بطاقة واحدة تمنع قراءة الانخفاض كنجاح تلقائي.",
          en: "Stay alongside the median and readmission rate in one card prevents reading a decline as automatic success.",
        },
      },
      {
        pattern: "actual-vs-target",
        why: {
          ar: "المقارنة الصحيحة ليست مع رقم ثابت بل مع المدة المتوقعة لمزيج الحالات، وهذا النمط يعرض الاثنين معًا.",
          en: "The right comparison is not to a fixed number but to the expected stay for the case mix, and this pattern shows both.",
        },
      },
      {
        pattern: "exception-table",
        why: {
          ar: "قائمة الحالات التي تجاوزت المتوقع بفارق كبير هي المخرج التشغيلي الفعلي، لا المتوسط.",
          en: "A list of cases far beyond expected is the real operational output, not the average.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "مقارنة الأقسام ببعضها دون تعديل لمزيج الحالات. قسم يستقبل حالات أشد سيبدو أقل كفاءة دائمًا وهو ليس كذلك.",
        en: "Comparing units without adjusting for case mix. A unit taking more severe cases will always look less efficient when it is not.",
      },
      {
        ar: "استخدام المتوسط في توزيع ملتوٍ بشدة. حالة واحدة بإقامة 200 يوم قد تحرك متوسط قسم كامل.",
        en: "Using the mean on a heavily skewed distribution. One 200-day stay can move an entire unit average.",
      },
      {
        ar: "احتساب المرضى المقيمين حاليًا ضمن المقام. مدتهم لم تكتمل بعد، وإدخالهم يخفض المتوسط زورًا.",
        en: "Including current inpatients in the denominator. Their stay is not complete, and including them falsely lowers the average.",
      },
      {
        ar: "الربط بتاريخ الدخول بدل الخروج، فتُنسب إقامة امتدت ثلاثة أشهر إلى شهر الدخول وحده.",
        en: "Keying on admission instead of discharge, which attributes a three-month stay entirely to the admission month.",
      },
      {
        ar: "عرض المدة بدون معدل إعادة الدخول. هذا يخلق حافزًا مباشرًا للخروج المبكر وهو أخطر ما يمكن أن يفعله تقرير في بيئة صحية.",
        en: "Showing stay without readmission rate. This creates a direct incentive for premature discharge, the most dangerous thing a report can do in a clinical setting.",
      },
    ],
    variants: [
      {
        label: { ar: "المدة المعدّلة بمزيج الحالات", en: "Case-mix adjusted length of stay" },
        formula: "Actual Patient Days / Expected Patient Days (from DRG expected LOS)",
        difference: {
          ar: "تعطي نسبة حول 1 بدل عدد أيام. قيمة 1.15 تعني إقامة أطول 15% من المتوقع لنفس الحالات، وهي المقارنة العادلة الوحيدة بين الأقسام.",
          en: "Yields a ratio around 1 instead of a day count. A value of 1.15 means stays 15% longer than expected for the same cases — the only fair comparison between units.",
        },
      },
      {
        label: { ar: "الوسيط بدل المتوسط", en: "Median instead of mean" },
        formula: "Median of stay durations",
        difference: {
          ar: "أكثر مقاومة للحالات المتطرفة ويمثل تجربة المريض النمطي. الأنسب للحوار الإكلينيكي، بينما المتوسط أنسب لحساب الطاقة الاستيعابية لأنه يعكس إجمالي الأيام.",
          en: "More resistant to outliers and represents the typical patient. Better for clinical discussion, while the mean suits capacity planning because it reflects total days.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "إجمالي أيام المرضى يساوي متوسط مدة الإقامة مضروبًا في عدد حالات الخروج. هذه علاقة تعريفية تُستخدم للتحقق من صحة الحساب.",
          en: "Total patient days equals average length of stay times discharges. This definitional identity is useful for validating the calculation.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "القسمة على حالات الخروج لا الدخول هي الممارسة المعيارية في إحصاءات المستشفيات.",
          en: "Dividing by discharges rather than admissions is standard practice in hospital statistics.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "معاملة إقامة اليوم الواحد، واحتساب يوم الخروج، واستبعاد الحالات المتطرفة، وتعريف نافذة إعادة الدخول — كلها قرارات سياسة لكل منشأة أو جهة تنظيمية.",
          en: "Treatment of same-day stays, whether the discharge day counts, outlier exclusion, and the readmission window are policy decisions per facility or regulator.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال من تأليفنا ولا تمثل منشأة حقيقية. لا نقدم أي رقم كمعيار لمدة إقامة مقبولة لأنها تتبع مزيج الحالات كليًا.",
          en: "The example figures are invented and represent no real facility. We offer no benchmark for an acceptable stay because it follows case mix entirely.",
        },
      },
    ],
    related: ["oee"],
    exercise: {
      prompt: {
        ar: "قسم سجّل 300 حالة خروج بإجمالي 1,500 يوم مريض. المدة المتوقعة حسب مزيج حالاته 4.2 يوم لكل حالة. احسب المتوسط الفعلي والنسبة المعدّلة بمزيج الحالات، ثم اذكر المؤشر الذي يجب التحقق منه قبل اعتبار النتيجة تحسّنًا.",
        en: "A unit recorded 300 discharges totalling 1,500 patient days. Expected stay for its case mix is 4.2 days per case. Compute actual average and the case-mix adjusted ratio, then name the metric to check before calling this an improvement.",
      },
      hint: {
        ar: "الأيام المتوقعة = عدد الحالات × المدة المتوقعة لكل حالة.",
        en: "Expected days = case count x expected stay per case.",
      },
      answer: {
        ar: "المتوسط الفعلي = 1,500 ÷ 300 = 5.0 أيام. الأيام المتوقعة = 300 × 4.2 = 1,260 يومًا. النسبة المعدّلة = 1,500 ÷ 1,260 = 1.19، أي إقامة أطول 19% من المتوقع لمزيج الحالات نفسه. لاحظ أن الرقم المطلق (5.0) قد يبدو مقبولًا بينما النسبة تكشف فجوة حقيقية. قبل أي حكم يجب التحقق من معدل إعادة الدخول خلال 30 يومًا: إذا كان منخفضًا فالإقامة الأطول قد تكون رعاية مكتملة، وإذا كان مرتفعًا أيضًا فالمشكلة في المسار العلاجي لا في المدة وحدها.",
        en: "Actual average = 1,500 ÷ 300 = 5.0 days. Expected days = 300 x 4.2 = 1,260. Adjusted ratio = 1,500 ÷ 1,260 = 1.19, meaning stays run 19% longer than expected for the same case mix. Note the absolute number (5.0) may look acceptable while the ratio exposes a real gap. Before judging, check the 30-day readmission rate: if it is low, the longer stay may simply be complete care; if it is also high, the problem lies in the care pathway rather than duration alone.",
      },
    },
    references: [
      {
        title: "MEDIANX function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/medianx-function-dax",
        accessed: "2026-09-29",
        note: {
          ar: "مرجع حساب الوسيط على تعبير محسوب لكل صف، وهو المطلوب هنا لأن المدة ليست عمودًا مخزنًا.",
          en: "Reference for computing a median over a per-row expression, needed here because duration is not a stored column.",
        },
      },
    ],
  },
];
