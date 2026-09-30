import type { Kpi } from "../types";

export const logisticsKpis: Kpi[] = [
  {
    id: "stockout-rate",
    slug: "stockout-rate",
    name: "Stockout Rate",
    nameAr: "معدل نفاد المخزون",
    domains: ["supply-chain", "retail"],
    category: { ar: "توفر المخزون", en: "Inventory availability" },
    difficulty: "intermediate",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة فرص الطلب أو فترات المراقبة التي كان فيها الصنف غير متوفر. يُقاس بإحدى طريقتين: على أساس الأحداث (طلبات أو أسطر لم تُلبَّ لعدم التوفر) أو على أساس الملاحظات الزمنية (صنف × موقع × يوم كان رصيده صفرًا)، ولا يجوز الخلط بينهما في رقم واحد.",
      en: "The share of demand opportunities or observation periods in which an item was unavailable. It is measured one of two ways: event-based (orders or lines that could not be served for lack of stock) or time-observation-based (item x location x day with zero stock). The two must never be mixed in a single number.",
    },
    whyItMatters: {
      ar: "النفاد هو الوجه الآخر لتقليل المخزون: كل صنف غير متوفر يعني مبيعات ضائعة، وعميلًا قد يتجه إلى منافس، وأحيانًا شحنًا عاجلًا مكلفًا. المؤشر يكشف أين تتحول قرارات المخزون الرشيقة إلى خسارة إيراد، ولذلك يُقرأ دائمًا بجوار معدل الدوران.",
      en: "Stockouts are the flip side of cutting inventory: every unavailable item means lost sales, a customer who may switch to a competitor, and sometimes costly expedited freight. The metric shows where lean inventory decisions turn into lost revenue, which is why it is always read beside inventory turnover.",
    },
    interpretation: {
      ar: "معدل نفاد 5% على أساس الملاحظات اليومية يعني أن الصنف كان غائبًا عن الرف في يوم واحد من كل 20 يومًا تشغيليًا في المتوسط. الرقم الإجمالي نادرًا ما يكون مفيدًا وحده؛ القيمة الحقيقية في معرفة أي الأصناف وأي المواقع تتركز فيها أيام النفاد، وهل هي أصناف سريعة الحركة تحمل أغلب الطلب.",
      en: "A 5% stockout rate on daily observations means an item was missing from the shelf on roughly one in every 20 trading days. The overall number is rarely useful alone; the real value is knowing which items and locations concentrate the out-of-stock days, and whether they are fast movers carrying most of the demand.",
    },
    formula: "Stockout Rate % = Stockout Observations (or Events) / Total Eligible Observations (or Events) x 100",
    numerator: {
      ar: "عدد الملاحظات (صنف × موقع × يوم) التي كان فيها الرصيد المتاح صفرًا أو أقل، أو عدد أحداث الطلب التي لم تُلبَّ لعدم التوفر — بحسب التعريف المعتمد.",
      en: "Count of observations (item x location x day) with zero or negative available stock, or count of demand events not served for lack of stock — depending on the agreed definition.",
    },
    denominator: {
      ar: "إجمالي الملاحظات أو الأحداث المؤهلة من نفس النوع. الأصناف غير المدرجة في تشكيلة الموقع، أو الموقوفة، أو قيد الإطلاق يجب استبعادها من المقام والبسط معًا.",
      en: "All eligible observations or events of the same type. Items not ranged at the location, discontinued, or not yet launched must be excluded from both numerator and denominator.",
    },
    timeGrain: {
      ar: "تُسجل الملاحظة يوميًا عادة (أو عند الإغلاق) وتُجمّع أسبوعيًا أو شهريًا. توقيت اللقطة مهم: لقطة نهاية اليوم قد تُظهر نفادًا بعد نفاد البضاعة مساءً رغم توفرها طوال اليوم، ولقطة الصباح قد تخفي نفادًا حدث وقت الذروة.",
      en: "Observations are usually recorded daily (or at close) and rolled up weekly or monthly. Snapshot timing matters: an end-of-day snapshot may show a stockout after an evening sell-out even though stock was there all day, while a morning snapshot may hide a stockout that happened at peak time.",
    },
    direction: {
      rising: {
        ar: "ارتفاع المعدل يشير إلى مشكلة توفر: تأخر موردين، أو تنبؤ ضعيف بالطلب، أو مخزون أمان غير كافٍ، أو خلل في التوزيع بين المواقع.",
        en: "A rising rate signals an availability problem: supplier delays, weak demand forecasting, insufficient safety stock, or poor allocation across locations.",
      },
      falling: {
        ar: "انخفاض المعدل يعني توفرًا أفضل، لكنه قد يأتي من رفع المخزون بشكل مكلف أو من استبعاد أصناف من التشكيلة بدل حل مشكلتها.",
        en: "A falling rate means better availability, but it may come from expensively raising stock or from removing items from the range instead of fixing them.",
      },
      caveat: {
        ar: "صفر نفاد ليس هدفًا اقتصاديًا في الغالب؛ يتطلب مخزونًا ضخمًا يخفض الدوران ويرفع خطر التقادم. الهدف الصحيح يختلف حسب فئة الصنف (أصناف A أعلى توفرًا من أصناف C)، وتحديده قرار داخلي.",
        en: "Zero stockouts is usually not an economic target; it requires heavy stock that lowers turnover and raises obsolescence risk. The right target differs by item class (A items need higher availability than C items), and setting it is an internal decision.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "ملاحظات صنف × موقع × يوم المؤهلة", en: "Eligible item x location x day observations" }, value: "900" },
        { label: { ar: "ملاحظات كان الرصيد فيها صفرًا", en: "Observations with zero available stock" }, value: "45" },
      ],
      steps: [
        { label: { ar: "معدل النفاد", en: "Stockout rate" }, expression: "45 ÷ 900 = 0.05" },
        { label: { ar: "كنسبة مئوية", en: "As a percentage" }, expression: "0.05 × 100 = 5%" },
        { label: { ar: "معدل التوفر المقابل", en: "Complementary availability rate" }, expression: "100% − 5% = 95%" },
      ],
      result: { label: { ar: "معدل النفاد في الفترة", en: "Stockout rate for the period" }, value: "5%" },
      reading: {
        ar: "في 45 من أصل 900 ملاحظة كان الصنف غير متاح في موقعه. الخطوة التالية ليست الاحتفال بتوفر 95%، بل فرز هذه الملاحظات الـ 45: إن تركزت في أصناف قليلة سريعة الحركة فالمبيعات الضائعة أكبر بكثير مما توحي به النسبة.",
        en: "In 45 of 900 observations the item was unavailable at its location. The next step is not to celebrate 95% availability but to sort those 45 observations: if they concentrate on a few fast movers, lost sales are far larger than the percentage suggests.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "معدل النفاد على أساس الملاحظات اليومية", en: "Stockout rate on daily observations" },
        code: `-- Observation-based definition: one row per item x location x day.
-- Do not mix with event-based stockouts (unfilled order lines) in the same measure.

Eligible Observations :=
CALCULATE (
    COUNTROWS ( 'AvailabilitySnapshot' ),
    'AvailabilitySnapshot'[IsRanged] = 1
)

Stockout Observations :=
CALCULATE (
    COUNTROWS ( 'AvailabilitySnapshot' ),
    'AvailabilitySnapshot'[IsRanged] = 1,
    'AvailabilitySnapshot'[AvailableQty] <= 0
)

Stockout Rate % :=
DIVIDE ( [Stockout Observations], [Eligible Observations] )`,
        assumptions: [
          {
            ar: "'AvailabilitySnapshot' يحتوي صفًا واحدًا لكل صنف × موقع × يوم، ويُسجل في نفس توقيت اللقطة كل يوم، ومرتبط بجدول 'Date' بعلاقة واحد إلى متعدد على SnapshotDate.",
            en: "'AvailabilitySnapshot' holds one row per item x location x day, captured at the same time each day, and relates to 'Date' one-to-many on SnapshotDate.",
          },
          {
            ar: "العمود IsRanged = 1 عندما يكون الصنف مدرجًا ونشطًا في تشكيلة الموقع في ذلك اليوم. الأصناف الموقوفة أو غير المدرجة تُستبعد من البسط والمقام معًا.",
            en: "IsRanged = 1 when the item is listed and active in the location range on that day. Discontinued or unranged items are excluded from both numerator and denominator.",
          },
          {
            ar: "AvailableQty هو الرصيد المتاح للبيع (بعد الحجوزات)، لا الرصيد الدفتري. استخدام الرصيد الدفتري يخفي النفاد عندما يكون المخزون محجوزًا أو تالفًا.",
            en: "AvailableQty is stock available to sell (after reservations), not book stock. Using book stock hides stockouts when inventory is reserved or damaged.",
          },
          {
            ar: "المقياس نسبة من مجموعين، لذا يعطي النتيجة الصحيحة عند أي مستوى تجميع (صنف، موقع، شهر) دون متوسط نسب.",
            en: "The measure is a ratio of two sums, so it is correct at any level of aggregation (item, location, month) without averaging ratios.",
          },
        ],
        requires: [
          "AvailabilitySnapshot[IsRanged]",
          "AvailabilitySnapshot[AvailableQty]",
          "AvailabilitySnapshot[SnapshotDate]",
          "Date[Date]",
        ],
      },
    ],
    model: [
      {
        table: "AvailabilitySnapshot",
        grain: { ar: "صنف × موقع × يوم", en: "Item x location x day" },
        columns: ["SnapshotDate", "ItemId", "LocationId", "AvailableQty", "IsRanged"],
        role: { ar: "جدول الحقائق الأساسي: مصدر البسط والمقام", en: "Primary fact table: source of numerator and denominator" },
      },
      {
        table: "Item",
        grain: { ar: "صنف واحد لكل صف", en: "One row per item" },
        columns: ["ItemId", "ItemName", "Category", "AbcClass", "Supplier"],
        role: { ar: "التقسيم حسب الفئة وتصنيف ABC والمورد", en: "Slicing by category, ABC class, and supplier" },
      },
      {
        table: "Location",
        grain: { ar: "موقع واحد (مستودع أو فرع) لكل صف", en: "One row per location (warehouse or store)" },
        columns: ["LocationId", "LocationName", "LocationType", "Region"],
        role: { ar: "التقسيم حسب المستودع والفرع والمنطقة", en: "Slicing by warehouse, store, and region" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "WeekKey", "MonthKey", "IsTradingDay"],
        role: { ar: "جدول تاريخ معلّم يُربط بـ SnapshotDate", en: "Marked date table related to SnapshotDate" },
      },
    ],
    visuals: [
      {
        pattern: "period-over-period",
        why: {
          ar: "اتجاه النفاد أسبوعيًا مقارنة بالفترة السابقة يكشف هل المشكلة موسمية أم متفاقمة، ويمكن تقسيمه حسب المستودع أو الموقع.",
          en: "The weekly stockout trend against the prior period shows whether the problem is seasonal or worsening, and can be split by warehouse or location.",
        },
      },
      {
        pattern: "heatmap-calendar",
        why: {
          ar: "خريطة حرارية للأيام حسب الصنف أو الموقع تُظهر أنماط النفاد المتكررة، مثل نهايات الأسابيع أو الأيام السابقة لموعد التوريد.",
          en: "A day-level heatmap by item or location exposes recurring stockout patterns, such as weekends or the days just before a delivery slot.",
        },
      },
      {
        pattern: "exception-table",
        why: {
          ar: "قائمة الأصناف غير المتوفرة الآن مرتبة حسب الطلب اليومي المعتاد هي ما يحتاجه فريق التخطيط للتصرف فورًا.",
          en: "A list of items currently out of stock, ranked by typical daily demand, is what the planning team needs to act immediately.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "الخلط بين التعريف القائم على الأحداث والتعريف القائم على الملاحظات الزمنية. 3% من أسطر الطلب غير الملباة و3% من أيام الصنف الفارغة رقمان مختلفان جوهريًا، وجمعهما أو مقارنتهما يعطي نتيجة بلا معنى.",
        en: "Mixing the event-based and the time-observation-based definitions. 3% of order lines unfilled and 3% of item-days empty are fundamentally different numbers, and combining or comparing them is meaningless.",
      },
      {
        ar: "إبقاء الأصناف الموقوفة أو غير المدرجة في المقام. هذا يخفض المعدل صوريًا لأنها تُحتسب \"متوفرة\"، أو يرفعه صوريًا إن كان رصيدها صفرًا دائمًا.",
        en: "Keeping discontinued or unranged items in the denominator. This lowers the rate artificially when they count as 'available', or inflates it when their stock is permanently zero.",
      },
      {
        ar: "عدم توحيد توقيت اللقطة. تغيير وقت استخراج الرصيد من الصباح إلى المساء يغيّر المعدل دون أي تغيّر في الأداء الفعلي.",
        en: "Not fixing the snapshot time. Moving the extraction from morning to evening changes the rate with no change in real performance.",
      },
      {
        ar: "معاملة كل الأصناف بوزن واحد. نفاد صنف يبيع 200 وحدة يوميًا ونفاد صنف يبيع وحدة في الشهر يُحتسبان ملاحظة واحدة لكل منهما؛ أضف معدلًا مرجحًا بالطلب أو قدّر المبيعات الضائعة إلى جانبه.",
        en: "Weighting every item equally. A stockout on an item selling 200 units a day and one selling a unit a month each count as one observation; add a demand-weighted rate or a lost-sales estimate beside it.",
      },
      {
        ar: "حساب متوسط معدلات المواقع للحصول على معدل الشركة. الفروع ذات التشكيلة الصغيرة تحصل على وزن مساوٍ للمستودعات الكبيرة؛ أعد الحساب من مجموع الملاحظات.",
        en: "Averaging location rates to get the company rate. Stores with small ranges get the same weight as large warehouses; recompute from summed observations.",
      },
    ],
    variants: [
      {
        label: { ar: "النفاد على أساس الأحداث", en: "Event-based stockout rate" },
        formula: "Order Lines Not Filled Due to No Stock / Total Order Lines x 100",
        difference: {
          ar: "يقيس أثر النفاد على الطلب الفعلي للعملاء لا على الرف. أقرب لتجربة العميل، لكنه لا يرى الطلب الذي لم يُسجل أصلًا لأن العميل وجد الرف فارغًا فغادر.",
          en: "Measures the impact on actual customer demand rather than on the shelf. Closer to customer experience, but blind to demand never recorded because the customer saw an empty shelf and left.",
        },
      },
      {
        label: { ar: "النفاد المرجح بالطلب", en: "Demand-weighted stockout rate" },
        formula: "Sum of Expected Daily Demand on Stockout Days / Sum of Expected Daily Demand on All Eligible Days x 100",
        difference: {
          ar: "يعطي وزنًا للأصناف سريعة الحركة، فيقترب من تقدير حصة الطلب المعرضة للضياع. يعتمد على جودة تقدير الطلب المتوقع، وهو افتراض يجب توثيقه.",
          en: "Weights fast movers more, so it approximates the share of demand at risk. It depends on the quality of the expected-demand estimate, an assumption that must be documented.",
        },
      },
      {
        label: { ar: "مدة النفاد بالساعات", en: "Stockout duration in hours" },
        formula: "Hours Out of Stock / Total Trading Hours x 100",
        difference: {
          ar: "أدق من الملاحظة اليومية لأنه يميّز بين نفاد لساعة واحدة ونفاد ليوم كامل، لكنه يتطلب سجل حركة لحظيًا لا لقطة يومية.",
          en: "More precise than a daily observation because it separates a one-hour stockout from a full-day one, but it needs a real-time movement log rather than a daily snapshot.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "معدل النفاد ومعدل التوفر على نفس الأساس ونفس المقام مجموعهما 100% دائمًا.",
          en: "The stockout rate and the availability rate on the same basis and denominator always sum to 100%.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "قياس النفاد على مستوى صنف × موقع × يوم باستخدام الرصيد المتاح للبيع هو أسلوب شائع في تجارة التجزئة والتوزيع.",
          en: "Measuring stockouts at item x location x day using available-to-sell stock is a common approach in retail and distribution.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "اختيار التعريف (أحداث أم ملاحظات)، وتوقيت اللقطة، وقواعد الأهلية، والهدف لكل فئة ABC كلها قرارات داخلية يجب توثيقها في قاموس المؤشرات.",
          en: "The choice of definition (events or observations), snapshot timing, eligibility rules, and the target per ABC class are all internal decisions that must be documented in the metric dictionary.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (45 ملاحظة نفاد من 900) وأرقام التمرين من تأليفنا للتعليم فقط، وليست مرجعًا لأي قطاع.",
          en: "The example figures (45 stockout observations out of 900) and the exercise figures are invented for teaching only and are not a benchmark for any sector.",
        },
      },
    ],
    related: ["inventory-turnover", "otif", "supplier-on-time-delivery", "sell-through-rate"],
    exercise: {
      prompt: {
        ar: "فرع يضم 60 صنفًا وعمل 25 يومًا خلال الشهر، أي 1,500 ملاحظة صنف × يوم. 6 أصناف منها كانت موقوفة طوال الشهر ورصيدها صفر، وسُجلت 81 ملاحظة نفاد في الأصناف النشطة. احسب معدل النفاد الصحيح، ثم احسبه لو نُسي استبعاد الأصناف الموقوفة وعوملت ملاحظاتها كنفاد.",
        en: "A store carries 60 items and traded 25 days in the month, giving 1,500 item-day observations. Six of those items were discontinued all month with zero stock, and 81 stockout observations were recorded on active items. Compute the correct stockout rate, then compute it if the discontinued items were not excluded and their observations counted as stockouts.",
      },
      hint: {
        ar: "احسب أولًا عدد الملاحظات التي تخص الأصناف الموقوفة (6 × 25) واطرحها من المقام.",
        en: "First compute the observations belonging to discontinued items (6 × 25) and remove them from the denominator.",
      },
      answer: {
        ar: "ملاحظات الأصناف الموقوفة = 6 × 25 = 150، فالمقام المؤهل = 1,500 − 150 = 1,350، والمعدل الصحيح = 81 ÷ 1,350 = 6.0%. لو لم تُستبعد وعوملت كنفاد: البسط = 81 + 150 = 231 والمقام 1,500، فالمعدل = 231 ÷ 1,500 = 15.4%. خطأ في قاعدة الأهلية وحدها رفع المؤشر إلى أكثر من ضعفيه دون أي تغيّر في التوفر الفعلي.",
        en: "Discontinued observations = 6 × 25 = 150, so the eligible denominator = 1,500 − 150 = 1,350, and the correct rate = 81 ÷ 1,350 = 6.0%. If not excluded and counted as stockouts: numerator = 81 + 150 = 231 over 1,500, so the rate = 231 ÷ 1,500 = 15.4%. An eligibility-rule error alone more than doubled the metric with no change in actual availability.",
      },
    },
    references: [
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "القسمة الآمنة التي تعيد BLANK عندما لا توجد ملاحظات مؤهلة في السياق.",
          en: "Safe division that returns BLANK when there are no eligible observations in context.",
        },
      },
      {
        title: "COUNTROWS function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/countrows-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "أساس عدّ الملاحظات في البسط والمقام على حبيبية صنف × موقع × يوم.",
          en: "The basis for counting observations in numerator and denominator at item x location x day grain.",
        },
      },
    ],
  },

  {
    id: "supplier-on-time-delivery",
    slug: "supplier-on-time-delivery",
    name: "Supplier On-Time Delivery",
    nameAr: "التزام المورد بمواعيد التسليم",
    domains: ["supply-chain", "manufacturing"],
    category: { ar: "أداء الموردين", en: "Supplier performance" },
    difficulty: "intermediate",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة استلامات المورد التي وصلت في الموعد المتفق عليه أو قبله، من إجمالي الاستلامات المستحقة المؤهلة خلال الفترة. هو الجانب الوارد من الموثوقية: يقيس وعد المورد لك، كما يقيس OTIF وعدك لعميلك.",
      en: "The share of supplier receipts that arrived on or before the agreed date, out of all eligible receipts due in the period. It is the inbound side of reliability: it measures the supplier's promise to you, just as OTIF measures your promise to your customer.",
    },
    whyItMatters: {
      ar: "تأخر المورد يتحول مباشرة إلى نفاد مخزون أو توقف إنتاج أو مخزون أمان إضافي لتعويض عدم الموثوقية. المؤشر يمنح فريق المشتريات أساسًا موضوعيًا لمقارنة الموردين وتوزيع الحصص والتفاوض، بدل الاعتماد على الانطباع.",
      en: "Supplier lateness converts directly into stockouts, production stoppages, or extra safety stock held to compensate for unreliability. The metric gives procurement an objective basis to compare suppliers, allocate volume, and negotiate, instead of relying on impressions.",
    },
    interpretation: {
      ar: "نسبة 95% تعني أن استلامًا واحدًا من كل 20 تأخر عن موعده. أثر ذلك يعتمد على ما تأخر: تأخر مورد مادة خام حرجة بلا بديل أخطر بكثير من تأخر مورد مستلزمات مكتبية بنفس النسبة. لذلك يُقرأ المؤشر حسب المورد وفئة المادة، ومعه متوسط أيام التأخر.",
      en: "95% means one receipt in 20 was late. The impact depends on what was late: a delay from a sole-source critical raw-material supplier is far more serious than the same rate from an office-supplies vendor. Read it per supplier and material class, together with average days late.",
    },
    formula: "Supplier On-Time % = Receipts On or Before Agreed Date / Eligible Receipts x 100",
    numerator: {
      ar: "عدد أسطر أوامر الشراء (أو جداول التسليم) المستحقة في الفترة التي استُلمت في تاريخ الاستحقاق المتفق عليه أو قبله.",
      en: "Count of purchase-order lines (or delivery schedule lines) due in the period that were received on or before the agreed due date.",
    },
    denominator: {
      ar: "كل الأسطر المؤهلة المستحقة في الفترة، بما فيها الأسطر المتأخرة التي لم تُستلم بعد. الأسطر الملغاة بقرار المشتري أو المؤجلة بتغيير تاريخ معتمد تُعامل وفق قاعدة موثقة.",
      en: "All eligible lines due in the period, including overdue lines not yet received. Lines cancelled by the buyer or moved by an approved date change are handled under a documented rule.",
    },
    timeGrain: {
      ar: "يُحسب شهريًا أو ربعيًا حسب تاريخ الاستحقاق المتفق عليه لا تاريخ الاستلام، حتى يبقى الاستلام المتأخر في الفترة التي كان مستحقًا فيها. بطاقات تقييم الموردين تُعرض عادة ربعيًا لتفادي تذبذب الأعداد الصغيرة.",
      en: "Computed monthly or quarterly on the agreed due date rather than the receipt date, so a late receipt stays in the period it was due. Supplier scorecards are usually shown quarterly to avoid small-count volatility.",
    },
    direction: {
      rising: {
        ar: "الارتفاع يعني موردًا أكثر موثوقية، وقد يسمح بخفض مخزون الأمان المرتبط به تدريجيًا.",
        en: "A rise means a more reliable supplier and may allow the related safety stock to be reduced gradually.",
      },
      falling: {
        ar: "الانخفاض يشير إلى مشكلة طاقة أو جودة أو نقل لدى المورد، أو إلى أوامر شراء أُصدرت بمهلة أقصر من مدة التوريد المتفق عليها.",
        en: "A fall points to a capacity, quality, or transport problem at the supplier, or to purchase orders issued with less notice than the agreed lead time.",
      },
      caveat: {
        ar: "جزء من التأخر قد يكون من صنعك: أوامر عاجلة، أو تعديلات متكررة، أو مواعيد غير واقعية. قبل معاقبة المورد، افصل الأسطر التي صدرت بمهلة أقل من مدة التوريد المتعاقد عليها.",
        en: "Part of the lateness may be self-inflicted: rush orders, frequent changes, or unrealistic dates. Before penalising a supplier, separate lines issued with less than the contracted lead time.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "الاستلامات المؤهلة المستحقة في الفترة", en: "Eligible receipts due in the period" }, value: "200" },
        { label: { ar: "استلامات في الموعد المتفق عليه أو قبله", en: "Receipts on or before the agreed date" }, value: "190" },
      ],
      steps: [
        { label: { ar: "الاستلامات المتأخرة", en: "Late receipts" }, expression: "200 − 190 = 10" },
        { label: { ar: "نسبة الالتزام", en: "On-time rate" }, expression: "190 ÷ 200 = 0.95" },
        { label: { ar: "كنسبة مئوية", en: "As a percentage" }, expression: "0.95 × 100 = 95%" },
      ],
      result: { label: { ar: "التزام المورد بالمواعيد", en: "Supplier on-time delivery" }, value: "95%" },
      reading: {
        ar: "10 استلامات من 200 تأخرت. السؤال التالي: كم يومًا تأخرت، وهل كانت لأصناف حرجة؟ عشرة تأخيرات بيوم واحد تختلف كثيرًا عن عشرة تأخيرات بأسبوعين.",
        en: "10 of 200 receipts were late. The next question is how many days late, and whether they were critical items. Ten one-day delays are very different from ten two-week delays.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "الالتزام بالمواعيد على مستوى سطر أمر الشراء", en: "On-time rate at purchase-order line grain" },
        code: `-- Grain: one row per purchase-order schedule line.
-- 'Date' relates to AgreedDueDate, so lines are counted in the period they were due.

Eligible Receipts :=
CALCULATE (
    COUNTROWS ( 'PurchaseOrderLine' ),
    'PurchaseOrderLine'[IsEligible] = 1
)

On-Time Receipts :=
COUNTROWS (
    FILTER (
        'PurchaseOrderLine',
        'PurchaseOrderLine'[IsEligible] = 1
            && NOT ISBLANK ( 'PurchaseOrderLine'[ReceivedDate] )
            && 'PurchaseOrderLine'[ReceivedDate] <= 'PurchaseOrderLine'[AgreedDueDate]
    )
)

Supplier On-Time % :=
DIVIDE ( [On-Time Receipts], [Eligible Receipts] )`,
        assumptions: [
          {
            ar: "'PurchaseOrderLine' بحبيبية سطر جدولة تسليم واحد لكل صف، ويحتوي AgreedDueDate وReceivedDate وIsEligible، ومرتبط بـ 'Date' على AgreedDueDate وبـ 'Supplier' على SupplierId.",
            en: "'PurchaseOrderLine' is at one delivery schedule line per row, carries AgreedDueDate, ReceivedDate, and IsEligible, and relates to 'Date' on AgreedDueDate and to 'Supplier' on SupplierId.",
          },
          {
            ar: "AgreedDueDate هو التاريخ الأصلي أو آخر تاريخ معتمد رسميًا بطلب من المشتري فقط؛ تعديلات التاريخ التي يطلبها المورد بعد التأخر لا تُحدّثه.",
            en: "AgreedDueDate is the original date or the last date formally approved at the buyer's request only; date changes requested by the supplier after slipping do not update it.",
          },
          {
            ar: "ReceivedDate هو تاريخ استلام الكمية الكاملة للسطر، ويبقى فارغًا ما دام السطر مفتوحًا. الأسطر المتأخرة غير المستلمة تبقى في المقام وتُحتسب متأخرة.",
            en: "ReceivedDate is the date the line's full quantity was received and stays blank while the line is open. Overdue unreceived lines stay in the denominator and count as late.",
          },
          {
            ar: "IsEligible = 0 للأسطر الملغاة بقرار المشتري وأسطر العينات والخدمات؛ قاعدة الأهلية تُبنى في طبقة البيانات لا داخل المقياس.",
            en: "IsEligible = 0 for lines cancelled by the buyer, sample lines, and service lines; the eligibility rule is built in the data layer, not inside the measure.",
          },
        ],
        requires: [
          "PurchaseOrderLine[IsEligible]",
          "PurchaseOrderLine[ReceivedDate]",
          "PurchaseOrderLine[AgreedDueDate]",
          "Date[Date]",
        ],
      },
    ],
    model: [
      {
        table: "PurchaseOrderLine",
        grain: { ar: "سطر جدولة تسليم واحد لكل صف", en: "One delivery schedule line per row" },
        columns: [
          "PoNumber",
          "PoLineId",
          "SupplierId",
          "ItemId",
          "OrderDate",
          "OriginalDueDate",
          "AgreedDueDate",
          "ReceivedDate",
          "OrderedQty",
          "ReceivedQty",
          "IsEligible",
        ],
        role: { ar: "جدول الحقائق الأساسي: مصدر البسط والمقام", en: "Primary fact table: source of numerator and denominator" },
      },
      {
        table: "Supplier",
        grain: { ar: "مورد واحد لكل صف", en: "One row per supplier" },
        columns: ["SupplierId", "SupplierName", "Country", "SupplierTier", "ContractLeadTimeDays"],
        role: { ar: "بطاقة تقييم الموردين والمقارنة بينهم", en: "Supplier scorecard and comparison" },
      },
      {
        table: "Item",
        grain: { ar: "صنف واحد لكل صف", en: "One row per item" },
        columns: ["ItemId", "ItemName", "MaterialGroup", "IsCritical"],
        role: { ar: "التمييز بين تأخر المواد الحرجة وغيرها", en: "Separating late critical materials from the rest" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "QuarterKey"],
        role: { ar: "يُربط بـ AgreedDueDate لا بـ ReceivedDate", en: "Related to AgreedDueDate rather than ReceivedDate" },
      },
    ],
    visuals: [
      {
        pattern: "actual-vs-target",
        why: {
          ar: "بطاقة تقييم الموردين تقارن نسبة كل مورد بالهدف المتعاقد عليه، فيظهر فورًا من هو دون الالتزام.",
          en: "A supplier scorecard compares each supplier's rate with its contracted target, showing at once who is below commitment.",
        },
      },
      {
        pattern: "period-over-period",
        why: {
          ar: "اتجاه الاستلامات المتأخرة شهريًا مقارنة بالفترة السابقة يميّز التدهور المستمر عن حادثة منفردة.",
          en: "The monthly late-receipt trend against the prior period separates a sustained decline from a one-off incident.",
        },
      },
      {
        pattern: "exception-table",
        why: {
          ar: "قائمة الأسطر المفتوحة المتأخرة مع أيام التأخر والصنف والمورد هي أداة المتابعة اليومية لفريق المشتريات.",
          en: "A list of open overdue lines with days late, item, and supplier is procurement's daily expediting tool.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عدم تعريف تاريخ الاستحقاق بوضوح. تاريخ الشحن من المورد وتاريخ الوصول إلى الرصيف وتاريخ الإدخال في النظام قد تتباعد أيامًا، واختيار أحدها دون توثيق يجعل المقارنة بين الموردين غير عادلة.",
        en: "Not defining the due date clearly. Supplier ship date, dock arrival, and system posting can be days apart, and choosing one without documenting it makes supplier comparisons unfair.",
      },
      {
        ar: "تحديث تاريخ الاستحقاق كلما طلب المورد تأجيلًا. التغييرات المعتمدة بطلب المشتري فقط هي التي تُحدّث التاريخ المتفق عليه؛ غير ذلك يحوّل كل تأخير إلى التزام.",
        en: "Updating the due date whenever the supplier asks for a delay. Only changes approved at the buyer's request should move the agreed date; anything else turns every delay into compliance.",
      },
      {
        ar: "معاملة التسليم الجزئي في الموعد كنجاح. إن وصل نصف الكمية في الموعد والنصف الآخر بعد أسبوع، فالقاعدة يجب أن تحدد: هل الحكم على السطر كاملًا، أم على كل استلام، أم على الكمية؟",
        en: "Treating a partial delivery on time as a success. If half the quantity arrives on time and the rest a week later, the rule must state whether the line, each receipt, or the quantity is judged.",
      },
      {
        ar: "حساب النسبة على الاستلامات الفعلية فقط. الأسطر المتأخرة التي لم تصل بعد هي أسوأ الحالات، واستبعادها من المقام يرفع النسبة زورًا.",
        en: "Computing the rate only on actual receipts. Overdue lines not yet received are the worst cases, and dropping them from the denominator falsely raises the rate.",
      },
      {
        ar: "ترتيب الموردين بنسبة محسوبة على عدد صغير من الاستلامات. مورد بثلاثة أسطر في الربع قد يقفز بين 67% و100%؛ اعرض عدد الأسطر بجوار النسبة دائمًا.",
        en: "Ranking suppliers on a rate built from very few receipts. A supplier with three lines a quarter can jump between 67% and 100%; always show the line count beside the rate.",
      },
    ],
    variants: [
      {
        label: { ar: "التسليم في الموعد وبالكامل للمورد", en: "Supplier OTIF" },
        formula: "Lines Received On Time AND In Full / Eligible Lines Due x 100",
        difference: {
          ar: "يضيف شرط اكتمال الكمية إلى شرط الموعد. أصرم ودائمًا أقل من النسبة الزمنية وحدها، وهو الأنسب عندما يسبب النقص نفس ضرر التأخر.",
          en: "Adds the full-quantity condition to the date condition. Stricter and always at or below the date-only rate; best when shortages cause the same harm as lateness.",
        },
      },
      {
        label: { ar: "الالتزام ضمن نافذة سماح", en: "On-time within a tolerance window" },
        formula: "Receipts Between (Agreed Date - a) and (Agreed Date + b) / Eligible Receipts x 100",
        difference: {
          ar: "يعاقب التبكير المفرط أيضًا، وهو مهم في بيئات التصنيع في الوقت المحدد حيث يشغل الاستلام المبكر مساحة ورأس مال. عرض النافذة قرار تعاقدي لكل مورد.",
          en: "Also penalises excessive earliness, which matters in just-in-time manufacturing where early receipts consume space and capital. The window width is a contractual decision per supplier.",
        },
      },
      {
        label: { ar: "الالتزام المرجح بالكمية", en: "Quantity-weighted on-time rate" },
        formula: "Quantity Received On or Before Agreed Date / Total Quantity Due x 100",
        difference: {
          ar: "يعطي الاستلامات الكبيرة وزنًا أكبر ويعالج التسليم الجزئي بطبيعته، لكنه قد يخفي تأخرًا متكررًا في أسطر صغيرة لأصناف حرجة.",
          en: "Weights large receipts more and naturally handles partial deliveries, but can hide repeated lateness on small lines for critical items.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "نسبة التسليم في الموعد وبالكامل للمورد لا يمكن أن تتجاوز نسبة التسليم في الموعد وحدها على نفس المقام، لأنها تضيف شرطًا.",
          en: "Supplier OTIF can never exceed the date-only on-time rate on the same denominator, because it adds a condition.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "قياس الالتزام على مستوى سطر أمر الشراء مقابل تاريخ الاستحقاق المتفق عليه، مع إبقاء الأسطر المتأخرة المفتوحة في المقام، ممارسة شائعة في بطاقات تقييم الموردين.",
          en: "Measuring at purchase-order line grain against the agreed due date, keeping open overdue lines in the denominator, is common practice in supplier scorecards.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "ما يُعد \"في الموعد\" (يوم الشحن أم الوصول أم الإدخال)، ونافذة السماح، ومعالجة التسليم الجزئي وتغييرات التاريخ، كلها شروط تعاقدية أو سياسات داخلية.",
          en: "What counts as 'on time' (ship, arrival, or posting date), the tolerance window, and the handling of partial deliveries and date changes are contractual terms or internal policies.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (190 من 200) والتمرين من تأليفنا للتوضيح فقط، وليست معيارًا لأداء الموردين.",
          en: "The example figures (190 of 200) and the exercise are invented for illustration only and are not a supplier performance benchmark.",
        },
      },
    ],
    related: ["otif", "stockout-rate", "order-cycle-time", "inventory-turnover"],
    exercise: {
      prompt: {
        ar: "مورد لديه 320 سطر أمر شراء مؤهلًا مستحقًا في الربع. استُلم 272 سطرًا في الموعد المتفق عليه أو قبله، و32 سطرًا بعده، وما زال 16 سطرًا متأخرًا لم يُستلم. احسب النسبة الصحيحة، ثم احسبها لو استُبعدت الأسطر غير المستلمة من المقام.",
        en: "A supplier has 320 eligible purchase-order lines due in the quarter. 272 lines were received on or before the agreed date, 32 after it, and 16 are overdue and still not received. Compute the correct rate, then compute it if the unreceived lines were dropped from the denominator.",
      },
      hint: {
        ar: "تحقق أولًا أن 272 + 32 + 16 تساوي 320. الأسطر المفتوحة المتأخرة جزء من المقام في الحساب الصحيح.",
        en: "First check that 272 + 32 + 16 equals 320. Open overdue lines belong in the denominator in the correct calculation.",
      },
      answer: {
        ar: "272 + 32 + 16 = 320. النسبة الصحيحة = 272 ÷ 320 = 85.0%. لو استُبعدت الأسطر المفتوحة يصبح المقام 320 − 16 = 304 والنسبة 272 ÷ 304 ≈ 89.5%. إخفاء أسوأ 16 حالة رفع أداء المورد نحو 4.5 نقطة مئوية، وهذا بالضبط الانحياز الذي يجب أن تمنعه قاعدة المقام.",
        en: "272 + 32 + 16 = 320. Correct rate = 272 ÷ 320 = 85.0%. Dropping open lines makes the denominator 320 − 16 = 304 and the rate 272 ÷ 304 ≈ 89.5%. Hiding the worst 16 cases lifted the supplier by about 4.5 percentage points, exactly the bias the denominator rule must prevent.",
      },
    },
    references: [
      {
        title: "FILTER function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/filter-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع الترشيح صفًا بصف المستخدم لمقارنة تاريخ الاستلام بتاريخ الاستحقاق في نفس السطر.",
          en: "Reference for the row-by-row filter used to compare receipt date with due date on the same line.",
        },
      },
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "القسمة الآمنة عندما لا توجد أسطر مستحقة لمورد في الفترة المختارة.",
          en: "Safe division when a supplier has no lines due in the selected period.",
        },
      },
    ],
  },

  {
    id: "order-cycle-time",
    slug: "order-cycle-time",
    name: "Order Cycle Time",
    nameAr: "زمن دورة الطلب",
    domains: ["supply-chain", "retail"],
    category: { ar: "سرعة التنفيذ", en: "Fulfilment speed" },
    difficulty: "intermediate",
    unit: { ar: "ساعات (أو أيام)", en: "Hours (or days)" },
    aggregation: "non-additive",
    definition: {
      ar: "الوقت المنقضي بين نقطة بداية محددة للطلب (مثل قبول الطلب) ونقطة اكتماله (مثل التسليم للعميل). يُحسب لكل طلب على حدة، ثم يُلخّص للمجموعة بالوسيط أو المئين لا بالمجموع.",
      en: "The time elapsed between a defined start point of an order (such as order acceptance) and its completion point (such as delivery to the customer). It is computed per order, then summarised for a group with the median or a percentile, never a sum.",
    },
    whyItMatters: {
      ar: "سرعة التنفيذ جزء من الوعد للعميل ومن تكلفة التشغيل معًا: كل ساعة ينتظرها الطلب في مرحلة ما هي مخزون عالق ورأس مال مجمّد واحتمال إلغاء. تفكيك زمن الدورة إلى مراحل يكشف أين تتراكم الطلبات فعلًا.",
      en: "Fulfilment speed is part of both the customer promise and operating cost: every hour an order waits at some stage is stuck inventory, frozen capital, and cancellation risk. Breaking cycle time into stages reveals where orders actually pile up.",
    },
    interpretation: {
      ar: "وسيط 30 ساعة يعني أن نصف الطلبات اكتملت في 30 ساعة أو أقل. لكن العميل يتذكر الطلبات البطيئة، لذلك يُعرض المئين التسعون (P90) بجوار الوسيط: إن كان الوسيط 30 ساعة والمئين التسعون 96 ساعة فهناك ذيل طويل من الطلبات المتعثرة يستحق التحقيق.",
      en: "A median of 30 hours means half the orders completed in 30 hours or less. Customers remember the slow ones, though, so the 90th percentile (P90) is shown beside the median: a 30-hour median with a 96-hour P90 reveals a long tail of stuck orders worth investigating.",
    },
    formula: "Order Cycle Time = Delivery/Completion Timestamp - Order Start Timestamp",
    numerator: {
      ar: "الفرق الزمني لكل طلب بين حدث البداية المعتمد (استلام أو قبول الطلب) وحدث النهاية المعتمد (الشحن أو التسليم أو الإغلاق)، بالساعات المنقضية أو ساعات العمل.",
      en: "The per-order time difference between the agreed start event (order received or accepted) and the agreed end event (shipped, delivered, or closed), in elapsed hours or business hours.",
    },
    timeGrain: {
      ar: "يُنسب كل طلب عادة إلى تاريخ اكتماله ويُلخّص أسبوعيًا أو شهريًا. الطلبات التي لم تكتمل بعد لا زمن دورة لها، فتُتابع بمؤشر منفصل لعمر الطلبات المفتوحة حتى لا يبدو الأداء أفضل مما هو.",
      en: "Each order is usually attributed to its completion date and summarised weekly or monthly. Orders not yet complete have no cycle time, so they are tracked with a separate open-order age metric so performance does not look better than it is.",
    },
    direction: {
      rising: {
        ar: "الارتفاع يعني تنفيذًا أبطأ: اختناق في الانتقاء أو التغليف أو النقل، أو نقص مخزون يؤخر التجهيز، أو تغيّر في مزيج الطلبات نحو شحنات أبعد.",
        en: "A rise means slower fulfilment: a bottleneck in picking, packing, or transport, stock shortages delaying preparation, or a mix shift towards longer-distance shipments.",
      },
      falling: {
        ar: "الانخفاض يعني تنفيذًا أسرع، بشرط ألا يكون ناتجًا عن تغيير تعريف نقطة البداية أو النهاية أو عن استبعاد الطلبات المتعثرة.",
        en: "A fall means faster fulfilment, provided it does not come from redefining the start or end point or from excluding stuck orders.",
      },
      caveat: {
        ar: "الأسرع ليس دائمًا الأفضل: تسريع كل الطلبات قد يعني شحنًا عاجلًا مكلفًا لا يطلبه العميل. المهم هو الوفاء بالوعد وتقليل التذبذب، لذلك يُقرأ المؤشر مع OTIF وتكلفة الشحن.",
        en: "Faster is not always better: accelerating every order may mean expensive express freight the customer did not ask for. What matters is keeping the promise and reducing variability, so read it with OTIF and freight cost.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "قبول الطلب", en: "Order accepted" }, value: "الاثنين 09:00 / Monday 09:00" },
        { label: { ar: "تسليم الطلب", en: "Order delivered" }, value: "الثلاثاء 15:00 / Tuesday 15:00" },
        { label: { ar: "ساعات العمل (للمقارنة)", en: "Business hours (for comparison)" }, value: "08:00–17:00" },
      ],
      steps: [
        { label: { ar: "من الاثنين 09:00 إلى الثلاثاء 09:00", en: "Monday 09:00 to Tuesday 09:00" }, expression: "24 h" },
        { label: { ar: "من الثلاثاء 09:00 إلى 15:00", en: "Tuesday 09:00 to 15:00" }, expression: "6 h" },
        { label: { ar: "الوقت المنقضي", en: "Elapsed time" }, expression: "24 + 6 = 30 h" },
        { label: { ar: "للمقارنة: ساعات العمل فقط", en: "For comparison: business hours only" }, expression: "(17:00 − 09:00) + (15:00 − 08:00) = 8 + 7 = 15 h" },
      ],
      result: { label: { ar: "زمن الدورة المنقضي", en: "Elapsed cycle time" }, value: "30 h" },
      reading: {
        ar: "الطلب نفسه يساوي 30 ساعة منقضية أو 15 ساعة عمل. كلا الرقمين صحيح، لكن خلطهما في تقرير واحد يجعل المقارنة بين المستودعات أو الفترات بلا قيمة. التعريف يجب أن يُكتب في عنوان المقياس.",
        en: "The same order is 30 elapsed hours or 15 business hours. Both are correct, but mixing them in one report makes comparisons across warehouses or periods worthless. The definition belongs in the measure title.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "الوسيط والمئين التسعون لزمن الدورة بالساعات", en: "Median and P90 cycle time in hours" },
        code: `-- Elapsed hours from acceptance to delivery, per completed order.
-- 'Date' relates to DeliveredDate, so orders count in the period they completed.

Completed Orders :=
CALCULATE (
    COUNTROWS ( 'Order' ),
    NOT ISBLANK ( 'Order'[DeliveredAt] )
)

Median Order Cycle Time (h) :=
MEDIANX (
    FILTER ( 'Order', NOT ISBLANK ( 'Order'[DeliveredAt] ) ),
    DATEDIFF ( 'Order'[AcceptedAt], 'Order'[DeliveredAt], MINUTE ) / 60
)

P90 Order Cycle Time (h) :=
PERCENTILEX.INC (
    FILTER ( 'Order', NOT ISBLANK ( 'Order'[DeliveredAt] ) ),
    DATEDIFF ( 'Order'[AcceptedAt], 'Order'[DeliveredAt], MINUTE ) / 60,
    0.9
)

Average Order Cycle Time (h) :=
AVERAGEX (
    FILTER ( 'Order', NOT ISBLANK ( 'Order'[DeliveredAt] ) ),
    DATEDIFF ( 'Order'[AcceptedAt], 'Order'[DeliveredAt], MINUTE ) / 60
)`,
        assumptions: [
          {
            ar: "'Order' بحبيبية طلب واحد لكل صف، ويحتوي AcceptedAt وDeliveredAt كقيم تاريخ ووقت كاملة في منطقة زمنية واحدة موحدة (مثل UTC أو التوقيت المحلي للشركة).",
            en: "'Order' is at one order per row, with AcceptedAt and DeliveredAt as full datetime values in a single consistent time zone (for example UTC or company local time).",
          },
          {
            ar: "العمود DeliveredDate (التاريخ فقط من DeliveredAt) مرتبط بجدول 'Date'، فيُنسب الطلب إلى فترة اكتماله. الطلبات المفتوحة مستبعدة من هذه المقاييس وتُتابع بمقياس عمر منفصل.",
            en: "A DeliveredDate column (date part of DeliveredAt) relates to 'Date', so an order is attributed to its completion period. Open orders are excluded from these measures and tracked with a separate age measure.",
          },
          {
            ar: "هذه ساعات منقضية على مدار الساعة. قياس ساعات العمل يتطلب تقويم عمل (أيام وساعات وعطل) ويُفضّل حسابه كعمود في طبقة البيانات.",
            en: "These are round-the-clock elapsed hours. Business-hours measurement needs a working calendar (days, hours, holidays) and is best computed as a column in the data layer.",
          },
          {
            ar: "الوسيط والمئين غير تجميعيين: لا يمكن اشتقاق وسيط الشهر من وسطاء الأسابيع، لذلك تُحسب المقاييس دائمًا من مستوى الطلب.",
            en: "Median and percentiles are non-additive: a monthly median cannot be derived from weekly medians, so the measures always iterate at order level.",
          },
        ],
        requires: ["Order[AcceptedAt]", "Order[DeliveredAt]", "Order[DeliveredDate]", "Date[Date]"],
      },
    ],
    model: [
      {
        table: "Order",
        grain: { ar: "طلب واحد لكل صف", en: "One row per order" },
        columns: [
          "OrderId",
          "ChannelId",
          "WarehouseId",
          "RouteId",
          "AcceptedAt",
          "PickedAt",
          "ShippedAt",
          "DeliveredAt",
          "DeliveredDate",
        ],
        role: { ar: "جدول الحقائق الأساسي بطوابع زمنية لكل مرحلة", en: "Primary fact table with a timestamp per stage" },
      },
      {
        table: "Warehouse",
        grain: { ar: "مستودع واحد لكل صف", en: "One row per warehouse" },
        columns: ["WarehouseId", "WarehouseName", "Region", "TimeZone"],
        role: { ar: "التقسيم حسب المستودع ومعالجة المناطق الزمنية", en: "Slicing by warehouse and handling time zones" },
      },
      {
        table: "Route",
        grain: { ar: "مسار نقل واحد لكل صف", en: "One row per transport route" },
        columns: ["RouteId", "Origin", "Destination", "Carrier", "ServiceLevel"],
        role: { ar: "مقارنة زمن الدورة حسب المسار والناقل", en: "Comparing cycle time by route and carrier" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "WeekKey", "MonthKey", "IsWorkingDay"],
        role: { ar: "يُربط بـ DeliveredDate", en: "Related to DeliveredDate" },
      },
    ],
    visuals: [
      {
        pattern: "period-over-period",
        why: {
          ar: "اتجاه الوسيط والمئين التسعين معًا أسبوعيًا يوضح هل التحسن في الطلبات المعتادة أم في الذيل البطيء أيضًا.",
          en: "A weekly trend of the median and P90 together shows whether improvement is in typical orders or in the slow tail as well.",
        },
      },
      {
        pattern: "decomposition-tree",
        why: {
          ar: "تفكيك زمن الدورة حسب المستودع ثم المسار ثم القناة يحدد أين يتركز البطء دون افتراض مسبق.",
          en: "Breaking cycle time down by warehouse, then route, then channel pinpoints where slowness concentrates without a prior assumption.",
        },
      },
      {
        pattern: "exception-table",
        why: {
          ar: "قائمة الطلبات التي تجاوزت حدًا زمنيًا مع المرحلة العالقة فيها هي ما يحتاجه فريق العمليات للتدخل.",
          en: "A list of orders exceeding a time threshold, with the stage they are stuck in, is what the operations team needs to intervene.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عدم تحديد حدثي البداية والنهاية صراحة. \"من استلام الطلب\" و\"من قبول الدفع\" و\"من تحرير الطلب للمستودع\" بدايات مختلفة قد تفصلها ساعات، وكذلك الشحن مقابل التسليم.",
        en: "Not defining start and end events explicitly. 'Order received', 'payment accepted', and 'released to warehouse' are different starts that may be hours apart, and so are shipped versus delivered.",
      },
      {
        ar: "خلط الساعات المنقضية بساعات العمل. طلب يُقبل مساء الخميس يبدو بطيئًا جدًا بالساعات المنقضية وسريعًا بساعات العمل؛ اختر واحدًا واكتبه في عنوان المقياس.",
        en: "Mixing elapsed and business hours. An order accepted on a Thursday evening looks very slow in elapsed hours and quick in business hours; pick one and put it in the measure title.",
      },
      {
        ar: "الاعتماد على المتوسط الحسابي وحده. طلبات قليلة متعثرة لأيام تسحب المتوسط بعيدًا عن التجربة المعتادة؛ الوسيط والمئين التسعون أصدق في توزيع منحرف كهذا.",
        en: "Relying on the arithmetic mean alone. A few orders stuck for days drag the mean far from the typical experience; the median and P90 are more honest for such a skewed distribution.",
      },
      {
        ar: "تجاهل الطلبات المفتوحة. قياس الطلبات المكتملة فقط يستبعد أبطأها بطبيعته، فيبدو الأداء أفضل في الفترات التي تتراكم فيها الطلبات العالقة.",
        en: "Ignoring open orders. Measuring only completed orders structurally excludes the slowest, so performance looks better precisely in periods when stuck orders pile up.",
      },
      {
        ar: "عدم توحيد المناطق الزمنية. طابع قبول بالتوقيت المحلي وطابع تسليم بالتوقيت العالمي قد يضيفان أو يطرحان ساعات لكل طلب دون أن يلاحظ أحد.",
        en: "Not normalising time zones. An acceptance stamp in local time and a delivery stamp in UTC can silently add or subtract hours on every order.",
      },
    ],
    variants: [
      {
        label: { ar: "زمن الدورة بساعات العمل", en: "Business-hours cycle time" },
        formula: "Working Hours Between Order Start and Completion (per working calendar)",
        difference: {
          ar: "يستبعد الليالي والعطل فيقيس كفاءة التشغيل الداخلي، لكنه لا يعكس ما ينتظره العميل فعلًا. يتطلب تقويم عمل لكل موقع.",
          en: "Excludes nights and holidays, so it measures internal operating efficiency, but not what the customer actually waits. It needs a working calendar per site.",
        },
      },
      {
        label: { ar: "زمن الدورة الداخلي حتى الشحن", en: "Order-to-ship cycle time" },
        formula: "Shipped Timestamp - Order Accepted Timestamp",
        difference: {
          ar: "يتوقف عند مغادرة المستودع فيعزل الأداء الداخلي عن أداء الناقل. الفرق بينه وبين زمن الدورة الكامل هو زمن النقل.",
          en: "Stops at warehouse departure, isolating internal performance from carrier performance. The gap between it and the full cycle time is transit time.",
        },
      },
      {
        label: { ar: "زمن الدورة كما يراه العميل", en: "Customer-perceived cycle time" },
        formula: "Customer Receipt Timestamp - Order Placed Timestamp",
        difference: {
          ar: "يبدأ من لحظة ضغط العميل على زر الشراء لا من القبول الداخلي، فيشمل وقت التحقق من الدفع والمراجعة. أقرب لتجربة العميل وأطول دائمًا.",
          en: "Starts when the customer places the order rather than at internal acceptance, so it includes payment checks and review time. Closer to customer experience and always longer.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "زمن الدورة الكامل يساوي مجموع أزمنة المراحل المتتالية لنفس الطلب، لكن وسيط الزمن الكامل لا يساوي عمومًا مجموع وسطاء المراحل.",
          en: "Total cycle time equals the sum of consecutive stage times for the same order, but the median total does not generally equal the sum of stage medians.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "عرض الوسيط ومئين أعلى (مثل P90) بدل المتوسط وحده ممارسة شائعة في تقارير الأزمنة لأن توزيعها منحرف عادة.",
          en: "Reporting the median and an upper percentile (such as P90) rather than the mean alone is common practice for duration metrics because their distribution is usually skewed.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "حدثا البداية والنهاية، واختيار الساعات المنقضية أم ساعات العمل، والمئين المعتمد للمتابعة كلها قرارات داخلية يجب توثيقها.",
          en: "The start and end events, elapsed versus business hours, and the percentile used for monitoring are internal decisions that must be documented.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "المثال (قبول الاثنين 09:00 وتسليم الثلاثاء 15:00) وأزمنة التمرين من تأليفنا للتوضيح فقط.",
          en: "The example (accepted Monday 09:00, delivered Tuesday 15:00) and the exercise durations are invented for illustration only.",
        },
      },
    ],
    related: ["otif", "supplier-on-time-delivery", "stockout-rate", "freight-cost-per-unit"],
    exercise: {
      prompt: {
        ar: "خمسة طلبات مكتملة بأزمنة دورة: 20 و22 و24 و26 و108 ساعات. احسب المتوسط والوسيط، ثم اشرح أيهما يمثل تجربة العميل المعتادة ولماذا.",
        en: "Five completed orders have cycle times of 20, 22, 24, 26, and 108 hours. Compute the mean and the median, then explain which one represents the typical customer experience and why.",
      },
      hint: {
        ar: "المجموع مقسومًا على العدد للمتوسط؛ للوسيط رتّب القيم وخذ الوسطى.",
        en: "Sum divided by count for the mean; for the median, sort the values and take the middle one.",
      },
      answer: {
        ar: "المجموع = 20 + 22 + 24 + 26 + 108 = 200، والمتوسط = 200 ÷ 5 = 40 ساعة. الوسيط هو القيمة الثالثة بعد الترتيب = 24 ساعة. الوسيط يمثل التجربة المعتادة لأن أربعة من خمسة طلبات اكتملت في 26 ساعة أو أقل، بينما المتوسط (40) تسحبه حالة واحدة متعثرة. الطلب ذو 108 ساعات لا يُهمل بل يُحقق فيه عبر جدول الاستثناءات والمئين التسعين.",
        en: "Sum = 20 + 22 + 24 + 26 + 108 = 200, mean = 200 ÷ 5 = 40 hours. The median is the third sorted value = 24 hours. The median represents the typical experience because four of five orders finished in 26 hours or less, while the mean (40) is dragged up by one stuck order. The 108-hour order is not ignored; it is investigated through the exception table and the P90.",
      },
    },
    references: [
      {
        title: "PERCENTILEX.INC function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/percentilex-inc-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "حساب المئين (مثل P90) بالتكرار على الطلبات وتقييم زمن الدورة لكل صف.",
          en: "Computes a percentile (such as P90) by iterating orders and evaluating cycle time per row.",
        },
      },
      {
        title: "DATEDIFF function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/datediff-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "حساب الفرق بين طابعين زمنيين بوحدة محددة (دقائق هنا) قبل تحويله إلى ساعات.",
          en: "Returns the difference between two timestamps in a chosen unit (minutes here) before converting to hours.",
        },
      },
    ],
  },

  {
    id: "freight-cost-per-unit",
    slug: "freight-cost-per-unit",
    name: "Freight Cost per Unit Shipped",
    nameAr: "تكلفة الشحن لكل وحدة مشحونة",
    domains: ["supply-chain", "retail", "manufacturing"],
    category: { ar: "تكلفة النقل", en: "Transportation cost" },
    difficulty: "beginner",
    unit: { ar: "عملة لكل وحدة", en: "Currency per unit" },
    aggregation: "ratio",
    definition: {
      ar: "متوسط تكلفة الشحن التي تتحملها الشركة لكل وحدة مشحونة خلال الفترة: إجمالي تكلفة الشحن مقسومًا على إجمالي الوحدات المشحونة. يحوّل فاتورة النقل إلى رقم يمكن مقارنته بين النواقل والمسارات والفترات.",
      en: "The average freight cost the company bears per unit shipped in the period: total freight cost divided by total units shipped. It turns the transport bill into a number comparable across carriers, routes, and periods.",
    },
    whyItMatters: {
      ar: "النقل من أكبر بنود تكلفة الخدمات اللوجستية، ويتأثر بالوقود والمسافة وامتلاء الشحنات. مراقبة التكلفة لكل وحدة تكشف تآكل الهامش بسبب الشحن العاجل أو الشحنات نصف الممتلئة، وتدعم التفاوض مع النواقل على أساس رقمي.",
      en: "Transport is one of the largest logistics cost lines and moves with fuel, distance, and load fill. Monitoring cost per unit exposes margin erosion from expedited freight or half-empty loads and supports carrier negotiations with numbers.",
    },
    interpretation: {
      ar: "تكلفة 2 لكل وحدة تعني أن كل وحدة خرجت من المستودع حملت في المتوسط 2 من تكلفة النقل. الرقم مفيد عند مقارنة ما يمكن مقارنته: نفس نوع الشحنة ومسافة ووزن متقاربين. مقارنة ناقل ينقل أجهزة ثقيلة لمسافات طويلة بناقل يوزع طرودًا صغيرة داخل المدينة مضللة.",
      en: "A cost of 2 per unit means each unit leaving the warehouse carried 2 of transport cost on average. The number is useful when comparing like with like: same shipment type and similar distance and weight. Comparing a carrier moving heavy appliances long-haul with one delivering small parcels in-city is misleading.",
    },
    formula: "Freight Cost per Unit = Freight Cost / Units Shipped",
    numerator: {
      ar: "إجمالي تكلفة الشحن للشحنات الخارجة في الفترة، شاملة الرسوم الإضافية (الوقود، الانتظار، الشحن العاجل) بعملة تقرير واحدة، ومسجلة على أساس الاستحقاق حسب تاريخ الشحن.",
      en: "Total freight cost for shipments in the period, including surcharges (fuel, detention, expedite) in a single reporting currency, recorded on an accrual basis by ship date.",
    },
    denominator: {
      ar: "إجمالي الوحدات المشحونة في نفس الشحنات وبوحدة قياس موحدة (حبة أو صندوق، لا خليط منهما).",
      en: "Total units shipped in the same shipments, in a single unit of measure (each or case, not a mix).",
    },
    timeGrain: {
      ar: "يُتابع شهريًا عادة. فواتير النواقل تصل متأخرة أسابيع أحيانًا، لذلك يُبنى المؤشر على تكلفة مستحقة (تقديرية) لكل شحنة تُستبدل بالفاتورة الفعلية عند وصولها، وإلا بدت الأشهر الأخيرة أرخص زيفًا.",
      en: "Usually tracked monthly. Carrier invoices can arrive weeks late, so the metric is built on an accrued (estimated) cost per shipment replaced by the actual invoice when it arrives; otherwise recent months look falsely cheap.",
    },
    direction: {
      rising: {
        ar: "الارتفاع قد يعني أسعار نقل أعلى، أو رسوم وقود، أو شحنًا عاجلًا أكثر، أو شحنات أقل امتلاءً — أو ببساطة تحولًا في المزيج نحو أصناف أثقل ومسارات أبعد.",
        en: "A rise may mean higher rates, fuel surcharges, more expedited freight, or lower load fill — or simply a mix shift towards heavier items and longer routes.",
      },
      falling: {
        ar: "الانخفاض قد يعني تفاوضًا أفضل أو دمجًا أذكى للشحنات، لكنه قد يأتي أيضًا من فواتير لم تُسجل بعد أو من شحن أصناف أخف وأقرب.",
        en: "A fall may mean better negotiation or smarter consolidation, but it can also come from invoices not yet recorded or from shipping lighter, closer items.",
      },
      caveat: {
        ar: "الأقل ليس أفضل دائمًا: التوفير بتجميع الشحنات قد يطيل زمن الدورة ويخفض OTIF. وتغيّر مزيج الشحنات وحده قد يحرك المؤشر دون أي تغيّر في الكفاءة، فافحص التكلفة لكل كيلوغرام أو لكل كيلومتر بجواره.",
        en: "Lower is not always better: savings from consolidating loads may lengthen cycle time and hurt OTIF. A change in shipment mix alone can move the metric with no change in efficiency, so check cost per kilogram or per kilometre beside it.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "إجمالي تكلفة الشحن في الفترة", en: "Total freight cost for the period" }, value: "12,000" },
        { label: { ar: "إجمالي الوحدات المشحونة", en: "Total units shipped" }, value: "6,000" },
      ],
      steps: [
        { label: { ar: "تكلفة الشحن لكل وحدة", en: "Freight cost per unit" }, expression: "12,000 ÷ 6,000 = 2.00" },
      ],
      result: { label: { ar: "تكلفة الشحن لكل وحدة", en: "Freight cost per unit" }, value: "2.00" },
      reading: {
        ar: "كل وحدة مشحونة حملت 2 من تكلفة النقل. لو كان هامش الوحدة الإجمالي 8، فالشحن يستهلك ربع الهامش؛ وهذا يجعل أي زيادة في رسوم الوقود أو الشحن العاجل ملموسة فورًا في الربحية.",
        en: "Each shipped unit carried 2 of transport cost. If the unit's gross margin were 8, freight would consume a quarter of it, so any rise in fuel surcharges or expedited freight shows up in profitability immediately.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "تكلفة الشحن لكل وحدة ولكل كيلوغرام", en: "Freight cost per unit and per kilogram" },
        code: `-- Grain: one row per outbound shipment, cost already converted to reporting currency.
-- Ratio of sums: never average per-shipment cost-per-unit values.

Freight Cost :=
SUM ( 'Shipment'[FreightCostRpt] )

Units Shipped :=
SUM ( 'Shipment'[UnitsShipped] )

Freight Cost per Unit :=
DIVIDE ( [Freight Cost], [Units Shipped] )

-- Companion measure to separate rate changes from weight-mix changes.
Freight Cost per Kg :=
DIVIDE ( [Freight Cost], SUM ( 'Shipment'[WeightKg] ) )`,
        assumptions: [
          {
            ar: "'Shipment' بحبيبية شحنة خارجة واحدة لكل صف، ومرتبط بـ 'Date' على ShipDate وبـ 'Carrier' و'Route' على مفاتيحهما.",
            en: "'Shipment' is at one outbound shipment per row and relates to 'Date' on ShipDate and to 'Carrier' and 'Route' on their keys.",
          },
          {
            ar: "FreightCostRpt يشمل الأجرة الأساسية وكل الرسوم الإضافية، ومحوّل إلى عملة التقرير بسعر صرف موثق (مثل سعر تاريخ الشحن) في طبقة البيانات.",
            en: "FreightCostRpt includes base rate and all surcharges and is converted to the reporting currency at a documented exchange rate (for example the ship-date rate) in the data layer.",
          },
          {
            ar: "إن لم تصل الفاتورة بعد، يحمل FreightCostRpt تكلفة مستحقة تقديرية من جدول الأسعار، وتُستبدل بالقيمة الفعلية عند المطابقة.",
            en: "If the invoice has not arrived, FreightCostRpt carries an accrued estimate from the rate card, replaced by the actual amount on matching.",
          },
          {
            ar: "UnitsShipped بوحدة قياس واحدة لكل الأصناف. إن كانت الشحنات تخلط الحبة بالصندوق فيجب التحويل قبل التحميل.",
            en: "UnitsShipped uses one unit of measure for all items. If shipments mix each and case, convert before loading.",
          },
        ],
        requires: ["Shipment[FreightCostRpt]", "Shipment[UnitsShipped]", "Shipment[WeightKg]", "Shipment[ShipDate]", "Date[Date]"],
      },
    ],
    model: [
      {
        table: "Shipment",
        grain: { ar: "شحنة خارجة واحدة لكل صف", en: "One outbound shipment per row" },
        columns: [
          "ShipmentId",
          "ShipDate",
          "CarrierId",
          "RouteId",
          "ShipmentType",
          "UnitsShipped",
          "WeightKg",
          "DistanceKm",
          "FreightCostRpt",
          "IsAccrued",
        ],
        role: { ar: "جدول الحقائق الأساسي: مصدر البسط والمقام", en: "Primary fact table: source of numerator and denominator" },
      },
      {
        table: "Carrier",
        grain: { ar: "ناقل واحد لكل صف", en: "One row per carrier" },
        columns: ["CarrierId", "CarrierName", "Mode", "ContractType"],
        role: { ar: "المقارنة بين النواقل وأنماط النقل", en: "Comparison across carriers and transport modes" },
      },
      {
        table: "Route",
        grain: { ar: "مسار واحد لكل صف", en: "One row per route" },
        columns: ["RouteId", "Origin", "Destination", "DistanceBand"],
        role: { ar: "مقارنة المسارات ضمن نطاقات مسافة متقاربة", en: "Comparing routes within similar distance bands" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "QuarterKey"],
        role: { ar: "يُربط بـ ShipDate لا بتاريخ الفاتورة", en: "Related to ShipDate rather than invoice date" },
      },
    ],
    visuals: [
      {
        pattern: "period-over-period",
        why: {
          ar: "اتجاه التكلفة لكل وحدة شهريًا مقارنة بالفترة السابقة يلتقط أثر رسوم الوقود والمواسم ومراجعات الأسعار.",
          en: "The monthly cost-per-unit trend against the prior period captures the effect of fuel surcharges, seasons, and rate revisions.",
        },
      },
      {
        pattern: "scatter-quadrant",
        why: {
          ar: "رسم التكلفة لكل وحدة مقابل حجم الشحن لكل ناقل أو مسار يحدد النواقل المكلفة ذات الحجم الكبير، وهي أولوية التفاوض.",
          en: "Plotting cost per unit against shipped volume per carrier or route isolates expensive high-volume lanes, the negotiation priority.",
        },
      },
      {
        pattern: "variance-bar",
        why: {
          ar: "انحراف تكلفة كل ناقل أو مسار عن متوسط الشركة (أو عن سعر العقد) يعرض الفجوة في مصفوفة الناقل/المسار بوضوح.",
          en: "Each carrier or route's variance from the company average (or contract rate) shows the gaps in the carrier/route matrix clearly.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "مقارنة ما لا يُقارن. شحنات تختلف في النوع والمسافة والوزن والحجم تعطي تكلفة لكل وحدة مختلفة بطبيعتها؛ قارن داخل نفس نوع الشحنة ونطاق المسافة، أو أضف التكلفة لكل كيلوغرام.",
        en: "Comparing the incomparable. Shipments differing in type, distance, weight, and volume naturally cost different amounts per unit; compare within the same shipment type and distance band, or add cost per kilogram.",
      },
      {
        ar: "استبعاد الرسوم الإضافية. رسوم الوقود والانتظار والشحن العاجل قد تمثل جزءًا كبيرًا من الفاتورة، وحذفها يجعل المؤشر يقيس سعر العقد لا التكلفة الفعلية.",
        en: "Leaving out surcharges. Fuel, detention, and expedite charges can be a large share of the invoice, and dropping them makes the metric measure the contract rate rather than actual cost.",
      },
      {
        ar: "خلط العملات أو تحويلها بأسعار غير متسقة. جمع فواتير بعملات مختلفة دون تحويل، أو تحويل كل فترة بسعر مختلف، يخلق تغيّرات لا علاقة لها بالنقل.",
        en: "Mixing currencies or converting at inconsistent rates. Summing invoices in different currencies unconverted, or converting each period at a different basis, creates movements unrelated to transport.",
      },
      {
        ar: "ربط التكلفة بتاريخ الفاتورة بدل تاريخ الشحن. الفواتير المتأخرة تجعل الشهر الحالي رخيصًا والشهر التالي مكلفًا؛ استخدم التكلفة المستحقة على تاريخ الشحن.",
        en: "Attributing cost to invoice date instead of ship date. Late invoices make the current month cheap and the next one expensive; use accrued cost on ship date.",
      },
      {
        ar: "حساب متوسط التكلفة لكل وحدة عبر النواقل أو الشحنات. النسبة الصحيحة هي مجموع التكلفة مقسومًا على مجموع الوحدات، لا متوسط نسب كل ناقل.",
        en: "Averaging cost per unit across carriers or shipments. The correct ratio is total cost over total units, not the mean of each carrier's ratio.",
      },
    ],
    variants: [
      {
        label: { ar: "تكلفة الشحن لكل كيلوغرام", en: "Freight cost per kilogram" },
        formula: "Freight Cost / Total Weight Shipped (kg)",
        difference: {
          ar: "يحيّد أثر اختلاف أوزان الأصناف، فيناسب مقارنة النواقل عندما يختلف مزيج المنتجات. أقل فائدة للبضائع الخفيفة كبيرة الحجم حيث يُسعّر النقل بالحجم.",
          en: "Neutralises differences in item weight, so it suits carrier comparisons when product mix differs. Less useful for light, bulky goods where freight is priced on volume.",
        },
      },
      {
        label: { ar: "تكلفة الشحن لكل شحنة", en: "Freight cost per shipment" },
        formula: "Freight Cost / Number of Shipments",
        difference: {
          ar: "يقيس كفاءة التجميع: الانخفاض يعني شحنات أقل وأكبر. لكنه يرتفع طبيعيًا عندما تكبر الشحنات، لذلك يُقرأ مع التكلفة لكل وحدة.",
          en: "Measures consolidation efficiency: fewer, larger shipments lower the count. But it rises naturally as shipments grow, so read it with cost per unit.",
        },
      },
      {
        label: { ar: "الشحن كنسبة من المبيعات", en: "Freight as a percentage of sales" },
        formula: "Freight Cost / Net Sales x 100",
        difference: {
          ar: "يربط النقل بالإيراد مباشرة ويناسب النقاش المالي، لكنه يتأثر بتغيّر الأسعار والخصومات دون أي تغيّر في كفاءة النقل.",
          en: "Links transport directly to revenue and suits financial discussion, but moves with prices and discounts even when transport efficiency is unchanged.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "التكلفة لكل وحدة المجمّعة تساوي المتوسط المرجح بالوحدات لتكلفة كل ناقل، ولا تساوي المتوسط البسيط لها إلا إذا تساوت الوحدات المشحونة.",
          en: "The aggregate cost per unit equals the unit-weighted average of each carrier's cost per unit, and equals their simple average only when units shipped are equal.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "ربط تكلفة الشحن بتاريخ الشحن على أساس الاستحقاق وتضمين الرسوم الإضافية ممارسة شائعة في تقارير تكلفة النقل.",
          en: "Attributing freight cost to ship date on an accrual basis and including surcharges is common practice in transport cost reporting.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "نطاق التكلفة (الشحن الوارد أم الصادر، المرتجعات، التخزين المؤقت)، ووحدة القياس، وقاعدة تحويل العملة كلها قرارات داخلية يجب توثيقها.",
          en: "Cost scope (inbound or outbound, returns, cross-dock handling), the unit of measure, and the currency conversion rule are internal decisions that must be documented.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (12,000 لـ 6,000 وحدة) والتمرين من تأليفنا للتعليم فقط، وليست معيارًا لتكلفة النقل.",
          en: "The example figures (12,000 for 6,000 units) and the exercise are invented for teaching only and are not a freight cost benchmark.",
        },
      },
    ],
    related: ["order-cycle-time", "otif", "gross-profit-margin"],
    exercise: {
      prompt: {
        ar: "الناقل A شحن 7,500 وحدة بتكلفة 18,000، والناقل B شحن 5,000 وحدة بتكلفة 9,000. احسب التكلفة لكل وحدة لكل ناقل وللشركة ككل، ثم احسب المتوسط البسيط للناقلين واشرح لماذا هو خاطئ. أخيرًا: هل يعني ذلك أن B أكفأ؟",
        en: "Carrier A shipped 7,500 units for 18,000 and carrier B shipped 5,000 units for 9,000. Compute cost per unit for each carrier and for the company, then compute the simple average of the two carriers and explain why it is wrong. Finally: does this mean B is more efficient?",
      },
      hint: {
        ar: "للشركة: اجمع التكاليف واجمع الوحدات ثم اقسم. للسؤال الأخير فكّر فيما لا يظهر في الرقم.",
        en: "For the company: sum the costs, sum the units, then divide. For the last question, think about what the number does not show.",
      },
      answer: {
        ar: "A = 18,000 ÷ 7,500 = 2.40 لكل وحدة، وB = 9,000 ÷ 5,000 = 1.80 لكل وحدة. الشركة = (18,000 + 9,000) ÷ (7,500 + 5,000) = 27,000 ÷ 12,500 = 2.16. المتوسط البسيط = (2.40 + 1.80) ÷ 2 = 2.10، وهو خاطئ لأنه يعطي الناقلين وزنًا متساويًا رغم أن A شحن وحدات أكثر. ولا يعني ذلك أن B أكفأ بالضرورة: قد ينقل B أصنافًا أخف أو مسافات أقصر، فالمقارنة العادلة تكون بالتكلفة لكل كيلوغرام ضمن نفس نوع الشحنة ونطاق المسافة.",
        en: "A = 18,000 ÷ 7,500 = 2.40 per unit, B = 9,000 ÷ 5,000 = 1.80 per unit. Company = (18,000 + 9,000) ÷ (7,500 + 5,000) = 27,000 ÷ 12,500 = 2.16. Simple average = (2.40 + 1.80) ÷ 2 = 2.10, which is wrong because it gives both carriers equal weight although A shipped more units. Nor does it prove B is more efficient: B may carry lighter items or shorter distances, so a fair comparison uses cost per kilogram within the same shipment type and distance band.",
      },
    },
    references: [
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "القسمة الآمنة التي تعيد BLANK عندما لا توجد وحدات مشحونة في السياق.",
          en: "Safe division that returns BLANK when there are no units shipped in context.",
        },
      },
      {
        title: "SUM function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/sum-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "تجميع البسط والمقام بشكل منفصل قبل القسمة، وهو أساس حساب النسبة من مجموعين.",
          en: "Aggregates numerator and denominator separately before dividing, the basis of a ratio of sums.",
        },
      },
    ],
  },
];
