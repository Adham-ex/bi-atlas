import type { Kpi } from "../types";

export const projectKpis: Kpi[] = [
  {
    id: "spi",
    slug: "spi",
    name: "Schedule Performance Index",
    acronym: "SPI",
    nameAr: "مؤشر أداء الجدول الزمني",
    domains: ["project-management"],
    category: { ar: "القيمة المكتسبة", en: "Earned value" },
    difficulty: "advanced",
    unit: { ar: "نسبة (بلا وحدة)", en: "Index (unitless)" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة القيمة المكتسبة إلى القيمة المخططة في تاريخ الحالة نفسه. يجيب عن سؤال: من كل ريال من العمل كان يُفترض إنجازه حتى الآن، كم ريالًا أُنجز فعلًا؟ ويقيس التقدم بقيمة العمل لا بعدد الأيام.",
      en: "The ratio of earned value to planned value at the same status date. It answers: of every unit of work value that should have been done by now, how much was actually done? It measures progress in work value, not in days.",
    },
    whyItMatters: {
      ar: "نسبة الإنجاز وحدها لا تقول إن كان المشروع متأخرًا، لأن 40% قد تكون ممتازة في الشهر الثالث وكارثية في الشهر التاسع. SPI يقارن الإنجاز بما وعدت به الخطة في التاريخ نفسه، فيحوّل تقرير التقدم من وصف إلى حكم قابل للمقارنة بين المشاريع.",
      en: "Percent complete alone does not say whether a project is late: 40% may be excellent in month three and disastrous in month nine. SPI compares delivery with what the plan promised at the same date, turning a progress report from a description into a judgement that can be compared across projects.",
    },
    interpretation: {
      ar: "SPI = 1 يعني أن العمل المنجز يساوي بقيمته العمل المخطط حتى تاريخ الحالة. SPI = 0.80 يعني أن ما أُنجز يعادل 80% فقط من قيمة ما كان مخططًا، لكنه لا يعني أن المشروع متأخر 20% من مدته: المؤشر مقيس بالقيمة، والمهام المتأخرة قد تكون على المسار الحرج أو خارجه.",
      en: "SPI = 1 means the work done equals, in value, the work planned up to the status date. SPI = 0.80 means only 80% of the planned value has been earned, but it does not mean the project is 20% late in calendar terms: the index is measured in value, and the lagging tasks may or may not be on the critical path.",
    },
    formula: "SPI = Earned Value (EV) / Planned Value (PV)",
    numerator: {
      ar: "القيمة المكتسبة التراكمية حتى تاريخ الحالة: موازنة خط الأساس لكل مهمة مضروبة في نسبة إنجازها المتحقق منها في آخر تقرير حالة.",
      en: "Cumulative earned value to the status date: each task's baseline budget multiplied by its verified percent complete from the latest status report.",
    },
    denominator: {
      ar: "القيمة المخططة التراكمية حتى تاريخ الحالة نفسه: مجموع موازنة خط الأساس الموزعة زمنيًا والتي كان يفترض إنجازها حتى ذلك التاريخ.",
      en: "Cumulative planned value to the same status date: the sum of the time-phased baseline budget that was scheduled to be done by that date.",
    },
    timeGrain: {
      ar: "يُقرأ في تاريخ حالة محدد (عادة نهاية الأسبوع أو الشهر). البسط والمقام تراكميان من بداية المشروع، فقيمة الشهر هي قيمة آخر تقرير فيه، ولا تُجمع الأشهر ولا تُتوسّط.",
      en: "Read at a specific status date (usually week or month end). Numerator and denominator are cumulative from project start, so a month's value is the value of its last status report, and months are never summed or averaged.",
    },
    direction: {
      rising: {
        ar: "ارتفاع SPI نحو 1 أو فوقه يعني أن الإنجاز يلحق بالخطة أو يسبقها، وهو إيجابي عادة.",
        en: "SPI rising toward or above 1 means delivery is catching up with or ahead of plan, normally positive.",
      },
      falling: {
        ar: "انخفاضه تحت 1 يعني أن قيمة العمل المنجز أقل من المخطط. افحص المهام المتأخرة وهل تقع على المسار الحرج قبل إعلان تأخر موعد التسليم.",
        en: "Falling below 1 means less work value has been delivered than planned. Check which tasks lag and whether they sit on the critical path before announcing a later delivery date.",
      },
      caveat: {
        ar: "في المراحل الأخيرة يعود SPI إلى 1 حتمًا عند اكتمال العمل مهما كان التأخر، لأن EV وPV يلتقيان عند الموازنة الكلية. كما أن SPI مرتفعًا قد يأتي من إنجاز مهام سهلة غير حرجة مبكرًا بينما المسار الحرج متأخر. لا يُقرأ وحده بلا تواريخ المعالم.",
        en: "Late in a project SPI inevitably returns to 1 once the work completes, however late, because EV and PV both converge on the total budget. A high SPI may also come from finishing easy non-critical tasks early while the critical path slips. It is never read without milestone dates.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "القيمة المكتسبة حتى تاريخ الحالة (EV)", en: "Earned value to status date (EV)" }, value: "80,000" },
        { label: { ar: "القيمة المخططة حتى تاريخ الحالة (PV)", en: "Planned value to status date (PV)" }, value: "100,000" },
      ],
      steps: [
        { label: { ar: "SPI", en: "SPI" }, expression: "80,000 ÷ 100,000 = 0.80" },
        { label: { ar: "انحراف الجدول المقابل", en: "Matching schedule variance" }, expression: "80,000 − 100,000 = −20,000" },
      ],
      result: { label: { ar: "SPI التراكمي", en: "Cumulative SPI" }, value: "0.80" },
      reading: {
        ar: "حتى تاريخ الحالة أُنجز عمل بقيمة 80% فقط مما كان مخططًا. هذا لا يعني أن التسليم سيتأخر 20% من المدة؛ لمعرفة التأخر الزمني يجب النظر في تواريخ المعالم والمسار الحرج.",
        en: "By the status date only 80% of the planned work value has been delivered. That does not mean delivery will slip by 20% of the duration; calendar delay requires looking at milestone dates and the critical path.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "SPI عند تاريخ الحالة مع قيمة مكتسبة شبه تراكمية", en: "SPI at the status date with semi-additive earned value" },
        code: `-- Status date: the latest progress report on or before the last selected date.
-- EV, PV and AC are all cut at this single date so they stay comparable.
Status Date :=
VAR LastSelected = MAX ( 'Date'[Date] )
RETURN
    CALCULATE (
        MAX ( 'TaskStatus'[StatusDate] ),
        REMOVEFILTERS ( 'Date' ),
        'TaskStatus'[StatusDate] <= LastSelected
    )

-- PV: running total of the time-phased baseline up to the status date.
Planned Value :=
VAR StatusDate = [Status Date]
RETURN
    CALCULATE (
        SUM ( 'TaskBaseline'[PlannedAmount] ),
        REMOVEFILTERS ( 'Date' ),
        'TaskBaseline'[PlanDate] <= StatusDate
    )

-- EV is semi-additive: summed across tasks, never across status dates.
-- Each task contributes budget x its percent complete from its own latest
-- report on or before the status date.
Earned Value :=
VAR StatusDate = [Status Date]
RETURN
    SUMX (
        'Task',
        VAR PctComplete =
            CALCULATE (
                LASTNONBLANKVALUE (
                    'TaskStatus'[StatusDate],
                    MAX ( 'TaskStatus'[PercentComplete] )
                ),
                REMOVEFILTERS ( 'Date' ),
                'TaskStatus'[StatusDate] <= StatusDate
            )
        RETURN
            'Task'[BaselineBudget] * PctComplete
    )

SPI :=
DIVIDE ( [Earned Value], [Planned Value] )`,
        assumptions: [
          {
            ar: "'TaskStatus' جدول لقطات بحبيبية مهمة واحدة لكل تاريخ حالة، وPercentComplete فيه تراكمي (0 إلى 1) ومتحقق منه لا تقديري. هذا هو الفرق عن مقياس EV في مدخل CPI الذي يقرأ نسبة الإنجاز الحالية فقط من 'Task'؛ النسختان متطابقتان عند آخر تاريخ حالة.",
            en: "'TaskStatus' is a snapshot table at one row per task per status date, with a cumulative, verified PercentComplete (0 to 1). This is what differs from the EV measure in the CPI entry, which reads only the current percent complete from 'Task'; the two agree at the latest status date.",
          },
          {
            ar: "'TaskBaseline' يحمل موازنة خط الأساس موزعة زمنيًا (مبلغ لكل مهمة ولكل فترة)، ومجموعه لكل مهمة يساوي 'Task'[BaselineBudget]. هذا الجدول تدفقي قابل للجمع، ولذلك تُحسب PV كمجموع تراكمي حتى تاريخ الحالة.",
            en: "'TaskBaseline' holds the time-phased baseline (one amount per task per period), and its total per task equals 'Task'[BaselineBudget]. It is a flow table, which is why PV is a running total up to the status date.",
          },
          {
            ar: "'Date' مرتبط بـ 'TaskStatus'[StatusDate] و'TaskBaseline'[PlanDate] و'ProjectCost'[CostDate]. REMOVEFILTERS ( 'Date' ) ضروري لأن اختيار شهر في المرشح يجب ألا يقصر الحساب على أحداث ذلك الشهر فقط؛ نريد كل ما قبل تاريخ الحالة.",
            en: "'Date' relates to 'TaskStatus'[StatusDate], 'TaskBaseline'[PlanDate] and 'ProjectCost'[CostDate]. REMOVEFILTERS ( 'Date' ) is required because selecting a month must not restrict the calculation to that month's events; we want everything up to the status date.",
          },
          {
            ar: "تاريخ الحالة يُحسب مرة واحدة خارج SUMX ثم يُمرَّر لكل مهمة، فتُقطع كل المهام عند التاريخ نفسه. عند اختيار شهر لم يصدر فيه تقرير بعد يعود المقياس إلى آخر تقرير سابق بدل مقارنة EV قديمة بـ PV حتى نهاية الشهر.",
            en: "The status date is computed once outside SUMX and passed to every task, so all tasks are cut at the same date. When a month without a report yet is selected, the measure falls back to the previous report instead of comparing stale EV with PV through month end.",
          },
          {
            ar: "مهمة لا يوجد لها أي تقرير حتى تاريخ الحالة تُعطي PctComplete فارغًا فتساهم بصفر في EV، وهو الصحيح: عمل لم يُبلَّغ عن إنجازه لم يُكتسب.",
            en: "A task with no report up to the status date yields a blank PctComplete and contributes nothing to EV, which is correct: work with no reported progress has not been earned.",
          },
        ],
        requires: [
          "Task[BaselineBudget]",
          "TaskStatus[StatusDate]",
          "TaskStatus[PercentComplete]",
          "TaskBaseline[PlanDate]",
          "TaskBaseline[PlannedAmount]",
          "Date[Date]",
        ],
      },
    ],
    model: [
      {
        table: "Task",
        grain: { ar: "مهمة واحدة في هيكل تجزئة العمل", en: "One task in the work breakdown structure" },
        columns: ["TaskId", "ProjectId", "WbsPath", "BaselineBudget", "PlannedStart", "PlannedFinish", "IsCriticalPath"],
        role: { ar: "بُعد المهام ومصدر موازنة خط الأساس", en: "Task dimension and source of the baseline budget" },
      },
      {
        table: "TaskStatus",
        grain: { ar: "مهمة واحدة لكل تاريخ حالة (لقطة)", en: "One task per status date (snapshot)" },
        columns: ["TaskId", "StatusDate", "PercentComplete"],
        role: { ar: "مصدر القيمة المكتسبة؛ شبه تراكمي عبر الزمن", en: "Source of earned value; semi-additive over time" },
      },
      {
        table: "TaskBaseline",
        grain: { ar: "مهمة واحدة لكل فترة تخطيط", en: "One task per planning period" },
        columns: ["TaskId", "PlanDate", "PlannedAmount"],
        role: { ar: "خط الأساس الموزع زمنيًا؛ مصدر القيمة المخططة", en: "Time-phased baseline; source of planned value" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "WeekKey", "MonthKey", "ReportingPeriod"],
        role: {
          ar: "يحدد نقطة القياس؛ يرتبط بـ StatusDate وPlanDate وCostDate",
          en: "Sets the measurement point; related to StatusDate, PlanDate and CostDate",
        },
      },
    ],
    visuals: [
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "بطاقة تعرض SPI مع EV وPV وتاريخ الحالة معًا تمنع قراءة المؤشر بلا حجمه ولا توقيته.",
          en: "A card showing SPI with EV, PV and the status date together prevents reading the index without its size or timing.",
        },
      },
      {
        pattern: "actual-vs-target",
        why: {
          ar: "منحنى EV مقابل PV عبر تواريخ الحالة (منحنى S) يُظهر متى بدأ التأخر وهل الفجوة تتسع أم تضيق.",
          en: "The EV-versus-PV curve across status dates (the S-curve) shows when the slippage began and whether the gap is widening or closing.",
        },
      },
      {
        pattern: "exception-table",
        why: {
          ar: "جدول بالمهام والمعالم المتأخرة مع علامة المسار الحرج يحوّل رقم SPI إلى قائمة قرارات.",
          en: "A table of lagging tasks and milestones with a critical-path flag turns the SPI number into a decision list.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "قراءة SPI كنسبة من الوقت. SPI = 0.80 لا يعني تأخرًا بنسبة 20% من المدة ولا توفيرًا زمنيًا عند تجاوزه 1؛ هو مقياس بالقيمة، والتأخر الزمني يُقرأ من تواريخ الجدول والمعالم.",
        en: "Reading SPI as a percentage of time. SPI = 0.80 does not mean a 20% slip in duration, nor does a value above 1 mean calendar time saved; it is a value measure, and calendar delay is read from schedule and milestone dates.",
      },
      {
        ar: "عدم توحيد تاريخ الحالة. إذا قيست EV بآخر تقرير في 15 من الشهر وPV حتى نهاية الشهر فالمؤشر متشائم زورًا. EV وPV يجب أن يُقطعا عند التاريخ نفسه.",
        en: "Not aligning the status date. If EV comes from a report on the 15th while PV runs to month end, the index is falsely pessimistic. EV and PV must be cut at the same date.",
      },
      {
        ar: "جمع القيمة المكتسبة عبر تواريخ الحالة. EV تراكمية بطبيعتها، فجمع لقطات ثلاثة أشهر في ربع سنة يضاعف القيمة ثلاث مرات تقريبًا. قيمة الربع هي قيمة آخر تقرير فيه.",
        en: "Summing earned value across status dates. EV is cumulative by nature, so summing three monthly snapshots into a quarter roughly triples it. The quarter's value is the value of its last report.",
      },
      {
        ar: "قواعد نسبة إنجاز غير موثوقة. تقديرات مثل «90% منذ شهرين» تجعل SPI جيدًا على الورق بينما العمل متوقف. اعتمد قواعد موضوعية (0/100، 50/50، مخرجات مقبولة) ووثّقها.",
        en: "Unreliable percent-complete rules. Estimates like '90% for two months' make SPI look good on paper while the work is stalled. Use objective rules (0/100, 50/50, accepted deliverables) and document them.",
      },
      {
        ar: "حساب SPI المحفظة بمتوسط مؤشرات المشاريع. مشروع صغير بمؤشر 0.5 يزن مثل مشروع ضخم بمؤشر 1.1. الصحيح جمع EV وPV على مستوى المحفظة ثم القسمة.",
        en: "Computing portfolio SPI as the average of project indices. A small project at 0.5 then weighs as much as a large one at 1.1. The correct approach sums EV and PV at portfolio level, then divides.",
      },
    ],
    variants: [
      {
        label: { ar: "SPI الدوري", en: "Periodic SPI" },
        formula: "EV earned in the period / PV planned in the period",
        difference: {
          ar: "يقيس أداء الفترة وحدها بدل التراكمي، فيكشف التحسن أو التدهور الأخير أسرع، لكنه أكثر تذبذبًا ويجب تسميته صراحة.",
          en: "Measures the period alone rather than the cumulative position, so it exposes recent improvement or deterioration faster, but it is noisier and must be labelled explicitly.",
        },
      },
      {
        label: { ar: "SPI(t) بالجدول المكتسب", en: "SPI(t) using earned schedule" },
        formula: "SPI(t) = Earned Schedule (ES) / Actual Time (AT)",
        difference: {
          ar: "يقيس بالوقت لا بالقيمة: ES هو التاريخ الذي كان يفترض فيه بلوغ EV الحالية حسب الخطة. لا يعود إلى 1 تلقائيًا في نهاية مشروع متأخر، لكنه يحتاج منحنى PV زمنيًا دقيقًا.",
          en: "Measures in time rather than value: ES is the date by which the plan expected the current EV to be reached. It does not drift back to 1 at the end of a late project, but it needs an accurate time-phased PV curve.",
        },
      },
      {
        label: { ar: "SPI للمسار الحرج فقط", en: "Critical-path SPI" },
        formula: "EV of critical-path tasks / PV of critical-path tasks",
        difference: {
          ar: "يقصر الحساب على مهام المسار الحرج، فلا يخفي تقدم المهام الجانبية تأخر ما يحدد موعد التسليم.",
          en: "Restricts the calculation to critical-path tasks, so progress on side tasks cannot mask slippage in the work that sets the delivery date.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "عندما يكتمل كل العمل ويقع تاريخ الحالة بعد تاريخ الانتهاء المخطط يصبح EV = PV = BAC، فيساوي SPI واحدًا حتمًا مهما بلغ التأخر الفعلي.",
          en: "Once all work is complete and the status date is past the planned finish, EV = PV = BAC, so SPI necessarily equals 1 however late the project actually was.",
        },
      },
      {
        kind: "mathematical",
        text: {
          ar: "مع PV موجبة، يكون SPI أقل من 1 إذا وفقط إذا كان انحراف الجدول (EV − PV) سالبًا.",
          en: "With a positive PV, SPI is below 1 if and only if schedule variance (EV − PV) is negative.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "SPI من مكونات منهجية القيمة المكتسبة الموصوفة في أدبيات إدارة المشاريع المهنية، وقراءته التراكمية عند تاريخ حالة هي الاستخدام الافتراضي الشائع.",
          en: "SPI is part of earned value management as described in professional project management literature, and reading it cumulatively at a status date is the common default.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "عتبات التصنيف (مثل «تحذير تحت 0.95») وطريقة قياس نسبة الإنجاز وتكرار تقارير الحالة قرارات تحددها كل مؤسسة أو مكتب إدارة مشاريع.",
          en: "Status thresholds (such as 'warn below 0.95'), the percent-complete method, and status reporting frequency are decisions each organization or PMO sets.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (EV = 80,000 وPV = 100,000) توضيحية وليست معيارًا لأي قطاع.",
          en: "The example figures (EV = 80,000 and PV = 100,000) are illustrative, not a benchmark for any sector.",
        },
      },
    ],
    related: ["cpi", "schedule-variance", "milestone-on-time-rate", "eac"],
    exercise: {
      prompt: {
        ar: "مشروع موازنته الكلية 1,200,000. في تاريخ الحالة كانت PV = 600,000 وEV = 540,000. (1) احسب SPI. (2) انتهى المشروع لاحقًا بعد شهرين من موعده المخطط، واكتمل كل العمل. ما قيمة SPI التراكمي عند الإغلاق، وماذا تستنتج؟",
        en: "A project has a total budget of 1,200,000. At the status date PV = 600,000 and EV = 540,000. (1) Compute SPI. (2) The project later finished two months after its planned finish, with all work complete. What is the cumulative SPI at closure, and what do you conclude?",
      },
      hint: {
        ar: "عند الإغلاق، كم تساوي EV وكم تساوي PV إذا كان كل العمل منجزًا وتاريخ الانتهاء المخطط قد مضى؟",
        en: "At closure, what do EV and PV equal if all work is done and the planned finish has passed?",
      },
      answer: {
        ar: "(1) SPI = 540,000 ÷ 600,000 = 0.90. (2) عند الإغلاق EV = 1,200,000 (كل العمل منجز) وPV = 1,200,000 (مضى تاريخ الانتهاء المخطط)، فـ SPI = 1.00 رغم تأخر شهرين. الاستنتاج: SPI يفقد قدرته على كشف التأخر في المراحل الأخيرة، فيجب عرض تواريخ المعالم أو SPI(t) بجانبه.",
        en: "(1) SPI = 540,000 ÷ 600,000 = 0.90. (2) At closure EV = 1,200,000 (all work done) and PV = 1,200,000 (planned finish has passed), so SPI = 1.00 despite a two-month delay. Conclusion: SPI loses its ability to reveal delay in the late stages, so milestone dates or SPI(t) must be shown beside it.",
      },
    },
    references: [
      {
        title: "LASTNONBLANKVALUE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/lastnonblankvalue-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع جلب آخر نسبة إنجاز مُبلَّغ عنها لكل مهمة حتى تاريخ الحالة، وهو جوهر المعالجة شبه التراكمية.",
          en: "Reference for fetching each task's latest reported percent complete up to the status date, the core of the semi-additive handling.",
        },
      },
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "قسمة آمنة تعيد قيمة فارغة عندما تكون PV صفرًا قبل بداية الخطة.",
          en: "Safe division that returns blank when PV is zero before the plan starts.",
        },
      },
    ],
  },
  {
    id: "schedule-variance",
    slug: "schedule-variance",
    name: "Schedule Variance",
    acronym: "SV",
    nameAr: "انحراف الجدول الزمني",
    domains: ["project-management"],
    category: { ar: "القيمة المكتسبة", en: "Earned value" },
    difficulty: "intermediate",
    unit: { ar: "مبلغ بوحدة قيمة المشروع", en: "Amount in the project's value units" },
    aggregation: "semi-additive",
    definition: {
      ar: "الفرق بين القيمة المكتسبة والقيمة المخططة حتى تاريخ الحالة. يعبّر عن التقدم أو التأخر في الجدول بمبلغ مالي: قيمة العمل الذي أُنجز زيادة على الخطة أو نقصًا عنها.",
      en: "The difference between earned value and planned value to the status date. It expresses schedule progress or slippage as an amount: the value of work done ahead of or behind the plan.",
    },
    whyItMatters: {
      ar: "SPI يقول «بأي نسبة» والانحراف يقول «بكم». مشروعان بـ SPI = 0.9 قد يكون أحدهما متأخرًا بعمل قيمته 10,000 والآخر بعمل قيمته مليون. SV يعطي الحجم المطلق الذي يحتاجه القرار: كم من العمل يجب استرداده، وأي حزم العمل تستحق التدخل أولًا.",
      en: "SPI says 'by what ratio'; the variance says 'by how much'. Two projects at SPI 0.9 may be behind by 10,000 or by a million worth of work. SV gives the absolute size a decision needs: how much work must be recovered, and which work packages deserve intervention first.",
    },
    interpretation: {
      ar: "SV = −20,000 يعني أن قيمة العمل المنجز أقل بـ 20,000 مما كان مخططًا إنجازه حتى الآن. الإشارة السالبة تعني تأخرًا بالقيمة والموجبة تقدمًا. لكنه ليس عدد أيام: لمعرفة مدة التأخر تُقرأ تواريخ الجدول أو الجدول المكتسب.",
      en: "SV = −20,000 means the work delivered is worth 20,000 less than what was planned by now. A negative sign means behind in value, a positive sign ahead. It is not a number of days: calendar delay is read from schedule dates or earned schedule.",
    },
    formula: "SV = Earned Value (EV) - Planned Value (PV)",
    numerator: {
      ar: "القيمة المكتسبة التراكمية حتى تاريخ الحالة، ناقص القيمة المخططة التراكمية حتى التاريخ نفسه.",
      en: "Cumulative earned value to the status date, minus cumulative planned value to the same date.",
    },
    timeGrain: {
      ar: "لقطة تراكمية عند تاريخ حالة. قيمة الشهر أو الربع هي قيمة آخر تقرير فيه. التغير الشهري (الانحراف هذا الشهر ناقص الشهر السابق) مقياس منفصل ويجب تسميته كذلك.",
      en: "A cumulative snapshot at a status date. The value for a month or quarter is the value of its last report. The monthly change (this month's variance minus last month's) is a separate measure and must be named as such.",
    },
    direction: {
      rising: {
        ar: "ارتفاع SV نحو الصفر أو فوقه يعني أن الفجوة مع الخطة تضيق أو أن العمل يسبقها.",
        en: "SV rising toward or above zero means the gap with the plan is closing or work is ahead of it.",
      },
      falling: {
        ar: "ازدياده سلبًا يعني أن العمل المتأخر يتراكم. تابع مقدار التغير الشهري لمعرفة هل التأخر يتسارع.",
        en: "Becoming more negative means lagging work is accumulating. Track the monthly change to see whether slippage is accelerating.",
      },
      caveat: {
        ar: "مثل SPI، يعود SV إلى الصفر حتمًا عند اكتمال العمل ومضي تاريخ الانتهاء المخطط، حتى لو تأخر المشروع كثيرًا. كما أن حجمه يكبر طبيعيًا مع حجم المشروع، فلا يُقارن بين مشاريع مختلفة الحجم بدون SV%.",
        en: "Like SPI, SV inevitably returns to zero once the work completes and the planned finish has passed, even for a very late project. Its size also grows naturally with project size, so it is not compared across projects of different sizes without SV%.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "القيمة المكتسبة حتى تاريخ الحالة (EV)", en: "Earned value to status date (EV)" }, value: "80,000" },
        { label: { ar: "القيمة المخططة حتى تاريخ الحالة (PV)", en: "Planned value to status date (PV)" }, value: "100,000" },
      ],
      steps: [
        { label: { ar: "انحراف الجدول", en: "Schedule variance" }, expression: "80,000 − 100,000 = −20,000" },
        { label: { ar: "الانحراف كنسبة من PV", en: "Variance as a share of PV" }, expression: "−20,000 ÷ 100,000 = −20%" },
      ],
      result: { label: { ar: "SV التراكمي", en: "Cumulative SV" }, value: "−20,000" },
      reading: {
        ar: "المشروع متأخر بعمل قيمته 20,000 بوحدات قيمة المشروع. هذا مقدار العمل الذي يجب استرداده للعودة إلى الخطة، لا عدد الأيام التي سيتأخر بها التسليم.",
        en: "The project is behind by 20,000 worth of work in the project's value units. That is the amount of work to recover to return to plan, not the number of days delivery will slip.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "SV عند تاريخ الحالة وتغيّره خلال الفترة", en: "SV at the status date and its change within the period" },
        code: `-- Reuses [Earned Value] and [Planned Value] from the SPI entry.
-- Both are cut at the same [Status Date], so SV is a cumulative snapshot.
Schedule Variance :=
[Earned Value] - [Planned Value]

Schedule Variance % :=
DIVIDE ( [Schedule Variance], [Planned Value] )

-- SV is semi-additive: a quarter shows its last status, not the sum of months.
-- The movement inside the selected period is a separate, explicit measure.
Schedule Variance Change :=
VAR PeriodStart = MIN ( 'Date'[Date] )
VAR CurrentSV = [Schedule Variance]
VAR OpeningSV =
    CALCULATE (
        [Schedule Variance],
        REMOVEFILTERS ( 'Date' ),
        'Date'[Date] < PeriodStart
    )
RETURN
    CurrentSV - OpeningSV`,
        assumptions: [
          {
            ar: "[Earned Value] و[Planned Value] هما المقياسان المعرّفان في مدخل SPI، وكلاهما يُقطع عند [Status Date] نفسه، أي آخر تقرير حالة حتى نهاية الفترة المختارة.",
            en: "[Earned Value] and [Planned Value] are the measures defined in the SPI entry, both cut at the same [Status Date], the latest status report up to the end of the selected period.",
          },
          {
            ar: "في OpeningSV يعيد [Status Date] تقييم نفسه تحت المرشح الجديد، فيصبح آخر تقرير قبل بداية الفترة. لذلك يمثل OpeningSV الانحراف الافتتاحي للفترة لا مجموعًا.",
            en: "Inside OpeningSV, [Status Date] re-evaluates under the new filter and becomes the last report before the period starts. OpeningSV is therefore the period's opening variance, not a sum.",
          },
          {
            ar: "في الفترة الأولى للمشروع يكون OpeningSV فارغًا فيساوي التغير الانحراف الحالي، وهو السلوك الصحيح.",
            en: "In the project's first period OpeningSV is blank, so the change equals the current variance, which is the correct behaviour.",
          },
          {
            ar: "Schedule Variance يمكن جمعه عبر المهام أو المشاريع عند تاريخ حالة واحد، لكن لا يُجمع أبدًا عبر تواريخ الحالة.",
            en: "Schedule Variance can be summed across tasks or projects at one status date, but never across status dates.",
          },
        ],
        requires: ["[Earned Value]", "[Planned Value]", "[Status Date]", "Date[Date]"],
      },
    ],
    model: [
      {
        table: "Task",
        grain: { ar: "مهمة أو حزمة عمل واحدة في هيكل تجزئة العمل", en: "One task or work package in the WBS" },
        columns: ["TaskId", "ProjectId", "WbsPath", "WorkPackage", "BaselineBudget", "IsCriticalPath"],
        role: { ar: "بُعد التحليل حسب حزمة العمل ومصدر الموازنة", en: "Work-package analysis dimension and budget source" },
      },
      {
        table: "TaskStatus",
        grain: { ar: "مهمة واحدة لكل تاريخ حالة (لقطة)", en: "One task per status date (snapshot)" },
        columns: ["TaskId", "StatusDate", "PercentComplete"],
        role: { ar: "مصدر القيمة المكتسبة", en: "Source of earned value" },
      },
      {
        table: "TaskBaseline",
        grain: { ar: "مهمة واحدة لكل فترة تخطيط", en: "One task per planning period" },
        columns: ["TaskId", "PlanDate", "PlannedAmount"],
        role: { ar: "مصدر القيمة المخططة الموزعة زمنيًا", en: "Source of time-phased planned value" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "ReportingPeriod"],
        role: { ar: "يحدد تاريخ الحالة وبداية الفترة", en: "Sets the status date and period start" },
      },
    ],
    visuals: [
      {
        pattern: "actual-vs-target",
        why: {
          ar: "خط EV مقابل خط PV عبر تواريخ الحالة يجعل SV هو المسافة الرأسية بينهما، فيظهر الاتجاه بوضوح.",
          en: "An EV line against a PV line across status dates makes SV the vertical gap between them, showing its trend clearly.",
        },
      },
      {
        pattern: "variance-bar",
        why: {
          ar: "أعمدة الانحراف حسب حزمة العمل (مصفوفة حزم العمل في المرجع) تبيّن أين يتركز التأخر بالقيمة.",
          en: "Variance bars by work package (the reference's work-package matrix) show where the value slippage is concentrated.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "تقديم SV كأيام تأخر. SV مقيس بوحدات القيمة لا بالأيام؛ لإيصال التأخر الزمني استخدم تواريخ الجدول أو تحليل الجدول المكتسب.",
        en: "Presenting SV as days late. SV is in value units, not days; to communicate calendar delay use schedule dates or earned schedule analysis.",
      },
      {
        ar: "جمع الانحراف الشهري في إجمالي سنوي. SV تراكمي بالفعل، فجمع لقطات الأشهر يضخّم التأخر عدة مرات. قيمة السنة هي آخر لقطة فيها، والتغير الشهري مقياس منفصل.",
        en: "Summing monthly SV into an annual total. SV is already cumulative, so summing monthly snapshots inflates the slippage several times over. The year's value is its last snapshot, and the monthly change is a separate measure.",
      },
      {
        ar: "مقارنة SV بين مشاريع مختلفة الحجم. −50,000 في مشروع بعشرة ملايين أهون من −20,000 في مشروع بمئتي ألف. استخدم SV% أو SPI للمقارنة.",
        en: "Comparing SV across projects of different sizes. −50,000 on a ten-million project is milder than −20,000 on a two-hundred-thousand one. Use SV% or SPI for comparison.",
      },
      {
        ar: "تعويض تأخر المسار الحرج بتقدم مهام جانبية. SV الإجمالي قد يكون صفرًا بينما موعد التسليم ينزلق، لأن الانحرافات الموجبة والسالبة تتقاص.",
        en: "Letting side tasks running ahead offset a lagging critical path. Total SV can be zero while the delivery date slips, because positive and negative variances net off.",
      },
      {
        ar: "إعادة تأسيس خط الأساس دون حفظ الأصلي. PV الجديدة تمحو الانحراف المتراكم وتجعل المشروع يبدو في موعده فجأة. احفظ خط الأساس الأصلي واعرض الانحرافين.",
        en: "Re-baselining without keeping the original. The new PV wipes the accumulated variance and makes the project suddenly look on schedule. Keep the original baseline and show both variances.",
      },
    ],
    variants: [
      {
        label: { ar: "SV% نسبة الانحراف", en: "SV% (variance percentage)" },
        formula: "SV% = SV / PV x 100",
        difference: {
          ar: "يحوّل الانحراف إلى نسبة من المخطط فيصبح قابلًا للمقارنة بين المشاريع، ويساوي (SPI − 1) رياضيًا.",
          en: "Turns the variance into a share of plan so it can be compared across projects; it is mathematically equal to (SPI − 1).",
        },
      },
      {
        label: { ar: "SV(t) بالجدول المكتسب", en: "SV(t) using earned schedule" },
        formula: "SV(t) = Earned Schedule (ES) - Actual Time (AT)",
        difference: {
          ar: "يقيس الانحراف بوحدات زمنية (أيام أو أسابيع) بدل القيمة، ولا يعود إلى الصفر عند نهاية مشروع متأخر، لكنه يتطلب منحنى PV زمنيًا دقيقًا.",
          en: "Measures the variance in time units (days or weeks) rather than value, and does not return to zero at the end of a late project, but it needs an accurate time-phased PV curve.",
        },
      },
      {
        label: { ar: "SV الدوري", en: "Periodic SV" },
        formula: "SV at period end - SV at previous period end",
        difference: {
          ar: "يقيس ما أضافته الفترة الحالية إلى التأخر أو استردته منه، وهو ما يحسبه مقياس Schedule Variance Change.",
          en: "Measures what the current period added to or recovered from the slippage, which is what the Schedule Variance Change measure computes.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "SV = PV × (SPI − 1)، فالانحراف والمؤشر يحملان المعلومة نفسها مرة بالمبلغ ومرة بالنسبة، ولهما الإشارة نفسها دائمًا ما دامت PV موجبة.",
          en: "SV = PV × (SPI − 1), so the variance and the index carry the same information, one as an amount and one as a ratio, and they always share the same sign while PV is positive.",
        },
      },
      {
        kind: "mathematical",
        text: {
          ar: "عند تاريخ حالة واحد، SV للمشروع يساوي مجموع SV لكل مهامه بالضبط، لأن EV وPV كليهما مجموعان عبر المهام.",
          en: "At a single status date, project SV equals exactly the sum of its tasks' SV, because EV and PV are both sums across tasks.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "اصطلاح الإشارة (سالب = متأخر) هو الشائع في منهجية القيمة المكتسبة.",
          en: "The sign convention (negative = behind) is the common one in earned value management.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "حدود التصعيد (مثل انحراف يتجاوز 10% من PV) وتكرار تقارير الحالة يحددها مكتب إدارة المشاريع في كل مؤسسة.",
          en: "Escalation limits (such as a variance above 10% of PV) and status reporting frequency are set by each organization's PMO.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (EV = 80,000 وPV = 100,000) توضيحية فقط.",
          en: "The example figures (EV = 80,000 and PV = 100,000) are illustrative only.",
        },
      },
    ],
    related: ["spi", "cost-variance", "milestone-on-time-rate"],
    exercise: {
      prompt: {
        ar: "في نهاية الربع الأول كانت EV = 340,000 وPV = 400,000. وكان SV التراكمي في نهاية يناير −20,000 وفبراير −45,000 ومارس −60,000. (1) احسب SV وSV% للربع. (2) زميل عرض SV الربع بجمع الأشهر الثلاثة؛ ما الرقم الذي حصل عليه ولماذا هو خطأ؟ (3) كم أضاف مارس وحده إلى التأخر؟",
        en: "At the end of Q1, EV = 340,000 and PV = 400,000. Cumulative SV was −20,000 at end of January, −45,000 at end of February and −60,000 at end of March. (1) Compute Q1 SV and SV%. (2) A colleague reported Q1 SV by summing the three months; what number did they get and why is it wrong? (3) How much did March alone add to the slippage?",
      },
      hint: {
        ar: "SV تراكمي. قيمة الربع هي قيمة آخر تاريخ حالة فيه، والتغير هو الفرق بين لقطتين.",
        en: "SV is cumulative. The quarter's value is the value at its last status date, and a change is the difference between two snapshots.",
      },
      answer: {
        ar: "(1) SV = 340,000 − 400,000 = −60,000، وSV% = −60,000 ÷ 400,000 = −15%. (2) الجمع يعطي −20,000 − 45,000 − 60,000 = −125,000، أي أكثر من ضعف الحقيقة، لأن كل لقطة تتضمن ما قبلها. (3) تغير مارس = −60,000 − (−45,000) = −15,000.",
        en: "(1) SV = 340,000 − 400,000 = −60,000, and SV% = −60,000 ÷ 400,000 = −15%. (2) Summing gives −20,000 − 45,000 − 60,000 = −125,000, more than double the truth, because each snapshot already contains the ones before it. (3) March change = −60,000 − (−45,000) = −15,000.",
      },
    },
    references: [
      {
        title: "REMOVEFILTERS function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/removefilters-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع إزالة مرشح التاريخ لحساب الانحراف الافتتاحي قبل بداية الفترة.",
          en: "Reference for clearing the date filter to compute the opening variance before the period starts.",
        },
      },
      {
        title: "CALCULATE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/calculate-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع تعديل سياق الترشيح الذي يعيد تقييم [Status Date] عند بداية الفترة.",
          en: "Reference for the filter-context change that re-evaluates [Status Date] at the period start.",
        },
      },
    ],
  },
  {
    id: "cost-variance",
    slug: "cost-variance",
    name: "Cost Variance",
    acronym: "CV",
    nameAr: "انحراف التكلفة",
    domains: ["project-management", "finance"],
    category: { ar: "القيمة المكتسبة", en: "Earned value" },
    difficulty: "intermediate",
    unit: { ar: "مبلغ بعملة المشروع", en: "Amount in project currency" },
    aggregation: "semi-additive",
    definition: {
      ar: "الفرق بين القيمة المكتسبة والتكلفة الفعلية حتى تاريخ الحالة. يقيس هل كلّف العمل المنجز أكثر أو أقل من الموازنة المخصصة له، لا هل أنفق المشروع أكثر من موازنته الكلية.",
      en: "The difference between earned value and actual cost to the status date. It measures whether the work done cost more or less than the budget allotted to it, not whether the project has spent more than its total budget.",
    },
    whyItMatters: {
      ar: "مقارنة المصروف بالموازنة المخططة تخلط التأخر بالتجاوز: مشروع متأخر ينفق أقل من المخطط فيبدو موفرًا. CV يقارن التكلفة بقيمة ما أُنجز فعلًا، فيكشف التجاوز الحقيقي ويحدد حزم العمل التي تستهلكه بالمبلغ.",
      en: "Comparing spend with the planned budget mixes delay with overrun: a late project spends less than planned and looks thrifty. CV compares cost with the value of what was actually delivered, exposing the real overrun and pinpointing, in currency, the work packages consuming it.",
    },
    interpretation: {
      ar: "CV = −10,000 يعني أن العمل المنجز حتى الآن كلّف 10,000 أكثر من موازنته. الإشارة السالبة تجاوز والموجبة وفر. الانحراف الموجب قد يعكس كفاءة حقيقية أو تكاليف لم تُسجَّل بعد، فتحقق من الاستحقاقات قبل الاحتفال.",
      en: "CV = −10,000 means the work delivered so far cost 10,000 more than its budget. A negative sign is an overrun, a positive sign a saving. A positive variance may reflect real efficiency or costs not yet recorded, so check accruals before celebrating.",
    },
    formula: "CV = Earned Value (EV) - Actual Cost (AC)",
    numerator: {
      ar: "القيمة المكتسبة التراكمية حتى تاريخ الحالة، ناقص التكلفة الفعلية التراكمية المتكبدة حتى التاريخ نفسه بما فيها الالتزامات المستحقة.",
      en: "Cumulative earned value to the status date, minus cumulative actual cost incurred to the same date including accrued commitments.",
    },
    timeGrain: {
      ar: "لقطة تراكمية عند تاريخ الحالة، تُقرأ أسبوعيًا أو شهريًا مع إقفال التكاليف. قيمة الفترة هي قيمة آخر تاريخ حالة فيها، ولا تُجمع الفترات.",
      en: "A cumulative snapshot at the status date, read weekly or monthly in line with the cost close. A period's value is the value at its last status date, and periods are never summed.",
    },
    direction: {
      rising: {
        ar: "ارتفاع CV نحو الصفر أو فوقه يعني أن العمل ينجز بتكلفة الموازنة أو أقل.",
        en: "CV rising toward or above zero means work is being delivered at or under budgeted cost.",
      },
      falling: {
        ar: "ازدياده سلبًا يعني تراكم التجاوز. حدد حزم العمل المسببة قبل أن يتحول إلى تجاوز للموازنة الكلية.",
        en: "Becoming more negative means the overrun is accumulating. Identify the work packages responsible before it becomes a total budget overrun.",
      },
      caveat: {
        ar: "CV موجب مع تأخر في الجدول قد يعني فقط أن الفواتير لم تصل. وحجمه يكبر مع حجم المشروع، فلا يُقارن بين مشاريع مختلفة الحجم بدون CV% أو CPI.",
        en: "A positive CV alongside schedule slippage may only mean invoices have not arrived. Its size grows with project size, so it is not compared across projects of different sizes without CV% or CPI.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "القيمة المكتسبة حتى تاريخ الحالة (EV)", en: "Earned value to status date (EV)" }, value: "90,000" },
        { label: { ar: "التكلفة الفعلية حتى تاريخ الحالة (AC)", en: "Actual cost to status date (AC)" }, value: "100,000" },
      ],
      steps: [
        { label: { ar: "انحراف التكلفة", en: "Cost variance" }, expression: "90,000 − 100,000 = −10,000" },
        { label: { ar: "الانحراف كنسبة من EV", en: "Variance as a share of EV" }, expression: "−10,000 ÷ 90,000 = −11.1%" },
        { label: { ar: "CPI المقابل", en: "Matching CPI" }, expression: "90,000 ÷ 100,000 = 0.90" },
      ],
      result: { label: { ar: "CV التراكمي", en: "Cumulative CV" }, value: "−10,000" },
      reading: {
        ar: "العمل المنجز كان يُفترض أن يكلف 90,000 لكنه كلّف 100,000، أي تجاوز 10,000 (11.1% من قيمة المنجز). الخطوة التالية تفكيك هذا الرقم حسب حزمة العمل ونوع التكلفة.",
        en: "The delivered work should have cost 90,000 but cost 100,000, an overrun of 10,000 (11.1% of the value delivered). The next step is to break this figure down by work package and cost type.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "CV عند تاريخ الحالة", en: "CV at the status date" },
        code: `-- Actual cost cut at the same [Status Date] as EV (see the SPI entry).
Actual Cost :=
VAR StatusDate = [Status Date]
RETURN
    CALCULATE (
        SUM ( 'ProjectCost'[ActualAmount] ),
        REMOVEFILTERS ( 'Date' ),
        'ProjectCost'[CostDate] <= StatusDate
    )

Cost Variance :=
[Earned Value] - [Actual Cost]

-- Percentage of delivered value, comparable across projects of any size.
Cost Variance % :=
DIVIDE ( [Cost Variance], [Earned Value] )`,
        assumptions: [
          {
            ar: "[Earned Value] و[Status Date] هما المقياسان المعرّفان في مدخل SPI. هذا Actual Cost نسخة واعية بتاريخ الحالة من مقياس مدخل CPI بنفس الجدول والعمود، والفرق أنه يقطع التكلفة عند تاريخ آخر تقرير لا عند آخر يوم في المرشح.",
            en: "[Earned Value] and [Status Date] are the measures defined in the SPI entry. This Actual Cost is a status-date-aware version of the CPI entry's measure on the same table and column; the difference is that it cuts cost at the last report date rather than the last date in the filter.",
          },
          {
            ar: "'ProjectCost'[ActualAmount] يتضمن الاستحقاقات والالتزامات المستلمة غير المفوترة، وإلا ظهر CV موجبًا زورًا حتى تصل الفواتير.",
            en: "'ProjectCost'[ActualAmount] includes accruals and received-but-uninvoiced commitments; otherwise CV looks falsely positive until invoices arrive.",
          },
          {
            ar: "التكاليف مرمّزة بنفس TaskId المستخدم في الموازنة وقياس الإنجاز، وإلا لا يمكن مقارنة EV بـ AC على مستوى حزمة العمل.",
            en: "Costs are coded to the same TaskId used for budgeting and progress measurement; otherwise EV cannot be compared with AC at work-package level.",
          },
          {
            ar: "Cost Variance يُجمع عبر المهام والمشاريع عند تاريخ حالة واحد، لكنه لقطة تراكمية لا تُجمع عبر تواريخ الحالة.",
            en: "Cost Variance sums across tasks and projects at one status date, but it is a cumulative snapshot that never sums across status dates.",
          },
        ],
        requires: ["[Earned Value]", "[Status Date]", "ProjectCost[ActualAmount]", "ProjectCost[CostDate]"],
      },
    ],
    model: [
      {
        table: "Task",
        grain: { ar: "مهمة أو حزمة عمل واحدة في هيكل تجزئة العمل", en: "One task or work package in the WBS" },
        columns: ["TaskId", "ProjectId", "WbsPath", "WorkPackage", "BaselineBudget"],
        role: { ar: "بُعد حزم العمل ومصدر الموازنة", en: "Work-package dimension and budget source" },
      },
      {
        table: "TaskStatus",
        grain: { ar: "مهمة واحدة لكل تاريخ حالة (لقطة)", en: "One task per status date (snapshot)" },
        columns: ["TaskId", "StatusDate", "PercentComplete"],
        role: { ar: "مصدر القيمة المكتسبة", en: "Source of earned value" },
      },
      {
        table: "ProjectCost",
        grain: { ar: "بند تكلفة واحد لكل مهمة وتاريخ", en: "One cost line per task and date" },
        columns: ["TaskId", "CostDate", "ActualAmount", "CommitmentAmount", "CostType"],
        role: { ar: "مصدر التكلفة الفعلية؛ جدول تدفقي قابل للجمع", en: "Source of actual cost; an additive flow table" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "ReportingPeriod"],
        role: { ar: "يرتبط بـ CostDate وStatusDate ويحدد نقطة القياس", en: "Related to CostDate and StatusDate; sets the measurement point" },
      },
    ],
    visuals: [
      {
        pattern: "variance-bar",
        why: {
          ar: "أعمدة الانحراف حسب حزمة العمل (مصفوفة الانحراف في المرجع) تبيّن أين يتركز التجاوز بالمبلغ.",
          en: "Variance bars by work package (the reference's variance matrix) show where the overrun is concentrated in currency.",
        },
      },
      {
        pattern: "waterfall-variance",
        why: {
          ar: "جسر من EV إلى AC عبر حزم العمل أو أنواع التكلفة يشرح كيف تراكم الانحراف الإجمالي.",
          en: "A bridge from EV to AC across work packages or cost types explains how the total variance built up.",
        },
      },
      {
        pattern: "actual-vs-target",
        why: {
          ar: "خط AC مقابل خط EV عبر تواريخ الحالة يبيّن اتجاه الانحراف: هل يتسع أم يستقر.",
          en: "An AC line against an EV line across status dates shows the variance trend: widening or stabilising.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عدم توحيد ترميز التكاليف وتاريخ الحالة وقواعد القيمة المكتسبة. تكاليف مسجلة على مركز تكلفة عام بدل حزمة العمل، أو مقطوعة بتاريخ مختلف عن تقرير الإنجاز، تجعل الانحراف بلا معنى.",
        en: "Inconsistent cost coding, status dates, and earned-value rules. Costs booked to a general cost centre instead of the work package, or cut at a different date from the progress report, make the variance meaningless.",
      },
      {
        ar: "مقارنة AC بـ PV بدل EV. هذا انحراف الموازنة مقابل الصرف، ويخلط التأخر بالتوفير: مشروع متأخر يبدو تحت الموازنة.",
        en: "Comparing AC to PV instead of EV. That is budget-versus-spend variance, and it mixes delay with savings: a late project looks under budget.",
      },
      {
        ar: "تجاهل الاستحقاقات والالتزامات غير المفوترة. الفواتير المتأخرة تجعل CV موجبًا مؤقتًا ثم ينهار عند وصولها.",
        en: "Ignoring accruals and uninvoiced commitments. Late invoices make CV temporarily positive, then it collapses when they arrive.",
      },
      {
        ar: "جمع لقطات الانحراف الشهرية. CV تراكمي، فجمع الأشهر يضخّم التجاوز. استخدم آخر لقطة في الفترة أو مقياس تغير صريح.",
        en: "Summing monthly variance snapshots. CV is cumulative, so summing months inflates the overrun. Use the period's last snapshot or an explicit change measure.",
      },
      {
        ar: "حساب CV% للمحفظة بمتوسط نسب المشاريع أو حزم العمل. الصحيح جمع CV وEV أولًا ثم القسمة.",
        en: "Computing portfolio CV% as the average of project or work-package percentages. The correct approach sums CV and EV first, then divides.",
      },
    ],
    variants: [
      {
        label: { ar: "CV% نسبة الانحراف", en: "CV% (variance percentage)" },
        formula: "CV% = CV / EV x 100",
        difference: {
          ar: "يعبّر عن الانحراف كنسبة من قيمة المنجز فيصبح قابلًا للمقارنة بين المشاريع، ويساوي (1 − 1/CPI) رياضيًا.",
          en: "Expresses the variance as a share of delivered value so it can be compared across projects; it is mathematically equal to (1 − 1/CPI).",
        },
      },
      {
        label: { ar: "انحراف الموازنة عند الإكمال (VAC)", en: "Variance at completion (VAC)" },
        formula: "VAC = BAC - EAC",
        difference: {
          ar: "ينظر إلى الأمام: التجاوز المتوقع عند نهاية المشروع بدل التجاوز المتحقق حتى الآن، ويعتمد على طريقة التنبؤ المختارة لـ EAC.",
          en: "Looks forward: the overrun expected at project end rather than the overrun realised so far, and it depends on the chosen EAC method.",
        },
      },
      {
        label: { ar: "CV الدوري", en: "Periodic CV" },
        formula: "CV at period end - CV at previous period end",
        difference: {
          ar: "يعزل ما أضافته الفترة الحالية إلى التجاوز، فيكشف التدهور الأخير الذي يخففه الرقم التراكمي الطويل.",
          en: "Isolates what the current period added to the overrun, revealing recent deterioration that the long cumulative figure dampens.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "CV سالب إذا وفقط إذا كان CPI أقل من 1 (مع EV موجبة)، وCV% = 1 − 1/CPI.",
          en: "CV is negative if and only if CPI is below 1 (with positive EV), and CV% = 1 − 1/CPI.",
        },
      },
      {
        kind: "mathematical",
        text: {
          ar: "عند تاريخ حالة واحد، CV للمشروع يساوي مجموع CV لحزم عمله بالضبط، بينما CV% للمشروع لا يساوي متوسط نسب الحزم.",
          en: "At a single status date, project CV equals exactly the sum of its work packages' CV, whereas project CV% does not equal the average of the packages' percentages.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "اصطلاح الإشارة (سالب = تجاوز) هو الشائع في منهجية القيمة المكتسبة.",
          en: "The sign convention (negative = overrun) is the common one in earned value management.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "معاملة الالتزامات والاستحقاقات، وحدود التصعيد، وتعريف التكلفة المحمّلة على المشروع (مباشرة فقط أم مع المصاريف غير المباشرة) قواعد محاسبية لكل مؤسسة.",
          en: "The treatment of commitments and accruals, escalation limits, and what cost is charged to the project (direct only or with overheads) are accounting rules for each organization.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (EV = 90,000 وAC = 100,000) توضيحية فقط.",
          en: "The example figures (EV = 90,000 and AC = 100,000) are illustrative only.",
        },
      },
    ],
    related: ["cpi", "eac", "schedule-variance", "opex-variance"],
    exercise: {
      prompt: {
        ar: "مشروع من حزمتي عمل. الحزمة A: EV = 200,000 وAC = 180,000. الحزمة B: EV = 150,000 وAC = 210,000. احسب CV لكل حزمة وللمشروع، وCV% للمشروع، ثم قارنه بمتوسط CV% للحزمتين.",
        en: "A project has two work packages. Package A: EV = 200,000 and AC = 180,000. Package B: EV = 150,000 and AC = 210,000. Compute CV for each package and for the project, the project CV%, and compare it with the average of the two packages' CV%.",
      },
      hint: {
        ar: "CV يُجمع مباشرة. أما النسبة فاحسبها من المجاميع لا من متوسط النسب.",
        en: "CV sums directly. The percentage must be computed from the totals, not from an average of percentages.",
      },
      answer: {
        ar: "A: CV = 200,000 − 180,000 = +20,000 (CV% = +10%). B: CV = 150,000 − 210,000 = −60,000 (CV% = −40%). المشروع: CV = 20,000 − 60,000 = −40,000، وEV = 350,000، فـ CV% = −40,000 ÷ 350,000 = −11.4%. متوسط النسبتين = (10% − 40%) ÷ 2 = −15%، وهو خطأ لأنه يعطي الحزمة B الصغيرة الوزن نفسه.",
        en: "A: CV = 200,000 − 180,000 = +20,000 (CV% = +10%). B: CV = 150,000 − 210,000 = −60,000 (CV% = −40%). Project: CV = 20,000 − 60,000 = −40,000 and EV = 350,000, so CV% = −40,000 ÷ 350,000 = −11.4%. The average of the two percentages = (10% − 40%) ÷ 2 = −15%, which is wrong because it gives the smaller package B the same weight.",
      },
    },
    references: [
      {
        title: "CALCULATE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/calculate-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع قطع التكلفة الفعلية التراكمية عند تاريخ الحالة.",
          en: "Reference for cutting cumulative actual cost at the status date.",
        },
      },
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "قسمة آمنة لـ CV% عندما تكون EV صفرًا في بداية المشروع.",
          en: "Safe division for CV% when EV is zero at project start.",
        },
      },
    ],
  },
  {
    id: "milestone-on-time-rate",
    slug: "milestone-on-time-rate",
    name: "Milestone On-Time Completion Rate",
    nameAr: "نسبة إنجاز المعالم في موعدها",
    domains: ["project-management"],
    category: { ar: "الالتزام بالتسليم", en: "Delivery reliability" },
    difficulty: "intermediate",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة المعالم المؤهلة التي اكتملت في تاريخ خط الأساس المخطط لها أو قبله، من بين كل المعالم المؤهلة التي حلّ موعدها أو اكتملت خلال الفترة.",
      en: "The share of eligible milestones completed on or before their baseline date, out of all eligible milestones that fell due or were completed in the period.",
    },
    whyItMatters: {
      ar: "المعالم هي لغة الوعد مع أصحاب المصلحة: تسليم مرحلة، إطلاق نظام، موافقة جهة. هذا المؤشر يقيس موثوقية الوعد مباشرة وبتواريخ مفهومة، ويكمل مؤشرات القيمة المكتسبة التي تقيس بالقيمة لا بالتاريخ.",
      en: "Milestones are the language of promises to stakeholders: a phase handover, a system launch, an approval. This metric measures promise reliability directly and in understandable dates, complementing earned-value metrics that measure in value rather than dates.",
    },
    interpretation: {
      ar: "نسبة 90% تعني أن 9 من كل 10 معالم مستحقة تحققت في موعدها الأصلي. المؤشر لا يقيس حجم التأخر: معلم تأخر يومًا ومعلم تأخر ثلاثة أشهر يُحتسبان فشلًا بالتساوي، ولذلك يُعرض معه متوسط أيام التأخر.",
      en: "A rate of 90% means 9 of every 10 due milestones were met on their original date. It does not measure the size of the delay: a milestone one day late and one three months late count equally as failures, which is why average days late is shown beside it.",
    },
    formula:
      "On-Time Milestone % = Eligible Milestones Completed On or Before Baseline Date / Eligible Milestones Due or Completed x 100",
    numerator: {
      ar: "عدد المعالم المؤهلة التي سُجّل تاريخ إنجازها الفعلي في تاريخ خط الأساس الأصلي أو قبله.",
      en: "Count of eligible milestones whose actual completion date is on or before the original baseline date.",
    },
    denominator: {
      ar: "عدد المعالم المؤهلة التي حُسم مصيرها في الفترة: حلّ تاريخ خط أساسها (اكتملت أم لا) أو اكتملت مبكرًا قبله. المعالم المتأخرة غير المكتملة تبقى في المقام.",
      en: "Count of eligible milestones whose outcome was decided in the period: their baseline date arrived (completed or not) or they were completed early before it. Late, incomplete milestones stay in the denominator.",
    },
    timeGrain: {
      ar: "شهريًا أو ربعيًا حسب «تاريخ القياس» لكل معلم: تاريخ الإنجاز إن اكتمل في موعده، وإلا تاريخ خط الأساس. هكذا يُحتسب كل معلم في فترة واحدة فقط.",
      en: "Monthly or quarterly by each milestone's 'measure date': the completion date if met on time, otherwise the baseline date. This way each milestone counts in exactly one period.",
    },
    direction: {
      rising: {
        ar: "ارتفاع النسبة يعني وفاءً أفضل بالمواعيد، بشرط أن خط الأساس لم يُعدَّل لاستيعاب التأخر.",
        en: "A rising rate means dates are being kept better, provided the baseline was not revised to absorb delays.",
      },
      falling: {
        ar: "انخفاضها يعني تراجع موثوقية التسليم. افحص هل التأخر متركز في مشروع أو نوع معلم أو جهة خارجية.",
        en: "A falling rate means delivery reliability is slipping. Check whether delays concentrate in one project, milestone type, or external party.",
      },
      caveat: {
        ar: "النسبة حساسة لعدد المعالم الصغير: مشروع بخمسة معالم يقفز 20 نقطة بمعلم واحد. كما يمكن رفعها بتقسيم المعالم الكبيرة إلى صغيرة سهلة أو بإعادة تأسيس خط الأساس، فاعرض دائمًا العدد والمقام.",
        en: "The rate is sensitive to small counts: a project with five milestones jumps 20 points on a single milestone. It can also be raised by splitting large milestones into easy small ones or by re-baselining, so always show the counts and the denominator.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "المعالم المؤهلة المستحقة أو المكتملة في الفترة", en: "Eligible milestones due or completed in the period" }, value: "20" },
        { label: { ar: "المعالم المكتملة في تاريخ خط الأساس أو قبله", en: "Milestones completed on or before baseline date" }, value: "18" },
      ],
      steps: [
        { label: { ar: "نسبة الإنجاز في الموعد", en: "On-time rate" }, expression: "18 ÷ 20 × 100 = 90%" },
        { label: { ar: "المعالم المتأخرة أو غير المكتملة", en: "Late or incomplete milestones" }, expression: "20 − 18 = 2" },
      ],
      result: { label: { ar: "نسبة المعالم في موعدها", en: "On-time milestone rate" }, value: "90%" },
      reading: {
        ar: "تحقق 18 معلمًا من 20 في موعده الأصلي. المعلمان المتبقيان يجب عرضهما بالاسم وأيام التأخر، لأن أثرهما على التسليم قد يفوق النسبة نفسها.",
        en: "18 of 20 milestones were met on their original date. The remaining two should be listed by name with days late, because their impact on delivery may outweigh the rate itself.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "نسبة المعالم في موعدها حسب تاريخ القياس", en: "On-time milestone rate by measure date" },
        code: `-- Calculated columns on 'Milestone' (one row per milestone).
-- The single date on which the outcome is decided.
MeasureDate =
IF (
    NOT ISBLANK ( 'Milestone'[ActualDate] )
        && 'Milestone'[ActualDate] <= 'Milestone'[BaselineDate],
    'Milestone'[ActualDate],
    'Milestone'[BaselineDate]
)

-- Explicit blank test: in DAX a blank date compares as earlier than any date.
IsOnTime =
NOT ISBLANK ( 'Milestone'[ActualDate] )
    && 'Milestone'[ActualDate] <= 'Milestone'[BaselineDate]

-- Measures. 'Date'[Date] filters 'Milestone'[MeasureDate].
Milestones Eligible :=
CALCULATE (
    COUNTROWS ( 'Milestone' ),
    'Milestone'[IsEligible] = TRUE (),
    'Milestone'[MeasureDate] < TODAY ()
)

Milestones On Time :=
CALCULATE (
    [Milestones Eligible],
    'Milestone'[IsOnTime] = TRUE ()
)

On-Time Milestone % :=
DIVIDE ( [Milestones On Time], [Milestones Eligible] )`,
        assumptions: [
          {
            ar: "'Milestone'[BaselineDate] هو تاريخ خط الأساس الأصلي المعتمد ولا يُحدَّث. أي تاريخ معاد جدولته يُحفظ في عمود منفصل مثل CurrentBaselineDate.",
            en: "'Milestone'[BaselineDate] is the original approved baseline date and is never overwritten. Any rescheduled date is kept in a separate column such as CurrentBaselineDate.",
          },
          {
            ar: "العلاقة النشطة من 'Date'[Date] إلى 'Milestone'[MeasureDate]. المعلم المنجز مبكرًا يُحتسب في فترة إنجازه، والمتأخر أو غير المنجز يُحتسب فشلًا في فترة تاريخ خط أساسه، فلا يُحتسب معلم مرتين.",
            en: "The active relationship runs from 'Date'[Date] to 'Milestone'[MeasureDate]. A milestone met early counts in its completion period; a late or unmet one counts as a failure in its baseline period, so no milestone is counted twice.",
          },
          {
            ar: "شرط MeasureDate < TODAY () يستبعد المعالم التي لم يُحسم مصيرها بعد، فلا يُحتسب معلم موعده غدًا فشلًا عند اختيار الشهر الجاري. في التقارير التاريخية استبدل TODAY () بتاريخ الإقفال.",
            en: "The MeasureDate < TODAY () condition excludes milestones whose outcome is not yet decided, so a milestone due tomorrow is not counted as a failure when the current month is selected. For historical reports replace TODAY () with the cut-off date.",
          },
          {
            ar: "'Milestone'[IsEligible] يُحدد بقاعدة موثقة (مثلًا يستبعد المعالم الملغاة بقرار تغيير معتمد)، لا بقرار يدوي بعد معرفة النتيجة.",
            en: "'Milestone'[IsEligible] is set by a documented rule (for example excluding milestones cancelled by an approved change), not by a manual decision after the outcome is known.",
          },
          {
            ar: "النسبة تُحسب دائمًا من عدّين مجمّعين، فتصح عند أي مستوى (مشروع، برنامج، محفظة، ربع) دون متوسط نسب.",
            en: "The rate is always computed from two aggregated counts, so it is correct at any level (project, programme, portfolio, quarter) without averaging percentages.",
          },
        ],
        requires: [
          "Milestone[BaselineDate]",
          "Milestone[ActualDate]",
          "Milestone[IsEligible]",
          "Milestone[MeasureDate]",
          "Milestone[IsOnTime]",
        ],
      },
    ],
    model: [
      {
        table: "Milestone",
        grain: { ar: "معلم واحد لكل صف", en: "One row per milestone" },
        columns: [
          "MilestoneId",
          "ProjectId",
          "MilestoneName",
          "MilestoneType",
          "BaselineDate",
          "CurrentBaselineDate",
          "ActualDate",
          "IsEligible",
          "MeasureDate",
          "IsOnTime",
        ],
        role: { ar: "جدول الحقائق الأساسي للمؤشر", en: "Primary fact table for the metric" },
      },
      {
        table: "Project",
        grain: { ar: "مشروع واحد لكل صف", en: "One row per project" },
        columns: ["ProjectId", "ProjectName", "Programme", "ProjectManager", "Sponsor"],
        role: { ar: "التقسيم حسب المشروع والبرنامج (مصفوفة المشاريع)", en: "Slicing by project and programme (the project matrix)" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "QuarterKey"],
        role: { ar: "يُربط بـ MeasureDate لا بـ ActualDate", en: "Related to MeasureDate rather than ActualDate" },
      },
    ],
    visuals: [
      {
        pattern: "exception-table",
        why: {
          ar: "قائمة المعالم المتأخرة أو المعرضة للتأخر مع أيام التأخر والمسؤول هي النسخة القابلة للتنفيذ من الخط الزمني للمعالم.",
          en: "A list of late or at-risk milestones with days late and owner is the actionable form of the milestone timeline.",
        },
      },
      {
        pattern: "stacked-bar",
        why: {
          ar: "أعمدة لكل مشروع مقسمة إلى «في الموعد» و«متأخر» و«لم يُنجز» تجمع النسبة والحجم في مصفوفة المشاريع.",
          en: "Bars per project split into on time, late and not done combine the rate and the volume in the project matrix.",
        },
      },
      {
        pattern: "kpi-card",
        why: {
          ar: "بطاقة النسبة مع العدد «18 من 20» في العنوان الفرعي تمنع قراءة النسبة بدون حجم العينة.",
          en: "A rate card with the count '18 of 20' as a subtitle prevents reading the rate without the sample size.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عدم تعريف مجتمع المعالم المؤهلة. إدخال معالم إدارية ثانوية مع معالم التسليم الكبرى يرفع النسبة دون أن يعكس موثوقية الوعد الحقيقي. وثّق قاعدة الأهلية.",
        en: "Not defining the eligible milestone population. Mixing minor administrative milestones with major delivery milestones raises the rate without reflecting real promise reliability. Document the eligibility rule.",
      },
      {
        ar: "المقارنة بخط أساس معدّل. إذا كان تغيير تاريخ المعلم مسموحًا يصبح كل معلم في موعده. احتفظ بخط الأساس الأصلي للمقارنة ذات المعنى واعرض الموعد المعدل منفصلًا.",
        en: "Comparing against a revised baseline. If milestone dates can be changed, every milestone becomes on time. Retain the original baseline for meaningful comparisons and show the revised date separately.",
      },
      {
        ar: "حذف المعالم المتأخرة غير المكتملة من المقام. هي أوضح حالات الفشل، واستبعادها حتى تكتمل يجعل النسبة متفائلة زورًا.",
        en: "Dropping late, incomplete milestones from the denominator. They are the clearest failures, and leaving them out until they complete makes the rate falsely optimistic.",
      },
      {
        ar: "مقارنة تاريخ فارغ بدون فحص صريح. في DAX يُعامل التاريخ الفارغ كأقدم من أي تاريخ، فالشرط ActualDate <= BaselineDate يصبح صحيحًا لمعلم لم يُنجز أصلًا.",
        en: "Comparing a blank date without an explicit test. In DAX a blank date is treated as earlier than any date, so ActualDate <= BaselineDate becomes true for a milestone that was never completed.",
      },
      {
        ar: "حساب نسبة المحفظة بمتوسط نسب المشاريع. مشروع بمعلمين يزن مثل مشروع بأربعين. اجمع البسط والمقام أولًا.",
        en: "Computing the portfolio rate as the average of project rates. A project with two milestones weighs as much as one with forty. Sum numerator and denominator first.",
      },
    ],
    variants: [
      {
        label: { ar: "مع نافذة سماح", en: "With a tolerance window" },
        formula: "Milestones completed on or before Baseline Date + N days / Eligible milestones due or completed",
        difference: {
          ar: "يقبل تأخرًا محدودًا متفقًا عليه. النافذة قرار حوكمة يجب توثيقه ويفضّل أن تكون عمودًا حسب نوع المعلم لا رقمًا ثابتًا في المقياس.",
          en: "Accepts a limited agreed delay. The window is a governance decision that must be documented, ideally as a column by milestone type rather than a constant in the measure.",
        },
      },
      {
        label: { ar: "مقابل خط الأساس الحالي", en: "Against the current baseline" },
        formula: "Milestones completed on or before Current Baseline Date / Eligible milestones due or completed",
        difference: {
          ar: "يقيس الالتزام بآخر خطة معتمدة لا بالوعد الأصلي. مفيد لإدارة التنفيذ اليومي، لكن الفجوة بينه وبين النسخة الأصلية هي نفسها مؤشر على كثرة إعادة الجدولة.",
          en: "Measures adherence to the latest approved plan rather than the original promise. Useful for day-to-day execution, but the gap between it and the original version is itself a signal of frequent rescheduling.",
        },
      },
      {
        label: { ar: "موزون بأهمية المعلم", en: "Weighted by milestone importance" },
        formula: "Sum of weights of on-time milestones / Sum of weights of eligible milestones",
        difference: {
          ar: "يعطي معالم التسليم الكبرى وزنًا أعلى من المعالم الإدارية، فلا يعوض نجاح معالم صغيرة كثيرة فشل معلم حاسم واحد.",
          en: "Gives major delivery milestones more weight than administrative ones, so success on many small milestones cannot offset failure on one critical milestone.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "نسبة الفترة الأطول (ربع أو سنة) تساوي مجموع المعالم في موعدها على مجموع المؤهلة، ولا تساوي متوسط نسب الأشهر إلا إذا تساوت أعداد المعالم في كل شهر.",
          en: "The rate for a longer period (quarter or year) equals total on-time milestones over total eligible ones, and equals the average of monthly rates only when every month has the same number of milestones.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "قياس الالتزام مقابل خط الأساس الأصلي المعتمد، لا الموعد المعاد جدولته، هو الممارسة الشائعة في تقارير أصحاب المصلحة.",
          en: "Measuring adherence against the original approved baseline, not the rescheduled date, is the common practice in stakeholder reporting.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "تعريف المعالم المؤهلة، ونافذة السماح، ومن يملك صلاحية تغيير خط الأساس، كلها قرارات حوكمة لكل مكتب إدارة مشاريع.",
          en: "The definition of eligible milestones, the tolerance window, and who may change the baseline are all governance decisions for each PMO.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (18 من 20 معلمًا) توضيحية وليست معيارًا.",
          en: "The example figures (18 of 20 milestones) are illustrative, not a benchmark.",
        },
      },
    ],
    related: ["spi", "schedule-variance", "sla-achievement-rate"],
    exercise: {
      prompt: {
        ar: "في الربع الثالث حُسم مصير 30 معلمًا، منها معلمان أُلغيا بقرار تغيير معتمد فهما غير مؤهلين. من المؤهلة، اكتمل 23 في تاريخ خط الأساس الأصلي أو قبله، و3 اكتملت بعده لكن في الموعد المعاد جدولته، والباقي لم يكتمل. احسب النسبة مقابل خط الأساس الأصلي ومقابل الموعد المعدل، وفسّر الفرق.",
        en: "In Q3 the outcome of 30 milestones was decided; two were cancelled by an approved change and are ineligible. Of the eligible ones, 23 completed on or before their original baseline date, 3 completed after it but on their rescheduled date, and the rest were not completed. Compute the rate against the original baseline and against the revised date, and explain the difference.",
      },
      hint: {
        ar: "المقام هو المعالم المؤهلة فقط، والمعالم غير المكتملة تبقى فيه.",
        en: "The denominator is eligible milestones only, and incomplete milestones stay in it.",
      },
      answer: {
        ar: "المؤهلة = 30 − 2 = 28. مقابل خط الأساس الأصلي: 23 ÷ 28 = 82.1%. مقابل الموعد المعدل: (23 + 3) ÷ 28 = 26 ÷ 28 = 92.9%. الفارق (نحو 11 نقطة) يأتي بالكامل من إعادة الجدولة، ولذلك تُعرض النسخة الأصلية لأصحاب المصلحة والمعدلة كمؤشر تشغيلي منفصل.",
        en: "Eligible = 30 − 2 = 28. Against the original baseline: 23 ÷ 28 = 82.1%. Against the revised date: (23 + 3) ÷ 28 = 26 ÷ 28 = 92.9%. The gap (about 11 points) comes entirely from rescheduling, which is why the original version is shown to stakeholders and the revised one as a separate operational metric.",
      },
    },
    references: [
      {
        title: "COUNTROWS function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/countrows-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع عدّ المعالم في البسط والمقام.",
          en: "Reference for counting milestones in the numerator and denominator.",
        },
      },
      {
        title: "CALCULATE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/calculate-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع تطبيق شروط الأهلية والإنجاز في الموعد على العدّ.",
          en: "Reference for applying the eligibility and on-time conditions to the count.",
        },
      },
    ],
  },
  {
    id: "eac",
    slug: "eac",
    name: "Estimate at Completion",
    acronym: "EAC",
    nameAr: "التكلفة المتوقعة عند الإكمال",
    domains: ["project-management", "finance"],
    category: { ar: "التنبؤ بالتكلفة", en: "Cost forecasting" },
    difficulty: "advanced",
    unit: { ar: "مبلغ بعملة المشروع", en: "Amount in project currency" },
    aggregation: "semi-additive",
    definition: {
      ar: "التقدير المتوقع للتكلفة الإجمالية للمشروع عند انتهائه، بناءً على الأداء حتى تاريخ الحالة وافتراض صريح عن الأداء في العمل المتبقي. في أشيع صوره يساوي الموازنة الكلية مقسومة على مؤشر أداء التكلفة.",
      en: "The expected total cost of the project at completion, based on performance to the status date and an explicit assumption about performance on the remaining work. In its most common form it equals the total budget divided by the cost performance index.",
    },
    whyItMatters: {
      ar: "الانحراف حتى الآن يقول ما حدث، وEAC يقول إلى أين يتجه المشروع. هو الرقم الذي يحتاجه الراعي والإدارة المالية لطلب تمويل إضافي أو تقليص النطاق أو إيقاف المشروع مبكرًا، قبل أن يصبح التجاوز أمرًا واقعًا.",
      en: "Variance to date says what happened; EAC says where the project is heading. It is the number the sponsor and finance need to request more funding, cut scope, or stop the project early, before the overrun becomes a fact.",
    },
    interpretation: {
      ar: "EAC = 555,556 مقابل موازنة 500,000 يعني أنه إذا استمرت الكفاءة الحالية فالمشروع سيتجاوز موازنته بنحو 55,556. EAC ليس رقمًا واحدًا صحيحًا: كل طريقة تفترض سيناريو مختلفًا للعمل المتبقي، والطريقة المختارة يجب أن تُذكر بجانب الرقم.",
      en: "EAC = 555,556 against a budget of 500,000 means that if current efficiency persists the project will overrun by about 55,556. EAC is not a single true number: each method assumes a different scenario for the remaining work, and the chosen method must be stated beside the figure.",
    },
    formula: "EAC = Budget at Completion (BAC) / CPI",
    numerator: {
      ar: "الموازنة عند الإكمال (BAC): إجمالي موازنة خط الأساس المعتمدة لكل العمل.",
      en: "Budget at completion (BAC): the total approved baseline budget for all the work.",
    },
    denominator: {
      ar: "مؤشر أداء التكلفة التراكمي (CPI = EV / AC) عند تاريخ الحالة. الصيغ الأخرى تستبدله بافتراضات مختلفة للعمل المتبقي.",
      en: "Cumulative cost performance index (CPI = EV / AC) at the status date. Other formulas replace it with different assumptions for the remaining work.",
    },
    timeGrain: {
      ar: "يُعاد تقديره عند كل تاريخ حالة (شهريًا عادة). اتجاه EAC عبر الأشهر أهم من قيمته في شهر واحد، وقيمة الربع هي آخر تقدير فيه لا مجموع التقديرات.",
      en: "Re-estimated at every status date (usually monthly). The EAC trend across months matters more than any single value, and a quarter's value is its last estimate, not the sum of estimates.",
    },
    direction: {
      rising: {
        ar: "ارتفاع EAC من شهر لآخر يعني أن التوقعات تتدهور، وهو إنذار مبكر بتجاوز الموازنة.",
        en: "EAC rising month over month means the forecast is deteriorating, an early warning of a budget overrun.",
      },
      falling: {
        ar: "انخفاضه يعني تحسن الكفاءة أو تقليص النطاق. تحقق أيهما قبل عدّه نجاحًا.",
        en: "A falling EAC means improved efficiency or reduced scope. Check which before counting it as success.",
      },
      caveat: {
        ar: "EAC منخفض في بداية المشروع قد يعكس فقط أن التكاليف لم تُسجَّل بعد أو أن EV مضخّمة. وفي المراحل المبكرة جدًا يتذبذب CPI بشدة فيتذبذب EAC معه، فلا يُبنى عليه قرار قبل تراكم أداء كافٍ.",
        en: "A low EAC early on may only reflect costs not yet booked or inflated EV. In the very early stages CPI swings sharply and EAC swings with it, so no decision should rest on it before enough performance has accumulated.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "الموازنة عند الإكمال (BAC)", en: "Budget at completion (BAC)" }, value: "500,000" },
        { label: { ar: "مؤشر أداء التكلفة التراكمي (CPI)", en: "Cumulative CPI" }, value: "0.90" },
      ],
      steps: [
        { label: { ar: "التكلفة المتوقعة عند الإكمال", en: "Estimate at completion" }, expression: "500,000 ÷ 0.90 = 555,556" },
        { label: { ar: "الانحراف عند الإكمال (VAC)", en: "Variance at completion (VAC)" }, expression: "500,000 − 555,556 = −55,556" },
      ],
      result: { label: { ar: "EAC بطريقة CPI", en: "EAC (CPI method)" }, value: "555,556" },
      reading: {
        ar: "إذا استمر المشروع ينتج 90 هللة من القيمة مقابل كل ريال، فسيكلف نحو 555,556 بدل 500,000. هذا الافتراض متشائم نسبيًا؛ إذا كان سبب التجاوز حدثًا لن يتكرر فطريقة AC + (BAC − EV) أنسب، ويجب توثيق الافتراض المختار.",
        en: "If the project keeps producing 90 cents of value per unit spent, it will cost about 555,556 instead of 500,000. This assumption is relatively pessimistic; if the overrun came from a one-off event, the AC + (BAC − EV) method fits better, and the chosen assumption must be documented.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "EAC بعدة طرق مع تجميع صحيح للمحفظة", en: "EAC by several methods with correct portfolio roll-up" },
        code: `-- Reuses [Earned Value] and [Actual Cost] (cut at [Status Date]) from the
-- SPI and cost-variance entries.
BAC :=
SUM ( 'Task'[BaselineBudget] )

CPI :=
DIVIDE ( [Earned Value], [Actual Cost] )

-- Method 1: current cost efficiency persists for the remaining work.
EAC CPI Method :=
DIVIDE ( [BAC], [CPI] )

-- Method 2: remaining work is delivered at budget rates (atypical overrun).
EAC Budget Rate :=
[Actual Cost] + [BAC] - [Earned Value]

-- Method 3: remaining work is affected by both cost and schedule performance.
EAC CPI x SPI :=
[Actual Cost]
    + DIVIDE ( [BAC] - [Earned Value], [CPI] * [SPI] )

-- EAC is semi-additive: sum it across projects, each at its own status date,
-- never across status dates, and never as portfolio BAC / portfolio CPI.
EAC Portfolio :=
SUMX (
    VALUES ( 'Project'[ProjectId] ),
    [EAC CPI Method]
)

VAC :=
[BAC] - [EAC Portfolio]`,
        assumptions: [
          {
            ar: "[Earned Value] و[SPI] من مدخل SPI و[Actual Cost] من مدخل انحراف التكلفة، وكلها مقطوعة عند [Status Date] نفسه. [CPI] هنا يطابق تعريف مدخل CPI مع قيمة مكتسبة واعية بتاريخ الحالة.",
            en: "[Earned Value] and [SPI] come from the SPI entry and [Actual Cost] from the cost-variance entry, all cut at the same [Status Date]. [CPI] here matches the CPI entry's definition, using status-date-aware earned value.",
          },
          {
            ar: "'Task'[BaselineBudget] هو خط الأساس المعتمد شاملًا طلبات التغيير الموافق عليها، ولا يتأثر بمرشح التاريخ لأن 'Date' لا يرشّح 'Task'. إذا كانت الموازنة تتغير عبر الزمن فاحفظها في جدول لقطات واقطعها عند تاريخ الحالة كذلك.",
            en: "'Task'[BaselineBudget] is the approved baseline including approved change requests, and it is not affected by the date filter because 'Date' does not filter 'Task'. If the budget changes over time, store it in a snapshot table and cut it at the status date as well.",
          },
          {
            ar: "SUMX على 'Project' يحسب EAC لكل مشروع بمؤشره الخاص ثم يجمع. قسمة BAC المحفظة على CPI المحفظة تعطي رقمًا مختلفًا لأنها تطبق كفاءة متوسطة على كل المشاريع.",
            en: "SUMX over 'Project' computes each project's EAC with its own index, then sums. Dividing portfolio BAC by portfolio CPI gives a different number because it applies an average efficiency to every project.",
          },
          {
            ar: "'Project' بُعد مرتبط بـ 'Task'[ProjectId]. مشروع بلا EV بعد يعطي CPI فارغًا فيعود EAC CPI Method فارغًا ويسقط من المجموع؛ اعرض عدد هذه المشاريع أو استخدم BAC بديلًا لها بقاعدة موثقة.",
            en: "'Project' is a dimension related to 'Task'[ProjectId]. A project with no EV yet has a blank CPI, so EAC CPI Method returns blank and drops out of the total; show how many such projects there are or substitute BAC for them under a documented rule.",
          },
        ],
        requires: ["[Earned Value]", "[Actual Cost]", "[SPI]", "Task[BaselineBudget]", "Task[ProjectId]", "Project[ProjectId]"],
      },
    ],
    model: [
      {
        table: "Project",
        grain: { ar: "مشروع واحد لكل صف", en: "One row per project" },
        columns: ["ProjectId", "ProjectName", "Programme", "Sponsor", "EacMethod"],
        role: { ar: "مستوى حساب EAC قبل التجميع للمحفظة", en: "The level at which EAC is computed before rolling up to the portfolio" },
      },
      {
        table: "Task",
        grain: { ar: "مهمة واحدة في هيكل تجزئة العمل", en: "One task in the work breakdown structure" },
        columns: ["TaskId", "ProjectId", "WbsPath", "BaselineBudget"],
        role: { ar: "مصدر BAC", en: "Source of BAC" },
      },
      {
        table: "TaskStatus",
        grain: { ar: "مهمة واحدة لكل تاريخ حالة (لقطة)", en: "One task per status date (snapshot)" },
        columns: ["TaskId", "StatusDate", "PercentComplete"],
        role: { ar: "مصدر القيمة المكتسبة", en: "Source of earned value" },
      },
      {
        table: "ProjectCost",
        grain: { ar: "بند تكلفة واحد لكل مهمة وتاريخ", en: "One cost line per task and date" },
        columns: ["TaskId", "CostDate", "ActualAmount", "CommitmentAmount"],
        role: { ar: "مصدر التكلفة الفعلية", en: "Source of actual cost" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "ReportingPeriod"],
        role: { ar: "يحدد تاريخ الحالة الذي يُحسب عنده التنبؤ", en: "Sets the status date at which the forecast is computed" },
      },
    ],
    visuals: [
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "بطاقة EAC مقابل BAC مع VAC والطريقة المستخدمة تجمع التنبؤ والموازنة وافتراض الحساب في نظرة واحدة.",
          en: "An EAC-versus-BAC card with VAC and the method used puts the forecast, the budget, and the calculation assumption in one view.",
        },
      },
      {
        pattern: "actual-vs-target",
        why: {
          ar: "خط EAC عبر تواريخ الحالة مقابل خط BAC الثابت يُظهر متى بدأ التنبؤ ينحرف وهل يتقارب أم يتباعد.",
          en: "An EAC line across status dates against a flat BAC line shows when the forecast began to drift and whether it is converging or diverging.",
        },
      },
      {
        pattern: "waterfall-variance",
        why: {
          ar: "جسر من BAC إلى EAC حسب المشروع أو حزمة العمل يحدد من أين يأتي التجاوز المتوقع.",
          en: "A bridge from BAC to EAC by project or work package identifies where the forecast overrun comes from.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عرض EAC دون ذكر طريقته. هناك عدة طرق صحيحة حسب توقع الأداء المستقبلي، وقد يختلف الرقم بينها بمئات الآلاف. وثّق الافتراض المختار واعرضه بجانب الرقم.",
        en: "Showing EAC without its method. There are several valid methods depending on expected future performance, and the figure may differ between them by hundreds of thousands. Document the chosen assumption and show it beside the number.",
      },
      {
        ar: "حساب EAC المحفظة كـ BAC الإجمالي ÷ CPI الإجمالي. هذا يطبق كفاءة متوسطة على كل مشروع؛ احسب EAC لكل مشروع ثم اجمع.",
        en: "Computing portfolio EAC as total BAC ÷ total CPI. That applies an average efficiency to every project; compute EAC per project, then sum.",
      },
      {
        ar: "الاعتماد على EAC في الأسابيع الأولى. CPI المبني على إنجاز قليل متذبذب جدًا، وقسمة BAC عليه تضخّم كل تذبذب إلى رقم تنبؤ كبير.",
        en: "Relying on EAC in the first weeks. A CPI built on little progress is very volatile, and dividing BAC by it magnifies every swing into a large forecast figure.",
      },
      {
        ar: "استخدام BAC محدّث لا يتضمن طلبات التغيير الموافق عليها، أو يتضمن طلبات غير معتمدة. BAC يجب أن يطابق خط الأساس المعتمد في تاريخ الحالة.",
        en: "Using a BAC that omits approved change requests or includes unapproved ones. BAC must match the approved baseline at the status date.",
      },
      {
        ar: "جمع تقديرات EAC الشهرية أو توسيطها. كل تقدير يستبدل ما قبله؛ قيمة الفترة هي آخر تقدير فيها.",
        en: "Summing or averaging monthly EAC estimates. Each estimate replaces the previous one; a period's value is its last estimate.",
      },
    ],
    variants: [
      {
        label: { ar: "بأسعار الموازنة للعمل المتبقي", en: "Remaining work at budget rates" },
        formula: "EAC = AC + (BAC - EV)",
        difference: {
          ar: "يفترض أن التجاوز حتى الآن استثنائي وأن العمل المتبقي سيُنجز بتكلفة الخطة. أكثر تفاؤلًا، ومناسب فقط عندما يكون سبب التجاوز معروفًا ولن يتكرر.",
          en: "Assumes the overrun so far was exceptional and the remaining work will be done at planned cost. More optimistic, and appropriate only when the overrun's cause is known and will not recur.",
        },
      },
      {
        label: { ar: "بأثر التكلفة والجدول معًا", en: "Cost and schedule combined" },
        formula: "EAC = AC + (BAC - EV) / (CPI x SPI)",
        difference: {
          ar: "يفترض أن التأخر في الجدول سيضغط على التكلفة أيضًا (عمل إضافي، تسريع). يعطي عادة الرقم الأعلى عندما يكون المؤشران أقل من 1.",
          en: "Assumes schedule slippage will also press on cost (overtime, crashing). It usually gives the highest figure when both indices are below 1.",
        },
      },
      {
        label: { ar: "تقدير من القاعدة للعمل المتبقي", en: "Bottom-up estimate to complete" },
        formula: "EAC = AC + bottom-up ETC",
        difference: {
          ar: "يعيد الفريق تقدير العمل المتبقي بندًا بندًا بدل الاشتقاق من المؤشرات. أدق عندما تغير النطاق أو الظروف جوهريًا، لكنه أبطأ ومعرض للتفاؤل.",
          en: "The team re-estimates the remaining work item by item instead of deriving it from indices. More accurate when scope or conditions changed materially, but slower and prone to optimism.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "EAC = BAC ÷ CPI يساوي BAC × AC ÷ EV، ولذلك يتجاوز BAC إذا وفقط إذا كان CPI أقل من 1.",
          en: "EAC = BAC ÷ CPI equals BAC × AC ÷ EV, so it exceeds BAC if and only if CPI is below 1.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "الطرق الأربع (BAC/CPI، وAC + BAC − EV، وصيغة CPI × SPI، والتقدير من القاعدة) هي الصيغ الشائعة في منهجية القيمة المكتسبة، ولا توجد طريقة واحدة صحيحة لكل الحالات.",
          en: "The four methods (BAC/CPI, AC + BAC − EV, the CPI × SPI formula, and bottom-up) are the common forms in earned value management, and no single method is right for every case.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "الطريقة المعتمدة لكل مشروع، ومتى يُسمح بالتحول من طريقة لأخرى، وحدود VAC التي تستدعي طلب تمويل إضافي، قرارات حوكمة لكل مؤسسة.",
          en: "The approved method per project, when switching between methods is allowed, and the VAC limits that trigger a funding request are governance decisions for each organization.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (BAC = 500,000 وCPI = 0.90) توضيحية فقط، وتتسق مع مثال CV حيث EV = 90,000 وAC = 100,000.",
          en: "The example figures (BAC = 500,000 and CPI = 0.90) are illustrative only, and consistent with the CV example where EV = 90,000 and AC = 100,000.",
        },
      },
    ],
    related: ["cpi", "cost-variance", "spi"],
    exercise: {
      prompt: {
        ar: "مشروع BAC = 800,000. عند تاريخ الحالة: EV = 320,000 وAC = 400,000 وSPI = 0.80. احسب CPI ثم EAC بالطرق الثلاث: BAC/CPI، وAC + (BAC − EV)، وAC + (BAC − EV) / (CPI × SPI). ما VAC لطريقة CPI؟",
        en: "A project has BAC = 800,000. At the status date: EV = 320,000, AC = 400,000 and SPI = 0.80. Compute CPI, then EAC by three methods: BAC/CPI, AC + (BAC − EV), and AC + (BAC − EV) / (CPI × SPI). What is VAC for the CPI method?",
      },
      hint: {
        ar: "ابدأ بـ CPI = EV ÷ AC، ثم العمل المتبقي بقيمة الموازنة = BAC − EV.",
        en: "Start with CPI = EV ÷ AC, then remaining work at budget value = BAC − EV.",
      },
      answer: {
        ar: "CPI = 320,000 ÷ 400,000 = 0.80. العمل المتبقي = 800,000 − 320,000 = 480,000. الطريقة 1: 800,000 ÷ 0.80 = 1,000,000. الطريقة 2: 400,000 + 480,000 = 880,000. الطريقة 3: CPI × SPI = 0.64، و480,000 ÷ 0.64 = 750,000، فـ EAC = 400,000 + 750,000 = 1,150,000. VAC = 800,000 − 1,000,000 = −200,000. الفارق بين 880,000 و1,150,000 يوضح لماذا يجب توثيق الطريقة.",
        en: "CPI = 320,000 ÷ 400,000 = 0.80. Remaining work = 800,000 − 320,000 = 480,000. Method 1: 800,000 ÷ 0.80 = 1,000,000. Method 2: 400,000 + 480,000 = 880,000. Method 3: CPI × SPI = 0.64, and 480,000 ÷ 0.64 = 750,000, so EAC = 400,000 + 750,000 = 1,150,000. VAC = 800,000 − 1,000,000 = −200,000. The spread between 880,000 and 1,150,000 shows why the method must be documented.",
      },
    },
    references: [
      {
        title: "SUMX function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/sumx-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع حساب EAC لكل مشروع ثم جمعه للمحفظة بدل قسمة المجاميع.",
          en: "Reference for computing EAC per project and summing it for the portfolio instead of dividing totals.",
        },
      },
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "قسمة آمنة تعيد قيمة فارغة عندما يكون CPI فارغًا لمشروع لم يبدأ.",
          en: "Safe division that returns blank when CPI is blank for a project that has not started.",
        },
      },
    ],
  },
];
