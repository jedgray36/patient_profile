import { Box } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { useProfileStyles } from "./styles";
import PatientData from "../../components/PatientData";
import { useState } from "react";
import AppointmentsList from "../../components/AppointmentsList";

const ProfilePage = () => {
  const styles = useProfileStyles();
  const [collapsed, setCollapsed] = useState(true);
  return (
    <>
      <Box sx={styles.container}>
        <Topbar />
        <Box sx={styles.innerContainer}>
          <Box sx={styles.sidebarContainer}>
            <Sidebar
              collapsed={collapsed}
              onToggle={() => setCollapsed(!collapsed)}
            />
          </Box>
          <Box sx={styles.dataContainer}>
            <PatientData />
          </Box>
          <AppointmentsList />
        </Box>
      </Box>
    </>
  );
};

export default ProfilePage;
