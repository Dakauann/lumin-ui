"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
const ButtonStyles_1 = __importDefault(require("./components/ButtonStyles"));
const CheckboxStyles_1 = __importDefault(require("./components/CheckboxStyles"));
const DropdownStyles_1 = __importDefault(require("./components/DropdownStyles"));
const InputStyles_1 = __importDefault(require("./components/InputStyles"));
const LateralNavStyles_1 = __importDefault(require("./components/LateralNavStyles"));
const RangeStyles_1 = __importDefault(require("./components/RangeStyles"));
const ModalStyles_1 = __importDefault(require("./components/ModalStyles"));
exports.default = (0, plugin_1.default)(function ({ addComponents, theme, addBase }) {
    const base = {
        ":root": {
            "--color-primary-values": "0, 80%",
            "--color-secondary-values": "246, 0%",
            "--color-primary": "hsl(var(--color-primary-values), 50%)",
            "--color-primary-lighter": "hsl(var(--color-primary-values), 70%)",
            "--color-primary-darker": "hsl(var(--color-primary-values), 30%)",
            "--color-primary-even-darker": "hsl(var(--color-primary-values), 20%)",
            "--color-primary-even-lighter": "hsl(var(--color-primary-values), 80%)",
            "--color-secondary": "hsl(var(--color-secondary-values), 3%)",
            "--color-secondary-lighter": "hsl(var(--color-secondary-values), 10%)",
            "--color-secondary-darker": "hsl(var(--color-secondary-values), 1%)",
            "--color-secondary-even-darker": "hsl(var(--color-secondary-values), 1%)",
            "--color-secondary-even-lighter": "hsl(var(--color-secondary-values), 15%)",
            "--color-neutral": "rgba(169, 169, 169, 0.05)",
            "--color-neutral-lighter": "rgba(169, 169, 169, 0.15)",
            "--color-neutral-darker": "rgba(169, 169, 169, 0.25)",
            "--bg-base-values": "220, 15%",
            "--bg-base-light-values": "217, 0%",
            "--bg-base": "hsl(var(--bg-base-values), 10%)",
            "--bg-base-light": "hsl(var(--bg-base-light-values), 100%)",
            "--bg-base-current-values": "var(--bg-base-light-values)",
            "--bg-base-current": "hsl(var(--bg-base-current-values), 10%)",
            "--bg-base-current-darker": "hsl(var(--bg-base-current-values), 0%)",
            "--bg-base-current-lighter": "hsl(var(--bg-base-current-values), 15%)",
            "--color-text-current": "black",
            transition: "color 0.2s ease-in-out, background-color 0.2s ease-in-out",
        },
        "body.dark-mode": {
            background: "var(--bg-base)",
            color: "white",
            "--color-text-current": "white",
            "--bg-base-current-values": "var(--bg-base-values)",
            "--bg-base-current": "hsl(var(--bg-base-current-values), 10%)",
            "--bg-base-current-darker": "hsl(var(--bg-base-current-values), 0%)",
            "--bg-base-current-lighter": "hsl(var(--bg-base-current-values), 15%)",
        },
        "body:not(.dark-mode)": {
            background: "var(--bg-base-light)",
            color: "black",
            "--color-text-current": "black",
            "--bg-base-current-values": "var(--bg-base-light-values)",
            "--bg-base-current": "hsl(var(--bg-base-current-values), 100%)",
            "--bg-base-current-darker": "hsl(var(--bg-base-current-values), 90%)",
            "--bg-base-current-lighter": "hsl(var(--bg-base-current-values), 95%)",
        },
    };
    addBase(base);
    const components = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (0, ButtonStyles_1.default)()), (0, CheckboxStyles_1.default)()), (0, InputStyles_1.default)()), (0, ModalStyles_1.default)()), (0, DropdownStyles_1.default)()), (0, RangeStyles_1.default)(theme("colors"))), (0, LateralNavStyles_1.default)()), { ".table": {
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid var(--bg-base-current-darker)",
            borderRadius: "1rem",
            textAlign: "center",
            th: {
                background: "var(--bg-base-current-darker)",
            },
            "th:first-child": {
                borderTopLeftRadius: "1rem",
            },
            "th:last-child": {
                borderTopRightRadius: "1rem",
            },
            "th, td": {
                padding: "0.5rem",
                borderBottom: "1px solid var(--bg-base-current-darker)",
            },
            borderStyle: "hidden",
            boxShadow: "0 0 0 1px var(--bg-base-current-darker)",
        }, ".bg-pos-rotate": {
            "@keyframes bg-pos-rotate-anim": {
                "0%": {
                    backgroundPosition: "0 0",
                },
                "100%": {
                    backgroundPosition: "100% 100%",
                },
            },
            animation: "bg-pos-rotate-anim 3s ease-in-out infinite",
        }, ".spinner": {
            "@keyframes spin": {
                "0%": {
                    transform: "rotate(0deg)",
                },
                "100%": {
                    transform: "rotate(360deg)",
                },
            },
            width: "2rem",
            height: "2rem",
            border: "0.15rem solid var(--color-primary)",
            borderRadius: "50%",
            borderBottomColor: "transparent !important",
            borderLeftColor: "transparent !important",
            animation: "spin 1s linear infinite",
        }, ".divider": {
            height: "1px",
            width: "100%",
            background: "var(--color-secondary)",
            opacity: "0.1",
        } });
    addComponents(components);
});
