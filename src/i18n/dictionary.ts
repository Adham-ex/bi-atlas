import type { Locale } from "@/content/types";

/**
 * UI chrome strings.
 *
 * Domain/KPI content is bilingual inside the content modules themselves; this
 * dictionary covers only navigation, labels, and interface copy.
 */
export const dictionary = {
  brand: { ar: "BI Atlas", en: "BI Atlas" },
  tagline: {
    ar: "افهم البزنس، حلّل صح، وابني تقارير أذكى.",
    en: "Understand the business. Build better BI.",
  },
  taglineAlt: {
    ar: "Understand the business. Build better BI.",
    en: "افهم البزنس، حلّل صح، وابني تقارير أذكى.",
  },

  nav: {
    domains: { ar: "مجالات الأعمال", en: "Domains" },
    kpis: { ar: "موسوعة المؤشرات", en: "KPI Library" },
    academy: { ar: "أكاديمية التصور", en: "Visualization Academy" },
    practice: { ar: "معمل التمارين", en: "Practice Lab" },
    workspace: { ar: "مساحتي", en: "My Workspace" },
    search: { ar: "بحث", en: "Search" },
    menu: { ar: "القائمة", en: "Menu" },
    close: { ar: "إغلاق", en: "Close" },
  },

  actions: {
    explore: { ar: "استكشف مجالات الأعمال", en: "Explore business domains" },
    openDomain: { ar: "افتح المجال", en: "Open domain" },
    openKpi: { ar: "افتح المؤشر", en: "Open metric" },
    viewAll: { ar: "عرض الكل", en: "View all" },
    startChallenge: { ar: "ابدأ التحدي", en: "Start challenge" },
    submit: { ar: "تحقق من الإجابة", en: "Check answer" },
    reset: { ar: "إعادة المحاولة", en: "Try again" },
    revealAnswer: { ar: "اعرض الحل", en: "Reveal solution" },
    copy: { ar: "نسخ", en: "Copy" },
    copied: { ar: "تم النسخ", en: "Copied" },
    bookmark: { ar: "حفظ", en: "Save" },
    bookmarked: { ar: "محفوظ", en: "Saved" },
    saveNote: { ar: "احفظ الملاحظة", en: "Save note" },
    clear: { ar: "مسح", en: "Clear" },
    back: { ar: "رجوع", en: "Back" },
  },

  theme: {
    toggle: { ar: "تبديل المظهر", en: "Toggle theme" },
    dark: { ar: "داكن", en: "Dark" },
    light: { ar: "فاتح", en: "Light" },
  },
  language: {
    toggle: { ar: "تغيير اللغة", en: "Change language" },
    arabic: { ar: "العربية", en: "Arabic" },
    english: { ar: "English", en: "English" },
  },

  home: {
    eyebrow: { ar: "منصة تعلّم لمطوري Power BI", en: "A learning platform for Power BI developers" },
    heroTitle: {
      ar: "افهم البزنس قبل أن تبني التقرير",
      en: "Understand the business before you build the report",
    },
    heroBody: {
      ar: "دليل عملي يساعدك على فهم مجال عمل جديد، واكتشاف مؤشراته المهمة، ومعرفة كيف تُحسب فعلًا، وترجمة متطلبات العمل إلى تقارير تُتخذ بها قرارات.",
      en: "A practical guide to understanding an unfamiliar business domain, discovering the metrics that matter, learning how they are actually calculated, and turning business requirements into reports people decide with.",
    },
    searchPlaceholder: {
      ar: "ابحث عن مجال، مؤشر، مصطلح، أو نمط عرض…",
      en: "Search a domain, metric, business term, or visual pattern…",
    },
    searchHint: { ar: "اضغط", en: "Press" },
    domainsTitle: { ar: "مجالات الأعمال", en: "Business domains" },
    domainsBody: {
      ar: "اثنا عشر مجالًا، كل منها بمقدمة عن العمليات وأصحاب المصلحة والأنظمة المصدرية والمؤشرات.",
      en: "Twelve domains, each with its processes, stakeholders, source systems, and metrics.",
    },
    kpisTitle: { ar: "مؤشرات تستحق الفهم", en: "Metrics worth understanding" },
    kpisBody: {
      ar: "مؤشرات يُساء فهمها كثيرًا، مشروحة بالصيغة والمثال والـ DAX والأخطاء الشائعة.",
      en: "Commonly misread metrics, explained with formula, worked example, DAX, and the mistakes people make.",
    },
    challengeTitle: { ar: "تحدي مختار", en: "Featured challenge" },
    challengeBody: {
      ar: "تمارين قصيرة مبنية على مواقف حقيقية، تُصحَّح محليًا وفورًا.",
      en: "Short exercises built on real situations, graded locally and instantly.",
    },
    academyTitle: { ar: "أنماط العرض والمصفوفات", en: "Visual & matrix patterns" },
    academyBody: {
      ar: "متى تستخدم كل مرئي، ومتى لا تستخدمه، وما الأخطاء التي تجعله يكذب.",
      en: "When to use each visual, when not to, and the mistakes that make it lie.",
    },
    pathsTitle: { ar: "مسارات تعلّم", en: "Learning paths" },
    pathsBody: {
      ar: "تسلسل مرتب يأخذك من مفهوم إلى تطبيق بدل التنقل العشوائي.",
      en: "An ordered sequence taking you from concept to application instead of browsing at random.",
    },
    recentTitle: { ar: "شوهد مؤخرًا", en: "Recently viewed" },
    progressTitle: { ar: "تقدّمك", en: "Your progress" },
    progressEmpty: {
      ar: "لم تبدأ بعد. افتح أي مجال أو مؤشر وسيظهر تقدّمك هنا.",
      en: "Nothing yet. Open any domain or metric and your progress will appear here.",
    },
    localOnly: {
      ar: "يُحفظ تقدّمك في هذا المتصفح فقط، بلا حساب وبلا خادم.",
      en: "Progress is stored in this browser only — no account, no server.",
    },
  },

  labels: {
    domain: { ar: "المجال", en: "Domain" },
    domains: { ar: "المجالات", en: "Domains" },
    category: { ar: "التصنيف", en: "Category" },
    difficulty: { ar: "المستوى", en: "Level" },
    beginner: { ar: "مبتدئ", en: "Beginner" },
    intermediate: { ar: "متوسط", en: "Intermediate" },
    advanced: { ar: "متقدم", en: "Advanced" },
    minutes: { ar: "دقيقة", en: "min" },
    kpiCount: { ar: "مؤشر", en: "metrics" },
    patternCount: { ar: "نمط عرض", en: "patterns" },
    challengeCount: { ar: "تمرين", en: "exercises" },
    points: { ar: "نقطة", en: "points" },
    formula: { ar: "الصيغة", en: "Formula" },
    unit: { ar: "الوحدة", en: "Unit" },
    aggregation: { ar: "سلوك التجميع", en: "Aggregation" },
    numerator: { ar: "البسط", en: "Numerator" },
    denominator: { ar: "المقام", en: "Denominator" },
    timeGrain: { ar: "الفترة والحبيبية الزمنية", en: "Period & time grain" },
    filters: { ar: "التصفية", en: "Filters" },
    all: { ar: "الكل", en: "All" },
    results: { ar: "نتيجة", en: "results" },
    relatedDomains: { ar: "مجالات ذات صلة", en: "Related domains" },
    relatedKpis: { ar: "مؤشرات ذات صلة", en: "Related metrics" },
    illustrative: { ar: "بيانات توضيحية", en: "Illustrative data" },
  },

  kpi: {
    definition: { ar: "التعريف", en: "Definition" },
    whyItMatters: { ar: "لماذا يهم؟", en: "Why it matters" },
    interpretation: { ar: "القراءة الواقعية", en: "Reading it in practice" },
    example: { ar: "مثال محسوب", en: "Worked example" },
    direction: { ar: "الارتفاع والانخفاض", en: "Rising and falling" },
    rising: { ar: "عند الارتفاع", en: "When it rises" },
    falling: { ar: "عند الانخفاض", en: "When it falls" },
    caveat: { ar: "تنبيه مهم", en: "Important caveat" },
    code: { ar: "التنفيذ", en: "Implementation" },
    assumptions: { ar: "افتراضات النموذج", en: "Model assumptions" },
    requires: { ar: "يعتمد على", en: "Depends on" },
    model: { ar: "متطلبات النموذج", en: "Model requirements" },
    grain: { ar: "الحبيبية", en: "Grain" },
    columns: { ar: "الأعمدة", en: "Columns" },
    role: { ar: "الدور", en: "Role" },
    visuals: { ar: "العرض المقترح", en: "Recommended visuals" },
    pitfalls: { ar: "أخطاء شائعة", en: "Common mistakes" },
    variants: { ar: "اختلافات التعريف", en: "Definition variations" },
    claims: { ar: "مصدر كل ادعاء", en: "Claim provenance" },
    exercise: { ar: "تمرين", en: "Exercise" },
    hint: { ar: "تلميح", en: "Hint" },
    references: { ar: "المراجع", en: "References" },
    notes: { ar: "ملاحظاتي", en: "My notes" },
    notesPlaceholder: {
      ar: "اكتب كيف يُعرَّف هذا المؤشر في مؤسستك…",
      en: "Note how this metric is defined at your organization…",
    },
  },

  claimKind: {
    mathematical: { ar: "نتيجة رياضية", en: "Mathematical" },
    convention: { ar: "عرف صناعي", en: "Industry convention" },
    "company-rule": { ar: "قاعدة خاصة بالشركة", en: "Company-specific rule" },
    illustrative: { ar: "مثال توضيحي", en: "Illustrative" },
    published: { ar: "مصدر منشور", en: "Published source" },
  },

  aggregation: {
    additive: { ar: "تجميعي", en: "Additive" },
    "semi-additive": { ar: "شبه تجميعي", en: "Semi-additive" },
    "non-additive": { ar: "غير تجميعي", en: "Non-additive" },
    ratio: { ar: "نسبة", en: "Ratio" },
  },

  domain: {
    overview: { ar: "نظرة عامة", en: "Overview" },
    processes: { ar: "العمليات الرئيسية", en: "Key processes" },
    stakeholders: { ar: "أصحاب المصلحة", en: "Stakeholders" },
    sources: { ar: "الأنظمة المصدرية", en: "Source systems" },
    glossary: { ar: "المصطلحات", en: "Glossary" },
    questions: { ar: "أسئلة العمل", en: "Business questions" },
    kpis: { ar: "كتالوج المؤشرات", en: "KPI catalogue" },
    topKpis: { ar: "أهم 6 مؤشرات", en: "Top 6 KPIs" },
    topKpisBody: {
      ar: "مجموعة بداية عملية لهذا المجال، مرتبة حسب الأولوية. التعريفات تختلف بين المؤسسات، فاعتمد التعريف المتفق عليه قبل بناء تقرير إنتاجي.",
      en: "A practical starting set for this domain, in priority order. Definitions vary between organizations, so confirm the agreed definition before building a production report.",
    },
    moreKpis: { ar: "مؤشرات أخرى في هذا المجال", en: "More KPIs in this domain" },
    dashboards: { ar: "صفحات مقترحة", en: "Suggested dashboard pages" },
    patterns: { ar: "أنماط العرض", en: "Visual patterns" },
    scenarios: { ar: "سيناريوهات عملية", en: "Practical scenarios" },
    audience: { ar: "الجمهور", en: "Audience" },
    contents: { ar: "المحتوى", en: "Contents" },
    situation: { ar: "الموقف", en: "Situation" },
    ask: { ar: "المطلوب", en: "The ask" },
    approach: { ar: "كيف تتعامل معه", en: "How to approach it" },
    cares: { ar: "يهتم بـ", en: "Cares about" },
    entities: { ar: "الكيانات", en: "Entities" },
  },

  pattern: {
    question: { ar: "السؤال الذي يجيبه", en: "The question it answers" },
    useWhen: { ar: "استخدمه عندما", en: "Use it when" },
    avoidWhen: { ar: "تجنّبه عندما", en: "Avoid it when" },
    dataNeeds: { ar: "متطلبات البيانات", en: "Data requirements" },
    fields: { ar: "الحقول", en: "Field wells" },
    interactions: { ar: "التفاعلات المقترحة", en: "Recommended interactions" },
    mistakes: { ar: "أخطاء التصميم الشائعة", en: "Common design mistakes" },
    example: { ar: "مثال حي", en: "Live example" },
    family: { ar: "العائلة", en: "Family" },
  },

  practice: {
    scenario: { ar: "الموقف", en: "Scenario" },
    requirements: { ar: "المتطلبات", en: "Requirements" },
    task: { ar: "المطلوب", en: "Task" },
    yourAnswer: { ar: "إجابتك", en: "Your answer" },
    numericPlaceholder: { ar: "أدخل رقمًا", en: "Enter a number" },
    codePlaceholder: { ar: "اكتب الكود هنا…", en: "Write your code here…" },
    correct: { ar: "إجابة صحيحة", en: "Correct" },
    incorrect: { ar: "غير صحيح بعد", en: "Not right yet" },
    partial: { ar: "إجابة ناقصة", en: "Partially correct" },
    explanation: { ar: "الشرح", en: "Explanation" },
    mistakes: { ar: "أخطاء شائعة في هذا التمرين", en: "Common mistakes on this exercise" },
    learnMore: { ar: "مواد ذات صلة", en: "Related material" },
    selfCheck: {
      ar: "هذا التمرين يُقيَّم ذاتيًا: لا يوجد محرك DAX أو SQL في المتصفح. قارن إجابتك بالحل المرجعي وبمعايير التقييم.",
      en: "This exercise is self-assessed: there is no DAX or SQL engine in the browser. Compare your answer against the reference solution and the rubric.",
    },
    rubric: { ar: "معايير التقييم", en: "Rubric" },
    reference: { ar: "الحل المرجعي", en: "Reference solution" },
    markDone: { ar: "أتممت هذا التمرين", en: "Mark as completed" },
    completed: { ar: "مكتمل", en: "Completed" },
    kinds: {
      "business-understanding": { ar: "فهم العمل", en: "Business understanding" },
      "kpi-calculation": { ar: "حساب مؤشر", en: "KPI calculation" },
      dax: { ar: "تحدي DAX", en: "DAX challenge" },
      sql: { ar: "تحدي SQL", en: "SQL challenge" },
      "data-modeling": { ar: "نمذجة البيانات", en: "Data modeling" },
      "viz-selection": { ar: "اختيار المرئي", en: "Visual selection" },
      "dashboard-critique": { ar: "نقد لوحة", en: "Dashboard critique" },
      "case-study": { ar: "دراسة حالة", en: "Case study" },
    },
  },

  search: {
    title: { ar: "البحث", en: "Search" },
    placeholder: {
      ar: "ابحث عن مجال، مؤشر، اختصار، مصطلح، أو نمط…",
      en: "Search domains, metrics, acronyms, terms, or patterns…",
    },
    empty: { ar: "لا توجد نتائج مطابقة", en: "No matching results" },
    emptyHint: {
      ar: "جرّب اسم المؤشر بالإنجليزية أو اختصاره، مثل OTIF أو CAC.",
      en: "Try the English metric name or its acronym, such as OTIF or CAC.",
    },
    start: { ar: "اكتب للبحث", en: "Start typing to search" },
    startHint: {
      ar: "ابحث في المجالات والمؤشرات والمصطلحات وأنماط العرض والتمارين.",
      en: "Searches domains, metrics, glossary terms, visual patterns, and exercises.",
    },
    groups: {
      domain: { ar: "مجالات", en: "Domains" },
      kpi: { ar: "مؤشرات", en: "Metrics" },
      pattern: { ar: "أنماط عرض", en: "Patterns" },
      challenge: { ar: "تمارين", en: "Exercises" },
      term: { ar: "مصطلحات", en: "Glossary" },
    },
    navigate: { ar: "تنقّل", en: "Navigate" },
    select: { ar: "اختيار", en: "Select" },
    dismiss: { ar: "إغلاق", en: "Dismiss" },
  },

  workspace: {
    title: { ar: "مساحتي", en: "My Workspace" },
    body: {
      ar: "كل ما حفظته وكتبته وأتممته. البيانات محفوظة في هذا المتصفح فقط.",
      en: "Everything you saved, wrote, and completed. Stored in this browser only.",
    },
    saved: { ar: "المؤشرات المحفوظة", en: "Saved metrics" },
    notes: { ar: "الملاحظات", en: "Notes" },
    completed: { ar: "التمارين المكتملة", en: "Completed exercises" },
    recent: { ar: "شوهد مؤخرًا", en: "Recently viewed" },
    empty: { ar: "لا يوجد شيء هنا بعد.", en: "Nothing here yet." },
    clearAll: { ar: "امسح كل البيانات المحلية", en: "Clear all local data" },
    clearConfirm: {
      ar: "سيُمسح كل ما حفظته في هذا المتصفح ولا يمكن التراجع. هل تريد المتابعة؟",
      en: "Everything saved in this browser will be erased and cannot be undone. Continue?",
    },
  },

  empty: {
    noResults: { ar: "لا توجد نتائج", en: "No results" },
    noResultsHint: { ar: "جرّب تعديل البحث أو إزالة بعض الفلاتر.", en: "Try adjusting your search or removing some filters." },
    notFound: { ar: "الصفحة غير موجودة", en: "Page not found" },
    notFoundHint: {
      ar: "الرابط الذي فتحته لا يشير إلى محتوى موجود.",
      en: "The link you opened does not point to any existing content.",
    },
    backHome: { ar: "العودة إلى الرئيسية", en: "Back to home" },
  },

  footer: {
    about: {
      ar: "BI Atlas منصة تعليمية لمطوري Power BI. المحتوى تعليمي ولا يُغني عن سياسات مؤسستك ومعاييرها المحاسبية.",
      en: "BI Atlas is a learning platform for Power BI developers. The content is educational and does not replace your organization policies or accounting standards.",
    },
    sections: { ar: "الأقسام", en: "Sections" },
    note: { ar: "ملاحظة", en: "Note" },
    noData: {
      ar: "جميع الأرقام في الأمثلة توضيحية ما لم يُذكر مصدرها صراحة.",
      en: "All example figures are illustrative unless a source is explicitly named.",
    },
  },
} as const;

export type Dictionary = typeof dictionary;

/** Pick the active language out of a bilingual pair. */
export function t(pair: { ar: string; en: string }, locale: Locale): string {
  return pair[locale];
}
