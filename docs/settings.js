const HUE = 0
const BODY_COLOR = "oklch(0.215 0 0)"
const WORK_COLOR = `oklch(0.220 0.002 ${HUE})` // workspace background
const SIDE_COLOR = `oklch(0.225 0.002 ${HUE})` // sidebar background
const CODE_COLOR = `oklch(0.248 0.002 ${HUE})` // code background
const HOVE_COLOR = `oklch(0.255 0.002 ${HUE})` // hover background
const CHAT_COLOR = `oklch(0.280 0.001 ${HUE})` // chat background
const LINE_COLOR = `oklch(0.300 0.002 ${HUE})` // code block title bottom border
const BORD_COLOR = `oklch(0.320 0.002 ${HUE})` // border
const RULE_COLOR = `oklch(0.340 0.001 ${HUE})` // hr rule

const cssRules = {
  hover: `
    [data-element-id="response-block"]:hover {
      background-color: ${HOVE_COLOR} !important;
    }
  `,
  code: `
    code, kbd, pre, samp {
      font-family: "JetBrains Mono", SFMono-Regular, ui-monospace, monospace !important;
      font-variant-ligatures: contextual;
      font-variant-numeric: slashed-zero;
      font-variation-settings: "opsz" 14;
    }
  `,
  cost: `
    [data-tooltip-id="global"] > span:nth-child(1) {
      margin-right: 8px;
      font-size: 0.8em !important;
      font-weight: 600 !important;
      color: #ffc533 !important;
    }
  `,
  body: `
    body {
      background-color: ${BODY_COLOR} !important;
      font-family: "Google Sans Flex", InterVariable, "Inter Variable", Roboto,
      ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
      font-variant-ligatures: common-ligatures;
      font-variation-settings: "wght" 475, "wdth" 95, "opsz" 16;
      letter-spacing: 0.01em;
      -webkit-font-smoothing: antialiased;

      --sidebar-menu-color: hsl(341.77215189873414deg 49% 17%);
      --sidebar-color: ${SIDE_COLOR} !important;
      --popup-color: ${WORK_COLOR} !important;
      --workspace-color: ${WORK_COLOR} !important;
      --main-dark-color: ${WORK_COLOR} !important;
      --main-dark-popup-color: ${WORK_COLOR} !important;
    }
  `,
  strong: `
    strong {
      font-weight: 500 !important;
    }
  `,
  prose: `
    .prose {
      --tw-prose-invert-body: #e3e3e3 !important;
    }
  `,
  pane1: `
    [data-element-id="workspace-bar"] {
      border-right: 1px solid ${BORD_COLOR} !important;
    }
  `,
  pane2: `
    [data-element-id="side-bar-background"] {
      border-right: 1px solid ${BORD_COLOR} !important;
    }
  `,
  pane2a: `
    [data-element-id="sidebar-beginning-part"] {
      border-right: 1px solid ${BORD_COLOR} !important;
    }
  `,
  pane2b: `
    [data-element-id="sidebar-middle-part"] {
    }
  `,
  pane3a: `
    [data-element-id="chat-space-beginning-part"] {
      background-color: ${WORK_COLOR} !important;
    }
  `,
  pane3b: `
    [data-element-id="chat-space-end-part"] > div[role="presentation"] {
      background-color: ${CHAT_COLOR} !important;
    }
  `,
  hr: `
    .dark hr {
      border-color: ${RULE_COLOR} !important;
    }
  `,
  popup: `
    [data-element-id="response-block"] > [data-headlessui-state] > div {
      background-color: ${BORD_COLOR} !important;
    }
  `,
  code_pre: `
    pre[style] {
      color: hsl(60, 10%, 90%) !important;
      background-color: ${CODE_COLOR} !important;
      font-size: 1em !important;
      border: 1px solid ${BORD_COLOR};
      border-top: none;
      border-radius: 0 0 6px 6px;
    }
  `,
  code_titlebar: `
    pre > .relative > div:first-child{
      background-color: ${HOVE_COLOR} !important;
      border: 1px solid ${BORD_COLOR};
      border-bottom-color: ${LINE_COLOR};
      border-radius: 6px 6px 0 0;
    }
  `,
  code_titlebutton: `
    pre > .relative > div:first-child > button {
      background-color: ${WORK_COLOR} !important;
    }
  `,
  code_identifier: `
    pre > .relative > div:first-child > span {
      color: #ab9df2 !important;
      font-weight: 600 !important;
    }
  `,
  code_keyword: `
    span[style="color: rgb(204, 153, 205);"] {
      color: #ff6189 !important;
    }
  `,
  code_function: `
    span[style="color: rgb(240, 141, 73);"] {
      color: #77dbe8 !important;
    }
  `,
  code_string: `
    span[style="color: rgb(126, 198, 153);"] {
      color: #ffd866 !important;
    }
  `,
  code_beforespan: `
    span[style="color: rgb(103, 205, 204);"] {
      color: #a9dc77 !important;
    }
  `,
}

const version = "20260212.003"
const style = /** @type {HTMLLinkElement} */ (document.querySelector("link[data-n-g]")).sheet

try {
  for (const rule of Object.values(cssRules)) {
    style.insertRule(rule, style.cssRules.length)
  }
} catch (error) {
  console.log(error)
}

console.log(version)
