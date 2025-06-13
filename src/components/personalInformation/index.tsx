import { Box, Button, Typography } from "@mui/material";
import { Patient } from "../../types";
import { usePersonalInformationStyles } from "./styles/styles";
import { AccountCircle, MedicalInformation } from "@mui/icons-material";
import { usePatientDataStyles } from "../PatientData/styles";
import { useState } from "react";
import { useProfileContext } from "../../context/profleContext";

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
  const { darkMode } = useProfileContext();

  return (
    <>
      <Box>
        <Typography
          sx={
            darkMode
              ? patientDataStyles.alignTitleDark
              : patientDataStyles.alignTitle
          }
        >
          Personal Information <MedicalInformation sx={styles.marginLeft} />
        </Typography>
        <AccountCircle
          sx={{ fontSize: "7rem", color: darkMode ? "#fff" : "" }}
        />

        <Typography sx={darkMode ? styles.centerTextDark : styles.centerText}>
          {firstName || lastName
            ? `${firstName ?? ""} ${lastName ?? ""}`
            : "Not provided"}{" "}
          <Typography sx={{ ml: 2 }}>({gender})</Typography>
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={darkMode ? styles.personalInfoTextDark : styles.personalInfoText}
        >
          <Typography sx={styles.bold}>Email:</Typography>
          {email || "Not provided"}
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={darkMode ? styles.personalInfoTextDark : styles.personalInfoText}
        >
          <Typography sx={styles.bold}>Date of Birth:</Typography>
          {dateOfBirth || "Not provided"}
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={darkMode ? styles.personalInfoTextDark : styles.personalInfoText}
        >
          <Typography sx={styles.bold}>Marital Status:</Typography>
          {maritalStatus || "Not provided"}
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={darkMode ? styles.personalInfoTextDark : styles.personalInfoText}
        >
          <Typography sx={styles.bold}>Phone Number:</Typography>
          {phoneNumber || "Not provided"}
        </Typography>
      </Box>
    </>
  );
};

export default PersonalInformation;
