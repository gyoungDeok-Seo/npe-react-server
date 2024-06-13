import Router from "./Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from 'react-redux';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createContext } from "react";
import { createGlobalStyle } from "styled-components";
import store from "./redux/store";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;  
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
button {
    border: 0;
    background: none;
}
button, select {
    text-transform: none;
}
button, input {
    overflow: visible;
}
button, input, optgroup, select, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled),
button:not(:disabled) {
    cursor: pointer;
}
[type=button], [type=reset], [type=submit], button {
    -webkit-appearance: button;
}
input[type=search]::-webkit-search-cancel-button {
    -webkit-appearance: none
}
button {
    border: 0;
    background: none;
}
button, select {
    text-transform: none;
}
button, input {
    overflow: visible;
}
button, input, optgroup, select, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
html{
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
    margin: 0;
    font-family: 'Pretendard',-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #0f172a;
    text-align: left;

}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
[role=button] {
    cursor: pointer;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: content-box;
    height: 0;
    overflow: visible;
}
a {
  text-decoration: none;
  color:inherit;
}
b {
    font-weight: bolder;
}
.h3, h3 {
    font-size: 1.5rem;
}
.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    margin-bottom: .5rem;
    font-weight: 700;
    line-height: 1.5;
}
h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: .5rem;
}
* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}
svg {
    overflow: hidden;
}
div{
  unicode-bidi: isolate;
}
img, svg {
    vertical-align: middle;
}
:host, :root {
  --font-headline-large-bold: 700 30px/2 Pretendard;
  --font-headline-medium-bold: 700 24px/2 Pretendard;
  --font-headline-small-bold: 700 20px/1.5 Pretendard;
  --font-title-large-bold: 700 30px/1.5 Pretendard;
  --font-title-medium-bold: 700 24px/1.5 Pretendard;
  --font-title-small-bold: 700 20px/1.5 Pretendard;
  --font-title-xsmall-bold: 700 18px/1.5 Pretendard;
  --border-color-button-completed-color: #64748b;
  --border-color-button-disabled-color: #cbd5e1;
  --border-color-button-secondary-enabled-color: #0f766e;
  --border-color-button-secondary-hover-color: #115e59;
  --border-color-button-primary-enabled-color: #334155;
  --border-color-button-primary-hover-color: #1e293b;
  --border-color-onpost-color: #cbd5e1;
  --border-color-onwhite-color: #e2e8f0;    
  --border-color-button-completed: solid 1px #64748b;
  --border-color-button-disabled: solid 1px #cbd5e1;
  --border-color-button-secondary-enabled: solid 1px #0f766e;
  --border-color-button-secondary-hover: solid 1px #115e59;
  --border-color-button-primary-enabled: solid 1px #334155;
  --border-color-button-primary-hover: solid 1px #1e293b;
  --border-color-onpost: solid 1px #cbd5e1;
  --border-color-onwhite: solid 1px #e2e8f0;
  --color-text-success: #16a34a;
  --color-text-error: #b91c1c;
  --color-text-warning: #a16207;
  --color-text-brand: #ed6653;
  --color-text-bold: #0f172a;
  --color-text-subtle: #334155;
  --color-text-subtler: #64748b;
  --color-text-subtlest: #94a3b8;
  --color-text-placeholder: #94a3b8;
  --color-text-inverse: #fff;
  --color-text-button-primary: #334155;
  --color-text-button-completed: #64748b;
  --color-text-button-disabled: #94a3b8;
  --color-text-button-destructive: #ef4444;
  --color-background-button-destructive-enabled: #ef4444;
  --color-background-button-destructive-hover: #dc2626;
  --color-background-button-disabled: #f1f5f9;
  --color-background-button-completed: #e2e8f0;
  --color-background-button-hover: #e2e8f0;
  --color-background-button-primary-tint-enabled: #f1f5f9;
  --color-background-button-primary-tint-hover: #e2e8f0;
  --color-background-button-primary-bold-hover: #1e293b;
  --color-background-button-primary-bold-enabled: #334155;
  --color-background-selected: #f1f5f9;
  --color-background-hover: #f8fafc;
  --color-background-badge-unread: #ef4444;
  --color-background-tooltip: #0f172a;
  --color-background-error: #b91c1c;
  --color-white: #fff;
  --color-black: #000;
  --color-coral-50: #fdf4f3;
  --color-coral-100: #ffedee;
  --color-coral-200: #fdd1cb;
  --color-coral-300: #f7b4aa;
  --color-coral-400: #f39b8e;
  --color-coral-500: #ef7b6a;
  --color-coral-600: #ed6653;
  --color-coral-700: #e1432e;
  --color-coral-800: #be1e08;
  --color-coral-900: #7a2d22;
  --color-teal-50: #f0fdfa;
  --color-teal-100: #d5f4f2;
  --color-teal-200: #99f6e4;
  --color-teal-300: #5eead4;
  --color-teal-400: #2dd4bf;
  --color-teal-500: #14b8a6;
  --color-teal-600: #0d9488;
  --color-teal-700: #0f766e;
  --color-teal-800: #115e59;
  --color-teal-900: #134e4a;
  --color-red-50: #fef2f2;
  --color-red-100: #fee2e2;
  --color-red-200: #fecaca;
  --color-red-300: #fca5a5;
  --color-red-400: #f87171;
  --color-red-500: #ef4444;
  --color-red-600: #dc2626;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;
  --color-red-900: #7f1d1d;
  --color-yellow-50: #fefce8;
  --color-yellow-100: #fef9c3;
  --color-yellow-200: #fef08a;
  --color-yellow-300: #fde047;
  --color-yellow-400: #facc15;
  --color-yellow-500: #eab308;
  --color-yellow-600: #ca8a04;
  --color-yellow-700: #a16207;
  --color-yellow-800: #854d0e;
  --color-yellow-900: #713f12;
  --color-blue-50: #eff6ff;
  --color-blue-100: #dbeafe;
  --color-blue-200: #bfdbfe;
  --color-blue-300: #93c5fd;
  --color-blue-400: #60a5fa;
  --color-blue-500: #3b82f6;
  --color-blue-600: #2563eb;
  --color-blue-700: #1d4ed8;
  --color-blue-800: #1e40af;
  --color-blue-900: #1e3a8a;
  --color-indigo-50: #eef2ff;
  --color-indigo-100: #e0e7ff;
  --color-indigo-200: #c7d2fe;
  --color-indigo-300: #a5b4fc;
  --color-indigo-400: #818cf8;
  --color-indigo-500: #6366f1;
  --color-indigo-600: #4f46e5;
  --color-indigo-700: #4338ca;
  --color-indigo-800: #3730a3;
  --color-indigo-900: #312e81;
  --color-purple-50: #faf5ff;
  --color-purple-100: #f3e8ff;
  --color-purple-200: #e9d5ff;
  --color-purple-300: #d8b4fe;
  --color-purple-400: #c084fc;
  --color-purple-500: #a855f7;
  --color-purple-600: #9333ea;
  --color-purple-700: #7e22ce;
  --color-purple-800: #6b21a8;
  --color-purple-900: #581c87;
  --color-magenta-50: #fdf4ff;
  --color-magenta-100: #fae8ff;
  --color-magenta-200: #f5d0fe;
  --color-magenta-300: #f0abfc;
  --color-magenta-400: #e879f9;
  --color-magenta-500: #d946ef;
  --color-magenta-600: #c026d3;
  --color-magenta-700: #a21caf;
  --color-magenta-800: #86198f;
  --color-magenta-900: #701a75;
  --color-slate-50: #f8fafc;
  --color-slate-100: #f1f5f9;
  --color-slate-200: #e2e8f0;
  --color-slate-300: #cbd5e1;
  --color-slate-400: #94a3b8;
  --color-slate-500: #64748b;
  --color-slate-600: #475569;
  --color-slate-700: #334155;
  --color-slate-800: #1e293b;
  --color-slate-900: #0f172a;
  --color-green-50: #f0fdf4;
  --color-green-100: #dcfce7;
  --color-green-200: #bbf7d0;
  --color-green-300: #86efac;
  --color-green-400: #4ade80;
  --color-green-500: #22c55e;
  --color-green-600: #16a34a;
  --color-green-700: #15803d;
  --color-green-800: #166534;
  --color-green-900: #14532d;
  --blue: #007bff;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #dc3545;
  --orange: #fd7e14;
  --yellow: #ffc107;
  --green: #28a745;
  --teal: #0e6371;
  --cyan: #17a2b8;
  --gray: #94a3b8;
  --gray-dark: #475569;
  --primary: #ed6653;
  --secondary: #334155;
  --success: #28a745;
  --info: #0e6371;
  --warning: #ffc107;
  --danger: #dc3545;
  --light: #f1f5f9;
  --dark: #0f172a;
  --white: #fff;
  --black: #000;
  --slate-50: #f8fafc;
  --slate-100: #f1f5f9;
  --slate-200: #e2e8f0;
  --slate-300: #cbd5e1;
  --slate-400: #94a3b8;
  --slate-500: #64748b;
  --slate-600: #475569;
  --slate-700: #334155;
  --slate-800: #1e293b;
  --slate-900: #0f172a;
  --gray-100: #f8fafc;
  --gray-200: #e2e8f0;
  --gray-300: #cbd5e1;
  --gray-400: #cbd5e1;
  --gray-500: #94a3b8;
  --gray-600: #94a3b8;
  --gray-700: #64748b;
  --gray-800: #475569;
  --gray-900: #0f172a;
  --coral-50: #fdf4f3;
  --coral-100: #ffedee;
  --coral-200: #fdd1cb;
  --coral-300: #f7b4aa;
  --coral-400: #f39b8e;
  --coral-500: #ef7b6a;
  --coral-600: #ed6653;
  --coral-700: #e1432e;
  --coral-800: #be1e08;
  --coral-900: #7a2d22;
  --primary-100: #ffedee;
  --primary-200: #fdd1cb;
  --primary-300: #f7b4aa;
  --primary-400: #f39b8e;
  --teal-50: #f0fdfa;
  --teal-100: #d5f4f2;
  --teal-200: #99f6e4;
  --teal-300: #5eead4;
  --teal-400: #9fd8d4;
  --teal-500: #6dc5bf;
  --teal-600: #45ada6;
  --teal-700: #007871;
  --teal-800: #0e6371;
  --teal-900: #134e4a;
  --davy-gray: #1e293b;
  --medium: #cbd5e1;
  --red-50: #fef2f2;
  --red-100: #fee2e2;
  --red-200: #fecaca;
  --red-300: #fca5a5;
  --red-400: #f87171;
  --red-500: #ef4444;
  --red-600: #dc2626;
  --red-700: #b91c1c;
  --red-800: #991b1b;
  --red-900: #7f1d1d;
  --green-50: #f0fdf4;
  --green-100: #dcfce7;
  --green-200: #bbf7d0;
  --green-300: #86efac;
  --green-400: #4ade80;
  --green-500: #22c55e;
  --green-600: #16a34a;
  --green-700: #15803d;
  --green-800: #166534;
  --green-900: #14532d;
  --yellow-50: #fefce8;
  --yellow-100: #fef9c3;
  --yellow-200: #fef08a;
  --yellow-300: #fde047;
  --yellow-400: #facc15;
  --yellow-500: #eab308;
  --yellow-600: #ca8a04;
  --yellow-700: #a16207;
  --yellow-800: #854d0e;
  --yellow-900: #713f12;
  --blue-50: #eff6ff;
  --blue-100: #dbeafe;
  --blue-200: #bfdbfe;
  --blue-300: #93c5fd;
  --blue-400: #60a5fa;
  --blue-500: #3b82f6;
  --blue-600: #2563eb;
  --blue-700: #1d4ed8;
  --blue-800: #1e40af;
  --blue-900: #1e3a8a;
  --indigo-50: #eef2ff;
  --indigo-100: #e0e7ff;
  --indigo-200: #c7d2fe;
  --indigo-300: #a5b4fc;
  --indigo-400: #818cf8;
  --indigo-500: #6366f1;
  --indigo-600: #4f46e5;
  --indigo-700: #4338ca;
  --indigo-800: #3730a3;
  --indigo-900: #312e81;
  --purple-50: #faf5ff;
  --purple-100: #f3e8ff;
  --purple-200: #e9d5ff;
  --purple-300: #d8b4fe;
  --purple-400: #c084fc;
  --purple-500: #a855f7;
  --purple-600: #9333ea;
  --purple-700: #7e22ce;
  --purple-800: #6b21a8;
  --purple-900: #581c87;
  --magenta-50: #fdf4ff;
  --magenta-100: #fae8ff;
  --magenta-200: #f5d0fe;
  --magenta-300: #f0abfc;
  --magenta-400: #e879f9;
  --magenta-500: #d946ef;
  --magenta-600: #c026d3;
  --magenta-700: #a21caf;
  --magenta-800: #86198f;
  --magenta-900: #701a75;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
}
*, :after, :before {
  box-sizing: border-box;
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-gradient-from-position: ;
    --tw-gradient-via-position: ;
    --tw-gradient-to-position: ;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgba(59,130,246,.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia: ;
}
*, :after, :before {
    box-sizing: border-box;
}

`;
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <GlobalStyle />
        <Router />
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
