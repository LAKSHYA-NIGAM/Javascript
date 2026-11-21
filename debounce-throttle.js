/**
 * Debounce & Throttle Higher-Order Functions
 */

export function debounce(fn, waitMs = 100, immediate = false) {
  let timeoutId = null;

  return function debounced(...args) {
    const context = this;
    const callNow = immediate && !timeoutId;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (!immediate) {
        fn.apply(context, args);
      }
    }, waitMs);

    if (callNow) {
      fn.apply(context, args);
    }
  };
}

export function throttle(fn, limitMs = 100) {
  let inThrottle = false;
  let lastArgs = null;
  let lastContext = null;

  return function throttled(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
        if (lastArgs) {
          fn.apply(lastContext, lastArgs);
          lastArgs = null;
          lastContext = null;
        }
      }, limitMs);
    } else {
      lastArgs = args;
      lastContext = this;
    }
  };
}
