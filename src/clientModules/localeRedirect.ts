import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const LOCALE_REDIRECT_KEY = 'docusaurus.locale.hasAutoRedirected';

// Track if this is the initial page load (not a client-side navigation)
let isInitialLoad = true;

export function onRouteDidUpdate({location}: {location: Location}): void {
  // Only run on client side
  if (!ExecutionEnvironment.canUseDOM) {
    return;
  }

  // Only run on initial page load, not on client-side navigations
  if (!isInitialLoad) {
    return;
  }

  // Check if we've already done an auto-redirect before (stored in localStorage)
  const hasAutoRedirected = localStorage.getItem(LOCALE_REDIRECT_KEY);
  if (hasAutoRedirected) {
    // Mark that initial load is done
    isInitialLoad = false;
    return;
  }

  // Mark initial load as done and set redirect flag
  isInitialLoad = false;
  localStorage.setItem(LOCALE_REDIRECT_KEY, 'true');

  // Get browser language
  const browserLang = navigator.language || (navigator as any).userLanguage;
  const isHungarian = browserLang.toLowerCase().startsWith('hu');

  // If Hungarian browser or already on English version, don't redirect
  if (isHungarian) {
    return;
  }

  const isOnEnglishVersion = location.pathname.startsWith('/en/') || location.pathname === '/en';
  if (isOnEnglishVersion) {
    return;
  }

  // Non-Hungarian browser on Hungarian page - redirect to English
  const newPath = '/en' + location.pathname + location.search + location.hash;
  window.location.replace(newPath);
}
