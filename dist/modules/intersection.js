"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Intersection(from, to) {
    if (from === void 0) { from = ''; }
    if (to === void 0) { to = ''; }
    var normalizedFrom = from.toLowerCase().replace(/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g, '');
    var normalizedTo = to.toLowerCase().replace(/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g, '');
    return {
        normalizedFrom: normalizedFrom,
        normalizedTo: normalizedTo
    };
}
exports.default = Intersection;
