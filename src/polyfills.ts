/***************************************************************************************************
 * BROWSER POLYFILLS
 */

// Netlify Edge Functions fix for `globalThis is not defined`
(window as any).globalThis = window;
(window as any).process = { env: {} };
(window as any).Buffer = [];

/***************************************************************************************************
 * APPLICATION IMPORTS
 */
