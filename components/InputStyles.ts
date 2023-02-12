export default function InputStyles() {
  return {
    ".input-flushed": {
      backgroundColor: "transparent",
      border: "none",
      borderBottom: "1px solid #cbd5e0",
      padding: "0.5rem 0.3rem",
      fontSize: "1rem",
      fontWeight: "500",
      maxWidth: "100%",
      lineHeight: "1.25rem",
      "&:focus": {
        outline: "none",
        borderBottom: "2px solid " + "var(--color-primary)",
      },
      "&::placeholder": {
        color: "#cbd5e0",
      },
      transition: "all 0.2s ease-in-out",
    },
    ".input-full": {
      backgroundColor: "transparent",
      border: "none",
      borderRadius: "0.3rem",
      padding: "0.5rem 0.3rem",
      fontSize: "1rem",
      fontWeight: "500",
      lineHeight: "1.25rem",
      color: "black",
      "&:focus": {
        outline: "none",
        backgroundColor: "#cbd5e0",
      },
      "&::placeholder": {
        color: "lightblack",
      },
      "&:hover": {
        backgroundColor: "#cbd5e0",
      },
      transition: "all 0.2s ease-in-out",
    },
    ".input-outline": {
      backgroundColor: "transparent",
      maxWidth: "100%",
      border: "1px solid hsl(4, 0%, 50%)",
      borderRadius: "0.3rem",
      padding: "0.7rem 0.3rem",
      fontSize: "1rem",
      fontWeight: "500",
      lineHeight: "1.25rem",
      "&:focus": {
        outline: "none",
        borderColor: "var(--color-primary)",
      },
      "&::placeholder": {
        color: "#cbd5e0",
      },
      transition: "all 0.2s ease-in-out",
    },
  };
}
