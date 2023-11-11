export function getFilms(page?: number) {
  if (!page) return 'https://ophim1.com/danh-sach/phim-moi-cap-nhat';

  return `https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${page}`;
}
