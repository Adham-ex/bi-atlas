import type { Challenge, LearningPath } from "./types";

/**
 * Practice Lab content.
 *
 * Grading is deterministic and entirely local — there is no DAX or SQL engine
 * behind this app. `choice` and `numeric` are auto-graded; `code` is
 * self-assessed against a reference answer and an explicit rubric, and the UI
 * says so rather than pretending to execute the submission.
 */
export const challenges: Challenge[] = [
  {
    id: "ch-turnover-denominator",
    slug: "inventory-turnover-denominator",
    title: { ar: "المقام الصحيح لدوران المخزون", en: "The right denominator for inventory turnover" },
    kind: "kpi-calculation",
    difficulty: "beginner",
    points: 10,
    domains: ["supply-chain"],
    kpis: ["inventory-turnover"],
    scenario: {
      ar: "تعمل محللًا في شركة توزيع مواد غذائية. طلب مدير سلسلة الإمداد معدل دوران المخزون للسنة المنتهية، وأرسل لك أرصدة نهاية كل ربع مع تكلفة البضاعة المباعة.",
      en: "You are an analyst at a food distribution company. The supply chain director asked for inventory turnover for the year just ended and sent you quarter-end balances along with cost of goods sold.",
    },
    requirements: [
      { ar: "استخدم متوسط المخزون لا رصيد نهاية السنة.", en: "Use average inventory rather than the year-end balance." },
      { ar: "استخدم تكلفة البضاعة المباعة في البسط لا الإيراد.", en: "Use cost of goods sold in the numerator, not revenue." },
      { ar: "قرّب الناتج إلى منزلة عشرية واحدة.", en: "Round the result to one decimal place." },
    ],
    dataset: {
      caption: { ar: "بيانات توضيحية للتمرين فقط", en: "Illustrative data, for this exercise only" },
      columns: [
        { key: "period", label: { ar: "الفترة", en: "Period" } },
        { key: "inventory", label: { ar: "رصيد المخزون بالتكلفة", en: "Inventory at cost" } },
        { key: "cogs", label: { ar: "تكلفة البضاعة المباعة", en: "COGS" } },
      ],
      rows: [
        { period: "Q1", inventory: 1200000, cogs: 2100000 },
        { period: "Q2", inventory: 1350000, cogs: 2400000 },
        { period: "Q3", inventory: 1500000, cogs: 2250000 },
        { period: "Q4", inventory: 1150000, cogs: 2850000 },
      ],
    },
    task: {
      ar: "احسب معدل دوران المخزون السنوي. أدخل الناتج كرقم بمنزلة عشرية واحدة.",
      en: "Compute annual inventory turnover. Enter the result as a number with one decimal place.",
    },
    grading: {
      mode: "numeric",
      answer: 7.1,
      tolerance: 0.15,
      unit: { ar: "مرة سنويًا", en: "turns per year" },
    },
    explanation: {
      ar: "إجمالي COGS = 2,100,000 + 2,400,000 + 2,250,000 + 2,850,000 = 9,600,000. متوسط المخزون = (1,200,000 + 1,350,000 + 1,500,000 + 1,150,000) ÷ 4 = 1,300,000. الدوران = 9,600,000 ÷ 1,300,000 = 7.4. لاحظ أن استخدام رصيد نهاية السنة (1,150,000) كان سيعطي 8.3، وهو مبالغ فيه لأن الشركة صفّت مخزونها في الربع الأخير. الفرق بين 7.4 و8.3 هو بالضبط أثر اختيار المقام.",
      en: "Total COGS = 2,100,000 + 2,400,000 + 2,250,000 + 2,850,000 = 9,600,000. Average inventory = (1,200,000 + 1,350,000 + 1,500,000 + 1,150,000) ÷ 4 = 1,300,000. Turnover = 9,600,000 ÷ 1,300,000 = 7.4. Note that using the year-end balance (1,150,000) would give 8.3, overstated because the company ran stock down in Q4. The gap between 7.4 and 8.3 is precisely the effect of the denominator choice.",
    },
    mistakes: [
      { ar: "استخدام رصيد الربع الأخير وحده كمقام.", en: "Using the Q4 balance alone as the denominator." },
      { ar: "قسمة متوسط COGS الربعي على متوسط المخزون، فينتج ربع الرقم الصحيح.", en: "Dividing average quarterly COGS by average inventory, producing a quarter of the right figure." },
    ],
    learnMore: [
      { label: { ar: "مؤشر دوران المخزون", en: "Inventory Turnover" }, href: "/kpis/inventory-turnover" },
      { label: { ar: "سلاسل الإمداد", en: "Supply Chain" }, href: "/domains/supply-chain" },
    ],
  },
  {
    id: "ch-otif-grain",
    slug: "otif-grain-mismatch",
    title: { ar: "لماذا يختلف OTIF عندك عن العميل؟", en: "Why does your OTIF differ from the customer?" },
    kind: "business-understanding",
    difficulty: "intermediate",
    points: 15,
    domains: ["supply-chain", "retail"],
    kpis: ["otif"],
    scenario: {
      ar: "تقريرك يُظهر التزامًا بنسبة 94% بينما عميل رئيسي يقول إن الالتزام لا يتجاوز 71%. البيانات المصدرية واحدة، والفترة واحدة، ولا يوجد خطأ في الحساب لدى أي من الطرفين.",
      en: "Your report shows 94% compliance while a key customer insists it is no better than 71%. The source data is the same, the period is the same, and neither side has a calculation error.",
    },
    requirements: [
      { ar: "افترض أن كلا الحسابين صحيح رياضيًا.", en: "Assume both calculations are mathematically correct." },
      { ar: "ابحث عن سبب تعريفي لا عن خطأ برمجي.", en: "Look for a definitional cause rather than a code defect." },
    ],
    task: {
      ar: "ما التفسير الأرجح للفجوة؟ اختر الإجابة الأدق.",
      en: "What is the most likely explanation for the gap? Pick the most accurate answer.",
    },
    grading: {
      mode: "choice",
      multi: false,
      options: [
        {
          id: "a",
          label: {
            ar: "تقريرك يقيس على مستوى الشحنة بينما العميل يقيس على مستوى سطر الطلب.",
            en: "Your report measures per shipment while the customer measures per order line.",
          },
          correct: true,
          rationale: {
            ar: "هذا التفسير الأشيع. شحنة تحتوي عشرة أسطر وينقصها صنف واحد تُحتسب عندك نجاحًا جزئيًا أو حتى نجاحًا كاملًا حسب القاعدة، بينما العميل يسجل سطرًا فاشلًا من عشرة. تغيير الحبيبية وحده يفسر فجوة بهذا الحجم دون أي خطأ حسابي.",
            en: "This is the most common cause. A ten-line shipment missing one item may count as a partial or even full success for you, while the customer logs one failed line out of ten. Grain alone explains a gap of this size with no arithmetic error.",
          },
        },
        {
          id: "b",
          label: { ar: "العميل يستخدم منطقة زمنية مختلفة.", en: "The customer uses a different time zone." },
          correct: false,
          rationale: {
            ar: "قد يسبب فروقًا طفيفة في الحالات الحدية عند منتصف الليل، لكنه لا يفسر فجوة 23 نقطة مئوية.",
            en: "It can cause marginal differences on midnight edge cases, but it cannot explain a 23-point gap.",
          },
        },
        {
          id: "c",
          label: { ar: "تقريرك يشمل عملاء آخرين.", en: "Your report includes other customers." },
          correct: false,
          rationale: {
            ar: "السيناريو يحدد أن المقارنة على نفس العميل ونفس الفترة، فالترشيح ليس السبب.",
            en: "The scenario states the comparison is for the same customer and period, so filtering is not the cause.",
          },
        },
        {
          id: "d",
          label: {
            ar: "العميل يحتسب الطلبات الملغاة بينما أنت تستبعدها.",
            en: "The customer counts cancelled orders while you exclude them.",
          },
          correct: false,
          rationale: {
            ar: "سبب حقيقي ومهم وقد يساهم في الفجوة، لكنه عادة يفسر بضع نقاط لا 23 نقطة. اختلاف الحبيبية أقوى تفسيرًا لفجوة بهذا الحجم.",
            en: "A real and important cause that may contribute, but it usually explains a few points rather than 23. A grain mismatch is the stronger explanation at this magnitude.",
          },
        },
      ],
    },
    explanation: {
      ar: "المؤشرات المركّبة حساسة جدًا للحبيبية. عند نشر أي مؤشر التزام يجب توثيق ثلاثة أشياء صراحة: وحدة القياس (شحنة أم طلب أم سطر)، وتاريخ الوعد المعتمد (الأصلي أم المحدّث)، ومعاملة الطلبات غير المسلّمة. غياب أي منها يجعل الرقم غير قابل للمقارنة مع أي طرف آخر.",
      en: "Composite metrics are extremely sensitive to grain. Publishing any compliance metric requires documenting three things explicitly: the measurement unit (shipment, order, or line), which promise date counts (original or revised), and how undelivered orders are treated. Missing any one makes the number incomparable with anyone else.",
    },
    mistakes: [
      { ar: "افتراض أن الاختلاف خطأ تقني يجب إصلاحه، بينما هو اختلاف تعريفي يجب التفاوض عليه.", en: "Assuming the difference is a technical bug to fix, when it is a definitional difference to negotiate." },
      { ar: "تعديل الحساب ليطابق رقم العميل دون توثيق التغيير، فتفقد الاتساق مع بقية العملاء.", en: "Changing the calculation to match the customer without documenting it, losing consistency with all other customers." },
    ],
    learnMore: [
      { label: { ar: "مؤشر OTIF", en: "OTIF" }, href: "/kpis/otif" },
      { label: { ar: "سلاسل الإمداد", en: "Supply Chain" }, href: "/domains/supply-chain" },
    ],
  },
  {
    id: "ch-dax-semi-additive",
    slug: "dax-semi-additive-headcount",
    title: { ar: "قياس شبه تجميعي: عدد الموظفين", en: "A semi-additive measure: headcount" },
    kind: "dax",
    difficulty: "intermediate",
    points: 20,
    domains: ["hr", "banking"],
    kpis: ["employee-turnover-rate"],
    scenario: {
      ar: "لديك جدول 'EmployeeSnapshot' يحتوي صفًا لكل موظف نشط في نهاية كل شهر. كتب زميلك المقياس التالي، وعند اختيار سنة كاملة في الشريحة ظهر عدد موظفين يقارب 2,900 بينما الشركة فيها 240 موظفًا فقط.",
      en: "You have an 'EmployeeSnapshot' table with one row per active employee at each month end. A colleague wrote the measure below, and selecting a full year in the slicer reports about 2,900 employees when the company has only 240.",
    },
    requirements: [
      { ar: "يجب أن يعطي المقياس عدد الموظفين في نهاية الفترة المختارة.", en: "The measure must return headcount at the end of the selected period." },
      { ar: "يجب أن يعمل بشكل صحيح على مستوى الشهر والربع والسنة.", en: "It must behave correctly at month, quarter, and year level." },
      { ar: "لا تعتمد على وجود صف لكل يوم؛ اللقطات شهرية فقط.", en: "Do not assume a row exists for every day; snapshots are monthly only." },
    ],
    dataset: {
      caption: { ar: "المقياس الحالي الذي يعطي نتيجة خاطئة", en: "The current measure, which returns the wrong result" },
      columns: [
        { key: "line", label: { ar: "الكود", en: "Code" } },
      ],
      rows: [
        { line: "Headcount = DISTINCTCOUNT ( 'EmployeeSnapshot'[EmployeeId] )" },
      ],
    },
    task: {
      ar: "أعد كتابة المقياس ليعطي عدد الموظفين في نهاية الفترة المختارة بدل تجميعهم عبر كل اللقطات.",
      en: "Rewrite the measure so it returns headcount at the end of the selected period instead of aggregating across every snapshot.",
    },
    grading: {
      mode: "code",
      language: "dax",
      reference: `Headcount :=
VAR LastSnapshot =
    CALCULATE (
        MAX ( 'EmployeeSnapshot'[SnapshotDate] ),
        ALLSELECTED ( 'Date' )
    )
VAR CurrentPeriodEnd =
    MAX ( 'Date'[Date] )
VAR EffectiveDate =
    MIN ( LastSnapshot, CurrentPeriodEnd )
RETURN
    CALCULATE (
        DISTINCTCOUNT ( 'EmployeeSnapshot'[EmployeeId] ),
        'EmployeeSnapshot'[SnapshotDate] = EffectiveDate
    )

-- Simpler alternative when a snapshot always exists on the period end date:
-- Headcount :=
-- CALCULATE (
--     DISTINCTCOUNT ( 'EmployeeSnapshot'[EmployeeId] ),
--     LASTNONBLANK ( 'Date'[Date], CALCULATE ( COUNTROWS ( 'EmployeeSnapshot' ) ) )
-- )`,
      rubric: [
        { ar: "يقيّد الحساب بتاريخ لقطة واحد بدل تجميع كل اللقطات في الفترة.", en: "Restricts the calculation to a single snapshot date instead of aggregating every snapshot in the period." },
        { ar: "يختار آخر تاريخ لقطة متاح داخل الفترة لا آخر يوم في التقويم.", en: "Picks the last available snapshot date within the period rather than the last calendar day." },
        { ar: "يتعامل مع غياب لقطة في نهاية الفترة دون إرجاع فراغ خاطئ.", en: "Handles a missing snapshot at period end without wrongly returning blank." },
        { ar: "يستخدم DISTINCTCOUNT لا COUNTROWS، لأن الموظف قد يظهر في أكثر من صف إن كان الجدول يحمل أبعادًا إضافية.", en: "Uses DISTINCTCOUNT rather than COUNTROWS, since an employee may appear in more than one row if the table carries extra dimensions." },
      ],
    },
    explanation: {
      ar: "عدد الموظفين مؤشر شبه تجميعي: يُجمع عبر الأقسام والمواقع لكنه لا يُجمع عبر الزمن. المقياس الأصلي يعد كل موظف ظهر في أي لقطة خلال السنة، فيقارب 240 × 12 عند استقرار العمالة. الحل هو تثبيت تاريخ لقطة واحد. نفس المبدأ ينطبق على رصيد المخزون ورصيد الحساب البنكي والمتراكم المفتوح — كلها لقطات لا تُجمع عبر الزمن.",
      en: "Headcount is semi-additive: it sums across departments and locations but not across time. The original measure counts every employee appearing in any snapshot during the year, approaching 240 x 12 with a stable workforce. The fix is to pin one snapshot date. The same principle applies to inventory balances, bank account balances, and open backlog — all snapshots that do not sum across time.",
    },
    mistakes: [
      { ar: "استخدام LASTDATE ( 'Date'[Date] ) مباشرة، وهو يفشل إن لم توجد لقطة في آخر يوم من الفترة.", en: "Using LASTDATE ( 'Date'[Date] ) directly, which fails when no snapshot exists on the last day of the period." },
      { ar: "استخدام AVERAGE بدل التثبيت على تاريخ واحد. المتوسط مؤشر مختلف مفيد للدوران لكنه ليس عدد الموظفين.", en: "Using AVERAGE instead of pinning a date. The average is a different metric, useful for turnover but not headcount." },
      { ar: "حل المشكلة بترشيح ثابت في المقياس، فيتوقف عن الاستجابة للشريحة.", en: "Fixing it with a hard-coded filter in the measure, so it stops responding to the slicer." },
    ],
    learnMore: [
      { label: { ar: "معدل دوران الموظفين", en: "Employee Turnover Rate" }, href: "/kpis/employee-turnover-rate" },
      { label: { ar: "الموارد البشرية", en: "Human Resources" }, href: "/domains/human-resources" },
    ],
  },
  {
    id: "ch-viz-selection-cohort",
    slug: "choose-visual-for-cohort-retention",
    title: { ar: "اختيار المرئي المناسب لاحتفاظ الأفواج", en: "Choosing the right visual for cohort retention" },
    kind: "viz-selection",
    difficulty: "intermediate",
    points: 15,
    domains: ["it-saas", "marketing"],
    kpis: ["ltv"],
    scenario: {
      ar: "طلب فريق نجاح العملاء عرضًا يوضح نسبة العملاء الباقين من كل فوج شهري عبر 12 شهرًا من تاريخ اشتراكهم، ليحددوا متى يحدث أكبر تسرب ولأي الأفواج.",
      en: "Customer success asked for a view showing the share of customers retained from each monthly cohort over the 12 months since they signed up, so they can see when the biggest drop happens and for which cohorts.",
    },
    requirements: [
      { ar: "يجب رؤية كل فوج على حدة لا المتوسط العام.", en: "Each cohort must be visible individually, not just the overall average." },
      { ar: "يجب مقارنة نفس الشهر النسبي عبر الأفواج (الشهر الثالث لكل فوج مثلًا).", en: "The same relative month must be comparable across cohorts (month three for every cohort, for example)." },
      { ar: "عدد الأفواج 24 وعدد الأشهر النسبية 12.", en: "There are 24 cohorts and 12 relative months." },
    ],
    task: {
      ar: "أي مرئي تختار، ولماذا؟",
      en: "Which visual do you choose, and why?",
    },
    grading: {
      mode: "choice",
      multi: false,
      options: [
        {
          id: "a",
          label: {
            ar: "مصفوفة بالفوج في الصفوف والشهر النسبي في الأعمدة مع تنسيق شرطي متدرج.",
            en: "A matrix with cohort in rows, relative month in columns, and a graded conditional format.",
          },
          correct: true,
          rationale: {
            ar: "المصفوفة تعرض 288 قيمة (24 × 12) بوضوح، وتتيح قراءة صف واحد (سلوك فوج عبر الزمن) وعمود واحد (مقارنة كل الأفواج في نفس الشهر النسبي) معًا. التنسيق المتدرج يحوّلها إلى خريطة حرارية تكشف الأنماط القطرية التي تدل على أحداث خارجية أثرت على كل الأفواج في نفس التاريخ الفعلي.",
            en: "A matrix shows all 288 values (24 x 12) legibly and supports reading one row (a cohort over time) and one column (all cohorts at the same relative month) at once. The graded format turns it into a heatmap that reveals diagonal patterns signalling external events hitting every cohort on the same calendar date.",
          },
        },
        {
          id: "b",
          label: { ar: "رسم خطي بـ 24 خطًا، خط لكل فوج.", en: "A line chart with 24 lines, one per cohort." },
          correct: false,
          rationale: {
            ar: "24 خطًا متشابكًا يجعل تتبع أي فوج مستحيلًا، ويحتاج 24 لونًا مميزًا وهو ما لا تتحمله أي لوحة ألوان مقروءة. الرسم الخطي مناسب لثلاثة إلى خمسة أفواج مختارة فقط.",
            en: "Twenty-four overlapping lines make any single cohort impossible to follow and demand 24 distinguishable colours, which no readable palette provides. A line chart works for three to five selected cohorts only.",
          },
        },
        {
          id: "c",
          label: { ar: "رسم قمعي بمراحل الاحتفاظ.", en: "A funnel chart of retention stages." },
          correct: false,
          rationale: {
            ar: "القمع يفترض مسارًا متسلسلًا واحدًا ويعرض بعدًا واحدًا. لا يمكنه عرض 24 فوجًا متوازيًا، كما أن الاحتفاظ ليس مراحل بل سلسلة زمنية.",
            en: "A funnel assumes one sequential path and shows a single dimension. It cannot display 24 parallel cohorts, and retention is a time series rather than a set of stages.",
          },
        },
        {
          id: "d",
          label: { ar: "بطاقة مؤشر بمتوسط الاحتفاظ بعد 12 شهرًا.", en: "A KPI card with average 12-month retention." },
          correct: false,
          rationale: {
            ar: "يلبي جزءًا من الطلب لكنه يفقد كل ما طُلب: متى يحدث التسرب وأي الأفواج. البطاقة مكمّل مفيد للمصفوفة لا بديل عنها.",
            en: "It answers part of the ask but loses everything requested: when the drop happens and for which cohorts. The card is a useful companion to the matrix, not a replacement.",
          },
        },
      ],
    },
    explanation: {
      ar: "القاعدة العملية: عندما يكون عدد الفئات كبيرًا والقيم الدقيقة مهمة والمقارنة تحتاج بعدين، فالمصفوفة مع التنسيق الشرطي تتفوق على أي رسم بياني. الرسوم البيانية تتفوق عندما يكون السؤال عن اتجاه أو نمط بعدد فئات محدود. هنا السؤال عن قيم دقيقة عبر بعدين، فالمصفوفة هي الخيار.",
      en: "The practical rule: when category counts are high, exact values matter, and the comparison spans two dimensions, a conditionally formatted matrix beats any chart. Charts win when the question is about a trend or pattern across a limited number of categories. Here the question is about precise values across two dimensions, so the matrix wins.",
    },
    mistakes: [
      { ar: "اختيار الرسم الأكثر جاذبية بصريًا بدل الأنسب للسؤال.", en: "Picking the most visually appealing chart rather than the one that fits the question." },
      { ar: "تلوين كل خلايا المصفوفة بنفس الشدة، فيضيع النمط.", en: "Colouring every matrix cell at the same intensity, destroying the pattern." },
    ],
    learnMore: [
      { label: { ar: "المصفوفة والتنسيق الشرطي", en: "Matrix with Conditional Formatting" }, href: "/academy/matrix-with-conditional-formatting" },
      { label: { ar: "القيمة العمرية للعميل", en: "Customer Lifetime Value" }, href: "/kpis/customer-lifetime-value" },
    ],
  },
  {
    id: "ch-roas-breakeven",
    slug: "roas-breakeven-decision",
    title: { ar: "أي حملة توقف؟", en: "Which campaign do you stop?" },
    kind: "case-study",
    difficulty: "intermediate",
    points: 20,
    domains: ["marketing", "retail"],
    kpis: ["roas", "gross-profit-margin"],
    scenario: {
      ar: "ميزانيتك الإعلانية ثابتة وطُلب منك إيقاف حملة واحدة لتحويل ميزانيتها. أمامك ثلاث حملات بأرقام مختلفة، ومديرك يميل لإيقاف الحملة ذات أقل ROAS.",
      en: "Your ad budget is fixed and you must stop one campaign to reallocate its budget. You have three campaigns with different numbers, and your manager is inclined to stop the one with the lowest ROAS.",
    },
    requirements: [
      { ar: "الهدف هو تعظيم الربح الإجمالي بعد الإعلان لا تعظيم ROAS.", en: "The objective is to maximise total profit after ad spend, not to maximise ROAS." },
      { ar: "احسب عتبة التعادل لكل حملة من هامشها.", en: "Compute the break-even threshold for each campaign from its margin." },
    ],
    dataset: {
      caption: { ar: "بيانات توضيحية للتمرين فقط", en: "Illustrative data, for this exercise only" },
      columns: [
        { key: "campaign", label: { ar: "الحملة", en: "Campaign" } },
        { key: "spend", label: { ar: "الإنفاق", en: "Spend" } },
        { key: "revenue", label: { ar: "الإيراد المنسوب", en: "Attributed revenue" } },
        { key: "margin", label: { ar: "هامش المنتجات", en: "Product margin" } },
      ],
      rows: [
        { campaign: "A", spend: 100000, revenue: 700000, margin: "12%" },
        { campaign: "B", spend: 100000, revenue: 350000, margin: "45%" },
        { campaign: "C", spend: 100000, revenue: 500000, margin: "25%" },
      ],
    },
    task: {
      ar: "أي حملة يجب إيقافها؟",
      en: "Which campaign should be stopped?",
    },
    grading: {
      mode: "choice",
      multi: false,
      options: [
        {
          id: "a",
          label: { ar: "الحملة A، رغم أن ROAS فيها الأعلى.", en: "Campaign A, despite having the highest ROAS." },
          correct: true,
          rationale: {
            ar: "الحملة A: ROAS = 7.0 وعتبة التعادل = 1 ÷ 12% = 8.33. الهامش المتولد = 700,000 × 12% = 84,000 مقابل إنفاق 100,000، أي خسارة 16,000. هي الحملة الوحيدة الخاسرة رغم أن ROAS فيها الأعلى بفارق كبير.",
            en: "Campaign A: ROAS = 7.0 and break-even = 1 ÷ 12% = 8.33. Margin generated = 700,000 x 12% = 84,000 against 100,000 spend — a loss of 16,000. It is the only loss-making campaign despite having by far the highest ROAS.",
          },
        },
        {
          id: "b",
          label: { ar: "الحملة B، لأن ROAS فيها الأدنى.", en: "Campaign B, because its ROAS is lowest." },
          correct: false,
          rationale: {
            ar: "الحملة B: ROAS = 3.5 وعتبة التعادل = 1 ÷ 45% = 2.22. الهامش = 350,000 × 45% = 157,500، أي ربح 57,500. هي الأعلى ربحًا من الثلاث، وإيقافها أسوأ قرار ممكن.",
            en: "Campaign B: ROAS = 3.5 and break-even = 1 ÷ 45% = 2.22. Margin = 350,000 x 45% = 157,500, a profit of 57,500. It is the most profitable of the three, and stopping it is the worst possible decision.",
          },
        },
        {
          id: "c",
          label: { ar: "الحملة C، لأنها في المنتصف.", en: "Campaign C, because it is in the middle." },
          correct: false,
          rationale: {
            ar: "الحملة C: ROAS = 5.0 وعتبة التعادل = 4.0. الهامش = 500,000 × 25% = 125,000، أي ربح 25,000. مربحة، والموقع في المنتصف ليس معيار قرار.",
            en: "Campaign C: ROAS = 5.0 and break-even = 4.0. Margin = 500,000 x 25% = 125,000, a profit of 25,000. It is profitable, and sitting in the middle is not a decision criterion.",
          },
        },
        {
          id: "d",
          label: { ar: "لا يمكن الحكم دون معرفة معدل التحويل.", en: "You cannot decide without knowing conversion rate." },
          correct: false,
          rationale: {
            ar: "معدل التحويل يفسّر كيف تولّد الإيراد لكنه لا يغيّر حساب الربحية. البيانات المعطاة كافية تمامًا للقرار المطلوب.",
            en: "Conversion rate explains how revenue was generated but does not change the profitability arithmetic. The data given is entirely sufficient for the decision asked.",
          },
        },
      ],
    },
    explanation: {
      ar: "ترتيب الحملات بالربح: B (57,500) ثم C (25,000) ثم A (−16,000). ترتيبها بـ ROAS معكوس تمامًا: A (7.0) ثم C (5.0) ثم B (3.5). هذا الانعكاس الكامل ليس صدفة بل نتيجة حتمية لاختلاف الهوامش. ROAS مؤشر إيراد ولا يعرف شيئًا عن التكلفة، ولهذا فترتيب الحملات به وحده يقود بانتظام إلى قرارات معكوسة عندما تختلف هوامش المنتجات بين الحملات.",
      en: "Ranking by profit: B (57,500), then C (25,000), then A (−16,000). Ranking by ROAS is exactly inverted: A (7.0), C (5.0), B (3.5). This complete inversion is not a coincidence but an inevitable result of differing margins. ROAS is a revenue metric that knows nothing about cost, so ranking campaigns by it alone systematically produces backwards decisions whenever product margins differ across campaigns.",
    },
    mistakes: [
      { ar: "استخدام عتبة ROAS واحدة لكل الحملات رغم اختلاف هوامش منتجاتها.", en: "Applying one ROAS threshold to all campaigns despite their differing product margins." },
      { ar: "تجاهل أن إيقاف حملة مربحة يقلل الربح المطلق حتى لو رفع متوسط ROAS.", en: "Forgetting that stopping a profitable campaign cuts absolute profit even while raising average ROAS." },
    ],
    learnMore: [
      { label: { ar: "العائد على الإنفاق الإعلاني", en: "Return on Ad Spend" }, href: "/kpis/return-on-ad-spend" },
      { label: { ar: "هامش الربح الإجمالي", en: "Gross Profit Margin" }, href: "/kpis/gross-profit-margin" },
    ],
  },
  {
    id: "ch-model-grain",
    slug: "data-model-grain-choice",
    title: { ar: "اختيار حبيبية جدول الحقائق", en: "Choosing the fact table grain" },
    kind: "data-modeling",
    difficulty: "advanced",
    points: 25,
    domains: ["retail", "supply-chain"],
    kpis: ["aov", "otif"],
    scenario: {
      ar: "تبني نموذجًا لمتجر إلكتروني. المطلوب دعم متوسط قيمة الطلب، والمبيعات حسب المنتج، ونسبة المرتجعات، ونسبة الطلبات المكتملة. الفريق مقسوم: بعضهم يريد جدولًا بحبيبية الطلب لأنه أصغر وأسرع.",
      en: "You are modelling an online store. It must support average order value, sales by product, return rate, and order completion rate. The team is split: some want an order-grain table because it is smaller and faster.",
    },
    requirements: [
      { ar: "يجب دعم كل المؤشرات الأربعة من نموذج واحد متسق.", en: "All four metrics must be supported from one consistent model." },
      { ar: "يجب ألا يتطلب أي مؤشر حسابًا مسبقًا خارج النموذج.", en: "No metric may require a pre-computation outside the model." },
    ],
    task: {
      ar: "ما الحبيبية الصحيحة لجدول الحقائق الأساسي، وكيف تحسب عدد الطلبات منها؟",
      en: "What is the correct grain for the primary fact table, and how do you count orders from it?",
    },
    grading: {
      mode: "choice",
      multi: false,
      options: [
        {
          id: "a",
          label: {
            ar: "سطر الطلب، مع حساب عدد الطلبات بـ DISTINCTCOUNT على معرّف الطلب.",
            en: "Order line, counting orders with DISTINCTCOUNT on the order key.",
          },
          correct: true,
          rationale: {
            ar: "القاعدة: اختر أدق حبيبية يحتاجها أي مؤشر مطلوب. المبيعات حسب المنتج تتطلب سطر الطلب، ولا يمكن اشتقاقها من حبيبية الطلب. العكس ممكن دائمًا: عدد الطلبات يُشتق من الأسطر بـ DISTINCTCOUNT بلا فقد معلومات.",
            en: "The rule: pick the finest grain any required metric needs. Sales by product requires order-line grain and cannot be derived from order grain. The reverse is always possible: order count derives from lines via DISTINCTCOUNT with no information loss.",
          },
        },
        {
          id: "b",
          label: { ar: "الطلب، مع جدول منفصل للمنتجات المباعة.", en: "Order grain, with a separate table for products sold." },
          correct: false,
          rationale: {
            ar: "هذا فعليًا جدولان بحبيبيتين مختلفتين، ويخلق مشكلة كلاسيكية: أي مقياس يجمع بين المنتج والطلب سيحتاج منطقًا خاصًا، ومجاميع المصفوفة ستختلف بين الجدولين. الحل المقترح أعقد من المشكلة التي يحلها.",
            en: "This is effectively two tables at two grains, creating a classic problem: any measure combining product and order needs bespoke logic, and matrix totals will disagree between the two. The proposed cure is more complex than the disease.",
          },
        },
        {
          id: "c",
          label: { ar: "العميل واليوم، لتقليل حجم الجدول.", en: "Customer and day, to shrink the table." },
          correct: false,
          rationale: {
            ar: "يفقد المنتج والطلب معًا، فلا يمكن حساب ثلاثة من المؤشرات الأربعة. تحسين الأداء بتخشين الحبيبية قرار يُتخذ بعد إثبات وجود مشكلة أداء، لا قبل بناء النموذج.",
            en: "This loses both product and order, making three of the four metrics impossible. Coarsening grain for performance is a decision taken after proving a performance problem, not before building the model.",
          },
        },
        {
          id: "d",
          label: { ar: "سطر الطلب، مع حساب عدد الطلبات بـ COUNTROWS.", en: "Order line, counting orders with COUNTROWS." },
          correct: false,
          rationale: {
            ar: "الحبيبية صحيحة لكن الحساب خاطئ. COUNTROWS يعد الأسطر لا الطلبات، فطلب من خمسة أصناف يُحتسب خمسة طلبات وينهار AOV إلى خُمس قيمته الصحيحة.",
            en: "The grain is right but the count is wrong. COUNTROWS counts lines rather than orders, so a five-item order counts as five and AOV collapses to a fifth of its correct value.",
          },
        },
      ],
    },
    explanation: {
      ar: "المبدأ العام في نمذجة الأبعاد: الحبيبية هي أول قرار وأصعبه تغييرًا لاحقًا. اختر أدق مستوى يحتاجه أي سؤال متوقع، لأن التجميع للأعلى ممكن دائمًا بينما التفصيل للأسفل مستحيل. في هذه الحالة سطر الطلب يدعم المؤشرات الأربعة جميعًا، والمرتجعات تُسجل كصفوف سالبة في نفس الجدول مع عمود LineType، وهو أبسط بكثير من جدول منفصل ويمنع أخطاء الطرح.",
      en: "The general principle in dimensional modelling: grain is the first decision and the hardest to change later. Pick the finest level any anticipated question needs, because rolling up is always possible while drilling down is not. Here order-line grain supports all four metrics, and returns are recorded as negative rows in the same table with a LineType column — far simpler than a separate table and it prevents subtraction errors.",
    },
    mistakes: [
      { ar: "تخشين الحبيبية لأسباب أداء قبل قياس الأداء فعليًا.", en: "Coarsening grain for performance before actually measuring performance." },
      { ar: "استخدام COUNTROWS حيث يلزم DISTINCTCOUNT، وهو خطأ صامت لا ينتج عنه أي رسالة خطأ.", en: "Using COUNTROWS where DISTINCTCOUNT is required — a silent error that raises no warning." },
      { ar: "وضع المرتجعات في جدول منفصل، فتحتاج كل المقاييس إلى دمج يدوي.", en: "Putting returns in a separate table, forcing every measure into a manual union." },
    ],
    learnMore: [
      { label: { ar: "متوسط قيمة الطلب", en: "Average Order Value" }, href: "/kpis/average-order-value" },
      { label: { ar: "التجزئة والتجارة الإلكترونية", en: "Retail & E-commerce" }, href: "/domains/retail-ecommerce" },
    ],
  },
  {
    id: "ch-dashboard-critique",
    slug: "critique-the-operations-dashboard",
    title: { ar: "نقد لوحة معلومات تشغيلية", en: "Critique an operations dashboard" },
    kind: "dashboard-critique",
    difficulty: "intermediate",
    points: 20,
    domains: ["manufacturing", "customer-service"],
    kpis: ["oee"],
    scenario: {
      ar: "سُلّمت لوحة معلومات لمدير مصنع. الصفحة الأولى تحتوي: بطاقة واحدة كبيرة بـ OEE = 72%، ورسم خطي لـ OEE عبر 18 شهرًا، وثماني بطاقات صغيرة لمؤشرات متفرقة، ومقياس Gauge لعدد الوحدات المنتجة مقابل هدف شهري.",
      en: "A dashboard was delivered to a plant manager. Page one contains: one large card showing OEE = 72%, a line chart of OEE across 18 months, eight small cards of assorted metrics, and a gauge of units produced against a monthly target.",
    },
    requirements: [
      { ar: "الجمهور مدير مصنع يحتاج تحديد أولوية التدخل اليومي.", en: "The audience is a plant manager who needs to prioritise daily intervention." },
      { ar: "ركّز على العيوب التي تمنع اتخاذ قرار لا على الجماليات.", en: "Focus on flaws that block a decision, not on aesthetics." },
    ],
    task: {
      ar: "ما أهم عيبين يجب إصلاحهما أولًا؟ اختر اثنين.",
      en: "What are the two most important flaws to fix first? Select two.",
    },
    grading: {
      mode: "choice",
      multi: true,
      options: [
        {
          id: "a",
          label: {
            ar: "OEE معروض بدون مكوناته الثلاثة (التوفر، الأداء، الجودة).",
            en: "OEE is shown without its three components (availability, performance, quality).",
          },
          correct: true,
          rationale: {
            ar: "عيب جوهري. رقم 72% لا يقول للمدير أين المشكلة، وبالتالي لا يمكنه التصرف. المكونات الثلاثة تحوّل الرقم من ملاحظة إلى توجيه: انخفاض التوفر يعني الصيانة، وانخفاض الأداء يعني التوقفات الصغيرة، وانخفاض الجودة يعني ضبط العملية.",
            en: "A fundamental flaw. A bare 72% does not tell the manager where the problem is, so they cannot act. The three components turn the number from an observation into direction: low availability points to maintenance, low performance to micro-stops, low quality to process control.",
          },
        },
        {
          id: "b",
          label: {
            ar: "لا يوجد أي عرض على مستوى الخط أو الوردية أو سبب التوقف.",
            en: "There is no view at line, shift, or downtime-reason level.",
          },
          correct: true,
          rationale: {
            ar: "عيب جوهري أيضًا. المدير يتدخل على مستوى خط ووردية محددين، ولوحة تعرض المجمّع فقط لا تنتج أي إجراء. تحليل باريتو لأسباب التوقف هو أكثر ما ينقص هذه الصفحة.",
            en: "Equally fundamental. The manager intervenes at a specific line and shift, and a dashboard showing only aggregates produces no action. A Pareto of downtime reasons is what this page most needs.",
          },
        },
        {
          id: "c",
          label: { ar: "الرسم الخطي يغطي 18 شهرًا وهي فترة طويلة.", en: "The line chart spans 18 months, which is a long window." },
          correct: false,
          rationale: {
            ar: "ليس عيبًا. السياق التاريخي مفيد لتمييز التقلب الطبيعي عن التدهور الحقيقي. المشكلة ليست في الطول بل في غياب التفصيل القابل للتصرف.",
            en: "Not a flaw. Historical context helps separate normal variation from real deterioration. The problem is not the span but the absence of actionable detail.",
          },
        },
        {
          id: "d",
          label: { ar: "ثماني بطاقات صغيرة كثيرة جدًا على صفحة واحدة.", en: "Eight small cards is too many for one page." },
          correct: false,
          rationale: {
            ar: "ملاحظة تصميمية صحيحة وتستحق المعالجة، لكنها أقل أهمية من العيبين الأولين اللذين يمنعان اتخاذ القرار تمامًا. رتّب الإصلاحات بأثرها على القرار لا بوضوحها البصري.",
            en: "A valid design observation worth addressing, but less important than the first two, which block decision-making entirely. Rank fixes by decision impact rather than visual obviousness.",
          },
        },
      ],
    },
    explanation: {
      ar: "المعيار الأول في نقد أي لوحة معلومات هو سؤال واحد: ما القرار الذي تمكّن هذه الصفحة القارئ من اتخاذه؟ لوحة تعرض OEE مجمّعًا بلا مكونات وبلا تفصيل تشغيلي تجيب سؤال «كيف حالنا؟» ولا تجيب سؤال «ماذا أفعل الآن؟»، والثاني هو ما يحتاجه مدير المصنع. الجماليات وعدد البطاقات مسائل ثانوية تُعالج بعد إصلاح قابلية التصرف.",
      en: "The first test in critiquing any dashboard is one question: what decision does this page enable? A dashboard showing aggregate OEE with no components and no operational detail answers how are we doing but not what should I do now — and the second is what a plant manager needs. Aesthetics and card count are secondary, addressed after actionability is fixed.",
    },
    mistakes: [
      { ar: "البدء بنقد الألوان والخطوط قبل التحقق من أن الصفحة تجيب سؤالًا حقيقيًا.", en: "Starting with colour and typography critique before checking the page answers a real question." },
      { ar: "إضافة مزيد من المؤشرات بدل تعميق المؤشرات الموجودة.", en: "Adding more metrics instead of deepening the ones already there." },
    ],
    learnMore: [
      { label: { ar: "الفعالية الكلية للمعدات", en: "Overall Equipment Effectiveness" }, href: "/kpis/overall-equipment-effectiveness" },
      { label: { ar: "بطاقة المؤشر متعددة القيم", en: "Multi-Value KPI Card" }, href: "/academy/multi-value-kpi-card" },
    ],
  },
  {
    id: "ch-sql-cohort",
    slug: "sql-first-order-cohort",
    title: { ar: "تحديد فوج العميل بـ SQL", en: "Identifying a customer cohort in SQL" },
    kind: "sql",
    difficulty: "intermediate",
    points: 20,
    domains: ["retail", "it-saas"],
    kpis: ["ltv", "cac"],
    scenario: {
      ar: "تحتاج عمودًا يحدد شهر أول طلب لكل عميل ليكون أساس تحليل الأفواج. جدول الطلبات يحتوي ملايين الصفوف، ويجب أن يعمل الاستعلام على مستوى العميل لا الطلب.",
      en: "You need a column giving each customer first order month as the basis for cohort analysis. The orders table has millions of rows, and the query must resolve at customer grain rather than order grain.",
    },
    requirements: [
      { ar: "صف واحد لكل عميل في النتيجة.", en: "One row per customer in the result." },
      { ar: "استبعد الطلبات الملغاة من تحديد أول طلب.", en: "Exclude cancelled orders when determining the first order." },
      { ar: "أرجع شهر الفوج وعدد الطلبات وإجمالي الإيراد.", en: "Return the cohort month, order count, and total revenue." },
    ],
    dataset: {
      caption: { ar: "بنية الجدول المتاحة", en: "Available table structure" },
      columns: [
        { key: "table", label: { ar: "الجدول", en: "Table" } },
        { key: "columns", label: { ar: "الأعمدة", en: "Columns" } },
      ],
      rows: [
        { table: "orders", columns: "order_id, customer_id, order_date, status, net_amount" },
        { table: "customer", columns: "customer_id, signup_date, country" },
      ],
    },
    task: {
      ar: "اكتب استعلامًا يُرجع لكل عميل: شهر الفوج، وعدد طلباته، وإجمالي إيراده.",
      en: "Write a query returning, per customer: cohort month, order count, and total revenue.",
    },
    grading: {
      mode: "code",
      language: "sql",
      reference: `SELECT
    o.customer_id,
    DATE_TRUNC('month', MIN(o.order_date)) AS cohort_month,
    COUNT(DISTINCT o.order_id)             AS order_count,
    SUM(o.net_amount)                      AS total_revenue
FROM orders AS o
WHERE o.status <> 'Cancelled'
GROUP BY o.customer_id;

-- Window-function alternative when you also need per-order context,
-- for example the relative month index of every order:
-- SELECT
--     o.*,
--     DATE_TRUNC('month', MIN(o.order_date) OVER (PARTITION BY o.customer_id))
--         AS cohort_month
-- FROM orders AS o
-- WHERE o.status <> 'Cancelled';`,
      rubric: [
        { ar: "يستخدم MIN على تاريخ الطلب مع تجميع حسب العميل، فينتج صف واحد لكل عميل.", en: "Uses MIN on order date with a customer-level GROUP BY, producing one row per customer." },
        { ar: "يرشّح الطلبات الملغاة قبل تحديد أول طلب لا بعده.", en: "Filters cancelled orders before determining the first order rather than after." },
        { ar: "يقصّ التاريخ إلى بداية الشهر ليكون الفوج شهريًا.", en: "Truncates the date to month start so the cohort is monthly." },
        { ar: "يستخدم COUNT DISTINCT على معرّف الطلب إن كان الجدول بحبيبية السطر.", en: "Uses COUNT DISTINCT on the order key if the table is at line grain." },
      ],
    },
    explanation: {
      ar: "النقطة الحرجة هي موضع الترشيح: وضع شرط الحالة في WHERE يستبعد الملغاة قبل حساب MIN، فيكون أول طلب هو أول طلب صالح. لو وُضع الشرط في HAVING أو طُبّق بعد التجميع لظل الطلب الملغى محددًا للفوج، ووُضع العميل في فوج خاطئ. الخطأ الثاني الشائع هو الاعتماد على signup_date كفوج — تاريخ التسجيل ليس تاريخ أول شراء، والفرق بينهما قد يكون أشهرًا.",
      en: "The critical point is filter placement: putting the status condition in WHERE removes cancellations before MIN is evaluated, so the first order is the first valid one. Placed in HAVING or applied after aggregation, a cancelled order would still define the cohort and place the customer in the wrong one. The second common error is using signup_date as the cohort — sign-up is not first purchase, and the gap can be months.",
    },
    mistakes: [
      { ar: "ترشيح الحالة بعد التجميع، فيحدد الفوج طلب ملغى.", en: "Filtering status after aggregation, letting a cancelled order define the cohort." },
      { ar: "استخدام تاريخ التسجيل بدل تاريخ أول طلب كأساس للفوج.", en: "Using sign-up date instead of first order date as the cohort basis." },
      { ar: "نسيان DISTINCT عند عد الطلبات في جدول بحبيبية السطر.", en: "Forgetting DISTINCT when counting orders in a line-grain table." },
    ],
    learnMore: [
      { label: { ar: "القيمة العمرية للعميل", en: "Customer Lifetime Value" }, href: "/kpis/customer-lifetime-value" },
      { label: { ar: "تكلفة اكتساب العميل", en: "Customer Acquisition Cost" }, href: "/kpis/customer-acquisition-cost" },
    ],
  },
];

