import { Close } from "@mui/icons-material";
import {
  Modal,
  Box,
  Typography,
  Button,
  Chip,
  Divider,
  TextField,
} from "@mui/material";
import { useModalStyles } from "../SettingsModal/styles";
import { DoctorsNote, Medication, Patient } from "../../types";
import { useProfileContext } from "../../context/profleContext";
import { useState } from "react";

interface MedicationsModalProps {
  open: boolean;
  onClose: () => void;
  medications?: Medication[];
  doctorsNotes?: DoctorsNote[];
  isNotes: boolean;
  patient: Patient;
}

const MedicationsModal = ({
  open,
  onClose,
  patient,
  medications,
  doctorsNotes,
  isNotes,
}: MedicationsModalProps) => {
  const styles = useModalStyles();
  const [newNoteSummary, setNewNoteSummary] = useState("");
  const [newNoteContent, setNewNoteContent] = useState("");
  const [notesData, setNotesData] = useState(doctorsNotes || []);
  const { createDoctorsNote, setCreateDoctorsNote, darkMode } =
    useProfileContext();

  const newNote = () => {
    const newNote = {
      id: Date.now().toString(),
      summary: newNoteSummary,
      content: newNoteContent,
      createdDate: new Date().toISOString(),
      providerNames: ["Jed Gray"],
      aiGenerated: false,
      version: 1,
    };
    setNotesData((prev) => [newNote, ...prev]);
    setNewNoteSummary("");
    setNewNoteContent("");
    setCreateDoctorsNote(false);
  };

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box sx={darkMode ? styles.modalDark : styles.modal}>
          <Box sx={styles.header}>
            <Typography variant="h6">
              {isNotes ? "Medications" : "Doctors Notes"} for{" "}
              {patient.firstName}
            </Typography>
          </Box>
          <Box>
            {isNotes ? (
              medications?.map((med) => (
                <Box key={med.id} sx={{ mb: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    {med.name}
                    <Chip
                      label={med.active ? "Active" : "Inactive"}
                      color={med.active ? "success" : "default"}
                      size="small"
                      sx={{ ml: 1 }}
                    />
                  </Typography>
                  <Typography variant="body2">Dosage: {med.dosage}</Typography>
                  <Typography variant="body2">
                    Frequency: {med.frequency}
                  </Typography>
                  <Typography variant="body2">
                    Start: {new Date(med.startDate).toLocaleDateString()}
                  </Typography>
                  {med.endDate && (
                    <Typography variant="body2">
                      End: {new Date(med.endDate).toLocaleDateString()}
                    </Typography>
                  )}
                  <Divider sx={{ mt: 1 }} />
                  {medications?.length === 0 && (
                    <Typography variant="body2" color="text.secondary">
                      No medications found.
                    </Typography>
                  )}
                </Box>
              ))
            ) : (
              <>
                <Box
                  sx={{
                    display: "flex",
                    gap: 4,
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      maxHeight: "32rem",
                      width: "40rem",
                      borderRight: "1px solid #ddd",
                      pr: 2,
                      overflowY: "auto",
                    }}
                  >
                    <Typography variant="h5" gutterBottom>
                      Patient Info
                    </Typography>

                    <Typography variant="body1">
                      <strong>Name:</strong> {patient.firstName}{" "}
                      {patient.lastName}
                    </Typography>
                    <Typography variant="body1">
                      <strong>DOB:</strong>{" "}
                      {new Date(patient.dateOfBirth).toLocaleDateString()}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Gender:</strong> {patient.gender}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Phone:</strong> {patient.phoneNumber}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Email:</strong> {patient.email}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                      <strong>Address:</strong>
                      <br />
                      {patient.address}
                      {patient.addressLineTwo && (
                        <>
                          <br />
                          {patient.addressLineTwo}
                        </>
                      )}
                      <br />
                      {patient.city}, {patient.state} {patient.zipCode}
                      <br />
                      {patient.country}
                    </Typography>
                    <Box sx={{ mt: 4 }}>
                      <Typography variant="h5" gutterBottom>
                        Medical Details
                      </Typography>

                      <Typography variant="body1" sx={{ mb: 1 }}>
                        <strong>Allergies:</strong>{" "}
                        {patient.allergies.length > 0
                          ? patient.allergies.join(", ")
                          : "None"}
                      </Typography>

                      <Typography variant="body1" sx={{ mb: 1 }}>
                        <strong>Medical History:</strong>{" "}
                        {patient.medicalHistory.length > 0
                          ? patient.medicalHistory.join(", ")
                          : "None"}
                      </Typography>

                      <Typography variant="body1" sx={{ mb: 1 }}>
                        <strong>Family History:</strong>{" "}
                        {patient.familyHistory.length > 0
                          ? patient.familyHistory.join(", ")
                          : "None"}
                      </Typography>

                      <Typography variant="body1" sx={{ mb: 1 }}>
                        <strong>Goal Weight:</strong> {patient.goalWeight} kg
                      </Typography>

                      <Typography variant="body1" sx={{ mb: 1 }}>
                        <strong>Prescriptions:</strong>{" "}
                        {patient.prescriptions.length > 0
                          ? patient.prescriptions.join(", ")
                          : "None"}
                      </Typography>

                      <Typography variant="body1" sx={{ mb: 1 }}>
                        <strong>Current Medications:</strong>
                        {patient.medications.length > 0 ? (
                          <ul style={{ marginTop: 0, paddingLeft: "1.25rem" }}>
                            {patient.medications.map((med) => (
                              <li key={med.id}>
                                {med.name} - {med.dosage}, {med.frequency}{" "}
                                {med.active ? "(Active)" : "(Inactive)"}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          " None"
                        )}
                      </Typography>

                      <Typography variant="body1" sx={{ mb: 1 }}>
                        <strong>Recent Measurements:</strong>
                        {patient.measurements.length > 0 ? (
                          <ul style={{ marginTop: 0, paddingLeft: "1.25rem" }}>
                            {patient.measurements.slice(0, 5).map((m) => (
                              <li key={m.id}>
                                {m.type}: {m.value} {m.unit} (
                                {new Date(m.date).toLocaleDateString()})
                              </li>
                            ))}
                          </ul>
                        ) : (
                          " None"
                        )}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={styles.overflow}>
                    <Box sx={{ mb: 1 }}>
                      {!createDoctorsNote ? (
                        <Button onClick={() => setCreateDoctorsNote(true)}>
                          Add Note
                        </Button>
                      ) : (
                        <Button onClick={() => setCreateDoctorsNote(false)}>
                          Back
                        </Button>
                      )}
                    </Box>
                    {createDoctorsNote && (
                      <Box sx={{ mb: 3 }}>
                        <TextField
                          fullWidth
                          label="Summary"
                          value={newNoteSummary}
                          onChange={(e) => setNewNoteSummary(e.target.value)}
                          sx={{ mb: 2 }}
                        />
                        <TextField
                          fullWidth
                          label="Content"
                          value={newNoteContent}
                          onChange={(e) => setNewNoteContent(e.target.value)}
                          multiline
                          minRows={4}
                        />
                        <Button
                          type="submit"
                          variant="outlined"
                          sx={{ mt: 2 }}
                          onClick={newNote}
                          disabled={
                            !newNoteSummary.trim() || !newNoteContent.trim()
                          }
                        >
                          Save Note
                        </Button>
                      </Box>
                    )}
                    {notesData?.map((note: DoctorsNote) => (
                      <Box key={note.id} sx={{ mb: 2 }}>
                        <Typography variant="h6">{note.summary}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {new Date(note.createdDate).toLocaleString()} ·{" "}
                          {note.providerNames.join(", ")}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ mt: 1, whiteSpace: "pre-line" }}
                        >
                          {note.content}
                        </Typography>
                        <Divider sx={{ mt: 1 }} />
                      </Box>
                    ))}
                  </Box>
                </Box>
              </>
            )}
          </Box>
          <Box sx={styles.footer}>
            <Button onClick={onClose}>Close</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default MedicationsModal;
