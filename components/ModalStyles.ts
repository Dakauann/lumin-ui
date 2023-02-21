export default function ModalStyles() {
  return {
    "@keyframes fadeIn": {
      "0%": {
        opacity: "0",
      },
      "100%": {
        opacity: "1",
      },
    },
    ".modal": {
      transition: "display 0.2s linear",
      zIndex: "999",
    },
    ".modal[open]": {
      animation: "fadeIn 0.2s linear",
    },
    ".modal-backdrop": {
      display: "flex",
      position: "fixed",
      left: "0",
      top: "0",
      right: "0",
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: "-1",
    },
    ".modal-container": {
      color: "var(--color-text-current)",
      backgroundColor: "var(--bg-base-current)",
      paddingInline: "1rem",
      display: "flex",
      flexDirection: "column",
      shadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
      width: "min-content",
      height: "max-content",
      borderRadius: "0.5rem",
      maxWidth: "100vw",
      maxHeight: "85%",
      minWidth: "330px",
      overflow: "auto",
    },
    ".modal-header": {
      gap: "0.5rem",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding: "0.5rem",
      borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    },
    ".modal-body": {
      display: "flex",
      padding: "0.5rem",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    ".modal-footer": {
      display: "flex",
      gap: "0.4rem",
      flexDirection: "row",
      justifyContent: "right",
      alignItems: "center",
      padding: "0.4rem",
      borderTop: "1px solid rgba(0, 0, 0, 0.1)",
      marginTop: "1rem",
    },
  };
}
