"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = void 0;
exports.getApiBaseUrl = getApiBaseUrl;
exports.PORT = Number(process.env.PORT || 8000);
function getApiBaseUrl() {
    const codespaceName = process.env.CODESPACE_NAME;
    if (codespaceName) {
        return `https://${codespaceName}-8000.app.github.dev`;
    }
    return `http://localhost:${exports.PORT}`;
}
