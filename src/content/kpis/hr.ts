import type { Kpi } from "../types";

export const hrKpis: Kpi[] = [
  {
    id: "time-to-hire",
    slug: "time-to-hire",
    name: "Time to Hire",
    nameAr: "مدة التوظيف",
    domains: ["hr"],
    category: { ar: "كفاءة التوظيف", en: "Hiring efficiency" },
    difficulty: "beginner",
    unit: { ar: "أيام تقويمية", en: "Calendar days" },
    aggregation: "non-additive",
    definition: {
      ar: "عدد الأيام بين دخول المرشح إلى مسار التوظيف وقبوله العرض الوظيفي. في التعريف الشائع تبدأ الساعة بتاريخ تقديم الطلب وتتوقف بتاريخ قبول العرض، لكن نقطتي البداية والنهاية تختلفان من مؤسسة لأخرى ويجب تثبيتهما كتابةً.",
      en: "The number of days between a candidate entering the hiring pipeline and accepting the job offer. In the common convention the clock starts at the application date and stops at offer acceptance, but both start and end events vary between organizations and must be fixed in writing.",
    },
    whyItMatters: {
      ar: "المرشحون الجيدون لا ينتظرون طويلًا؛ كل أسبوع إضافي في المسار يرفع احتمال قبولهم عرضًا آخر. والمؤشر يكشف أين تتعطل العملية: فرز السير الذاتية، أو جدولة المقابلات، أو اعتماد العرض.",
      en: "Strong candidates do not wait long; every extra week in the pipeline raises the chance they accept another offer. The metric also reveals where the process stalls: CV screening, interview scheduling, or offer approval.",
    },
    interpretation: {
      ar: "وسيط 20 يومًا يعني أن نصف المعيّنين قبلوا العرض خلال 20 يومًا أو أقل من تقديمهم. المؤشر يقيس تجربة المرشح وسرعة فريق الاستقطاب، لا سرعة سدّ الشاغر؛ فالوظيفة ربما ظلت مفتوحة أسابيع قبل أن يتقدم هذا المرشح أصلًا.",
      en: "A median of 20 days means half of hires accepted within 20 days or less of applying. The metric measures candidate experience and recruiter speed, not how fast the vacancy was closed; the position may have been open for weeks before this candidate even applied.",
    },
    formula: "Time to Hire (days) = Offer Acceptance Date - Candidate Application Date",
    numerator: {
      ar: "لكل معيَّن: الفرق بالأيام بين تاريخ قبول العرض وتاريخ تقديم الطلب. ثم يُلخَّص عبر المعيَّنين بالوسيط أو المتوسط.",
      en: "Per hire: the day difference between offer acceptance and application date. It is then summarised across hires with the median or the mean.",
    },
    timeGrain: {
      ar: "يُنسب كل معيَّن إلى الفترة التي قبل فيها العرض (حدث النهاية)، ويُعرض شهريًا أو ربعيًا. الأحجام الشهرية الصغيرة لكل دور وظيفي تجعل الربعي أصدق.",
      en: "Each hire is attributed to the period in which the offer was accepted (the end event) and reported monthly or quarterly. Small monthly volumes per role make quarterly figures more reliable.",
    },
    direction: {
      rising: {
        ar: "ارتفاع المدة يعني مسارًا أبطأ وخطرًا أكبر بخسارة المرشحين. ابحث عن المرحلة التي طالت قبل أي استنتاج.",
        en: "A rising figure means a slower pipeline and a higher risk of losing candidates. Find which stage lengthened before drawing any conclusion.",
      },
      falling: {
        ar: "انخفاضها جيد عادة، لكنه قد يعني تقليص مراحل التقييم أو تعيين أول مرشح متاح، وأثر ذلك يظهر لاحقًا في الدوران المبكر.",
        en: "A decline is usually good, but it can mean assessment stages were cut or the first available candidate was hired, and that shows up later as early attrition.",
      },
      caveat: {
        ar: "تغيّر مزيج الوظائف يحرك الرقم دون أي تغيّر في الأداء: ربع مليء بوظائف قيادية سيبدو أبطأ من ربع مليء بوظائف تشغيلية. قارن الدور بالدور.",
        en: "A change in role mix moves the figure with no change in performance: a quarter full of senior roles will look slower than one full of frontline roles. Compare like role with like role.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "تاريخ تقديم الطلب", en: "Application date" }, value: "1 May" },
        { label: { ar: "تاريخ قبول العرض", en: "Offer acceptance date" }, value: "21 May" },
      ],
      steps: [
        { label: { ar: "الفرق بين التاريخين", en: "Difference between the dates" }, expression: "21 May − 1 May = 20 days" },
        { label: { ar: "طريقة العدّ", en: "Counting convention" }, expression: "End − Start (not inclusive) = 20, not 21" },
      ],
      result: { label: { ar: "مدة التوظيف", en: "Time to hire" }, value: "20 calendar days" },
      reading: {
        ar: "استغرق هذا المرشح 20 يومًا تقويميًا من التقديم حتى القبول. لاحظ أن طريقة العدّ جزء من التعريف: عدّ اليومين معًا يعطي 21، وعدّ أيام العمل فقط يعطي رقمًا أصغر. اختر طريقة واحدة وطبّقها على الجميع.",
        en: "This candidate took 20 calendar days from application to acceptance. Note that the counting rule is part of the definition: counting both days gives 21, and counting only working days gives a smaller number. Pick one rule and apply it to everyone.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "وسيط ومتوسط مدة التوظيف", en: "Median and mean time to hire" },
        code: `-- One row per application. Only accepted offers count as hires.
Hires :=
CALCULATE (
    COUNTROWS ( 'Application' ),
    NOT ISBLANK ( 'Application'[OfferAcceptedDate] )
)

-- Median is the headline: a few very slow hires distort the mean.
Time to Hire Median (Days) :=
MEDIANX (
    FILTER (
        'Application',
        NOT ISBLANK ( 'Application'[OfferAcceptedDate] )
    ),
    DATEDIFF (
        'Application'[ApplicationDate],
        'Application'[OfferAcceptedDate],
        DAY
    )
)

-- Show the mean next to the median: a large gap signals outliers.
Time to Hire Mean (Days) :=
AVERAGEX (
    FILTER (
        'Application',
        NOT ISBLANK ( 'Application'[OfferAcceptedDate] )
    ),
    DATEDIFF (
        'Application'[ApplicationDate],
        'Application'[OfferAcceptedDate],
        DAY
    )
)`,
        assumptions: [
          {
            ar: "'Date'[Date] مرتبط بعلاقة نشطة مع 'Application'[OfferAcceptedDate]، فيُنسب كل معيَّن إلى فترة قبوله العرض. إن ربطت التقويم بتاريخ التقديم فستقيس دفعة المتقدمين، وستظهر الأشهر الأخيرة ناقصة لأن كثيرًا منهم لم يُعيَّن بعد.",
            en: "'Date'[Date] has an active relationship to 'Application'[OfferAcceptedDate], so each hire lands in the period the offer was accepted. Relating the calendar to the application date instead measures applicant cohorts, and recent months will look incomplete because many of those applicants are not hired yet.",
          },
          {
            ar: "DATEDIFF بوحدة DAY يعدّ الأيام التقويمية (النهاية ناقص البداية). لحساب أيام العمل تحتاج جدول تقويم فيه عمود IsWorkingDay.",
            en: "DATEDIFF with DAY counts calendar days (end minus start). Counting working days requires a calendar table with an IsWorkingDay column.",
          },
          {
            ar: "إن تقدّم المرشح نفسه لأكثر من وظيفة فلكل طلب صف مستقل؛ المدة تُحسب للطلب الذي انتهى بقبول العرض فقط.",
            en: "If the same candidate applies to several roles, each application is a separate row; duration is computed only for the application that ended in an accepted offer.",
          },
        ],
        requires: ["Application[ApplicationDate]", "Application[OfferAcceptedDate]", "Date[Date]"],
      },
    ],
    model: [
      {
        table: "Application",
        grain: { ar: "طلب توظيف واحد لكل مرشح لكل وظيفة شاغرة", en: "One application per candidate per requisition" },
        columns: ["ApplicationId", "CandidateKey", "RequisitionId", "ApplicationDate", "OfferAcceptedDate", "CurrentStage", "SourceChannel", "RecruiterId"],
        role: {
          ar: "جدول الحقائق. CandidateKey مفتاح مستعار لا يحمل اسمًا أو بيانات تواصل أو بيانات ديموغرافية؛ بيانات المرشحين الشخصية تبقى في نظام التوظيف ولا تُنقل إلى النموذج التحليلي.",
          en: "The fact table. CandidateKey is a pseudonymous key carrying no name, contact details, or demographics; candidate personal data stays in the ATS and is not copied into the analytical model.",
        },
      },
      {
        table: "Requisition",
        grain: { ar: "طلب شغل وظيفة واحد لكل صف", en: "One requisition per row" },
        columns: ["RequisitionId", "JobRoleId", "DepartmentId", "OpenDate", "Status"],
        role: { ar: "بُعد يربط الطلب بالدور الوظيفي والقسم", en: "Dimension linking the application to role and department" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "Quarter", "Year", "IsWorkingDay"],
        role: { ar: "مرتبط بـ OfferAcceptedDate (حدث النهاية)", en: "Related to OfferAcceptedDate (the end event)" },
      },
      {
        table: "Recruiter",
        grain: { ar: "مسؤول توظيف واحد لكل صف", en: "One recruiter per row" },
        columns: ["RecruiterId", "RecruiterName", "Team"],
        role: { ar: "بُعد للتحليل حسب مسؤول التوظيف، مع ضبط الوصول عبر RLS", en: "Dimension for per-recruiter analysis, access-controlled with RLS" },
      },
    ],
    visuals: [
      {
        pattern: "pl-matrix",
        why: {
          ar: "مصفوفة الدور الوظيفي × القسم تعرض الوسيط وعدد المعيّنين معًا، فلا يُقرأ وسيط مبني على معيَّنين اثنين كأنه اتجاه.",
          en: "A role-by-department matrix shows the median alongside the hire count, so a median built on two hires is not read as a trend.",
        },
      },
      {
        pattern: "decomposition-tree",
        why: {
          ar: "التفكيك حسب القسم ثم الدور ثم مسؤول التوظيف يحدد أين يتركز البطء بدل لوم العملية كلها.",
          en: "Breaking down by department, then role, then recruiter locates where the delay concentrates instead of blaming the whole process.",
        },
      },
      {
        pattern: "period-over-period",
        why: {
          ar: "مقارنة وسيط الربع الحالي بالسابق تكشف أثر أي تغيير في العملية، بشرط تثبيت مزيج الأدوار.",
          en: "Comparing this quarter's median with the last reveals the effect of process changes, provided the role mix is held constant.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "الخلط بين مدة التوظيف ومدة شغل الوظيفة. الأولى تبدأ من تقديم المرشح، والثانية من فتح الطلب؛ عرضهما تحت اسم واحد يجعل المقارنات بين الفرق بلا معنى.",
        en: "Confusing time to hire with time to fill. The first starts at the candidate's application, the second at requisition opening; reporting both under one name makes cross-team comparisons meaningless.",
      },
      {
        ar: "عدم توثيق حدثي البداية والنهاية. بعض الفرق تبدأ من أول تواصل من المستقطِب وتنتهي عند بدء العمل، وهذا قد يضيف أسابيع مقارنة بتعريف التقديم حتى القبول.",
        en: "Not documenting the start and end events. Some teams start at first recruiter contact and stop at start date, which can add weeks compared with the application-to-acceptance definition.",
      },
      {
        ar: "الاعتماد على المتوسط وحده. معيَّن واحد استغرق 90 يومًا يرفع متوسط خمسة معيّنين بشكل كبير؛ الوسيط هو الرقم الرئيسي والمتوسط مؤشر مساند لرصد القيم الشاذة.",
        en: "Relying on the mean alone. One hire that took 90 days drags up the mean of five hires sharply; the median is the headline and the mean a supporting signal for outliers.",
      },
      {
        ar: "مقارنة مسؤولي التوظيف بأعداد صغيرة. وسيط مبني على ثلاثة معيّنين ليس حكمًا على الأداء، ونشر أداء الأفراد على نطاق واسع مسألة خصوصية تتطلب ضبط الوصول عبر RLS.",
        en: "Comparing recruiters on tiny counts. A median built on three hires is not a performance verdict, and publishing individual performance widely is a privacy matter that needs RLS-controlled access.",
      },
      {
        ar: "نقل بيانات المرشحين الشخصية إلى النموذج. الأسماء والأعمار والجنسية لا تلزم لحساب المؤشر؛ استخدم مفتاحًا مستعارًا والتزم بفترات الاحتفاظ بالبيانات التي يفرضها القانون المحلي.",
        en: "Copying candidate personal data into the model. Names, ages, and nationality are not needed to compute the metric; use a pseudonymous key and respect the data-retention periods required by local law.",
      },
    ],
    variants: [
      {
        label: { ar: "من التقديم حتى بدء العمل", en: "Application to start date" },
        formula: "Start Date - Application Date",
        difference: {
          ar: "يشمل فترة الإشعار لدى صاحب العمل السابق والإجراءات النظامية، وهي خارج سيطرة فريق التوظيف. مفيد لتخطيط القوى العاملة لا لتقييم سرعة الاستقطاب.",
          en: "Includes the notice period at the previous employer and onboarding formalities, which recruiting does not control. Useful for workforce planning, not for judging recruiting speed.",
        },
      },
      {
        label: { ar: "مدة كل مرحلة", en: "Time in stage" },
        formula: "Stage Exit Date - Stage Entry Date, per pipeline stage",
        difference: {
          ar: "يقسم المدة الكلية إلى مراحل (فرز، مقابلات، عرض)، فيحدد موضع التأخير بدقة. يتطلب جدول أحداث مراحل بدل تاريخين فقط.",
          en: "Splits the total into stages (screening, interviews, offer) and pinpoints the delay. Requires a stage-event table rather than just two dates.",
        },
      },
      {
        label: { ar: "بأيام العمل", en: "In working days" },
        formula: "Working days between Application Date and Offer Acceptance Date",
        difference: {
          ar: "يستبعد العطل ونهايات الأسبوع، فيُنصف الأشهر التي فيها أعياد طويلة. لكنه لا يطابق ما يشعر به المرشح الذي ينتظر أيامًا تقويمية.",
          en: "Excludes weekends and holidays, which is fairer to months with long public holidays. But it does not match what the waiting candidate experiences in calendar days.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "الوسيط لا يتأثر بقيمة شاذة واحدة في الطرف، بينما يتحرك المتوسط بمقدار القيمة الشاذة مقسومًا على عدد المعيّنين.",
          en: "The median is unaffected by a single extreme value at the tail, while the mean moves by that outlier's excess divided by the number of hires.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "قياس المدة من تقديم الطلب حتى قبول العرض هو أحد التعريفات الشائعة، وليس معيارًا موحدًا؛ كثير من المؤسسات تستخدم نقاط بداية ونهاية أخرى.",
          en: "Measuring from application to offer acceptance is one common convention, not a single standard; many organizations use other start and end points.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "اختيار الأيام التقويمية أو أيام العمل، ومعاملة المرشحين الداخليين والمرشحين المعاد تفعيلهم من قاعدة بيانات سابقة، سياسات داخلية يجب توثيقها.",
          en: "Choosing calendar or working days, and how internal candidates and candidates reactivated from an older talent pool are treated, are internal policies that must be documented.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "تاريخا المثال (1 و21 مايو) من تأليفنا للتعليم فقط، ولا يمثلان مدة توظيف مرجعية.",
          en: "The example dates (1 and 21 May) are invented for teaching only and do not represent a reference time to hire.",
        },
      },
    ],
    related: ["time-to-fill", "cost-per-hire", "employee-turnover-rate"],
    exercise: {
      prompt: {
        ar: "خمسة معيّنين في قسم واحد خلال الربع، ومدد توظيفهم بالأيام: 12، 15، 18، 22، 73. احسب المتوسط والوسيط، وحدد أيهما تعرضه كرقم رئيسي ولماذا.",
        en: "Five hires in one department during the quarter, with times to hire in days of 12, 15, 18, 22, and 73. Compute the mean and the median, and decide which one to show as the headline and why.",
      },
      hint: {
        ar: "رتّب القيم؛ الوسيط هو القيمة الثالثة من خمس. ثم لاحظ كم يبعد المتوسط عنه.",
        en: "Sort the values; the median is the third of five. Then see how far the mean sits from it.",
      },
      answer: {
        ar: "المجموع = 12 + 15 + 18 + 22 + 73 = 140، والمتوسط = 140 ÷ 5 = 28 يومًا. الوسيط = 18 يومًا. الفرق بينهما (10 أيام) كله بسبب معيَّن واحد استغرق 73 يومًا. اعرض الوسيط (18) كرقم رئيسي، واعرض المتوسط بجانبه كتنبيه، ثم افحص حالة الـ 73 يومًا منفردة: هل هي وظيفة نادرة، أم عرض تعطل في الاعتماد؟",
        en: "Sum = 12 + 15 + 18 + 22 + 73 = 140, so the mean = 140 ÷ 5 = 28 days. The median = 18 days. The whole 10-day gap comes from one hire that took 73 days. Show the median (18) as the headline, show the mean beside it as a warning, then examine the 73-day case on its own: was it a scarce-skill role, or an offer stuck in approval?",
      },
    },
    references: [
      {
        title: "MEDIANX function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/medianx-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع حساب الوسيط لتعبير يُقيَّم لكل صف، وهو الملخص الرئيسي لهذا المؤشر.",
          en: "Reference for the median of a row-wise expression, the headline summary for this metric.",
        },
      },
      {
        title: "DATEDIFF function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/datediff-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع حساب عدد الأيام بين تاريخين بوحدة محددة.",
          en: "Reference for counting the days between two dates in a chosen interval.",
        },
      },
    ],
  },

  {
    id: "time-to-fill",
    slug: "time-to-fill",
    name: "Time to Fill",
    nameAr: "مدة شغل الوظيفة",
    domains: ["hr"],
    category: { ar: "كفاءة التوظيف", en: "Hiring efficiency" },
    difficulty: "intermediate",
    unit: { ar: "أيام تقويمية", en: "Calendar days" },
    aggregation: "non-additive",
    definition: {
      ar: "عدد الأيام من فتح طلب شغل الوظيفة (Requisition) حتى قبول مرشح للعرض. يقيس المدة التي بقي فيها الشاغر مفتوحًا من منظور المؤسسة لا من منظور المرشح.",
      en: "The number of days from opening a job requisition until a candidate accepts the offer. It measures how long the vacancy stayed open from the organization's perspective rather than the candidate's.",
    },
    whyItMatters: {
      ar: "كل يوم يبقى فيه الشاغر مفتوحًا هو عمل لا يُنجز أو يُحمَّل على زملاء آخرين. المؤشر يربط التوظيف بتخطيط القوى العاملة: إن كانت الوظيفة تحتاج 60 يومًا لشغلها فيجب فتح الطلب قبل الحاجة بشهرين.",
      en: "Every day a vacancy stays open is work either left undone or loaded onto colleagues. The metric links recruiting to workforce planning: if a role takes 60 days to fill, the requisition must open two months before the need.",
    },
    interpretation: {
      ar: "وسيط 24 يومًا يعني أن نصف الشواغر المشغولة في الفترة أُغلقت خلال 24 يومًا أو أقل من فتحها. الرقم يشمل وقت اعتماد الطلب والإعلان وانتظار المتقدمين، وكلها قبل أن تبدأ ساعة مدة التوظيف لأي مرشح.",
      en: "A median of 24 days means half of the vacancies filled in the period closed within 24 days or less of opening. It includes approval, advertising, and waiting for applicants, all of which happen before the time-to-hire clock starts for any candidate.",
    },
    formula: "Time to Fill (days) = Accepted Offer Date - Requisition Open Date",
    numerator: {
      ar: "لكل طلب شغل وظيفة مكتمل: الفرق بالأيام بين تاريخ قبول العرض وتاريخ فتح الطلب، ثم يُلخَّص عبر الطلبات بالوسيط أو المتوسط.",
      en: "Per filled requisition: the day difference between offer acceptance and requisition opening, then summarised across requisitions with the median or the mean.",
    },
    timeGrain: {
      ar: "يُنسب الطلب إلى الفترة التي شُغل فيها (قبول العرض). الطلبات المفتوحة لا تدخل في المؤشر، لذا يجب عرض عمر الطلبات المفتوحة بجانبه وإلا غابت أبطأ الحالات.",
      en: "A requisition is attributed to the period it was filled (offer accepted). Open requisitions are not in the metric, so the age of open requisitions must be shown alongside it or the slowest cases disappear.",
    },
    direction: {
      rising: {
        ar: "ارتفاع المدة يشير إلى صعوبة في سوق المهارات أو بطء في الاعتماد أو الاختيار. افصل بين الأدوار قبل التفسير.",
        en: "A rising figure points to a tight skills market or slow approvals or selection. Split by role before interpreting.",
      },
      falling: {
        ar: "انخفاضها جيد عادة، لكنه قد ينتج عن إلغاء الطلبات الصعبة بدل شغلها؛ الطلبات الملغاة تخرج من المؤشر فيبدو أسرع.",
        en: "A decline is usually good, but it can come from cancelling hard requisitions rather than filling them; cancelled requisitions drop out of the metric and it looks faster.",
      },
      caveat: {
        ar: "المؤشر يقيس الطلبات المكتملة فقط، فهو متحيز نحو السرعة بطبيعته. انخفاضه مع تزايد الطلبات المفتوحة القديمة ليس تحسنًا.",
        en: "The metric only covers completed requisitions, so it is biased towards speed by nature. A decline while old open requisitions pile up is not an improvement.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "تاريخ فتح الطلب", en: "Requisition open date" }, value: "1 June" },
        { label: { ar: "تاريخ قبول العرض", en: "Offer accepted date" }, value: "25 June" },
      ],
      steps: [
        { label: { ar: "الفرق بين التاريخين", en: "Difference between the dates" }, expression: "25 June − 1 June = 24 days" },
      ],
      result: { label: { ar: "مدة شغل الوظيفة", en: "Time to fill" }, value: "24 calendar days" },
      reading: {
        ar: "بقي الشاغر مفتوحًا 24 يومًا تقويميًا. لو تقدّم المرشح الفائز في 10 يونيو لكانت مدة توظيفه 15 يومًا فقط؛ الأيام التسعة الأولى أمضاها الطلب في الاعتماد والإعلان.",
        en: "The vacancy stayed open for 24 calendar days. Had the winning candidate applied on 10 June, their time to hire would be only 15 days; the first nine days were spent on approval and advertising.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "مدة شغل الوظيفة مع خصم فترات الإيقاف وعمر الطلبات المفتوحة", en: "Time to fill net of pauses, plus open-requisition ageing" },
        code: `Filled Requisitions :=
CALCULATE (
    COUNTROWS ( 'Requisition' ),
    'Requisition'[Status] = "Filled"
)

Time to Fill Median (Days) :=
MEDIANX (
    FILTER ( 'Requisition', 'Requisition'[Status] = "Filled" ),
    DATEDIFF ( 'Requisition'[OpenDate], 'Requisition'[FilledDate], DAY )
)

-- Paused days (hiring freeze, budget hold) are subtracted per policy.
Time to Fill Net Median (Days) :=
MEDIANX (
    FILTER ( 'Requisition', 'Requisition'[Status] = "Filled" ),
    DATEDIFF ( 'Requisition'[OpenDate], 'Requisition'[FilledDate], DAY )
        - 'Requisition'[PausedDays]
)

-- Completed requisitions hide the slowest cases: show what is still open.
Open Requisitions Over 45 Days :=
VAR AsOf =
    MAX ( 'Date'[Date] )
RETURN
    CALCULATE (
        COUNTROWS ( 'Requisition' ),
        REMOVEFILTERS ( 'Date' ),
        'Requisition'[OpenDate] <= AsOf - 45,
        ISBLANK ( 'Requisition'[FilledDate] ) || 'Requisition'[FilledDate] > AsOf,
        ISBLANK ( 'Requisition'[CancelledDate] ) || 'Requisition'[CancelledDate] > AsOf
    )`,
        assumptions: [
          {
            ar: "'Date'[Date] مرتبط بعلاقة نشطة مع 'Requisition'[FilledDate]، فيُنسب كل طلب إلى فترة شغله. مقياس الطلبات المفتوحة يزيل هذا الترشيح عمدًا ويقيّم الحالة كما في آخر يوم من الفترة المختارة.",
            en: "'Date'[Date] has an active relationship to 'Requisition'[FilledDate], so each requisition lands in the period it was filled. The open-requisition measure deliberately removes that filter and evaluates status as of the last day of the selected period.",
          },
          {
            ar: "PausedDays عمود محسوب مسبقًا في مصدر البيانات من سجل تغيّر الحالة. إن لم يتوفر سجل الإيقاف فلا يمكن حساب المدة الصافية بدقة.",
            en: "PausedDays is pre-computed at source from the status-change history. Without a pause history the net duration cannot be computed accurately.",
          },
          {
            ar: "الطلب المعاد فتحه (بعد انسحاب المرشح مثلًا) يُسجَّل كطلب جديد بتاريخ فتح جديد، أو يبقى بتاريخه الأصلي — القرار سياسة داخلية، والكود يفترض الخيار الأول.",
            en: "A reopened requisition (after a candidate withdraws, say) is logged either as a new requisition with a new open date or kept with its original date — that is an internal policy, and the code assumes the former.",
          },
          {
            ar: "عتبة 45 يومًا للطلبات المفتوحة مثال توضيحي؛ اضبطها حسب نوع الوظيفة.",
            en: "The 45-day threshold for open requisitions is illustrative; tune it per role type.",
          },
        ],
        requires: ["Requisition[OpenDate]", "Requisition[FilledDate]", "Requisition[CancelledDate]", "Requisition[Status]", "Requisition[PausedDays]", "Date[Date]"],
      },
    ],
    model: [
      {
        table: "Requisition",
        grain: { ar: "طلب شغل وظيفة واحد لكل صف (منصب واحد)", en: "One requisition per row (one position)" },
        columns: ["RequisitionId", "JobRoleId", "DepartmentId", "OpenDate", "FilledDate", "CancelledDate", "Status", "PausedDays", "IsReopened"],
        role: { ar: "جدول الحقائق ومصدر المدة", en: "The fact table and source of the duration" },
      },
      {
        table: "RequisitionStatusHistory",
        grain: { ar: "تغيّر حالة واحد لكل طلب", en: "One status change per requisition" },
        columns: ["RequisitionId", "FromStatus", "ToStatus", "ChangedDate"],
        role: { ar: "مصدر أيام الإيقاف وإعادة الفتح", en: "Source of paused days and reopen events" },
      },
      {
        table: "JobRole",
        grain: { ar: "دور وظيفي واحد لكل صف", en: "One job role per row" },
        columns: ["JobRoleId", "JobFamily", "Grade", "IsScarceSkill"],
        role: { ar: "بُعد المقارنة الأهم: لا تقارن وظيفة قيادية بوظيفة تشغيلية", en: "The key comparison dimension: never compare a senior role with a frontline one" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "Quarter", "Year"],
        role: { ar: "مرتبط بـ FilledDate", en: "Related to FilledDate" },
      },
    ],
    visuals: [
      {
        pattern: "period-over-period",
        why: {
          ar: "خط اتجاه الوسيط شهرًا بشهر مع الفترة المقابلة يوضح ما إذا كانت العملية تتسارع أم تتباطأ.",
          en: "A monthly median trend against the comparable period shows whether the process is speeding up or slowing down.",
        },
      },
      {
        pattern: "pl-matrix",
        why: {
          ar: "مصفوفة الدور الوظيفي × القسم مع عدد الطلبات المشغولة تحدد الأدوار التي تحتاج تخطيطًا مبكرًا.",
          en: "A role-by-department matrix with the filled-requisition count identifies which roles need earlier planning.",
        },
      },
      {
        pattern: "backlog-analysis",
        why: {
          ar: "الطلبات المفتوحة مصنفة حسب العمر تكشف الحالات التي لا يراها المؤشر لأنها لم تكتمل بعد.",
          en: "Open requisitions bucketed by age expose the cases the metric cannot see because they have not completed.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عدم تعريف معاملة الطلبات الموقوفة والملغاة والمعاد فتحها. طلب أُوقف شهرين بسبب تجميد الميزانية يضاعف المدة دون أي تقصير من فريق التوظيف.",
        en: "Not defining how paused, cancelled, and reopened requisitions are handled. A requisition frozen for two months by a budget hold doubles the duration with no recruiting failure at all.",
      },
      {
        ar: "تجاهل الطلبات المفتوحة. المؤشر يحسب المكتمل فقط، فإلغاء الطلبات الصعبة أو تركها مفتوحة يحسّن الرقم ظاهريًا.",
        en: "Ignoring open requisitions. The metric counts only completed ones, so cancelling hard requisitions or leaving them open improves the figure on paper.",
      },
      {
        ar: "طلب واحد لعدة مناصب. إن كان الطلب يغطي خمسة مناصب فحدد هل تتوقف الساعة عند أول قبول أم آخرها، أو قسّمه إلى خمسة صفوف.",
        en: "One requisition for several positions. If a requisition covers five seats, decide whether the clock stops at the first acceptance or the last, or split it into five rows.",
      },
      {
        ar: "استخدام تاريخ اعتماد الطلب بدل تاريخ فتحه أو العكس دون توثيق. الفرق بينهما قد يكون أسبوعين في مؤسسة ذات اعتمادات متعددة المستويات.",
        en: "Using requisition approval date instead of open date, or the reverse, without documenting it. The gap can be two weeks in an organization with multi-level approvals.",
      },
      {
        ar: "المتوسط مع أعداد صغيرة. طلب واحد استغرق 150 يومًا لوظيفة نادرة يشوّه متوسط قسم كامل؛ استخدم الوسيط واعرض العدد.",
        en: "Means over small counts. A single 150-day requisition for a scarce role distorts a whole department's mean; use the median and show the count.",
      },
    ],
    variants: [
      {
        label: { ar: "حتى بدء العمل", en: "Open to start date" },
        formula: "Employee Start Date - Requisition Open Date",
        difference: {
          ar: "يقيس المدة الفعلية لبقاء المنصب شاغرًا، بما فيها فترة الإشعار. أدق لتخطيط التغطية التشغيلية، وأقل عدلًا لتقييم فريق التوظيف.",
          en: "Measures how long the seat actually stayed empty, including notice periods. More accurate for operational coverage planning, less fair for judging recruiting.",
        },
      },
      {
        label: { ar: "من تاريخ الاعتماد", en: "From approval date" },
        formula: "Accepted Offer Date - Requisition Approval Date",
        difference: {
          ar: "يستبعد وقت الاعتماد الداخلي الذي لا يتحكم فيه فريق التوظيف، فيعزل أداءه. لكنه يخفي بطء الاعتمادات الذي قد يكون أكبر مشكلة.",
          en: "Excludes internal approval time that recruiting does not control, isolating its performance. But it hides slow approvals, which may be the biggest problem.",
        },
      },
      {
        label: { ar: "صافي فترات الإيقاف", en: "Net of paused days" },
        formula: "(Accepted Offer Date - Requisition Open Date) - Paused Days",
        difference: {
          ar: "يستبعد أيام التجميد الرسمي. يحتاج سجل تغيّر حالات موثوقًا، ويجب عرضه بجانب المدة الإجمالية لا بدلها.",
          en: "Removes formally frozen days. Requires a reliable status history, and should be shown beside the gross duration, not instead of it.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "للمعيَّن نفسه وبنفس حدث النهاية، مدة شغل الوظيفة أكبر من أو تساوي مدة التوظيف متى كان تقديم المرشح في يوم فتح الطلب أو بعده.",
          en: "For the same hire and the same end event, time to fill is greater than or equal to time to hire whenever the candidate applied on or after the requisition's open date.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "قياس المدة من فتح الطلب حتى قبول العرض تعريف شائع، واستخدام الوسيط بدل المتوسط ممارسة سائدة بسبب القيم الشاذة.",
          en: "Measuring from requisition opening to offer acceptance is a common definition, and using the median instead of the mean is a prevailing practice because of outliers.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "خصم أيام الإيقاف، ومعاملة الطلبات المعاد فتحها والطلبات متعددة المناصب، وحدود العمر للطلبات المفتوحة كلها سياسات داخلية.",
          en: "Subtracting paused days, handling reopened and multi-seat requisitions, and ageing thresholds for open requisitions are all internal policies.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "تاريخا المثال (1 و25 يونيو) من تأليفنا للتعليم ولا يمثلان مدة مرجعية.",
          en: "The example dates (1 and 25 June) are invented for teaching and do not represent a reference duration.",
        },
      },
    ],
    related: ["time-to-hire", "cost-per-hire", "employee-turnover-rate"],
    exercise: {
      prompt: {
        ar: "أربعة طلبات في قسم واحد: (أ) فُتح 3 مارس وشُغل 18 أبريل، وأُوقف 10 أيام بسبب تجميد الميزانية. (ب) فُتح 10 مارس وشُغل 31 مارس. (ج) فُتح 16 مارس وشُغل 15 أبريل. (د) فُتح 5 مارس وأُلغي 20 أبريل. احسب المدة الإجمالية والصافية للطلب (أ)، ثم وسيط المدة الإجمالية للقسم، وحدد ماذا تفعل بالطلب (د).",
        en: "Four requisitions in one department: (A) opened 3 March, filled 18 April, paused 10 days for a budget freeze. (B) opened 10 March, filled 31 March. (C) opened 16 March, filled 15 April. (D) opened 5 March, cancelled 20 April. Compute A's gross and net duration, then the department's median gross duration, and decide what to do with D.",
      },
      hint: {
        ar: "مارس 31 يومًا. الطلب الملغى لم يُشغل، فلا مدة له.",
        en: "March has 31 days. A cancelled requisition was never filled, so it has no duration.",
      },
      answer: {
        ar: "(أ) إجمالي = من 3 مارس إلى 31 مارس 28 يومًا + 18 = 46 يومًا، والصافي = 46 − 10 = 36 يومًا. (ب) = 31 − 10 = 21 يومًا. (ج) = من 16 إلى 31 مارس 15 يومًا + 15 = 30 يومًا. القيم المرتبة: 21، 30، 46، فالوسيط = 30 يومًا (والمتوسط = 97 ÷ 3 = 32.3). الطلب (د) يخرج من المؤشر لأنه لم يُشغل، لكن يجب الإبلاغ عنه في عدد الطلبات الملغاة: ألغي بعد 46 يومًا، وإخفاؤه يجعل القسم يبدو أسرع مما هو.",
        en: "(A) gross = 3 to 31 March is 28 days + 18 = 46 days; net = 46 − 10 = 36 days. (B) = 31 − 10 = 21 days. (C) = 16 to 31 March is 15 days + 15 = 30 days. Sorted: 21, 30, 46, so the median = 30 days (mean = 97 ÷ 3 = 32.3). D is excluded from the metric because it was never filled, but it must be reported in the cancelled-requisition count: it was cancelled after 46 days, and hiding it makes the department look faster than it is.",
      },
    },
    references: [
      {
        title: "MEDIANX function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/medianx-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع حساب وسيط المدة عبر الطلبات المشغولة.",
          en: "Reference for the median duration across filled requisitions.",
        },
      },
      {
        title: "REMOVEFILTERS function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/removefilters-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع إزالة ترشيح التاريخ لتقييم الطلبات المفتوحة كما في نهاية الفترة.",
          en: "Reference for removing the date filter to evaluate open requisitions as of period end.",
        },
      },
    ],
  },

  {
    id: "absenteeism-rate",
    slug: "absenteeism-rate",
    name: "Absenteeism Rate",
    nameAr: "معدل الغياب",
    domains: ["hr", "manufacturing", "healthcare", "customer-service"],
    category: { ar: "الحضور والإنتاجية", en: "Attendance and productivity" },
    difficulty: "intermediate",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة ساعات العمل المجدولة التي فُقدت بسبب غياب غير مخطط له، وفق أنواع الغياب التي تحددها سياسة المؤسسة. الإجازات السنوية المعتمدة مسبقًا لا تُعد غيابًا في التعريف الشائع.",
      en: "The share of scheduled work hours lost to unplanned absence, according to the absence types defined by company policy. Pre-approved annual leave is not counted as absence in the common definition.",
    },
    whyItMatters: {
      ar: "الغياب غير المخطط يفرض عملًا إضافيًا على الحاضرين، أو ساعات إضافية مدفوعة، أو خدمة أضعف. وارتفاعه المستمر في فريق بعينه إشارة مبكرة على ضغط العمل أو ضعف الإدارة، وغالبًا يسبق الاستقالات.",
      en: "Unplanned absence forces extra work onto those present, paid overtime, or weaker service. A persistent rise in one team is an early signal of workload pressure or poor management, and it often precedes resignations.",
    },
    interpretation: {
      ar: "معدل 2% يعني أن ساعتين من كل 100 ساعة مجدولة ضاعتا بسبب الغياب. في فريق من 50 شخصًا بنوبات مدتها 8 ساعات، هذا يعادل تقريبًا شخصًا واحدًا غائبًا كل يوم — وهو رقم يحتاجه مخطط الورديات أكثر من النسبة نفسها.",
      en: "A 2% rate means two of every 100 scheduled hours were lost to absence. In a 50-person team on 8-hour shifts, that is roughly one person absent every day — a figure the shift planner needs more than the percentage itself.",
    },
    formula: "Absenteeism % = Unscheduled Absence Hours / Scheduled Work Hours x 100",
    numerator: {
      ar: "ساعات الغياب غير المخطط (مرضي، طارئ، غير مبرر) التي وقعت في أيام عمل مجدولة، وفق قائمة أنواع الغياب المعتمدة.",
      en: "Unplanned absence hours (sick, emergency, unauthorised) that fell on scheduled working days, according to the approved list of absence types.",
    },
    denominator: {
      ar: "إجمالي ساعات العمل المجدولة في الفترة لنفس مجموعة الموظفين. يجب أن تشمل ساعات من غاب، لأنها كانت مجدولة.",
      en: "Total scheduled work hours in the period for the same employee population. It must include the hours of those who were absent, because they were scheduled.",
    },
    timeGrain: {
      ar: "يُحسب شهريًا ويُعرض كاتجاه. الأنماط الموسمية (الشتاء، مواسم الأعياد) قوية، لذا المقارنة مع نفس الشهر من السنة السابقة أصدق من المقارنة مع الشهر السابق.",
      en: "Computed monthly and shown as a trend. Seasonal patterns (winter, holiday seasons) are strong, so comparing with the same month last year is more honest than with the previous month.",
    },
    direction: {
      rising: {
        ar: "ارتفاعه يعني ضغطًا أكبر على التغطية، وقد يشير إلى إرهاق أو مشكلة إدارية أو موجة مرضية موسمية. التمييز بينها يحتاج سياقًا لا بيانات فقط.",
        en: "A rise means more pressure on coverage and may signal burnout, a management issue, or a seasonal illness wave. Telling them apart needs context, not just data.",
      },
      falling: {
        ar: "انخفاضه جيد ظاهريًا، لكنه قد يعني حضور موظفين مرضى خوفًا من العقوبة، أو ضعفًا في تسجيل الغياب.",
        en: "A decline looks good but can mean sick employees coming in for fear of penalty, or absence being under-recorded.",
      },
      caveat: {
        ar: "الهدف ليس صفرًا. سياسات تضغط لخفض الغياب بأي ثمن قد تنقل المشكلة إلى الحضور المرضي وانخفاض الإنتاجية والعدوى داخل الفريق.",
        en: "Zero is not the goal. Policies pushing absence down at any cost can shift the problem into presenteeism, lower productivity, and illness spreading through the team.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "ساعات الغياب غير المخطط", en: "Unscheduled absence hours" }, value: "320" },
        { label: { ar: "ساعات العمل المجدولة", en: "Scheduled work hours" }, value: "16,000" },
      ],
      steps: [
        { label: { ar: "معدل الغياب", en: "Absenteeism rate" }, expression: "320 ÷ 16,000 = 2.0%" },
        { label: { ar: "بالورديات المكافئة (8 ساعات)", en: "In equivalent 8-hour shifts" }, expression: "320 ÷ 8 = 40 shifts" },
      ],
      result: { label: { ar: "معدل الغياب", en: "Absenteeism rate" }, value: "2.0%" },
      reading: {
        ar: "ضاع 2% من الوقت المجدول، أي ما يعادل 40 وردية كاملة بثماني ساعات. ترجمة النسبة إلى ورديات تجعلها قابلة للتخطيط: كم بديلًا أحتاج، وفي أي أيام؟",
        en: "2% of scheduled time was lost, equivalent to 40 full 8-hour shifts. Translating the rate into shifts makes it plannable: how many cover staff do I need, and on which days?",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "معدل الغياب مع حجب المجموعات الصغيرة", en: "Absenteeism rate with small-group suppression" },
        code: `Unscheduled Absence Hours :=
CALCULATE (
    SUM ( 'Absence'[Hours] ),
    'AbsenceType'[IsUnscheduled] = TRUE ()
)

Scheduled Hours :=
SUM ( 'Schedule'[ScheduledHours] )

Absenteeism Rate % :=
DIVIDE ( [Unscheduled Absence Hours], [Scheduled Hours] )

-- Privacy guard: return BLANK for any cell covering fewer than
-- 10 employees, so an individual's absence cannot be inferred.
Absenteeism Rate % (Protected) :=
VAR Employees =
    DISTINCTCOUNT ( 'Schedule'[EmployeeKey] )
RETURN
    IF ( Employees >= 10, [Absenteeism Rate %] )`,
        assumptions: [
          {
            ar: "'Absence' و'Schedule' جدولا حقائق منفصلان بحبيبية موظف × يوم، ويرتبطان بأبعاد مشتركة: 'Date' و'Department' و'Employee'. لا توجد علاقة مباشرة بين جدولي الحقائق.",
            en: "'Absence' and 'Schedule' are separate fact tables at employee x day grain, sharing the 'Date', 'Department', and 'Employee' dimensions. There is no direct relationship between the two facts.",
          },
          {
            ar: "ساعات الغياب محمّلة فقط لأيام العمل المجدولة. غياب مسجّل في يوم راحة يجب رفضه في مرحلة التحميل، وإلا تضخم البسط دون مقابل في المقام.",
            en: "Absence hours are loaded only for scheduled working days. Absence logged on a rest day must be rejected at load time, otherwise the numerator grows with no matching denominator.",
          },
          {
            ar: "'AbsenceType'[IsUnscheduled] يعكس قائمة أنواع الغياب المعتمدة في السياسة. أسباب الغياب التفصيلية (خاصة الطبية) لا تُحمَّل إلى النموذج؛ يكفي التصنيف العام.",
            en: "'AbsenceType'[IsUnscheduled] reflects the policy's approved absence types. Detailed absence reasons (especially medical ones) are not loaded into the model; the broad category is enough.",
          },
          {
            ar: "حد 10 موظفين للحجب قاعدة داخلية توضيحية؛ حددها مع فريق الخصوصية والشؤون القانونية. الحجب لا يغني عن أمان الصفوف (RLS) الذي يقصر رؤية بيانات الموظف الفرد على من يحق له.",
            en: "The 10-employee suppression threshold is an illustrative internal rule; set it with your privacy and legal teams. Suppression does not replace row-level security (RLS), which restricts individual employee data to those entitled to see it.",
          },
        ],
        requires: ["Absence[Hours]", "AbsenceType[IsUnscheduled]", "Schedule[ScheduledHours]", "Schedule[EmployeeKey]"],
      },
    ],
    model: [
      {
        table: "Absence",
        grain: { ar: "موظف × يوم × نوع غياب", en: "Employee x day x absence type" },
        columns: ["EmployeeKey", "DateKey", "AbsenceTypeId", "Hours"],
        role: { ar: "مصدر البسط. EmployeeKey مفتاح مستعار، ولا يحمل الجدول تشخيصات أو ملاحظات طبية", en: "Source of the numerator. EmployeeKey is a pseudonymous key, and the table carries no diagnoses or medical notes" },
      },
      {
        table: "Schedule",
        grain: { ar: "موظف × يوم عمل مجدول", en: "Employee x scheduled working day" },
        columns: ["EmployeeKey", "DateKey", "DepartmentId", "ScheduledHours"],
        role: { ar: "مصدر المقام", en: "Source of the denominator" },
      },
      {
        table: "AbsenceType",
        grain: { ar: "نوع غياب واحد لكل صف", en: "One absence type per row" },
        columns: ["AbsenceTypeId", "AbsenceCategory", "IsUnscheduled"],
        role: { ar: "يطبّق تعريف السياسة لما يُعد غيابًا", en: "Encodes the policy definition of what counts as absence" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["DateKey", "Date", "MonthKey", "DayOfWeek", "IsPublicHoliday"],
        role: { ar: "بُعد مشترك يرشّح جدولي الحقائق معًا", en: "Shared dimension filtering both fact tables" },
      },
      {
        table: "Department",
        grain: { ar: "قسم واحد لكل صف", en: "One row per department" },
        columns: ["DepartmentId", "DepartmentName", "Site"],
        role: { ar: "أدنى مستوى تحليلي يُعرض لعموم المستخدمين", en: "The lowest analytical level shown to general users" },
      },
    ],
    visuals: [
      {
        pattern: "period-over-period",
        why: {
          ar: "خط اتجاه شهري مقارن بنفس الشهر من السنة السابقة يفصل الموسمية عن التغير الحقيقي.",
          en: "A monthly trend against the same month last year separates seasonality from genuine change.",
        },
      },
      {
        pattern: "heatmap-calendar",
        why: {
          ar: "خريطة حرارية للقسم × الشهر (أو يوم الأسبوع) تكشف الأنماط المتكررة على مستوى المجموعة، دون الحاجة لعرض أي موظف بعينه.",
          en: "A department-by-month (or day-of-week) heatmap reveals recurring patterns at group level without showing any individual employee.",
        },
      },
      {
        pattern: "pl-matrix",
        why: {
          ar: "مصفوفة الأقسام مع البسط والمقام تُظهر أين يتركز الغياب وحجم كل قسم، مع حجب الخلايا الصغيرة.",
          en: "A department matrix with numerator and denominator shows where absence concentrates and each department's size, with small cells suppressed.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "كشف بيانات حساسة على مستوى الموظف. الغياب المرضي بيانات صحية تحميها القوانين المحلية في كثير من الدول؛ اعرض التجميعات فقط، واحجب المجموعات الصغيرة، وطبّق RLS، ولا تحمّل أسباب الغياب الطبية إلى النموذج أصلًا.",
        en: "Exposing sensitive employee-level data. Sick absence is health data protected by local law in many countries; show aggregates only, suppress small groups, apply RLS, and do not load medical absence reasons into the model at all.",
      },
      {
        ar: "عدم تحديد أنواع الغياب المشمولة. إدخال الإجازة السنوية أو إجازة الأمومة أو التدريب في البسط يغير الرقم جذريًا ويجعل المقارنة بين الفترات مستحيلة.",
        en: "Not defining which absence types are included. Putting annual leave, maternity leave, or training in the numerator changes the figure radically and makes period comparisons impossible.",
      },
      {
        ar: "قسمة الساعات على عدد الموظفين بدل الساعات المجدولة. موظف بدوام جزئي غاب 4 ساعات فقد نصف يومه، بينما القسمة على عدد الأشخاص تعامله كموظف بدوام كامل.",
        en: "Dividing by headcount instead of scheduled hours. A part-timer absent for 4 hours lost half their day, but dividing by people treats them as full-time.",
      },
      {
        ar: "حساب متوسط معدلات الأقسام. المعدل الكلي هو مجموع ساعات الغياب ÷ مجموع الساعات المجدولة، لا متوسط النسب، وإلا حصل قسم من خمسة أشخاص على نفس وزن قسم من 200.",
        en: "Averaging department rates. The overall rate is total absence hours ÷ total scheduled hours, not the mean of the percentages, otherwise a five-person department carries the same weight as one of 200.",
      },
      {
        ar: "استخدام المؤشر لاستهداف الأفراد. مؤشرات مثل عامل برادفورد تحوّل التقرير إلى أداة تأديبية، وتتطلب مراجعة قانونية وسياسة واضحة قبل أي استخدام.",
        en: "Using the metric to target individuals. Scores such as the Bradford factor turn a report into a disciplinary tool and require legal review and a clear policy before any use.",
      },
    ],
    variants: [
      {
        label: { ar: "بالأيام بدل الساعات", en: "Days-based rate" },
        formula: "Unscheduled Absence Days / Scheduled Work Days x 100",
        difference: {
          ar: "أبسط في الأنظمة التي لا تسجل الساعات، لكنه يعامل الغياب الجزئي (نصف يوم) بشكل غير دقيق ويخلط الدوام الجزئي بالكامل.",
          en: "Simpler where hours are not recorded, but it handles partial-day absence poorly and mixes part-time with full-time.",
        },
      },
      {
        label: { ar: "معدل تكرار الغياب", en: "Absence frequency rate" },
        formula: "Number of Absence Spells / Average Headcount",
        difference: {
          ar: "يعدّ نوبات الغياب لا مدتها: عشر غيابات ليوم واحد تختلف إداريًا عن غياب واحد لعشرة أيام. يُكمّل معدل الساعات ولا يحل محله.",
          en: "Counts absence spells rather than their length: ten one-day absences differ managerially from one ten-day absence. It complements the hours rate rather than replacing it.",
        },
      },
      {
        label: { ar: "الغياب الكلي", en: "Total absence rate" },
        formula: "All Absence Hours (planned + unplanned) / Scheduled Work Hours x 100",
        difference: {
          ar: "يشمل الإجازات المخططة، فيفيد تخطيط السعة الإجمالية لا قياس الغياب غير المتوقع. لا يجوز مقارنته بالمعدل غير المخطط.",
          en: "Includes planned leave, so it serves overall capacity planning rather than measuring unexpected absence. It must not be compared with the unplanned rate.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "المعدل الكلي يساوي متوسط معدلات الأقسام مرجّحًا بساعاتها المجدولة، ولا يساوي متوسطها البسيط إلا إذا تساوت ساعات الأقسام.",
          en: "The overall rate equals the department rates weighted by their scheduled hours, and equals their simple average only when departments have equal scheduled hours.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "استبعاد الإجازات المعتمدة مسبقًا من البسط، والحساب بالساعات المجدولة، ممارستان شائعتان في قياس الغياب.",
          en: "Excluding pre-approved leave from the numerator and computing on scheduled hours are common practices in absence measurement.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "قائمة أنواع الغياب المشمولة، وحد حجب المجموعات الصغيرة، ومن يحق له رؤية بيانات الأفراد — كلها سياسات داخلية تخضع للقانون المحلي.",
          en: "The list of included absence types, the small-group suppression threshold, and who may see individual data are internal policies subject to local law.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (320 ساعة من 16,000) من تأليفنا للتعليم، ولا نقدم أي نسبة كمعدل غياب طبيعي.",
          en: "The example figures (320 of 16,000 hours) are invented for teaching, and we present no percentage as a normal absenteeism rate.",
        },
      },
    ],
    related: ["employee-turnover-rate", "sales-per-labor-hour", "schedule-attainment"],
    exercise: {
      prompt: {
        ar: "قسم من 45 موظفًا جُدولت له 7,200 ساعة عمل في الشهر. سُجلت 216 ساعة غياب مرضي وطارئ، و120 ساعة إجازة سنوية معتمدة مسبقًا، و24 ساعة غياب مسجلة خطأً في أيام راحة. احسب معدل الغياب الصحيح، والمعدل الخاطئ لو أُدخلت الإجازة السنوية.",
        en: "A 45-person department had 7,200 scheduled hours in the month. It logged 216 hours of sick and emergency absence, 120 hours of pre-approved annual leave, and 24 absence hours wrongly recorded on rest days. Compute the correct absenteeism rate, and the wrong rate if annual leave were included.",
      },
      hint: {
        ar: "البسط يشمل الغياب غير المخطط في أيام العمل المجدولة فقط.",
        en: "The numerator covers only unplanned absence on scheduled working days.",
      },
      answer: {
        ar: "الصحيح = 216 ÷ 7,200 = 3.0%. الإجازة السنوية مخططة فتُستبعد، وساعات أيام الراحة تُستبعد لأنها ليست ضمن المقام. لو أُدخلت الإجازة: (216 + 120) ÷ 7,200 = 336 ÷ 7,200 = 4.67%، أي تضخيم بأكثر من النصف. وبالورديات: 216 ÷ 8 = 27 وردية ضائعة في الشهر.",
        en: "Correct = 216 ÷ 7,200 = 3.0%. Annual leave is planned so it is excluded, and rest-day hours are excluded because they are not in the denominator. Including leave: (216 + 120) ÷ 7,200 = 336 ÷ 7,200 = 4.67%, an overstatement of more than half. In shifts: 216 ÷ 8 = 27 lost shifts in the month.",
      },
    },
    references: [
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع القسمة الآمنة بين ساعات الغياب والساعات المجدولة.",
          en: "Reference for safe division of absence hours by scheduled hours.",
        },
      },
      {
        title: "DISTINCTCOUNT function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/distinctcount-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع عدّ الموظفين المميزين في الخلية لتطبيق حد الحجب.",
          en: "Reference for counting distinct employees in a cell to apply the suppression threshold.",
        },
      },
    ],
  },

  {
    id: "cost-per-hire",
    slug: "cost-per-hire",
    name: "Cost per Hire",
    nameAr: "تكلفة التوظيف لكل معيَّن",
    domains: ["hr"],
    category: { ar: "تكاليف الموارد البشرية", en: "People costs" },
    difficulty: "intermediate",
    unit: { ar: "عملة لكل معيَّن", en: "Currency per hire" },
    aggregation: "ratio",
    definition: {
      ar: "متوسط تكلفة توظيف موظف جديد: مجموع تكاليف التوظيف الداخلية والخارجية المعرّفة خلال الفترة مقسومًا على عدد المعيّنين في الفترة نفسها.",
      en: "The average cost of hiring a new employee: total defined internal and external recruiting costs in the period divided by the number of hires in the same period.",
    },
    whyItMatters: {
      ar: "يحوّل ميزانية التوظيف إلى رقم قابل للمقارنة بين القنوات والبرامج: هل تستحق وكالة التوظيف أتعابها مقارنة بالإحالات الداخلية؟ ويدعم تخطيط الميزانية: 40 تعيينًا مخططًا × التكلفة لكل معيَّن = ميزانية تقديرية.",
      en: "It turns the recruiting budget into a figure comparable across channels and programmes: is the agency worth its fee compared with employee referrals? It also supports budgeting: 40 planned hires x cost per hire = an estimated budget.",
    },
    interpretation: {
      ar: "تكلفة 3,000 لكل معيَّن تعني أن كل تعيين استهلك في المتوسط 3,000 من تكاليف التوظيف المعرّفة. الرقم لا يقول شيئًا عن جودة التعيين؛ قناة رخيصة ينتج عنها دوران مبكر مرتفع قد تكون الأغلى فعليًا.",
      en: "A cost of 3,000 per hire means each hire consumed 3,000 of defined recruiting costs on average. The figure says nothing about hire quality; a cheap channel that produces high early attrition may actually be the most expensive.",
    },
    formula: "Cost per Hire = (Internal Recruiting Costs + External Recruiting Costs) / Number of Hires",
    numerator: {
      ar: "التكاليف الخارجية (أتعاب الوكالات، الإعلانات، التقييمات، السفر) والداخلية (حصة رواتب فريق التوظيف، نظام التوظيف، مكافآت الإحالة) وفق قائمة مكونات موثقة.",
      en: "External costs (agency fees, advertising, assessments, travel) and internal costs (allocated recruiting team salaries, ATS, referral bonuses) according to a documented list of components.",
    },
    denominator: {
      ar: "عدد المعيّنين الذين قبلوا العرض (أو بدأوا العمل، حسب التعريف) في نفس الفترة التي تُحسب فيها التكاليف.",
      en: "The number of hires who accepted the offer (or started, per the definition) in the same period over which costs are measured.",
    },
    timeGrain: {
      ar: "ربعي أو سنوي. التكاليف والتعيينات لا تقع في نفس الشهر (يُدفع الإعلان في شهر وتأتي التعيينات بعده)، لذا الحساب الشهري متذبذب ويُفضّل المجموع المتحرك لاثني عشر شهرًا.",
      en: "Quarterly or annual. Costs and hires do not land in the same month (an ad is paid one month, hires arrive later), so monthly figures swing and a rolling 12-month sum is preferred.",
    },
    direction: {
      rising: {
        ar: "ارتفاعها يعني توظيفًا أغلى: اعتماد أكبر على الوكالات، أو أدوار أندر، أو تكاليف ثابتة موزعة على عدد أقل من التعيينات.",
        en: "A rise means costlier hiring: heavier agency use, scarcer roles, or fixed costs spread over fewer hires.",
      },
      falling: {
        ar: "انخفاضها جيد إن بقيت الجودة ثابتة، لكنه قد يعني تقليص التقييم أو الاعتماد على قنوات رخيصة ذات دوران مبكر مرتفع.",
        en: "A fall is good if quality holds, but it may mean trimmed assessment or reliance on cheap channels with high early attrition.",
      },
      caveat: {
        ar: "جزء كبير من التكاليف ثابت (فريق التوظيف والأنظمة)، فانخفاض عدد التعيينات يرفع المؤشر دون أي تراجع في الكفاءة. اقرأه دائمًا بجانب عدد التعيينات ومؤشر جودة مثل الدوران المبكر.",
        en: "A large share of cost is fixed (recruiting team and systems), so fewer hires raise the metric with no loss of efficiency. Always read it next to hire volume and a quality signal such as early attrition.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "تكاليف خارجية (وكالات، إعلانات، تقييمات)", en: "External costs (agencies, ads, assessments)" }, value: "42,000" },
        { label: { ar: "تكاليف داخلية (حصة فريق التوظيف، الأنظمة)", en: "Internal costs (recruiting team share, systems)" }, value: "18,000" },
        { label: { ar: "عدد المعيّنين في الفترة", en: "Hires in the period" }, value: "20" },
      ],
      steps: [
        { label: { ar: "إجمالي التكاليف المعرّفة", en: "Total defined costs" }, expression: "42,000 + 18,000 = 60,000" },
        { label: { ar: "التكلفة لكل معيَّن", en: "Cost per hire" }, expression: "60,000 ÷ 20 = 3,000" },
        { label: { ar: "لو احتُسبت الخارجية فقط", en: "If only external costs were counted" }, expression: "42,000 ÷ 20 = 2,100" },
      ],
      result: { label: { ar: "التكلفة لكل معيَّن", en: "Cost per hire" }, value: "3,000" },
      reading: {
        ar: "كل تعيين كلّف 3,000 في المتوسط. لاحظ أن حذف التكاليف الداخلية يخفض الرقم إلى 2,100، أي بنسبة 30%، دون أي تغيير في الواقع. قائمة المكونات جزء من تعريف المؤشر لا تفصيل محاسبي.",
        en: "Each hire cost 3,000 on average. Note that dropping internal costs lowers the figure to 2,100, a 30% cut, with nothing changing in reality. The component list is part of the metric's definition, not an accounting detail.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "التكلفة لكل معيَّن للفترة وللاثني عشر شهرًا المتحركة", en: "Cost per hire for the period and rolling 12 months" },
        code: `Recruiting Cost :=
SUM ( 'RecruitingCost'[Amount] )

Hires :=
COUNTROWS ( 'Hire' )

Cost per Hire :=
DIVIDE ( [Recruiting Cost], [Hires] )

-- Costs and hires land in different months; a rolling window
-- matches them better than a single month.
Cost per Hire (Rolling 12M) :=
VAR Window =
    DATESINPERIOD ( 'Date'[Date], MAX ( 'Date'[Date] ), -12, MONTH )
RETURN
    DIVIDE (
        CALCULATE ( [Recruiting Cost], Window ),
        CALCULATE ( [Hires], Window )
    )

-- Per-source view uses only costs directly attributable to that source.
External Cost per Hire :=
DIVIDE (
    CALCULATE ( [Recruiting Cost], 'CostCategory'[IsExternal] = TRUE () ),
    [Hires]
)`,
        assumptions: [
          {
            ar: "'RecruitingCost' بحبيبية بند تكلفة × شهر × قسم × قناة (حيث أمكن)، و'Hire' بحبيبية معيَّن واحد. كلاهما مرتبط بجدول 'Date' المشترك: التكلفة بتاريخ القيد، والتعيين بتاريخ قبول العرض.",
            en: "'RecruitingCost' is at cost line x month x department x source (where attributable), and 'Hire' at one row per hire. Both relate to the shared 'Date' table: cost on posting date, hire on offer-accepted date.",
          },
          {
            ar: "التكاليف الداخلية المشتركة (رواتب فريق التوظيف، نظام التوظيف) لا تُنسب إلى قناة بعينها وتبقى بـ SourceId فارغ. لذلك عند التقسيم حسب القناة يُستخدم مقياس التكلفة الخارجية فقط؛ تقسيم المؤشر الكلي حسب القناة يُسقط التكاليف المشتركة من كل الخلايا.",
            en: "Shared internal costs (recruiting salaries, ATS) are not attributable to a source and carry a blank SourceId. So per-source views use the external-cost measure only; slicing the total measure by source drops the shared costs from every cell.",
          },
          {
            ar: "كل المبالغ بعملة التقرير نفسها ومحوّلة بسعر صرف موثق.",
            en: "All amounts are in the reporting currency, converted at a documented exchange rate.",
          },
        ],
        requires: ["RecruitingCost[Amount]", "CostCategory[IsExternal]", "Hire[HireId]", "Date[Date]"],
      },
    ],
    model: [
      {
        table: "RecruitingCost",
        grain: { ar: "بند تكلفة × شهر × قسم × قناة", en: "Cost line x month x department x source" },
        columns: ["CostDate", "CostCategoryId", "DepartmentId", "SourceId", "Amount"],
        role: { ar: "مصدر البسط", en: "Source of the numerator" },
      },
      {
        table: "Hire",
        grain: { ar: "معيَّن واحد لكل صف", en: "One hire per row" },
        columns: ["HireId", "EmployeeKey", "OfferAcceptedDate", "DepartmentId", "SourceId", "JobRoleId"],
        role: { ar: "مصدر المقام. لا يحتاج الراتب أو البيانات الشخصية للمعيَّن", en: "Source of the denominator. It needs neither the hire's salary nor personal data" },
      },
      {
        table: "CostCategory",
        grain: { ar: "فئة تكلفة واحدة لكل صف", en: "One cost category per row" },
        columns: ["CostCategoryId", "CategoryName", "IsExternal", "IsIncluded"],
        role: { ar: "يطبّق قائمة المكونات المعتمدة في التعريف", en: "Encodes the approved list of cost components" },
      },
      {
        table: "RecruitingSource",
        grain: { ar: "قناة توظيف واحدة لكل صف", en: "One recruiting source per row" },
        columns: ["SourceId", "SourceName", "SourceType"],
        role: { ar: "بُعد مشترك بين جدولي الحقائق للمقارنة بين القنوات", en: "Dimension shared by both facts for channel comparison" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "Quarter", "Year"],
        role: { ar: "بُعد مشترك يضمن أن التكاليف والتعيينات من نفس الفترة", en: "Shared dimension ensuring costs and hires come from the same period" },
      },
    ],
    visuals: [
      {
        pattern: "scatter-quadrant",
        why: {
          ar: "رسم عدد التعيينات مقابل التكلفة لكل معيَّن لكل قناة يفصل القنوات الرخيصة عالية الحجم عن الغالية قليلة الحجم.",
          en: "Plotting hire volume against cost per hire per source separates cheap high-volume channels from expensive low-volume ones.",
        },
      },
      {
        pattern: "stacked-bar",
        why: {
          ar: "تكوين التكلفة حسب الفئة لكل قسم يوضح أي المكونات يقود الرقم.",
          en: "Cost composition by category per department shows which components drive the figure.",
        },
      },
      {
        pattern: "pl-matrix",
        why: {
          ar: "مصفوفة القسم × القناة مع التكلفة والتعيينات والنسبة تسمح بالتحقق من البسط والمقام معًا.",
          en: "A department-by-source matrix with cost, hires, and the ratio lets readers verify numerator and denominator together.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عدم توثيق مكونات التكلفة. حذف التكاليف الداخلية أو مكافآت الإحالة يخفض الرقم بشكل كبير، ومقارنة قسمين يحسبان بقائمتين مختلفتين بلا معنى.",
        en: "Not documenting cost components. Leaving out internal costs or referral bonuses lowers the figure sharply, and comparing two departments that use different lists is meaningless.",
      },
      {
        ar: "عدم تطابق فترة التكاليف مع فترة التعيينات. أتعاب وكالة تُدفع بعد بدء الموظف، وحملة إعلانية تُنتج تعيينات بعد شهرين؛ استخدم نفس الفترة للطرفين، ويفضّل نافذة متحركة.",
        en: "Mismatched periods for costs and hires. Agency fees are paid after the hire starts and a campaign yields hires two months later; use the same period for both, ideally a rolling window.",
      },
      {
        ar: "تقسيم المؤشر الكلي حسب القناة. التكاليف المشتركة لا تنتمي لقناة، فتختفي من الخلايا وتبدو كل القنوات أرخص من الحقيقة.",
        en: "Slicing the total metric by source. Shared costs belong to no source, so they vanish from the cells and every channel looks cheaper than it is.",
      },
      {
        ar: "حساب متوسط تكلفة الأقسام. المؤشر الكلي هو مجموع التكاليف ÷ مجموع التعيينات، لا متوسط نسب الأقسام.",
        en: "Averaging department figures. The overall metric is total cost ÷ total hires, not the mean of department ratios.",
      },
      {
        ar: "إدراج رواتب المعيّنين أو تفاصيل عروضهم في النموذج. المؤشر لا يحتاجها، وهي بيانات حساسة يجب أن تبقى في نظام الرواتب تحت ضوابط الوصول.",
        en: "Loading hires' salaries or offer details into the model. The metric does not need them, and they are sensitive data that should stay in payroll under access controls.",
      },
    ],
    variants: [
      {
        label: { ar: "التكلفة الخارجية لكل معيَّن", en: "External cost per hire" },
        formula: "External Recruiting Costs / Number of Hires",
        difference: {
          ar: "يستبعد التكاليف الداخلية الثابتة، فيصلح لمقارنة القنوات والوكالات. لكنه أقل بكثير من التكلفة الحقيقية ولا يصلح للميزانية الكلية.",
          en: "Excludes fixed internal costs, which suits comparing channels and agencies. But it is well below the true cost and unsuitable for the total budget.",
        },
      },
      {
        label: { ar: "نسبة تكلفة التوظيف", en: "Recruiting cost ratio" },
        formula: "Total Recruiting Costs / Total First-Year Compensation of Hires x 100",
        difference: {
          ar: "يطبّع التكلفة بحجم الرواتب، فيجعل مقارنة وظائف قيادية بوظائف تشغيلية أعدل. لكنه يتطلب بيانات رواتب حساسة، فيُحسب في بيئة مقيدة الوصول.",
          en: "Normalises cost by pay, making senior versus frontline comparisons fairer. But it requires sensitive salary data, so compute it in an access-restricted environment.",
        },
      },
      {
        label: { ar: "التكلفة لكل معيَّن مستمر", en: "Cost per retained hire" },
        formula: "Recruiting Costs / Hires Still Employed After Probation",
        difference: {
          ar: "يحمّل كلفة التعيينات الفاشلة على الناجحة، فيعكس جودة القناة لا رخصها فقط. يتأخر حسابه حتى انتهاء فترة التجربة.",
          en: "Loads the cost of failed hires onto successful ones, reflecting channel quality rather than cheapness alone. It lags until the probation period ends.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "إذا وُزعت كل التكاليف على الشرائح، فإن التكلفة الكلية لكل معيَّن تساوي متوسط تكاليف الشرائح مرجّحًا بعدد تعييناتها، لا متوسطها البسيط.",
          en: "When all costs are allocated to segments, the overall cost per hire equals the segment values weighted by their hire counts, not their simple average.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "جمع التكاليف الداخلية والخارجية في البسط وقسمتها على تعيينات الفترة نفسها هو التعريف الشائع للمؤشر.",
          en: "Summing internal and external costs in the numerator and dividing by hires in the same period is the common definition of the metric.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "قائمة مكونات التكلفة، وطريقة توزيع التكاليف المشتركة، واعتماد تاريخ قبول العرض أو بدء العمل، ومعاملة التعيينات الداخلية — سياسات داخلية.",
          en: "The cost component list, the allocation of shared costs, whether offer-accepted or start date is used, and the treatment of internal moves are internal policies.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (60,000 و20 معيَّنًا، وتقسيمها إلى 42,000 خارجية و18,000 داخلية) من تأليفنا، ولا تمثل تكلفة مرجعية.",
          en: "The example figures (60,000 and 20 hires, split into 42,000 external and 18,000 internal) are invented and do not represent a reference cost.",
        },
      },
    ],
    related: ["time-to-hire", "time-to-fill", "employee-turnover-rate"],
    exercise: {
      prompt: {
        ar: "في ربع ما: أتعاب وكالات 30,000، إعلانات وظيفية 9,000، اختبارات تقييم 15,000، وحصة رواتب فريق التوظيف والأنظمة 27,000. عدد المعيّنين 18، منهم 5 عبر الوكالات. احسب التكلفة الكاملة لكل معيَّن، والتكلفة الخارجية لكل معيَّن، والتكلفة المباشرة لكل معيَّن عبر الوكالات.",
        en: "In a quarter: agency fees 30,000, job ads 9,000, assessments 15,000, and the allocated recruiting team and systems cost 27,000. There were 18 hires, 5 of them through agencies. Compute the full cost per hire, the external cost per hire, and the direct cost per agency hire.",
      },
      hint: {
        ar: "التكاليف الخارجية = الوكالات + الإعلانات + التقييمات. تكلفة الوكالة تُقسم على تعيينات الوكالة فقط.",
        en: "External costs = agencies + ads + assessments. The agency fee is divided by agency hires only.",
      },
      answer: {
        ar: "الخارجية = 30,000 + 9,000 + 15,000 = 54,000. الكاملة = 54,000 + 27,000 = 81,000، والتكلفة لكل معيَّن = 81,000 ÷ 18 = 4,500. الخارجية لكل معيَّن = 54,000 ÷ 18 = 3,000. المباشرة لكل تعيين عبر الوكالات = 30,000 ÷ 5 = 6,000. الرقم الكامل (4,500) للميزانية، والخارجي (3,000) لمقارنة القنوات، وتعيين الوكالة يكلف ضعف المتوسط الخارجي قبل احتساب أي تكلفة مشتركة.",
        en: "External = 30,000 + 9,000 + 15,000 = 54,000. Full = 54,000 + 27,000 = 81,000, so cost per hire = 81,000 ÷ 18 = 4,500. External per hire = 54,000 ÷ 18 = 3,000. Direct cost per agency hire = 30,000 ÷ 5 = 6,000. The full figure (4,500) is for budgeting, the external one (3,000) for channel comparison, and an agency hire costs twice the external average before any shared cost.",
      },
    },
    references: [
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع القسمة الآمنة عندما لا توجد تعيينات في الفترة.",
          en: "Reference for safe division when a period has no hires.",
        },
      },
      {
        title: "DATESINPERIOD function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/datesinperiod-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع بناء نافذة الاثني عشر شهرًا المتحركة لمطابقة التكاليف مع التعيينات.",
          en: "Reference for building the rolling 12-month window that matches costs to hires.",
        },
      },
    ],
  },

  {
    id: "training-completion-rate",
    slug: "training-completion-rate",
    name: "Training Completion Rate",
    nameAr: "معدل إكمال التدريب",
    domains: ["hr", "healthcare", "manufacturing", "banking"],
    category: { ar: "التعلم والامتثال", en: "Learning and compliance" },
    difficulty: "beginner",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة تكليفات التدريب الإلزامي التي أُكملت من إجمالي التكليفات المستحقة في الفترة. وحدة العدّ هي التكليف (موظف × دورة)، لا الموظف، لأن الموظف الواحد قد يُكلَّف بعدة دورات.",
      en: "The share of required training assignments completed out of all assignments due in the period. The counting unit is the assignment (employee x course), not the person, because one employee can be assigned several courses.",
    },
    whyItMatters: {
      ar: "في القطاعات المنظمة (الصحة، المصارف، التصنيع) التدريب الإلزامي شرط امتثال، والتكليفات المتأخرة مخاطرة تدقيقية مباشرة. وفي غيرها يقيس المؤشر قدرة المؤسسة على تنفيذ برامج التعلم التي تدفع ثمنها.",
      en: "In regulated sectors (healthcare, banking, manufacturing) mandatory training is a compliance requirement, and overdue assignments are a direct audit risk. Elsewhere, the metric measures whether the organization delivers the learning programmes it pays for.",
    },
    interpretation: {
      ar: "معدل 90% يعني أن تكليفًا من كل عشرة تكليفات مستحقة لم يُكمل. في دورة امتثال إلزامية قد تكون هذه العشرة بالمئة هي بالضبط ما سيسأل عنه المدقق، لذا القائمة التفصيلية للمتأخرات أهم من النسبة نفسها.",
      en: "A 90% rate means one in ten due assignments was not completed. For a mandatory compliance course, that ten percent may be exactly what the auditor asks about, so the detailed overdue list matters more than the percentage itself.",
    },
    formula: "Training Completion % = Required Assignments Completed / Required Assignments Due x 100",
    numerator: {
      ar: "التكليفات الإلزامية المستحقة في الفترة التي استوفت شرط الإكمال المعرّف (اجتياز الاختبار، أو حضور الجلسة كاملة، وليس مجرد فتح المحتوى).",
      en: "Required assignments due in the period that met the defined completion criterion (passing the assessment or attending the full session, not merely opening the content).",
    },
    denominator: {
      ar: "كل التكليفات الإلزامية التي حلّ موعد استحقاقها في الفترة، بعد استبعاد المُعفاة والملغاة (مثل موظف غادر قبل موعد الاستحقاق) وفق قواعد موثقة.",
      en: "All required assignments whose due date fell in the period, after excluding waived and cancelled ones (such as an employee who left before the due date) under documented rules.",
    },
    timeGrain: {
      ar: "يُنسب التكليف إلى فترة استحقاقه. يُعرض شهريًا أو ربعيًا، وحسب دورة الامتثال (غالبًا سنوية) عند التدقيق.",
      en: "An assignment is attributed to its due period. Reported monthly or quarterly, and by compliance cycle (often annual) for audit.",
    },
    direction: {
      rising: {
        ar: "ارتفاعه يعني التزامًا أفضل بالتدريب المطلوب ومخاطرة امتثال أقل.",
        en: "A rise means better adherence to required training and lower compliance risk.",
      },
      falling: {
        ar: "انخفاضه يشير إلى تكليفات متأخرة: عبء عمل يمنع التفرغ، أو تكليف دورات غير ملائمة، أو مشكلة تقنية في منصة التعلم.",
        en: "A decline points to overdue assignments: workload preventing time off the floor, irrelevant courses being assigned, or a technical issue on the learning platform.",
      },
      caveat: {
        ar: "الإكمال ليس تعلمًا. نسبة 100% قد تنتج عن تصفح الدورات سريعًا دون فهم؛ اقرأ المؤشر بجانب نتائج الاختبارات أو مؤشر تشغيلي يُفترض أن يتحسن بالتدريب.",
        en: "Completion is not learning. A 100% rate can come from clicking through courses without understanding; read it next to assessment scores or an operational metric the training is meant to improve.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "تكليفات مستحقة في الفترة", en: "Assignments due in the period" }, value: "1,000" },
        { label: { ar: "تكليفات مكتملة", en: "Assignments completed" }, value: "900" },
      ],
      steps: [
        { label: { ar: "معدل الإكمال", en: "Completion rate" }, expression: "900 ÷ 1,000 = 90.0%" },
        { label: { ar: "تكليفات غير مكتملة", en: "Assignments not completed" }, expression: "1,000 − 900 = 100" },
      ],
      result: { label: { ar: "معدل إكمال التدريب", en: "Training completion rate" }, value: "90.0%" },
      reading: {
        ar: "أُكمل 90% من التكليفات المستحقة، وبقي 100 تكليف مفتوحًا. هذه المئة هي قائمة العمل الفعلية للمديرين، ويجب أن تُعرض لكل مدير لفريقه فقط.",
        en: "90% of due assignments were completed, leaving 100 open. Those 100 are the managers' actual work list, and each manager should see them for their own team only.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "معدل الإكمال والإكمال في الموعد على مستوى التكليف", en: "Completion and on-time completion at assignment grain" },
        code: `-- Denominator: required assignments due in the filtered period,
-- excluding waived and cancelled ones.
Assignments Due :=
CALCULATE (
    COUNTROWS ( 'TrainingAssignment' ),
    'TrainingAssignment'[IsRequired] = TRUE (),
    NOT ( 'TrainingAssignment'[Status] IN { "Waived", "Cancelled" } )
)

Assignments Completed :=
CALCULATE (
    [Assignments Due],
    NOT ISBLANK ( 'TrainingAssignment'[CompletedDate] )
)

Training Completion % :=
DIVIDE ( [Assignments Completed], [Assignments Due] )

-- Stricter view: completed on or before the due date.
Training On-Time Completion % :=
DIVIDE (
    CALCULATE ( [Assignments Due], 'TrainingAssignment'[IsCompletedOnTime] = TRUE () ),
    [Assignments Due]
)

Assignments Overdue :=
[Assignments Due] - [Assignments Completed]`,
        assumptions: [
          {
            ar: "'Date'[Date] مرتبط بعلاقة نشطة مع 'TrainingAssignment'[DueDate]، فالبسط والمقام من نفس مجموعة التكليفات. إكمال تكليف مستحق في الفترة القادمة مبكرًا لا يدخل البسط، ولذلك لا يمكن أن تتجاوز النسبة 100%.",
            en: "'Date'[Date] has an active relationship to 'TrainingAssignment'[DueDate], so numerator and denominator come from the same set of assignments. Completing next period's assignment early does not enter this numerator, which is why the rate cannot exceed 100%.",
          },
          {
            ar: "CompletedDate يُملأ فقط عند استيفاء شرط الإكمال المعرّف (اجتياز الاختبار مثلًا)، لا عند فتح الدورة.",
            en: "CompletedDate is populated only when the defined completion criterion is met (passing the assessment, for instance), not when the course is opened.",
          },
          {
            ar: "IsCompletedOnTime عمود محسوب في المصدر أو في Power Query: TRUE حين يكون CompletedDate غير فارغ ويسبق DueDate أو يساويه.",
            en: "IsCompletedOnTime is a column computed at source or in Power Query: TRUE when CompletedDate is not blank and on or before DueDate.",
          },
          {
            ar: "إن شملت الفترة المختارة تواريخ استحقاق مستقبلية (الشهر الجاري مثلًا) فستظهر التكليفات غير المستحقة بعد كغير مكتملة؛ قيّد التقرير بالتواريخ حتى اليوم.",
            en: "If the selected period includes future due dates (the current month, say), not-yet-due assignments show as incomplete; restrict the report to dates up to today.",
          },
        ],
        requires: ["TrainingAssignment[IsRequired]", "TrainingAssignment[Status]", "TrainingAssignment[CompletedDate]", "TrainingAssignment[IsCompletedOnTime]", "Date[Date]"],
      },
    ],
    model: [
      {
        table: "TrainingAssignment",
        grain: { ar: "تكليف واحد: موظف × دورة × دورة امتثال", en: "One assignment: employee x course x compliance cycle" },
        columns: ["AssignmentId", "EmployeeKey", "CourseId", "AssignedDate", "DueDate", "CompletedDate", "Status", "IsRequired", "IsCompletedOnTime"],
        role: { ar: "جدول الحقائق ومصدر البسط والمقام معًا", en: "The fact table, source of both numerator and denominator" },
      },
      {
        table: "Course",
        grain: { ar: "دورة واحدة لكل صف", en: "One course per row" },
        columns: ["CourseId", "CourseName", "CourseType", "IsCompliance", "CompletionCriterion"],
        role: { ar: "بُعد يفصل الدورات الإلزامية عن الاختيارية", en: "Dimension separating mandatory from optional courses" },
      },
      {
        table: "Employee",
        grain: { ar: "موظف واحد لكل صف", en: "One employee per row" },
        columns: ["EmployeeKey", "DepartmentId", "ManagerKey", "JobRoleId"],
        role: { ar: "بُعد يحمل مفاتيح RLS: كل مدير يرى تكليفات فريقه فقط", en: "Dimension carrying RLS keys: each manager sees only their own team's assignments" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "MonthKey", "Quarter", "Year"],
        role: { ar: "مرتبط بـ DueDate", en: "Related to DueDate" },
      },
    ],
    visuals: [
      {
        pattern: "pl-matrix",
        why: {
          ar: "مصفوفة الدورة × القسم مع عدد التكليفات المستحقة تكشف أين يتركز التأخر، وتمنع قراءة نسبة مبنية على ثلاثة تكليفات كأنها مشكلة.",
          en: "A course-by-department matrix with the due count shows where overdue work concentrates and stops a rate built on three assignments being read as a problem.",
        },
      },
      {
        pattern: "exception-table",
        why: {
          ar: "قائمة التكليفات المتأخرة مرتبة حسب أيام التأخر هي ما يعمل عليه المدير فعلًا، ويجب أن تخضع لـ RLS.",
          en: "A list of overdue assignments ranked by days overdue is what managers actually act on, and it must sit behind RLS.",
        },
      },
      {
        pattern: "actual-vs-target",
        why: {
          ar: "مقارنة المعدل بالهدف المعتمد لكل دورة امتثال، والهدف قاعدة داخلية أو تنظيمية لا معيار عام.",
          en: "Compares the rate with the approved target for each compliance course; the target is an internal or regulatory rule, not a general benchmark.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عدّ الأشخاص بدل التكليفات. موظف مكلّف بخمس دورات أكمل أربعًا يُحسب «غير مكتمل» بمعيار الأشخاص، و80% بمعيار التكليفات؛ حدد الوحدة وسمّها في عنوان المؤشر.",
        en: "Counting people instead of assignments. An employee assigned five courses who completed four is 'incomplete' under a person count and 80% under an assignment count; pick the unit and name it in the metric title.",
      },
      {
        ar: "عدم تعريف الإكمال وقواعد الاستحقاق. فتح الدورة ليس إكمالًا، والإكمال بعد موعد الاستحقاق قد يُحسب أو لا يُحسب حسب السياسة؛ وثّق الاثنين.",
        en: "Not defining completion and due-date rules. Opening a course is not completion, and completing after the due date may or may not count depending on policy; document both.",
      },
      {
        ar: "إبقاء تكليفات الموظفين المغادرين أو المعفيين في المقام. هذا يخفض النسبة بشكل مصطنع؛ حدد قواعد الاستبعاد وطبّقها قبل الحساب.",
        en: "Keeping assignments of leavers or exempt employees in the denominator. That lowers the rate artificially; define exclusion rules and apply them before the calculation.",
      },
      {
        ar: "نشر قوائم الأفراد على نطاق واسع. سجل تدريب الموظف بيانات شخصية؛ اعرض القوائم التفصيلية للمدير المباشر عبر RLS فقط، واكتفِ بالتجميعات لبقية الجمهور.",
        en: "Publishing individual lists widely. An employee's training record is personal data; show detailed lists to the direct manager via RLS only, and aggregates to everyone else.",
      },
      {
        ar: "قراءة التقرير في منتصف الفترة. التكليفات المستحقة لاحقًا في الشهر تظهر غير مكتملة، فتبدو النسبة منخفضة في أول الشهر ثم ترتفع؛ قيّد المقام بالتكليفات المستحقة حتى تاريخ التقرير.",
        en: "Reading the report mid-period. Assignments due later in the month appear incomplete, so the rate looks low early in the month and then rises; restrict the denominator to assignments due up to the report date.",
      },
    ],
    variants: [
      {
        label: { ar: "الإكمال في الموعد", en: "On-time completion rate" },
        formula: "Assignments Completed On or Before Due Date / Required Assignments Due x 100",
        difference: {
          ar: "أشد صرامة: الإكمال المتأخر لا يُحسب. أقرب إلى متطلبات التدقيق، وأقل دائمًا أو يساوي معدل الإكمال العام.",
          en: "Stricter: late completion does not count. Closer to audit requirements, and always less than or equal to the general completion rate.",
        },
      },
      {
        label: { ar: "الامتثال على مستوى الموظف", en: "Employee-level full compliance" },
        formula: "Employees With All Required Assignments Completed / Employees With Assignments Due x 100",
        difference: {
          ar: "يعدّ الموظف ممتثلًا فقط إذا أكمل كل دوراته. يجيب عن سؤال «كم شخصًا جاهزًا للعمل؟» وقد يختلف كثيرًا عن معدل التكليفات.",
          en: "Counts an employee as compliant only if every course is complete. It answers 'how many people are cleared to work?' and can differ substantially from the assignment rate.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "لأن البسط مجموعة جزئية من المقام، يبقى المعدل بين 0% و100%، ومعدل الإكمال في الموعد لا يتجاوز معدل الإكمال العام أبدًا.",
          en: "Because the numerator is a subset of the denominator, the rate stays between 0% and 100%, and the on-time rate can never exceed the general completion rate.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "العدّ على مستوى التكليف ونسبته إلى تاريخ الاستحقاق ممارسة شائعة في تقارير التدريب الإلزامي.",
          en: "Counting at assignment grain and attributing to the due date is a common practice in mandatory-training reporting.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "تعريف الإكمال، ومعاملة الإكمال المتأخر، وقواعد الإعفاء، والهدف المطلوب لكل دورة سياسات داخلية أو تنظيمية.",
          en: "The completion definition, treatment of late completion, exemption rules, and the target for each course are internal or regulatory policies.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (900 من 1,000) من تأليفنا للتعليم، ولا تمثل هدفًا أو معدلًا مرجعيًا.",
          en: "The example figures (900 of 1,000) are invented for teaching and represent neither a target nor a reference rate.",
        },
      },
    ],
    related: ["employee-turnover-rate", "absenteeism-rate", "time-to-fill"],
    exercise: {
      prompt: {
        ar: "240 موظفًا، كل منهم مكلّف بثلاث دورات إلزامية مستحقة هذا الربع (720 تكليفًا). أُعفي 30 تكليفًا رسميًا. أُكمل 621 تكليفًا، منها 552 في الموعد. وأكمل 198 موظفًا كل دوراتهم. احسب معدل الإكمال، ومعدل الإكمال في الموعد، ونسبة الموظفين الممتثلين بالكامل.",
        en: "240 employees each have three mandatory courses due this quarter (720 assignments). 30 assignments were formally waived. 621 were completed, 552 of them on time. 198 employees completed all their courses. Compute the completion rate, the on-time completion rate, and the share of fully compliant employees.",
      },
      hint: {
        ar: "المقام بعد استبعاد المعفاة. نسبة الموظفين تُحسب من 240 شخصًا.",
        en: "The denominator excludes waived assignments. The employee share is computed over 240 people.",
      },
      answer: {
        ar: "المقام = 720 − 30 = 690. معدل الإكمال = 621 ÷ 690 = 90.0%. في الموعد = 552 ÷ 690 = 80.0%. الموظفون الممتثلون = 198 ÷ 240 = 82.5%. الأرقام الثلاثة صحيحة لكنها تجيب عن أسئلة مختلفة: 90% للتقدم العام، و80% لما سيراه المدقق، و82.5% لعدد الأشخاص الجاهزين. لو بقيت المعفاة في المقام لكان المعدل 621 ÷ 720 = 86.25%.",
        en: "Denominator = 720 − 30 = 690. Completion = 621 ÷ 690 = 90.0%. On time = 552 ÷ 690 = 80.0%. Fully compliant employees = 198 ÷ 240 = 82.5%. All three are correct but answer different questions: 90% for overall progress, 80% for what the auditor will see, and 82.5% for how many people are cleared. Leaving the waived assignments in the denominator would give 621 ÷ 720 = 86.25%.",
      },
    },
    references: [
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع القسمة الآمنة عندما لا توجد تكليفات مستحقة في الفترة.",
          en: "Reference for safe division when no assignments are due in the period.",
        },
      },
      {
        title: "CALCULATE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/calculate-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "مرجع تطبيق مرشحات الإلزامية والحالة والإكمال على نفس مجموعة التكليفات.",
          en: "Reference for applying the required, status, and completion filters to the same assignment set.",
        },
      },
    ],
  },
];
