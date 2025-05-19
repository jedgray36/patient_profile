import { AccountCircle, SquareFoot } from "@mui/icons-material";
import { Box, Button, TableCell, TableRow, Typography } from "@mui/material";
import { usePersonalInformationStyles } from "../personalInformation/styles/styles";
import { usePatientDataStyles } from "../PatientData/styles";
import { Patient } from "../../types";
import MedicationsModal from "../MedicationsModal";
import { useState } from "react";
import doctorNotes from "../../sample_patient_data/doctors_notes.json";
import { useProfileContext } from "../../context/profleContext";
const VitalsAndMeasurements = ({
  goalWeight,
  measurements,
  firstName,
  medications,
}: Patient) => {
  const styles = usePersonalInformationStyles();
  const patientDataStyles = usePatientDataStyles();
  const {
    isMedicationsModal,
    setIsMedicationsModal,
    openNotesModal,
    setOpenNotesModal,
    setEditMode,
  } = useProfileContext();

  const currentWeight = measurements.find(
    (m) => m.type.toUpperCase() === "WEIGHT"
  )?.value;

  const onCloseModal = () => {
    setOpenNotesModal(false);
    setIsMedicationsModal(false);
  };

  let weightColor = "text.primary";
  if (currentWeight !== undefined) {
    const diff = Math.abs(Number(currentWeight) - goalWeight);

    if (diff <= 5) weightColor = "success.main";
    else if (diff <= 20) weightColor = "warning.main";
    else weightColor = "error.main";
  }

  return (
    <>
      <Box>
        <Typography sx={patientDataStyles.alignTitle}>
          Vitals And Measurements
          <SquareFoot sx={styles.marginLeft} />
        </Typography>
        <Box>
          <Typography sx={styles.personalInfoText}>
            <Box sx={styles.weightContainer}>
              <Typography sx={styles.boldLarge}>Goal Weight:</Typography>
              <Typography
                component="span"
                sx={{
                  backgroundColor: weightColor,
                  marginLeft: 1,
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  color: "#fff",
                  padding: "0.4rem",
                  borderRadius: "1rem",
                }}
              >
                {goalWeight}Lb
              </Typography>
            </Box>
          </Typography>
          <Box>
            {measurements.map((m, index) => (
              <TableRow key={index}>
                <TableCell sx={styles.tableRow}>{m.type}:</TableCell>
                <TableCell
                  sx={styles.tableRowValue}
                >{`${m.value} ${m.unit}`}</TableCell>
              </TableRow>
            ))}
          </Box>
          <Box sx={styles.alignRight}>
            <Button
              sx={{ mr: 1 }}
              onClick={() => {
                setIsMedicationsModal(false);
                setOpenNotesModal(true);
                setEditMode(false);
              }}
            >
              Doctors Notes
            </Button>
            <Button
              onClick={() => {
                setIsMedicationsModal(true);
                setOpenNotesModal(true);
              }}
            >
              View Medications
            </Button>
          </Box>
        </Box>
        <MedicationsModal
          doctorsNotes={doctorNotes.data}
          isNotes={isMedicationsModal}
          medications={medications}
          open={openNotesModal}
          onClose={onCloseModal}
          firstName={firstName}
        />
      </Box>
    </>
  );
};

export default VitalsAndMeasurements;
