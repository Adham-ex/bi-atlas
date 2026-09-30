import type { Kpi } from "../types";

export const itSaasKpis: Kpi[] = [
  {
    id: "mrr",
    slug: "mrr",
    name: "Monthly Recurring Revenue",
    acronym: "MRR",
    nameAr: "الإيراد الشهري المتكرر",
    domains: ["it-saas"],
    category: { ar: "الإيراد المتكرر", en: "Recurring revenue" },
    difficulty: "intermediate",
    unit: { ar: "عملة شهريًا", en: "Currency per month" },
    aggregation: "semi-additive",
    definition: {
      ar: "الإيراد الشهري المتكرر من الاشتراكات النشطة في لحظة محددة، بعد تطبيعه إلى قيمة شهرية وفق قواعد الاعتراف والتطبيع المعتمدة. هو لقطة لحجم قاعدة الاشتراكات في نهاية الشهر، لا مجموع ما فُوتر أو حُصّل خلاله.",
      en: "The monthly recurring revenue from active subscriptions at a given point in time, normalized to a monthly amount under the agreed recognition and normalization rules. It is a snapshot of the subscription base at month-end, not the sum of what was invoiced or collected during the month.",
    },
    whyItMatters: {
      ar: "هو المقياس الأساسي لحجم أعمال الاشتراكات، ومنه تُشتق معظم مؤشرات SaaS الأخرى: ARR وNRR وتدفقات النمو والانكماش. لأنه يستبعد الإيرادات لمرة واحدة، فهو يُظهر القاعدة التي ستتكرر الشهر القادم إن لم يتغير شيء.",
      en: "It is the core measure of subscription business scale, and most other SaaS metrics derive from it: ARR, NRR, and the growth and contraction flows. Because it excludes one-off revenue, it shows the base that will recur next month if nothing changes.",
    },
    interpretation: {
      ar: "MRR بقيمة 5,000 يعني أن الاشتراكات النشطة الآن تولّد 5,000 شهريًا بالقيمة المطبّعة. الرقم وحده لا يكفي: القراءة الصحيحة تأتي من جسر الحركة بين افتتاح الشهر وإقفاله — جديد، توسّع، انكماش، إلغاء — لأن نموًا صافيًا صغيرًا قد يخفي إلغاءً كبيرًا يعوّضه بيع جديد مكلف.",
      en: "An MRR of 5,000 means the subscriptions active right now generate 5,000 per month on a normalized basis. The figure alone is not enough: the real reading comes from the movement bridge between opening and closing — new, expansion, contraction, churn — because small net growth can hide heavy churn offset by expensive new sales.",
    },
    formula: "MRR = Sum of Normalized Monthly Recurring Subscription Amounts (active subscriptions at the snapshot date)",
    numerator: {
      ar: "مجموع القيم الشهرية المطبّعة للاشتراكات النشطة في تاريخ اللقطة: الخطة السنوية تُقسم على 12، والخصم المتكرر يُطرح، والرسوم لمرة واحدة تُستبعد.",
      en: "Sum of normalized monthly amounts for subscriptions active at the snapshot date: an annual plan is divided by 12, recurring discounts are deducted, and one-off fees are excluded.",
    },
    timeGrain: {
      ar: "لقطة في نهاية كل شهر. على مستوى الربع أو السنة تُعرض قيمة آخر شهر في الفترة، لا مجموع الأشهر ولا متوسطها.",
      en: "A snapshot at each month-end. At quarter or year level, show the value of the last month in the period, never the sum or the average of the months.",
    },
    direction: {
      rising: {
        ar: "ارتفاع MRR يعني قاعدة اشتراكات أكبر، لكن تحقق من الجسر: هل جاء النمو من عملاء جدد، أم من توسّع العملاء الحاليين، أم من تغيير في قاعدة التطبيع أو سعر الصرف؟",
        en: "Rising MRR means a larger subscription base, but check the bridge: did growth come from new customers, from existing customers expanding, or from a change in the normalization rule or exchange rate?",
      },
      falling: {
        ar: "انخفاض MRR يعني أن الإلغاء والانكماش تجاوزا البيع الجديد والتوسّع. ابدأ بتفكيك الجسر قبل البحث عن السبب.",
        en: "Falling MRR means churn and contraction exceeded new sales and expansion. Decompose the bridge before looking for a cause.",
      },
      caveat: {
        ar: "النمو في MRR ليس جيدًا دائمًا: خصومات عميقة لكسب اشتراكات جديدة ترفع MRR اليوم وقد ترفع الإلغاء لاحقًا. اقرأه دائمًا مع معدل الإلغاء وتكلفة الاكتساب.",
        en: "MRR growth is not always good: deep discounts to win new subscriptions lift MRR today and may raise churn later. Always read it alongside churn and acquisition cost.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "عدد الاشتراكات الشهرية النشطة", en: "Active monthly subscriptions" }, value: "100" },
        { label: { ar: "القيمة الشهرية لكل اشتراك", en: "Monthly amount per subscription" }, value: "50" },
      ],
      steps: [
        { label: { ar: "MRR قبل التعديلات", en: "MRR before adjustments" }, expression: "100 × 50 = 5,000" },
      ],
      result: { label: { ar: "الإيراد الشهري المتكرر", en: "Monthly recurring revenue" }, value: "5,000" },
      reading: {
        ar: "هذا هو الرقم قبل أي تعديل. لو كان أحد هذه الاشتراكات خطة سنوية مدفوعة 600 مقدمًا، فهو يساهم بـ 50 شهريًا لا 600 في شهر الدفع. ولو حصل عشرة مشتركين على خصم دائم 20%، ينخفض MRR بمقدار 100. التعديلات هي ما يجعل الرقم قابلًا للمقارنة، ويجب توثيقها.",
        en: "This is the figure before any adjustment. If one of these subscriptions were an annual plan paid 600 upfront, it contributes 50 per month, not 600 in the month of payment. If ten subscribers had a permanent 20% discount, MRR falls by 100. The adjustments are what make the number comparable, and they must be documented.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "MRR كلقطة شبه تجميعية مع جسر الحركة", en: "MRR as a semi-additive snapshot with a movement bridge" },
        code: `-- Semi-additive: MRR is read at ONE snapshot date, never summed across months.
-- Helper: the month-end snapshot that represents the current filter context,
-- capped at the last loaded snapshot so incomplete years do not return blank.
MRR Snapshot Date :=
VAR MinDate = MIN ( 'Date'[Date] )
VAR MaxDate = MAX ( 'Date'[Date] )
VAR LastLoaded =
    CALCULATE (
        MAX ( 'SubscriptionMonth'[SnapshotDate] ),
        REMOVEFILTERS ( 'SubscriptionMonth' )
    )
VAR MonthEnd =
    IF ( EOMONTH ( MaxDate, 0 ) = MaxDate, MaxDate, EOMONTH ( MaxDate, -1 ) )
RETURN
    IF ( MinDate <= LastLoaded, MIN ( MonthEnd, LastLoaded ) )

MRR :=
VAR SnapshotDate = [MRR Snapshot Date]
RETURN
    CALCULATE (
        SUM ( 'SubscriptionMonth'[MRR] ),
        REMOVEFILTERS ( 'Date' ),
        'Date'[Date] = SnapshotDate
    )

-- Opening MRR = the snapshot at the month-end before the period starts.
Opening MRR :=
VAR OpeningDate = EOMONTH ( MIN ( 'Date'[Date] ), -1 )
RETURN
    CALCULATE (
        SUM ( 'SubscriptionMonth'[MRR] ),
        REMOVEFILTERS ( 'Date' ),
        'Date'[Date] = OpeningDate
    )

-- Movements are flows, so they ARE additive across months.
MRR Movement :=
SUM ( 'MrrMovement'[MrrDelta] )

New MRR :=
CALCULATE ( [MRR Movement], 'MrrMovement'[MovementType] = "New" )

Expansion MRR :=
CALCULATE ( [MRR Movement], 'MrrMovement'[MovementType] = "Expansion" )

Contraction MRR :=
CALCULATE ( [MRR Movement], 'MrrMovement'[MovementType] = "Contraction" )

Churned MRR :=
CALCULATE ( [MRR Movement], 'MrrMovement'[MovementType] = "Churn" )

-- Reconciliation: must be 0 when snapshot and movement tables agree.
MRR Bridge Check :=
[Opening MRR] + [MRR Movement] - [MRR]`,
        assumptions: [
          {
            ar: "'SubscriptionMonth' لقطة بحبيبية اشتراك واحد لكل نهاية شهر، وعمود MRR فيها مطبّع مسبقًا في ETL: الخطط السنوية مقسومة على 12، والخصومات المتكررة مطروحة، والرسوم لمرة واحدة مستبعدة، والعملة محوّلة بسعر ثابت متفق عليه.",
            en: "'SubscriptionMonth' is a snapshot at one row per subscription per month-end, and its MRR column is already normalized in ETL: annual plans divided by 12, recurring discounts deducted, one-off fees excluded, and currency converted at an agreed fixed rate.",
          },
          {
            ar: "SnapshotDate يقع دائمًا في آخر يوم من الشهر ويرتبط بـ 'Date'[Date]. إن كانت اللقطة يومية فيجب تبسيط المقياس [MRR Snapshot Date] ليعيد آخر تاريخ محمّل ضمن السياق.",
            en: "SnapshotDate is always the last day of the month and relates to 'Date'[Date]. If snapshots are daily, simplify [MRR Snapshot Date] to return the last loaded date in context.",
          },
          {
            ar: "REMOVEFILTERS ( 'SubscriptionMonth' ) يزيل المرشحات من الجدول الموسّع بما فيه أبعاد العميل والتاريخ، فيعيد آخر لقطة محمّلة عالميًا. هذا مقصود: عميل ملغى يجب أن يظهر فارغًا في الشهر الأخير لا بآخر قيمة له قبل الإلغاء.",
            en: "REMOVEFILTERS ( 'SubscriptionMonth' ) clears filters from the expanded table, including the customer and date dimensions, so it returns the globally last loaded snapshot. This is intentional: a churned customer must show blank in the latest month, not their last value before churning.",
          },
          {
            ar: "'MrrMovement' يحمل MrrDelta بإشارة: الجديد والتوسّع موجبان، والانكماش والإلغاء سالبان. إعادة التفعيل نوع مستقل. إن خُزّنت القيم موجبة كلها فيجب تعديل مقياس الجسر.",
            en: "'MrrMovement' carries a signed MrrDelta: new and expansion positive, contraction and churn negative. Reactivation is its own type. If all values are stored positive, the bridge measure must be adjusted.",
          },
        ],
        requires: [
          "SubscriptionMonth[SnapshotDate]",
          "SubscriptionMonth[MRR]",
          "MrrMovement[MrrDelta]",
          "MrrMovement[MovementType]",
          "Date[Date]",
        ],
      },
    ],
    model: [
      {
        table: "SubscriptionMonth",
        grain: { ar: "اشتراك واحد لكل نهاية شهر (لقطة)", en: "One row per subscription per month-end (snapshot)" },
        columns: ["SnapshotDate", "SubscriptionId", "CustomerId", "PlanId", "BillingInterval", "MRR", "CurrencyCode"],
        role: { ar: "مصدر قيمة MRR في أي لحظة — جدول لقطات شبه تجميعي", en: "Source of MRR at any point in time — a semi-additive snapshot table" },
      },
      {
        table: "MrrMovement",
        grain: { ar: "حركة واحدة لكل اشتراك لكل شهر ونوع حركة", en: "One row per subscription per month per movement type" },
        columns: ["MovementDate", "SubscriptionId", "CustomerId", "MovementType", "MrrDelta"],
        role: { ar: "تدفقات تجميعية تغذي جسر الافتتاح إلى الإقفال", en: "Additive flows that feed the opening-to-closing bridge" },
      },
      {
        table: "Customer",
        grain: { ar: "عميل واحد لكل صف", en: "One row per customer" },
        columns: ["CustomerId", "Segment", "Region", "AcquisitionChannel", "FirstSubscriptionDate"],
        role: { ar: "التقسيم حسب الشريحة والمنطقة وقناة الاكتساب", en: "Segmentation by segment, region, and acquisition channel" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "Quarter", "Year", "IsMonthEnd"],
        role: {
          ar: "يُربط بـ SnapshotDate وبـ MovementDate. يجب أن يكون جدولًا متصلًا يغطي كل الأيام",
          en: "Related to SnapshotDate and to MovementDate. It must be a contiguous table covering every day",
        },
      },
    ],
    visuals: [
      {
        pattern: "period-over-period",
        why: {
          ar: "اتجاه MRR شهرًا بشهر هو أول ما تسأل عنه الإدارة، والمقارنة بنفس نقطة العام الماضي تفصل النمو الحقيقي عن الموسمية.",
          en: "The month-by-month MRR trend is management's first question, and comparing with the same point last year separates real growth from seasonality.",
        },
      },
      {
        pattern: "waterfall-variance",
        why: {
          ar: "جسر الافتتاح + جديد + توسّع − انكماش − إلغاء = الإقفال هو الطريقة القياسية لشرح تحرّك MRR، كما يقترح المرجع.",
          en: "The bridge opening + new + expansion − contraction − churn = closing is the standard way to explain MRR movement, as the reference suggests.",
        },
      },
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "بطاقة MRR بجانب MRR الجديد والملغى وصافي الحركة تمنع قراءة الرقم الإجمالي بمعزل عن مكوناته.",
          en: "An MRR card next to new, churned, and net new MRR prevents reading the total in isolation from its components.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عدم تعريف معاملة الخصومات والخطط السنوية والرسوم المرتبطة بالاستخدام والمبالغ المستردة والعملة والاشتراكات غير النشطة. كل واحدة منها تغيّر الرقم، وغياب قاعدة موثقة هو السبب الأول لاختلاف MRR بين المالية والمبيعات.",
        en: "Not defining the treatment of discounts, annual plans, usage-based fees, refunds, currency, and inactive subscriptions. Each one changes the figure, and the lack of a documented rule is the top reason MRR differs between finance and sales.",
      },
      {
        ar: "جمع MRR عبر الأشهر. مقياس SUM بسيط على جدول اللقطات يعطي في بطاقة السنة مجموع اثنتي عشرة لقطة، أي رقمًا أكبر باثنتي عشرة مرة تقريبًا من الواقع ولا معنى له.",
        en: "Summing MRR across months. A plain SUM measure on the snapshot table returns the total of twelve snapshots on a year card — a number roughly twelve times too large and meaningless.",
      },
      {
        ar: "تسجيل الخطة السنوية بكامل قيمتها في شهر الدفع. هذا يخلق قفزة وهمية في شهر ثم انهيارًا في الشهر التالي، ويخلط بين MRR والفوترة.",
        en: "Booking an annual plan at its full value in the month of payment. This creates a false spike one month and a collapse the next, and confuses MRR with billings.",
      },
      {
        ar: "استخدام LASTDATE على جدول التاريخ في سنة غير مكتملة. آخر يوم في السنة لا توجد له لقطة بعد، فتظهر البطاقة فارغة. يجب تحديد آخر لقطة محمّلة كما في المقياس المساعد.",
        en: "Using LASTDATE on the date table for an incomplete year. The last day of the year has no snapshot yet, so the card shows blank. Cap the date at the last loaded snapshot as the helper measure does.",
      },
      {
        ar: "تحويل العملة بسعر اليوم عند كل تحديث. MRR بعملة أجنبية يتحرك حينها مع سعر الصرف دون أي تغيير في الاشتراكات، ويظهر الأثر في الجسر كتوسّع أو انكماش وهمي.",
        en: "Converting currency at today's rate on every refresh. Foreign-currency MRR then moves with the exchange rate without any subscription change, and the effect shows up in the bridge as false expansion or contraction.",
      },
    ],
    variants: [
      {
        label: { ar: "MRR المتعاقد عليه", en: "Contracted MRR (CMRR)" },
        formula: "CMRR = Current MRR + Signed Future MRR - Known Scheduled Cancellations",
        difference: {
          ar: "يضيف العقود الموقّعة التي لم تبدأ بعد ويطرح الإلغاءات المعلنة. مفيد للتخطيط، لكنه ليس إيرادًا نشطًا ويجب ألا يُخلط مع MRR الفعلي.",
          en: "Adds signed contracts that have not started yet and deducts announced cancellations. Useful for planning, but it is not active revenue and must not be mixed with actual MRR.",
        },
      },
      {
        label: { ar: "MRR شاملًا رسوم الاستخدام", en: "MRR including usage-based fees" },
        formula: "MRR = Normalized Subscription Fees + Trailing Average of Usage Fees",
        difference: {
          ar: "يدرج رسوم الاستخدام بمتوسط متحرك لعدة أشهر لتخفيف تذبذبها. يعكس الإيراد بدقة أكبر في نماذج التسعير المختلطة، لكنه أقل استقرارًا وأصعب في التفسير.",
          en: "Includes usage fees as a trailing average over several months to damp volatility. More accurate for hybrid pricing, but less stable and harder to explain.",
        },
      },
      {
        label: { ar: "صافي MRR الجديد", en: "Net new MRR" },
        formula: "Net New MRR = New + Expansion + Reactivation - Contraction - Churn",
        difference: {
          ar: "تدفق لا لقطة: يقيس صافي التغيّر خلال الشهر، ولذلك هو تجميعي عبر الأشهر بخلاف MRR نفسه.",
          en: "A flow rather than a snapshot: it measures the net change within the month, so unlike MRR itself it is additive across months.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "MRR الإقفال يساوي MRR الافتتاح زائد مجموع الحركات خلال الفترة، متى كان جدول الحركات مكتملًا ومتسقًا مع جدول اللقطات. أي فرق في مقياس المطابقة يدل على خلل في البيانات.",
          en: "Closing MRR equals opening MRR plus the sum of movements in the period, provided the movement table is complete and consistent with the snapshot table. Any non-zero reconciliation value signals a data problem.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "تطبيع الخطط السنوية والمتعددة السنوات بقسمتها على عدد الأشهر، واستبعاد الرسوم لمرة واحدة، ممارسة شائعة في تقارير SaaS.",
          en: "Normalizing annual and multi-year plans by dividing by the number of months, and excluding one-off fees, is common practice in SaaS reporting.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "معاملة الخصومات والتجارب المجانية ورسوم الاستخدام والمبالغ المستردة وسعر الصرف قرارات داخلية لكل شركة يجب توثيقها في قاموس المؤشرات.",
          en: "The treatment of discounts, free trials, usage fees, refunds, and exchange rates is an internal decision for each company and belongs in the metric dictionary.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (100 اشتراك بقيمة 50) من المرجع وهي للتوضيح فقط ولا تمثل شركة بعينها.",
          en: "The example figures (100 subscriptions at 50) come from the reference and are for illustration only; they represent no specific company.",
        },
      },
    ],
    related: ["arr", "nrr", "churn-rate", "ltv"],
    exercise: {
      prompt: {
        ar: "شركة بدأت الشهر بـ MRR قدره 20,000. خلال الشهر: اشتراكات شهرية جديدة بقيمة 1,800 شهريًا، وعقد سنوي جديد واحد بقيمة 14,400 مدفوعة مقدمًا، وتوسّع 1,500، وانكماش 800، وإلغاء 1,200. احسب MRR الجديد وMRR الإقفال ونسبة النمو، ثم احسب الرقم الخاطئ الذي يظهر لو سُجّل العقد السنوي بكامل قيمته.",
        en: "A company opened the month with MRR of 20,000. During the month: new monthly subscriptions worth 1,800 per month, one new annual contract of 14,400 paid upfront, expansion of 1,500, contraction of 800, and churn of 1,200. Compute new MRR, closing MRR, and growth, then compute the wrong figure that appears if the annual contract is booked at full value.",
      },
      hint: {
        ar: "العقد السنوي يُطبّع إلى قيمته الشهرية أولًا. ثم طبّق الجسر: الافتتاح + الجديد + التوسّع − الانكماش − الإلغاء.",
        en: "Normalize the annual contract to its monthly value first. Then apply the bridge: opening + new + expansion − contraction − churn.",
      },
      answer: {
        ar: "العقد السنوي = 14,400 ÷ 12 = 1,200 شهريًا، فيكون MRR الجديد = 1,800 + 1,200 = 3,000. الإقفال = 20,000 + 3,000 + 1,500 − 800 − 1,200 = 22,500. صافي الحركة = 2,500 أي نمو 12.5%. لو سُجّل العقد بكامل قيمته لكان الإقفال = 22,500 − 1,200 + 14,400 = 35,700، أي نمو وهمي 78.5% يتبعه انهيار في الشهر التالي. هذا بالضبط سبب التطبيع.",
        en: "Annual contract = 14,400 ÷ 12 = 1,200 per month, so new MRR = 1,800 + 1,200 = 3,000. Closing = 20,000 + 3,000 + 1,500 − 800 − 1,200 = 22,500. Net movement = 2,500, i.e. 12.5% growth. Booking the contract at full value would give closing = 22,500 − 1,200 + 14,400 = 35,700, a false 78.5% growth followed by a collapse next month. This is exactly why normalization exists.",
      },
    },
    references: [
      {
        title: "EOMONTH function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/eomonth-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع تحديد نهاية الشهر المستخدم لاختيار تاريخ اللقطة وتاريخ الافتتاح.",
          en: "Reference for the month-end calculation used to pick the snapshot date and the opening date.",
        },
      },
      {
        title: "REMOVEFILTERS function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/removefilters-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع إزالة مرشحات التاريخ قبل تثبيت تاريخ لقطة واحد، وهو جوهر المعالجة شبه التجميعية.",
          en: "Reference for clearing date filters before pinning a single snapshot date — the core of the semi-additive treatment.",
        },
      },
    ],
  },

  {
    id: "arr",
    slug: "arr",
    name: "Annual Recurring Revenue",
    acronym: "ARR",
    nameAr: "الإيراد السنوي المتكرر",
    domains: ["it-saas"],
    category: { ar: "الإيراد المتكرر", en: "Recurring revenue" },
    difficulty: "beginner",
    unit: { ar: "عملة سنويًا", en: "Currency per year" },
    aggregation: "semi-additive",
    definition: {
      ar: "القيمة السنوية المكافئة للإيراد المتكرر في لحظة محددة. في الاصطلاح الشائع يُحسب بضرب MRR في 12 حين يدعم نموذج العمل وتعريف MRR ذلك. هو لقطة لمعدل الإيراد السنوي، لا إيراد السنة المعترف به.",
      en: "The annualized equivalent of recurring revenue at a given point in time. By common convention it is MRR multiplied by 12, when the business model and the MRR definition support that. It is a snapshot of the annual run rate, not the revenue recognized in the year.",
    },
    whyItMatters: {
      ar: "هو اللغة التي تُعرض بها أعمال الاشتراكات على الإدارة العليا والمستثمرين، خصوصًا حين تكون العقود سنوية. يسمح بمقارنة حجم الأعمال بين فترات وشركات دون تشويش الرسوم لمرة واحدة.",
      en: "It is the language in which subscription businesses are presented to senior management and investors, especially where contracts are annual. It allows comparing business scale across periods and companies without the noise of one-off fees.",
    },
    interpretation: {
      ar: "ARR بقيمة 1,200,000 يعني أن قاعدة الاشتراكات الحالية، لو بقيت كما هي اثني عشر شهرًا، ستولّد 1,200,000. هو افتراض ثبات لا توقّع: الإلغاء والتوسّع خلال السنة سيجعلان الإيراد الفعلي مختلفًا.",
      en: "An ARR of 1,200,000 means the current subscription base, if it stayed unchanged for twelve months, would generate 1,200,000. It is a steady-state assumption, not a forecast: churn and expansion during the year will make actual revenue different.",
    },
    formula: "ARR = MRR x 12 (at the snapshot date, when the MRR definition supports this convention)",
    numerator: {
      ar: "MRR المطبّع في تاريخ اللقطة، بنفس قواعد الخصومات والعملة والاستبعادات المعتمدة له.",
      en: "Normalized MRR at the snapshot date, under the same rules for discounts, currency, and exclusions.",
    },
    timeGrain: {
      ar: "لقطة شهرية أو ربعية أو سنوية تُقرأ في نهاية الفترة. ARR للسنة هو ARR في آخر يوم لقطة منها، لا مجموع ARR الأشهر.",
      en: "A monthly, quarterly, or annual snapshot read at period end. ARR for a year is ARR on its last snapshot date, never the sum of monthly ARR values.",
    },
    direction: {
      rising: {
        ar: "ارتفاع ARR يعني نمو معدل الإيراد المتكرر. تحقق من مصدره عبر جسر الحركة ومن ثبات قاعدة التطبيع وسعر الصرف.",
        en: "Rising ARR means the recurring run rate is growing. Check its source through the movement bridge and confirm the normalization rule and exchange rate did not change.",
      },
      falling: {
        ar: "انخفاض ARR يعني أن الإلغاء والانكماش يفوقان البيع الجديد والتوسّع، أو أن عقودًا كبيرة انتهت دون تجديد.",
        en: "Falling ARR means churn and contraction outweigh new sales and expansion, or large contracts expired without renewal.",
      },
      caveat: {
        ar: "ARR مرتفع لا يعني إيرادًا مرتفعًا هذه السنة: عميل وقّع في ديسمبر يرفع ARR كاملًا بينما يساهم بشهر واحد في الإيراد المعترف به. لا تستخدمه بديلًا عن إيراد القوائم المالية.",
        en: "High ARR does not mean high revenue this year: a customer signed in December lifts ARR in full while contributing one month to recognized revenue. Never use it as a substitute for financial-statement revenue.",
      },
    },
    example: {
      inputs: [{ label: { ar: "MRR في تاريخ اللقطة", en: "MRR at the snapshot date" }, value: "100,000" }],
      steps: [{ label: { ar: "التحويل السنوي", en: "Annualization" }, expression: "100,000 × 12 = 1,200,000" }],
      result: { label: { ar: "الإيراد السنوي المتكرر", en: "Annual recurring revenue" }, value: "1,200,000" },
      reading: {
        ar: "الرقم صحيح وفق الاصطلاح المعلن فقط. لو كان الإيراد المعترف به خلال السنة 950,000 لأن القاعدة نمت تدريجيًا، فالرقمان كلاهما صحيحان ويجيبان عن سؤالين مختلفين: الأول عن معدل اليوم، والثاني عمّا تحقق فعلًا.",
        en: "The figure is correct only under the stated convention. If recognized revenue for the year were 950,000 because the base grew gradually, both numbers are right and answer different questions: the first about today's run rate, the second about what was actually earned.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "ARR ومقارنته بنفس النقطة من العام السابق", en: "ARR and its comparison with the same point last year" },
        code: `-- ARR inherits MRR's semi-additive behaviour: it is read at one snapshot date.
ARR :=
[MRR] * 12

-- Compare snapshot to snapshot. Shifting the whole period with DATEADD would compare
-- Sep 30 this year (last loaded) with Dec 31 last year in an incomplete year.
ARR Same Point Last Year :=
VAR SnapshotDate = [MRR Snapshot Date]
VAR PriorSnapshot = EOMONTH ( SnapshotDate, -12 )
RETURN
    IF (
        NOT ISBLANK ( SnapshotDate ),
        CALCULATE (
            [ARR],
            REMOVEFILTERS ( 'Date' ),
            'Date'[Date] = PriorSnapshot
        )
    )

ARR YoY % :=
DIVIDE ( [ARR] - [ARR Same Point Last Year], [ARR Same Point Last Year] )`,
        assumptions: [
          {
            ar: "المقياسان [MRR] و[MRR Snapshot Date] معرّفان كما في صفحة MRR، ويعيدان قيمة لقطة واحدة في نهاية الشهر لا مجموع الأشهر.",
            en: "The [MRR] and [MRR Snapshot Date] measures are defined as on the MRR page and return a single month-end snapshot, not a sum of months.",
          },
          {
            ar: "اصطلاح الضرب في 12 مقبول فقط إذا كان MRR نفسه مطبّعًا ولا يتضمن رسومًا لمرة واحدة أو استخدامًا متذبذبًا. الشركات ذات العقود السنوية قد تحسب ARR من قيمة العقد السنوية مباشرة.",
            en: "The multiply-by-12 convention is valid only if MRR itself is normalized and contains no one-off fees or volatile usage. Companies with annual contracts may compute ARR directly from annual contract value.",
          },
          {
            ar: "داخل CALCULATE يعيد [MRR Snapshot Date] حساب التاريخ في سياق اليوم المحدد، ولأن PriorSnapshot نهاية شهر فهو يعيد نفسه.",
            en: "Inside CALCULATE, [MRR Snapshot Date] is re-evaluated in the context of the pinned day, and because PriorSnapshot is a month-end it returns that same date.",
          },
        ],
        requires: ["[MRR]", "[MRR Snapshot Date]", "Date[Date]"],
      },
    ],
    model: [
      {
        table: "SubscriptionMonth",
        grain: { ar: "اشتراك واحد لكل نهاية شهر (لقطة)", en: "One row per subscription per month-end (snapshot)" },
        columns: ["SnapshotDate", "SubscriptionId", "CustomerId", "PlanId", "MRR", "CurrencyCode"],
        role: { ar: "مصدر MRR الذي يُشتق منه ARR", en: "Source of the MRR from which ARR is derived" },
      },
      {
        table: "MrrMovement",
        grain: { ar: "حركة واحدة لكل اشتراك لكل شهر ونوع حركة", en: "One row per subscription per month per movement type" },
        columns: ["MovementDate", "SubscriptionId", "MovementType", "MrrDelta"],
        role: { ar: "جسر حركة ARR بعد ضرب الحركات في 12", en: "ARR movement bridge after multiplying movements by 12" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "Quarter", "Year"],
        role: { ar: "يُربط بـ SnapshotDate ويحدد نقطة القراءة", en: "Related to SnapshotDate and defines the reading point" },
      },
    ],
    visuals: [
      {
        pattern: "kpi-card",
        why: {
          ar: "ARR رقم عنوان للإدارة العليا، يُعرض كبطاقة مع تاريخ اللقطة صراحة حتى لا يُقرأ كإيراد السنة.",
          en: "ARR is a headline number for senior management, shown as a card with the snapshot date stated explicitly so it is not read as annual revenue.",
        },
      },
      {
        pattern: "period-over-period",
        why: {
          ar: "اتجاه ARR ومقارنته بنفس النقطة من العام السابق هو المقياس المعتاد لنمو أعمال الاشتراكات.",
          en: "ARR's trend and its comparison with the same point last year is the usual measure of subscription business growth.",
        },
      },
      {
        pattern: "waterfall-variance",
        why: {
          ar: "جسر حركة ARR (جديد، توسّع، انكماش، إلغاء) يشرح سبب التغيّر بين لقطتين كما يقترح المرجع.",
          en: "The ARR movement bridge (new, expansion, contraction, churn) explains the change between two snapshots, as the reference suggests.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "الخلط بين ARR والإيراد السنوي المعترف به أو القيمة الإجمالية للعقد. ARR معدل لحظي، والإيراد المعترف به تدفق محاسبي، والقيمة الإجمالية للعقد تشمل كل سنوات العقد.",
        en: "Confusing ARR with recognized annual revenue or total contract value. ARR is a point-in-time rate, recognized revenue is an accounting flow, and total contract value covers every year of the contract.",
      },
      {
        ar: "جمع ARR عبر الأشهر أو الأرباع في جدول أو بطاقة سنوية. أربع لقطات ربعية مجموعة تعطي رقمًا أكبر بأربع مرات تقريبًا من ARR الحقيقي.",
        en: "Summing ARR across months or quarters in a table or year card. Four quarterly snapshots added together give roughly four times the real ARR.",
      },
      {
        ar: "مقارنة لقطة غير مكتملة بسنة كاملة عبر DATEADD على الفترة كلها. في سبتمبر يُقارن آخر يوم محمّل بـ 31 ديسمبر من العام الماضي بدل 30 سبتمبر منه.",
        en: "Comparing an incomplete snapshot with a full year via DATEADD over the whole period. In September the last loaded day gets compared with December 31 last year instead of September 30.",
      },
      {
        ar: "إدراج رسوم لمرة واحدة أو استخدام موسمي في MRR ثم ضربه في 12. أي تذبذب شهري يتضخم اثنتي عشرة مرة في ARR.",
        en: "Including one-off fees or seasonal usage in MRR and then multiplying by 12. Any monthly spike is amplified twelvefold in ARR.",
      },
    ],
    variants: [
      {
        label: { ar: "ARR من قيمة العقد السنوية", en: "ARR from annual contract value" },
        formula: "ARR = Sum of Annualized Contract Values of Active Contracts",
        difference: {
          ar: "يُبنى مباشرة من العقود لا من MRR. أدق في الأعمال المعتمدة على عقود سنوية متعددة الأسعار، لكنه يحتاج قواعد واضحة للعقود ذات الأسعار المتدرجة.",
          en: "Built directly from contracts rather than from MRR. More accurate for businesses on annual contracts with varied pricing, but it needs clear rules for contracts with stepped pricing.",
        },
      },
      {
        label: { ar: "معدل الإيراد السنوي الكلي", en: "Annual run rate (total revenue)" },
        formula: "Run Rate = Current Month Total Revenue x 12",
        difference: {
          ar: "يشمل كل الإيراد لا المتكرر فقط، فيتضمن الخدمات والرسوم لمرة واحدة. أوسع وأكثر تذبذبًا، ولا يجوز تسميته ARR.",
          en: "Includes all revenue, not just recurring, so it contains services and one-off fees. Broader and more volatile, and it should not be called ARR.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "في ظل اصطلاح ARR = MRR × 12، فإن نسبة نمو ARR بين لقطتين تساوي نسبة نمو MRR بينهما تمامًا.",
          en: "Under the convention ARR = MRR × 12, the growth rate of ARR between two snapshots equals the growth rate of MRR between them exactly.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "حساب ARR بضرب MRR في 12 اصطلاح شائع وليس معيارًا محاسبيًا، ولا يحل محل الإيراد المعترف به في القوائم المالية.",
          en: "Computing ARR as MRR times 12 is a common convention, not an accounting standard, and does not replace recognized revenue in financial statements.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "هل يُحسب ARR من MRR أو من قيمة العقود، وكيف تُعامل العقود متعددة السنوات والتسعير المتدرج — قرار داخلي يجب توثيقه.",
          en: "Whether ARR is derived from MRR or from contract values, and how multi-year contracts and stepped pricing are treated, is an internal decision that must be documented.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (MRR بقيمة 100,000) من المرجع وهي للتوضيح فقط.",
          en: "The example figures (MRR of 100,000) come from the reference and are for illustration only.",
        },
      },
    ],
    related: ["mrr", "nrr", "revenue-growth-rate"],
    exercise: {
      prompt: {
        ar: "MRR في نهاية الأرباع الأربعة لهذا العام: 80,000 ثم 86,000 ثم 91,000 ثم 95,000. وكان MRR في نهاية العام السابق 76,000. احسب ARR في نهاية العام ونسبة نموه السنوية، ثم احسب الرقم الذي يظهر لو جُمعت لقطات ARR الربعية في بطاقة السنة.",
        en: "MRR at the end of this year's four quarters: 80,000, then 86,000, then 91,000, then 95,000. MRR at the end of last year was 76,000. Compute year-end ARR and its annual growth, then compute the figure that appears if the quarterly ARR snapshots are summed on a year card.",
      },
      hint: {
        ar: "ARR لقطة: خذ آخر قيمة في الفترة فقط. قارن لقطة بلقطة.",
        en: "ARR is a snapshot: take only the last value in the period. Compare snapshot to snapshot.",
      },
      answer: {
        ar: "ARR نهاية العام = 95,000 × 12 = 1,140,000. ARR نهاية العام السابق = 76,000 × 12 = 912,000. النمو = (1,140,000 − 912,000) ÷ 912,000 = 25.0%. الجمع الخاطئ = (80,000 + 86,000 + 91,000 + 95,000) × 12 = 352,000 × 12 = 4,224,000، أي نحو 3.7 أضعاف الحقيقة. هذا ما يعنيه أن ARR شبه تجميعي.",
        en: "Year-end ARR = 95,000 × 12 = 1,140,000. Prior year-end ARR = 76,000 × 12 = 912,000. Growth = (1,140,000 − 912,000) ÷ 912,000 = 25.0%. The wrong sum = (80,000 + 86,000 + 91,000 + 95,000) × 12 = 352,000 × 12 = 4,224,000, about 3.7 times the truth. This is what it means for ARR to be semi-additive.",
      },
    },
    references: [
      {
        title: "EOMONTH function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/eomonth-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع تحديد نهاية الشهر نفسه قبل اثني عشر شهرًا لمقارنة لقطة بلقطة.",
          en: "Reference for finding the same month-end twelve months earlier to compare snapshot with snapshot.",
        },
      },
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع القسمة الآمنة في نسبة النمو حين لا توجد لقطة سابقة.",
          en: "Reference for safe division in the growth rate when no prior snapshot exists.",
        },
      },
    ],
  },

  {
    id: "churn-rate",
    slug: "churn-rate",
    name: "Customer Churn Rate",
    nameAr: "معدل فقدان العملاء",
    domains: ["it-saas", "banking"],
    category: { ar: "الاحتفاظ بالعملاء", en: "Customer retention" },
    difficulty: "intermediate",
    unit: { ar: "نسبة مئوية لكل فترة", en: "Percentage per period" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة العملاء الذين توقفوا عن الاشتراك خلال الفترة من بين العملاء الذين كانوا نشطين في بدايتها. العملاء الجدد خلال الفترة لا يدخلون في البسط ولا في المقام.",
      en: "The share of customers active at the start of a period who stopped subscribing during it. Customers acquired during the period enter neither the numerator nor the denominator.",
    },
    whyItMatters: {
      ar: "كل عميل يُفقد يجب تعويضه ببيع جديد بتكلفة اكتساب كاملة قبل تحقيق أي نمو. لذلك يحدد معدل الفقدان سقف النمو الممكن ويؤثر مباشرة في القيمة الدائمة للعميل.",
      en: "Every lost customer must be replaced by a new sale at full acquisition cost before any growth happens. Churn therefore sets the ceiling on achievable growth and directly drives customer lifetime value.",
    },
    interpretation: {
      ar: "معدل فقدان شهري 4% يعني أن 4 من كل 100 عميل كانوا في بداية الشهر لم يعودوا مشتركين في نهايته. المعدل الشهري لا يُضرب في 12 للحصول على السنوي: 4% شهريًا تعني أن نحو 61% فقط من عملاء أول السنة يبقون حتى نهايتها إن ثبت المعدل.",
      en: "A 4% monthly churn means 4 of every 100 customers present at the start of the month were no longer subscribed at its end. The monthly rate is not multiplied by 12 to get an annual one: 4% a month means only about 61% of the customers at the start of the year remain at its end if the rate holds.",
    },
    formula: "Customer Churn % = Customers Lost During Period / Customers at Start of Period x 100",
    numerator: {
      ar: "العملاء الذين كانوا نشطين في بداية الفترة وليسوا نشطين في نهايتها. يجب تحديد هل الإلغاء المعلن أم انتهاء الاشتراك دون تجديد هو لحظة الفقدان.",
      en: "Customers active at the start of the period who are not active at its end. Define whether an announced cancellation or an expiry without renewal marks the moment of loss.",
    },
    denominator: {
      ar: "العملاء النشطون في بداية الفترة فقط. إضافة العملاء الجدد إلى المقام تخفض المعدل زورًا في فترات النمو السريع.",
      en: "Customers active at the start of the period only. Adding new customers to the denominator falsely lowers the rate in periods of fast growth.",
    },
    timeGrain: {
      ar: "شهري عادة لاشتراكات الأفراد وسنوي للعقود المؤسسية. قارن دائمًا فترات بطول متساوٍ، ولا تقارن معدلًا شهريًا بآخر ربعي.",
      en: "Usually monthly for consumer subscriptions and annual for enterprise contracts. Always compare periods of equal length, never a monthly rate with a quarterly one.",
    },
    direction: {
      rising: {
        ar: "ارتفاع معدل الفقدان إشارة سلبية: مشكلة في المنتج أو السعر أو الخدمة أو في جودة العملاء المكتسبين حديثًا.",
        en: "Rising churn is a negative signal: a problem with the product, price, or service, or with the quality of recently acquired customers.",
      },
      falling: {
        ar: "انخفاضه إيجابي عادة، لكن تحقق من أنه لم يأتِ من تغيير تعريف الفقدان أو من تمديد فترة السماح قبل اعتبار العميل مفقودًا.",
        en: "A decline is usually positive, but confirm it did not come from changing the churn definition or extending the grace period before a customer counts as lost.",
      },
      caveat: {
        ar: "معدل فقدان العملاء يعامل العميل الصغير والكبير بالتساوي. فقدان عملاء صغار كثيرين قد يرفع المعدل بينما يبقى الإيراد سليمًا، والعكس صحيح؛ لذلك يُقرأ دائمًا مع فقدان الإيراد وNRR.",
        en: "Customer churn weighs a small and a large customer equally. Losing many small customers can raise the rate while revenue stays healthy, and vice versa; that is why it is always read with revenue churn and NRR.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "العملاء النشطون في بداية الشهر", en: "Customers active at start of month" }, value: "1,000" },
        { label: { ar: "العملاء المفقودون خلال الشهر", en: "Customers lost during the month" }, value: "40" },
      ],
      steps: [{ label: { ar: "معدل الفقدان", en: "Churn rate" }, expression: "40 ÷ 1,000 = 4.0%" }],
      result: { label: { ar: "معدل الفقدان الشهري", en: "Monthly churn rate" }, value: "4.0%" },
      reading: {
        ar: "أي عملاء جدد انضموا خلال الشهر لا يغيّرون هذا الرقم. لو انضم 150 عميلًا جديدًا فالقاعدة نمت، لكن 4% من العملاء القدامى ما زالوا يغادرون كل شهر، وهي مشكلة لا يخفيها النمو.",
        en: "Any new customers who joined during the month do not change this figure. If 150 new customers joined, the base grew, but 4% of existing customers are still leaving every month — a problem growth does not hide.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "معدل الفقدان من لقطات الاشتراك الشهرية", en: "Churn rate from monthly subscription snapshots" },
        code: `-- Start cohort = customers with MRR > 0 at the month-end before the period.
-- Lost = start-cohort customers with no MRR at the period's closing snapshot.
Customers at Start :=
VAR OpeningDate = EOMONTH ( MIN ( 'Date'[Date] ), -1 )
RETURN
    CALCULATE (
        DISTINCTCOUNT ( 'SubscriptionMonth'[CustomerId] ),
        REMOVEFILTERS ( 'Date' ),
        'Date'[Date] = OpeningDate,
        'SubscriptionMonth'[MRR] > 0
    )

Customers Lost :=
VAR OpeningDate = EOMONTH ( MIN ( 'Date'[Date] ), -1 )
VAR ClosingDate = [MRR Snapshot Date]
VAR StartSet =
    CALCULATETABLE (
        VALUES ( 'SubscriptionMonth'[CustomerId] ),
        REMOVEFILTERS ( 'Date' ),
        'Date'[Date] = OpeningDate,
        'SubscriptionMonth'[MRR] > 0
    )
VAR EndSet =
    CALCULATETABLE (
        VALUES ( 'SubscriptionMonth'[CustomerId] ),
        REMOVEFILTERS ( 'Date' ),
        'Date'[Date] = ClosingDate,
        'SubscriptionMonth'[MRR] > 0
    )
RETURN
    IF (
        ClosingDate > OpeningDate && NOT ISEMPTY ( StartSet ),
        COUNTROWS ( EXCEPT ( StartSet, EndSet ) ) + 0
    )

Customer Churn % :=
DIVIDE ( [Customers Lost], [Customers at Start] )`,
        assumptions: [
          {
            ar: "'SubscriptionMonth' لقطة في نهاية كل شهر كما في صفحة MRR، والعميل نشط إن كان لديه MRR موجب في اللقطة. العميل ذو الاشتراكات المتعددة يُعد مرة واحدة بفضل VALUES وDISTINCTCOUNT على CustomerId.",
            en: "'SubscriptionMonth' is a month-end snapshot as on the MRR page, and a customer is active if they have positive MRR in the snapshot. A customer with several subscriptions counts once thanks to VALUES and DISTINCTCOUNT on CustomerId.",
          },
          {
            ar: "العميل الذي غادر ثم عاد قبل نهاية الفترة لا يُحتسب مفقودًا في هذا التعريف. إن أرادت الشركة احتساب كل إلغاء فيجب البناء على جدول أحداث الإلغاء بدل مقارنة لقطتين.",
            en: "A customer who left and returned before period end is not counted as lost under this definition. If the company wants every cancellation counted, build on a cancellation-event table instead of comparing two snapshots.",
          },
          {
            ar: "مرشحات أبعاد العميل (الشريحة، المنطقة) تبقى فعّالة في البداية والنهاية معًا. هذا يفترض أن الشريحة سمة ثابتة للعميل؛ إن تغيّرت خلال الفترة فقد يظهر فقدان وهمي في شريحة ومكسب وهمي في أخرى.",
            en: "Customer dimension filters (segment, region) stay active at both start and end. This assumes segment is a stable customer attribute; if it changes within the period, phantom churn may appear in one segment and phantom gain in another.",
          },
          {
            ar: "[MRR Snapshot Date] معرّف في صفحة MRR ويعيد آخر لقطة ضمن الفترة، مقيّدة بآخر لقطة محمّلة.",
            en: "[MRR Snapshot Date] is defined on the MRR page and returns the last snapshot within the period, capped at the last loaded snapshot.",
          },
        ],
        requires: ["SubscriptionMonth[CustomerId]", "SubscriptionMonth[MRR]", "[MRR Snapshot Date]", "Date[Date]"],
      },
    ],
    model: [
      {
        table: "SubscriptionMonth",
        grain: { ar: "اشتراك واحد لكل نهاية شهر (لقطة)", en: "One row per subscription per month-end (snapshot)" },
        columns: ["SnapshotDate", "SubscriptionId", "CustomerId", "PlanId", "MRR"],
        role: { ar: "يحدد من كان نشطًا في بداية الفترة ونهايتها", en: "Determines who was active at the start and end of the period" },
      },
      {
        table: "Customer",
        grain: { ar: "عميل واحد لكل صف", en: "One row per customer" },
        columns: ["CustomerId", "Segment", "Region", "AcquisitionChannel", "CohortMonth"],
        role: { ar: "تحديد هوية العميل وتقسيم الفقدان حسب الشريحة وشهر الاكتساب", en: "Customer identity and churn segmentation by segment and acquisition month" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "Quarter", "Year"],
        role: { ar: "يُربط بـ SnapshotDate ويحدد حدود الفترة", en: "Related to SnapshotDate and defines period boundaries" },
      },
    ],
    visuals: [
      {
        pattern: "period-over-period",
        why: {
          ar: "اتجاه الفقدان شهرًا بشهر يكشف التدهور أو التحسن، ويمكن إضافة مصفوفة الأفواج (شهر الاكتساب × عمر العميل) كصفحة تفصيلية كما يقترح المرجع.",
          en: "The month-by-month churn trend reveals deterioration or improvement, and a cohort grid (acquisition month × customer age) can be added as a detail page, as the reference suggests.",
        },
      },
      {
        pattern: "decomposition-tree",
        why: {
          ar: "يفكك الفقدان حسب الشريحة والخطة والقناة لتحديد مجموعات العملاء المعرّضة للخطر.",
          en: "Breaks churn down by segment, plan, and channel to identify at-risk customer groups.",
        },
      },
      {
        pattern: "exception-table",
        why: {
          ar: "قائمة العملاء المفقودين أو المعرّضين للخطر مع قيمتهم هي ما يحتاجه فريق نجاح العملاء للتحرك.",
          en: "A list of lost or at-risk customers with their value is what the customer success team needs to act.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عدم تعريف هوية العميل: هل هو الحساب أم الشركة الأم أم مستخدم الدفع؟ دمج حسابين أو تقسيم حساب يخلق فقدانًا أو اكتسابًا وهميًا.",
        en: "Not defining customer identity: is it the account, the parent company, or the paying user? Merging two accounts or splitting one creates phantom churn or acquisition.",
      },
      {
        ar: "الخلط بين الإلغاء وانتهاء الاشتراك دون تجديد وإعادة التفعيل، أو عدم تثبيت حدود الفترة. كل شركة تحتاج قاعدة مكتوبة، مثل فترة سماح لفشل الدفع قبل اعتبار العميل مفقودًا.",
        en: "Mixing cancellations, expirations without renewal, and reactivations, or leaving period boundaries unfixed. Each company needs a written rule, such as a grace period for payment failures before a customer counts as lost.",
      },
      {
        ar: "الخلط بين فقدان العملاء وفقدان الإيراد. الأول يعد الرؤوس، والثاني يزن بالقيمة؛ فقدان عميل كبير واحد قد لا يظهر في الأول ويهز الثاني.",
        en: "Confusing customer churn with revenue churn. The first counts heads, the second weighs by value; losing one large customer may barely register in the first and shake the second.",
      },
      {
        ar: "تحويل المعدل الشهري إلى سنوي بضربه في 12. الصحيح 1 − (1 − المعدل الشهري)^12 إن ثبت المعدل، أو الأفضل قياسه مباشرة على فوج بداية السنة.",
        en: "Annualizing a monthly rate by multiplying by 12. The correct conversion is 1 − (1 − monthly rate)^12 if the rate holds, or better, measure it directly on the start-of-year cohort.",
      },
      {
        ar: "حساب متوسط المعدلات الشهرية للشرائح أو للأشهر. المعدل الإجمالي يُعاد حسابه من إجمالي المفقودين على إجمالي عملاء البداية.",
        en: "Averaging monthly rates across segments or months. The overall rate must be recomputed from total lost over total starting customers.",
      },
    ],
    variants: [
      {
        label: { ar: "فقدان الإيراد الإجمالي", en: "Gross revenue churn" },
        formula: "Gross Revenue Churn % = (Churned MRR + Contraction MRR) / Starting MRR x 100",
        difference: {
          ar: "يزن الفقدان بقيمة العميل ويضيف الانكماش. يعطي صورة مالية أدق، وقد يختلف كثيرًا عن فقدان العملاء عندما تتفاوت أحجام العملاء.",
          en: "Weights churn by customer value and adds contraction. Gives a more accurate financial picture and can differ sharply from customer churn when customer sizes vary.",
        },
      },
      {
        label: { ar: "الفقدان على متوسط العملاء", en: "Churn over average customers" },
        formula: "Churn % = Customers Lost / ((Customers at Start + Customers at End) / 2) x 100",
        difference: {
          ar: "يُستخدم أحيانًا في الفترات الطويلة ذات النمو السريع. أقل حساسية لحجم البداية، لكنه يمزج العملاء الجدد في المقام فلا يمكن مقارنته مع الصيغة القياسية.",
          en: "Sometimes used over long, fast-growing periods. Less sensitive to the starting size, but it mixes new customers into the denominator, so it is not comparable with the standard formula.",
        },
      },
      {
        label: { ar: "معدل الاحتفاظ بالعملاء", en: "Customer retention rate" },
        formula: "Retention % = 1 - Customer Churn %",
        difference: {
          ar: "الوجه المكمّل للمؤشر نفسه، مفضّل في عروض الإدارة لأنه يرتفع مع التحسّن.",
          en: "The complementary view of the same metric, preferred in management presentations because it rises as things improve.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "إن ثبت معدل الفقدان الشهري عند c، فإن نسبة عملاء البداية الباقين بعد 12 شهرًا هي (1 − c)^12، وليست 1 − 12c.",
          en: "If monthly churn holds at c, the share of starting customers remaining after 12 months is (1 − c)^12, not 1 − 12c.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "القسمة على عملاء بداية الفترة واستبعاد العملاء الجدد من البسط والمقام هو الشكل الأكثر شيوعًا للصيغة.",
          en: "Dividing by customers at the start of the period and excluding new customers from both numerator and denominator is the most common form of the formula.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "تعريف هوية العميل، ولحظة الفقدان، وفترة السماح لفشل الدفع، ومعاملة إعادة التفعيل — كلها قواعد داخلية تختلف بين الشركات.",
          en: "Customer identity, the moment of loss, the grace period for payment failure, and the treatment of reactivations are internal rules that differ between companies.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (40 من 1,000) من المرجع وهي للتوضيح فقط وليست معيارًا لأي قطاع.",
          en: "The example figures (40 of 1,000) come from the reference and are for illustration only, not a benchmark for any sector.",
        },
      },
    ],
    related: ["nrr", "mrr", "ltv", "cac"],
    exercise: {
      prompt: {
        ar: "بدأت شركة الشهر بـ 2,500 عميل نشط. خلال الشهر ألغى 75 منهم اشتراكهم، وانضم 120 عميلًا جديدًا. احسب معدل الفقدان الشهري، ثم احسب النتيجة الخاطئة لو قُسم على عملاء نهاية الشهر، ثم قدّر نسبة عملاء البداية الباقين بعد سنة لو ثبت المعدل.",
        en: "A company started the month with 2,500 active customers. During the month 75 of them cancelled and 120 new customers joined. Compute monthly churn, then the wrong result from dividing by end-of-month customers, then estimate the share of starting customers remaining after a year if the rate holds.",
      },
      hint: {
        ar: "العملاء الجدد لا يدخلون في الصيغة. للسنة استخدم الضرب المتكرر لا الضرب في 12.",
        en: "New customers do not enter the formula. For the year, compound the rate rather than multiplying by 12.",
      },
      answer: {
        ar: "الفقدان = 75 ÷ 2,500 = 3.0%. عملاء النهاية = 2,500 − 75 + 120 = 2,545، والقسمة الخاطئة 75 ÷ 2,545 = 2.95% تجمّل الرقم بفضل النمو. بعد سنة يبقى 0.97^12 ≈ 0.694، أي نحو 69.4% من عملاء البداية، فالفقدان السنوي نحو 30.6% لا 36% كما يوحي الضرب في 12.",
        en: "Churn = 75 ÷ 2,500 = 3.0%. End customers = 2,500 − 75 + 120 = 2,545, and the wrong division 75 ÷ 2,545 = 2.95% flatters the figure thanks to growth. After a year 0.97^12 ≈ 0.694 remains, about 69.4% of starting customers, so annual churn is about 30.6%, not the 36% that multiplying by 12 suggests.",
      },
    },
    references: [
      {
        title: "EXCEPT function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/except-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع طرح مجموعة عملاء النهاية من مجموعة عملاء البداية لاستخراج المفقودين.",
          en: "Reference for subtracting the end customer set from the start set to find lost customers.",
        },
      },
      {
        title: "CALCULATETABLE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/calculatetable-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع بناء مجموعتي العملاء في تاريخي لقطة محددين.",
          en: "Reference for building the two customer sets at specific snapshot dates.",
        },
      },
    ],
  },

  {
    id: "nrr",
    slug: "nrr",
    name: "Net Revenue Retention",
    acronym: "NRR",
    nameAr: "صافي الاحتفاظ بالإيراد",
    domains: ["it-saas"],
    category: { ar: "الاحتفاظ بالعملاء", en: "Customer retention" },
    difficulty: "advanced",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "مقدار الإيراد المتكرر الذي احتفظت به قاعدة العملاء الموجودة في بداية الفترة بعد احتساب التوسّع والانكماش والإلغاء. إيراد العملاء الجدد خلال الفترة مستبعد تمامًا.",
      en: "How much recurring revenue the customer base present at the start of the period retained after expansion, contraction, and churn. Revenue from customers acquired during the period is excluded entirely.",
    },
    whyItMatters: {
      ar: "يجيب عن سؤال واحد: هل ينمو العملاء الحاليون أم ينكمشون؟ NRR فوق 100% يعني أن الشركة تنمو حتى لو توقفت عن اكتساب أي عميل جديد، وهذا يغيّر اقتصاديات النمو كلها.",
      en: "It answers one question: are existing customers growing or shrinking? An NRR above 100% means the company grows even if it stops acquiring new customers, which changes the whole economics of growth.",
    },
    interpretation: {
      ar: "NRR بنسبة 100% يعني أن التوسّع عوّض الانكماش والإلغاء تمامًا. 110% يعني أن كل 100 من إيراد البداية أصبحت 110 من نفس العملاء. قد يخفي الرقم نفسه قصتين مختلفتين: فقدان قليل وتوسّع قليل، أو فقدان كبير يعوّضه توسّع كبير عند قلة من العملاء.",
      en: "An NRR of 100% means expansion exactly offset contraction and churn. 110% means every 100 of starting revenue became 110 from the same customers. The same figure can hide two different stories: little churn and little expansion, or heavy churn offset by large expansion from a few customers.",
    },
    formula: "NRR % = (Starting Recurring Revenue + Expansion - Contraction - Churn) / Starting Recurring Revenue x 100",
    numerator: {
      ar: "الإيراد المتكرر لفوج عملاء البداية في نهاية الفترة، أي إيراد البداية زائد التوسّع ناقص الانكماش والإلغاء لنفس العملاء.",
      en: "The recurring revenue of the starting customer cohort at period end: starting revenue plus expansion minus contraction and churn for the same customers.",
    },
    denominator: {
      ar: "الإيراد المتكرر لنفس الفوج في بداية الفترة.",
      en: "The recurring revenue of that same cohort at the start of the period.",
    },
    timeGrain: {
      ar: "يُقاس غالبًا على نافذة اثني عشر شهرًا، وأحيانًا شهريًا. ثبّت طول النافذة، ولا تقارن NRR شهريًا بآخر سنوي.",
      en: "Usually measured over a twelve-month window, sometimes monthly. Keep the window length fixed and never compare a monthly NRR with an annual one.",
    },
    direction: {
      rising: {
        ar: "ارتفاع NRR يعني أن العملاء الحاليين يوسّعون استخدامهم أكثر مما يقلصونه أو يغادرون.",
        en: "Rising NRR means existing customers expand more than they shrink or leave.",
      },
      falling: {
        ar: "انخفاضه يعني ضعف التوسّع أو تزايد الانكماش والإلغاء. افصل المكونات الثلاثة قبل الحكم.",
        en: "A decline means weaker expansion or growing contraction and churn. Separate the three components before judging.",
      },
      caveat: {
        ar: "NRR مرتفع قد يخفي فقدانًا مرتفعًا للعملاء الصغار يعوّضه توسّع عدد قليل من الكبار، وهو تركّز خطر. اقرأه دائمًا مع GRR الذي يستبعد التوسّع.",
        en: "A high NRR can hide heavy churn among small customers offset by expansion at a few large ones — a concentration risk. Always read it with GRR, which excludes expansion.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "الإيراد المتكرر في البداية", en: "Starting recurring revenue" }, value: "100,000" },
        { label: { ar: "التوسّع", en: "Expansion" }, value: "15,000" },
        { label: { ar: "الانكماش", en: "Contraction" }, value: "5,000" },
        { label: { ar: "الإلغاء", en: "Churn" }, value: "10,000" },
      ],
      steps: [
        { label: { ar: "إيراد الفوج في النهاية", en: "Cohort revenue at end" }, expression: "100,000 + 15,000 − 5,000 − 10,000 = 100,000" },
        { label: { ar: "NRR", en: "NRR" }, expression: "100,000 ÷ 100,000 = 100%" },
        { label: { ar: "GRR للمقارنة", en: "GRR for comparison" }, expression: "(100,000 − 5,000 − 10,000) ÷ 100,000 = 85%" },
      ],
      result: { label: { ar: "صافي الاحتفاظ بالإيراد", en: "Net revenue retention" }, value: "100%" },
      reading: {
        ar: "NRR بنسبة 100% يبدو مستقرًا، لكن GRR بنسبة 85% يكشف أن 15% من إيراد البداية غادر أو انكمش، وأن التوسّع وحده غطّى الفجوة. إن توقف التوسّع يومًا، يظهر الفقدان الحقيقي كاملًا.",
        en: "An NRR of 100% looks stable, but a GRR of 85% reveals that 15% of starting revenue left or shrank and expansion alone covered the gap. If expansion ever stops, the real loss shows in full.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "NRR وGRR على فوج البداية من لقطات MRR", en: "NRR and GRR on the starting cohort from MRR snapshots" },
        code: `-- Cohort = customers with MRR > 0 at the month-end before the window starts.
-- Put a 12-month window on the Date filter (e.g. a rolling-12 slicer or a year).
NRR % :=
VAR OpeningDate = EOMONTH ( MIN ( 'Date'[Date] ), -1 )
VAR ClosingDate = [MRR Snapshot Date]
VAR Cohort =
    CALCULATETABLE (
        VALUES ( 'SubscriptionMonth'[CustomerId] ),
        REMOVEFILTERS ( 'Date' ),
        'Date'[Date] = OpeningDate,
        'SubscriptionMonth'[MRR] > 0
    )
VAR StartingMRR =
    CALCULATE (
        SUM ( 'SubscriptionMonth'[MRR] ),
        REMOVEFILTERS ( 'Date' ),
        'Date'[Date] = OpeningDate,
        Cohort
    )
-- New customers are excluded because only cohort members are kept.
VAR EndingMRR =
    CALCULATE (
        SUM ( 'SubscriptionMonth'[MRR] ),
        REMOVEFILTERS ( 'Date' ),
        'Date'[Date] = ClosingDate,
        Cohort
    )
RETURN
    IF ( ClosingDate > OpeningDate, DIVIDE ( EndingMRR, StartingMRR ) )

-- GRR caps each customer at their starting MRR, so expansion cannot offset losses.
GRR % :=
VAR OpeningDate = EOMONTH ( MIN ( 'Date'[Date] ), -1 )
VAR ClosingDate = [MRR Snapshot Date]
VAR Cohort =
    CALCULATETABLE (
        VALUES ( 'SubscriptionMonth'[CustomerId] ),
        REMOVEFILTERS ( 'Date' ),
        'Date'[Date] = OpeningDate,
        'SubscriptionMonth'[MRR] > 0
    )
VAR Retained =
    SUMX (
        Cohort,
        VAR StartC =
            CALCULATE (
                SUM ( 'SubscriptionMonth'[MRR] ),
                REMOVEFILTERS ( 'Date' ),
                'Date'[Date] = OpeningDate
            )
        VAR EndC =
            CALCULATE (
                SUM ( 'SubscriptionMonth'[MRR] ),
                REMOVEFILTERS ( 'Date' ),
                'Date'[Date] = ClosingDate
            ) + 0
        RETURN
            MIN ( StartC, EndC )
    )
VAR StartingMRR =
    SUMX (
        Cohort,
        CALCULATE (
            SUM ( 'SubscriptionMonth'[MRR] ),
            REMOVEFILTERS ( 'Date' ),
            'Date'[Date] = OpeningDate
        )
    )
RETURN
    IF ( ClosingDate > OpeningDate, DIVIDE ( Retained, StartingMRR ) )`,
        assumptions: [
          {
            ar: "'SubscriptionMonth' لقطة شهرية مطبّعة كما في صفحة MRR، و[MRR Snapshot Date] معرّف هناك ويعيد لقطة إقفال النافذة.",
            en: "'SubscriptionMonth' is the normalized monthly snapshot from the MRR page, and [MRR Snapshot Date] is defined there and returns the window's closing snapshot.",
          },
          {
            ar: "النافذة تُحدد بمرشح التاريخ: اختيار سنة كاملة يعطي NRR السنوي بين 31 ديسمبر السابق ونهاية السنة. اختيار شهر واحد يعطي NRR الشهري. لا تقارن بين الاثنين.",
            en: "The window is set by the date filter: selecting a full year gives annual NRR between the previous December 31 and year-end. Selecting one month gives monthly NRR. Never compare the two.",
          },
          {
            ar: "الحساب على مستوى العميل: عميل غيّر خطته يبقى في الفوج وتظهر الترقية كتوسّع. في SUMX يحدث انتقال السياق لكل عميل عبر CALCULATE.",
            en: "The calculation is at customer level: a customer who changed plan stays in the cohort and the upgrade shows as expansion. Inside SUMX, CALCULATE performs context transition for each customer.",
          },
          {
            ar: "GRR هنا يحد كل عميل بإيراد بدايته، وهو يطابق صيغة (البداية − الانكماش − الإلغاء) ÷ البداية حين تُحسب الحركات صافية لكل عميل على النافذة كاملة.",
            en: "GRR here caps each customer at their starting revenue, which matches (Start − Contraction − Churn) ÷ Start when movements are netted per customer over the whole window.",
          },
        ],
        requires: ["SubscriptionMonth[CustomerId]", "SubscriptionMonth[MRR]", "[MRR Snapshot Date]", "Date[Date]"],
      },
    ],
    model: [
      {
        table: "SubscriptionMonth",
        grain: { ar: "اشتراك واحد لكل نهاية شهر (لقطة)", en: "One row per subscription per month-end (snapshot)" },
        columns: ["SnapshotDate", "SubscriptionId", "CustomerId", "PlanId", "MRR"],
        role: { ar: "يحدد الفوج ويعطي إيراده في البداية والنهاية", en: "Defines the cohort and gives its revenue at start and end" },
      },
      {
        table: "MrrMovement",
        grain: { ar: "حركة واحدة لكل اشتراك لكل شهر ونوع حركة", en: "One row per subscription per month per movement type" },
        columns: ["MovementDate", "CustomerId", "MovementType", "MrrDelta"],
        role: { ar: "يغذي جسر التوسّع والانكماش والإلغاء للعرض", en: "Feeds the expansion, contraction, and churn bridge for display" },
      },
      {
        table: "Customer",
        grain: { ar: "عميل واحد لكل صف", en: "One row per customer" },
        columns: ["CustomerId", "Segment", "CohortMonth", "Region"],
        role: { ar: "تقسيم NRR حسب الشريحة وفوج الاكتساب", en: "Segments NRR by segment and acquisition cohort" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "Year"],
        role: { ar: "يحدد نافذة القياس وتاريخي الافتتاح والإقفال", en: "Defines the measurement window and the opening and closing dates" },
      },
    ],
    visuals: [
      {
        pattern: "period-over-period",
        why: {
          ar: "اتجاه NRR لنافذة ثابتة الطول يكشف تحسّن أو تدهور قدرة الشركة على تنمية عملائها، ويمكن تقسيمه حسب فوج الاكتساب كما يقترح المرجع.",
          en: "The NRR trend over a fixed-length window shows whether the company is getting better or worse at growing its customers, and can be split by acquisition cohort as the reference suggests.",
        },
      },
      {
        pattern: "waterfall-variance",
        why: {
          ar: "جسر إيراد الفوج من البداية إلى النهاية عبر التوسّع والانكماش والإلغاء يشرح كيف تشكّل الرقم.",
          en: "The cohort revenue bridge from start to end through expansion, contraction, and churn explains how the figure was formed.",
        },
      },
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "عرض NRR بجانب GRR يمنع أن يخفي التوسّع فقدانًا مرتفعًا.",
          en: "Showing NRR next to GRR prevents expansion from hiding high churn.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "إدخال إيراد العملاء الجدد في البسط. هذا يحوّل NRR إلى نمو MRR الإجمالي ويرفعه بشكل زائف، وهو أشيع خطأ في هذا المؤشر.",
        en: "Including new-customer revenue in the numerator. That turns NRR into total MRR growth and inflates it falsely — the most common mistake with this metric.",
      },
      {
        ar: "عدم تثبيت نافذة القياس. NRR الشهري والسنوي رقمان مختلفان تمامًا، وتبديل النافذة بين تقرير وآخر يجعل المقارنة بلا معنى.",
        en: "Not fixing the measurement window. Monthly and annual NRR are entirely different numbers, and switching windows between reports makes comparison meaningless.",
      },
      {
        ar: "حساب NRR على مستوى الاشتراك بدل العميل. عميل ألغى خطة وانتقل لأخرى يظهر كإلغاء واكتساب جديد، فينخفض NRR زورًا.",
        en: "Computing NRR at subscription level instead of customer level. A customer who cancelled one plan and moved to another looks like churn plus a new acquisition, falsely lowering NRR.",
      },
      {
        ar: "حساب متوسط NRR لعدة أفواج أو أشهر. المعدل الإجمالي يُعاد حسابه من مجموع إيراد النهاية على مجموع إيراد البداية.",
        en: "Averaging NRR across cohorts or months. The overall rate must be recomputed from total ending revenue over total starting revenue.",
      },
      {
        ar: "خلط أثر سعر الصرف أو رفع الأسعار العام بالتوسّع الحقيقي. رفع سعر شامل يرفع NRR دون أي زيادة في الاستخدام، ويجب فصله في الجسر.",
        en: "Mixing exchange-rate effects or blanket price increases with real expansion. A general price rise lifts NRR with no increase in usage and should be shown separately in the bridge.",
      },
    ],
    variants: [
      {
        label: { ar: "الاحتفاظ الإجمالي بالإيراد", en: "Gross revenue retention (GRR)" },
        formula: "GRR % = (Starting Recurring Revenue - Contraction - Churn) / Starting Recurring Revenue x 100",
        difference: {
          ar: "يستبعد التوسّع فلا يتجاوز 100% أبدًا. يقيس قدرة الاحتفاظ وحدها دون أن يغطيها البيع الإضافي.",
          en: "Excludes expansion, so it can never exceed 100%. Measures retention alone without upsell covering for it.",
        },
      },
      {
        label: { ar: "NRR الفوجي حسب شهر الاكتساب", en: "Cohort NRR by acquisition month" },
        formula: "NRR(cohort, month n) = Cohort MRR at Month n / Cohort MRR at Month 0 x 100",
        difference: {
          ar: "يتتبع كل فوج اكتساب عبر عمره بدل نافذة تقويمية. يكشف هل الأفواج الحديثة أضعف من القديمة، لكنه يحتاج مصفوفة لا رقمًا واحدًا.",
          en: "Tracks each acquisition cohort across its lifetime rather than over a calendar window. Reveals whether recent cohorts are weaker than older ones, but needs a grid rather than a single number.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "GRR لا يتجاوز NRR أبدًا ولا يتجاوز 100%، لأنه الصيغة نفسها بعد حذف التوسّع غير السالب.",
          en: "GRR can never exceed NRR nor 100%, because it is the same formula with the non-negative expansion term removed.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "قياس NRR على نافذة اثني عشر شهرًا لفوج العملاء الموجودين في بدايتها هو الشكل الأكثر شيوعًا في تقارير SaaS.",
          en: "Measuring NRR over a twelve-month window for the customers present at its start is the most common form in SaaS reporting.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "طول النافذة، ومعاملة العملاء المُعاد تفعيلهم، وفصل أثر الأسعار وسعر الصرف قرارات داخلية يجب توثيقها.",
          en: "Window length, the treatment of reactivated customers, and separating price and exchange-rate effects are internal decisions that must be documented.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (100,000 وتوسّع 15,000 وانكماش 5,000 وإلغاء 10,000) من المرجع وهي للتوضيح فقط.",
          en: "The example figures (100,000 with 15,000 expansion, 5,000 contraction, and 10,000 churn) come from the reference and are for illustration only.",
        },
      },
    ],
    related: ["churn-rate", "mrr", "arr", "ltv"],
    exercise: {
      prompt: {
        ar: "فوج عملاء بدأ السنة بإيراد متكرر 250,000. خلال السنة توسّع بمقدار 30,000، وانكمش بمقدار 8,000، وأُلغي منه 12,000. كما جاء إيراد جديد 40,000 من عملاء انضموا خلال السنة. احسب NRR وGRR، ثم احسب الرقم الخاطئ لو أُدخل إيراد العملاء الجدد.",
        en: "A customer cohort started the year with recurring revenue of 250,000. During the year it expanded by 30,000, contracted by 8,000, and churned 12,000. New revenue of 40,000 also came from customers who joined during the year. Compute NRR and GRR, then the wrong figure if new-customer revenue is included.",
      },
      hint: {
        ar: "العملاء الجدد ليسوا في الفوج. GRR يحذف التوسّع.",
        en: "New customers are not in the cohort. GRR drops expansion.",
      },
      answer: {
        ar: "NRR = (250,000 + 30,000 − 8,000 − 12,000) ÷ 250,000 = 260,000 ÷ 250,000 = 104%. GRR = (250,000 − 8,000 − 12,000) ÷ 250,000 = 230,000 ÷ 250,000 = 92%. إدخال العملاء الجدد يعطي 300,000 ÷ 250,000 = 120%، وهو نمو MRR الإجمالي لا الاحتفاظ. الفجوة بين 104% و92% تعني أن التوسّع يغطي فقدانًا قدره 8% من إيراد البداية.",
        en: "NRR = (250,000 + 30,000 − 8,000 − 12,000) ÷ 250,000 = 260,000 ÷ 250,000 = 104%. GRR = (250,000 − 8,000 − 12,000) ÷ 250,000 = 230,000 ÷ 250,000 = 92%. Including new customers gives 300,000 ÷ 250,000 = 120%, which is total MRR growth, not retention. The gap between 104% and 92% means expansion is covering a loss of 8% of starting revenue.",
      },
    },
    references: [
      {
        title: "CALCULATETABLE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/calculatetable-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع بناء فوج العملاء في تاريخ الافتتاح واستخدامه مرشحًا في تاريخ الإقفال.",
          en: "Reference for building the customer cohort at the opening date and using it as a filter at the closing date.",
        },
      },
      {
        title: "SUMX function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/sumx-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع التكرار على عملاء الفوج لحد إيراد كل عميل في حساب GRR.",
          en: "Reference for iterating over cohort customers to cap each one's revenue in the GRR calculation.",
        },
      },
    ],
  },

  {
    id: "availability",
    slug: "availability",
    name: "Uptime / Availability",
    nameAr: "نسبة التوفر",
    domains: ["it-saas"],
    category: { ar: "موثوقية الخدمة", en: "Service reliability" },
    difficulty: "intermediate",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة الوقت الذي كانت فيه الخدمة متاحة من إجمالي الوقت المؤهل للقياس، وفق اتفاقية القياس المعتمدة. الوقت المؤهل هو وقت القياس بعد استبعاد ما تسمح الاتفاقية باستبعاده، مثل الصيانة المجدولة المعلنة.",
      en: "The share of eligible service time during which the service was available, under the agreed measurement agreement. Eligible time is the measurement time after removing what the agreement allows, such as announced scheduled maintenance.",
    },
    whyItMatters: {
      ar: "هو الالتزام الذي يقرؤه العميل في العقد، وغالبًا ترتبط به تعويضات مالية عند الإخلال. الفرق بين 99.9% و99.5% يبدو صغيرًا، لكنه في شهر من 720 ساعة هو الفرق بين 43 دقيقة و3.6 ساعات من التوقف.",
      en: "It is the commitment the customer reads in the contract, often tied to service credits when breached. The difference between 99.9% and 99.5% looks small, but in a 720-hour month it is the difference between 43 minutes and 3.6 hours of downtime.",
    },
    interpretation: {
      ar: "توفر بنسبة 99.9% في شهر من 720 ساعة مؤهلة يعني توقفًا مسموحًا قدره 0.72 ساعة، أي 43.2 دقيقة. الأجدى قراءة المؤشر كميزانية أخطاء: كم دقيقة توقف متبقية قبل الإخلال بالهدف هذا الشهر؟",
      en: "99.9% availability over 720 eligible hours means an allowance of 0.72 hours, or 43.2 minutes, of downtime. It is more useful read as an error budget: how many minutes of downtime remain before the target is breached this month?",
    },
    formula: "Availability % = (Eligible Service Time - Downtime) / Eligible Service Time x 100",
    numerator: {
      ar: "الوقت المؤهل ناقص وقت التوقف ضمنه. التوقف يُحسب مرة واحدة حتى لو تداخلت عدة حوادث في الفترة نفسها.",
      en: "Eligible time minus downtime within it. Downtime counts once even if several incidents overlap in the same interval.",
    },
    denominator: {
      ar: "الوقت الكلي للفترة ناقص الاستثناءات المتفق عليها، مثل نوافذ الصيانة المعلنة مسبقًا.",
      en: "Total period time minus the agreed exclusions, such as pre-announced maintenance windows.",
    },
    timeGrain: {
      ar: "شهري عادة لأنه أفق اتفاقيات مستوى الخدمة، مع متابعة يومية لميزانية الأخطاء. الربع والسنة يُعاد حسابهما من الدقائق لا من متوسط النسب الشهرية.",
      en: "Usually monthly, matching the SLA horizon, with daily tracking of the error budget. Quarters and years are recomputed from minutes, not from averaging monthly percentages.",
    },
    direction: {
      rising: {
        ar: "ارتفاع التوفر يعني توقفًا أقل أو أقصر. تحقق من أن التحسّن حقيقي لا ناتج عن توسيع الاستثناءات أو تغيير مصدر المراقبة.",
        en: "Rising availability means less or shorter downtime. Confirm the improvement is real and not from widening exclusions or changing the monitoring source.",
      },
      falling: {
        ar: "انخفاضه يعني حوادث أكثر أو أطول. اربطه بـ MTTR وعدد الحوادث لمعرفة أيهما السبب.",
        en: "A decline means more or longer incidents. Link it to MTTR and incident count to see which is the cause.",
      },
      caveat: {
        ar: "كل رقم تسعة إضافي أغلى بكثير من سابقه. هدف أعلى مما يحتاجه العميل يستهلك موارد هندسية كان يمكن توجيهها للمنتج. والنسبة 100% الدائمة قد تعني أن المراقبة لا ترى الأعطال.",
        en: "Each additional nine costs far more than the one before. A target higher than customers need consumes engineering resources that could go to the product. A permanent 100% may mean monitoring is not seeing failures.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "الساعات المؤهلة في الشهر", en: "Eligible hours in the month" }, value: "720" },
        { label: { ar: "ساعات التوفر", en: "Available hours" }, value: "719.28" },
      ],
      steps: [
        { label: { ar: "وقت التوقف", en: "Downtime" }, expression: "720 − 719.28 = 0.72 h = 43.2 min" },
        { label: { ar: "التوفر", en: "Availability" }, expression: "719.28 ÷ 720 = 99.9%" },
      ],
      result: { label: { ar: "نسبة التوفر الشهرية", en: "Monthly availability" }, value: "99.9%" },
      reading: {
        ar: "43.2 دقيقة فقط من التوقف كانت كافية للوصول إلى 99.9% بالضبط. لو كان الهدف التعاقدي 99.9%، فالميزانية استُهلكت بالكامل ولا مجال لأي حادث إضافي هذا الشهر.",
        en: "Just 43.2 minutes of downtime was enough to land exactly on 99.9%. If the contractual target is 99.9%, the budget is fully consumed and there is no room for another incident this month.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "التوفر وميزانية الأخطاء من دقائق الخدمة اليومية", en: "Availability and error budget from daily service minutes" },
        code: `-- Build from minutes, never from row-level percentages.
Eligible Minutes :=
SUM ( 'ServiceDay'[EligibleMinutes] )

Downtime Minutes :=
SUM ( 'ServiceDay'[DowntimeMinutes] )

Availability % :=
DIVIDE ( [Eligible Minutes] - [Downtime Minutes], [Eligible Minutes] )

-- Allowed downtime depends on each service's own target, so iterate per service.
Allowed Downtime Minutes :=
SUMX (
    VALUES ( 'Service'[ServiceId] ),
    [Eligible Minutes]
        * ( 1 - CALCULATE ( MAX ( 'Service'[TargetAvailability] ) ) )
)

Error Budget Remaining Minutes :=
[Allowed Downtime Minutes] - [Downtime Minutes]

Target Availability % :=
DIVIDE ( [Eligible Minutes] - [Allowed Downtime Minutes], [Eligible Minutes] )`,
        assumptions: [
          {
            ar: "'ServiceDay' بحبيبية خدمة واحدة لكل يوم. EligibleMinutes مستبعد منها مسبقًا نوافذ الصيانة المعتمدة، وDowntimeMinutes محسوبة في ETL كاتحاد فترات الحوادث (بلا تكرار عند التداخل) ومقسومة على حدود الأيام.",
            en: "'ServiceDay' is at one row per service per day. EligibleMinutes already excludes approved maintenance windows, and DowntimeMinutes is computed in ETL as the union of incident intervals (no double counting on overlap) split at day boundaries.",
          },
          {
            ar: "مصدر التوقف هو المراقبة الخارجية المتفق عليها في الاتفاقية، لا تذاكر الحوادث وحدها. الحادث الجزئي (تدهور لا توقف) يُعامل وفق قاعدة الأثر المعتمدة.",
            en: "Downtime comes from the monitoring source agreed in the SLA, not from incident tickets alone. A partial incident (degradation rather than outage) is treated under the agreed impact rule.",
          },
          {
            ar: "'Service'[TargetAvailability] مخزنة ككسر عشري مثل 0.999. داخل SUMX تحدث CALCULATE انتقال السياق فتقرأ هدف الخدمة الحالية لا أعلى هدف بين كل الخدمات.",
            en: "'Service'[TargetAvailability] is stored as a decimal such as 0.999. Inside SUMX, CALCULATE performs context transition so it reads the current service's target rather than the maximum across all services.",
          },
          {
            ar: "التوفر عبر عدة خدمات هنا مرجّح بالوقت المؤهل. هذا لا يساوي توفر رحلة عميل تعتمد على كل الخدمات معًا.",
            en: "Availability across several services here is weighted by eligible time. It is not the availability of a customer journey that depends on all services at once.",
          },
        ],
        requires: [
          "ServiceDay[EligibleMinutes]",
          "ServiceDay[DowntimeMinutes]",
          "Service[ServiceId]",
          "Service[TargetAvailability]",
        ],
      },
    ],
    model: [
      {
        table: "ServiceDay",
        grain: { ar: "خدمة واحدة لكل يوم", en: "One row per service per day" },
        columns: ["Date", "ServiceId", "EligibleMinutes", "DowntimeMinutes", "MaintenanceMinutes"],
        role: { ar: "جدول الحقائق الأساسي: البسط والمقام بالدقائق", en: "Primary fact table: numerator and denominator in minutes" },
      },
      {
        table: "Incident",
        grain: { ar: "حادث واحد لكل صف", en: "One row per incident" },
        columns: ["IncidentId", "ServiceId", "Severity", "StartedAt", "RestoredAt", "ImpactType"],
        role: { ar: "مصدر الخط الزمني للحوادث وتفسير التوقف", en: "Source of the incident timeline and the explanation of downtime" },
      },
      {
        table: "Service",
        grain: { ar: "خدمة واحدة لكل صف", en: "One row per service" },
        columns: ["ServiceId", "ServiceName", "Tier", "TargetAvailability"],
        role: { ar: "الهدف التعاقدي لكل خدمة ومصفوفة الخدمات", en: "Contractual target per service and the service matrix" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "Year"],
        role: { ar: "يُربط بـ ServiceDay[Date] ويحدد نافذة القياس", en: "Related to ServiceDay[Date] and defines the measurement window" },
      },
    ],
    visuals: [
      {
        pattern: "actual-vs-target",
        why: {
          ar: "التوفر يُقرأ دائمًا مقابل هدف تعاقدي لكل خدمة، ومعه ميزانية الأخطاء المتبقية.",
          en: "Availability is always read against a contractual target per service, with the remaining error budget alongside.",
        },
      },
      {
        pattern: "heatmap-calendar",
        why: {
          ar: "خريطة حرارية بالأيام تعرض الخط الزمني للتوقف وتكشف أنماطًا مثل أعطال أيام النشر.",
          en: "A daily heatmap shows the downtime timeline and reveals patterns such as failures on release days.",
        },
      },
      {
        pattern: "exception-table",
        why: {
          ar: "مصفوفة الخدمات التي أخلّت بهدفها أو استهلكت معظم ميزانيتها، كما يقترح المرجع.",
          en: "A service matrix of those that breached their target or consumed most of their budget, as the reference suggests.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عدم تعريف استثناءات الصيانة ومصدر المراقبة وأثر الحادث ونافذة القياس. أي منها يغيّر النتيجة، واختلافها بين التقرير والعقد يُفقد التقرير قيمته.",
        en: "Not defining maintenance exclusions, the monitoring source, incident impact, and the measurement window. Each one changes the result, and a mismatch between report and contract makes the report worthless.",
      },
      {
        ar: "جمع مدد الحوادث المتداخلة. حادثان متزامنان مدة كل منهما ساعة يعنيان ساعة توقف لا ساعتين. يجب دمج الفترات في ETL قبل الحساب.",
        en: "Summing overlapping incident durations. Two simultaneous one-hour incidents mean one hour of downtime, not two. Merge intervals in ETL before calculating.",
      },
      {
        ar: "حساب متوسط النسب الشهرية أو نسب الخدمات. الرقم الربعي أو الإجمالي يُعاد حسابه من الدقائق.",
        en: "Averaging monthly or per-service percentages. The quarterly or overall figure must be recomputed from minutes.",
      },
      {
        ar: "تجاهل التدهور الجزئي. خدمة تعمل لكن بزمن استجابة غير مقبول أو لنسبة من المستخدمين فقط قد تُحتسب متاحة بالكامل رغم أن العميل يراها معطلة.",
        en: "Ignoring partial degradation. A service that runs but with unacceptable latency, or for only a share of users, may count as fully available while customers see it as down.",
      },
      {
        ar: "عدم تقسيم التوقف عند حدود الأيام أو الأشهر. حادث يبدأ ليلة آخر الشهر يُنسب كله لشهر واحد فيشوّه الشهرين.",
        en: "Not splitting downtime at day or month boundaries. An incident starting on the last night of the month gets attributed entirely to one month, distorting both.",
      },
    ],
    variants: [
      {
        label: { ar: "التوفر المرجّح بالمستخدمين", en: "User-weighted availability" },
        formula: "Availability % = 1 - Sum(Downtime Minutes x Share of Users Affected) / Eligible Minutes",
        difference: {
          ar: "يعطي الحادث الجزئي وزنًا بنسبة المستخدمين المتأثرين. أعدل للخدمات الموزعة، لكنه يحتاج بيانات أثر دقيقة.",
          en: "Weights partial incidents by the share of users affected. Fairer for distributed services, but it needs accurate impact data.",
        },
      },
      {
        label: { ar: "التوفر بعدد الطلبات الناجحة", en: "Request-based availability" },
        formula: "Availability % = Successful Requests / Valid Requests x 100",
        difference: {
          ar: "يقيس نجاح الطلبات لا الوقت. يلتقط التدهور الجزئي تلقائيًا، لكنه يتأثر بحجم الحركة: توقف في منتصف الليل يزن أقل من توقف وقت الذروة.",
          en: "Measures request success rather than time. Captures partial degradation automatically, but depends on traffic: an outage at midnight weighs less than one at peak.",
        },
      },
      {
        label: { ar: "توفر رحلة مركّبة", en: "Composite journey availability" },
        formula: "Journey Availability = Product of Availabilities of Serial Dependencies",
        difference: {
          ar: "للخدمات المعتمدة على بعضها تسلسليًا، التوفر المركّب أقل من أي مكوّن منفرد. ضرب النسب يفترض استقلال الأعطال، وهو تقريب.",
          en: "For services that depend on each other in series, composite availability is lower than any single component. Multiplying rates assumes independent failures, which is an approximation.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "هدف توفر بنسبة a على وقت مؤهل T يسمح بتوقف قدره T × (1 − a). على 720 ساعة وهدف 99.9% يكون التوقف المسموح 0.72 ساعة أي 43.2 دقيقة.",
          en: "An availability target a over eligible time T allows downtime of T × (1 − a). Over 720 hours at 99.9%, the allowance is 0.72 hours, or 43.2 minutes.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "استبعاد نوافذ الصيانة المعلنة مسبقًا من الوقت المؤهل ممارسة شائعة في اتفاقيات مستوى الخدمة، وليست قاعدة عامة.",
          en: "Excluding pre-announced maintenance windows from eligible time is common practice in service level agreements, not a universal rule.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "الهدف التعاقدي، ومصدر المراقبة، وتعريف التوقف الجزئي، ومدة الإعلان المسبق للصيانة — كلها شروط تعاقدية تختلف بين العقود.",
          en: "The contractual target, the monitoring source, the definition of partial downtime, and the maintenance notice period are contractual terms that differ between agreements.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (719.28 من 720 ساعة) من المرجع وهي للتوضيح فقط وليست معيارًا.",
          en: "The example figures (719.28 of 720 hours) come from the reference and are for illustration only, not a benchmark.",
        },
      },
    ],
    related: ["mttr", "sla-achievement-rate"],
    exercise: {
      prompt: {
        ar: "خدمة في شهر من 30 يومًا (720 ساعة). الاتفاقية تستبعد الصيانة المعلنة، وكانت 6 ساعات. التوقف غير المخطط 1.8 ساعة. احسب التوفر وفق الاتفاقية، ثم احسبه لو عوملت الصيانة كتوقف، ثم احسب التوقف المسموح لهدف 99.9%.",
        en: "A service in a 30-day month (720 hours). The agreement excludes announced maintenance, which was 6 hours. Unplanned downtime was 1.8 hours. Compute availability under the agreement, then compute it if maintenance were treated as downtime, then the allowed downtime for a 99.9% target.",
      },
      hint: {
        ar: "الصيانة المستبعدة تخرج من المقام، لا تُضاف إلى البسط.",
        en: "Excluded maintenance leaves the denominator; it is not added to the numerator.",
      },
      answer: {
        ar: "الوقت المؤهل = 720 − 6 = 714 ساعة. التوفر = (714 − 1.8) ÷ 714 = 712.2 ÷ 714 ≈ 99.748%. لو عوملت الصيانة كتوقف: (720 − 7.8) ÷ 720 = 712.2 ÷ 720 ≈ 98.917%. التوقف المسموح لهدف 99.9% = 714 × 0.001 = 0.714 ساعة ≈ 42.8 دقيقة، فالخدمة (108 دقائق توقف) أخلّت بالهدف في الحالتين.",
        en: "Eligible time = 720 − 6 = 714 hours. Availability = (714 − 1.8) ÷ 714 = 712.2 ÷ 714 ≈ 99.748%. Treating maintenance as downtime: (720 − 7.8) ÷ 720 = 712.2 ÷ 720 ≈ 98.917%. Allowed downtime at 99.9% = 714 × 0.001 = 0.714 hours ≈ 42.8 minutes, so the service (108 minutes down) breached the target either way.",
      },
    },
    references: [
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع القسمة الآمنة عندما لا يوجد وقت مؤهل في الفترة.",
          en: "Reference for safe division when a period has no eligible time.",
        },
      },
      {
        title: "SUMX function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/sumx-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع التكرار على الخدمات لحساب التوقف المسموح وفق هدف كل خدمة.",
          en: "Reference for iterating over services to compute allowed downtime under each service's target.",
        },
      },
    ],
  },

  {
    id: "mttr",
    slug: "mttr",
    name: "Mean Time to Restore",
    acronym: "MTTR",
    nameAr: "متوسط زمن استعادة الخدمة",
    domains: ["it-saas"],
    category: { ar: "موثوقية الخدمة", en: "Service reliability" },
    difficulty: "intermediate",
    unit: { ar: "ساعات لكل حادث", en: "Hours per incident" },
    aggregation: "non-additive",
    definition: {
      ar: "متوسط الوقت اللازم لاستعادة الخدمة بعد حدوث عطل، من لحظة بدء الأثر حتى عودة الخدمة للعميل. قد تختلف تسمية MTTR بين المؤسسات: استعادة أو إصلاح أو حل، ولكل منها معنى مختلف.",
      en: "The average time needed to restore service after a failure, from the moment impact starts until service is back for the customer. The MTTR label varies between organizations — restore, repair, or resolve — and each has a different meaning.",
    },
    whyItMatters: {
      ar: "التوقف الكلي = عدد الحوادث × متوسط مدتها. تقليل MTTR هو غالبًا أسرع طريق لتحسين التوفر، لأن منع كل الحوادث مستحيل بينما تسريع الاستجابة قابل للتحسين بالأدوات والإجراءات.",
      en: "Total downtime = number of incidents × their average duration. Reducing MTTR is often the fastest route to better availability, because preventing every incident is impossible while faster response can be improved with tooling and runbooks.",
    },
    interpretation: {
      ar: "MTTR بقيمة 4 ساعات يعني أن الحادث النموذجي يُبقي العميل بلا خدمة أربع ساعات في المتوسط. المتوسط حساس جدًا لحادث طويل واحد، لذلك يُقرأ مع الوسيط والمئين التسعين ومع التقسيم حسب الخطورة.",
      en: "An MTTR of 4 hours means an incident keeps the customer without service for four hours on average. The mean is very sensitive to a single long incident, so read it with the median, the 90th percentile, and a split by severity.",
    },
    formula: "Mean Time to Restore = Total Restoration Time Across Incidents / Number of Restored Incidents",
    numerator: {
      ar: "مجموع مدد الاستعادة للحوادث المستعادة خلال الفترة، من بدء الأثر إلى الاستعادة. يجب تحديد هل البداية هي بدء الأثر أم لحظة الاكتشاف.",
      en: "Sum of restoration durations for incidents restored in the period, from impact start to restoration. Define whether the start is impact start or detection time.",
    },
    denominator: {
      ar: "عدد الحوادث المستعادة المشمولة بالتعريف، مثل الحوادث المؤثرة على العملاء فقط أو حسب مستوى خطورة محدد.",
      en: "Number of restored incidents within scope, such as customer-impacting incidents only or a defined set of severities.",
    },
    timeGrain: {
      ar: "شهري أو ربعي، لأن عدد الحوادث الأسبوعي صغير وغير مستقر. أرفق دائمًا عدد الحوادث بالرقم.",
      en: "Monthly or quarterly, because weekly incident counts are small and unstable. Always show the incident count alongside the figure.",
    },
    direction: {
      rising: {
        ar: "ارتفاع MTTR يعني استجابة أبطأ أو حوادث أعقد. تحقق هل سببه حادث استثنائي واحد قبل استنتاج تدهور عام.",
        en: "Rising MTTR means slower response or more complex incidents. Check whether one exceptional incident drives it before concluding a general decline.",
      },
      falling: {
        ar: "انخفاضه يعني استعادة أسرع، وهو هدف معظم فرق التشغيل.",
        en: "A decline means faster restoration, the goal of most operations teams.",
      },
      caveat: {
        ar: "قد ينخفض MTTR بطرق لا تحسّن الخدمة: تقسيم حادث طويل إلى عدة حوادث قصيرة، أو إغلاق الحادث قبل عودة الخدمة فعلًا، أو إضافة كثير من الحوادث الصغيرة التافهة إلى المقام. كما أن الحوادث المفتوحة غير محتسبة، فالفترة الأخيرة تبدو أفضل مما هي.",
        en: "MTTR can fall in ways that do not improve service: splitting one long incident into several short ones, closing incidents before service is truly back, or adding many trivial incidents to the denominator. Open incidents are also excluded, so the latest period looks better than it is.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "مجموع ساعات الاستعادة", en: "Total restoration hours" }, value: "20" },
        { label: { ar: "عدد الحوادث المستعادة", en: "Restored incidents" }, value: "5" },
      ],
      steps: [{ label: { ar: "MTTR", en: "MTTR" }, expression: "20 ÷ 5 = 4 h" }],
      result: { label: { ar: "متوسط زمن الاستعادة", en: "Mean time to restore" }, value: "4 h / incident" },
      reading: {
        ar: "المتوسط 4 ساعات، لكنه قد يأتي من خمسة حوادث مدة كل منها 4 ساعات، أو من أربعة حوادث مدة كل منها ساعة واحدة وحادث واحد بست عشرة ساعة. القصتان تتطلبان علاجين مختلفين، ولهذا يجب عرض التوزيع لا المتوسط وحده.",
        en: "The mean is 4 hours, but it could come from five incidents of 4 hours each, or from four one-hour incidents and one of sixteen hours. The two stories need different remedies, which is why the distribution must be shown, not the mean alone.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "MTTR مع الوسيط والحوادث المفتوحة", en: "MTTR with median and open incidents" },
        code: `-- Only restored incidents enter the mean; open ones are reported separately.
Restored Incidents :=
CALCULATE (
    COUNTROWS ( 'Incident' ),
    NOT ISBLANK ( 'Incident'[RestoredAt] )
)

Total Restore Hours :=
SUMX (
    FILTER ( 'Incident', NOT ISBLANK ( 'Incident'[RestoredAt] ) ),
    DATEDIFF ( 'Incident'[StartedAt], 'Incident'[RestoredAt], MINUTE ) / 60
)

MTTR (hours) :=
DIVIDE ( [Total Restore Hours], [Restored Incidents] )

-- The median resists a single very long incident.
Median Restore Hours :=
MEDIANX (
    FILTER ( 'Incident', NOT ISBLANK ( 'Incident'[RestoredAt] ) ),
    DATEDIFF ( 'Incident'[StartedAt], 'Incident'[RestoredAt], MINUTE ) / 60
)

Open Incidents :=
CALCULATE (
    COUNTROWS ( 'Incident' ),
    ISBLANK ( 'Incident'[RestoredAt] )
)`,
        assumptions: [
          {
            ar: "'Incident' بحبيبية حادث واحد لكل صف، ويحتوي StartedAt (بدء الأثر على العميل) وRestoredAt (عودة الخدمة) كقيم تاريخ ووقت بنفس المنطقة الزمنية.",
            en: "'Incident' is at one row per incident and carries StartedAt (customer impact start) and RestoredAt (service restored) as datetime values in the same time zone.",
          },
          {
            ar: "الجدول مرشّح مسبقًا أو عبر بُعد الخطورة للحوادث المشمولة فقط، مثل الحوادث المؤثرة على العملاء. التنبيهات الآلية التي لم تؤثر على الخدمة لا تنتمي هنا.",
            en: "The table is pre-filtered, or filtered via the severity dimension, to in-scope incidents only, such as customer-impacting ones. Automated alerts with no service impact do not belong here.",
          },
          {
            ar: "'Date' مرتبط بتاريخ بدء الحادث، فالحادث الذي بدأ آخر الشهر يُنسب لشهر بدايته. إن فضّلت شركتك تاريخ الاستعادة فغيّر العلاقة ووثّق القرار.",
            en: "'Date' is related to the incident start date, so an incident that started at month-end is attributed to its starting month. If your company prefers the restore date, change the relationship and document the decision.",
          },
          {
            ar: "DATEDIFF بالدقائق يعدّ حدود الدقائق المتجاوزة، وهي دقة كافية لهذا المؤشر. الأفضل حساب مدة الاستعادة كعمود في Power Query إن كان الجدول كبيرًا.",
            en: "DATEDIFF in minutes counts minute boundaries crossed, which is precise enough for this metric. Precomputing the duration as a column in Power Query is better if the table is large.",
          },
        ],
        requires: ["Incident[StartedAt]", "Incident[RestoredAt]", "Incident[Severity]"],
      },
    ],
    model: [
      {
        table: "Incident",
        grain: { ar: "حادث واحد لكل صف", en: "One row per incident" },
        columns: ["IncidentId", "ServiceId", "Severity", "DetectedAt", "StartedAt", "RestoredAt", "ResolvedAt", "IsCustomerImpacting"],
        role: { ar: "جدول الحقائق الأساسي: المدة والعدد", en: "Primary fact table: duration and count" },
      },
      {
        table: "Service",
        grain: { ar: "خدمة واحدة لكل صف", en: "One row per service" },
        columns: ["ServiceId", "ServiceName", "Tier", "OwningTeam"],
        role: { ar: "التقسيم حسب الخدمة والفريق المسؤول", en: "Segmentation by service and owning team" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "Quarter", "Year"],
        role: { ar: "يُربط بتاريخ بدء الحادث", en: "Related to the incident start date" },
      },
    ],
    visuals: [
      {
        pattern: "period-over-period",
        why: {
          ar: "اتجاه MTTR شهريًا مقسّمًا حسب الخطورة، مع عدد الحوادث في التلميح، كما يقترح المرجع.",
          en: "The monthly MTTR trend split by severity, with incident count in the tooltip, as the reference suggests.",
        },
      },
      {
        pattern: "decomposition-tree",
        why: {
          ar: "يفكك زمن الاستعادة حسب الخدمة والخطورة والفريق لتحديد مصدر البطء.",
          en: "Breaks restoration time down by service, severity, and team to find where the slowness comes from.",
        },
      },
      {
        pattern: "exception-table",
        why: {
          ar: "قائمة الحوادث الأطول مع مدتها تعرض ذيل التوزيع الذي يرفع المتوسط، وتغذي مراجعات ما بعد الحادث.",
          en: "A list of the longest incidents with their durations exposes the tail that inflates the mean and feeds post-incident reviews.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عدم تحديد هل MTTR يعني الاستعادة أم الإصلاح أم الحل، وأي الحوادث مشمولة. زمن الحل يشمل إصلاح السبب الجذري وقد يكون أطول بأيام من الاستعادة.",
        en: "Not stating whether MTTR means restore, repair, or resolve, and which incidents are included. Resolve time includes the root-cause fix and can be days longer than restore time.",
      },
      {
        ar: "استبعاد الحوادث المفتوحة دون إظهارها. الحوادث الأطول هي التي لم تُغلق بعد، فالشهر الحالي يبدو دائمًا أفضل من حقيقته. اعرض عدد المفتوح بجانب المؤشر.",
        en: "Excluding open incidents without showing them. The longest incidents are the ones not yet closed, so the current month always looks better than it is. Show the open count next to the metric.",
      },
      {
        ar: "الاكتفاء بالمتوسط. توزيع مدد الحوادث منحرف بشدة، وحادث واحد طويل قد يضاعف المتوسط. الوسيط والمئين التسعون ضروريان.",
        en: "Relying on the mean alone. Incident duration is heavily skewed, and one long incident can double the mean. The median and 90th percentile are essential.",
      },
      {
        ar: "خلط الحوادث من كل مستويات الخطورة. إضافة كثير من الحوادث البسيطة يخفض المتوسط ويخفي تدهور الاستجابة للحوادث الحرجة.",
        en: "Mixing incidents of all severities. Adding many minor incidents lowers the mean and hides worsening response to critical ones.",
      },
      {
        ar: "حساب متوسط MTTR الشهري للحصول على الربعي. المؤشر غير تجميعي، ويُعاد حسابه من مجموع الساعات على مجموع الحوادث.",
        en: "Averaging monthly MTTR to get the quarterly figure. The metric is non-additive and must be recomputed from total hours over total incidents.",
      },
    ],
    variants: [
      {
        label: { ar: "متوسط زمن الإصلاح", en: "Mean time to repair" },
        formula: "MTTR (repair) = Total Hands-on Repair Time / Number of Repairs",
        difference: {
          ar: "يقيس وقت العمل الفعلي على الإصلاح لا وقت انقطاع العميل. شائع في صيانة المعدات، ولا يصلح مقياسًا لتجربة العميل.",
          en: "Measures hands-on repair time rather than customer outage time. Common in equipment maintenance and not a measure of customer experience.",
        },
      },
      {
        label: { ar: "متوسط زمن الحل", en: "Mean time to resolve" },
        formula: "MTTR (resolve) = Sum(Resolved At - Started At) / Number of Resolved Incidents",
        difference: {
          ar: "يمتد حتى معالجة السبب الجذري وإغلاق الحادث نهائيًا، فهو أطول ويعكس جودة الهندسة لا سرعة الاستجابة.",
          en: "Extends until the root cause is fixed and the incident is closed, so it is longer and reflects engineering quality rather than response speed.",
        },
      },
      {
        label: { ar: "زمن الاستعادة بالوسيط أو المئين", en: "Median or percentile time to restore" },
        formula: "P50 or P90 of (Restored At - Started At)",
        difference: {
          ar: "أقل تأثرًا بالحوادث الاستثنائية. الوسيط يصف الحادث النموذجي، والمئين التسعون يصف التجربة السيئة التي يتذكرها العميل.",
          en: "Less affected by exceptional incidents. The median describes the typical incident; the 90th percentile describes the bad experience customers remember.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "مجموع التوقف الناتج عن الحوادث المستعادة يساوي عددها مضروبًا في MTTR، متى كانت الحوادث غير متداخلة زمنيًا.",
          en: "Total downtime from restored incidents equals their count multiplied by MTTR, provided the incidents do not overlap in time.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "قياس زمن الاستعادة من بدء الأثر على العميل حتى عودة الخدمة، لا حتى إصلاح السبب الجذري، هو القراءة الشائعة لـ MTTR في فرق التشغيل.",
          en: "Measuring restore time from customer impact start to service restoration, rather than to root-cause fix, is the common reading of MTTR in operations teams.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "معنى MTTR داخل المؤسسة، ومستويات الخطورة المشمولة، ونقطة البداية (الأثر أو الاكتشاف) قرارات داخلية يجب توثيقها.",
          en: "What MTTR means inside the organization, which severities are included, and the start point (impact or detection) are internal decisions that must be documented.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (20 ساعة على 5 حوادث) من المرجع وهي للتوضيح فقط.",
          en: "The example figures (20 hours over 5 incidents) come from the reference and are for illustration only.",
        },
      },
    ],
    related: ["availability", "avg-resolution-time", "first-response-time"],
    exercise: {
      prompt: {
        ar: "خلال شهر استُعيدت ثمانية حوادث بالمدد التالية بالساعات: 0.5، 0.75، 1، 1، 1.25، 1.5، 2، 16. وما زال حادث تاسع مفتوحًا منذ 30 ساعة. احسب MTTR والوسيط، ثم MTTR دون الحادث ذي الـ 16 ساعة، وعلّق على الحادث المفتوح.",
        en: "In a month, eight incidents were restored with these durations in hours: 0.5, 0.75, 1, 1, 1.25, 1.5, 2, 16. A ninth incident has been open for 30 hours. Compute MTTR and the median, then MTTR without the 16-hour incident, and comment on the open incident.",
      },
      hint: {
        ar: "الوسيط لعدد زوجي من القيم هو متوسط القيمتين في المنتصف بعد الترتيب.",
        en: "The median of an even number of values is the average of the two middle values after sorting.",
      },
      answer: {
        ar: "المجموع = 24 ساعة، فـ MTTR = 24 ÷ 8 = 3.0 ساعات. الوسيط = (1 + 1.25) ÷ 2 = 1.125 ساعة. دون الحادث الطويل: 8 ÷ 7 ≈ 1.14 ساعة. حادث واحد رفع المتوسط إلى أكثر من ضعفه، والوسيط يصف الحادث النموذجي بصدق أكبر. الحادث المفتوح منذ 30 ساعة غير محتسب إطلاقًا، ولو أُغلق الآن لرفع MTTR إلى 54 ÷ 9 = 6.0 ساعات، فيجب عرضه بجانب المؤشر.",
        en: "Total = 24 hours, so MTTR = 24 ÷ 8 = 3.0 hours. Median = (1 + 1.25) ÷ 2 = 1.125 hours. Without the long incident: 8 ÷ 7 ≈ 1.14 hours. One incident more than doubled the mean, and the median describes the typical incident more honestly. The 30-hour open incident is not counted at all; if it closed now it would lift MTTR to 54 ÷ 9 = 6.0 hours, so it must be shown next to the metric.",
      },
    },
    references: [
      {
        title: "DATEDIFF function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/datediff-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع حساب مدة الاستعادة بالدقائق بين وقت البدء ووقت الاستعادة.",
          en: "Reference for computing restoration duration in minutes between start and restore times.",
        },
      },
      {
        title: "MEDIANX function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/medianx-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع حساب الوسيط الذي يقاوم أثر الحوادث الطويلة الاستثنائية.",
          en: "Reference for the median, which resists the effect of exceptionally long incidents.",
        },
      },
    ],
  },
];
