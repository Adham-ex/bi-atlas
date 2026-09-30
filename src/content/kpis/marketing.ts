import type { Kpi } from "../types";

export const marketingKpis: Kpi[] = [
  {
    id: "cac",
    slug: "customer-acquisition-cost",
    name: "Customer Acquisition Cost",
    acronym: "CAC",
    nameAr: "تكلفة اكتساب العميل",
    domains: ["marketing", "it-saas", "retail", "banking"],
    category: { ar: "الاكتساب", en: "Acquisition" },
    difficulty: "intermediate",
    unit: { ar: "عملة لكل عميل", en: "Currency per customer" },
    aggregation: "ratio",
    definition: {
      ar: "متوسط ما تنفقه لاكتساب عميل جديد واحد خلال فترة محددة. يشمل تكاليف التسويق والمبيعات المرتبطة بالاكتساب، مقسومة على عدد العملاء الجدد فقط لا كل العملاء.",
      en: "The average amount spent to acquire one new customer in a period. It covers marketing and sales costs tied to acquisition, divided by new customers only rather than all customers.",
    },
    whyItMatters: {
      ar: "هو نصف معادلة اقتصاديات الوحدة. لا معنى لـ CAC منفردًا: تكلفة 500 لاكتساب عميل قد تكون ممتازة إذا كانت قيمته العمرية 5,000، وكارثية إذا كانت 600. القرار دائمًا يأتي من العلاقة مع LTV وفترة الاسترداد.",
      en: "It is one half of unit economics. CAC alone is meaningless: spending 500 to win a customer is excellent if their lifetime value is 5,000 and disastrous if it is 600. The decision always comes from its relationship to LTV and payback period.",
    },
    interpretation: {
      ar: "CAC يرتفع طبيعيًا مع التوسع: أسهل العملاء يُكتسبون أولًا، ثم تزداد صعوبة الوصول لبقية السوق. ارتفاع CAC عند النمو ليس بالضرورة فشلًا تسويقيًا، لكنه يستوجب مراجعة هل ما زال النمو مربحًا عند هذه التكلفة الحدية.",
      en: "CAC naturally rises as you scale: the easiest customers are won first and the rest of the market gets harder to reach. Rising CAC during growth is not necessarily a marketing failure, but it does demand a check on whether growth is still profitable at that marginal cost.",
    },
    formula: "CAC = Total Acquisition Spend in Period / New Customers Acquired in Period",
    numerator: {
      ar: "إجمالي الإنفاق على الاكتساب: الإعلانات، ورواتب فرق التسويق والمبيعات المخصصة للاكتساب، والأدوات، والعمولات. استبعد إنفاق الاحتفاظ بالعملاء الحاليين.",
      en: "Total acquisition spend: advertising, salaries of marketing and sales staff dedicated to acquisition, tooling, and commissions. Exclude spend on retaining existing customers.",
    },
    denominator: {
      ar: "عدد العملاء الجدد الذين اكتُسبوا خلال نفس الفترة. العميل العائد بعد انقطاع ليس عميلًا جديدًا ما لم تُعرّف سياستك ذلك صراحة.",
      en: "Count of new customers acquired in the same period. A returning customer after a lapse is not a new customer unless your policy explicitly says so.",
    },
    timeGrain: {
      ar: "شهري أو ربع سنوي. التحدي الأساسي هو فجوة التوقيت: الإنفاق يحدث قبل الاكتساب بأسابيع، خصوصًا في المبيعات المؤسسية ذات دورة الإغلاق الطويلة. في هذه الحالة يجب إزاحة البسط بمقدار متوسط دورة البيع.",
      en: "Monthly or quarterly. The core difficulty is timing lag: spend happens weeks before acquisition, especially in enterprise sales with long close cycles. There the numerator should be lagged by the average sales cycle.",
    },
    direction: {
      rising: {
        ar: "ارتفاع CAC قد يعني تشبع القناة، أو منافسة أشد على نفس الجمهور، أو تحولًا نحو شرائح أصعب.",
        en: "Rising CAC can mean channel saturation, stronger competition for the same audience, or a shift toward harder segments.",
      },
      falling: {
        ar: "انخفاض CAC قد يعني تحسّن الاستهداف، أو نمو القنوات المجانية، أو أنك تحصد طلبًا كان سيأتي بدون إعلان.",
        en: "Falling CAC can mean better targeting, growth in organic channels, or that you are harvesting demand that would have arrived without advertising.",
      },
      caveat: {
        ar: "الأقل ليس أفضل تلقائيًا. خفض CAC بالتوقف عن القنوات المكلفة قد يقلل عدد العملاء الجدد ويقتل النمو. الهدف ليس أرخص عميل بل أعلى ربح إجمالي من الاكتساب.",
        en: "Lower is not automatically better. Cutting CAC by abandoning expensive channels can shrink new customers and kill growth. The goal is not the cheapest customer but the highest total profit from acquisition.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "إنفاق إعلاني في الربع", en: "Ad spend in the quarter" }, value: "450,000" },
        { label: { ar: "رواتب فريق الاكتساب", en: "Acquisition team salaries" }, value: "180,000" },
        { label: { ar: "أدوات ومنصات", en: "Tooling and platforms" }, value: "30,000" },
        { label: { ar: "عملاء جدد في الربع", en: "New customers in the quarter" }, value: "1,320" },
      ],
      steps: [
        { label: { ar: "إجمالي إنفاق الاكتساب", en: "Total acquisition spend" }, expression: "450,000 + 180,000 + 30,000 = 660,000" },
        { label: { ar: "CAC", en: "CAC" }, expression: "660,000 / 1,320 = 500" },
        { label: { ar: "CAC الإعلاني فقط", en: "Paid-media-only CAC" }, expression: "450,000 / 1,320 = 341" },
      ],
      result: { label: { ar: "تكلفة اكتساب العميل", en: "Customer acquisition cost" }, value: "500 لكل عميل" },
      reading: {
        ar: "الفرق بين 500 و341 هو بالضبط ما يجعل مقارنة CAC بين شركتين بلا معنى دون معرفة ما دخل في البسط. صرّح دائمًا بمكونات التكلفة في عنوان البطاقة أو في تلميح الأداة.",
        en: "The gap between 500 and 341 is exactly why comparing CAC across two companies is meaningless without knowing what went into the numerator. Always declare the cost components in the card title or its tooltip.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "CAC مع تمييز العميل الجديد بأول طلب", en: "CAC with new customers identified by first order" },
        code: `-- A customer is "new" in the period containing their first ever order.
-- FirstOrderDate is a calculated column on the customer table, not a measure,
-- so it stays stable regardless of the filters applied on the page.
New Customers :=
CALCULATE (
    DISTINCTCOUNT ( 'Customer'[CustomerId] ),
    USERELATIONSHIP ( 'Customer'[FirstOrderDate], 'Date'[Date] )
)

Acquisition Spend :=
CALCULATE (
    SUM ( 'MarketingCost'[Amount] ),
    'MarketingCost'[Purpose] = "Acquisition"
)

CAC :=
DIVIDE ( [Acquisition Spend], [New Customers] )

-- Lagged variant for long sales cycles: match this period's customers
-- against the spend that actually generated them.
CAC (45-day lag) :=
VAR LaggedSpend =
    CALCULATE (
        [Acquisition Spend],
        DATEADD ( 'Date'[Date], -45, DAY )
    )
RETURN
    DIVIDE ( LaggedSpend, [New Customers] )`,
        assumptions: [
          {
            ar: "'Customer'[FirstOrderDate] عمود محسوب يحمل تاريخ أول طلب، ومرتبط بجدول 'Date' بعلاقة غير نشطة تُفعّل بـ USERELATIONSHIP.",
            en: "'Customer'[FirstOrderDate] is a calculated column holding the first order date, joined to 'Date' by an inactive relationship activated with USERELATIONSHIP.",
          },
          {
            ar: "'MarketingCost'[Purpose] يفصل إنفاق الاكتساب عن الاحتفاظ. بدون هذا الفصل سيكون CAC مضخّمًا بتكلفة خدمة العملاء الحاليين.",
            en: "'MarketingCost'[Purpose] separates acquisition from retention spend. Without that split, CAC is inflated by the cost of serving existing customers.",
          },
          {
            ar: "صيغة الإزاحة تستخدم 45 يومًا كمثال؛ استبدلها بمتوسط دورة البيع الفعلي لديك، ويفضل تخزينه في جدول إعدادات لا ترميزه في المقياس.",
            en: "The lag example uses 45 days; replace it with your actual average sales cycle, ideally stored in a settings table rather than hard-coded in the measure.",
          },
          {
            ar: "DATEADD تتطلب جدول تاريخ متصلًا ومعلّمًا؛ أي فجوة في التواريخ تجعل النتيجة غير موثوقة.",
            en: "DATEADD requires a contiguous, marked date table; any gap in dates makes the result unreliable.",
          },
        ],
        requires: ["Customer[FirstOrderDate]", "MarketingCost[Amount]", "MarketingCost[Purpose]"],
      },
    ],
    model: [
      {
        table: "MarketingCost",
        grain: { ar: "بند إنفاق واحد لكل قناة وتاريخ", en: "One spend line per channel and date" },
        columns: ["CostDate", "ChannelId", "CampaignId", "Amount", "Purpose", "CostType"],
        role: { ar: "مصدر البسط", en: "Source of the numerator" },
      },
      {
        table: "Customer",
        grain: { ar: "عميل واحد لكل صف", en: "One row per customer" },
        columns: ["CustomerId", "FirstOrderDate", "AcquisitionChannelId", "Segment"],
        role: { ar: "مصدر المقام وتصنيف قناة الاكتساب", en: "Source of the denominator and acquisition channel attribution" },
      },
      {
        table: "Channel",
        grain: { ar: "قناة واحدة لكل صف", en: "One row per channel" },
        columns: ["ChannelId", "ChannelName", "ChannelGroup", "IsPaid"],
        role: { ar: "يربط التكلفة بالعملاء لحساب CAC لكل قناة", en: "Links cost to customers for per-channel CAC" },
      },
    ],
    visuals: [
      {
        pattern: "scatter-quadrant",
        why: {
          ar: "CAC على محور وLTV على الآخر يحوّل رقمين منفصلين إلى قرار تخصيص ميزانية واضح.",
          en: "CAC on one axis and LTV on the other turns two separate numbers into a clear budget allocation decision.",
        },
      },
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "عرض CAC مع نسبة LTV إلى CAC وفترة الاسترداد يمنع تفسير التكلفة بمعزل عن عائدها.",
          en: "Showing CAC with the LTV-to-CAC ratio and payback period prevents interpreting cost in isolation from its return.",
        },
      },
      {
        pattern: "period-over-period",
        why: {
          ar: "اتجاه CAC عبر الزمن يكشف تشبع القناة قبل أن يظهر أثره على الإيراد.",
          en: "The CAC trend over time exposes channel saturation before its effect shows up in revenue.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "القسمة على كل العملاء بدل العملاء الجدد فقط. هذا يخفض CAC بشكل حاد ويجعله بلا معنى تمامًا، وهو أشيع خطأ في المؤشر.",
        en: "Dividing by all customers instead of new ones only. This slashes CAC and empties it of meaning — the most common error with this metric.",
      },
      {
        ar: "احتساب الإنفاق الإعلاني فقط وتجاهل رواتب الفريق. في المبيعات المؤسسية قد تمثل الرواتب أكثر من نصف التكلفة الحقيقية.",
        en: "Counting media spend only and ignoring team salaries. In enterprise sales, salaries can exceed half the true cost.",
      },
      {
        ar: "جمع التحويلات المنسوبة من عدة منصات إعلانية. كل منصة تنسب نفس التحويل لنفسها، فينتفخ المقام وينخفض CAC زورًا.",
        en: "Summing attributed conversions across ad platforms. Each platform claims the same conversion, inflating the denominator and falsely lowering CAC.",
      },
      {
        ar: "تجاهل فجوة التوقيت بين الإنفاق والاكتساب. في دورة بيع 90 يومًا، مقارنة إنفاق الشهر بعملاء الشهر نفسه تقارن سببًا بنتيجة لا علاقة بينهما.",
        en: "Ignoring the lag between spend and acquisition. With a 90-day cycle, comparing this month spend to this month customers compares a cause to an unrelated effect.",
      },
      {
        ar: "حساب CAC واحد للشركة كلها. المتوسط يخفي قناة ممتازة وأخرى خاسرة، والقرار المفيد يكون دائمًا على مستوى القناة أو الشريحة.",
        en: "Computing one company-wide CAC. The average hides an excellent channel and a losing one; useful decisions are always made at channel or segment level.",
      },
    ],
    variants: [
      {
        label: { ar: "Blended CAC مقابل Paid CAC", en: "Blended versus paid CAC" },
        formula: "All spend / all new customers  vs.  Paid spend / paid-sourced customers",
        difference: {
          ar: "المخلوط يقسم كل الإنفاق على كل العملاء بمن فيهم من جاء عضويًا، فيبدو أقل. المدفوع يعزل أثر الإعلان. استخدم المدفوع لقرارات الميزانية والمخلوط لتقييم كفاءة الشركة ككل.",
          en: "Blended divides all spend by all new customers including organic ones, so it looks lower. Paid isolates advertising effect. Use paid for budget decisions and blended to judge overall company efficiency.",
        },
      },
      {
        label: { ar: "CAC بالهامش بدل بالعدد", en: "Margin-adjusted CAC" },
        formula: "Acquisition Spend / (New Customers x Gross Margin %)",
        difference: {
          ar: "يعبّر عن التكلفة منسوبة إلى ما يحققه العميل فعلًا للشركة لا إلى إيراده. أدق في مقارنة المنتجات المختلفة الهامش.",
          en: "Expresses cost relative to what a customer actually contributes rather than their revenue. Sharper when comparing products with different margins.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "إذا كانت نسبة LTV إلى CAC أقل من 1 فالشركة تخسر على كل عميل جديد قبل أي مصاريف أخرى. هذه نتيجة حسابية مباشرة.",
          en: "If the LTV-to-CAC ratio is below 1, the company loses money on every new customer before any other expense. This follows directly from the arithmetic.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "تخصيص تكاليف التسويق والمبيعات المرتبطة بالاكتساب وحدها في البسط هو الممارسة الشائعة في شركات الاشتراك والتجارة الإلكترونية.",
          en: "Putting only acquisition-linked marketing and sales costs in the numerator is common practice in subscription and e-commerce companies.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "أي بنود تدخل البسط (رواتب، أدوات، عمولات، تكاليف إبداعية)، وتعريف العميل الجديد، ونموذج الإسناد المستخدم — كلها قرارات داخلية تختلف بين الشركات ويجب توثيقها.",
          en: "Which items enter the numerator (salaries, tools, commissions, creative costs), the definition of a new customer, and the attribution model are all internal decisions that differ by company and must be documented.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال من تأليفنا ولا تمثل أداء قناة أو قطاع بعينه.",
          en: "The example figures are invented and do not represent any specific channel or sector.",
        },
      },
    ],
    related: ["ltv", "roas"],
    exercise: {
      prompt: {
        ar: "أنفقت شركة 900,000 على الإعلانات و300,000 رواتب اكتساب خلال الربع، واكتسبت 2,000 عميل جديد. لكن 700 منهم جاؤوا من البحث العضوي بلا إنفاق إعلاني. احسب Blended CAC وPaid CAC، وحدد أيهما تستخدم لتقرير زيادة ميزانية الإعلانات ولماذا.",
        en: "A company spent 900,000 on ads and 300,000 on acquisition salaries in a quarter, gaining 2,000 new customers. But 700 of them came from organic search with no ad spend. Compute blended and paid CAC, and say which one informs a decision to raise the ad budget, and why.",
      },
      hint: {
        ar: "افصل العملاء الذين جاءوا من الإنفاق المدفوع عن غيرهم قبل القسمة.",
        en: "Separate paid-sourced customers from the rest before dividing.",
      },
      answer: {
        ar: "Blended CAC = 1,200,000 ÷ 2,000 = 600. Paid CAC = 1,200,000 ÷ 1,300 = 923 (أو 692 لو حُسب الإعلان وحده: 900,000 ÷ 1,300). لقرار زيادة ميزانية الإعلانات استخدم Paid CAC: العملاء العضويون سيأتون سواء زدت الميزانية أم لا، وإدخالهم في المقام يجعل الإعلان يبدو أكفأ مما هو عليه ويؤدي إلى الإفراط في الإنفاق. الأهم أن التكلفة الحدية للعميل التالي غالبًا أعلى من المتوسط.",
        en: "Blended CAC = 1,200,000 ÷ 2,000 = 600. Paid CAC = 1,200,000 ÷ 1,300 = 923 (or 692 counting media alone: 900,000 ÷ 1,300). For a budget-increase decision use paid CAC: organic customers arrive whether or not you raise the budget, and including them in the denominator makes advertising look more efficient than it is, leading to overspend. More importantly, the marginal cost of the next customer is usually above the average.",
      },
    },
    references: [
      {
        title: "USERELATIONSHIP function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/userelationship-function-dax",
        accessed: "2026-09-29",
        note: {
          ar: "يشرح تفعيل علاقة غير نشطة، وهو الأساس لربط تاريخ أول طلب بجدول التاريخ.",
          en: "Explains activating an inactive relationship, the basis for joining first order date to the date table.",
        },
      },
    ],
  },

  {
    id: "ltv",
    slug: "customer-lifetime-value",
    name: "Customer Lifetime Value",
    acronym: "LTV",
    nameAr: "القيمة العمرية للعميل",
    domains: ["marketing", "it-saas", "retail", "banking"],
    category: { ar: "قيمة العميل", en: "Customer value" },
    difficulty: "advanced",
    unit: { ar: "عملة لكل عميل", en: "Currency per customer" },
    aggregation: "non-additive",
    definition: {
      ar: "إجمالي صافي القيمة التي يُتوقع أن يحققها العميل للشركة طوال فترة علاقته بها. تُحسب عادة بالهامش لا بالإيراد، لأن إيرادًا بهامش صفري لا يضيف قيمة.",
      en: "The total net value a customer is expected to generate over their whole relationship with the company. Normally computed on margin rather than revenue, because revenue at zero margin adds no value.",
    },
    whyItMatters: {
      ar: "يحدد كم يمكنك أن تدفع لاكتساب عميل ويبقى ذلك مربحًا. بدونه يصبح CAC رقمًا بلا مرجع. كما يوجّه قرارات الاحتفاظ: رفع مدة بقاء العميل 20% قد يكون أرخص بكثير من اكتساب 20% عملاء جدد.",
      en: "It sets how much you can pay to acquire a customer and still profit. Without it, CAC is a number with no reference. It also guides retention decisions: extending customer lifetime by 20% is often far cheaper than acquiring 20% more customers.",
    },
    interpretation: {
      ar: "LTV قيمة تقديرية مستقبلية لا حقيقة محاسبية، ودقتها تعتمد كليًا على افتراضات البقاء والهامش. اعرضها دائمًا كتقدير مع افتراضاتها ظاهرة، لا كرقم نهائي في بطاقة مؤشر.",
      en: "LTV is a forward-looking estimate, not an accounting fact, and its accuracy depends entirely on retention and margin assumptions. Always present it as an estimate with its assumptions visible, never as a settled number on a KPI card.",
    },
    formula: "LTV (simple) = Average Order Value x Purchase Frequency x Gross Margin % x Expected Lifespan",
    numerator: {
      ar: "متوسط الهامش الدوري للعميل، أي ما يبقى من إنفاقه بعد التكلفة المباشرة.",
      en: "The customer average periodic margin, i.e. what remains of their spend after direct cost.",
    },
    denominator: {
      ar: "في صيغة الاشتراك تُقسم القيمة الدورية على معدل الفقد، وهو ما يعادل رياضيًا الضرب في متوسط مدة البقاء المتوقعة.",
      en: "In the subscription formula the periodic value is divided by churn rate, which is mathematically equivalent to multiplying by expected lifespan.",
    },
    timeGrain: {
      ar: "لا يُحسب لفترة بل لفوج (Cohort). القياس الصحيح يتابع مجموعة عملاء اكتُسبت في نفس الشهر عبر الزمن، لا كل العملاء في لحظة واحدة.",
      en: "Not computed for a period but for a cohort. Correct measurement follows a group of customers acquired in the same month over time, not all customers at one instant.",
    },
    direction: {
      rising: {
        ar: "ارتفاع LTV يعني عملاء يبقون أطول أو ينفقون أكثر أو بهامش أعلى — وأي من الثلاثة يستحق التفكيك لمعرفة أيها تحرك.",
        en: "Rising LTV means customers stay longer, spend more, or come at a higher margin — and it is worth decomposing which of the three moved.",
      },
      falling: {
        ar: "انخفاضه يشير إلى فقد أسرع أو انخفاض في قيمة السلة أو تآكل الهامش بالخصومات.",
        en: "A decline points to faster churn, a smaller basket, or margin eroded by discounting.",
      },
      caveat: {
        ar: "LTV مرتفع من فوج قديم لا يعني أن الأفواج الجديدة ستحقق مثله. الأفواج الأقدم تبدو دائمًا أفضل لأن ضعافها غادر مبكرًا وبقي أقواها — وهذا تحيّز اختيار لا تحسّن أداء.",
        en: "A high LTV from an old cohort does not mean new cohorts will match it. Older cohorts always look better because their weakest members left early and the strongest remain — that is selection bias, not improvement.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "متوسط الإيراد الشهري للعميل", en: "Average monthly revenue per customer" }, value: "250" },
        { label: { ar: "الهامش الإجمالي", en: "Gross margin" }, value: "70%" },
        { label: { ar: "معدل الفقد الشهري", en: "Monthly churn rate" }, value: "4%" },
      ],
      steps: [
        { label: { ar: "الهامش الشهري للعميل", en: "Monthly margin per customer" }, expression: "250 x 70% = 175" },
        { label: { ar: "متوسط مدة البقاء", en: "Average lifespan" }, expression: "1 / 4% = 25 شهرًا" },
        { label: { ar: "LTV", en: "LTV" }, expression: "175 x 25 = 4,375" },
      ],
      result: { label: { ar: "القيمة العمرية التقديرية", en: "Estimated lifetime value" }, value: "4,375" },
      reading: {
        ar: "لو ارتفع معدل الفقد إلى 5% فقط لانخفضت مدة البقاء إلى 20 شهرًا وLTV إلى 3,500 — انخفاض 20% من نقطة مئوية واحدة. حساسية LTV للفقد غير خطية، ولهذا لا يُعرض كرقم واحد بل مع نطاق.",
        en: "If churn rose to just 5%, lifespan falls to 20 months and LTV to 3,500 — a 20% drop from one percentage point. LTV sensitivity to churn is non-linear, which is why it is shown as a range rather than a single number.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "LTV تقديري من الهامش ومعدل الفقد", en: "Predictive LTV from margin and churn" },
        code: `Monthly Margin per Customer :=
VAR ActiveCustomers = [Active Customers]
VAR TotalMargin =
    [Net Revenue] - [COGS]
RETURN
    DIVIDE ( TotalMargin, ActiveCustomers )

Monthly Churn Rate :=
VAR StartOfMonth =
    CALCULATE ( [Active Customers], PREVIOUSMONTH ( 'Date'[Date] ) )
VAR Churned =
    CALCULATE (
        DISTINCTCOUNT ( 'Subscription'[CustomerId] ),
        'Subscription'[Status] = "Churned"
    )
RETURN
    DIVIDE ( Churned, StartOfMonth )

-- Guard the divisor: at zero churn the geometric series does not converge,
-- so an unguarded LTV would return an infinite or blank value on a card.
Predicted LTV :=
VAR Churn = [Monthly Churn Rate]
VAR Margin = [Monthly Margin per Customer]
RETURN
    IF (
        Churn > 0,
        DIVIDE ( Margin, Churn ),
        BLANK ()
    )

-- Historical (realised) LTV: what a cohort has actually delivered so far.
-- Safer to report than the predictive version because it assumes nothing.
Realised LTV to Date :=
DIVIDE (
    [Net Revenue] - [COGS],
    DISTINCTCOUNT ( 'Customer'[CustomerId] )
)`,
        assumptions: [
          {
            ar: "الصيغة التقديرية تفترض معدل فقد ثابتًا عبر الزمن، وهو افتراض غير واقعي عادة: الفقد أعلى بكثير في الأشهر الأولى.",
            en: "The predictive formula assumes a constant churn rate over time, which is usually unrealistic: churn is far higher in the first months.",
          },
          {
            ar: "لا يوجد خصم للقيمة الزمنية للنقود هنا. للعقود طويلة الأجل يجب استخدام القيمة الحالية، وإلا كانت LTV مبالغًا فيها.",
            en: "No discounting for the time value of money is applied. For long contracts a present-value formulation is needed, otherwise LTV is overstated.",
          },
          {
            ar: "[Active Customers] يجب أن يقيس العملاء النشطين في نهاية الفترة، وهو مؤشر لقطة شبه تجميعي لا يُجمع عبر الأشهر.",
            en: "[Active Customers] must measure customers active at period end; it is a semi-additive snapshot that does not sum across months.",
          },
          {
            ar: "الصيغة المحققة (Realised) لا تحتاج أي افتراض وهي الأنسب للعرض في لوحة تنفيذية؛ التقديرية أنسب للتخطيط.",
            en: "The realised version needs no assumptions and suits an executive dashboard; the predictive one suits planning.",
          },
        ],
        requires: ["Subscription[Status]", "Subscription[CustomerId]", "Customer[CustomerId]"],
      },
    ],
    model: [
      {
        table: "Subscription",
        grain: { ar: "اشتراك واحد لكل عميل وخطة وفترة صلاحية", en: "One subscription per customer, plan, and validity period" },
        columns: ["SubscriptionId", "CustomerId", "PlanId", "StartDate", "EndDate", "Status", "MonthlyAmount"],
        role: { ar: "مصدر البقاء والفقد والإيراد المتكرر", en: "Source of retention, churn, and recurring revenue" },
      },
      {
        table: "Customer",
        grain: { ar: "عميل واحد لكل صف", en: "One row per customer" },
        columns: ["CustomerId", "FirstOrderDate", "CohortMonth", "AcquisitionChannelId"],
        role: { ar: "تعريف الفوج، وهو الأساس الصحيح لقياس LTV", en: "Defines the cohort, the correct basis for measuring LTV" },
      },
    ],
    visuals: [
      {
        pattern: "pl-matrix",
        why: {
          ar: "مصفوفة الفوج × الشهر هي العرض المعياري للقيمة التراكمية، وتكشف متى تتجاوز LTV تكلفة الاكتساب.",
          en: "A cohort-by-month matrix is the standard view of cumulative value and shows exactly when LTV crosses acquisition cost.",
        },
      },
      {
        pattern: "scatter-quadrant",
        why: {
          ar: "LTV مقابل CAC لكل قناة يحوّل التقدير إلى قرار تخصيص.",
          en: "LTV against CAC per channel turns an estimate into an allocation decision.",
        },
      },
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "عرض LTV مع نسبتها إلى CAC وفترة الاسترداد يمنع قراءة الرقم كإنجاز مستقل.",
          en: "Showing LTV with its ratio to CAC and the payback period stops the number being read as a standalone achievement.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "استخدام الإيراد بدل الهامش. هذا يضخّم LTV بمقدار التكلفة المباشرة كاملة ويجعل نسبة LTV إلى CAC تبدو صحية وهي ليست كذلك.",
        en: "Using revenue instead of margin. This inflates LTV by the entire direct cost and makes the LTV-to-CAC ratio look healthy when it is not.",
      },
      {
        ar: "افتراض معدل فقد ثابت. الفقد في الشهر الأول عادة أضعافه في الشهر الثاني عشر، واستخدام متوسط واحد يشوّه النتيجة في الاتجاهين.",
        en: "Assuming constant churn. First-month churn is typically a multiple of twelfth-month churn, and one average distorts the result in both directions.",
      },
      {
        ar: "حساب LTV من كل العملاء الحاليين. الباقون هم الأفضل بحكم بقائهم، فينتج تقدير متفائل بشكل منهجي. استخدم الأفواج.",
        en: "Computing LTV from all current customers. Those who remain are the best by virtue of remaining, producing a systematically optimistic estimate. Use cohorts.",
      },
      {
        ar: "تجاهل تكلفة خدمة العميل المستمرة. عميل يستهلك دعمًا مكثفًا قد تكون قيمته الصافية أقل بكثير مما يوحي هامشه الإجمالي.",
        en: "Ignoring ongoing cost to serve. A support-intensive customer can have far lower net value than their gross margin suggests.",
      },
      {
        ar: "عرض LTV بمنزلتين عشريتين. الدقة الزائفة تعطي انطباعًا بيقين غير موجود في تقدير مبني على افتراضات.",
        en: "Showing LTV to two decimal places. False precision implies a certainty that does not exist in an assumption-driven estimate.",
      },
    ],
    variants: [
      {
        label: { ar: "LTV المحققة مقابل التقديرية", en: "Realised versus predictive LTV" },
        formula: "Cumulative margin to date per cohort  vs.  Margin / Churn",
        difference: {
          ar: "المحققة حقيقة تاريخية ولا تفترض شيئًا لكنها تقلل من قيمة الأفواج الحديثة. التقديرية تعالج ذلك لكنها ترث كل ضعف افتراضاتها.",
          en: "Realised is a historical fact assuming nothing but understates young cohorts. Predictive fixes that but inherits every weakness of its assumptions.",
        },
      },
      {
        label: { ar: "LTV مخصومة بالقيمة الحالية", en: "Discounted LTV" },
        formula: "Sum of ( Periodic Margin x Retention^t ) / (1 + d)^t",
        difference: {
          ar: "تدخل القيمة الزمنية للنقود، وهي ضرورية عندما تمتد العلاقة سنوات. تعطي قيمة أقل وأكثر واقعية من الصيغة البسيطة.",
          en: "Introduces the time value of money, necessary when relationships span years. It yields a lower and more realistic value than the simple formula.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "متوسط مدة البقاء يساوي مقلوب معدل الفقد فقط عندما يكون معدل الفقد ثابتًا عبر الزمن. هذا شرط رياضي صريح لا تفصيل ثانوي.",
          en: "Average lifespan equals the reciprocal of churn only when churn is constant over time. This is an explicit mathematical condition, not a minor detail.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "حساب LTV على أساس الهامش الإجمالي لا الإيراد هو الممارسة السائدة في تحليل اقتصاديات الوحدة.",
          en: "Computing LTV on gross margin rather than revenue is the dominant practice in unit economics analysis.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "أفق القياس (3 سنوات أم مدى الحياة)، ومعدل الخصم، وما إذا كانت تكلفة الخدمة تُطرح — كلها اختيارات داخلية تغيّر الرقم جوهريًا.",
          en: "The horizon (three years versus lifetime), the discount rate, and whether cost to serve is deducted are internal choices that materially change the number.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "مثال الـ 250 شهريًا و4% فقدًا من تأليفنا، واختير ليُظهر حساسية النتيجة لتغيّر صغير في الفقد.",
          en: "The 250-per-month, 4%-churn example is invented, chosen to show how sensitive the result is to a small change in churn.",
        },
      },
    ],
    related: ["cac", "roas", "aov"],
    exercise: {
      prompt: {
        ar: "عميل متوسط إنفاقه 400 شهريًا بهامش 60%، ومعدل الفقد الشهري 5%. احسب LTV. ثم احسبها مجددًا بمعدل فقد 2.5%، وعلّق على ما يعنيه الفرق لقرار الاستثمار في الاحتفاظ مقابل الاكتساب.",
        en: "A customer spends 400 monthly at a 60% margin with 5% monthly churn. Compute LTV. Then recompute it at 2.5% churn and comment on what the difference means for investing in retention versus acquisition.",
      },
      hint: {
        ar: "مدة البقاء = 1 ÷ معدل الفقد. لاحظ ما يحدث للنتيجة عند مضاعفة مدة البقاء.",
        en: "Lifespan = 1 ÷ churn. Watch what happens to the result when lifespan doubles.",
      },
      answer: {
        ar: "الهامش الشهري = 400 × 60% = 240. عند فقد 5%: مدة البقاء 20 شهرًا وLTV = 4,800. عند 2.5%: مدة البقاء 40 شهرًا وLTV = 9,600. خفض الفقد للنصف ضاعف القيمة العمرية. عمليًا هذا يعني أن إنفاق وحدة واحدة على الاحتفاظ قد يُنتج قيمة أكبر من إنفاقها على الاكتساب، لأن الاكتساب يزيد عدد العملاء خطيًا بينما تحسين الاحتفاظ يزيد قيمة كل عميل حالي ومستقبلي معًا.",
        en: "Monthly margin = 400 x 60% = 240. At 5% churn: lifespan 20 months, LTV = 4,800. At 2.5%: lifespan 40 months, LTV = 9,600. Halving churn doubled lifetime value. Practically, this means a unit spent on retention can produce more value than the same unit spent on acquisition, because acquisition grows customer count linearly while better retention raises the value of every existing and future customer at once.",
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
    id: "roas",
    slug: "return-on-ad-spend",
    name: "Return on Ad Spend",
    acronym: "ROAS",
    nameAr: "العائد على الإنفاق الإعلاني",
    domains: ["marketing", "retail", "fnb"],
    category: { ar: "كفاءة الإنفاق", en: "Spend efficiency" },
    difficulty: "beginner",
    unit: { ar: "نسبة (عملة إيراد لكل عملة إنفاق)", en: "Ratio (revenue currency per spend currency)" },
    aggregation: "ratio",
    definition: {
      ar: "الإيراد المنسوب إلى حملة إعلانية مقسومًا على تكلفتها. يقيس كم ريالًا من الإيراد تولّد مقابل كل ريال إنفاق إعلاني.",
      en: "Revenue attributed to an advertising campaign divided by its cost. It measures how much revenue each unit of ad spend generated.",
    },
    whyItMatters: {
      ar: "أسرع مؤشر لتقييم قناة أو حملة، ويُستخدم يوميًا في قرارات تحويل الميزانية. لكنه مؤشر إيراد لا ربح، وهذه أهم نقطة يجب توصيلها لمن يقرأه.",
      en: "The fastest way to judge a channel or campaign, used daily to shift budget. But it is a revenue metric, not a profit metric, and that is the most important thing to communicate to whoever reads it.",
    },
    interpretation: {
      ar: "ROAS بقيمة 4 يعني 4 ريالات إيراد لكل ريال إعلان. هل هذا جيد؟ يعتمد كليًا على الهامش: بهامش 20% فإن الأربعة ريالات تعطي 0.8 ريال هامش مقابل ريال إنفاق — أي خسارة. عتبة التعادل هي 1 ÷ الهامش الإجمالي.",
      en: "A ROAS of 4 means four units of revenue per unit of ad spend. Is that good? It depends entirely on margin: at a 20% margin those four units yield 0.8 of margin against one unit of spend — a loss. The break-even threshold is 1 ÷ gross margin.",
    },
    formula: "ROAS = Attributed Revenue / Ad Spend",
    numerator: {
      ar: "الإيراد المنسوب للحملة وفق نموذج إسناد محدد ومعلن. تغيير النموذج يغيّر البسط دون أن تتغير المبيعات الفعلية إطلاقًا.",
      en: "Revenue attributed to the campaign under a specific, declared attribution model. Changing the model changes the numerator without actual sales changing at all.",
    },
    denominator: {
      ar: "تكلفة الإعلان خلال نفس الفترة. بعض الشركات تضيف رسوم الوكالة وتكلفة الإنتاج الإبداعي، وهو ما يخفض ROAS ويجعله أقرب للواقع.",
      en: "Ad cost in the same period. Some companies add agency fees and creative production cost, which lowers ROAS and brings it closer to reality.",
    },
    timeGrain: {
      ar: "يومي أو أسبوعي في التشغيل، مع نافذة تحويل معلنة صراحة. ROAS بنافذة 7 أيام وROAS بنافذة 30 يومًا مؤشران مختلفان ولا يُقارنان.",
      en: "Daily or weekly in operations, with an explicitly declared conversion window. A 7-day ROAS and a 30-day ROAS are different metrics and are not comparable.",
    },
    direction: {
      rising: {
        ar: "ارتفاع ROAS يعني كفاءة إعلانية أفضل، أو تركيزًا على جمهور جاهز للشراء أصلًا.",
        en: "A rising ROAS means better ad efficiency, or a shift toward an audience that was ready to buy anyway.",
      },
      falling: {
        ar: "انخفاضه يعني تشبع الجمهور أو منافسة أعلى أو توسعًا مقصودًا نحو شرائح جديدة أقل استعدادًا.",
        en: "A decline means audience saturation, higher competition, or a deliberate expansion into new, less ready segments.",
      },
      caveat: {
        ar: "ROAS مرتفع جدًا غالبًا علامة على إنفاق ضئيل جدًا على جمهور كان سيشتري بلا إعلان (إعادة الاستهداف مثلًا). تعظيم ROAS قد يعني تقليص النمو، فالمقياس التشغيلي الأفضل هو الربح الإجمالي لا النسبة.",
        en: "A very high ROAS is often a sign of tiny spend on an audience that would have bought anyway (retargeting, typically). Maximising ROAS can mean shrinking growth; the better operational objective is total profit, not the ratio.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "إنفاق إعلاني على الحملة", en: "Campaign ad spend" }, value: "80,000" },
        { label: { ar: "إيراد منسوب (نافذة 7 أيام)", en: "Attributed revenue (7-day window)" }, value: "320,000" },
        { label: { ar: "الهامش الإجمالي للمنتجات المباعة", en: "Gross margin on products sold" }, value: "35%" },
      ],
      steps: [
        { label: { ar: "ROAS", en: "ROAS" }, expression: "320,000 / 80,000 = 4.0" },
        { label: { ar: "الهامش المتولد", en: "Margin generated" }, expression: "320,000 x 35% = 112,000" },
        { label: { ar: "الربح بعد الإعلان", en: "Profit after ad spend" }, expression: "112,000 - 80,000 = 32,000" },
        { label: { ar: "عتبة التعادل", en: "Break-even ROAS" }, expression: "1 / 35% = 2.86" },
      ],
      result: { label: { ar: "ROAS", en: "ROAS" }, value: "4.0 (التعادل عند 2.86)" },
      reading: {
        ar: "الحملة مربحة لأن 4.0 تتجاوز عتبة التعادل 2.86. لو كان الهامش 20% لكانت العتبة 5.0 ولكانت نفس الحملة خاسرة رغم ROAS الجذاب. اعرض دائمًا عتبة التعادل بجوار الرقم.",
        en: "The campaign is profitable because 4.0 clears the 2.86 break-even. At a 20% margin the threshold would be 5.0 and the same campaign would lose money despite an attractive ROAS. Always show the break-even line beside the number.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "ROAS مع عتبة تعادل محسوبة من الهامش", en: "ROAS with a margin-derived break-even threshold" },
        code: `Ad Spend :=
SUM ( 'AdSpend'[Amount] )

Attributed Revenue :=
CALCULATE (
    SUM ( 'Sales'[NetAmount] ),
    'Sales'[AttributionSource] = "Paid"
)

ROAS :=
DIVIDE ( [Attributed Revenue], [Ad Spend] )

-- The threshold is not a constant: it moves with the mix of products sold.
Break-even ROAS :=
DIVIDE ( 1, [Gross Profit Margin %] )

-- Profit contribution is the number that should drive budget decisions.
Profit After Ad Spend :=
[Attributed Revenue] * [Gross Profit Margin %] - [Ad Spend]

ROAS Verdict :=
VAR Actual = [ROAS]
VAR BreakEven = [Break-even ROAS]
RETURN
    SWITCH (
        TRUE (),
        ISBLANK ( Actual ) || ISBLANK ( BreakEven ), "Insufficient data",
        Actual >= BreakEven * 1.2, "Profitable",
        Actual >= BreakEven,       "Marginal",
        "Loss-making"
    )`,
        assumptions: [
          {
            ar: "'Sales'[AttributionSource] يحمل نتيجة نموذج إسناد مطبّق في طبقة البيانات لا في Power BI. المقياس لا يقوم بالإسناد بل يستهلكه.",
            en: "'Sales'[AttributionSource] carries the result of an attribution model applied in the data layer, not in Power BI. The measure consumes attribution rather than performing it.",
          },
          {
            ar: "عتبة التعادل تُحسب من هامش المنتجات المباعة فعلًا في سياق الترشيح، فتتغير بتغير مزيج المنتجات — وهذا هو السلوك الصحيح.",
            en: "The break-even threshold is computed from the margin of products actually sold in filter context, so it moves with product mix — which is the correct behaviour.",
          },
          {
            ar: "المقياس لا يعالج فجوة نافذة التحويل: مبيعة اليوم قد تنتج عن إعلان الأسبوع الماضي. وثّق نافذتك واستخدمها باتساق.",
            en: "The measure does not handle the conversion window lag: today sale may stem from last week ad. Document your window and apply it consistently.",
          },
          {
            ar: "عامل 1.2 في التصنيف اختيار تحريري لتمييز الهامش الآمن، وليس معيارًا صناعيًا؛ عدّله حسب تحمّل مؤسستك للمخاطرة.",
            en: "The 1.2 factor in the verdict is an editorial choice marking a safety buffer, not an industry standard; adjust it to your organization risk appetite.",
          },
        ],
        requires: ["AdSpend[Amount]", "Sales[NetAmount]", "Sales[AttributionSource]", "[Gross Profit Margin %]"],
      },
    ],
    model: [
      {
        table: "AdSpend",
        grain: { ar: "إنفاق يوم واحد لكل حملة", en: "One day of spend per campaign" },
        columns: ["SpendDate", "CampaignId", "ChannelId", "Amount", "Impressions", "Clicks"],
        role: { ar: "مصدر المقام", en: "Source of the denominator" },
      },
      {
        table: "Sales",
        grain: { ar: "سطر طلب واحد", en: "One order line" },
        columns: ["SaleDate", "NetAmount", "CostAmount", "AttributionSource", "CampaignId"],
        role: { ar: "مصدر البسط والهامش", en: "Source of the numerator and the margin" },
      },
      {
        table: "Campaign",
        grain: { ar: "حملة واحدة لكل صف", en: "One row per campaign" },
        columns: ["CampaignId", "CampaignName", "ChannelId", "Objective", "StartDate", "EndDate"],
        role: { ar: "يربط الإنفاق بالمبيعات المنسوبة", en: "Links spend to attributed sales" },
      },
    ],
    visuals: [
      {
        pattern: "actual-vs-target",
        why: {
          ar: "الهدف هنا ليس رقمًا اعتباطيًا بل عتبة التعادل المحسوبة، وعرضها كخط مرجعي يجعل التفسير فوريًا.",
          en: "The target here is not arbitrary but the computed break-even, and showing it as a reference line makes interpretation immediate.",
        },
      },
      {
        pattern: "scatter-quadrant",
        why: {
          ar: "ROAS مقابل حجم الإنفاق يكشف الحملات عالية الكفاءة ضئيلة الحجم، وهي التي تستحق التوسع لا التوقف.",
          en: "ROAS against spend volume exposes high-efficiency, low-volume campaigns — the ones that deserve scaling rather than stopping.",
        },
      },
      {
        pattern: "period-over-period",
        why: {
          ar: "تدهور ROAS تدريجي عادة، والمقارنة بالفترة السابقة تكشفه قبل أن يظهر في الربح.",
          en: "ROAS decay is usually gradual, and prior-period comparison reveals it before it shows up in profit.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "معاملة ROAS كمؤشر ربحية. هو نسبة إيراد إلى إنفاق ولا يعرف شيئًا عن التكلفة المباشرة ولا عن بقية مصاريف التشغيل.",
        en: "Treating ROAS as a profitability metric. It is a revenue-to-spend ratio and knows nothing about direct cost or the rest of operating expense.",
      },
      {
        ar: "جمع ROAS من عدة منصات. كل منصة تنسب نفس التحويل لنفسها، فمجموع الإيراد المنسوب قد يتجاوز إيراد الشركة الفعلي.",
        en: "Summing ROAS across platforms. Each one claims the same conversion, so total attributed revenue can exceed the company actual revenue.",
      },
      {
        ar: "مقارنة حملات بنوافذ تحويل مختلفة. حملة بنافذة 30 يومًا ستتفوق دائمًا على حملة بنافذة 7 أيام لسبب فني بحت.",
        en: "Comparing campaigns with different conversion windows. A 30-day window always beats a 7-day one for purely technical reasons.",
      },
      {
        ar: "تجاهل التكلفة الإبداعية ورسوم الوكالة. في حملات المحتوى قد تتجاوز هذه البنود الإنفاق الإعلامي نفسه.",
        en: "Ignoring creative cost and agency fees. In content-led campaigns these can exceed the media spend itself.",
      },
      {
        ar: "تحسين ROAS بإيقاف الحملات الواسعة والاكتفاء بإعادة الاستهداف. يرتفع الرقم ويتوقف نمو العملاء الجدد تمامًا.",
        en: "Optimising ROAS by killing broad campaigns and keeping only retargeting. The number rises while new customer growth stops entirely.",
      },
    ],
    variants: [
      {
        label: { ar: "POAS: العائد على الإنفاق بالربح", en: "POAS: Profit on Ad Spend" },
        formula: "(Attributed Revenue x Gross Margin %) / Ad Spend",
        difference: {
          ar: "يستبدل الإيراد بالهامش فيصبح المؤشر قابلًا للمقارنة عبر منتجات مختلفة الهامش، وعتبة التعادل تصبح 1 بدل 1 ÷ الهامش.",
          en: "Replaces revenue with margin, making the metric comparable across products with different margins, and moving break-even to 1 instead of 1 ÷ margin.",
        },
      },
      {
        label: { ar: "MER: نسبة الكفاءة التسويقية الكلية", en: "MER: Marketing Efficiency Ratio" },
        formula: "Total Revenue / Total Marketing Spend",
        difference: {
          ar: "يتجاهل الإسناد تمامًا ويقارن إجمالي الإيراد بإجمالي الإنفاق. أقل تفصيلًا لكنه محصّن ضد تضخيم المنصات وأخطاء التتبع.",
          en: "Ignores attribution entirely and compares total revenue to total marketing spend. Less granular but immune to platform over-claiming and tracking loss.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "عتبة التعادل تساوي مقلوب الهامش الإجمالي. عند هامش 25% تكون العتبة 4.0 بالضبط، وهذه نتيجة حسابية لا رأي.",
          en: "Break-even equals the reciprocal of gross margin. At a 25% margin the threshold is exactly 4.0; this is arithmetic, not opinion.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "حساب ROAS على الإيراد المنسوب خلال نافذة تحويل معلنة هو الممارسة السائدة في التسويق الرقمي.",
          en: "Computing ROAS on attributed revenue within a declared conversion window is standard practice in digital marketing.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "نموذج الإسناد، وطول نافذة التحويل، وما إذا كانت رسوم الوكالة تدخل المقام — كلها قرارات داخلية تغيّر الرقم بشكل حاد.",
          en: "The attribution model, the conversion window length, and whether agency fees enter the denominator are internal decisions that sharply change the number.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال من تأليفنا. لا نقدم أي رقم كمعيار صناعي لـ ROAS لأن القيمة المقبولة تتبع الهامش وحده.",
          en: "The example figures are invented. We offer no industry benchmark for ROAS because the acceptable value follows margin alone.",
        },
      },
    ],
    related: ["cac", "ltv", "gross-profit-margin"],
    exercise: {
      prompt: {
        ar: "حملتان: الأولى ROAS = 6.0 على منتج هامشه 15%، والثانية ROAS = 3.0 على منتج هامشه 50%. أي الحملتين أفضل؟ احسب عتبة التعادل والربح لكل ريال منفق.",
        en: "Two campaigns: the first has ROAS = 6.0 on a product with a 15% margin, the second ROAS = 3.0 on a product with a 50% margin. Which is better? Compute break-even and profit per unit of spend for each.",
      },
      hint: {
        ar: "عتبة التعادل = 1 ÷ الهامش. ثم احسب الهامش المتولد لكل ريال إنفاق وقارنه بالريال نفسه.",
        en: "Break-even = 1 ÷ margin. Then compute margin generated per unit of spend and compare it to that unit.",
      },
      answer: {
        ar: "الحملة الأولى: عتبة التعادل = 1 ÷ 15% = 6.67، وROAS = 6.0 أقل منها، فالهامش المتولد = 6.0 × 15% = 0.90 ريال مقابل ريال إنفاق، أي خسارة 0.10 لكل ريال. الحملة الثانية: عتبة التعادل = 1 ÷ 50% = 2.0، وROAS = 3.0 يتجاوزها، فالهامش = 3.0 × 50% = 1.50 ريال، أي ربح 0.50 لكل ريال. الحملة الثانية أفضل رغم أن ROAS فيها نصف الأولى — وهذا بالضبط سبب خطورة ترتيب الحملات بـ ROAS وحده.",
        en: "Campaign one: break-even = 1 ÷ 15% = 6.67, and ROAS of 6.0 falls short, so margin generated = 6.0 x 15% = 0.90 per unit spent — a loss of 0.10 per unit. Campaign two: break-even = 1 ÷ 50% = 2.0, and ROAS of 3.0 clears it, so margin = 3.0 x 50% = 1.50 — a profit of 0.50 per unit. The second campaign is better despite having half the ROAS, which is precisely why ranking campaigns by ROAS alone is dangerous.",
      },
    },
    references: [
      {
        title: "SWITCH function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/switch-function-dax",
        accessed: "2026-09-29",
      },
    ],
  },
];
