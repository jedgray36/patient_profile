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
import { DoctorsNote, Medication } from "../../types";
import { useProfileContext } from "../../context/profleContext";
import { useState } from "react";

interface MedicationsModalProps {
  open: boolean;
  onClose: () => void;
  firstName: string;
  medications?: Medication[];
  doctorsNotes?: DoctorsNote[];
  isNotes: boolean;
}

const MedicationsModal = ({
  open,
  onClose,
  firstName,
  medications,
  doctorsNotes,
  isNotes,
}: MedicationsModalProps) => {
  const styles = useModalStyles();
  const [newNoteSummary, setNewNoteSummary] = useState("");
  const [newNoteContent, setNewNoteContent] = useState("");
  const [notesData, setNotesData] = useState(doctorsNotes || []);
  const { createDoctorsNote, setCreateDoctorsNote } = useProfileContext();

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
        <Box sx={styles.modal}>
          <Box sx={styles.header}>
            <Typography variant="h6">
              {!isNotes ? "Medications" : "Doctors Notes"} for {firstName}
            </Typography>
          </Box>
          <Box>
            {!isNotes ? (
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
