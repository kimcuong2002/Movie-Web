export function getImage(slug?: string) {
  if (!slug) return '';

  return import.meta.env.VITE_API_IMAGE + slug;
}
