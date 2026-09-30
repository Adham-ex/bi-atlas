import type { Kpi } from "../types";

export const bankingKpis: Kpi[] = [
  /* ------------------------------------------------------------------ */
  /* NPL Ratio                                                           */
  /* ------------------------------------------------------------------ */
  {
    id: "npl-ratio",
    slug: "npl-ratio",
    name: "Non-Performing Loan Ratio",
    acronym: "NPL",
    nameAr: "نسبة القروض غير المنتظمة",
    domains: ["banking", "finance"],
    category: { ar: "جودة الأصول الائتمانية", en: "Credit asset quality" },
    difficulty: "intermediate",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة رصيد القروض المصنّفة غير منتظمة إلى إجمالي رصيد القروض في تاريخ محدد، وفق التعريف التنظيمي أو المحاسبي المعتمد لدى المؤسسة. تصنيف القرض كـ«غير منتظم» ليس قرارًا تحليليًا في Power BI، بل حكم ائتماني يأتي من نظام التصنيف أو من سياسة المخاطر المعتمدة.",
      en: "The balance of loans classified as non-performing divided by the gross loan balance at a given date, under the regulatory or accounting definition the institution has adopted. Classifying a loan as non-performing is not an analytical decision made in Power BI; it is a credit judgement that comes from the classification system or the approved risk policy.",
    },
    whyItMatters: {
      ar: "هو المؤشر الأول الذي ينظر إليه مجلس الإدارة والجهات الرقابية والمستثمرون لتقييم جودة المحفظة الائتمانية. ارتفاعه يسبق عادة ارتفاع المخصصات وانخفاض الأرباح وضغط رأس المال، لذا تُبنى عليه قرارات سياسة الإقراض والتحصيل والتسعير.",
      en: "It is the first metric boards, supervisors, and investors look at to judge the quality of the credit portfolio. A rise usually precedes higher provisions, lower profits, and capital pressure, so lending, collections, and pricing policy decisions are built on it.",
    },
    interpretation: {
      ar: "نسبة 2% تعني أن 2 من كل 100 وحدة عملة مُقرضة مصنّفة غير منتظمة في تاريخ القياس. المؤشر لقطة في لحظة لا تدفق خلال فترة: هو يخبرك بحجم المشكلة القائمة، لا بسرعة تشكّلها. لمعرفة السرعة اقرأه مع معدل التأخر وتدفقات القروض الداخلة إلى التعثر والخارجة منه.",
      en: "A 2% ratio means 2 of every 100 currency units lent are classified as non-performing at the measurement date. The metric is a point-in-time snapshot, not a flow over a period: it tells you the size of the existing problem, not how fast it is forming. For speed, read it with the delinquency rate and the inflows to and outflows from non-performing status.",
    },
    formula: "NPL Ratio % = Non-Performing Loans / Gross Loans x 100",
    numerator: {
      ar: "الرصيد الإجمالي للقروض المصنّفة غير منتظمة في تاريخ القياس، وفق التعريف المعتمد (كثير من الأطر تعتمد معيار التأخر أكثر من 90 يومًا أو عدم ترجيح السداد، لكن المرجع هو تعريف جهتك الرقابية وسياستك المحاسبية).",
      en: "The gross balance of loans classified as non-performing at the measurement date, per the adopted definition (many frameworks use more than 90 days past due or unlikeliness to pay, but the authority is your supervisor's definition and your accounting policy).",
    },
    denominator: {
      ar: "إجمالي رصيد القروض في نفس التاريخ وبنفس النطاق (نفس المنتجات والكيانات)، وبالرصيد الإجمالي قبل خصم المخصصات ما لم ينص التعريف على غير ذلك.",
      en: "The gross loan balance at the same date and in the same scope (same products and entities), before deducting provisions unless the definition states otherwise.",
    },
    timeGrain: {
      ar: "لقطة في نهاية الشهر أو الربع. عند عرض سنة كاملة يجب أن يُعرض رصيد آخر تاريخ في الفترة لا مجموع الأرصدة الشهرية، لأن الأرصدة شبه تجميعية.",
      en: "A month-end or quarter-end snapshot. When a full year is shown, display the balance at the last date in the period rather than the sum of monthly balances, because balances are semi-additive.",
    },
    direction: {
      rising: {
        ar: "الارتفاع يشير عادة إلى تدهور جودة الائتمان، أو إلى تباطؤ نمو المحفظة (المقام) بينما القروض المتعثرة ثابتة، أو إلى تشديد في معايير التصنيف.",
        en: "A rise usually signals deteriorating credit quality, or a slowing loan book (the denominator) while problem loans stay flat, or a tightening of classification criteria.",
      },
      falling: {
        ar: "الانخفاض قد يعني تحسنًا فعليًا في السداد، لكنه قد ينتج أيضًا عن شطب ديون أو بيع محافظ متعثرة أو إعادة هيكلة أو نمو سريع في القروض الجديدة التي لم يمر عليها وقت كافٍ لتتعثر.",
        en: "A fall may mean genuinely better repayment, but it can also come from write-offs, sales of problem portfolios, restructurings, or rapid growth in new loans that have not been on book long enough to default.",
      },
      caveat: {
        ar: "الأقل أفضل عمومًا، لكن الرقم وحده لا يكفي: لا بد من قراءته مع نسبة التغطية بالمخصصات، والشطب، وعمر المحفظة. انخفاض النسبة عبر الشطب لا يعني أن الخسارة لم تقع.",
        en: "Lower is generally better, but the number alone is not enough: read it with provision coverage, write-offs, and portfolio seasoning. A ratio lowered by write-offs does not mean the loss did not happen.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "رصيد القروض غير المنتظمة", en: "Non-performing loan balance" }, value: "12,000,000" },
        { label: { ar: "إجمالي رصيد القروض", en: "Gross loan balance" }, value: "600,000,000" },
      ],
      steps: [
        { label: { ar: "القروض المنتظمة", en: "Performing loans" }, expression: "600,000,000 − 12,000,000 = 588,000,000" },
        { label: { ar: "نسبة القروض غير المنتظمة", en: "NPL ratio" }, expression: "12,000,000 ÷ 600,000,000 × 100 = 2.0%" },
      ],
      result: { label: { ar: "نسبة القروض غير المنتظمة", en: "NPL ratio" }, value: "2.0%" },
      reading: {
        ar: "2% من المحفظة مصنّفة غير منتظمة في تاريخ القياس. الرقم لا يخبرنا كم من هذه الـ 12 مليونًا مغطى بمخصصات، ولا هل هي مركّزة في منتج واحد؛ هذا ما يجب أن تعرضه الصفحة التالية في التقرير.",
        en: "2% of the portfolio is classified as non-performing at the measurement date. The figure does not tell us how much of the 12 million is covered by provisions, nor whether it is concentrated in one product; that is what the next page of the report should show.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "نسبة القروض غير المنتظمة من لقطات أرصدة شهرية", en: "NPL ratio from month-end balance snapshots" },
        code: `-- Balances are semi-additive: never SUM them across dates.
-- Every measure below is evaluated at the last snapshot date in the filter context.
Loan Balance Raw :=
SUM ( 'LoanSnapshot'[GrossBalance] )

Gross Loans :=
VAR LastSnap =
    LASTNONBLANK ( 'Date'[Date], [Loan Balance Raw] )
RETURN
    CALCULATE ( [Loan Balance Raw], LastSnap )

-- The NPL flag comes from the credit classification system; it is not derived here.
NPL Balance :=
VAR LastSnap =
    LASTNONBLANK ( 'Date'[Date], [Loan Balance Raw] )
RETURN
    CALCULATE (
        [Loan Balance Raw],
        LastSnap,
        'LoanSnapshot'[IsNonPerforming] = TRUE ()
    )

-- The snapshot date is resolved once, on the whole portfolio, so numerator
-- and denominator are always read on the same date.
NPL Ratio % :=
VAR LastSnap =
    LASTNONBLANK ( 'Date'[Date], [Loan Balance Raw] )
VAR GrossLoans =
    CALCULATE ( [Loan Balance Raw], LastSnap )
VAR NplLoans =
    CALCULATE (
        [Loan Balance Raw],
        LastSnap,
        'LoanSnapshot'[IsNonPerforming] = TRUE ()
    )
RETURN
    DIVIDE ( NplLoans, GrossLoans )`,
        assumptions: [
          {
            ar: "'LoanSnapshot' يحتوي صفًا واحدًا لكل قرض في كل تاريخ لقطة (نهاية الشهر)، ومرتبط بجدول 'Date' على SnapshotDate بعلاقة واحد إلى متعدد.",
            en: "'LoanSnapshot' holds one row per loan per snapshot date (month end) and relates to 'Date' on SnapshotDate one-to-many.",
          },
          {
            ar: "العمود IsNonPerforming يُحمَّل من نظام التصنيف الائتماني وفق التعريف المعتمد، ولا يُشتق من أيام التأخر داخل النموذج لأن التعريف قد يشمل معايير نوعية مثل عدم ترجيح السداد.",
            en: "IsNonPerforming is loaded from the credit classification system per the adopted definition, not derived from days past due inside the model, because the definition may include qualitative criteria such as unlikeliness to pay.",
          },
          {
            ar: "GrossBalance هو الرصيد الإجمالي قبل المخصصات وبعملة التقرير، محوّلًا بسعر صرف تاريخ اللقطة. القروض المشطوبة لا تظهر في اللقطات بعد شطبها.",
            en: "GrossBalance is the gross balance before provisions, in reporting currency, converted at the snapshot-date rate. Written-off loans no longer appear in snapshots after write-off.",
          },
          {
            ar: "جميع القروض تُلتقط في نفس التاريخ. LASTNONBLANK تختار آخر تاريخ فيه رصيد ضمن سياق الترشيح، فعند عرض السنة تعطي رصيد آخر شهر محمّل.",
            en: "All loans are snapshotted on the same date. LASTNONBLANK picks the last date with a balance in the filter context, so a year shows the balance of the last loaded month.",
          },
        ],
        requires: ["LoanSnapshot[GrossBalance]", "LoanSnapshot[IsNonPerforming]", "LoanSnapshot[SnapshotDate]", "Date[Date]"],
      },
    ],
    model: [
      {
        table: "LoanSnapshot",
        grain: { ar: "قرض واحد × تاريخ لقطة (نهاية الشهر)", en: "One loan x snapshot date (month end)" },
        columns: ["SnapshotDate", "LoanId", "CustomerId", "ProductId", "SegmentId", "GrossBalance", "DaysPastDue", "IsNonPerforming", "IsRestructured", "SpecificProvision"],
        role: { ar: "جدول حقائق لقطات دورية؛ مصدر البسط والمقام", en: "Periodic snapshot fact; source of numerator and denominator" },
      },
      {
        table: "Product",
        grain: { ar: "منتج ائتماني واحد لكل صف", en: "One credit product per row" },
        columns: ["ProductId", "ProductName", "ProductFamily", "IsRetail"],
        role: { ar: "التقسيم حسب المنتج والمحفظة", en: "Breakdown by product and portfolio" },
      },
      {
        table: "Segment",
        grain: { ar: "شريحة عملاء واحدة لكل صف", en: "One customer segment per row" },
        columns: ["SegmentId", "SegmentName", "Sector"],
        role: { ar: "التقسيم حسب شريحة العملاء أو القطاع الاقتصادي", en: "Breakdown by customer segment or economic sector" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "QuarterKey", "Year"],
        role: { ar: "جدول تاريخ معلّم مرتبط بـ SnapshotDate", en: "Marked date table related to SnapshotDate" },
      },
    ],
    visuals: [
      {
        pattern: "period-over-period",
        why: {
          ar: "الاتجاه عبر نهايات الأشهر أهم من الرقم الحالي، والمقارنة بالربع أو العام السابق تكشف مسار التدهور أو التحسن.",
          en: "The trend across month ends matters more than the current value, and comparing with the prior quarter or year reveals the path of deterioration or recovery.",
        },
      },
      {
        pattern: "decomposition-tree",
        why: {
          ar: "يحدد أين تتركز القروض غير المنتظمة: حسب المنتج ثم الشريحة ثم الفرع أو القطاع، كما يطلب المرجع.",
          en: "Pinpoints where non-performing loans are concentrated: by product, then segment, then branch or sector, as the reference suggests.",
        },
      },
      {
        pattern: "stacked-bar",
        why: {
          ar: "يعرض رصيد القروض المنتظمة وغير المنتظمة لكل محفظة، فيرى القارئ الحجم المطلق بجوار النسبة.",
          en: "Shows performing and non-performing balances per portfolio, so the reader sees absolute size next to the ratio.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عدم الالتزام بالتعريف التنظيمي أو المحاسبي المعتمد. تعريف التعرضات غير المنتظمة، ونطاق القروض المشمولة، والرصيد الإجمالي أو الصافي، كلها تُحدد من الجهة الرقابية وسياسة البنك، ولا يجوز اجتهادها في التقرير.",
        en: "Not following the applicable regulatory or accounting definition. The definition of non-performing exposures, the loan scope, and gross versus net balances are set by the supervisor and bank policy and must not be improvised in the report.",
      },
      {
        ar: "جمع الأرصدة عبر الأشهر. عرض السنة بـ SUM يعطي 12 ضعف الرصيد الفعلي؛ البسط والمقام كلاهما لقطات يجب قراءتها في آخر تاريخ.",
        en: "Summing balances across months. Showing a year with SUM gives twelve times the real balance; numerator and denominator are both snapshots to be read at the last date.",
      },
      {
        ar: "قراءة النسبة بعد الشطب أو بيع المحافظ على أنها تحسن. الشطب يخرج القرض من البسط والمقام معًا فتنخفض النسبة دون أي تحسن في السداد. اعرض الشطب في الفترة بجوار المؤشر.",
        en: "Reading the ratio after write-offs or portfolio sales as an improvement. A write-off removes the loan from numerator and denominator alike, so the ratio falls with no improvement in repayment. Show period write-offs next to the metric.",
      },
      {
        ar: "خلط نطاق البسط والمقام: مثلًا قروض متعثرة تشمل بطاقات الائتمان بينما إجمالي القروض يستبعدها، أو كيان تابع في أحدهما دون الآخر.",
        en: "Mismatched scope between numerator and denominator: for example, problem loans that include credit cards while gross loans exclude them, or a subsidiary in one but not the other.",
      },
      {
        ar: "تجاهل أثر النمو. محفظة تنمو بسرعة تُظهر نسبة منخفضة لأن القروض الجديدة لم يمر عليها وقت لتتعثر؛ تحليل الأجيال (Vintage) يعطي صورة أصدق.",
        en: "Ignoring growth effects. A fast-growing book shows a low ratio because new loans have not had time to default; vintage analysis gives a truer picture.",
      },
    ],
    variants: [
      {
        label: { ar: "نسبة القروض غير المنتظمة الصافية", en: "Net NPL ratio" },
        formula: "(NPLs - Specific Provisions) / (Gross Loans - Specific Provisions)",
        difference: {
          ar: "تخصم المخصصات المكوّنة لتقيس الجزء غير المغطى من المشكلة. أقل من النسبة الإجمالية دائمًا، ويجب ألا تُقارن بها مباشرة.",
          en: "Deducts provisions already held to measure the uncovered part of the problem. Always below the gross ratio and must not be compared with it directly.",
        },
      },
      {
        label: { ar: "نسبة المرحلة الثالثة وفق IFRS 9", en: "IFRS 9 Stage 3 ratio" },
        formula: "Stage 3 (credit-impaired) Gross Carrying Amount / Total Gross Carrying Amount",
        difference: {
          ar: "مبنية على تصنيف المراحل المحاسبي لا على تعريف التعثر الرقابي. قد تتقاطع كثيرًا مع NPL لكنها ليست مطابقة بالضرورة، فلا يُعرض الاثنان تحت الاسم نفسه.",
          en: "Built on the accounting stage classification rather than the regulatory default definition. It may overlap heavily with NPL but is not necessarily identical, so the two must not share a label.",
        },
      },
      {
        label: { ar: "النسبة بعدد الحسابات", en: "Count-based ratio" },
        formula: "Non-Performing Loan Accounts / Total Loan Accounts",
        difference: {
          ar: "مفيدة في محافظ التجزئة لقياس انتشار المشكلة بين العملاء، لكنها تتجاهل الحجم: قرض شركات كبير متعثر يساوي قرضًا شخصيًا صغيرًا.",
          en: "Useful in retail portfolios to measure how widespread the problem is among customers, but it ignores size: one large defaulted corporate loan counts the same as a small personal loan.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "شطب قرض غير منتظم يُخفض النسبة حسابيًا، لأنه يطرح المبلغ نفسه من البسط والمقام، والبسط أصغر من المقام.",
          en: "Writing off a non-performing loan lowers the ratio arithmetically, because it subtracts the same amount from numerator and denominator, and the numerator is the smaller of the two.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "معيار التأخر أكثر من 90 يومًا أو عدم ترجيح السداد شائع في كثير من الأطر الرقابية، لكن التعريف الملزم هو تعريف الجهة الرقابية التي يخضع لها البنك.",
          en: "More than 90 days past due or unlikeliness to pay is a common criterion across many regulatory frameworks, but the binding definition is that of the bank's own supervisor.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "معاملة القروض المعاد هيكلتها، وفترة البقاء قبل إعادة التصنيف إلى منتظم، ونطاق المنتجات المشمولة، تحددها السياسة الائتمانية المعتمدة والمتطلبات الرقابية المحلية.",
          en: "The treatment of restructured loans, the probation period before reclassification to performing, and the product scope are set by the approved credit policy and local regulatory requirements.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (12 مليونًا من 600 مليون) من تأليفنا للتوضيح، وليست مرجعًا أو حدًا مقبولًا لأي سوق.",
          en: "The example figures (12 million of 600 million) are invented for illustration and are not a benchmark or acceptable threshold for any market.",
        },
      },
    ],
    related: ["delinquency-rate", "nim", "loan-to-deposit-ratio"],
    exercise: {
      prompt: {
        ar: "في نهاية الربع كان إجمالي القروض 2,400 مليون، منها 84 مليونًا غير منتظمة. في الشهر التالي شُطب 24 مليونًا من القروض غير المنتظمة ولم يتغير شيء آخر. احسب النسبة قبل الشطب وبعده، وفسّر ما الذي تغيّر فعلًا.",
        en: "At quarter end, gross loans were 2,400 million, of which 84 million were non-performing. The following month 24 million of non-performing loans were written off and nothing else changed. Compute the ratio before and after, and explain what actually changed.",
      },
      hint: {
        ar: "الشطب يُخرج المبلغ من البسط والمقام معًا.",
        en: "A write-off removes the amount from both numerator and denominator.",
      },
      answer: {
        ar: "قبل الشطب: 84 ÷ 2,400 = 3.5%. بعده: البسط 84 − 24 = 60، والمقام 2,400 − 24 = 2,376، فالنسبة 60 ÷ 2,376 ≈ 2.53%. انخفضت النسبة نحو نقطة مئوية دون أن يسدد أي عميل شيئًا؛ الخسارة تحققت وانتقلت إلى المخصصات والأرباح. لذلك يجب عرض الشطب في الفترة بجوار المؤشر.",
        en: "Before: 84 ÷ 2,400 = 3.5%. After: numerator 84 − 24 = 60 and denominator 2,400 − 24 = 2,376, so the ratio is 60 ÷ 2,376 ≈ 2.53%. The ratio dropped by about one point without any customer repaying anything; the loss was realised and moved to provisions and profit. This is why period write-offs should be shown next to the metric.",
      },
    },
    references: [
      {
        title: "LASTNONBLANK function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/lastnonblank-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "أساس قراءة الرصيد في آخر تاريخ لقطة ضمن الفترة بدل جمعه.",
          en: "The basis for reading the balance at the last snapshot date in the period instead of summing it.",
        },
      },
      {
        title: "CALCULATE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/calculate-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع تطبيق تاريخ اللقطة ومرشح التصنيف معًا على البسط.",
          en: "Reference for applying the snapshot date and the classification filter together on the numerator.",
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Delinquency Rate                                                    */
  /* ------------------------------------------------------------------ */
  {
    id: "delinquency-rate",
    slug: "delinquency-rate",
    name: "Loan Delinquency Rate",
    nameAr: "معدل التأخر في سداد القروض",
    domains: ["banking", "finance"],
    category: { ar: "جودة الأصول الائتمانية", en: "Credit asset quality" },
    difficulty: "intermediate",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة القروض أو الحسابات التي تجاوز تأخرها في السداد عدد أيام محددًا (عتبة أيام التأخر DPD) إلى المحفظة ذات الصلة. المؤشر لا معنى له دون ذكر العتبة: «معدل التأخر 30+» و«معدل التأخر 90+» مؤشران مختلفان.",
      en: "The share of loans or accounts whose repayment is overdue beyond a defined number of days (the days-past-due threshold) relative to the relevant portfolio. The metric is meaningless without its threshold: a 30+ rate and a 90+ rate are different metrics.",
    },
    whyItMatters: {
      ar: "هو إنذار مبكر يسبق التعثر. القرض يمر عادة بمراحل تأخر متزايدة قبل أن يصبح غير منتظم، فرصد المراحل المبكرة يمنح فرق التحصيل وقتًا للتدخل، ويكشف ضعف معايير الإقراض في المنتجات الجديدة قبل أن يظهر في المخصصات.",
      en: "It is an early warning that precedes default. A loan usually passes through increasing stages of arrears before becoming non-performing, so tracking the early stages gives collections teams time to act and exposes weak underwriting in new products before it shows up in provisions.",
    },
    interpretation: {
      ar: "معدل 3% عند عتبة 30 يومًا يعني أن 3 من كل 100 وحدة عملة في المحفظة متأخرة 30 يومًا أو أكثر في تاريخ القياس. قيمته الحقيقية في توزيعه على شرائح التأخر: انتقال الأرصدة من شريحة 1–29 إلى 30–59 ثم 60–89 يوضح هل الضغط يتفاقم أم يُعالج.",
      en: "A 3% rate at a 30-day threshold means 3 of every 100 currency units in the portfolio are 30 or more days overdue at the measurement date. Its real value is in the distribution across buckets: balances moving from 1–29 to 30–59 then 60–89 show whether stress is worsening or being cured.",
    },
    formula: "Delinquency Rate % = Loans Meeting Defined Days-Past-Due Threshold / Relevant Loan Portfolio x 100",
    numerator: {
      ar: "رصيد القروض (أو عدد الحسابات) التي بلغ تأخرها العتبة المحددة أو تجاوزها في تاريخ القياس. يجب تحديد أساس القياس (رصيد أم عدد حسابات) وطريقة حساب أيام التأخر المعتمدة.",
      en: "The balance (or account count) of loans at or beyond the defined threshold at the measurement date. The basis (balance or accounts) and the approved day-count method must be stated.",
    },
    denominator: {
      ar: "المحفظة ذات الصلة في نفس التاريخ وبنفس الأساس: عادة القروض القائمة ضمن النطاق، مع تحديد صريح لمعاملة القروض المشطوبة والمعاد هيكلتها وغير المسحوبة.",
      en: "The relevant portfolio at the same date and on the same basis: usually outstanding loans in scope, with an explicit treatment of written-off, restructured, and undrawn exposures.",
    },
    timeGrain: {
      ar: "لقطة في نهاية الشهر عادة، وقد تكون يومية لفرق التحصيل. عند عرض فترة أطول يُقرأ آخر تاريخ لقطة لا مجموع الأرصدة.",
      en: "Usually a month-end snapshot, sometimes daily for collections teams. For longer periods read the last snapshot date rather than summing balances.",
    },
    direction: {
      rising: {
        ar: "الارتفاع يشير إلى ضغط ائتماني مبكر أو ضعف في التحصيل، وقد يكون موسميًا (مثل أشهر الإنفاق المرتفع) أو ناتجًا عن تعطل في قنوات الدفع.",
        en: "A rise signals early credit stress or weaker collections; it can be seasonal (such as high-spending months) or caused by a payment channel outage.",
      },
      falling: {
        ar: "الانخفاض قد يعني تحسن السداد أو التحصيل، أو انتقال الحسابات المتأخرة إلى التعثر أو الشطب فخروجها من الشرائح المبكرة، أو إعادة هيكلة أعادت عدّاد التأخر إلى الصفر.",
        en: "A fall can mean better repayment or collections, or delinquent accounts rolling into default or write-off and leaving the early buckets, or restructurings that reset the arrears counter to zero.",
      },
      caveat: {
        ar: "الأقل أفضل عمومًا، لكن انخفاض المعدل مع ارتفاع نسبة القروض غير المنتظمة في الوقت نفسه يعني غالبًا أن الحسابات لم تُعالج بل انتقلت إلى مرحلة أسوأ. اقرأ الشرائح كلها معًا.",
        en: "Lower is generally better, but a falling rate alongside a rising NPL ratio usually means accounts were not cured but rolled into a worse stage. Read all the buckets together.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "رصيد القروض المتأخرة عند العتبة المختارة أو أكثر", en: "Balance at or beyond the chosen threshold" }, value: "30,000,000" },
        { label: { ar: "المحفظة ذات الصلة", en: "Relevant portfolio" }, value: "1,000,000,000" },
      ],
      steps: [
        { label: { ar: "معدل التأخر", en: "Delinquency rate" }, expression: "30,000,000 ÷ 1,000,000,000 × 100 = 3.0%" },
      ],
      result: { label: { ar: "معدل التأخر (أساس الرصيد)", en: "Delinquency rate (balance basis)" }, value: "3.0%" },
      reading: {
        ar: "3% من رصيد المحفظة تجاوز العتبة المختارة. الرقم يحتاج دائمًا إلى ذكر العتبة (مثلًا 30+ يومًا) وأساس القياس (الرصيد هنا)، وإلا فلن يُقارن بأي تقرير آخر.",
        en: "3% of the portfolio balance is beyond the chosen threshold. The figure must always state the threshold (for example 30+ days) and the basis (balance here), or it cannot be compared with any other report.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "معدل التأخر بعتبة قابلة للاختيار، بأساسي الرصيد والحسابات", en: "Delinquency rate with a selectable threshold, balance and account basis" },
        code: `-- 'DpdThreshold' is a disconnected table with one column [Days] (e.g. 1, 30, 60, 90)
-- used as a slicer. The default of 30 applies when nothing or several values are selected.

Portfolio Balance Raw :=
CALCULATE (
    SUM ( 'LoanSnapshot'[OutstandingBalance] ),
    'LoanSnapshot'[IsInScope] = TRUE ()
)

-- Balance basis, read at the last snapshot date in the period (semi-additive).
Delinquency Rate % :=
VAR Threshold =
    SELECTEDVALUE ( 'DpdThreshold'[Days], 30 )
VAR LastSnap =
    LASTNONBLANK ( 'Date'[Date], [Portfolio Balance Raw] )
VAR Portfolio =
    CALCULATE ( [Portfolio Balance Raw], LastSnap )
VAR Delinquent =
    CALCULATE (
        [Portfolio Balance Raw],
        LastSnap,
        'LoanSnapshot'[DaysPastDue] >= Threshold
    )
RETURN
    DIVIDE ( Delinquent, Portfolio )

-- Account basis: one row per loan per snapshot, so COUNTROWS counts accounts.
Delinquency Rate (Accounts) % :=
VAR Threshold =
    SELECTEDVALUE ( 'DpdThreshold'[Days], 30 )
VAR LastSnap =
    LASTNONBLANK ( 'Date'[Date], [Portfolio Balance Raw] )
VAR Accounts =
    CALCULATE (
        COUNTROWS ( 'LoanSnapshot' ),
        LastSnap,
        'LoanSnapshot'[IsInScope] = TRUE ()
    )
VAR DelinquentAccounts =
    CALCULATE (
        COUNTROWS ( 'LoanSnapshot' ),
        LastSnap,
        'LoanSnapshot'[IsInScope] = TRUE (),
        'LoanSnapshot'[DaysPastDue] >= Threshold
    )
RETURN
    DIVIDE ( DelinquentAccounts, Accounts )`,
        assumptions: [
          {
            ar: "'LoanSnapshot' يحتوي صفًا واحدًا لكل قرض في كل تاريخ لقطة، وDaysPastDue محسوب في نظام المصدر وفق طريقة الاحتساب المعتمدة (مثل معاملة الدفعات الجزئية وحد التسامح في المبالغ الصغيرة).",
            en: "'LoanSnapshot' has one row per loan per snapshot date, and DaysPastDue is computed in the source system under the approved method (such as the handling of partial payments and small-amount tolerance).",
          },
          {
            ar: "IsInScope يحدد المحفظة ذات الصلة (مثلًا يستبعد القروض المشطوبة وغير المصروفة) وفق سياسة التقرير، ويُطبَّق على البسط والمقام معًا.",
            en: "IsInScope defines the relevant portfolio (for example excluding written-off and undisbursed loans) per reporting policy, and is applied to numerator and denominator alike.",
          },
          {
            ar: "'DpdThreshold' جدول غير مرتبط بأي جدول آخر؛ SELECTEDVALUE تعيد 30 افتراضيًا عند عدم الاختيار أو اختيار أكثر من قيمة. غيّر القيمة الافتراضية لتطابق التعريف المعتمد.",
            en: "'DpdThreshold' is disconnected from every other table; SELECTEDVALUE returns 30 by default when nothing or several values are selected. Change the default to match the adopted definition.",
          },
          {
            ar: "عتبة «أكبر من أو يساوي» مقصودة هنا؛ بعض التعريفات تستخدم «أكبر من» فقط، ويجب مطابقة الشرط للتعريف المعتمد.",
            en: "The 'greater than or equal to' condition is deliberate here; some definitions use strictly 'greater than', and the condition must match the adopted definition.",
          },
        ],
        requires: ["LoanSnapshot[OutstandingBalance]", "LoanSnapshot[DaysPastDue]", "LoanSnapshot[IsInScope]", "DpdThreshold[Days]", "Date[Date]"],
      },
    ],
    model: [
      {
        table: "LoanSnapshot",
        grain: { ar: "قرض واحد × تاريخ لقطة", en: "One loan x snapshot date" },
        columns: ["SnapshotDate", "LoanId", "ProductId", "SegmentId", "OutstandingBalance", "DaysPastDue", "DpdBucket", "IsInScope", "IsRestructured"],
        role: { ar: "جدول حقائق لقطات دورية؛ مصدر البسط والمقام وشرائح التأخر", en: "Periodic snapshot fact; source of numerator, denominator, and arrears buckets" },
      },
      {
        table: "DpdThreshold",
        grain: { ar: "عتبة واحدة لكل صف", en: "One threshold per row" },
        columns: ["Days", "Label"],
        role: { ar: "جدول غير مرتبط يغذي أداة اختيار العتبة", en: "Disconnected table feeding the threshold slicer" },
      },
      {
        table: "Product",
        grain: { ar: "منتج ائتماني واحد لكل صف", en: "One credit product per row" },
        columns: ["ProductId", "ProductName", "ProductFamily"],
        role: { ar: "التقسيم حسب المنتج", en: "Breakdown by product" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "Year"],
        role: { ar: "جدول تاريخ معلّم مرتبط بـ SnapshotDate", en: "Marked date table related to SnapshotDate" },
      },
    ],
    visuals: [
      {
        pattern: "inventory-aging-matrix",
        why: {
          ar: "نفس منطق مصفوفة الأعمار يُطبق على شرائح أيام التأخر (1–29، 30–59، 60–89، 90+) حسب المنتج والشريحة، وهو العرض الذي يقترحه المرجع.",
          en: "The same ageing-matrix logic applies to days-past-due buckets (1–29, 30–59, 60–89, 90+) by product and segment, which is the view the reference suggests.",
        },
      },
      {
        pattern: "stacked-bar",
        why: {
          ar: "أعمدة مكدسة لكل شهر تُظهر حجم كل شريحة تأخر وانتقال الأرصدة بين الشرائح عبر الوقت.",
          en: "Stacked bars per month show the size of each arrears bucket and how balances migrate between buckets over time.",
        },
      },
      {
        pattern: "period-over-period",
        why: {
          ar: "مقارنة المعدل بالشهر السابق ونفس الشهر من العام الماضي تفصل الضغط الحقيقي عن الأثر الموسمي.",
          en: "Comparing the rate with the prior month and the same month last year separates real stress from seasonal effects.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عدم ذكر عتبة أيام التأخر وأساس القياس (رصيد أم حسابات) ومعاملة القروض المعاد هيكلتها. هذه الثلاثة يجب أن تظهر في عنوان المؤشر أو تلميحه.",
        en: "Not stating the days-past-due threshold, the basis (balance versus accounts), and the treatment of restructured loans. All three should appear in the visual title or tooltip.",
      },
      {
        ar: "إعادة الهيكلة التي تعيد عدّاد التأخر إلى الصفر تُخفي الضغط الحقيقي. اعرض القروض المعاد هيكلتها كشريحة مستقلة أو كعلامة قابلة للترشيح.",
        en: "Restructurings that reset the arrears counter to zero hide real stress. Show restructured loans as a separate bucket or a filterable flag.",
      },
      {
        ar: "جمع الأرصدة عبر الأشهر أو حساب متوسط المعدلات الشهرية للحصول على الرقم الربعي. المعدل لقطة؛ الربع يُقرأ في آخر تاريخ لقطة أو كمتوسط أرصدة محسوب من البسط والمقام.",
        en: "Summing balances across months or averaging monthly rates to get a quarterly figure. The rate is a snapshot; a quarter is read at its last snapshot date or as an average computed from numerator and denominator balances.",
      },
      {
        ar: "استبعاد القروض المشطوبة من البسط مع إبقائها في المقام أو العكس. النطاق يجب أن يُطبق على الطرفين بالشرط نفسه.",
        en: "Excluding written-off loans from the numerator while keeping them in the denominator, or the reverse. Scope must apply to both sides with the same condition.",
      },
      {
        ar: "مقارنة منتجات بآجال مختلفة دون تعديل: بطاقات الائتمان والقروض العقارية لها ديناميكيات تأخر مختلفة جدًا، والمعدل الإجمالي للمحفظة يتأثر بمزيج المنتجات.",
        en: "Comparing products with different structures without adjustment: credit cards and mortgages have very different arrears dynamics, and the total portfolio rate is driven by product mix.",
      },
    ],
    variants: [
      {
        label: { ar: "أساس عدد الحسابات بدل الرصيد", en: "Account basis instead of balance" },
        formula: "Accounts at or beyond DPD Threshold / Accounts in Relevant Portfolio",
        difference: {
          ar: "يقيس انتشار التأخر بين العملاء، وهو الأنسب لتخطيط طاقة فرق التحصيل. قد يختلف كثيرًا عن أساس الرصيد إذا تركز التأخر في الحسابات الصغيرة أو الكبيرة.",
          en: "Measures how widespread arrears are among customers and suits collections capacity planning. It can differ sharply from the balance basis if arrears concentrate in small or large accounts.",
        },
      },
      {
        label: { ar: "معدل التأخر حسب الجيل", en: "Vintage delinquency" },
        formula: "Balance of a disbursement cohort ever at or beyond DPD Threshold within N months on book / Cohort Disbursed Amount",
        difference: {
          ar: "يتتبع دفعة القروض الممنوحة في فترة واحدة عبر عمرها، فيعزل أثر معايير الإقراض عن أثر نمو المحفظة. الأنسب لتقييم سياسة الائتمان.",
          en: "Follows loans disbursed in one period across their life, isolating underwriting quality from portfolio growth. Best suited to evaluating credit policy.",
        },
      },
      {
        label: { ar: "معدل الانتقال بين الشرائح", en: "Roll rate" },
        formula: "Balance in bucket k+1 this month that was in bucket k last month / Balance in bucket k last month",
        difference: {
          ar: "مؤشر تدفق لا لقطة: يقيس سرعة تدهور الحسابات من شريحة إلى أخرى، ويحتاج إلى مطابقة القرض نفسه بين لقطتين متتاليتين.",
          en: "A flow rather than a snapshot: it measures how fast accounts deteriorate from one bucket to the next and requires matching the same loan across two consecutive snapshots.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "بنفس الأساس والتاريخ، معدل التأخر عند عتبة أعلى لا يمكن أن يتجاوز المعدل عند عتبة أدنى، لأن كل قرض متأخر 90 يومًا متأخر 30 يومًا أيضًا.",
          en: "On the same basis and date, the rate at a higher threshold can never exceed the rate at a lower threshold, because every loan 90 days overdue is also 30 days overdue.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "الشرائح 30+ و60+ و90+ يومًا شائعة الاستخدام في تقارير الائتمان، لكنها ليست معيارًا موحدًا والعتبة الملزمة تأتي من التعريف المعتمد.",
          en: "30+, 60+, and 90+ day buckets are commonly used in credit reporting, but they are not a single standard and the binding threshold comes from the adopted definition.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "طريقة احتساب أيام التأخر، وحد التسامح في المبالغ الصغيرة، ومعاملة إعادة الهيكلة، قرارات تحددها السياسة الائتمانية والمتطلبات الرقابية المحلية.",
          en: "The day-count method, the small-amount tolerance, and the treatment of restructuring are decisions set by credit policy and local regulatory requirements.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (30 مليونًا من 1,000 مليون) من تأليفنا للتوضيح ولا تمثل مرجعًا لأي سوق.",
          en: "The example figures (30 million of 1,000 million) are invented for illustration and are not a benchmark for any market.",
        },
      },
    ],
    related: ["npl-ratio", "cac", "nim"],
    exercise: {
      prompt: {
        ar: "محفظة تمويل شخصي رصيدها 800 مليون موزعة على 10,000 حساب. في نهاية الشهر كان 520 حسابًا متأخرًا 30 يومًا أو أكثر، ورصيدها 36 مليونًا. احسب معدل التأخر 30+ بأساسي الرصيد والحسابات، وفسّر الفرق.",
        en: "A personal-finance portfolio of 800 million is spread across 10,000 accounts. At month end, 520 accounts were 30 or more days overdue, with a balance of 36 million. Compute the 30+ rate on balance and account bases and explain the difference.",
      },
      hint: {
        ar: "قارن متوسط رصيد الحساب المتأخر بمتوسط رصيد الحساب في المحفظة كلها.",
        en: "Compare the average delinquent account balance with the average account balance in the whole portfolio.",
      },
      answer: {
        ar: "أساس الرصيد: 36 ÷ 800 = 4.5%. أساس الحسابات: 520 ÷ 10,000 = 5.2%. أساس الحسابات أعلى لأن متوسط رصيد الحساب المتأخر (36,000,000 ÷ 520 ≈ 69,231) أقل من متوسط المحفظة (800,000,000 ÷ 10,000 = 80,000)، أي أن التأخر يتركز في الحسابات الأصغر. فريق التحصيل يهتم بالرقم الثاني لأنه يحدد عدد المكالمات، والمخاطر تهتم بالأول لأنه يحدد حجم التعرض.",
        en: "Balance basis: 36 ÷ 800 = 4.5%. Account basis: 520 ÷ 10,000 = 5.2%. The account basis is higher because the average delinquent balance (36,000,000 ÷ 520 ≈ 69,231) is below the portfolio average (800,000,000 ÷ 10,000 = 80,000), meaning arrears concentrate in smaller accounts. Collections cares about the second figure because it drives call volume; risk cares about the first because it drives exposure.",
      },
    },
    references: [
      {
        title: "SELECTEDVALUE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/selectedvalue-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع قراءة العتبة المختارة من جدول غير مرتبط مع قيمة افتراضية.",
          en: "Reference for reading the selected threshold from a disconnected table with a default value.",
        },
      },
      {
        title: "LASTNONBLANK function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/lastnonblank-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "أساس قراءة الأرصدة في آخر تاريخ لقطة ضمن الفترة.",
          en: "The basis for reading balances at the last snapshot date in the period.",
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Cost-to-Income Ratio                                                */
  /* ------------------------------------------------------------------ */
  {
    id: "cost-to-income-ratio",
    slug: "cost-to-income-ratio",
    name: "Cost-to-Income Ratio",
    acronym: "CIR",
    nameAr: "نسبة التكلفة إلى الدخل",
    domains: ["banking", "finance"],
    category: { ar: "الكفاءة التشغيلية", en: "Operating efficiency" },
    difficulty: "intermediate",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة المصروفات التشغيلية إلى الدخل التشغيلي خلال فترة، وفق تعريف المؤسسة لكلا البندين. تجيب عن سؤال: كم تنفق المؤسسة من كل وحدة دخل تشغيلي لتحقيقها؟",
      en: "Operating expenses divided by operating income over a period, under the institution's definition of both lines. It answers: how much does the institution spend for each unit of operating income it earns?",
    },
    whyItMatters: {
      ar: "هو مقياس الكفاءة الأكثر استخدامًا في البنوك، ويظهر في العروض للمستثمرين وخطط التحول الرقمي وبرامج خفض التكاليف. كل نقطة مئوية فيه تعني مبلغًا كبيرًا من الأرباح قبل المخصصات والضرائب.",
      en: "It is the most widely used efficiency measure in banking and appears in investor presentations, digital transformation plans, and cost programmes. Each percentage point represents a material amount of pre-provision profit.",
    },
    interpretation: {
      ar: "نسبة 60% تعني أن البنك ينفق 60 وحدة عملة تشغيليًا مقابل كل 100 وحدة دخل تشغيلي، ويبقى 40 قبل مخصصات خسائر الائتمان والضرائب. النسبة تتحرك بطرفين: قد تتحسن لأن الدخل ارتفع مع ثبات التكاليف (مثلًا بسبب ارتفاع أسعار الفائدة) لا لأن الإدارة أصبحت أكفأ.",
      en: "A 60% ratio means the bank spends 60 currency units in operating costs for every 100 of operating income, leaving 40 before credit-loss provisions and tax. The ratio moves on two sides: it may improve because income rose with flat costs (for example from higher interest rates), not because management became more efficient.",
    },
    formula: "Cost-to-Income % = Operating Expenses / Defined Operating Income x 100",
    numerator: {
      ar: "المصروفات التشغيلية للفترة (الموظفون، والمباني، والتقنية، والاستهلاك، والمصروفات العمومية)، وعادة دون مخصصات خسائر الائتمان، مع استبعاد البنود التي تنص السياسة على استبعادها.",
      en: "Operating expenses for the period (staff, premises, technology, depreciation, general and administrative), usually excluding credit-loss provisions, and excluding items the policy says to exclude.",
    },
    denominator: {
      ar: "الدخل التشغيلي المحدد للفترة، ويشمل عادة صافي دخل الفوائد وصافي الرسوم والعمولات ودخل التداول وأي دخل تشغيلي آخر، وفق تعريف سياسة التقرير.",
      en: "Defined operating income for the period, usually net interest income, net fees and commissions, trading income, and other operating income, per the reporting policy.",
    },
    timeGrain: {
      ar: "ربعي أو سنوي أو تراكمي منذ بداية السنة. البسط والمقام تدفقات قابلة للجمع عبر الوقت، لكن النسبة نفسها تُحسب من المجموعين لا من متوسط النسب الشهرية.",
      en: "Quarterly, annual, or year-to-date. Numerator and denominator are flows that sum over time, but the ratio itself is computed from the two totals, not from averaging monthly ratios.",
    },
    direction: {
      rising: {
        ar: "الارتفاع يعني أن التكاليف تنمو أسرع من الدخل: قد يكون استثمارًا مقصودًا في التقنية أو التوسع، أو ضغطًا على الدخل من انخفاض الهوامش.",
        en: "A rise means costs are growing faster than income: it may be deliberate investment in technology or expansion, or pressure on income from shrinking margins.",
      },
      falling: {
        ar: "الانخفاض يعني كفاءة أعلى ظاهريًا، لكن تحقق هل السبب خفض تكاليف فعلي أم ارتفاع دخل مؤقت أم بند غير متكرر في الدخل.",
        en: "A fall suggests higher efficiency, but check whether the cause is real cost reduction, a temporary income boost, or a non-recurring income item.",
      },
      caveat: {
        ar: "الأقل أفضل عمومًا، لكن خفض النسبة بتقليص الاستثمار في الأنظمة أو الرقابة قد يرفع مخاطر التشغيل والامتثال لاحقًا. قارن دائمًا بخطة المؤسسة نفسها وبنماذج أعمال مماثلة، لا بأرقام عامة.",
        en: "Lower is generally better, but cutting the ratio by under-investing in systems or controls can raise operational and compliance risk later. Compare with the institution's own plan and similar business models, not with generic figures.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "المصروفات التشغيلية", en: "Operating expenses" }, value: "60,000,000" },
        { label: { ar: "الدخل التشغيلي", en: "Operating income" }, value: "100,000,000" },
      ],
      steps: [
        { label: { ar: "نسبة التكلفة إلى الدخل", en: "Cost-to-income ratio" }, expression: "60,000,000 ÷ 100,000,000 × 100 = 60.0%" },
        { label: { ar: "الربح التشغيلي قبل المخصصات", en: "Pre-provision operating profit" }, expression: "100,000,000 − 60,000,000 = 40,000,000" },
      ],
      result: { label: { ar: "نسبة التكلفة إلى الدخل", en: "Cost-to-income ratio" }, value: "60.0%" },
      reading: {
        ar: "كل 100 وحدة دخل تشغيلي تكلف 60 وحدة لتحقيقها، ويتبقى 40 مليونًا قبل مخصصات خسائر الائتمان والضرائب. معرفة أي بنود التكلفة والدخل تغيرت تتطلب تفكيك الطرفين لا الاكتفاء بالنسبة.",
        en: "Each 100 of operating income costs 60 to generate, leaving 40 million before credit-loss provisions and tax. Knowing which cost and income lines moved requires decomposing both sides rather than stopping at the ratio.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "نسبة التكلفة إلى الدخل من دفتر الأستاذ مع تصنيف الحسابات", en: "Cost-to-income from the general ledger with an account mapping" },
        code: `-- The inclusion rules live in the 'Account' mapping, not in the measure:
-- each GL account is tagged "Operating Expense", "Operating Income", or "Excluded".

Operating Expenses :=
CALCULATE (
    SUM ( 'GLEntry'[Amount] ),
    'Account'[CirClass] = "Operating Expense"
)

Operating Income :=
CALCULATE (
    SUM ( 'GLEntry'[Amount] ),
    'Account'[CirClass] = "Operating Income"
)

-- Amounts are flows, so SUM across dates is correct here.
-- The ratio is undefined when operating income is zero or negative.
Cost-to-Income % :=
VAR Expenses = [Operating Expenses]
VAR Income = [Operating Income]
RETURN
    IF ( Income > 0, DIVIDE ( Expenses, Income ) )`,
        assumptions: [
          {
            ar: "'GLEntry' يحتوي قيود دفتر الأستاذ بحبيبية حساب × مركز تكلفة × يوم ترحيل، ومرتبط بـ 'Account' و'Date'.",
            en: "'GLEntry' holds ledger entries at account x cost centre x posting day and relates to 'Account' and 'Date'.",
          },
          {
            ar: "المبالغ مخزّنة بإشارة التقرير: الدخل والمصروف كلاهما موجب. إن كانت بإشارة مدين/دائن المحاسبية فاعكس إشارة الدخل قبل القسمة.",
            en: "Amounts are stored with reporting sign: both income and expense are positive. If they carry accounting debit/credit signs, flip the income sign before dividing.",
          },
          {
            ar: "العمود CirClass يعكس سياسة التقرير المعتمدة (مثل استبعاد مخصصات خسائر الائتمان والبنود غير المتكررة) ويُحدَّث بقرار مالي موثق لا داخل Power BI.",
            en: "CirClass reflects the approved reporting policy (such as excluding credit-loss provisions and non-recurring items) and is maintained by a documented finance decision, not inside Power BI.",
          },
          {
            ar: "IF دون فرع بديل تعيد BLANK عندما يكون الدخل صفرًا أو سالبًا، لأن النسبة حينها لا تحمل معنى اقتصاديًا.",
            en: "IF without an else branch returns BLANK when income is zero or negative, because the ratio then has no economic meaning.",
          },
        ],
        requires: ["GLEntry[Amount]", "Account[CirClass]", "Date[Date]"],
      },
    ],
    model: [
      {
        table: "GLEntry",
        grain: { ar: "حساب × مركز تكلفة × يوم ترحيل", en: "Account x cost centre x posting day" },
        columns: ["PostingDate", "AccountId", "CostCentreId", "SegmentId", "Amount"],
        role: { ar: "جدول حقائق التدفقات المالية؛ مصدر البسط والمقام", en: "Financial flow fact; source of numerator and denominator" },
      },
      {
        table: "Account",
        grain: { ar: "حساب دفتر أستاذ واحد لكل صف", en: "One GL account per row" },
        columns: ["AccountId", "AccountName", "PlLine", "CirClass"],
        role: { ar: "تصنيف الحسابات إلى مصروف تشغيلي أو دخل تشغيلي أو مستبعد", en: "Maps accounts to operating expense, operating income, or excluded" },
      },
      {
        table: "CostCentre",
        grain: { ar: "مركز تكلفة واحد لكل صف", en: "One cost centre per row" },
        columns: ["CostCentreId", "CostCentreName", "BusinessUnit"],
        role: { ar: "التقسيم حسب وحدة العمل", en: "Breakdown by business unit" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "QuarterKey", "FiscalYear"],
        role: { ar: "جدول تاريخ معلّم مرتبط بـ PostingDate", en: "Marked date table related to PostingDate" },
      },
    ],
    visuals: [
      {
        pattern: "period-over-period",
        why: {
          ar: "اتجاه النسبة ربعًا بعد ربع وعامًا بعد عام هو الطريقة الأساسية لعرضها للإدارة.",
          en: "The quarter-on-quarter and year-on-year trend is the primary way to present the ratio to management.",
        },
      },
      {
        pattern: "waterfall-variance",
        why: {
          ar: "يفكك تغير النسبة بين فترتين إلى أثر نمو الدخل وأثر كل بند من بنود التكلفة، كما يطلب المرجع (تفصيل المصروفات والدخل).",
          en: "Decomposes the change between two periods into the income-growth effect and each cost line's effect, matching the reference's call for expense and income breakdowns.",
        },
      },
      {
        pattern: "pl-matrix",
        why: {
          ar: "مصفوفة بنود الدخل والمصروف حسب الفترة أو وحدة العمل تُظهر المكونات التي بُنيت منها النسبة.",
          en: "A matrix of income and expense lines by period or business unit shows the components the ratio is built from.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "البنوك تعرّف الدخل التشغيلي والبنود المستبعدة بطرق مختلفة. اتبع سياسة التقرير المعتمدة ووثّقها، ولا تقارن نسبتك بنسبة منشورة لبنك آخر دون مطابقة التعريف.",
        en: "Banks define operating income and excluded items differently. Follow and document the approved reporting policy, and do not compare your ratio with another bank's published figure without reconciling definitions.",
      },
      {
        ar: "حساب متوسط النسب الشهرية للحصول على النسبة السنوية. الصحيح قسمة مجموع المصروفات السنوية على مجموع الدخل السنوي.",
        en: "Averaging monthly ratios to get the annual ratio. The correct approach divides total annual expenses by total annual income.",
      },
      {
        ar: "نسبة وحدات العمل دون توزيع التكاليف المركزية. وحدة لا تتحمل تكاليف التقنية والإدارة العامة تبدو أكفأ بكثير مما هي عليه؛ اذكر صراحة هل النسبة قبل التوزيع أم بعده.",
        en: "Business-unit ratios without allocating central costs. A unit that bears no share of technology and head-office cost looks far more efficient than it is; state explicitly whether the ratio is before or after allocation.",
      },
      {
        ar: "خلط إشارات المبالغ المحاسبية. الدخل مسجل عادة بإشارة دائنة سالبة، والقسمة المباشرة تعطي نسبة سالبة أو مضللة.",
        en: "Mixing accounting signs. Income is usually recorded as a negative credit, and dividing directly produces a negative or misleading ratio.",
      },
      {
        ar: "تجاهل البنود غير المتكررة في الدخل مثل أرباح بيع أصول. هذه تخفض النسبة مؤقتًا وتجعل الفترة التالية تبدو تدهورًا.",
        en: "Ignoring non-recurring income such as gains on asset sales. These temporarily lower the ratio and make the following period look like a deterioration.",
      },
    ],
    variants: [
      {
        label: { ar: "النسبة المعدلة (دون البنود غير المتكررة)", en: "Adjusted (underlying) ratio" },
        formula: "(Operating Expenses - Notable Cost Items) / (Operating Income - Notable Income Items)",
        difference: {
          ar: "تستبعد بنودًا تحددها الإدارة مثل تكاليف إعادة الهيكلة أو أرباح بيع أصول. أفضل للمقارنة بين الفترات، لكن قائمة الاستبعادات يجب أن تكون ثابتة وموثقة.",
          en: "Excludes management-designated items such as restructuring costs or gains on asset sales. Better for period comparison, but the exclusion list must be stable and documented.",
        },
      },
      {
        label: { ar: "النسبة شاملة تكلفة المخاطر", en: "Ratio including cost of risk" },
        formula: "(Operating Expenses + Credit Loss Provisions) / Operating Income",
        difference: {
          ar: "تضيف مخصصات خسائر الائتمان إلى التكاليف، فتربط الكفاءة بجودة الإقراض. رقم مختلف جوهريًا ولا يُعرض تحت اسم نسبة التكلفة إلى الدخل.",
          en: "Adds credit-loss provisions to costs, linking efficiency with lending quality. A materially different number that must not carry the plain cost-to-income label.",
        },
      },
      {
        label: { ar: "نسبة وحدة العمل بعد توزيع التكاليف", en: "Fully allocated business-unit ratio" },
        formula: "(Direct Expenses + Allocated Central Costs) / Business Unit Operating Income",
        difference: {
          ar: "تعتمد على مفاتيح توزيع داخلية، فتغيير المفتاح يغير النسبة دون أي تغير تشغيلي. مفيدة للمقارنة الداخلية فقط.",
          en: "Depends on internal allocation keys, so changing a key moves the ratio with no operational change. Useful for internal comparison only.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "النسبة تساوي 1 ناقص هامش الربح التشغيلي قبل المخصصات إلى الدخل: 60% تعني حتمًا أن 40% من الدخل تبقى قبل المخصصات والضرائب.",
          en: "The ratio equals 1 minus pre-provision operating profit over income: 60% necessarily means 40% of income remains before provisions and tax.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "استبعاد مخصصات خسائر الائتمان من البسط، وإدراج صافي دخل الفوائد وصافي الرسوم في المقام، ممارسة شائعة في التقارير المصرفية.",
          en: "Excluding credit-loss provisions from the numerator and including net interest income and net fees in the denominator is common practice in bank reporting.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "قائمة البنود المستبعدة، ومعاملة الاستهلاك والإطفاء، ومفاتيح توزيع التكاليف المركزية، تحددها سياسة التقرير في كل مؤسسة.",
          en: "The list of excluded items, the treatment of depreciation and amortisation, and central cost allocation keys are set by each institution's reporting policy.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (60 مليونًا مقابل 100 مليون) من تأليفنا للتوضيح، وليست هدفًا أو مرجعًا للقطاع.",
          en: "The example figures (60 million against 100 million) are invented for illustration and are not a target or industry benchmark.",
        },
      },
    ],
    related: ["nim", "opex-variance", "npl-ratio"],
    exercise: {
      prompt: {
        ar: "بنك سجل خلال السنة مصروفات تشغيلية 45 مليونًا، وصافي دخل فوائد 50 مليونًا، وصافي رسوم وعمولات 20 مليونًا، ودخل تداول 5 ملايين، وربحًا لمرة واحدة من بيع مبنى 5 ملايين. سياسة التقرير تستبعد أرباح بيع الأصول. احسب النسبة وفق السياسة، ثم احسبها لو أُدرج الربح خطأً.",
        en: "A bank recorded for the year operating expenses of 45 million, net interest income of 50 million, net fees and commissions of 20 million, trading income of 5 million, and a one-off gain of 5 million from selling a building. Reporting policy excludes gains on asset sales. Compute the ratio under the policy, then compute it if the gain were wrongly included.",
      },
      hint: {
        ar: "اجمع بنود الدخل المؤهلة أولًا، ثم أضف الربح غير المتكرر في الحساب الثاني فقط.",
        en: "Sum the qualifying income lines first, then add the one-off gain only in the second calculation.",
      },
      answer: {
        ar: "وفق السياسة: الدخل التشغيلي = 50 + 20 + 5 = 75 مليونًا، والنسبة = 45 ÷ 75 = 60.0%. مع إدراج الربح خطأً: الدخل = 80 مليونًا، والنسبة = 45 ÷ 80 = 56.25%. البند غير المتكرر يُظهر تحسنًا بنحو 3.75 نقطة لا علاقة له بالكفاءة، وسيبدو العام التالي تدهورًا عند غيابه.",
        en: "Under the policy: operating income = 50 + 20 + 5 = 75 million, and the ratio = 45 ÷ 75 = 60.0%. With the gain wrongly included: income = 80 million, and the ratio = 45 ÷ 80 = 56.25%. The one-off item shows an improvement of about 3.75 points unrelated to efficiency, and next year will look like a deterioration when it is absent.",
      },
    },
    references: [
      {
        title: "CALCULATE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/calculate-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع ترشيح قيود الدفتر حسب تصنيف الحساب لبناء البسط والمقام.",
          en: "Reference for filtering ledger entries by account class to build numerator and denominator.",
        },
      },
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "توثيق القسمة الآمنة التي تعيد BLANK عند القسمة على صفر.",
          en: "Documents safe division that returns BLANK on division by zero.",
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Net Interest Margin                                                 */
  /* ------------------------------------------------------------------ */
  {
    id: "nim",
    slug: "nim",
    name: "Net Interest Margin",
    acronym: "NIM",
    nameAr: "هامش صافي الفائدة",
    domains: ["banking", "finance"],
    category: { ar: "الربحية", en: "Profitability" },
    difficulty: "advanced",
    unit: { ar: "نسبة مئوية سنوية", en: "Annualised percentage" },
    aggregation: "ratio",
    definition: {
      ar: "صافي دخل الفوائد (دخل الفوائد ناقص مصروف الفوائد) مقارنة بمتوسط الأصول المدرة للفائدة، معبّرًا عنه كنسبة سنوية. يقيس ما يكسبه البنك من الفرق بين ما يتقاضاه على الإقراض والاستثمار وما يدفعه على التمويل، نسبةً إلى حجم الأصول التي تولّد هذا الدخل.",
      en: "Net interest income (interest income minus interest expense) relative to average interest-earning assets, expressed as an annual rate. It measures what the bank earns from the gap between what it charges on lending and investments and what it pays for funding, relative to the assets that generate that income.",
    },
    whyItMatters: {
      ar: "صافي دخل الفوائد هو المصدر الأكبر للدخل في معظم البنوك التجارية، والهامش يلخص أثر أسعار الفائدة وتسعير المنتجات وتكلفة التمويل ومزيج الأصول في رقم واحد. أي تغير فيه ينعكس مباشرة على الربحية ونسبة التكلفة إلى الدخل.",
      en: "Net interest income is the largest income source for most commercial banks, and the margin summarises the effect of interest rates, product pricing, funding cost, and asset mix in one number. Any change flows directly into profitability and the cost-to-income ratio.",
    },
    interpretation: {
      ar: "هامش 3% يعني أن كل 100 وحدة عملة من الأصول المدرة للفائدة تولّد في المتوسط 3 وحدات صافي دخل فوائد في السنة. المؤشر سنوي بطبيعته: رقم ربعي غير معدّل للسنة سيبدو ربع القيمة تقريبًا ويُقرأ خطأً على أنه انهيار.",
      en: "A 3% margin means every 100 currency units of interest-earning assets generate, on average, 3 units of net interest income a year. The metric is annual by nature: an unannualised quarterly figure looks roughly a quarter of the value and is misread as a collapse.",
    },
    formula: "NIM % = Annualised Net Interest Income / Average Interest-Earning Assets x 100",
    numerator: {
      ar: "صافي دخل الفوائد للفترة (دخل الفوائد ناقص مصروف الفوائد) على أساس الاستحقاق، معدّلًا إلى أساس سنوي إن كانت الفترة أقصر من سنة بطريقة احتساب أيام ثابتة.",
      en: "Net interest income for the period (interest income minus interest expense) on an accrual basis, annualised with a consistent day-count method when the period is shorter than a year.",
    },
    denominator: {
      ar: "متوسط رصيد الأصول المدرة للفائدة خلال نفس الفترة (القروض، والاستثمارات في أدوات الدين، والإيداعات لدى البنوك، وما شابه وفق تعريف المؤسسة)، ويفضّل متوسط الأرصدة اليومية على متوسط رصيدي البداية والنهاية.",
      en: "The average balance of interest-earning assets over the same period (loans, debt securities, interbank placements and similar, per the institution's definition), preferably the average of daily balances rather than the mean of opening and closing.",
    },
    timeGrain: {
      ar: "شهري أو ربعي أو تراكمي منذ بداية السنة، ودائمًا معدّل سنويًا. البسط تدفق قابل للجمع، والمقام متوسط أرصدة شبه تجميعية، ولا يُجمع أي منهما مع الآخر بطريقة الآخر.",
      en: "Monthly, quarterly, or year-to-date, always annualised. The numerator is an additive flow, the denominator an average of semi-additive balances, and neither may be aggregated the other's way.",
    },
    direction: {
      rising: {
        ar: "الارتفاع يعني عادة أن عوائد الأصول ارتفعت أسرع من تكلفة التمويل، أو تحولًا في المزيج نحو قروض أعلى عائدًا، أو زيادة في الودائع منخفضة التكلفة.",
        en: "A rise usually means asset yields rose faster than funding costs, a mix shift toward higher-yield loans, or growth in low-cost deposits.",
      },
      falling: {
        ar: "الانخفاض قد يعني منافسة سعرية على القروض، أو ارتفاع تكلفة الودائع، أو تحول السيولة إلى أصول منخفضة العائد، أو ارتفاع القروض غير المنتظمة التي يتوقف الاعتراف بفوائدها أو يتغير.",
        en: "A fall may reflect price competition on loans, higher deposit costs, liquidity shifting into low-yield assets, or more non-performing loans whose interest recognition stops or changes.",
      },
      caveat: {
        ar: "الأعلى ليس أفضل تلقائيًا: هامش مرتفع قد يأتي من الإقراض لشرائح أعلى مخاطرة، فيظهر لاحقًا في نسبة القروض غير المنتظمة والمخصصات. اقرأه مع تكلفة المخاطر ومع أثري السعر والحجم.",
        en: "Higher is not automatically better: a high margin may come from lending to riskier segments, which later shows up in the NPL ratio and provisions. Read it with cost of risk and with the rate and volume effects.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "صافي دخل الفوائد السنوي", en: "Annual net interest income" }, value: "18,000,000" },
        { label: { ar: "متوسط الأصول المدرة للفائدة", en: "Average interest-earning assets" }, value: "600,000,000" },
      ],
      steps: [
        { label: { ar: "هامش صافي الفائدة", en: "Net interest margin" }, expression: "18,000,000 ÷ 600,000,000 × 100 = 3.0%" },
        { label: { ar: "للمقارنة: ربع واحد دون تعديل سنوي", en: "For contrast: one quarter without annualising" }, expression: "4,500,000 ÷ 600,000,000 × 100 = 0.75%" },
      ],
      result: { label: { ar: "هامش صافي الفائدة السنوي", en: "Annual net interest margin" }, value: "3.0%" },
      reading: {
        ar: "كل 100 وحدة من الأصول المدرة للفائدة ولّدت 3 وحدات صافي دخل فوائد خلال السنة. الخطوة الثانية تُظهر الخطأ الشائع: لو كان الدخل موزعًا بالتساوي وعُرض ربع واحد دون تعديل سنوي لظهر 0.75% بدل 3%.",
        en: "Every 100 units of interest-earning assets generated 3 units of net interest income over the year. The second step shows the common error: if income were spread evenly and one quarter were shown without annualising, it would read 0.75% instead of 3%.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "هامش صافي الفائدة بمتوسط أرصدة يومية وتعديل سنوي", en: "NIM with average daily balances and annualisation" },
        code: `-- Numerator: a flow, so SUM across dates is correct.
Net Interest Income :=
CALCULATE ( SUM ( 'GLEntry'[Amount] ), 'Account'[NimClass] = "Interest Income" )
    - CALCULATE ( SUM ( 'GLEntry'[Amount] ), 'Account'[NimClass] = "Interest Expense" )

-- Denominator: a balance, so it is AVERAGED over days, never summed.
Earning Assets Balance :=
SUM ( 'EarningAssetDaily'[Balance] )

Average Earning Assets :=
AVERAGEX (
    FILTER ( VALUES ( 'Date'[Date] ), NOT ISBLANK ( [Earning Assets Balance] ) ),
    [Earning Assets Balance]
)

-- Days actually loaded in the period: a year-to-date view mid-year
-- annualises over elapsed days, not over the whole calendar year.
Days With Balances :=
COUNTROWS (
    FILTER ( VALUES ( 'Date'[Date] ), NOT ISBLANK ( [Earning Assets Balance] ) )
)

NIM % :=
VAR AnnualisedNII =
    DIVIDE ( [Net Interest Income] * 365, [Days With Balances] )
RETURN
    DIVIDE ( AnnualisedNII, [Average Earning Assets] )`,
        assumptions: [
          {
            ar: "'EarningAssetDaily' يحتوي رصيدًا لكل أصل مدر للفائدة لكل يوم تقويمي، مع ترحيل رصيد آخر يوم عمل إلى العطل ونهايات الأسبوع، حتى يكون المتوسط متوسطًا يوميًا حقيقيًا.",
            en: "'EarningAssetDaily' holds a balance per interest-earning asset for every calendar day, with the last business-day balance carried into weekends and holidays, so the average is a true daily average.",
          },
          {
            ar: "نطاق الأصول المدرة للفائدة (مثل استبعاد القروض غير المنتظمة أو الأرصدة لدى البنك المركزي غير المدرة) محدد في مرحلة التحميل وفق تعريف المؤسسة.",
            en: "The scope of interest-earning assets (such as excluding non-performing loans or non-remunerated central bank balances) is applied at load time per the institution's definition.",
          },
          {
            ar: "دخل ومصروف الفوائد مخزّنان بإشارة موجبة وعلى أساس الاستحقاق، ومحمّلان حتى نفس تاريخ القطع الذي تُحمّل حتى الأرصدة؛ وإلا اختل التعديل السنوي.",
            en: "Interest income and expense are stored as positive amounts on an accrual basis and loaded up to the same cut-off date as the balances; otherwise the annualisation is distorted.",
          },
          {
            ar: "أساس 365 يومًا اختيار شائع لكنه ليس الوحيد؛ بعض المؤسسات تستخدم عدد أيام السنة الفعلي (366 في السنة الكبيسة) أو 360. غيّر الرقم ليطابق السياسة.",
            en: "A 365-day basis is a common choice but not the only one; some institutions use actual days in the year (366 in a leap year) or 360. Change the constant to match policy.",
          },
          {
            ar: "صافي دخل الفوائد هنا على مستوى الدفتر؛ تقسيمه حسب المنتج يتطلب تسعير تحويل الأموال (FTP) مخزّنًا في جدول الحقائق، وإلا ترشيح المنتج لن يؤثر على البسط بشكل صحيح.",
            en: "Net interest income here is at ledger level; splitting it by product requires funds transfer pricing (FTP) stored in the fact table, otherwise a product filter will not affect the numerator correctly.",
          },
        ],
        requires: ["GLEntry[Amount]", "Account[NimClass]", "EarningAssetDaily[Balance]", "Date[Date]"],
      },
    ],
    model: [
      {
        table: "GLEntry",
        grain: { ar: "حساب × يوم ترحيل (× منتج إن توفر FTP)", en: "Account x posting day (x product when FTP is available)" },
        columns: ["PostingDate", "AccountId", "ProductId", "Amount"],
        role: { ar: "مصدر دخل ومصروف الفوائد (البسط)", en: "Source of interest income and expense (numerator)" },
      },
      {
        table: "EarningAssetDaily",
        grain: { ar: "أصل أو حساب × يوم تقويمي", en: "Asset or account x calendar day" },
        columns: ["BalanceDate", "AssetId", "ProductId", "Balance", "InterestRate"],
        role: { ar: "لقطات أرصدة يومية؛ مصدر متوسط الأصول المدرة للفائدة (المقام)", en: "Daily balance snapshots; source of average interest-earning assets (denominator)" },
      },
      {
        table: "Account",
        grain: { ar: "حساب دفتر أستاذ واحد لكل صف", en: "One GL account per row" },
        columns: ["AccountId", "AccountName", "NimClass"],
        role: { ar: "تصنيف الحسابات إلى دخل فوائد أو مصروف فوائد", en: "Maps accounts to interest income or interest expense" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "QuarterKey", "Year"],
        role: { ar: "جدول تاريخ معلّم مرتبط بـ PostingDate وBalanceDate", en: "Marked date table related to PostingDate and BalanceDate" },
      },
    ],
    visuals: [
      {
        pattern: "period-over-period",
        why: {
          ar: "اتجاه الهامش السنوي المعدّل عبر الأشهر أو الأرباع، كما يقترح المرجع، هو العرض الأساسي.",
          en: "The trend of the annualised margin across months or quarters, as the reference suggests, is the primary view.",
        },
      },
      {
        pattern: "waterfall-variance",
        why: {
          ar: "جسر يفكك تغير صافي دخل الفوائد إلى أثر السعر وأثر الحجم وأثر المزيج، وهو سياق السعر والحجم الذي يطلبه المرجع.",
          en: "A bridge that splits the change in net interest income into rate, volume, and mix effects, which is the rate/volume context the reference calls for.",
        },
      },
      {
        pattern: "decomposition-tree",
        why: {
          ar: "يوضح مساهمة كل منتج في الهامش، بشرط توفر تسعير تحويل الأموال.",
          en: "Shows each product's contribution to the margin, provided funds transfer pricing is available.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عدم تعديل الفترات القصيرة إلى أساس سنوي، أو تعديلها بطرق مختلفة بين التقارير (×4 مرة، و365 ÷ الأيام مرة أخرى). اختر طريقة واحدة ووثّقها.",
        en: "Not annualising shorter periods, or annualising them inconsistently across reports (x4 in one, 365 / days in another). Choose one method and document it.",
      },
      {
        ar: "جمع أرصدة الأصول عبر الأيام بدل حساب متوسطها. رصيد 600 مليون لمدة 30 يومًا ليس 18 مليارًا؛ المقام متوسط لا مجموع.",
        en: "Summing asset balances across days instead of averaging them. A 600 million balance held for 30 days is not 18 billion; the denominator is an average, not a sum.",
      },
      {
        ar: "استخدام تعريف غير متسق للأصول المدرة للفائدة، أو متوسط رصيدي البداية والنهاية فقط في فترة شهدت نموًا كبيرًا في منتصفها، مما يحرّف المقام.",
        en: "Using an inconsistent definition of interest-earning assets, or averaging only opening and closing balances in a period with large mid-period growth, which distorts the denominator.",
      },
      {
        ar: "هامش المنتج دون تسعير تحويل الأموال: القروض تبدو شديدة الربحية والودائع خاسرة لأن تكلفة التمويل لا تُنسب إلى الأصل الذي مولته.",
        en: "Product margins without funds transfer pricing: loans look hugely profitable and deposits loss-making because funding cost is not attributed to the asset it funded.",
      },
      {
        ar: "حساب متوسط هوامش الأشهر للحصول على هامش الربع. الصحيح: صافي دخل الربع المعدّل سنويًا مقسومًا على متوسط أرصدة الربع كله.",
        en: "Averaging monthly margins to get the quarterly margin. The correct approach divides annualised quarterly net interest income by the average balance over the whole quarter.",
      },
    ],
    variants: [
      {
        label: { ar: "الهامش على إجمالي الأصول", en: "Margin on average total assets" },
        formula: "Annualised Net Interest Income / Average Total Assets",
        difference: {
          ar: "أسهل حسابًا من البيانات المنشورة، لكنه أقل دائمًا من الهامش على الأصول المدرة لأن المقام يشمل أصولًا لا تدر فائدة. لا يُخلط بين الاثنين.",
          en: "Easier to compute from published data, but always lower than the earning-asset margin because the denominator includes non-earning assets. The two must not be mixed.",
        },
      },
      {
        label: { ar: "هامش الفائدة الصافي (Spread)", en: "Net interest spread" },
        formula: "Yield on Interest-Earning Assets - Cost of Interest-Bearing Liabilities",
        difference: {
          ar: "فرق بين معدلين لا نسبة إلى الأصول، فيتجاهل أثر التمويل بلا تكلفة مثل الحسابات الجارية ورأس المال. عادة أقل من NIM عندما يوجد تمويل مجاني.",
          en: "A difference between two rates rather than a ratio to assets, so it ignores the benefit of free funding such as current accounts and equity. Usually below NIM when free funding exists.",
        },
      },
      {
        label: { ar: "الهامش المعادل ضريبيًا", en: "Fully taxable-equivalent NIM" },
        formula: "(Net Interest Income + Tax-Equivalent Adjustment) / Average Interest-Earning Assets",
        difference: {
          ar: "يُستخدم في أسواق فيها دخل فوائد معفى ضريبيًا، فيعدّله ليقارن بالدخل الخاضع للضريبة. لا ينطبق حيث لا يوجد هذا الإعفاء.",
          en: "Used in markets with tax-exempt interest income, grossing it up to compare with taxable income. Not applicable where no such exemption exists.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "بنفس صافي الدخل اليومي ونفس متوسط الأصول، هامش ربع غير معدّل سنويًا يساوي تقريبًا ربع الهامش السنوي، ولهذا يجب التعديل قبل أي مقارنة بين فترات مختلفة الطول.",
          en: "With the same daily net income and the same average assets, an unannualised quarterly margin is roughly a quarter of the annual margin, which is why annualisation is required before comparing periods of different lengths.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "قسمة صافي دخل الفوائد على متوسط الأصول المدرة للفائدة، مع التعبير بنسبة سنوية، هي الصيغة الشائعة للمؤشر في التحليل المصرفي.",
          en: "Dividing net interest income by average interest-earning assets and expressing it as an annual rate is the common form of the metric in bank analysis.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "تعريف الأصول المدرة للفائدة، وأساس احتساب الأيام، ومعاملة فوائد القروض غير المنتظمة، ومنهجية تسعير تحويل الأموال، قرارات تحددها سياسة المؤسسة والمعايير المحاسبية المطبقة.",
          en: "The definition of interest-earning assets, the day-count basis, the treatment of interest on non-performing loans, and the FTP methodology are set by institutional policy and the applicable accounting standards.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (18 مليونًا على 600 مليون، والربع البالغ 4.5 ملايين) من تأليفنا للتوضيح، وليست مرجعًا لهوامش أي سوق.",
          en: "The example figures (18 million on 600 million, and the 4.5 million quarter) are invented for illustration and are not a benchmark for any market's margins.",
        },
      },
    ],
    related: ["cost-to-income-ratio", "loan-to-deposit-ratio", "npl-ratio"],
    exercise: {
      prompt: {
        ar: "في ربع مدته 90 يومًا سجل بنك صافي دخل فوائد 7.2 ملايين، وكان متوسط أرصدته اليومية من الأصول المدرة للفائدة 960 مليونًا. احسب الهامش غير المعدّل، ثم الهامش السنوي بأساس 365 يومًا، ثم بطريقة الضرب في 4، وفسّر الفرق.",
        en: "In a 90-day quarter a bank recorded net interest income of 7.2 million, with average daily interest-earning assets of 960 million. Compute the unannualised margin, then the annualised margin on a 365-day basis, then using x4, and explain the difference.",
      },
      hint: {
        ar: "التعديل بالأيام يضرب في 365 ÷ 90، والضرب في 4 يفترض أن كل ربع 91.25 يومًا.",
        en: "Day-based annualisation multiplies by 365 / 90; multiplying by 4 assumes every quarter is 91.25 days.",
      },
      answer: {
        ar: "غير معدّل: 7.2 ÷ 960 = 0.75%. بأساس الأيام: 7.2 × 365 ÷ 90 = 29.2 مليونًا، والهامش = 29.2 ÷ 960 ≈ 3.04%. بالضرب في 4: 28.8 ÷ 960 = 3.00%. الفرق نحو 0.04 نقطة سببه أن الربع أقصر من ربع سنة متوسط؛ الطريقتان مقبولتان لكن خلطهما بين التقارير يخلق تغيرات وهمية، فيجب تثبيت طريقة واحدة.",
        en: "Unannualised: 7.2 ÷ 960 = 0.75%. Day basis: 7.2 × 365 ÷ 90 = 29.2 million, margin = 29.2 ÷ 960 ≈ 3.04%. Using x4: 28.8 ÷ 960 = 3.00%. The gap of about 0.04 points arises because this quarter is shorter than an average quarter; both methods are acceptable, but mixing them across reports creates phantom movements, so one method must be fixed.",
      },
    },
    references: [
      {
        title: "AVERAGEX function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/averagex-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "أساس حساب متوسط الأرصدة اليومية بالتكرار على الأيام بدل جمعها.",
          en: "The basis for averaging daily balances by iterating over days instead of summing them.",
        },
      },
      {
        title: "COUNTROWS function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/countrows-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "يُستخدم لعدّ الأيام المحمّلة فعلًا في الفترة لغرض التعديل السنوي.",
          en: "Used to count the days actually loaded in the period for annualisation.",
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Loan-to-Deposit Ratio                                               */
  /* ------------------------------------------------------------------ */
  {
    id: "loan-to-deposit-ratio",
    slug: "loan-to-deposit-ratio",
    name: "Loan-to-Deposit Ratio",
    acronym: "LDR",
    nameAr: "نسبة القروض إلى الودائع",
    domains: ["banking", "finance"],
    category: { ar: "السيولة والتمويل", en: "Liquidity and funding" },
    difficulty: "beginner",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة رصيد القروض المحدد إلى رصيد ودائع العملاء المحدد في تاريخ معين. تصف العلاقة بين حجم الإقراض وحجم التمويل القادم من ودائع العملاء، ويتحدد نطاق البسط والمقام وفق تعريف المؤسسة أو الجهة الرقابية.",
      en: "The defined loan balance divided by the defined customer deposit balance at a given date. It describes the relationship between lending volume and funding from customer deposits, with numerator and denominator scope set by the institution's or the supervisor's definition.",
    },
    whyItMatters: {
      ar: "يعطي نظرة سريعة على مدى اعتماد الإقراض على ودائع العملاء مقابل مصادر تمويل أخرى كالاقتراض بين البنوك أو السندات. يُستخدم في التخطيط للنمو وفي حوارات لجان الأصول والخصوم، لكنه مؤشر علاقة لا تقييم كامل للسيولة.",
      en: "It gives a quick view of how far lending relies on customer deposits versus other funding such as interbank borrowing or bonds. It is used in growth planning and asset-liability committee discussions, but it is a relationship indicator, not a complete liquidity assessment.",
    },
    interpretation: {
      ar: "نسبة 70% تعني أن مقابل كل 100 وحدة ودائع عملاء توجد 70 وحدة قروض. نسبة منخفضة قد تعني سيولة وفيرة غير مستغلة، ومرتفعة قد تعني اعتمادًا أكبر على تمويل غير الودائع؛ الحد المقبول يختلف بين المؤسسات والأسواق ويُحدد داخليًا أو رقابيًا.",
      en: "A 70% ratio means there are 70 units of loans for every 100 units of customer deposits. A low ratio can mean ample unused liquidity; a high one can mean more reliance on non-deposit funding. The acceptable range differs across institutions and markets and is set internally or by the supervisor.",
    },
    formula: "LDR % = Defined Gross Loans / Defined Customer Deposits x 100",
    numerator: {
      ar: "رصيد القروض المحدد في تاريخ القياس (إجمالي أو صافٍ من المخصصات حسب التعريف)، مع توضيح إدراج أو استبعاد القروض بين البنوك وأي تعديلات رقابية.",
      en: "The defined loan balance at the measurement date (gross or net of provisions per the definition), stating whether interbank loans and any regulatory adjustments are included.",
    },
    denominator: {
      ar: "رصيد ودائع العملاء المحدد في نفس التاريخ، وعادة دون ودائع البنوك الأخرى، مع توضيح معاملة الودائع الحكومية وشهادات الإيداع وفق التعريف المعتمد.",
      en: "The defined customer deposit balance at the same date, usually excluding deposits from other banks, stating the treatment of government deposits and certificates of deposit per the adopted definition.",
    },
    timeGrain: {
      ar: "لقطة في نهاية الشهر أو يومية لفرق الخزينة. عند عرض فترة يُقرأ الرصيدان في آخر تاريخ مشترك، أو يُستخدم متوسط الأرصدة للطرفين إن نصت السياسة على ذلك.",
      en: "A month-end snapshot, or daily for treasury teams. For a period, read both balances at the last common date, or use average balances for both sides if the policy says so.",
    },
    direction: {
      rising: {
        ar: "الارتفاع يعني أن القروض تنمو أسرع من الودائع، مما قد يزيد الاعتماد على مصادر تمويل أخرى أو يضغط على السيولة.",
        en: "A rise means loans are growing faster than deposits, which may increase reliance on other funding sources or pressure liquidity.",
      },
      falling: {
        ar: "الانخفاض يعني أن الودائع تنمو أسرع من القروض، أي سيولة أوفر لكن ربما عائد أقل لأن الأموال تذهب إلى أصول أقل عائدًا.",
        en: "A fall means deposits are growing faster than loans: more liquidity, but possibly lower returns as funds go into lower-yield assets.",
      },
      caveat: {
        ar: "لا اتجاه أفضل مطلقًا: النسبة الملائمة تعتمد على نموذج العمل ومصادر التمويل الأخرى والإطار الرقابي. وهي ليست تقييمًا مستقلًا للسيولة؛ يجب قراءتها مع مؤشرات السيولة الرقابية المعتمدة لدى المؤسسة.",
        en: "Neither direction is better in absolute terms: the right level depends on business model, other funding sources, and the regulatory framework. It is not a standalone liquidity assessment; read it with the regulatory liquidity metrics the institution reports.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "رصيد القروض", en: "Loan balance" }, value: "700,000,000" },
        { label: { ar: "رصيد ودائع العملاء", en: "Customer deposit balance" }, value: "1,000,000,000" },
      ],
      steps: [
        { label: { ar: "نسبة القروض إلى الودائع", en: "Loan-to-deposit ratio" }, expression: "700,000,000 ÷ 1,000,000,000 × 100 = 70.0%" },
        { label: { ar: "ودائع غير موظفة في القروض", en: "Deposits not deployed in loans" }, expression: "1,000,000,000 − 700,000,000 = 300,000,000" },
      ],
      result: { label: { ar: "نسبة القروض إلى الودائع", en: "Loan-to-deposit ratio" }, value: "70.0%" },
      reading: {
        ar: "مقابل كل 100 وحدة ودائع توجد 70 وحدة قروض، و300 مليون من الودائع موظفة في أصول أخرى كالاستثمارات والنقد. هل هذا مناسب؟ الجواب في سياسة السيولة للمؤسسة لا في الرقم نفسه.",
        en: "There are 70 units of loans for every 100 of deposits, and 300 million of deposits are deployed in other assets such as investments and cash. Whether that is appropriate is answered by the institution's liquidity policy, not by the number itself.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "نسبة القروض إلى الودائع في آخر تاريخ مشترك", en: "LDR at the last common snapshot date" },
        code: `Loan Balance :=
CALCULATE (
    SUM ( 'LoanSnapshot'[GrossBalance] ),
    'LoanSnapshot'[IsInLdrScope] = TRUE ()
)

Customer Deposit Balance :=
CALCULATE (
    SUM ( 'DepositSnapshot'[Balance] ),
    'DepositSnapshot'[IsCustomerDeposit] = TRUE ()
)

-- Both sides are balances (semi-additive). Resolve ONE date on which both
-- tables have data, so loans and deposits are never read on different days.
Loan-to-Deposit % :=
VAR LastCommonDate =
    LASTNONBLANK (
        'Date'[Date],
        IF (
            NOT ISBLANK ( [Loan Balance] ) && NOT ISBLANK ( [Customer Deposit Balance] ),
            1
        )
    )
VAR Loans =
    CALCULATE ( [Loan Balance], LastCommonDate )
VAR Deposits =
    CALCULATE ( [Customer Deposit Balance], LastCommonDate )
RETURN
    DIVIDE ( Loans, Deposits )`,
        assumptions: [
          {
            ar: "'LoanSnapshot' و'DepositSnapshot' جدولا لقطات منفصلان (حساب × تاريخ)، وكلاهما مرتبط بجدول 'Date' المشترك على تاريخ اللقطة.",
            en: "'LoanSnapshot' and 'DepositSnapshot' are separate snapshot tables (account x date), both related to the shared 'Date' table on snapshot date.",
          },
          {
            ar: "IsInLdrScope وIsCustomerDeposit يعكسان التعريف المعتمد (مثل استبعاد القروض والودائع بين البنوك) ويُحسبان في مرحلة التحميل لا في المقياس.",
            en: "IsInLdrScope and IsCustomerDeposit reflect the adopted definition (such as excluding interbank loans and deposits) and are computed at load time, not in the measure.",
          },
          {
            ar: "الأرصدة بعملة التقرير ومحوّلة بسعر صرف تاريخ اللقطة نفسه للطرفين.",
            en: "Balances are in reporting currency, converted at the same snapshot-date rate on both sides.",
          },
          {
            ar: "المقياس صحيح فقط على أبعاد مشتركة بين الجدولين (التاريخ، الكيان، العملة). ترشيح منتج قروض لا يرشّح الودائع، فتظهر نسبة جزء من القروض إلى كل الودائع.",
            en: "The measure is valid only on dimensions shared by both tables (date, entity, currency). A loan-product filter does not filter deposits, producing a part of the loans over all the deposits.",
          },
        ],
        requires: ["LoanSnapshot[GrossBalance]", "LoanSnapshot[IsInLdrScope]", "DepositSnapshot[Balance]", "DepositSnapshot[IsCustomerDeposit]", "Date[Date]"],
      },
    ],
    model: [
      {
        table: "LoanSnapshot",
        grain: { ar: "قرض واحد × تاريخ لقطة", en: "One loan x snapshot date" },
        columns: ["SnapshotDate", "LoanId", "EntityId", "CurrencyCode", "GrossBalance", "IsInLdrScope"],
        role: { ar: "مصدر البسط (رصيد القروض)", en: "Source of the numerator (loan balance)" },
      },
      {
        table: "DepositSnapshot",
        grain: { ar: "حساب وديعة واحد × تاريخ لقطة", en: "One deposit account x snapshot date" },
        columns: ["SnapshotDate", "DepositAccountId", "EntityId", "CurrencyCode", "Balance", "IsCustomerDeposit", "DepositType"],
        role: { ar: "مصدر المقام (ودائع العملاء)", en: "Source of the denominator (customer deposits)" },
      },
      {
        table: "Entity",
        grain: { ar: "كيان قانوني واحد لكل صف", en: "One legal entity per row" },
        columns: ["EntityId", "EntityName", "Country"],
        role: { ar: "بُعد مشترك بين الجدولين للتقسيم حسب الكيان", en: "Dimension shared by both facts for breakdown by entity" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "Year"],
        role: { ar: "جدول تاريخ معلّم مشترك مرتبط بالجدولين", en: "Shared marked date table related to both facts" },
      },
    ],
    visuals: [
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "يعرض النسبة بجوار رصيدي القروض والودائع، فيرى القارئ هل تغيرت النسبة بسبب البسط أم المقام.",
          en: "Shows the ratio next to the loan and deposit balances, so the reader sees whether the numerator or the denominator moved.",
        },
      },
      {
        pattern: "period-over-period",
        why: {
          ar: "الاتجاه مع أرصدة القروض والودائع عبر الأشهر، كما يقترح المرجع، يكشف التباعد بين نمو الإقراض ونمو التمويل.",
          en: "The trend with loan and deposit balances over months, as the reference suggests, reveals divergence between lending growth and funding growth.",
        },
      },
      {
        pattern: "actual-vs-target",
        why: {
          ar: "مقارنة النسبة بالنطاق الذي تحدده سياسة المؤسسة أو لجنة الأصول والخصوم، لا بحد عام.",
          en: "Compares the ratio with the range set by the institution's policy or asset-liability committee, not with a generic threshold.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "النطاق والتعديلات الرقابية وطريقة التفسير تختلف بين المؤسسات والدول. النسبة ليست تقييمًا مستقلًا للسيولة ولا تغني عن مؤشرات السيولة الرقابية.",
        en: "Scope, regulatory adjustments, and interpretation differ by institution and jurisdiction. The ratio is not a standalone liquidity assessment and does not replace regulatory liquidity metrics.",
      },
      {
        ar: "إدراج ودائع البنوك الأخرى أو الاقتراض قصير الأجل في المقام، مما يخفض النسبة ويجمّل صورة التمويل المستقر.",
        en: "Including deposits from other banks or short-term borrowing in the denominator, which lowers the ratio and flatters the stable-funding picture.",
      },
      {
        ar: "قراءة القروض والودائع في تواريخ مختلفة (مثلًا قروض محمّلة حتى نهاية الشهر وودائع حتى منتصفه). يجب اعتماد تاريخ مشترك واحد.",
        en: "Reading loans and deposits on different dates (for example loans loaded to month end and deposits to mid-month). A single common date is required.",
      },
      {
        ar: "حساب النسبة على مستوى الفرع أو المنتج. الفرع قد يجمع ودائع كثيرة ويقرض قليلًا والعكس بسبب التمويل المركزي، والمنتج لا يقابله بعد ودائع مشترك؛ النسبة ذات معنى على مستوى الكيان.",
        en: "Computing the ratio by branch or product. A branch may gather many deposits and lend little, or the reverse, because funding is central, and products have no shared deposit dimension; the ratio is meaningful at entity level.",
      },
      {
        ar: "جمع الأرصدة عبر الأشهر في العرض السنوي، فيتضخم الطرفان 12 مرة. النسبة قد تبدو صحيحة بالصدفة، لكن البطاقات المرافقة للأرصدة ستكون خاطئة.",
        en: "Summing balances across months in an annual view, inflating both sides twelvefold. The ratio may look right by coincidence, but the accompanying balance cards will be wrong.",
      },
    ],
    variants: [
      {
        label: { ar: "بالقروض الصافية من المخصصات", en: "Using net loans" },
        formula: "(Gross Loans - Loan Loss Allowances) / Customer Deposits",
        difference: {
          ar: "يستخدم القيمة الدفترية الصافية للقروض كما تظهر في الميزانية، فيأتي أقل من النسخة الإجمالية، ويتأثر بتغير المخصصات لا بالإقراض فقط.",
          en: "Uses the net carrying amount of loans as shown on the balance sheet, so it is lower than the gross version and moves with provisions, not only with lending.",
        },
      },
      {
        label: { ar: "القروض إلى التمويل المستقر", en: "Loans to stable funding" },
        formula: "Loans / (Customer Deposits + Long-Term Wholesale Funding + Equity)",
        difference: {
          ar: "يوسّع المقام ليشمل مصادر تمويل مستقرة أخرى، فيناسب البنوك التي تعتمد على السندات طويلة الأجل. تعريف «المستقر» قرار داخلي أو رقابي.",
          en: "Broadens the denominator to other stable funding sources, suiting banks that rely on long-term bonds. What counts as 'stable' is an internal or regulatory decision.",
        },
      },
      {
        label: { ar: "بمتوسط الأرصدة بدل نهاية الفترة", en: "Average balances instead of period end" },
        formula: "Average Loans over Period / Average Customer Deposits over Period",
        difference: {
          ar: "يخفف أثر تقلبات نهاية الشهر أو الربع (مثل تدفقات ودائع مؤقتة)، لكنه يتطلب لقطات يومية أو شهرية كاملة للطرفين.",
          en: "Smooths month-end or quarter-end swings (such as temporary deposit inflows), but requires complete daily or monthly snapshots for both sides.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "النسبة تتجاوز 100% حسابيًا متى كان رصيد القروض أكبر من رصيد الودائع المعرّفة، أي أن جزءًا من القروض مموّل بالضرورة من مصادر غير هذه الودائع.",
          en: "The ratio exceeds 100% arithmetically whenever loans exceed the defined deposits, meaning part of the loans is necessarily funded from sources other than those deposits.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "قصر المقام على ودائع العملاء واستبعاد ودائع البنوك الأخرى ممارسة شائعة في حساب هذه النسبة.",
          en: "Restricting the denominator to customer deposits and excluding deposits from other banks is common practice for this ratio.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "النطاق المقبول للنسبة، وأي تعديلات على البسط أو المقام، تحددها سياسة السيولة للمؤسسة أو متطلبات الجهة الرقابية المحلية، ولا يوجد حد عام صالح لكل البنوك.",
          en: "The acceptable range for the ratio, and any adjustments to numerator or denominator, are set by the institution's liquidity policy or local regulatory requirements; there is no general threshold valid for every bank.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (700 مليون قروض و1,000 مليون ودائع) من تأليفنا للتوضيح ولا تمثل مستوى مرجعيًا.",
          en: "The example figures (700 million loans, 1,000 million deposits) are invented for illustration and do not represent a reference level.",
        },
      },
    ],
    related: ["nim", "npl-ratio", "current-ratio"],
    exercise: {
      prompt: {
        ar: "في نهاية الشهر كان رصيد القروض 1,350 مليونًا وودائع العملاء 1,500 مليون. محلل أضاف خطأً ودائع بنوك أخرى قدرها 300 مليون إلى المقام. احسب النسبة الصحيحة والنسبة الخاطئة، وبيّن أثر الخطأ على القراءة.",
        en: "At month end, loans were 1,350 million and customer deposits 1,500 million. An analyst wrongly added 300 million of deposits from other banks to the denominator. Compute the correct and the wrong ratio and explain the effect on interpretation.",
      },
      hint: {
        ar: "البسط لا يتغير؛ المقام وحده يتسع في الحساب الخاطئ.",
        en: "The numerator does not change; only the denominator widens in the wrong calculation.",
      },
      answer: {
        ar: "الصحيحة: 1,350 ÷ 1,500 = 90.0%. الخاطئة: 1,350 ÷ (1,500 + 300) = 1,350 ÷ 1,800 = 75.0%. الخطأ يُظهر اعتمادًا أقل بـ 15 نقطة على التمويل من خارج ودائع العملاء، مع أن ودائع البنوك عادة أقل استقرارًا من ودائع العملاء، فيعطي صورة تمويل أكثر راحة مما هي عليه.",
        en: "Correct: 1,350 ÷ 1,500 = 90.0%. Wrong: 1,350 ÷ (1,500 + 300) = 1,350 ÷ 1,800 = 75.0%. The error shows 15 points less reliance on non-customer funding, even though interbank deposits are usually less stable than customer deposits, painting a more comfortable funding picture than reality.",
      },
    },
    references: [
      {
        title: "LASTNONBLANK function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/lastnonblank-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "أساس اختيار آخر تاريخ تتوفر فيه أرصدة القروض والودائع معًا.",
          en: "The basis for selecting the last date on which both loan and deposit balances exist.",
        },
      },
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "توثيق القسمة الآمنة عند غياب رصيد الودائع.",
          en: "Documents safe division when the deposit balance is missing.",
        },
      },
    ],
  },
];
