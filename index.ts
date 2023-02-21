import plugin from "tailwindcss/plugin";
import { default as ButtonStyles } from "./components/ButtonStyles";
import { default as CheckboxStyles } from "./components/CheckboxStyles";
import { default as DropdownStyles } from "./components/DropdownStyles";
import { default as InputStyles } from "./components/InputStyles";
import { default as LateralNavStyles } from "./components/LateralNavStyles";
import { default as RangeStyles } from "./components/RangeStyles";
import ModalStyles from "./components/ModalStyles";

export default plugin(function ({ addComponents, theme, addBase }) {
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
      "--color-secondary-even-lighter":
        "hsl(var(--color-secondary-values), 15%)",

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

  const components = {
    ...ButtonStyles(),
    ...CheckboxStyles(),
    ...InputStyles(),
    ...ModalStyles(),
    ...DropdownStyles(),
    ...RangeStyles(theme("colors")),
    ...LateralNavStyles(),

    ".table": {
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
    },

    ".bg-pos-rotate": {
      "@keyframes bg-pos-rotate-anim": {
        "0%": {
          backgroundPosition: "0 0",
        },
        "100%": {
          backgroundPosition: "100% 100%",
        },
      },
      animation: "bg-pos-rotate-anim 3s ease-in-out infinite",
    },

    ".spinner": {
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
    },
    ".divider": {
      height: "1px",
      width: "100%",
      background: "var(--color-secondary)",
      opacity: "0.1",
    },
  };

  addComponents(components);
});
