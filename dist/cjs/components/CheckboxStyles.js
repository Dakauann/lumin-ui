"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CheckboxStyles() {
    return {
        ".checkbox": {
            padding: "0.5rem 0.3rem",
            backgroundColor: "transparent",
            borderRadius: "0.15rem",
            "padding-inline": "0.5rem",
            cursor: "pointer",
            ring: "none",
            "&:focus": {
                boxShadow: "none",
            },
            "&:checked": {
                backgroundColor: "var(--color-primary)",
                "&:hover": {
                    backgroundColor: "var(--color-primary)",
                },
                "&:focus": {
                    backgroundColor: "var(--color-primary)",
                },
            },
            "&:disabled": {
                cursor: "not-allowed",
                opacity: "0.5",
            },
            transition: "all 0.2s ease-in-out",
        },
        ".checkbox-secondary": {
            padding: "0.5rem 0.3rem",
            backgroundColor: "transparent",
            borderRadius: "0.15rem",
            "padding-inline": "0.5rem",
            cursor: "pointer",
            ring: "none",
            "&:focus": {
                boxShadow: "none",
            },
            "&:checked": {
                backgroundColor: "var(--color-secondary)",
                "&:hover": {
                    backgroundColor: "var(--color-secondary-darker)",
                },
                "&:focus": {
                    backgroundColor: "var(--color-secondary-lighter)",
                },
            },
            "&:disabled": {
                cursor: "not-allowed",
                opacity: "0.5",
            },
            transition: "all 0.2s ease-in-out",
        },
    };
}
exports.default = CheckboxStyles;
