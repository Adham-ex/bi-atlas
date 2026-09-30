import type { Kpi } from "../types";

export const peopleCommerceKpis: Kpi[] = [
  {
    id: "employee-turnover-rate",
    slug: "employee-turnover-rate",
    name: "Employee Turnover Rate",
    nameAr: "معدل دوران الموظفين",
    domains: ["hr", "customer-service", "fnb"],
    category: { ar: "الاحتفاظ بالموظفين", en: "Workforce retention" },
    difficulty: "intermediate",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة الموظفين الذين غادروا المؤسسة خلال فترة محددة إلى متوسط عدد الموظفين في نفس الفترة. يقيس سرعة تبدّل القوى العاملة.",
      en: "The share of employees who left the organization in a period relative to average headcount over the same period. It measures how fast the workforce turns over.",
    },
    whyItMatters: {
      ar: "لكل مغادرة تكلفة مباشرة (توظيف وتدريب) وغير مباشرة (فقد معرفة وانخفاض إنتاجية الفريق). كما أن الدوران مؤشر مبكر على مشكلات في الإدارة أو التعويض قبل أن تظهر في أي مقياس آخر.",
      en: "Every exit carries a direct cost (hiring and training) and an indirect one (lost knowledge and reduced team productivity). Turnover is also an early signal of management or compensation problems before they surface anywhere else.",
    },
    interpretation: {
      ar: "معدل 18% سنويًا يعني أن ما يقارب موظفًا من كل خمسة غادر. لكن الرقم المجمّع يخفي كل شيء مفيد: دوران المستجدين في أول 90 يومًا مشكلة توظيف واستقبال، ودوران الخبرات بعد خمس سنوات مشكلة مسار وظيفي — والعلاجان مختلفان تمامًا.",
      en: "An 18% annual rate means roughly one in five employees left. But the aggregate hides everything useful: churn among new joiners in the first 90 days is a hiring and onboarding problem, while losing five-year veterans is a career-path problem — and the remedies are completely different.",
    },
    formula: "Turnover Rate % = Separations in Period / Average Headcount in Period x 100",
    numerator: {
      ar: "عدد المغادرين خلال الفترة. يجب فصل الطوعي عن غير الطوعي لأن تفسيرهما الإداري متعاكس تمامًا.",
      en: "Separations during the period. Voluntary and involuntary exits must be separated because their management meaning is opposite.",
    },
    denominator: {
      ar: "متوسط عدد الموظفين خلال الفترة، ويُحسب عادة كمتوسط أرصدة نهاية كل شهر. استخدام رقم نهاية الفترة في مؤسسة تنمو يضخّم النسبة، وفي مؤسسة تتقلص يخفضها.",
      en: "Average headcount over the period, normally the mean of month-end balances. Using a period-end figure inflates the rate in a growing organization and deflates it in a shrinking one.",
    },
    timeGrain: {
      ar: "يُحسب سنويًا عادة. الحساب الشهري يعطي رقمًا صغيرًا يجب تطبيعه إلى معدل سنوي بالضرب في 12، وعندها يجب تسميته صراحة «معدل سنوي مطبّع» لأنه تقدير لا حقيقة.",
      en: "Usually computed annually. A monthly figure is small and must be annualised by multiplying by 12, at which point it should be labelled explicitly as an annualised rate because it is a projection, not a fact.",
    },
    direction: {
      rising: {
        ar: "ارتفاع الدوران يشير عادة إلى ضغط في سوق العمل أو مشكلة إدارية أو تعويض غير تنافسي. حدد أي شريحة تتحرك قبل أي تفسير.",
        en: "Rising turnover usually signals labour market pressure, a management issue, or uncompetitive pay. Identify which segment is moving before offering any explanation.",
      },
      falling: {
        ar: "انخفاضه قد يعني استقرارًا، وقد يعني ركودًا في سوق العمل يبقي غير الراضين في أماكنهم — وهو وضع مؤقت ينفجر لاحقًا.",
        en: "A decline can mean stability, or a stagnant job market keeping dissatisfied people in place — a temporary state that unwinds later.",
      },
      caveat: {
        ar: "الصفر ليس هدفًا. بعض الدوران صحي: خروج أداء ضعيف، وتجديد المهارات، وفتح مسار للترقية. الدوران غير المرغوب هو ما يجب قياسه، لا الدوران الكلي.",
        en: "Zero is not the goal. Some turnover is healthy: low performers leaving, skills refreshing, and promotion paths opening. What should be measured is regretted turnover, not total turnover.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "مغادرون خلال السنة", en: "Separations during the year" }, value: "46" },
        { label: { ar: "عدد الموظفين في بداية السنة", en: "Headcount at start of year" }, value: "210" },
        { label: { ar: "عدد الموظفين في نهاية السنة", en: "Headcount at end of year" }, value: "290" },
        { label: { ar: "متوسط أرصدة نهاية الأشهر", en: "Mean of month-end balances" }, value: "244" },
      ],
      steps: [
        { label: { ar: "بالمتوسط الشهري الصحيح", en: "Using the correct monthly average" }, expression: "46 / 244 = 18.9%" },
        { label: { ar: "باستخدام رقم نهاية السنة", en: "Using the year-end figure" }, expression: "46 / 290 = 15.9%" },
        { label: { ar: "باستخدام رقم بداية السنة", en: "Using the year-start figure" }, expression: "46 / 210 = 21.9%" },
      ],
      result: { label: { ar: "معدل الدوران السنوي", en: "Annual turnover rate" }, value: "18.9%" },
      reading: {
        ar: "نفس البيانات تعطي ثلاثة أرقام بين 15.9% و21.9% حسب المقام وحده. في مؤسسة نمت 38% خلال السنة، اختيار المقام ليس تفصيلًا فنيًا بل هو التقرير نفسه.",
        en: "The same data yields three figures between 15.9% and 21.9% based on the denominator alone. In an organization that grew 38% in a year, the choice of denominator is not a technical detail — it is the report.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "معدل الدوران مع فصل الطوعي والمتوسط الشهري", en: "Turnover rate with voluntary split and monthly averaging" },
        code: `Separations :=
CALCULATE (
    COUNTROWS ( 'EmploymentEvent' ),
    'EmploymentEvent'[EventType] = "Separation"
)

Voluntary Separations :=
CALCULATE (
    [Separations],
    'EmploymentEvent'[IsVoluntary] = TRUE ()
)

-- Headcount is a snapshot: never SUM it across dates.
Headcount :=
CALCULATE (
    DISTINCTCOUNT ( 'EmployeeSnapshot'[EmployeeId] ),
    LASTDATE ( 'Date'[Date] )
)

-- The correct denominator: average of month-end balances, not one
-- point-in-time figure, which distorts badly in a growing organisation.
Average Headcount :=
AVERAGEX (
    VALUES ( 'Date'[MonthKey] ),
    CALCULATE ( [Headcount] )
)

Turnover Rate % :=
DIVIDE ( [Separations], [Average Headcount] )

Voluntary Turnover Rate % :=
DIVIDE ( [Voluntary Separations], [Average Headcount] )

-- Early attrition isolates an onboarding problem from a career-path one.
Early Attrition % :=
VAR EarlyLeavers =
    CALCULATE (
        [Separations],
        'EmploymentEvent'[TenureDaysAtExit] <= 90
    )
RETURN
    DIVIDE ( EarlyLeavers, [Separations] )`,
        assumptions: [
          {
            ar: "'EmployeeSnapshot' يحمل صفًا لكل موظف نشط في نهاية كل شهر. إن كان لديك جدول موظفين متغير بطيئًا (SCD Type 2) فاشتق اللقطة منه بدل الاعتماد على الحالة الحالية.",
            en: "'EmployeeSnapshot' holds one row per active employee at each month end. If you have a slowly changing employee dimension (SCD Type 2), derive the snapshot from it rather than relying on current status.",
          },
          {
            ar: "'EmploymentEvent'[IsVoluntary] قيمة منطقية مصنفة عند المغادرة. تصنيف المغادرة قرار موارد بشرية وليس مشتقًا من البيانات.",
            en: "'EmploymentEvent'[IsVoluntary] is classified at exit. Classifying a separation is an HR judgement, not something derivable from the data.",
          },
          {
            ar: "النتيجة معدل للفترة المرشّحة وليست معدلًا سنويًا تلقائيًا. لتحويل نتيجة شهرية إلى سنوية اضرب في 12 وسمّها صراحة معدلًا مطبّعًا.",
            en: "The result is a rate for the filtered period, not automatically an annual one. To annualise a monthly result multiply by 12 and label it explicitly as annualised.",
          },
          {
            ar: "عتبة 90 يومًا للدوران المبكر شائعة لكنها اختيار داخلي؛ بعض المؤسسات تستخدم فترة التجربة الرسمية بدلًا منها.",
            en: "The 90-day early-attrition threshold is common but an internal choice; some organizations use the formal probation period instead.",
          },
        ],
        requires: ["EmploymentEvent[EventType]", "EmploymentEvent[IsVoluntary]", "EmployeeSnapshot[EmployeeId]"],
      },
      {
        language: "sql",
        label: { ar: "الدوران حسب القسم والمدة الوظيفية", en: "Turnover by department and tenure band" },
        code: `WITH monthly_headcount AS (
    SELECT
        s.department_id,
        DATE_TRUNC('month', s.snapshot_date) AS month_start,
        COUNT(DISTINCT s.employee_id)        AS headcount
    FROM employee_snapshot AS s
    WHERE s.snapshot_date >= DATE '2026-01-01'
      AND s.is_active = TRUE
    GROUP BY s.department_id, DATE_TRUNC('month', s.snapshot_date)
),
separations AS (
    SELECT
        e.department_id,
        CASE
            WHEN e.tenure_days_at_exit <= 90  THEN '0-90 days'
            WHEN e.tenure_days_at_exit <= 365 THEN '91-365 days'
            ELSE '1 year+'
        END                                  AS tenure_band,
        COUNT(*)                             AS leavers
    FROM employment_event AS e
    WHERE e.event_type = 'Separation'
      AND e.event_date >= DATE '2026-01-01'
    GROUP BY e.department_id, 2
)
SELECT
    sep.department_id,
    sep.tenure_band,
    sep.leavers,
    AVG(mh.headcount)                                AS avg_headcount,
    sep.leavers / NULLIF(AVG(mh.headcount), 0)       AS turnover_rate
FROM separations AS sep
JOIN monthly_headcount AS mh
    ON mh.department_id = sep.department_id
GROUP BY sep.department_id, sep.tenure_band, sep.leavers
ORDER BY turnover_rate DESC;`,
        assumptions: [
          {
            ar: "حدود شرائح المدة الوظيفية اختيار تحريري؛ اضبطها على دورة الاستقطاب الفعلية لديك.",
            en: "The tenure band boundaries are an editorial choice; align them to your actual hiring cycle.",
          },
        ],
      },
    ],
    model: [
      {
        table: "EmploymentEvent",
        grain: { ar: "حدث توظيفي واحد لكل موظف", en: "One employment event per employee" },
        columns: ["EventId", "EmployeeId", "EventType", "EventDate", "IsVoluntary", "ReasonCode", "TenureDaysAtExit"],
        role: { ar: "مصدر البسط", en: "Source of the numerator" },
      },
      {
        table: "EmployeeSnapshot",
        grain: { ar: "موظف نشط × نهاية شهر", en: "Active employee x month end" },
        columns: ["SnapshotDate", "EmployeeId", "DepartmentId", "GradeId", "IsActive"],
        role: { ar: "مصدر المقام (متوسط عدد الموظفين)", en: "Source of the denominator (average headcount)" },
      },
      {
        table: "Department",
        grain: { ar: "قسم واحد لكل صف", en: "One row per department" },
        columns: ["DepartmentId", "DepartmentName", "DivisionName", "ManagerId"],
        role: { ar: "البعد الذي يجعل الرقم قابلًا للتصرف", en: "The dimension that makes the number actionable" },
      },
    ],
    visuals: [
      {
        pattern: "stacked-bar",
        why: {
          ar: "فصل الطوعي عن غير الطوعي في نفس العمود يمنع قراءة الإجمالي كإشارة واحدة.",
          en: "Splitting voluntary from involuntary within the same bar stops the total being read as a single signal.",
        },
      },
      {
        pattern: "pl-matrix",
        why: {
          ar: "مصفوفة القسم × شريحة المدة الوظيفية هي أسرع طريقة لتحديد أين تتركز المشكلة فعلًا.",
          en: "A department-by-tenure-band matrix is the fastest way to locate where the problem actually sits.",
        },
      },
      {
        pattern: "period-over-period",
        why: {
          ar: "الدوران مؤشر بطيء، والمقارنة السنوية أصدق من الشهرية التي يغلب عليها الضجيج.",
          en: "Turnover moves slowly, and a year-over-year comparison is more honest than a noisy monthly one.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "استخدام عدد الموظفين في نهاية الفترة كمقام في مؤسسة تنمو. هذا يخفض النسبة بشكل منهجي ويخفي مشكلة حقيقية.",
        en: "Using period-end headcount as the denominator in a growing organization. This systematically lowers the rate and hides a real problem.",
      },
      {
        ar: "دمج الطوعي مع غير الطوعي في رقم واحد. فصل ضعاف الأداء وخسارة الكفاءات إشارتان متعاكستان لا يجوز جمعهما.",
        en: "Merging voluntary and involuntary into one number. Exiting low performers and losing top talent are opposite signals that must not be summed.",
      },
      {
        ar: "احتساب التحويلات الداخلية بين الأقسام كمغادرة. الموظف لم يترك المؤسسة، والقسم المستقبِل لا يظهر كتعيين مقابل.",
        en: "Counting internal transfers as separations. The employee did not leave, and the receiving department shows no offsetting hire.",
      },
      {
        ar: "مقارنة أقسام بأحجام مختلفة جدًا. في قسم من ستة أشخاص، مغادرة واحدة تعطي 16.7% وهو ضجيج إحصائي لا اتجاه.",
        en: "Comparing departments of wildly different sizes. In a six-person team one exit reads as 16.7%, which is statistical noise rather than a trend.",
      },
      {
        ar: "جمع المعدلات الشهرية للحصول على السنوي. النسب لا تُجمع؛ أعد الحساب من المغادرين السنويين ومتوسط الموظفين السنوي.",
        en: "Summing monthly rates to get an annual one. Ratios do not add; recompute from annual separations and annual average headcount.",
      },
    ],
    variants: [
      {
        label: { ar: "الدوران غير المرغوب", en: "Regretted turnover" },
        formula: "Regretted Separations / Average Headcount",
        difference: {
          ar: "يقتصر على المغادرين الذين كانت المؤسسة تود بقاءهم. أقرب إلى القرار الإداري لكنه يعتمد على تصنيف بشري قابل للتحيز، فوثّق معاييره.",
          en: "Counts only leavers the organization wanted to keep. Closer to the management decision but it depends on a human classification open to bias, so document its criteria.",
        },
      },
      {
        label: { ar: "معدل الاحتفاظ", en: "Retention rate" },
        formula: "Employees present at both start and end / Employees at start",
        difference: {
          ar: "ليس مكمّلًا حسابيًا للدوران. الاحتفاظ يتتبع مجموعة محددة منذ البداية، بينما الدوران يقيس المغادرين منسوبين إلى متوسط متحرك يشمل موظفين لم يكونوا موجودين في البداية.",
          en: "Not the arithmetic complement of turnover. Retention tracks a fixed group from the start, while turnover measures leavers against a moving average that includes people who were not there at the start.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "معدل الدوران يمكن أن يتجاوز 100% إذا كانت المغادرات أكثر من متوسط عدد الموظفين، وهو ما يحدث فعلًا في قطاعات موسمية عالية التبدّل.",
          en: "Turnover can exceed 100% when separations outnumber average headcount, which genuinely happens in high-churn seasonal sectors.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "استخدام متوسط عدد الموظفين في المقام، وفصل الطوعي عن غير الطوعي، ممارستان سائدتان في تحليلات الموارد البشرية.",
          en: "Using average headcount in the denominator and separating voluntary from involuntary are both prevailing practices in HR analytics.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "معاملة التحويلات الداخلية، وعقود المقاولين، والتقاعد، وانتهاء العقود محددة المدة، وتعريف المغادرة غير المرغوبة — كلها سياسات داخلية تغيّر النتيجة جوهريًا.",
          en: "The treatment of internal transfers, contractors, retirements, fixed-term contract endings, and the definition of regretted attrition are internal policies that materially change the result.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال من تأليفنا، واختيرت لتُظهر أثر اختيار المقام في مؤسسة نامية. لا نقدم أي رقم كمعدل دوران طبيعي لأنه يتبع القطاع والدور والسوق.",
          en: "The example figures are invented, chosen to show the effect of denominator choice in a growing organization. We offer no figure as a normal turnover rate because it follows sector, role, and market.",
        },
      },
    ],
    related: ["cac"],
    exercise: {
      prompt: {
        ar: "قسم بدأ السنة بـ 80 موظفًا وأنهاها بـ 120، ومتوسط أرصدته الشهرية 96. غادره 24 موظفًا، منهم 15 طوعًا و9 بقرار المؤسسة، و11 من الـ 24 غادروا خلال أول 90 يومًا. احسب معدل الدوران الكلي والطوعي ونسبة الدوران المبكر، ثم اقترح الإجراء الأولى.",
        en: "A department started the year with 80 employees and ended with 120, with a monthly average of 96. It lost 24 people: 15 voluntary and 9 company-initiated, and 11 of the 24 left within the first 90 days. Compute total and voluntary turnover and the early-attrition share, then propose the first action.",
      },
      hint: {
        ar: "استخدم المتوسط الشهري كمقام دائمًا، ولاحظ أن نسبة الدوران المبكر تُحسب من المغادرين لا من الموظفين.",
        en: "Always use the monthly average as the denominator, and note that early attrition share is computed against leavers, not headcount.",
      },
      answer: {
        ar: "الدوران الكلي = 24 ÷ 96 = 25.0%. الطوعي = 15 ÷ 96 = 15.6%. نسبة الدوران المبكر = 11 ÷ 24 = 45.8%. الإشارة الأهم ليست الـ 25% بل أن قرابة نصف المغادرين خرجوا خلال 90 يومًا: هذه مشكلة توظيف واستقبال لا مشكلة احتفاظ. الإجراء الأول هو مراجعة دقة وصف الوظيفة وعملية الاختيار وبرنامج الأيام الأولى، لا مراجعة سلّم الرواتب. لاحظ أيضًا أن استخدام رقم نهاية السنة (120) كان سيعطي 20% ويخفي حدة المشكلة.",
        en: "Total turnover = 24 ÷ 96 = 25.0%. Voluntary = 15 ÷ 96 = 15.6%. Early attrition share = 11 ÷ 24 = 45.8%. The important signal is not the 25% but that nearly half the leavers went within 90 days: that is a hiring and onboarding problem, not a retention one. The first action is reviewing job description accuracy, selection, and the first-days programme — not the pay scale. Note also that using the year-end figure (120) would have given 20% and masked the severity.",
      },
    },
    references: [
      {
        title: "AVERAGEX function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/averagex-function-dax",
        accessed: "2026-09-29",
        note: {
          ar: "مرجع حساب متوسط الأرصدة الشهرية، وهو المقام الصحيح لهذا المؤشر.",
          en: "Reference for averaging month-end balances, the correct denominator for this metric.",
        },
      },
    ],
  },

  {
    id: "aov",
    slug: "average-order-value",
    name: "Average Order Value",
    acronym: "AOV",
    nameAr: "متوسط قيمة الطلب",
    domains: ["retail", "fnb", "marketing"],
    category: { ar: "سلوك الشراء", en: "Purchase behaviour" },
    difficulty: "beginner",
    unit: { ar: "عملة لكل طلب", en: "Currency per order" },
    aggregation: "ratio",
    definition: {
      ar: "متوسط قيمة الطلب الواحد خلال فترة محددة: إجمالي الإيراد مقسومًا على عدد الطلبات. هو أحد المحركات الثلاثة للإيراد إلى جانب عدد الزيارات ومعدل التحويل.",
      en: "The average value of a single order in a period: revenue divided by order count. It is one of the three revenue drivers alongside traffic and conversion rate.",
    },
    whyItMatters: {
      ar: "رفع AOV هو أرخص طرق زيادة الإيراد لأنه لا يتطلب اكتساب عملاء جدد. زيادة 10% في AOV تنتقل مباشرة إلى الإيراد دون أي تكلفة اكتساب إضافية، بخلاف زيادة 10% في عدد الطلبات.",
      en: "Raising AOV is the cheapest way to grow revenue because it needs no new customers. A 10% lift in AOV flows straight to revenue with no extra acquisition cost, unlike a 10% lift in order count.",
    },
    interpretation: {
      ar: "AOV ناتج عاملين: عدد القطع في الطلب وسعر القطعة. ارتفاعه قد يعني سلة أكبر أو منتجات أغلى، والعلاجان مختلفان: الأول يُعالج بالتجميع والبيع المتقاطع، والثاني بالترقية إلى فئات أعلى.",
      en: "AOV is the product of two factors: items per order and price per item. A rise can mean a bigger basket or pricier products, and the levers differ: bundling and cross-sell for the first, upgrading to higher tiers for the second.",
    },
    formula: "AOV = Total Revenue / Number of Orders",
    numerator: {
      ar: "إجمالي الإيراد خلال الفترة. قرّر صراحة هل يشمل الشحن والضريبة، لأن هذا يغيّر الرقم ويمنع المقارنة مع مصادر أخرى.",
      en: "Total revenue in the period. Decide explicitly whether it includes shipping and tax, because this changes the number and breaks comparison with other sources.",
    },
    denominator: {
      ar: "عدد الطلبات المكتملة، لا عدد الأسطر ولا عدد العملاء. الطلب المكوّن من خمسة أصناف هو طلب واحد.",
      en: "Count of completed orders, not lines and not customers. An order with five items is one order.",
    },
    timeGrain: {
      ar: "يومي أو أسبوعي أو شهري. AOV حساس جدًا للموسمية والحملات، فالمقارنة يجب أن تكون مع نفس الفترة من العام السابق لا مع الشهر السابق.",
      en: "Daily, weekly, or monthly. AOV is highly sensitive to seasonality and promotions, so compare against the same period last year rather than the previous month.",
    },
    direction: {
      rising: {
        ar: "ارتفاع AOV إيجابي عادة، لكن تحقق من سببه: قد يكون ناتجًا عن انخفاض الطلبات الصغيرة لا عن زيادة قيمة الطلب.",
        en: "A rising AOV is usually positive, but check the cause: it may come from losing small orders rather than from orders getting larger.",
      },
      falling: {
        ar: "انخفاضه قد يعني خصومات أعمق أو تحولًا نحو منتجات أرخص أو دخول شريحة عملاء جديدة أقل إنفاقًا.",
        en: "A decline can mean deeper discounting, a shift to cheaper products, or a new, lower-spending customer segment.",
      },
      caveat: {
        ar: "الأعلى ليس دائمًا أفضل. رفع AOV بفرض حد أدنى للشحن المجاني قد يرفع المتوسط ويقلل عدد الطلبات وإجمالي الإيراد معًا. القرار يُقاس بالإيراد الكلي لا بالمتوسط.",
        en: "Higher is not always better. Lifting AOV with a free-shipping minimum can raise the average while cutting order count and total revenue together. The decision is judged on total revenue, not the average.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "إجمالي الإيراد في الشهر", en: "Revenue in the month" }, value: "1,840,000" },
        { label: { ar: "عدد الطلبات", en: "Order count" }, value: "8,000" },
        { label: { ar: "إجمالي القطع المباعة", en: "Total items sold" }, value: "20,800" },
      ],
      steps: [
        { label: { ar: "AOV", en: "AOV" }, expression: "1,840,000 / 8,000 = 230" },
        { label: { ar: "القطع لكل طلب", en: "Items per order" }, expression: "20,800 / 8,000 = 2.6" },
        { label: { ar: "متوسط سعر القطعة", en: "Average item price" }, expression: "230 / 2.6 = 88.5" },
      ],
      result: { label: { ar: "متوسط قيمة الطلب", en: "Average order value" }, value: "230" },
      reading: {
        ar: "تفكيك AOV إلى 2.6 قطعة بسعر 88.5 يحوّل رقمًا واحدًا إلى رافعتين قابلتين للتحريك. لو ارتفع AOV الشهر القادم إلى 245، فمعرفة أي العاملين تحرك تحدد ما إذا كان النجاح من البيع المتقاطع أم من ارتفاع الأسعار.",
        en: "Decomposing AOV into 2.6 items at 88.5 turns one number into two movable levers. If AOV rises to 245 next month, knowing which factor moved tells you whether the win came from cross-sell or from higher prices.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "AOV مع تفكيكه إلى عامليه", en: "AOV with its two-factor decomposition" },
        code: `Revenue :=
SUM ( 'SalesLine'[NetAmount] )

-- DISTINCTCOUNT over the order key: a five-line order must count once.
Order Count :=
DISTINCTCOUNT ( 'SalesLine'[OrderId] )

AOV :=
DIVIDE ( [Revenue], [Order Count] )

Items per Order :=
DIVIDE ( SUM ( 'SalesLine'[Quantity] ), [Order Count] )

Average Item Price :=
DIVIDE ( [Revenue], SUM ( 'SalesLine'[Quantity] ) )

-- Returns are negative rows in the same table, so they reduce revenue but
-- must not create phantom orders. Excluding them changes the meaning:
-- this variant answers "what did customers keep?" rather than "what did they buy?".
AOV (net of returns) :=
VAR NetRevenue =
    CALCULATE ( [Revenue], 'SalesLine'[LineType] IN { "Sale", "Return" } )
VAR SaleOrders =
    CALCULATE ( [Order Count], 'SalesLine'[LineType] = "Sale" )
RETURN
    DIVIDE ( NetRevenue, SaleOrders )`,
        assumptions: [
          {
            ar: "'SalesLine' بحبيبية سطر واحد لكل صنف في الطلب، و OrderId يتكرر عبر الأسطر — ولهذا يجب DISTINCTCOUNT لا COUNTROWS.",
            en: "'SalesLine' is at one row per item per order and OrderId repeats across rows, which is why DISTINCTCOUNT is required rather than COUNTROWS.",
          },
          {
            ar: "المرتجعات مسجلة كصفوف سالبة في نفس الجدول بقيمة LineType = \"Return\". إن كانت في جدول منفصل فالحساب يحتاج دمجًا صريحًا.",
            en: "Returns are recorded as negative rows in the same table with LineType = \"Return\". If they live in a separate table the calculation needs an explicit union.",
          },
          {
            ar: "الطلبات الملغاة يجب استبعادها من المقام. بقاؤها يخفض AOV بشكل مصطنع لأنها تزيد العدد بلا إيراد.",
            en: "Cancelled orders must be excluded from the denominator. Leaving them in artificially lowers AOV by adding count with no revenue.",
          },
          {
            ar: "الإيراد هنا لا يشمل الشحن والضريبة. إن كان تقريرك يقارن بمصدر يشملهما فستظهر فجوة دائمة يصعب تفسيرها لاحقًا.",
            en: "Revenue here excludes shipping and tax. If your report is compared against a source that includes them, a permanent unexplained gap will appear.",
          },
        ],
        requires: ["SalesLine[OrderId]", "SalesLine[NetAmount]", "SalesLine[Quantity]", "SalesLine[LineType]"],
      },
    ],
    model: [
      {
        table: "SalesLine",
        grain: { ar: "سطر واحد لكل صنف في كل طلب", en: "One row per item per order" },
        columns: ["OrderId", "LineId", "ProductId", "OrderDate", "Quantity", "NetAmount", "LineType"],
        role: { ar: "مصدر البسط والمقام", en: "Source of both numerator and denominator" },
      },
      {
        table: "Customer",
        grain: { ar: "عميل واحد لكل صف", en: "One row per customer" },
        columns: ["CustomerId", "Segment", "FirstOrderDate", "IsRepeat"],
        role: { ar: "يكشف فرق AOV بين العميل الجديد والمتكرر", en: "Reveals the AOV gap between new and repeat customers" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "WeekKey", "MonthKey", "IsPromotionDay"],
        role: { ar: "يتيح عزل أثر الحملات على المتوسط", en: "Allows isolating promotion effects on the average" },
      },
    ],
    visuals: [
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "AOV مع القطع لكل طلب ومتوسط سعر القطعة يعرض الرافعتين خلف الرقم في مكان واحد.",
          en: "AOV alongside items per order and average item price exposes both levers behind the number in one place.",
        },
      },
      {
        pattern: "period-over-period",
        why: {
          ar: "AOV موسمي بشدة، والمقارنة مع نفس الفترة من العام السابق هي الوحيدة التي تحمل معنى.",
          en: "AOV is strongly seasonal, and comparison to the same period last year is the only one that carries meaning.",
        },
      },
      {
        pattern: "waterfall-variance",
        why: {
          ar: "يفكك تغيّر الإيراد إلى أثر عدد الطلبات وأثر AOV، وهو التفكيك الذي يطلبه فريق التجارة دائمًا.",
          en: "Splits revenue movement into order-count and AOV effects — the decomposition the commercial team always asks for.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "استخدام COUNTROWS على جدول الأسطر بدل DISTINCTCOUNT على معرّف الطلب. هذا يقسم على عدد الأسطر فيعطي متوسط سعر السطر لا قيمة الطلب.",
        en: "Using COUNTROWS on the line table instead of DISTINCTCOUNT on the order key. That divides by line count and yields average line value, not order value.",
      },
      {
        ar: "خلط الطلبات الملغاة أو الفاشلة في السداد ضمن المقام، فينخفض المتوسط بلا سبب حقيقي.",
        en: "Including cancelled or payment-failed orders in the denominator, which lowers the average for no real reason.",
      },
      {
        ar: "عدم الاتساق في معالجة الشحن والضريبة بين التقارير، وهو السبب الأول لاختلاف AOV بين لوحة البيانات ونظام المتجر.",
        en: "Inconsistent treatment of shipping and tax across reports, the top cause of AOV disagreeing between the dashboard and the store platform.",
      },
      {
        ar: "قراءة AOV إجماليًا دون تقسيم بين العملاء الجدد والمتكررين. الفرق بينهما عادة كبير، والمتوسط المشترك يخفي تحوّلًا في المزيج.",
        en: "Reading AOV in aggregate without splitting new from repeat customers. The gap between them is usually large, and a blended average hides a mix shift.",
      },
      {
        ar: "استخدام المتوسط في توزيع فيه طلبات جملة قليلة وضخمة. الوسيط أو المئين الخمسون يصف السلوك النمطي بشكل أصدق.",
            en: "Using the mean on a distribution with a few huge wholesale orders. The median describes typical behaviour more honestly.",
      },
    ],
    variants: [
      {
        label: { ar: "متوسط الإنفاق لكل عميل", en: "Average revenue per customer" },
        formula: "Revenue / Distinct Customers",
        difference: {
          ar: "يقسم على العملاء لا الطلبات، فيدخل تكرار الشراء في المعادلة. مؤشر مختلف تمامًا: عميل يشتري ثلاث مرات صغيرة يظهر ضعيفًا في AOV وقويًا هنا.",
          en: "Divides by customers rather than orders, bringing purchase frequency into the equation. A different metric entirely: a customer making three small purchases looks weak on AOV and strong here.",
        },
      },
      {
        label: { ar: "متوسط الإنفاق لكل عميل مخدوم", en: "Average spend per cover" },
        formula: "Revenue / Number of Covers",
        difference: {
          ar: "شائع في المطاعم حيث يدفع شخص واحد عن طاولة كاملة. القسمة على الفواتير تعطي رقمًا مضللًا لتخطيط الطاقة الاستيعابية.",
          en: "Common in restaurants where one person pays for a whole table. Dividing by checks gives a misleading figure for capacity planning.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "الإيراد يساوي عدد الطلبات مضروبًا في AOV. هذه هوية تعريفية تُستخدم لتفكيك نمو الإيراد إلى عامليه.",
          en: "Revenue equals order count times AOV. This identity is used to decompose revenue growth into its two factors.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "القسمة على عدد الطلبات المكتملة، واستبعاد الملغاة، هما الممارسة السائدة في تقارير التجارة الإلكترونية.",
          en: "Dividing by completed orders and excluding cancellations is standard practice in e-commerce reporting.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "إدخال الشحن والضريبة، ومعاملة المرتجعات، وتعريف الطلب المكتمل — كلها قرارات داخلية يجب توثيقها في قاموس المؤشرات.",
          en: "Whether shipping and tax are included, how returns are treated, and what counts as a completed order are internal decisions that belong in the metric dictionary.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال من تأليفنا ولا تمثل متجرًا أو قطاعًا بعينه.",
          en: "The example figures are invented and represent no specific store or sector.",
        },
      },
    ],
    related: ["gross-profit-margin", "ltv", "roas"],
    exercise: {
      prompt: {
        ar: "متجر سجّل الشهر الماضي إيرادًا 900,000 من 5,000 طلب، وهذا الشهر 990,000 من 4,950 طلبًا. احسب AOV للشهرين ونسبة نمو الإيراد، ثم فكّك النمو إلى أثر عدد الطلبات وأثر AOV وعلّق على النتيجة.",
        en: "A store recorded 900,000 from 5,000 orders last month and 990,000 from 4,950 orders this month. Compute AOV for both and revenue growth, then split the growth into order-count and AOV effects and comment.",
      },
      hint: {
        ar: "الإيراد = عدد الطلبات × AOV. ابدأ بحساب AOV لكل شهر ثم لاحظ اتجاه كل عامل.",
        en: "Revenue = orders x AOV. Compute AOV for each month first, then note which way each factor moved.",
      },
      answer: {
        ar: "AOV الشهر الماضي = 900,000 ÷ 5,000 = 180. هذا الشهر = 990,000 ÷ 4,950 = 200. نمو الإيراد = 10.0%. عدد الطلبات انخفض 1.0% بينما ارتفع AOV 11.1%، فكل النمو جاء من قيمة الطلب رغم تراجع عدد الطلبات. هذا نمط يستحق التحقيق: قد يكون نجاحًا في البيع المتقاطع، وقد يكون فقدانًا للعملاء ذوي الطلبات الصغيرة — والاحتمالان يقودان لقرارين متعاكسين. تفكيك AOV إلى قطع لكل طلب وسعر القطعة هو الخطوة التالية للتمييز بينهما.",
        en: "Last month AOV = 900,000 ÷ 5,000 = 180. This month = 990,000 ÷ 4,950 = 200. Revenue growth = 10.0%. Order count fell 1.0% while AOV rose 11.1%, so all growth came from order value despite fewer orders. This pattern deserves investigation: it may be cross-sell success, or it may be losing small-order customers — and the two lead to opposite decisions. Decomposing AOV into items per order and price per item is the next step to tell them apart.",
      },
    },
    references: [
      {
        title: "DISTINCTCOUNT function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/distinctcount-function-dax",
        accessed: "2026-09-29",
        note: {
          ar: "مرجع العد الفريد لمعرّف الطلب، وهو الفارق بين AOV الصحيح ومتوسط قيمة السطر.",
          en: "Reference for distinct counting the order key — the difference between a correct AOV and an average line value.",
        },
      },
    ],
  },
];
