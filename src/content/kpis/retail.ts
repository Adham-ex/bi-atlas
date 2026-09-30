import type { Kpi } from "../types";

export const retailKpis: Kpi[] = [
  {
    id: "net-sales",
    slug: "net-sales",
    name: "Net Sales",
    nameAr: "صافي المبيعات",
    domains: ["retail"],
    category: { ar: "الإيراد", en: "Revenue" },
    difficulty: "beginner",
    unit: { ar: "عملة", en: "Currency" },
    aggregation: "additive",
    definition: {
      ar: "صافي قيمة المبيعات خلال فترة محددة بعد طرح الخصومات والمرتجعات من إجمالي المبيعات. هو الرقم الذي يعبّر عمّا احتفظ به المتجر فعلًا من قيمة البيع، لا عمّا سُجّل على الفاتورة أول مرة.",
      en: "The value of sales in a period after discounts and returns are deducted from gross sales. It expresses what the business actually kept from its selling activity, not what was first rung up on the invoice.",
    },
    whyItMatters: {
      ar: "صافي المبيعات هو الأساس الذي تُبنى عليه معظم مؤشرات التجزئة الأخرى: هامش الربح، ومتوسط قيمة الطلب، ونمو الإيراد. لو اختلف تعريفه بين تقرير وآخر اختلفت كل النسب المشتقة منه، وضاعت الثقة في اللوحة كلها.",
      en: "Net sales is the base most other retail metrics are built on: margin, average order value, revenue growth. If its definition differs between reports, every ratio derived from it differs too, and trust in the whole dashboard erodes.",
    },
    interpretation: {
      ar: "الفجوة بين الإجمالي والصافي تستحق المتابعة بحد ذاتها. اتساعها يعني أن النمو يُشترى بالخصومات أو أن المرتجعات ترتفع، حتى لو بدا الإجمالي في صعود. لذلك يُعرض الصافي دائمًا مع مكوّناته لا وحده.",
      en: "The gap between gross and net deserves tracking on its own. A widening gap means growth is being bought with discounts or returns are climbing, even while gross looks healthy. That is why net sales is always shown with its components, never alone.",
    },
    formula: "Net Sales = Gross Sales - Discounts - Returns",
    numerator: {
      ar: "إجمالي المبيعات بسعر البيع قبل الخصم، مطروحًا منه الخصومات الممنوحة وقيمة المرتجعات المقبولة خلال الفترة. عدّل التعريف ليتوافق مع التعريف المحاسبي المعتمد لدى المالية.",
      en: "Gross sales at list selling price, minus discounts granted and the value of accepted returns in the period. Adapt the definition to the accounting definition agreed with finance.",
    },
    timeGrain: {
      ar: "يومي للتشغيل، وشهري وربع سنوي للتقارير الإدارية. المقارنة الأصدق مع نفس الفترة من العام السابق بسبب الموسمية.",
      en: "Daily for operations, monthly and quarterly for management reporting. The most honest comparison is to the same period last year because of seasonality.",
    },
    direction: {
      rising: {
        ar: "ارتفاع صافي المبيعات إيجابي عادة، بشرط أن يرتفع بوتيرة لا تقل عن الإجمالي. إن ارتفع الإجمالي أسرع من الصافي فالخصومات أو المرتجعات تأكل جزءًا متزايدًا من النمو.",
        en: "Rising net sales is usually positive, provided it grows at least as fast as gross. If gross grows faster than net, discounts or returns are eating a growing share of the growth.",
      },
      falling: {
        ar: "انخفاضه قد يعني تراجع الطلب، أو خصومات أعمق، أو موجة مرتجعات، أو مجرد اختلاف في توقيت الاعتراف بالإيراد. التفكيك إلى المكوّنات يحدد أيها السبب.",
        en: "A decline can mean weaker demand, deeper discounting, a wave of returns, or simply a difference in revenue recognition timing. Decomposing into components tells you which.",
      },
      caveat: {
        ar: "الأعلى ليس دائمًا أفضل: رفع صافي المبيعات بخصومات كبيرة قد يخفض هامش الربح الإجمالي. ولا يُحكم على المبيعات بمعزل عن الربحية والمخزون.",
        en: "Higher is not always better: lifting net sales with heavy discounts can lower gross margin. Sales should never be judged in isolation from profitability and inventory.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "إجمالي المبيعات", en: "Gross sales" }, value: "150,000" },
        { label: { ar: "الخصومات", en: "Discounts" }, value: "10,000" },
        { label: { ar: "المرتجعات", en: "Returns" }, value: "5,000" },
      ],
      steps: [
        { label: { ar: "طرح الخصومات", en: "Deduct discounts" }, expression: "150,000 − 10,000 = 140,000" },
        { label: { ar: "طرح المرتجعات", en: "Deduct returns" }, expression: "140,000 − 5,000 = 135,000" },
        { label: { ar: "نسبة الصافي إلى الإجمالي", en: "Net-to-gross ratio" }, expression: "135,000 ÷ 150,000 = 90%" },
      ],
      result: { label: { ar: "صافي المبيعات", en: "Net sales" }, value: "135,000" },
      reading: {
        ar: "من كل 100 سُجّلت على الفواتير، احتفظ المتجر بـ 90: ذهبت قرابة 6.7 للخصومات و3.3 للمرتجعات. متابعة هذه النسبة شهريًا تكشف مبكرًا ما إذا كانت الحملات الترويجية تشتري المبيعات بثمن مرتفع.",
        en: "Of every 100 rung up on invoices, the store kept 90: about 6.7 went to discounts and 3.3 to returns. Tracking this ratio monthly shows early whether promotions are buying sales at too high a price.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "صافي المبيعات بمكوّناته ومقارنته بالعام السابق", en: "Net sales with its components and prior-year comparison" },
        code: `Gross Sales :=
SUM ( 'SalesLine'[GrossAmount] )

Discounts :=
SUM ( 'SalesLine'[DiscountAmount] )

-- Returns live in their own fact, dated by the return date.
Returns :=
SUM ( 'Returns'[ReturnAmount] )

Net Sales :=
[Gross Sales] - [Discounts] - [Returns]

Net to Gross % :=
DIVIDE ( [Net Sales], [Gross Sales] )

Net Sales PY :=
CALCULATE ( [Net Sales], DATEADD ( 'Date'[Date], -1, YEAR ) )

Net Sales YoY % :=
DIVIDE ( [Net Sales] - [Net Sales PY], [Net Sales PY] )`,
        assumptions: [
          {
            ar: "'SalesLine' بحبيبية سطر لكل صنف في الفاتورة، وقيم GrossAmount و DiscountAmount موجبة ومن غير ضريبة.",
            en: "'SalesLine' is at one row per item per invoice, and GrossAmount and DiscountAmount are positive and exclude tax.",
          },
          {
            ar: "المرتجعات في جدول 'Returns' منفصل بقيم موجبة، ومرتبط بجدول التاريخ عبر تاريخ الإرجاع لا تاريخ البيع الأصلي. إن كانت سياستك تنسبها إلى تاريخ البيع فغيّر العلاقة.",
            en: "Returns sit in a separate 'Returns' table with positive values, related to Date on the return date, not the original sale date. If your policy attributes them to the sale date, change the relationship.",
          },
          {
            ar: "جدول 'Date' متصل ومعلّم كجدول تاريخ ويغطي سنوات كاملة، وإلا فإن DATEADD يعيد نتائج ناقصة.",
            en: "'Date' is contiguous, marked as a date table and covers whole years, otherwise DATEADD returns incomplete results.",
          },
          {
            ar: "الطلبات الملغاة قبل الشحن لا تصل إلى 'SalesLine' أصلًا. إن كانت موجودة فيجب استبعادها بعمود حالة.",
            en: "Orders cancelled before shipment never reach 'SalesLine'. If they are present, they must be excluded with a status column.",
          },
        ],
        requires: ["SalesLine[GrossAmount]", "SalesLine[DiscountAmount]", "Returns[ReturnAmount]", "Date[Date]"],
      },
    ],
    model: [
      {
        table: "SalesLine",
        grain: { ar: "سطر واحد لكل صنف في كل فاتورة", en: "One row per item per invoice" },
        columns: ["InvoiceId", "LineId", "InvoiceDate", "ProductId", "StoreId", "ChannelId", "Quantity", "GrossAmount", "DiscountAmount"],
        role: { ar: "مصدر إجمالي المبيعات والخصومات", en: "Source of gross sales and discounts" },
      },
      {
        table: "Returns",
        grain: { ar: "سطر واحد لكل صنف مرتجع", en: "One row per returned item" },
        columns: ["ReturnId", "OriginalInvoiceId", "ReturnDate", "ProductId", "StoreId", "ChannelId", "ReturnAmount", "ReasonCode"],
        role: { ar: "مصدر المرتجعات المطروحة من الإجمالي", en: "Source of returns deducted from gross" },
      },
      {
        table: "Product / Store / Channel",
        grain: { ar: "صف واحد لكل منتج أو فرع أو قناة", en: "One row per product, store or channel" },
        columns: ["ProductId", "Category", "StoreId", "Region", "ChannelId", "ChannelName"],
        role: { ar: "أبعاد مشتركة تربط الجدولين حتى يُقسَّم الصافي بنفس المحاور", en: "Shared dimensions linking both facts so net sales slices on the same axes" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "Quarter", "Year", "FiscalPeriod"],
        role: { ar: "يرتبط بتاريخ الفاتورة وبتاريخ الإرجاع، ويتيح مقارنة العام السابق", en: "Related to invoice date and return date; enables prior-year comparison" },
      },
    ],
    visuals: [
      {
        pattern: "kpi-card",
        why: {
          ar: "بطاقة صافي المبيعات مع نسبة التغير عن العام السابق هي أول ما يبحث عنه المدير في الصفحة التنفيذية.",
          en: "A net sales card with year-over-year change is the first thing a manager looks for on the executive page.",
        },
      },
      {
        pattern: "period-over-period",
        why: {
          ar: "خط الاتجاه مقارنة بنفس الفترة من العام السابق يعزل الموسمية ويُظهر النمو الحقيقي.",
          en: "A trend line against the same period last year isolates seasonality and shows real growth.",
        },
      },
      {
        pattern: "waterfall-variance",
        why: {
          ar: "جسر من الإجمالي إلى الصافي يُظهر حجم الخصومات والمرتجعات بصريًا، وهو الشكل الأوضح لمناقشة تكلفة الحملات.",
          en: "A bridge from gross to net shows the size of discounts and returns visually — the clearest shape for discussing the cost of promotions.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عدم المطابقة مع المالية. الرقم في اللوحة يجب أن يطابق دفتر الأستاذ في نهاية الشهر، وأي فرق يجب أن يُفسَّر ويوثَّق قبل النشر.",
        en: "Not reconciling with finance. The dashboard figure must tie to the general ledger at month end, and any gap must be explained and documented before publishing.",
      },
      {
        ar: "خلط الضرائب ورسوم الشحن في الإجمالي في مصدر واستبعادها في آخر، فيظهر فرق دائم بين نظام نقاط البيع ومنصة المتجر الإلكتروني.",
        en: "Including tax and shipping fees in gross in one source and excluding them in another, producing a permanent gap between the POS and the e-commerce platform.",
      },
      {
        ar: "توقيت الاعتراف: الطلب الإلكتروني قد يُسجَّل عند الطلب أو عند الشحن أو عند التسليم. اختيار تاريخ مختلف عن المالية يُزيح المبيعات بين الأشهر.",
        en: "Recognition timing: an online order can be recorded at order, shipment or delivery. Choosing a different date from finance shifts sales between months.",
      },
      {
        ar: "نسبة المرتجعات إلى تاريخ البيع الأصلي دون قرار واعٍ يجعل الأشهر المغلقة تتغير بأثر رجعي كلما وصل مرتجع جديد.",
        en: "Attributing returns to the original sale date without a deliberate decision makes closed months change retroactively every time a new return arrives.",
      },
      {
        ar: "معاملة الإلغاءات كمرتجعات أو العكس. الإلغاء قبل الشحن لا يجب أن يظهر في الإجمالي أصلًا، بينما المرتجع يظهر فيه ثم يُطرح.",
        en: "Treating cancellations as returns or vice versa. A cancellation before shipment should never appear in gross, whereas a return appears in gross and is then deducted.",
      },
    ],
    variants: [
      {
        label: { ar: "المبيعات الإجمالية", en: "Gross sales" },
        formula: "Gross Sales = Sum of Quantity x Selling Price",
        difference: {
          ar: "قبل أي خصم أو مرتجع. مفيد لقياس النشاط التشغيلي وحجم العمل، لكنه يبالغ في تقدير ما احتفظ به المتجر.",
          en: "Before any discount or return. Useful for measuring operational activity and workload, but overstates what the business kept.",
        },
      },
      {
        label: { ar: "صافي المبيعات للفروع المماثلة", en: "Like-for-like net sales" },
        formula: "Net Sales of stores open in both periods",
        difference: {
          ar: "يستبعد الفروع المفتوحة أو المغلقة حديثًا حتى يقيس النمو العضوي لا نمو التوسع. قاعدة تحديد الفرع المماثل قرار داخلي.",
          en: "Excludes newly opened or closed stores so it measures organic growth rather than expansion. The rule for what counts as comparable is an internal decision.",
        },
      },
      {
        label: { ar: "صافي الإيراد بعد تكلفة الولاء والشحن", en: "Net revenue after loyalty and shipping" },
        formula: "Net Sales - Loyalty Redemptions - Shipping Subsidies",
        difference: {
          ar: "يطرح تكاليف تجارية إضافية مرتبطة بالبيع. أقرب لنظرة المالية للإيراد، لكنه لم يعد مقارنًا بأرقام نقاط البيع.",
          en: "Deducts further commercial costs tied to the sale. Closer to finance's view of revenue, but no longer comparable with POS figures.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "صافي المبيعات مجموع قابل للجمع: صافي السنة يساوي مجموع صافي أشهرها، وصافي الشركة يساوي مجموع صافي فروعها، بشرط استخدام نفس التعريف في كل مستوى.",
          en: "Net sales is additive: the year's net equals the sum of its months, and the company's equals the sum of its stores, provided the same definition is used at every level.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "طرح الخصومات والمرتجعات من الإجمالي هو الصيغة الشائعة لصافي المبيعات في تقارير التجزئة.",
          en: "Deducting discounts and returns from gross is the common form of net sales in retail reporting.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "معاملة الضرائب والشحن والإلغاءات، وتاريخ الاعتراف، وتاريخ نسبة المرتجعات — كلها قرارات يجب الاتفاق عليها مع المالية وتوثيقها.",
          en: "Treatment of tax, shipping and cancellations, the recognition date, and the date returns are attributed to are all decisions to agree with finance and document.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (150,000 و10,000 و5,000) توضيحية فقط ولا تمثل متجرًا أو قطاعًا بعينه.",
          en: "The example figures (150,000, 10,000 and 5,000) are illustrative only and represent no specific store or sector.",
        },
      },
    ],
    related: ["aov", "gross-profit-margin", "revenue-growth-rate", "sell-through-rate"],
    exercise: {
      prompt: {
        ar: "فرع سجّل هذا الشهر إجمالي مبيعات 240,000، وخصومات 18,000، ومرتجعات 12,000. وكان صافي مبيعاته في نفس الشهر من العام السابق 200,000. احسب صافي المبيعات، ونسبة الصافي إلى الإجمالي، ونمو الصافي عن العام السابق.",
        en: "A store recorded gross sales of 240,000 this month, discounts of 18,000 and returns of 12,000. Its net sales in the same month last year were 200,000. Compute net sales, the net-to-gross ratio and year-over-year net growth.",
      },
      hint: {
        ar: "اطرح المكوّنين من الإجمالي أولًا، ثم اقسم على الإجمالي، ثم قارن بالعام السابق.",
        en: "Deduct both components from gross first, then divide by gross, then compare to last year.",
      },
      answer: {
        ar: "صافي المبيعات = 240,000 − 18,000 − 12,000 = 210,000. نسبة الصافي إلى الإجمالي = 210,000 ÷ 240,000 = 87.5%، أي أن الخصومات أخذت 7.5% والمرتجعات 5% من الإجمالي. النمو = (210,000 − 200,000) ÷ 200,000 = 5%. النمو إيجابي، لكن لو كانت نسبة الصافي إلى الإجمالي في العام السابق أعلى فهذا يعني أن جزءًا من النمو اشتُري بخصومات أعمق، ويستحق مراجعة هامش الربح قبل الاحتفال.",
        en: "Net sales = 240,000 − 18,000 − 12,000 = 210,000. Net-to-gross = 210,000 ÷ 240,000 = 87.5%, so discounts took 7.5% and returns 5% of gross. Growth = (210,000 − 200,000) ÷ 200,000 = 5%. Growth is positive, but if last year's net-to-gross ratio was higher, part of the growth was bought with deeper discounts, and margin deserves a check before celebrating.",
      },
    },
    references: [
      {
        title: "DATEADD function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/dateadd-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع إزاحة الفترة المستخدمة في مقارنة صافي المبيعات بالعام السابق.",
          en: "Reference for the period shift used to compare net sales with the prior year.",
        },
      },
      {
        title: "CALCULATE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/calculate-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع تعديل سياق التصفية الذي تعتمد عليه مقاييس المقارنة الزمنية.",
          en: "Reference for the filter-context modification the time-comparison measures rely on.",
        },
      },
    ],
  },

  {
    id: "conversion-rate",
    slug: "conversion-rate",
    name: "Conversion Rate",
    nameAr: "معدل التحويل",
    domains: ["retail", "marketing"],
    category: { ar: "القمع والتحويل", en: "Funnel and conversion" },
    difficulty: "beginner",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة الزيارات أو الجلسات أو الأشخاص الذين أكملوا الإجراء المطلوب. في التجزئة الإجراء عادة هو الشراء (الطلبات مقسومة على الجلسات، أو المعاملات مقسومة على زيارات الفرع)، وفي التسويق قد يكون تسجيلًا أو طلب عرض سعر أو أي حدث تحويل معرّف مسبقًا.",
      en: "The share of visits, sessions or people that completed the desired action. In retail the action is usually a purchase (orders over sessions, or transactions over store visits); in marketing it can be a sign-up, a quote request, or any predefined conversion event.",
    },
    whyItMatters: {
      ar: "معدل التحويل يكشف أين يتسرّب الطلب: في صفحة المنتج، أو خطوة الدفع، أو جودة الحملة، أو تجربة الفرع. تحسينه يرفع الإيراد دون إنفاق إضافي على جلب الزيارات، ولذلك هو من أقوى الروافع في المتجر والحملة معًا.",
      en: "Conversion rate reveals where demand leaks: on product pages, at checkout, in campaign quality, or in the store experience. Improving it lifts revenue without extra spend on traffic, which makes it one of the strongest levers for both the store and the campaign.",
    },
    interpretation: {
      ar: "المعدل وحده لا يكفي؛ يجب قراءته حسب مصدر الزيارة والجهاز والفرع. معدل ثابت إجمالًا قد يخفي تحسنًا في كل قناة مع تحوّل المزيج نحو قناة أضعف تحويلًا، والعكس.",
      en: "The rate alone is not enough; it must be read by traffic source, device and store. A flat blended rate can hide improvement in every channel while the mix shifts toward a weaker-converting channel, and vice versa.",
    },
    formula: "Conversion Rate = Conversions / Eligible Sessions (or Visits, Clicks, Leads) x 100",
    numerator: {
      ar: "عدد التحويلات: الطلبات في المتجر الإلكتروني، أو المعاملات في الفرع، أو حدث التحويل المعرّف في الحملة. يجب إزالة التكرار (الحدث نفسه المُرسل مرتين) واستبعاد الطلبات التجريبية.",
      en: "Count of conversions: orders online, transactions in store, or the defined conversion event in a campaign. Duplicates (the same event fired twice) must be removed and test orders excluded.",
    },
    denominator: {
      ar: "عدد الفرص المؤهلة من نفس الوحدة المتفق عليها: جلسات، أو زوار، أو نقرات، أو عملاء محتملون. لا يُخلط بين المستخدمين والجلسات والزوار في نفس المعادلة.",
      en: "Count of eligible opportunities in one agreed unit: sessions, visitors, clicks or leads. Users, sessions and visitors must never be mixed in the same formula.",
    },
    timeGrain: {
      ar: "يومي أو أسبوعي للمراقبة، مع الحذر من الفترات القصيرة ذات الزيارات القليلة لأن المعدل يتذبذب بقوة. للحملات تُحدد نافذة نسب التحويل (مثل 7 أيام بعد النقر) قبل القياس.",
      en: "Daily or weekly for monitoring, with care on short low-traffic periods where the rate swings wildly. For campaigns, fix the attribution window (for example 7 days after click) before measuring.",
    },
    direction: {
      rising: {
        ar: "ارتفاع المعدل يعني عادة تجربة شراء أسهل أو زيارات أكثر جودة.",
        en: "A rising rate usually means an easier buying experience or better-quality traffic.",
      },
      falling: {
        ar: "انخفاضه قد يعني احتكاكًا في الموقع أو الدفع، أو نفاد منتجات مطلوبة، أو حملة تجلب زيارات غير مهتمة.",
        en: "A decline can mean friction on the site or at checkout, stockouts of wanted products, or a campaign bringing uninterested traffic.",
      },
      caveat: {
        ar: "المعدل قد يرتفع لأسباب غير صحية: خفض الإنفاق على حملات الوعي يقلل الزيارات الباردة فيرتفع المعدل بينما تنخفض الطلبات الكلية. والخصم العميق يرفع التحويل ويخفض الهامش. احكم دائمًا مع عدد التحويلات والإيراد.",
        en: "The rate can rise for unhealthy reasons: cutting awareness spend removes cold traffic, lifting the rate while total orders fall. Deep discounts raise conversion and cut margin. Always judge it alongside conversion count and revenue.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "الطلبات (متجر إلكتروني)", en: "Orders (online store)" }, value: "800" },
        { label: { ar: "الجلسات", en: "Sessions" }, value: "20,000" },
        { label: { ar: "تحويلات حملة تسويقية", en: "Campaign conversions" }, value: "500" },
        { label: { ar: "الجلسات المؤهلة للحملة", en: "Eligible campaign sessions" }, value: "10,000" },
      ],
      steps: [
        { label: { ar: "تحويل المتجر", en: "Store conversion" }, expression: "800 ÷ 20,000 × 100 = 4%" },
        { label: { ar: "تحويل الحملة", en: "Campaign conversion" }, expression: "500 ÷ 10,000 × 100 = 5%" },
      ],
      result: { label: { ar: "معدل تحويل المتجر", en: "Store conversion rate" }, value: "4%" },
      reading: {
        ar: "أربع جلسات من كل مئة انتهت بطلب. رقم الحملة (5%) لا يُقارن مباشرة بالمتجر لأن حدث التحويل والمقام مختلفان: الحملة تقيس حدثًا محددًا على جلسات مؤهلة فقط. المقارنة الصحيحة هي مع نفس المعدل في الفترة السابقة وحسب نفس المصدر والجهاز.",
        en: "Four in every hundred sessions ended in an order. The campaign figure (5%) is not directly comparable with the store's because the conversion event and denominator differ: the campaign measures a specific event over eligible sessions only. The right comparison is with the same rate in a prior period, by the same source and device.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "معدل التحويل للمتجر الإلكتروني والفرع", en: "Conversion rate for online store and physical store" },
        code: `Sessions :=
DISTINCTCOUNT ( 'WebSession'[SessionId] )

-- Distinct order keys, so a duplicated purchase event cannot inflate the count.
Orders :=
DISTINCTCOUNT ( 'WebOrder'[OrderId] )

-- Order-based rate: the md's Orders / Sessions definition.
Conversion Rate :=
DIVIDE ( [Orders], [Sessions] )

-- Session-based rate: a session with two orders counts once.
Session Conversion Rate :=
DIVIDE (
    CALCULATE ( [Sessions], 'WebSession'[OrderCount] > 0 ),
    [Sessions]
)

-- Physical retail: transactions over counted visitors.
Store Conversion Rate :=
DIVIDE (
    DISTINCTCOUNT ( 'StoreTransaction'[TransactionId] ),
    SUM ( 'StoreTraffic'[Visitors] )
)`,
        assumptions: [
          {
            ar: "'WebSession' بحبيبية جلسة واحدة لكل صف، ويحمل مصدر الزيارة والجهاز وتاريخ الجلسة، وعمود OrderCount محسوب مسبقًا في مرحلة التحميل.",
            en: "'WebSession' is at one row per session and carries traffic source, device and session date, with an OrderCount column precomputed at load.",
          },
          {
            ar: "'WebOrder' مرتبط بـ 'WebSession' بعلاقة متعدد إلى واحد على SessionId، فتنتقل تصفية المصدر والجهاز والتاريخ من الجلسة إلى الطلب، ويُنسب الطلب لتاريخ جلسته.",
            en: "'WebOrder' relates many-to-one to 'WebSession' on SessionId, so source, device and date filters flow from session to order, and each order is dated by its session.",
          },
          {
            ar: "الطلبات التجريبية وجلسات الروبوتات مستبعدة في مرحلة التحميل. بقاؤها يشوّه البسط أو المقام.",
            en: "Test orders and bot sessions are removed at load. Leaving them in distorts the numerator or denominator.",
          },
          {
            ar: "'StoreTraffic' يأتي من عدّاد الأبواب بحبيبية فرع لكل ساعة، ويرتبط بجدولي 'Store' و 'Date' مثل 'StoreTransaction'.",
            en: "'StoreTraffic' comes from door counters at one row per store per hour and relates to 'Store' and 'Date' just like 'StoreTransaction'.",
          },
        ],
        requires: ["WebSession[SessionId]", "WebSession[OrderCount]", "WebOrder[OrderId]", "WebOrder[SessionId]", "StoreTransaction[TransactionId]", "StoreTraffic[Visitors]"],
      },
    ],
    model: [
      {
        table: "WebSession",
        grain: { ar: "جلسة واحدة لكل صف", en: "One row per session" },
        columns: ["SessionId", "UserId", "SessionDate", "TrafficSource", "CampaignId", "Device", "LandingPage", "OrderCount"],
        role: { ar: "مصدر المقام وحامل أبعاد المصدر والجهاز", en: "Source of the denominator and carrier of source and device attributes" },
      },
      {
        table: "WebOrder",
        grain: { ar: "طلب واحد لكل صف", en: "One row per order" },
        columns: ["OrderId", "SessionId", "CustomerId", "OrderDate", "NetAmount", "Status"],
        role: { ar: "مصدر البسط للمتجر الإلكتروني", en: "Source of the online numerator" },
      },
      {
        table: "StoreTraffic / StoreTransaction",
        grain: { ar: "فرع لكل ساعة للزوار، ومعاملة واحدة لكل صف للمعاملات", en: "Store per hour for visitors; one row per transaction for transactions" },
        columns: ["StoreId", "DateHour", "Visitors", "TransactionId", "TransactionDate"],
        role: { ar: "مقام وبسط التحويل في الفرع الفعلي", en: "Denominator and numerator for physical-store conversion" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "WeekKey", "MonthKey", "IsPromotionDay"],
        role: { ar: "يرتبط بتاريخ الجلسة وتاريخ الزيارة، ويتيح عزل أيام الحملات", en: "Related to session date and visit date; allows isolating campaign days" },
      },
    ],
    visuals: [
      {
        pattern: "funnel",
        why: {
          ar: "القمع يُظهر التحويل بين المراحل (مشاهدة منتج، إضافة للسلة، بدء الدفع، طلب) فيحدد مكان التسرّب بدل الاكتفاء بالرقم النهائي.",
          en: "A funnel shows stage-to-stage conversion (product view, add to cart, checkout start, order) and pinpoints the leak instead of stopping at the final number.",
        },
      },
      {
        pattern: "period-over-period",
        why: {
          ar: "الاتجاه عبر الزمن مقسمًا حسب مصدر الزيارة أو الجهاز أو الفرع يكشف متى بدأ التغير وأين.",
          en: "A trend over time split by traffic source, device or store reveals when a change began and where.",
        },
      },
      {
        pattern: "decomposition-tree",
        why: {
          ar: "يفكك المعدل الإجمالي عبر المصدر ثم الجهاز ثم صفحة الهبوط، فيُظهر أثر المزيج الذي يخفيه الرقم المجمّع.",
          en: "Breaks the blended rate down by source, then device, then landing page, exposing the mix effect the aggregate hides.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "خلط الوحدات: طلبات مقسومة على مستخدمين في تقرير، وعلى جلسات في آخر. المستخدم الواحد قد يملك عدة جلسات، فيختلف الرقم كثيرًا بين التعريفين.",
        en: "Mixing units: orders over users in one report and over sessions in another. One user can have several sessions, so the number differs sharply between definitions.",
      },
      {
        ar: "عدم إزالة تكرار أحداث الشراء. إعادة تحميل صفحة التأكيد قد ترسل الحدث مرتين فيتضخم البسط؛ العدّ يجب أن يكون على معرّف الطلب.",
        en: "Not deduplicating purchase events. Reloading the confirmation page can fire the event twice and inflate the numerator; counting must be on the order key.",
      },
      {
        ar: "حساب متوسط معدلات القنوات أو الأيام بدل قسمة مجموع التحويلات على مجموع الجلسات. القناة الصغيرة ذات المعدل العالي تحصل على وزن لا تستحقه.",
        en: "Averaging channel or daily rates instead of dividing total conversions by total sessions. A small channel with a high rate gets weight it does not deserve.",
      },
      {
        ar: "عدم تحديد نافذة النسب وقاعدته في التسويق. التحويل خلال يوم من النقر ليس هو التحويل خلال 30 يومًا، والمقارنة بين حملات بنوافذ مختلفة مضللة.",
        en: "Not fixing the attribution window and rule in marketing. Conversion within one day of click is not conversion within 30 days, and comparing campaigns on different windows misleads.",
      },
      {
        ar: "مقارنة معدل حملة بحدث تحويل خفيف (تسجيل بريد) بمعدل متجر بحدث ثقيل (شراء). الرقمان يقيسان أشياء مختلفة ولا يوضعان على نفس المحور.",
        en: "Comparing a campaign rate on a light event (email sign-up) with a store rate on a heavy event (purchase). The two measure different things and do not belong on the same axis.",
      },
    ],
    variants: [
      {
        label: { ar: "تحويل الجلسات", en: "Session conversion" },
        formula: "Sessions with at least one order / Sessions x 100",
        difference: {
          ar: "يعدّ الجلسة المحوّلة مرة واحدة حتى لو احتوت طلبين، فلا يتجاوز 100% أبدًا. أنسب لقياس تجربة الموقع.",
          en: "Counts a converting session once even if it holds two orders, so it can never exceed 100%. Better suited to measuring site experience.",
        },
      },
      {
        label: { ar: "تحويل المستخدمين", en: "User conversion" },
        formula: "Distinct converting users / Distinct users x 100",
        difference: {
          ar: "يقيس نسبة الأشخاص لا الزيارات، فيكون أعلى عادة لأن الشخص قد يزور عدة مرات قبل الشراء. يتطلب هوية مستخدم موثوقة عبر الأجهزة.",
          en: "Measures the share of people rather than visits, so it is usually higher because a person may visit several times before buying. Needs reliable cross-device user identity.",
        },
      },
      {
        label: { ar: "تحويل مرحلة القمع التسويقي", en: "Marketing stage conversion" },
        formula: "Leads reaching next stage / Leads entering stage x 100",
        difference: {
          ar: "يقيس الانتقال بين مرحلتين (عميل محتمل إلى مؤهل، مؤهل إلى عميل) بدل التحويل من الزيارة. يحتاج تتبع الأفواج لأن الانتقال قد يستغرق أسابيع.",
          en: "Measures movement between two stages (lead to qualified, qualified to customer) rather than from visit. Needs cohort tracking because the transition can take weeks.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "مع التعريف القائم على الطلبات: الإيراد = الجلسات × معدل التحويل × متوسط قيمة الطلب. هذه هوية حسابية تُستخدم لتفكيك تغير الإيراد إلى ثلاثة عوامل.",
          en: "With the order-based definition: revenue = sessions x conversion rate x average order value. This arithmetic identity is used to decompose revenue change into three factors.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "قسمة الطلبات على الجلسات في التجارة الإلكترونية، والمعاملات على الزوار في الفروع، هي الصيغ الشائعة في تقارير التجزئة.",
          en: "Orders over sessions online, and transactions over visitors in stores, are the common forms in retail reporting.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "تعريف حدث التحويل، والمقام المؤهل، ونافذة النسب وقاعدته، وقواعد استبعاد الروبوتات — قرارات داخلية يجب توثيقها في قاموس المؤشرات.",
          en: "The conversion event, the eligible denominator, the attribution window and rule, and bot-exclusion rules are internal decisions to document in the metric dictionary.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (800 من 20,000 و500 من 10,000) توضيحية فقط وليست معيارًا لأي قطاع.",
          en: "The example figures (800 of 20,000 and 500 of 10,000) are illustrative only and are not a benchmark for any sector.",
        },
      },
    ],
    related: ["aov", "ctr", "cac", "roas"],
    exercise: {
      prompt: {
        ar: "في شهر مارس سجّل متجر 30,000 جلسة من الجوال بـ 600 طلب، و15,000 جلسة من الحاسوب بـ 750 طلبًا. في أبريل ارتفعت جلسات الجوال إلى 40,000 بـ 800 طلب، وبقي الحاسوب 15,000 جلسة بـ 750 طلبًا. احسب المعدل لكل جهاز والمعدل الإجمالي للشهرين، وفسّر النتيجة. ثم بيّن الخطأ في حساب المعدل الإجمالي كمتوسط لمعدلي الجهازين.",
        en: "In March a store had 30,000 mobile sessions with 600 orders and 15,000 desktop sessions with 750 orders. In April mobile sessions rose to 40,000 with 800 orders, while desktop stayed at 15,000 sessions with 750 orders. Compute each device's rate and the blended rate for both months, and explain the result. Then show what goes wrong if the blended rate is computed as the average of the two device rates.",
      },
      hint: {
        ar: "المعدل الإجمالي = مجموع الطلبات ÷ مجموع الجلسات. لاحظ ما حدث لكل جهاز على حدة ولحصة كل جهاز من الجلسات.",
        en: "Blended rate = total orders ÷ total sessions. Note what happened to each device on its own and to each device's share of sessions.",
      },
      answer: {
        ar: "مارس: الجوال 600 ÷ 30,000 = 2%، والحاسوب 750 ÷ 15,000 = 5%، والإجمالي 1,350 ÷ 45,000 = 3%. أبريل: الجوال 800 ÷ 40,000 = 2%، والحاسوب 5%، والإجمالي 1,550 ÷ 55,000 ≈ 2.82%. المعدل الإجمالي انخفض رغم ثبات معدل كل جهاز، لأن حصة الجوال الأضعف تحويلًا ارتفعت من 67% إلى 73% من الجلسات — هذا أثر مزيج لا تراجع في الأداء. متوسط المعدلين (2% و5%) يعطي 3.5% في الشهرين، وهو خطأ لأنه يعامل 15,000 جلسة حاسوب كأنها تساوي 30,000 أو 40,000 جلسة جوال، ويخفي أثر المزيج تمامًا.",
        en: "March: mobile 600 ÷ 30,000 = 2%, desktop 750 ÷ 15,000 = 5%, blended 1,350 ÷ 45,000 = 3%. April: mobile 800 ÷ 40,000 = 2%, desktop 5%, blended 1,550 ÷ 55,000 ≈ 2.82%. The blended rate fell although each device's rate was unchanged, because the weaker-converting mobile share of sessions rose from 67% to 73% — a mix effect, not a performance decline. Averaging the two rates (2% and 5%) gives 3.5% in both months, which is wrong: it treats 15,000 desktop sessions as equal to 30,000 or 40,000 mobile sessions and hides the mix effect entirely.",
      },
    },
    references: [
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع القسمة الآمنة التي تعيد فراغًا بدل الخطأ في الأيام أو القنوات الخالية من الجلسات.",
          en: "Reference for safe division that returns blank instead of an error on days or channels with no sessions.",
        },
      },
      {
        title: "DISTINCTCOUNT function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/distinctcount-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع العد الفريد للجلسات والطلبات، وهو ما يحمي المعدل من تكرار الأحداث.",
          en: "Reference for distinct counting sessions and orders, which protects the rate from duplicated events.",
        },
      },
    ],
  },

  {
    id: "sell-through-rate",
    slug: "sell-through-rate",
    name: "Sell-through Rate",
    nameAr: "معدل تصريف المخزون",
    domains: ["retail"],
    category: { ar: "المخزون والتشكيلة", en: "Inventory and assortment" },
    difficulty: "intermediate",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة الوحدات المباعة من الوحدات التي كانت متاحة للبيع خلال الفترة. يجيب عن سؤال بسيط: من كل ما وضعناه على الرف، كم بعنا؟",
      en: "The share of units sold out of the units that were available for sale during the period. It answers a simple question: of everything we put on the shelf, how much did we sell?",
    },
    whyItMatters: {
      ar: "هو المؤشر الذي تُتخذ به قرارات إعادة الطلب والتخفيض. المنتج ذو التصريف العالي مرشح لإعادة التوريد قبل النفاد، والمنتج ذو التصريف المنخفض مع مخزون كبير مرشح للتخفيض أو النقل قبل أن يتقادم ويحبس رأس المال.",
      en: "It is the metric replenishment and markdown decisions are made with. A high sell-through product is a candidate for reorder before it runs out; a low sell-through product with heavy stock is a candidate for markdown or transfer before it ages and ties up capital.",
    },
    interpretation: {
      ar: "المعدل يُقرأ دائمًا مقابل الزمن المنقضي من الموسم. تصريف 40% بعد أسبوعين من موسم مدته 12 أسبوعًا ممتاز، و40% في الأسبوع العاشر إنذار. لذلك يُعرض مع عمر المخزون والمخزون المتبقي.",
      en: "The rate is always read against time elapsed in the season. 40% sell-through two weeks into a 12-week season is excellent; 40% in week ten is an alarm. That is why it is shown with stock age and remaining on-hand.",
    },
    formula: "Sell-through % = Units Sold / Units Available for Sale x 100",
    numerator: {
      ar: "الوحدات المباعة خلال الفترة، ويُحدَّد صراحة هل تُطرح منها المرتجعات القابلة لإعادة البيع.",
      en: "Units sold in the period, with an explicit decision on whether resellable returns are deducted.",
    },
    denominator: {
      ar: "الوحدات المتاحة للبيع: عادة مخزون أول الفترة مضافًا إليه المستلَم خلالها، أو مقام آخر متفق عليه. التحويلات بين الفروع تُعالَج كاستلام أو صرف حسب الاتجاه.",
      en: "Units available for sale: usually opening stock plus receipts in the period, or another agreed denominator. Inter-store transfers are handled as receipts or issues depending on direction.",
    },
    timeGrain: {
      ar: "أسبوعي في الأزياء والمنتجات الموسمية، وشهري في الفئات الثابتة. يُحسب تراكميًا من بداية الموسم أو من تاريخ الاستلام، لا لكل أسبوع منفصلًا.",
      en: "Weekly for fashion and seasonal goods, monthly for stable categories. Computed cumulatively from season start or receipt date, not for each week in isolation.",
    },
    direction: {
      rising: {
        ar: "الارتفاع يعني طلبًا قويًا وتصريفًا جيدًا. إن اقترب من 100% مبكرًا فقد يعني أن الكمية المشتراة كانت أقل من اللازم وأن مبيعات ضاعت بسبب النفاد.",
        en: "A rise means strong demand and healthy clearance. If it nears 100% early, the buy was likely too small and sales were lost to stockouts.",
      },
      falling: {
        ar: "الانخفاض يعني طلبًا أضعف من المتوقع أو شراءً زائدًا، ويشير إلى الحاجة لتخفيض أو نقل أو إيقاف إعادة الطلب.",
        en: "A fall means weaker demand than planned or over-buying, and signals the need to mark down, transfer, or stop reordering.",
      },
      caveat: {
        ar: "المعدل العالي ليس دائمًا نجاحًا: قد يأتي من تخفيضات عميقة تأكل الهامش، أو من كمية مشتراة صغيرة جدًا. يُقرأ مع هامش الربح ومعدل النفاد.",
        en: "A high rate is not always success: it can come from deep markdowns that erode margin, or from too small a buy. Read it with gross margin and stockout rate.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "مخزون أول الفترة (وحدات)", en: "Opening stock (units)" }, value: "600" },
        { label: { ar: "المستلَم خلال الفترة (وحدات)", en: "Received in period (units)" }, value: "400" },
        { label: { ar: "الوحدات المباعة", en: "Units sold" }, value: "700" },
      ],
      steps: [
        { label: { ar: "الوحدات المتاحة للبيع", en: "Units available for sale" }, expression: "600 + 400 = 1,000" },
        { label: { ar: "معدل التصريف", en: "Sell-through" }, expression: "700 ÷ 1,000 × 100 = 70%" },
        { label: { ar: "المتبقي (دون حركات أخرى)", en: "Remaining (no other movements)" }, expression: "1,000 − 700 = 300" },
      ],
      result: { label: { ar: "معدل تصريف المخزون", en: "Sell-through rate" }, value: "70%" },
      reading: {
        ar: "بيع 70% من المتاح وبقيت 300 وحدة. هل هذا جيد؟ يعتمد على موقعنا من الموسم: إن كان في منتصفه فالمنتج يسير نحو النفاد وقد يحتاج إعادة طلب، وإن كان الموسم انتهى فالـ 300 وحدة تحتاج قرار تخفيض أو نقل.",
        en: "70% of what was available sold and 300 units remain. Is that good? It depends on where we are in the season: mid-season, the product is heading toward selling out and may need a reorder; at season end, the 300 units need a markdown or transfer decision.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "معدل التصريف بمقام مخزون أول الفترة زائد المستلَم", en: "Sell-through with opening stock plus receipts as the denominator" },
        code: `Units Sold :=
SUM ( 'SalesLine'[Quantity] )

Units Received :=
SUM ( 'Receipts'[ReceivedUnits] )

-- Snapshot is end-of-day, so opening stock = closing stock of the day before
-- the first visible date. REMOVEFILTERS clears month/year filters on Date
-- that would otherwise hide the prior day; product and store filters remain.
Opening On Hand Units :=
VAR FirstDay =
    MIN ( 'Date'[Date] )
RETURN
    CALCULATE (
        SUM ( 'InventorySnapshot'[OnHandUnits] ),
        REMOVEFILTERS ( 'Date' ),
        'Date'[Date] = FirstDay - 1
    )

Units Available :=
[Opening On Hand Units] + [Units Received]

Sell-through % :=
DIVIDE ( [Units Sold], [Units Available] )`,
        assumptions: [
          {
            ar: "'InventorySnapshot' لقطة يومية بحبيبية منتج لكل فرع لكل يوم، تمثل الرصيد في نهاية اليوم. الرصيد شبه قابل للجمع: يُجمع عبر المنتجات والفروع لكن لا عبر الأيام، ولهذا نأخذ يومًا واحدًا فقط.",
            en: "'InventorySnapshot' is a daily snapshot at product per store per day, holding the end-of-day balance. The balance is semi-additive: it sums across products and stores but not across days, which is why only one day is taken.",
          },
          {
            ar: "التحويلات الواردة من فروع أخرى مسجلة في 'Receipts'، والتحويلات الصادرة تُعامل كصرف لا كبيع فلا تدخل في Units Sold.",
            en: "Inbound transfers from other stores are recorded in 'Receipts'; outbound transfers are treated as issues, not sales, so they do not enter Units Sold.",
          },
          {
            ar: "المقياس هنا يحسب المبيعات الإجمالية بالوحدات. إن قررت طرح المرتجعات القابلة لإعادة البيع فأضف مقياس مرتجعات بالوحدات واطرحه من البسط.",
            en: "This measure uses gross units sold. If you decide to deduct resellable returns, add a returned-units measure and subtract it from the numerator.",
          },
          {
            ar: "جدول 'Date' متصل ويبدأ قبل أول يوم في التقرير بيوم على الأقل، وإلا فلن توجد لقطة لليوم السابق ويصبح المخزون الافتتاحي فارغًا.",
            en: "'Date' is contiguous and starts at least one day before the first reported day; otherwise there is no prior-day snapshot and opening stock comes back blank.",
          },
        ],
        requires: ["SalesLine[Quantity]", "Receipts[ReceivedUnits]", "InventorySnapshot[OnHandUnits]", "Date[Date]"],
      },
    ],
    model: [
      {
        table: "SalesLine",
        grain: { ar: "سطر واحد لكل صنف في كل فاتورة", en: "One row per item per invoice" },
        columns: ["InvoiceId", "InvoiceDate", "ProductId", "StoreId", "Quantity", "NetAmount"],
        role: { ar: "مصدر الوحدات المباعة", en: "Source of units sold" },
      },
      {
        table: "Receipts",
        grain: { ar: "سطر واحد لكل منتج في كل استلام أو تحويل وارد", en: "One row per product per receipt or inbound transfer" },
        columns: ["ReceiptId", "ReceiptDate", "ProductId", "StoreId", "ReceivedUnits", "ReceiptType"],
        role: { ar: "جزء من المقام: ما أضيف إلى المتاح خلال الفترة", en: "Part of the denominator: what was added to availability during the period" },
      },
      {
        table: "InventorySnapshot",
        grain: { ar: "منتج لكل فرع لكل يوم (رصيد نهاية اليوم)", en: "Product per store per day (end-of-day balance)" },
        columns: ["SnapshotDate", "ProductId", "StoreId", "OnHandUnits", "FirstReceiptDate"],
        role: { ar: "مصدر المخزون الافتتاحي والمتبقي وعمر المخزون", en: "Source of opening stock, remaining stock and stock age" },
      },
      {
        table: "Product / Store / Date",
        grain: { ar: "صف لكل منتج، ولكل فرع، ولكل يوم", en: "One row per product, per store, per day" },
        columns: ["ProductId", "Category", "Season", "StoreId", "Date", "WeekKey", "MonthKey"],
        role: { ar: "أبعاد مشتركة تربط الجداول الثلاثة حتى تتوافق الأرقام على نفس المحاور", en: "Shared dimensions linking all three facts so the figures align on the same axes" },
      },
    ],
    visuals: [
      {
        pattern: "inventory-aging-matrix",
        why: {
          ar: "مصفوفة المنتج أو الفئة مع التصريف والمخزون المتبقي والعمر هي ما يطلبه فريق الشراء لاتخاذ قرار التخفيض أو إعادة الطلب.",
          en: "A SKU or category matrix with sell-through, remaining stock and age is what the buying team needs to decide on markdown or reorder.",
        },
      },
      {
        pattern: "scatter-quadrant",
        why: {
          ar: "وضع التصريف مقابل المخزون المتبقي يقسم المنتجات إلى أربع فئات: أعد الطلب، راقب، خفّض، انقل.",
          en: "Plotting sell-through against remaining stock splits products into four groups: reorder, watch, mark down, transfer.",
        },
      },
      {
        pattern: "exception-table",
        why: {
          ar: "قائمة بالمنتجات ذات التصريف المنخفض والمخزون الكبير أو ذات التصريف شبه الكامل تحوّل المؤشر إلى قائمة إجراءات.",
          en: "A list of products with low sell-through and heavy stock, or near-complete sell-through, turns the metric into an action list.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عدم تعريف \"المتاح للبيع\" بوضوح. مخزون أول الفترة زائد المستلَم يعطي رقمًا مختلفًا تمامًا عن المستلَم وحده، والمقارنة بين تقريرين بتعريفين مختلفين مضللة.",
        en: "Not defining \"available for sale\" clearly. Opening stock plus receipts gives a very different number from receipts alone, and comparing reports on different definitions misleads.",
      },
      {
        ar: "جمع أرصدة المخزون اليومية عبر الأيام. الرصيد لقطة لا تدفق، وجمع 30 لقطة يعطي مقامًا أكبر بثلاثين مرة.",
        en: "Summing daily stock balances across days. A balance is a snapshot, not a flow, and summing 30 snapshots yields a denominator 30 times too large.",
      },
      {
        ar: "تجاهل التحويلات والمرتجعات. إرسال وحدات لفرع آخر ليس بيعًا، والمرتجع الذي عاد للرف يزيد المتاح؛ إغفالهما يرفع المعدل أو يخفضه بلا سبب حقيقي.",
        en: "Ignoring transfers and returns. Sending units to another store is not a sale, and a return back on the shelf adds to availability; missing either moves the rate for no real reason.",
      },
      {
        ar: "متوسط معدلات المنتجات بدل قسمة مجموع المباع على مجموع المتاح عند التجميع للفئة. المنتج ذو 10 وحدات يحصل على نفس وزن المنتج ذي 10,000 وحدة.",
        en: "Averaging product-level rates instead of dividing total sold by total available when rolling up to category. A 10-unit product gets the same weight as a 10,000-unit one.",
      },
      {
        ar: "قراءة المعدل دون زمن الموسم أو عمر المخزون. نفس النسبة تعني نجاحًا في أسبوع وفشلًا في آخر.",
        en: "Reading the rate without season timing or stock age. The same percentage means success in one week and failure in another.",
      },
    ],
    variants: [
      {
        label: { ar: "التصريف مقابل المستلَم", en: "Sell-through on receipts" },
        formula: "Units Sold / Units Received x 100",
        difference: {
          ar: "شائع في الأزياء حيث يبدأ الموسم بمخزون صفري. يتجاهل المخزون الافتتاحي فيبالغ في المعدل للمنتجات المستمرة من موسم سابق.",
          en: "Common in fashion where a season starts from zero stock. It ignores opening stock, so it overstates the rate for lines carried over from a prior season.",
        },
      },
      {
        label: { ar: "التصريف مقابل المباع زائد المتبقي", en: "Sell-through on sold plus ending stock" },
        formula: "Units Sold / (Units Sold + Ending On Hand) x 100",
        difference: {
          ar: "لا يحتاج بيانات الاستلام. يساوي التعريف الأساسي فقط إن لم توجد تحويلات أو تلف أو فقد؛ وإلا يختلف عنه.",
          en: "Needs no receipt data. It equals the base definition only when there are no transfers, damage or shrink; otherwise it diverges.",
        },
      },
      {
        label: { ar: "التصريف بالقيمة", en: "Sell-through by value" },
        formula: "Cost of Units Sold / Cost of Units Available x 100",
        difference: {
          ar: "يزن المنتجات بتكلفتها بدل عدد الوحدات، فيعكس رأس المال المحرّر بدل الحجم. مفيد عند خلط فئات بأسعار متفاوتة جدًا.",
          en: "Weights products by cost rather than unit count, reflecting capital released rather than volume. Useful when mixing categories with very different prices.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "إن لم توجد تحويلات أو تلف أو مرتجعات، فالمتاح = المباع + المتبقي، ولذلك يكون مجموع نسبة التصريف ونسبة المتبقي 100%.",
          en: "With no transfers, shrink or returns, available = sold + remaining, so sell-through and the remaining share sum to 100%.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "استخدام مخزون أول الفترة زائد المستلَم كمقام هو الصيغة الشائعة، مع شيوع صيغة المستلَم وحده في الأزياء الموسمية.",
          en: "Opening stock plus receipts as the denominator is the common form, with receipts-only also common in seasonal fashion.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "تعريف المتاح للبيع، ومعاملة التحويلات والمرتجعات، والنسبة المستهدفة في كل أسبوع من الموسم — قرارات داخلية لكل شركة.",
          en: "The definition of available for sale, treatment of transfers and returns, and the target rate at each week of the season are internal decisions for each company.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (700 من 1,000، وتقسيم المتاح إلى 600 و400) توضيحية فقط.",
          en: "The example figures (700 of 1,000, and the split of availability into 600 and 400) are illustrative only.",
        },
      },
    ],
    related: ["inventory-turnover", "stockout-rate", "net-sales", "gross-profit-margin"],
    exercise: {
      prompt: {
        ar: "منتج بدأ الشهر بمخزون 250 وحدة، واستُلم خلاله 550 وحدة، وبيعت 480 وحدة، وأعاد العملاء 20 وحدة إلى الرف صالحة للبيع. احسب معدل التصريف الإجمالي (دون طرح المرتجعات) والصافي (بطرحها من المباع)، وحدد أيهما أنسب لقرار إعادة الطلب.",
        en: "A product started the month with 250 units, received 550 during it, sold 480, and customers returned 20 units back to the shelf in sellable condition. Compute gross sell-through (returns not deducted) and net sell-through (returns deducted from units sold), and say which suits a reorder decision.",
      },
      hint: {
        ar: "المتاح = الافتتاحي + المستلَم. البسط الصافي = المباع − المرتجع.",
        en: "Available = opening + received. Net numerator = sold − returned.",
      },
      answer: {
        ar: "المتاح = 250 + 550 = 800 وحدة. التصريف الإجمالي = 480 ÷ 800 = 60%. التصريف الصافي = (480 − 20) ÷ 800 = 460 ÷ 800 = 57.5%. للقرار التشغيلي الصافي أنسب، لأن الوحدات العشرين عادت فعلًا للرف وستُباع مرة أخرى؛ استخدام الإجمالي يبالغ قليلًا في الطلب الحقيقي وقد يدفع لإعادة طلب مبكرة. الأهم أن يُختار تعريف واحد ويُوثّق.",
        en: "Available = 250 + 550 = 800 units. Gross sell-through = 480 ÷ 800 = 60%. Net sell-through = (480 − 20) ÷ 800 = 460 ÷ 800 = 57.5%. For the operational decision the net figure fits better, because the 20 units are physically back on the shelf and will sell again; the gross figure slightly overstates real demand and may trigger an early reorder. What matters most is choosing one definition and documenting it.",
      },
    },
    references: [
      {
        title: "REMOVEFILTERS function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/removefilters-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع إزالة تصفية الشهر والسنة حتى يمكن الوصول إلى لقطة اليوم السابق لبداية الفترة.",
          en: "Reference for clearing month and year filters so the snapshot of the day before the period start can be reached.",
        },
      },
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع القسمة الآمنة للمنتجات التي لا يوجد لها مخزون متاح في الفترة.",
          en: "Reference for safe division for products with no available stock in the period.",
        },
      },
    ],
  },

  {
    id: "repeat-purchase-rate",
    slug: "repeat-purchase-rate",
    name: "Customer Repeat Purchase Rate",
    nameAr: "معدل تكرار الشراء",
    domains: ["retail"],
    category: { ar: "الاحتفاظ والولاء", en: "Retention and loyalty" },
    difficulty: "intermediate",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة العملاء الذين اشتروا مرتين أو أكثر من بين جميع العملاء الذين اشتروا خلال فترة محددة. يقيس مدى عودة العميل للشراء مرة أخرى.",
      en: "The share of customers who purchased two or more times among all customers who purchased in a defined period. It measures how often customers come back to buy again.",
    },
    whyItMatters: {
      ar: "الاحتفاظ بعميل أقل تكلفة عادة من اكتساب عميل جديد، والعميل المتكرر هو مصدر القيمة الدائمة. هذا المؤشر هو أبسط نافذة على الولاء، ويرتبط مباشرة بالقيمة الدائمة للعميل وبجدوى تكلفة الاكتساب.",
      en: "Keeping a customer is usually cheaper than acquiring a new one, and the repeat customer is where lifetime value comes from. This metric is the simplest window on loyalty and ties directly to customer lifetime value and to whether acquisition cost pays back.",
    },
    interpretation: {
      ar: "المعدل حساس جدًا لطول الفترة: كلما طالت ارتفع لأن العميل يملك وقتًا أطول للعودة. لذلك لا يُقارن معدل شهري بمعدل سنوي، ولا يُقارن فترتان إلا بنفس الطول ونفس القواعد.",
      en: "The rate is highly sensitive to period length: the longer the window, the higher it gets, because customers have more time to return. So a monthly rate is never compared with an annual one, and periods are compared only at equal length and under equal rules.",
    },
    formula: "Repeat Purchase Rate = Customers with 2+ Purchases in Period / Customers Purchasing in Period x 100",
    numerator: {
      ar: "عدد العملاء المعرّفين الذين أجروا طلبين مميزين أو أكثر خلال الفترة.",
      en: "Count of identified customers with two or more distinct orders in the period.",
    },
    denominator: {
      ar: "عدد العملاء المعرّفين الذين أجروا طلبًا واحدًا على الأقل خلال نفس الفترة. طلبات الضيوف غير المعرّفين مستبعدة من الطرفين.",
      en: "Count of identified customers with at least one order in the same period. Unidentified guest orders are excluded from both sides.",
    },
    timeGrain: {
      ar: "ربع سنوي أو سنوي في الغالب، لأن الفترات القصيرة لا تمنح العميل وقتًا كافيًا للعودة. في الفئات سريعة الاستهلاك قد يكون الشهر كافيًا.",
      en: "Usually quarterly or annual, because short periods do not give customers enough time to return. For fast-moving categories a month may suffice.",
    },
    direction: {
      rising: {
        ar: "الارتفاع يعني عادة ولاءً أقوى، أو برنامج ولاء فعالًا، أو تجربة ما بعد البيع أفضل.",
        en: "A rise usually means stronger loyalty, an effective loyalty programme, or a better post-purchase experience.",
      },
      falling: {
        ar: "الانخفاض قد يعني تراجع الرضا أو المنافسة، لكنه قد يعني أيضًا دخول عدد كبير من العملاء الجدد الذين لم يتح لهم الوقت للعودة بعد.",
        en: "A fall can mean weaker satisfaction or competition, but it can also mean a large influx of new customers who have not yet had time to return.",
      },
      caveat: {
        ar: "المعدل نسبة من مزيج جديد وقديم: إن توقف اكتساب العملاء الجدد ارتفع المعدل آليًا دون أي تحسن في الولاء. يُقرأ دائمًا مع عدد العملاء الجدد، ويُفضّل تحليل الأفواج لعزل هذا الأثر.",
        en: "The rate is a share of a new-and-existing mix: if acquisition stops, the rate rises mechanically with no real gain in loyalty. Always read it with new-customer count, and prefer cohort analysis to isolate this effect.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "العملاء الذين اشتروا خلال الفترة", en: "Customers purchasing in period" }, value: "1,000" },
        { label: { ar: "منهم اشتروا مرتين أو أكثر", en: "Of whom purchased 2+ times" }, value: "300" },
      ],
      steps: [
        { label: { ar: "معدل تكرار الشراء", en: "Repeat purchase rate" }, expression: "300 ÷ 1,000 × 100 = 30%" },
        { label: { ar: "عملاء الشراء الواحد", en: "Single-purchase customers" }, expression: "1,000 − 300 = 700" },
      ],
      result: { label: { ar: "معدل تكرار الشراء", en: "Repeat purchase rate" }, value: "30%" },
      reading: {
        ar: "ثلاثة من كل عشرة عملاء عادوا للشراء خلال الفترة، وسبعة اشتروا مرة واحدة فقط. السؤال التالي: كم من السبعة عملاء جدد لم يتح لهم وقت للعودة، وكم منهم قدامى توقفوا؟ الإجابة تحدد هل المطلوب حملة إعادة تنشيط أم صبر.",
        en: "Three in ten customers came back to buy within the period, and seven bought once. The next question: how many of the seven are new customers who have not had time to return, and how many are existing customers who stopped? The answer decides between a reactivation campaign and patience.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "معدل تكرار الشراء على مستوى الفترة، مع العملاء العائدين", en: "Period-based repeat purchase rate, plus returning customers" },
        code: `-- DISTINCTCOUNTNOBLANK: guest orders have a blank CustomerId and must not count.
Purchasing Customers :=
DISTINCTCOUNTNOBLANK ( 'SalesOrder'[CustomerId] )

-- CALCULATE inside FILTER triggers context transition: orders are counted
-- per customer, within the period and other filters of the visual.
Repeat Customers :=
COUNTROWS (
    FILTER (
        VALUES ( 'SalesOrder'[CustomerId] ),
        NOT ISBLANK ( 'SalesOrder'[CustomerId] )
            && CALCULATE ( DISTINCTCOUNT ( 'SalesOrder'[OrderId] ) ) >= 2
    )
)

Repeat Purchase Rate :=
DIVIDE ( [Repeat Customers], [Purchasing Customers] )

-- Different question: customers in the period who had bought before it started.
Returning Customers :=
VAR PeriodStart =
    MIN ( 'Date'[Date] )
RETURN
    COUNTROWS (
        FILTER (
            VALUES ( 'SalesOrder'[CustomerId] ),
            NOT ISBLANK ( 'SalesOrder'[CustomerId] )
                && CALCULATE (
                    MIN ( 'SalesOrder'[OrderDate] ),
                    REMOVEFILTERS ( 'Date' )
                ) < PeriodStart
        )
    )`,
        assumptions: [
          {
            ar: "'SalesOrder' بحبيبية طلب واحد لكل صف، ويحمل CustomerId فارغًا لطلبات الضيوف. إن كان الجدول بحبيبية السطر فإن DISTINCTCOUNT على OrderId يبقى صحيحًا.",
            en: "'SalesOrder' is at one row per order, with a blank CustomerId for guest orders. If the table is at line grain, DISTINCTCOUNT on OrderId remains correct.",
          },
          {
            ar: "CustomerId هو المعرّف الموحّد بعد دمج الحسابات المكررة (نفس الشخص بعدة بريد إلكتروني أو بطاقة ولاء). بدون هذا الدمج ينخفض المعدل بشكل مصطنع.",
            en: "CustomerId is the unified key after merging duplicate accounts (the same person with several emails or loyalty cards). Without that merge the rate is artificially low.",
          },
          {
            ar: "الطلبات الملغاة والمرتجعة بالكامل مستبعدة في مرحلة التحميل؛ الطلب المرتجع كليًا لا يُعتبر شراءً ثانيًا.",
            en: "Cancelled and fully returned orders are removed at load; a fully returned order does not count as a second purchase.",
          },
          {
            ar: "'Date' مرتبط بـ 'SalesOrder'[OrderDate]. المعدل مبني على الفترة المعروضة، فمعدل الربع ليس متوسط معدلات أشهره ولا يُجمع منها.",
            en: "'Date' relates to 'SalesOrder'[OrderDate]. The rate is based on the visible period, so a quarter's rate is neither the average nor the sum of its months' rates.",
          },
        ],
        requires: ["SalesOrder[CustomerId]", "SalesOrder[OrderId]", "SalesOrder[OrderDate]", "Date[Date]"],
      },
    ],
    model: [
      {
        table: "SalesOrder",
        grain: { ar: "طلب واحد لكل صف", en: "One row per order" },
        columns: ["OrderId", "CustomerId", "OrderDate", "ChannelId", "StoreId", "NetAmount", "Status"],
        role: { ar: "مصدر البسط والمقام", en: "Source of both numerator and denominator" },
      },
      {
        table: "Customer",
        grain: { ar: "عميل موحّد واحد لكل صف", en: "One row per unified customer" },
        columns: ["CustomerId", "FirstOrderDate", "AcquisitionChannel", "Segment", "LoyaltyTier"],
        role: { ar: "يتيح تقسيم المعدل حسب فوج الاكتساب والشريحة", en: "Allows splitting the rate by acquisition cohort and segment" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "Quarter", "Year"],
        role: { ar: "يحدد نافذة القياس عبر تاريخ الطلب", en: "Defines the measurement window through order date" },
      },
    ],
    visuals: [
      {
        pattern: "period-over-period",
        why: {
          ar: "الاتجاه الشهري أو الربعي بنوافذ متساوية الطول يُظهر هل الولاء يتحسن. للأفواج تُضاف مصفوفة شهر الاكتساب مقابل الأشهر اللاحقة في صفحة التفاصيل.",
          en: "A monthly or quarterly trend on equal-length windows shows whether loyalty is improving. For cohorts, add an acquisition-month by months-since matrix on a detail page.",
        },
      },
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "المعدل مع عدد العملاء المشترين وعدد العملاء الجدد يمنع قراءة ارتفاع آلي ناتج عن توقف الاكتساب على أنه تحسن في الولاء.",
          en: "The rate beside purchasing-customer count and new-customer count prevents reading a mechanical rise from stalled acquisition as a loyalty gain.",
        },
      },
      {
        pattern: "stacked-bar",
        why: {
          ar: "تقسيم العملاء إلى شراء واحد ومتكرر حسب القناة أو الشريحة يُظهر أين يتركز الولاء.",
          en: "Splitting customers into single and repeat purchasers by channel or segment shows where loyalty concentrates.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "قواعد هوية العميل غير المحددة: نفس الشخص بحسابين أو شراء كضيف ثم كمسجّل يظهر كعميلين بشراء واحد لكل منهما، فينخفض المعدل.",
        en: "Undefined customer identity rules: the same person with two accounts, or buying as a guest then as a member, appears as two single-purchase customers and depresses the rate.",
      },
      {
        ar: "عدّ طلبات الضيوف ذات المعرّف الفارغ كعميل واحد. DISTINCTCOUNT يعدّ القيمة الفارغة كقيمة، فيظهر \"عميل\" وهمي بآلاف الطلبات.",
        en: "Counting blank-ID guest orders as one customer. DISTINCTCOUNT counts blank as a value, producing a phantom \"customer\" with thousands of orders.",
      },
      {
        ar: "عدم التصريح بنوع المقياس: مبني على الفترة (شراءان داخل نفس النافذة) أم على الفوج (عودة فوج اكتساب خلال مدة بعد أول شراء). الرقمان مختلفان ولا يُقارنان.",
        en: "Not stating the measure type: period-based (two purchases inside the same window) or cohort-based (an acquisition cohort returning within a span after first purchase). The two differ and are not comparable.",
      },
      {
        ar: "حساب معدل الربع كمتوسط معدلات أشهره. العميل الذي اشترى في يناير ومرة في فبراير متكرر على مستوى الربع لكنه غير متكرر في أي من الشهرين.",
        en: "Computing a quarter's rate as the average of its monthly rates. A customer buying once in January and once in February is a repeat customer for the quarter but in neither month.",
      },
      {
        ar: "مقارنة فترات بأطوال مختلفة أو فترة جارية غير مكتملة بفترة كاملة؛ الفترة الناقصة تُظهر معدلًا أقل دائمًا.",
        en: "Comparing periods of different length, or an incomplete current period with a complete one; the partial period always shows a lower rate.",
      },
    ],
    variants: [
      {
        label: { ar: "معدل الاحتفاظ بالفوج", en: "Cohort repeat rate" },
        formula: "Cohort customers with a 2nd purchase within N days of first / Cohort customers x 100",
        difference: {
          ar: "يتابع العملاء المكتسبين في نفس الشهر ويقيس عودتهم خلال مدة ثابتة. يعزل أثر تغير الاكتساب، لكنه يحتاج انتظار انقضاء المدة قبل اكتمال الرقم.",
          en: "Follows customers acquired in the same month and measures their return within a fixed span. It isolates acquisition changes, but needs the span to elapse before the figure is complete.",
        },
      },
      {
        label: { ar: "نسبة العملاء العائدين", en: "Returning customer rate" },
        formula: "Customers in period with a purchase before period start / Customers purchasing in period x 100",
        difference: {
          ar: "يعتبر العميل متكررًا إن كان قد اشترى في أي وقت سابق، حتى لو اشترى مرة واحدة في الفترة. يجيب عن سؤال مزيج القاعدة لا سؤال التكرار داخل الفترة.",
          en: "Treats a customer as repeat if they bought at any earlier time, even with a single purchase in the period. It answers a base-mix question, not repeat-within-period.",
        },
      },
      {
        label: { ar: "تكرار الشراء", en: "Purchase frequency" },
        formula: "Orders / Purchasing Customers",
        difference: {
          ar: "متوسط عدد الطلبات لكل عميل بدل نسبة المتكررين. يلتقط العميل الذي يشتري عشر مرات، بينما معدل التكرار يعامله كمن اشترى مرتين.",
          en: "Average orders per customer rather than the share of repeaters. It captures the customer who buys ten times, whereas the repeat rate treats them like one who bought twice.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "المعدل لا يُجمع عبر الفترات: كل عميل متكرر في شهر ما متكرر حتمًا في الربع الذي يضمه، لكن العميل الذي يشتري مرة في كل شهر من شهرين متكرر في الربع وغير متكرر في أي من الشهرين. لذلك عدد المتكررين في الفترة الأطول لا يقل عن عددهم في أي فترة جزئية منها.",
          en: "The rate does not aggregate across periods: every customer who is repeat in a month is necessarily repeat in the quarter containing it, but a customer buying once in each of two months is repeat in the quarter and in neither month. So the repeat-customer count of a longer period is never lower than that of any sub-period within it.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "قسمة العملاء ذوي الشراءين أو أكثر على العملاء المشترين في نفس الفترة هي الصيغة الشائعة القائمة على الفترة.",
          en: "Dividing customers with two or more purchases by purchasing customers in the same period is the common period-based form.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "قواعد دمج هوية العميل، وطول النافذة، ومعاملة طلبات الضيوف والمرتجعات، واختيار الفترة أو الفوج — قرارات داخلية يجب توثيقها.",
          en: "Identity-merge rules, window length, treatment of guest orders and returns, and the choice of period or cohort basis are internal decisions to document.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (300 من 1,000) توضيحية فقط وليست معيارًا لأي قطاع.",
          en: "The example figures (300 of 1,000) are illustrative only and are not a benchmark for any sector.",
        },
      },
    ],
    related: ["ltv", "churn-rate", "aov", "cac"],
    exercise: {
      prompt: {
        ar: "خلال ربع سنة اشترى 2,400 عميل معرّف: 1,560 مرة واحدة، و600 مرتين، و240 ثلاث مرات أو أكثر. كما سُجّل 300 طلب ضيف بلا معرّف. احسب معدل تكرار الشراء للربع، وبيّن ماذا يحدث للمقام لو عُدّت طلبات الضيوف عن طريق الخطأ.",
        en: "During a quarter 2,400 identified customers purchased: 1,560 once, 600 twice, and 240 three or more times. There were also 300 guest orders with no ID. Compute the quarter's repeat purchase rate, and show what happens to the denominator if guest orders are counted by mistake.",
      },
      hint: {
        ar: "المتكررون هم من اشتروا مرتين أو أكثر. تذكر أن العدّ الفريد يعامل المعرّف الفارغ كقيمة واحدة.",
        en: "Repeaters are those with two or more purchases. Remember that distinct counting treats a blank ID as one value.",
      },
      answer: {
        ar: "المتكررون = 600 + 240 = 840. المعدل = 840 ÷ 2,400 = 35%. للتحقق: 1,560 + 840 = 2,400. لو استُخدم DISTINCTCOUNT بدل DISTINCTCOUNTNOBLANK لأصبح المقام 2,401 لأن الـ 300 طلب ضيف تُعدّ كعميل فارغ واحد، والأسوأ أن هذا \"العميل\" بـ 300 طلب يُعدّ متكررًا في منطق FILTER إن لم يُستبعد الفارغ، فيصبح البسط 841. الخطأ صغير هنا لكنه يتضخم في التقسيمات الصغيرة (فرع أو يوم) وقد يظهر عميل وهمي في رأس قائمة أفضل العملاء.",
        en: "Repeaters = 600 + 240 = 840. Rate = 840 ÷ 2,400 = 35%. Check: 1,560 + 840 = 2,400. If DISTINCTCOUNT were used instead of DISTINCTCOUNTNOBLANK, the denominator would become 2,401 because the 300 guest orders count as one blank customer; worse, that \"customer\" with 300 orders would count as a repeater in the FILTER logic unless blank is excluded, making the numerator 841. The error is small here but grows in small slices (a store or a day), and a phantom customer can top the best-customers list.",
      },
    },
    references: [
      {
        title: "DISTINCTCOUNTNOBLANK function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/distinctcountnoblank-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع العد الفريد الذي يتجاهل القيمة الفارغة، وهو ما يمنع احتساب طلبات الضيوف كعميل.",
          en: "Reference for distinct counting that ignores blank, which keeps guest orders from counting as a customer.",
        },
      },
      {
        title: "FILTER function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/filter-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع التكرار على قائمة العملاء لاختيار من لديهم طلبان أو أكثر.",
          en: "Reference for iterating the customer list to select those with two or more orders.",
        },
      },
    ],
  },
];