export const challengeById = new Map(challenges.map((c) => [c.id, c]));
export const challengeBySlug = new Map(challenges.map((c) => [c.slug, c]));

export function getChallenge(slug: string): Challenge | undefined {
  return challengeBySlug.get(slug);
}

export function challengesForDomain(domainId: string): Challenge[] {
  return challenges.filter((c) => c.domains.includes(domainId));
}

/* ------------------------------------------------------------------ */
/* Learning paths                                                      */
/* ------------------------------------------------------------------ */

export const learningPaths: LearningPath[] = [
  {
    id: "path-new-domain",
    slug: "understand-a-new-domain",
    title: { ar: "افهم مجالًا جديدًا في أسبوع", en: "Understand a new domain in a week" },
    summary: {
      ar: "المسار الذي تسلكه عندما تُسند إليك مشروع BI في قطاع لم تعمل فيه من قبل: من فهم العمليات إلى بناء أول لوحة مفيدة.",
      en: "The path you take when assigned a BI project in a sector you have never worked in: from understanding the processes to building a first useful dashboard.",
    },
    icon: "Compass",
    accent: "#3FD3A8",
    difficulty: "beginner",
    steps: [
      { label: { ar: "ابدأ بسلاسل الإمداد كمثال تطبيقي", en: "Start with supply chain as a worked example" }, href: "/domains/supply-chain", kind: "domain" },
      { label: { ar: "افهم أهم مؤشراته", en: "Learn its headline metric" }, href: "/kpis/inventory-turnover", kind: "kpi" },
      { label: { ar: "تعرّف على مصفوفة الأعمار", en: "Meet the ageing matrix" }, href: "/academy/inventory-aging-matrix", kind: "pattern" },
      { label: { ar: "اختبر فهمك", en: "Test your understanding" }, href: "/practice/inventory-turnover-denominator", kind: "challenge" },
      { label: { ar: "طبّق نفس المنهج على المالية", en: "Apply the same method to finance" }, href: "/domains/finance", kind: "domain" },
    ],
  },
  {
    id: "path-kpi-accuracy",
    slug: "metrics-that-mislead",
    title: { ar: "المؤشرات التي تخدع", en: "Metrics that mislead" },
    summary: {
      ar: "مسار مخصص للمؤشرات التي يُساء فهمها كثيرًا: أين يكمن الخطأ في المقام، ولماذا الأعلى ليس دائمًا أفضل، وكيف تكتشف ذلك قبل أن يكتشفه مديرك.",
      en: "A path through the metrics most often misread: where the denominator goes wrong, why higher is not always better, and how to catch it before your manager does.",
    },
    icon: "AlertTriangle",
    accent: "#F5A44E",
    difficulty: "intermediate",
    steps: [
      { label: { ar: "الأعلى ليس أفضل: دوران المخزون", en: "Higher is not better: inventory turnover" }, href: "/kpis/inventory-turnover", kind: "kpi" },
      { label: { ar: "أثر المقام: معدل دوران الموظفين", en: "The denominator effect: employee turnover" }, href: "/kpis/employee-turnover-rate", kind: "kpi" },
      { label: { ar: "نسبة تخفي الربح: ROAS", en: "A ratio that hides profit: ROAS" }, href: "/kpis/return-on-ad-spend", kind: "kpi" },
      { label: { ar: "طبّق القرار الصحيح", en: "Apply the right decision" }, href: "/practice/roas-breakeven-decision", kind: "challenge" },
      { label: { ar: "رقم واحد يخفي ثلاثة: OEE", en: "One number hiding three: OEE" }, href: "/kpis/overall-equipment-effectiveness", kind: "kpi" },
    ],
  },
  {
    id: "path-dax-foundations",
    slug: "dax-for-real-models",
    title: { ar: "DAX لنماذج حقيقية", en: "DAX for real models" },
    summary: {
      ar: "المفاهيم التي تفصل بين من يكتب مقاييس تعمل ومن يكتب مقاييس تعطي أرقامًا خاطئة بصمت: القياسات شبه التجميعية، والحبيبية، وسياق الترشيح.",
      en: "The concepts separating those who write working measures from those who write silently wrong ones: semi-additive measures, grain, and filter context.",
    },
    icon: "Code2",
    accent: "#7B7BF7",
    difficulty: "advanced",
    steps: [
      { label: { ar: "الحبيبية أولًا", en: "Grain first" }, href: "/practice/data-model-grain-choice", kind: "challenge" },
      { label: { ar: "القياس شبه التجميعي", en: "The semi-additive measure" }, href: "/practice/dax-semi-additive-headcount", kind: "challenge" },
      { label: { ar: "متوسط الأرصدة في دوران المخزون", en: "Averaging balances in turnover" }, href: "/kpis/inventory-turnover", kind: "kpi" },
      { label: { ar: "شرطان في مقياس واحد", en: "Two conditions in one measure" }, href: "/kpis/otif", kind: "kpi" },
      { label: { ar: "المصفوفة ومجاميعها", en: "The matrix and its totals" }, href: "/academy/matrix-with-conditional-formatting", kind: "pattern" },
    ],
  },
];

export const learningPathBySlug = new Map(learningPaths.map((p) => [p.slug, p]));
