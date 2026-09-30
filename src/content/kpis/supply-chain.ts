import type { Kpi } from "../types";

export const supplyChainKpis: Kpi[] = [
  {
    id: "inventory-turnover",
    slug: "inventory-turnover",
    name: "Inventory Turnover",
    acronym: "ITR",
    nameAr: "معدل دوران المخزون",
    domains: ["supply-chain", "retail", "manufacturing"],
    category: { ar: "كفاءة المخزون", en: "Inventory efficiency" },
    difficulty: "intermediate",
    unit: { ar: "مرة (عدد الدورات في الفترة)", en: "Times (turns per period)" },
    aggregation: "ratio",
    definition: {
      ar: "عدد المرات التي استُبدل فيها المخزون بالكامل خلال فترة محددة. يقيس سرعة تحوّل البضاعة المخزّنة إلى مبيعات، وبالتالي كفاءة استخدام رأس المال المحتجز في المخزون.",
      en: "How many times inventory was fully replaced during a period. It measures how quickly stored goods convert into sales, and therefore how efficiently capital tied up in inventory is being used.",
    },
    whyItMatters: {
      ar: "كل ريال في المخزون هو ريال غير متاح للتشغيل، ويحمل تكلفة تخزين وتأمين ومخاطر تقادم. دوران أعلى يعني تحرير سيولة أسرع، لكنه قد يعني أيضًا مخزونًا رقيقًا يعرّضك لنفاد الأصناف. المؤشر يُقرأ دائمًا مع مستوى الخدمة.",
      en: "Every unit of currency in inventory is unavailable for operations and carries storage, insurance, and obsolescence cost. Higher turnover frees cash faster, but it can also mean thin stock that exposes you to stockouts. The metric is always read alongside service level.",
    },
    interpretation: {
      ar: "دوران 6 مرات سنويًا يعني أن المخزون يُباع ويُستبدل كل شهرين تقريبًا (12 ÷ 6). في السوبرماركت قد يتجاوز 20، وفي قطع الغيار الثقيلة قد يكون أقل من 2 — والرقمان طبيعيان في سياقهما. المقارنة المفيدة هي مع تاريخ الشركة نفسها أو بين أصناف متشابهة، لا بين قطاعات مختلفة.",
      en: "Six turns a year means inventory sells and is replaced roughly every two months (12 ÷ 6). A supermarket may exceed 20 while heavy spare parts may sit below 2 — both are normal in context. The useful comparison is against the company own history or across similar items, not across industries.",
    },
    formula: "Inventory Turnover = COGS / Average Inventory Value",
    numerator: {
      ar: "تكلفة البضاعة المباعة خلال الفترة (COGS)، بالتكلفة لا بسعر البيع.",
      en: "Cost of goods sold in the period, stated at cost rather than selling price.",
    },
    denominator: {
      ar: "متوسط قيمة المخزون خلال نفس الفترة، ويُحسب عادة كمتوسط أرصدة نهاية كل شهر لا كمتوسط الرصيد الأول والأخير.",
      en: "Average inventory value over the same period, normally the mean of month-end balances rather than just opening and closing.",
    },
    timeGrain: {
      ar: "يُحسب عادة سنويًا أو لاثني عشر شهرًا متحركة (TTM). حسابه شهريًا يعطي رقمًا صغيرًا مضللًا ما لم يُضرب في 12 ليصبح معدلًا سنويًا، ويجب توضيح أيهما استُخدم في عنوان المؤشر.",
      en: "Usually computed annually or on a trailing twelve months basis. Computing it monthly yields a small, misleading number unless annualised by multiplying by 12; state clearly which convention the visual uses.",
    },
    direction: {
      rising: {
        ar: "ارتفاع الدوران يشير عادة إلى تصريف أسرع وتحرر سيولة، أو إلى انخفاض مستوى المخزون المحتفظ به.",
        en: "Rising turnover usually signals faster movement and freed cash, or a lower level of stock being held.",
      },
      falling: {
        ar: "انخفاض الدوران يشير إلى تراكم مخزون أو تباطؤ مبيعات، أو إلى شراء مسبق مقصود قبل موسم أو ارتفاع أسعار متوقع.",
        en: "Falling turnover points to stock build-up or slowing sales, or to a deliberate pre-buy ahead of a season or expected price rise.",
      },
      caveat: {
        ar: "الأعلى ليس أفضل تلقائيًا. دوران مرتفع جدًا كثيرًا ما يصاحبه نفاد أصناف ومبيعات ضائعة وتكلفة شحن عاجل. اقرأ المؤشر دائمًا بجوار معدل النفاد ومستوى الخدمة.",
        en: "Higher is not automatically better. Very high turnover often comes with stockouts, lost sales, and expedited freight cost. Always read it beside stockout rate and service level.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "تكلفة البضاعة المباعة خلال السنة", en: "COGS for the year" }, value: "4,800,000" },
        { label: { ar: "قيمة المخزون في بداية السنة", en: "Opening inventory value" }, value: "820,000" },
        { label: { ar: "قيمة المخزون في نهاية السنة", en: "Closing inventory value" }, value: "780,000" },
      ],
      steps: [
        {
          label: { ar: "متوسط المخزون", en: "Average inventory" },
          expression: "(820,000 + 780,000) / 2 = 800,000",
        },
        {
          label: { ar: "الدوران", en: "Turnover" },
          expression: "4,800,000 / 800,000 = 6.0",
        },
        {
          label: { ar: "أيام التغطية المكافئة", en: "Equivalent days of supply" },
          expression: "365 / 6.0 = 60.8 يومًا",
        },
      ],
      result: { label: { ar: "معدل الدوران السنوي", en: "Annual turnover" }, value: "6.0 مرات" },
      reading: {
        ar: "المخزون يُستبدل كل 61 يومًا تقريبًا. إن كانت مدة التوريد 45 يومًا فهذا هامش أمان ضيق نسبيًا: أي تأخر بسيط من المورد يتحول مباشرة إلى نفاد.",
        en: "Inventory turns roughly every 61 days. If supplier lead time is 45 days, that is a fairly thin buffer: a modest supplier delay converts directly into a stockout.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "الدوران السنوي من لقطات مخزون شهرية", en: "Annualised turnover from monthly inventory snapshots" },
        code: `COGS :=
SUM ( 'Sales'[CostAmount] )

-- Inventory is a snapshot: it must never be SUMmed across dates.
-- AVERAGEX over months gives the average month-end balance.
Average Inventory Value :=
AVERAGEX (
    VALUES ( 'Date'[MonthKey] ),
    CALCULATE (
        SUM ( 'InventorySnapshot'[StockValue] ),
        LASTDATE ( 'Date'[Date] )
    )
)

Inventory Turnover :=
VAR CogsInPeriod = [COGS]
VAR AvgInventory = [Average Inventory Value]
VAR MonthsInPeriod =
    COUNTROWS ( VALUES ( 'Date'[MonthKey] ) )
RETURN
    DIVIDE ( CogsInPeriod, AvgInventory ) * DIVIDE ( 12, MonthsInPeriod )`,
        assumptions: [
          {
            ar: "جدول 'InventorySnapshot' يسجل رصيدًا واحدًا لكل صنف/موقع في نهاية كل يوم أو شهر، ومرتبط بجدول 'Date' بعلاقة واحد إلى متعدد.",
            en: "'InventorySnapshot' stores one balance per item/location at each day or month end and relates to 'Date' one-to-many.",
          },
          {
            ar: "'Sales'[CostAmount] بالتكلفة وليس بسعر البيع. إن كان لديك سعر البيع فقط فالنتيجة ستكون مضخّمة بمقدار الهامش.",
            en: "'Sales'[CostAmount] is at cost, not selling price. If you only have selling price, the result is inflated by the margin.",
          },
          {
            ar: "جدول 'Date' متصل وكامل ومعلّم كجدول تاريخ، وإلا فإن LASTDATE قد تعطي نتائج غير متوقعة.",
            en: "'Date' is contiguous, complete, and marked as a date table; otherwise LASTDATE can behave unexpectedly.",
          },
          {
            ar: "DIVIDE تتولى القسمة على صفر وتعيد BLANK بدل خطأ، وهو السلوك المطلوب عندما لا يوجد مخزون.",
            en: "DIVIDE handles division by zero and returns BLANK instead of an error, which is the desired behaviour when there is no inventory.",
          },
        ],
        requires: ["Sales[CostAmount]", "InventorySnapshot[StockValue]", "Date[MonthKey]", "Date[Date]"],
      },
      {
        language: "sql",
        label: { ar: "تحضير الدوران على مستوى الصنف في طبقة المستودع", en: "Item-level turnover prepared in the warehouse layer" },
        code: `WITH monthly_inventory AS (
    SELECT
        s.item_id,
        DATE_TRUNC('month', s.snapshot_date) AS month_start,
        AVG(s.stock_value)                   AS avg_stock_value
    FROM inventory_snapshot AS s
    WHERE s.snapshot_date >= DATEADD(year, -1, CURRENT_DATE)
    GROUP BY s.item_id, DATE_TRUNC('month', s.snapshot_date)
),
cogs AS (
    SELECT
        sl.item_id,
        SUM(sl.cost_amount) AS cogs_amount
    FROM sales_line AS sl
    WHERE sl.sale_date >= DATEADD(year, -1, CURRENT_DATE)
    GROUP BY sl.item_id
)
SELECT
    c.item_id,
    c.cogs_amount,
    AVG(mi.avg_stock_value) AS average_inventory,
    c.cogs_amount / NULLIF(AVG(mi.avg_stock_value), 0) AS inventory_turnover
FROM cogs AS c
JOIN monthly_inventory AS mi
    ON mi.item_id = c.item_id
GROUP BY c.item_id, c.cogs_amount;`,
        assumptions: [
          {
            ar: "NULLIF تمنع القسمة على صفر للأصناف التي لا رصيد لها، فتعيد NULL بدل خطأ.",
            en: "NULLIF prevents division by zero for items with no balance, returning NULL rather than erroring.",
          },
          {
            ar: "الصيغة مكتوبة بلهجة SQL شائعة؛ دوال التاريخ تختلف بين المحركات (DATEADD في SQL Server وSnowflake، وINTERVAL في PostgreSQL).",
            en: "Written in a common SQL dialect; date functions differ across engines (DATEADD on SQL Server and Snowflake, INTERVAL on PostgreSQL).",
          },
        ],
      },
    ],
    model: [
      {
        table: "Sales",
        grain: { ar: "سطر فاتورة واحد لكل صنف", en: "One invoice line per item" },
        columns: ["SalesOrderLineId", "ItemId", "SaleDate", "Quantity", "CostAmount", "NetAmount"],
        role: { ar: "مصدر البسط (COGS)", en: "Source of the numerator (COGS)" },
      },
      {
        table: "InventorySnapshot",
        grain: { ar: "صنف × موقع × تاريخ اللقطة", en: "Item x location x snapshot date" },
        columns: ["SnapshotDate", "ItemId", "LocationId", "QuantityOnHand", "StockValue"],
        role: { ar: "مصدر المقام (متوسط المخزون)", en: "Source of the denominator (average inventory)" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "YearMonth", "FiscalYear"],
        role: { ar: "جدول تاريخ معلّم يتحكم في سياق الفترة", en: "Marked date table controlling period context" },
      },
    ],
    visuals: [
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "يعرض الدوران بجوار أيام التغطية ومعدل النفاد في بطاقة واحدة، فلا يُقرأ الرقم منفردًا.",
          en: "Shows turnover beside days of supply and stockout rate in one card, so the number is never read alone.",
        },
      },
      {
        pattern: "inventory-aging-matrix",
        why: {
          ar: "الدوران متوسط يخفي الأصناف الراكدة؛ مصفوفة الأعمار تكشف أين يتركز المخزون البطيء.",
          en: "Turnover is an average that hides slow movers; an ageing matrix reveals where slow stock is concentrated.",
        },
      },
      {
        pattern: "scatter-quadrant",
        why: {
          ar: "رسم الدوران مقابل قيمة المخزون لكل صنف يحدد فورًا الأصناف عالية القيمة بطيئة الحركة.",
          en: "Plotting turnover against inventory value per item immediately isolates high-value slow movers.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "استخدام الإيراد بدل تكلفة البضاعة المباعة في البسط. هذا يضخّم الدوران بنسبة الهامش تمامًا، ويجعل المقارنة مع أي مرجع خارجي بلا معنى.",
        en: "Using revenue instead of COGS in the numerator. This inflates turnover by exactly the margin and makes any external comparison meaningless.",
      },
      {
        ar: "حساب متوسط المخزون من رصيدين فقط (البداية والنهاية) في نشاط موسمي. شركة تصفّي مخزونها قبل نهاية السنة ستُظهر دورانًا وهميًا مرتفعًا.",
        en: "Averaging only opening and closing balances in a seasonal business. A company that clears stock before year end will show a falsely high turnover.",
      },
      {
        ar: "جمع رصيد المخزون عبر التواريخ باستخدام SUM. المخزون لقطة شبه تجميعية؛ جمع 30 يومًا يعطي رقمًا أكبر 30 مرة من الواقع.",
        en: "Summing inventory balance across dates with SUM. Inventory is a semi-additive snapshot; summing 30 days gives a number thirty times reality.",
      },
      {
        ar: "خلط وحدات القياس بين المبيعات والمخزون (صندوق مقابل حبة)، وهو خطأ شائع جدًا عند دمج بيانات WMS مع بيانات المبيعات.",
        en: "Mixing units of measure between sales and inventory (case versus each), a very common error when combining WMS with sales data.",
      },
      {
        ar: "حساب دوران إجمالي على مستوى الشركة ثم استخدامه لتقييم فئة منتج. المتوسط المرجّح بالقيمة يختلف جوهريًا عن متوسط الفئات.",
        en: "Computing one company-wide turnover then using it to judge a product category. A value-weighted average differs materially from a per-category one.",
      },
    ],
    variants: [
      {
        label: { ar: "الدوران بالكمية بدل القيمة", en: "Unit-based instead of value-based turnover" },
        formula: "Units Sold / Average Units On Hand",
        difference: {
          ar: "يتجاهل تغيّر أسعار التكلفة، وهو مفيد في بيئات التضخم أو عند تقلب أسعار المواد الخام، لكنه لا يصلح للمقارنة بين أصناف مختلفة القيمة.",
          en: "Ignores changes in cost prices, which helps in inflationary settings or volatile raw-material markets, but it cannot compare items of different value.",
        },
      },
      {
        label: { ar: "استخدام المخزون في نهاية الفترة فقط", en: "Using period-end inventory only" },
        formula: "COGS / Ending Inventory Value",
        difference: {
          ar: "أبسط حسابيًا ويُستخدم في بعض التحليلات المالية السريعة، لكنه يتأثر بشدة بالموسمية وبقرارات تصفية نهاية السنة.",
          en: "Simpler and used in some quick financial analyses, but heavily distorted by seasonality and year-end clearance decisions.",
        },
      },
      {
        label: { ar: "أيام المخزون بدل عدد الدورات", en: "Days of inventory instead of turns" },
        formula: "365 / Inventory Turnover",
        difference: {
          ar: "نفس المعلومة بوحدة مختلفة. الأيام أسهل في الحوار التشغيلي لأنها تُقارن مباشرة بمدة التوريد، والدورات أشيع في التقارير المالية.",
          en: "The same information in a different unit. Days are easier in operational conversations because they compare directly to lead time; turns are more common in financial reporting.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "أيام المخزون تساوي عدد أيام الفترة مقسومًا على معدل الدوران. هذه علاقة رياضية بحتة تنتج من التعريف نفسه.",
          en: "Days of inventory equals period days divided by turnover. This is pure arithmetic that follows from the definition itself.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "استخدام COGS في البسط ومتوسط المخزون في المقام هو العرف السائد في التحليل المالي والتشغيلي.",
          en: "Using COGS in the numerator and average inventory in the denominator is the prevailing convention in both financial and operational analysis.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "ما إذا كان المخزون في الطريق (In-Transit) أو مخزون الأمانة (Consignment) يدخل في المقام هو قرار داخلي لكل شركة، ويجب توثيقه في قاموس المؤشرات.",
          en: "Whether in-transit or consignment stock is included in the denominator is an internal decision per company and must be documented in the metric dictionary.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "الأرقام في المثال المحسوب أعلاه من تأليفنا لغرض التعليم فقط، ولا تمثل شركة أو قطاعًا بعينه.",
          en: "The numbers in the worked example above are invented for teaching only and do not represent any specific company or sector.",
        },
      },
    ],
    related: ["otif", "gross-profit-margin", "aov"],
    exercise: {
      prompt: {
        ar: "شركة سجلت تكلفة بضاعة مباعة قدرها 9,000,000 خلال السنة، وكان متوسط أرصدة المخزون الشهرية 1,500,000. احسب معدل الدوران وأيام التغطية، ثم اذكر سببًا واحدًا يجعل هذا الرقم غير كافٍ لاتخاذ قرار.",
        en: "A company recorded COGS of 9,000,000 for the year with an average monthly inventory balance of 1,500,000. Compute turnover and days of supply, then give one reason this number alone is not enough to decide on.",
      },
      hint: {
        ar: "ابدأ بالقسمة المباشرة، ثم حوّل الدورات إلى أيام. للسؤال الثاني: فكّر فيما يخفيه المتوسط.",
        en: "Start with the direct division, then convert turns into days. For the second part, think about what an average hides.",
      },
      answer: {
        ar: "الدوران = 9,000,000 ÷ 1,500,000 = 6 مرات سنويًا، وأيام التغطية = 365 ÷ 6 ≈ 61 يومًا. الرقم غير كافٍ لأنه متوسط على مستوى الشركة: قد يكون ناتجًا عن أصناف سريعة جدًا تعوّض أصنافًا راكدة تمامًا. القرار يحتاج التوزيع على مستوى الصنف (تحليل ABC أو مصفوفة أعمار) لا المتوسط.",
        en: "Turnover = 9,000,000 ÷ 1,500,000 = 6 turns a year, and days of supply = 365 ÷ 6 ≈ 61 days. The number is insufficient because it is a company-level average: it may come from very fast items offsetting completely dead ones. The decision needs the item-level distribution (ABC analysis or an ageing matrix), not the mean.",
      },
    },
    references: [
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-29",
        note: {
          ar: "توثيق سلوك القسمة الآمنة والقيمة البديلة عند القسمة على صفر.",
          en: "Documents safe division behaviour and the alternate result on division by zero.",
        },
      },
      {
        title: "AVERAGEX function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/averagex-function-dax",
        accessed: "2026-09-29",
        note: {
          ar: "أساس حساب متوسط الأرصدة الشهرية بشكل صحيح عبر التكرار على جدول.",
          en: "The basis for correctly averaging monthly balances by iterating over a table.",
        },
      },
    ],
  },

  {
    id: "otif",
    slug: "otif",
    name: "On-Time In-Full",
    acronym: "OTIF",
    nameAr: "التسليم في الموعد وبالكامل",
    domains: ["supply-chain", "retail", "manufacturing"],
    category: { ar: "مستوى الخدمة", en: "Service level" },
    difficulty: "intermediate",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة الطلبات التي وصلت في الموعد المتفق عليه وبالكمية الكاملة معًا. الشرطان يجب أن يتحققا في الوقت نفسه: طلب وصل كاملًا لكن متأخرًا يُحتسب فشلًا، وكذلك طلب وصل في موعده ناقصًا.",
      en: "The share of orders that arrived both on the agreed date and in the full quantity. Both conditions must hold at once: an order that arrives complete but late counts as a failure, and so does one that arrives on time but short.",
    },
    whyItMatters: {
      ar: "هو المؤشر الأقرب إلى تجربة العميل الحقيقية في سلسلة الإمداد، لأنه يقيس الوعد لا الجهد. كثير من المؤسسات تحقق نسب تسليم مرتفعة في كل بُعد على حدة بينما OTIF منخفض، وهذا بالضبط ما يشعر به العميل.",
      en: "It is the supply chain metric closest to real customer experience because it measures the promise rather than the effort. Many organizations score well on each dimension separately while OTIF is low, and that gap is exactly what the customer feels.",
    },
    interpretation: {
      ar: "OTIF بنسبة 85% يعني أن 15 طلبًا من كل 100 خذل العميل بشكل ما. لأن المؤشر حاصل ضرب شرطين، فإن أداءً بنسبة 95% في الموعد و95% في الكمية يعطي OTIF أقرب إلى 90% لا 95%. هذا الانخفاض المركّب هو أول ما يجب شرحه لأصحاب المصلحة.",
      en: "An OTIF of 85% means 15 of every 100 orders let the customer down in some way. Because the metric combines two conditions, 95% on-time and 95% in-full produces an OTIF nearer 90% than 95%. Explaining this compounding effect is the first thing stakeholders need.",
    },
    formula: "OTIF % = Orders Delivered On Time AND In Full / Total Orders Due x 100",
    numerator: {
      ar: "عدد وحدات القياس (طلبات أو أسطر أو شحنات) التي حققت شرطي الموعد والكمية معًا.",
      en: "Count of measurement units (orders, lines, or shipments) that met both the date and the quantity condition.",
    },
    denominator: {
      ar: "إجمالي الوحدات التي كان من المفترض تسليمها خلال الفترة، بما فيها التي لم تُسلّم إطلاقًا. استثناء غير المسلّم يرفع النسبة زورًا.",
      en: "All units that were due for delivery in the period, including those never delivered at all. Excluding undelivered items falsely raises the rate.",
    },
    timeGrain: {
      ar: "يُقاس أسبوعيًا أو شهريًا حسب تاريخ الاستحقاق لا تاريخ التسليم الفعلي، وإلا انتقل الفشل إلى الفترة التالية واختفى من الفترة التي حدث فيها.",
      en: "Measured weekly or monthly on the due date rather than the actual delivery date; otherwise failures migrate to the next period and vanish from the one where they happened.",
    },
    direction: {
      rising: {
        ar: "ارتفاع OTIF يعني وفاءً أفضل بالوعود، لكنه قد يكون ناتجًا عن تمديد مواعيد الوعد أو رفع مستوى المخزون، وكلاهما له تكلفة.",
        en: "Rising OTIF means promises are being kept better, but it may come from extending promised dates or raising inventory levels, both of which cost money.",
      },
      falling: {
        ar: "انخفاض OTIF يشير إلى خلل في التوريد أو الطاقة أو دقة الوعد. حدد أي الشرطين ينهار قبل تفسير السبب.",
        en: "Falling OTIF points to a supply, capacity, or promise-accuracy problem. Identify which of the two conditions is breaking before explaining the cause.",
      },
      caveat: {
        ar: "OTIF بنسبة 100% ليس هدفًا بريئًا: تحقيقه دائمًا يعني غالبًا مخزون أمان مفرطًا أو مواعيد وعد متحفظة جدًا. الهدف الصحيح يوازن بين الالتزام وتكلفته.",
        en: "A 100% OTIF is not an innocent goal: always hitting it usually means excessive safety stock or very conservative promise dates. The right target balances compliance against its cost.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "إجمالي الطلبات المستحقة في الشهر", en: "Total orders due in the month" }, value: "500" },
        { label: { ar: "طلبات وصلت في الموعد", en: "Orders delivered on time" }, value: "460" },
        { label: { ar: "طلبات وصلت بالكمية الكاملة", en: "Orders delivered in full" }, value: "470" },
        { label: { ar: "طلبات حققت الشرطين معًا", en: "Orders meeting both conditions" }, value: "437" },
      ],
      steps: [
        { label: { ar: "نسبة الالتزام بالموعد", en: "On-time rate" }, expression: "460 / 500 = 92.0%" },
        { label: { ar: "نسبة الاكتمال", en: "In-full rate" }, expression: "470 / 500 = 94.0%" },
        { label: { ar: "OTIF", en: "OTIF" }, expression: "437 / 500 = 87.4%" },
      ],
      result: { label: { ar: "OTIF الشهري", en: "Monthly OTIF" }, value: "87.4%" },
      reading: {
        ar: "لاحظ أن OTIF (87.4%) أقل من أي من البعدين منفردًا. لو عرضت البعدين فقط في لوحة المعلومات لبدا الأداء أفضل بخمس نقاط مما يراه العميل فعلًا.",
        en: "Note that OTIF (87.4%) is below either dimension alone. Showing only the two dimensions on a dashboard would make performance look five points better than what the customer actually experiences.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "OTIF على مستوى سطر الطلب", en: "OTIF at order-line grain" },
        code: `-- Grain matters: this measure evaluates each order line.
-- Change VALUES ( 'OrderLine'[OrderId] ) to measure at order grain instead.

Lines Due :=
CALCULATE (
    COUNTROWS ( 'OrderLine' ),
    NOT ISBLANK ( 'OrderLine'[DueDate] )
)

Lines OTIF :=
CALCULATE (
    COUNTROWS ( 'OrderLine' ),
    'OrderLine'[DeliveredDate] <= 'OrderLine'[DueDate],
    'OrderLine'[DeliveredQty] >= 'OrderLine'[OrderedQty]
)

OTIF % :=
DIVIDE ( [Lines OTIF], [Lines Due] )

-- Order-grain variant: an order is OTIF only when every one of its lines is.
Orders OTIF % :=
VAR OrdersDue =
    DISTINCTCOUNT ( 'OrderLine'[OrderId] )
VAR OrdersGood =
    COUNTROWS (
        FILTER (
            VALUES ( 'OrderLine'[OrderId] ),
            CALCULATE ( [Lines Due] ) = CALCULATE ( [Lines OTIF] )
        )
    )
RETURN
    DIVIDE ( OrdersGood, OrdersDue )`,
        assumptions: [
          {
            ar: "'OrderLine' بحبيبية سطر واحد لكل صنف في الطلب، ويحتوي DueDate وDeliveredDate وOrderedQty وDeliveredQty.",
            en: "'OrderLine' is at one row per item per order and carries DueDate, DeliveredDate, OrderedQty, and DeliveredQty.",
          },
          {
            ar: "الأسطر غير المسلّمة يجب أن تبقى في الجدول بقيمة DeliveredDate فارغة حتى تُحتسب ضمن المقام. المقارنة مع BLANK تُقيَّم كـ FALSE فلا تدخل البسط، وهو السلوك المطلوب.",
            en: "Undelivered lines must remain in the table with a blank DeliveredDate so they count in the denominator. Comparison against BLANK evaluates as FALSE so they stay out of the numerator, which is the desired behaviour.",
          },
          {
            ar: "لا يوجد سماح بالتأخر هنا. إن كان العقد يسمح بيوم تأخير فعدّل الشرط إلى DeliveredDate <= DueDate + 1.",
            en: "No delivery tolerance is applied. If the contract allows one day, change the condition to DeliveredDate <= DueDate + 1.",
          },
          {
            ar: "الترشيح على أعمدة من نفس الجدول داخل CALCULATE هنا يعمل لأنهما عمودان في 'OrderLine' يُقيَّمان في سياق الصف نفسه.",
            en: "Filtering on two columns of the same table inside CALCULATE works here because both belong to 'OrderLine' and are evaluated in the same row context.",
          },
        ],
        requires: ["OrderLine[DueDate]", "OrderLine[DeliveredDate]", "OrderLine[OrderedQty]", "OrderLine[DeliveredQty]"],
      },
    ],
    model: [
      {
        table: "OrderLine",
        grain: { ar: "سطر واحد لكل صنف في كل طلب", en: "One row per item per order" },
        columns: ["OrderId", "LineId", "ItemId", "DueDate", "DeliveredDate", "OrderedQty", "DeliveredQty"],
        role: { ar: "جدول الحقائق الأساسي للمؤشر", en: "Primary fact table for the metric" },
      },
      {
        table: "Customer",
        grain: { ar: "عميل واحد لكل صف", en: "One row per customer" },
        columns: ["CustomerId", "CustomerName", "ServiceTier", "Region"],
        role: { ar: "التقسيم حسب العميل ومستوى الخدمة المتعاقد عليه", en: "Segmentation by customer and contracted service tier" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "WeekKey", "MonthKey"],
        role: { ar: "يُربط بـ DueDate لا بـ DeliveredDate", en: "Related to DueDate rather than DeliveredDate" },
      },
    ],
    visuals: [
      {
        pattern: "actual-vs-target",
        why: {
          ar: "OTIF يُقاس دائمًا مقابل التزام متعاقد عليه، فالمقارنة بالهدف أهم من الاتجاه المطلق.",
          en: "OTIF is always measured against a contracted commitment, so comparison to target matters more than the raw trend.",
        },
      },
      {
        pattern: "exception-table",
        why: {
          ar: "القيمة التشغيلية في قائمة الطلبات التي فشلت وسببها، لا في النسبة المجمّعة.",
          en: "The operational value lies in the list of failed orders and their reason, not in the aggregate percentage.",
        },
      },
      {
        pattern: "waterfall-variance",
        why: {
          ar: "يفكك الفجوة بين 100% والنسبة المحققة إلى أسباب الفشل (تأخر مورد، نقص مخزون، خطأ شحن).",
          en: "Decomposes the gap between 100% and the achieved rate into failure reasons (supplier delay, stock shortage, shipping error).",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عدم تثبيت الحبيبية. القياس على مستوى الشحنة يعطي رقمًا أعلى بكثير من القياس على مستوى سطر الطلب، وهو أشهر سبب لاختلاف تقريرك عن تقرير العميل.",
        en: "Not fixing the grain. Measuring per shipment yields a far higher number than measuring per order line, and this is the most common reason your report disagrees with the customer.",
      },
      {
        ar: "استخدام تاريخ الوعد المحدّث بدل الوعد الأصلي. إعادة الجدولة بعد التأخر تجعل كل طلب في موعده وتفرّغ المؤشر من معناه.",
        en: "Using the revised promise date instead of the original. Rescheduling after a delay makes every order on time and empties the metric of meaning.",
      },
      {
        ar: "استبعاد الطلبات الملغاة بسبب عدم التوفر. هذه أوضح حالات الفشل، واستبعادها يحوّل المؤشر إلى مقياس للطلبات الناجحة فقط.",
        en: "Excluding orders cancelled for unavailability. These are the clearest failures, and dropping them turns the metric into a measure of successful orders only.",
      },
      {
        ar: "احتساب التسليم المبكر جدًا نجاحًا دون تفكير. بعض العملاء يرفضون الاستلام المبكر لأنه يشغل مساحتهم، والعقد قد ينص على نافذة لا تاريخ.",
        en: "Counting very early delivery as success without thought. Some customers refuse early receipt because it consumes their space, and the contract may specify a window rather than a date.",
      },
      {
        ar: "حساب متوسط نسب OTIF الشهرية للحصول على الرقم السنوي. النسب لا تُجمع ولا تُتوسّط؛ أعد الحساب من البسط والمقام السنويين.",
        en: "Averaging monthly OTIF percentages to get an annual figure. Ratios cannot be averaged; recompute from the annual numerator and denominator.",
      },
    ],
    variants: [
      {
        label: { ar: "OTIF بالكمية بدل عدد الأسطر", en: "Quantity-weighted OTIF" },
        formula: "Quantity Delivered On Time And In Full / Total Quantity Due",
        difference: {
          ar: "يعطي وزنًا أكبر للطلبات الكبيرة. أعدل تجاريًا لكنه يخفي فشلًا متكررًا في طلبات صغيرة قد تكون عملاء استراتيجيين.",
          en: "Weights large orders more heavily. Commercially fairer, but it hides repeated failures on small orders that may belong to strategic customers.",
        },
      },
      {
        label: { ar: "OTIF مع نافذة سماح", en: "OTIF with a delivery window" },
        formula: "Delivered within (Due Date - a) to (Due Date + b) AND Full",
        difference: {
          ar: "يعكس العقود التي تحدد نافذة استلام. النافذة قرار تعاقدي لكل عميل ويجب أن تكون عمودًا في جدول العميل لا رقمًا ثابتًا في المقياس.",
          en: "Reflects contracts that define a receiving window. The window is a per-customer contractual decision and belongs in the customer table, not hard-coded in the measure.",
        },
      },
      {
        label: { ar: "OTIF الداخلي مقابل الخارجي", en: "Internal versus customer-measured OTIF" },
        formula: "Same formula, different source of the due date and the receipt event",
        difference: {
          ar: "الداخلي يستخدم تاريخ مغادرة المستودع، والخارجي يستخدم تاريخ استلام العميل المسجل عنده. الفجوة بينهما هي زمن النقل، ويجب عرضها لا إخفاؤها.",
          en: "The internal version uses the warehouse departure date; the external one uses the customer recorded receipt. The gap between them is transit time, and it should be shown rather than hidden.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "OTIF لا يمكن أن يتجاوز أيًا من نسبتي الالتزام بالموعد والاكتمال، لأنه يشترطهما معًا.",
          en: "OTIF can never exceed either the on-time rate or the in-full rate, because it requires both conditions simultaneously.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "قياس OTIF على مستوى سطر الطلب مقابل تاريخ الوعد الأصلي هو الممارسة الأكثر شيوعًا في تجارة التجزئة والسلع الاستهلاكية.",
          en: "Measuring OTIF at order-line grain against the original promise date is the most common practice in retail and consumer goods.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "نافذة السماح بالتأخر أو التبكير، ومعاملة الطلبات الملغاة والجزئية، كلها قواعد تعاقدية تختلف من عميل لآخر ولا يوجد فيها معيار عالمي.",
          en: "Tolerance windows for late or early delivery, and the treatment of cancelled and partial orders, are contractual rules that differ per customer with no universal standard.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (500 طلب، 437 ناجحًا) من تأليفنا للتوضيح، واختيرت لإبراز أثر تركيب الشرطين.",
          en: "The example figures (500 orders, 437 successful) are invented for illustration and chosen to highlight the compounding effect of the two conditions.",
        },
      },
    ],
    related: ["inventory-turnover", "csat"],
    exercise: {
      prompt: {
        ar: "مورد سلّم 1,200 سطر طلب خلال الربع. 96% منها في الموعد، و93% منها بالكمية الكاملة، و1,080 سطرًا حقق الشرطين معًا. احسب OTIF، ثم فسّر لماذا لا يساوي حاصل ضرب 96% في 93%.",
        en: "A supplier delivered 1,200 order lines in a quarter. 96% were on time, 93% were in full, and 1,080 lines met both conditions. Compute OTIF, then explain why it does not equal 96% multiplied by 93%.",
      },
      hint: {
        ar: "حاصل الضرب يفترض أن الفشلين مستقلان إحصائيًا. هل هما كذلك في الواقع؟",
        en: "Multiplying assumes the two failures are statistically independent. Are they, in reality?",
      },
      answer: {
        ar: "OTIF = 1,080 ÷ 1,200 = 90.0%. حاصل الضرب يعطي 89.3%، والفارق لأن الفشلين ليسا مستقلين: الأسطر الناقصة كثيرًا ما تكون هي نفسها المتأخرة (نفس سبب نقص المخزون). التداخل بين مجموعتي الفشل يجعل OTIF الفعلي أعلى قليلًا من الضرب. لهذا يجب حساب OTIF من البيانات مباشرة لا اشتقاقه من البعدين.",
        en: "OTIF = 1,080 ÷ 1,200 = 90.0%. The product gives 89.3%, and the difference is because the two failures are not independent: short lines are often the same ones that are late (the same stock shortage causes both). The overlap between the two failure sets makes actual OTIF slightly higher than the product. This is why OTIF must be computed from the data rather than derived from the two dimensions.",
      },
    },
    references: [
      {
        title: "CALCULATE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/calculate-function-dax",
        accessed: "2026-09-29",
        note: {
          ar: "مرجع تعديل سياق الترشيح المستخدم في عزل الأسطر المحققة للشرطين.",
          en: "Reference for the filter-context modification used to isolate lines meeting both conditions.",
        },
      },
    ],
  },
];
