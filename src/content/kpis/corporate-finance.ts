import type { Kpi } from "../types";

export const corporateFinanceKpis: Kpi[] = [
  /* ------------------------------------------------------------------ */
  /* Revenue Growth Rate                                                 */
  /* ------------------------------------------------------------------ */
  {
    id: "revenue-growth-rate",
    slug: "revenue-growth-rate",
    name: "Revenue Growth Rate",
    nameAr: "معدل نمو الإيرادات",
    domains: ["finance", "retail", "it-saas", "fnb"],
    category: { ar: "النمو", en: "Growth" },
    difficulty: "beginner",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة التغير في الإيرادات بين الفترة الحالية وفترة سابقة قابلة للمقارنة، كأن يُقارن الربع الحالي بالربع نفسه من العام الماضي. يجيب عن سؤال بسيط: بأي سرعة تكبر المبيعات أو تنكمش؟",
      en: "The percentage change in revenue between the current period and a comparable prior period, such as this quarter against the same quarter last year. It answers a simple question: how fast are sales growing or shrinking?",
    },
    whyItMatters: {
      ar: "الإيراد المطلق وحده لا يكشف الاتجاه؛ مليون في الشهر قد يكون إنجازًا أو تراجعًا بحسب ما سبقه. معدل النمو يضع الرقم في سياقه الزمني، ويُستخدم لتقييم الأداء التجاري حسب المنتج والعميل والمنطقة، ولبناء التوقعات والموازنات.",
      en: "Absolute revenue alone does not reveal direction; a million in a month may be an achievement or a decline depending on what came before. The growth rate puts the number in its time context and is used to assess commercial performance by product, customer, and region, and to build forecasts and budgets.",
    },
    interpretation: {
      ar: "نمو 15% يعني أن الفترة الحالية حققت 115 وحدة مقابل كل 100 وحدة في الفترة المقارنة. لكن النمو نسبي بطبيعته: 15% على قاعدة صغيرة أسهل بكثير من 15% على قاعدة كبيرة، ونمو ناتج عن رفع الأسعار يختلف في معناه عن نمو ناتج عن زيادة الكميات أو العملاء.",
      en: "15% growth means the current period produced 115 units for every 100 in the comparison period. But growth is relative by nature: 15% on a small base is far easier than 15% on a large one, and growth driven by price increases means something different from growth driven by volume or new customers.",
    },
    formula: "Revenue Growth % = (Current Period Revenue - Comparable Prior Period Revenue) / Comparable Prior Period Revenue x 100",
    numerator: {
      ar: "الفرق بين إيراد الفترة الحالية وإيراد الفترة المقارنة، بنفس تعريف الإيراد (صافٍ بعد الخصومات والمرتجعات) وبنفس المعالجة المحاسبية في الفترتين.",
      en: "The difference between current-period revenue and comparison-period revenue, using the same revenue definition (net of discounts and returns) and the same accounting treatment in both periods.",
    },
    denominator: {
      ar: "إيراد الفترة المقارنة السابقة. يجب أن يكون موجبًا؛ إن كان صفرًا أو سالبًا فالنسبة بلا معنى ويجب إظهارها فارغة أو بتسمية صريحة.",
      en: "Revenue of the comparable prior period. It must be positive; if it is zero or negative the ratio is meaningless and must be shown blank or with an explicit label.",
    },
    timeGrain: {
      ar: "يُحسب لأي فترة (شهر، ربع، سنة، من بداية السنة حتى تاريخه) بشرط أن تكون الفترتان متماثلتين في الطول والتقويم. المقارنة السنوية (الشهر نفسه من العام الماضي) تزيل أثر الموسمية، بينما المقارنة الشهرية المتتالية تتأثر بها بشدة.",
      en: "Computable for any period (month, quarter, year, year-to-date) provided both periods match in length and calendar. Year-over-year comparison (same month last year) removes seasonality, while month-over-month comparison is heavily affected by it.",
    },
    direction: {
      rising: {
        ar: "ارتفاع المعدل يعني تسارع نمو الإيرادات، وهو إيجابي في العادة إن لم يكن على حساب الهامش.",
        en: "A rising rate means revenue growth is accelerating, normally positive if it does not come at the expense of margin.",
      },
      falling: {
        ar: "انخفاض المعدل يعني تباطؤ النمو، وقيمته السالبة تعني انكماشًا فعليًا في الإيرادات.",
        en: "A falling rate means growth is slowing, and a negative value means revenue actually contracted.",
      },
      caveat: {
        ar: "النمو المشترى بخصومات كبيرة أو بعملاء غير مربحين قد يرفع المعدل ويخفض الربح. كما أن فترة مقارنة ضعيفة استثنائيًا (أثر الأساس) تضخّم النمو دون تحسن حقيقي. اقرأه دائمًا بجانب الهامش والأرقام المطلقة.",
        en: "Growth bought with heavy discounts or unprofitable customers can lift the rate while cutting profit. An unusually weak comparison period (base effect) also inflates growth without real improvement. Always read it beside margin and the absolute figures.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "إيراد الفترة السابقة المقارنة", en: "Comparable prior-period revenue" }, value: "200,000" },
        { label: { ar: "إيراد الفترة الحالية", en: "Current-period revenue" }, value: "230,000" },
      ],
      steps: [
        { label: { ar: "التغير المطلق", en: "Absolute change" }, expression: "230,000 - 200,000 = 30,000" },
        { label: { ar: "معدل النمو", en: "Growth rate" }, expression: "30,000 ÷ 200,000 × 100 = 15%" },
      ],
      result: { label: { ar: "معدل نمو الإيرادات", en: "Revenue growth rate" }, value: "15%" },
      reading: {
        ar: "نمت الإيرادات 30,000 أي 15%. قبل الاحتفال يجب السؤال: هل الفترتان متطابقتان في عدد أيام العمل؟ وهل جاء النمو من الكميات أم من رفع الأسعار؟ وهل تغيّرت سياسة الاعتراف بالإيراد بين الفترتين؟",
        en: "Revenue grew by 30,000, or 15%. Before celebrating, ask: do both periods have the same number of trading days? Did growth come from volume or from price increases? Did the revenue recognition policy change between the periods?",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "النمو السنوي مع معالجة الأساس الصفري أو السالب", en: "Year-over-year growth with zero or negative base handling" },
        code: `Net Revenue :=
SUM ( 'Sales'[NetAmount] )

-- Same dates shifted back one year. DATEADD keeps the period shape
-- (month, quarter, YTD selection) of the current filter context.
Net Revenue PY :=
CALCULATE (
    [Net Revenue],
    DATEADD ( 'Date'[Date], -1, YEAR )
)

Revenue Change :=
[Net Revenue] - [Net Revenue PY]

-- A growth rate on a zero or negative base is meaningless, so it is
-- returned as BLANK instead of a huge or sign-flipped percentage.
Revenue Growth % :=
VAR CurrentRevenue = [Net Revenue]
VAR PriorRevenue = [Net Revenue PY]
RETURN
    IF (
        PriorRevenue > 0 && NOT ISBLANK ( CurrentRevenue ),
        DIVIDE ( CurrentRevenue - PriorRevenue, PriorRevenue )
    )`,
        assumptions: [
          {
            ar: "جدول 'Date' جدول تقويم متصل بلا فجوات، ومُعلَّم كجدول تاريخ، ومرتبط بـ 'Sales'[InvoiceDate] بعلاقة واحد إلى متعدد. دوال الذكاء الزمني مثل DATEADD تفشل أو تعطي نتائج خاطئة بدون ذلك.",
            en: "'Date' is a contiguous calendar table with no gaps, marked as a date table, and related one-to-many to 'Sales'[InvoiceDate]. Time-intelligence functions such as DATEADD fail or return wrong results without this.",
          },
          {
            ar: "'Sales'[NetAmount] صافٍ بعد الخصومات والمرتجعات وبعملة تقرير موحدة. إن كانت هناك عملات متعددة فيجب التحويل بسعر متسق في الفترتين، وإلا اختلط أثر الصرف بالنمو الحقيقي.",
            en: "'Sales'[NetAmount] is net of discounts and returns and in a single reporting currency. With multiple currencies, conversion must use a consistent rate across both periods, or FX effects mix with real growth.",
          },
          {
            ar: "إن كانت الفترة الحالية غير مكتملة (الشهر الجاري مثلًا) فالمقارنة مع شهر كامل من العام الماضي تُظهر انكماشًا زائفًا. قيّد جدول التاريخ بآخر تاريخ مكتمل أو قارن حتى التاريخ نفسه.",
            en: "If the current period is incomplete (the running month, for example), comparing it with a full month last year shows a false decline. Restrict the date table to the last complete date or compare to the same day.",
          },
          {
            ar: "الأساس الصفري أو السالب يُعاد فارغًا عمدًا؛ يمكن عرض تسمية مثل «جديد» أو «غير قابل للقياس» في مقياس نصي منفصل.",
            en: "A zero or negative base returns BLANK on purpose; a label such as 'New' or 'n/m' can be shown by a separate text measure.",
          },
        ],
        requires: ["Sales[NetAmount]", "Sales[InvoiceDate]", "Date[Date]"],
      },
    ],
    model: [
      {
        table: "Sales",
        grain: { ar: "سطر فاتورة واحد", en: "One invoice line" },
        columns: ["SalesLineId", "InvoiceDate", "CustomerId", "ProductId", "RegionId", "NetAmount"],
        role: { ar: "مصدر الإيراد في الفترتين", en: "Source of revenue in both periods" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "Year", "Quarter", "MonthKey", "FiscalYear", "IsComplete"],
        role: {
          ar: "جدول تاريخ معلَّم ومرتبط بتاريخ الفاتورة، ويُمكّن إزاحة الفترة سنة للخلف",
          en: "Marked date table related to invoice date; enables shifting the period back one year",
        },
      },
      {
        table: "Product / Customer / Region",
        grain: { ar: "صف واحد لكل عضو في البُعد", en: "One row per dimension member" },
        columns: ["ProductId", "CategoryName", "CustomerId", "Segment", "RegionId", "RegionName"],
        role: { ar: "تفكيك النمو لمعرفة مصدره", en: "Breaks growth down to show where it came from" },
      },
    ],
    visuals: [
      {
        pattern: "period-over-period",
        why: {
          ar: "بطاقات الفترة الحالية مقابل السابقة مع خط الاتجاه الشهري هي العرض الذي يصفه المرجع مباشرة، وتُظهر الرقم المطلق والنسبة معًا.",
          en: "Current-versus-prior cards with a monthly trend line are exactly the view the reference describes, and they show the absolute figure and the rate together.",
        },
      },
      {
        pattern: "decomposition-tree",
        why: {
          ar: "يفكك التغير المطلق في الإيراد حسب المنتج والعميل والمنطقة، فيتضح إن كان النمو واسع القاعدة أم معتمدًا على عميل واحد كبير.",
          en: "Breaks the absolute revenue change down by product, customer, and region, revealing whether growth is broad-based or dependent on one large customer.",
        },
      },
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "عرض النمو بجانب الهامش الإجمالي يمنع الاحتفاء بنمو اشتُري على حساب الربحية.",
          en: "Showing growth beside gross margin prevents celebrating growth that was bought at the expense of profitability.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "مقارنة فترات غير متماثلة: شهر جارٍ غير مكتمل مقابل شهر كامل، أو شهر فيه عطلة مقابل شهر بلا عطلة، أو سنة كبيسة. تأكد من تطابق الفترتين قبل قراءة النسبة.",
        en: "Comparing periods that do not match: an incomplete running month against a full one, a month with a holiday against one without, or a leap year. Make sure both periods align before reading the rate.",
      },
      {
        ar: "تجاهل الأساس الصفري أو السالب: قسمة التغير على إيراد سابق صفري تعطي خطأ، وعلى إيراد سالب (بسبب مرتجعات كبيرة) تعطي نسبة معكوسة الإشارة. عالجهما صراحة.",
        en: "Ignoring a zero or negative base: dividing the change by zero prior revenue errors, and by negative prior revenue (from large returns) produces a sign-flipped rate. Handle both explicitly.",
      },
      {
        ar: "تغير المعالجة المحاسبية بين الفترتين، مثل تحويل الاعتراف بالإيراد من إجمالي إلى صافٍ، أو إعادة تصنيف حسابات. النمو الظاهر هنا محاسبي لا تجاري.",
        en: "A change in accounting treatment between periods, such as switching revenue recognition from gross to net, or reclassifying accounts. The apparent growth is accounting, not commercial.",
      },
      {
        ar: "حساب نمو الإجمالي كمتوسط لمعدلات نمو المنتجات أو المناطق. النمو الإجمالي يُحسب من مجموع الإيرادات في الفترتين، لأن المنتجات الكبيرة يجب أن تزن أكثر.",
        en: "Computing total growth as the average of product or region growth rates. Total growth is computed from summed revenue in both periods, because larger products must carry more weight.",
      },
      {
        ar: "خلط النمو العضوي بأثر الاستحواذ أو الصرف: شراء شركة أو تغير سعر العملة يرفع الإيراد دون تحسن في الأداء الأساسي. افصلهما عند المقارنة.",
        en: "Mixing organic growth with acquisition or FX effects: buying a company or a currency swing lifts revenue without any improvement in the underlying business. Separate them when comparing.",
      },
    ],
    variants: [
      {
        label: { ar: "النمو الشهري المتتالي", en: "Month-over-month growth" },
        formula: "(Revenue this month - Revenue previous month) / Revenue previous month",
        difference: {
          ar: "أسرع استجابة للتغيرات، لكنه يتأثر بالموسمية وعدد أيام الشهر، فقد يُظهر تراجعًا في فبراير لمجرد أنه أقصر.",
          en: "Reacts faster to change, but is affected by seasonality and month length, so it may show a decline in February simply because it is shorter.",
        },
      },
      {
        label: { ar: "معدل النمو السنوي المركب", en: "Compound Annual Growth Rate (CAGR)" },
        formula: "(Ending Revenue / Beginning Revenue) ^ (1 / Number of Years) - 1",
        difference: {
          ar: "يلخص النمو على عدة سنوات في معدل سنوي واحد متسق، ويتجاهل التذبذب بين البداية والنهاية.",
          en: "Summarizes growth over several years into one consistent annual rate, and ignores volatility between the start and the end.",
        },
      },
      {
        label: { ar: "النمو العضوي أو بنفس المتاجر", en: "Organic or like-for-like growth" },
        formula: "(Current Revenue - Prior Revenue) / Prior Revenue, for units present in both periods only",
        difference: {
          ar: "يستبعد الوحدات الجديدة أو المستحوذ عليها أو المغلقة (متاجر، شركات تابعة) ليقيس النمو من القاعدة نفسها فقط.",
          en: "Excludes new, acquired, or closed units (stores, subsidiaries) to measure growth from the same base only.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "معدلات النمو تتراكم ولا تُجمع: نمو 10% في سنتين متتاليتين يعطي 21% لا 20%، لأن (1.10 × 1.10) − 1 = 0.21.",
          en: "Growth rates compound rather than add: 10% growth in two consecutive years gives 21%, not 20%, because (1.10 x 1.10) - 1 = 0.21.",
        },
      },
      {
        kind: "mathematical",
        text: {
          ar: "الانكماش والتعافي غير متناظرين: بعد تراجع 10% يلزم نمو 11.1% تقريبًا للعودة إلى المستوى السابق، لأن القاعدة أصبحت أصغر.",
          en: "Decline and recovery are asymmetric: after a 10% fall, about 11.1% growth is needed to return to the previous level, because the base is now smaller.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "المقارنة بالفترة نفسها من العام السابق هي الطريقة الشائعة لإزالة أثر الموسمية في تقارير الإيراد.",
          en: "Comparing against the same period of the previous year is the common way to remove seasonality from revenue reporting.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "تعريف الإيراد المستخدم (إجمالي أو صافٍ، شامل أو مستبعد للإيرادات غير المتكررة) وتقويم المقارنة (ميلادي أو مالي) قرارات تحددها كل مؤسسة.",
          en: "The revenue definition used (gross or net, including or excluding non-recurring revenue) and the comparison calendar (calendar or fiscal) are decisions each organization makes.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (200,000 إلى 230,000) والتمرين من تأليفنا للتوضيح وليست معايير قطاعية.",
          en: "The example figures (200,000 to 230,000) and the exercise are invented for illustration and are not industry benchmarks.",
        },
      },
    ],
    related: ["gross-profit-margin", "net-sales", "arr", "aov"],
    exercise: {
      prompt: {
        ar: "إيراد الربع الأول من العام الماضي 450,000، وإيراد الربع الأول من هذا العام 405,000. احسب معدل النمو، ثم احسب معدل النمو المطلوب في الربع الأول من العام القادم للعودة إلى 450,000.",
        en: "Revenue in Q1 last year was 450,000 and in Q1 this year 405,000. Compute the growth rate, then compute the growth rate needed in Q1 next year to return to 450,000.",
      },
      hint: {
        ar: "في الخطوة الثانية القاعدة هي 405,000 لا 450,000.",
        en: "In the second step the base is 405,000, not 450,000.",
      },
      answer: {
        ar: "النمو = (405,000 − 450,000) ÷ 450,000 = −45,000 ÷ 450,000 = −10%. للعودة إلى 450,000 يلزم زيادة 45,000 على قاعدة 405,000: 45,000 ÷ 405,000 = 11.1%. التراجع 10% يحتاج نموًا أكبر من 10% للتعافي لأن القاعدة انكمشت.",
        en: "Growth = (405,000 - 450,000) ÷ 450,000 = -45,000 ÷ 450,000 = -10%. Returning to 450,000 needs 45,000 more on a 405,000 base: 45,000 ÷ 405,000 = 11.1%. A 10% decline needs more than 10% growth to recover because the base has shrunk.",
      },
    },
    references: [
      {
        title: "DATEADD function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/dateadd-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع إزاحة سياق التاريخ لحساب إيراد الفترة المقارنة، ومتطلبات جدول التاريخ.",
          en: "Reference for shifting the date context to compute comparison-period revenue, and its date-table requirements.",
        },
      },
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "القسمة الآمنة التي تعيد قيمة فارغة عند المقام الصفري.",
          en: "Safe division that returns BLANK when the denominator is zero.",
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* OPEX Variance                                                       */
  /* ------------------------------------------------------------------ */
  {
    id: "opex-variance",
    slug: "opex-variance",
    name: "Operating Expense (OPEX) Variance",
    nameAr: "انحراف المصروفات التشغيلية",
    domains: ["finance", "manufacturing", "healthcare", "fnb", "retail"],
    category: { ar: "الرقابة على الموازنة", en: "Budget control" },
    difficulty: "beginner",
    unit: { ar: "مبلغ بعملة التقرير (ونسبة مئوية اختياريًا)", en: "Amount in reporting currency (optionally a percentage)" },
    aggregation: "additive",
    definition: {
      ar: "الفرق بين المصروفات التشغيلية الفعلية والمصروفات المعتمدة في الموازنة لنفس الفترة ونفس الحسابات. يبيّن أين أنفقت المنشأة أكثر أو أقل مما خططت له.",
      en: "The difference between actual operating expenses and the budgeted operating expenses for the same period and the same accounts. It shows where the organization spent more or less than it planned.",
    },
    whyItMatters: {
      ar: "الموازنة التزام إداري، والانحراف هو أداة المساءلة عنه. رصد الانحرافات مبكرًا حسب القسم والحساب يسمح بتصحيح الإنفاق قبل نهاية السنة، ويحوّل مراجعة الأداء الشهرية من سرد أرقام إلى تفسير أسباب.",
      en: "A budget is a management commitment, and variance is the tool for holding people to it. Spotting variances early by department and account allows spending to be corrected before year end, and turns the monthly review from reading numbers into explaining causes.",
    },
    interpretation: {
      ar: "انحراف +10,000 في المصروفات يعني إنفاقًا يزيد 10,000 عن الموازنة، وهو غير مواتٍ لأن المصروف الأقل هو المفضل. لكن الانحراف المواتي ليس دائمًا خبرًا جيدًا: قد يعني تأجيل صيانة ضرورية أو توظيفًا متأخرًا سيُكلف لاحقًا.",
      en: "A +10,000 expense variance means spending 10,000 above budget, which is unfavorable because lower expense is preferred. But a favorable variance is not always good news: it may mean postponed essential maintenance or delayed hiring that will cost more later.",
    },
    formula: "OPEX Variance = Actual OPEX - Budget OPEX",
    numerator: {
      ar: "المصروفات التشغيلية الفعلية المرحّلة في دفتر الأستاذ للفترة، بعد القيود التسويية والمستحقات، ومصنفة بنفس دليل الحسابات المستخدم في الموازنة.",
      en: "Actual operating expenses posted to the general ledger for the period, after adjusting entries and accruals, classified with the same chart of accounts used in the budget.",
    },
    denominator: {
      ar: "لا مقام للانحراف المطلق. لنسبة الانحراف يكون المقام موازنة المصروفات التشغيلية لنفس الفترة والحسابات.",
      en: "Absolute variance has no denominator. For variance percentage the denominator is budget OPEX for the same period and accounts.",
    },
    timeGrain: {
      ar: "يُحسب عادة شهريًا ومن بداية السنة حتى تاريخه. الانحراف المطلق قابل للجمع عبر الأقسام والشهور، أما نسبة الانحراف فتُعاد حسابها من المجاميع في كل مستوى. إن كانت الموازنة شهرية فلا تُعرض على مستوى اليوم.",
      en: "Usually computed monthly and year-to-date. The absolute variance adds up across departments and months, while the variance percentage is recomputed from totals at every level. If the budget is monthly, do not show it at day level.",
    },
    direction: {
      rising: {
        ar: "ارتفاع الانحراف الموجب (بهذه الإشارة) يعني إنفاقًا متزايدًا فوق الموازنة، وهو غير مواتٍ.",
        en: "A rising positive variance (with this sign convention) means spending increasingly above budget, which is unfavorable.",
      },
      falling: {
        ar: "انخفاضه نحو الصفر أو ما دونه يعني إنفاقًا ضمن الموازنة أو أقل منها، وهو مواتٍ ظاهريًا.",
        en: "Falling toward zero or below means spending within or under budget, which is favorable on the surface.",
      },
      caveat: {
        ar: "اتجاه الإشارة اصطلاح يختلف بين التقارير: بعضها يحسب الموازنة ناقص الفعلي فيصبح الموجب مواتيًا. سمِّ الانحراف «مواتٍ/غير مواتٍ» صراحة ولا تعتمد على الإشارة وحدها. والانحراف المواتي قد يخفي تأخيرًا في التنفيذ لا وفرًا حقيقيًا.",
        en: "The sign direction is a convention that differs between reports: some compute budget minus actual, so positive becomes favorable. Label the variance favorable or unfavorable explicitly rather than relying on the sign. A favorable variance may hide delayed execution rather than a real saving.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "المصروفات التشغيلية الفعلية", en: "Actual OPEX" }, value: "110,000" },
        { label: { ar: "موازنة المصروفات التشغيلية", en: "Budget OPEX" }, value: "100,000" },
      ],
      steps: [
        { label: { ar: "الانحراف المطلق", en: "Absolute variance" }, expression: "110,000 - 100,000 = 10,000" },
        { label: { ar: "نسبة الانحراف", en: "Variance percentage" }, expression: "10,000 ÷ 100,000 × 100 = 10%" },
        { label: { ar: "التصنيف", en: "Classification" }, expression: "Actual > Budget → Unfavorable" },
      ],
      result: { label: { ar: "انحراف المصروفات التشغيلية", en: "OPEX variance" }, value: "10,000 unfavorable (+10%)" },
      reading: {
        ar: "أُنفق 10,000 فوق الموازنة، أي 10%. الخطوة التالية تفكيك الانحراف حسب القسم والحساب: هل هو بند واحد كبير غير متكرر، أم زيادة واسعة في عدة بنود؟ وهل هو انحراف توقيت (فاتورة سُجلت مبكرًا) أم انحراف دائم؟",
        en: "Spending was 10,000 over budget, or 10%. The next step is to break the variance down by department and account: is it one large non-recurring item, or a broad rise across many lines? Is it a timing variance (an invoice booked early) or a permanent one?",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "الانحراف المطلق والنسبي مع تصنيف مواتٍ/غير مواتٍ", en: "Absolute and percentage variance with a favorable/unfavorable label" },
        code: `Actual OPEX :=
CALCULATE (
    SUM ( 'GLActual'[Amount] ),
    'Account'[AccountClass] = "OPEX"
)

Budget OPEX :=
CALCULATE (
    SUM ( 'Budget'[Amount] ),
    'Account'[AccountClass] = "OPEX"
)

-- Convention used here: Actual - Budget, so positive = overspend.
OPEX Variance :=
[Actual OPEX] - [Budget OPEX]

OPEX Variance % :=
DIVIDE ( [OPEX Variance], [Budget OPEX] )

-- The label, not the sign, is what readers should rely on.
OPEX Variance Status :=
VAR Variance = [OPEX Variance]
RETURN
    SWITCH (
        TRUE (),
        ISBLANK ( Variance ), BLANK (),
        Variance > 0, "Unfavorable",
        Variance < 0, "Favorable",
        "On budget"
    )`,
        assumptions: [
          {
            ar: "'GLActual' و'Budget' جدولا حقائق منفصلان يشتركان في البُعدين 'Account' و'Date' (وأي بُعد آخر مثل مركز التكلفة). لا يُربط جدول الموازنة بجدول الفعلي مباشرة.",
            en: "'GLActual' and 'Budget' are separate fact tables sharing the 'Account' and 'Date' dimensions (and any other, such as cost center). The budget table is never joined directly to the actuals table.",
          },
          {
            ar: "المبالغ مخزنة بإشارة المصروف الطبيعية موجبة في الجدولين. إن كان دفتر الأستاذ يخزن المدين موجبًا والدائن سالبًا فتأكد أن إشارة المصروف متسقة بين الفعلي والموازنة.",
            en: "Amounts are stored with the natural expense sign as positive in both tables. If the ledger stores debits positive and credits negative, make sure the expense sign is consistent between actuals and budget.",
          },
          {
            ar: "الموازنة على مستوى الشهر ومرتبطة بجدول التاريخ عبر تاريخ أول يوم في الشهر. تقسيم الموازنة على الأيام يحتاج منطق توزيع صريح؛ وإلا فلا تعرض المقياس تحت مستوى الشهر.",
            en: "The budget is at month grain and related to the Date table through the first day of the month. Splitting it across days needs explicit phasing logic; otherwise do not show the measure below month level.",
          },
          {
            ar: "'Account'[AccountClass] يحدد ما يُعد مصروفًا تشغيليًا وفق دليل الحسابات المعتمد، ويُطبّق على الجدولين بنفس التعريف.",
            en: "'Account'[AccountClass] defines what counts as operating expense according to the approved chart of accounts, and applies the same definition to both tables.",
          },
        ],
        requires: ["GLActual[Amount]", "Budget[Amount]", "Account[AccountClass]", "Date[Date]"],
      },
    ],
    model: [
      {
        table: "GLActual",
        grain: { ar: "قيد واحد لكل حساب ومركز تكلفة وتاريخ ترحيل", en: "One posting per account, cost center, and posting date" },
        columns: ["AccountId", "CostCenterId", "PostingDate", "Amount", "DocumentType"],
        role: { ar: "مصدر المصروف الفعلي", en: "Source of actual expense" },
      },
      {
        table: "Budget",
        grain: { ar: "مبلغ واحد لكل حساب ومركز تكلفة وشهر وإصدار موازنة", en: "One amount per account, cost center, month, and budget version" },
        columns: ["AccountId", "CostCenterId", "MonthStartDate", "BudgetVersion", "Amount"],
        role: { ar: "مصدر الموازنة المعتمدة؛ يُرشَّح على إصدار واحد", en: "Source of the approved budget; filtered to a single version" },
      },
      {
        table: "Account",
        grain: { ar: "حساب واحد في دليل الحسابات", en: "One account in the chart of accounts" },
        columns: ["AccountId", "AccountName", "AccountClass", "AccountGroup"],
        role: { ar: "بُعد مشترك يحدد نطاق المصروفات التشغيلية ويسمح بالتفكيك", en: "Shared dimension defining the OPEX scope and enabling breakdown" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthStartDate", "FiscalYear", "FiscalMonth"],
        role: {
          ar: "بُعد مشترك يربط تاريخ الترحيل الفعلي وشهر الموازنة",
          en: "Shared dimension linking actual posting date and budget month",
        },
      },
    ],
    visuals: [
      {
        pattern: "pl-matrix",
        why: {
          ar: "مصفوفة الفعلي مقابل الموازنة حسب الحساب مع أعمدة للانحراف المطلق والنسبي هي العرض الذي يصفه المرجع، وتمنع قراءة النسبة بدون المبلغ.",
          en: "An actual-versus-budget matrix by account with absolute and percentage variance columns is the view the reference describes, and prevents reading the percentage without the amount.",
        },
      },
      {
        pattern: "variance-bar",
        why: {
          ar: "أعمدة الانحراف الملونة بمواتٍ/غير مواتٍ ومرتبة حسب الحجم تُظهر فورًا أين يتركز التجاوز.",
          en: "Variance bars colored favorable/unfavorable and sorted by size show immediately where the overspend is concentrated.",
        },
      },
      {
        pattern: "waterfall-variance",
        why: {
          ar: "جسر من الموازنة إلى الفعلي عبر الأقسام أو فئات المصروف يشرح كيف تشكّل الانحراف الإجمالي.",
          en: "A bridge from budget to actual across departments or expense groups explains how the total variance was built.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "الاعتماد على الإشارة دون تسمية: قارئ يرى «+10,000» لا يعرف إن كان خبرًا جيدًا أم سيئًا ما لم يُذكر الاصطلاح. اكتب «مواتٍ/غير مواتٍ» صراحة، وتذكّر أن المواتي في الإيراد عكس المواتي في المصروف.",
        en: "Relying on the sign without a label: a reader seeing '+10,000' cannot tell if it is good or bad unless the convention is stated. Write favorable/unfavorable explicitly, and remember that favorable for revenue is the opposite of favorable for expense.",
      },
      {
        ar: "مقارنة فترات أو حسابات غير متطابقة: فعلي من بداية السنة حتى تاريخه مقابل موازنة سنة كاملة، أو حسابات في الفعلي غير مخطط لها في الموازنة. قارن الفترة نفسها ونطاق الحسابات نفسه.",
        en: "Comparing mismatched periods or accounts: year-to-date actuals against a full-year budget, or actual accounts that were never budgeted. Compare the same period and the same account scope.",
      },
      {
        ar: "خلط إصدارات الموازنة: جدول يحتوي الموازنة الأصلية والمعدّلة والتوقع معًا سيُجمع كلها ما لم يُرشَّح على إصدار واحد، فتتضاعف الموازنة.",
        en: "Mixing budget versions: a table holding original budget, revised budget, and forecast together will sum them all unless filtered to one version, multiplying the budget.",
      },
      {
        ar: "انحرافات التوقيت: فاتورة سنوية سُجلت دفعة واحدة في شهر بينما وُزعت موازنتها على 12 شهرًا تُظهر تجاوزًا كبيرًا ثم وفرًا متتاليًا. قارن من بداية السنة حتى تاريخه أو وزّع الموازنة بنفس نمط الإنفاق.",
        en: "Timing variances: an annual invoice booked in one month while its budget is spread over 12 months shows a big overspend followed by a run of savings. Compare year-to-date, or phase the budget to match the spending pattern.",
      },
      {
        ar: "تجاهل المستحقات قبل الإقفال: مصروفات حدثت ولم تصل فواتيرها بعد تجعل الفعلي منخفضًا والانحراف مواتيًا زورًا حتى نهاية الشهر.",
        en: "Ignoring accruals before close: expenses incurred but not yet invoiced keep actuals low and the variance falsely favorable until month end.",
      },
    ],
    variants: [
      {
        label: { ar: "نسبة الانحراف", en: "Variance percentage" },
        formula: "(Actual OPEX - Budget OPEX) / Budget OPEX",
        difference: {
          ar: "تجعل الانحرافات قابلة للمقارنة بين أقسام مختلفة الحجم، لكنها تضخّم انحرافات البنود صغيرة الموازنة. اعرضها دائمًا بجانب المبلغ المطلق.",
          en: "Makes variances comparable between departments of different size, but exaggerates variances on small-budget lines. Always show it beside the absolute amount.",
        },
      },
      {
        label: { ar: "الانحراف مقابل الموازنة المرنة", en: "Flexed budget variance" },
        formula: "Actual OPEX - (Budget OPEX adjusted to actual activity volume)",
        difference: {
          ar: "يعدّل الجزء المتغير من الموازنة وفق حجم النشاط الفعلي، فيفصل أثر الحجم عن أثر الكفاءة. مصروف شحن أعلى من الموازنة بسبب مبيعات أعلى ليس تجاوزًا حقيقيًا.",
          en: "Adjusts the variable part of the budget to actual activity volume, separating the volume effect from the efficiency effect. Higher shipping expense caused by higher sales is not a real overspend.",
        },
      },
      {
        label: { ar: "الانحراف مقابل التوقع المحدّث", en: "Variance to forecast" },
        formula: "Actual OPEX - Latest Forecast OPEX",
        difference: {
          ar: "يقارن بآخر توقع معدّل بدل الموازنة الأصلية، فيقيس دقة التنبؤ القريب لا الالتزام بالخطة السنوية.",
          en: "Compares against the latest revised forecast rather than the original budget, measuring near-term forecast accuracy rather than adherence to the annual plan.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "الانحراف المطلق قابل للجمع: مجموع انحرافات الأقسام يساوي انحراف المنشأة، ومجموع انحرافات الشهور يساوي انحراف السنة. نسبة الانحراف لا تُجمع.",
          en: "The absolute variance is additive: department variances sum to the company variance, and monthly variances sum to the annual variance. The variance percentage does not add.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "في المصروفات يُعد الإنفاق فوق الموازنة غير مواتٍ والإنفاق دونها مواتيًا، وهو عكس الاصطلاح في الإيرادات.",
          en: "For expenses, spending above budget is unfavorable and below it favorable, the reverse of the revenue convention.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "اتجاه الإشارة (الفعلي ناقص الموازنة أو العكس)، وحدود الأهمية النسبية التي تستوجب تفسيرًا، وما يُصنف مصروفًا تشغيليًا، كلها قرارات تحددها كل مؤسسة.",
          en: "The sign direction (actual minus budget or the reverse), the materiality thresholds that require an explanation, and what is classified as operating expense are all decisions each organization makes.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (110,000 مقابل 100,000) والتمرين من تأليفنا للتوضيح.",
          en: "The example figures (110,000 against 100,000) and the exercise are invented for illustration.",
        },
      },
    ],
    related: ["cost-variance", "gross-profit-margin", "cost-to-income-ratio", "operating-cash-flow"],
    exercise: {
      prompt: {
        ar: "قسم التسويق: فعلي 72,000 وموازنة 80,000. قسم تقنية المعلومات: فعلي 95,000 وموازنة 85,000. احسب انحراف كل قسم ونسبته وتصنيفه، ثم الانحراف الإجمالي ونسبته. لماذا لا تساوي النسبة الإجمالية متوسط النسبتين؟",
        en: "Marketing: actual 72,000, budget 80,000. IT: actual 95,000, budget 85,000. Compute each department's variance, percentage, and classification, then the total variance and percentage. Why is the total percentage not the average of the two?",
      },
      hint: {
        ar: "استخدم اصطلاح الفعلي ناقص الموازنة. للنسبة الإجمالية اجمع الانحرافات والموازنات أولًا.",
        en: "Use the actual-minus-budget convention. For the total percentage, sum variances and budgets first.",
      },
      answer: {
        ar: "التسويق: 72,000 − 80,000 = −8,000، أي −10%، مواتٍ. تقنية المعلومات: 95,000 − 85,000 = +10,000، أي +11.8%، غير مواتٍ. الإجمالي: 167,000 − 165,000 = +2,000، أي 2,000 ÷ 165,000 = +1.2%، غير مواتٍ. متوسط النسبتين (−10% و+11.8%) هو +0.9% تقريبًا، وهو خطأ لأنه يتجاهل أن موازنتي القسمين مختلفتان. والأهم: الرقم الإجمالي الصغير يخفي تجاوزًا بـ 10,000 في قسم يعوّضه وفر في قسم آخر، ولهذا يُعرض التفكيك دائمًا.",
        en: "Marketing: 72,000 - 80,000 = -8,000, or -10%, favorable. IT: 95,000 - 85,000 = +10,000, or +11.8%, unfavorable. Total: 167,000 - 165,000 = +2,000, or 2,000 ÷ 165,000 = +1.2%, unfavorable. The average of the two percentages (-10% and +11.8%) is about +0.9%, which is wrong because it ignores that the two budgets differ. More importantly, the small total hides a 10,000 overspend in one department offset by savings in another, which is why the breakdown is always shown.",
      },
    },
    references: [
      {
        title: "CALCULATE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/calculate-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع تطبيق مرشح فئة الحساب على جدولي الفعلي والموازنة.",
          en: "Reference for applying the account-class filter to the actuals and budget tables.",
        },
      },
      {
        title: "SWITCH function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/switch-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "يُستخدم نمط SWITCH ( TRUE (), ... ) لتصنيف الانحراف مواتيًا أو غير مواتٍ.",
          en: "The SWITCH ( TRUE (), ... ) pattern is used to classify the variance as favorable or unfavorable.",
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Current Ratio                                                       */
  /* ------------------------------------------------------------------ */
  {
    id: "current-ratio",
    slug: "current-ratio",
    name: "Current Ratio",
    nameAr: "نسبة التداول",
    domains: ["finance", "banking"],
    category: { ar: "السيولة", en: "Liquidity" },
    difficulty: "intermediate",
    unit: { ar: "مضاعف (مرة)", en: "Multiple (x)" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة الأصول المتداولة إلى الالتزامات المتداولة في تاريخ الميزانية. تقيس قدرة الأصول التي يُتوقع تحويلها إلى نقد خلال سنة على تغطية الالتزامات المستحقة خلال السنة نفسها.",
      en: "The ratio of current assets to current liabilities at the balance-sheet date. It measures whether the assets expected to turn into cash within a year can cover the obligations falling due in the same year.",
    },
    whyItMatters: {
      ar: "شركة رابحة قد تتعثر إن لم تستطع سداد التزاماتها القريبة. نسبة التداول هي الفحص الأول للسيولة قصيرة الأجل، ويراقبها المقرضون والموردون، وكثيرًا ما تُشترط حدودها الدنيا في اتفاقيات التمويل.",
      en: "A profitable company can still fail if it cannot pay its near-term obligations. The current ratio is the first test of short-term liquidity; lenders and suppliers watch it, and minimum levels are often written into financing agreements.",
    },
    interpretation: {
      ar: "نسبة 2.0 مرة تعني أن لكل وحدة التزام متداول وحدتين من الأصول المتداولة. نسبة أقل من 1 تعني أن رأس المال العامل سالب. لكن الرقم لا يقول شيئًا عن جودة الأصول: مخزون راكد أو ذمم يصعب تحصيلها ترفع النسبة دون أن تدفع فاتورة واحدة.",
      en: "A ratio of 2.0x means two units of current assets for every unit of current liabilities. Below 1 means working capital is negative. But the number says nothing about asset quality: slow-moving stock or hard-to-collect receivables lift the ratio without paying a single bill.",
    },
    formula: "Current Ratio = Current Assets / Current Liabilities",
    numerator: {
      ar: "الأصول المتداولة في تاريخ الإقفال: النقد وما في حكمه، والذمم المدينة التجارية، والمخزون، والمصروفات المدفوعة مقدمًا، وغيرها مما يُتوقع تحققه خلال سنة.",
      en: "Current assets at the closing date: cash and equivalents, trade receivables, inventory, prepayments, and other items expected to be realised within a year.",
    },
    denominator: {
      ar: "الالتزامات المتداولة في التاريخ نفسه: الذمم الدائنة، والمستحقات، والجزء المتداول من القروض، وغيرها مما يستحق خلال سنة.",
      en: "Current liabilities at the same date: trade payables, accruals, the current portion of borrowings, and other items due within a year.",
    },
    timeGrain: {
      ar: "لقطة في نقطة زمنية لا تدفق خلال فترة. قيمة الشهر أو الربع أو السنة هي قيمة آخر تاريخ إقفال في الفترة، ولا تُجمع الأرصدة عبر الشهور أبدًا. عبر الكيانات أو الأقسام تُجمع الأرصدة ثم تُقسم، ولا تُتوسط النسب.",
      en: "A point-in-time snapshot, not a flow over a period. The value for a month, quarter, or year is the value at the last closing date in the period, and balances are never summed across months. Across entities or divisions, balances are summed then divided; ratios are never averaged.",
    },
    direction: {
      rising: {
        ar: "ارتفاع النسبة يعني هامش أمان أكبر لتغطية الالتزامات القريبة.",
        en: "A rising ratio means a larger safety buffer for covering near-term obligations.",
      },
      falling: {
        ar: "انخفاضها يعني ضغطًا متزايدًا على السيولة، وانخفاضها تحت 1 يعني أن الالتزامات المتداولة تتجاوز الأصول المتداولة.",
        en: "A falling ratio means growing liquidity pressure, and below 1 current liabilities exceed current assets.",
      },
      caveat: {
        ar: "الأعلى ليس دائمًا أفضل: نسبة مرتفعة جدًا قد تعني نقدًا معطلًا أو مخزونًا متراكمًا أو ذممًا متأخرة. وبعض نماذج الأعمال (كالتجزئة التي تحصّل نقدًا وتدفع لاحقًا) تعمل بأمان بنسبة أقل من 1. السياق القطاعي وجودة المكونات تحدد القراءة.",
        en: "Higher is not always better: a very high ratio may mean idle cash, piled-up inventory, or overdue receivables. Some business models (such as retailers that collect in cash and pay later) run safely below 1. Sector context and component quality decide the reading.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "الأصول المتداولة في تاريخ الإقفال", en: "Current assets at closing date" }, value: "300,000" },
        { label: { ar: "الالتزامات المتداولة في تاريخ الإقفال", en: "Current liabilities at closing date" }, value: "150,000" },
      ],
      steps: [
        { label: { ar: "نسبة التداول", en: "Current ratio" }, expression: "300,000 ÷ 150,000 = 2.0x" },
        { label: { ar: "رأس المال العامل", en: "Working capital" }, expression: "300,000 - 150,000 = 150,000" },
      ],
      result: { label: { ar: "نسبة التداول", en: "Current ratio" }, value: "2.0x" },
      reading: {
        ar: "الأصول المتداولة تغطي الالتزامات المتداولة مرتين. لكن إن كان 120,000 من الأصول مخزونًا بطيء الحركة، فالأصول الأسرع تحولًا إلى نقد 180,000 فقط، وتنخفض التغطية الفعلية إلى 1.2 مرة. لهذا يُعرض المؤشر بجانب مكوناته.",
        en: "Current assets cover current liabilities twice over. But if 120,000 of those assets is slow-moving inventory, the faster-converting assets are only 180,000 and effective coverage drops to 1.2x. That is why the ratio is shown beside its components.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "نسبة التداول من لقطات الأرصدة (شبه قابلة للجمع)", en: "Current ratio from balance snapshots (semi-additive)" },
        code: `-- Semi-additive: take the balance at the LAST snapshot date in the
-- period instead of summing snapshots across months.
-- ALL ( 'Account' ) makes every account use the same snapshot date,
-- so assets and liabilities are always read on one balance-sheet date.
Closing Balance :=
CALCULATE (
    SUM ( 'GLBalance'[BalanceAmount] ),
    LASTNONBLANK (
        'Date'[Date],
        CALCULATE ( COUNTROWS ( 'GLBalance' ), ALL ( 'Account' ) )
    )
)

Current Assets :=
CALCULATE (
    [Closing Balance],
    'Account'[BalanceSheetClass] = "Current Asset"
)

Current Liabilities :=
CALCULATE (
    [Closing Balance],
    'Account'[BalanceSheetClass] = "Current Liability"
)

Working Capital :=
[Current Assets] - [Current Liabilities]

Current Ratio :=
DIVIDE ( [Current Assets], [Current Liabilities] )`,
        assumptions: [
          {
            ar: "'GLBalance' جدول لقطات: صف لكل حساب في كل تاريخ إقفال (نهاية كل شهر)، ويحمل الرصيد الختامي لا حركة الفترة. 'GLBalance'[SnapshotDate] مرتبط بـ 'Date'[Date].",
            en: "'GLBalance' is a snapshot table: one row per account per closing date (each month end), holding the closing balance rather than the period movement. 'GLBalance'[SnapshotDate] is related to 'Date'[Date].",
          },
          {
            ar: "الأرصدة مخزنة بإشارتها الطبيعية موجبة للأصول والالتزامات. إن كان دفتر الأستاذ يخزن الدائن سالبًا فاضرب الالتزامات في −1، وإلا خرجت النسبة سالبة.",
            en: "Balances are stored with their natural sign, positive for both assets and liabilities. If the ledger stores credits as negative, multiply liabilities by -1, or the ratio comes out negative.",
          },
          {
            ar: "LASTNONBLANK يختار آخر تاريخ في سياق الترشيح توجد فيه لقطة. لذلك يعرض الربع أو السنة رصيد آخر شهر مُقفل فيها، أما الفترة التي لا تحتوي أي لقطة فتعيد قيمة فارغة.",
            en: "LASTNONBLANK picks the last date in filter context that has a snapshot. A quarter or year therefore shows the balance of its last closed month, and a period with no snapshot at all returns BLANK.",
          },
          {
            ar: "'Account'[BalanceSheetClass] يصنف الحسابات إلى متداولة وغير متداولة وفق السياسة المحاسبية. إعادة تصنيف الجزء المتداول من القروض طويلة الأجل يجب أن تنعكس في هذا التصنيف أو في حساب منفصل.",
            en: "'Account'[BalanceSheetClass] classifies accounts as current or non-current according to accounting policy. Reclassifying the current portion of long-term debt must be reflected in this mapping or in a separate account.",
          },
        ],
        requires: ["GLBalance[BalanceAmount]", "GLBalance[SnapshotDate]", "Account[BalanceSheetClass]", "Date[Date]"],
      },
      {
        language: "dax",
        label: { ar: "بديل: الرصيد من القيود التراكمية", en: "Alternative: balance from cumulative journal lines" },
        code: `-- When only journal movements exist (no snapshot table), a balance is
-- the running total of all postings up to the last date in context.
Closing Balance (from journals) :=
CALCULATE (
    SUM ( 'GLJournal'[Amount] ),
    FILTER (
        ALL ( 'Date'[Date] ),
        'Date'[Date] <= MAX ( 'Date'[Date] )
    )
)`,
        assumptions: [
          {
            ar: "'GLJournal' يحتوي كل القيود منذ بداية التشغيل أو قيد رصيد افتتاحي، وإلا بدأ الرصيد التراكمي من صفر زائف.",
            en: "'GLJournal' holds every posting since inception, or an opening-balance entry; otherwise the running total starts from a false zero.",
          },
          {
            ar: "الحساب التراكمي أبطأ من جدول اللقطات على الجداول الكبيرة، ولهذا يُفضل تخزين الأرصدة الختامية في طبقة البيانات عند الإمكان.",
            en: "The running total is slower than a snapshot table on large tables, which is why storing closing balances in the data layer is preferred when possible.",
          },
        ],
        requires: ["GLJournal[Amount]", "GLJournal[PostingDate]", "Date[Date]"],
      },
    ],
    model: [
      {
        table: "GLBalance",
        grain: { ar: "رصيد ختامي واحد لكل حساب وكيان وتاريخ إقفال", en: "One closing balance per account, entity, and closing date" },
        columns: ["AccountId", "EntityId", "SnapshotDate", "BalanceAmount", "CurrencyCode"],
        role: { ar: "مصدر الأرصدة (شبه قابلة للجمع عبر الزمن)", en: "Source of balances (semi-additive over time)" },
      },
      {
        table: "Account",
        grain: { ar: "حساب واحد في دليل الحسابات", en: "One account in the chart of accounts" },
        columns: ["AccountId", "AccountName", "BalanceSheetClass", "WorkingCapitalComponent"],
        role: {
          ar: "يحدد المتداول وغير المتداول، ويسمح بعرض مكونات رأس المال العامل",
          en: "Defines current versus non-current and enables showing working-capital components",
        },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthEndDate", "FiscalYear", "FiscalQuarter"],
        role: {
          ar: "يحدد نقطة القياس: آخر تاريخ إقفال ضمن الفترة المختارة",
          en: "Sets the measurement point: the last closing date within the selected period",
        },
      },
    ],
    visuals: [
      {
        pattern: "kpi-card",
        why: {
          ar: "بطاقة واحدة بالنسبة في آخر تاريخ إقفال مع تاريخ اللقطة ظاهرًا، كما يقترح المرجع.",
          en: "A single card with the ratio at the last closing date and the snapshot date visible, as the reference suggests.",
        },
      },
      {
        pattern: "stacked-bar",
        why: {
          ar: "أعمدة مكدسة لمكونات الأصول والالتزامات المتداولة عبر الشهور تكشف إن كان تحسن النسبة من النقد أم من تراكم المخزون.",
          en: "Stacked bars of current asset and liability components over months reveal whether an improving ratio comes from cash or from piling inventory.",
        },
      },
      {
        pattern: "period-over-period",
        why: {
          ar: "مقارنة النسبة بنهاية الربع نفسه من العام الماضي تزيل أثر الموسمية في المخزون والذمم.",
          en: "Comparing the ratio with the same quarter end last year removes seasonal swings in inventory and receivables.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "جمع الأرصدة عبر الشهور: بطاقة «الأصول المتداولة» للربع تعرض مجموع ثلاث لقطات شهرية، أي ثلاثة أضعاف الرصيد الحقيقي. الأرصدة شبه قابلة للجمع وتُؤخذ في آخر تاريخ إقفال.",
        en: "Summing balances across months: a quarterly 'Current Assets' card shows the sum of three monthly snapshots, three times the real balance. Balances are semi-additive and are taken at the last closing date.",
      },
      {
        ar: "افتراض أن الأعلى أفضل دائمًا: مخزون راكد وذمم مشكوك في تحصيلها ترفع النسبة وتضعف السيولة الحقيقية. اعرض النسبة السريعة أو أعمار الذمم بجانبها.",
        en: "Assuming higher is always better: slow-moving stock and doubtful receivables lift the ratio while weakening real liquidity. Show the quick ratio or receivables ageing beside it.",
      },
      {
        ar: "تجميل الميزانية في تاريخ الإقفال: سداد التزام بالنقد قبل نهاية الفترة مباشرة يرفع النسبة إن كانت فوق 1، ثم يعود الوضع بعد الإقفال. اتجاه اللقطات الشهرية يكشف ذلك أفضل من لقطة سنوية واحدة.",
        en: "Window dressing at the closing date: paying down a liability with cash just before period end raises the ratio when it is above 1, then things revert after close. A trend of monthly snapshots exposes this better than one annual snapshot.",
      },
      {
        ar: "خلط إشارات دفتر الأستاذ: إن كانت الالتزامات مخزنة بقيم سالبة فالنسبة تظهر سالبة، وإن عولجت بـ ABS على مستوى الإجمالي فقد تختفي أرصدة معكوسة الاتجاه داخل المجموعة.",
        en: "Mixing ledger signs: if liabilities are stored as negatives the ratio comes out negative, and applying ABS at total level can hide contra balances inside the group.",
      },
      {
        ar: "متوسط النسب عبر الكيانات: نسبة المجموعة تُحسب من مجموع أصول الكيانات ومجموع التزاماتها بعد استبعاد الأرصدة بين الشركات، لا من متوسط نسب الكيانات.",
        en: "Averaging ratios across entities: the group ratio is computed from summed entity assets and summed liabilities after eliminating intercompany balances, not from the average of entity ratios.",
      },
    ],
    variants: [
      {
        label: { ar: "النسبة السريعة", en: "Quick ratio (acid test)" },
        formula: "(Current Assets - Inventory) / Current Liabilities",
        difference: {
          ar: "تستبعد المخزون لأنه أبطأ الأصول المتداولة تحولًا إلى نقد وأكثرها عرضة لانخفاض القيمة. بعض التعريفات تستبعد المدفوعات المقدمة أيضًا.",
          en: "Excludes inventory because it is the slowest current asset to turn into cash and the most exposed to write-downs. Some definitions also exclude prepayments.",
        },
      },
      {
        label: { ar: "نسبة النقدية", en: "Cash ratio" },
        formula: "(Cash + Cash Equivalents) / Current Liabilities",
        difference: {
          ar: "أشد الاختبارات تحفظًا: لا تحتسب إلا النقد المتاح فعلًا لسداد الالتزامات اليوم.",
          en: "The most conservative test: counts only cash actually available to settle obligations today.",
        },
      },
      {
        label: { ar: "رأس المال العامل", en: "Working capital" },
        formula: "Current Assets - Current Liabilities",
        difference: {
          ar: "الصورة المطلقة للمؤشر نفسه. مفيد للتخطيط النقدي لأنه يعطي مبلغًا، لكنه لا يصلح للمقارنة بين شركات مختلفة الحجم.",
          en: "The absolute form of the same measure. Useful for cash planning because it gives an amount, but unsuitable for comparing companies of different size.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "عندما تكون الالتزامات المتداولة موجبة، تكون نسبة التداول أكبر من 1 إذا وفقط إذا كان رأس المال العامل موجبًا.",
          en: "When current liabilities are positive, the current ratio is above 1 if and only if working capital is positive.",
        },
      },
      {
        kind: "mathematical",
        text: {
          ar: "إذا كانت النسبة أكبر من 1 فسداد أي التزام متداول بالنقد يرفعها، وإذا كانت أقل من 1 فالسداد نفسه يخفضها، رغم أن رأس المال العامل لا يتغير في الحالتين.",
          en: "If the ratio is above 1, paying any current liability with cash raises it; if below 1, the same payment lowers it, even though working capital is unchanged in both cases.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "تصنيف البنود إلى متداولة وغير متداولة بأفق سنة واحدة أو دورة تشغيل واحدة هو العرف المتبع في عرض الميزانية.",
          en: "Classifying items as current or non-current on a one-year or one-operating-cycle horizon is the customary balance-sheet presentation.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "الحد الأدنى المقبول للنسبة يحدده القطاع وسياسة الخزينة وشروط اتفاقيات التمويل، ولا توجد قيمة واحدة صحيحة لكل الشركات.",
          en: "The minimum acceptable ratio is set by sector, treasury policy, and financing covenants; there is no single correct value for every company.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (300,000 و150,000) والتمرين من تأليفنا للتوضيح وليست معايير قطاعية.",
          en: "The example figures (300,000 and 150,000) and the exercise are invented for illustration and are not industry benchmarks.",
        },
      },
    ],
    related: ["dso", "operating-cash-flow", "inventory-turnover", "loan-to-deposit-ratio"],
    exercise: {
      prompt: {
        ar: "أرصدة نهاية الشهر في الربع الأول: الأصول المتداولة 280,000 (يناير) و300,000 (فبراير) و320,000 (مارس)؛ الالتزامات المتداولة 160,000 و150,000 و160,000. احسب الأصول المتداولة ونسبة التداول الصحيحتين للربع الأول، ثم ما يعرضه تقرير يجمع الأرصدة عبر الشهور.",
        en: "Month-end balances in Q1: current assets 280,000 (Jan), 300,000 (Feb), 320,000 (Mar); current liabilities 160,000, 150,000, 160,000. Compute the correct Q1 current assets and current ratio, then what a report that sums balances across months would show.",
      },
      hint: {
        ar: "الرصيد لقطة؛ قيمة الربع هي قيمة آخر تاريخ إقفال فيه.",
        en: "A balance is a snapshot; the quarter value is the value at its last closing date.",
      },
      answer: {
        ar: "الصحيح: رصيد 31 مارس. الأصول المتداولة 320,000، والالتزامات 160,000، والنسبة 320,000 ÷ 160,000 = 2.00 مرة. التقرير الخاطئ: أصول 280,000 + 300,000 + 320,000 = 900,000، والتزامات 160,000 + 150,000 + 160,000 = 470,000، والنسبة 900,000 ÷ 470,000 = 1.91 مرة. لاحظ أن النسبة الخاطئة تبدو معقولة فلا تلفت الانتباه، بينما بطاقة الأصول تعرض قرابة ثلاثة أضعاف الرصيد الحقيقي.",
        en: "Correct: the 31 March balance. Current assets 320,000, liabilities 160,000, ratio 320,000 ÷ 160,000 = 2.00x. Wrong report: assets 280,000 + 300,000 + 320,000 = 900,000, liabilities 160,000 + 150,000 + 160,000 = 470,000, ratio 900,000 ÷ 470,000 = 1.91x. Note that the wrong ratio looks plausible and draws no attention, while the assets card shows nearly three times the real balance.",
      },
    },
    references: [
      {
        title: "LASTNONBLANK function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/lastnonblank-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع اختيار آخر تاريخ يحتوي بيانات، وهو أساس المقاييس شبه القابلة للجمع مثل الأرصدة.",
          en: "Reference for selecting the last date that has data, the basis of semi-additive measures such as balances.",
        },
      },
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "القسمة الآمنة عند غياب الالتزامات المتداولة.",
          en: "Safe division when current liabilities are absent.",
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Days Sales Outstanding                                              */
  /* ------------------------------------------------------------------ */
  {
    id: "dso",
    slug: "dso",
    name: "Days Sales Outstanding",
    acronym: "DSO",
    nameAr: "متوسط فترة التحصيل",
    domains: ["finance", "it-saas", "manufacturing", "healthcare"],
    category: { ar: "رأس المال العامل", en: "Working capital" },
    difficulty: "intermediate",
    unit: { ar: "أيام", en: "Days" },
    aggregation: "ratio",
    definition: {
      ar: "تقدير لمتوسط عدد الأيام التي تستغرقها المنشأة لتحصيل مبيعاتها الآجلة. يربط رصيد الذمم المدينة التجارية بحجم المبيعات الآجلة خلال الفترة.",
      en: "An estimate of the average number of days the organization takes to collect its credit sales. It relates the trade receivables balance to the volume of credit sales in the period.",
    },
    whyItMatters: {
      ar: "كل يوم تأخير في التحصيل هو نقد مقيد لدى العملاء تموّله المنشأة من جيبها أو بالاقتراض. ارتفاع DSO قد يسبق أزمة سيولة رغم أن الأرباح تبدو جيدة، ولهذا يراقبه المدير المالي وفريق الائتمان والتحصيل عن قرب.",
      en: "Every day of collection delay is cash tied up with customers that the organization funds itself or borrows. A rising DSO can precede a liquidity crunch even while profits look healthy, which is why the CFO and the credit and collections team watch it closely.",
    },
    interpretation: {
      ar: "DSO بقيمة 45 يومًا يعني أن رصيد الذمم يعادل تقريبًا مبيعات 45 يومًا من المبيعات الآجلة. قارنه بشروط الدفع الممنوحة: DSO 45 مع شروط 30 يومًا يعني أن العملاء يدفعون متأخرين في المتوسط، بينما DSO 45 مع شروط 60 يومًا يعني العكس.",
      en: "A DSO of 45 days means the receivables balance equals roughly 45 days of credit sales. Compare it with the payment terms granted: DSO 45 with 30-day terms means customers pay late on average, while DSO 45 with 60-day terms means the opposite.",
    },
    formula: "DSO = Average Trade Receivables / Credit Sales for Period x Number of Days in Period",
    numerator: {
      ar: "متوسط رصيد الذمم المدينة التجارية خلال الفترة، ويُحسب عادة من رصيد بداية الفترة ونهايتها أو من متوسط الأرصدة الشهرية. يقتصر على الذمم التجارية دون السلف والذمم الأخرى.",
      en: "Average trade receivables balance over the period, usually from the opening and closing balances or the average of month-end balances. It is limited to trade receivables, excluding advances and other receivables.",
    },
    denominator: {
      ar: "المبيعات الآجلة للفترة نفسها. المبيعات النقدية تُستبعد لأنها لا تولّد ذمة أصلًا، وإدخالها يخفض DSO زورًا.",
      en: "Credit sales for the same period. Cash sales are excluded because they never create a receivable, and including them falsely lowers DSO.",
    },
    timeGrain: {
      ar: "يُحسب شهريًا أو ربعيًا أو سنويًا، مع ضرب النسبة في عدد أيام الفترة الفعلي. لا يُجمع DSO عبر الشهور ولا يُتوسط؛ يُعاد حسابه للفترة الأطول من متوسط الأرصدة ومجموع المبيعات.",
      en: "Computed monthly, quarterly, or annually, multiplying the ratio by the actual number of days in the period. DSO is never summed or averaged across months; it is recomputed for the longer period from the average balance and summed sales.",
    },
    direction: {
      rising: {
        ar: "ارتفاع DSO يعني بطء التحصيل وتقييد مزيد من النقد لدى العملاء، وهو غير مواتٍ في العادة.",
        en: "A rising DSO means slower collection and more cash tied up with customers, normally unfavorable.",
      },
      falling: {
        ar: "انخفاضه يعني تحصيلًا أسرع وتحرير نقد، وهو مواتٍ في العادة.",
        en: "A falling DSO means faster collection and released cash, normally favorable.",
      },
      caveat: {
        ar: "DSO منخفض جدًا قد يعني شروط ائتمان متشددة تُفقد المنشأة مبيعات. كما أن DSO يتحرك بتغير حجم المبيعات وحده: شهر مبيعات قوي في نهايته يرفع الرصيد والمؤشر دون أي تدهور في سلوك الدفع.",
        en: "A very low DSO may mean credit terms so strict that sales are being lost. DSO also moves with sales volume alone: a strong sales month end lifts the balance and the metric without any deterioration in payment behaviour.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "متوسط الذمم المدينة التجارية", en: "Average trade receivables" }, value: "100,000" },
        { label: { ar: "المبيعات الآجلة للفترة", en: "Credit sales for the period" }, value: "600,000" },
        { label: { ar: "عدد أيام الفترة", en: "Days in period" }, value: "30" },
      ],
      steps: [
        { label: { ar: "نسبة الذمم إلى المبيعات", en: "Receivables to sales ratio" }, expression: "100,000 ÷ 600,000 = 0.1667" },
        { label: { ar: "التحويل إلى أيام", en: "Convert to days" }, expression: "0.1667 × 30 = 5 days" },
      ],
      result: { label: { ar: "متوسط فترة التحصيل", en: "DSO" }, value: "5 days" },
      reading: {
        ar: "الذمم القائمة تعادل مبيعات خمسة أيام تقريبًا، أي أن المبيعات الآجلة تُحصّل بسرعة كبيرة. هذه طريقة واحدة شائعة؛ طرق أخرى مثل طريقة الاستنفاد العكسي قد تعطي رقمًا مختلفًا للبيانات نفسها.",
        en: "Outstanding receivables equal roughly five days of sales, so credit sales are being collected very quickly. This is one common method; others, such as the countback method, can give a different number for the same data.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "DSO بمتوسط لقطات الذمم من بداية الفترة حتى نهايتها", en: "DSO using average receivables snapshots from period open to close" },
        code: `Credit Sales :=
CALCULATE (
    SUM ( 'Sales'[NetAmount] ),
    'Sales'[IsCreditSale] = TRUE ()
)

-- Semi-additive balance: average the month-end snapshots from the
-- opening balance (the snapshot on the day before the period starts)
-- through the last snapshot inside the period. For one month this is
-- (opening + closing) / 2; for a quarter it averages four snapshots.
Average Trade Receivables :=
VAR PeriodStart = MIN ( 'Date'[Date] )
VAR PeriodEnd = MAX ( 'Date'[Date] )
VAR SnapshotDates =
    CALCULATETABLE (
        VALUES ( 'ARBalance'[SnapshotDate] ),
        REMOVEFILTERS ( 'Date' ),
        'ARBalance'[SnapshotDate] >= PeriodStart - 1,
        'ARBalance'[SnapshotDate] <= PeriodEnd
    )
RETURN
    AVERAGEX (
        SnapshotDates,
        CALCULATE (
            SUM ( 'ARBalance'[BalanceAmount] ),
            REMOVEFILTERS ( 'Date' )
        )
    )

Days In Period :=
COUNTROWS ( 'Date' )

DSO :=
DIVIDE ( [Average Trade Receivables], [Credit Sales] ) * [Days In Period]`,
        assumptions: [
          {
            ar: "'ARBalance' جدول لقطات بأرصدة الذمم التجارية في نهاية كل شهر لكل عميل، و'ARBalance'[SnapshotDate] مرتبط بـ 'Date'[Date]. الرصيد شبه قابل للجمع، ولذلك يُتوسط عبر اللقطات ولا يُجمع.",
            en: "'ARBalance' is a snapshot table of trade receivables at each month end per customer, and 'ARBalance'[SnapshotDate] is related to 'Date'[Date]. The balance is semi-additive, so it is averaged across snapshots, never summed.",
          },
          {
            ar: "داخل AVERAGEX يحوّل CALCULATE صف SnapshotDate إلى مرشح على عمود جدول الحقائق، بينما REMOVEFILTERS ( 'Date' ) يسمح بقراءة لقطة الرصيد الافتتاحي الواقعة قبل بداية الفترة. مرشحات العميل والكيان تبقى سارية.",
            en: "Inside AVERAGEX, CALCULATE turns the SnapshotDate row into a filter on the fact column, while REMOVEFILTERS ( 'Date' ) allows reading the opening snapshot that falls before the period start. Customer and entity filters stay in effect.",
          },
          {
            ar: "رصيد الذمم والمبيعات بنفس الأساس الضريبي. إن كانت الذمم تشمل ضريبة القيمة المضافة والمبيعات صافية منها فالـ DSO يتضخم بنسبة الضريبة.",
            en: "Receivables and sales are on the same tax basis. If receivables include VAT while sales exclude it, DSO is inflated by the VAT rate.",
          },
          {
            ar: "Days In Period يعدّ أيام جدول التاريخ في سياق الترشيح. في شهر جارٍ غير مكتمل يجب تقييد جدول التاريخ بآخر يوم مكتمل، وإلا ضُربت مبيعات جزئية في عدد أيام الشهر الكامل.",
            en: "Days In Period counts the Date rows in filter context. For an incomplete running month, restrict the date table to the last complete day, or partial sales are multiplied by the full month's days.",
          },
        ],
        requires: ["Sales[NetAmount]", "Sales[IsCreditSale]", "ARBalance[BalanceAmount]", "ARBalance[SnapshotDate]", "Date[Date]"],
      },
    ],
    model: [
      {
        table: "ARBalance",
        grain: { ar: "رصيد واحد لكل عميل وتاريخ لقطة (نهاية الشهر)", en: "One balance per customer and snapshot date (month end)" },
        columns: ["CustomerId", "EntityId", "SnapshotDate", "BalanceAmount", "OverdueAmount", "AgeBucket"],
        role: { ar: "مصدر متوسط الذمم (البسط) وأعمار الديون", en: "Source of average receivables (numerator) and ageing" },
      },
      {
        table: "Sales",
        grain: { ar: "سطر فاتورة واحد", en: "One invoice line" },
        columns: ["InvoiceId", "InvoiceDate", "CustomerId", "NetAmount", "IsCreditSale"],
        role: { ar: "مصدر المبيعات الآجلة (المقام)", en: "Source of credit sales (denominator)" },
      },
      {
        table: "Customer",
        grain: { ar: "عميل واحد لكل صف", en: "One row per customer" },
        columns: ["CustomerId", "CustomerName", "PaymentTermsDays", "Segment"],
        role: { ar: "بُعد مشترك لتحليل DSO حسب العميل ومقارنته بشروط الدفع", en: "Shared dimension for DSO by customer and comparison with payment terms" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthEndDate", "FiscalYear", "IsComplete"],
        role: { ar: "يحدد الفترة وعدد أيامها ولقطات الرصيد داخلها", en: "Sets the period, its day count, and the balance snapshots within it" },
      },
    ],
    visuals: [
      {
        pattern: "period-over-period",
        why: {
          ar: "خط اتجاه DSO الشهري مع خط شروط الدفع المرجح يوضح إن كان التحصيل يتدهور أم يتحسن، كما يقترح المرجع.",
          en: "A monthly DSO trend with a weighted payment-terms line shows whether collection is deteriorating or improving, as the reference suggests.",
        },
      },
      {
        pattern: "inventory-aging-matrix",
        why: {
          ar: "مصفوفة أعمار الذمم حسب العميل والشريحة العمرية تُظهر أين يتركز التأخير، وهو ما يخفيه رقم DSO الإجمالي.",
          en: "A receivables ageing matrix by customer and age band shows where the delay is concentrated, which the single DSO figure hides.",
        },
      },
      {
        pattern: "exception-table",
        why: {
          ar: "جدول العملاء الذين يتجاوز DSO لديهم شروط الدفع الممنوحة يحوّل المؤشر إلى قائمة متابعة لفريق التحصيل.",
          en: "A table of customers whose DSO exceeds their granted payment terms turns the metric into a follow-up list for the collections team.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "استخدام إجمالي المبيعات بدل المبيعات الآجلة: المبيعات النقدية تضخّم المقام وتخفض DSO، خاصة في المنشآت ذات المزيج المتغير بين النقدي والآجل.",
        en: "Using total sales instead of credit sales: cash sales inflate the denominator and lower DSO, especially where the cash/credit mix shifts.",
      },
      {
        ar: "عدم توافق نطاق الذمم والمبيعات: ذمم شاملة للضريبة مقابل مبيعات صافية منها، أو ذمم كل الكيانات مقابل مبيعات كيان واحد، أو ذمم تشمل السلف وأرصدة غير تجارية.",
        en: "Mismatched receivables and sales scope: VAT-inclusive receivables against VAT-exclusive sales, receivables of all entities against sales of one, or receivables including advances and non-trade balances.",
      },
      {
        ar: "جمع أرصدة الذمم عبر الشهور بدل حساب متوسطها: متوسط الربع لا يساوي مجموع ثلاث لقطات، وإلا تضاعف DSO ثلاث مرات.",
        en: "Summing receivables balances across months instead of averaging them: the quarter average is not the sum of three snapshots, or DSO triples.",
      },
      {
        ar: "مقارنة أرقام محسوبة بطرق مختلفة: رصيد نهاية الفترة مقابل المتوسط، أو 360 يومًا مقابل 365، أو طريقة الاستنفاد العكسي مقابل الطريقة البسيطة. ثبّت الطريقة واذكرها في التلميح.",
        en: "Comparing figures computed by different methods: closing balance versus average, 360 versus 365 days, or countback versus the simple method. Fix the method and state it in the tooltip.",
      },
      {
        ar: "قراءة DSO دون أعمار الذمم: تحسن المؤشر قد يخفي دينًا كبيرًا متأخرًا لأكثر من 90 يومًا تعوّضه مبيعات جديدة سريعة التحصيل.",
        en: "Reading DSO without the ageing: an improving figure can hide a large debt more than 90 days overdue, offset by new sales that are collected quickly.",
      },
    ],
    variants: [
      {
        label: { ar: "طريقة الاستنفاد العكسي", en: "Countback (exhaustion) method" },
        formula: "Days counted back from period end until cumulative credit sales equal the closing receivables balance",
        difference: {
          ar: "تطابق رصيد الذمم مع أحدث المبيعات شهرًا بشهر إلى الخلف، فلا تتأثر بتقلب المبيعات كما تتأثر الطريقة البسيطة. أدق عند وجود موسمية قوية لكنها أعقد في التنفيذ.",
          en: "Matches the receivables balance against the most recent sales, month by month backward, so it is less distorted by sales swings than the simple method. More accurate under strong seasonality, but harder to implement.",
        },
      },
      {
        label: { ar: "DSO بالرصيد الختامي", en: "Closing-balance DSO" },
        formula: "Closing Trade Receivables / Credit Sales for Period x Days in Period",
        difference: {
          ar: "أبسط لأنه يستخدم لقطة واحدة، لكنه يتأثر بشدة بمبيعات آخر أيام الفترة وبعمليات التحصيل المكثفة قبل الإقفال.",
          en: "Simpler because it uses one snapshot, but strongly affected by sales in the last days of the period and by collection pushes before close.",
        },
      },
      {
        label: { ar: "أفضل DSO ممكن", en: "Best Possible DSO" },
        formula: "Current (not yet due) Receivables / Credit Sales for Period x Days in Period",
        difference: {
          ar: "يستبعد الذمم المتأخرة ليُظهر DSO لو دفع الجميع في موعده. الفرق بينه وبين DSO الفعلي يقيس أثر التأخير وحده.",
          en: "Excludes overdue receivables to show the DSO if everyone paid on time. The gap between it and actual DSO isolates the effect of late payment.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "مع ثبات متوسط الذمم، تضاعف المبيعات الآجلة يخفض DSO إلى النصف، والعكس بالعكس؛ ولهذا يتحرك المؤشر مع حجم المبيعات حتى لو لم يتغير سلوك الدفع.",
          en: "With average receivables held constant, doubling credit sales halves DSO, and vice versa; that is why the metric moves with sales volume even when payment behaviour is unchanged.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "الطريقة البسيطة (متوسط الذمم ÷ المبيعات الآجلة × أيام الفترة) هي طريقة شائعة من بين عدة طرق، وكل طريقة تعطي نتيجة مختلفة للبيانات نفسها.",
          en: "The simple method (average receivables ÷ credit sales × days in period) is one common method among several, and each gives a different result for the same data.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "عدد أيام السنة (360 أو 365)، وطريقة حساب متوسط الذمم، ومعالجة المخصصات والضريبة قرارات تحددها كل مؤسسة ويجب تثبيتها.",
          en: "The day count (360 or 365), the averaging method for receivables, and the treatment of allowances and tax are decisions each organization makes and must hold constant.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (100,000 و600,000 و30 يومًا) والتمرين من تأليفنا للتوضيح وليست معايير قطاعية.",
          en: "The example figures (100,000, 600,000, and 30 days) and the exercise are invented for illustration and are not industry benchmarks.",
        },
      },
    ],
    related: ["current-ratio", "operating-cash-flow", "revenue-growth-rate"],
    exercise: {
      prompt: {
        ar: "ربع من 90 يومًا: رصيد الذمم الافتتاحي 380,000 والختامي 420,000، والمبيعات الآجلة للربع 1,200,000 صافية من ضريبة القيمة المضافة. احسب DSO بمتوسط الرصيدين. ثم اكتشفت أن أرصدة الذمم تشمل ضريبة بنسبة 15%؛ أعد الحساب بعد توحيد الأساس.",
        en: "A 90-day quarter: opening receivables 380,000, closing 420,000, and credit sales for the quarter 1,200,000 excluding VAT. Compute DSO using the average of the two balances. You then find that the receivables balances include 15% VAT; recompute after aligning the basis.",
      },
      hint: {
        ar: "متوسط الرصيدين = (الافتتاحي + الختامي) ÷ 2. لإزالة الضريبة من الذمم اقسم على 1.15.",
        en: "Average balance = (opening + closing) ÷ 2. To remove VAT from receivables, divide by 1.15.",
      },
      answer: {
        ar: "متوسط الذمم = (380,000 + 420,000) ÷ 2 = 400,000. DSO = 400,000 ÷ 1,200,000 × 90 = 30 يومًا. بعد إزالة الضريبة: 400,000 ÷ 1.15 = 347,826. DSO = 347,826 ÷ 1,200,000 × 90 = 26.1 يومًا تقريبًا. عدم توافق الأساس الضريبي أضاف قرابة أربعة أيام وهمية.",
        en: "Average receivables = (380,000 + 420,000) ÷ 2 = 400,000. DSO = 400,000 ÷ 1,200,000 × 90 = 30 days. After removing VAT: 400,000 ÷ 1.15 = 347,826. DSO = 347,826 ÷ 1,200,000 × 90 = about 26.1 days. The tax-basis mismatch added nearly four phantom days.",
      },
    },
    references: [
      {
        title: "AVERAGEX function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/averagex-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع حساب متوسط الأرصدة عبر لقطات الفترة بدل جمعها.",
          en: "Reference for averaging balances across the period's snapshots instead of summing them.",
        },
      },
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "القسمة الآمنة عند غياب المبيعات الآجلة في الفترة.",
          en: "Safe division when there are no credit sales in the period.",
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Operating Cash Flow                                                 */
  /* ------------------------------------------------------------------ */
  {
    id: "operating-cash-flow",
    slug: "operating-cash-flow",
    name: "Operating Cash Flow",
    acronym: "OCF",
    nameAr: "التدفق النقدي التشغيلي",
    domains: ["finance", "banking"],
    category: { ar: "السيولة والنقد", en: "Liquidity and cash" },
    difficulty: "intermediate",
    unit: { ar: "مبلغ بعملة التقرير", en: "Amount in reporting currency" },
    aggregation: "additive",
    definition: {
      ar: "صافي النقد الناتج عن الأنشطة التشغيلية خلال الفترة، كما يظهر في قائمة التدفقات النقدية وفق الإطار المحاسبي المطبّق: المقبوضات من العملاء ناقص المدفوعات للموردين والموظفين وغيرها من المدفوعات التشغيلية.",
      en: "The net cash generated by operating activities during the period, as reported in the cash flow statement under the applicable accounting framework: receipts from customers less payments to suppliers, employees, and other operating payments.",
    },
    whyItMatters: {
      ar: "الربح رأي محاسبي والنقد حقيقة. المنشأة تدفع الرواتب والموردين بالنقد لا بالأرباح، ويمكن لشركة رابحة أن تنفد سيولتها إن كانت أرباحها محبوسة في ذمم ومخزون. التدفق التشغيلي يجيب: هل يموّل النشاط الأساسي نفسه؟",
      en: "Profit is an accounting opinion; cash is a fact. The organization pays salaries and suppliers with cash, not profit, and a profitable company can run out of cash if its profit is locked in receivables and inventory. Operating cash flow answers: does the core business fund itself?",
    },
    interpretation: {
      ar: "تدفق تشغيلي موجب يعني أن العمليات ولّدت نقدًا يكفي لتغطية مدفوعاتها التشغيلية وفاض منه ما يمكن استخدامه للاستثمار أو سداد الديون. تدفق سالب لفترة ممتدة يعني أن العمليات تعتمد على التمويل الخارجي أو على الاحتياطي النقدي.",
      en: "Positive operating cash flow means operations generated enough cash to cover their operating payments, with a surplus available for investment or debt repayment. A sustained negative figure means operations depend on external financing or the cash reserve.",
    },
    formula: "Operating Cash Flow = Cash Receipts from Operating Activities - Cash Payments for Operating Activities",
    numerator: {
      ar: "المقبوضات النقدية التشغيلية: التحصيل من العملاء وأي مقبوضات تشغيلية أخرى وفق تصنيف قائمة التدفقات النقدية المعتمد.",
      en: "Operating cash receipts: collections from customers and any other operating receipts according to the approved cash flow statement classification.",
    },
    denominator: {
      ar: "لا مقام؛ المؤشر مبلغ مطلق. تُطرح منه المدفوعات النقدية التشغيلية: للموردين والموظفين والإيجارات والضرائب التشغيلية وغيرها.",
      en: "No denominator; the metric is an absolute amount. Operating cash payments are deducted: to suppliers, employees, rent, operating taxes, and others.",
    },
    timeGrain: {
      ar: "تدفق خلال فترة، ولذلك قابل للجمع: مجموع التدفقات الشهرية يساوي تدفق السنة. يُعرض شهريًا مع مجموع من بداية السنة حتى تاريخه، لأن الشهور المنفردة تتذبذب بتوقيت المقبوضات والمدفوعات.",
      en: "A flow over a period, and therefore additive: monthly flows sum to the annual flow. It is shown monthly with a year-to-date total, because single months swing with the timing of receipts and payments.",
    },
    direction: {
      rising: {
        ar: "ارتفاع التدفق التشغيلي يعني أن النشاط الأساسي يولّد نقدًا أكثر، وهو مواتٍ في العادة.",
        en: "Rising operating cash flow means the core business generates more cash, normally favorable.",
      },
      falling: {
        ar: "انخفاضه، خاصة مع أرباح ثابتة أو متزايدة، يشير غالبًا إلى نقد محبوس في رأس المال العامل (ذمم أو مخزون).",
        en: "A falling figure, especially alongside stable or rising profit, usually points to cash locked in working capital (receivables or inventory).",
      },
      caveat: {
        ar: "ارتفاع مؤقت قد يأتي من تأخير الدفع للموردين أو تقليص المخزون إلى حد يضر بالخدمة، وهو تحسن لا يتكرر. وانخفاض في شركة نامية قد يكون استثمارًا طبيعيًا في رأس المال العامل. اقرأه بجانب صافي الربح وحركة الذمم والمخزون والدائنين.",
        en: "A temporary rise may come from delaying supplier payments or cutting inventory to a level that hurts service, an improvement that does not repeat. A decline in a growing company may be normal investment in working capital. Read it beside net profit and movements in receivables, inventory, and payables.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "المقبوضات النقدية من العمليات", en: "Cash received from operations" }, value: "250,000" },
        { label: { ar: "المدفوعات النقدية التشغيلية", en: "Operating cash payments" }, value: "210,000" },
      ],
      steps: [
        { label: { ar: "صافي التدفق التشغيلي", en: "Net operating cash flow" }, expression: "250,000 - 210,000 = 40,000" },
      ],
      result: { label: { ar: "التدفق النقدي التشغيلي", en: "Operating cash flow" }, value: "40,000" },
      reading: {
        ar: "في هذا المثال المبسّط ولّدت العمليات 40,000 نقدًا صافيًا. إن كان صافي الربح للفترة نفسها 90,000 مثلًا، فالفرق 50,000 محبوس في مكان ما، غالبًا في ذمم لم تُحصّل أو مخزون زاد، ويستحق التتبع.",
        en: "In this simplified example operations generated 40,000 of net cash. If net profit for the same period were, say, 90,000, the 50,000 gap is locked up somewhere, usually in uncollected receivables or increased inventory, and is worth tracing.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "التدفق التشغيلي الصافي ومكوناته ومجموعه من بداية السنة", en: "Net operating cash flow, its components, and year-to-date total" },
        code: `-- Amounts are signed: inflows positive, outflows negative.
-- The section mapping, not the source account, decides what is "operating".
Operating Cash Flow :=
CALCULATE (
    SUM ( 'CashFlow'[Amount] ),
    'CashFlowLine'[Section] = "Operating"
)

Operating Cash Inflows :=
CALCULATE (
    [Operating Cash Flow],
    'CashFlow'[Amount] > 0
)

Operating Cash Outflows :=
CALCULATE (
    [Operating Cash Flow],
    'CashFlow'[Amount] < 0
)

-- Flows are additive, so a running year-to-date total is valid here
-- (unlike balances). Pass a year-end date such as "06-30" for a fiscal year.
Operating Cash Flow YTD :=
CALCULATE (
    [Operating Cash Flow],
    DATESYTD ( 'Date'[Date] )
)`,
        assumptions: [
          {
            ar: "'CashFlow' جدول حقائق بحركات نقدية مصنفة (أو ناتجة عن قائمة التدفقات النقدية المعدّة بالطريقة غير المباشرة)، والمبالغ بإشارة: المقبوضات موجبة والمدفوعات سالبة.",
            en: "'CashFlow' is a fact table of classified cash movements (or lines produced by an indirect-method cash flow statement), with signed amounts: receipts positive and payments negative.",
          },
          {
            ar: "'CashFlowLine' بُعد تعيين يربط كل سطر بقسم القائمة (تشغيلي، استثماري، تمويلي) وفق السياسة المحاسبية المعتمدة. التعيين يجب أن يطابق القوائم المالية الرسمية.",
            en: "'CashFlowLine' is a mapping dimension assigning each line to a statement section (operating, investing, financing) according to the approved accounting policy. The mapping must match the official financial statements.",
          },
          {
            ar: "جدول 'Date' معلَّم كجدول تاريخ ومرتبط بتاريخ الحركة. DATESYTD يفترض سنة ميلادية ما لم يُمرر تاريخ نهاية السنة المالية.",
            en: "The 'Date' table is marked as a date table and related to the movement date. DATESYTD assumes a calendar year unless a fiscal year-end date is passed.",
          },
          {
            ar: "تصنيف المقبوضات والمدفوعات يُطبّق على مستوى السطر؛ إن كان الجدول يحمل صافي حركة يومية فالتقسيم إلى داخل وخارج يصبح تقسيمًا لصافي الأيام لا للحركات.",
            en: "The inflow/outflow split applies at row level; if the table holds a net daily movement, the split becomes a split of net days rather than of individual movements.",
          },
        ],
        requires: ["CashFlow[Amount]", "CashFlow[MovementDate]", "CashFlowLine[Section]", "Date[Date]"],
      },
    ],
    model: [
      {
        table: "CashFlow",
        grain: { ar: "حركة نقدية واحدة أو سطر واحد من قائمة التدفقات لكل تاريخ وكيان", en: "One cash movement or cash flow statement line per date and entity" },
        columns: ["CashFlowLineId", "EntityId", "MovementDate", "Amount", "CurrencyCode"],
        role: { ar: "مصدر المبالغ النقدية الموقّعة", en: "Source of signed cash amounts" },
      },
      {
        table: "CashFlowLine",
        grain: { ar: "بند واحد في هيكل قائمة التدفقات النقدية", en: "One line in the cash flow statement structure" },
        columns: ["CashFlowLineId", "LineName", "Section", "SortOrder"],
        role: {
          ar: "يعيّن كل بند إلى قسم تشغيلي أو استثماري أو تمويلي، ويحدد ترتيب العرض في الجسر",
          en: "Maps each line to operating, investing, or financing, and sets display order in the bridge",
        },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "FiscalYear", "FiscalMonth"],
        role: { ar: "يحدد الفترة ويُمكّن المجموع من بداية السنة", en: "Sets the period and enables the year-to-date total" },
      },
    ],
    visuals: [
      {
        pattern: "waterfall-variance",
        why: {
          ar: "جسر من صافي الربح إلى التدفق التشغيلي عبر البنود غير النقدية وحركات رأس المال العامل يشرح لماذا يختلف النقد عن الربح، كما يقترح المرجع.",
          en: "A bridge from net profit to operating cash flow through non-cash items and working-capital movements explains why cash differs from profit, as the reference suggests.",
        },
      },
      {
        pattern: "period-over-period",
        why: {
          ar: "اتجاه التدفق الشهري مع المجموع من بداية السنة ومقارنته بالعام الماضي يفصل التذبذب الموسمي عن التغير الحقيقي.",
          en: "A monthly cash flow trend with year-to-date total compared to last year separates seasonal swings from real change.",
        },
      },
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "عرض التدفق التشغيلي بجانب صافي الربح في البطاقة نفسها يكشف فورًا فجوة جودة الأرباح.",
          en: "Showing operating cash flow beside net profit on the same card exposes the earnings-quality gap immediately.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "الخلط بين الربح والتدفق النقدي: الإهلاك والمخصصات تخفض الربح دون أن تخرج نقدًا، وزيادة الذمم والمخزون تحبس نقدًا دون أن تخفض الربح. استخدم تعيين المؤسسة المحاسبي لا تقديرًا من قائمة الدخل.",
        en: "Confusing profit with cash flow: depreciation and provisions reduce profit without any cash leaving, while rising receivables and inventory lock up cash without reducing profit. Use the organization's accounting mapping, not an estimate from the income statement.",
      },
      {
        ar: "تعيين أقسام مختلف عن القوائم الرسمية: تصنيف الفوائد المدفوعة أو الضرائب أو توزيعات الأرباح في قسم مختلف يجعل الرقم لا يطابق قائمة التدفقات المعتمدة أبدًا.",
        en: "A section mapping that differs from the official statements: classifying interest paid, taxes, or dividends in a different section means the figure never reconciles to the approved cash flow statement.",
      },
      {
        ar: "التحويلات بين حسابات المنشأة البنكية تُسجل كمقبوضات ومدفوعات وهمية إن لم تُستبعد، فتتضخم الأرقام الإجمالية للداخل والخارج.",
        en: "Transfers between the organization's own bank accounts appear as phantom receipts and payments unless excluded, inflating gross inflow and outflow figures.",
      },
      {
        ar: "قراءة شهر واحد بمعزل عن غيره: دفعة ضريبية ربعية أو تحصيل كبير متأخر يقلب شهرًا من موجب إلى سالب. اعرض المجموع من بداية السنة أو المتوسط المتحرك بجانبه.",
        en: "Reading one month in isolation: a quarterly tax payment or a large late collection flips a month from positive to negative. Show the year-to-date total or a rolling sum beside it.",
      },
      {
        ar: "تجميع الكيانات دون استبعاد التدفقات بين الشركات أو بعملات مختلفة بلا تحويل متسق يعطي رقمًا للمجموعة لا يطابق القوائم الموحدة.",
        en: "Consolidating entities without eliminating intercompany flows, or across currencies without consistent conversion, gives a group figure that does not match the consolidated statements.",
      },
    ],
    variants: [
      {
        label: { ar: "الطريقة غير المباشرة", en: "Indirect method" },
        formula: "Net Income + Non-cash Expenses - Increase in Operating Working Capital",
        difference: {
          ar: "تصل إلى الرقم نفسه انطلاقًا من صافي الربح وتعديله بالبنود غير النقدية وحركات رأس المال العامل. أكثر شيوعًا في القوائم المنشورة، وأنفع لشرح الفرق بين الربح والنقد.",
          en: "Reaches the same figure starting from net income, adjusted for non-cash items and working-capital movements. More common in published statements and more useful for explaining the gap between profit and cash.",
        },
      },
      {
        label: { ar: "التدفق النقدي الحر", en: "Free cash flow" },
        formula: "Operating Cash Flow - Capital Expenditure",
        difference: {
          ar: "يطرح الإنفاق الرأسمالي ليُظهر النقد المتاح فعلًا للسداد أو التوزيع. تعريفه غير موحد بين المؤسسات، فيجب ذكره صراحة.",
          en: "Deducts capital expenditure to show cash actually available for repayment or distribution. Its definition is not standardized across organizations, so it must be stated explicitly.",
        },
      },
      {
        label: { ar: "نسبة تحويل الربح إلى نقد", en: "Cash conversion ratio" },
        formula: "Operating Cash Flow / Net Income",
        difference: {
          ar: "نسبة لا مبلغ، تقيس كم من الربح تحوّل إلى نقد. تفقد معناها عندما يكون صافي الربح صفرًا أو سالبًا.",
          en: "A ratio rather than an amount, measuring how much of profit turned into cash. It loses meaning when net income is zero or negative.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "التدفق التشغيلي قابل للجمع: مجموع التدفقات الشهرية يساوي تدفق السنة، ومجموع المقبوضات والمدفوعات (بإشارتيهما) يساوي الصافي.",
          en: "Operating cash flow is additive: monthly flows sum to the annual flow, and receipts plus payments (with their signs) equal the net.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "تقسيم قائمة التدفقات النقدية إلى أنشطة تشغيلية واستثمارية وتمويلية هو العرض المتبع في الأطر المحاسبية الرئيسية، ويمكن عرض القسم التشغيلي بالطريقة المباشرة أو غير المباشرة.",
          en: "Dividing the cash flow statement into operating, investing, and financing activities is the customary presentation in the main accounting frameworks, and the operating section may be presented using the direct or indirect method.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "تصنيف بعض البنود مثل الفوائد وتوزيعات الأرباح والضرائب قد يختلف بحسب الإطار المحاسبي وسياسة المنشأة، ولذلك يجب اتباع تعيين المؤسسة المعتمد.",
          en: "The classification of some items, such as interest, dividends, and taxes, can differ by accounting framework and entity policy, so the organization's approved mapping must be followed.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (250,000 و210,000) مبسّطة ومن تأليفنا للتوضيح، وكذلك أرقام التمرين.",
          en: "The example figures (250,000 and 210,000) are simplified and invented for illustration, as are the exercise figures.",
        },
      },
    ],
    related: ["dso", "current-ratio", "gross-profit-margin", "inventory-turnover"],
    exercise: {
      prompt: {
        ar: "باستخدام الطريقة غير المباشرة: صافي الربح 120,000، والإهلاك 30,000، وزادت الذمم المدينة 45,000، وزاد المخزون 20,000، وزادت الذمم الدائنة 15,000. احسب التدفق النقدي التشغيلي، وفسّر لماذا يقل عن صافي الربح.",
        en: "Using the indirect method: net profit 120,000, depreciation 30,000, receivables increased by 45,000, inventory increased by 20,000, and payables increased by 15,000. Compute operating cash flow and explain why it is below net profit.",
      },
      hint: {
        ar: "أضف البنود غير النقدية. زيادة الأصول المتداولة تستهلك نقدًا فتُطرح، وزيادة الذمم الدائنة تحفظ نقدًا فتُضاف.",
        en: "Add back non-cash items. An increase in current assets consumes cash and is subtracted; an increase in payables preserves cash and is added.",
      },
      answer: {
        ar: "التدفق التشغيلي = 120,000 + 30,000 − 45,000 − 20,000 + 15,000 = 100,000. يقل عن الربح بـ 20,000 لأن زيادة الذمم والمخزون حبست 65,000 نقدًا، ولم يعوّض منها إلا الإهلاك غير النقدي (30,000) وتأخير الدفع للموردين (15,000). الجزء الأكبر من الفجوة ذمم لم تُحصّل، وهي إشارة لمراجعة DSO.",
        en: "Operating cash flow = 120,000 + 30,000 - 45,000 - 20,000 + 15,000 = 100,000. It is 20,000 below profit because higher receivables and inventory locked up 65,000 of cash, offset only by non-cash depreciation (30,000) and slower supplier payments (15,000). The largest part of the gap is uncollected receivables, a signal to review DSO.",
      },
    },
    references: [
      {
        title: "DATESYTD function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/datesytd-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع المجموع من بداية السنة، بما في ذلك تمرير تاريخ نهاية السنة المالية.",
          en: "Reference for the year-to-date total, including passing a fiscal year-end date.",
        },
      },
      {
        title: "CALCULATE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/calculate-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع تطبيق مرشح القسم التشغيلي وتقسيم الداخل والخارج.",
          en: "Reference for applying the operating-section filter and the inflow/outflow split.",
        },
      },
    ],
  },
];
