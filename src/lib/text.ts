/**
 * Text normalisation for search.
 *
 * Kept dependency-free so it can be unit tested directly.
 *
 * Arabic normalisation matters more here than it might look: without it,
 * "مؤشر" typed as "موشر", or any word carrying harakat, simply would not match.
 */

function normalizeArabic(input: string): string {
  return input
    .replace(/[ً-ٰٟ]/g, "") // harakat (diacritics)
    .replace(/ـ/g, "") // tatweel (kashida)
    .replace(/[آأإٱ]/g, "ا") // alef variants -> bare alef
    .replace(/ى/g, "ي") // alef maqsura -> ya
    .replace(/ة/g, "ه") // ta marbuta -> ha
    .replace(/[ؤئ]/g, "ء"); // hamza carriers -> bare hamza
}

export function normalize(input: string): string {
  return normalizeArabic(input.toLowerCase().trim()).replace(/\s+/g, " ");
}

/**
 * Relevance score for one candidate.
 *
 * Ranks by match position: an exact title beats a title prefix, which beats a
 * title substring, which beats a body match. `titleAlt` is the same entry's
 * title in the other language, so an Arabic-speaking user searching "OTIF"
 * still finds it.
 */
export function scoreMatch(
  query: string,
  title: string,
  titleAlt: string,
  haystack: string,
): number {
  if (!query) return 0;
  if (title === query || titleAlt === query) return 100;
  if (title.startsWith(query) || titleAlt.startsWith(query)) return 80;
  if (title.includes(query) || titleAlt.includes(query)) return 60;
  if (haystack.includes(query)) return 30;
  return 0;
}
