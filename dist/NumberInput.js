"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var NumberInput = function (_a) {
    var _b = _a.mode, mode = _b === void 0 ? 'integer' : _b, value = _a.value, onChange = _a.onChange, style = _a.style, props = __rest(_a, ["mode", "value", "onChange", "style"]);
    var _c = (0, react_1.useState)(value !== undefined && value !== null ? String(value) : ''), text = _c[0], setText = _c[1];
    var handleChange = function (input) {
        // Choose the regex based on the input mode
        var regex = mode === 'integer'
            ? /^-?\d*$/ // Allows only integers (optional minus sign)
            : /^-?\d*(\.\d*)?$/; // Allows floats (one optional decimal point)
        if (regex.test(input)) {
            setText(input);
            // Parse the input into a number
            var parsed = mode === 'integer' ? parseInt(input, 10) : parseFloat(input);
            if (input === '' || isNaN(parsed)) {
                onChange && onChange(null);
            }
            else {
                onChange && onChange(parsed);
            }
        }
    };
    return (react_1.default.createElement(react_native_1.TextInput, __assign({ value: text, onChangeText: handleChange, keyboardType: "numeric", style: [styles.input, style] }, props)));
};
var styles = react_native_1.StyleSheet.create({
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 4,
    },
});
exports.default = NumberInput;
