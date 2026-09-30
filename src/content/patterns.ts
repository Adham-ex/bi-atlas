import type { VizPattern } from "./types";

/**
 * Visualization and matrix pattern library.
 *
 * `demo` keys into the demo registry in `src/components/viz/demos.tsx`; every
 * pattern renders a real, data-backed example rather than an empty placeholder.
 */
export const patterns: VizPattern[] = [
  {
    id: "kpi-card",
    slug: "kpi-card",
    name: { ar: "بطاقة المؤشر", en: "KPI Card" },
    family: "kpi-card",
    icon: "Square",
    question: { ar: "ما القيمة الحالية لهذا المؤشر وهل تحسّنت؟", en: "What is this metric now, and did it improve?" },
    useWhen: [
      { ar: "عندما يكون للمؤشر قيمة واحدة مفهومة يحتاجها القارئ فورًا.", en: "When the metric has one understandable value the reader needs immediately." },
      { ar: "في أعلى الصفحة كملخص قبل التفاصيل.", en: "At the top of a page as a summary before the detail." },
    ],
    avoidWhen: [
      { ar: "عندما لا يمكن تفسير الرقم دون سياق (نسبة بلا مقام، أو مؤشر يعتمد على مزيج الحالات).", en: "When the number cannot be read without context (a ratio with no denominator, or a case-mix dependent metric)." },
      { ar: "عندما تضع أكثر من ستة بطاقات في صف واحد فتصبح ضجيجًا لا ملخصًا.", en: "When more than about six cards share a row, turning summary into noise." },
    ],
    dataNeeds: [
      { ar: "مقياس واحد مجمّع، ومقياس مقارنة للفترة السابقة أو الهدف.", en: "One aggregated measure plus a comparison measure for prior period or target." },
    ],
    fields: [
      { slot: "Value", expects: { ar: "المقياس الأساسي", en: "The primary measure" } },
      { slot: "Comparison", expects: { ar: "نفس المقياس للفترة السابقة أو الهدف", en: "The same measure for prior period or target" } },
      { slot: "Trend", expects: { ar: "سلسلة زمنية مختصرة للسياق", en: "A compact time series for context" } },
    ],
    interactions: [
      { ar: "التنقيب إلى صفحة التفاصيل بنقرة واحدة.", en: "Drill through to a detail page in one click." },
      { ar: "تلميح أداة يوضح التعريف والفترة والمقام.", en: "A tooltip stating the definition, period, and denominator." },
    ],
    mistakes: [
      { ar: "عرض نسبة التغيّر بلون أخضر تلقائيًا. ارتفاع معدل الدوران أو مدة الإقامة ليس خبرًا سارًا.", en: "Colouring a change green automatically. Rising turnover or length of stay is not good news." },
      { ar: "دقة زائفة: عرض 47.8392% يوحي بيقين غير موجود.", en: "False precision: showing 47.8392% implies a certainty that does not exist." },
      { ar: "بطاقة بلا فترة مرجعية، فلا يعرف القارئ إن كان الرقم جيدًا.", en: "A card with no reference period, leaving the reader unable to judge the number." },
    ],
    demo: "kpiCard",
    domains: ["supply-chain", "finance", "retail", "healthcare", "hr", "banking"],
  },
  {
    id: "kpi-card-multi",
    slug: "multi-value-kpi-card",
    name: { ar: "بطاقة المؤشر متعددة القيم", en: "Multi-Value KPI Card" },
    family: "kpi-card",
    icon: "LayoutGrid",
    question: {
      ar: "ما قراءة هذا المؤشر مع المؤشرات التي لا يُقرأ بمعزل عنها؟",
      en: "How does this metric read alongside the metrics it cannot be separated from?",
    },
    useWhen: [
      { ar: "عندما يكون المؤشر مضللًا منفردًا: OEE مع مكوناته، أو مدة الإقامة مع إعادة الدخول.", en: "When the metric misleads alone: OEE with its components, or length of stay with readmissions." },
      { ar: "عندما يكون المؤشر حاصل ضرب أو قسمة عوامل يحتاج القارئ رؤيتها.", en: "When the metric is a product or quotient of factors the reader needs to see." },
    ],
    avoidWhen: [
      { ar: "عندما تكون المؤشرات غير مترابطة، فيصبح التجميع عشوائيًا.", en: "When the metrics are unrelated, making the grouping arbitrary." },
    ],
    dataNeeds: [
      { ar: "مقياس رئيسي ومقياسان إلى ثلاثة مقاييس داعمة تشترك في نفس سياق الترشيح.", en: "One headline measure plus two or three supporting measures sharing the same filter context." },
    ],
    fields: [
      { slot: "Primary", expects: { ar: "المؤشر الرئيسي", en: "The headline metric" } },
      { slot: "Supporting", expects: { ar: "المكونات أو المؤشرات المقيّدة له", en: "Its components or the metrics that constrain it" } },
    ],
    interactions: [
      { ar: "إبراز المكوّن الأضعف تلقائيًا لتوجيه الانتباه.", en: "Automatically highlighting the weakest component to direct attention." },
    ],
    mistakes: [
      { ar: "حشو البطاقة بستة مقاييس فتفقد وظيفتها كملخص.", en: "Stuffing six measures in, so the card stops working as a summary." },
      { ar: "عرض المكونات بمقاييس بصرية مختلفة فيبدو أحدها أهم بلا سبب.", en: "Rendering components at different visual weights so one looks more important for no reason." },
    ],
    demo: "kpiCardMulti",
    domains: ["manufacturing", "marketing", "healthcare", "it-saas", "project-management", "customer-service"],
  },
  {
    id: "period-over-period",
    slug: "period-over-period",
    name: { ar: "مقارنة الفترة بالفترة السابقة", en: "Period over Period" },
    family: "trend",
    icon: "TrendingUp",
    question: { ar: "كيف يقارن أداء هذه الفترة بالفترة المقابلة؟", en: "How does this period compare to the matching one?" },
    useWhen: [
      { ar: "عندما يكون النشاط موسميًا فتكون المقارنة السنوية أصدق من المتتابعة.", en: "When the business is seasonal, making a year-over-year comparison more honest than a sequential one." },
      { ar: "عند متابعة اتجاه مستمر على مقياس زمني منتظم.", en: "When tracking a continuous trend on a regular time axis." },
    ],
    avoidWhen: [
      { ar: "عندما تكون النقاط الزمنية أقل من خمس، فالأعمدة أوضح من الخط.", en: "With fewer than about five time points, where bars read better than a line." },
      { ar: "عندما تكون الفئات غير مرتبة زمنيًا، فالخط يوحي باستمرارية غير موجودة.", en: "When categories are not time-ordered, since a line implies a continuity that does not exist." },
    ],
    dataNeeds: [
      { ar: "جدول تاريخ كامل ومعلّم، ومقياس قابل للتجميع عبر الزمن.", en: "A complete, marked date table and a measure that aggregates across time." },
    ],
    fields: [
      { slot: "Axis", expects: { ar: "عمود تاريخ من جدول التاريخ لا من جدول الحقائق", en: "A date column from the date table, not from the fact table" } },
      { slot: "Values", expects: { ar: "المقياس الحالي ونظيره للفترة السابقة", en: "The current measure and its prior-period counterpart" } },
    ],
    interactions: [
      { ar: "شريحة فترة تتحكم في الاثنين معًا حتى لا ينفصل الخطان.", en: "A period slicer controlling both series so the two lines never diverge in scope." },
    ],
    mistakes: [
      { ar: "مقارنة فترة جزئية بفترة كاملة. الشهر الجاري حتى اليوم 12 مقابل شهر كامل مقارنة خاطئة دائمًا.", en: "Comparing a partial period to a complete one. Month-to-date against a full month is always a wrong comparison." },
      { ar: "بدء المحور الرأسي من قيمة غير الصفر في رسم خطي، فتتضخم التغيرات الصغيرة بصريًا.", en: "Starting the value axis above zero on a line chart, visually exaggerating small changes." },
      { ar: "استخدام DATEADD على جدول تاريخ به فجوات، فتخرج نتائج صامتة الخطأ.", en: "Using DATEADD on a date table with gaps, producing silently wrong results." },
    ],
    demo: "periodOverPeriod",
    domains: ["retail", "finance", "marketing", "hr", "banking", "it-saas"],
  },
  {
    id: "actual-vs-target",
    slug: "actual-vs-target",
    name: { ar: "الفعلي مقابل المستهدف", en: "Actual versus Target" },
    family: "comparison",
    icon: "Target",
    question: { ar: "هل نحن على المسار مقابل الالتزام أو الخطة؟", en: "Are we on track against the commitment or the plan?" },
    useWhen: [
      { ar: "عندما يوجد هدف حقيقي متفق عليه لا رقم اخترعه مصمم التقرير.", en: "When a genuine agreed target exists rather than a number the report author invented." },
      { ar: "في مؤشرات تعاقدية مثل OTIF واتفاقيات مستوى الخدمة.", en: "For contractual metrics such as OTIF and service level agreements." },
    ],
    avoidWhen: [
      { ar: "عندما يكون الهدف متغيرًا أو غير موثق، فيصبح الرسم ادعاءً لا قياسًا.", en: "When the target is shifting or undocumented, turning the visual into a claim rather than a measurement." },
    ],
    dataNeeds: [
      { ar: "جدول أهداف بنفس حبيبية المقياس الفعلي أو أخشن منه مع قاعدة توزيع واضحة.", en: "A target table at the same grain as the actual, or coarser with an explicit allocation rule." },
    ],
    fields: [
      { slot: "Actual", expects: { ar: "المقياس الفعلي", en: "The actual measure" } },
      { slot: "Target", expects: { ar: "الهدف المعتمد لنفس الفترة والحبيبية", en: "The approved target at the same period and grain" } },
      { slot: "Variance", expects: { ar: "الفرق ونسبته، محسوبين لا مكتوبين يدويًا", en: "Difference and its percentage, computed rather than hard-coded" } },
    ],
    interactions: [
      { ar: "تنقيب إلى الحالات التي فشلت في بلوغ الهدف، لا إلى كل الحالات.", en: "Drill through to the cases that missed target, not to all cases." },
    ],
    mistakes: [
      { ar: "توزيع هدف سنوي على الأشهر بالتساوي في نشاط موسمي، فيبدو الأداء متعثرًا في الأشهر الضعيفة طبيعيًا.", en: "Splitting an annual target evenly across months in a seasonal business, making naturally weak months look like failures." },
      { ar: "استخدام مقياس Gauge لعرض هدفين أو أكثر، وهو ما لا يتحمله الشكل البصري.", en: "Using a gauge to show two or more targets, which the visual form cannot carry." },
      { ar: "إخفاء الفترة الزمنية للهدف، فلا يعرف القارئ إن كان الهدف شهريًا أم تراكميًا.", en: "Hiding the target period, leaving the reader unsure whether it is monthly or cumulative." },
    ],
    demo: "actualVsTarget",
    domains: ["supply-chain", "project-management", "manufacturing", "marketing", "finance"],
  },
  {
    id: "waterfall-variance",
    slug: "waterfall-variance",
    name: { ar: "الرسم الشلالي لتفسير الانحراف", en: "Waterfall Variance" },
    family: "composition",
    icon: "BarChart3",
    question: { ar: "ما الذي سبب الفرق بين رقمين؟", en: "What caused the difference between two numbers?" },
    useWhen: [
      { ar: "عند تفسير تغيّر الربح أو الإيراد أو المخزون بين فترتين.", en: "When explaining a change in profit, revenue, or inventory between two periods." },
      { ar: "عند تفكيك حركة الإيراد المتكرر إلى جديد وتوسع وتقليص وفقد.", en: "When decomposing recurring revenue movement into new, expansion, contraction, and churn." },
    ],
    avoidWhen: [
      { ar: "عندما لا تجمع المكونات إلى الفرق الكلي، فالشكل يَعِد بما لا يوفيه.", en: "When components do not sum to the total change, since the form promises what it cannot deliver." },
      { ar: "عند وجود أكثر من ثماني خطوات تقريبًا، فيصبح الرسم غير مقروء.", en: "With more than about eight steps, where the chart stops being readable." },
    ],
    dataNeeds: [
      { ar: "تفكيك متبادل الاستبعاد وشامل: كل مكوّن مرة واحدة والمجموع يساوي الفرق.", en: "A mutually exclusive, collectively exhaustive decomposition: each component once, summing to the change." },
    ],
    fields: [
      { slot: "Category", expects: { ar: "خطوات التفكيك مرتبة منطقيًا", en: "Decomposition steps in a logical order" } },
      { slot: "Y", expects: { ar: "قيمة موجبة أو سالبة لكل خطوة", en: "A positive or negative value per step" } },
      { slot: "Breakdown", expects: { ar: "بعد التفكيك مثل المنتج أو القناة", en: "The breakdown dimension such as product or channel" } },
    ],
    interactions: [
      { ar: "تنقيب من خطوة واحدة إلى تفاصيلها.", en: "Drill from a single step into its detail." },
    ],
    mistakes: [
      { ar: "ترتيب الخطوات بالحجم بدل الترتيب المنطقي، فيضيع السرد السببي.", en: "Ordering steps by size instead of logic, destroying the causal narrative." },
      { ar: "خلط أثر السعر وأثر الكمية في خطوة واحدة اسمها «أخرى»، وهي عادة أكبر خطوة في الرسم.", en: "Merging price and volume effects into one step labelled Other, usually the largest bar on the chart." },
      { ar: "استخدام الأحمر والأخضر فقط للإشارة، وهو ما لا يميّزه ضعاف تمييز الألوان.", en: "Relying on red and green alone to signal direction, which colour-vision-deficient readers cannot distinguish." },
    ],
    demo: "waterfall",
    domains: ["finance", "it-saas", "retail", "manufacturing", "banking", "project-management"],
  },
  {
    id: "variance-bar",
    slug: "variance-bar",
    name: { ar: "شريط الانحراف", en: "Variance Bar" },
    family: "comparison",
    icon: "AlignLeft",
    question: { ar: "أي البنود انحرفت عن المرجع وبأي اتجاه؟", en: "Which items deviated from the reference, and in which direction?" },
    useWhen: [
      { ar: "عند مقارنة عدد متوسط من الفئات بمرجع مشترك (موازنة، فترة سابقة).", en: "When comparing a moderate number of categories against a shared reference (budget, prior period)." },
      { ar: "عندما تكون الإشارة (موجب/سالب) أهم من القيمة المطلقة.", en: "When the sign matters more than the absolute value." },
    ],
    avoidWhen: [
      { ar: "عندما تكون الفئات كثيرة جدًا، فالمصفوفة مع التنسيق الشرطي أكفأ.", en: "With very many categories, where a matrix with conditional formatting is more efficient." },
    ],
    dataNeeds: [
      { ar: "مقياس فعلي ومرجع بنفس الحبيبية، ومقياس انحراف محسوب.", en: "An actual and a reference measure at the same grain, plus a computed variance measure." },
    ],
    fields: [
      { slot: "Category", expects: { ar: "البُعد المقارن مرتبًا بالانحراف", en: "The comparison dimension, sorted by variance" } },
      { slot: "Value", expects: { ar: "الانحراف بالقيمة أو بالنسبة", en: "Variance in value or percentage" } },
    ],
    interactions: [
      { ar: "التبديل بين الانحراف بالقيمة والانحراف بالنسبة عبر شريحة.", en: "Toggling between value and percentage variance via a slicer." },
    ],
    mistakes: [
      { ar: "الترتيب أبجديًا بدل الترتيب بالانحراف، فيُخفى البند الأهم في المنتصف.", en: "Sorting alphabetically instead of by variance, burying the most important item in the middle." },
      { ar: "عرض الانحراف بالنسبة فقط، فبند صغير بانحراف 300% يطغى على بند كبير بانحراف 4%.", en: "Showing percentage variance only, letting a tiny item at 300% dominate a large one at 4%." },
    ],
    demo: "varianceBar",
    domains: ["supply-chain", "finance", "manufacturing"],
  },
  {
    id: "stacked-bar",
    slug: "stacked-and-clustered-bar",
    name: { ar: "الأعمدة المكدسة والمجمّعة", en: "Stacked & Clustered Bar" },
    family: "composition",
    icon: "BarChart4",
    question: { ar: "كيف يتوزع الإجمالي بين فئات فرعية، وكيف تقارن الفئات؟", en: "How does the total split across sub-categories, and how do categories compare?" },
    useWhen: [
      { ar: "المكدّس عندما يهم الإجمالي وتركيبه معًا.", en: "Stacked when both the total and its composition matter." },
      { ar: "المجمّع عندما تكون المقارنة بين الفئات الفرعية هي الهدف.", en: "Clustered when comparing the sub-categories is the point." },
    ],
    avoidWhen: [
      { ar: "المكدّس عند وجود أكثر من أربع إلى خمس شرائح، فتصبح المقارنة بين الشرائح الوسطى مستحيلة بصريًا.", en: "Stacked with more than four or five series, where comparing middle segments becomes visually impossible." },
      { ar: "عند الرغبة في مقارنة دقيقة، فالأعمدة المتجاورة على خط أساس مشترك أدق.", en: "When precise comparison is needed, since bars on a shared baseline read more accurately." },
    ],
    dataNeeds: [
      { ar: "بُعد تصنيفي وبُعد تفكيك ومقياس قابل للجمع.", en: "A categorical dimension, a breakdown dimension, and an additive measure." },
    ],
    fields: [
      { slot: "Axis", expects: { ar: "الفئة الرئيسية", en: "The primary category" } },
      { slot: "Legend", expects: { ar: "بعد التفكيك، بعدد محدود من القيم", en: "The breakdown dimension, with a limited number of values" } },
      { slot: "Values", expects: { ar: "مقياس تجميعي (لا نسبة)", en: "An additive measure, never a ratio" } },
    ],
    interactions: [
      { ar: "الترشيح المتقاطع على بقية الصفحة عند اختيار شريحة.", en: "Cross-filtering the rest of the page when a segment is selected." },
    ],
    mistakes: [
      { ar: "تكديس نسب مئوية. النسب لا تُجمع، والعمود الناتج بلا معنى.", en: "Stacking percentages. Ratios do not add, and the resulting bar is meaningless." },
      { ar: "ترتيب الشرائح عشوائيًا بين الأعمدة، فيستحيل تتبع شريحة عبر المحور.", en: "Ordering segments inconsistently across bars, making a segment impossible to track along the axis." },
    ],
    demo: "stackedBar",
    domains: ["hr", "retail", "finance", "customer-service"],
  },
  {
    id: "scatter-quadrant",
    slug: "scatter-quadrant",
    name: { ar: "الرسم المبعثر الرباعي", en: "Quadrant Scatterplot" },
    family: "distribution",
    icon: "ScatterChart",
    question: { ar: "كيف تتوزع العناصر على بعدين معًا وأين تقع المجموعات؟", en: "How do items sit across two dimensions at once, and where do the clusters fall?" },
    useWhen: [
      { ar: "عند الحاجة لقرار يعتمد على مؤشرين لا يُقرأ أحدهما بدون الآخر: CAC مقابل LTV، الشعبية مقابل الهامش.", en: "When a decision depends on two metrics that cannot be read separately: CAC against LTV, popularity against margin." },
      { ar: "عند البحث عن القيم المتطرفة والاستثناءات.", en: "When hunting for outliers and exceptions." },
    ],
    avoidWhen: [
      { ar: "عند وجود عدد قليل جدًا من النقاط، فالجدول أوضح.", en: "With very few points, where a table is clearer." },
      { ar: "عندما يكون أحد البعدين زمنًا، فالرسم الخطي أنسب.", en: "When one dimension is time, where a line chart fits better." },
    ],
    dataNeeds: [
      { ar: "مقياسان مستقلان بنفس حبيبية العنصر، ومقياس ثالث اختياري للحجم.", en: "Two independent measures at the same item grain, plus an optional third for size." },
    ],
    fields: [
      { slot: "X / Y", expects: { ar: "المقياسان المقارنان", en: "The two compared measures" } },
      { slot: "Details", expects: { ar: "العنصر الذي تمثله كل نقطة", en: "The item each point represents" } },
      { slot: "Size", expects: { ar: "مقياس الأهمية مثل الإيراد", en: "A materiality measure such as revenue" } },
    ],
    interactions: [
      { ar: "خطوط مرجعية عند المتوسط أو عتبة التعادل لتكوين الأرباع.", en: "Reference lines at the mean or break-even to form the quadrants." },
      { ar: "تنقيب من نقطة واحدة إلى تفاصيل العنصر.", en: "Drill from a single point into the item detail." },
    ],
    mistakes: [
      { ar: "وضع خطوط الأرباع عند قيم اعتباطية بدل قيم ذات معنى تجاري.", en: "Placing quadrant lines at arbitrary values instead of commercially meaningful ones." },
      { ar: "تجاهل حجم العنصر، فتبدو نقطة تمثل 0.1% من الإيراد بنفس أهمية نقطة تمثل 30%.", en: "Ignoring item size, so a point worth 0.1% of revenue looks as important as one worth 30%." },
      { ar: "تسمية كل النقاط، فتتداخل النصوص ويضيع الشكل.", en: "Labelling every point, causing overlap that destroys the chart." },
    ],
    demo: "scatterQuadrant",
    domains: ["marketing", "retail", "fnb", "supply-chain"],
  },
  {
    id: "funnel",
    slug: "funnel",
    name: { ar: "الرسم القمعي", en: "Funnel" },
    family: "flow",
    icon: "Filter",
    question: { ar: "أين يتسرب الناس بين مراحل عملية متسلسلة؟", en: "Where do people drop out between stages of a sequential process?" },
    useWhen: [
      { ar: "عندما تكون المراحل متسلسلة فعلًا ولا يمكن تخطيها.", en: "When stages are genuinely sequential and cannot be skipped." },
      { ar: "عندما يكون كل من في مرحلة قد مرّ بالمرحلة التي قبلها.", en: "When everyone in a stage necessarily passed through the previous one." },
    ],
    avoidWhen: [
      { ar: "عندما يمكن دخول العملية من أي مرحلة، فالقمع يفترض تسلسلًا غير موجود.", en: "When the process can be entered at any stage, since a funnel assumes a sequence that does not exist." },
      { ar: "عندما تكون المراحل غير متناقصة، فالشكل نفسه يكذب.", en: "When stage counts do not decrease monotonically, in which case the form itself lies." },
    ],
    dataNeeds: [
      { ar: "جدول أحداث بحبيبية الكيان والمرحلة والطابع الزمني.", en: "An event table at entity, stage, and timestamp grain." },
    ],
    fields: [
      { slot: "Stage", expects: { ar: "المرحلة مرتبة بترتيب العملية لا بالحجم", en: "The stage, ordered by the process rather than by size" } },
      { slot: "Value", expects: { ar: "عدد فريد للكيانات في كل مرحلة", en: "A distinct count of entities at each stage" } },
    ],
    interactions: [
      { ar: "تقسيم القمع حسب المصدر أو الشريحة لكشف اختلاف السلوك.", en: "Segmenting the funnel by source or cohort to expose behavioural differences." },
    ],
    mistakes: [
      { ar: "عرض نسبة التحويل الكلية فقط دون معدل الانتقال بين كل مرحلتين، وهو الرقم القابل للتصرف.", en: "Showing only end-to-end conversion without stage-to-stage rates, which are the actionable numbers." },
      { ar: "تجاهل الزمن بين المراحل. قمع يبدو سليمًا قد يخفي أسابيع من الركود في مرحلة واحدة.", en: "Ignoring time between stages. A healthy-looking funnel can hide weeks of stalling in one stage." },
      { ar: "عد الأحداث بدل الكيانات الفريدة، فتتجاوز مرحلة ما المرحلة التي قبلها.", en: "Counting events instead of distinct entities, letting a stage exceed the one before it." },
    ],
    demo: "funnel",
    domains: ["marketing", "retail", "it-saas", "banking"],
  },
  {
    id: "decomposition-tree",
    slug: "decomposition-tree",
    name: { ar: "شجرة التفكيك", en: "Decomposition Tree" },
    family: "distribution",
    icon: "GitBranch",
    question: { ar: "ما الأبعاد التي تفسّر هذا الرقم، ومن أين جاء أكبر جزء منه؟", en: "Which dimensions explain this number, and where does most of it come from?" },
    useWhen: [
      { ar: "في التحليل الاستكشافي عندما لا يكون مسار التحقيق معروفًا مسبقًا.", en: "In exploratory analysis when the investigation path is not known in advance." },
      { ar: "عند الوصول إلى جذر مشكلة عبر عدة أبعاد متداخلة.", en: "When reaching the root of a problem across several interacting dimensions." },
    ],
    avoidWhen: [
      { ar: "في تقرير موزّع على قراء لا يتفاعلون معه، فالشجرة بلا تفاعل بلا قيمة.", en: "In a report distributed to readers who will not interact with it, since a static tree adds nothing." },
      { ar: "مع مقياس غير تجميعي مثل النسب أو الوسيط، لأن التفكيك يفترض أن الأجزاء تكوّن الكل.", en: "With a non-additive measure such as a ratio or median, because decomposition assumes parts compose the whole." },
    ],
    dataNeeds: [
      { ar: "مقياس تجميعي وعدة أبعاد نظيفة منخفضة التمايز.", en: "An additive measure and several clean, low-cardinality dimensions." },
    ],
    fields: [
      { slot: "Analyze", expects: { ar: "المقياس المراد تفكيكه", en: "The measure to decompose" } },
      { slot: "Explain by", expects: { ar: "الأبعاد المتاحة للتفكيك", en: "The dimensions available for the split" } },
    ],
    interactions: [
      { ar: "التفكيك بالقيمة العليا للوصول السريع إلى أكبر مساهم.", en: "High-value splits to reach the largest contributor quickly." },
    ],
    mistakes: [
      { ar: "استخدامها مع نسبة مئوية، فيبدو التفكيك منطقيًا بينما النتائج غير صحيحة حسابيًا.", en: "Using it with a percentage, where the split looks sensible while being arithmetically wrong." },
      { ar: "إتاحة أبعاد عالية التمايز مثل معرّف العميل، فتصبح الشجرة قائمة لا تحليلًا.", en: "Exposing high-cardinality dimensions such as customer id, turning the tree into a list rather than an analysis." },
    ],
    demo: "decompositionTree",
    domains: ["manufacturing", "customer-service", "retail", "healthcare"],
  },
  {
    id: "pl-matrix",
    slug: "matrix-with-conditional-formatting",
    name: { ar: "المصفوفة مع التنسيق الشرطي", en: "Matrix with Conditional Formatting" },
    family: "table",
    icon: "Table2",
    question: { ar: "ما القيم الدقيقة عبر بعدين، وأين تقع الاستثناءات؟", en: "What are the exact values across two dimensions, and where are the exceptions?" },
    useWhen: [
      { ar: "عندما يحتاج القارئ القيم الدقيقة لا الانطباع البصري، كما في قائمة الدخل.", en: "When the reader needs exact values rather than a visual impression, as in a P&L." },
      { ar: "عند وجود هرمية طبيعية للتنقيب مثل شجرة الحسابات أو فئة/صنف.", en: "When a natural drill hierarchy exists, such as a chart of accounts or category/item." },
      { ar: "عندما يكون عدد الصفوف كبيرًا ولا يصلح معه رسم بياني.", en: "When row counts are high enough that a chart would not work." },
    ],
    avoidWhen: [
      { ar: "عندما يكون السؤال عن اتجاه أو نمط، فالرسم البياني أسرع في الإجابة.", en: "When the question is about a trend or pattern, where a chart answers faster." },
    ],
    dataNeeds: [
      { ar: "أبعاد صفوف وأعمدة، ومقاييس مكتوبة كمقاييس لا كأعمدة محسوبة حتى تستجيب للسياق.", en: "Row and column dimensions, with measures written as measures rather than calculated columns so they respond to context." },
    ],
    fields: [
      { slot: "Rows", expects: { ar: "البُعد الهرمي", en: "The hierarchical dimension" } },
      { slot: "Columns", expects: { ar: "بُعد قصير مثل الفترة أو السيناريو", en: "A short dimension such as period or scenario" } },
      { slot: "Values", expects: { ar: "المقاييس مرتبة بترتيب القراءة المنطقي", en: "Measures ordered in a logical reading sequence" } },
    ],
    interactions: [
      { ar: "التوسيع والطي عبر الهرمية.", en: "Expanding and collapsing through the hierarchy." },
      { ar: "التنقيب العابر إلى تفاصيل الصف.", en: "Drill-through to row-level detail." },
    ],
    mistakes: [
      { ar: "تلوين كل خلية، فيختفي الاستثناء وسط الضجيج. التنسيق الشرطي يبرز الاستثناء لا يزخرف الجدول.", en: "Colouring every cell, so the exception disappears into noise. Conditional formatting highlights exceptions; it does not decorate." },
      { ar: "الاعتماد على اللون وحده للدلالة. أضف أيقونة أو إشارة نصية ليقرأها من لا يميّز الألوان.", en: "Relying on colour alone. Add an icon or textual sign so colour-blind readers can read it too." },
      { ar: "عرض مجاميع لمؤشرات نسبية مجمّعة بالجمع بدل إعادة الحساب، فيظهر إجمالي خاطئ في صف المجموع.", en: "Showing totals for ratio metrics by summing instead of recomputing, producing a wrong grand total row." },
    ],
    demo: "plMatrix",
    domains: ["finance", "retail", "banking", "it-saas", "hr", "healthcare"],
  },
  {
    id: "inventory-aging-matrix",
    slug: "inventory-aging-matrix",
    name: { ar: "مصفوفة أعمار المخزون", en: "Inventory Ageing Matrix" },
    family: "table",
    icon: "Layers",
    question: { ar: "كم من المخزون أو الذمم يقع في كل شريحة عمرية، وأين يتركز الخطر؟", en: "How much stock or receivables sits in each age band, and where is the risk concentrated?" },
    useWhen: [
      { ar: "عندما يكون عمر الرصيد هو ما يحدد خطورته: مخزون راكد، ذمم متأخرة، تذاكر معلقة.", en: "When the age of a balance determines its risk: dead stock, overdue receivables, stale tickets." },
      { ar: "عندما يخفي المتوسط توزيعًا خطيرًا في الذيل.", en: "When an average hides a dangerous tail in the distribution." },
    ],
    avoidWhen: [
      { ar: "عندما لا يكون للعمر معنى اقتصادي، كما في السلع غير القابلة للتقادم مع طلب مستقر.", en: "When age carries no economic meaning, as with non-perishable goods under stable demand." },
    ],
    dataNeeds: [
      { ar: "لقطة أرصدة بتاريخ مرجعي، وجدول شرائح عمرية منفصل يتيح تعديل الحدود دون تعديل البيانات.", en: "A balance snapshot with a reference date, and a separate age-band table so thresholds change without touching the data." },
    ],
    fields: [
      { slot: "Rows", expects: { ar: "الصنف أو العميل أو الفئة", en: "Item, customer, or category" } },
      { slot: "Columns", expects: { ar: "الشرائح العمرية مرتبة منطقيًا لا أبجديًا", en: "Age bands, ordered logically rather than alphabetically" } },
      { slot: "Values", expects: { ar: "القيمة والكمية معًا", en: "Both value and quantity" } },
    ],
    interactions: [
      { ar: "تنقيب من خلية إلى الأرصدة المكوّنة لها.", en: "Drill from a cell into the balances composing it." },
    ],
    mistakes: [
      { ar: "ترتيب الشرائح أبجديًا، فتظهر «120+ يوم» قبل «31-60 يومًا». استخدم عمود ترتيب رقمي.", en: "Sorting bands alphabetically, so 120+ days appears before 31-60. Use a numeric sort column." },
      { ar: "عرض الكمية فقط. صنف رخيص كثير العدد يبدو أخطر من صنف باهظ راكد.", en: "Showing quantity only. A cheap, numerous item then looks riskier than an expensive dead one." },
      { ar: "حساب العمر من تاريخ آخر حركة بدل تاريخ الاستلام، فيظهر المخزون الراكد أصغر عمرًا بعد كل جرد.", en: "Computing age from last movement instead of receipt date, making dead stock look younger after every count." },
    ],
    demo: "agingMatrix",
    domains: ["supply-chain", "finance", "banking", "retail"],
  },
  {
    id: "heatmap-calendar",
    slug: "heatmap-calendar",
    name: { ar: "الخريطة الحرارية الزمنية", en: "Time Heatmap" },
    family: "distribution",
    icon: "Grid3x3",
    question: { ar: "كيف يتوزع النشاط عبر أيام الأسبوع وساعات اليوم؟", en: "How does activity distribute across weekdays and hours?" },
    useWhen: [
      { ar: "عند تخطيط الموارد والورديات وفق الذروة الفعلية.", en: "When planning resources and shifts against real peaks." },
      { ar: "عند البحث عن أنماط دورية يخفيها الإجمالي اليومي.", en: "When looking for cyclical patterns that a daily total hides." },
    ],
    avoidWhen: [
      { ar: "عندما تكون الكثافة منخفضة جدًا، فتصبح الخلايا فارغة وعشوائية المظهر.", en: "When density is very low, leaving cells empty and the grid looking random." },
    ],
    dataNeeds: [
      { ar: "أحداث بطابع زمني دقيق، وأعمدة مشتقة لليوم والساعة في جدول التاريخ أو الوقت.", en: "Events with precise timestamps and derived weekday and hour columns in the date or time table." },
    ],
    fields: [
      { slot: "Rows", expects: { ar: "يوم الأسبوع مرتبًا بترتيبه الطبيعي", en: "Weekday in its natural order" } },
      { slot: "Columns", expects: { ar: "ساعة اليوم", en: "Hour of day" } },
      { slot: "Values", expects: { ar: "مقياس الكثافة", en: "The intensity measure" } },
    ],
    interactions: [
      { ar: "الترشيح المتقاطع لعرض تفاصيل الخلية المختارة.", en: "Cross-filtering to show details for the selected cell." },
    ],
    mistakes: [
      { ar: "استخدام تدرج لوني غير متسلسل، فيستحيل ترتيب الشدة بصريًا.", en: "Using a non-sequential colour ramp, making intensity impossible to order visually." },
      { ar: "تجاهل المنطقة الزمنية عند تجميع بيانات من مواقع متعددة.", en: "Ignoring time zone when combining data across locations." },
    ],
    demo: "heatmap",
    domains: ["customer-service", "fnb", "healthcare", "retail"],
  },
  {
    id: "exception-table",
    slug: "exception-monitoring",
    name: { ar: "جدول مراقبة الاستثناءات", en: "Operational Exception Table" },
    family: "monitoring",
    icon: "AlertTriangle",
    question: { ar: "ما الحالات التي تحتاج تدخلًا الآن؟", en: "Which cases need intervention right now?" },
    useWhen: [
      { ar: "عندما يكون المخرج المطلوب قائمة عمل لا رقمًا تلخيصيًا.", en: "When the required output is a work list rather than a summary number." },
      { ar: "في المتابعة التشغيلية اليومية: طلبات متأخرة، تذاكر تجاوزت SLA، أصناف نفدت.", en: "In daily operational monitoring: late orders, SLA breaches, out-of-stock items." },
    ],
    avoidWhen: [
      { ar: "في لوحة تنفيذية تحتاج ملخصًا لا تفاصيل.", en: "On an executive dashboard that needs a summary, not detail." },
      { ar: "عندما تكون الاستثناءات بالمئات يوميًا، فالمشكلة في العتبة لا في العرض.", en: "When exceptions number in the hundreds daily, which is a threshold problem rather than a display one." },
    ],
    dataNeeds: [
      { ar: "بيانات بحبيبية السطر مع مقياس يحدد الاستثناء وعتبة مخزّنة في جدول إعدادات.", en: "Row-grain data with a measure defining the exception and a threshold stored in a settings table." },
    ],
    fields: [
      { slot: "Rows", expects: { ar: "الكيان المطلوب التصرف حياله", en: "The entity to act on" } },
      { slot: "Context", expects: { ar: "الأعمدة التي يحتاجها المستخدم ليقرر دون فتح نظام آخر", en: "The columns the user needs to decide without opening another system" } },
      { slot: "Severity", expects: { ar: "مقياس يرتب الأولوية", en: "A measure that ranks priority" } },
    ],
    interactions: [
      { ar: "الترتيب الافتراضي بالخطورة لا بالتاريخ.", en: "Default sorting by severity rather than by date." },
      { ar: "تصدير القائمة أو ربطها بنظام التنفيذ.", en: "Exporting the list or linking it to the system of action." },
    ],
    mistakes: [
      { ar: "عرض كل الصفوف بدل الاستثناءات فقط، فيصبح الجدول تقريرًا لا أداة.", en: "Showing all rows instead of only exceptions, turning the table into a report rather than a tool." },
      { ar: "غياب سبب الاستثناء، فيضطر المستخدم للتحقيق يدويًا في كل سطر.", en: "Omitting the exception reason, forcing manual investigation of every row." },
      { ar: "ترميز العتبة داخل المقياس بدل جدول إعدادات، فيحتاج كل تعديل نشرًا جديدًا.", en: "Hard-coding the threshold in the measure rather than a settings table, so every change needs a redeploy." },
    ],
    demo: "exceptionTable",
    domains: ["supply-chain", "customer-service", "manufacturing", "project-management", "finance"],
  },
  {
    id: "backlog-analysis",
    slug: "backlog-and-order-analysis",
    name: { ar: "تحليل المتراكم والطلبات", en: "Backlog & Order Analysis" },
    family: "monitoring",
    icon: "Inbox",
    question: { ar: "كيف يتطور المتراكم، وهل معدل الوارد يتجاوز معدل المعالجة؟", en: "How is the backlog evolving, and is the arrival rate outpacing the clearance rate?" },
    useWhen: [
      { ar: "عند متابعة رصيد مفتوح يتغير بالوارد والصادر: تذاكر، طلبات، مهام.", en: "When tracking an open balance driven by arrivals and departures: tickets, orders, tasks." },
      { ar: "عند الحاجة للتنبؤ بموعد تصفية المتراكم بالمعدل الحالي.", en: "When forecasting when the backlog clears at the current rate." },
    ],
    avoidWhen: [
      { ar: "عندما يكون المتراكم صغيرًا ومستقرًا، فبطاقة واحدة تكفي.", en: "When the backlog is small and stable, where a single card suffices." },
    ],
    dataNeeds: [
      { ar: "جدول أحداث بتاريخ الفتح والإغلاق، أو لقطة يومية للرصيد المفتوح.", en: "An event table with open and close dates, or a daily snapshot of the open balance." },
    ],
    fields: [
      { slot: "Axis", expects: { ar: "التاريخ", en: "Date" } },
      { slot: "Values", expects: { ar: "الوارد والمُغلق كأعمدة، والرصيد المتراكم كخط", en: "Arrivals and closures as columns, with the running balance as a line" } },
    ],
    interactions: [
      { ar: "تنقيب من نقطة إلى البنود المفتوحة في ذلك التاريخ.", en: "Drill from a point to the items open on that date." },
    ],
    mistakes: [
      { ar: "جمع رصيد المتراكم عبر الأيام. هو لقطة شبه تجميعية لا يُجمع إطلاقًا.", en: "Summing the backlog balance across days. It is a semi-additive snapshot that must never be summed." },
      { ar: "عرض الرصيد دون معدلي الوارد والمعالجة، فلا يعرف القارئ إن كان الوضع يتحسن أم يسوء.", en: "Showing the balance without arrival and clearance rates, leaving the reader unable to tell improvement from deterioration." },
      { ar: "خلط البنود المعاد فتحها مع الواردة الجديدة، فيبدو الطلب أعلى مما هو عليه.", en: "Mixing reopened items with genuinely new arrivals, making demand look higher than it is." },
    ],
    demo: "backlog",
    domains: ["customer-service", "project-management", "it-saas", "supply-chain"],
  },
];

export const patternById = new Map(patterns.map((p) => [p.id, p]));
export const patternBySlug = new Map(patterns.map((p) => [p.slug, p]));

export function getPattern(slug: string): VizPattern | undefined {
  return patternBySlug.get(slug);
}

/** Resolve pattern ids, skipping any that do not exist yet. */
export function resolvePatterns(ids: readonly string[]): VizPattern[] {
  return ids
    .map((id) => patternById.get(id))
    .filter((p): p is VizPattern => p !== undefined);
}
