import type { Kpi } from "../types";

export const healthcareKpis: Kpi[] = [
  {
    id: "bed-occupancy-rate",
    slug: "bed-occupancy-rate",
    name: "Bed Occupancy Rate",
    nameAr: "معدل إشغال الأسرّة",
    domains: ["healthcare"],
    category: { ar: "الطاقة الاستيعابية", en: "Capacity" },
    difficulty: "beginner",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة أيام الأسرّة المشغولة بمرضى منوَّمين إلى أيام الأسرّة المتاحة للتنويم خلال الفترة. يوم السرير يعني سريرًا واحدًا ليوم واحد، فجناح فيه 100 سرير متاح لمدة 30 يومًا يملك 3,000 يوم سرير متاح.",
      en: "The ratio of inpatient bed-days occupied to inpatient bed-days available during the period. A bed-day is one bed for one day, so a ward with 100 available beds over 30 days has 3,000 available bed-days.",
    },
    whyItMatters: {
      ar: "هو المقياس الأساسي لاستخدام الطاقة الاستيعابية للتنويم. الإشغال المنخفض يعني طاقة معطلة وتكلفة ثابتة بلا عائد، والإشغال المرتفع جدًا يعني أن المنشأة تفقد مرونتها: تأخر في نقل المرضى من الطوارئ، وإلغاء عمليات مجدولة، وضغط على الطاقم.",
      en: "It is the core measure of inpatient capacity use. Low occupancy means idle capacity and fixed cost with no return; very high occupancy means the facility loses its slack: delayed transfers from the emergency department, cancelled elective procedures, and strain on staff.",
    },
    interpretation: {
      ar: "إشغال 70% في الشهر هو متوسط لأيام قد يكون بعضها عند 95% وبعضها عند 50%. المتوسط الشهري يخفي ذروات الأيام وساعات اليوم، ولذلك يُقرأ مع أعلى إشغال يومي ومع التوزيع حسب الجناح، لا كرقم واحد للمنشأة.",
      en: "A monthly occupancy of 70% averages days that may sit at 95% and others at 50%. The monthly figure hides daily and hourly peaks, so it should be read alongside peak daily occupancy and the split by ward, not as one number for the whole facility.",
    },
    formula: "Bed Occupancy % = Inpatient Bed-Days Occupied / Available Inpatient Bed-Days x 100",
    numerator: {
      ar: "أيام الأسرّة المشغولة: مجموع الإحصاء اليومي للمرضى المنوَّمين (عادة عند منتصف الليل) عبر أيام الفترة، وفق قاعدة العد المعتمدة لدى المنشأة.",
      en: "Occupied bed-days: the daily inpatient census (commonly taken at midnight) summed across the days of the period, under the facility's agreed counting rule.",
    },
    denominator: {
      ar: "أيام الأسرّة المتاحة: عدد الأسرّة المتاحة للتنويم في كل يوم مجموعًا عبر الفترة، بعد خصم الإغلاقات المؤقتة إن كانت هذه سياسة المنشأة. يجب تحديد ما إذا كانت الأسرّة المرخّصة أم المجهّزة بطاقم هي الأساس.",
      en: "Available bed-days: the number of beds available for inpatients each day, summed over the period, net of temporary closures if that is the facility policy. Whether licensed or staffed beds form the base must be stated explicitly.",
    },
    timeGrain: {
      ar: "يُحسب يوميًا من الإحصاء اليومي ويُعرض أسبوعيًا أو شهريًا. التجميع الشهري يجب أن يكون من مجموع أيام الأسرّة لا من متوسط النسب اليومية.",
      en: "Computed daily from the census and reported weekly or monthly. Monthly roll-up must come from summed bed-days, not from averaging daily percentages.",
    },
    direction: {
      rising: {
        ar: "ارتفاع الإشغال قد يعني طلبًا أعلى، أو إقامات أطول، أو تأخرًا في الخروج، أو إغلاق أسرّة خفّض المقام.",
        en: "Rising occupancy can mean higher demand, longer stays, delayed discharges, or bed closures that shrank the denominator.",
      },
      falling: {
        ar: "انخفاضه قد يعني طلبًا أقل، أو تحسّنًا في تدفق المرضى وتقصير الإقامة، أو إضافة أسرّة جديدة، أو تحوّل حالات إلى رعاية نهارية.",
        en: "Falling occupancy can mean lower demand, better patient flow and shorter stays, newly added beds, or a shift of cases to day care.",
      },
      caveat: {
        ar: "لا يوجد اتجاه جيد مطلقًا. الإشغال المرتفع ليس كفاءة بالضرورة بل قد يكون علامة على اختناق، والمستوى المستهدف قرار تخطيطي لكل منشأة وجناح لا معيار عام. اقرأه دائمًا مع متوسط مدة الإقامة وزمن انتظار الطوارئ.",
        en: "There is no universally good direction. High occupancy is not necessarily efficiency and may signal a bottleneck; the target level is a planning decision per facility and ward, not a general standard. Always read it with average length of stay and emergency waiting time.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "أسرّة التنويم المتاحة", en: "Available inpatient beds" }, value: "100" },
        { label: { ar: "عدد أيام الفترة", en: "Days in the period" }, value: "30" },
        { label: { ar: "أيام الأسرّة المشغولة (مجموع الإحصاء اليومي)", en: "Occupied bed-days (summed daily census)" }, value: "2,100" },
      ],
      steps: [
        { label: { ar: "أيام الأسرّة المتاحة", en: "Available bed-days" }, expression: "100 × 30 = 3,000" },
        { label: { ar: "معدل الإشغال", en: "Occupancy rate" }, expression: "2,100 ÷ 3,000 × 100 = 70%" },
      ],
      result: { label: { ar: "معدل إشغال الأسرّة", en: "Bed occupancy rate" }, value: "70%" },
      reading: {
        ar: "في المتوسط كان 70 سريرًا من كل 100 مشغولًا. هذا لا يخبرك إن كانت هناك أيام امتلأ فيها الجناح بالكامل، ولذلك يُعرض معه أعلى إشغال يومي.",
        en: "On average 70 of every 100 beds were occupied. This does not tell you whether the ward was completely full on some days, which is why peak daily occupancy is shown alongside.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "الإشغال من جدول الإحصاء اليومي مع أعلى إشغال يومي", en: "Occupancy from a daily census table, with peak daily occupancy" },
        code: `-- 'BedCensus' holds one row per unit per day.
-- Summing a daily count across days yields bed-days, so both sides are additive.
Occupied Bed-Days :=
SUM ( 'BedCensus'[OccupiedBeds] )

Available Bed-Days :=
SUM ( 'BedCensus'[AvailableBeds] )

-- Ratio of sums: never average the daily percentages.
Bed Occupancy % :=
DIVIDE ( [Occupied Bed-Days], [Available Bed-Days] )

-- The busiest single day in the current filter context.
-- Context transition evaluates the ratio once per date.
Peak Daily Occupancy % :=
MAXX (
    VALUES ( 'Date'[Date] ),
    [Bed Occupancy %]
)`,
        assumptions: [
          {
            ar: "'BedCensus' بحبيبية وحدة واحدة ليوم واحد، وOccupiedBeds هو الإحصاء عند نقطة العد المعتمدة (غالبًا منتصف الليل). مرضى يدخلون ويخرجون في نفس اليوم قد لا يظهرون في إحصاء منتصف الليل.",
            en: "'BedCensus' is at one unit per day, and OccupiedBeds is the census at the agreed count point (often midnight). Patients admitted and discharged the same day may not appear in a midnight census.",
          },
          {
            ar: "AvailableBeds يعكس الأسرّة المتاحة فعليًا في ذلك اليوم بعد خصم الإغلاقات المؤقتة، ويجب أن يُحمّل من سجل حالة الأسرّة لا من السعة الاسمية الثابتة.",
            en: "AvailableBeds reflects beds actually available that day net of temporary closures, and must be loaded from a bed-status log rather than from a fixed nominal capacity.",
          },
          {
            ar: "أسرّة الملاحظة والعناية النهارية مستبعدة من الجدول أو مميزة بعمود نوع السرير، ويُرشَّح عليها بشكل موحّد في البسط والمقام.",
            en: "Observation and day-care beds are either excluded from the table or flagged by a bed-type column, and filtered identically in numerator and denominator.",
          },
          {
            ar: "جدول 'Date' مرتبط بـ BedCensus[CensusDate] بعلاقة واحد إلى متعدد.",
            en: "'Date' relates one-to-many to BedCensus[CensusDate].",
          },
        ],
        requires: ["BedCensus[OccupiedBeds]", "BedCensus[AvailableBeds]", "BedCensus[CensusDate]", "Date[Date]"],
      },
    ],
    model: [
      {
        table: "BedCensus",
        grain: { ar: "وحدة (جناح) واحدة ليوم واحد", en: "One unit (ward) per day" },
        columns: ["CensusDate", "UnitId", "BedType", "OccupiedBeds", "AvailableBeds", "ClosedBeds"],
        role: { ar: "جدول الحقائق الأساسي: لقطة يومية يُجمع منها أيام الأسرّة", en: "Primary fact: a daily snapshot from which bed-days are summed" },
      },
      {
        table: "Unit",
        grain: { ar: "جناح أو وحدة سريرية واحدة", en: "One ward or clinical unit" },
        columns: ["UnitId", "UnitName", "Specialty", "Facility", "LicensedBeds"],
        role: { ar: "التقسيم حسب الجناح والمنشأة كما يطلب التقرير", en: "Slicing by ward and facility, as the report requires" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "WeekKey", "MonthKey", "DayOfWeek"],
        role: { ar: "يُربط بـ CensusDate ويسمح بحساب الذروة اليومية", en: "Related to CensusDate; enables the daily peak calculation" },
      },
    ],
    visuals: [
      {
        pattern: "period-over-period",
        why: {
          ar: "الاتجاه عبر الزمن لكل جناح ومنشأة هو ما يقترحه المرجع، ويكشف الموسمية والتغيرات بعد إغلاق أسرّة أو افتتاحها.",
          en: "The trend over time by ward and facility is what the source recommends, and it exposes seasonality and shifts after beds close or open.",
        },
      },
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "الإشغال المتوسط مع أعلى إشغال يومي ومتوسط مدة الإقامة في بطاقة واحدة يمنع قراءة المتوسط كأنه الوضع اليومي.",
          en: "Average occupancy with peak daily occupancy and average length of stay in one card stops the average being read as the daily reality.",
        },
      },
      {
        pattern: "heatmap-calendar",
        why: {
          ar: "خريطة حرارية لليوم مقابل الجناح تُظهر أيام الذروة المتكررة (مثل بداية الأسبوع) التي يخفيها المتوسط الشهري.",
          en: "A day-by-ward heatmap reveals recurring peak days (such as the start of the week) that the monthly average hides.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عدم توحيد تعريف السرير المتاح: المرخّص مقابل المجهّز بطاقم. الفرق قد يغير النسبة بعشرات النقاط ويجعل المقارنة بين المنشآت بلا معنى.",
        en: "Not standardizing what an available bed is: licensed versus staffed. The difference can shift the rate by tens of points and makes cross-facility comparison meaningless.",
      },
      {
        ar: "تجاهل الإغلاقات المؤقتة (صيانة، نقص طاقم، عزل). إن بقيت في المقام انخفض الإشغال زورًا وبدا الجناح أقل ضغطًا مما هو عليه.",
        en: "Ignoring temporary closures (maintenance, staff shortage, isolation). Left in the denominator, they falsely lower occupancy and make the ward look less pressured than it is.",
      },
      {
        ar: "خلط أسرّة الملاحظة أو الرعاية النهارية أو المرضى المنتظرين في الممرات مع أسرّة التنويم في أحد الطرفين دون الآخر، مما قد يدفع النسبة فوق 100%.",
        en: "Mixing observation beds, day-care beds, or patients waiting in corridors into one side of the ratio but not the other, which can push the rate above 100%.",
      },
      {
        ar: "حساب متوسط النسب اليومية أو نسب الأجنحة للوصول إلى رقم المنشأة. جناح صغير يزن مثل جناح كبير؛ الصحيح هو مجموع أيام الأسرّة المشغولة على مجموع المتاحة.",
        en: "Averaging daily or ward percentages to reach a facility figure. A small ward weighs as much as a large one; the correct approach is total occupied bed-days over total available.",
      },
      {
        ar: "الاكتفاء بإحصاء منتصف الليل. قد يُظهر الإشغال مريحًا بينما تمتلئ الأسرّة فعليًا في ساعات الظهيرة حين تتزامن حالات الدخول مع تأخر الخروج.",
        en: "Relying on the midnight census alone. It can show comfortable occupancy while beds are actually full at midday, when admissions coincide with delayed discharges.",
      },
    ],
    variants: [
      {
        label: { ar: "الإشغال على الأسرّة المرخّصة", en: "Occupancy on licensed beds" },
        formula: "Occupied Bed-Days / (Licensed Beds x Days in Period)",
        difference: {
          ar: "مقام ثابت يسهل حسابه ومقارنته عبر الزمن، لكنه لا يعكس الأسرّة المغلقة لنقص الطاقم فيُظهر إشغالًا أقل من الواقع التشغيلي.",
          en: "A fixed denominator that is easy to compute and compare over time, but it ignores beds closed for lack of staff and so understates operational occupancy.",
        },
      },
      {
        label: { ar: "الإشغال بالساعات من سجل حركة المرضى", en: "Hourly occupancy from admission-discharge-transfer events" },
        formula: "Sum of occupied bed-hours / Sum of available bed-hours",
        difference: {
          ar: "يُحسب من أحداث الدخول والنقل والخروج بدل إحصاء لحظة واحدة، فيلتقط الحالات القصيرة والذروات داخل اليوم، لكنه يتطلب بيانات زمنية دقيقة ونموذجًا أثقل.",
          en: "Built from admission, transfer, and discharge events instead of a single point-in-time count, so it captures short stays and intraday peaks, but it needs accurate timestamps and a heavier model.",
        },
      },
      {
        label: { ar: "الإشغال في لحظة (لقطة حالية)", en: "Point-in-time occupancy" },
        formula: "Beds occupied now / Beds available now",
        difference: {
          ar: "مؤشر تشغيلي لإدارة الأسرّة الحية لا لتقارير الأداء. لا يُجمع عبر الزمن ولا يصلح للمقارنة الشهرية.",
          en: "An operational measure for live bed management, not performance reporting. It does not aggregate over time and is not suited to monthly comparison.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "مجموع الإحصاء اليومي عبر أيام الفترة يساوي أيام الأسرّة المشغولة، ولذلك يمكن جمع البسط والمقام عبر الأيام والأجنحة ثم القسمة، بينما لا يمكن جمع النسب نفسها.",
          en: "Summing the daily census across the period equals occupied bed-days, so numerator and denominator can be summed across days and wards before dividing, whereas the percentages themselves cannot.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "احتساب الإشغال من إحصاء منتصف الليل ممارسة شائعة في أنظمة المستشفيات، لكنها ليست الطريقة الوحيدة.",
          en: "Computing occupancy from a midnight census is a common practice in hospital systems, but it is not the only method.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "تعريف السرير المتاح، ومعاملة الإغلاقات المؤقتة وأسرّة الملاحظة، ومستوى الإشغال المستهدف — كلها قرارات لكل منشأة أو جهة تنظيمية.",
          en: "The definition of an available bed, the treatment of temporary closures and observation beds, and the target occupancy level are decisions for each facility or regulator.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (2,100 من 3,000 يوم سرير) من تأليفنا للتوضيح ولا تمثل منشأة حقيقية ولا مستوى إشغال موصى به.",
          en: "The example figures (2,100 of 3,000 bed-days) are invented for illustration and represent neither a real facility nor a recommended occupancy level.",
        },
      },
    ],
    related: ["average-length-of-stay", "ed-waiting-time", "readmission-rate-30d"],
    exercise: {
      prompt: {
        ar: "جناح فيه 40 سريرًا مرخّصًا خلال شهر من 31 يومًا. أُغلقت 8 أسرّة لمدة 10 أيام بسبب الصيانة. مجموع الإحصاء اليومي للمرضى 986 يوم سرير. احسب الإشغال على الأسرّة المتاحة فعليًا، ثم على الأسرّة المرخّصة، وفسّر الفرق.",
        en: "A ward has 40 licensed beds over a 31-day month. Eight beds were closed for 10 days for maintenance. The summed daily census is 986 bed-days. Compute occupancy on actually available beds, then on licensed beds, and explain the difference.",
      },
      hint: {
        ar: "أيام الأسرّة المتاحة = (الأسرّة × الأيام) − (الأسرّة المغلقة × أيام الإغلاق).",
        en: "Available bed-days = (beds x days) - (closed beds x closure days).",
      },
      answer: {
        ar: "أيام الأسرّة المرخّصة = 40 × 31 = 1,240. أيام الإغلاق = 8 × 10 = 80. أيام الأسرّة المتاحة = 1,240 − 80 = 1,160. الإشغال على المتاح = 986 ÷ 1,160 = 85.0%. الإشغال على المرخّص = 986 ÷ 1,240 = 79.5%. الفرق 5.5 نقطة سببه الإغلاق وحده: الجناح كان تحت ضغط أعلى مما يظهره الرقم المرخّص. لذلك يجب أن يذكر التقرير أي مقام استُخدم.",
        en: "Licensed bed-days = 40 x 31 = 1,240. Closed bed-days = 8 x 10 = 80. Available bed-days = 1,240 - 80 = 1,160. Occupancy on available = 986 ÷ 1,160 = 85.0%. Occupancy on licensed = 986 ÷ 1,240 = 79.5%. The 5.5-point gap comes from the closure alone: the ward was under more pressure than the licensed figure shows, so the report must state which denominator it uses.",
      },
    },
    references: [
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع القسمة الآمنة التي تعيد قيمة فارغة عند غياب أسرّة متاحة بدل خطأ القسمة على صفر.",
          en: "Reference for safe division that returns blank when there are no available beds instead of a divide-by-zero error.",
        },
      },
      {
        title: "MAXX function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/maxx-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع حساب أعلى قيمة لتعبير عبر جدول، المستخدم لإيجاد أعلى إشغال يومي.",
          en: "Reference for taking the maximum of an expression over a table, used to find peak daily occupancy.",
        },
      },
    ],
  },

  {
    id: "readmission-rate-30d",
    slug: "readmission-rate-30d",
    name: "30-Day Readmission Rate",
    nameAr: "معدل إعادة الدخول خلال 30 يومًا",
    domains: ["healthcare"],
    category: { ar: "جودة الرعاية", en: "Care quality" },
    difficulty: "advanced",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة حالات الخروج المؤهلة التي تبعها دخول غير مخطط له خلال 30 يومًا من تاريخ الخروج، وفق تعريف قياس معتمد يحدد الحالات المؤهلة والاستثناءات وما يُعد دخولًا غير مخطط.",
      en: "The share of eligible discharges followed by an unplanned admission within 30 days of discharge, under an approved measure definition that sets eligible cases, exclusions, and what counts as unplanned.",
    },
    whyItMatters: {
      ar: "يُستخدم لمراجعة جودة الرعاية وجودة الانتقال من المستشفى إلى المنزل أو الرعاية اللاحقة: خطة الخروج، والأدوية، والمتابعة. كما أنه الضابط المقابل لمدة الإقامة، فتقصير الإقامة الذي يرفع إعادة الدخول ليس تحسنًا.",
      en: "It supports review of care quality and of the transition from hospital to home or follow-on care: discharge planning, medication, and follow-up. It is also the counterweight to length of stay, since shortening stays in a way that raises readmissions is not an improvement.",
    },
    interpretation: {
      ar: "معدل 5% يعني أن 5 من كل 100 حالة خروج مؤهلة عادت بدخول غير مخطط خلال 30 يومًا. هذا الرقم الخام يتأثر بشدة بمزيج المرضى: قسم يعالج مرضى أكبر سنًا وأكثر أمراضًا مزمنة سيُظهر معدلًا أعلى دون أن تكون رعايته أسوأ، ولذلك تُعرض المقارنات مع سياق تعديل المخاطر.",
      en: "A 5% rate means 5 of every 100 eligible discharges returned with an unplanned admission within 30 days. The raw figure depends heavily on patient mix: a service treating older patients with more chronic disease will show a higher rate without its care being worse, so comparisons are shown with risk-adjustment context.",
    },
    formula: "30-Day Readmission % = Eligible Discharges Followed by an Unplanned Readmission Within 30 Days / Eligible Discharges x 100",
    numerator: {
      ar: "عدد حالات الخروج المؤهلة (حالات الخروج المرجعية) التي تبعها دخول غير مخطط واحد على الأقل خلال 30 يومًا. يُعد الخروج المرجعي مرة واحدة حتى لو تبعه أكثر من دخول.",
      en: "Eligible (index) discharges followed by at least one unplanned admission within 30 days. Each index discharge counts once even if more than one admission follows it.",
    },
    denominator: {
      ar: "حالات الخروج المؤهلة وفق تعريف القياس، بعد الاستثناءات المتفق عليها (مثل الوفاة داخل المستشفى، أو الخروج ضد المشورة الطبية، أو النقل إلى منشأة أخرى) حسب ما ينص عليه التعريف المعتمد.",
      en: "Eligible discharges under the measure definition, after the agreed exclusions (such as in-hospital death, discharge against medical advice, or transfer to another facility) as the approved definition specifies.",
    },
    timeGrain: {
      ar: "شهري أو ربع سنوي حسب تاريخ الخروج المرجعي. الأيام الثلاثون الأخيرة قبل تاريخ البيانات غير مكتملة لأن نافذة المتابعة لم تُغلق بعد، ويجب استبعادها أو تمييزها.",
      en: "Monthly or quarterly by index discharge date. The last 30 days before the data date are incomplete because the follow-up window has not closed, and must be excluded or flagged.",
    },
    direction: {
      rising: {
        ar: "الارتفاع قد يشير إلى مشكلات في خطط الخروج أو المتابعة، لكنه قد يعكس أيضًا مرضى أشد خطورة، أو تحسّن رصد حالات الدخول في منشآت أخرى، أو تغيّر طريقة الترميز.",
        en: "A rise may point to problems in discharge planning or follow-up, but it may also reflect higher-risk patients, better capture of admissions at other facilities, or a coding change.",
      },
      falling: {
        ar: "الانخفاض قد يعني تحسنًا في انتقال الرعاية، أو تحويل مرضى عائدين إلى الملاحظة بدل التنويم، أو ارتفاع الوفيات بعد الخروج، أو نقصًا في البيانات.",
        en: "A fall may mean better care transitions, returning patients being placed in observation instead of admitted, higher post-discharge mortality, or missing data.",
      },
      caveat: {
        ar: "الأقل أفضل عادةً، لكن المقارنة الخام بين الأقسام أو المنشآت قد تكون مضللة بدون تعديل لمزيج الحالات، ولا نقدم أي نسبة كمعيار مقبول. أي حكم على الأداء يُترك للمراجعة السريرية وفق التعريف المعتمد.",
        en: "Lower is usually better, but raw comparison between services or facilities can mislead without case-mix adjustment, and we offer no rate as an acceptable benchmark. Any judgement of performance belongs to clinical review under the approved definition.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "إجمالي حالات الخروج في الفترة", en: "Total discharges in the period" }, value: "1,000" },
        { label: { ar: "حالات مستبعدة وفق التعريف (وفاة، نقل، خروج ضد المشورة)", en: "Excluded by definition (death, transfer, against advice)" }, value: "100" },
        { label: { ar: "حالات خروج مؤهلة تبعها دخول غير مخطط خلال 30 يومًا", en: "Eligible discharges followed by unplanned readmission within 30 days" }, value: "45" },
      ],
      steps: [
        { label: { ar: "حالات الخروج المؤهلة", en: "Eligible discharges" }, expression: "1,000 - 100 = 900" },
        { label: { ar: "معدل إعادة الدخول", en: "Readmission rate" }, expression: "45 ÷ 900 × 100 = 5.0%" },
        { label: { ar: "للمقارنة: لو استُخدمت كل حالات الخروج كمقام", en: "For comparison: if all discharges were the denominator" }, expression: "45 ÷ 1,000 × 100 = 4.5%" },
      ],
      result: { label: { ar: "معدل إعادة الدخول خلال 30 يومًا", en: "30-day readmission rate" }, value: "5.0%" },
      reading: {
        ar: "نصف نقطة مئوية تفصل بين الرقمين بسبب تعريف المقام وحده. لذلك يجب أن يحمل كل تقرير اسم التعريف المعتمد وعدد الحالات المؤهلة، وأن يُعرض الرقم مع سياق تعديل المخاطر قبل أي مقارنة.",
        en: "Half a percentage point separates the two figures purely because of the denominator definition. Every report should therefore carry the approved definition and the eligible count, and show the rate with risk-adjustment context before any comparison.",
      },
    },
    code: [
      {
        language: "sql",
        label: { ar: "اشتقاق علامة إعادة الدخول في طبقة البيانات (T-SQL)", en: "Deriving the readmission flag in the data layer (T-SQL)" },
        code: `-- Run upstream, not in DAX: the flag needs to look across encounters of the same patient.
-- Transfers are assumed already merged into one episode, so a transfer is not a readmission.
SELECT
    i.EncounterId,
    CASE WHEN EXISTS (
        SELECT 1
        FROM Encounter AS r
        WHERE r.PatientKey = i.PatientKey
          AND r.EncounterId <> i.EncounterId
          AND r.AdmitDate >= i.DischargeDate
          AND r.AdmitDate <= DATEADD(day, 30, i.DischargeDate)
          AND r.IsPlanned = 0
    ) THEN 1 ELSE 0 END AS Readmit30Flag,
    CASE WHEN DATEADD(day, 30, i.DischargeDate) <= @DataAsOfDate
         THEN 1 ELSE 0 END AS WindowClosed
FROM Encounter AS i
WHERE i.IsEligibleIndex = 1;`,
        assumptions: [
          {
            ar: "IsEligibleIndex وIsPlanned يُحسبان وفق تعريف القياس المعتمد (قوائم الإجراءات المخططة والاستثناءات) من فريق الجودة، لا من اجتهاد مطوّر التقارير.",
            en: "IsEligibleIndex and IsPlanned are derived from the approved measure definition (planned-procedure lists and exclusions) owned by the quality team, not from the report developer's judgement.",
          },
          {
            ar: "حالات النقل بين المنشآت أو الأقسام دُمجت مسبقًا في حلقة علاجية واحدة؛ بدون ذلك يُحتسب النقل في نفس اليوم إعادة دخول خاطئة.",
            en: "Inter-facility and inter-unit transfers were merged into a single episode beforehand; otherwise a same-day transfer is counted as a false readmission.",
          },
          {
            ar: "حدّ النافذة (شمول اليوم الثلاثين، وبدء العد من يوم الخروج) قاعدة في التعريف المعتمد؛ هنا الشرط شامل لليوم الثلاثين.",
            en: "The window boundary (whether day 30 is included, and counting from the discharge day) is set by the approved definition; this query includes day 30.",
          },
          {
            ar: "PatientKey مفتاح مستعار لا يكشف هوية المريض، والاستعلام يعمل في بيئة بيانات محمية. التقرير نفسه لا يحتاج أي معرّف شخصي.",
            en: "PatientKey is a pseudonymous key that does not reveal identity, and the query runs in a protected data environment. The report itself needs no personal identifier.",
          },
          {
            ar: "لا يرى الاستعلام إلا حالات الدخول المسجلة في هذا المصدر؛ الدخول إلى منشآت أخرى لا يُرصد إلا إن توفرت بيانات مشتركة.",
            en: "The query only sees admissions recorded in this source; admissions to other facilities are missed unless shared data is available.",
          },
        ],
        requires: ["Encounter[PatientKey]", "Encounter[AdmitDate]", "Encounter[DischargeDate]", "Encounter[IsPlanned]", "Encounter[IsEligibleIndex]"],
      },
      {
        language: "dax",
        label: { ar: "المعدل الخام ونسبة الملاحظ إلى المتوقع", en: "Raw rate and observed-to-expected ratio" },
        code: `-- Only index discharges whose 30-day window has closed enter the calculation.
Eligible Discharges :=
CALCULATE (
    COUNTROWS ( 'Encounter' ),
    'Encounter'[IsEligibleIndex] = TRUE (),
    'Encounter'[WindowClosed] = TRUE ()
)

Readmitted Discharges :=
CALCULATE (
    [Eligible Discharges],
    'Encounter'[Readmit30Flag] = TRUE ()
)

Readmission Rate 30d % :=
DIVIDE ( [Readmitted Discharges], [Eligible Discharges] )

-- Expected readmissions: sum of per-discharge probabilities from an approved risk model.
Expected Readmissions :=
CALCULATE (
    SUM ( 'Encounter'[ExpectedReadmitProb] ),
    'Encounter'[IsEligibleIndex] = TRUE (),
    'Encounter'[WindowClosed] = TRUE ()
)

Readmission O/E Ratio :=
DIVIDE ( [Readmitted Discharges], [Expected Readmissions] )`,
        assumptions: [
          {
            ar: "Readmit30Flag وWindowClosed وIsEligibleIndex أعمدة منطقية (TRUE/FALSE) محسوبة في طبقة البيانات كما في استعلام SQL السابق.",
            en: "Readmit30Flag, WindowClosed, and IsEligibleIndex are Boolean columns computed in the data layer as in the SQL above.",
          },
          {
            ar: "ExpectedReadmitProb احتمال لكل حالة خروج من نموذج مخاطر معتمد ومُعاير سريريًا. هذا المقياس لا يبني نموذج المخاطر، بل يستهلكه فقط.",
            en: "ExpectedReadmitProb is a per-discharge probability from an approved, clinically calibrated risk model. This measure does not build the risk model; it only consumes it.",
          },
          {
            ar: "جدول 'Date' مرتبط بـ Encounter[DischargeDate] للحالة المرجعية، فيُنسب كل دخول لاحق إلى شهر الخروج الذي سبقه.",
            en: "'Date' relates to the index Encounter[DischargeDate], so each readmission is attributed to the month of the discharge that preceded it.",
          },
        ],
        requires: ["Encounter[IsEligibleIndex]", "Encounter[WindowClosed]", "Encounter[Readmit30Flag]", "Encounter[ExpectedReadmitProb]", "Encounter[DischargeDate]"],
      },
    ],
    model: [
      {
        table: "Encounter",
        grain: { ar: "حلقة تنويم واحدة (بعد دمج حالات النقل)", en: "One inpatient episode (after merging transfers)" },
        columns: ["EncounterId", "PatientKey", "AdmitDate", "DischargeDate", "ServiceLineId", "IsPlanned", "IsEligibleIndex", "Readmit30Flag", "WindowClosed", "ExpectedReadmitProb"],
        role: { ar: "جدول الحقائق الأساسي؛ يحمل العلامات المشتقة لا البيانات الشخصية", en: "Primary fact; carries derived flags, not personal data" },
      },
      {
        table: "ServiceLine",
        grain: { ar: "خط خدمة سريري واحد", en: "One clinical service line" },
        columns: ["ServiceLineId", "ServiceLineName", "Specialty"],
        role: { ar: "التقسيم حسب خط الخدمة كما يقترح المرجع", en: "Slicing by service line, as the source suggests" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "QuarterKey"],
        role: { ar: "يُربط بتاريخ الخروج المرجعي", en: "Related to the index discharge date" },
      },
    ],
    visuals: [
      {
        pattern: "period-over-period",
        why: {
          ar: "اتجاه المعدل حسب خط الخدمة هو ما يقترحه المرجع، مع إظهار الفترات الأخيرة غير المكتملة بشكل مختلف.",
          en: "The rate trend by service line is what the source suggests, with the recent incomplete periods shown differently.",
        },
      },
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "المعدل الخام مع نسبة الملاحظ إلى المتوقع وعدد الحالات المؤهلة في بطاقة واحدة يضع الرقم في سياق المخاطر وحجم العينة.",
          en: "The raw rate with the observed-to-expected ratio and eligible count in one card places the figure in risk and sample-size context.",
        },
      },
      {
        pattern: "scatter-quadrant",
        why: {
          ar: "رسم مدة الإقامة مقابل معدل إعادة الدخول لكل خط خدمة يكشف من يقصّر الإقامة على حساب العودة.",
          en: "Plotting length of stay against readmission rate per service line reveals who shortens stays at the cost of returns.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عدم الالتزام بتعريف سريري معتمد. كل اختلاف في الاستثناءات أو في تعريف الدخول المخطط يغير الرقم، ولا يجوز مقارنة معدلات بتعريفات مختلفة.",
        en: "Not adhering to an approved clinical definition. Every difference in exclusions or in what counts as planned changes the figure, and rates under different definitions must not be compared.",
      },
      {
        ar: "المقارنة الخام بين الأقسام أو المنشآت دون تعديل لمزيج الحالات. قسم يستقبل مرضى أشد خطورة سيبدو أسوأ دائمًا وهو قد لا يكون كذلك.",
        en: "Raw comparison between services or facilities without case-mix adjustment. A service taking higher-risk patients will always look worse when it may not be.",
      },
      {
        ar: "معاملة حالات النقل كإعادة دخول، أو احتساب الدخول المخطط (مثل جلسة علاج مجدولة) في البسط.",
        en: "Treating transfers as readmissions, or counting planned admissions (such as a scheduled treatment session) in the numerator.",
      },
      {
        ar: "عرض الشهر الأخير قبل إغلاق نافذة الثلاثين يومًا. المعدل سيبدو منخفضًا زورًا لأن بعض حالات العودة لم تحدث بعد.",
        en: "Showing the latest month before its 30-day window has closed. The rate will look falsely low because some returns have not happened yet.",
      },
      {
        ar: "إهمال الخصوصية: أعداد صغيرة في خط خدمة نادر قد تكشف مرضى بعينهم. طبّق حدًا أدنى لعدد الحالات قبل العرض، وتحكمًا بالوصول على مستوى الصفوف، ولا تضع معرّفات شخصية في النموذج.",
        en: "Neglecting privacy: small counts in a rare service line can identify individual patients. Apply a minimum case count before display, row-level access control, and keep personal identifiers out of the model.",
      },
    ],
    variants: [
      {
        label: { ar: "نسبة الملاحظ إلى المتوقع (O/E)", en: "Observed-to-expected ratio (O/E)" },
        formula: "Observed Readmissions / Expected Readmissions (from an approved risk model)",
        difference: {
          ar: "تعطي نسبة حول 1: أعلى من 1 يعني عودة أكثر من المتوقع لنفس مزيج المرضى. هي الأساس الأعدل للمقارنة، لكن جودتها تعتمد كليًا على نموذج المخاطر.",
          en: "Yields a ratio around 1: above 1 means more returns than expected for the same patient mix. It is the fairer basis for comparison, but its quality depends entirely on the risk model.",
        },
      },
      {
        label: { ar: "إعادة الدخول لأي سبب مقابل حسب الحالة", en: "All-cause versus condition-specific" },
        formula: "Same formula, restricted to index discharges with a given diagnosis group",
        difference: {
          ar: "القياس لحالة محددة (مثل قصور القلب) أوضح سريريًا وأسهل في الربط بمسار علاجي، لكن الأعداد أصغر والتقلب أكبر.",
          en: "A condition-specific measure (heart failure, for example) is clearer clinically and easier to tie to a care pathway, but counts are smaller and volatility higher.",
        },
      },
      {
        label: { ar: "العودة إلى نفس المنشأة فقط", en: "Same-facility readmissions only" },
        formula: "Readmissions to this facility within 30 days / Eligible Discharges",
        difference: {
          ar: "ما تستطيع معظم المنشآت قياسه من بياناتها وحدها. يقلل الرقم الحقيقي لأن العودة إلى منشأة أخرى لا تظهر، ويجب ذكر ذلك صراحة.",
          en: "What most facilities can measure from their own data alone. It understates the true figure because returns to another facility are invisible, and this must be stated explicitly.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "لأن كل حالة خروج مرجعية تُعد مرة واحدة على الأكثر في البسط، فالمعدل لا يمكن أن يتجاوز 100%. وتغيير المقام وحده (مع ثبات البسط) يغير المعدل كما في المثال: 5.0% مقابل 4.5%.",
          en: "Because each index discharge counts at most once in the numerator, the rate cannot exceed 100%. Changing the denominator alone (with the numerator fixed) changes the rate, as in the example: 5.0% versus 4.5%.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "نافذة الثلاثين يومًا من تاريخ الخروج وعدّ الحالة المرجعية مرة واحدة ممارستان شائعتان في قياس إعادة الدخول، لكن التفاصيل تختلف بين الجهات.",
          en: "A 30-day window from discharge and counting each index case once are common practices in readmission measurement, though details differ between bodies.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "قوائم الاستثناءات، وتعريف الدخول المخطط، ومعاملة النقل، ونموذج تعديل المخاطر، والحد الأدنى لعدد الحالات قبل العرض — كلها قرارات للجهة السريرية أو التنظيمية المسؤولة.",
          en: "Exclusion lists, the definition of planned admission, transfer handling, the risk-adjustment model, and the minimum case count before display are decisions for the responsible clinical or regulatory body.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (45 من 900 حالة مؤهلة) من تأليفنا للتوضيح ولا تمثل منشأة حقيقية ولا معيارًا مقبولًا.",
          en: "The example figures (45 of 900 eligible discharges) are invented for illustration and represent neither a real facility nor an acceptable benchmark.",
        },
      },
    ],
    related: ["average-length-of-stay", "bed-occupancy-rate", "hai-rate"],
    exercise: {
      prompt: {
        ar: "خط خدمة سجّل 1,200 حالة خروج مؤهلة أُغلقت نافذتها، تبع 84 منها دخول غير مخطط خلال 30 يومًا. نموذج المخاطر المعتمد يتوقع 96 حالة عودة لنفس المرضى. احسب المعدل الخام والمعدل المتوقع ونسبة الملاحظ إلى المتوقع، وفسّر النتيجة.",
        en: "A service line recorded 1,200 eligible discharges with closed windows; 84 were followed by an unplanned admission within 30 days. The approved risk model expects 96 returns for these patients. Compute the raw rate, the expected rate, and the observed-to-expected ratio, and interpret the result.",
      },
      hint: {
        ar: "المعدل المتوقع = العودة المتوقعة ÷ الحالات المؤهلة. نسبة O/E = الملاحظ ÷ المتوقع.",
        en: "Expected rate = expected returns ÷ eligible discharges. O/E = observed ÷ expected.",
      },
      answer: {
        ar: "المعدل الخام = 84 ÷ 1,200 = 7.0%. المعدل المتوقع = 96 ÷ 1,200 = 8.0%. نسبة O/E = 84 ÷ 96 = 0.875. قد يبدو 7.0% مرتفعًا إذا قورن بخط خدمة آخر يخدم مرضى أقل خطورة، لكن بالنسبة لمزيج مرضاه كانت العودة أقل من المتوقع بنحو 12.5%. هذا لا يُعد حكمًا سريريًا نهائيًا: يجب مراجعته مع حجم العينة وموثوقية النموذج من قبل فريق الجودة.",
        en: "Raw rate = 84 ÷ 1,200 = 7.0%. Expected rate = 96 ÷ 1,200 = 8.0%. O/E = 84 ÷ 96 = 0.875. A 7.0% rate may look high next to a service line with lower-risk patients, yet for its own patient mix returns ran about 12.5% below expected. This is not a final clinical verdict: the quality team should review it alongside sample size and model reliability.",
      },
    },
    references: [
      {
        title: "CALCULATE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/calculate-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع تعديل سياق الترشيح المستخدم لحصر الحالات المؤهلة المغلقة النافذة والمُعاد دخولها.",
          en: "Reference for the filter-context modification used to restrict to eligible, window-closed, and readmitted discharges.",
        },
      },
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع القسمة الآمنة للمعدل ولنسبة الملاحظ إلى المتوقع.",
          en: "Reference for safe division in the rate and the observed-to-expected ratio.",
        },
      },
    ],
  },

  {
    id: "ed-waiting-time",
    slug: "ed-waiting-time",
    name: "Emergency Department Waiting Time",
    nameAr: "زمن الانتظار في قسم الطوارئ",
    domains: ["healthcare"],
    category: { ar: "تدفق المرضى", en: "Patient flow" },
    difficulty: "intermediate",
    unit: { ar: "دقائق", en: "Minutes" },
    aggregation: "non-additive",
    definition: {
      ar: "الوقت الذي ينتظره المريض في قسم الطوارئ من لحظة الوصول حتى نقطة الخدمة المحددة، وغالبًا أول تقييم سريري. نقطة النهاية جزء من التعريف ويجب تثبيتها كتابيًا.",
      en: "The time a patient waits in the emergency department from arrival until the defined point of service, commonly the first clinical assessment. The endpoint is part of the definition and must be fixed in writing.",
    },
    whyItMatters: {
      ar: "يقيس إمكانية الوصول إلى الرعاية وتدفق المرضى في أكثر نقاط المستشفى حساسية. الانتظار الطويل يرتبط بمغادرة مرضى قبل رؤيتهم، وهو في الغالب عَرَض لاختناق في مكان آخر كامتلاء أسرّة التنويم.",
      en: "It measures access to care and patient flow at the most sensitive point in the hospital. Long waits go hand in hand with patients leaving before being seen, and are often a symptom of a bottleneck elsewhere, such as full inpatient beds.",
    },
    interpretation: {
      ar: "توزيع أزمنة الانتظار ملتوٍ بشدة: معظم المرضى ينتظرون وقتًا قصيرًا وقلة تنتظر طويلًا جدًا. لذلك يُقرأ الوسيط لتجربة المريض النمطي والمئين التسعين لتجربة الأسوأ حالًا، وكلاهما حسب فئة الفرز لأن مريض الفئة الحرجة يجب أن يُرى أسرع بكثير من مريض الحالات البسيطة.",
      en: "Waiting times are heavily skewed: most patients wait briefly and a few wait very long. The median describes the typical patient and the 90th percentile the worst-off, both by triage category, because a critical patient must be seen far sooner than a minor case.",
    },
    formula: "Waiting Time = Defined First Clinical Assessment Timestamp - ED Arrival Timestamp",
    numerator: {
      ar: "لكل زيارة: الفرق بالدقائق بين طابع وقت نقطة الخدمة المحددة وطابع وقت الوصول. على مستوى التقرير يُلخّص بالوسيط والمئين التسعين لا بالمجموع.",
      en: "Per visit: the difference in minutes between the defined service timestamp and the arrival timestamp. At report level it is summarized by median and 90th percentile, not summed.",
    },
    timeGrain: {
      ar: "يُحسب لكل زيارة ويُعرض يوميًا أو أسبوعيًا حسب تاريخ الوصول، مع تقسيم حسب ساعة الوصول ويوم الأسبوع وفئة الفرز.",
      en: "Computed per visit and reported daily or weekly by arrival date, split by arrival hour, day of week, and triage category.",
    },
    direction: {
      rising: {
        ar: "ارتفاع الانتظار يشير إلى ضغط في الطلب أو نقص في الطاقم أو اختناق في التنويم يُبقي المرضى في أسرّة الطوارئ.",
        en: "Rising waits point to demand pressure, short staffing, or an inpatient bottleneck keeping patients in emergency beds.",
      },
      falling: {
        ar: "انخفاضه تحسّن في الوصول عادةً، لكن تحقق أولًا من أن نقطة النهاية لم تتغير ومن أن نسبة المغادرين قبل الرؤية لم ترتفع.",
        en: "Falling waits usually mean better access, but first check that the endpoint has not changed and that the left-without-being-seen share has not risen.",
      },
      caveat: {
        ar: "الأقل أفضل للمريض، لكن الرقم يمكن تحسينه شكليًا بتقديم طابع وقت سريع لا يمثل تقييمًا حقيقيًا، أو باستبعاد من غادر قبل رؤيته. قارن دائمًا بين فئات الفرز المتماثلة، والأهداف الزمنية لكل فئة سياسة محلية أو تنظيمية لا نقدمها كمعيار.",
        en: "Lower is better for patients, but the number can be improved cosmetically by recording a quick timestamp that is not a real assessment, or by excluding those who left before being seen. Always compare like triage categories; time targets per category are local or regulatory policy, not a benchmark we provide.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "وقت الوصول إلى الطوارئ", en: "ED arrival time" }, value: "10:05" },
        { label: { ar: "وقت أول تقييم سريري (نقطة النهاية المحددة)", en: "First clinical assessment (defined endpoint)" }, value: "10:35" },
      ],
      steps: [
        { label: { ar: "زمن الانتظار", en: "Waiting time" }, expression: "10:35 - 10:05 = 30 دقيقة" },
      ],
      result: { label: { ar: "زمن الانتظار لهذه الزيارة", en: "Waiting time for this visit" }, value: "30 دقيقة" },
      reading: {
        ar: "هذه زيارة واحدة. الرقم لا يصبح مؤشرًا إلا بعد تلخيص آلاف الزيارات بالوسيط والمئين التسعين، مقسّمة حسب فئة الفرز وساعة الوصول. نفس الثلاثين دقيقة قد تكون مقبولة لحالة بسيطة وغير مقبولة لحالة حرجة.",
        en: "This is one visit. The figure only becomes a KPI once thousands of visits are summarized by median and 90th percentile, split by triage category and arrival hour. The same 30 minutes may be acceptable for a minor case and unacceptable for a critical one.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "الوسيط والمئين التسعين ونسبة المغادرين قبل الرؤية", en: "Median, 90th percentile, and left-without-being-seen share" },
        code: `-- Only visits with a valid assessment timestamp have a waiting time.
Visits Assessed :=
COUNTROWS (
    FILTER (
        'EDVisit',
        NOT ISBLANK ( 'EDVisit'[FirstAssessmentTime] )
            && 'EDVisit'[FirstAssessmentTime] >= 'EDVisit'[ArrivalTime]
    )
)

Median Wait (min) :=
MEDIANX (
    FILTER (
        'EDVisit',
        NOT ISBLANK ( 'EDVisit'[FirstAssessmentTime] )
            && 'EDVisit'[FirstAssessmentTime] >= 'EDVisit'[ArrivalTime]
    ),
    DATEDIFF ( 'EDVisit'[ArrivalTime], 'EDVisit'[FirstAssessmentTime], MINUTE )
)

P90 Wait (min) :=
PERCENTILEX.INC (
    FILTER (
        'EDVisit',
        NOT ISBLANK ( 'EDVisit'[FirstAssessmentTime] )
            && 'EDVisit'[FirstAssessmentTime] >= 'EDVisit'[ArrivalTime]
    ),
    DATEDIFF ( 'EDVisit'[ArrivalTime], 'EDVisit'[FirstAssessmentTime], MINUTE ),
    0.9
)

-- Patients who left before assessment have no wait and silently vanish
-- from the percentiles, so their share must be reported alongside.
LWBS % :=
DIVIDE (
    CALCULATE ( COUNTROWS ( 'EDVisit' ), 'EDVisit'[LeftWithoutBeingSeen] = TRUE () ),
    COUNTROWS ( 'EDVisit' )
)`,
        assumptions: [
          {
            ar: "'EDVisit' بحبيبية زيارة واحدة، وArrivalTime وFirstAssessmentTime عمودان من نوع تاريخ ووقت بنفس المنطقة الزمنية.",
            en: "'EDVisit' is at one row per visit, and ArrivalTime and FirstAssessmentTime are datetime columns in the same time zone.",
          },
          {
            ar: "DATEDIFF بوحدة MINUTE تعدّ حدود الدقائق المعبورة، فقد يختلف الناتج بدقيقة عن الفرق الدقيق بالثواني. هذا مقبول للتقارير ويجب توثيقه.",
            en: "DATEDIFF with MINUTE counts minute boundaries crossed, so the result can differ by one minute from the exact difference in seconds. Acceptable for reporting, but document it.",
          },
          {
            ar: "الزيارات ذات طابع التقييم السابق للوصول أخطاء بيانات وتُستبعد هنا؛ يجب عدّها في تقرير جودة بيانات منفصل لا إخفاؤها.",
            en: "Visits with an assessment timestamp before arrival are data errors and are excluded here; they should be counted in a separate data-quality report rather than hidden.",
          },
          {
            ar: "LeftWithoutBeingSeen عمود منطقي مشتق من حالة المغادرة في نظام الطوارئ، وجدول 'Date' مرتبط بتاريخ الوصول.",
            en: "LeftWithoutBeingSeen is a Boolean derived from the departure status in the ED system, and 'Date' relates to the arrival date.",
          },
        ],
        requires: ["EDVisit[ArrivalTime]", "EDVisit[FirstAssessmentTime]", "EDVisit[LeftWithoutBeingSeen]", "EDVisit[TriageCategory]"],
      },
    ],
    model: [
      {
        table: "EDVisit",
        grain: { ar: "زيارة طوارئ واحدة", en: "One emergency department visit" },
        columns: ["VisitId", "ArrivalDate", "ArrivalTime", "ArrivalHour", "FirstAssessmentTime", "TriageCategory", "LeftWithoutBeingSeen", "FacilityId"],
        role: { ar: "جدول الحقائق الأساسي؛ بلا أسماء أو معرّفات شخصية", en: "Primary fact; no names or personal identifiers" },
      },
      {
        table: "TriageCategory",
        grain: { ar: "فئة فرز واحدة", en: "One triage category" },
        columns: ["TriageCategory", "TriageLabel", "SortOrder", "TargetMinutes"],
        role: { ar: "التقسيم الإلزامي للمقارنة العادلة، ويحمل الهدف الزمني المحلي لكل فئة", en: "Mandatory slicer for fair comparison; carries the local time target per category" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "DayOfWeek", "WeekKey", "MonthKey"],
        role: { ar: "يُربط بـ ArrivalDate", en: "Related to ArrivalDate" },
      },
    ],
    visuals: [
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "الوسيط والمئين التسعين وعدد الزيارات ونسبة المغادرين قبل الرؤية معًا تمنع تحسين رقم واحد على حساب الآخر.",
          en: "Median, 90th percentile, visit count, and left-without-being-seen share together stop one number being improved at the expense of another.",
        },
      },
      {
        pattern: "heatmap-calendar",
        why: {
          ar: "خريطة حرارية لساعة الوصول مقابل يوم الأسبوع تكشف أوقات الذروة وتوجّه جداول المناوبات، كما يقترح المرجع (حسب وقت اليوم).",
          en: "An arrival-hour by day-of-week heatmap reveals peak times and informs staff rosters, matching the source's time-of-day split.",
        },
      },
      {
        pattern: "period-over-period",
        why: {
          ar: "اتجاه الوسيط والمئين التسعين حسب فئة الفرز عبر الأسابيع يُظهر إن كان التحسن حقيقيًا ومستمرًا.",
          en: "The median and P90 trend by triage category across weeks shows whether an improvement is real and sustained.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عدم تثبيت نقطة النهاية: الفرز، أو أول تقييم من ممرض، أو أول رؤية من طبيب. كل خيار يعطي رقمًا مختلفًا تمامًا، وتغييره بصمت يصنع تحسنًا وهميًا.",
        en: "Not fixing the endpoint: triage, first nurse assessment, or first physician contact. Each gives a very different number, and changing it silently manufactures a fake improvement.",
      },
      {
        ar: "مقارنة فئات فرز مختلفة أو عرض رقم واحد لكل القسم. تغيّر مزيج الفئات وحده يحرك المتوسط العام دون أي تغيير في الأداء.",
        en: "Comparing different triage categories or showing one number for the whole department. A shift in category mix alone moves the overall figure with no change in performance.",
      },
      {
        ar: "استخدام المتوسط الحسابي. قلة من الانتظارات الطويلة جدًا تسحبه بعيدًا عن تجربة المريض النمطي؛ الوسيط والمئين التسعين أصدق.",
        en: "Using the arithmetic mean. A few very long waits pull it far from the typical patient's experience; median and 90th percentile are more honest.",
      },
      {
        ar: "استبعاد من غادر قبل رؤيته دون الإبلاغ عنه. هؤلاء غالبًا من انتظروا أطول، واستبعادهم يخفض الأرقام زورًا.",
        en: "Excluding patients who left before being seen without reporting them. They are often the ones who waited longest, and dropping them falsely lowers the figures.",
      },
      {
        ar: "كشف الخصوصية في جداول التفاصيل: طابع وقت الوصول مع فئة الفرز في يوم هادئ قد يكفي لتحديد مريض بعينه. اعرض التفاصيل على مستوى مجمّع أو لأدوار مصرّح لها فقط.",
        en: "Exposing privacy in detail tables: an arrival timestamp plus triage category on a quiet day may be enough to identify a patient. Show detail only in aggregate or to authorized roles.",
      },
    ],
    variants: [
      {
        label: { ar: "من الوصول إلى الطبيب", en: "Door-to-provider time" },
        formula: "First Physician/Provider Contact Timestamp - ED Arrival Timestamp",
        difference: {
          ar: "نقطة نهاية لاحقة للتقييم الأولي، فيعطي رقمًا أعلى ويعكس توفر الأطباء تحديدًا لا سرعة الفرز.",
          en: "A later endpoint than initial assessment, so it yields a higher number and reflects physician availability specifically rather than triage speed.",
        },
      },
      {
        label: { ar: "إجمالي مدة البقاء في الطوارئ", en: "Total ED length of stay" },
        formula: "ED Departure Timestamp - ED Arrival Timestamp",
        difference: {
          ar: "يشمل الانتظار والعلاج وانتظار سرير التنويم، فيعكس ضغط المستشفى كله لا قسم الطوارئ وحده.",
          en: "Includes waiting, treatment, and waiting for an inpatient bed, so it reflects pressure on the whole hospital rather than the ED alone.",
        },
      },
      {
        label: { ar: "نسبة الالتزام بالهدف الزمني لكل فئة", en: "Share seen within the category target" },
        formula: "Visits Assessed Within Target for Their Triage Category / Visits Assessed",
        difference: {
          ar: "يحوّل المدة إلى نسبة قابلة للمقارنة بين الفئات، لكنه يعتمد على أهداف محلية ويخفي مقدار التأخير لمن تجاوز الهدف.",
          en: "Turns the duration into a rate comparable across categories, but it relies on local targets and hides how late the over-target visits were.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "زمن الانتظار فرق بين طابعين زمنيين، فلا معنى لجمعه عبر الزيارات. والوسيط لا يتأثر بقيم القمة المتطرفة بينما المتوسط يتأثر بها، وهو ما يظهر في التمرين.",
          en: "Waiting time is a difference between two timestamps, so summing it across visits is meaningless. The median is unaffected by extreme top values while the mean is not, as the exercise shows.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "تلخيص انتظار الطوارئ بالوسيط ومئين أعلى، وتقسيمه حسب فئة الفرز، ممارسة شائعة في تقارير تدفق المرضى.",
          en: "Summarizing ED waits with the median and an upper percentile, split by triage category, is common practice in patient-flow reporting.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "نقطة النهاية، ونظام الفرز المستخدم، والهدف الزمني لكل فئة، ومعاملة من غادر قبل رؤيته — قرارات للمنشأة أو الجهة التنظيمية.",
          en: "The endpoint, the triage system used, the time target per category, and the treatment of patients who left before being seen are decisions for the facility or regulator.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أوقات المثال (10:05 و10:35) وأرقام التمرين من تأليفنا للتوضيح ولا تمثل منشأة حقيقية ولا زمنًا مقبولًا.",
          en: "The example times (10:05 and 10:35) and the exercise figures are invented for illustration and represent neither a real facility nor an acceptable wait.",
        },
      },
    ],
    related: ["bed-occupancy-rate", "average-length-of-stay", "sla-achievement-rate"],
    exercise: {
      prompt: {
        ar: "في وردية واحدة وصل 12 مريضًا من نفس فئة الفرز. غادر 2 قبل رؤيتهم، وانتظر العشرة الباقون (بالدقائق): 5، 8، 12، 15، 18، 22، 25، 40، 75، 120. احسب المتوسط والوسيط والمئين التسعين (PERCENTILEX.INC)، ونسبة المغادرين قبل الرؤية.",
        en: "In one shift 12 patients of the same triage category arrived. Two left before being seen, and the other ten waited (minutes): 5, 8, 12, 15, 18, 22, 25, 40, 75, 120. Compute the mean, median, 90th percentile (PERCENTILEX.INC), and the left-without-being-seen share.",
      },
      hint: {
        ar: "في PERCENTILEX.INC الرتبة = 0.9 × (n − 1) + 1، ثم استكمل خطيًا بين القيمتين المحيطتين.",
        en: "For PERCENTILEX.INC the rank = 0.9 x (n - 1) + 1, then interpolate linearly between the surrounding values.",
      },
      answer: {
        ar: "المجموع = 340، فالمتوسط = 340 ÷ 10 = 34.0 دقيقة. الوسيط = (18 + 22) ÷ 2 = 20.0 دقيقة. رتبة المئين التسعين = 0.9 × 9 + 1 = 9.1، فالقيمة = 75 + 0.1 × (120 − 75) = 79.5 دقيقة. نسبة المغادرين = 2 ÷ 12 = 16.7%. المتوسط (34) أعلى بكثير من الوسيط (20) بسبب انتظارين طويلين، والمئين التسعين يُظهر تجربة الأسوأ حالًا. والمريضان اللذان غادرا غائبان عن كل هذه الأرقام، ولذلك يجب عرض نسبتهما بجانبها.",
        en: "Sum = 340, so mean = 340 ÷ 10 = 34.0 minutes. Median = (18 + 22) ÷ 2 = 20.0 minutes. P90 rank = 0.9 x 9 + 1 = 9.1, so the value = 75 + 0.1 x (120 - 75) = 79.5 minutes. LWBS share = 2 ÷ 12 = 16.7%. The mean (34) sits well above the median (20) because of two long waits, and the P90 shows the worst-off experience. The two patients who left are absent from all these figures, which is why their share must be shown alongside.",
      },
    },
    references: [
      {
        title: "PERCENTILEX.INC function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/percentilex-inc-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع حساب المئين على تعبير محسوب لكل صف، المستخدم للمئين التسعين لزمن الانتظار.",
          en: "Reference for a percentile over a per-row expression, used for the 90th percentile of waiting time.",
        },
      },
      {
        title: "MEDIANX function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/medianx-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع حساب الوسيط لمدة غير مخزنة كعمود بل محسوبة من طابعين زمنيين.",
          en: "Reference for the median of a duration computed from two timestamps rather than stored as a column.",
        },
      },
    ],
  },

  {
    id: "hai-rate",
    slug: "hai-rate",
    name: "Hospital-Acquired Infection Rate",
    acronym: "HAI",
    nameAr: "معدل العدوى المكتسبة في المستشفى",
    domains: ["healthcare"],
    category: { ar: "سلامة المرضى", en: "Patient safety" },
    difficulty: "advanced",
    unit: { ar: "حالات لكل 1,000 يوم جهاز", en: "Infections per 1,000 device-days" },
    aggregation: "ratio",
    definition: {
      ar: "معدل العدوى التي يكتسبها المرضى داخل المنشأة الصحية وفق تعريف مراقبة سريري معتمد. الصيغة الشائعة للعدوى المرتبطة بالأجهزة (مثل القثطرة الوريدية المركزية أو البولية) هي عدد حالات العدوى المؤهلة لكل 1,000 يوم جهاز، وأنواع العدوى الأخرى تستخدم مقامات مختلفة.",
      en: "The rate of infections patients acquire within the healthcare facility, under an approved clinical surveillance definition. A common form for device-associated infections (such as central-line or urinary-catheter infections) is qualifying infections per 1,000 device-days; other infection measures use different denominators.",
    },
    whyItMatters: {
      ar: "العدوى المكتسبة ضرر يمكن الوقاية من كثير منه، وتطيل الإقامة وترفع التكلفة. المؤشر يدعم برامج مكافحة العدوى ويساعد على اكتشاف ارتفاع غير معتاد في وحدة أو نوع جهاز والتحقيق فيه مبكرًا.",
      en: "Acquired infections are harm, much of it preventable, and they lengthen stays and raise cost. The metric supports infection-prevention programs and helps spot and investigate an unusual rise in a unit or device type early.",
    },
    interpretation: {
      ar: "معدل 2 لكل 1,000 يوم جهاز يعني حالتي عدوى مؤهلتين مقابل كل ألف يوم استُخدم فيه الجهاز. لأن الأعداد عادة صغيرة، فحالة واحدة إضافية قد تحرك المعدل كثيرًا؛ لذلك يُقرأ مع البسط والمقام ظاهرين وعلى فترات كافية الطول.",
      en: "A rate of 2 per 1,000 device-days means two qualifying infections for every thousand days the device was in use. Because counts are usually small, a single extra case can move the rate a lot, so it is read with numerator and denominator visible and over sufficiently long periods.",
    },
    formula: "HAI Rate = Qualifying Infections / Device-Days x 1,000",
    numerator: {
      ar: "حالات العدوى التي تحقق تعريف المراقبة المعتمد لنوع العدوى المقيس (مثل عدوى مجرى الدم المرتبطة بالقثطرة المركزية)، كما يؤكدها فريق مكافحة العدوى لا كما يرمّزها نظام الفوترة.",
      en: "Infections meeting the approved surveillance definition for the infection type measured (such as central-line-associated bloodstream infection), as confirmed by the infection-prevention team rather than as coded by billing.",
    },
    denominator: {
      ar: "أيام الجهاز المطابق لنوع العدوى: مجموع عدد المرضى الذين لديهم الجهاز في كل يوم عبر الفترة. يجب أن يطابق نوع الجهاز في المقام نوع العدوى في البسط.",
      en: "Device-days for the device matching the infection type: the daily count of patients with that device, summed over the period. The device in the denominator must match the infection type in the numerator.",
    },
    timeGrain: {
      ar: "شهري أو ربع سنوي حسب تاريخ الحدث المعتمد في تعريف المراقبة. الفترات القصيرة تعطي أعدادًا صغيرة جدًا للقراءة المستقرة.",
      en: "Monthly or quarterly by the event date set in the surveillance definition. Short periods yield counts too small for a stable reading.",
    },
    direction: {
      rising: {
        ar: "الارتفاع قد يعني تراجعًا في ممارسات الوقاية، أو مرضى أشد خطورة، أو تحسّنًا في المراقبة والفحص يكشف حالات كانت تفوت سابقًا.",
        en: "A rise may mean lapses in prevention practice, higher-risk patients, or better surveillance and testing that catches cases previously missed.",
      },
      falling: {
        ar: "الانخفاض قد يعني نجاح برامج الوقاية، لكنه قد يعني أيضًا فحصًا أقل أو تطبيقًا أضيق للتعريف.",
        en: "A fall may mean prevention programs are working, but it may also mean less testing or a narrower application of the definition.",
      },
      caveat: {
        ar: "الأقل أفضل للمريض بشرط ثبات جودة المراقبة. مع الأعداد الصغيرة يكون التذبذب الشهري ضجيجًا في الغالب، والمقارنة بين الوحدات تحتاج تعديلًا للمخاطر حيث يكون مناسبًا. لا نقدم أي معدل كمعيار مقبول.",
        en: "Lower is better for patients provided surveillance quality is constant. With small counts, monthly swings are mostly noise, and comparison between units needs risk adjustment where appropriate. We offer no rate as an acceptable benchmark.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "حالات العدوى المؤهلة وفق تعريف المراقبة", en: "Qualifying infections under the surveillance definition" }, value: "4" },
        { label: { ar: "أيام الجهاز المطابق", en: "Matching device-days" }, value: "2,000" },
      ],
      steps: [
        { label: { ar: "النسبة الخام", en: "Raw ratio" }, expression: "4 ÷ 2,000 = 0.002" },
        { label: { ar: "لكل 1,000 يوم جهاز", en: "Per 1,000 device-days" }, expression: "0.002 × 1,000 = 2.0" },
      ],
      result: { label: { ar: "معدل العدوى", en: "Infection rate" }, value: "2.0 لكل 1,000 يوم جهاز" },
      reading: {
        ar: "المعدل مبني على 4 حالات فقط، فحالة واحدة إضافية ترفعه إلى 2.5 وحالة أقل تخفضه إلى 1.5. لهذا يُعرض العدد والمقام بجانب المعدل، ولا يُبنى حكم على شهر واحد.",
        en: "The rate rests on only 4 cases, so one more raises it to 2.5 and one fewer drops it to 1.5. That is why the count and denominator are shown next to the rate, and no judgement rests on a single month.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "المعدل لكل 1,000 يوم جهاز مع حجب الأعداد الصغيرة", en: "Rate per 1,000 device-days with small-denominator suppression" },
        code: `-- Numerator and denominator live in separate fact tables that share
-- the Date, Unit and DeviceType dimensions.
Qualifying Infections :=
CALCULATE (
    COUNTROWS ( 'InfectionEvent' ),
    'InfectionEvent'[MeetsSurveillanceDef] = TRUE ()
)

Device-Days :=
SUM ( 'DeviceDays'[DeviceDays] )

HAI per 1,000 Device-Days :=
DIVIDE ( [Qualifying Infections], [Device-Days] ) * 1000

-- Blank the rate when exposure is too small to read or could identify patients.
-- The threshold is a policy value, shown here only as a placeholder.
HAI Rate (Display) :=
VAR MinDeviceDays = 500
RETURN
    IF (
        [Device-Days] < MinDeviceDays,
        BLANK (),
        [HAI per 1,000 Device-Days]
    )`,
        assumptions: [
          {
            ar: "'InfectionEvent' يحتوي فقط الأحداث التي راجعها فريق مكافحة العدوى، وMeetsSurveillanceDef يعكس قراره وفق التعريف المعتمد لا ترميز الفوترة.",
            en: "'InfectionEvent' holds only events reviewed by the infection-prevention team, and MeetsSurveillanceDef reflects their decision under the approved definition, not billing codes.",
          },
          {
            ar: "'DeviceDays' بحبيبية وحدة ونوع جهاز ويوم، والجدولان مرتبطان بنفس أبعاد Date وUnit وDeviceType. تقسيم التقرير حسب DeviceType ضروري حتى يطابق كل بسط مقامه.",
            en: "'DeviceDays' is at unit, device type, and day, and both facts relate to the same Date, Unit, and DeviceType dimensions. Slicing the report by DeviceType is required so each numerator matches its denominator.",
          },
          {
            ar: "DIVIDE تعيد فراغًا عند غياب أيام الجهاز، والفراغ مضروبًا في 1000 يبقى فراغًا، فلا تظهر أصفار زائفة.",
            en: "DIVIDE returns blank when there are no device-days, and blank times 1000 stays blank, so no false zeros appear.",
          },
          {
            ar: "حد الحجب (500 يوم جهاز) قيمة افتراضية للتوضيح؛ الحد الفعلي تحدده سياسة المنشأة للاستقرار الإحصائي وحماية الخصوصية.",
            en: "The suppression threshold (500 device-days) is a placeholder; the real threshold is set by facility policy for statistical stability and privacy.",
          },
        ],
        requires: ["InfectionEvent[MeetsSurveillanceDef]", "DeviceDays[DeviceDays]", "DeviceType[DeviceType]", "Unit[UnitId]", "Date[Date]"],
      },
    ],
    model: [
      {
        table: "InfectionEvent",
        grain: { ar: "حدث عدوى واحد تمت مراجعته", en: "One reviewed infection event" },
        columns: ["EventId", "EventDate", "UnitId", "DeviceType", "InfectionType", "MeetsSurveillanceDef"],
        role: { ar: "جدول حقائق البسط؛ بلا معرّفات شخصية", en: "Numerator fact; no personal identifiers" },
      },
      {
        table: "DeviceDays",
        grain: { ar: "وحدة ونوع جهاز ويوم", en: "One unit, device type, and day" },
        columns: ["CensusDate", "UnitId", "DeviceType", "DeviceDays", "PatientDays"],
        role: { ar: "جدول حقائق المقام (التعرّض)", en: "Denominator (exposure) fact" },
      },
      {
        table: "DeviceType",
        grain: { ar: "نوع جهاز واحد", en: "One device type" },
        columns: ["DeviceType", "DeviceLabel", "MatchingInfectionType"],
        role: { ar: "بُعد مشترك يربط كل نوع عدوى بمقامه الصحيح", en: "Shared dimension linking each infection type to its correct denominator" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "QuarterKey"],
        role: { ar: "يُربط بـ EventDate وCensusDate معًا", en: "Related to both EventDate and CensusDate" },
      },
    ],
    visuals: [
      {
        pattern: "period-over-period",
        why: {
          ar: "اتجاه المعدل حسب الوحدة ونوع الجهاز كما يقترح المرجع، بفترات ربع سنوية أو متحركة لتقليل ضجيج الأعداد الصغيرة.",
          en: "The rate trend by unit and device type, as the source suggests, over quarterly or rolling periods to reduce small-number noise.",
        },
      },
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "المعدل مع عدد الحالات وأيام الجهاز ظاهرة معًا، فالمرجع يشترط إبقاء المقامات مرئية.",
          en: "The rate with case count and device-days visible together, since the source requires denominators to stay visible.",
        },
      },
      {
        pattern: "stacked-bar",
        why: {
          ar: "عدد الحالات حسب نوع العدوى والوحدة عبر الزمن يساعد فريق مكافحة العدوى على توجيه التحقيق.",
          en: "Case counts by infection type and unit over time help the infection-prevention team direct investigation.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عدم استخدام تعريف مراقبة سريري معتمد، أو الاعتماد على ترميز الفوترة بدل مراجعة فريق مكافحة العدوى. الأرقام الناتجة لا تقارن بشيء.",
        en: "Not using an approved clinical surveillance definition, or relying on billing codes instead of infection-prevention review. The resulting figures compare with nothing.",
      },
      {
        ar: "خلط أنواع العدوى في معدل واحد: جمع عدوى القثطرة المركزية والبولية وقسمتها على مجموع أيام الأجهزة يعطي رقمًا بلا معنى سريري واضح.",
        en: "Mixing infection types in one rate: adding central-line and urinary-catheter infections and dividing by total device-days gives a number with no clear clinical meaning.",
      },
      {
        ar: "قراءة تذبذب شهري مبني على حالة أو حالتين كاتجاه. تحتاج أعدادًا كافية وفترات أطول قبل أي استنتاج.",
        en: "Reading a monthly swing built on one or two cases as a trend. Adequate case counts and longer periods are needed before any conclusion.",
      },
      {
        ar: "مقارنة الوحدات دون تعديل للمخاطر حيث يكون مناسبًا. العناية المركزة ووحدة الجراحة العامة تخدمان مرضى مختلفين جذريًا.",
        en: "Comparing units without risk adjustment where appropriate. Intensive care and a general surgical ward serve radically different patients.",
      },
      {
        ar: "عرض تفاصيل الحالات في لوحة واسعة الانتشار. في وحدة صغيرة قد يكفي التاريخ ونوع العدوى لتحديد المريض؛ التفاصيل لفريق مكافحة العدوى فقط.",
        en: "Showing case details on a widely shared dashboard. In a small unit the date and infection type may be enough to identify the patient; detail belongs to the infection-prevention team only.",
      },
    ],
    variants: [
      {
        label: { ar: "لكل 1,000 يوم مريض", en: "Per 1,000 patient-days" },
        formula: "Qualifying Infections / Patient-Days x 1,000",
        difference: {
          ar: "يُستخدم للعدوى غير المرتبطة بجهاز محدد. أسهل حسابًا لكنه لا يفصل بين أثر كثرة استخدام الأجهزة وأثر ممارسات العناية بها.",
          en: "Used for infections not tied to a specific device. Easier to compute, but it cannot separate the effect of heavier device use from the effect of device-care practice.",
        },
      },
      {
        label: { ar: "نسبة العدوى المعيارية (الملاحظ إلى المتوقع)", en: "Standardized infection ratio (observed to expected)" },
        formula: "Observed Qualifying Infections / Predicted Infections from a risk model",
        difference: {
          ar: "تعدّل للمخاطر فتعطي نسبة حول 1 قابلة للمقارنة بين وحدات مختلفة، لكنها تعتمد على نموذج توقع معتمد ولا تُحسب من بيانات المنشأة وحدها.",
          en: "Risk-adjusted, yielding a ratio around 1 comparable across different units, but it depends on an approved prediction model and cannot be computed from the facility's data alone.",
        },
      },
      {
        label: { ar: "نسبة استخدام الأجهزة", en: "Device utilization ratio" },
        formula: "Device-Days / Patient-Days",
        difference: {
          ar: "ليس معدل عدوى بل مؤشر مرافق: خفض الأيام غير الضرورية للجهاز يقلل التعرّض حتى لو بقي المعدل لكل 1,000 يوم جهاز ثابتًا.",
          en: "Not an infection rate but a companion measure: removing unnecessary device-days reduces exposure even if the rate per 1,000 device-days stays flat.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "عند ثبات أيام الجهاز، كل حالة إضافية ترفع المعدل بمقدار 1,000 ÷ أيام الجهاز. في المثال (2,000 يوم) هذا 0.5 لكل حالة، وهو سبب حساسية المعدل للأعداد الصغيرة.",
          en: "With device-days fixed, each additional case raises the rate by 1,000 ÷ device-days. In the example (2,000 days) that is 0.5 per case, which is why the rate is so sensitive to small counts.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "التعبير عن العدوى المرتبطة بالأجهزة لكل 1,000 يوم جهاز ممارسة شائعة في برامج المراقبة، مع مقامات أخرى لأنواع عدوى أخرى.",
          en: "Expressing device-associated infections per 1,000 device-days is common practice in surveillance programs, with other denominators for other infection types.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "تعريف المراقبة المعتمد، ونموذج تعديل المخاطر، وحد حجب الأعداد الصغيرة، ومن يحق له رؤية التفاصيل — قرارات للمنشأة أو الجهة التنظيمية وفريق مكافحة العدوى.",
          en: "The approved surveillance definition, the risk-adjustment model, the small-number suppression threshold, and who may see detail are decisions for the facility or regulator and the infection-prevention team.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (4 حالات و2,000 يوم جهاز) وأرقام التمرين من تأليفنا للتوضيح ولا تمثل منشأة حقيقية ولا معدلًا مقبولًا.",
          en: "The example figures (4 cases, 2,000 device-days) and the exercise figures are invented for illustration and represent neither a real facility nor an acceptable rate.",
        },
      },
    ],
    related: ["average-length-of-stay", "readmission-rate-30d", "bed-occupancy-rate"],
    exercise: {
      prompt: {
        ar: "وحدة عناية مركزة سجلت خلال ربع سنة 3 حالات عدوى مجرى دم مرتبطة بالقثطرة المركزية على 1,250 يوم قثطرة مركزية، وحالتي عدوى بولية مرتبطة بالقثطرة على 1,600 يوم قثطرة بولية. احسب المعدل لكل نوع، ثم المعدل المدمج، وبيّن لماذا لا يُنصح بالمعدل المدمج. كم يتغير معدل القثطرة المركزية بحالة واحدة إضافية؟",
        en: "An ICU recorded, over a quarter, 3 central-line bloodstream infections over 1,250 central-line days, and 2 catheter-associated urinary infections over 1,600 urinary-catheter days. Compute the rate for each type, then the pooled rate, and explain why the pooled rate is not advised. How much does the central-line rate move with one extra case?",
      },
      hint: {
        ar: "المعدل = الحالات ÷ أيام الجهاز × 1,000. أثر الحالة الواحدة = 1,000 ÷ أيام الجهاز.",
        en: "Rate = cases ÷ device-days x 1,000. The effect of one case = 1,000 ÷ device-days.",
      },
      answer: {
        ar: "القثطرة المركزية = 3 ÷ 1,250 × 1,000 = 2.4 لكل 1,000 يوم. القثطرة البولية = 2 ÷ 1,600 × 1,000 = 1.25 لكل 1,000 يوم. المعدل المدمج = 5 ÷ 2,850 × 1,000 = 1.75 تقريبًا، وهو رقم يخلط نوعي عدوى مختلفين بأسباب ووسائل وقاية مختلفة، فيتغير لمجرد تغير مزيج الأجهزة لا الممارسة. حالة إضافية واحدة في القثطرة المركزية تضيف 1,000 ÷ 1,250 = 0.8، فيصبح المعدل 3.2 — أي قفزة بنسبة الثلث من حالة واحدة، وهو سبب عرض الأعداد بجانب المعدل.",
        en: "Central line = 3 ÷ 1,250 x 1,000 = 2.4 per 1,000 days. Urinary catheter = 2 ÷ 1,600 x 1,000 = 1.25 per 1,000 days. Pooled = 5 ÷ 2,850 x 1,000 = about 1.75, a figure mixing two infection types with different causes and prevention measures, so it moves when the device mix changes rather than practice. One extra central-line case adds 1,000 ÷ 1,250 = 0.8, taking the rate to 3.2 — a one-third jump from a single case, which is why counts are shown next to the rate.",
      },
    },
    references: [
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع القسمة الآمنة التي تعيد فراغًا عند غياب أيام الجهاز بدل صفر زائف أو خطأ.",
          en: "Reference for safe division that returns blank when there are no device-days instead of a false zero or an error.",
        },
      },
      {
        title: "CALCULATE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/calculate-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع تعديل سياق الترشيح المستخدم لحصر الأحداث المحققة لتعريف المراقبة.",
          en: "Reference for the filter-context modification used to keep only events meeting the surveillance definition.",
        },
      },
    ],
  },

  {
    id: "claim-denial-rate",
    slug: "claim-denial-rate",
    name: "Claim Denial Rate",
    nameAr: "معدل رفض المطالبات",
    domains: ["healthcare"],
    category: { ar: "دورة الإيرادات", en: "Revenue cycle" },
    difficulty: "intermediate",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة المطالبات المقدمة إلى جهات الدفع (شركات التأمين أو الجهات الحكومية) التي رُفضت كليًا أو جزئيًا، وفق طريقة العد المعتمدة. الصيغة الأساسية تعدّ المطالبات، بينما معدل القيمة المرفوضة مقياس مختلف.",
      en: "The share of claims submitted to payers (insurers or government bodies) that were denied fully or partially, under the agreed counting method. The base form counts claims; the denied-value rate is a different measure.",
    },
    whyItMatters: {
      ar: "كل مطالبة مرفوضة إيراد متأخر أو مفقود وتكلفة عمل إضافية لإعادة التقديم أو الاعتراض. تحليل الرفض حسب جهة الدفع والسبب يكشف مشكلات التوثيق والترميز والموافقات المسبقة وإجراءات جهات الدفع، وكثير منها قابل للإصلاح في المصدر.",
      en: "Every denied claim is revenue delayed or lost, plus extra work to resubmit or appeal. Analysing denials by payer and reason exposes documentation, coding, prior-authorization, and payer-process issues, many of which can be fixed at source.",
    },
    interpretation: {
      ar: "معدل 4% يعني أن 4 من كل 100 مطالبة مقدمة رُفضت كليًا أو جزئيًا. لكن الرقم وحده لا يقول كم من المال على المحك: إن تركّز الرفض في مطالبات عالية القيمة فمعدل القيمة المرفوضة سيكون أعلى بكثير. ولأن جهات الدفع تستغرق وقتًا للبت، فالفترات الحديثة تبدو أفضل مما ستكون عليه.",
      en: "A 4% rate means 4 of every 100 submitted claims were denied fully or partially. But the figure alone does not say how much money is at stake: if denials concentrate on high-value claims, the denied-value rate will be much higher. And because payers take time to adjudicate, recent periods look better than they will end up.",
    },
    formula: "Claim Denial % = Denied Claims / Submitted Claims x 100",
    numerator: {
      ar: "المطالبات التي رُفضت كليًا أو جزئيًا عند البت الأول، مع عدّ كل مطالبة أصلية مرة واحدة. إدراج الرفض الجزئي من عدمه قاعدة يجب تثبيتها.",
      en: "Claims denied fully or partially at first adjudication, counting each original claim once. Whether partial denials are included is a rule that must be fixed.",
    },
    denominator: {
      ar: "المطالبات الأصلية المقدمة خلال الفترة، بدون إعادة التقديمات. عدّ إعادة التقديم كمطالبة جديدة يضخّم المقام ويشوّه المعدل.",
      en: "Original claims submitted in the period, excluding resubmissions. Counting a resubmission as a new claim inflates the denominator and distorts the rate.",
    },
    timeGrain: {
      ar: "شهري حسب تاريخ التقديم، مع إظهار نسبة المطالبات التي لم يُبت فيها بعد. بعض المنشآت تقيس حسب تاريخ البت بدلًا من ذلك، ويجب اختيار أحدهما وتوثيقه.",
      en: "Monthly by submission date, showing the share of claims still pending adjudication. Some organizations measure by adjudication date instead; choose one and document it.",
    },
    direction: {
      rising: {
        ar: "الارتفاع يشير إلى مشكلات في التوثيق أو الترميز أو الموافقات المسبقة، أو إلى تغيير في قواعد جهة دفع معينة.",
        en: "A rise points to documentation, coding, or prior-authorization problems, or to a rule change by a particular payer.",
      },
      falling: {
        ar: "الانخفاض قد يعني تحسّنًا حقيقيًا في جودة المطالبات، لكنه قد يعني أيضًا أن مطالبات حديثة لم يُبت فيها بعد، أو تغييرًا في طريقة العد.",
        en: "A fall may mean a real improvement in claim quality, but it may also mean recent claims are not yet adjudicated, or a change in the counting method.",
      },
      caveat: {
        ar: "الأقل أفضل عادةً، لكن قارن معدل العدد مع معدل القيمة ومع نسبة المطالبات المعلقة قبل أي حكم. ولا نقدم أي نسبة كمعيار مقبول، فالمعدل يعتمد على مزيج جهات الدفع والخدمات.",
        en: "Lower is usually better, but compare the count rate with the value rate and with the pending share before judging. We offer no rate as an acceptable benchmark; it depends on payer and service mix.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "المطالبات الأصلية المقدمة في الشهر", en: "Original claims submitted in the month" }, value: "2,000" },
        { label: { ar: "مطالبات رُفضت كليًا أو جزئيًا", en: "Claims denied fully or partially" }, value: "80" },
      ],
      steps: [
        { label: { ar: "معدل الرفض (على أساس العدد)", en: "Denial rate (count basis)" }, expression: "80 ÷ 2,000 × 100 = 4.0%" },
      ],
      result: { label: { ar: "معدل رفض المطالبات", en: "Claim denial rate" }, value: "4.0%" },
      reading: {
        ar: "هذا معدل على أساس عدد المطالبات. لمعرفة الأثر المالي يُحسب معدل القيمة المرفوضة بجانبه، ولمعرفة إن كان الرقم نهائيًا تُعرض نسبة المطالبات التي لم يُبت فيها بعد.",
        en: "This is a claim-count rate. To see the financial impact, the denied-value rate is computed alongside; to know whether the figure is final, the share of claims still pending is shown.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "معدل الرفض بالعدد والقيمة مع نسبة المعلق", en: "Denial rate by count and value, with pending share" },
        code: `-- One row per submission; SubmissionNo = 1 isolates the original claim
-- so resubmissions neither inflate the denominator nor double-count denials.
Submitted Claims :=
CALCULATE (
    COUNTROWS ( 'Claim' ),
    'Claim'[SubmissionNo] = 1
)

Denied Claims :=
CALCULATE (
    COUNTROWS ( 'Claim' ),
    'Claim'[SubmissionNo] = 1,
    'Claim'[InitialStatus] IN { "Denied", "PartiallyDenied" }
)

Claim Denial % :=
DIVIDE ( [Denied Claims], [Submitted Claims] )

-- Value basis: a different KPI, not a substitute.
Denied Value % :=
DIVIDE (
    CALCULATE ( SUM ( 'Claim'[DeniedAmount] ), 'Claim'[SubmissionNo] = 1 ),
    CALCULATE ( SUM ( 'Claim'[BilledAmount] ), 'Claim'[SubmissionNo] = 1 )
)

-- Adjudication lag: a high pending share means the rate is not final yet.
Pending Claims % :=
DIVIDE (
    CALCULATE (
        COUNTROWS ( 'Claim' ),
        'Claim'[SubmissionNo] = 1,
        'Claim'[InitialStatus] = "Pending"
    ),
    [Submitted Claims]
)`,
        assumptions: [
          {
            ar: "'Claim' بحبيبية تقديم واحد، وSubmissionNo يساوي 1 للتقديم الأصلي ويزيد مع كل إعادة تقديم لنفس المطالبة.",
            en: "'Claim' is at one row per submission, with SubmissionNo equal to 1 for the original and increasing with each resubmission of the same claim.",
          },
          {
            ar: "InitialStatus يحمل نتيجة البت الأول للتقديم الأصلي بالقيم Paid وDenied وPartiallyDenied وPending. إن كانت السياسة لا تحتسب الرفض الجزئي فاحذف PartiallyDenied من القائمة.",
            en: "InitialStatus holds the first adjudication outcome of the original submission, with values Paid, Denied, PartiallyDenied, and Pending. If policy excludes partial denials, remove PartiallyDenied from the list.",
          },
          {
            ar: "DeniedAmount وBilledAmount بعملة واحدة؛ في حال تعدد العملات يلزم تحويل موحد قبل الجمع.",
            en: "DeniedAmount and BilledAmount are in a single currency; with multiple currencies a consistent conversion is needed before summing.",
          },
          {
            ar: "جدول 'Date' مرتبط بـ Claim[SubmitDate]، فتُنسب المطالبة إلى شهر تقديمها وتظهر الأشهر الحديثة بنسبة معلق مرتفعة.",
            en: "'Date' relates to Claim[SubmitDate], so each claim is attributed to its submission month and recent months show a high pending share.",
          },
        ],
        requires: ["Claim[SubmissionNo]", "Claim[InitialStatus]", "Claim[DeniedAmount]", "Claim[BilledAmount]", "Claim[SubmitDate]"],
      },
    ],
    model: [
      {
        table: "Claim",
        grain: { ar: "تقديم واحد لمطالبة واحدة", en: "One submission of one claim" },
        columns: ["ClaimSubmissionId", "OriginalClaimId", "SubmissionNo", "PayerId", "SubmitDate", "AdjudicationDate", "InitialStatus", "DenialReasonCode", "BilledAmount", "DeniedAmount"],
        role: { ar: "جدول الحقائق الأساسي؛ لا يحتاج بيانات سريرية أو شخصية مفصلة", en: "Primary fact; needs no detailed clinical or personal data" },
      },
      {
        table: "Payer",
        grain: { ar: "جهة دفع واحدة", en: "One payer" },
        columns: ["PayerId", "PayerName", "PayerType"],
        role: { ar: "المحور الأول في مصفوفة جهة الدفع مقابل السبب", en: "First axis of the payer-by-reason matrix" },
      },
      {
        table: "DenialReason",
        grain: { ar: "رمز سبب رفض واحد", en: "One denial reason code" },
        columns: ["DenialReasonCode", "ReasonLabel", "ReasonGroup"],
        role: { ar: "يجمع الرموز في مجموعات قابلة للإجراء (توثيق، ترميز، موافقة مسبقة، أهلية)", en: "Groups codes into actionable families (documentation, coding, prior authorization, eligibility)" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "QuarterKey"],
        role: { ar: "يُربط بـ SubmitDate", en: "Related to SubmitDate" },
      },
    ],
    visuals: [
      {
        pattern: "decomposition-tree",
        why: {
          ar: "تفكيك المطالبات المرفوضة حسب جهة الدفع ثم مجموعة السبب ثم الخدمة يجيب مباشرة عن أين يجب التدخل، وهو المقابل التفاعلي لمصفوفة جهة الدفع والسبب في المرجع.",
          en: "Breaking denied claims down by payer, then reason group, then service answers directly where to intervene; it is the interactive counterpart of the source's payer-by-reason matrix.",
        },
      },
      {
        pattern: "stacked-bar",
        why: {
          ar: "اتجاه الرفض الشهري مكدسًا حسب مجموعة السبب يُظهر إن كان الارتفاع من سبب واحد جديد أو من كل الأسباب.",
          en: "The monthly denial trend stacked by reason group shows whether a rise comes from one new cause or from all of them.",
        },
      },
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "معدل العدد ومعدل القيمة ونسبة المعلق في بطاقة واحدة تمنع قراءة رقم غير نهائي أو غير كامل كأنه الحقيقة.",
          en: "Count rate, value rate, and pending share in one card stop a provisional or partial figure being read as the truth.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "الخلط بين معدل العدد ومعدل القيمة المرفوضة. قد يكون الأول 4% والثاني ضعفه، وكل منهما يجيب عن سؤال مختلف؛ يجب أن يحمل كل رقم اسمه الصريح.",
        en: "Confusing the count rate with the denied-value rate. The first may be 4% and the second double that, and each answers a different question; every figure must carry its explicit name.",
      },
      {
        ar: "عدّ إعادة التقديم كمطالبة جديدة. المطالبة التي رُفضت ثم قُبلت بعد إعادة التقديم تظهر حينها كمطالبتين، فيتضخم المقام وينخفض المعدل زورًا.",
        en: "Counting a resubmission as a new claim. A claim denied then accepted on resubmission appears as two claims, inflating the denominator and falsely lowering the rate.",
      },
      {
        ar: "تجاهل تأخر البت. المطالبات المعلقة في الأشهر الحديثة تظهر كأنها غير مرفوضة، فيبدو كل شهر حديث أفضل من الأشهر السابقة.",
        en: "Ignoring adjudication lag. Pending claims in recent months appear as not denied, so every recent month looks better than earlier ones.",
      },
      {
        ar: "الخلط بين الرفض الأول والرفض النهائي بعد الاعتراض. الأول يقيس جودة التقديم، والثاني يقيس الخسارة الفعلية؛ لا يجوز تبديلهما بين الفترات.",
        en: "Mixing initial denial with final denial after appeal. The first measures submission quality, the second actual loss; they must not be swapped between periods.",
      },
      {
        ar: "رموز أسباب غير موحدة بين جهات الدفع. بدون جدول تجميع للأسباب تتحول مصفوفة جهة الدفع والسبب إلى مئات الرموز غير القابلة للإجراء.",
        en: "Unharmonized reason codes across payers. Without a reason-grouping table, the payer-by-reason matrix becomes hundreds of non-actionable codes.",
      },
    ],
    variants: [
      {
        label: { ar: "معدل القيمة المرفوضة", en: "Denied-value rate" },
        formula: "Denied Amount / Billed Amount x 100",
        difference: {
          ar: "يقيس الأثر المالي لا عدد الحالات. أنسب للإدارة المالية، لكنه قد يخفي رفضًا متكررًا لمطالبات صغيرة يستهلك جهد الفريق.",
          en: "Measures financial impact rather than case count. Better suited to finance leadership, but it may hide frequent denials of small claims that consume staff effort.",
        },
      },
      {
        label: { ar: "معدل الرفض على المطالبات المبتوت فيها", en: "Denial rate on adjudicated claims" },
        formula: "Denied Claims / Adjudicated Claims x 100",
        difference: {
          ar: "يستبعد المعلق من المقام فيعطي قراءة أكثر واقعية للأشهر الحديثة، لكنه يتغير كلما بُت في مطالبات إضافية ولا يطابق المقام الأصلي.",
          en: "Excludes pending claims from the denominator, giving a more realistic reading for recent months, but it shifts as more claims are adjudicated and does not match the original denominator.",
        },
      },
      {
        label: { ar: "معدل الرفض النهائي", en: "Final denial rate" },
        formula: "Claims Still Denied After Appeals / Submitted Claims x 100",
        difference: {
          ar: "يقيس الإيراد المفقود فعليًا بعد الاعتراض، ولا يستقر إلا بعد أشهر من التقديم.",
          en: "Measures revenue actually lost after appeals, and only stabilizes months after submission.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "إضافة المطالبات المعلقة إلى المقام دون البسط تخفض المعدل حتمًا، ولذلك يكون المعدل على المقدَّم أقل من أو يساوي المعدل على المبتوت فيه لنفس الفترة.",
          en: "Keeping pending claims in the denominator but not the numerator necessarily lowers the rate, so the rate on submitted claims is less than or equal to the rate on adjudicated claims for the same period.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "قياس الرفض على أساس المطالبة الأصلية والبت الأول، مع تحليله حسب جهة الدفع ومجموعة السبب، ممارسة شائعة في إدارة دورة الإيرادات.",
          en: "Measuring denial on the original claim and first adjudication, analysed by payer and reason group, is common practice in revenue-cycle management.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "إدراج الرفض الجزئي، وتاريخ النسبة (التقديم أم البت)، ومعاملة إعادة التقديم، وتجميع رموز الأسباب — قرارات لكل منشأة.",
          en: "Including partial denials, the attribution date (submission or adjudication), resubmission handling, and reason-code grouping are decisions for each organization.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (80 من 2,000 مطالبة) وأرقام التمرين من تأليفنا للتوضيح ولا تمثل منشأة حقيقية ولا معيارًا مقبولًا.",
          en: "The example figures (80 of 2,000 claims) and the exercise figures are invented for illustration and represent neither a real organization nor an acceptable benchmark.",
        },
      },
    ],
    related: ["dso", "operating-cash-flow", "average-length-of-stay"],
    exercise: {
      prompt: {
        ar: "قدّمت منشأة 3,500 مطالبة أصلية في شهر بقيمة إجمالية 4,200,000. حتى الآن بُت في 3,150 منها وبقيت 350 معلقة. رُفضت 189 مطالبة كليًا أو جزئيًا بقيمة مرفوضة 336,000. احسب معدل الرفض على المقدَّم، وعلى المبتوت فيه، ومعدل القيمة المرفوضة، وفسّر الفروق.",
        en: "An organization submitted 3,500 original claims in a month, billed at 4,200,000 in total. So far 3,150 have been adjudicated and 350 remain pending. 189 claims were denied fully or partially, with a denied value of 336,000. Compute the denial rate on submitted claims, on adjudicated claims, and the denied-value rate, and explain the differences.",
      },
      hint: {
        ar: "نفس البسط (189) مع مقامين مختلفين، ثم قيمة مرفوضة على قيمة مطالب بها.",
        en: "The same numerator (189) over two different denominators, then denied value over billed value.",
      },
      answer: {
        ar: "على المقدَّم = 189 ÷ 3,500 = 5.4%. على المبتوت فيه = 189 ÷ 3,150 = 6.0%. معدل القيمة = 336,000 ÷ 4,200,000 = 8.0%. الفرق بين 5.4% و6.0% سببه 350 مطالبة معلقة؛ بعضها سيُرفض لاحقًا فيرتفع المعدل على المقدَّم. ومعدل القيمة (8.0%) أعلى من معدل العدد لأن الرفض تركّز في مطالبات أعلى قيمة من المتوسط، أي أن الأثر المالي أكبر مما يوحي به عدد الحالات.",
        en: "On submitted = 189 ÷ 3,500 = 5.4%. On adjudicated = 189 ÷ 3,150 = 6.0%. Value rate = 336,000 ÷ 4,200,000 = 8.0%. The gap between 5.4% and 6.0% comes from the 350 pending claims; some will be denied later, raising the submitted-basis rate. The value rate (8.0%) exceeds the count rate because denials concentrated on above-average-value claims, so the financial impact is larger than the case count suggests.",
      },
    },
    references: [
      {
        title: "CALCULATE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/calculate-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع تعديل سياق الترشيح المستخدم لحصر التقديم الأصلي وحالات الرفض والمعلق.",
          en: "Reference for the filter-context modification used to isolate original submissions, denials, and pending claims.",
        },
      },
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع القسمة الآمنة لمعدلات العدد والقيمة والمعلق.",
          en: "Reference for safe division in the count, value, and pending rates.",
        },
      },
    ],
  },
];
