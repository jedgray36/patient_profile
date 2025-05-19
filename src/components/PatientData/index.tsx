import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import patientData from "../../sample_patient_data/patient.json";
import notifications from "../../sample_patient_data/alerts.json";
import payments from "../../sample_patient_data/charges.json";
import memos from "../../sample_patient_data/memos.json";
import { usePatientDataStyles } from "./styles";
import { ChevronRight, CreditCard, MoreVert } from "@mui/icons-material";
import PersonalInformation from "../personalInformation";
import AddressAndEmployment from "../AddressAndEmployment";
import VitalsAndMeasurements from "../VitalsAndMeasurements";
import NotificationDrawer from "../NotificationsDrawer";
import { useState } from "react";
import PatientPayments from "../PatientPayments";
import MemoPanel from "../MemoPanel";
import { useProfileContext } from "../../context/profleContext";
import PatientOtherInfo from "../PatientOtherInfo";

const PatientData = () => {
  const styles = usePatientDataStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [memo, setMemo] = useState(false);
  const menuOpen = Boolean(anchorEl);
  const {
    setEditMode,
    setCreateDoctorsNote,
    setIsMedicationsModal,
    setOpenNotesModal,
  } = useProfileContext();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setEditMode(false);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCreateDoctorNote = () => {
    setIsMedicationsModal(false);
    setCreateDoctorsNote(true);
    setEditMode(true);
    setOpenNotesModal(true);
    handleMenuClose();
  };

  const handleCreateMemo = () => {
    setEditMode(true);
    setMemo(true);
    handleMenuClose();
  };

  return (
    <>
      {patientData ? (
        <Box sx={styles.container}>
          <Box sx={styles.currentPatientContainer}>
            <Typography sx={styles.patientNameContainer}>
              Patient List <ChevronRight />
              <Typography sx={styles.patientName}>
                {`${patientData.firstName} ${patientData.lastName}`}
              </Typography>
            </Typography>
            <Box>
              <Button onClick={() => setDrawerOpen(true)} variant="outlined">
                Charges <CreditCard sx={{ ml: 1 }} />
              </Button>
              <IconButton sx={{ ml: "1rem" }} onClick={handleMenuOpen}>
                <MoreVert />
              </IconButton>
            </Box>
            <Menu
              anchorEl={anchorEl}
              open={menuOpen}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={handleCreateDoctorNote}>
                Create Doctor's Note
              </MenuItem>
              <MenuItem onClick={handleCreateMemo}>Create Memo</MenuItem>
              <MenuItem
                onClick={() => {
                  setMemo(true);
                  handleMenuClose();
                }}
              >
                View Memos
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={styles.topContainer}>
            <Box sx={styles.responsiveBox}>
              <Paper sx={styles.outerPadding}>
                <PersonalInformation {...patientData} />
              </Paper>
            </Box>
            <Box sx={styles.responsiveBox}>
              <Paper sx={styles.outerPadding}>
                <AddressAndEmployment {...patientData} />
              </Paper>
            </Box>
            <Box sx={styles.responsiveBox}>
              <Paper sx={styles.outerPadding}>
                <VitalsAndMeasurements {...patientData} />
              </Paper>
            </Box>
          </Box>
          <Box sx={styles.tableContainer}>
            <Paper sx={styles.outerPaddingTable}>
              <Typography sx={styles.tableHeader}>
                {`${patientData.firstName} ${patientData.lastName}s`} Medical
                Information
              </Typography>
              <PatientOtherInfo
                allergies={patientData.allergies}
                familyHistory={patientData.familyHistory}
                medicalHistory={patientData.medicalHistory}
              />
            </Paper>
          </Box>
          <MemoPanel memos={memos} open={memo} onClose={() => setMemo(false)} />
          <NotificationDrawer notifications={notifications.data} />
          <PatientPayments
            onClose={() => setDrawerOpen(false)}
            open={drawerOpen}
            payments={payments.data}
          />
        </Box>
      ) : (
        <Box sx={{ m: 3 }}>
          <Box sx={styles.topContainer}>
            <Box sx={styles.responsiveBox}>
              <Paper sx={styles.outerPadding}>
                <Typography fontSize={"1.4rem"}>
                  No Patient Data Available
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default PatientData;
