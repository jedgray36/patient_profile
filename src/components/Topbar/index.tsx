import { Box, IconButton, Typography } from "@mui/material";
import { useTopbarStyles } from "./styles";
import { AccountCircle } from "@mui/icons-material";

const Topbar = () => {
  const navigationStyles = useTopbarStyles();
  return (
    <>
      <div style={navigationStyles.container}>
        <Box sx={navigationStyles.spacingContainer}>
          <Typography sx={navigationStyles.logo}>Patient Log</Typography>
          <Box sx={navigationStyles.accounts}>
            <AccountCircle fontSize="large" />
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Topbar;
