import type { Kpi } from "../types";

export const growthKpis: Kpi[] = [
  {
    id: "ctr",
    slug: "ctr",
    name: "Click-Through Rate",
    acronym: "CTR",
    nameAr: "معدل النقر إلى الظهور",
    domains: ["marketing", "retail"],
    category: { ar: "التفاعل مع الحملات", en: "Campaign engagement" },
    difficulty: "beginner",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "نسبة مرات النقر إلى مرات ظهور الإعلان أو الرسالة خلال فترة محددة. تقيس مدى نجاح الإعلان في دفع من رآه إلى التفاعل معه بالنقر، لا مدى نجاحه في تحقيق بيع.",
      en: "The ratio of clicks to impressions of an ad or message over a defined period. It measures how well the ad prompts the people who saw it to engage by clicking, not how well it produces a sale.",
    },
    whyItMatters: {
      ar: "هو أول إشارة على ملاءمة الرسالة والتصميم للجمهور المستهدف. يساعد على المقارنة بين نسخ الإعلان (Creatives) والمواضع والأجهزة، ويؤثر في بعض المنصات على تكلفة النقرة وفرص الظهور، لذلك يراقبه فريق الحملات يوميًا.",
      en: "It is the first signal of how well the message and creative fit the target audience. It helps compare creatives, placements, and devices, and on some platforms it influences cost per click and delivery, so campaign teams watch it daily.",
    },
    interpretation: {
      ar: "CTR يخبرك أن الإعلان جذب الانتباه، ولا يخبرك أن الزائر اشترى أو سجّل. قد يرتفع CTR بعنوان مثير يجلب نقرات غير مهتمة ثم ترتد فورًا. اقرأه دائمًا بجوار معدل التحويل وتكلفة التحويل، وقارنه فقط بين إعلانات متشابهة في الموضع والهدف.",
      en: "CTR tells you the ad earned attention, not that the visitor bought or signed up. A clickbait headline can lift CTR by attracting uninterested clicks that bounce immediately. Always read it alongside conversion rate and cost per conversion, and compare it only between ads with a similar placement and objective.",
    },
    formula: "CTR % = Clicks / Impressions x 100",
    numerator: {
      ar: "عدد النقرات الصالحة على الإعلان خلال الفترة، بعد استبعاد النقرات غير الصالحة التي تحددها المنصة (مثل حركة الروبوتات).",
      en: "Valid clicks on the ad during the period, after excluding the invalid clicks flagged by the platform (such as bot traffic).",
    },
    denominator: {
      ar: "عدد مرات ظهور الإعلان في نفس الفترة ولنفس الإعلانات. يجب أن يأتي البسط والمقام من نفس المصدر ونفس تعريف الظهور.",
      en: "Impressions of the same ads in the same period. Numerator and denominator must come from the same source and the same impression definition.",
    },
    timeGrain: {
      ar: "يومي أو أسبوعي للمتابعة التشغيلية، وشهري للتقارير. الأيام ذات الظهور القليل تعطي نسبًا متقلبة جدًا، فلا تحكم على إعلان من يوم واحد بعدد ظهور صغير.",
      en: "Daily or weekly for operational monitoring, monthly for reporting. Low-impression days produce very volatile ratios, so do not judge an ad from a single day with a small impression count.",
    },
    direction: {
      rising: {
        ar: "ارتفاع CTR قد يعني رسالة أوضح أو استهدافًا أدق أو تصميمًا أكثر جاذبية — أو عنوانًا مضللًا يجلب نقرات بلا نية شراء.",
        en: "Rising CTR can mean a clearer message, sharper targeting, or a more compelling creative — or a misleading headline that attracts clicks with no purchase intent.",
      },
      falling: {
        ar: "انخفاضه قد يدل على إرهاق الجمهور من نفس الإعلان (Ad fatigue)، أو توسيع الاستهداف لشرائح أقل اهتمامًا، أو انتقال الظهور إلى مواضع أقل بروزًا.",
        en: "A decline can indicate ad fatigue, targeting widened to less interested segments, or delivery shifting to less prominent placements.",
      },
      caveat: {
        ar: "الأعلى ليس أفضل دائمًا. CTR أعلى مع معدل تحويل أدنى قد يعني إنفاقًا أكبر على نقرات لا قيمة لها. كما أن تغيّر مزيج المواضع أو الأجهزة وحده يحرك CTR الإجمالي دون أي تغيير في جودة الإعلان.",
        en: "Higher is not always better. A higher CTR with a lower conversion rate can mean paying more for worthless clicks. A shift in placement or device mix alone also moves overall CTR without any change in ad quality.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "النقرات", en: "Clicks" }, value: "2,400" },
        { label: { ar: "مرات الظهور", en: "Impressions" }, value: "80,000" },
      ],
      steps: [
        { label: { ar: "النسبة", en: "Ratio" }, expression: "2,400 ÷ 80,000 = 0.03" },
        { label: { ar: "CTR كنسبة مئوية", en: "CTR as a percentage" }, expression: "0.03 × 100 = 3%" },
      ],
      result: { label: { ar: "معدل النقر إلى الظهور", en: "Click-through rate" }, value: "3%" },
      reading: {
        ar: "من كل 100 مرة ظهر فيها الإعلان، نقر عليه 3 أشخاص تقريبًا. هذا الرقم وحده لا يحكم على الحملة: يجب مقارنته بإعلانات من نفس الموضع والهدف، ومعرفة كم من هذه النقرات الـ 2,400 تحوّل فعلًا.",
        en: "Out of every 100 times the ad was shown, about 3 people clicked. This number alone does not judge the campaign: compare it with ads of the same placement and objective, and check how many of those 2,400 clicks actually converted.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "CTR من مجموع النقرات والظهور مع مقارنة بالشهر السابق", en: "CTR from summed clicks and impressions, with prior-month comparison" },
        code: `Impressions :=
SUM ( 'AdPerformance'[Impressions] )

Clicks :=
SUM ( 'AdPerformance'[Clicks] )

-- Ratio of sums: correct at every level (ad, campaign, device, month).
-- Never average a stored row-level CTR column.
CTR % :=
DIVIDE ( [Clicks], [Impressions] )

CTR % Prior Month :=
CALCULATE (
    [CTR %],
    DATEADD ( 'Date'[Date], -1, MONTH )
)

CTR Change (pp) :=
VAR CurrentCTR = [CTR %]
VAR PriorCTR = [CTR % Prior Month]
RETURN
    IF (
        NOT ISBLANK ( CurrentCTR ) && NOT ISBLANK ( PriorCTR ),
        CurrentCTR - PriorCTR
    )`,
        assumptions: [
          {
            ar: "'AdPerformance' بحبيبة يوم × إعلان × موضع × جهاز، ويحمل أعدادًا خامًا للنقرات والظهور لا نسبًا محسوبة مسبقًا.",
            en: "'AdPerformance' is at day × ad × placement × device grain and stores raw click and impression counts, not pre-computed ratios.",
          },
          {
            ar: "النقرات مصفّاة مسبقًا من النقرات غير الصالحة في طبقة البيانات، وكل المنصات المدمجة تستخدم نفس تعريف الظهور، أو يُعرض CTR لكل منصة على حدة.",
            en: "Clicks are already cleaned of invalid clicks in the data layer, and all merged platforms share one impression definition — otherwise CTR is shown per platform.",
          },
          {
            ar: "يُنسّق مقياس CTR % كنسبة مئوية في Power BI؛ القيمة المخزنة كسر عشري (0.03 = 3%).",
            en: "CTR % is formatted as a percentage in Power BI; the stored value is a decimal fraction (0.03 = 3%).",
          },
          {
            ar: "DATEADD يتطلب جدول 'Date' متصلًا ومعلّمًا كجدول تاريخ ومرتبطًا بـ 'AdPerformance'[Date].",
            en: "DATEADD requires a contiguous 'Date' table marked as a date table and related to 'AdPerformance'[Date].",
          },
        ],
        requires: ["AdPerformance[Impressions]", "AdPerformance[Clicks]", "AdPerformance[Date]", "Date[Date]"],
      },
    ],
    model: [
      {
        table: "AdPerformance",
        grain: { ar: "صف لكل يوم × إعلان × موضع × جهاز", en: "One row per day × ad × placement × device" },
        columns: ["Date", "AdId", "CampaignId", "PlacementId", "Device", "Impressions", "Clicks", "Spend"],
        role: { ar: "مصدر البسط والمقام معًا", en: "Source of both numerator and denominator" },
      },
      {
        table: "Ad",
        grain: { ar: "إعلان (نسخة إبداعية) واحد لكل صف", en: "One ad (creative) per row" },
        columns: ["AdId", "CampaignId", "CreativeName", "Format", "Headline"],
        role: { ar: "لمقارنة النسخ الإبداعية", en: "For comparing creatives" },
      },
      {
        table: "Campaign",
        grain: { ar: "حملة واحدة لكل صف", en: "One row per campaign" },
        columns: ["CampaignId", "CampaignName", "ChannelId", "Objective", "StartDate", "EndDate"],
        role: { ar: "يحمل هدف الحملة الذي يجب ألا تُخلط المقارنة عبره", en: "Carries the campaign objective, across which comparisons must not be mixed" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "Month", "Quarter", "Year"],
        role: { ar: "مرتبط بـ AdPerformance[Date] بعلاقة واحد إلى متعدد", en: "Related one-to-many to AdPerformance[Date]" },
      },
    ],
    visuals: [
      {
        pattern: "period-over-period",
        why: {
          ar: "اتجاه CTR عبر الزمن يكشف إرهاق الإعلان: هبوط تدريجي لنفس النسخة الإبداعية إشارة واضحة لتجديدها.",
          en: "The CTR trend over time exposes ad fatigue: a gradual decline for the same creative is a clear signal to refresh it.",
        },
      },
      {
        pattern: "decomposition-tree",
        why: {
          ar: "تفكيك CTR حسب الحملة ثم النسخة ثم الموضع ثم الجهاز يطابق طريقة التحليل الموصى بها ويحدد مصدر التغير بدقة.",
          en: "Breaking CTR down by campaign, then creative, placement, and device matches the recommended analysis path and pinpoints the source of a change.",
        },
      },
      {
        pattern: "scatter-quadrant",
        why: {
          ar: "CTR على محور ومعدل التحويل على الآخر يفصل الإعلانات الجاذبة المربحة عن الجاذبة التي تجلب نقرات بلا قيمة.",
          en: "CTR on one axis and conversion rate on the other separates engaging, productive ads from engaging ads that attract worthless clicks.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "مقارنة CTR بين مواضع أو أهداف حملات مختلفة. إعلان البحث وإعلان العرض (Display) وإعلان الفيديو لها سلوك نقر مختلف جذريًا، ومقارنتها معًا تقود لاستنتاجات خاطئة.",
        en: "Comparing CTR across different placements or campaign objectives. Search, display, and video ads have fundamentally different click behaviour, and comparing them together leads to wrong conclusions.",
      },
      {
        ar: "اعتبار CTR الأعلى دليلًا على نجاح الحملة. النقرة ليست تحويلًا، وعنوان مثير قد يرفع CTR ويخفض جودة الزيارات ويزيد التكلفة لكل تحويل.",
        en: "Treating a higher CTR as proof of campaign success. A click is not a conversion; a sensational headline can lift CTR while lowering visit quality and raising cost per conversion.",
      },
      {
        ar: "حساب متوسط لعمود CTR محسوب على مستوى الصف. إعلان بـ 100 ظهور و10 نقرات (10%) سيؤثر في المتوسط بقدر إعلان بمليون ظهور. الصحيح: مجموع النقرات ÷ مجموع الظهور.",
        en: "Averaging a row-level CTR column. An ad with 100 impressions and 10 clicks (10%) would weigh as much as an ad with a million impressions. The correct form is total clicks ÷ total impressions.",
      },
      {
        ar: "دمج بيانات منصات تعرّف الظهور والنقرة بطرق مختلفة (مثلًا ظهور مُعروض مقابل ظهور مرئي، أو نقرة على الرابط مقابل أي نقرة) في CTR واحد.",
        en: "Merging platforms that define impressions and clicks differently (for example served versus viewable impressions, or link clicks versus any click) into a single CTR.",
      },
      {
        ar: "الحكم على إعلان من أيام ذات ظهور قليل. نسبة 8% من 50 ظهورًا ليست إشارة موثوقة؛ اعرض عدد الظهور بجوار النسبة في التلميح.",
        en: "Judging an ad from low-impression days. 8% from 50 impressions is not a reliable signal; show the impression count next to the ratio in the tooltip.",
      },
    ],
    variants: [
      {
        label: { ar: "CTR على الرابط فقط", en: "Link CTR" },
        formula: "Link Clicks / Impressions x 100",
        difference: {
          ar: "يحتسب النقرات التي تنقل المستخدم إلى الموقع فقط، ويستبعد النقرات على الصورة أو الملف الشخصي أو التفاعلات. أقرب إلى نية الزيارة من CTR العام.",
          en: "Counts only clicks that take the user to the site, excluding clicks on the image, profile, or other interactions. Closer to visit intent than overall CTR.",
        },
      },
      {
        label: { ar: "CTR للبريد الإلكتروني", en: "Email CTR" },
        formula: "Unique Clicks / Delivered Emails x 100",
        difference: {
          ar: "المقام هو الرسائل المسلّمة لا مرات الظهور، والنقرات فريدة لكل مستلم. بعض الفرق تستخدم الرسائل المفتوحة كمقام (Click-to-Open Rate)، وهو مؤشر مختلف يجب تسميته صراحة.",
          en: "The denominator is delivered emails rather than impressions, and clicks are unique per recipient. Some teams use opened emails as the denominator (click-to-open rate), which is a different metric that must be named explicitly.",
        },
      },
      {
        label: { ar: "CTR على الظهور المرئي", en: "Viewable CTR" },
        formula: "Clicks / Viewable Impressions x 100",
        difference: {
          ar: "يقسم على الظهور الذي أصبح مرئيًا فعلًا على الشاشة، فيعطي نسبة أعلى وأعدل للمواضع التي يُعرض فيها كثير من الإعلانات دون أن تُرى.",
          en: "Divides by impressions that actually became visible on screen, giving a higher and fairer ratio for placements where many ads are served but never seen.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "CTR الإجمالي لعدة إعلانات هو متوسط CTR لكل إعلان مرجّحًا بعدد الظهور، ولذلك يمكن أن يتغير CTR الإجمالي بتغير مزيج الظهور وحده دون تغير CTR أي إعلان.",
          en: "The overall CTR of several ads is each ad CTR weighted by its impressions, so overall CTR can change from a shift in impression mix alone, with no individual ad CTR changing.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "التعبير عن CTR كنسبة مئوية من مرات الظهور هو العرض الشائع في منصات الإعلان وتقارير التسويق.",
          en: "Expressing CTR as a percentage of impressions is the common presentation in ad platforms and marketing reports.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "أي نقرات تُحتسب (كل النقرات أم النقرات على الرابط)، وأي ظهور يُحتسب، وحدّ أدنى لعدد الظهور قبل الحكم على إعلان — كلها قرارات داخلية يجب توثيقها.",
          en: "Which clicks count (all clicks or link clicks), which impressions count, and the minimum impression volume before judging an ad are internal decisions that must be documented.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (2,400 نقرة و80,000 ظهور) وأرقام التمرين من تأليفنا للتعليم فقط، وليست معايير صناعية لما يُعد CTR جيدًا.",
          en: "The example figures (2,400 clicks and 80,000 impressions) and the exercise figures are invented for teaching and are not industry benchmarks for a good CTR.",
        },
      },
    ],
    related: ["conversion-rate", "cpl", "roas"],
    exercise: {
      prompt: {
        ar: "في حملة واحدة نسختان إبداعيتان. النسخة A: 45,000 ظهور و1,800 نقرة و36 تحويلًا. النسخة B: 90,000 ظهور و2,700 نقرة و81 تحويلًا. احسب CTR لكل نسخة، وCTR الإجمالي للحملة، وعدد التحويلات لكل 1,000 ظهور. أي نسخة أفضل؟ وما الخطأ في حساب CTR الإجمالي كمتوسط للنسبتين؟",
        en: "A campaign runs two creatives. Creative A: 45,000 impressions, 1,800 clicks, 36 conversions. Creative B: 90,000 impressions, 2,700 clicks, 81 conversions. Compute each creative CTR, the campaign overall CTR, and conversions per 1,000 impressions. Which creative is better? And what is wrong with computing overall CTR as the average of the two ratios?",
      },
      hint: {
        ar: "CTR الإجمالي = مجموع النقرات ÷ مجموع الظهور. ثم انظر إلى ما يحدث بعد النقرة.",
        en: "Overall CTR = total clicks ÷ total impressions. Then look at what happens after the click.",
      },
      answer: {
        ar: "CTR للنسخة A = 1,800 ÷ 45,000 = 4%. CTR للنسخة B = 2,700 ÷ 90,000 = 3%. CTR الإجمالي = 4,500 ÷ 135,000 = 3.33%، بينما متوسط النسبتين (4% + 3%) ÷ 2 = 3.5% خاطئ لأنه يعطي النسخة A نفس وزن B رغم أن ظهورها نصف ظهور B. التحويلات لكل 1,000 ظهور: A = 36 ÷ 45 = 0.8، وB = 81 ÷ 90 = 0.9. أي أن معدل تحويل النقرات في A هو 36 ÷ 1,800 = 2% وفي B هو 81 ÷ 2,700 = 3%. النسخة A تجذب نقرات أكثر لكن B تحقق نتائج أكثر لكل ظهور، فهي الأفضل إذا كان هدف الحملة التحويل.",
        en: "Creative A CTR = 1,800 ÷ 45,000 = 4%. Creative B CTR = 2,700 ÷ 90,000 = 3%. Overall CTR = 4,500 ÷ 135,000 = 3.33%, while averaging the ratios, (4% + 3%) ÷ 2 = 3.5%, is wrong because it gives A the same weight as B although A had half the impressions. Conversions per 1,000 impressions: A = 36 ÷ 45 = 0.8, B = 81 ÷ 90 = 0.9. Click-to-conversion rate is 36 ÷ 1,800 = 2% for A and 81 ÷ 2,700 = 3% for B. A attracts more clicks but B produces more results per impression, so B is the better creative if the campaign objective is conversion.",
      },
    },
    references: [
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "قسمة آمنة تعيد BLANK عند غياب الظهور بدل خطأ القسمة على صفر.",
          en: "Safe division that returns BLANK when there are no impressions instead of a divide-by-zero error.",
        },
      },
      {
        title: "DATEADD function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/dateadd-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "يزيح سياق التاريخ لحساب CTR للشهر السابق، ويتطلب جدول تاريخ متصلًا.",
          en: "Shifts the date context to compute prior-month CTR; requires a contiguous date table.",
        },
      },
    ],
  },

  {
    id: "cpl",
    slug: "cpl",
    name: "Cost per Lead",
    acronym: "CPL",
    nameAr: "تكلفة العميل المحتمل",
    domains: ["marketing", "banking", "it-saas"],
    category: { ar: "توليد العملاء المحتملين", en: "Lead generation" },
    difficulty: "intermediate",
    unit: { ar: "عملة لكل عميل محتمل", en: "Currency per lead" },
    aggregation: "ratio",
    definition: {
      ar: "متوسط تكلفة الحصول على عميل محتمل (Lead) صالح واحد من حملة أو قناة خلال فترة محددة. يُقسم إنفاق الحملة على عدد العملاء المحتملين الصالحين وفق تعريف متفق عليه، لا على كل النماذج المُرسلة.",
      en: "The average cost of obtaining one valid lead from a campaign or channel over a defined period. Campaign cost is divided by the number of valid leads under an agreed definition, not by every form submitted.",
    },
    whyItMatters: {
      ar: "في الأعمال التي تبيع عبر فريق مبيعات — البنوك والبرمجيات للشركات والعقار والتعليم — العميل المحتمل هو المخرَج المباشر للتسويق. CPL يسمح بمقارنة حملات توليد العملاء المحتملين بسرعة، قبل أن تكتمل دورة البيع ويظهر العميل الفعلي وCAC.",
      en: "In businesses that sell through a sales team — banking, B2B software, real estate, education — the lead is marketing's direct output. CPL lets you compare lead-generation campaigns quickly, before the sales cycle completes and the actual customer and CAC appear.",
    },
    interpretation: {
      ar: "CPL منخفض لا يعني حملة جيدة إذا كانت العملاء المحتملين الناتجين ضعيفي الجودة ولا يتحولون إلى عملاء. لهذا يُقرأ CPL دائمًا مع نسبة التأهيل ونسبة التحول إلى عميل، والقرار النهائي يُبنى على تكلفة العميل الفعلي لا تكلفة العميل المحتمل.",
      en: "A low CPL does not mean a good campaign if the resulting leads are poor quality and never become customers. CPL is therefore always read with qualification rate and lead-to-customer rate, and the final decision rests on cost per actual customer, not cost per lead.",
    },
    formula: "CPL = Campaign Cost / Number of Valid Leads",
    numerator: {
      ar: "تكلفة الحملة خلال الفترة: الإنفاق الإعلاني، وقد تشمل حسب سياسة الشركة تكاليف الإنتاج الإبداعي والوكالة وأدوات جمع العملاء المحتملين. يجب التصريح بالمكونات.",
      en: "Campaign cost in the period: media spend and, depending on company policy, creative production, agency fees, and lead-capture tools. The components must be declared.",
    },
    denominator: {
      ar: "عدد العملاء المحتملين الصالحين الناتجين عن الحملة في نفس الفترة، بعد استبعاد المكرر والبيانات الوهمية أو الناقصة ومن هم خارج النطاق المستهدف.",
      en: "Valid leads generated by the campaign in the same period, after removing duplicates, fake or incomplete records, and contacts outside the target scope.",
    },
    timeGrain: {
      ar: "أسبوعي أثناء تشغيل الحملة، وشهري أو على مستوى الحملة الكاملة للتقارير. عدد العملاء المحتملين الصالحين قد يتغير بعد أيام من الإنشاء عند مراجعة فريق المبيعات، لذا ثبّت تاريخ القطع أو أعد الحساب عند تحديث حالة التحقق.",
      en: "Weekly while the campaign runs, monthly or whole-campaign for reporting. The valid lead count can change days after creation as sales reviews leads, so fix a cut-off date or recalculate when validation status updates.",
    },
    direction: {
      rising: {
        ar: "ارتفاع CPL قد يعني تشبع الجمهور أو ارتفاع أسعار المزادات الإعلانية أو تشديد تعريف العميل المحتمل الصالح — وهذا الأخير تحسّن في القياس لا تراجع في الأداء.",
        en: "Rising CPL can mean audience saturation, higher auction prices, or a stricter valid-lead definition — the last being a measurement improvement, not a performance decline.",
      },
      falling: {
        ar: "انخفاضه قد يعني استهدافًا أفضل أو نموذجًا أسهل، لكنه قد يعني أيضًا أن النموذج صار سهلًا لدرجة جذب عملاء محتملين غير جادين.",
        en: "A decline can mean better targeting or an easier form, but it can also mean the form became so easy that it attracts unserious leads.",
      },
      caveat: {
        ar: "الأقل ليس أفضل تلقائيًا. حملة بـ CPL أعلى قد تكون الأكفأ إذا كانت نسبة تحول عملائها المحتملين إلى عملاء أعلى بكثير. المرجع النهائي هو تكلفة العميل الفعلي والإيراد الناتج.",
        en: "Lower is not automatically better. A campaign with a higher CPL can be the most efficient if its leads convert to customers at a much higher rate. The final reference is cost per actual customer and the revenue produced.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "تكلفة الحملة", en: "Campaign cost" }, value: "18,000" },
        { label: { ar: "كل النماذج المستلمة (خام)", en: "All form submissions (raw)" }, value: "420" },
        { label: { ar: "العملاء المحتملون الصالحون", en: "Valid leads" }, value: "300" },
        { label: { ar: "العملاء المحتملون المؤهلون (MQL)", en: "Qualified leads (MQL)" }, value: "120" },
      ],
      steps: [
        { label: { ar: "CPL على العملاء المحتملين الصالحين", en: "CPL on valid leads" }, expression: "18,000 ÷ 300 = 60" },
        { label: { ar: "للمقارنة: على الخام", en: "For contrast: on raw submissions" }, expression: "18,000 ÷ 420 = 42.86" },
        { label: { ar: "للمقارنة: على المؤهلين", en: "For contrast: on qualified leads" }, expression: "18,000 ÷ 120 = 150" },
      ],
      result: { label: { ar: "تكلفة العميل المحتمل الصالح", en: "Cost per valid lead" }, value: "60" },
      reading: {
        ar: "نفس الحملة ونفس الإنفاق تعطي 42.86 أو 60 أو 150 حسب ما يُعد عميلًا محتملًا. لهذا يجب أن يحمل عنوان البطاقة التعريف المستخدم، وأن تُعرض تكلفة العميل المؤهل بجوار CPL في بطاقة الأداء.",
        en: "The same campaign and the same spend give 42.86, 60, or 150 depending on what counts as a lead. That is why the card title must carry the definition used, and cost per qualified lead should sit next to CPL on the scorecard.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "CPL على العملاء المحتملين الصالحين مع مؤشرات الجودة", en: "CPL on valid leads with quality measures" },
        code: `Campaign Cost :=
SUM ( 'CampaignCost'[Amount] )

Raw Leads :=
DISTINCTCOUNT ( 'Lead'[LeadId] )

Valid Leads :=
CALCULATE (
    DISTINCTCOUNT ( 'Lead'[LeadId] ),
    'Lead'[IsValid] = TRUE ()
)

Qualified Leads :=
CALCULATE (
    [Valid Leads],
    'Lead'[IsQualified] = TRUE ()
)

Converted Leads :=
CALCULATE (
    [Valid Leads],
    'Lead'[IsConverted] = TRUE ()
)

CPL :=
DIVIDE ( [Campaign Cost], [Valid Leads] )

Cost per Qualified Lead :=
DIVIDE ( [Campaign Cost], [Qualified Leads] )

Lead to Customer % :=
DIVIDE ( [Converted Leads], [Valid Leads] )

-- The number the budget decision should rest on.
Cost per Converted Lead :=
DIVIDE ( [Campaign Cost], [Converted Leads] )`,
        assumptions: [
          {
            ar: "'Lead'[IsValid] و'Lead'[IsQualified] و'Lead'[IsConverted] أعمدة منطقية تُحسب في طبقة البيانات وفق تعريفات متفق عليها مع فريق المبيعات، لا في المقياس.",
            en: "'Lead'[IsValid], 'Lead'[IsQualified], and 'Lead'[IsConverted] are boolean columns computed in the data layer from definitions agreed with sales, not in the measure.",
          },
          {
            ar: "'CampaignCost' و'Lead' مرتبطان بجدولي 'Campaign' و'Date' المشتركين؛ تاريخ العميل المحتمل هو تاريخ إنشائه، وتاريخ التكلفة هو تاريخ الإنفاق.",
            en: "'CampaignCost' and 'Lead' both relate to the shared 'Campaign' and 'Date' dimensions; the lead date is its creation date and the cost date is the spend date.",
          },
          {
            ar: "كل عميل محتمل منسوب إلى حملة واحدة فقط (إسناد بنقطة واحدة). إذا نُسب لعدة حملات فسيتكرر في المقام عند الجمع عبر الحملات.",
            en: "Each lead is attributed to exactly one campaign (single-touch attribution). If a lead is credited to several campaigns, it is double-counted in the denominator when totalling across campaigns.",
          },
          {
            ar: "Converted Leads يحسب العملاء المحتملين الذين تحولوا في أي وقت لاحق، فأرقام الأشهر الأخيرة ستبدو أضعف حتى تكتمل دورة البيع.",
            en: "Converted Leads counts leads that converted at any later time, so recent months will look weaker until the sales cycle completes.",
          },
        ],
        requires: ["CampaignCost[Amount]", "Lead[LeadId]", "Lead[IsValid]", "Lead[IsQualified]", "Lead[IsConverted]"],
      },
    ],
    model: [
      {
        table: "CampaignCost",
        grain: { ar: "بند تكلفة واحد لكل حملة وتاريخ ونوع تكلفة", en: "One cost line per campaign, date, and cost type" },
        columns: ["CostDate", "CampaignId", "ChannelId", "CostType", "Amount"],
        role: { ar: "مصدر البسط", en: "Source of the numerator" },
      },
      {
        table: "Lead",
        grain: { ar: "عميل محتمل واحد لكل صف", en: "One row per lead" },
        columns: ["LeadId", "CreatedDate", "CampaignId", "Source", "IsValid", "IsQualified", "IsConverted", "ConvertedDate"],
        role: { ar: "مصدر المقام ومؤشرات الجودة", en: "Source of the denominator and quality measures" },
      },
      {
        table: "Campaign",
        grain: { ar: "حملة واحدة لكل صف", en: "One row per campaign" },
        columns: ["CampaignId", "CampaignName", "ChannelId", "Objective", "StartDate", "EndDate"],
        role: { ar: "بُعد مشترك يربط التكلفة بالعملاء المحتملين", en: "Shared dimension linking cost to leads" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "Month", "Quarter", "Year"],
        role: { ar: "مرتبط بـ CampaignCost[CostDate] وLead[CreatedDate]", en: "Related to CampaignCost[CostDate] and Lead[CreatedDate]" },
      },
    ],
    visuals: [
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "بطاقة أداء تعرض CPL مع تكلفة العميل المؤهل ونسبة التحول إلى عميل تمنع الحكم على الحملة من التكلفة وحدها.",
          en: "A scorecard showing CPL with cost per qualified lead and lead-to-customer rate prevents judging a campaign on cost alone.",
        },
      },
      {
        pattern: "funnel",
        why: {
          ar: "قمع من النماذج الخام إلى الصالحة ثم المؤهلة ثم العملاء يوضح أين تُفقد الجودة ولماذا يختلف CPL حسب المرحلة.",
          en: "A funnel from raw submissions to valid, qualified, and customer shows where quality is lost and why CPL differs by stage.",
        },
      },
      {
        pattern: "scatter-quadrant",
        why: {
          ar: "CPL على محور ونسبة التحول إلى عميل على الآخر يكشف الحملات الرخيصة ضعيفة الجودة والحملات المكلفة عالية الجودة.",
          en: "CPL on one axis and lead-to-customer rate on the other exposes cheap low-quality campaigns and expensive high-quality ones.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "عدم تعريف العميل المحتمل الصالح، أو خلط العملاء المحتملين الخام بالمؤهلين. نفس الحملة قد يكون CPL لها 43 أو 150 حسب التعريف، والمقارنة بين حملات بتعريفات مختلفة بلا معنى.",
        en: "Not defining a valid lead, or mixing raw leads with qualified ones. The same campaign can show a CPL of 43 or 150 depending on the definition, and comparing campaigns under different definitions is meaningless.",
      },
      {
        ar: "تحسين CPL على حساب الجودة. تقصير النموذج أو إضافة حافز مجاني يخفض CPL بسرعة لكنه قد يملأ خط المبيعات بعملاء محتملين لن يشتروا أبدًا.",
        en: "Optimising CPL at the expense of quality. Shortening the form or adding a free incentive cuts CPL quickly but can flood the pipeline with leads who will never buy.",
      },
      {
        ar: "عدّ نفس الشخص أكثر من مرة. من يملأ النموذج مرتين أو يأتي من حملتين يجب إزالة تكراره قبل القسمة، وإلا انخفض CPL زورًا.",
        en: "Counting the same person more than once. Someone who submits twice or comes from two campaigns must be de-duplicated before dividing, otherwise CPL is falsely low.",
      },
      {
        ar: "حساب متوسط CPL للحملات بدل قسمة إجمالي التكلفة على إجمالي العملاء المحتملين. حملة صغيرة بـ CPL مرتفع ستشوه المتوسط البسيط.",
        en: "Averaging campaign CPLs instead of dividing total cost by total leads. A small campaign with a high CPL distorts the simple average.",
      },
      {
        ar: "تغيير حالة التحقق بعد إصدار التقرير. إذا راجع فريق المبيعات العملاء المحتملين بعد أسبوعين فسيتغير CPL لفترة مغلقة؛ وثّق تاريخ القطع أو اعرض الرقم كأولي.",
        en: "Validation status changing after the report is issued. If sales reviews leads two weeks later, CPL changes for a closed period; document the cut-off date or label the figure as preliminary.",
      },
    ],
    variants: [
      {
        label: { ar: "تكلفة العميل المحتمل المؤهل", en: "Cost per qualified lead (cost per MQL)" },
        formula: "Campaign Cost / Marketing Qualified Leads",
        difference: {
          ar: "يقسم على العملاء المحتملين الذين تجاوزوا معايير التأهيل (مثل الملاءمة والاهتمام)، فيكون أعلى من CPL لكنه أقرب إلى القيمة الفعلية للحملة.",
          en: "Divides by leads that passed qualification criteria (such as fit and interest), so it is higher than CPL but closer to the campaign's real value.",
        },
      },
      {
        label: { ar: "تكلفة الاكتساب من العملاء المحتملين", en: "Cost per converted lead" },
        formula: "Campaign Cost / Leads Converted to Customers",
        difference: {
          ar: "يقيس تكلفة العميل الفعلي الناتج من الحملة. أبطأ ظهورًا لأنه ينتظر اكتمال دورة البيع، لكنه الأصلح لقرارات الميزانية ويقترب من CAC على مستوى الحملة.",
          en: "Measures the cost of an actual customer from the campaign. It appears later because it waits for the sales cycle, but it is the best basis for budget decisions and approaches campaign-level CAC.",
        },
      },
      {
        label: { ar: "CPL الإعلامي فقط", en: "Media-only CPL" },
        formula: "Media Spend / Valid Leads",
        difference: {
          ar: "يستبعد تكاليف الإنتاج الإبداعي والوكالة والأدوات، فيكون أقل. مفيد لمقارنة القنوات الإعلانية، لكنه يقلل التكلفة الحقيقية للعميل المحتمل.",
          en: "Excludes creative production, agency, and tooling costs, so it is lower. Useful for comparing ad channels, but it understates the true cost of a lead.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "بما أن العملاء المحتملين المؤهلين جزء من الصالحين، والصالحين جزء من الخام، فإن تكلفة العميل المؤهل ≥ CPL الصالح ≥ CPL الخام لنفس التكلفة دائمًا.",
          en: "Because qualified leads are a subset of valid leads, and valid leads a subset of raw submissions, cost per qualified lead ≥ valid-lead CPL ≥ raw CPL for the same cost, always.",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "قسمة تكلفة الحملة على عدد العملاء المحتملين الناتجين عنها هو الشكل الشائع لقياس كفاءة حملات توليد العملاء المحتملين.",
          en: "Dividing campaign cost by the leads it generated is the common way to measure lead-generation campaign efficiency.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "تعريف العميل المحتمل الصالح والمؤهل، وبنود التكلفة الداخلة في البسط، ونموذج الإسناد وتاريخ القطع — كلها قرارات داخلية تختلف بين الشركات ويجب الاتفاق عليها مع فريق المبيعات.",
          en: "The definition of a valid and a qualified lead, the cost items in the numerator, the attribution model, and the cut-off date are internal decisions that differ between companies and must be agreed with sales.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (18,000 تكلفة و300 عميل محتمل صالح) وأرقام التمرين من تأليفنا للتعليم، وليست معيارًا لما يُعد CPL جيدًا في أي قطاع.",
          en: "The example figures (18,000 cost and 300 valid leads) and the exercise figures are invented for teaching and are not a benchmark for a good CPL in any sector.",
        },
      },
    ],
    related: ["cac", "conversion-rate", "ctr", "marketing-roi"],
    exercise: {
      prompt: {
        ar: "الحملة A: تكلفة 24,000، و600 نموذج خام، و400 عميل محتمل صالح، و40 تحولوا إلى عملاء. الحملة B: تكلفة 30,000، و450 نموذجًا خامًا، و300 عميل محتمل صالح، و60 تحولوا إلى عملاء. احسب CPL (على الصالحين) لكل حملة، وCPL الإجمالي، وتكلفة العميل المتحول لكل حملة. أي حملة تستحق زيادة الميزانية؟",
        en: "Campaign A: cost 24,000, 600 raw submissions, 400 valid leads, 40 converted to customers. Campaign B: cost 30,000, 450 raw submissions, 300 valid leads, 60 converted to customers. Compute CPL (on valid leads) for each campaign, the overall CPL, and cost per converted lead for each. Which campaign deserves more budget?",
      },
      hint: {
        ar: "CPL الإجمالي = إجمالي التكلفة ÷ إجمالي العملاء المحتملين الصالحين، لا متوسط الرقمين. ثم احسب ما تدفعه مقابل كل عميل فعلي.",
        en: "Overall CPL = total cost ÷ total valid leads, not the average of the two figures. Then compute what you pay for each actual customer.",
      },
      answer: {
        ar: "CPL للحملة A = 24,000 ÷ 400 = 60، وللحملة B = 30,000 ÷ 300 = 100. CPL الإجمالي = 54,000 ÷ 700 = 77.14 (وليس (60 + 100) ÷ 2 = 80). نسبة التحول إلى عميل: A = 40 ÷ 400 = 10%، وB = 60 ÷ 300 = 20%. تكلفة العميل المتحول: A = 24,000 ÷ 40 = 600، وB = 30,000 ÷ 60 = 500. رغم أن CPL للحملة B أعلى بنسبة 67%، فإن كل عميل فعلي منها أرخص بـ 100، لذا هي الأحق بزيادة الميزانية — مع التحقق من أن قيمة عملائها ليست أقل.",
        en: "CPL for A = 24,000 ÷ 400 = 60, for B = 30,000 ÷ 300 = 100. Overall CPL = 54,000 ÷ 700 = 77.14 (not (60 + 100) ÷ 2 = 80). Lead-to-customer rate: A = 40 ÷ 400 = 10%, B = 60 ÷ 300 = 20%. Cost per converted lead: A = 24,000 ÷ 40 = 600, B = 30,000 ÷ 60 = 500. Although B's CPL is 67% higher, each actual customer from B costs 100 less, so B deserves the extra budget — after checking that its customers are not of lower value.",
      },
    },
    references: [
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "قسمة آمنة تعيد BLANK للحملات التي لم تنتج أي عميل محتمل صالح بعد.",
          en: "Safe division that returns BLANK for campaigns with no valid leads yet.",
        },
      },
      {
        title: "DISTINCTCOUNT function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/distinctcount-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "يعدّ العملاء المحتملين الفريدين، فيحمي المقام من الصفوف المكررة لنفس المعرف.",
          en: "Counts distinct leads, protecting the denominator from repeated rows for the same id.",
        },
      },
    ],
  },

  {
    id: "marketing-roi",
    slug: "marketing-roi",
    name: "Marketing Return on Investment",
    acronym: "ROMI",
    nameAr: "العائد على الاستثمار التسويقي",
    domains: ["marketing", "retail"],
    category: { ar: "العائد على الإنفاق", en: "Return on spend" },
    difficulty: "advanced",
    unit: { ar: "نسبة مئوية", en: "Percentage" },
    aggregation: "ratio",
    definition: {
      ar: "صافي العائد الذي حققه التسويق مقارنة بتكلفته. يُطرح الاستثمار التسويقي من الربح الإضافي المنسوب للتسويق، ثم يُقسم الناتج على الاستثمار. الربح هنا ربح إضافي (Incremental) — أي ما لم يكن ليتحقق بدون النشاط التسويقي — وليس إيرادًا.",
      en: "The net return marketing generated relative to its cost. Marketing investment is subtracted from the incremental profit attributable to marketing, and the result is divided by the investment. Profit here is incremental — what would not have happened without the marketing activity — not revenue.",
    },
    whyItMatters: {
      ar: "هو السؤال الذي تطرحه الإدارة المالية على التسويق: هل أعاد كل ريال أُنفق أكثر من ريال من الربح؟ يسمح بمقارنة التسويق بفرص الاستثمار الأخرى، وبتحديد الحملات التي تستحق التوسع أو الإيقاف.",
      en: "It is the question finance asks of marketing: did every unit spent return more than one unit of profit? It lets marketing be compared with other investment opportunities and identifies campaigns worth scaling or stopping.",
    },
    interpretation: {
      ar: "ROI موجب يعني أن الحملة أعادت أكثر من تكلفتها، و0% تعادل، وسالب يعني خسارة. لكن الرقم لا يكون أدق من تقدير الربح الإضافي الذي بُني عليه: ربح منسوب بنموذج إسناد ليس بالضرورة ربحًا سببه التسويق، ولذلك يجب أن يرافق الرقم دائمًا وصف لطريقة القياس.",
      en: "Positive ROI means the campaign returned more than it cost, 0% is break-even, and negative is a loss. But the figure is no more accurate than the incremental-profit estimate beneath it: profit credited by an attribution model is not necessarily profit caused by marketing, so the figure must always be accompanied by a description of the measurement method.",
    },
    formula: "Marketing ROI % = (Incremental Profit Attributable to Marketing - Marketing Investment) / Marketing Investment x 100",
    numerator: {
      ar: "الربح الإضافي المنسوب للتسويق (ربح إجمالي أو مساهمة قبل خصم تكلفة التسويق) مطروحًا منه الاستثمار التسويقي. يُقدَّر الربح الإضافي بأفضل ما يتاح: تجربة بمجموعة ضابطة، أو اختبار جغرافي، أو نمذجة مزيج تسويقي، وإلا فبالإسناد مع التصريح بذلك.",
      en: "Incremental profit attributable to marketing (gross profit or contribution before deducting marketing cost) minus the marketing investment. Incremental profit is estimated with the best method available: a holdout experiment, a geo test, marketing mix modelling, or else attribution, declared as such.",
    },
    denominator: {
      ar: "الاستثمار التسويقي للحملة أو البرنامج: الإنفاق الإعلاني وتكاليف الإنتاج والوكالة وأي بنود أخرى تحددها السياسة، بشرط أن تكون نفس البنود التي طُرحت في البسط.",
      en: "The marketing investment of the campaign or programme: media, production, agency, and any other items the policy defines, provided they are the same items subtracted in the numerator.",
    },
    timeGrain: {
      ar: "على مستوى الحملة الكاملة أو ربع سنوي. الأثر يتأخر عن الإنفاق وقد يمتد لأشهر، لذا فإن ROI الشهري لحملة لم تنته غالبًا مضلل. حدد نافذة قياس ثابتة للأثر وطبّقها على كل الحملات.",
      en: "Whole-campaign or quarterly. The effect lags spend and can extend for months, so a monthly ROI for an unfinished campaign is usually misleading. Set a fixed measurement window for the effect and apply it to every campaign.",
    },
    direction: {
      rising: {
        ar: "ارتفاع ROI يعني أن كل وحدة إنفاق تولّد ربحًا إضافيًا أكبر: استهداف أفضل، أو هامش أعلى للمنتجات المروّج لها، أو إنفاق أقل لنفس الأثر.",
        en: "Rising ROI means each unit of spend generates more incremental profit: better targeting, higher margin on promoted products, or less spend for the same effect.",
      },
      falling: {
        ar: "انخفاضه قد يعني تشبع القناة أو ارتفاع التكلفة أو ترويج منتجات بهامش أدنى أو خصومات تأكل الربح.",
        en: "A decline can mean channel saturation, rising costs, promotion of lower-margin products, or discounts eating the profit.",
      },
      caveat: {
        ar: "تعظيم ROI ليس هو تعظيم الربح. خفض الإنفاق إلى أفضل الحملات فقط يرفع النسبة لكنه قد يخفض إجمالي الربح الصافي؛ ما دام الربح الإضافي من الوحدة التالية أكبر من تكلفتها فزيادة الإنفاق مجدية رغم انخفاض ROI المتوسط.",
        en: "Maximising ROI is not maximising profit. Cutting spend back to only the best campaigns raises the ratio but can lower total net profit; as long as the next unit of spend returns more incremental profit than it costs, more spend pays off even as average ROI falls.",
      },
    },
    example: {
      inputs: [
        { label: { ar: "الربح الإضافي المنسوب للتسويق", en: "Incremental profit attributable to marketing" }, value: "40,000" },
        { label: { ar: "الاستثمار التسويقي", en: "Marketing investment" }, value: "20,000" },
      ],
      steps: [
        { label: { ar: "صافي العائد", en: "Net return" }, expression: "40,000 − 20,000 = 20,000" },
        { label: { ar: "النسبة", en: "Ratio" }, expression: "20,000 ÷ 20,000 = 1.0" },
        { label: { ar: "ROI كنسبة مئوية", en: "ROI as a percentage" }, expression: "1.0 × 100 = 100%" },
      ],
      result: { label: { ar: "العائد على الاستثمار التسويقي", en: "Marketing ROI" }, value: "100%" },
      reading: {
        ar: "كل ريال أُنفق أعاد تكلفته وحقق فوقها ريالًا من الربح الصافي. لاحظ أن الحساب مبني على الربح الإضافي لا الإيراد: لو استُخدم الإيراد المنسوب بدلًا منه لظهرت نسبة أعلى بكثير لا تعكس أي قيمة حقيقية، وهذا هو الفرق بين ROI وROAS.",
        en: "Each unit spent paid back its cost and added one unit of net profit on top. Note the calculation rests on incremental profit, not revenue: using attributed revenue instead would show a far higher ratio that reflects no real value, which is the difference between ROI and ROAS.",
      },
    },
    code: [
      {
        language: "dax",
        label: { ar: "ROI التسويقي من الربح الإضافي المقاس", en: "Marketing ROI from measured incremental profit" },
        code: `Marketing Investment :=
SUM ( 'MarketingInvestment'[Amount] )

-- Incremental gross profit estimated per campaign and measurement window,
-- before deducting marketing cost. Loaded from the measurement process
-- (holdout, geo test, MMM, or attribution) — not computed here.
Incremental Profit :=
SUM ( 'CampaignIncrementality'[IncrementalGrossProfit] )

Net Marketing Return :=
[Incremental Profit] - [Marketing Investment]

-- Blank rather than -100% when a campaign has spend but no measured result yet.
Marketing ROI % :=
VAR Investment = [Marketing Investment]
VAR Profit = [Incremental Profit]
RETURN
    IF (
        NOT ISBLANK ( Profit ) && Investment > 0,
        DIVIDE ( Profit - Investment, Investment )
    )`,
        assumptions: [
          {
            ar: "'CampaignIncrementality' يحمل ربحًا إجماليًا إضافيًا مقدّرًا لكل حملة ونافذة قياس، قبل خصم تكلفة التسويق. المقياس يستهلك نتيجة القياس ولا يقوم بها.",
            en: "'CampaignIncrementality' holds estimated incremental gross profit per campaign and measurement window, before marketing cost is deducted. The measure consumes the measurement result rather than performing it.",
          },
          {
            ar: "'MarketingInvestment' يشمل نفس بنود التكلفة المعتمدة في السياسة؛ أي تغيير في البنود يغيّر ROI دون أي تغيير في الأداء.",
            en: "'MarketingInvestment' includes the same cost items the policy approves; any change in items changes ROI with no change in performance.",
          },
          {
            ar: "الجدولان مرتبطان بـ 'Campaign' و'Date'. لأن الأثر يُسجل بتاريخ نهاية نافذة القياس والإنفاق بتاريخ حدوثه، فالقراءة الصحيحة على مستوى الحملة أو الربع، لا الشهر.",
            en: "Both tables relate to 'Campaign' and 'Date'. Because the effect is dated at the end of its measurement window and spend at the date incurred, the correct reading is at campaign or quarter level, not month.",
          },
          {
            ar: "يُنسّق Marketing ROI % كنسبة مئوية؛ القيمة 1.0 تعني 100%.",
            en: "Marketing ROI % is formatted as a percentage; a value of 1.0 means 100%.",
          },
        ],
        requires: ["MarketingInvestment[Amount]", "CampaignIncrementality[IncrementalGrossProfit]", "Campaign[CampaignId]", "Date[Date]"],
      },
    ],
    model: [
      {
        table: "MarketingInvestment",
        grain: { ar: "بند استثمار واحد لكل حملة وتاريخ ونوع تكلفة", en: "One investment line per campaign, date, and cost type" },
        columns: ["CostDate", "CampaignId", "ChannelId", "CostType", "Amount"],
        role: { ar: "مصدر المقام والجزء المطروح من البسط", en: "Source of the denominator and the amount subtracted in the numerator" },
      },
      {
        table: "CampaignIncrementality",
        grain: { ar: "صف لكل حملة ونافذة قياس", en: "One row per campaign and measurement window" },
        columns: ["CampaignId", "WindowStartDate", "WindowEndDate", "IncrementalRevenue", "IncrementalGrossProfit", "Method"],
        role: { ar: "مصدر الربح الإضافي مع طريقة القياس", en: "Source of incremental profit, with the measurement method" },
      },
      {
        table: "Campaign",
        grain: { ar: "حملة واحدة لكل صف", en: "One row per campaign" },
        columns: ["CampaignId", "CampaignName", "ChannelId", "Objective", "StartDate", "EndDate"],
        role: { ar: "بُعد مشترك يربط الاستثمار بالأثر", en: "Shared dimension linking investment to effect" },
      },
      {
        table: "Date",
        grain: { ar: "يوم واحد لكل صف", en: "One row per day" },
        columns: ["Date", "Month", "Quarter", "Year"],
        role: { ar: "مرتبط بـ MarketingInvestment[CostDate] وCampaignIncrementality[WindowEndDate]", en: "Related to MarketingInvestment[CostDate] and CampaignIncrementality[WindowEndDate]" },
      },
    ],
    visuals: [
      {
        pattern: "pl-matrix",
        why: {
          ar: "مصفوفة ربحية الحملات بأعمدة الاستثمار والربح الإضافي وصافي العائد وROI وطريقة القياس تجعل الافتراضات ظاهرة بجوار الرقم.",
          en: "A campaign profitability matrix with investment, incremental profit, net return, ROI, and measurement method keeps the assumptions visible next to the number.",
        },
      },
      {
        pattern: "variance-bar",
        why: {
          ar: "أشرطة صافي العائد لكل حملة حول الصفر تفصل فورًا الحملات التي أعادت تكلفتها عن الخاسرة.",
          en: "Net return bars per campaign around zero immediately separate campaigns that paid back from loss-makers.",
        },
      },
      {
        pattern: "kpi-card-multi",
        why: {
          ar: "عرض ROI مع صافي العائد المطلق ونسبة الإنفاق المقاس بتجربة يمنع الاحتفاء بنسبة عالية على مبلغ صغير أو على قياس ضعيف.",
          en: "Showing ROI with absolute net return and the share of spend measured by experiment prevents celebrating a high ratio on a small amount or a weak measurement.",
        },
      },
    ],
    pitfalls: [
      {
        ar: "استخدام الإيراد المنسوب بدل الربح الإضافي. الإيراد ليس ربحًا، والمنسوب ليس بالضرورة إضافيًا؛ النتيجة ROI مضخّم قد يبرر حملات خاسرة.",
        en: "Using attributed revenue instead of incremental profit. Revenue is not profit and attributed is not necessarily incremental; the result is an inflated ROI that can justify loss-making campaigns.",
      },
      {
        ar: "الخلط بين الإسناد والأثر السببي. نموذج الإسناد يوزع مبيعات حدثت على نقاط التماس، لكنه لا يجيب هل كانت ستحدث بدون الإعلان. حملات إعادة الاستهداف والبحث باسم العلامة معرضة خصوصًا لهذا التضخيم.",
        en: "Confusing attribution with causal impact. An attribution model distributes sales that happened across touchpoints, but does not answer whether they would have happened without the ad. Retargeting and branded search campaigns are especially prone to this inflation.",
      },
      {
        ar: "طرح الاستثمار مرتين. إذا كان رقم الربح المستخدم صافيًا بعد تكلفة التسويق مسبقًا ثم طُرح الاستثمار مجددًا في الصيغة، فسينخفض ROI زورًا. حدد بوضوح أن البسط ربح قبل تكلفة التسويق.",
        en: "Subtracting the investment twice. If the profit figure is already net of marketing cost and the investment is subtracted again in the formula, ROI is falsely depressed. State clearly that the numerator is profit before marketing cost.",
      },
      {
        ar: "حساب ROI قبل انتهاء نافذة الأثر. الإنفاق يُسجل فورًا والربح يتأخر، فتبدو الحملات الجديدة خاسرة والقديمة رابحة.",
        en: "Computing ROI before the effect window closes. Spend is recorded immediately and profit lags, so new campaigns look like losses and old ones look profitable.",
      },
      {
        ar: "جمع نسب ROI أو حساب متوسطها عبر الحملات. الإجمالي الصحيح هو (مجموع الربح الإضافي − مجموع الاستثمار) ÷ مجموع الاستثمار.",
        en: "Summing or averaging ROI percentages across campaigns. The correct total is (total incremental profit − total investment) ÷ total investment.",
      },
    ],
    variants: [
      {
        label: { ar: "ROI على الإيراد (غير موصى به)", en: "Revenue-based ROI (not recommended)" },
        formula: "(Attributed Revenue - Marketing Investment) / Marketing Investment x 100",
        difference: {
          ar: "يستخدم الإيراد المنسوب بدل الربح الإضافي، فيتجاهل تكلفة البضاعة ويفترض أن كل مبيعة منسوبة سببها التسويق. أسهل حسابًا لكنه يضخم العائد بشدة ويجب تسميته صراحة إن استُخدم.",
          en: "Uses attributed revenue instead of incremental profit, ignoring cost of goods and assuming every attributed sale was caused by marketing. Easier to compute but heavily inflates the return and must be named explicitly if used.",
        },
      },
      {
        label: { ar: "نسبة العائد الإجمالي (بدون طرح)", en: "Gross return ratio (no subtraction)" },
        formula: "Incremental Profit / Marketing Investment",
        difference: {
          ar: "لا يطرح الاستثمار من البسط، فيُقرأ 2.0x بدل 100%. نقطة التعادل هنا 1.0x لا 0%، والخلط بين الصيغتين في نفس التقرير خطأ شائع.",
          en: "Does not subtract the investment from the numerator, so it reads 2.0x instead of 100%. Break-even here is 1.0x, not 0%, and mixing the two forms in one report is a common error.",
        },
      },
      {
        label: { ar: "ROI الحدي", en: "Marginal ROI" },
        formula: "(Change in Incremental Profit - Change in Investment) / Change in Investment x 100",
        difference: {
          ar: "يقيس عائد الوحدة الإضافية من الإنفاق لا المتوسط، ويُستخرج عادة من نمذجة المزيج التسويقي أو تجارب مستويات الإنفاق. هو المؤشر الصحيح لقرار زيادة الميزانية أو خفضها.",
          en: "Measures the return on the next unit of spend rather than the average, usually derived from marketing mix modelling or spend-level experiments. It is the right metric for a decision to raise or cut budget.",
        },
      },
    ],
    claims: [
      {
        kind: "mathematical",
        text: {
          ar: "ROI يساوي 0% عندما يساوي الربح الإضافي الاستثمار تمامًا، ويصبح سالبًا عندما يقل الربح الإضافي عن الاستثمار. كما أن نسبة العائد الإجمالي = ROI + 1 (مثلًا 100% تقابل 2.0x).",
          en: "ROI is 0% when incremental profit exactly equals the investment and negative when incremental profit is below it. Also, the gross return ratio = ROI + 1 (for example 100% corresponds to 2.0x).",
        },
      },
      {
        kind: "convention",
        text: {
          ar: "التعبير عن العائد التسويقي كصافي عائد مقسوم على الاستثمار، بنسبة مئوية، يتبع الصيغة العامة للعائد على الاستثمار المستخدمة في التحليل المالي.",
          en: "Expressing marketing return as net return divided by investment, as a percentage, follows the general return-on-investment form used in financial analysis.",
        },
      },
      {
        kind: "company-rule",
        text: {
          ar: "طريقة تقدير الربح الإضافي، ومستوى الربح المستخدم (إجمالي أو مساهمة)، وبنود الاستثمار، ونافذة قياس الأثر — كلها قرارات داخلية يجب الاتفاق عليها مع الإدارة المالية وتوثيقها بجوار الرقم.",
          en: "How incremental profit is estimated, which profit level is used (gross or contribution), the investment items, and the effect measurement window are internal decisions to agree with finance and document next to the figure.",
        },
      },
      {
        kind: "illustrative",
        text: {
          ar: "أرقام المثال (40,000 ربح إضافي و20,000 استثمار) وأرقام التمرين من تأليفنا للتعليم فقط، وليست معيارًا لما يُعد عائدًا تسويقيًا جيدًا.",
          en: "The example figures (40,000 incremental profit and 20,000 investment) and the exercise figures are invented for teaching and are not a benchmark for a good marketing return.",
        },
      },
    ],
    related: ["roas", "cac", "ltv", "gross-profit-margin"],
    exercise: {
      prompt: {
        ar: "أنفقت شركة 50,000 على حملة. نسب نموذج الإسناد للحملة إيرادًا قدره 300,000. لكن تجربة بمجموعة ضابطة أظهرت أن الإيراد الإضافي الحقيقي 150,000 فقط، والهامش الإجمالي للمنتجات 30%. احسب ROI على الإيراد المنسوب، ثم ROI على الربح الإضافي. ماذا تستنتج؟",
        en: "A company spent 50,000 on a campaign. The attribution model credited it with 300,000 in revenue. But a holdout experiment showed the true incremental revenue was only 150,000, and the gross margin on the products is 30%. Compute revenue-based ROI on attributed revenue, then ROI on incremental profit. What do you conclude?",
      },
      hint: {
        ar: "الربح الإضافي = الإيراد الإضافي × الهامش الإجمالي. ثم طبق نفس الصيغة على الرقمين.",
        en: "Incremental profit = incremental revenue × gross margin. Then apply the same formula to both figures.",
      },
      answer: {
        ar: "ROI على الإيراد المنسوب = (300,000 − 50,000) ÷ 50,000 = 500%. الربح الإضافي = 150,000 × 30% = 45,000. ROI التسويقي = (45,000 − 50,000) ÷ 50,000 = −10%. الحملة التي تبدو رابحة بقوة وفق الإسناد تخسر فعليًا 5,000: نصف الإيراد المنسوب كان سيتحقق بدونها، والإيراد ليس ربحًا. القرار الصحيح هو مراجعة الحملة أو إيقافها، لا توسيعها.",
        en: "Revenue-based ROI on attributed revenue = (300,000 − 50,000) ÷ 50,000 = 500%. Incremental profit = 150,000 × 30% = 45,000. Marketing ROI = (45,000 − 50,000) ÷ 50,000 = −10%. The campaign that looks strongly profitable under attribution actually loses 5,000: half the attributed revenue would have happened without it, and revenue is not profit. The right decision is to review or stop the campaign, not scale it.",
      },
    },
    references: [
      {
        title: "DIVIDE function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/divide-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "قسمة آمنة للعائد على الاستثمار عندما يكون الاستثمار صفرًا أو فارغًا.",
          en: "Safe division for ROI when investment is zero or blank.",
        },
      },
      {
        title: "ISBLANK function (DAX)",
        publisher: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dax/isblank-function-dax",
        accessed: "2026-09-30",
        note: {
          ar: "يمنع عرض ROI بقيمة −100% لحملات لم تُقس نتيجتها بعد.",
          en: "Prevents showing a −100% ROI for campaigns whose result has not been measured yet.",
        },
      },
    ],
  },
];
