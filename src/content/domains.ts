import type { Domain } from "./types";

/**
 * The 12 starter business domains.
 *
 * Adding a 13th domain requires nothing beyond appending an object here: the
 * explorer, homepage grid, search index, and domain route are all driven by
 * this array. Accent hues are spaced ~30 degrees apart so the set reads as one
 * coordinated system rather than twelve unrelated colours.
 */
export const domains: Domain[] = [
  {
    id: "supply-chain",
    slug: "supply-chain",
    name: { ar: "سلاسل الإمداد والخدمات اللوجستية", en: "Supply Chain & Logistics" },
    tagline: {
      ar: "من أمر الشراء حتى تسليم العميل: مخزون، موردون، وشحن.",
      en: "From purchase order to customer delivery: inventory, suppliers, and freight.",
    },
    intro: {
      ar: "سلسلة الإمداد هي الرحلة الكاملة للمنتج من المورّد إلى العميل. مهمة تقارير الـ BI هنا أن توازن بين ثلاثة أهداف متعارضة: توفّر المنتج، وتكلفة المخزون، وسرعة التسليم. أي تحسين في واحد منها غالبًا يأتي على حساب الآخر، ولهذا نادرًا ما يُقرأ مؤشر واحد بمعزل عن بقية المؤشرات.",
      en: "A supply chain is the full journey of a product from supplier to customer. BI reporting here balances three competing goals: availability, inventory cost, and delivery speed. Improving one usually costs you another, so a single metric is rarely read in isolation.",
    },
    overview: {
      ar: "تعمل المؤسسة عادة بدورة متكررة: تتوقع الطلب، تشتري أو تصنّع، تخزّن، ثم تشحن. كل خطوة تولّد بيانات في نظام مختلف (ERP للشراء، WMS للمستودع، TMS للنقل)، وأصعب جزء في مشروع BI هنا هو توحيد هذه الأنظمة على مستوى تفصيل واحد — عادة سطر أمر الشراء أو سطر الشحنة. انتبه أن «الكمية» في المستودع قد تكون بوحدة مختلفة عن «الكمية» في المبيعات.",
      en: "Organizations run a repeating cycle: forecast demand, buy or make, store, then ship. Each step lives in a different system (ERP for purchasing, WMS for the warehouse, TMS for transport). The hardest part of a supply chain BI project is reconciling those systems onto one grain — usually the purchase order line or shipment line. Watch out: quantity in the warehouse may use a different unit of measure than quantity in sales.",
    },
    accent: "#3FD3A8",
    accentAlt: "#1F9E80",
    icon: "Truck",
    difficulty: "intermediate",
    estMinutes: 35,
    tags: [
      { ar: "مخزون", en: "Inventory" },
      { ar: "موردون", en: "Suppliers" },
      { ar: "نقل وشحن", en: "Freight" },
    ],
    processes: [
      {
        name: { ar: "تخطيط الطلب", en: "Demand Planning" },
        description: {
          ar: "توقّع الكميات المطلوبة لكل صنف وموقع خلال فترة قادمة، وهو المدخل الأساسي لقرارات الشراء.",
          en: "Forecasting required quantities per item and location for an upcoming period; the main input to purchasing decisions.",
        },
        kpis: ["forecast-accuracy", "stockout-rate"],
      },
      {
        name: { ar: "الشراء والتوريد", en: "Procurement" },
        description: {
          ar: "إصدار أوامر الشراء ومتابعة التزام الموردين بالكمية والموعد والسعر المتفق عليه.",
          en: "Raising purchase orders and tracking supplier compliance on quantity, date, and agreed price.",
        },
        kpis: ["otif", "supplier-lead-time"],
      },
      {
        name: { ar: "إدارة المستودعات", en: "Warehouse Operations" },
        description: {
          ar: "الاستلام والتخزين والتجهيز والشحن، مع متابعة دقة المخزون وعمره.",
          en: "Receiving, put-away, picking, and shipping, alongside inventory accuracy and ageing.",
        },
        kpis: ["inventory-turnover", "days-of-supply"],
      },
      {
        name: { ar: "التوزيع والنقل", en: "Distribution & Transport" },
        description: {
          ar: "تخطيط الرحلات واختيار الناقلين ومتابعة تكلفة الشحن لكل وحدة مباعة.",
          en: "Route planning, carrier selection, and tracking freight cost per unit shipped.",
        },
        kpis: ["otif"],
      },
    ],
    stakeholders: [
      {
        role: { ar: "مدير سلسلة الإمداد", en: "Supply Chain Director" },
        cares: {
          ar: "التوازن بين مستوى الخدمة ورأس المال المحتجز في المخزون.",
            en: "The trade-off between service level and capital tied up in inventory.",
        },
      },
      {
        role: { ar: "مدير المشتريات", en: "Procurement Manager" },
        cares: {
          ar: "أداء الموردين، ومدة التوريد، والانحراف عن السعر المتعاقد عليه.",
          en: "Supplier performance, lead times, and deviation from contracted price.",
        },
      },
      {
        role: { ar: "مدير المستودع", en: "Warehouse Manager" },
        cares: {
          ar: "دقة الجرد، وإنتاجية التجهيز، والمساحة المشغولة.",
          en: "Stock accuracy, picking productivity, and occupied space.",
        },
      },
      {
        role: { ar: "المدير المالي", en: "CFO" },
        cares: {
          ar: "قيمة المخزون في الميزانية ومخصص المخزون الراكد أو المتقادم.",
          en: "Inventory value on the balance sheet and the provision for slow-moving or obsolete stock.",
        },
      },
    ],
    sourceSystems: [
      {
        name: "SAP / Oracle ERP",
        kind: { ar: "نظام تخطيط موارد المؤسسة", en: "Enterprise resource planning" },
        entities: ["PurchaseOrder", "PurchaseOrderLine", "GoodsReceipt", "Material", "Vendor"],
      },
      {
        name: "WMS",
        kind: { ar: "نظام إدارة المستودعات", en: "Warehouse management system" },
        entities: ["StockOnHand", "Movement", "Location", "PickTask", "Lot"],
      },
      {
        name: "TMS",
        kind: { ar: "نظام إدارة النقل", en: "Transport management system" },
        entities: ["Shipment", "ShipmentLine", "Carrier", "FreightCost", "DeliveryEvent"],
      },
    ],
    glossary: [
      {
        term: "SKU",
        ar: "وحدة حفظ المخزون",
        definition: {
          ar: "أصغر وحدة يمكن تمييزها في المخزون: صنف بلون ومقاس وتعبئة محددة. هي عادة الحبيبية الأدق في تقارير المخزون.",
          en: "The smallest distinguishable inventory unit: an item with a specific colour, size, and pack. Usually the finest grain in inventory reporting.",
        },
      },
      {
        term: "Lead Time",
        ar: "مدة التوريد",
        definition: {
          ar: "الزمن بين إصدار أمر الشراء واستلام البضاعة فعليًا في المستودع. تُقاس بالأيام وتختلف جوهريًا بين مورد محلي ومستورد.",
          en: "Elapsed time between raising a purchase order and physically receiving goods. Measured in days and differs sharply between local and imported supply.",
        },
      },
      {
        term: "Safety Stock",
        ar: "مخزون الأمان",
        definition: {
          ar: "كمية إضافية تُحتفظ بها لامتصاص تقلبات الطلب أو تأخر التوريد. ليست هدرًا بل تأمينًا محسوبًا.",
          en: "Extra quantity held to absorb demand variability or supply delay. Not waste, but calculated insurance.",
        },
      },
      {
        term: "COGS",
        ar: "تكلفة البضاعة المباعة",
        definition: {
          ar: "التكلفة المباشرة للبضاعة التي بيعت خلال الفترة. تُستخدم في بسط معادلة دوران المخزون لأنها بالتكلفة لا بسعر البيع.",
          en: "Direct cost of goods sold in the period. Used in the numerator of inventory turnover because it is stated at cost, not at selling price.",
        },
      },
      {
        term: "Backorder",
        ar: "طلب مؤجل",
        definition: {
          ar: "طلب عميل مقبول لكن لا يمكن تلبيته حاليًا لعدم توفر المخزون، ويظل مفتوحًا حتى التوريد.",
          en: "An accepted customer order that cannot be fulfilled now due to lack of stock, and stays open until supply arrives.",
        },
      },
      {
        term: "Cycle Count",
        ar: "الجرد الدوري",
        definition: {
          ar: "جرد جزئي متكرر لعينة من الأصناف بدلًا من جرد سنوي شامل، ويُستخدم لقياس دقة المخزون.",
          en: "Recurring partial counts of a sample of items instead of one full annual count; used to measure stock accuracy.",
        },
      },
    ],
    questions: [
      { ar: "ما الأصناف التي تستهلك رأس مال كبير وتتحرك ببطء؟", en: "Which items consume a lot of capital and move slowly?" },
      { ar: "أي الموردين يتسبب في أغلب حالات التأخير؟", en: "Which suppliers cause most of our delays?" },
      { ar: "كم يومًا من المبيعات يغطيه مخزوني الحالي؟", en: "How many days of sales does my current stock cover?" },
      { ar: "ما نسبة الطلبات التي وصلت كاملة وفي موعدها؟", en: "What share of orders arrived complete and on time?" },
      { ar: "أين تتركز تكلفة الشحن مقارنة بقيمة البضاعة المشحونة؟", en: "Where is freight cost concentrated relative to shipped value?" },
    ],
    dashboardPages: [
      {
        name: { ar: "نظرة عامة تنفيذية", en: "Executive Overview" },
        audience: { ar: "الإدارة العليا", en: "Senior leadership" },
        contents: {
          ar: "بطاقات لمستوى الخدمة وقيمة المخزون ودوران المخزون، مع اتجاه 13 أسبوعًا ومقارنة بالفترة السابقة.",
          en: "KPI cards for service level, inventory value, and turnover, with a 13-week trend and prior-period comparison.",
        },
      },
      {
        name: { ar: "صحة المخزون", en: "Inventory Health" },
        audience: { ar: "مخطط الطلب ومدير المستودع", en: "Demand planner and warehouse manager" },
        contents: {
          ar: "مصفوفة أعمار المخزون حسب الفئة، وتحليل ABC، وقائمة الأصناف الراكدة القابلة للتنقيب.",
          en: "Inventory ageing matrix by category, ABC analysis, and a drillable slow-mover list.",
        },
      },
      {
        name: { ar: "أداء الموردين", en: "Supplier Performance" },
        audience: { ar: "فريق المشتريات", en: "Procurement team" },
        contents: {
          ar: "مصفوفة OTIF لكل مورد، وتوزيع مدة التوريد، وسبب كل حالة عدم التزام.",
          en: "OTIF matrix per supplier, lead-time distribution, and the reason behind each failure.",
        },
      },
    ],
    topKpis: ["otif", "inventory-turnover", "stockout-rate", "supplier-on-time-delivery", "order-cycle-time", "freight-cost-per-unit"],
    patterns: ["inventory-aging-matrix", "kpi-card", "variance-bar", "actual-vs-target", "exception-table"],
    scenarios: [
      {
        title: { ar: "المخزون مرتفع والمبيعات ثابتة", en: "Inventory is up while sales are flat" },
        situation: {
          ar: "طلبت الإدارة تقريرًا لأن قيمة المخزون ارتفعت 22% خلال ربع واحد دون نمو مقابل في المبيعات.",
          en: "Leadership asked for a report because inventory value rose 22% in one quarter with no matching sales growth.",
        },
        ask: {
          ar: "ما الأصناف والمواقع المسؤولة عن الزيادة، وهل السبب شراء زائد أم تباطؤ في الطلب؟",
          en: "Which items and locations drove the increase, and is the cause over-buying or slowing demand?",
        },
        approach: {
          ar: "ابدأ بتحليل مساهمة: افرق بين تغيّر الكمية وتغيّر تكلفة الوحدة. ثم قارن الاستلامات بالمصروفات لكل صنف. غالبًا ستجد أن أقل من 10% من الأصناف مسؤولة عن أغلب الزيادة، وهنا تفيد مصفوفة أعمار المخزون أكثر من الرسوم الزمنية.",
          en: "Start with a contribution analysis: separate quantity change from unit-cost change. Then compare receipts against issues per item. Typically fewer than 10% of items drive most of the increase, and an ageing matrix helps more than a time series here.",
        },
      },
      {
        title: { ar: "عميل رئيسي يشتكي من التأخير", en: "A key customer complains about delays" },
        situation: {
          ar: "عميل يمثل 18% من الإيراد يقول إن الطلبات تصل ناقصة، بينما تقرير التسليم الداخلي يُظهر 94% التزامًا.",
          en: "A customer worth 18% of revenue says orders arrive incomplete, while the internal delivery report shows 94% compliance.",
        },
        ask: {
          ar: "لماذا تختلف قراءة العميل عن قراءتنا؟",
          en: "Why does the customer read this differently than we do?",
        },
        approach: {
          ar: "الفجوة عادة في التعريف: تقريرك يقيس الالتزام على مستوى الشحنة، والعميل يقيسه على مستوى سطر الطلب. طلب واحد ناقص صنفًا من عشرة يُحتسب 90% عندك و0% عنده. وضّح الحبيبية صراحة في التقرير وأضف قياسًا بالطريقتين.",
          en: "The gap is usually definitional: your report measures compliance per shipment while the customer measures it per order line. One order missing one of ten items scores 90% for you and 0% for them. State the grain explicitly and report both measures.",
        },
      },
    ],
    relatedDomains: ["manufacturing", "retail", "finance"],
  },

  {
    id: "finance",
    slug: "finance",
    name: { ar: "المالية والمحاسبة", en: "Finance & Accounting" },
    tagline: {
      ar: "الربحية والسيولة والانحراف عن الموازنة، بلغة يفهمها المدير المالي.",
      en: "Profitability, liquidity, and budget variance, in language a CFO accepts.",
    },
    intro: {
      ar: "التقارير المالية هي المجال الذي تكون فيه الدقة غير قابلة للتفاوض، لأن الأرقام تُقارن مباشرة بالقوائم المالية المدققة. تحدي الـ BI هنا ليس الحساب بل الالتزام بالتعريفات المحاسبية: ما الذي يدخل في الإيراد؟ متى يُعترف به؟ وكيف تتعامل مع الأرصدة التي لا تُجمع عبر الزمن؟",
      en: "Finance is where accuracy is non-negotiable, because your numbers get compared directly to audited statements. The BI challenge is not arithmetic but respecting accounting definitions: what counts as revenue, when it is recognised, and how to handle balances that do not sum across time.",
    },
    overview: {
      ar: "أغلب نماذج البيانات المالية تُبنى حول جدول القيود (General Ledger) بحبيبية القيد الواحد، مع شجرة حسابات هرمية وجدول تاريخ كامل. أهم قرار تصميمي هو التعامل مع الأرصدة شبه التجميعية: رصيد الصندوق في نهاية الشهر ليس مجموع أرصدة الأيام، ولذلك تحتاج دوال مثل LASTDATE أو CLOSINGBALANCEMONTH بدل SUM المباشر.",
      en: "Most finance models are built around the general ledger at journal-entry grain, with a hierarchical chart of accounts and a complete date table. The key design decision is handling semi-additive balances: a month-end cash balance is not the sum of daily balances, so you need LASTDATE or CLOSINGBALANCEMONTH rather than a plain SUM.",
    },
    accent: "#7B7BF7",
    accentAlt: "#4F4FD9",
    icon: "Landmark",
    difficulty: "advanced",
    estMinutes: 45,
    tags: [
      { ar: "ربحية", en: "Profitability" },
      { ar: "موازنات", en: "Budgeting" },
      { ar: "سيولة", en: "Liquidity" },
    ],
    processes: [
      {
        name: { ar: "الإقفال الشهري", en: "Month-End Close" },
        description: {
          ar: "ترحيل القيود وتسوية الحسابات وإصدار القوائم خلال أيام محددة بعد نهاية الشهر.",
          en: "Posting journals, reconciling accounts, and issuing statements within a set number of days after month end.",
        },
        kpis: ["gross-profit-margin"],
      },
      {
        name: { ar: "التخطيط والموازنة", en: "Planning & Budgeting" },
        description: {
          ar: "وضع الموازنة السنوية وتحديثها بتنبؤات دورية، ثم قياس الانحراف الفعلي عنها.",
          en: "Setting an annual budget, refreshing it with periodic forecasts, then measuring actual variance against it.",
        },
      },
      {
        name: { ar: "دورة التحصيل", en: "Order to Cash" },
        description: {
          ar: "من إصدار الفاتورة حتى تحصيل النقد، ومتابعة أعمار الذمم المدينة.",
          en: "From invoice issue to cash collection, tracking accounts receivable ageing.",
        },
      },
      {
        name: { ar: "محاسبة التكاليف", en: "Cost Accounting" },
        description: {
          ar: "توزيع التكاليف المباشرة وغير المباشرة على المنتجات ومراكز التكلفة.",
          en: "Allocating direct and indirect costs to products and cost centres.",
        },
        kpis: ["gross-profit-margin"],
      },
    ],
    stakeholders: [
      {
        role: { ar: "المدير المالي", en: "CFO" },
        cares: { ar: "هامش الربح، والتدفق النقدي، والانحراف عن الخطة.", en: "Margin, cash flow, and variance to plan." },
      },
      {
        role: { ar: "المراقب المالي", en: "Financial Controller" },
        cares: { ar: "دقة الأرصدة ومطابقتها للقوائم المدققة.", en: "Balance accuracy and reconciliation to audited statements." },
      },
      {
        role: { ar: "محلل FP&A", en: "FP&A Analyst" },
        cares: { ar: "تفسير الانحرافات وبناء السيناريوهات.", en: "Explaining variances and building scenarios." },
      },
    ],
    sourceSystems: [
      {
        name: "ERP General Ledger",
        kind: { ar: "دفتر الأستاذ العام", en: "General ledger" },
        entities: ["JournalEntry", "JournalLine", "Account", "CostCenter", "FiscalPeriod"],
      },
      {
        name: "AR / AP Subledger",
        kind: { ar: "أستاذ مساعد للذمم", en: "Receivables and payables subledger" },
        entities: ["Invoice", "Payment", "Customer", "Vendor", "AgingBucket"],
      },
      {
        name: "Planning Tool",
        kind: { ar: "أداة تخطيط وموازنة", en: "Planning and budgeting tool" },
        entities: ["BudgetVersion", "BudgetLine", "Forecast", "Scenario"],
      },
    ],
    glossary: [
      {
        term: "Revenue vs Bookings",
        ar: "الإيراد مقابل التعاقدات",
        definition: {
          ar: "التعاقدات هي قيمة ما تم توقيعه، والإيراد هو ما تم الاعتراف به محاسبيًا بعد تقديم الخدمة. الخلط بينهما من أشهر أخطاء تقارير المبيعات.",
          en: "Bookings are the value signed; revenue is what is recognised after delivering the service. Confusing the two is one of the most common sales-reporting errors.",
        },
      },
      {
        term: "Accrual",
        ar: "الاستحقاق",
        definition: {
          ar: "مبدأ تسجيل الإيراد والمصروف عند حدوثه لا عند تحرك النقد، وهو ما يجعل الربح مختلفًا عن التدفق النقدي.",
          en: "Recording revenue and expense when they occur rather than when cash moves, which is why profit differs from cash flow.",
        },
      },
      {
        term: "EBITDA",
        ar: "الأرباح قبل الفوائد والضرائب والإهلاك والاستهلاك",
        definition: {
          ar: "مقياس شائع للأداء التشغيلي يستبعد بنودًا غير تشغيلية. ليس مقياسًا معياريًا في المعايير المحاسبية، وتعريفه يختلف بين الشركات.",
          en: "A common operating-performance measure that excludes non-operating items. It is not defined by accounting standards, and its definition varies between companies.",
        },
      },
      {
        term: "DSO",
        ar: "متوسط فترة التحصيل",
        definition: {
          ar: "عدد الأيام التي يستغرقها تحويل المبيعات الآجلة إلى نقد. يرتفع عندما يتأخر العملاء في السداد.",
          en: "The number of days it takes to convert credit sales into cash. It rises when customers pay late.",
        },
      },
      {
        term: "Cost Center",
        ar: "مركز التكلفة",
        definition: {
          ar: "وحدة تنظيمية تُجمع عليها المصروفات لأغراض المساءلة، وليست بالضرورة وحدة مدرة للإيراد.",
          en: "An organizational unit that costs are collected against for accountability; not necessarily revenue-generating.",
        },
      },
    ],
    questions: [
      { ar: "أين تآكل الهامش هذا الربع ولماذا؟", en: "Where did margin erode this quarter and why?" },
      { ar: "ما حجم الانحراف عن الموازنة لكل مركز تكلفة؟", en: "What is the budget variance per cost centre?" },
      { ar: "كم من إيرادنا محتجز في ذمم متأخرة أكثر من 90 يومًا؟", en: "How much revenue is locked in receivables over 90 days?" },
      { ar: "ما المنتجات التي تبدو مربحة قبل توزيع التكاليف غير المباشرة فقط؟", en: "Which products look profitable only before indirect cost allocation?" },
      { ar: "كيف يتغير رصيد النقد المتوقع خلال الأشهر الستة القادمة؟", en: "How does projected cash change over the next six months?" },
    ],
    dashboardPages: [
      {
        name: { ar: "قائمة الدخل التفاعلية", en: "Interactive P&L" },
        audience: { ar: "المدير المالي والمراقب", en: "CFO and controller" },
        contents: {
          ar: "مصفوفة هرمية بشجرة الحسابات، بأعمدة الفعلي والموازنة والانحراف ونسبته، مع تنسيق شرطي للانحرافات السالبة.",
          en: "A hierarchical matrix over the chart of accounts with actual, budget, variance, and variance % columns, conditionally formatted for adverse variances.",
        },
      },
      {
        name: { ar: "تحليل الهامش", en: "Margin Analysis" },
        audience: { ar: "محلل FP&A", en: "FP&A analyst" },
        contents: {
          ar: "رسم شلالي يفسر الفرق في الربح بين فترتين، مع تفكيك حسب المنتج والقناة.",
          en: "A waterfall explaining profit movement between two periods, decomposed by product and channel.",
        },
      },
      {
        name: { ar: "أعمار الذمم", en: "Receivables Ageing" },
        audience: { ar: "فريق التحصيل", en: "Collections team" },
        contents: {
          ar: "مصفوفة أعمار بفترات 30/60/90 يومًا لكل عميل، مع إمكانية التنقيب إلى الفواتير.",
          en: "A 30/60/90 ageing matrix per customer with drill-through to invoices.",
        },
      },
    ],
    topKpis: ["revenue-growth-rate", "gross-profit-margin", "opex-variance", "current-ratio", "dso", "operating-cash-flow"],
    patterns: ["waterfall-variance", "pl-matrix", "kpi-card", "actual-vs-target", "period-over-period"],
    scenarios: [
      {
        title: { ar: "الهامش الإجمالي انخفض نقطتين", en: "Gross margin dropped two points" },
        situation: {
          ar: "انخفض الهامش الإجمالي من 34% إلى 32% وطلب المدير المالي تفسيرًا قبل اجتماع مجلس الإدارة.",
          en: "Gross margin fell from 34% to 32% and the CFO wants an explanation before the board meeting.",
        },
        ask: { ar: "ما الذي سبب الانخفاض بالضبط؟", en: "What exactly caused the drop?" },
        approach: {
          ar: "فكّك التغيّر إلى ثلاثة عوامل: أثر السعر، وأثر التكلفة، وأثر مزيج المنتجات. الرسم الشلالي هو الأداة المناسبة. كثيرًا ما يكون السبب مزيجًا: نمو منتج منخفض الهامش يسحب المتوسط للأسفل حتى لو لم يتغير هامش أي منتج على حدة.",
          en: "Decompose the change into three effects: price, cost, and product mix. A waterfall is the right tool. Often the cause is mix: growth in a low-margin product pulls the average down even when no individual product margin changed.",
        },
      },
    ],
    relatedDomains: ["banking", "retail", "project-management"],
  },

  {
    id: "marketing",
    slug: "marketing",
    name: { ar: "التسويق والنمو", en: "Marketing & Growth" },
    tagline: {
      ar: "من الإنفاق الإعلاني إلى العميل المكتسب، وقياس ما يستحق الاستمرار.",
      en: "From ad spend to acquired customer, and knowing what deserves more budget.",
    },
    intro: {
      ar: "تقارير التسويق تُسأل دائمًا سؤالًا واحدًا: هل الإنفاق يستحق؟ الصعوبة أن الإجابة تعتمد على نموذج الإسناد (Attribution) الذي تختاره، وعلى الفترة التي تقيس خلالها. حملة تبدو خاسرة في 7 أيام قد تكون رابحة في 90 يومًا.",
      en: "Marketing reporting always answers one question: is the spend worth it? The difficulty is that the answer depends on the attribution model you pick and the window you measure over. A campaign that looks unprofitable at 7 days may be profitable at 90.",
    },
    overview: {
      ar: "البيانات تأتي من منصات إعلانية متعددة بحبيبية مختلفة (حملة، مجموعة إعلانية، إعلان) ومن أنظمة التحليلات ومن الـ CRM. أكبر خطأ شائع هو جمع أرقام التحويلات من منصات مختلفة مباشرة؛ كل منصة تنسب التحويل لنفسها، فيصبح المجموع أكبر من الواقع. احسم مصدرًا واحدًا للحقيقة للتحويلات، واستخدم أرقام المنصات للتكلفة فقط.",
      en: "Data arrives from several ad platforms at different grains (campaign, ad set, ad), from analytics tools, and from the CRM. The most common error is adding conversions across platforms: each one claims the conversion for itself, so the total exceeds reality. Pick a single source of truth for conversions and use platform numbers for cost only.",
    },
    accent: "#F573A9",
    accentAlt: "#D1417F",
    icon: "Megaphone",
    difficulty: "intermediate",
    estMinutes: 30,
    tags: [
      { ar: "اكتساب", en: "Acquisition" },
      { ar: "قمع التحويل", en: "Funnel" },
      { ar: "عائد الإنفاق", en: "Return on spend" },
    ],
    processes: [
      {
        name: { ar: "توليد الطلب", en: "Demand Generation" },
        description: {
          ar: "الحملات المدفوعة والمحتوى التي تجلب زوارًا وعملاء محتملين جددًا.",
          en: "Paid campaigns and content that bring in new visitors and leads.",
        },
        kpis: ["cac", "roas"],
      },
      {
        name: { ar: "رعاية العملاء المحتملين", en: "Lead Nurturing" },
        description: {
          ar: "تحويل المهتم إلى مؤهل عبر سلسلة تفاعلات، وقياس معدل الانتقال بين المراحل.",
          en: "Moving an interested contact to a qualified one through a sequence of touches, measuring stage-to-stage conversion.",
        },
      },
      {
        name: { ar: "الاحتفاظ وإعادة الاستهداف", en: "Retention & Retargeting" },
        description: {
          ar: "إعادة تفعيل العملاء الحاليين وزيادة قيمتهم عبر الزمن.",
          en: "Re-activating existing customers and growing their value over time.",
        },
        kpis: ["ltv"],
      },
    ],
    stakeholders: [
      {
        role: { ar: "مدير التسويق", en: "Marketing Director" },
        cares: { ar: "توزيع الميزانية بين القنوات وعائدها.", en: "Budget allocation across channels and its return." },
      },
      {
        role: { ar: "مسؤول الأداء", en: "Performance Marketer" },
        cares: { ar: "تكلفة الاكتساب اليومية ومعدل التحويل لكل إعلان.", en: "Daily acquisition cost and conversion rate per ad." },
      },
      {
        role: { ar: "قائد النمو", en: "Growth Lead" },
        cares: { ar: "نسبة LTV إلى CAC وفترة استرداد التكلفة.", en: "LTV-to-CAC ratio and payback period." },
      },
    ],
    sourceSystems: [
      {
        name: "Ad Platforms",
        kind: { ar: "منصات إعلانية", en: "Advertising platforms" },
        entities: ["Campaign", "AdSet", "Ad", "DailySpend", "Impression", "Click"],
      },
      {
        name: "Web Analytics",
        kind: { ar: "تحليلات الويب", en: "Web analytics" },
        entities: ["Session", "PageView", "Event", "Source", "Medium"],
      },
      {
        name: "CRM",
        kind: { ar: "إدارة علاقات العملاء", en: "Customer relationship management" },
        entities: ["Lead", "Opportunity", "Account", "StageHistory"],
      },
    ],
    glossary: [
      {
        term: "Attribution",
        ar: "الإسناد",
        definition: {
          ar: "قاعدة نسبة التحويل إلى نقطة تماس معينة. آخر نقرة، أول نقرة، وخطي — كلها قواعد مختلفة تعطي أرقامًا مختلفة لنفس البيانات.",
          en: "The rule for assigning a conversion to a touchpoint. Last click, first click, and linear are different rules that yield different numbers from identical data.",
        },
      },
      {
        term: "MQL / SQL",
        ar: "عميل محتمل مؤهل تسويقيًا / مبيعيًا",
        definition: {
          ar: "مراحل تأهيل العميل المحتمل. حدود الانتقال بينها قرار داخلي لكل شركة وليست معيارًا صناعيًا.",
          en: "Lead qualification stages. The thresholds between them are an internal decision per company, not an industry standard.",
        },
      },
      {
        term: "Churn",
        ar: "معدل الفقد",
        definition: {
          ar: "نسبة العملاء الذين توقفوا خلال فترة. يمكن قياسه بعدد العملاء أو بقيمة الإيراد المفقود، والرقمان مختلفان جدًا.",
          en: "The share of customers who stopped in a period. It can be measured by customer count or by lost revenue, and the two differ greatly.",
        },
      },
      {
        term: "Payback Period",
        ar: "فترة استرداد التكلفة",
        definition: {
          ar: "عدد الأشهر حتى يغطي هامش العميل تكلفة اكتسابه. مقياس سيولة أكثر منه مقياس ربحية.",
          en: "Months until a customer margin covers the cost of acquiring them. More a liquidity measure than a profitability one.",
        },
      },
    ],
    questions: [
      { ar: "أي قناة تجلب عملاء يبقون أطول وليس فقط أرخص؟", en: "Which channel brings customers who stay longer, not just cheaper ones?" },
      { ar: "أين يتسرب العملاء في قمع التحويل؟", en: "Where do users leak out of the funnel?" },
      { ar: "كم شهرًا نحتاج لاسترداد تكلفة اكتساب العميل؟", en: "How many months to recover customer acquisition cost?" },
      { ar: "هل نمو الإيراد جاء من عملاء جدد أم من زيادة إنفاق الحاليين؟", en: "Did revenue growth come from new customers or from existing ones spending more?" },
    ],
    dashboardPages: [
      {
        name: { ar: "أداء القنوات", en: "Channel Performance" },
        audience: { ar: "مدير التسويق", en: "Marketing director" },
        contents: {
          ar: "مصفوفة بالقناة والحملة تعرض الإنفاق وCAC وROAS، مع مقارنة بالفترة السابقة.",
          en: "A channel-by-campaign matrix showing spend, CAC, and ROAS with prior-period comparison.",
        },
      },
      {
        name: { ar: "قمع التحويل", en: "Conversion Funnel" },
        audience: { ar: "فريق النمو", en: "Growth team" },
        contents: {
          ar: "رسم قمعي بمعدلات الانتقال بين المراحل، مع تقسيم حسب المصدر.",
          en: "A funnel chart with stage-to-stage rates, segmented by source.",
        },
      },
    ],
    topKpis: ["cac", "roas", "ctr", "conversion-rate", "cpl", "marketing-roi"],
    patterns: ["funnel", "kpi-card-multi", "scatter-quadrant", "period-over-period", "actual-vs-target"],
    scenarios: [
      {
        title: { ar: "CAC منخفض لكن الأرباح لا تنمو", en: "CAC is low but profit is not growing" },
        situation: {
          ar: "خفض الفريق تكلفة الاكتساب 30% لكن إجمالي الهامش بقي ثابتًا.",
          en: "The team cut acquisition cost by 30% but total margin stayed flat.",
        },
        ask: { ar: "هل التحسّن حقيقي؟", en: "Is the improvement real?" },
        approach: {
          ar: "قارن جودة العملاء لا عددهم فقط. غالبًا انخفاض CAC يأتي من قنوات تجلب عملاء بقيمة عمرية أقل. اعرض CAC وLTV جنبًا إلى جنب لكل قناة في رسم مبعثر رباعي، لا كرقمين منفصلين.",
          en: "Compare customer quality, not just count. A falling CAC often comes from channels that bring lower-lifetime-value customers. Show CAC and LTV side by side per channel in a quadrant scatter, not as two separate numbers.",
        },
      },
    ],
    relatedDomains: ["retail", "it-saas", "customer-service"],
  },

  {
    id: "healthcare",
    slug: "healthcare",
    name: { ar: "الرعاية الصحية", en: "Healthcare" },
    tagline: {
      ar: "تدفق المرضى، وكفاءة الأسرّة، ودورة الإيراد في المنشآت الصحية.",
      en: "Patient flow, bed efficiency, and the revenue cycle in health facilities.",
    },
    intro: {
      ar: "تقارير الرعاية الصحية تجمع بين بعد تشغيلي (تدفق المرضى والموارد) وبعد مالي (المطالبات والتأمين) وبعد جودة (نتائج العلاج). لا يمكن تحسين أحدها بمعزل: تقليل مدة الإقامة قد يرفع معدل إعادة الدخول إذا خرج المريض مبكرًا.",
      en: "Healthcare reporting combines an operational dimension (patient flow and resources), a financial one (claims and insurance), and a quality one (outcomes). You cannot optimise one alone: cutting length of stay can raise readmissions if patients leave too early.",
    },
    overview: {
      ar: "المصدر الأساسي هو نظام السجل الطبي الإلكتروني (EMR) بحبيبية الزيارة أو الحلقة العلاجية (Encounter)، مع أنظمة الفوترة والمطالبات. انتبه لخصوصية البيانات: تقارير الـ BI عادة تعمل على مستوى مجمّع أو مجهول الهوية، وليس على بيانات المريض المعرّفة.",
      en: "The primary source is the electronic medical record at encounter grain, alongside billing and claims systems. Mind data privacy: BI reporting normally works on aggregated or de-identified data rather than identifiable patient records.",
    },
    accent: "#45C4E8",
    accentAlt: "#1F96BD",
    icon: "HeartPulse",
    difficulty: "advanced",
    estMinutes: 40,
    tags: [
      { ar: "تدفق المرضى", en: "Patient flow" },
      { ar: "دورة الإيراد", en: "Revenue cycle" },
      { ar: "جودة الرعاية", en: "Care quality" },
    ],
    processes: [
      {
        name: { ar: "الدخول والخروج", en: "Admission & Discharge" },
        description: {
          ar: "تسجيل دخول المريض وتخصيص السرير ثم إجراءات الخروج، وهي مصدر مؤشرات الإشغال ومدة الإقامة.",
          en: "Admitting a patient, assigning a bed, and discharge processing; the source of occupancy and length-of-stay metrics.",
        },
        kpis: ["average-length-of-stay", "bed-occupancy-rate"],
      },
      {
        name: { ar: "العيادات الخارجية", en: "Outpatient Clinics" },
        description: {
          ar: "جدولة المواعيد ومتابعة معدل عدم الحضور وزمن الانتظار.",
          en: "Appointment scheduling, no-show rate, and waiting time.",
        },
      },
      {
        name: { ar: "دورة الإيراد والمطالبات", en: "Revenue Cycle & Claims" },
        description: {
          ar: "من تسعير الخدمة إلى تقديم المطالبة للتأمين ومتابعة الرفض والتحصيل.",
          en: "From service pricing to submitting an insurance claim and tracking denials and collection.",
        },
      },
    ],
    stakeholders: [
      {
        role: { ar: "المدير الطبي", en: "Medical Director" },
        cares: { ar: "نتائج المرضى ومعدلات إعادة الدخول.", en: "Patient outcomes and readmission rates." },
      },
      {
        role: { ar: "مدير العمليات", en: "Operations Manager" },
        cares: { ar: "إشغال الأسرّة وزمن الانتظار وكفاءة غرف العمليات.", en: "Bed occupancy, waiting times, and theatre utilisation." },
      },
      {
        role: { ar: "مدير دورة الإيراد", en: "Revenue Cycle Manager" },
        cares: { ar: "نسبة رفض المطالبات ومتوسط فترة التحصيل.", en: "Claim denial rate and days in receivables." },
      },
    ],
    sourceSystems: [
      {
        name: "EMR / HIS",
        kind: { ar: "السجل الطبي الإلكتروني", en: "Electronic medical record" },
        entities: ["Encounter", "Patient", "Diagnosis", "Procedure", "BedAssignment"],
      },
      {
        name: "Billing / Claims",
        kind: { ar: "نظام الفوترة والمطالبات", en: "Billing and claims system" },
        entities: ["Claim", "ClaimLine", "Payer", "Denial", "Payment"],
      },
      {
        name: "Scheduling",
        kind: { ar: "نظام الجدولة", en: "Scheduling system" },
        entities: ["Appointment", "Provider", "Slot", "NoShow"],
      },
    ],
    glossary: [
      {
        term: "Encounter",
        ar: "الحلقة العلاجية",
        definition: {
          ar: "وحدة تفاعل واحدة بين المريض والمنشأة: زيارة عيادة أو إقامة داخلية. هي الحبيبية الأساسية في أغلب نماذج البيانات الصحية.",
          en: "One interaction between patient and facility: a clinic visit or an inpatient stay. The core grain in most healthcare data models.",
        },
      },
      {
        term: "ALOS",
        ar: "متوسط مدة الإقامة",
        definition: {
          ar: "متوسط عدد أيام إقامة المريض الداخلي. يتأثر بشدة بمزيج الحالات، ولا يُقارن بين أقسام مختلفة دون تعديل.",
          en: "Average inpatient stay in days. Heavily affected by case mix and not comparable across departments without adjustment.",
        },
      },
      {
        term: "Case Mix",
        ar: "مزيج الحالات",
        definition: {
          ar: "توزيع أنواع وشدة الحالات المعالجة. قسم يستقبل حالات أشد سيظهر بمدة إقامة أطول دون أن يكون أقل كفاءة.",
          en: "The distribution of case types and severity treated. A unit taking more severe cases shows a longer stay without being less efficient.",
        },
      },
      {
        term: "Readmission",
        ar: "إعادة الدخول",
        definition: {
          ar: "عودة المريض للدخول خلال نافذة زمنية محددة بعد الخروج، غالبًا 30 يومًا. النافذة والاستثناءات قرار سياسة لكل منشأة أو جهة تنظيمية.",
          en: "A patient readmitted within a defined window after discharge, commonly 30 days. The window and exclusions are a policy decision per facility or regulator.",
        },
      },
    ],
    questions: [
      { ar: "ما الأقسام التي تتجاوز فيها مدة الإقامة المتوقع لمزيج حالاتها؟", en: "Which units exceed the expected stay for their case mix?" },
      { ar: "ما أسباب رفض المطالبات الأكثر تكرارًا وقيمة؟", en: "What are the most frequent and most costly claim denial reasons?" },
      { ar: "كيف يتوزع إشغال الأسرّة عبر أيام الأسبوع وساعات اليوم؟", en: "How does bed occupancy vary across weekdays and hours?" },
      { ar: "أين يتركز زمن الانتظار في رحلة المريض؟", en: "Where is waiting time concentrated in the patient journey?" },
    ],
    dashboardPages: [
      {
        name: { ar: "تدفق المرضى", en: "Patient Flow" },
        audience: { ar: "مدير العمليات", en: "Operations manager" },
        contents: {
          ar: "خريطة حرارية للإشغال حسب اليوم والساعة، مع اتجاه الدخول والخروج ومدة الإقامة.",
          en: "An occupancy heatmap by day and hour with admission, discharge, and length-of-stay trends.",
        },
      },
      {
        name: { ar: "دورة الإيراد", en: "Revenue Cycle" },
        audience: { ar: "الإدارة المالية", en: "Finance leadership" },
        contents: {
          ar: "مصفوفة رفض المطالبات حسب جهة الدفع والسبب، مع أعمار المطالبات المفتوحة.",
          en: "A denial matrix by payer and reason, plus ageing of open claims.",
        },
      },
    ],
    topKpis: ["bed-occupancy-rate", "average-length-of-stay", "readmission-rate-30d", "ed-waiting-time", "hai-rate", "claim-denial-rate"],
    patterns: ["kpi-card", "heatmap-calendar", "pl-matrix", "exception-table", "period-over-period"],
    scenarios: [
      {
        title: { ar: "ضغط لتقليل مدة الإقامة", en: "Pressure to reduce length of stay" },
        situation: {
          ar: "طلبت الإدارة خفض متوسط مدة الإقامة 10% لزيادة الطاقة الاستيعابية.",
          en: "Leadership asked to cut average length of stay by 10% to add capacity.",
        },
        ask: { ar: "هل هذا هدف آمن؟", en: "Is that a safe target?" },
        approach: {
          ar: "لا تعرض مدة الإقامة وحدها. اعرضها مع معدل إعادة الدخول خلال 30 يومًا في نفس الصفحة، وقسّمها حسب مزيج الحالات. الهدف الصحيح ليس تقليل الرقم بل تقليل الأيام غير الضرورية طبيًا، وهما شيئان مختلفان.",
          en: "Never show length of stay alone. Put it beside the 30-day readmission rate on the same page and split by case mix. The right goal is not a smaller number but fewer medically unnecessary days, which is not the same thing.",
        },
      },
    ],
    relatedDomains: ["customer-service", "finance", "project-management"],
  },

  {
    id: "fnb",
    slug: "food-and-beverage",
    name: { ar: "الأغذية والمشروبات", en: "Food & Beverage" },
    tagline: {
      ar: "تكلفة الطبق، وهدر المواد، وإنتاجية الفرع لكل ساعة.",
      en: "Plate cost, food waste, and per-hour branch productivity.",
    },
    intro: {
      ar: "في المطاعم والمقاهي الهوامش ضيقة والقرارات سريعة. تقارير الـ BI هنا يجب أن تربط ثلاثة عوالم: المبيعات من نقاط البيع، وتكلفة المكونات من المخزون، وساعات العمالة. المؤشر الأهم ليس الإيراد بل ما يتبقى بعد تكلفة الطعام والعمالة.",
      en: "In restaurants and cafés, margins are thin and decisions are fast. BI here must connect three worlds: POS sales, ingredient cost from inventory, and labour hours. The metric that matters is not revenue but what remains after food and labour cost.",
    },
    overview: {
      ar: "نظام نقاط البيع يعطي بيانات بحبيبية سطر الفاتورة مع الطابع الزمني، وهو ما يتيح تحليل الذروة بالساعة. ربط المبيعات بالتكلفة يتطلب وصفة (Recipe / Bill of Materials) تحوّل الطبق المباع إلى كميات مكونات، وهذه الوصفات نادرًا ما تكون محدّثة — تحقق منها قبل الاعتماد على تكلفة الطبق.",
      en: "The POS provides order-line grain with timestamps, which enables hour-by-hour peak analysis. Linking sales to cost requires a recipe (bill of materials) translating a sold dish into ingredient quantities, and these recipes are rarely up to date — validate them before trusting plate cost.",
    },
    accent: "#F5A44E",
    accentAlt: "#C97A22",
    icon: "UtensilsCrossed",
    difficulty: "beginner",
    estMinutes: 25,
    tags: [
      { ar: "تكلفة الطعام", en: "Food cost" },
      { ar: "الهدر", en: "Waste" },
      { ar: "أداء الفروع", en: "Branch performance" },
    ],
    processes: [
      {
        name: { ar: "المبيعات ونقاط البيع", en: "Sales & POS" },
        description: {
          ar: "تسجيل الطلبات بالأصناف والوقت والقناة (صالة، توصيل، سفري).",
          en: "Recording orders with items, time, and channel (dine-in, delivery, takeaway).",
        },
      },
      {
        name: { ar: "إدارة الوصفات والتكلفة", en: "Recipe & Costing" },
        description: {
          ar: "تحديد مكونات كل طبق وكمياتها لحساب التكلفة النظرية ومقارنتها بالاستهلاك الفعلي.",
          en: "Defining each dish ingredient and quantity to compute theoretical cost and compare it to actual consumption.",
        },
      },
      {
        name: { ar: "جدولة العمالة", en: "Labour Scheduling" },
        description: {
          ar: "توزيع الورديات وفق الطلب المتوقع بالساعة لضبط نسبة تكلفة العمالة.",
          en: "Assigning shifts against forecast hourly demand to control labour cost percentage.",
        },
      },
    ],
    stakeholders: [
      {
        role: { ar: "مدير الفرع", en: "Branch Manager" },
        cares: { ar: "مبيعات الوردية وتكلفة العمالة والهدر اليومي.", en: "Shift sales, labour cost, and daily waste." },
      },
      {
        role: { ar: "الشيف التنفيذي", en: "Executive Chef" },
        cares: { ar: "تكلفة الطبق ونسبة الفاقد في المطبخ.", en: "Plate cost and kitchen yield loss." },
      },
      {
        role: { ar: "مدير العمليات", en: "Operations Director" },
        cares: { ar: "مقارنة أداء الفروع بعد تعديل حجمها وموقعها.", en: "Branch comparison adjusted for size and location." },
      },
    ],
    sourceSystems: [
      {
        name: "POS",
        kind: { ar: "نظام نقاط البيع", en: "Point of sale" },
        entities: ["Order", "OrderLine", "MenuItem", "Shift", "PaymentType"],
      },
      {
        name: "Inventory / Recipe",
        kind: { ar: "نظام المخزون والوصفات", en: "Inventory and recipe system" },
        entities: ["Ingredient", "Recipe", "RecipeLine", "StockCount", "Wastage"],
      },
      {
        name: "Workforce",
        kind: { ar: "نظام إدارة العمالة", en: "Workforce management" },
        entities: ["Employee", "Schedule", "ClockEvent", "LabourCost"],
      },
    ],
    glossary: [
      {
        term: "Food Cost %",
        ar: "نسبة تكلفة الطعام",
        definition: {
          ar: "تكلفة المكونات المستهلكة مقسومة على مبيعات الطعام. النسبة المقبولة تختلف جذريًا بين مقهى ومطعم فاخر، ولا يوجد رقم معياري واحد.",
          en: "Cost of ingredients consumed divided by food sales. An acceptable level differs sharply between a café and a fine-dining restaurant; there is no single standard number.",
        },
      },
      {
        term: "Theoretical vs Actual",
        ar: "النظري مقابل الفعلي",
        definition: {
          ar: "الفرق بين ما كان يجب أن يُستهلك حسب الوصفات وما استُهلك فعلًا. هذا الفرق هو مقياس الهدر والسرقة وأخطاء التحضير.",
          en: "The gap between what recipes say should have been consumed and what actually was. This gap measures waste, theft, and preparation error.",
        },
      },
      {
        term: "Cover",
        ar: "العميل المخدوم",
        definition: {
          ar: "عدد الأشخاص الذين خُدموا، لا عدد الفواتير. متوسط الإنفاق لكل عميل يُحسب عليه لا على الفاتورة.",
          en: "The number of people served, not the number of bills. Average spend per guest is computed on covers, not on checks.",
        },
      },
      {
        term: "Menu Engineering",
        ar: "هندسة المنيو",
        definition: {
          ar: "تصنيف الأصناف حسب شعبيتها وهامشها لتحديد ما يُروّج له أو يُعاد تسعيره أو يُحذف.",
          en: "Classifying menu items by popularity and margin to decide what to promote, re-price, or remove.",
        },
      },
    ],
    questions: [
      { ar: "ما الأصناف عالية الشعبية ومنخفضة الهامش؟", en: "Which items are popular but low margin?" },
      { ar: "كيف يتوزع الطلب عبر ساعات اليوم في كل فرع؟", en: "How does demand spread across hours of the day per branch?" },
      { ar: "ما حجم الفرق بين الاستهلاك النظري والفعلي للمكونات؟", en: "How big is the gap between theoretical and actual ingredient use?" },
      { ar: "هل تكلفة العمالة تتناسب مع المبيعات بالساعة؟", en: "Does labour cost track hourly sales?" },
    ],
    dashboardPages: [
      {
        name: { ar: "أداء الفرع اليومي", en: "Daily Branch Performance" },
        audience: { ar: "مدير الفرع", en: "Branch manager" },
        contents: {
          ar: "بطاقات المبيعات وتكلفة الطعام والعمالة، مع خريطة حرارية للطلب بالساعة.",
          en: "Cards for sales, food cost, and labour, plus an hourly demand heatmap.",
        },
      },
      {
        name: { ar: "هندسة المنيو", en: "Menu Engineering" },
        audience: { ar: "الشيف والتسويق", en: "Chef and marketing" },
        contents: {
          ar: "رسم مبعثر رباعي بالشعبية مقابل الهامش، مع مصفوفة تفصيلية للأصناف.",
          en: "A popularity-versus-margin quadrant scatter with a detailed item matrix.",
        },
      },
    ],
    topKpis: ["food-cost-pct", "beverage-cost-pct", "food-waste-pct", "aov", "sales-per-labor-hour", "table-turnover-rate"],
    patterns: ["scatter-quadrant", "heatmap-calendar", "kpi-card-multi", "exception-table"],
    scenarios: [
      {
        title: { ar: "فرع يبيع أكثر لكن يربح أقل", en: "A branch sells more but earns less" },
        situation: {
          ar: "فرع الرياض يتصدر المبيعات لكن ربحه التشغيلي أقل من فرع أصغر.",
          en: "The Riyadh branch leads on sales but its operating profit is below a smaller branch.",
        },
        ask: { ar: "أين يذهب الفارق؟", en: "Where does the difference go?" },
        approach: {
          ar: "قارن نسبة تكلفة الطعام والعمالة إلى المبيعات، لا القيم المطلقة. غالبًا يكون السبب مزيج أصناف مختلفًا أو ساعات عمالة زائدة خارج الذروة. ابدأ بمصفوفة النسب ثم تنقّل إلى مستوى الوردية.",
          en: "Compare food and labour as a percentage of sales, not absolute values. The cause is usually a different item mix or over-staffing outside peak. Start from a ratio matrix, then drill to shift level.",
        },
      },
    ],
    relatedDomains: ["retail", "supply-chain", "customer-service"],
  },

  {
    id: "project-management",
    slug: "project-management",
    name: { ar: "إدارة المشاريع", en: "Project Management" },
    tagline: {
      ar: "الجدول والتكلفة والنطاق: قياس الانحراف قبل أن يصبح أزمة.",
      en: "Schedule, cost, and scope: catching drift before it becomes a crisis.",
    },
    intro: {
      ar: "تقارير المشاريع تجيب سؤالين: هل نحن متأخرون؟ وهل تجاوزنا الميزانية؟ الإجابة البسيطة (قارن المصروف بالموازنة) مضللة، لأنها لا تأخذ في الحسبان كم أُنجز فعلًا. لهذا تُستخدم منهجية القيمة المكتسبة (Earned Value) التي تقارن ثلاثة أرقام لا رقمين.",
      en: "Project reporting answers two questions: are we late, and are we over budget? The simple answer (compare spend to budget) misleads because it ignores how much work was actually completed. Earned Value Management compares three numbers instead of two.",
    },
    overview: {
      ar: "النموذج يقوم على هيكل تجزئة العمل (WBS) بمستويات هرمية، وجدول مهام بتواريخ مخططة وفعلية، وجدول تكاليف. مفتاح النجاح هو تحديث نسبة الإنجاز بطريقة موضوعية؛ إذا كانت النسبة تقديرًا شخصيًا من مدير المشروع فكل مؤشرات القيمة المكتسبة ستكون بلا معنى.",
      en: "The model is built on a hierarchical work breakdown structure, a task table with planned and actual dates, and a cost table. Success hinges on updating percent-complete objectively; if it is the project manager's personal estimate, every earned value metric becomes meaningless.",
    },
    accent: "#A277F0",
    accentAlt: "#7A4BD1",
    icon: "ClipboardList",
    difficulty: "advanced",
    estMinutes: 35,
    tags: [
      { ar: "القيمة المكتسبة", en: "Earned value" },
      { ar: "الجدول الزمني", en: "Schedule" },
      { ar: "الموارد", en: "Resources" },
    ],
    processes: [
      {
        name: { ar: "التخطيط وخط الأساس", en: "Planning & Baseline" },
        description: {
          ar: "تثبيت الجدول والموازنة كخط أساس يُقاس عليه كل انحراف لاحق.",
          en: "Freezing schedule and budget as the baseline that all later variance is measured against.",
        },
      },
      {
        name: { ar: "متابعة التنفيذ", en: "Execution Tracking" },
        description: {
          ar: "تسجيل ساعات العمل ونسب الإنجاز والتكاليف المتكبدة.",
          en: "Logging hours, percent complete, and incurred cost.",
        },
        kpis: ["cpi", "spi"],
      },
      {
        name: { ar: "إدارة المخاطر والتغيير", en: "Risk & Change Control" },
        description: {
          ar: "تسجيل طلبات التغيير وأثرها على النطاق والموازنة.",
          en: "Logging change requests and their impact on scope and budget.",
        },
      },
    ],
    stakeholders: [
      {
        role: { ar: "مدير المشروع", en: "Project Manager" },
        cares: { ar: "الانحراف عن الجدول والتكلفة والمخاطر المفتوحة.", en: "Schedule and cost variance and open risks." },
      },
      {
        role: { ar: "مكتب إدارة المشاريع", en: "PMO" },
        cares: { ar: "مقارنة صحة المحفظة كاملة بمعايير موحدة.", en: "Comparing portfolio health on consistent criteria." },
      },
      {
        role: { ar: "الراعي التنفيذي", en: "Executive Sponsor" },
        cares: { ar: "التكلفة النهائية المتوقعة وتاريخ التسليم.", en: "Forecast final cost and delivery date." },
      },
    ],
    sourceSystems: [
      {
        name: "MS Project / Primavera",
        kind: { ar: "أداة جدولة المشاريع", en: "Project scheduling tool" },
        entities: ["Task", "WBS", "Baseline", "Dependency", "Milestone"],
      },
      {
        name: "Timesheet",
        kind: { ar: "نظام تسجيل الساعات", en: "Timesheet system" },
        entities: ["TimeEntry", "Resource", "Rate", "Approval"],
      },
      {
        name: "ERP Project Costing",
        kind: { ar: "تكاليف المشاريع في ERP", en: "Project costing in ERP" },
        entities: ["ProjectCost", "Commitment", "Invoice", "BudgetLine"],
      },
    ],
    glossary: [
      {
        term: "PV / EV / AC",
        ar: "القيمة المخططة / المكتسبة / التكلفة الفعلية",
        definition: {
          ar: "الأعمدة الثلاثة لمنهجية القيمة المكتسبة: ما كان مخططًا إنجازه، وما أُنجز فعلًا مُقيَّمًا بالموازنة، وما صُرف فعلًا.",
          en: "The three pillars of earned value: what was planned to be done, what was actually done valued at budget, and what was actually spent.",
        },
      },
      {
        term: "CPI",
        ar: "مؤشر أداء التكلفة",
        definition: {
          ar: "EV مقسومًا على AC. أقل من 1 يعني أن كل ريال منفق أنتج أقل من ريال من القيمة المخططة.",
          en: "EV divided by AC. Below 1 means each unit of spend produced less than one unit of planned value.",
        },
      },
      {
        term: "Critical Path",
        ar: "المسار الحرج",
        definition: {
          ar: "أطول سلسلة مهام مترابطة تحدد أقصر مدة ممكنة للمشروع. تأخر أي مهمة عليها يؤخر المشروع كله.",
          en: "The longest chain of dependent tasks that sets the shortest possible project duration. Any slip on it delays the whole project.",
        },
      },
      {
        term: "EAC",
        ar: "التكلفة المتوقعة عند الإكمال",
        definition: {
          ar: "تقدير للتكلفة الإجمالية النهائية. له صيغ متعددة حسب افتراضك عن استمرار الأداء الحالي، ويجب ذكر الصيغة المستخدمة.",
          en: "An estimate of total final cost. It has several formulas depending on whether current performance is assumed to continue; always state which one you used.",
        },
      },
    ],
    questions: [
      { ar: "أي المشاريع في المحفظة معرّضة لتجاوز الموازنة؟", en: "Which portfolio projects are at risk of overrun?" },
      { ar: "هل التأخير على المسار الحرج أم على مهام لها فسحة؟", en: "Is the delay on the critical path or on tasks with float?" },
      { ar: "ما أثر طلبات التغيير المعتمدة على خط الأساس؟", en: "What is the impact of approved change requests on the baseline?" },
      { ar: "أين تتركز ساعات الموارد مقارنة بالمخطط؟", en: "Where are resource hours concentrated versus plan?" },
    ],
    dashboardPages: [
      {
        name: { ar: "صحة المحفظة", en: "Portfolio Health" },
        audience: { ar: "مكتب إدارة المشاريع", en: "PMO" },
        contents: {
          ar: "مصفوفة بالمشاريع تعرض CPI وSPI والحالة، مع تنسيق شرطي وإشارات إنذار.",
          en: "A project matrix showing CPI, SPI, and status with conditional formatting and warning flags.",
        },
      },
      {
        name: { ar: "تفاصيل المشروع", en: "Project Detail" },
        audience: { ar: "مدير المشروع", en: "Project manager" },
        contents: {
          ar: "منحنى S للقيمة المخططة والمكتسبة والفعلية، مع مصفوفة المهام المتأخرة.",
          en: "An S-curve of planned, earned, and actual value with a late-task matrix.",
        },
      },
    ],
    topKpis: ["spi", "cpi", "schedule-variance", "cost-variance", "milestone-on-time-rate", "eac"],
    patterns: ["actual-vs-target", "kpi-card-multi", "waterfall-variance", "exception-table", "backlog-analysis"],
    scenarios: [
      {
        title: { ar: "المشروع تحت الموازنة لكنه متأخر", en: "The project is under budget but late" },
        situation: {
          ar: "تقرير المصروفات يُظهر إنفاقًا أقل من المخطط، والإدارة اعتبرته نجاحًا.",
          en: "The spend report shows less than planned and leadership read it as success.",
        },
        ask: { ar: "هل هذا نجاح فعلًا؟", en: "Is that really success?" },
        approach: {
          ar: "الإنفاق الأقل من المخطط غالبًا علامة تأخر لا كفاءة: لم تُصرف الأموال لأن العمل لم يُنجز. قارن AC بـ EV لا بـ PV. إذا كان CPI فوق 1 بينما SPI تحت 1 فالمشروع متأخر ولن يبقى تحت الموازنة عند اللحاق.",
          en: "Underspend is usually a symptom of delay, not efficiency: the money was not spent because the work was not done. Compare AC to EV, not to PV. If CPI is above 1 while SPI is below 1, the project is late and will not stay under budget once it catches up.",
        },
      },
    ],
    relatedDomains: ["it-saas", "finance", "manufacturing"],
  },

  {
    id: "hr",
    slug: "human-resources",
    name: { ar: "الموارد البشرية", en: "Human Resources" },
    tagline: {
      ar: "التوظيف والاحتفاظ وتكلفة القوى العاملة عبر دورة حياة الموظف.",
      en: "Hiring, retention, and workforce cost across the employee lifecycle.",
    },
    intro: {
      ar: "بيانات الموارد البشرية حساسة وبطيئة التغير، وهذا يغيّر طريقة النمذجة. أغلب المؤشرات هنا إما لقطات في لحظة (عدد الموظفين) أو أحداث خلال فترة (استقالة، تعيين)، والخلط بينهما هو أكبر مصدر لأخطاء تقارير الـ HR.",
      en: "HR data is sensitive and slow-moving, which changes how you model it. Most metrics here are either point-in-time snapshots (headcount) or events over a period (a resignation, a hire). Confusing the two is the single biggest source of HR reporting error.",
    },
    overview: {
      ar: "تحتاج جدول موظفين متغير بطيئًا (SCD Type 2) لتتبع تغير القسم والدرجة والراتب عبر الزمن، وجدول أحداث للتوظيف والمغادرة. عدد الموظفين مؤشر شبه تجميعي: لا يُجمع عبر الأشهر، بل يُؤخذ في نهاية الفترة أو كمتوسط، ويجب أن توضح أيهما استخدمت.",
      en: "You need a slowly changing employee dimension (SCD Type 2) to track department, grade, and salary over time, plus an event table for hires and leavers. Headcount is semi-additive: it does not sum across months but is taken at period end or as an average, and you must state which you used.",
    },
    accent: "#4ED08A",
    accentAlt: "#25A263",
    icon: "Users",
    difficulty: "intermediate",
    estMinutes: 30,
    tags: [
      { ar: "الاحتفاظ", en: "Retention" },
      { ar: "التوظيف", en: "Recruitment" },
      { ar: "تكلفة القوى العاملة", en: "Workforce cost" },
    ],
    processes: [
      {
        name: { ar: "الاستقطاب والتوظيف", en: "Talent Acquisition" },
        description: {
          ar: "من فتح الشاغر إلى قبول العرض، وقياس زمن التوظيف وتكلفته ومصادره.",
          en: "From opening a requisition to offer acceptance, measuring time to hire, cost, and source.",
        },
      },
      {
        name: { ar: "إدارة الأداء", en: "Performance Management" },
        description: {
          ar: "دورات التقييم وربطها بالترقيات والزيادات.",
          en: "Review cycles and their link to promotions and increases.",
        },
      },
      {
        name: { ar: "الاحتفاظ والمغادرة", en: "Retention & Attrition" },
        description: {
          ar: "متابعة أسباب المغادرة الطوعية وغير الطوعية وأثرها على الأقسام.",
          en: "Tracking voluntary and involuntary exits and their departmental impact.",
        },
        kpis: ["employee-turnover-rate"],
      },
    ],
    stakeholders: [
      {
        role: { ar: "مدير الموارد البشرية", en: "HR Director" },
        cares: { ar: "معدل الدوران وتكلفة القوى العاملة والخطة التعاقبية.", en: "Turnover, workforce cost, and succession." },
      },
      {
        role: { ar: "مدير التوظيف", en: "Talent Acquisition Manager" },
        cares: { ar: "زمن شغل الشاغر وجودة التعيين.", en: "Time to fill and quality of hire." },
      },
      {
        role: { ar: "مدير القسم", en: "Line Manager" },
        cares: { ar: "استقرار فريقه وتوزيع الأعباء.", en: "Team stability and workload distribution." },
      },
    ],
    sourceSystems: [
      {
        name: "HRIS",
        kind: { ar: "نظام معلومات الموارد البشرية", en: "HR information system" },
        entities: ["Employee", "Position", "Department", "EmploymentEvent", "Compensation"],
      },
      {
        name: "ATS",
        kind: { ar: "نظام تتبع المتقدمين", en: "Applicant tracking system" },
        entities: ["Requisition", "Applicant", "Stage", "Offer", "Source"],
      },
      {
        name: "Payroll",
        kind: { ar: "نظام الرواتب", en: "Payroll system" },
        entities: ["PayrollRun", "PayComponent", "Deduction", "CostCenter"],
      },
    ],
    glossary: [
      {
        term: "Headcount vs FTE",
        ar: "عدد الموظفين مقابل المكافئ بدوام كامل",
        definition: {
          ar: "عدد الموظفين يحسب الأشخاص، والمكافئ بدوام كامل يحسب حجم العمل. موظفان بنصف دوام يساويان شخصين لكن FTE واحد.",
          en: "Headcount counts people; FTE counts work capacity. Two half-time employees are two heads but one FTE.",
        },
      },
      {
        term: "Voluntary Attrition",
        ar: "المغادرة الطوعية",
        definition: {
          ar: "مغادرة بقرار الموظف. فصلها عن المغادرة غير الطوعية ضروري لأن تفسيرهما الإداري مختلف تمامًا.",
          en: "An exit initiated by the employee. Separating it from involuntary exits is essential because they mean very different things to management.",
        },
      },
      {
        term: "Time to Fill",
        ar: "زمن شغل الشاغر",
        definition: {
          ar: "الأيام من اعتماد الشاغر إلى قبول العرض. يختلف عن زمن التوظيف الذي يبدأ من تقديم المرشح.",
          en: "Days from requisition approval to offer acceptance. Different from time to hire, which starts when the candidate applies.",
        },
      },
      {
        term: "Span of Control",
        ar: "نطاق الإشراف",
        definition: {
          ar: "عدد المرؤوسين المباشرين لكل مدير، ويُستخدم لتقييم هيكل المنظمة.",
          en: "Direct reports per manager, used to assess organizational structure.",
        },
      },
    ],
    questions: [
      { ar: "أي الأقسام يفقد موظفيه أسرع من غيره؟", en: "Which departments lose people fastest?" },
      { ar: "ما نسبة المغادرين خلال أول سنة من التعيين؟", en: "What share of leavers go within their first year?" },
      { ar: "كيف تتوزع تكلفة الرواتب بين الأقسام والدرجات؟", en: "How is payroll cost distributed across departments and grades?" },
      { ar: "ما مصادر التوظيف التي تعطي موظفين يبقون أطول؟", en: "Which hiring sources produce longer-tenured employees?" },
    ],
    dashboardPages: [
      {
        name: { ar: "نظرة على القوى العاملة", en: "Workforce Overview" },
        audience: { ar: "الإدارة العليا", en: "Senior leadership" },
        contents: {
          ar: "عدد الموظفين والدوران وتكلفة القوى العاملة، مع توزيع حسب القسم والدرجة.",
          en: "Headcount, turnover, and workforce cost with department and grade breakdowns.",
        },
      },
      {
        name: { ar: "تحليل الدوران", en: "Attrition Analysis" },
        audience: { ar: "شريك الموارد البشرية", en: "HR business partner" },
        contents: {
          ar: "معدل الدوران حسب القسم والمدة الوظيفية والسبب، مع مقارنة سنوية.",
          en: "Turnover by department, tenure band, and reason, with a year-over-year comparison.",
        },
      },
    ],
    topKpis: ["employee-turnover-rate", "time-to-hire", "time-to-fill", "absenteeism-rate", "cost-per-hire", "training-completion-rate"],
    patterns: ["kpi-card", "stacked-bar", "period-over-period", "pl-matrix", "exception-table"],
    scenarios: [
      {
        title: { ar: "معدل دوران مرتفع في قسم واحد", en: "High turnover in one department" },
        situation: {
          ar: "قسم خدمة العملاء يسجل دورانًا 34% بينما متوسط الشركة 12%.",
          en: "Customer service records 34% turnover against a 12% company average.",
        },
        ask: { ar: "هل المشكلة في القسم أم في طريقة الحساب؟", en: "Is the problem the department or the calculation?" },
        approach: {
          ar: "تحقق من المقام أولًا: إذا كان القسم ينمو بسرعة فمتوسط عدد الموظفين يتغير كثيرًا خلال السنة، واستخدام رقم نهاية الفترة يضخّم النسبة. ثم افصل الطوعي عن غير الطوعي، وقسّم حسب المدة الوظيفية — دوران المستجدين له علاج مختلف تمامًا عن دوران الخبرات.",
          en: "Check the denominator first: in a fast-growing department average headcount shifts a lot during the year, and using a period-end figure inflates the rate. Then split voluntary from involuntary and band by tenure — new-joiner churn needs a completely different remedy than experienced-staff churn.",
        },
      },
    ],
    relatedDomains: ["customer-service", "finance", "project-management"],
  },

  {
    id: "retail",
    slug: "retail-ecommerce",
    name: { ar: "التجزئة والتجارة الإلكترونية", en: "Retail & E-commerce" },
    tagline: {
      ar: "من الزيارة إلى السلة إلى الشراء المتكرر، عبر المتجر والموقع.",
      en: "From visit to basket to repeat purchase, across store and site.",
    },
    intro: {
      ar: "التجزئة مجال غني بالبيانات وسريع الإيقاع. المؤشر الأشهر هو الإيراد، لكنه ناتج ثلاثة محركات: عدد الزيارات، ومعدل التحويل، ومتوسط قيمة الطلب. أي تحليل مفيد يبدأ بتفكيك الإيراد إلى هذه المحركات بدل النظر إليه ككتلة واحدة.",
      en: "Retail is data-rich and fast-moving. The headline metric is revenue, but revenue is the product of three drivers: traffic, conversion rate, and average order value. Any useful analysis starts by decomposing revenue into those drivers rather than treating it as one block.",
    },
    overview: {
      ar: "النموذج يقوم على جدول مبيعات بحبيبية سطر الطلب، مرتبط بأبعاد المنتج والعميل والمتجر والتاريخ. في التجارة الإلكترونية يُضاف جدول أحداث الموقع بحبيبية الجلسة. انتبه إلى المرتجعات: تسجيلها كصفوف سالبة في نفس جدول المبيعات أبسط بكثير من جدول منفصل، ويمنع أخطاء الطرح.",
      en: "The model centres on a sales table at order-line grain linked to product, customer, store, and date dimensions. E-commerce adds a web event table at session grain. Mind returns: recording them as negative rows in the same sales table is far simpler than a separate table and prevents subtraction errors.",
    },
    accent: "#F27A6B",
    accentAlt: "#C94B3B",
    icon: "ShoppingCart",
    difficulty: "beginner",
    estMinutes: 30,
    tags: [
      { ar: "المبيعات", en: "Sales" },
      { ar: "سلوك العميل", en: "Customer behaviour" },
      { ar: "توفر المنتج", en: "Availability" },
    ],
    processes: [
      {
        name: { ar: "إدارة التشكيلة والتسعير", en: "Assortment & Pricing" },
        description: {
          ar: "اختيار الأصناف المعروضة وتسعيرها ومتابعة أثر التخفيضات على الهامش.",
          en: "Choosing what to stock, pricing it, and tracking discount impact on margin.",
        },
        kpis: ["gross-profit-margin", "aov"],
      },
      {
        name: { ar: "التجارة الإلكترونية", en: "Online Commerce" },
        description: {
          ar: "من الزيارة إلى إتمام الطلب، مع متابعة ترك السلة ومعدل التحويل.",
          en: "From visit to completed order, tracking cart abandonment and conversion.",
        },
        kpis: ["conversion-rate", "aov"],
      },
      {
        name: { ar: "عمليات المتجر", en: "Store Operations" },
        description: {
          ar: "توفر المنتج على الرف، وإنتاجية المساحة، وأداء الورديات.",
          en: "On-shelf availability, sales per square metre, and shift performance.",
        },
      },
    ],
    stakeholders: [
      {
        role: { ar: "مدير التجارة", en: "Commercial Director" },
        cares: { ar: "نمو المبيعات والهامش ومزيج الفئات.", en: "Sales growth, margin, and category mix." },
      },
      {
        role: { ar: "مدير التجارة الإلكترونية", en: "E-commerce Manager" },
        cares: { ar: "معدل التحويل ومتوسط قيمة الطلب وترك السلة.", en: "Conversion, average order value, and abandonment." },
      },
      {
        role: { ar: "مدير المتجر", en: "Store Manager" },
        cares: { ar: "مبيعات المتر المربع وتوفر الأصناف.", en: "Sales per square metre and item availability." },
      },
    ],
    sourceSystems: [
      {
        name: "E-commerce Platform",
        kind: { ar: "منصة متجر إلكتروني", en: "E-commerce platform" },
        entities: ["Order", "OrderLine", "Customer", "Product", "Cart", "Return"],
      },
      {
        name: "POS",
        kind: { ar: "نقاط البيع في الفروع", en: "In-store point of sale" },
        entities: ["Transaction", "TransactionLine", "Store", "Cashier", "Promotion"],
      },
      {
        name: "Loyalty",
        kind: { ar: "نظام الولاء", en: "Loyalty system" },
        entities: ["Member", "PointsEvent", "Tier", "Redemption"],
      },
    ],
    glossary: [
      {
        term: "AOV",
        ar: "متوسط قيمة الطلب",
        definition: {
          ar: "إجمالي الإيراد مقسومًا على عدد الطلبات. يتأثر بعدد القطع في الطلب وبسعر القطعة معًا، فافصلهما عند التحليل.",
          en: "Revenue divided by order count. It is driven by both items per order and price per item, so separate the two when analysing.",
        },
      },
      {
        term: "Conversion Rate",
        ar: "معدل التحويل",
        definition: {
          ar: "نسبة الجلسات التي انتهت بشراء. المقام يجب أن يكون واضحًا: جلسات أم زوار فريدون أم زيارات لصفحة المنتج؟",
          en: "The share of sessions ending in a purchase. The denominator must be explicit: sessions, unique visitors, or product-page views?",
        },
      },
      {
        term: "Like-for-Like",
        ar: "المبيعات المماثلة",
        definition: {
          ar: "مقارنة مبيعات المتاجر المفتوحة في الفترتين فقط، لاستبعاد أثر افتتاح أو إغلاق فروع من قراءة النمو.",
          en: "Comparing only stores open in both periods, to strip the effect of openings and closures out of the growth figure.",
        },
      },
      {
        term: "Sell-Through Rate",
        ar: "معدل التصريف",
        definition: {
          ar: "نسبة الكمية المباعة من الكمية المستلمة خلال فترة. مهم جدًا في الموضة والموسميات.",
          en: "Units sold as a share of units received in a period. Critical in fashion and seasonal categories.",
        },
      },
    ],
    questions: [
      { ar: "هل نمو الإيراد جاء من زيارات أكثر أم تحويل أفضل أم سلة أكبر؟", en: "Did revenue growth come from more traffic, better conversion, or a bigger basket?" },
      { ar: "ما الفئات التي تنمو بالخصومات فقط؟", en: "Which categories only grow on discount?" },
      { ar: "ما نسبة المبيعات من العملاء المتكررين؟", en: "What share of sales comes from repeat customers?" },
      { ar: "أي الأصناف نفدت من الرف خلال ذروة الطلب؟", en: "Which items went out of stock during peak demand?" },
    ],
    dashboardPages: [
      {
        name: { ar: "نبض المبيعات", en: "Sales Pulse" },
        audience: { ar: "الإدارة التجارية", en: "Commercial leadership" },
        contents: {
          ar: "بطاقات الإيراد والطلبات وAOV والهامش، مع اتجاه يومي ومقارنة بالعام السابق.",
          en: "Cards for revenue, orders, AOV, and margin with a daily trend and year-over-year comparison.",
        },
      },
      {
        name: { ar: "تحليل الفئات", en: "Category Analysis" },
        audience: { ar: "مدير الفئة", en: "Category manager" },
        contents: {
          ar: "مصفوفة بالفئة والصنف تعرض المبيعات والهامش ومعدل التصريف، مع تنسيق شرطي.",
          en: "A category-by-item matrix of sales, margin, and sell-through with conditional formatting.",
        },
      },
    ],
    topKpis: ["net-sales", "conversion-rate", "aov", "sell-through-rate", "inventory-turnover", "repeat-purchase-rate"],
    patterns: ["kpi-card-multi", "period-over-period", "waterfall-variance", "pl-matrix", "funnel"],
    scenarios: [
      {
        title: { ar: "المبيعات ترتفع والربح يثبت", en: "Sales rise while profit stays flat" },
        situation: {
          ar: "نمت المبيعات 15% خلال موسم التخفيضات لكن إجمالي الربح لم يتغير.",
          en: "Sales grew 15% during a promotional season but gross profit did not move.",
        },
        ask: { ar: "هل الحملة كانت مجدية؟", en: "Was the promotion worthwhile?" },
        approach: {
          ar: "احسب الهامش بعد الخصم لكل فئة وقارنه بالفترة نفسها من العام الماضي. أضف بعدًا مهمًا: نسبة المبيعات المخفّضة إلى الإجمالي. غالبًا يكون جزء كبير من المبيعات المخفّضة كان سيحدث بسعر كامل، وهذا ما يجب قياسه.",
          en: "Compute post-discount margin per category against the same period last year, and add one critical dimension: discounted sales as a share of total. Often a large part of discounted sales would have happened at full price, and that is what you need to measure.",
        },
      },
    ],
    relatedDomains: ["marketing", "supply-chain", "fnb"],
  },

  {
    id: "manufacturing",
    slug: "manufacturing",
    name: { ar: "التصنيع والإنتاج", en: "Manufacturing & Production" },
    tagline: {
      ar: "كفاءة الخط، وجودة المنتج، وتكلفة الوحدة المنتجة.",
      en: "Line efficiency, product quality, and cost per produced unit.",
    },
    intro: {
      ar: "المصنع بيئة يقاس فيها الوقت بالدقائق. مؤشر OEE هو المعيار الأشهر لأنه يجمع ثلاثة أبعاد في رقم واحد: التوفر والأداء والجودة. لكن هذا الدمج نفسه هو خطره: رقم OEE واحد لا يخبرك بأي بعد تدهور، ولذلك لا يُعرض أبدًا بدون مكوناته الثلاثة.",
      en: "A plant measures time in minutes. OEE is the best-known metric because it folds three dimensions into one number: availability, performance, and quality. That folding is also its danger: a single OEE figure does not tell you which dimension degraded, so it is never shown without its three components.",
    },
    overview: {
      ar: "البيانات تأتي من أنظمة MES وSCADA بحبيبية عالية جدًا (أحداث بالثانية)، وهذا يفرض طبقة تجميع قبل الوصول إلى Power BI. قرار مهم: عرّف «الوقت المخطط للإنتاج» بوضوح — هل يشمل الصيانة المجدولة والاستراحات؟ الإجابة تغيّر OEE بعشر نقاط أو أكثر.",
      en: "Data comes from MES and SCADA at very fine grain (per-second events), which forces an aggregation layer before Power BI. One decision matters most: define planned production time explicitly — does it include scheduled maintenance and breaks? The answer moves OEE by ten points or more.",
    },
    accent: "#5A9BF0",
    accentAlt: "#2E6FC4",
    icon: "Factory",
    difficulty: "advanced",
    estMinutes: 40,
    tags: [
      { ar: "كفاءة المعدات", en: "Equipment efficiency" },
      { ar: "الجودة", en: "Quality" },
      { ar: "تكلفة الإنتاج", en: "Production cost" },
    ],
    processes: [
      {
        name: { ar: "تخطيط الإنتاج", en: "Production Planning" },
        description: {
          ar: "تحويل الطلب إلى أوامر تصنيع موزعة على الخطوط والورديات.",
          en: "Turning demand into work orders scheduled across lines and shifts.",
        },
      },
      {
        name: { ar: "التشغيل ومراقبة الخط", en: "Line Execution" },
        description: {
          ar: "تشغيل أوامر التصنيع وتسجيل التوقفات ومعدلات الإنتاج.",
          en: "Running work orders and logging downtime and production rates.",
        },
        kpis: ["oee", "scrap-rate"],
      },
      {
        name: { ar: "ضبط الجودة", en: "Quality Control" },
        description: {
          ar: "الفحص وتسجيل المعيب وإعادة التشغيل وأسباب عدم المطابقة.",
          en: "Inspection, defect logging, rework, and non-conformance reasons.",
        },
        kpis: ["scrap-rate"],
      },
      {
        name: { ar: "الصيانة", en: "Maintenance" },
        description: {
          ar: "الصيانة الوقائية والإصلاحية وأثرها على توفر المعدة.",
          en: "Preventive and corrective maintenance and their effect on equipment availability.",
        },
      },
    ],
    stakeholders: [
      {
        role: { ar: "مدير المصنع", en: "Plant Manager" },
        cares: { ar: "الإنتاجية الإجمالية وتكلفة الوحدة.", en: "Overall throughput and unit cost." },
      },
      {
        role: { ar: "مهندس الإنتاج", en: "Production Engineer" },
        cares: { ar: "أسباب التوقف وزمن التحويل بين المنتجات.", en: "Downtime reasons and changeover time." },
      },
      {
        role: { ar: "مدير الجودة", en: "Quality Manager" },
        cares: { ar: "معدل المعيب وأسباب عدم المطابقة.", en: "Defect rate and non-conformance causes." },
      },
    ],
    sourceSystems: [
      {
        name: "MES",
        kind: { ar: "نظام تنفيذ التصنيع", en: "Manufacturing execution system" },
        entities: ["WorkOrder", "ProductionRun", "DowntimeEvent", "Line", "Shift"],
      },
      {
        name: "SCADA / Historian",
        kind: { ar: "نظام مراقبة وتخزين القياسات", en: "Process monitoring and historian" },
        entities: ["Tag", "Reading", "Machine", "Alarm"],
      },
      {
        name: "QMS",
        kind: { ar: "نظام إدارة الجودة", en: "Quality management system" },
        entities: ["Inspection", "Defect", "NonConformance", "CAPA"],
      },
    ],
    glossary: [
      {
        term: "OEE",
        ar: "الفعالية الكلية للمعدات",
        definition: {
          ar: "حاصل ضرب التوفر في الأداء في الجودة. يعبّر عن نسبة الوقت المنتج فعلًا وحدات سليمة بالسرعة المثالية.",
          en: "Availability multiplied by performance multiplied by quality. It expresses the share of time that actually produced good units at ideal speed.",
        },
      },
      {
        term: "Planned Production Time",
        ar: "الوقت المخطط للإنتاج",
        definition: {
          ar: "الوقت الذي كان من المفترض أن تنتج فيه المعدة. تعريفه قرار داخلي، وهو المقام في مكوّن التوفر.",
          en: "Time the equipment was supposed to be producing. Its definition is an internal decision and it is the denominator of the availability component.",
        },
      },
      {
        term: "Changeover",
        ar: "زمن التحويل",
        definition: {
          ar: "الوقت اللازم لتهيئة الخط للانتقال من منتج إلى آخر، ويُحتسب عادة توقفًا مخططًا.",
          en: "Time needed to switch the line from one product to another, usually counted as planned downtime.",
        },
      },
      {
        term: "First Pass Yield",
        ar: "معدل النجاح من المرة الأولى",
        definition: {
          ar: "نسبة الوحدات التي اجتازت الفحص دون إعادة تشغيل. أدق من معدل الجودة النهائي لأنه لا يخفي إعادة العمل.",
          en: "Share of units passing inspection without rework. Sharper than final quality rate because it does not hide rework.",
        },
      },
    ],
    questions: [
      { ar: "ما أكبر أسباب التوقف من حيث الدقائق المفقودة لا عدد الحوادث؟", en: "What are the top downtime causes by minutes lost, not incident count?" },
      { ar: "هل انخفاض OEE سببه التوفر أم السرعة أم الجودة؟", en: "Is the OEE drop driven by availability, speed, or quality?" },
      { ar: "كم يكلفنا زمن التحويل بين المنتجات أسبوعيًا؟", en: "How much does changeover cost us weekly?" },
      { ar: "ما تكلفة الوحدة المنتجة عبر الخطوط المختلفة؟", en: "What is cost per unit across different lines?" },
    ],
    dashboardPages: [
      {
        name: { ar: "أداء الخط", en: "Line Performance" },
        audience: { ar: "مهندس الإنتاج", en: "Production engineer" },
        contents: {
          ar: "OEE مع مكوناته الثلاثة، وتحليل باريتو لأسباب التوقف، ومصفوفة بالوردية.",
          en: "OEE with its three components, a Pareto of downtime reasons, and a by-shift matrix.",
        },
      },
      {
        name: { ar: "الجودة وعدم المطابقة", en: "Quality & Non-Conformance" },
        audience: { ar: "مدير الجودة", en: "Quality manager" },
        contents: {
          ar: "معدل المعيب حسب المنتج والسبب، مع شجرة تفكيك للوصول إلى الجذر.",
          en: "Defect rate by product and cause, with a decomposition tree to reach the root.",
        },
      },
    ],
    topKpis: ["oee", "first-pass-yield", "scrap-rate", "schedule-attainment", "production-cycle-time", "manufacturing-cost-per-unit"],
    patterns: ["kpi-card-multi", "decomposition-tree", "waterfall-variance", "exception-table", "actual-vs-target"],
    scenarios: [
      {
        title: { ar: "OEE ثابت لكن الإنتاج انخفض", en: "OEE is flat but output dropped" },
        situation: {
          ar: "رقم OEE بقي عند 72% بينما انخفضت الوحدات المنتجة 15%.",
          en: "OEE held at 72% while units produced fell 15%.",
        },
        ask: { ar: "كيف يستقيم هذا؟", en: "How can both be true?" },
        approach: {
          ar: "OEE نسبة تُقاس على الوقت المخطط. إذا قُلّص الوقت المخطط (وردية أقل، صيانة مجدولة أطول) فالنسبة تبقى ثابتة بينما ينخفض الإنتاج المطلق. اعرض دائمًا OEE بجانب الوحدات المنتجة والوقت المخطط؛ النسبة وحدها تخفي قرارات الجدولة.",
          en: "OEE is a ratio over planned time. If planned time shrank (fewer shifts, longer scheduled maintenance), the ratio holds while absolute output falls. Always show OEE beside units produced and planned time; the ratio alone hides scheduling decisions.",
        },
      },
    ],
    relatedDomains: ["supply-chain", "project-management", "finance"],
  },

  {
    id: "customer-service",
    slug: "customer-service",
    name: { ar: "خدمة العملاء وإدارة علاقات العملاء", en: "Customer Service & CRM" },
    tagline: {
      ar: "زمن الاستجابة، وحل المشكلة من أول مرة، ورضا العميل.",
      en: "Response time, first contact resolution, and customer satisfaction.",
    },
    intro: {
      ar: "خدمة العملاء مجال تكون فيه المؤشرات الزمنية مغرية وخطرة معًا. تقليل زمن المكالمة يبدو تحسينًا حتى تكتشف أن معدل إعادة الاتصال ارتفع. القاعدة هنا: لا تقس السرعة دون أن تقيس معها جودة الحل.",
      en: "In customer service, time metrics are both tempting and dangerous. Cutting handle time looks like an improvement until you notice repeat contacts went up. The rule: never measure speed without measuring resolution quality alongside it.",
    },
    overview: {
      ar: "النموذج يقوم على جدول التذاكر أو التفاعلات بحبيبية التذكرة، مع جدول أحداث لتتبع تغير الحالة. أهم تفصيلة تقنية هي حساب المدة ضمن ساعات العمل فقط: تذكرة فُتحت الخميس مساءً وأُغلقت الأحد صباحًا ليست متأخرة ثلاثة أيام. هذا يتطلب جدول تقويم عمل مخصص.",
      en: "The model is built on a ticket or interaction table at ticket grain with an event table tracking status changes. The key technical detail is computing durations within business hours only: a ticket opened Thursday evening and closed Sunday morning is not three days late. That requires a dedicated business-calendar table.",
    },
    accent: "#D07AEE",
    accentAlt: "#A748CC",
    icon: "Headset",
    difficulty: "intermediate",
    estMinutes: 28,
    tags: [
      { ar: "التذاكر", en: "Tickets" },
      { ar: "اتفاقية مستوى الخدمة", en: "SLA" },
      { ar: "رضا العملاء", en: "Satisfaction" },
    ],
    processes: [
      {
        name: { ar: "استقبال الطلبات", en: "Contact Intake" },
        description: {
          ar: "استلام التواصل عبر القنوات المختلفة وتصنيفه وتوجيهه للفريق المناسب.",
          en: "Receiving contacts across channels, categorising, and routing them to the right team.",
        },
      },
      {
        name: { ar: "الحل والتصعيد", en: "Resolution & Escalation" },
        description: {
          ar: "معالجة التذكرة ضمن مستويات الدعم وتصعيدها عند الحاجة.",
          en: "Working the ticket through support tiers and escalating when needed.",
        },
        kpis: ["first-contact-resolution", "avg-resolution-time"],
      },
      {
        name: { ar: "قياس الرضا", en: "Satisfaction Measurement" },
        description: {
          ar: "إرسال استبيانات بعد الإغلاق وتحليل النتائج حسب السبب والقناة.",
          en: "Sending post-closure surveys and analysing results by reason and channel.",
        },
        kpis: ["csat"],
      },
    ],
    stakeholders: [
      {
        role: { ar: "مدير الدعم", en: "Support Manager" },
        cares: { ar: "الالتزام باتفاقية مستوى الخدمة وحجم الحمل لكل موظف.", en: "SLA compliance and load per agent." },
      },
      {
        role: { ar: "قائد الفريق", en: "Team Lead" },
        cares: { ar: "أداء الأفراد وأوقات الذروة.", en: "Individual performance and peak hours." },
      },
      {
        role: { ar: "مدير المنتج", en: "Product Manager" },
        cares: { ar: "أسباب التذاكر المتكررة كإشارة على عيوب المنتج.", en: "Recurring ticket reasons as a signal of product defects." },
      },
    ],
    sourceSystems: [
      {
        name: "Ticketing / Helpdesk",
        kind: { ar: "نظام تذاكر الدعم", en: "Helpdesk system" },
        entities: ["Ticket", "TicketEvent", "Agent", "Queue", "Category"],
      },
      {
        name: "CRM",
        kind: { ar: "إدارة علاقات العملاء", en: "Customer relationship management" },
        entities: ["Account", "Contact", "Interaction", "Case"],
      },
      {
        name: "Contact Center",
        kind: { ar: "نظام مركز الاتصال", en: "Contact centre platform" },
        entities: ["Call", "QueueTime", "TalkTime", "Disposition"],
      },
    ],
    glossary: [
      {
        term: "FCR",
        ar: "الحل من أول تواصل",
        definition: {
          ar: "نسبة التذاكر المحلولة دون تواصل لاحق حول الموضوع نفسه. تعريف «اللاحق» (نافذة 7 أو 14 يومًا) قرار داخلي يجب توثيقه.",
          en: "Share of tickets resolved without a follow-up contact on the same issue. What counts as follow-up (a 7- or 14-day window) is an internal decision that must be documented.",
        },
      },
      {
        term: "SLA",
        ar: "اتفاقية مستوى الخدمة",
        definition: {
          ar: "التزام تعاقدي بزمن استجابة أو حل محدد. يُقاس ضمن ساعات العمل المتفق عليها لا الساعات المطلقة.",
          en: "A contractual commitment on response or resolution time. Measured within agreed business hours, not wall-clock hours.",
        },
      },
      {
        term: "CSAT vs NPS",
        ar: "رضا العميل مقابل صافي الترشيح",
        definition: {
          ar: "CSAT يقيس الرضا عن تفاعل محدد، وNPS يقيس الاستعداد للترشيح عن العلاقة ككل. لا يُستبدل أحدهما بالآخر.",
          en: "CSAT measures satisfaction with a specific interaction; NPS measures willingness to recommend the overall relationship. They are not substitutes.",
        },
      },
      {
        term: "Backlog",
        ar: "المتراكم",
        definition: {
          ar: "عدد التذاكر المفتوحة في لحظة معينة. مؤشر لقطة لا يُجمع عبر الأيام.",
          en: "Open tickets at a point in time. A snapshot metric that does not sum across days.",
        },
      },
    ],
    questions: [
      { ar: "ما نسبة التذاكر التي تجاوزت اتفاقية مستوى الخدمة ولماذا؟", en: "What share of tickets breached SLA, and why?" },
      { ar: "ما الأسباب الأكثر تكرارًا للتواصل؟", en: "What are the most frequent contact reasons?" },
      { ar: "كيف يتوزع الحمل عبر ساعات اليوم وأيام الأسبوع؟", en: "How does load spread across hours and weekdays?" },
      { ar: "هل السرعة الأعلى ترافقها إعادة تواصل أكثر؟", en: "Does faster handling come with more repeat contacts?" },
    ],
    dashboardPages: [
      {
        name: { ar: "عمليات الدعم", en: "Support Operations" },
        audience: { ar: "مدير الدعم", en: "Support manager" },
        contents: {
          ar: "بطاقات الالتزام بـ SLA وFCR والمتراكم، مع خريطة حرارية للحمل بالساعة.",
          en: "Cards for SLA compliance, FCR, and backlog with an hourly load heatmap.",
        },
      },
      {
        name: { ar: "تحليل أسباب التذاكر", en: "Contact Reason Analysis" },
        audience: { ar: "إدارة المنتج", en: "Product management" },
        contents: {
          ar: "شجرة تفكيك للأسباب حسب الفئة والمنتج، مع اتجاه زمني للأسباب الصاعدة.",
          en: "A decomposition tree of reasons by category and product plus a trend of rising causes.",
        },
      },
    ],
    topKpis: ["first-response-time", "first-contact-resolution", "csat", "nps", "avg-resolution-time", "sla-achievement-rate"],
    patterns: ["kpi-card-multi", "heatmap-calendar", "decomposition-tree", "backlog-analysis", "exception-table"],
    scenarios: [
      {
        title: { ar: "الالتزام بـ SLA ممتاز والعملاء غاضبون", en: "SLA compliance is excellent and customers are angry" },
        situation: {
          ar: "التقرير يُظهر 96% التزامًا بينما شكاوى وسائل التواصل ترتفع.",
          en: "The report shows 96% compliance while social complaints rise.",
        },
        ask: { ar: "أين الخلل في القياس؟", en: "Where is the measurement failing?" },
        approach: {
          ar: "تحقق من ثلاثة أمور: هل يُقاس الالتزام على أول رد آلي بدل أول رد بشري؟ هل تُستثنى التذاكر المعاد فتحها؟ وهل المتوسط يخفي ذيلًا طويلًا؟ اعرض التوزيع (مئين 90 و95) لا المتوسط، وأضف FCR بجانب SLA.",
          en: "Check three things: is compliance measured on the first automated reply instead of the first human one, are reopened tickets excluded, and is an average hiding a long tail? Show the distribution (p90, p95) rather than the mean, and put FCR beside SLA.",
        },
      },
    ],
    relatedDomains: ["it-saas", "marketing", "hr"],
  },

  {
    id: "banking",
    slug: "banking",
    name: { ar: "البنوك والخدمات المالية", en: "Banking & Financial Services" },
    tagline: {
      ar: "المحفظة الائتمانية، وجودة الأصول، وربحية العميل.",
      en: "Credit portfolio, asset quality, and customer profitability.",
    },
    intro: {
      ar: "التقارير المصرفية تخضع لرقابة تنظيمية، وهذا يعني أن التعريفات ليست اختيارية دائمًا. الفرق الجوهري عن القطاعات الأخرى هو أن أغلب المؤشرات أرصدة لا تدفقات: محفظة القروض في نهاية الشهر ليست مجموع أرصدة الأيام. هذه نقطة الفشل الأولى في نماذج Power BI المصرفية.",
      en: "Banking reporting is regulated, so definitions are not always optional. The fundamental difference from other sectors is that most metrics are balances rather than flows: a month-end loan portfolio is not the sum of daily balances. This is the number-one failure point in banking Power BI models.",
    },
    overview: {
      ar: "النموذج يقوم على لقطات يومية أو شهرية للحسابات (Snapshot Fact) بالإضافة إلى جدول معاملات. المؤشرات المبنية على اللقطات شبه تجميعية وتحتاج دوال مثل LASTNONBLANKVALUE. انتبه أيضًا إلى العملات: المحفظة متعددة العملات تحتاج قرارًا واضحًا حول سعر الصرف المستخدم (تاريخي أم إقفال).",
      en: "The model uses daily or monthly account snapshots alongside a transaction table. Snapshot-based metrics are semi-additive and need functions such as LASTNONBLANKVALUE. Also mind currency: a multi-currency portfolio requires an explicit decision on which FX rate applies (historical or closing).",
    },
    accent: "#35CBC4",
    accentAlt: "#159C96",
    icon: "Banknote",
    difficulty: "advanced",
    estMinutes: 42,
    tags: [
      { ar: "الائتمان", en: "Credit" },
      { ar: "المخاطر", en: "Risk" },
      { ar: "ربحية العميل", en: "Customer profitability" },
    ],
    processes: [
      {
        name: { ar: "منح الائتمان", en: "Credit Origination" },
        description: {
          ar: "من الطلب إلى التقييم الائتماني إلى الصرف، مع قياس معدل القبول وزمن المعالجة.",
          en: "From application to credit assessment to disbursement, measuring approval rate and processing time.",
        },
      },
      {
        name: { ar: "إدارة المحفظة والتحصيل", en: "Portfolio & Collections" },
        description: {
          ar: "متابعة التعثر والتأخر في السداد وتصنيف مراحل المخاطر.",
          en: "Tracking delinquency and default and classifying risk stages.",
        },
        kpis: ["npl-ratio"],
      },
      {
        name: { ar: "إدارة الودائع والسيولة", en: "Deposits & Liquidity" },
        description: {
          ar: "متابعة نمو الودائع وتكلفتها ونسبة القروض إلى الودائع.",
          en: "Tracking deposit growth, its cost, and the loan-to-deposit ratio.",
        },
      },
    ],
    stakeholders: [
      {
        role: { ar: "مدير المخاطر", en: "Chief Risk Officer" },
        cares: { ar: "جودة الأصول والتركزات الائتمانية.", en: "Asset quality and credit concentration." },
      },
      {
        role: { ar: "مدير التجزئة المصرفية", en: "Retail Banking Head" },
        cares: { ar: "نمو المنتجات وربحية العميل وتكلفة الاستحواذ.", en: "Product growth, customer profitability, and acquisition cost." },
      },
      {
        role: { ar: "الالتزام والرقابة", en: "Compliance" },
        cares: { ar: "دقة التقارير التنظيمية وقابلية تتبعها.", en: "Regulatory report accuracy and traceability." },
      },
    ],
    sourceSystems: [
      {
        name: "Core Banking",
        kind: { ar: "النظام المصرفي الأساسي", en: "Core banking system" },
        entities: ["Account", "AccountSnapshot", "Transaction", "Customer", "Product"],
      },
      {
        name: "Loan Origination",
        kind: { ar: "نظام منح الائتمان", en: "Loan origination system" },
        entities: ["Application", "Decision", "Collateral", "Disbursement"],
      },
      {
        name: "Risk Engine",
        kind: { ar: "نظام تصنيف المخاطر", en: "Risk rating engine" },
        entities: ["Rating", "Provision", "Stage", "DelinquencyBucket"],
      },
    ],
    glossary: [
      {
        term: "NPL",
        ar: "القروض غير العاملة",
        definition: {
          ar: "القروض المتأخرة عادة أكثر من 90 يومًا أو المصنفة متعثرة. العتبة والتصنيف يخضعان لتعليمات الجهة الرقابية في كل دولة.",
          en: "Loans typically more than 90 days past due or classified as impaired. The threshold and classification follow each jurisdiction regulator.",
        },
      },
      {
        term: "NIM",
        ar: "صافي هامش الفائدة",
        definition: {
          ar: "الفرق بين عائد الأصول وتكلفة الأموال منسوبًا إلى متوسط الأصول المدرة. مقياس ربحية أساسي في البنوك.",
          en: "The spread between asset yield and funding cost relative to average earning assets. A core bank profitability measure.",
        },
      },
      {
        term: "Snapshot Fact",
        ar: "جدول اللقطات",
        definition: {
          ar: "جدول حقائق يسجل رصيد كل حساب في نهاية كل يوم أو شهر. أساسي في البنوك لأن الرصيد لا يُشتق من المعاملات بسهولة.",
          en: "A fact table recording each account balance at the end of every day or month. Essential in banking because balances are not easily derived from transactions.",
        },
      },
      {
        term: "Vintage Analysis",
        ar: "تحليل الأفواج",
        definition: {
          ar: "تتبع أداء القروض حسب شهر المنح لمقارنة جودة الإقراض عبر الزمن بشكل عادل.",
          en: "Tracking loan performance by origination month to compare lending quality across time fairly.",
        },
      },
    ],
    questions: [
      { ar: "كيف تطورت جودة المحفظة حسب فوج المنح؟", en: "How has portfolio quality evolved by origination vintage?" },
      { ar: "أين تتركز المخاطر جغرافيًا وقطاعيًا؟", en: "Where is risk concentrated geographically and by sector?" },
      { ar: "ما ربحية العميل بعد تحميل تكلفة الخدمة؟", en: "What is customer profitability after loading cost to serve?" },
      { ar: "ما أثر تغيّر أسعار الفائدة على صافي الهامش؟", en: "What is the impact of rate changes on net interest margin?" },
    ],
    dashboardPages: [
      {
        name: { ar: "لوحة جودة الأصول", en: "Asset Quality" },
        audience: { ar: "إدارة المخاطر", en: "Risk management" },
        contents: {
          ar: "نسبة NPL واتجاهها، ومصفوفة أعمار التأخر، وتحليل الأفواج.",
          en: "NPL ratio and trend, a delinquency ageing matrix, and vintage analysis.",
        },
      },
      {
        name: { ar: "نمو المحفظة", en: "Portfolio Growth" },
        audience: { ar: "إدارة الأعمال", en: "Business leadership" },
        contents: {
          ar: "أرصدة نهاية الفترة حسب المنتج والفرع، مع رسم شلالي لحركة المحفظة.",
          en: "Period-end balances by product and branch with a waterfall of portfolio movement.",
        },
      },
    ],
    topKpis: ["npl-ratio", "delinquency-rate", "cost-to-income-ratio", "nim", "loan-to-deposit-ratio", "cac"],
    patterns: ["kpi-card", "inventory-aging-matrix", "waterfall-variance", "pl-matrix", "period-over-period"],
    scenarios: [
      {
        title: { ar: "نسبة NPL تتحسن بينما المتعثرون يزدادون", en: "The NPL ratio improves while defaults increase" },
        situation: {
          ar: "انخفضت نسبة القروض غير العاملة من 4.2% إلى 3.6% رغم ارتفاع عدد الحسابات المتعثرة.",
          en: "The NPL ratio fell from 4.2% to 3.6% even though the number of defaulted accounts rose.",
        },
        ask: { ar: "أي الرقمين يعكس الواقع؟", en: "Which number reflects reality?" },
        approach: {
          ar: "كلاهما صحيح رياضيًا. النسبة لها مقام ينمو: إذا زادت المحفظة بسرعة أكبر من زيادة المتعثرات فالنسبة تنخفض. هذه ظاهرة معروفة عند التوسع السريع في الإقراض لأن القروض الجديدة لم تتقادم بعد. اعرض البسط والمقام معًا وأضف تحليل أفواج.",
          en: "Both are mathematically true. The ratio has a growing denominator: if the portfolio grows faster than defaults, the ratio falls. This is a known effect during rapid lending growth because new loans have not yet aged. Show numerator and denominator together and add a vintage view.",
        },
      },
    ],
    relatedDomains: ["finance", "customer-service", "marketing"],
  },

  {
    id: "it-saas",
    slug: "it-saas",
    name: { ar: "تقنية المعلومات والبرمجيات كخدمة", en: "IT & SaaS" },
    tagline: {
      ar: "الإيراد المتكرر، والاحتفاظ، وموثوقية الخدمة.",
      en: "Recurring revenue, retention, and service reliability.",
    },
    intro: {
      ar: "نموذج الاشتراك يغيّر طريقة قراءة الأرقام تمامًا. الإيراد لم يعد حدثًا بل تدفقًا مستمرًا، والعميل المكتسب اليوم يظل يولّد إيرادًا لسنوات. لذلك مؤشرات مثل MRR والاحتفاظ الصافي أهم بكثير من إجمالي المبيعات الشهرية.",
      en: "A subscription model changes how numbers read. Revenue stops being an event and becomes a flow, and a customer acquired today keeps generating revenue for years. That makes metrics like MRR and net revenue retention far more meaningful than monthly sales totals.",
    },
    overview: {
      ar: "النموذج يقوم على جدول اشتراكات بفترات صلاحية (تاريخ بداية ونهاية لكل خطة)، وهذا يتطلب توسيعه إلى جدول شهري لحساب MRR بشكل صحيح. الفخ الشائع هو حساب MRR من الفواتير: العميل السنوي يدفع مرة واحدة فتظهر قفزة وهمية ثم أحد عشر شهرًا من الصفر.",
      en: "The model is built on a subscription table with validity periods (start and end date per plan), which must be expanded into a monthly table to compute MRR correctly. The common trap is deriving MRR from invoices: an annual customer pays once, producing a fake spike followed by eleven months of zero.",
    },
    accent: "#8FCC5A",
    accentAlt: "#619B2E",
    icon: "Server",
    difficulty: "intermediate",
    estMinutes: 34,
    tags: [
      { ar: "إيراد متكرر", en: "Recurring revenue" },
      { ar: "الاحتفاظ", en: "Retention" },
      { ar: "الموثوقية", en: "Reliability" },
    ],
    processes: [
      {
        name: { ar: "الاشتراك والتفعيل", en: "Subscription & Onboarding" },
        description: {
          ar: "من التسجيل إلى الاستخدام الفعلي، وقياس زمن الوصول إلى القيمة الأولى.",
          en: "From sign-up to real usage, measuring time to first value.",
        },
        kpis: ["mrr", "cac"],
      },
      {
        name: { ar: "التوسع والتجديد", en: "Expansion & Renewal" },
        description: {
          ar: "ترقية الخطط وزيادة المقاعد والتجديد السنوي.",
          en: "Plan upgrades, seat expansion, and annual renewal.",
        },
        kpis: ["nrr", "churn-rate"],
      },
      {
        name: { ar: "تشغيل المنصة", en: "Platform Operations" },
        description: {
          ar: "مراقبة التوفر وزمن الاستجابة والحوادث.",
          en: "Monitoring uptime, latency, and incidents.",
        },
      },
    ],
    stakeholders: [
      {
        role: { ar: "الرئيس التنفيذي للإيرادات", en: "Chief Revenue Officer" },
        cares: { ar: "نمو MRR والاحتفاظ الصافي.", en: "MRR growth and net revenue retention." },
      },
      {
        role: { ar: "مدير نجاح العملاء", en: "Customer Success Manager" },
        cares: { ar: "إشارات الفقد المبكر ومستوى الاستخدام.", en: "Early churn signals and usage depth." },
      },
      {
        role: { ar: "مدير الهندسة", en: "Engineering Manager" },
        cares: { ar: "التوفر وزمن الإصلاح وعدد الحوادث.", en: "Uptime, time to restore, and incident count." },
      },
    ],
    sourceSystems: [
      {
        name: "Billing / Subscriptions",
        kind: { ar: "نظام الاشتراكات والفوترة", en: "Subscription billing" },
        entities: ["Subscription", "Plan", "Invoice", "SubscriptionEvent", "Seat"],
      },
      {
        name: "Product Analytics",
        kind: { ar: "تحليلات استخدام المنتج", en: "Product analytics" },
        entities: ["UsageEvent", "Feature", "Account", "ActiveUser"],
      },
      {
        name: "Observability",
        kind: { ar: "نظام مراقبة الخدمة", en: "Observability platform" },
        entities: ["Incident", "Uptime", "Latency", "ErrorRate"],
      },
    ],
    glossary: [
      {
        term: "MRR / ARR",
        ar: "الإيراد المتكرر الشهري / السنوي",
        definition: {
          ar: "الإيراد المتكرر المطبّع لشهر أو سنة. الاشتراك السنوي يُقسم على 12 لحساب MRR بدل تسجيله دفعة واحدة.",
          en: "Recurring revenue normalised to a month or year. An annual subscription is divided by 12 for MRR rather than booked in one lump.",
        },
      },
      {
        term: "NRR",
        ar: "الاحتفاظ الصافي بالإيراد",
        definition: {
          ar: "إيراد نفس مجموعة العملاء بعد سنة مقارنة ببدايتها، شاملًا التوسع والتقليص والفقد. فوق 100% يعني نموًا من العملاء الحاليين وحدهم.",
          en: "Revenue from the same customer cohort after a year versus its start, including expansion, contraction, and churn. Above 100% means growth from existing customers alone.",
        },
      },
      {
        term: "Logo vs Revenue Churn",
        ar: "فقد العملاء مقابل فقد الإيراد",
        definition: {
          ar: "فقد العملاء يعد الحسابات، وفقد الإيراد يزنها بقيمتها. فقدان عميل صغير وعميل كبير ليسا سواء.",
          en: "Logo churn counts accounts; revenue churn weights them by value. Losing a small customer and a large one are not equivalent.",
        },
      },
      {
        term: "Uptime",
        ar: "نسبة التوفر",
        definition: {
          ar: "نسبة الوقت الذي كانت فيه الخدمة متاحة. تعريف «متاحة» ونافذة القياس يحددان الرقم أكثر من الأداء الفعلي.",
          en: "The share of time the service was available. The definition of available and the measurement window drive the number more than actual performance.",
        },
      },
    ],
    questions: [
      { ar: "كم من نمو MRR جاء من عملاء جدد مقابل توسع الحاليين؟", en: "How much MRR growth came from new customers versus expansion?" },
      { ar: "ما الأفواج التي تُظهر أعلى معدل فقد في أول 90 يومًا؟", en: "Which cohorts churn most in the first 90 days?" },
      { ar: "هل عمق الاستخدام يتنبأ بالتجديد؟", en: "Does usage depth predict renewal?" },
      { ar: "ما أثر الحوادث التشغيلية على الفقد؟", en: "What is the effect of operational incidents on churn?" },
    ],
    dashboardPages: [
      {
        name: { ar: "حركة الإيراد المتكرر", en: "Recurring Revenue Movement" },
        audience: { ar: "الإدارة التنفيذية", en: "Executive team" },
        contents: {
          ar: "رسم شلالي يفكك تغيّر MRR إلى جديد وتوسع وتقليص وفقد.",
          en: "A waterfall decomposing MRR change into new, expansion, contraction, and churn.",
        },
      },
      {
        name: { ar: "تحليل الأفواج", en: "Cohort Analysis" },
        audience: { ar: "نجاح العملاء", en: "Customer success" },
        contents: {
          ar: "مصفوفة احتفاظ بالفوج والشهر، مع تنسيق شرطي متدرج.",
          en: "A cohort-by-month retention matrix with a graded conditional format.",
        },
      },
    ],
    topKpis: ["mrr", "arr", "churn-rate", "nrr", "availability", "mttr"],
    patterns: ["waterfall-variance", "kpi-card-multi", "pl-matrix", "period-over-period", "backlog-analysis"],
    scenarios: [
      {
        title: { ar: "MRR ينمو والعملاء ينخفضون", en: "MRR grows while customer count falls" },
        situation: {
          ar: "الإيراد المتكرر نما 8% بينما انخفض عدد الحسابات 3%.",
          en: "Recurring revenue grew 8% while account count dropped 3%.",
        },
        ask: { ar: "هل هذه إشارة جيدة أم خطر مؤجل؟", en: "Is this a good signal or deferred risk?" },
        approach: {
          ar: "هذا نمط شائع: فقد عملاء صغار مع توسع كبار. اعرض فقد العملاء وفقد الإيراد منفصلين، وحلّل الفقد حسب حجم الحساب. الخطر أن قاعدة الإيراد تتركز في عملاء أقل، فأضف مؤشر تركز (نسبة أكبر 10 عملاء من MRR).",
          en: "This is a common pattern: losing small accounts while large ones expand. Show logo churn and revenue churn separately and break churn down by account size. The risk is that the revenue base is concentrating in fewer customers, so add a concentration metric (top-10 share of MRR).",
        },
      },
    ],
    relatedDomains: ["customer-service", "marketing", "project-management"],
  },
];

export const domainById = new Map(domains.map((d) => [d.id, d]));
export const domainBySlug = new Map(domains.map((d) => [d.slug, d]));

export function getDomain(slug: string): Domain | undefined {
  return domainBySlug.get(slug);
}
