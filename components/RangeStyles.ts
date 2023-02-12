export default function RangeStyles(primaryColors: any) {
  return {
    ".range::-webkit-slider-thumb": {
      "-webkit-appearance": "none",
      borderRadius: "50%",
      background: primaryColors.primary.DEFAULT,
      height: "1rem",
      width: "1rem",
      "&:hover": {
        cursor: "pointer",
        background: primaryColors.primary.lighter,
      },
      transition: "background 0.2s ease-in-out",
    },
    ".range-secondary::-webkit-slider-thumb": {
      "-webkit-appearance": "none",
      borderRadius: "50%",
      background: primaryColors.secondary.DEFAULT,
      height: "1rem",
      width: "1rem",
      "&:hover": {
        cursor: "pointer",
        background: primaryColors.secondary.lighter,
      },
      transition: "background 0.2s ease-in-out",
    },
    ".range-secondary": {
      "-webkit-appearance": "none",
      borderRadius: "0.25rem",
      background: primaryColors.gray[300],
      height: "0.5rem",
      "&:hover": {
        cursor: "pointer",
      },
    },
    ".range": {
      "-webkit-appearance": "none",
      borderRadius: "0.25rem",
      background: primaryColors.gray[300],
      height: "0.5rem",
      "&:hover": {
        cursor: "pointer",
      },
    },
  };
}
