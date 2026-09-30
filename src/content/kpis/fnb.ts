import type { Kpi } from "../types";

export const fnbKpis: Kpi[] = [
  /* ---------------------------------------------------------------- */
  /* Food Cost Percentage                                             */
  /* ---------------------------------------------------------------- */
  {
    id: "food-cost-pct",
    slug: "food-cost-pct",
    name: "Food Cost Percentage",
    nameAr: "نسبة تكلفة الطعام",
    domains: ["fnb"],
    category: { ar: "تكلفة المبيعات", en: "Cost of sales" },
    difficulty: "beginner",
    unit: { ar: "نسبة مئوية من مبيعات الطعام", en: "Percent of food sales" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة تكلفة مكوّنات الطعام المستهلكة إلى إيراد الطعام في الفترة نفسها. تجيب عن سؤال واحد: كم ندفع في المكوّنات مقابل كل وحدة نبيعها من الطعام؟",
      en: "The cost of food ingredients consumed, as a share of food revenue in the same period. It answers one question: how much do we spend on ingredients for every unit of food we sell?",
    },
    whyItMatters: {
      ar: "تكلفة المكوّنات من أكبر بنود التكلفة المتغيرة في المطعم، وأي انحراف صغير فيها ينعكس مباشرة على هامش الربح. المؤشر يربط أربعة قرارات في رقم واحد: وصفات الأطباق، وأسعار الشراء، والتحكم في الحصص، وتسعير القائمة.",
      en: "Ingredient cost is one of the largest variable costs in a restaurant, and a small drift flows straight into margin. The KPI ties four decisions into one number: recipes, purchase prices, portion control, and menu pricing.",
    },
    interpretation: {
      ar: "ارتفاع النسبة يعني أن جزءًا أكبر من كل وحدة مبيعات يذهب إلى المكوّنات. السبب قد يكون ارتفاع أسعار الموردين، أو حصصًا أكبر من الوصفة، أو هدرًا وسرقة، أو خصومات خفّضت المبيعات دون أن تغيّر التكلفة. مقارنة النسبة الفعلية بالنسبة النظرية المحسوبة من الوصفات تفصل مشكلة التسعير عن مشكلة التشغيل.",
      en: "A higher ratio means more of each unit of sales goes to ingredients. The cause may be supplier price rises, portions above recipe, waste or theft, or discounts that cut sales without changing cost. Comparing actual against theoretical cost from recipes separates a pricing problem from an operational one.",
    },
    formula: "Food Cost % = Food Cost of Sales / Food Sales x 100",
    numerator: {
      ar: "تكلفة الطعام المباع خلال الفترة. يجب تحديد أساسها صراحة: استهلاك فعلي (مخزون أول المدة + المشتريات - مخزون آخر المدة)، أو تكلفة نظرية من الوصفات، أو حركة صرف المخزون إلى المطبخ.",
      en: "Cost of food sold in the period. Its basis must be explicit: actual consumption (opening inventory + purchases - closing inventory), theoretical recipe cost, or stock issues to the kitchen.",
    },
    denominator: {
      ar: "صافي مبيعات الطعام فقط — بعد الخصومات وقبل الضريبة — دون المشروبات أو رسوم الخدمة أو التوصيل.",
      en: "Net food sales only — after discounts and before tax — excluding beverages, service charges, and delivery fees.",
    },
    timeGrain: {
      ar: "أسبوعي أو شهري، ويتبع دورة الجرد. التكلفة الفعلية تحتاج جردًا في بداية الفترة ونهايتها، فلا معنى لها يوميًا إلا إذا كان الجرد يوميًا.",
      en: "Weekly or monthly, following the stock-count cycle. Actual cost needs a count at the start and end of the period, so it is meaningless daily unless counts are daily.",
    },
    direction: {
      rising: {
        ar: "الارتفاع يعني عادة ضغطًا على الهامش: أسعار شراء أعلى، أو حصص أكبر، أو هدر، أو خصومات. ابحث في الفجوة بين الفعلي والنظري أولًا.",
        en: "A rise usually means margin pressure: higher purchase prices, bigger portions, waste, or discounting. Look at the actual-versus-theoretical gap first.",
      },
      falling: {
        ar: "الانخفاض قد يكون تحسنًا حقيقيًا في الشراء والتحكم، وقد يكون نتيجة رفع الأسعار أو تحوّل المزيج نحو أطباق أقل تكلفة.",
        en: "A fall may be a real gain in purchasing and control, or the result of price increases or a mix shift towards lower-cost dishes.",
      },
      caveat: {
        ar: "الأقل ليس دائمًا أفضل. خفض النسبة بتصغير الحصص أو استبدال مكوّنات بجودة أقل قد يحسّن الرقم ويضر بالزيارات المتكررة. والطبق ذو النسبة العالية قد يحقق ربحًا نقديًا أكبر لكل طبق — القرار يُقاس بالمساهمة النقدية أيضًا.",
        en: "Lower is not always better. Cutting the ratio by shrinking portions or downgrading ingredients can improve the number and hurt repeat visits. A high-ratio dish may still earn more cash margin per plate — decisions must also be judged on cash contribution.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "مخزون الطعام أول الشهر", en: "Opening food inventory" }, value: "12,000" },
        { label: { ar: "مشتريات الطعام خلال الشهر", en: "Food purchases in the month" }, value: "31,000" },
        { label: { ar: "مخزون الطعام آخر الشهر", en: "Closing food inventory" }, value: "13,000" },
        { label: { ar: "صافي مبيعات الطعام", en: "Net food sales" }, value: "100,000" },
      ],
      steps: [
        { label: { ar: "تكلفة الطعام المباع", en: "Food cost of sales" }, expression: "12,000 + 31,000 - 13,000 = 30,000" },
        { label: { ar: "نسبة تكلفة الطعام", en: "Food cost %" }, expression: "30,000 ÷ 100,000 × 100 = 30%" },
      ],
      result: { label: { ar: "نسبة تكلفة الطعام", en: "Food cost percentage" }, value: "30%" },
      reading: {
        ar: "من كل 100 وحدة من مبيعات الطعام ذهبت 30 وحدة إلى المكوّنات. الرقم وحده لا يكفي: قارنه بالنسبة النظرية من الوصفات، فإن كانت 27% مثلًا فالفجوة البالغة 3 نقاط هي تكلفة الهدر والحصص الزائدة والفروقات غير المفسرة.",
        en: "Of every 100 units of food sales, 30 went to ingredients. The number alone is not enough: compare it with the theoretical recipe ratio — if that were 27%, the 3-point gap is the cost of waste, over-portioning, and unexplained variance.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "نسبة تكلفة الطعام الفعلية والنظرية والانحراف عن الهدف", en: "Actual, theoretical, and target-variance food cost %" },
        code: `Food Sales :=
CALCULATE (
    SUM ( 'SalesLine'[NetAmount] ),
    'MenuItem'[RevenueCategory] = "Food"
)

-- Actual cost from the monthly stock reconciliation:
-- opening + purchases - closing, already computed per branch and period.
Food Cost (Actual) :=
CALCULATE (
    SUM ( 'CostOfSales'[CostAmount] ),
    'CostOfSales'[Category] = "Food"
)

Food Cost % :=
DIVIDE ( [Food Cost (Actual)], [Food Sales] )

-- Theoretical cost: what the food should have cost if every plate
-- followed the recipe exactly.
Food Cost (Theoretical) :=
CALCULATE (
    SUMX ( 'SalesLine', 'SalesLine'[Quantity] * RELATED ( 'MenuItem'[RecipeCost] ) ),
    'MenuItem'[RevenueCategory] = "Food"
)

Theoretical Food Cost % :=
DIVIDE ( [Food Cost (Theoretical)], [Food Sales] )

Food Cost Gap (pts) :=
[Food Cost %] - [Theoretical Food Cost %]

-- Target built as budget cost / budget sales, so it aggregates correctly
-- across branches and months instead of averaging per-branch targets.
Food Cost % Target :=
DIVIDE ( SUM ( 'Budget'[FoodCostBudget] ), SUM ( 'Budget'[FoodSalesBudget] ) )

Food Cost % vs Target (pts) :=
[Food Cost %] - [Food Cost % Target]`,
        assumptions: [
          {
            ar: "'SalesLine' بحبيبية سطر لكل صنف في الفاتورة، ومرتبط بـ 'MenuItem' بعلاقة متعدد-إلى-واحد، و NetAmount بعد الخصم وقبل الضريبة.",
            en: "'SalesLine' is at one row per item per check, related many-to-one to 'MenuItem', and NetAmount is after discount and before tax.",
          },
          {
            ar: "'CostOfSales' يحمل تكلفة فعلية جاهزة لكل فرع وفترة جرد وفئة (Food / Beverage) محسوبة من الجرد. الحساب من الجرد لا يمكن تقسيمه على الأصناف، لذلك لا يُعرض الفعلي على مستوى الطبق.",
            en: "'CostOfSales' holds a ready actual cost per branch, count period, and category (Food / Beverage) derived from stock counts. A count-based cost cannot be split by dish, so actual cost is not shown at item level.",
          },
          {
            ar: "RecipeCost هو تكلفة الوصفة الحالية للطبق. إن تغيرت أسعار المكوّنات خلال الفترة فالتكلفة النظرية التاريخية تحتاج جدول تكلفة وصفات مؤرَّخ.",
            en: "RecipeCost is the current recipe cost of the dish. If ingredient prices changed during the period, historical theoretical cost needs a dated recipe-cost table.",
          },
          {
            ar: "الجداول الثلاثة مرتبطة بجدول 'Date' وجدول 'Branch' مشتركين، وتواريخ 'CostOfSales' هي نهاية فترة الجرد.",
            en: "All three facts relate to shared 'Date' and 'Branch' tables, and 'CostOfSales' dates are the end of the count period.",
          },
        ],
        requires: [
          "SalesLine[NetAmount]",
          "SalesLine[Quantity]",
          "MenuItem[RevenueCategory]",
          "MenuItem[RecipeCost]",
          "CostOfSales[CostAmount]",
          "CostOfSales[Category]",
          "Budget[FoodCostBudget]",
          "Budget[FoodSalesBudget]",
        ],
      },
    ],
    model: [
      {
        table: "SalesLine",
        grain: { ar: "سطر لكل صنف في كل فاتورة", en: "One row per item per check" },
        columns: ["CheckId", "MenuItemId", "BranchId", "BusinessDate", "Quantity", "NetAmount"],
        role: { ar: "مصدر المقام (مبيعات الطعام) وأساس التكلفة النظرية", en: "Source of the denominator (food sales) and basis of theoretical cost" },
      },
      {
        table: "MenuItem",
        grain: { ar: "صنف واحد في القائمة لكل صف", en: "One row per menu item" },
        columns: ["MenuItemId", "ItemName", "RevenueCategory", "MenuSection", "RecipeCost"],
        role: { ar: "يفصل الطعام عن المشروبات ويحمل تكلفة الوصفة", en: "Separates food from beverage and carries recipe cost" },
      },
      {
        table: "CostOfSales",
        grain: { ar: "فرع × فترة جرد × فئة", en: "Branch x count period x category" },
        columns: ["BranchId", "PeriodEndDate", "Category", "OpeningInventory", "Purchases", "ClosingInventory", "CostAmount"],
        role: { ar: "مصدر البسط الفعلي", en: "Source of the actual numerator" },
      },
      {
        table: "Budget",
        grain: { ar: "فرع × شهر", en: "Branch x month" },
        columns: ["BranchId", "MonthKey", "FoodSalesBudget", "FoodCostBudget"],
        role: { ar: "مصدر الهدف بصيغة قابلة للتجميع", en: "Source of the target in an aggregatable form" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "WeekKey", "MonthKey", "FiscalPeriod"],
        role: { ar: "مرتبط بتاريخ العمل في المبيعات وبنهاية فترة الجرد في التكلفة", en: "Related to business date on sales and to period-end date on cost" },
      },
    ],
    visuals: [
      {
        pattern: "actual-vs-target",
        why: {
          ar: "النسبة تُدار مقابل هدف لكل فرع، وعرض الفعلي مع الهدف والانحراف بالنقاط هو ما تطلبه الإدارة كما يصف المرجع.",
          en: "The ratio is managed against a per-branch target, and showing actual, target, and variance in points is what management asks for, as the reference describes.",
        },
      },
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "بطاقة تجمع النسبة الفعلية والنظرية والفجوة بينهما تكشف فورًا هل المشكلة في التسعير أم في التشغيل.",
          en: "A card combining actual, theoretical, and the gap between them shows at once whether the issue is pricing or operations.",
        },
      },
      {
        pattern: "variance-bar",
        why: {
          ar: "ترتيب الفروع حسب الانحراف عن الهدف أسبوعيًا يوجّه زيارات المشرفين إلى حيث الفجوة أكبر.",
          en: "Ranking branches by weekly variance to target directs area managers to where the gap is largest.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "خلط أسس التكلفة: فرع يرسل تكلفة فعلية من الجرد وآخر يرسل تكلفة نظرية من الوصفات، ثم تُقارن النسبتان كأنهما مؤشر واحد. حدّد الأساس لكل رقم وأظهره في العنوان.",
        en: "Mixing cost bases: one branch reports actual count-based cost and another theoretical recipe cost, and the two ratios are compared as one metric. Fix the basis for each figure and show it in the title.",
      },
      {
        ar: "عدم تطابق النطاق بين البسط والمقام: تكلفة تشمل مكوّنات المشروبات أو وجبات الموظفين مقسومة على مبيعات الطعام فقط، أو مبيعات تشمل رسوم التوصيل.",
        en: "Mismatched scope between numerator and denominator: cost that includes beverage ingredients or staff meals divided by food sales only, or sales that include delivery fees.",
      },
      {
        ar: "حساب النسبة كمتوسط لنسب الفروع أو الأسابيع. الصحيح هو مجموع التكلفة مقسومًا على مجموع المبيعات، وإلا حصل فرع صغير على وزن فرع كبير.",
        en: "Averaging per-branch or per-week ratios. The correct figure is total cost divided by total sales; otherwise a small branch gets the weight of a large one.",
      },
      {
        ar: "حساب تكلفة فعلية أسبوعية دون جرد أسبوعي، بقسمة المشتريات على المبيعات. المشتريات تتبع جدول التوريد لا الاستهلاك، فتتذبذب النسبة بلا معنى.",
        en: "Computing a weekly actual cost without a weekly count by dividing purchases by sales. Purchases follow the delivery schedule, not consumption, so the ratio swings meaninglessly.",
      },
      {
        ar: "تجاهل أثر الخصومات والوجبات المجانية: الخصم يخفض المقام ولا يغيّر البسط، فترتفع النسبة دون أي تغير في المطبخ.",
        en: "Ignoring discounts and comps: a discount lowers the denominator without changing the numerator, so the ratio rises with no change in the kitchen.",
      },
    ],
    variants: [
      {
        label: { ar: "نسبة التكلفة النظرية", en: "Theoretical food cost %" },
        formula: "Sum(Quantity Sold x Recipe Cost) / Food Sales x 100",
        difference: {
          ar: "تحسب ما كان يجب أن تكلفه الأطباق المباعة لو اتُّبعت الوصفة حرفيًا. لا تحتاج جردًا وتتاح يوميًا وعلى مستوى الطبق، لكنها لا ترى الهدر ولا السرقة.",
          en: "Computes what the dishes sold should have cost if recipes were followed exactly. Needs no stock count and is available daily and per dish, but is blind to waste and theft.",
        },
      },
      {
        label: { ar: "نسبة التكلفة الشاملة (الطعام والمشروبات)", en: "Combined food and beverage cost %" },
        formula: "(Food Cost + Beverage Cost) / (Food Sales + Beverage Sales) x 100",
        difference: {
          ar: "رقم واحد للتكلفة الكلية يناسب ملخص الإدارة العليا، لكنه يخفي تحولات المزيج لأن هوامش المشروبات تختلف عادة عن الطعام.",
          en: "One total-cost figure suited to an executive summary, but it hides mix shifts because beverage margins usually differ from food.",
        },
      },
      {
        label: { ar: "تكلفة الطبق كنسبة من سعره", en: "Plate cost % per dish" },
        formula: "Recipe Cost / Menu Price (net of tax) x 100",
        difference: {
          ar: "مؤشر على مستوى الصنف يُستخدم في هندسة القائمة والتسعير، لا في مراقبة أداء الفرع.",
          en: "An item-level measure used for menu engineering and pricing, not for branch performance monitoring.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "التكلفة الفعلية وفق طريقة الجرد تساوي مخزون أول المدة زائد المشتريات ناقص مخزون آخر المدة، والنسبة المجمّعة عبر الفروع هي متوسط نسب الفروع مرجحًا بمبيعاتها.",
          en: "Count-based actual cost equals opening inventory plus purchases minus closing inventory, and the ratio aggregated across branches is the branch ratios weighted by their sales.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "مقارنة التكلفة الفعلية بالتكلفة النظرية من الوصفات ممارسة شائعة في إدارة المطاعم لفصل أثر التسعير عن أثر التشغيل.",
          en: "Comparing actual against theoretical recipe cost is a common restaurant-management practice to separate pricing effects from operational ones.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "أساس التكلفة، ومعاملة وجبات الموظفين والوجبات المجانية، والنسبة المستهدفة — كلها قرارات داخلية لكل منشأة وتختلف حسب نوع المطبخ ومستوى الأسعار.",
          en: "The cost basis, treatment of staff meals and comps, and the target ratio are internal decisions that vary by cuisine and price positioning.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (30,000 من 100,000) والنسبة النظرية 27% توضيحية وليست معيارًا للقطاع.",
          en: "The example figures (30,000 of 100,000) and the 27% theoretical ratio are illustrative, not an industry benchmark.",
        },
      },
    ],
    related: ["beverage-cost-pct", "food-waste-pct", "gross-profit-margin", "aov"],
    exercise: {
      prompt: {
        ar: "فرع لديه مخزون طعام أول الشهر 18,000، ومشتريات 42,500، ومخزون آخر الشهر 16,500، وصافي مبيعات طعام 150,000. التكلفة النظرية للأطباق المباعة وفق الوصفات 40,500. احسب نسبة التكلفة الفعلية والنظرية والفجوة بينهما بالنقاط وبالقيمة.",
        en: "A branch has opening food inventory of 18,000, purchases of 42,500, closing inventory of 16,500, and net food sales of 150,000. Theoretical recipe cost of the dishes sold is 40,500. Compute actual and theoretical food cost %, and the gap in points and in value.",
      },
      hint: {
        ar: "ابدأ بالتكلفة الفعلية: أول المدة + المشتريات - آخر المدة. الفجوة بالقيمة هي الفعلي ناقص النظري.",
        en: "Start with actual cost: opening + purchases - closing. The value gap is actual minus theoretical.",
      },
      answer: {
        ar: "التكلفة الفعلية = 18,000 + 42,500 - 16,500 = 44,000. النسبة الفعلية = 44,000 ÷ 150,000 = 29.33%. النسبة النظرية = 40,500 ÷ 150,000 = 27.00%. الفجوة = 2.33 نقطة، أي 3,500 بالقيمة. هذه الـ 3,500 لا تفسرها الوصفات: هي هدر أو حصص زائدة أو أخطاء جرد أو فقد. الخطوة التالية مقارنة الفجوة بسجل الهدر لمعرفة الجزء المسجَّل منها.",
        en: "Actual cost = 18,000 + 42,500 - 16,500 = 44,000. Actual ratio = 44,000 ÷ 150,000 = 29.33%. Theoretical ratio = 40,500 ÷ 150,000 = 27.00%. Gap = 2.33 points, or 3,500 in value. Recipes do not explain this 3,500: it is waste, over-portioning, count errors, or loss. The next step is comparing the gap with the waste log to see how much of it is recorded.",
      },
    },
    references: [
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "قسمة آمنة تعيد قيمة فارغة عند انعدام المبيعات بدل خطأ القسمة على صفر.",
          en: "Safe division that returns blank when sales are zero instead of a divide-by-zero error.",
        },
      },
      {
        title: "SUMX function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/sumx-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "يُستخدم لحساب التكلفة النظرية سطرًا بسطر: الكمية × تكلفة الوصفة.",
          en: "Used to compute theoretical cost row by row: quantity x recipe cost.",
        },
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Beverage Cost Percentage                                         */
  /* ---------------------------------------------------------------- */
  {
    id: "beverage-cost-pct",
    slug: "beverage-cost-pct",
    name: "Beverage Cost Percentage",
    nameAr: "نسبة تكلفة المشروبات",
    domains: ["fnb"],
    category: { ar: "تكلفة المبيعات", en: "Cost of sales" },
    difficulty: "beginner",
    unit: { ar: "نسبة مئوية من مبيعات المشروبات", en: "Percent of beverage sales" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة تكلفة مكوّنات المشروبات المباعة إلى صافي مبيعات المشروبات في الفترة نفسها. تُحسب منفصلة عن الطعام لأن هيكل التكلفة والهوامش مختلفان.",
      en: "The ingredient cost of beverages sold as a share of net beverage sales in the same period. It is tracked separately from food because the cost structure and margins differ.",
    },
    whyItMatters: {
      ar: "المشروبات غالبًا من أعلى البنود هامشًا في القائمة، لذلك أي تسرب فيها — حصص أكبر، أو كميات تُصرف دون تسجيل، أو فقد في المخزون — يأكل ربحًا كبيرًا بصمت. المؤشر يراقب الهوامش وحجم الحصص والفقد كما يصف المرجع.",
      en: "Beverages are often among the highest-margin items on the menu, so any leakage — larger pours, unrecorded servings, stock shrinkage — silently erodes significant profit. The KPI monitors margins, portion sizes, and shrinkage, as the reference describes.",
    },
    interpretation: {
      ar: "النسبة الإجمالية متوسط مرجّح لفئات مختلفة جدًا: القهوة المحضّرة تكلفتها منخفضة نسبيًا، والعصائر الطازجة مرتفعة، والمشروبات المعبأة تتحدد بسعر المورد. تغيّر النسبة الإجمالية قد يعني تغيّر المزيج بين الفئات لا تدهورًا في أي منها.",
      en: "The overall ratio is a weighted average of very different categories: brewed coffee has relatively low cost, fresh juices high, and bottled drinks are set by the supplier price. A movement in the total may reflect a shift in mix between categories rather than deterioration in any one of them.",
    },
    formula: "Beverage Cost % = Beverage Cost of Sales / Beverage Sales x 100",
    numerator: {
      ar: "تكلفة المشروبات المباعة، بنفس الأساس المعتمد للطعام (جرد فعلي أو وصفة نظرية)، ومقسّمة حسب الفئة عندما تختلف طرق التكلفة.",
      en: "Cost of beverages sold, on the same basis used for food (actual count or theoretical recipe), split by category where costing methods differ.",
    },
    denominator: {
      ar: "صافي مبيعات المشروبات بعد الخصومات ودون الضرائب. في الأسواق التي تفرض ضرائب انتقائية على بعض المشروبات يجب استبعادها من المبيعات حتى لا تتشوه المقارنة.",
      en: "Net beverage sales after discounts and excluding taxes. In markets that levy excise taxes on some drinks, exclude them from sales so comparisons are not distorted.",
    },
    timeGrain: {
      ar: "شهري عادة ويتبع دورة الجرد، مع قراءة أسبوعية للنسبة النظرية إن توفرت وصفات المشروبات.",
      en: "Usually monthly, following the count cycle, with a weekly read of the theoretical ratio where beverage recipes exist.",
    },
    direction: {
      rising: {
        ar: "الارتفاع يستحق التحقيق: ارتفاع أسعار الموردين، أو حصص أكبر، أو فقد، أو تحوّل المزيج نحو فئات أعلى تكلفة كالعصائر الطازجة.",
        en: "A rise warrants investigation: supplier price increases, larger portions, shrinkage, or a mix shift towards costlier categories such as fresh juices.",
      },
      falling: {
        ar: "الانخفاض قد يعكس تحكمًا أفضل أو رفعًا للأسعار أو تحوّلًا نحو القهوة والمشروبات منخفضة التكلفة.",
        en: "A fall may reflect better control, price increases, or a shift towards coffee and other low-cost drinks.",
      },
      caveat: {
        ar: "قبل الحكم على الاتجاه افصل أثر المزيج عن أثر الفئة: إن كانت نسبة كل فئة ثابتة وتغيّر المزيج فقط، فلا توجد مشكلة تشغيلية. والنسبة الأدنى لا تعني ربحًا أكبر إن انخفضت المبيعات.",
        en: "Before judging direction, separate mix effect from category effect: if each category's ratio held and only the mix changed, there is no operational problem. A lower ratio does not mean more profit if sales fell.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "القهوة والمشروبات الساخنة: التكلفة / المبيعات", en: "Coffee and hot drinks: cost / sales" }, value: "3,000 / 20,000" },
        { label: { ar: "العصائر الطازجة: التكلفة / المبيعات", en: "Fresh juices: cost / sales" }, value: "3,500 / 10,000" },
        { label: { ar: "المشروبات المعبأة: التكلفة / المبيعات", en: "Bottled drinks: cost / sales" }, value: "1,500 / 10,000" },
      ],
      steps: [
        { label: { ar: "إجمالي تكلفة المشروبات", en: "Total beverage cost" }, expression: "3,000 + 3,500 + 1,500 = 8,000" },
        { label: { ar: "إجمالي مبيعات المشروبات", en: "Total beverage sales" }, expression: "20,000 + 10,000 + 10,000 = 40,000" },
        { label: { ar: "نسبة تكلفة المشروبات", en: "Beverage cost %" }, expression: "8,000 ÷ 40,000 × 100 = 20%" },
        { label: { ar: "نسب الفئات", en: "Category ratios" }, expression: "15% ، 35% ، 15%" },
      ],
      result: { label: { ar: "نسبة تكلفة المشروبات", en: "Beverage cost percentage" }, value: "20%" },
      reading: {
        ar: "النسبة الإجمالية 20%، لكن العصائر الطازجة عند 35% بينما الفئتان الأخريان عند 15%. لو تضاعفت مبيعات العصائر الشهر القادم دون أي تغيير في الكفاءة، سترتفع النسبة الإجمالية — ولهذا يُفصل حسب الفئة كما ينبه المرجع.",
        en: "The overall ratio is 20%, but fresh juices run at 35% while the other two categories run at 15%. If juice sales doubled next month with no change in efficiency, the overall ratio would rise — which is why the reference says to separate categories.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "نسبة تكلفة المشروبات مع مقارنة الشهر السابق", en: "Beverage cost % with prior-month comparison" },
        code: `Beverage Sales :=
CALCULATE (
    SUM ( 'SalesLine'[NetAmount] ),
    'MenuItem'[RevenueCategory] = "Beverage"
)

Beverage Cost :=
CALCULATE (
    SUM ( 'CostOfSales'[CostAmount] ),
    'CostOfSales'[Category] = "Beverage"
)

-- Ratio of sums: in a matrix by beverage category each row is that
-- category's own ratio, and the total is weighted by sales automatically.
Beverage Cost % :=
DIVIDE ( [Beverage Cost], [Beverage Sales] )

Beverage Cost % PM :=
CALCULATE ( [Beverage Cost %], DATEADD ( 'Date'[Date], -1, MONTH ) )

Beverage Cost % MoM (pts) :=
VAR Curr = [Beverage Cost %]
VAR Prev = [Beverage Cost % PM]
RETURN
    IF ( NOT ISBLANK ( Curr ) && NOT ISBLANK ( Prev ), Curr - Prev )`,
        assumptions: [
          {
            ar: "'CostOfSales' بحبيبية فرع × فترة جرد × فئة مشروبات (BeverageCategory) مرتبطة بجدول فئات مشترك مع 'MenuItem'، حتى يتقاطع البسط والمقام في نفس الفئة.",
            en: "'CostOfSales' is at branch x count period x beverage category, and that category relates to a category dimension shared with 'MenuItem', so numerator and denominator slice by the same category.",
          },
          {
            ar: "NetAmount لا يشمل ضريبة القيمة المضافة ولا الضرائب الانتقائية.",
            en: "NetAmount excludes VAT and any excise tax.",
          },
          {
            ar: "'Date' جدول تاريخ متصل ومعلَّم كجدول تاريخ، وإلا فإن DATEADD يعيد نتائج خاطئة أو فارغة.",
            en: "'Date' is a contiguous table marked as a date table; otherwise DATEADD returns wrong or blank results.",
          },
          {
            ar: "المقارنة الشهرية تفترض أن الشهر الحالي مكتمل الجرد. شهر جارٍ لم يُجرد بعد يجب إخفاؤه أو وسمه.",
            en: "The monthly comparison assumes the current month has been counted. An open month without a count should be hidden or flagged.",
          },
        ],
        requires: ["SalesLine[NetAmount]", "MenuItem[RevenueCategory]", "CostOfSales[CostAmount]", "CostOfSales[Category]", "Date[Date]"],
      },
    ],
    model: [
      {
        table: "SalesLine",
        grain: { ar: "سطر لكل صنف في كل فاتورة", en: "One row per item per check" },
        columns: ["CheckId", "MenuItemId", "BranchId", "BusinessDate", "Quantity", "NetAmount"],
        role: { ar: "مصدر مبيعات المشروبات", en: "Source of beverage sales" },
      },
      {
        table: "MenuItem",
        grain: { ar: "صنف واحد لكل صف", en: "One row per menu item" },
        columns: ["MenuItemId", "RevenueCategory", "BeverageCategory", "RecipeCost"],
        role: { ar: "يصنف المشروبات إلى فئات ذات تكلفة متقاربة", en: "Groups beverages into categories with similar costing" },
      },
      {
        table: "CostOfSales",
        grain: { ar: "فرع × فترة جرد × فئة", en: "Branch x count period x category" },
        columns: ["BranchId", "PeriodEndDate", "Category", "BeverageCategory", "CostAmount"],
        role: { ar: "مصدر تكلفة المشروبات", en: "Source of beverage cost" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "Year"],
        role: { ar: "يدعم الاتجاه الشهري والمقارنة بالشهر السابق", en: "Supports the monthly trend and prior-month comparison" },
      },
    ],
    visuals: [
      {
        pattern: "variance-bar",
        why: {
          ar: "مقارنة الفروع مقابل الهدف أو المتوسط تبرز الفرع الذي يتسرب فيه الهامش، وهو ما يعنيه المرجع بمصفوفة مقارنة الفروع.",
          en: "Comparing branches against target or average highlights where margin is leaking — the branch comparison the reference calls for.",
        },
      },
      {
        pattern: "period-over-period",
        why: {
          ar: "الاتجاه الشهري مع مقارنة الشهر السابق يكشف أثر تغيّر أسعار الموردين فور حدوثه.",
          en: "A monthly trend with prior-month comparison reveals supplier price changes as they happen.",
        },
      },
      {
        pattern: "decomposition-tree",
        why: {
          ar: "التفكيك من الفرع إلى الفئة ثم الصنف يفصل أثر المزيج عن تدهور فئة بعينها.",
          en: "Drilling from branch to category to item separates mix effects from deterioration in a specific category.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "دمج فئات ذات وصفات أو ضرائب أو طرق تكلفة مختلفة في نسبة واحدة، فيبدو تغيّر المزيج كأنه مشكلة تشغيلية. افصل الفئات كما ينبه المرجع.",
        en: "Merging categories with different recipes, taxes, or costing methods into one ratio, so a mix shift looks like an operational problem. Separate categories, as the reference warns.",
      },
      {
        ar: "حساب النسبة الإجمالية كمتوسط بسيط لنسب الفئات. في المثال يعطي المتوسط البسيط 21.67% بدل 20% الصحيحة.",
        en: "Computing the total as a simple average of category ratios. In the example the simple average gives 21.67% instead of the correct 20%.",
      },
      {
        ar: "إدراج المشروبات المرافقة للوجبات المجمّعة (Combo) ضمن مبيعات الطعام بينما تُسجّل تكلفتها في المشروبات، أو العكس. يجب توزيع سعر الوجبة المجمعة على مكوّناتها بقاعدة ثابتة.",
        en: "Booking the drink in a combo meal under food sales while its cost lands in beverages, or vice versa. The combo price must be allocated across components by a fixed rule.",
      },
      {
        ar: "إدخال الضرائب الانتقائية في المبيعات في سوق وخارجها في سوق آخر، فتظهر فروق بين الدول لا علاقة لها بالتشغيل.",
        en: "Including excise taxes in sales in one market and excluding them in another, creating country differences unrelated to operations.",
      },
      {
        ar: "تجاهل الفقد غير المسجّل: المشروبات التي تُقدّم مجانًا أو للموظفين دون تسجيل ترفع التكلفة بلا مبيعات مقابلة، وتظهر في الجرد لا في الوصفة.",
        en: "Ignoring unrecorded loss: drinks given away or to staff without recording raise cost with no matching sales, and show up in the count but not the recipe.",
      },
    ],
    variants: [
      {
        label: { ar: "نسبة تكلفة المشروبات حسب الفئة", en: "Beverage cost % by category" },
        formula: "Category Beverage Cost / Category Beverage Sales x 100",
        difference: {
          ar: "يحسب نسبة لكل فئة (ساخنة، عصائر، معبأة) على حدة، وهو الأساس الصحيح للأهداف لأن الهدف الإجمالي يتغير مع المزيج.",
          en: "Computes a ratio per category (hot, juices, bottled), the right basis for targets because a single overall target moves with mix.",
        },
      },
      {
        label: { ar: "النسبة النظرية للمشروبات", en: "Theoretical beverage cost %" },
        formula: "Sum(Quantity Sold x Recipe Cost) / Beverage Sales x 100",
        difference: {
          ar: "مبنية على وصفات المشروبات لا على الجرد. الفرق بينها وبين الفعلي هو مقياس الفقد والحصص الزائدة.",
          en: "Based on beverage recipes rather than stock counts. Its gap to actual measures shrinkage and over-pouring.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "النسبة الإجمالية تساوي متوسط نسب الفئات مرجحًا بمبيعاتها، لذلك يمكن أن تتغير بتغير المزيج وحده دون تغيّر نسبة أي فئة.",
          en: "The overall ratio equals the category ratios weighted by their sales, so it can move from mix change alone with no category ratio changing.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "فصل تكلفة المشروبات عن تكلفة الطعام في التقارير ممارسة شائعة في قطاع الضيافة لأن هيكلي التكلفة مختلفان.",
          en: "Reporting beverage cost separately from food cost is common hospitality practice because the two cost structures differ.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "تقسيم الفئات، وتوزيع سعر الوجبات المجمعة، ومعاملة الضرائب، والهدف لكل فئة — قرارات داخلية توثّق في قاموس المؤشرات.",
          en: "Category splits, combo price allocation, tax treatment, and per-category targets are internal decisions documented in the metric dictionary.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (8,000 من 40,000) وتوزيعها على الفئات توضيحية وليست معيارًا للقطاع.",
          en: "The example figures (8,000 of 40,000) and their category split are illustrative, not an industry benchmark.",
        },
      },
    ],
    related: ["food-cost-pct", "gross-profit-margin", "aov"],
    exercise: {
      prompt: {
        ar: "في شهر ما: المشروبات الساخنة تكلفتها 4,200 ومبيعاتها 24,000، والعصائر الطازجة 5,400 من 15,000، والمعبأة 2,400 من 11,000. احسب نسبة كل فئة والنسبة الإجمالية الصحيحة، وقارنها بالمتوسط البسيط لنسب الفئات.",
        en: "In one month: hot drinks cost 4,200 on sales of 24,000, fresh juices 5,400 on 15,000, and bottled drinks 2,400 on 11,000. Compute each category's ratio and the correct overall ratio, and compare it with the simple average of the category ratios.",
      },
      hint: {
        ar: "النسبة الإجمالية = مجموع التكاليف ÷ مجموع المبيعات، لا متوسط النسب.",
        en: "Overall ratio = total cost ÷ total sales, not the average of ratios.",
      },
      answer: {
        ar: "الساخنة = 4,200 ÷ 24,000 = 17.50%. العصائر = 5,400 ÷ 15,000 = 36.00%. المعبأة = 2,400 ÷ 11,000 = 21.82%. الإجمالي = (4,200 + 5,400 + 2,400) ÷ (24,000 + 15,000 + 11,000) = 12,000 ÷ 50,000 = 24.00%. المتوسط البسيط = (17.50 + 36.00 + 21.82) ÷ 3 = 25.11%، أي أعلى بـ 1.11 نقطة لأنه يعطي العصائر — الأعلى تكلفة والأقل مبيعًا من الساخنة — وزنًا أكبر من وزنها الحقيقي.",
        en: "Hot = 4,200 ÷ 24,000 = 17.50%. Juices = 5,400 ÷ 15,000 = 36.00%. Bottled = 2,400 ÷ 11,000 = 21.82%. Overall = (4,200 + 5,400 + 2,400) ÷ (24,000 + 15,000 + 11,000) = 12,000 ÷ 50,000 = 24.00%. Simple average = (17.50 + 36.00 + 21.82) ÷ 3 = 25.11%, 1.11 points higher because it gives juices — the costliest category, with lower sales than hot drinks — more weight than they really carry.",
      },
    },
    references: [
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "أساس حساب النسبة كقسمة مجموعين مع حماية من القسمة على صفر.",
          en: "Basis for computing the ratio as a division of sums with divide-by-zero protection.",
        },
      },
      {
        title: "DATEADD function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/dateadd-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "يُستخدم لإزاحة سياق التاريخ شهرًا للخلف في مقارنة الشهر السابق.",
          en: "Used to shift the date context back one month for the prior-month comparison.",
        },
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Food Waste Percentage                                            */
  /* ---------------------------------------------------------------- */
  {
    id: "food-waste-pct",
    slug: "food-waste-pct",
    name: "Food Waste Percentage",
    nameAr: "نسبة هدر الطعام",
    domains: ["fnb"],
    category: { ar: "كفاءة المطبخ", en: "Kitchen efficiency" },
    difficulty: "intermediate",
    unit: { ar: "نسبة مئوية من مدخلات الطعام", en: "Percent of food input" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة الطعام المهدَر — بالكمية أو بالقيمة — من إجمالي الطعام المنتَج أو المتاح وفق تعريف المنشأة. يشمل الإنتاج الزائد والتلف وفاقد التحضير، ويُفصل فيه الهدر القابل للتجنب عن الفاقد الطبيعي.",
      en: "The share of food wasted — by quantity or value — out of the food produced or available, as the organization defines it. It covers overproduction, spoilage, and preparation loss, with avoidable waste separated from normal loss.",
    },
    whyItMatters: {
      ar: "كل وحدة مهدرة اشتُريت وخُزّنت وحُضّرت ثم لم تتحول إلى مبيعات. المؤشر يكشف مشكلات الإنتاج الزائد والتلف وفاقد التحضير وضعف تخطيط الطلب، وهو غالبًا التفسير الأكبر للفجوة بين تكلفة الطعام الفعلية والنظرية.",
      en: "Every wasted unit was bought, stored, and prepared, then never became a sale. The KPI exposes overproduction, spoilage, preparation loss, and weak demand planning, and it is often the largest explanation of the gap between actual and theoretical food cost.",
    },
    interpretation: {
      ar: "الرقم الإجمالي أقل فائدة من تفكيكه حسب السبب. الإنتاج الزائد يشير إلى التنبؤ بالطلب، والتلف إلى المخزون والتخزين، وفاقد التحضير إلى الوصفات والتدريب. والنسبة المنخفضة جدًا قد تعني تسجيلًا ناقصًا لا مطبخًا مثاليًا.",
      en: "The total is less useful than its breakdown by reason. Overproduction points to demand forecasting, spoilage to stock handling and storage, and preparation loss to recipes and training. A very low ratio may mean under-recording rather than a perfect kitchen.",
    },
    formula: "Food Waste % = Food Waste (Quantity or Cost) / Defined Food Input (Quantity or Cost) x 100",
    numerator: {
      ar: "الطعام المهدر المسجل في سجل الهدر، بالقيمة (الكمية × تكلفة الوحدة) أو بالكمية، مصنفًا حسب السبب: إنتاج زائد، تلف، فاقد تحضير، مرتجع من العميل.",
      en: "Food waste recorded in the waste log, by value (quantity x unit cost) or by quantity, classified by reason: overproduction, spoilage, preparation loss, customer return.",
    },
    denominator: {
      ar: "مدخلات الطعام المحددة، بنفس وحدة البسط: عادة تكلفة الطعام المصروف للمطبخ أو المستهلك خلال الفترة. يجب اختيار مقام واحد والالتزام به.",
      en: "The defined food input, in the same unit as the numerator: usually the cost of food issued to or consumed by the kitchen in the period. Choose one denominator and keep it.",
    },
    timeGrain: {
      ar: "يومي للتشغيل (خاصة الإنتاج الزائد)، وأسبوعي أو شهري للتقرير. المقام يجب أن يغطي نفس الفترة تمامًا.",
      en: "Daily for operations (especially overproduction), weekly or monthly for reporting. The denominator must cover exactly the same period.",
    },
    direction: {
      rising: {
        ar: "الارتفاع يعني تكلفة ضائعة أكبر. ابدأ بالسبب الأسرع نموًا، وتحقق مما إذا كان الارتفاع ناتجًا عن تحسن الانضباط في التسجيل لا عن هدر فعلي أكثر.",
        en: "A rise means more lost cost. Start with the fastest-growing reason, and check whether it reflects better logging discipline rather than more actual waste.",
      },
      falling: {
        ar: "الانخفاض جيد إن كان التسجيل ثابتًا. إن هبط الرقم فجأة مع بقاء الفجوة بين التكلفة الفعلية والنظرية كما هي، فالأرجح أن الهدر توقف عن التسجيل لا عن الحدوث.",
        en: "A fall is good if logging is stable. If the number drops suddenly while the actual-versus-theoretical cost gap stays the same, waste has more likely stopped being recorded than stopped happening.",
      },
      caveat: {
        ar: "الصفر ليس هدفًا واقعيًا: جزء من فاقد التحضير طبيعي. وخفض الإنتاج الزائد بشدة قد ينقل المشكلة إلى نفاد الأطباق وخسارة المبيعات، فالتوازن مع توفر القائمة ضروري.",
        en: "Zero is not a realistic target: some preparation loss is normal. Cutting overproduction too hard can move the problem to dishes selling out and lost sales, so balance it against menu availability.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "تكلفة الطعام المصروف للمطبخ", en: "Food input cost issued to kitchen" }, value: "50,000" },
        { label: { ar: "هدر الإنتاج الزائد", en: "Overproduction waste" }, value: "700" },
        { label: { ar: "هدر التلف وانتهاء الصلاحية", en: "Spoilage and expiry waste" }, value: "450" },
        { label: { ar: "فاقد التحضير", en: "Preparation loss" }, value: "350" },
      ],
      steps: [
        { label: { ar: "إجمالي الهدر", en: "Total waste" }, expression: "700 + 450 + 350 = 1,500" },
        { label: { ar: "نسبة الهدر", en: "Waste %" }, expression: "1,500 ÷ 50,000 × 100 = 3%" },
        { label: { ar: "الهدر القابل للتجنب", en: "Avoidable waste" }, expression: "(700 + 450) ÷ 50,000 × 100 = 2.3%" },
        { label: { ar: "فاقد التحضير", en: "Preparation loss" }, expression: "350 ÷ 50,000 × 100 = 0.7%" },
      ],
      result: { label: { ar: "نسبة هدر الطعام", en: "Food waste percentage" }, value: "3%" },
      reading: {
        ar: "من الـ 3% هناك 2.3 نقطة قابلة للتجنب، ثلثاها تقريبًا إنتاج زائد. هذا يوجّه العمل نحو تخطيط كميات التحضير حسب الطلب المتوقع لكل يوم ووقت، لا نحو تغيير الموردين.",
        en: "Of the 3%, 2.3 points are avoidable, and roughly two-thirds of that is overproduction. That directs effort to planning prep quantities by expected demand per day and daypart, not to changing suppliers.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "نسبة الهدر الإجمالية والقابلة للتجنب", en: "Total and avoidable food waste %" },
        code: `Waste Cost :=
SUM ( 'WasteLog'[CostValue] )

-- One agreed denominator: food cost issued to the kitchen in the period.
Food Input Cost :=
SUM ( 'KitchenIssue'[CostAmount] )

Food Waste % :=
DIVIDE ( [Waste Cost], [Food Input Cost] )

-- The reason filter reaches WasteLog only; KitchenIssue has no reason,
-- so the denominator is unaffected and the parts add up to the total.
Avoidable Waste % :=
DIVIDE (
    CALCULATE ( [Waste Cost], 'WasteReason'[IsAvoidable] = TRUE () ),
    [Food Input Cost]
)

Preparation Loss % :=
DIVIDE (
    CALCULATE ( [Waste Cost], 'WasteReason'[IsAvoidable] = FALSE () ),
    [Food Input Cost]
)`,
        assumptions: [
          {
            ar: "'WasteLog' بحبيبية تسجيل هدر واحد (صنف مخزون × فرع × تاريخ × سبب)، و CostValue محسوبة بتكلفة الوحدة المعتمدة في نفس أساس 'KitchenIssue'.",
            en: "'WasteLog' is at one waste entry (stock item x branch x date x reason), and CostValue uses the same unit-cost basis as 'KitchenIssue'.",
          },
          {
            ar: "'WasteReason' بُعد مرتبط بـ 'WasteLog' فقط، وفيه عمود IsAvoidable يحدد تصنيف كل سبب. تصنيف الأسباب قرار تشغيلي موثق.",
            en: "'WasteReason' is a dimension related only to 'WasteLog', with an IsAvoidable column classifying each reason. The classification is a documented operational decision.",
          },
          {
            ar: "'KitchenIssue' و 'WasteLog' مرتبطان بنفس جداول 'Date' و 'Branch' و 'StockItem'، حتى يمكن حساب النسبة حسب فئة المكوّن.",
            en: "'KitchenIssue' and 'WasteLog' share the same 'Date', 'Branch', and 'StockItem' dimensions so the ratio can be sliced by ingredient category.",
          },
          {
            ar: "الهدر المسجّل بالقيمة. إن كان المقياس المعتمد بالكمية فيجب توحيد الوحدات (كيلوغرام) قبل الجمع عبر أصناف مختلفة.",
            en: "Waste is measured in value. If the agreed measure is quantity, units must be standardized (kilograms) before summing across items.",
          },
        ],
        requires: ["WasteLog[CostValue]", "WasteReason[IsAvoidable]", "KitchenIssue[CostAmount]"],
      },
    ],
    model: [
      {
        table: "WasteLog",
        grain: { ar: "تسجيل هدر واحد: صنف × فرع × تاريخ × سبب", en: "One waste entry: item x branch x date x reason" },
        columns: ["WasteId", "StockItemId", "BranchId", "WasteDate", "ReasonId", "Quantity", "UnitCost", "CostValue"],
        role: { ar: "مصدر البسط", en: "Source of the numerator" },
      },
      {
        table: "KitchenIssue",
        grain: { ar: "حركة صرف واحدة من المخزن إلى المطبخ", en: "One stock issue from store to kitchen" },
        columns: ["IssueId", "StockItemId", "BranchId", "IssueDate", "Quantity", "CostAmount"],
        role: { ar: "مصدر المقام (مدخلات الطعام)", en: "Source of the denominator (food input)" },
      },
      {
        table: "WasteReason",
        grain: { ar: "سبب واحد لكل صف", en: "One row per reason" },
        columns: ["ReasonId", "ReasonName", "ReasonGroup", "IsAvoidable"],
        role: { ar: "يفصل الهدر القابل للتجنب عن الفاقد الطبيعي", en: "Separates avoidable waste from normal loss" },
      },
      {
        table: "StockItem",
        grain: { ar: "صنف مخزون واحد لكل صف", en: "One row per stock item" },
        columns: ["StockItemId", "ItemName", "IngredientCategory", "UnitOfMeasure", "ShelfLifeDays"],
        role: { ar: "يتيح التحليل حسب فئة المكوّن", en: "Enables analysis by ingredient category" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "Weekday", "WeekKey", "MonthKey"],
        role: { ar: "مرتبط بتاريخ الهدر وتاريخ الصرف معًا", en: "Related to both waste date and issue date" },
      },
    ],
    visuals: [
      {
        pattern: "period-over-period",
        why: {
          ar: "اتجاه الهدر عبر الأسابيع مع مقارنة الفترة السابقة هو الجزء الأول مما يوصي به المرجع.",
          en: "The waste trend across weeks with prior-period comparison is the first half of what the reference recommends.",
        },
      },
      {
        pattern: "stacked-bar",
        why: {
          ar: "تكديس الهدر حسب السبب لكل فرع أو فئة يُظهر أي سبب يهيمن، ويفصل القابل للتجنب عن الطبيعي بصريًا.",
          en: "Stacking waste by reason per branch or category shows which reason dominates and visually separates avoidable from normal loss.",
        },
      },
      {
        pattern: "decomposition-tree",
        why: {
          ar: "التفكيك من الفرع إلى فئة المكوّن ثم السبب يحقق مصفوفة الفئة/السبب التي يطلبها المرجع مع إمكانية التعمق.",
          en: "Drilling from branch to ingredient category to reason delivers the category/reason matrix the reference asks for, with drill-down.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "تغيير المقام بين التقارير: مرة المشتريات، ومرة الصرف للمطبخ، ومرة المبيعات. كل مقام يعطي رقمًا مختلفًا، والمرجع صريح: اختر مقامًا واحدًا والتزم به.",
        en: "Switching denominators between reports: purchases one time, kitchen issues another, sales a third. Each gives a different number, and the reference is explicit: pick one and keep it.",
      },
      {
        ar: "خلط الهدر القابل للتجنب مع فاقد التحضير الطبيعي (قشور، عظام، تشذيب) في رقم واحد يُحاسب عليه المطبخ.",
        en: "Mixing avoidable waste with normal preparation loss (peels, bones, trimming) into one number the kitchen is held to.",
      },
      {
        ar: "جمع الكميات بوحدات مختلفة (قطعة، كيلوغرام، لتر) في نفس المقياس، فيصبح المجموع بلا معنى.",
        en: "Summing quantities in different units (pieces, kilograms, litres) into one measure, making the total meaningless.",
      },
      {
        ar: "مكافأة انخفاض الرقم دون مراقبة جودة التسجيل. حين يُحاسب الفريق على الهدر يتوقف عن تسجيله؛ راقب الفجوة بين التكلفة الفعلية والنظرية كفحص مضاد.",
        en: "Rewarding a lower number without monitoring logging quality. When a team is penalized for waste, it stops recording it; watch the actual-versus-theoretical cost gap as a cross-check.",
      },
      {
        ar: "تقييم الهدر بسعر مختلف عن أساس تكلفة المقام (مثلًا سعر البيع للبسط وتكلفة الشراء للمقام)، فتتضخم النسبة.",
        en: "Valuing waste at a different price than the denominator's cost basis (e.g. selling price in the numerator, purchase cost in the denominator), inflating the ratio.",
      },
    ],
    variants: [
      {
        label: { ar: "نسبة الهدر بالكمية", en: "Waste % by quantity" },
        formula: "Waste Weight (kg) / Food Input Weight (kg) x 100",
        difference: {
          ar: "تقيس الأثر المادي والبيئي لا المالي، ولا تتأثر بتغير الأسعار. لكنها تعطي الخضروات الرخيصة الثقيلة وزنًا أكبر من اللحوم الغالية.",
          en: "Measures physical and environmental impact rather than financial, and is unaffected by price changes. But it weights cheap, heavy vegetables above expensive proteins.",
        },
      },
      {
        label: { ar: "الهدر كنسبة من المبيعات", en: "Waste as % of food sales" },
        formula: "Waste Cost / Food Sales x 100",
        difference: {
          ar: "يسهل مقارنته مباشرة بنسبة تكلفة الطعام لأنه على نفس المقام، فيُظهر كم نقطة من تكلفة الطعام سببها الهدر.",
          en: "Easy to compare directly with food cost % because it shares the denominator, showing how many points of food cost are due to waste.",
        },
      },
      {
        label: { ar: "نسبة الهدر القابل للتجنب فقط", en: "Avoidable waste % only" },
        formula: "Avoidable Waste Cost / Food Input Cost x 100",
        difference: {
          ar: "يستبعد فاقد التحضير الطبيعي، فهو الرقم الأنسب للمحاسبة التشغيلية ولوضع الأهداف.",
          en: "Excludes normal preparation loss, making it the better number for operational accountability and target setting.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "ما دام المقام واحدًا، فنسبة الهدر الإجمالية تساوي مجموع نسب الأسباب، ولذلك يمكن تكديسها في رسم واحد.",
          en: "As long as the denominator is shared, total waste % equals the sum of the per-reason ratios, which is why they can be stacked in one chart.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "تصنيف الهدر حسب السبب وفصل القابل للتجنب عن فاقد التحضير ممارسة شائعة في برامج خفض هدر الطعام.",
          en: "Classifying waste by reason and separating avoidable waste from preparation loss is common practice in food-waste reduction programmes.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "المقام المعتمد، وقائمة الأسباب، وأي سبب يُعد قابلًا للتجنب، وهل يُحتسب بقايا أطباق العملاء — كلها قرارات داخلية.",
          en: "The agreed denominator, the reason list, which reasons count as avoidable, and whether customer plate waste is included are internal decisions.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (1,500 من 50,000) وتوزيعها على الأسباب توضيحية وليست معيارًا للقطاع.",
          en: "The example figures (1,500 of 50,000) and their split by reason are illustrative, not an industry benchmark.",
        },
      },
    ],
    related: ["food-cost-pct", "inventory-turnover", "scrap-rate"],
    exercise: {
      prompt: {
        ar: "فرع صرف طعامًا للمطبخ بتكلفة 72,000 خلال الشهر. سجل الهدر: إنتاج زائد 1,300، تلف 900، فاقد تحضير 680. احسب نسبة الهدر الإجمالية والقابلة للتجنب. إذا كان هدف الهدر القابل للتجنب 2.5%، فكم يجب خفضه بالقيمة مع ثبات المدخلات؟",
        en: "A branch issued food costing 72,000 to the kitchen in a month. Waste log: overproduction 1,300, spoilage 900, preparation loss 680. Compute total and avoidable waste %. If the avoidable-waste target is 2.5%, how much must it fall in value, with input unchanged?",
      },
      hint: {
        ar: "القابل للتجنب = الإنتاج الزائد + التلف. الحد المسموح = 2.5% × المدخلات.",
        en: "Avoidable = overproduction + spoilage. The allowance = 2.5% x input.",
      },
      answer: {
        ar: "إجمالي الهدر = 1,300 + 900 + 680 = 2,880، والنسبة = 2,880 ÷ 72,000 = 4.00%. القابل للتجنب = 1,300 + 900 = 2,200، أي 3.06%. فاقد التحضير = 680 ÷ 72,000 = 0.94%. الحد المسموح = 2.5% × 72,000 = 1,800، فالمطلوب خفض 2,200 - 1,800 = 400. بما أن الإنتاج الزائد هو الأكبر (1,300)، فخفضه بنحو الثلث وحده يكفي تقريبًا لبلوغ الهدف.",
        en: "Total waste = 1,300 + 900 + 680 = 2,880, ratio = 2,880 ÷ 72,000 = 4.00%. Avoidable = 1,300 + 900 = 2,200, or 3.06%. Preparation loss = 680 ÷ 72,000 = 0.94%. The allowance = 2.5% x 72,000 = 1,800, so the reduction needed is 2,200 - 1,800 = 400. Since overproduction is the largest (1,300), cutting it by about a third alone nearly reaches the target.",
      },
    },
    references: [
      {
        title: "CALCULATE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/calculate-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "يُستخدم لتصفية البسط على الأسباب القابلة للتجنب مع ترك المقام دون تغيير.",
          en: "Used to filter the numerator to avoidable reasons while leaving the denominator unchanged.",
        },
      },
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "قسمة آمنة عند غياب صرف للمطبخ في الفترة أو الفرع المحدد.",
          en: "Safe division when there are no kitchen issues for the selected period or branch.",
        },
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Sales per Labor Hour                                             */
  /* ---------------------------------------------------------------- */
  {
    id: "sales-per-labor-hour",
    slug: "sales-per-labor-hour",
    name: "Sales per Labor Hour",
    acronym: "SPLH",
    nameAr: "المبيعات لكل ساعة عمل",
    domains: ["fnb", "retail"],
    category: { ar: "إنتاجية العمالة", en: "Labour productivity" },
    difficulty: "intermediate",
    unit: { ar: "عملة لكل ساعة عمل", en: "Currency per labour hour" },
    aggregation: "ratio",
    definition: {
      ar: "صافي المبيعات المحققة مقابل كل ساعة عمل مدفوعة الأجر في الفترة نفسها. يقيس إنتاجية الطاقم من حيث تحويل ساعات العمل إلى مبيعات.",
      en: "Net sales generated for every paid labour hour in the same period. It measures staff productivity in turning labour hours into sales.",
    },
    whyItMatters: {
      ar: "العمالة من أكبر التكاليف في المطاعم ومتاجر التجزئة، وهي التكلفة الأسهل تعديلًا عبر جدولة الورديات. SPLH يربط الجدولة بالطلب الفعلي: هل عدد الموظفين في كل وردية وفرع يتناسب مع حجم المبيعات؟",
      en: "Labour is one of the largest costs in restaurants and retail stores, and the easiest to adjust through shift scheduling. SPLH links scheduling to actual demand: does staffing per shift and branch match sales volume?",
    },
    interpretation: {
      ar: "رقم مرتفع يعني أن كل ساعة عمل تولّد مبيعات أكثر — قد يكون كفاءة، وقد يكون نقصًا في الطاقم يضغط على الخدمة. رقم منخفض يعني فائضًا في الساعات مقارنة بالطلب، وهو شائع في الفترات الهادئة لأن هناك حدًا أدنى من الطاقم لا يمكن النزول عنه.",
      en: "A high number means each labour hour produces more sales — possibly efficiency, possibly understaffing that strains service. A low number means excess hours relative to demand, common in quiet periods because there is a minimum crew that cannot be cut.",
    },
    formula: "Sales per Labor Hour = Net Sales / Paid Labor Hours",
    numerator: {
      ar: "صافي المبيعات بعد الخصومات والمرتجعات ودون الضرائب والإكراميات، لنفس الفرع والفترة.",
      en: "Net sales after discounts and refunds, excluding taxes and tips, for the same branch and period.",
    },
    denominator: {
      ar: "ساعات العمل المدفوعة من نظام الحضور، لا الساعات المجدولة. يجب تحديد الأدوار المشمولة: طاقم الخدمة والمطبخ فقط، أم الإدارة أيضًا.",
      en: "Paid labour hours from the time-and-attendance system, not scheduled hours. The roles included must be defined: service and kitchen crew only, or management too.",
    },
    timeGrain: {
      ar: "بالساعة أو حسب فترة اليوم (فطور، غداء، عشاء) للجدولة، وأسبوعي أو شهري للمقارنة بين الفروع.",
      en: "Hourly or by daypart (breakfast, lunch, dinner) for scheduling, weekly or monthly for branch comparison.",
    },
    direction: {
      rising: {
        ar: "الارتفاع يعني إنتاجية أعلى، بشرط ألا يصاحبه تراجع في رضا العملاء أو زيادة في أوقات الانتظار أو دوران الموظفين.",
        en: "A rise means higher productivity, provided it is not accompanied by falling guest satisfaction, longer waits, or staff turnover.",
      },
      falling: {
        ar: "الانخفاض يعني ساعات أكثر من حاجة الطلب أو مبيعات أقل بنفس الطاقم. افحص فترات اليوم الهادئة أولًا.",
        en: "A fall means more hours than demand needs, or lower sales on the same crew. Check quiet dayparts first.",
      },
      caveat: {
        ar: "الأعلى ليس دائمًا أفضل. فرع بطاقم ناقص قد يسجل SPLH ممتازًا بينما يخسر عملاء بسبب بطء الخدمة. وارتفاع الأسعار يرفع المؤشر دون أي تحسن في الإنتاجية الفعلية — قارن فترات تشغيل متشابهة كما ينبه المرجع.",
        en: "Higher is not always better. An understaffed branch may post excellent SPLH while losing guests to slow service. Price increases lift the KPI with no real productivity gain — compare similar operating periods, as the reference warns.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "الغداء: المبيعات / الساعات", en: "Lunch: sales / hours" }, value: "10,000 / 220" },
        { label: { ar: "العشاء: المبيعات / الساعات", en: "Dinner: sales / hours" }, value: "11,000 / 260" },
        { label: { ar: "الفترة الهادئة: المبيعات / الساعات", en: "Off-peak: sales / hours" }, value: "3,000 / 120" },
      ],
      steps: [
        { label: { ar: "إجمالي صافي المبيعات", en: "Total net sales" }, expression: "10,000 + 11,000 + 3,000 = 24,000" },
        { label: { ar: "إجمالي الساعات المدفوعة", en: "Total paid hours" }, expression: "220 + 260 + 120 = 600" },
        { label: { ar: "SPLH", en: "SPLH" }, expression: "24,000 ÷ 600 = 40" },
        { label: { ar: "حسب فترة اليوم", en: "By daypart" }, expression: "45.5 ، 42.3 ، 25.0" },
      ],
      result: { label: { ar: "المبيعات لكل ساعة عمل", en: "Sales per labour hour" }, value: "40" },
      reading: {
        ar: "المتوسط 40، لكن الفترة الهادئة عند 25 فقط. هذا لا يعني بالضرورة سوء إدارة — قد يكون الحد الأدنى من الطاقم — لكنه يحدد أين يجب مراجعة الجدولة أولًا.",
        en: "The average is 40, but off-peak runs at only 25. That does not necessarily mean poor management — it may be minimum crew — but it shows where to review scheduling first.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "SPLH مع مقارنة العام السابق", en: "SPLH with prior-year comparison" },
        code: `Net Sales :=
SUM ( 'SalesLine'[NetAmount] )

Paid Labor Hours :=
SUM ( 'LaborHour'[PaidHours] )

SPLH :=
DIVIDE ( [Net Sales], [Paid Labor Hours] )

-- Prior year, same period: compares like-for-like seasonality.
SPLH PY :=
CALCULATE ( [SPLH], DATEADD ( 'Date'[Date], -1, YEAR ) )

SPLH vs PY % :=
DIVIDE ( [SPLH] - [SPLH PY], [SPLH PY] )

-- Service crew only: management and support hours excluded.
SPLH (Service Crew) :=
DIVIDE (
    [Net Sales],
    CALCULATE ( [Paid Labor Hours], 'Role'[IsServiceCrew] = TRUE () )
)`,
        assumptions: [
          {
            ar: "'LaborHour' بحبيبية موظف × فرع × تاريخ × ساعة، أي أن الورديات مقسمة على الساعات مسبقًا. بدون ذلك لا يمكن توزيع وردية تمتد بين الغداء والعشاء على فترات اليوم.",
            en: "'LaborHour' is at employee x branch x date x hour, meaning shifts are pre-split into hours. Without this, a shift spanning lunch and dinner cannot be allocated to dayparts.",
          },
          {
            ar: "'SalesLine' و 'LaborHour' يشتركان في جداول 'Date' و 'Branch' و 'Daypart' (الأخير مبني على الساعة)، حتى يتقاطع البسط والمقام في نفس الفترة.",
            en: "'SalesLine' and 'LaborHour' share the 'Date', 'Branch', and 'Daypart' dimensions (the last keyed on hour), so numerator and denominator slice by the same period.",
          },
          {
            ar: "PaidHours من نظام الحضور، وتشمل الساعات الإضافية ولا تشمل الإجازات المدفوعة غير المعمولة.",
            en: "PaidHours come from time and attendance, include overtime, and exclude paid leave not worked.",
          },
          {
            ar: "'Role' بُعد مرتبط بـ 'LaborHour' فقط؛ تصفيته لا تمس المبيعات، وهذا هو المطلوب هنا.",
            en: "'Role' is a dimension related only to 'LaborHour'; filtering it does not touch sales, which is intended here.",
          },
          {
            ar: "'Date' معلَّم كجدول تاريخ ومتصل. فرع افتُتح هذا العام لن يكون له رقم للعام السابق، فتعود المقارنة فارغة.",
            en: "'Date' is marked as a contiguous date table. A branch opened this year has no prior-year figure, so the comparison returns blank.",
          },
        ],
        requires: ["SalesLine[NetAmount]", "LaborHour[PaidHours]", "Role[IsServiceCrew]", "Date[Date]"],
      },
    ],
    model: [
      {
        table: "SalesLine",
        grain: { ar: "سطر لكل صنف في كل فاتورة", en: "One row per item per check" },
        columns: ["CheckId", "BranchId", "BusinessDate", "HourOfDay", "NetAmount"],
        role: { ar: "مصدر البسط", en: "Source of the numerator" },
      },
      {
        table: "LaborHour",
        grain: { ar: "موظف × فرع × تاريخ × ساعة", en: "Employee x branch x date x hour" },
        columns: ["EmployeeId", "BranchId", "WorkDate", "HourOfDay", "RoleId", "PaidHours"],
        role: { ar: "مصدر المقام", en: "Source of the denominator" },
      },
      {
        table: "Daypart",
        grain: { ar: "ساعة واحدة من اليوم لكل صف", en: "One row per hour of day" },
        columns: ["HourOfDay", "DaypartName", "DaypartSort"],
        role: { ar: "بُعد مشترك يوزع المبيعات والساعات على فترات اليوم", en: "Shared dimension mapping sales and hours to dayparts" },
      },
      {
        table: "Role",
        grain: { ar: "دور وظيفي واحد لكل صف", en: "One row per job role" },
        columns: ["RoleId", "RoleName", "IsServiceCrew"],
        role: { ar: "يحدد الأدوار المشمولة في المقام", en: "Defines which roles are in the denominator" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "Weekday", "WeekKey", "MonthKey", "Year"],
        role: { ar: "مرتبط بتاريخ العمل في الجدولين", en: "Related to business date in both facts" },
      },
    ],
    visuals: [
      {
        pattern: "heatmap-calendar",
        why: {
          ar: "خريطة حرارية بفترات اليوم مقابل أيام الأسبوع تكشف الخانات التي يزيد فيها الطاقم عن الطلب، وهي مدخل مباشر للجدولة.",
          en: "A heatmap of dayparts against weekdays reveals the slots where staffing exceeds demand — a direct input to scheduling.",
        },
      },
      {
        pattern: "period-over-period",
        why: {
          ar: "الاتجاه حسب فترة اليوم مع مقارنة العام السابق يلبي توصية المرجع ويحيّد الموسمية.",
          en: "The trend by daypart with prior-year comparison meets the reference's recommendation and neutralizes seasonality.",
        },
      },
      {
        pattern: "scatter-quadrant",
        why: {
          ar: "وضع الفروع على محوري SPLH ورضا العملاء يميّز الكفاءة الحقيقية عن نقص الطاقم الذي يضر الخدمة.",
          en: "Plotting branches on SPLH against guest satisfaction separates genuine efficiency from understaffing that hurts service.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "مقارنة فروع أو فترات غير متشابهة: فرع في مركز تجاري مع فرع على طريق سريع، أو رمضان مع شهر عادي. قارن فترات تشغيل متشابهة كما ينبه المرجع.",
        en: "Comparing dissimilar branches or periods: a mall branch against a highway branch, or Ramadan against a normal month. Compare similar operating periods, as the reference warns.",
      },
      {
        ar: "استخدام الساعات المجدولة بدل المدفوعة. الفرق بينهما (غياب، ساعات إضافية، تأخر) هو بالضبط ما يحتاج المدير رؤيته.",
        en: "Using scheduled rather than paid hours. The difference (absence, overtime, lateness) is exactly what the manager needs to see.",
      },
      {
        ar: "حساب SPLH على مستوى الوردية الكاملة ثم تقسيمه على فترات اليوم. الوردية الممتدة بين فترتين تحتاج توزيعًا على الساعات قبل الحساب.",
        en: "Computing SPLH at whole-shift level and then splitting it by daypart. A shift spanning two dayparts must be allocated to hours before calculating.",
      },
      {
        ar: "حساب متوسط SPLH للفروع بدل قسمة مجموع المبيعات على مجموع الساعات، فيحصل الفرع الصغير على وزن الفرع الكبير.",
        en: "Averaging branch SPLH figures instead of dividing total sales by total hours, giving a small branch the weight of a large one.",
      },
      {
        ar: "تجاهل مزيج الأدوار والأجور: فرعان بنفس SPLH قد تختلف تكلفة العمالة بينهما كثيرًا. اعرض نسبة تكلفة العمالة بجانبه عند الحكم على الربحية.",
        en: "Ignoring role and wage mix: two branches with the same SPLH can have very different labour cost. Show labour cost % alongside it when judging profitability.",
      },
    ],
    variants: [
      {
        label: { ar: "نسبة تكلفة العمالة", en: "Labour cost %" },
        formula: "Labor Cost / Net Sales x 100",
        difference: {
          ar: "يستخدم تكلفة الأجور لا عدد الساعات، فيدخل أثر مستوى الأجور ومزيج الأدوار. مناسب للربحية، بينما SPLH أنسب للجدولة.",
          en: "Uses wage cost rather than hours, bringing in wage levels and role mix. Suited to profitability, while SPLH suits scheduling.",
        },
      },
      {
        label: { ar: "العملاء المخدومون لكل ساعة عمل", en: "Covers (or transactions) per labour hour" },
        formula: "Covers Served / Paid Labor Hours",
        difference: {
          ar: "يقيس حجم العمل لا قيمته، فلا يتأثر بتغيير الأسعار. مفيد لتخطيط الطاقم حين ترتفع الأسعار بسبب التضخم.",
          en: "Measures workload volume rather than value, so it is unaffected by price changes. Useful for crew planning when prices rise with inflation.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "SPLH المجمّع عبر الفروع أو فترات اليوم يساوي متوسط قيمها مرجحًا بالساعات، لا المتوسط البسيط.",
          en: "SPLH aggregated across branches or dayparts equals their values weighted by hours, not the simple average.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "استخدام الساعات المدفوعة من نظام الحضور مقامًا، واستبعاد الضرائب والإكراميات من المبيعات، ممارسة شائعة في قطاع المطاعم.",
          en: "Using paid hours from time and attendance as the denominator, and excluding taxes and tips from sales, is common restaurant practice.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "الأدوار المشمولة في الساعات، ومعاملة ساعات التدريب، والمستوى المستهدف لكل فترة يوم — قرارات داخلية لكل منشأة.",
          en: "Which roles count in hours, how training hours are treated, and the target level per daypart are internal decisions.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (24,000 على 600 ساعة) وتوزيعها على فترات اليوم توضيحية وليست معيارًا للقطاع.",
          en: "The example figures (24,000 over 600 hours) and their daypart split are illustrative, not an industry benchmark.",
        },
      },
    ],
    related: ["aov", "table-turnover-rate", "employee-turnover-rate"],
    exercise: {
      prompt: {
        ar: "الفرع A حقق 36,000 بـ 800 ساعة مدفوعة، والفرع B حقق 30,000 بـ 750 ساعة. احسب SPLH لكل فرع وللفرعين معًا، وقارنه بالمتوسط البسيط. ثم: إن خفض الفرع B 50 ساعة مع ثبات مبيعاته، فكم يصبح SPLH لديه؟",
        en: "Branch A made 36,000 on 800 paid hours and branch B made 30,000 on 750 hours. Compute SPLH for each and for both combined, and compare with the simple average. Then: if branch B cut 50 hours with sales unchanged, what would its SPLH be?",
      },
      hint: {
        ar: "المجمّع = مجموع المبيعات ÷ مجموع الساعات.",
        en: "Combined = total sales ÷ total hours.",
      },
      answer: {
        ar: "الفرع A = 36,000 ÷ 800 = 45.00. الفرع B = 30,000 ÷ 750 = 40.00. المجمّع = 66,000 ÷ 1,550 = 42.58، بينما المتوسط البسيط = 42.50 — الفرق صغير هنا لأن الساعات متقاربة، لكنه يكبر كلما اختلف حجم الفروع. بعد خفض 50 ساعة: 30,000 ÷ 700 = 42.86. قبل التنفيذ تحقق من أن الساعات المخفضة ليست في ذروة الطلب، وإلا فسيتحول التحسن إلى بطء في الخدمة وتراجع في المبيعات.",
        en: "Branch A = 36,000 ÷ 800 = 45.00. Branch B = 30,000 ÷ 750 = 40.00. Combined = 66,000 ÷ 1,550 = 42.58, while the simple average = 42.50 — the gap is small here because hours are similar, but it grows as branch sizes diverge. After cutting 50 hours: 30,000 ÷ 700 = 42.86. Before acting, check the cut hours are not in peak demand, or the gain turns into slow service and lost sales.",
      },
    },
    references: [
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "قسمة آمنة لفترات لم تُسجل فيها ساعات عمل.",
          en: "Safe division for periods with no recorded labour hours.",
        },
      },
      {
        title: "DATEADD function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/dateadd-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "يزيح سياق التاريخ سنة للخلف لمقارنة نفس الفترة من العام السابق.",
          en: "Shifts the date context back one year to compare with the same period last year.",
        },
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Table Turnover Rate                                              */
  /* ---------------------------------------------------------------- */
  {
    id: "table-turnover-rate",
    slug: "table-turnover-rate",
    name: "Table Turnover Rate",
    nameAr: "معدل دوران الطاولات",
    domains: ["fnb"],
    category: { ar: "الطاقة الاستيعابية", en: "Capacity utilization" },
    difficulty: "intermediate",
    unit: { ar: "دورة لكل طاولة في الفترة", en: "Turns per table per period" },
    aggregation: "ratio",
    definition: {
      ar: "عدد المرات التي تُشغل فيها الطاولة بمجموعة عملاء جديدة خلال فترة الخدمة: عدد الإشغالات المكتملة مقسومًا على عدد الطاولات المتاحة.",
      en: "How many times a table is occupied by a new party during a service period: completed table occupancies divided by available tables.",
    },
    whyItMatters: {
      ar: "في الصالة ذات المقاعد المحدودة، الطاولة هي الأصل الذي يولّد الإيراد. زيادة الدوران في الذروة تعني خدمة عملاء أكثر بنفس المساحة، والمؤشر يوضح سعة الصالة الفعلية وأين تضيع.",
      en: "In a dining room with limited seats, the table is the revenue-producing asset. More turns at peak means serving more guests in the same space, and the KPI shows real dining-room throughput and where capacity is lost.",
    },
    interpretation: {
      ar: "4 دورات في فترة الغداء تعني أن كل طاولة خدمت في المتوسط أربع مجموعات. الرقم يتأثر بمدة الجلوس وسرعة المطبخ وسرعة التنظيف بين العملاء، وكذلك بحجم الطلب: الدوران المنخفض في فترة هادئة مشكلة طلب لا مشكلة تشغيل.",
      en: "Four turns at lunch means each table served four parties on average. The number is driven by dwell time, kitchen speed, and table reset time, and by demand: low turns in a quiet period is a demand problem, not an operational one.",
    },
    formula: "Table Turnover = Completed Table Occupancies / Available Tables",
    numerator: {
      ar: "عدد الإشغالات المكتملة (مجموعة جلست ودفعت) خلال الفترة، من نظام الحجز أو نظام نقاط البيع. تُستبعد الحجوزات التي لم يحضر أصحابها والطلبات الخارجية والتوصيل.",
      en: "Completed occupancies (a party seated and paid) in the period, from the reservation or point-of-sale system. No-shows, takeaway, and delivery are excluded.",
    },
    denominator: {
      ar: "عدد الطاولات المتاحة للخدمة في الفترة نفسها، بعد استبعاد الطاولات المغلقة أو المحجوزة لفعاليات خاصة.",
      en: "Tables available for service in the same period, excluding closed tables or those reserved for private events.",
    },
    timeGrain: {
      ar: "حسب فترة الخدمة (غداء، عشاء) أو اليوم، ويجب تحديد الفترة صراحة: 4 دورات في اليوم تختلف عن 4 دورات في الأسبوع.",
      en: "Per service period (lunch, dinner) or per day, and the period must be explicit: 4 turns per day is not 4 turns per week.",
    },
    direction: {
      rising: {
        ar: "الارتفاع يعني استغلالًا أفضل للصالة ومبيعات أكثر من نفس المساحة، بشرط ألا يكون على حساب تجربة العميل أو قيمة الطلب.",
        en: "A rise means better use of the room and more sales from the same space, provided it is not at the expense of guest experience or order value.",
      },
      falling: {
        ar: "الانخفاض قد يعني طلبًا أقل، أو بطئًا في المطبخ أو الدفع، أو إطالة الجلسات. قارنه بمدة الجلوس ونسبة الإشغال لتحديد السبب.",
        en: "A fall may mean weaker demand, slow kitchen or payment, or longer stays. Compare with dwell time and occupancy to find the cause.",
      },
      caveat: {
        ar: "يعتمد على المفهوم: مطعم الوجبات السريعة يريد دورانًا عاليًا، ومطعم التذوق الفاخر يبيع التجربة الطويلة، فالدوران المنخفض لديه مقصود. والمؤشر مهم أساسًا للأكل داخل المطعم كما ينبه المرجع.",
        en: "It depends on the concept: a quick-service restaurant wants high turns, while a fine-dining tasting menu sells a long experience, so low turns are intended. The KPI is mainly relevant to dine-in, as the reference notes.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "الطاولات المتاحة", en: "Available tables" }, value: "30" },
        { label: { ar: "الإشغالات المكتملة - الغداء", en: "Completed occupancies - lunch" }, value: "66" },
        { label: { ar: "الإشغالات المكتملة - العشاء", en: "Completed occupancies - dinner" }, value: "54" },
      ],
      steps: [
        { label: { ar: "إجمالي الإشغالات", en: "Total occupancies" }, expression: "66 + 54 = 120" },
        { label: { ar: "دوران الطاولات للفترة", en: "Table turns for the period" }, expression: "120 ÷ 30 = 4" },
        { label: { ar: "دوران الغداء", en: "Lunch turns" }, expression: "66 ÷ 30 = 2.2" },
        { label: { ar: "دوران العشاء", en: "Dinner turns" }, expression: "54 ÷ 30 = 1.8" },
      ],
      result: { label: { ar: "معدل دوران الطاولات", en: "Table turnover rate" }, value: "4 turns" },
      reading: {
        ar: "كل طاولة خدمت أربع مجموعات في اليوم المحدد: 2.2 في الغداء و 1.8 في العشاء. العشاء أقل دورانًا، وهذا متوقع إن كانت الجلسات أطول وقيمة الطلب أعلى — لذلك يُقرأ الدوران دائمًا بجانب متوسط قيمة الطلب.",
        en: "Each table served four parties in the selected day: 2.2 at lunch and 1.8 at dinner. Dinner turns less, which is expected if stays are longer and checks larger — which is why turns are always read alongside average order value.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "دوران الطاولات للفترة ولكل يوم خدمة", en: "Table turns for the period and per service day" },
        code: `Completed Occupancies :=
CALCULATE (
    COUNTROWS ( 'TableOccupancy' ),
    'TableOccupancy'[Status] = "Completed"
)

Available Tables :=
CALCULATE (
    COUNTROWS ( 'DiningTable' ),
    'DiningTable'[IsActive] = TRUE ()
)

-- Turns over whatever period is selected (one service, one day, one week).
Table Turns :=
DIVIDE ( [Completed Occupancies], [Available Tables] )

-- Normalizes multi-day selections: occupancies / (tables x open days),
-- computed per branch so branches with different sizes weight correctly.
Turns per Service Day :=
VAR TableDays =
    SUMX (
        VALUES ( 'Branch'[BranchId] ),
        [Available Tables]
            * CALCULATE ( DISTINCTCOUNT ( 'TableOccupancy'[ServiceDate] ) )
    )
RETURN
    DIVIDE ( [Completed Occupancies], TableDays )`,
        assumptions: [
          {
            ar: "'TableOccupancy' بحبيبية إشغال واحد (مجموعة جلست على طاولة)، وحالته Completed أو NoShow أو Cancelled. الطاولات المدمجة لمجموعة كبيرة تُسجل إشغالًا واحدًا.",
            en: "'TableOccupancy' is at one occupancy (a party seated at a table), with Status Completed, NoShow, or Cancelled. Tables merged for a large party are recorded as one occupancy.",
          },
          {
            ar: "'DiningTable' بُعد مرتبط بـ 'Branch' بعلاقة متعدد-إلى-واحد، و 'TableOccupancy' مرتبط بـ 'DiningTable'. عدد الطاولات ثابت خلال الفترة المختارة؛ إن تغيّر فيحتاج جدول لقطة يومية للطاولات المتاحة.",
            en: "'DiningTable' relates many-to-one to 'Branch', and 'TableOccupancy' relates to 'DiningTable'. Table count is constant within the selected period; if it changes, a daily snapshot of available tables is needed.",
          },
          {
            ar: "'Date' لا يصفي 'DiningTable' لأنه بُعد لا حقيقة، لذلك يبقى المقام ثابتًا عند اختيار أي فترة.",
            en: "'Date' does not filter 'DiningTable' because it is a dimension, not a fact, so the denominator stays fixed for any selected period.",
          },
          {
            ar: "أيام الخدمة تُحسب من الأيام التي سُجل فيها إشغال واحد على الأقل، أي أن اليوم بلا أي إشغال يُعامل كيوم مغلق. إن كان المطعم مفتوحًا دون زبائن فاستخدم جدول تقويم تشغيل الفروع.",
            en: "Service days are the days with at least one occupancy, so a day with none is treated as closed. If the restaurant can be open with no guests, use a branch operating-calendar table.",
          },
          {
            ar: "تصفية فترة اليوم (Daypart) تتم على 'TableOccupancy' عبر وقت الجلوس، فتبقى الطاولات المتاحة كما هي — وهذا صحيح لأن كل طاولة متاحة في كل فترة.",
            en: "Daypart filtering applies to 'TableOccupancy' via seating time, leaving available tables unchanged — which is correct because each table is available in each daypart.",
          },
        ],
        requires: ["TableOccupancy[Status]", "TableOccupancy[ServiceDate]", "DiningTable[IsActive]", "Branch[BranchId]"],
      },
    ],
    model: [
      {
        table: "TableOccupancy",
        grain: { ar: "إشغال واحد لطاولة من مجموعة عملاء", en: "One occupancy of a table by a party" },
        columns: ["OccupancyId", "TableId", "BranchId", "ServiceDate", "SeatedTime", "ClosedTime", "PartySize", "CheckId", "Status"],
        role: { ar: "مصدر البسط، ومصدر مدة الجلوس", en: "Source of the numerator and of dwell time" },
      },
      {
        table: "DiningTable",
        grain: { ar: "طاولة واحدة لكل صف", en: "One row per table" },
        columns: ["TableId", "BranchId", "Section", "Seats", "IsActive"],
        role: { ar: "مصدر المقام (الطاولات المتاحة)", en: "Source of the denominator (available tables)" },
      },
      {
        table: "Branch",
        grain: { ar: "فرع واحد لكل صف", en: "One row per branch" },
        columns: ["BranchId", "BranchName", "Concept", "City"],
        role: { ar: "يربط الطاولات والإشغالات ويتيح المقارنة بين الفروع", en: "Links tables and occupancies and enables branch comparison" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "Weekday", "WeekKey", "MonthKey"],
        role: { ar: "مرتبط بتاريخ الخدمة في الإشغالات فقط", en: "Related to service date on occupancies only" },
      },
    ],
    visuals: [
      {
        pattern: "heatmap-calendar",
        why: {
          ar: "فترة اليوم مقابل يوم الأسبوع هي بالضبط المحاور التي يقترحها المرجع، والخريطة الحرارية تُظهر الخانات المزدحمة والفارغة فورًا.",
          en: "Daypart against weekday are exactly the axes the reference suggests, and a heatmap shows busy and empty slots at a glance.",
        },
      },
      {
        pattern: "variance-bar",
        why: {
          ar: "مقارنة الفروع مقابل الهدف أو متوسط المفهوم نفسه تكشف الفرع الذي يفقد سعته.",
          en: "Comparing branches against target or the concept average reveals which branch is losing capacity.",
        },
      },
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "عرض الدوران مع متوسط مدة الجلوس ومتوسط قيمة الطلب معًا يمنع مطاردة الدوران على حساب الإيراد.",
          en: "Showing turns with average dwell time and average order value together prevents chasing turns at the expense of revenue.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عدم تحديد الفترة: 4 دورات قد تعني يومًا أو أسبوعًا أو وجبة واحدة. اذكر الفترة في عنوان البطاقة دائمًا، كما ينبه المرجع.",
        en: "Not defining the period: 4 turns may mean a day, a week, or one service. Always state the period in the card title, as the reference warns.",
      },
      {
        ar: "عدم توحيد حدث الإشغال: نظام يحسب كل فاتورة، وآخر يحسب كل جلوس، وثالث يحسب الطاولات المدمجة كإشغالين. عرّف الحدث وطبقه على كل الفروع.",
        en: "Inconsistent occupancy events: one system counts each check, another each seating, a third counts merged tables as two. Define the event and apply it across all branches.",
      },
      {
        ar: "إدخال الطلبات الخارجية والتوصيل في البسط، فيرتفع الدوران دون أي استخدام للطاولات.",
        en: "Including takeaway and delivery orders in the numerator, inflating turns with no table usage.",
      },
      {
        ar: "جمع الطاولات عبر الأيام في المقام عند اختيار أسبوع، فيصبح الناتج دورانًا يوميًا دون قصد. قرر إن كنت تعرض دوران الفترة أو متوسط الدوران اليومي وسمِّ المقياس بوضوح.",
        en: "Summing tables across days in the denominator when a week is selected, silently turning the result into a daily rate. Decide whether you show period turns or average daily turns, and name the measure clearly.",
      },
      {
        ar: "مقارنة فروع بمفاهيم مختلفة (وجبات سريعة مقابل مطعم فاخر) أو بأحجام طاولات مختلفة. طاولة لشخصين تدور أسرع من طاولة لثمانية.",
        en: "Comparing branches with different concepts (quick-service against fine dining) or table sizes. A two-top turns faster than an eight-top.",
      },
    ],
    variants: [
      {
        label: { ar: "دوران المقاعد", en: "Seat turnover" },
        formula: "Covers Served / Available Seats",
        difference: {
          ar: "يقيس بعدد الأشخاص لا المجموعات، فيكشف الطاولات الكبيرة التي تشغلها مجموعات صغيرة — وهو ما يخفيه دوران الطاولات.",
          en: "Counts guests rather than parties, revealing large tables occupied by small parties — something table turns hide.",
        },
      },
      {
        label: { ar: "الإيراد لكل مقعد متاح في الساعة", en: "Revenue per available seat hour (RevPASH)" },
        formula: "Dine-in Revenue / (Available Seats x Open Hours)",
        difference: {
          ar: "يجمع الدوران وقيمة الطلب في رقم واحد، فيحسم التوازن بين جلسات أسرع وطلبات أكبر.",
          en: "Combines turns and order value into one number, settling the trade-off between faster stays and larger checks.",
        },
      },
      {
        label: { ar: "متوسط الدوران اليومي", en: "Average daily turns" },
        formula: "Completed Occupancies / (Available Tables x Service Days)",
        difference: {
          ar: "يوحّد الفترات المختلفة الطول، فيمكن مقارنة أسبوع بشهر أو فرع يعمل ستة أيام بفرع يعمل سبعة.",
          en: "Normalizes periods of different length, so a week can be compared with a month, or a six-day branch with a seven-day one.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "مع ثبات عدد الطاولات، دوران اليوم يساوي مجموع دوران فتراته (2.2 + 1.8 = 4)، لأن المقام مشترك.",
          en: "With a fixed table count, daily turns equal the sum of daypart turns (2.2 + 1.8 = 4), because the denominator is shared.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "قياس الدوران لكل فترة خدمة وقراءته بجانب مدة الجلوس وقيمة الطلب ممارسة شائعة في إدارة صالات المطاعم.",
          en: "Measuring turns per service period and reading them alongside dwell time and order value is common dining-room management practice.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "تعريف الإشغال المكتمل، ومعاملة الطاولات المدمجة والفعاليات الخاصة، والهدف لكل مفهوم — قرارات داخلية.",
          en: "The definition of a completed occupancy, treatment of merged tables and private events, and the target per concept are internal decisions.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (120 إشغالًا على 30 طاولة) وتوزيعها بين الغداء والعشاء توضيحية وليست معيارًا للقطاع.",
          en: "The example figures (120 occupancies on 30 tables) and the lunch/dinner split are illustrative, not an industry benchmark.",
        },
      },
    ],
    related: ["aov", "sales-per-labor-hour", "csat"],
    exercise: {
      prompt: {
        ar: "مطعم فيه 40 طاولة، عمل 7 أيام في الأسبوع. سُجل 280 إشغالًا مكتملًا في الغداء و 340 في العشاء، إضافة إلى 15 حجزًا لم يحضر أصحابها. احسب دوران الأسبوع، ومتوسط الدوران اليومي، ومتوسط الدوران اليومي لكل من الغداء والعشاء.",
        en: "A restaurant with 40 tables opened 7 days in the week. It recorded 280 completed occupancies at lunch and 340 at dinner, plus 15 no-show reservations. Compute weekly turns, average daily turns, and average daily turns for lunch and dinner.",
      },
      hint: {
        ar: "الحجوزات التي لم يحضر أصحابها ليست إشغالًا مكتملًا. متوسط الدوران اليومي = الإشغالات ÷ (الطاولات × الأيام).",
        en: "No-shows are not completed occupancies. Average daily turns = occupancies ÷ (tables x days).",
      },
      answer: {
        ar: "الإشغالات المكتملة = 280 + 340 = 620 (تُستبعد 15 حالة عدم حضور). دوران الأسبوع = 620 ÷ 40 = 15.5. متوسط الدوران اليومي = 620 ÷ (40 × 7) = 620 ÷ 280 = 2.21. الغداء = 280 ÷ 280 = 1.00 يوميًا، والعشاء = 340 ÷ 280 = 1.21 يوميًا. الغداء لا يستغل الطاولة إلا مرة واحدة في المتوسط، فهو الفرصة الأوضح للنمو إن كان الطلب موجودًا.",
        en: "Completed occupancies = 280 + 340 = 620 (15 no-shows excluded). Weekly turns = 620 ÷ 40 = 15.5. Average daily turns = 620 ÷ (40 x 7) = 620 ÷ 280 = 2.21. Lunch = 280 ÷ 280 = 1.00 per day, dinner = 340 ÷ 280 = 1.21 per day. Lunch uses each table only once on average, making it the clearest growth opportunity if demand exists.",
      },
    },
    references: [
      {
        title: "COUNTROWS function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/countrows-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "يعد الإشغالات المكتملة والطاولات المتاحة.",
          en: "Counts completed occupancies and available tables.",
        },
      },
      {
        title: "SUMX function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/sumx-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "يحسب أيام-الطاولات لكل فرع على حدة ثم يجمعها، حتى تُرجّح الفروع بحجمها.",
          en: "Computes table-days per branch and then sums them, so branches weight by their size.",
        },
      },
    ],
  },
];
