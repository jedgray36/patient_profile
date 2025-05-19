import { Box, Button, Typography } from "@mui/material";
import { Patient } from "../../types";
import { usePersonalInformationStyles } from "./styles/styles";
import { AccountCircle, MedicalInformation } from "@mui/icons-material";
import { usePatientDataStyles } from "../PatientData/styles";
import { useState } from "react";

const PersonalInformation = ({
  firstName,
  lastName,
  dateOfBirth,
  gender,
  maritalStatus,
  phoneNumber,
  email,
}: Patient) => {
  const styles = usePersonalInformationStyles();
  const patientDataStyles = usePatientDataStyles();

  return (
    <>
      <Box>
        <Typography sx={patientDataStyles.alignTitle}>
          Personal Information <MedicalInformation sx={styles.marginLeft} />
        </Typography>
        <AccountCircle sx={{ fontSize: "7rem" }} />

        <Typography sx={styles.centerText}>
          {firstName || lastName
            ? `${firstName ?? ""} ${lastName ?? ""}`
            : "Not provided"}
        </Typography>
      </Box>

      <Box>
        <Typography sx={styles.personalInfoText}>
          <Typography sx={styles.bold}>Date of Birth:</Typography>
          {dateOfBirth || "Not provided"}
        </Typography>
      </Box>

      <Box>
        <Typography sx={styles.personalInfoText}>
          <Typography sx={styles.bold}>Gender:</Typography>
          {gender || "Not provided"}
        </Typography>
      </Box>

      <Box>
        <Typography sx={styles.personalInfoText}>
          <Typography sx={styles.bold}>Marital Status:</Typography>
          {maritalStatus || "Not provided"}
        </Typography>
      </Box>

      <Box>
        <Typography sx={styles.personalInfoText}>
          <Typography sx={styles.bold}>Phone Number:</Typography>
          {phoneNumber || "Not provided"}
        </Typography>
      </Box>
    </>
  );
};

export default PersonalInformation;
