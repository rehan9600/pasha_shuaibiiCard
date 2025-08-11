/***************************************************************************************************
 * BROWSER POLYFILLS
 */

// Netlify Edge Functions fix for `global is not defined`
(window as any).global = window;
(window as any).process = { env: {} };
(window as any).Buffer = [];

/***************************************************************************************************
 * APPLICATION IMPORTS
 */
