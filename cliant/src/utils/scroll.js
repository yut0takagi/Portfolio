// Easing: easeInOutCubic for a gentle, "nurutto" feel
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export const smoothScrollToY = (targetY, duration = 900) => {
  const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const startY = window.scrollY || window.pageYOffset;
  const delta = targetY - startY;
  if (Math.abs(delta) < 1 || reduce) {
    window.scrollTo(0, targetY);
    return;
  }
  const start = performance.now();
  const animate = (now) => {
    const elapsed = now - start;
    const t = Math.min(1, elapsed / duration);
    const eased = easeInOutCubic(t);
    window.scrollTo(0, startY + delta * eased);
    if (t < 1) requestAnimationFrame(animate);
  };
  requestAnimationFrame(animate);
};

export const smoothScrollTo = (id, { duration = 900 } = {}) => {
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const headerOffset = (() => {
    try {
      const styles = getComputedStyle(el);
      const v = styles.scrollMarginTop || '0';
      const n = parseInt(v, 10);
      return Number.isNaN(n) ? 0 : n;
    } catch {
      return 0;
    }
  })();
  const targetY = rect.top + (window.scrollY || window.pageYOffset) - headerOffset;
  smoothScrollToY(targetY, duration);
};
