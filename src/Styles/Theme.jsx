import { blue, grey, teal } from "@mui/material/colors";

const getDesignTokens = (mode) =>({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // Palette valuse for light mode
          neutral: {
            main: blue[700],
          },
          favColor: {
            main: grey[300],
          },
        }
      : {
          // Palette valuse for dark mode
          neutral: {
            main: teal[500],
          },
          favColor: {
            main: grey[800],
          },
        }),
  },
});

export default getDesignTokens;
