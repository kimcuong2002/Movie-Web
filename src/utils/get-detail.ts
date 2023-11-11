export function getDetail(slug?: string) {
  if (!slug) return '';

  return import.meta.env.VITE_API_FILM_DETAIL + slug;
}
