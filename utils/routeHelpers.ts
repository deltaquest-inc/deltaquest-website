/**
 * Route helper utilities for checking page types
 */

/**
 * Checks if the current path is a legal subpage (not the main legal page)
 * @param pathname - The current pathname
 * @returns true if it's a legal subpage (e.g., /legal/privacy-policy)
 */
export const isLegalSubpage = (pathname: string): boolean => {
  return pathname.startsWith('/legal') && pathname !== '/legal'
}

/**
 * Checks if the current path is a laser tag page
 * @param pathname - The current pathname
 * @returns true if it's a laser tag page
 */
export const isLaserTagPage = (pathname: string): boolean => {
  return pathname.startsWith('/laser-tag')
} 