import { Box, Typography, useTheme } from "@mui/material";
const ErrorPage = () => {
  const theme = useTheme();
  return (
    <Box
      color={theme.palette.error.main}
      sx={{ width: "50%", margin: "auto", textAlign: "center" }}
    >
      <Typography variant="h4">Page Not Found</Typography>
    </Box>
  );
};

export default ErrorPage;
