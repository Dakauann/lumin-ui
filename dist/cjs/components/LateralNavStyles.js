"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function LateralNavStyles() {
    return {
        ".lateral-nav": {
            position: "fixed",
            top: "0",
            left: "0",
            height: "100%",
            backgroundColor: "var(--bg-base-current)",
            width: "50vw",
            maxWidth: "300px",
            zIndex: "30",
            transition: "width 0.5s ease-in-out",
            overflow: "hidden",
        },
        ".lateral-nav-disabled": {
            position: "fixed",
            top: "0",
            left: "0",
            height: "100%",
            backgroundColor: "var(--bg-base-current)",
            width: "0",
            maxWidth: "300px",
            zIndex: "30",
            transition: "width 0.5s ease-in-out",
            overflow: "hidden",
        },
        ".lateral-nav-header": {
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.5rem 1rem",
            borderBottom: "1px solid var(--bg-base-current-darker)",
            flex: "0 0 auto",
        },
        ".lateral-nav-body": {
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0.5rem 1rem",
            flex: "1 1 auto",
            gap: "0.5rem",
        },
    };
}
exports.default = LateralNavStyles;
