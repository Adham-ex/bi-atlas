import type { Kpi } from "../types";

export const manufacturingKpis: Kpi[] = [
  /* ---------------------------------------------------------------- */
  /* First Pass Yield                                                  */
  /* ---------------------------------------------------------------- */
  {
    id: "first-pass-yield",
    slug: "first-pass-yield",
    name: "First Pass Yield",
    acronym: "FPY",
    nameAr: "العائد من المرور الأول",
    domains: ["manufacturing"],
    category: { ar: "الجودة", en: "Quality" },
    difficulty: "intermediate",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة الوحدات التي اجتازت العملية أو المرحلة من المحاولة الأولى دون إعادة عمل أو إعادة اختبار أو استبعاد، من إجمالي الوحدات التي دخلت تلك العملية. الوحدة التي نجحت بعد إصلاحها لا تُحتسب ضمن البسط حتى لو شُحنت في النهاية سليمة.",
      en: "The share of units that passed a process or stage on the first attempt, with no rework, retest, or scrap, out of all units that entered that process. A unit that passed only after repair is not counted in the numerator, even if it eventually shipped as good.",
    },
    whyItMatters: {
      ar: "العائد النهائي للمصنع قد يبدو ممتازًا لأن إعادة العمل تنقذ معظم الوحدات المعيبة، لكن هذه الإعادة تستهلك وقتًا وعمالة وطاقة لا تظهر في رقم الإنتاج. FPY يكشف هذا «المصنع الخفي» الذي يعمل بالتوازي لإصلاح ما لم يُصنع صحيحًا من البداية.",
      en: "A plant's final yield can look excellent because rework rescues most defective units, but that rework consumes time, labor, and capacity that never show up in the output figure. FPY exposes this hidden factory running in parallel to fix what was not made right the first time.",
    },
    interpretation: {
      ar: "FPY بنسبة 95% يعني أن 5 وحدات من كل 100 احتاجت تدخلًا إضافيًا (إعادة عمل أو إعادة اختبار) أو استُبعدت. الفرق بين FPY والعائد النهائي هو حجم إعادة العمل تقريبًا، وهو مؤشر مباشر على تكلفة الجودة الرديئة.",
      en: "An FPY of 95% means 5 of every 100 units needed extra intervention (rework or retest) or were scrapped. The gap between FPY and final yield is roughly the rework volume, a direct signal of the cost of poor quality.",
    },
    formula: "FPY % = Units Passing Process First Time / Units Entering Process x 100",
    numerator: {
      ar: "الوحدات التي اجتازت الفحص من أول محاولة دون أي إعادة عمل أو إعادة اختبار.",
      en: "Units that passed inspection on the first attempt without any rework or retest.",
    },
    denominator: {
      ar: "كل الوحدات التي دخلت العملية خلال الفترة، بما فيها التي أُعيد تشغيلها أو استُبعدت. الوحدة المعاد إدخالها بعد الإصلاح لا تُحتسب مرة ثانية في مقام نفس العملية.",
      en: "All units that entered the process in the period, including those later reworked or scrapped. A unit re-entering after repair is not counted a second time in the same process denominator.",
    },
    timeGrain: {
      ar: "يُتابع لكل وردية ولكل عملية أو مرحلة، ويُجمع أسبوعيًا أو شهريًا بإعادة الحساب من الوحدات الإجمالية لا بمتوسط النسب.",
      en: "Tracked per shift and per operation or stage, and rolled up weekly or monthly by recomputing from total units rather than averaging rates.",
    },
    direction: {
      rising: {
        ar: "ارتفاع FPY يعني عملية أكثر استقرارًا وإعادة عمل أقل. تحقق أن معايير الفحص لم تُخفَّف وأن إعادة العمل لم تُنقل إلى خارج نطاق التسجيل.",
        en: "Rising FPY means a more stable process and less rework. Check that inspection criteria were not loosened and that rework was not moved outside the recording scope.",
      },
      falling: {
        ar: "انخفاضه يشير إلى مشكلة في المواد أو الإعداد أو المعدة أو التدريب. قسّمه حسب العملية والخط والمنتج والوردية لتحديد مصدر التراجع قبل تفسيره.",
        en: "A decline points to a material, setup, equipment, or training problem. Split it by operation, line, product, and shift to locate the source before explaining it.",
      },
      caveat: {
        ar: "تشديد الفحص أو إضافة نقطة اختبار جديدة يخفض FPY فورًا دون أن تسوء العملية فعلًا؛ هو فقط يكشف ما كان يمر دون رصد. قارن الفترات بنفس خطة الفحص.",
        en: "Tightening inspection or adding a new test point lowers FPY immediately without the process actually getting worse; it merely reveals what used to slip through. Compare periods under the same inspection plan.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "الوحدات الداخلة إلى العملية", en: "Units entering the process" }, value: "1,000" },
        { label: { ar: "الوحدات السليمة من المرور الأول", en: "First-pass good units" }, value: "950" },
        { label: { ar: "وحدات أُعيد تشغيلها ثم نجحت", en: "Units reworked and then passed" }, value: "30" },
        { label: { ar: "وحدات استُبعدت كخردة", en: "Units scrapped" }, value: "20" },
      ],
      steps: [
        { label: { ar: "FPY", en: "FPY" }, expression: "950 ÷ 1,000 = 95.0%" },
        { label: { ar: "الوحدات السليمة في النهاية", en: "Good units at the end" }, expression: "950 + 30 = 980" },
        { label: { ar: "العائد النهائي", en: "Final yield" }, expression: "980 ÷ 1,000 = 98.0%" },
      ],
      result: { label: { ar: "العائد من المرور الأول", en: "First pass yield" }, value: "95.0%" },
      reading: {
        ar: "العائد النهائي 98% يبدو مطمئنًا، لكن FPY يقول إن 50 وحدة من كل ألف لم تُصنع صحيحًا من أول مرة، منها 30 استهلكت جهد إصلاح إضافيًا. الفجوة بين الرقمين (3 نقاط) هي حجم إعادة العمل التي يخفيها العائد النهائي.",
        en: "A final yield of 98% looks reassuring, but FPY says 50 of every thousand units were not made right the first time, 30 of which consumed extra repair effort. The 3-point gap between the two figures is the rework the final yield hides.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "FPY والعائد النهائي والعائد المتدحرج", en: "FPY, final yield, and rolled throughput yield" },
        code: `Units Entering :=
SUM ( 'OperationRun'[UnitsEntering] )

First Pass Units :=
SUM ( 'OperationRun'[UnitsFirstPassGood] )

-- Ratio of sums, never an average of per-run percentages.
First Pass Yield % :=
DIVIDE ( [First Pass Units], [Units Entering] )

-- Good after rework: everything that entered minus what was scrapped.
Final Yield % :=
DIVIDE (
    [Units Entering] - SUM ( 'OperationRun'[UnitsScrapped] ),
    [Units Entering]
)

-- Rolled throughput yield: the probability a unit passes EVERY operation
-- first time. Iterates only operations that have data in the current context.
Rolled Throughput Yield % :=
PRODUCTX (
    FILTER ( VALUES ( 'Operation'[OperationId] ), [Units Entering] > 0 ),
    [First Pass Yield %]
)`,
        assumptions: [
          {
            ar: "'OperationRun' يحمل صفًا واحدًا لكل تشغيلة ولكل عملية، والوحدة المعاد إدخالها بعد الإصلاح لا تُضاف مرة ثانية إلى UnitsEntering لنفس العملية.",
            en: "'OperationRun' holds one row per run per operation, and a unit re-entering after repair is not added again to UnitsEntering for the same operation.",
          },
          {
            ar: "UnitsFirstPassGood يسجله نظام الفحص أو MES عند أول نتيجة فحص، لا بعد اكتمال الإصلاح. إذا كان النظام يحتفظ بالنتيجة الأخيرة فقط فلا يمكن حساب FPY منه.",
            en: "UnitsFirstPassGood is captured by the inspection system or MES at the first test result, not after repair completes. If the system keeps only the latest result, FPY cannot be computed from it.",
          },
          {
            ar: "العائد المتدحرج (RTY) ذو معنى فقط عندما يكون السياق مسار منتج واحدًا أو عائلة منتجات تمر بنفس العمليات. عبر منتجات بمسارات مختلفة يصبح الضرب مضللًا.",
            en: "Rolled throughput yield is meaningful only when the context is a single product route or a family sharing the same operations. Across products with different routes the product becomes misleading.",
          },
          {
            ar: "جدول 'Date' مرتبط بـ 'OperationRun'[ShiftDate] بعلاقة واحد إلى متعدد، فتُنسب الوحدات إلى يوم دخولها العملية.",
            en: "'Date' relates one-to-many to 'OperationRun'[ShiftDate], so units are attributed to the day they entered the operation.",
          },
        ],
        requires: [
          "OperationRun[UnitsEntering]",
          "OperationRun[UnitsFirstPassGood]",
          "OperationRun[UnitsScrapped]",
          "Operation[OperationId]",
        ],
      },
    ],
    model: [
      {
        table: "OperationRun",
        grain: { ar: "صف واحد لكل تشغيلة إنتاج ولكل عملية في مسار التصنيع", en: "One row per production run per routing operation" },
        columns: ["RunId", "OperationId", "LineId", "ProductId", "ShiftId", "ShiftDate", "UnitsEntering", "UnitsFirstPassGood", "UnitsReworked", "UnitsScrapped"],
        role: { ar: "جدول الحقائق الأساسي للبسط والمقام؛ RunId يربطه بـ ProductionRun المستخدم في OEE", en: "Primary fact for numerator and denominator; RunId ties it back to the ProductionRun table used by OEE" },
      },
      {
        table: "Operation",
        grain: { ar: "عملية واحدة لكل صف", en: "One row per operation" },
        columns: ["OperationId", "OperationName", "RoutingSequence", "WorkCenterId"],
        role: { ar: "يتيح المقارنة بين العمليات وحساب العائد المتدحرج بترتيب المسار", en: "Enables comparison across operations and rolled yield along the routing sequence" },
      },
      {
        table: "Product",
        grain: { ar: "منتج واحد لكل صف", en: "One row per product" },
        columns: ["ProductId", "ProductName", "ProductFamily", "RoutingId"],
        role: { ar: "بُعد التحليل حسب المنتج وعائلته", en: "Analysis by product and product family" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "WeekKey", "MonthKey"],
        role: { ar: "مرتبط بـ ShiftDate لعرض الاتجاه الزمني", en: "Related to ShiftDate for the time trend" },
      },
    ],
    visuals: [
      {
        pattern: "period-over-period",
        why: {
          ar: "اتجاه FPY عبر الأسابيع هو الاستخدام الأساسي؛ مقارنة الفترة بسابقتها تكشف أثر تغيير مادة أو إعداد أو مورد.",
          en: "The FPY trend across weeks is the core use; comparing each period to the previous one reveals the effect of a material, setup, or supplier change.",
        },
      },
      {
        pattern: "decomposition-tree",
        why: {
          ar: "التنقل من FPY الكلي إلى العملية ثم الخط ثم المنتج ثم الوردية هو مسار التحقيق الذي يقترحه تعريف المؤشر نفسه.",
          en: "Drilling from overall FPY to operation, line, product, then shift is the investigation path the metric definition itself suggests.",
        },
      },
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "عرض FPY بجانب العائد النهائي يجعل حجم إعادة العمل الخفية مرئيًا فورًا.",
          en: "Showing FPY next to final yield makes the hidden rework volume visible at a glance.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عدم الاتفاق على معاملة إعادة العمل وإعادة الاختبار والخردة والعمليات متعددة المراحل. وحدة أُعيد اختبارها ونجحت دون إصلاح: هل هي مرور أول؟ القرار يجب أن يُوثق قبل بناء التقرير.",
        en: "Not agreeing how rework, retest, scrap, and multi-stage processes are treated. A unit retested and passed with no repair: is it first pass? The decision must be documented before the report is built.",
      },
      {
        ar: "تجميع FPY عبر عمليات متتالية بجمع البسط والمقام. الوحدة الواحدة تدخل عدة عمليات فتُحتسب عدة مرات، والنسبة الناتجة لا تمثل احتمال نجاح المنتج في كل المسار؛ استخدم العائد المتدحرج لذلك.",
        en: "Rolling FPY across sequential operations by summing numerators and denominators. One unit enters several operations and is counted several times, so the result does not represent the chance a product clears the whole route; use rolled throughput yield for that.",
      },
      {
        ar: "حساب FPY كمتوسط لنسب الورديات أو الخطوط. وردية صغيرة بـ 50 وحدة تحصل على نفس وزن وردية بخمسة آلاف وحدة.",
        en: "Computing FPY as an average of shift or line percentages. A small shift with 50 units gets the same weight as one with five thousand.",
      },
      {
        ar: "الاعتماد على نظام يستبدل نتيجة الفحص الأولى بنتيجة الإصلاح الأخيرة. عندها يتطابق FPY مع العائد النهائي ويختفي المصنع الخفي من البيانات.",
        en: "Relying on a system that overwrites the first inspection result with the final one after repair. FPY then equals final yield and the hidden factory disappears from the data.",
      },
      {
        ar: "إعادة عمل تتم على الخط دون تسجيل (يصلحها المشغل فورًا). تظهر كمرور أول وتضخم FPY، ولا تُرصد إلا بمقارنة وقت التشغيل بالإنتاج.",
        en: "Rework done in-line without being logged (the operator fixes it on the spot). It shows as first pass and inflates FPY, detectable only by comparing run time to output.",
      },
    ],
    variants: [
      {
        label: { ar: "العائد المتدحرج (RTY)", en: "Rolled Throughput Yield (RTY)" },
        formula: "RTY = FPY(op 1) x FPY(op 2) x ... x FPY(op n)",
        difference: {
          ar: "يضرب FPY لكل مرحلة ليعطي احتمال أن تجتاز الوحدة المسار كاملًا دون أي إعادة عمل. دائمًا أقل من أو يساوي أدنى FPY مرحلي.",
          en: "Multiplies each stage's FPY to give the probability a unit clears the entire route with no rework. Always at most the lowest stage FPY.",
        },
      },
      {
        label: { ar: "العائد النهائي", en: "Final yield" },
        formula: "Final Yield % = Good Units After Rework / Units Entering x 100",
        difference: {
          ar: "يحتسب الوحدات التي نجحت بعد الإصلاح كسليمة، فيقيس الفقد المادي النهائي (الخردة) لا جودة المرور الأول. أعلى من FPY دائمًا أو مساوٍ له.",
          en: "Counts units that passed after repair as good, so it measures final physical loss (scrap) rather than first-time quality. Always at or above FPY.",
        },
      },
      {
        label: { ar: "FPY على مستوى الدفعة", en: "Lot-based FPY" },
        formula: "Lot FPY % = Lots Accepted at First Inspection / Lots Inspected x 100",
        difference: {
          ar: "يُستخدم حين يكون الفحص بالعينات على مستوى الدفعة لا الوحدة. دفعة مرفوضة واحدة تساوي دفعة مقبولة في الوزن مهما اختلف حجمهما.",
          en: "Used when inspection is by sampling at lot level rather than per unit. One rejected lot weighs the same as one accepted lot regardless of size.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "FPY لا يمكن أن يتجاوز العائد النهائي لنفس العملية، لأن كل وحدة ناجحة من المرور الأول هي أيضًا وحدة سليمة في النهاية. والعائد المتدحرج لا يتجاوز أدنى FPY مرحلي.",
          en: "FPY can never exceed final yield for the same process, because every first-pass unit is also a good unit at the end. And rolled throughput yield can never exceed the lowest stage FPY.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "استبعاد الوحدات المعاد تشغيلها من البسط هو المعنى الشائع لـ FPY في أدبيات إدارة الجودة، ومفهوم RTY شائع في منهجية Six Sigma.",
          en: "Excluding reworked units from the numerator is the common meaning of FPY in quality management practice, and RTY is a common concept in Six Sigma methodology.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "هل تُعد إعادة الاختبار دون إصلاح مرورًا أول؟ وأين تقع نقطة الفحص التي تحدد النجاح؟ هذه قواعد تحددها كل منشأة في خطة الجودة لديها.",
          en: "Whether a retest with no repair counts as first pass, and which inspection point defines success, are rules each organization sets in its quality plan.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (950 من 1,000، و30 معاد تشغيلها، و20 خردة) من تأليفنا للتعليم فقط، وليست معيارًا صناعيًا لـ FPY.",
          en: "The example figures (950 of 1,000, 30 reworked, 20 scrapped) are invented for teaching only and are not an industry benchmark for FPY.",
        },
      },
    ],
    related: ["scrap-rate", "oee", "manufacturing-cost-per-unit"],
    exercise: {
      prompt: {
        ar: "منتج يمر بمرحلتين. المرحلة 1: دخلت 2,000 وحدة، نجحت 1,880 من أول مرة، وأُعيد تشغيل 90 ونجحت، واستُبعدت 30. المرحلة 2: دخلت 1,970 وحدة (1,880 + 90)، ونجحت 1,900 من أول مرة. احسب FPY لكل مرحلة والعائد المتدحرج، ثم احسب النسبة الناتجة عن جمع البسطين والمقامين وبيّن لماذا تضلل.",
        en: "A product goes through two stages. Stage 1: 2,000 units entered, 1,880 passed first time, 90 were reworked and passed, 30 were scrapped. Stage 2: 1,970 units entered (1,880 + 90), and 1,900 passed first time. Compute each stage's FPY and the rolled throughput yield, then compute the rate you get by pooling numerators and denominators and explain why it misleads.",
      },
      hint: {
        ar: "العائد المتدحرج هو حاصل ضرب نسبتي المرحلتين، لا نسبة المجموعين.",
        en: "Rolled throughput yield is the product of the two stage rates, not the ratio of the pooled totals.",
      },
      answer: {
        ar: "FPY للمرحلة 1 = 1,880 ÷ 2,000 = 94.0%. FPY للمرحلة 2 = 1,900 ÷ 1,970 = 96.4%. العائد المتدحرج = 94.0% × 96.4% = 90.7%، أي أن نحو 91 وحدة فقط من كل 100 تجتاز المسار كاملًا دون أي إعادة عمل. النسبة المجمعة = (1,880 + 1,900) ÷ (2,000 + 1,970) = 3,780 ÷ 3,970 = 95.2%، وهي أعلى بـ 4.5 نقطة من العائد المتدحرج وتوحي بجودة أفضل مما يعيشه المنتج فعلًا، لأنها تعد الوحدة نفسها مرتين في المقام وتعامل المرحلتين كتجربتين مستقلتين لا كمسار متتابع.",
        en: "Stage 1 FPY = 1,880 ÷ 2,000 = 94.0%. Stage 2 FPY = 1,900 ÷ 1,970 = 96.4%. RTY = 94.0% x 96.4% = 90.7%, meaning only about 91 of every 100 units clear the whole route with no rework. The pooled rate = (1,880 + 1,900) ÷ (2,000 + 1,970) = 3,780 ÷ 3,970 = 95.2%, which suggests better quality than the product actually experiences, because it counts the same unit twice in the denominator and treats the two stages as independent trials rather than a sequential route.",
      },
    },
    references: [
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "قسمة آمنة تعيد BLANK عندما لا تدخل وحدات في السياق بدل خطأ القسمة على صفر.",
          en: "Safe division that returns BLANK when no units entered in the context, instead of a divide-by-zero error.",
        },
      },
      {
        title: "PRODUCTX function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/productx-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "أساس حساب العائد المتدحرج بضرب FPY لكل عملية في المسار.",
          en: "The basis for rolled throughput yield, multiplying FPY across the operations in the route.",
        },
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Scrap Rate                                                        */
  /* ---------------------------------------------------------------- */
  {
    id: "scrap-rate",
    slug: "scrap-rate",
    name: "Scrap Rate",
    nameAr: "نسبة الخردة",
    domains: ["manufacturing"],
    category: { ar: "الجودة والهدر", en: "Quality and waste" },
    difficulty: "beginner",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة الوحدات التي استُبعدت نهائيًا كخردة أو غير صالحة للاستخدام من إجمالي الوحدات التي بدأ إنتاجها (أو أُنتجت) خلال الفترة. الخردة فقد نهائي، بخلاف إعادة العمل التي تُنقذ الوحدة بتكلفة إضافية.",
      en: "The share of units permanently rejected as scrap or unusable out of all units started (or produced) in the period. Scrap is a final loss, unlike rework, which saves the unit at extra cost.",
    },
    whyItMatters: {
      ar: "كل وحدة خردة تحمل تكلفة المادة والعمالة والطاقة ووقت الماكينة الذي أُنفق عليها ثم ضاع. لهذا يترجم المؤشر مباشرة إلى مال مهدر، ويربط الجودة بالتكلفة بطريقة يفهمها المدير المالي ومدير المصنع معًا.",
      en: "Every scrapped unit carries the material, labor, energy, and machine time spent on it and then lost. That is why the metric translates directly into wasted money and links quality to cost in a way both the finance lead and the plant manager understand.",
    },
    interpretation: {
      ar: "نسبة خردة 2.5% تعني أن 25 وحدة من كل ألف بدأ إنتاجها لن تُباع. قيمة المؤشر الحقيقية في تفكيكه: أي ماكينة وأي منتج وأي مادة وأي سبب عيب يشكّل معظم الخردة؟ غالبًا تتركز الخردة في عدد قليل من الأسباب.",
      en: "A 2.5% scrap rate means 25 of every thousand units started will never be sold. The real value is in the breakdown: which machine, product, material, and defect reason make up most of the scrap? Scrap is usually concentrated in a few reasons.",
    },
    formula: "Scrap Rate % = Scrapped Units / Total Units Started (or Produced) x 100",
    numerator: {
      ar: "الوحدات المستبعدة نهائيًا خلال الفترة، مسجلة مع سبب العيب والماكينة والمادة. لا تشمل الوحدات المعاد تشغيلها بنجاح.",
      en: "Units permanently rejected in the period, recorded with defect reason, machine, and material. Excludes units successfully reworked.",
    },
    denominator: {
      ar: "الوحدات التي بدأ إنتاجها (الأشيع) أو الوحدات المنتجة. اختيار المقام يجب أن يكون صريحًا وثابتًا لأن النتيجة تختلف بينهما.",
      en: "Units started (most common) or units produced. The denominator choice must be explicit and fixed because the result differs between them.",
    },
    timeGrain: {
      ar: "يُتابع يوميًا أو لكل وردية على مستوى الخط، ويُراجع أسبوعيًا أو شهريًا مع تحليل الأسباب.",
      en: "Tracked daily or per shift at line level, and reviewed weekly or monthly alongside reason analysis.",
    },
    direction: {
      rising: {
        ar: "ارتفاع الخردة يعني فقدًا في المواد والطاقة الإنتاجية. ابحث عن تغيير في دفعة مادة أو إعداد ماكينة أو منتج جديد.",
        en: "Rising scrap means lost material and capacity. Look for a change in a material lot, a machine setup, or a new product.",
      },
      falling: {
        ar: "انخفاضها تحسّن في الغالب، لكن تأكد أن الوحدات لم تُعد تصنيفها إلى «إعادة عمل» أو «درجة ثانية» لتختفي من البسط.",
        en: "A decline is usually an improvement, but confirm units were not reclassified as rework or second grade to vanish from the numerator.",
      },
      caveat: {
        ar: "بعض العمليات لها فقد طبيعي متوقع (تقليم الحواف، أول قطع بعد التحويل). خلط هذا الفقد بالخردة الناتجة عن عيوب يجعل الهدف غير واقعي ويخفي المشكلات الحقيقية.",
        en: "Some processes have expected normal yield loss (edge trimming, first pieces after changeover). Mixing that loss with defect-driven scrap makes the target unrealistic and hides the real problems.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "الوحدات التي بدأ إنتاجها", en: "Units started" }, value: "1,000" },
        { label: { ar: "الوحدات المستبعدة كخردة", en: "Units scrapped" }, value: "25" },
        { label: { ar: "وحدات أُعيد تشغيلها (ليست خردة)", en: "Units reworked (not scrap)" }, value: "40" },
      ],
      steps: [
        { label: { ar: "نسبة الخردة", en: "Scrap rate" }, expression: "25 ÷ 1,000 = 2.5%" },
        { label: { ar: "نسبة إعادة العمل للمقارنة", en: "Rework rate for comparison" }, expression: "40 ÷ 1,000 = 4.0%" },
      ],
      result: { label: { ar: "نسبة الخردة", en: "Scrap rate" }, value: "2.5%" },
      reading: {
        ar: "الوحدات الأربعون المعاد تشغيلها لا تدخل في نسبة الخردة لأنها أُنقذت، لكنها أكبر عددًا من الخردة نفسها. عرض نسبة الخردة وحدها يعطي صورة ناقصة عن فقد الجودة.",
        en: "The forty reworked units are not in the scrap rate because they were saved, yet they outnumber the scrap itself. Showing the scrap rate alone gives an incomplete picture of quality loss.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "نسبة الخردة وتحليلها حسب السبب", en: "Scrap rate and breakdown by reason" },
        code: `Units Started :=
SUM ( 'ProductionRun'[UnitsStarted] )

-- Numerator from the event table so it can be sliced by reason and material.
Scrapped Units :=
SUM ( 'ScrapEvent'[UnitsScrapped] )

Scrap Rate % :=
DIVIDE ( [Scrapped Units], [Units Started] )

-- Share of all scrap attributable to the reason(s) in context.
Scrap Share of Total % :=
DIVIDE (
    [Scrapped Units],
    CALCULATE ( [Scrapped Units], REMOVEFILTERS ( 'ScrapReason' ) )
)

Scrap Cost :=
SUM ( 'ScrapEvent'[ScrapCost] )

-- Data-quality check: run-level scrap totals should match the event log.
Scrap Reconciliation Gap :=
SUM ( 'ProductionRun'[UnitsScrapped] ) - [Scrapped Units]`,
        assumptions: [
          {
            ar: "المقام هو الوحدات التي بدأ إنتاجها. إذا اعتمدت المنشأة الوحدات المنتجة فاستبدل العمود، ووثّق ذلك في تلميح البطاقة.",
            en: "The denominator is units started. If the organization uses units produced instead, swap the column and document it in the card tooltip.",
          },
          {
            ar: "'ProductionRun' لا يرتبط بـ 'ScrapReason' أو بالمادة، لذلك عند الترشيح حسب السبب يبقى المقام كاملًا، فتصبح النسبة مساهمة ذلك السبب في النسبة الكلية، ومجموع مساهمات الأسباب يساوي النسبة الكلية.",
            en: "'ProductionRun' has no relationship to 'ScrapReason' or material, so filtering by reason keeps the full denominator; the rate becomes that reason's contribution to the overall rate, and reason contributions add up to the total.",
          },
          {
            ar: "'ScrapEvent' و'ProductionRun' يشتركان في أبعاد Date (عبر ShiftDate) والخط والمنتج، حتى يُرشَّح البسط والمقام معًا.",
            en: "'ScrapEvent' and 'ProductionRun' share the Date (via ShiftDate), line, and product dimensions so numerator and denominator filter together.",
          },
          {
            ar: "كل حدث خردة له سبب مسجل؛ الأحداث بلا سبب تظهر كصف فارغ في التحليل ويجب متابعتها.",
            en: "Every scrap event has a recorded reason; events without one appear as a blank row in the breakdown and should be chased.",
          },
        ],
        requires: [
          "ProductionRun[UnitsStarted]",
          "ProductionRun[UnitsScrapped]",
          "ScrapEvent[UnitsScrapped]",
          "ScrapEvent[ScrapCost]",
          "ScrapReason[ReasonCode]",
        ],
      },
    ],
    model: [
      {
        table: "ProductionRun",
        grain: { ar: "تشغيلة واحدة لكل خط ومنتج ووردية (نفس جدول OEE)", en: "One run per line, product, and shift (the same table used by OEE)" },
        columns: ["RunId", "LineId", "ProductId", "ShiftDate", "UnitsStarted", "UnitsProduced", "UnitsDefective", "UnitsScrapped"],
        role: { ar: "مصدر المقام", en: "Source of the denominator" },
      },
      {
        table: "ScrapEvent",
        grain: { ar: "حدث استبعاد واحد لكل صف", en: "One scrap event per row" },
        columns: ["ScrapEventId", "RunId", "LineId", "MachineId", "ProductId", "MaterialId", "ShiftDate", "ReasonCode", "UnitsScrapped", "ScrapCost"],
        role: { ar: "مصدر البسط وتحليل الأسباب والمواد والماكينات", en: "Source of the numerator and of reason, material, and machine analysis" },
      },
      {
        table: "ScrapReason",
        grain: { ar: "سبب خردة واحد لكل صف", en: "One scrap reason per row" },
        columns: ["ReasonCode", "ReasonName", "ReasonGroup", "IsNormalYieldLoss"],
        role: { ar: "يفصل الفقد الطبيعي المتوقع عن الخردة الناتجة عن عيوب", en: "Separates expected normal yield loss from defect-driven scrap" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "WeekKey", "MonthKey"],
        role: { ar: "مرتبط بـ ShiftDate في جدولي الحقائق", en: "Related to ShiftDate in both fact tables" },
      },
    ],
    visuals: [
      {
        pattern: "period-over-period",
        why: {
          ar: "اتجاه نسبة الخردة مقارنة بالفترة السابقة يلتقط التدهور المفاجئ بعد تغيير مادة أو إعداد.",
          en: "The scrap rate trend against the prior period catches sudden deterioration after a material or setup change.",
        },
      },
      {
        pattern: "decomposition-tree",
        why: {
          ar: "التفكيك حسب الماكينة ثم المنتج ثم المادة ثم سبب العيب يطابق الأبعاد التي يُحلَّل بها المؤشر عادة.",
          en: "Splitting by machine, then product, material, and defect reason matches the dimensions the metric is normally analysed by.",
        },
      },
      {
        pattern: "stacked-bar",
        why: {
          ar: "أعمدة مكدسة حسب مجموعة السبب تُظهر تركّز الخردة في أسباب قليلة، وتفصل الفقد الطبيعي عن العيوب.",
          en: "Bars stacked by reason group show scrap concentrating in a few reasons and separate normal yield loss from defects.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عدم تحديد المقام (بدأ إنتاجها أم أُنتجت) أو تغييره بين الفترات. الوحدات المنتجة تستثني ما سقط في منتصف العملية، فتخرج النسبة أعلى قليلًا وغير قابلة للمقارنة.",
        en: "Not fixing the denominator (started versus produced) or changing it between periods. Units produced excludes what fell out mid-process, so the rate comes out slightly higher and becomes incomparable.",
      },
      {
        ar: "خلط الخردة بإعادة العمل أو بالفقد الطبيعي للعملية. الثلاثة لها أسباب وعلاجات مختلفة ويجب أن تُصنف في أعمدة أو أسباب منفصلة.",
        en: "Mixing scrap with rework or with normal process yield loss. The three have different causes and remedies and must be classified in separate columns or reasons.",
      },
      {
        ar: "أخذ متوسط نسب الخطوط بدل قسمة إجمالي الخردة على إجمالي الوحدات. خط صغير بنسبة عالية يشوّه الصورة الكلية.",
        en: "Averaging line rates instead of dividing total scrap by total units. A small line with a high rate distorts the overall picture.",
      },
      {
        ar: "قياس الخردة بالعدد فقط. خردة وحدة في المرحلة الأخيرة أغلى بكثير من خردة مادة خام في البداية؛ اعرض التكلفة بجانب العدد.",
        en: "Measuring scrap by count only. Scrapping a unit at the final stage costs far more than scrapping raw material at the start; show cost next to count.",
      },
      {
        ar: "عدم تطابق خردة سجل الأحداث مع إجمالي التشغيلات. الفرق يعني خردة غير مسجلة السبب أو مسجلة مرتين، ويستحق مقياس مطابقة ظاهرًا.",
        en: "Event-log scrap not reconciling with run totals. The gap means scrap with no recorded reason or recorded twice, and deserves a visible reconciliation measure.",
      },
    ],
    variants: [
      {
        label: { ar: "نسبة الخردة بالقيمة", en: "Scrap rate by value" },
        formula: "Scrap Cost % = Scrap Cost / Total Manufacturing Cost x 100",
        difference: {
          ar: "يرجّح الخردة بتكلفتها المتراكمة حتى نقطة الاستبعاد، فيعطي أولوية للخردة المتأخرة في المسار. المقياس الأنسب للنقاش المالي.",
          en: "Weights scrap by its accumulated cost up to the point of rejection, prioritising late-stage scrap. The better measure for financial discussion.",
        },
      },
      {
        label: { ar: "على أساس الوحدات المنتجة", en: "Produced-units basis" },
        formula: "Scrap Rate % = Scrapped Units / Units Produced x 100",
        difference: {
          ar: "يستخدم الوحدات التي اكتملت بدل التي بدأت. أسهل في الأنظمة التي لا تسجل بداية التشغيل، لكنه غير قابل للمقارنة مع الصيغة الأساسية.",
          en: "Uses completed units instead of started units. Easier in systems that do not record run starts, but not comparable with the primary form.",
        },
      },
      {
        label: { ar: "خردة المواد بالوزن", en: "Material scrap by weight" },
        formula: "Material Scrap % = Scrap Weight (kg) / Material Input Weight (kg) x 100",
        difference: {
          ar: "شائع في الصناعات المستمرة كالمعادن والبلاستيك والأغذية حيث لا توجد وحدات منفصلة.",
          en: "Common in continuous industries such as metals, plastics, and food, where there are no discrete units.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "عندما يكون المقام مشتركًا، فإن مجموع مساهمات أسباب الخردة المختلفة يساوي نسبة الخردة الكلية تمامًا، بشرط أن يكون لكل حدث سبب واحد.",
          en: "With a shared denominator, the contributions of the individual scrap reasons add up exactly to the overall scrap rate, provided each event has exactly one reason.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "التمييز بين الخردة (فقد نهائي) وإعادة العمل (إنقاذ بتكلفة) عرف شائع في تقارير الجودة التصنيعية.",
          en: "Distinguishing scrap (final loss) from rework (salvage at a cost) is a common convention in manufacturing quality reporting.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "اختيار المقام، وتصنيف الفقد الطبيعي، ومعاملة المنتج من الدرجة الثانية، كلها قرارات داخلية لكل منشأة.",
          en: "The denominator choice, the classification of normal yield loss, and the treatment of second-grade product are internal decisions per organization.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (25 خردة و40 إعادة عمل من 1,000) من تأليفنا للتعليم، ولا نقدم نسبة خردة معيارية لأي صناعة.",
          en: "The example figures (25 scrapped and 40 reworked of 1,000) are invented for teaching; we offer no benchmark scrap rate for any industry.",
        },
      },
    ],
    related: ["first-pass-yield", "oee", "manufacturing-cost-per-unit"],
    exercise: {
      prompt: {
        ar: "الخط A بدأ 4,000 وحدة واستُبعدت منها 60. الخط B بدأ 1,000 وحدة واستُبعدت منها 45. احسب نسبة الخردة لكل خط، ثم النسبة الإجمالية الصحيحة، وقارنها بالمتوسط البسيط للنسبتين.",
        en: "Line A started 4,000 units and scrapped 60. Line B started 1,000 units and scrapped 45. Compute each line's scrap rate, then the correct overall rate, and compare it with the simple average of the two rates.",
      },
      hint: {
        ar: "النسبة الإجمالية = مجموع الخردة ÷ مجموع الوحدات المبدوءة.",
        en: "The overall rate = total scrap ÷ total units started.",
      },
      answer: {
        ar: "الخط A = 60 ÷ 4,000 = 1.5%. الخط B = 45 ÷ 1,000 = 4.5%. الإجمالي الصحيح = (60 + 45) ÷ (4,000 + 1,000) = 105 ÷ 5,000 = 2.1%. المتوسط البسيط = (1.5% + 4.5%) ÷ 2 = 3.0%، أي أنه يبالغ في الخردة بنحو 0.9 نقطة لأنه يعطي الخط الصغير نفس وزن الخط الكبير. ومع ذلك فالخط B هو الأولى بالتحقيق: نسبته ثلاثة أضعاف الخط A رغم حجمه الصغير.",
        en: "Line A = 60 ÷ 4,000 = 1.5%. Line B = 45 ÷ 1,000 = 4.5%. The correct total = (60 + 45) ÷ (4,000 + 1,000) = 105 ÷ 5,000 = 2.1%. The simple average = (1.5% + 4.5%) ÷ 2 = 3.0%, overstating scrap by about 0.9 points because it gives the small line the same weight as the large one. Even so, line B is the one to investigate: its rate is three times line A's despite its smaller volume.",
      },
    },
    references: [
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "قسمة مجموع الخردة على مجموع الوحدات مع حماية من المقام الصفري.",
          en: "Divides total scrap by total units with protection against a zero denominator.",
        },
      },
      {
        title: "REMOVEFILTERS function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/removefilters-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "يزيل ترشيح سبب الخردة لحساب إجمالي الخردة كمقام لحصة كل سبب.",
          en: "Clears the scrap-reason filter to compute total scrap as the denominator of each reason's share.",
        },
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Production Schedule Attainment                                    */
  /* ---------------------------------------------------------------- */
  {
    id: "schedule-attainment",
    slug: "schedule-attainment",
    name: "Production Schedule Attainment",
    nameAr: "تحقيق خطة الإنتاج",
    domains: ["manufacturing"],
    category: { ar: "الالتزام بالخطة", en: "Plan adherence" },
    difficulty: "intermediate",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "مدى تحقيق خطة الإنتاج خلال الفترة: نسبة الكمية المخططة التي اكتملت داخل النافذة الزمنية المجدولة لها، من إجمالي الكمية المخططة. الإنتاج المتأخر عن نافذته أو الزائد عن الكمية المخططة لا يُحتسب في الصيغة الشائعة.",
      en: "How far the production plan was achieved in the period: the share of planned quantity completed within its scheduled window, out of total planned quantity. Output completed after its window, or above the planned quantity, is not counted in the common form.",
    },
    whyItMatters: {
      ar: "الخطة هي الوعد الذي بُنيت عليه المشتريات والمخزون ومواعيد العملاء. خط لا يلتزم بخطته يُجبر التخطيط على بناء مخزون أمان إضافي ويُربك كل ما بعده في السلسلة، حتى لو كان إنتاجه الإجمالي مرتفعًا.",
      en: "The plan is the promise that purchasing, inventory, and customer dates were built on. A line that does not keep to its plan forces planning to carry extra safety stock and disrupts everything downstream, even if its total output is high.",
    },
    interpretation: {
      ar: "تحقيق 90% يعني أن 10% من الكمية المخططة لم تكتمل في موعدها: إما تأخرت أو لم تُنتج أصلًا. لأن الإنتاج الزائد لا يعوّض النقص، قد يحقق خط إنتاجًا إجماليًا يفوق الخطة بينما تحقيق الخطة أقل من 100%، وهذا يعني أنه أنتج المنتج الخطأ.",
      en: "90% attainment means 10% of planned quantity did not complete on time: it was either late or never made. Because overproduction does not offset shortfall, a line can exceed the plan in total output while attainment is below 100%, which means it made the wrong product.",
    },
    formula: "Schedule Attainment % = Planned Quantity Completed Within Scheduled Window / Planned Quantity x 100",
    numerator: {
      ar: "الكمية المكتملة داخل النافذة المجدولة لكل بند في الخطة، بحد أقصى الكمية المخططة لذلك البند.",
      en: "Quantity completed within the scheduled window for each plan line, capped at that line's planned quantity.",
    },
    denominator: {
      ar: "إجمالي الكمية المخططة في نسخة الخطة المعتمدة (المجمدة) للفترة، لا الخطة بعد إعادة الجدولة.",
      en: "Total planned quantity in the approved (frozen) plan version for the period, not the plan after rescheduling.",
    },
    timeGrain: {
      ar: "يُقاس يوميًا أو لكل وردية على مستوى مركز العمل، ويُجمع أسبوعيًا حسب تاريخ الجدولة لا تاريخ الإكمال.",
      en: "Measured daily or per shift at work-center level, and rolled up weekly by scheduled date rather than completion date.",
    },
    direction: {
      rising: {
        ar: "ارتفاعه يعني التزامًا أفضل بالخطة واستقرارًا أكبر للمخزون والمواعيد. تحقق أن الخطة لم تُعدّل لتطابق الواقع بعد وقوعه.",
        en: "A rise means better adherence and steadier inventory and dates. Check that the plan was not edited to match reality after the fact.",
      },
      falling: {
        ar: "انخفاضه يشير إلى أعطال أو نقص مواد أو عمالة، أو إلى خطة غير واقعية تتجاوز الطاقة. افصل البنود المتأخرة عن البنود التي لم تبدأ.",
        en: "A fall points to breakdowns, material or labor shortages, or an unrealistic plan that exceeds capacity. Separate late lines from lines never started.",
      },
      caveat: {
        ar: "100% دائمًا قد تعني خطة متحفظة جدًا تترك طاقة غير مستغلة. المؤشر يقيس الالتزام بالخطة لا جودة الخطة نفسها؛ اقرأه بجانب OEE والطلب الفعلي.",
        en: "A constant 100% may mean an overly conservative plan leaving capacity idle. The metric measures adherence to the plan, not the plan's quality; read it alongside OEE and actual demand.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "الكمية المخططة للأسبوع", en: "Planned quantity for the week" }, value: "10,000" },
        { label: { ar: "مكتمل داخل النافذة المجدولة", en: "Completed within the scheduled window" }, value: "9,000" },
        { label: { ar: "مكتمل بعد انتهاء النافذة (لا يُحتسب)", en: "Completed after the window (not counted)" }, value: "700" },
      ],
      steps: [
        { label: { ar: "تحقيق الخطة", en: "Schedule attainment" }, expression: "9,000 ÷ 10,000 = 90.0%" },
        { label: { ar: "الإنتاج الإجمالي مقابل الخطة", en: "Total output versus plan" }, expression: "(9,000 + 700) ÷ 10,000 = 97.0%" },
      ],
      result: { label: { ar: "تحقيق خطة الإنتاج", en: "Production schedule attainment" }, value: "90.0%" },
      reading: {
        ar: "المصنع أنتج 97% من الكمية المخططة، لكن 700 وحدة منها وصلت متأخرة عن نافذتها. من منظور المستودع والعميل، الالتزام الفعلي 90%، والفارق هو ما يتحول إلى تأخير في الشحن.",
        en: "The plant produced 97% of planned quantity, but 700 of those units arrived after their window. From the warehouse and customer perspective, actual adherence is 90%, and the gap is what turns into shipping delays.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "تحقيق الخطة بالكمية وبعدد البنود", en: "Attainment by quantity and by plan-line count" },
        code: `Planned Qty :=
SUM ( 'ProductionSchedule'[PlannedQty] )

-- Cap each plan line at its planned quantity so overproduction on one
-- line cannot hide a shortfall on another.
Attained Qty :=
SUMX (
    'ProductionSchedule',
    MIN ( 'ProductionSchedule'[QtyCompletedInWindow], 'ProductionSchedule'[PlannedQty] )
)

Schedule Attainment % :=
DIVIDE ( [Attained Qty], [Planned Qty] )

-- Count basis: a plan line counts only if fully completed within its window.
Plan Lines Attained % :=
DIVIDE (
    COUNTROWS (
        FILTER (
            'ProductionSchedule',
            'ProductionSchedule'[QtyCompletedInWindow] >= 'ProductionSchedule'[PlannedQty]
        )
    ),
    COUNTROWS ( 'ProductionSchedule' )
)`,
        assumptions: [
          {
            ar: "'ProductionSchedule' يحمل نسخة الخطة المجمدة فقط (عند نقطة القطع المتفق عليها)، وإعادة الجدولة اللاحقة لا تعدّل PlannedQty أو النافذة.",
            en: "'ProductionSchedule' holds only the frozen plan version (at the agreed cut-off); later rescheduling does not change PlannedQty or the window.",
          },
          {
            ar: "QtyCompletedInWindow يُحسب في مرحلة التحضير (Power Query أو المصدر) بمطابقة إقرارات الإنتاج مع بند الخطة وتوقيت نافذته، ويحتسب المنتج المخطط فقط لا البدائل إلا إذا نصت القاعدة على ذلك.",
            en: "QtyCompletedInWindow is computed upstream (Power Query or source) by matching production confirmations to the plan line and its window, counting only the planned product, not substitutes, unless the rule says otherwise.",
          },
          {
            ar: "جدول 'Date' مرتبط بـ 'ProductionSchedule'[ScheduledDate]، فيُنسب كل بند إلى يوم جدولته لا يوم إكماله.",
            en: "'Date' relates to 'ProductionSchedule'[ScheduledDate], so each line is attributed to its scheduled day rather than its completion day.",
          },
          {
            ar: "كل صف بند خطة واحد؛ إذا كان أمر العمل مقسمًا على عدة بنود فالنسخة العددية تقيس البنود لا الأوامر.",
            en: "Each row is one plan line; if a work order is split across several lines, the count variant measures lines, not orders.",
          },
        ],
        requires: [
          "ProductionSchedule[PlannedQty]",
          "ProductionSchedule[QtyCompletedInWindow]",
          "ProductionSchedule[ScheduledDate]",
        ],
      },
    ],
    model: [
      {
        table: "ProductionSchedule",
        grain: { ar: "بند خطة واحد: أمر عمل ومنتج ومركز عمل ونافذة زمنية", en: "One plan line: work order, product, work center, and time window" },
        columns: ["ScheduleLineId", "PlanVersion", "WorkOrderId", "WorkCenterId", "LineId", "ProductId", "ShiftId", "ScheduledDate", "WindowStart", "WindowEnd", "PlannedQty", "QtyCompletedInWindow", "QtyCompletedLate"],
        role: { ar: "جدول الحقائق الأساسي للبسط والمقام", en: "Primary fact for numerator and denominator" },
      },
      {
        table: "WorkCenter",
        grain: { ar: "مركز عمل واحد لكل صف", en: "One row per work center" },
        columns: ["WorkCenterId", "WorkCenterName", "LineId", "Plant"],
        role: { ar: "بُعد المقارنة بين مراكز العمل", en: "Comparison across work centers" },
      },
      {
        table: "Product",
        grain: { ar: "منتج واحد لكل صف", en: "One row per product" },
        columns: ["ProductId", "ProductName", "ProductFamily"],
        role: { ar: "يكشف المنتجات التي تتأخر باستمرار", en: "Reveals products that are consistently late" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "WeekKey", "MonthKey"],
        role: { ar: "مرتبط بتاريخ الجدولة", en: "Related to the scheduled date" },
      },
    ],
    visuals: [
      {
        pattern: "actual-vs-target",
        why: {
          ar: "المخطط مقابل المحقق حسب مركز العمل والمنتج والوردية هو العرض الذي يقترحه تعريف المؤشر مباشرة.",
          en: "Planned versus attained by work center, product, and shift is the view the metric definition directly suggests.",
        },
      },
      {
        pattern: "variance-bar",
        why: {
          ar: "أعمدة الفجوة لكل مركز عمل ترتب المراكز حسب حجم النقص بالوحدات، فتوجه الانتباه إلى الأثر الأكبر.",
          en: "Gap bars per work center rank centers by shortfall in units, directing attention to the largest impact.",
        },
      },
      {
        pattern: "exception-table",
        why: {
          ar: "قائمة بنود الخطة المتأخرة أو الناقصة مع السبب هي ما يحتاجه اجتماع الإنتاج اليومي للتصرف.",
          en: "A list of late or short plan lines with their reason is what the daily production meeting needs to act.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عدم الاتفاق على أساس القياس (كمية أم عدد أوامر)، وقواعد النافذة الزمنية، ومعاملة البدائل وإعادة الجدولة. كل خيار يغير الرقم تغييرًا جوهريًا ويجب توثيقه.",
        en: "Not agreeing on the basis (quantity or order count), the window rules, and the treatment of substitutions and rescheduling. Each choice materially changes the number and must be documented.",
      },
      {
        ar: "مقارنة الإنتاج بآخر نسخة من الخطة بعد إعادة الجدولة. الخطة التي عُدّلت لتطابق ما حدث تعطي تحقيقًا قريبًا من 100% دائمًا ولا تقيس شيئًا.",
        en: "Comparing output against the latest plan after rescheduling. A plan edited to match what happened always yields near-100% attainment and measures nothing.",
      },
      {
        ar: "حساب النسبة من الإجماليات دون سقف لكل بند. إنتاج زائد في منتج يغطي نقصًا في منتج آخر فيبدو الأداء ممتازًا بينما العملاء ينتظرون.",
        en: "Computing the rate from totals without a per-line cap. Overproduction on one product covers a shortfall on another, so performance looks excellent while customers wait.",
      },
      {
        ar: "نسبة الإنتاج إلى تاريخ الإكمال بدل تاريخ الجدولة، فينتقل النقص من الفترة التي حدث فيها إلى الفترة التالية.",
        en: "Attributing output to completion date instead of scheduled date, which moves the shortfall from the period where it happened into the next.",
      },
      {
        ar: "استبعاد البنود التي لم تبدأ أصلًا من المقام لأنها لا تملك سجلات إنتاج. هذه أسوأ حالات عدم التحقيق ويجب أن تظهر بصفر.",
        en: "Dropping plan lines that never started from the denominator because they have no production records. These are the worst misses and must show as zero.",
      },
    ],
    variants: [
      {
        label: { ar: "على أساس عدد البنود أو الأوامر", en: "Plan-line or order count basis" },
        formula: "Attainment % = Plan Lines Completed In Full Within Window / Scheduled Plan Lines x 100",
        difference: {
          ar: "بند ناقص بوحدة واحدة يُحتسب فشلًا كاملًا. أقسى من صيغة الكمية وأقرب إلى منطق OTIF.",
          en: "A line short by a single unit counts as a full failure. Harsher than the quantity form and closer to the OTIF logic.",
        },
      },
      {
        label: { ar: "الإنتاج مقابل الخطة دون سقف", en: "Uncapped production-to-plan" },
        formula: "Production to Plan % = Total Actual Quantity / Total Planned Quantity x 100",
        difference: {
          ar: "يقيس الحجم لا الالتزام: الإنتاج الزائد والمتأخر يُحتسبان، وقد يتجاوز 100%. مفيد لتخطيط الطاقة لكنه لا يصلح بديلًا عن تحقيق الخطة.",
          en: "Measures volume, not adherence: overproduction and late output both count, and it can exceed 100%. Useful for capacity planning but no substitute for attainment.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "مع تطبيق السقف لكل بند، لا يمكن أن يتجاوز تحقيق الخطة 100%، ولا يمكن أن يزيد عن نسبة الإنتاج الإجمالي إلى الخطة.",
          en: "With the per-line cap applied, attainment can never exceed 100% and can never be higher than total production-to-plan.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "قياس الالتزام مقابل خطة مجمدة عند نقطة قطع محددة ممارسة شائعة في تخطيط الإنتاج، لكن الصيغة نفسها تختلف بين المنشآت كما يشير المرجع.",
          en: "Measuring adherence against a plan frozen at a defined cut-off is common production planning practice, but the formula itself varies between organizations, as the source notes.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "عرض النافذة الزمنية، والسماح بالبدائل، ونقطة تجميد الخطة، وهل يُحتسب الإكمال الجزئي — قواعد داخلية لكل مصنع.",
          en: "Window width, whether substitutions are allowed, the plan freeze point, and whether partial completion counts are internal rules per plant.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (9,000 من 10,000 و700 متأخرة) من تأليفنا للتعليم فقط، وليست معيارًا صناعيًا.",
          en: "The example figures (9,000 of 10,000 and 700 late) are invented for teaching only and are not an industry benchmark.",
        },
      },
    ],
    related: ["oee", "otif", "production-cycle-time"],
    exercise: {
      prompt: {
        ar: "خطة أسبوع فيها ثلاثة بنود: WO1 مخطط 4,000 واكتمل منه داخل النافذة 4,300. WO2 مخطط 3,000 واكتمل داخل النافذة 2,400 (و600 بعدها). WO3 مخطط 3,000 واكتمل داخل النافذة 2,700. احسب تحقيق الخطة بالكمية مع السقف ودونه، ثم على أساس عدد البنود.",
        en: "A weekly plan has three lines: WO1 planned 4,000 with 4,300 completed within the window. WO2 planned 3,000 with 2,400 completed within the window (and 600 after it). WO3 planned 3,000 with 2,700 completed within the window. Compute quantity attainment with and without the cap, then the plan-line count basis.",
      },
      hint: {
        ar: "طبّق السقف على WO1 أولًا، ولا تحتسب الـ 600 المتأخرة في أي من الصيغ.",
        en: "Apply the cap to WO1 first, and do not count the 600 late units in any form.",
      },
      answer: {
        ar: "المقام = 4,000 + 3,000 + 3,000 = 10,000. مع السقف: 4,000 + 2,400 + 2,700 = 9,100، فالتحقيق = 91.0%. دون سقف: 4,300 + 2,400 + 2,700 = 9,400 = 94.0%، أي أن الـ 300 الزائدة في WO1 أخفت ثلاث نقاط من النقص في WO2 وWO3. على أساس البنود: WO1 فقط اكتمل بالكامل داخل نافذته، فالنسبة = 1 ÷ 3 = 33.3%. الصيغ الثلاث تصف الأسبوع نفسه، ولهذا يجب تثبيت الصيغة المعتمدة قبل النشر.",
        en: "Denominator = 4,000 + 3,000 + 3,000 = 10,000. With the cap: 4,000 + 2,400 + 2,700 = 9,100, so attainment = 91.0%. Without the cap: 4,300 + 2,400 + 2,700 = 9,400 = 94.0%, meaning WO1's 300 extra units hid three points of shortfall on WO2 and WO3. Line-count basis: only WO1 completed in full within its window, so the rate = 1 ÷ 3 = 33.3%. All three forms describe the same week, which is why the approved form must be fixed before publishing.",
      },
    },
    references: [
      {
        title: "SUMX function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/sumx-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "يطبق السقف على كل بند خطة قبل الجمع، فلا يعوّض الإنتاج الزائد نقصًا في بند آخر.",
          en: "Applies the cap to each plan line before summing, so overproduction cannot offset a shortfall elsewhere.",
        },
      },
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "قسمة آمنة للكمية المحققة على المخططة.",
          en: "Safe division of attained by planned quantity.",
        },
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Production Cycle Time                                             */
  /* ---------------------------------------------------------------- */
  {
    id: "production-cycle-time",
    slug: "production-cycle-time",
    name: "Production Cycle Time",
    nameAr: "زمن دورة الإنتاج",
    domains: ["manufacturing"],
    category: { ar: "التدفق والسرعة", en: "Flow and speed" },
    difficulty: "intermediate",
    unit: { ar: "ساعات (أو دقائق)", en: "Hours (or minutes)" },
    aggregation: "non-additive",
    definition: {
      ar: "الوقت المستغرق لإنتاج وحدة أو دفعة بين نقطتي بداية ونهاية محددتين في العملية. قيمته تعتمد كليًا على اختيار هاتين النقطتين: بداية التشغيل ونهايته فقط، أم من إطلاق أمر العمل حتى الاستلام في المستودع.",
      en: "The time taken to produce a unit or batch between defined start and end points in the process. Its value depends entirely on choosing those two points: run start to run end only, or from work-order release to warehouse receipt.",
    },
    whyItMatters: {
      ar: "زمن الدورة يحدد كم يمكن للمصنع أن يعد العميل، وكم من المخزون تحت التشغيل يحتاج، وأين يقع عنق الزجاجة. مقارنته بين العمليات والمنتجات تكشف المرحلة التي يتكدس عندها العمل.",
      en: "Cycle time determines what the plant can promise customers, how much work-in-progress it must carry, and where the bottleneck sits. Comparing it across operations and products reveals the stage where work piles up.",
    },
    interpretation: {
      ar: "زمن دورة 2.5 ساعة للدفعة يعني أن الدفعة تشغل العملية هذا الوقت بين نقطتي القياس. توزيع الأزمنة أهم من متوسطها: دفعات قليلة طويلة جدًا ترفع المتوسط وتخفي أن معظم الدفعات سريعة، لذلك يُعرض الوسيط والمئين التسعون بجانب المتوسط.",
      en: "A cycle time of 2.5 hours per batch means the batch occupies the process for that long between the measurement points. The distribution matters more than the average: a few very long batches lift the mean and hide that most batches are fast, so the median and 90th percentile are shown alongside the mean.",
    },
    formula: "Cycle Time = Process End Timestamp - Process Start Timestamp (per defined unit or batch and process)",
    numerator: {
      ar: "المدة بين طابعي البداية والنهاية لكل دفعة أو وحدة مكتملة، بوحدة زمنية ثابتة (دقائق عادة).",
      en: "The duration between the start and end timestamps for each completed batch or unit, in a fixed time unit (usually minutes).",
    },
    denominator: {
      ar: "عند التجميع: عدد الدفعات أو الوحدات المكتملة. الدفعات المفتوحة التي لم تنتهِ تُستبعد وتُتابع منفصلة.",
      en: "When aggregating: the number of completed batches or units. Open batches that have not finished are excluded and tracked separately.",
    },
    timeGrain: {
      ar: "يُسجل لكل دفعة، ويُعرض أسبوعيًا أو شهريًا كوسيط ومئين حسب تاريخ الإكمال.",
      en: "Recorded per batch, and reported weekly or monthly as median and percentile by completion date.",
    },
    direction: {
      rising: {
        ar: "ارتفاعه يعني بطئًا أو انتظارًا أطول أو أعطالًا داخل العملية. تحقق من تغير مزيج المنتجات أو أحجام الدفعات قبل الحكم.",
        en: "A rise means slowdowns, longer waits, or breakdowns inside the process. Check for shifts in product mix or batch sizes before judging.",
      },
      falling: {
        ar: "انخفاضه عادة تحسّن في التدفق، لكنه قد يأتي من دفعات أصغر حجمًا تعني عمليات تحويل أكثر وطاقة أقل.",
        en: "A fall is usually better flow, but it may come from smaller batches, which means more changeovers and less capacity.",
      },
      caveat: {
        ar: "زمن الدورة للدفعة يتأثر بحجمها. مقارنة دفعات بأحجام مختلفة دون تحويل الزمن إلى الوحدة أو تثبيت الحجم تقارن أشياء غير متماثلة.",
        en: "Batch cycle time depends on batch size. Comparing batches of different sizes without converting to per-unit time or holding size fixed compares unlike things.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "بداية تشغيل الدفعة", en: "Batch start" }, value: "08:00" },
        { label: { ar: "اكتمال الدفعة", en: "Batch completion" }, value: "10:30" },
      ],
      steps: [
        { label: { ar: "المدة بالدقائق", en: "Duration in minutes" }, expression: "10:30 − 08:00 = 150 min" },
        { label: { ar: "التحويل إلى ساعات", en: "Convert to hours" }, expression: "150 ÷ 60 = 2.5 h" },
      ],
      result: { label: { ar: "زمن دورة الدفعة", en: "Batch cycle time" }, value: "2.5 h" },
      reading: {
        ar: "الساعتان والنصف تقيسان ما بين البداية والنهاية المسجلتين فقط. إذا انتظرت الدفعة ثلاث ساعات قبل البدء أو بعد الانتهاء لفحص الجودة، فهذا وقت لا يظهر هنا، ولكنه جزء من زمن التوريد الذي يراه العميل.",
        en: "The two and a half hours measure only what lies between the recorded start and end. If the batch waited three hours before starting or after finishing for quality release, that time does not appear here, yet it is part of the lead time the customer experiences.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "المتوسط والوسيط والمئين 90 لزمن الدورة", en: "Mean, median, and P90 cycle time" },
        code: `-- CycleMinutes is computed upstream as EndTimestamp - StartTimestamp in minutes.
Completed Batches :=
CALCULATE (
    COUNTROWS ( 'ProductionBatch' ),
    NOT ISBLANK ( 'ProductionBatch'[EndTimestamp] )
)

Avg Cycle Time (h) :=
DIVIDE (
    CALCULATE (
        SUM ( 'ProductionBatch'[CycleMinutes] ),
        NOT ISBLANK ( 'ProductionBatch'[EndTimestamp] )
    ),
    [Completed Batches]
) / 60

Median Cycle Time (h) :=
VAR Done =
    FILTER ( 'ProductionBatch', NOT ISBLANK ( 'ProductionBatch'[EndTimestamp] ) )
RETURN
    MEDIANX ( Done, 'ProductionBatch'[CycleMinutes] ) / 60

P90 Cycle Time (h) :=
VAR Done =
    FILTER ( 'ProductionBatch', NOT ISBLANK ( 'ProductionBatch'[EndTimestamp] ) )
RETURN
    PERCENTILEX.INC ( Done, 'ProductionBatch'[CycleMinutes], 0.9 ) / 60

-- Per-unit view, so batches of different sizes can be compared.
Cycle Minutes per Unit :=
DIVIDE (
    CALCULATE (
        SUM ( 'ProductionBatch'[CycleMinutes] ),
        NOT ISBLANK ( 'ProductionBatch'[EndTimestamp] )
    ),
    CALCULATE (
        SUM ( 'ProductionBatch'[BatchQty] ),
        NOT ISBLANK ( 'ProductionBatch'[EndTimestamp] )
    )
)`,
        assumptions: [
          {
            ar: "CycleMinutes عمود يُحسب في Power Query أو المصدر من طابعي البداية والنهاية بنفس المنطقة الزمنية، ويبقى فارغًا للدفعات المفتوحة.",
            en: "CycleMinutes is a column computed in Power Query or the source from the start and end timestamps in the same time zone, and stays blank for open batches.",
          },
          {
            ar: "نقطتا البداية والنهاية ثابتتان ومتفق عليهما (هنا: بداية التشغيل ونهايته على العملية)، ولا تشملان الانتظار قبل البدء أو بعد الانتهاء.",
            en: "The start and end points are fixed and agreed (here: run start and run end on the operation) and exclude waiting before start or after finish.",
          },
          {
            ar: "جدول 'Date' مرتبط بـ 'ProductionBatch'[EndDate] (تاريخ الإكمال)، فتُنسب الدفعة إلى الفترة التي انتهت فيها.",
            en: "'Date' relates to 'ProductionBatch'[EndDate] (completion date), so a batch is attributed to the period in which it finished.",
          },
          {
            ar: "التجميع يتم من صفوف الدفعات مباشرة؛ متوسط متوسطات الأسابيع أو الخطوط غير صحيح لأن المؤشر غير جمعي.",
            en: "Aggregation works directly from batch rows; an average of weekly or line averages is wrong because the metric is non-additive.",
          },
        ],
        requires: [
          "ProductionBatch[CycleMinutes]",
          "ProductionBatch[EndTimestamp]",
          "ProductionBatch[BatchQty]",
          "ProductionBatch[EndDate]",
        ],
      },
    ],
    model: [
      {
        table: "ProductionBatch",
        grain: { ar: "دفعة واحدة على عملية واحدة لكل صف", en: "One batch on one operation per row" },
        columns: ["BatchId", "RunId", "OperationId", "LineId", "ProductId", "ReleaseTimestamp", "StartTimestamp", "EndTimestamp", "EndDate", "BatchQty", "CycleMinutes", "QueueMinutes"],
        role: { ar: "جدول الحقائق الأساسي؛ QueueMinutes يتيح فصل الانتظار عن المعالجة", en: "Primary fact; QueueMinutes allows separating waiting from processing" },
      },
      {
        table: "Operation",
        grain: { ar: "عملية واحدة لكل صف", en: "One row per operation" },
        columns: ["OperationId", "OperationName", "RoutingSequence", "WorkCenterId"],
        role: { ar: "يكشف العملية التي تمثل عنق الزجاجة", en: "Reveals the bottleneck operation" },
      },
      {
        table: "Product",
        grain: { ar: "منتج واحد لكل صف", en: "One row per product" },
        columns: ["ProductId", "ProductName", "ProductFamily", "StandardBatchQty"],
        role: { ar: "بُعد المقارنة حسب المنتج وحجم الدفعة القياسي", en: "Comparison by product and standard batch size" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "WeekKey", "MonthKey"],
        role: { ar: "مرتبط بتاريخ الإكمال", en: "Related to the completion date" },
      },
    ],
    visuals: [
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "المتوسط والوسيط والمئين 90 معًا يكشفون فورًا إن كانت هناك دفعات شاذة تسحب المتوسط.",
          en: "Mean, median, and P90 together immediately reveal whether outlier batches are pulling the average.",
        },
      },
      {
        pattern: "period-over-period",
        why: {
          ar: "اتجاه الوسيط أسبوعيًا مقارنة بالفترة السابقة يظهر أثر تحسينات العملية أو تدهورها.",
          en: "The weekly median trend against the prior period shows the effect of process improvements or deterioration.",
        },
      },
      {
        pattern: "exception-table",
        why: {
          ar: "جدول الدفعات التي تجاوزت المئين 90 مع العملية والمنتج هو نقطة البداية لتحليل عنق الزجاجة.",
          en: "A table of batches above the 90th percentile with their operation and product is the starting point for bottleneck analysis.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "الخلط بين زمن المعالجة وزمن التوريد الكلي الذي يشمل الانتظار في الطوابير. قد يكون زمن المعالجة ساعتين بينما تستغرق الدفعة يومين من الإطلاق حتى المستودع.",
        en: "Confusing processing time with total lead time, which includes queue and waiting time. Processing may take two hours while the batch takes two days from release to warehouse.",
      },
      {
        ar: "الاكتفاء بالمتوسط. توزيع أزمنة الدورة منحرف عادة، ودفعة واحدة معطلة ترفع المتوسط بشكل لا يمثل الدفعات الأخرى.",
        en: "Relying on the mean alone. Cycle-time distributions are usually skewed, and one stalled batch lifts the mean in a way that does not represent the others.",
      },
      {
        ar: "تضمين الدفعات المفتوحة بزمن جزئي أو حذفها بصمت. الدفعات العالقة غالبًا هي الأطول، واستبعادها يجعل المؤشر يبدو أفضل؛ تابع عددها وعمرها منفصلين.",
        en: "Including open batches with partial time or silently dropping them. Stuck batches are often the longest, and excluding them flatters the metric; track their count and age separately.",
      },
      {
        ar: "طوابع زمنية بمناطق زمنية مختلفة أو دفعات تعبر منتصف الليل وتُحسب من الساعة فقط دون التاريخ، فتنتج مددًا سالبة أو ناقصة.",
        en: "Timestamps in different time zones, or batches crossing midnight computed from the clock time without the date, producing negative or truncated durations.",
      },
      {
        ar: "مقارنة المنتجات بزمن الدفعة رغم اختلاف أحجام دفعاتها. استخدم الزمن لكل وحدة أو قارن ضمن حجم دفعة قياسي.",
        en: "Comparing products by batch time despite different batch sizes. Use time per unit or compare within a standard batch size.",
      },
    ],
    variants: [
      {
        label: { ar: "زمن التوريد التصنيعي", en: "Manufacturing lead time" },
        formula: "Lead Time = Completion Timestamp - Work Order Release Timestamp",
        difference: {
          ar: "يقيس من إطلاق أمر العمل حتى الإكمال، فيشمل الانتظار بين العمليات. هو ما يهم العميل والتخطيط، وغالبًا أطول بكثير من زمن المعالجة.",
          en: "Measures from work-order release to completion, so it includes waiting between operations. It is what matters to customers and planning, and is usually far longer than processing time.",
        },
      },
      {
        label: { ar: "زمن الدورة لكل وحدة", en: "Cycle time per unit" },
        formula: "Cycle Time per Unit = Total Batch Cycle Minutes / Total Units in Those Batches",
        difference: {
          ar: "يحيّد أثر حجم الدفعة ويسمح بالمقارنة بين منتجات بأحجام دفعات مختلفة، وبمقارنة الفعلي بزمن الدورة المثالي المستخدم في OEE.",
          en: "Neutralises batch size and allows comparison across products with different batch sizes, and against the ideal cycle time used in OEE.",
        },
      },
      {
        label: { ar: "زمن المعالجة ذو القيمة المضافة", en: "Value-added processing time" },
        formula: "Value-Added Time = Sum of Operation Run Times (excluding queue, move, and wait)",
        difference: {
          ar: "يستبعد كل أوقات الانتظار والنقل. نسبته إلى زمن التوريد الكلي تقيس كفاءة التدفق.",
          en: "Excludes all queue, move, and wait time. Its ratio to total lead time measures flow efficiency.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "زمن التوريد من الإطلاق حتى الإكمال لا يمكن أن يكون أقصر من زمن المعالجة لنفس الدفعة، لأنه يحتويه ويضيف إليه الانتظار.",
          en: "Lead time from release to completion can never be shorter than processing time for the same batch, because it contains it and adds waiting.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "عرض الوسيط والمئينات بجانب المتوسط لأزمنة الدورة ممارسة شائعة في التحليل لأن توزيعها منحرف عادة.",
          en: "Reporting median and percentiles alongside the mean for cycle times is common analytical practice because the distribution is usually skewed.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "نقطتا البداية والنهاية، وهل يُقاس على مستوى الوحدة أو الدفعة، ومعاملة التوقفات داخل الدفعة — قرارات تحددها كل منشأة.",
          en: "The start and end points, whether to measure per unit or per batch, and the treatment of stoppages within a batch are decisions each organization makes.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "توقيتات المثال (08:00 إلى 10:30) من تأليفنا للتعليم، ولا نقدم زمن دورة معياريًا لأي عملية.",
          en: "The example times (08:00 to 10:30) are invented for teaching; we offer no benchmark cycle time for any process.",
        },
      },
    ],
    related: ["order-cycle-time", "schedule-attainment", "oee"],
    exercise: {
      prompt: {
        ar: "خمس دفعات مكتملة لنفس المنتج وبنفس الحجم استغرقت: 140 و150 و155 و160 و395 دقيقة. احسب المتوسط والوسيط بالساعات، وحدد أيهما يمثل الأداء المعتاد. ثم افترض أن الدفعة الأخيرة شملت 230 دقيقة انتظار لفحص الجودة داخل نقطتي القياس: ما زمن معالجتها الفعلي؟",
        en: "Five completed batches of the same product and size took 140, 150, 155, 160, and 395 minutes. Compute the mean and median in hours, and say which represents typical performance. Then suppose the last batch included 230 minutes waiting for quality release inside the measurement points: what is its actual processing time?",
      },
      hint: {
        ar: "رتّب الأزمنة واختر القيمة الوسطى للوسيط.",
        en: "Sort the times and take the middle value for the median.",
      },
      answer: {
        ar: "المجموع = 140 + 150 + 155 + 160 + 395 = 1,000 دقيقة، فالمتوسط = 1,000 ÷ 5 = 200 دقيقة = 3.33 ساعة. الوسيط هو القيمة الثالثة بعد الترتيب = 155 دقيقة = 2.58 ساعة. الوسيط يمثل الأداء المعتاد، لأن أربع دفعات من خمس تقع بين 140 و160 دقيقة، والمتوسط مرفوع بدفعة واحدة شاذة. زمن معالجة الدفعة الأخيرة = 395 − 230 = 165 دقيقة، أي أن العملية نفسها لم تكن بطيئة، والمشكلة في انتظار فحص الجودة، وهذا سبب فصل QueueMinutes عن زمن المعالجة.",
        en: "Total = 140 + 150 + 155 + 160 + 395 = 1,000 minutes, so the mean = 1,000 ÷ 5 = 200 minutes = 3.33 hours. The median is the third value once sorted = 155 minutes = 2.58 hours. The median represents typical performance, since four of five batches fall between 140 and 160 minutes and the mean is lifted by one outlier. The last batch's processing time = 395 − 230 = 165 minutes, so the process itself was not slow; the problem was waiting for quality release, which is why QueueMinutes is kept separate from processing time.",
      },
    },
    references: [
      {
        title: "PERCENTILEX.INC function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/percentilex-inc-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "يحسب المئين 90 لأزمنة الدورة على مستوى الدفعات المكتملة في السياق.",
          en: "Computes the 90th percentile of cycle times over the completed batches in context.",
        },
      },
      {
        title: "MEDIANX function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/medianx-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "يحسب الوسيط على جدول مرشح يستبعد الدفعات المفتوحة.",
          en: "Computes the median over a filtered table that excludes open batches.",
        },
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Manufacturing Cost per Unit                                       */
  /* ---------------------------------------------------------------- */
  {
    id: "manufacturing-cost-per-unit",
    slug: "manufacturing-cost-per-unit",
    name: "Manufacturing Cost per Unit",
    nameAr: "تكلفة التصنيع للوحدة",
    domains: ["manufacturing", "finance"],
    category: { ar: "التكلفة", en: "Cost" },
    difficulty: "advanced",
    unit: { ar: "عملة لكل وحدة سليمة", en: "Currency per good unit" },
    aggregation: "ratio",
    definition: {
      ar: "متوسط تكلفة تصنيع الوحدة السليمة وفق نطاق التكلفة المحدد: مجموع تكاليف التصنيع المعرّفة (مواد مباشرة وعمالة مباشرة وتكاليف صناعية غير مباشرة) خلال الفترة مقسومًا على الوحدات السليمة المنتجة. تكلفة الخردة تُحمَّل على الوحدات السليمة.",
      en: "The average cost to manufacture a good unit within the defined cost scope: total defined manufacturing costs (direct material, direct labor, and manufacturing overhead) in the period divided by good units produced. The cost of scrap is carried by the good units.",
    },
    whyItMatters: {
      ar: "هو الجسر بين أرضية المصنع والقوائم المالية: يحدد هامش المنتج وسعر البيع الأدنى وقيمة المخزون. وبما أن الخردة وإعادة العمل والوقت الضائع كلها تظهر فيه، فهو يترجم مؤشرات التشغيل إلى أثر مالي.",
      en: "It is the bridge between the shop floor and the financial statements: it drives product margin, the floor selling price, and inventory valuation. And because scrap, rework, and lost time all show up in it, it translates operational metrics into financial impact.",
    },
    interpretation: {
      ar: "تكلفة 12 لكل وحدة سليمة تعني أن كل وحدة قابلة للبيع حملت في المتوسط 12 من تكاليف التصنيع في النطاق المعرّف. تفكيكها إلى مواد وعمالة وتكاليف غير مباشرة يكشف أي رافعة تحرك الرقم.",
      en: "A cost of 12 per good unit means each saleable unit carried, on average, 12 of manufacturing cost within the defined scope. Splitting it into material, labor, and overhead reveals which lever moves the number.",
    },
    formula: "Manufacturing Cost per Unit = Defined Manufacturing Costs / Good Units Produced",
    numerator: {
      ar: "تكاليف التصنيع ضمن النطاق المتفق عليه للفترة: المواد المباشرة والعمالة المباشرة والتكاليف الصناعية غير المباشرة المحمّلة، دون المصروفات البيعية والإدارية.",
      en: "Manufacturing costs within the agreed scope for the period: direct material, direct labor, and allocated manufacturing overhead, excluding selling and administrative expenses.",
    },
    denominator: {
      ar: "الوحدات السليمة القابلة للبيع المنتجة في الفترة، بما فيها الوحدات التي نجحت بعد إعادة العمل، ودون الخردة.",
      en: "Good, saleable units produced in the period, including units that passed after rework, and excluding scrap.",
    },
    timeGrain: {
      ar: "شهري عادة، متوافقًا مع إقفال الفترة المحاسبية وتحميل التكاليف غير المباشرة. الأرقام الأسبوعية ممكنة للمواد والعمالة فقط.",
      en: "Usually monthly, aligned with the accounting period close and overhead allocation. Weekly figures are feasible for material and labor only.",
    },
    direction: {
      rising: {
        ar: "ارتفاعها يضغط على الهامش. ابحث في المكوّن المسؤول: أسعار المواد، أو ساعات العمل الإضافي، أو انخفاض الحجم الذي يوزع التكاليف الثابتة على وحدات أقل.",
        en: "A rise squeezes margin. Look at the responsible component: material prices, overtime hours, or lower volume spreading fixed costs over fewer units.",
      },
      falling: {
        ar: "انخفاضها تحسّن في الكفاءة غالبًا، لكن تحقق أنه ليس ناتجًا عن تأجيل صيانة أو تغيير في قاعدة التحميل أو تكاليف مرحّلة إلى فترة لاحقة.",
        en: "A fall is usually improved efficiency, but check it is not deferred maintenance, a change in allocation basis, or costs pushed into a later period.",
      },
      caveat: {
        ar: "زيادة الإنتاج تخفض التكلفة للوحدة آليًا لأن التكاليف الثابتة تتوزع على وحدات أكثر، حتى لو ذهب الإنتاج الإضافي إلى مخزون بلا طلب. انخفاض التكلفة للوحدة ليس دائمًا مكسبًا للشركة.",
        en: "Producing more mechanically lowers unit cost because fixed costs spread over more units, even when the extra output goes into stock nobody ordered. A lower unit cost is not always a gain for the company.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "المواد المباشرة", en: "Direct material" }, value: "72,000" },
        { label: { ar: "العمالة المباشرة", en: "Direct labor" }, value: "30,000" },
        { label: { ar: "التكاليف الصناعية غير المباشرة", en: "Manufacturing overhead" }, value: "18,000" },
        { label: { ar: "الوحدات السليمة المنتجة", en: "Good units produced" }, value: "10,000" },
      ],
      steps: [
        { label: { ar: "إجمالي تكاليف التصنيع", en: "Total manufacturing cost" }, expression: "72,000 + 30,000 + 18,000 = 120,000" },
        { label: { ar: "التكلفة للوحدة السليمة", en: "Cost per good unit" }, expression: "120,000 ÷ 10,000 = 12.0" },
        { label: { ar: "التفكيك للوحدة", en: "Per-unit breakdown" }, expression: "7.2 + 3.0 + 1.8 = 12.0" },
      ],
      result: { label: { ar: "تكلفة التصنيع للوحدة", en: "Manufacturing cost per unit" }, value: "12.0 per good unit" },
      reading: {
        ar: "المواد تشكل 60% من تكلفة الوحدة (7.2 من 12). لذلك يبدأ برنامج خفض التكلفة عادة من المواد والخردة، لأن نسبة توفير معينة في المواد تحرك تكلفة الوحدة أربعة أضعاف ما تحركه النسبة نفسها في التكاليف غير المباشرة (7.2 مقابل 1.8).",
        en: "Material makes up 60% of unit cost (7.2 of 12). So a cost reduction program usually starts with material and scrap, because a given percentage saving on material moves unit cost four times as much as the same percentage saving on overhead (7.2 versus 1.8).",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "التكلفة للوحدة السليمة ومكوناتها", en: "Cost per good unit and its components" },
        code: `Manufacturing Cost :=
SUM ( 'ManufacturingCost'[Amount] )

-- Saleable output: reworked units that passed ARE good here,
-- unlike the OEE Good Units measure, which penalises rework.
Good Output Units :=
SUM ( 'ProductionRun'[UnitsProduced] ) - SUM ( 'ProductionRun'[UnitsScrapped] )

Cost per Good Unit :=
DIVIDE ( [Manufacturing Cost], [Good Output Units] )

-- Components share the same denominator, so they add up to the total.
Material Cost per Unit :=
DIVIDE (
    CALCULATE ( [Manufacturing Cost], 'CostElement'[CostCategory] = "Material" ),
    [Good Output Units]
)

Labor Cost per Unit :=
DIVIDE (
    CALCULATE ( [Manufacturing Cost], 'CostElement'[CostCategory] = "Labor" ),
    [Good Output Units]
)

Overhead Cost per Unit :=
DIVIDE (
    CALCULATE ( [Manufacturing Cost], 'CostElement'[CostCategory] = "Overhead" ),
    [Good Output Units]
)`,
        assumptions: [
          {
            ar: "'ManufacturingCost' يحتوي فقط التكاليف ضمن النطاق المعتمد، والتكاليف غير المباشرة محمّلة مسبقًا على المنتج والخط في نظام التكاليف. التكاليف غير المحمّلة (بدون ProductId) تختفي عند الترشيح حسب المنتج.",
            en: "'ManufacturingCost' contains only in-scope costs, with overhead already allocated to product and line in the costing system. Unallocated costs (no ProductId) drop out when filtering by product.",
          },
          {
            ar: "'ProductionRun' لا يرتبط بـ 'CostElement'، لذلك يبقى المقام كاملًا عند الترشيح حسب فئة التكلفة، ومجموع المكونات يساوي التكلفة الكلية للوحدة.",
            en: "'ProductionRun' has no relationship to 'CostElement', so the denominator stays whole when filtering by cost category and the components add up to total unit cost.",
          },
          {
            ar: "جدول 'Date' مرتبط بـ 'ManufacturingCost'[PostingDate] و'ProductionRun'[ShiftDate]، والمقارنة ذات معنى على مستوى الشهر المقفل فقط.",
            en: "'Date' relates to 'ManufacturingCost'[PostingDate] and 'ProductionRun'[ShiftDate]; comparisons are meaningful only at closed-month level.",
          },
          {
            ar: "التكاليف والوحدات بعملة وتقييم ثابتين؛ المصانع بعملات مختلفة تُحوّل بسعر صرف موحد قبل المقارنة.",
            en: "Costs and units are in a consistent currency and valuation; plants in different currencies are converted at a common rate before comparison.",
          },
        ],
        requires: [
          "ManufacturingCost[Amount]",
          "ManufacturingCost[PostingDate]",
          "CostElement[CostCategory]",
          "ProductionRun[UnitsProduced]",
          "ProductionRun[UnitsScrapped]",
        ],
      },
    ],
    model: [
      {
        table: "ManufacturingCost",
        grain: { ar: "قيد تكلفة واحد لكل عنصر تكلفة ومنتج وخط وفترة", en: "One cost posting per cost element, product, line, and period" },
        columns: ["CostPostingId", "PostingDate", "ProductId", "LineId", "CostElementId", "Amount"],
        role: { ar: "مصدر البسط", en: "Source of the numerator" },
      },
      {
        table: "CostElement",
        grain: { ar: "عنصر تكلفة واحد لكل صف", en: "One row per cost element" },
        columns: ["CostElementId", "CostElementName", "CostCategory", "IsFixed"],
        role: { ar: "يصنف التكاليف إلى مواد وعمالة وتكاليف غير مباشرة، وثابتة ومتغيرة", en: "Classifies costs into material, labor, and overhead, and fixed versus variable" },
      },
      {
        table: "ProductionRun",
        grain: { ar: "تشغيلة واحدة لكل خط ومنتج ووردية (نفس جدول OEE)", en: "One run per line, product, and shift (the same table used by OEE)" },
        columns: ["RunId", "LineId", "ProductId", "ShiftDate", "UnitsStarted", "UnitsProduced", "UnitsDefective", "UnitsScrapped"],
        role: { ar: "مصدر المقام (الوحدات السليمة)", en: "Source of the denominator (good units)" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "FiscalPeriod", "IsClosedPeriod"],
        role: { ar: "يربط التكاليف والإنتاج بنفس الفترة المحاسبية", en: "Aligns costs and output to the same accounting period" },
      },
    ],
    visuals: [
      {
        pattern: "period-over-period",
        why: {
          ar: "اتجاه التكلفة للوحدة شهريًا حسب المنتج أو الخط هو الاستخدام الأساسي الذي يقترحه المرجع.",
          en: "The monthly unit-cost trend by product or line is the core use the source suggests.",
        },
      },
      {
        pattern: "stacked-bar",
        why: {
          ar: "أعمدة مكدسة بالمواد والعمالة والتكاليف غير المباشرة لكل منتج تعرض تركيب التكلفة ومقارنتها في آن واحد.",
          en: "Bars stacked by material, labor, and overhead per product show cost composition and comparison at once.",
        },
      },
      {
        pattern: "waterfall-variance",
        why: {
          ar: "جسر من تكلفة الشهر السابق إلى الحالي عبر المكونات يوضح أي عنصر رفع التكلفة أو خفضها.",
          en: "A bridge from last month's unit cost to this month's through the components shows which element raised or lowered it.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عدم تحديد التكاليف المشمولة (مباشرة وغير مباشرة)، وأساس تحميل التكاليف غير المباشرة، ومعاملة الإنتاج تحت التشغيل والخردة، ومقام الوحدات السليمة. أي تغيير في هذه القواعد يحرك الرقم دون تغير في الأداء.",
        en: "Not defining included direct and indirect costs, the overhead allocation basis, the treatment of work-in-progress and scrap, and the good-unit denominator. Any change to these rules moves the number with no change in performance.",
      },
      {
        ar: "تجاهل الإنتاج تحت التشغيل. تكاليف الشهر قد تخص وحدات لم تكتمل بعد، فيبدو الشهر ذو المخزون تحت التشغيل المرتفع أغلى مما هو فعلًا والشهر التالي أرخص.",
        en: "Ignoring work-in-progress. A month's costs may belong to units not yet finished, so a month with high WIP looks costlier than it is and the next month looks cheaper.",
      },
      {
        ar: "إعادة استخدام مقياس Good Units الخاص بـ OEE كمقام. ذلك المقياس يستبعد الوحدات المعاد تشغيلها رغم أنها قابلة للبيع، فتخرج التكلفة للوحدة مبالغًا فيها.",
        en: "Reusing the OEE Good Units measure as the denominator. That measure excludes reworked units even though they are saleable, overstating unit cost.",
      },
      {
        ar: "حساب متوسط التكلفة للوحدة عبر المنتجات أو الأشهر بمتوسط بسيط. المتوسط الصحيح يقسم إجمالي التكلفة على إجمالي الوحدات السليمة.",
        en: "Averaging unit cost across products or months with a simple average. The correct figure divides total cost by total good units.",
      },
      {
        ar: "مقارنة منتجات بتكلفتها للوحدة بينما التكاليف غير المباشرة محمّلة بأساس لا يعكس استهلاكها الفعلي (مثل الحجم فقط). المنتج قليل الحجم كثير التحويلات يبدو أرخص مما هو.",
        en: "Comparing products on unit cost while overhead is allocated on a basis that does not reflect actual consumption (such as volume only). A low-volume, changeover-heavy product looks cheaper than it is.",
      },
    ],
    variants: [
      {
        label: { ar: "التكلفة المعيارية مقابل الفعلية", en: "Standard versus actual cost" },
        formula: "Unit Cost Variance = Actual Cost per Unit - Standard Cost per Unit",
        difference: {
          ar: "يقارن التكلفة الفعلية بالتكلفة المعيارية المعتمدة في الموازنة، ويُفكك عادة إلى انحرافات سعر وكمية لكل عنصر.",
          en: "Compares actual cost with the approved standard cost from the budget, usually broken into price and usage variances per element.",
        },
      },
      {
        label: { ar: "التكلفة المتغيرة للوحدة", en: "Variable cost per unit" },
        formula: "Variable Cost per Unit = Variable Manufacturing Costs / Good Units Produced",
        difference: {
          ar: "يستبعد التكاليف الثابتة فلا يتأثر بحجم الإنتاج. أنسب لقرارات التسعير قصيرة المدى وتحليل التعادل.",
          en: "Excludes fixed costs, so it is not distorted by volume. Better suited to short-term pricing decisions and break-even analysis.",
        },
      },
      {
        label: { ar: "التكلفة لكل وحدة منتجة", en: "Cost per unit produced" },
        formula: "Cost per Unit Produced = Defined Manufacturing Costs / Total Units Produced (including scrap)",
        difference: {
          ar: "يوزع التكلفة على كل الوحدات بما فيها الخردة، فيخفي تكلفة الجودة الرديئة. الفرق بينه وبين الصيغة الأساسية هو تكلفة الخردة لكل وحدة سليمة.",
          en: "Spreads cost over all units including scrap, hiding the cost of poor quality. The gap between it and the primary form is the scrap cost per good unit.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "عندما يكون المقام مشتركًا، فإن مجموع تكلفة المواد والعمالة والتكاليف غير المباشرة للوحدة يساوي التكلفة الكلية للوحدة تمامًا. والتكلفة لكل وحدة سليمة لا تقل أبدًا عن التكلفة لكل وحدة منتجة.",
          en: "With a shared denominator, material, labor, and overhead per unit add up exactly to total unit cost. And cost per good unit is never lower than cost per unit produced.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "تقسيم تكلفة التصنيع إلى مواد مباشرة وعمالة مباشرة وتكاليف صناعية غير مباشرة عرف شائع في محاسبة التكاليف.",
          en: "Splitting manufacturing cost into direct material, direct labor, and manufacturing overhead is a common cost accounting convention.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "نطاق التكاليف المشمولة، وأساس تحميل التكاليف غير المباشرة، ومعاملة الإنتاج تحت التشغيل وتكلفة الخردة — كلها سياسات محاسبية لكل منشأة.",
          en: "The cost scope, the overhead allocation basis, and the treatment of WIP and scrap cost are accounting policies of each organization.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (120,000 تكلفة و10,000 وحدة سليمة وتفكيكها) من تأليفنا للتعليم، وليست معيارًا لأي صناعة.",
          en: "The example figures (120,000 of cost, 10,000 good units, and their breakdown) are invented for teaching and are not a benchmark for any industry.",
        },
      },
    ],
    related: ["scrap-rate", "gross-profit-margin", "oee", "first-pass-yield"],
    exercise: {
      prompt: {
        ar: "في شهر ما: مواد مباشرة 88,000، وعمالة مباشرة 36,000، وتكاليف غير مباشرة 26,000. أنتج المصنع 13,000 وحدة استُبعدت منها 1,000 كخردة. احسب التكلفة لكل وحدة سليمة ومكوناتها، ثم التكلفة لكل وحدة منتجة، وفسّر الفرق.",
        en: "In one month: direct material 88,000, direct labor 36,000, overhead 26,000. The plant produced 13,000 units, of which 1,000 were scrapped. Compute cost per good unit and its components, then cost per unit produced, and explain the difference.",
      },
      hint: {
        ar: "الوحدات السليمة = المنتجة − الخردة. استخدم المقام نفسه لكل المكونات.",
        en: "Good units = produced − scrapped. Use the same denominator for every component.",
      },
      answer: {
        ar: "إجمالي التكلفة = 88,000 + 36,000 + 26,000 = 150,000. الوحدات السليمة = 13,000 − 1,000 = 12,000. التكلفة لكل وحدة سليمة = 150,000 ÷ 12,000 = 12.50، منها مواد 88,000 ÷ 12,000 = 7.33، وعمالة 36,000 ÷ 12,000 = 3.00، وغير مباشرة 26,000 ÷ 12,000 = 2.17 (المجموع 12.50). التكلفة لكل وحدة منتجة = 150,000 ÷ 13,000 = 11.54. الفرق 0.96 لكل وحدة هو تكلفة الخردة التي تحملتها الوحدات السليمة: الألف وحدة المستبعدة استهلكت مواد وعمالة ووقتًا لا تُسترد إلا من سعر الوحدات المباعة.",
        en: "Total cost = 88,000 + 36,000 + 26,000 = 150,000. Good units = 13,000 − 1,000 = 12,000. Cost per good unit = 150,000 ÷ 12,000 = 12.50, of which material 88,000 ÷ 12,000 = 7.33, labor 36,000 ÷ 12,000 = 3.00, and overhead 26,000 ÷ 12,000 = 2.17 (total 12.50). Cost per unit produced = 150,000 ÷ 13,000 = 11.54. The 0.96 per-unit gap is the scrap cost carried by the good units: the thousand rejected units consumed material, labor, and time that can only be recovered through the price of the units sold.",
      },
    },
    references: [
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "قسمة آمنة لإجمالي التكلفة على الوحدات السليمة، تعيد BLANK في فترات بلا إنتاج.",
          en: "Safe division of total cost by good units, returning BLANK in periods with no output.",
        },
      },
      {
        title: "CALCULATE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/calculate-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "يعزل تكلفة كل فئة (مواد وعمالة وغير مباشرة) مع إبقاء المقام نفسه.",
          en: "Isolates each cost category (material, labor, overhead) while keeping the same denominator.",
        },
      },
    ],
  },
];
