export function getPagination(currentPage: number, totalPages: number) {
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages
  return { prevPage, nextPage }
}

export function getBasePath(pathname: string) {
  return pathname.replace(/^\//, '').replace(/\/page\/\d+$/, '')
}
