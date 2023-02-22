"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DropdownBaseStyles = {
    display: "flex",
    flexDirection: "column",
};
function DropdownStyles() {
    return {
        ".dropdown": Object.assign(Object.assign({}, DropdownBaseStyles), { alignItems: "center", padding: "0.4rem 0.5rem", "&:hover": {
                ".dropdown-content": {
                    visibility: "visible",
                    opacity: "1",
                },
                background: "var(--bg-base-current-darker)",
                borderRadius: "0.25rem",
                cursor: "pointer",
            } }),
        ".dropdown-click": Object.assign(Object.assign({}, DropdownBaseStyles), { alignItems: "center", padding: "0.4rem 0.5rem", "&:focus-within": {
                ".dropdown-content": {
                    visibility: "visible",
                    opacity: "1",
                },
                background: "var(--bg-base-current-darker)",
                borderRadius: "0.25rem",
                cursor: "pointer",
            } }),
        ".dropdown-left": Object.assign(Object.assign({}, DropdownBaseStyles), { alignItems: "center", ".dropdown-content": {
                transform: "translateX(-40%)",
            }, padding: "0.4rem 0.5rem", "&:hover": {
                ".dropdown-content": {
                    visibility: "visible",
                    opacity: "1",
                },
                background: "var(--bg-base-current-darker)",
                borderRadius: "0.25rem",
                cursor: "pointer",
            } }),
        ".dropdown-click-left": Object.assign(Object.assign({}, DropdownBaseStyles), { alignItems: "center", ".dropdown-content": {
                transform: "translateX(-40%)",
            }, padding: "0.4rem 0.5rem", "&:focus-within": {
                ".dropdown-content": {
                    visibility: "visible",
                    opacity: "1",
                },
                background: "var(--bg-base-current)",
                borderRadius: "0.25rem",
                cursor: "pointer",
            } }),
        ".dropdown-right": Object.assign(Object.assign({}, DropdownBaseStyles), { alignItems: "center", ".dropdown-content": {
                transform: "translateX(40%)",
            }, padding: "0.4rem 0.5rem", "&:hover": {
                ".dropdown-content": {
                    visibility: "visible",
                    opacity: "1",
                },
                background: "var(--bg-base-current-darker)",
                borderRadius: "0.25rem",
                cursor: "pointer",
            } }),
        ".dropdown-click-right": Object.assign(Object.assign({}, DropdownBaseStyles), { alignItems: "center", ".dropdown-content": {
                transform: "translateX(40%)",
            }, padding: "0.4rem 0.5rem", "&:focus-within": {
                ".dropdown-content": {
                    visibility: "visible",
                    opacity: "1",
                },
                background: "var(--bg-base-current-darker)",
                borderRadius: "0.25rem",
                cursor: "pointer",
            } }),
        ".dropdown-content": {
            transition: "all 0.2s ease-in-out",
            opacity: "0",
            visibility: "hidden",
            position: "absolute",
            backgroundColor: "var(--bg-base-current)",
            minWidth: "160px",
            maxWidth: "300px",
            boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
            zIndex: "20",
            padding: "4px",
            borderRadius: "4px",
            marginTop: "40px",
            "& a": {
                transition: "all 0.05s linear",
                borderRadius: "4px",
                padding: "10px 16px",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "8px",
                fontSize: "14px",
                "&:hover": {
                    backgroundColor: "var(--bg-base-current-darker)",
                    cursor: "pointer",
                },
                "&:active": {
                    backgroundColor: "var(--bg-base-current-lighter)",
                    transform: "scale(0.95)",
                },
            },
        },
    };
}
exports.default = DropdownStyles;
