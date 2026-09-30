import type { Kpi } from "../types";

export const financeKpis: Kpi[] = [
  {
    id: "gross-profit-margin",
    slug: "gross-profit-margin",
    name: "Gross Profit Margin",
    acronym: "GPM",
    nameAr: "هامش الربح الإجمالي",
    domains: ["finance", "retail", "fnb", "manufacturing"],
    category: { ar: "الربحية", en: "Profitability" },
    difficulty: "beginner",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة ما يتبقى من كل ريال إيراد بعد خصم التكلفة المباشرة للمنتج أو الخدمة. هو أول مستوى ربحية في قائمة الدخل، وقبل أي مصروف تشغيلي أو إداري.",
      en: "The share of each unit of revenue left after deducting the direct cost of the product or service. It is the first profitability level in the income statement, before any operating or administrative expense.",
    },
    whyItMatters: {
      ar: "يفصل جودة نموذج العمل نفسه عن كفاءة إدارته. شركة بهامش إجمالي ضعيف لا يمكن إنقاذها بخفض المصاريف الإدارية، لأن المشكلة في التسعير أو التكلفة المباشرة لا في التشغيل.",
      en: "It separates the quality of the business model itself from how efficiently it is run. A company with a weak gross margin cannot be rescued by cutting overheads, because the problem sits in pricing or direct cost rather than in operations.",
    },
    interpretation: {
      ar: "هامش 40% يعني أن 40 هللة من كل ريال مبيعات متاحة لتغطية الرواتب والإيجار والتسويق وما يتبقى هو الربح. المستوى المقبول يختلف جذريًا بالقطاع: البرمجيات قد تتجاوز 80% وتجارة الجملة قد تعمل تحت 15%، وكلاهما نموذج سليم.",
      en: "A 40% margin means forty cents of every sales unit is available to cover salaries, rent, and marketing, with whatever remains being profit. The acceptable level differs sharply by sector: software may exceed 80% while wholesale may run below 15%, and both are sound models.",
    },
    formula: "Gross Profit Margin % = (Revenue - COGS) / Revenue x 100",
    numerator: {
      ar: "الربح الإجمالي: صافي الإيراد بعد الخصومات والمرتجعات، ناقص تكلفة البضاعة المباعة.",
      en: "Gross profit: net revenue after discounts and returns, less cost of goods sold.",
    },
    denominator: {
      ar: "صافي الإيراد لنفس الفترة. استخدام الإيراد الإجمالي قبل الخصومات يرفع الهامش زورًا.",
      en: "Net revenue for the same period. Using gross revenue before discounts falsely raises the margin.",
    },
    timeGrain: {
      ar: "قابل للحساب على أي مستوى زمني، لكن بشرط إعادة حسابه من البسط والمقام في كل مستوى. الهامش السنوي ليس متوسط الهوامش الشهرية.",
      en: "Computable at any time grain, provided it is recomputed from numerator and denominator at each level. The annual margin is not the average of monthly margins.",
    },
    direction: {
      rising: {
        ar: "ارتفاع الهامش يشير إلى تسعير أقوى أو تكلفة أقل أو مزيج منتجات أفضل.",
        en: "A rising margin points to stronger pricing, lower cost, or a better product mix.",
      },
      falling: {
        ar: "انخفاض الهامش يعني ضغط تسعير أو ارتفاع تكلفة مدخلات أو نمو منتجات منخفضة الهامش.",
        en: "A falling margin means pricing pressure, higher input costs, or growth in low-margin products.",
      },
      caveat: {
        ar: "الأعلى ليس دائمًا أفضل: رفع الهامش بتقليص المبيعات المخفّضة قد يقلل الربح المطلق. الهامش نسبة، والشركة تصرف من الأرقام المطلقة لا من النسب.",
        en: "Higher is not always better: lifting margin by shedding discounted sales can reduce absolute profit. Margin is a ratio, and a company spends absolute money, not percentages.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "صافي الإيراد", en: "Net revenue" }, value: "2,500,000" },
        { label: { ar: "تكلفة البضاعة المباعة", en: "COGS" }, value: "1,625,000" },
      ],
      steps: [
        { label: { ar: "الربح الإجمالي", en: "Gross profit" }, expression: "2,500,000 - 1,625,000 = 875,000" },
        { label: { ar: "الهامش", en: "Margin" }, expression: "875,000 / 2,500,000 = 35.0%" },
      ],
      result: { label: { ar: "الهامش الإجمالي", en: "Gross profit margin" }, value: "35.0%" },
      reading: {
        ar: "لو انخفض الهامش إلى 33% مع بقاء الإيراد ثابتًا، فالربح الإجمالي يفقد 50,000 — وهو ما يعادل عادة عدة رواتب سنوية. نقطتان مئويتان ليستا تفصيلًا صغيرًا.",
        en: "If the margin slipped to 33% with revenue unchanged, gross profit loses 50,000 — typically several annual salaries. Two percentage points is not a small detail.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "الهامش الإجمالي مع معالجة الإيراد الصفري", en: "Gross margin with zero-revenue handling" },
        code: `Net Revenue :=
SUM ( 'Sales'[NetAmount] )

COGS :=
SUM ( 'Sales'[CostAmount] )

Gross Profit :=
[Net Revenue] - [COGS]

-- DIVIDE returns BLANK when revenue is zero, so a filtered card with no
-- sales shows empty rather than an error or a misleading 0%.
Gross Profit Margin % :=
DIVIDE ( [Gross Profit], [Net Revenue] )`,
        assumptions: [
          {
            ar: "'Sales'[NetAmount] صافٍ بعد الخصومات والمرتجعات. إن كانت المرتجعات في جدول منفصل فيجب طرحها صراحة.",
            en: "'Sales'[NetAmount] is net of discounts and returns. If returns live in a separate table they must be subtracted explicitly.",
          },
          {
            ar: "'Sales'[CostAmount] يمثل التكلفة المباشرة فقط. إدخال تكاليف غير مباشرة هنا يحوّل المؤشر إلى هامش تشغيلي بلا قصد.",
            en: "'Sales'[CostAmount] holds direct cost only. Putting indirect cost here silently turns the metric into an operating margin.",
          },
          {
            ar: "المقياس ينسجم مع أي تقسيم (منتج، قناة، فترة) لأنه يعيد الحساب من المجاميع في كل سياق ترشيح.",
            en: "The measure behaves correctly under any slicing (product, channel, period) because it recomputes from totals in each filter context.",
          },
        ],
        requires: ["Sales[NetAmount]", "Sales[CostAmount]"],
      },
      {
        language: "sql",
        label: { ar: "الهامش حسب فئة المنتج", en: "Margin by product category" },
        code: `SELECT
    p.category_name,
    SUM(sl.net_amount)                                         AS net_revenue,
    SUM(sl.cost_amount)                                        AS cogs,
    SUM(sl.net_amount) - SUM(sl.cost_amount)                   AS gross_profit,
    (SUM(sl.net_amount) - SUM(sl.cost_amount))
        / NULLIF(SUM(sl.net_amount), 0)                        AS gross_margin_pct
FROM sales_line AS sl
JOIN product AS p
    ON p.product_id = sl.product_id
WHERE sl.sale_date >= DATE '2026-01-01'
GROUP BY p.category_name
ORDER BY gross_profit DESC;`,
        assumptions: [
          {
            ar: "الترتيب بالربح المطلق لا بالنسبة، لأن فئة صغيرة بهامش 90% قد تكون أقل أهمية من فئة كبيرة بهامش 20%.",
            en: "Ordered by absolute profit rather than percentage, because a small category at 90% may matter less than a large one at 20%.",
          },
        ],
      },
    ],
    model: [
      {
        table: "Sales",
        grain: { ar: "سطر فاتورة واحد", en: "One invoice line" },
        columns: ["SalesLineId", "ProductId", "SaleDate", "NetAmount", "CostAmount", "DiscountAmount"],
        role: { ar: "مصدر البسط والمقام معًا", en: "Source of both numerator and denominator" },
      },
      {
        table: "Product",
        grain: { ar: "منتج واحد لكل صف", en: "One row per product" },
        columns: ["ProductId", "CategoryName", "BrandName"],
        role: { ar: "التفكيك حسب الفئة لتفسير أثر المزيج", en: "Category breakdown used to explain mix effects" },
      },
    ],
    visuals: [
      {
        pattern: "waterfall-variance",
        why: {
          ar: "يفصل تغيّر الهامش إلى أثر السعر والتكلفة والمزيج، وهو التفكيك الذي يطلبه المدير المالي دائمًا.",
          en: "Splits margin movement into price, cost, and mix effects — the decomposition a CFO always asks for.",
        },
      },
      {
        pattern: "pl-matrix",
        why: {
          ar: "عرض الإيراد والتكلفة والهامش في أعمدة متجاورة يمنع قراءة النسبة دون الأرقام المطلقة خلفها.",
          en: "Showing revenue, cost, and margin in adjacent columns prevents reading the ratio without the absolute numbers behind it.",
        },
      },
      {
        pattern: "scatter-quadrant",
        why: {
          ar: "الهامش مقابل حجم المبيعات لكل منتج يحدد ما يستحق الترويج وما يستحق إعادة التسعير.",
            en: "Margin against sales volume per product identifies what deserves promotion and what deserves re-pricing.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "حساب متوسط نسب الهامش عبر المنتجات أو الشهور. النسب لا تُتوسّط؛ يجب جمع البسط والمقام ثم القسمة.",
        en: "Averaging margin percentages across products or months. Ratios cannot be averaged; sum numerator and denominator, then divide.",
      },
      {
        ar: "اختلاف تعريف COGS بين التقرير والقوائم المالية. إن كان المصنع يحمّل تكلفة العمالة المباشرة على COGS ولا يفعل تقريرك ذلك، فالرقمان لن يتطابقا أبدًا.",
        en: "A COGS definition that differs from the financial statements. If the plant loads direct labour into COGS and your report does not, the two numbers will never reconcile.",
      },
      {
        ar: "تجاهل المرتجعات وإشعارات الخصم. في التجزئة الإلكترونية قد تصل المرتجعات إلى 20% وتقلب ترتيب المنتجات بالكامل.",
        en: "Ignoring returns and credit notes. In online retail returns can reach 20% and completely reorder the product ranking.",
      },
      {
        ar: "استخدام تكلفة قياسية قديمة بدل التكلفة الفعلية عند تقلب أسعار المواد، فيبدو الهامش مستقرًا بينما الواقع يتآكل.",
        en: "Using a stale standard cost instead of actual cost when input prices move, making margin look stable while reality erodes.",
      },
    ],
    variants: [
      {
        label: { ar: "الهامش بعد تكلفة الشحن", en: "Margin after fulfilment cost" },
        formula: "(Revenue - COGS - Fulfilment Cost) / Revenue",
        difference: {
          ar: "شائع في التجارة الإلكترونية حيث الشحن جزء جوهري من تكلفة الخدمة. ليس الهامش الإجمالي المحاسبي، ويجب تسميته بوضوح لتجنب الخلط.",
          en: "Common in e-commerce where shipping is a material part of serving the order. It is not the accounting gross margin and must be labelled clearly.",
        },
      },
      {
        label: { ar: "هامش المساهمة", en: "Contribution Margin" },
        formula: "(Revenue - Variable Costs) / Revenue",
        difference: {
          ar: "يستبعد التكاليف الثابتة بدل التكاليف المباشرة. الفرق جوهري: تكلفة ثابتة مباشرة (مثل إيجار خط إنتاج) تدخل في COGS ولا تدخل في التكاليف المتغيرة.",
          en: "Excludes fixed costs rather than direct ones. The difference is material: a direct fixed cost such as a production line lease belongs in COGS but not in variable cost.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "الهامش الإجمالي دائمًا أكبر من أو يساوي الهامش التشغيلي لنفس الفترة، لأن الثاني يطرح مصاريف إضافية.",
          en: "Gross margin is always greater than or equal to operating margin for the same period, because the latter deducts additional expenses.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "قياس الهامش على صافي الإيراد بعد الخصومات هو العرف المحاسبي السائد.",
          en: "Measuring margin on net revenue after discounts is the prevailing accounting convention.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "ما يدخل في تكلفة البضاعة المباعة (عمالة مباشرة، شحن وارد، إهلاك معدات الإنتاج) يتبع السياسة المحاسبية للشركة ويختلف بين المنشآت.",
          en: "What goes into COGS (direct labour, inbound freight, production equipment depreciation) follows company accounting policy and differs between organizations.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال من تأليفنا للتوضيح ولا تمثل أداء شركة حقيقية.",
          en: "The example figures are invented for illustration and do not represent any real company.",
        },
      },
    ],
    related: ["inventory-turnover", "aov", "cpi"],
    exercise: {
      prompt: {
        ar: "فئة A: إيراد 600,000 وتكلفة 300,000. فئة B: إيراد 1,400,000 وتكلفة 1,120,000. احسب هامش كل فئة والهامش الإجمالي، ثم بيّن لماذا لا يساوي الهامش الإجمالي متوسط الهامشين.",
        en: "Category A: revenue 600,000, cost 300,000. Category B: revenue 1,400,000, cost 1,120,000. Compute each margin and the combined margin, then show why the combined margin is not the average of the two.",
      },
      hint: {
        ar: "اجمع البسط والمقام أولًا. ثم قارن الناتج بالمتوسط البسيط للنسبتين ولاحظ من يسحب النتيجة.",
        en: "Sum numerator and denominator first. Then compare the result to the simple average of the two rates and notice which one pulls it.",
      },
      answer: {
        ar: "هامش A = 300,000 ÷ 600,000 = 50%. هامش B = 280,000 ÷ 1,400,000 = 20%. الإجمالي = (300,000 + 280,000) ÷ 2,000,000 = 29%. المتوسط البسيط للنسبتين هو 35%، وهو خطأ بست نقاط لأن الفئة B أكبر بأكثر من الضعف وتسحب المتوسط المرجّح نحو هامشها المنخفض. هذا هو أثر المزيج.",
        en: "Margin A = 300,000 ÷ 600,000 = 50%. Margin B = 280,000 ÷ 1,400,000 = 20%. Combined = (300,000 + 280,000) ÷ 2,000,000 = 29%. The simple average of the two rates is 35%, wrong by six points because B is more than twice as large and drags the weighted result toward its lower margin. This is the mix effect.",
      },
    },
    references: [
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-29",
      },
    ],
  },

  {
    id: "cpi",
    slug: "cost-performance-index",
    name: "Cost Performance Index",
    acronym: "CPI",
    nameAr: "مؤشر أداء التكلفة",
    domains: ["project-management", "finance", "manufacturing"],
    category: { ar: "القيمة المكتسبة", en: "Earned value" },
    difficulty: "advanced",
    unit: { ar: "نسبة (بلا وحدة)", en: "Index (unitless)" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة القيمة المكتسبة إلى التكلفة الفعلية. يقيس كم من القيمة المخططة حصلت عليها مقابل كل ريال أنفقته فعلًا، لا كم أنفقت مقارنة بالموازنة.",
      en: "The ratio of earned value to actual cost. It measures how much planned value you obtained for each unit actually spent, rather than how much you spent versus budget.",
    },
    whyItMatters: {
      ar: "مقارنة المصروف بالموازنة وحدها لا تخبرك بشيء عن الإنجاز. مشروع أنفق نصف موازنته قد يكون ممتازًا أو كارثيًا حسب ما أنجزه. CPI يدخل الإنجاز في المعادلة ويحوّل السؤال من «كم صرفنا؟» إلى «كم حصلنا مقابل ما صرفنا؟».",
      en: "Comparing spend to budget alone says nothing about progress. A project that spent half its budget may be excellent or disastrous depending on what it delivered. CPI puts progress into the equation, turning the question from how much we spent into how much we got for it.",
    },
    interpretation: {
      ar: "CPI = 1 يعني أن كل ريال أنفق أنتج ريالًا من القيمة المخططة. CPI = 0.8 يعني أنك حصلت على 80 هللة من القيمة مقابل كل ريال، أي تجاوز تكلفة بنسبة 25% (1 ÷ 0.8) لا 20%. هذا الفرق يُخطئ فيه كثيرون.",
      en: "CPI = 1 means each unit spent produced one unit of planned value. CPI = 0.8 means you got 80 cents of value per unit spent, which is a 25% overrun (1 ÷ 0.8), not 20%. Many people get this wrong.",
    },
    formula: "CPI = Earned Value (EV) / Actual Cost (AC)",
    numerator: {
      ar: "القيمة المكتسبة: نسبة الإنجاز الفعلية مضروبة في الموازنة المعتمدة للعمل، أي قيمة ما أُنجز مُسعّرًا بأسعار الخطة.",
      en: "Earned value: actual percent complete multiplied by the approved budget for the work, i.e. what was delivered priced at plan rates.",
    },
    denominator: {
      ar: "التكلفة الفعلية المتكبدة لإنجاز ذلك العمل خلال نفس الفترة، شاملة الالتزامات المستحقة لا المدفوعة فقط.",
      en: "Actual cost incurred to complete that work in the same period, including accrued commitments rather than only what was paid.",
    },
    timeGrain: {
      ar: "يُحسب تراكميًا من بداية المشروع افتراضيًا. الحساب الدوري (لهذه الفترة فقط) مفيد لرصد التدهور المبكر، لكن يجب تسميته صراحة CPI الدوري لتجنب الخلط.",
      en: "Computed cumulatively from project start by default. A periodic version (this period only) helps spot early deterioration, but must be labelled explicitly as periodic CPI to avoid confusion.",
    },
    direction: {
      rising: {
        ar: "ارتفاع CPI فوق 1 يعني إنجازًا بتكلفة أقل من المخطط، وهو إيجابي في العادة.",
        en: "CPI rising above 1 means work delivered below planned cost, normally positive.",
      },
      falling: {
        ar: "انخفاضه تحت 1 يعني تجاوز تكلفة. التجربة العملية تُظهر أن CPI نادرًا ما يتحسن جوهريًا بعد بلوغ المشروع نحو 20% من إنجازه.",
        en: "Falling below 1 means a cost overrun. In practice CPI rarely improves materially once a project passes roughly 20% complete.",
      },
      caveat: {
        ar: "CPI مرتفع مع SPI منخفض ليس نجاحًا: غالبًا يعني أن العمل لم يبدأ بعد فلم تُصرف أمواله. لا يُقرأ CPI أبدًا بدون SPI بجانبه.",
        en: "A high CPI with a low SPI is not success: it usually means the work has not started so its money has not been spent. CPI is never read without SPI beside it.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "الموازنة الكلية المعتمدة (BAC)", en: "Budget at completion (BAC)" }, value: "2,000,000" },
        { label: { ar: "نسبة الإنجاز الفعلية المؤكدة", en: "Verified percent complete" }, value: "40%" },
        { label: { ar: "التكلفة الفعلية حتى تاريخه (AC)", en: "Actual cost to date (AC)" }, value: "960,000" },
      ],
      steps: [
        { label: { ar: "القيمة المكتسبة", en: "Earned value" }, expression: "2,000,000 x 40% = 800,000" },
        { label: { ar: "CPI", en: "CPI" }, expression: "800,000 / 960,000 = 0.833" },
        {
          label: { ar: "التكلفة المتوقعة عند الإكمال", en: "Estimate at completion" },
          expression: "2,000,000 / 0.833 = 2,400,000",
        },
      ],
      result: { label: { ar: "CPI التراكمي", en: "Cumulative CPI" }, value: "0.83" },
      reading: {
        ar: "إذا استمر الأداء الحالي فالمشروع سينتهي بتكلفة 2.4 مليون بدل 2 مليون، أي تجاوز 400,000. لاحظ أن صيغة EAC هذه تفترض استمرار الأداء الحالي؛ صيغ أخرى تفترض عودة الأداء إلى الخطة وتعطي رقمًا أقل تشاؤمًا.",
        en: "If current performance continues the project finishes at 2.4 million instead of 2 million, a 400,000 overrun. Note this EAC formula assumes current performance persists; other formulas assume a return to plan and give a less pessimistic number.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "CPI تراكمي مع تصنيف حالة", en: "Cumulative CPI with a status band" },
        code: `Actual Cost :=
CALCULATE (
    SUM ( 'ProjectCost'[ActualAmount] ),
    'Date'[Date] <= MAX ( 'Date'[Date] )
)

-- EV is budget-priced delivered work, so it must come from percent complete
-- against the approved baseline, never from the cost table.
Earned Value :=
SUMX (
    'Task',
    'Task'[BaselineBudget] * 'Task'[PercentComplete]
)

CPI :=
DIVIDE ( [Earned Value], [Actual Cost] )

CPI Status :=
VAR Value = [CPI]
RETURN
    SWITCH (
        TRUE (),
        ISBLANK ( Value ), "No data",
        Value >= 1,    "On or under cost",
        Value >= 0.95, "Watch",
        "Over cost"
    )`,
        assumptions: [
          {
            ar: "'Task'[PercentComplete] قيمة موضوعية متحقق منها (مثل مخرجات مقبولة) لا تقدير شخصي. إن كانت تقديرية فكل مؤشرات القيمة المكتسبة تفقد معناها.",
            en: "'Task'[PercentComplete] is an objective, verified value (such as accepted deliverables), not a personal estimate. If it is a guess, every earned value metric loses meaning.",
          },
          {
            ar: "'Task'[BaselineBudget] هو خط الأساس المعتمد وليس الموازنة المحدّثة بعد طلبات التغيير، وإلا اختفى أثر التغيير من الانحراف.",
            en: "'Task'[BaselineBudget] is the approved baseline, not the budget revised after change requests; otherwise change impact disappears from the variance.",
          },
          {
            ar: "التكلفة الفعلية تراكمية حتى آخر تاريخ في سياق الترشيح، ولهذا استُخدم قيد الفترة صراحة.",
            en: "Actual cost accumulates through the last date in filter context, which is why the period constraint is applied explicitly.",
          },
          {
            ar: "SWITCH ( TRUE (), ... ) تُقيَّم بالترتيب، وفحص ISBLANK أولًا يمنع تصنيف مشروع بلا بيانات على أنه متجاوز للتكلفة.",
            en: "SWITCH ( TRUE (), ... ) evaluates in order, and testing ISBLANK first prevents a project with no data from being labelled over cost.",
          },
        ],
        requires: ["Task[BaselineBudget]", "Task[PercentComplete]", "ProjectCost[ActualAmount]"],
      },
    ],
    model: [
      {
        table: "Task",
        grain: { ar: "مهمة واحدة في هيكل تجزئة العمل", en: "One task in the work breakdown structure" },
        columns: ["TaskId", "WbsPath", "BaselineBudget", "PercentComplete", "PlannedStart", "PlannedFinish"],
        role: { ar: "مصدر القيمة المكتسبة والمخططة", en: "Source of earned and planned value" },
      },
      {
        table: "ProjectCost",
        grain: { ar: "بند تكلفة واحد لكل مهمة وتاريخ", en: "One cost line per task and date" },
        columns: ["TaskId", "CostDate", "ActualAmount", "CommitmentAmount", "CostType"],
        role: { ar: "مصدر التكلفة الفعلية (المقام)", en: "Source of actual cost (the denominator)" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "ReportingPeriod"],
        role: { ar: "يتحكم في نقطة القياس التراكمية", en: "Controls the cumulative measurement point" },
      },
    ],
    visuals: [
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "CPI وSPI يجب أن يظهرا معًا دائمًا، وبطاقة متعددة القيم تفرض هذا الاقتران بصريًا.",
          en: "CPI and SPI must always appear together, and a multi-value card enforces that pairing visually.",
        },
      },
      {
        pattern: "actual-vs-target",
        why: {
          ar: "منحنى القيمة المخططة مقابل المكتسبة مقابل الفعلية (منحنى S) هو العرض المعياري لأداء المشروع.",
          en: "The planned-versus-earned-versus-actual curve (the S-curve) is the standard view of project performance.",
        },
      },
      {
        pattern: "exception-table",
        why: {
          ar: "مصفوفة بالمهام التي CPI فيها أقل من عتبة معينة تحوّل المؤشر من رقم إلى قائمة إجراءات.",
          en: "A matrix of tasks below a CPI threshold turns the metric from a number into an action list.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "اشتقاق نسبة الإنجاز من التكلفة المنفقة. هذا يجعل CPI يساوي 1 دائمًا بحكم التعريف ويفرّغ المؤشر تمامًا، وهو أشهر خطأ في تطبيق القيمة المكتسبة.",
        en: "Deriving percent complete from cost spent. This forces CPI to equal 1 by construction and empties the metric completely — the best-known failure in earned value implementation.",
      },
      {
        ar: "مقارنة AC بـ PV بدل EV. هذه مقارنة الموازنة بالمصروف، وهي التي جاء CPI ليحل محلها أصلًا.",
        en: "Comparing AC to PV instead of EV. That is the budget-versus-spend comparison that CPI exists to replace.",
      },
      {
        ar: "تجاهل الالتزامات غير المفوترة. مواد وصلت ولم تصل فاتورتها بعد تجعل AC منخفضًا وCPI متفائلًا زورًا حتى نهاية الشهر.",
        en: "Ignoring uninvoiced commitments. Materials received but not yet invoiced keep AC low and CPI falsely optimistic until month end.",
      },
      {
        ar: "تجميع CPI بأخذ متوسط مؤشرات المهام. الصحيح جمع EV وAC على مستوى المحفظة ثم القسمة.",
        en: "Aggregating CPI by averaging task-level indices. The correct approach sums EV and AC at portfolio level, then divides.",
      },
      {
        ar: "إعادة تأسيس خط الأساس بعد كل تجاوز. هذا يعيد CPI إلى 1 ويمحو تاريخ الأداء، فيفقد المشروع قدرته على التنبؤ.",
        en: "Re-baselining after every overrun. This resets CPI to 1 and erases performance history, destroying the project ability to forecast.",
      },
    ],
    variants: [
      {
        label: { ar: "CPI الدوري", en: "Periodic CPI" },
        formula: "EV for the period / AC for the period",
        difference: {
          ar: "يقيس أداء الفترة الحالية وحدها. أسرع في كشف التدهور من التراكمي الذي يخفف الإشارة بتاريخ طويل، لكنه أكثر تذبذبًا.",
          en: "Measures the current period alone. Faster at exposing deterioration than the cumulative version, which dampens the signal with a long history, but noisier.",
        },
      },
      {
        label: { ar: "TCPI: مؤشر الأداء المطلوب للإكمال", en: "TCPI: To-Complete Performance Index" },
        formula: "(BAC - EV) / (BAC - AC)",
        difference: {
          ar: "يجيب سؤالًا مختلفًا: ما مستوى الكفاءة المطلوب في بقية المشروع للبقاء ضمن الموازنة؟ إذا تجاوز TCPI قيمة CPI الحالية بفارق كبير فالخطة غير واقعية.",
          en: "Answers a different question: what efficiency is required for the remaining work to stay within budget? If TCPI far exceeds current CPI, the plan is not realistic.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "انحراف التكلفة (CV = EV − AC) يكون سالبًا إذا وفقط إذا كان CPI أقل من 1. المؤشران يحملان نفس الإشارة دائمًا.",
          en: "Cost variance (CV = EV − AC) is negative if and only if CPI is below 1. The two always carry the same sign.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "منهجية القيمة المكتسبة بمكوناتها PV وEV وAC موصوفة في أدبيات إدارة المشاريع المهنية، ومنها دليل PMBOK الصادر عن معهد إدارة المشاريع.",
          en: "Earned value management with its PV, EV, and AC components is described in professional project management literature, including the PMBOK Guide from the Project Management Institute.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "طريقة قياس نسبة الإنجاز (0/100، أو 50/50، أو وحدات مكتملة) قرار منهجي لكل مؤسسة ويغيّر قيمة CPI جوهريًا.",
          en: "The percent-complete method (0/100, 50/50, or units completed) is a methodological choice per organization and materially changes CPI.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "مشروع المثال بموازنة مليوني وحدة من تأليفنا، واختير ليُظهر الفرق بين تجاوز 20% و25%.",
          en: "The two-million-unit example project is invented, chosen to show the difference between a 20% and a 25% overrun.",
        },
      },
    ],
    related: ["gross-profit-margin"],
    exercise: {
      prompt: {
        ar: "مشروع موازنته 5,000,000. أُنجز منه 30% متحقق منه، والتكلفة الفعلية حتى تاريخه 1,800,000. احسب EV وCPI والتكلفة المتوقعة عند الإكمال بافتراض استمرار الأداء، ثم اذكر ما المؤشر الذي يجب عرضه بجانبه ولماذا.",
        en: "A project has a 5,000,000 budget. Verified completion is 30% and actual cost to date is 1,800,000. Compute EV, CPI, and the estimate at completion assuming performance continues, then state which metric must be shown beside it and why.",
      },
      hint: {
        ar: "EV = الموازنة × نسبة الإنجاز. وللتكلفة المتوقعة اقسم الموازنة الكلية على CPI.",
        en: "EV = budget x percent complete. For the estimate at completion, divide total budget by CPI.",
      },
      answer: {
        ar: "EV = 5,000,000 × 30% = 1,500,000. CPI = 1,500,000 ÷ 1,800,000 = 0.833. EAC = 5,000,000 ÷ 0.833 = 6,000,000، أي تجاوز متوقع مليون وحدة. يجب عرض SPI بجانبه: CPI وحده لا يميّز بين مشروع يتجاوز التكلفة وهو في موعده ومشروع يتجاوزها وهو متأخر أيضًا، والحالتان تستدعيان قرارين مختلفين تمامًا.",
        en: "EV = 5,000,000 x 30% = 1,500,000. CPI = 1,500,000 ÷ 1,800,000 = 0.833. EAC = 5,000,000 ÷ 0.833 = 6,000,000, a forecast overrun of one million. SPI must be shown beside it: CPI alone cannot distinguish a project that is over cost but on schedule from one that is over cost and late, and those two call for entirely different decisions.",
      },
    },
    references: [
      {
        title: "A Guide to the Project Management Body of Knowledge (PMBOK Guide)",
        publisher: "Project Management Institute",
        note: {
          ar: "المرجع المهني الأوسع انتشارًا لوصف منهجية القيمة المكتسبة ومكوناتها. راجع الإصدار المعتمد لدى مؤسستك لأن التفاصيل تتغير بين الإصدارات.",
          en: "The most widely used professional reference describing earned value management and its components. Check the edition your organization adopts, as details change between editions.",
        },
      },
      {
        title: "SWITCH function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/switch-function-dax",
        accessed: "2026-09-29",
      },
    ],
  },
];
