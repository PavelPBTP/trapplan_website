/** Standard staggered reveal delay: index * 55ms capped at 330ms (matches the design). */
export function stagger(index: number): number {
  return Math.min(index * 55, 330);
}
