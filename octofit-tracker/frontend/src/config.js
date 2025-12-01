// Config helper to build the API base URL from the Codespace name
const codespace = process.env.REACT_APP_CODESPACE_NAME || '';
// Use https and port 8000 as required by the Codespace forwarded port
export const API_BASE = codespace
  ? `https://${codespace}-8000.app.github.dev/api`
  : `http://localhost:8000/api`;

console.log('[config] API_BASE =', API_BASE);

export default API_BASE;
