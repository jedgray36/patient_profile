import {
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Button,
  TextField,
} from "@mui/material";
import { Memo } from "../../types";
import {
  Add,
  Close,
  Delete,
  Edit,
  PlusOne,
  Remove,
  RemoveRounded,
} from "@mui/icons-material";
import { useProfileContext } from "../../context/profleContext";
import { useState } from "react";

interface MemoPanelProps {
  open: boolean;
  onClose: () => void;
  memos: Memo[];
}

const MemoPanel = ({ open, onClose, memos }: MemoPanelProps) => {
  const { editMode, setEditMode } = useProfileContext();
  const [newNote, setNewNote] = useState("");
  const [memoData, setMemoData] = useState(memos);
  const [editingMemoId, setEditingMemoId] = useState<string | null>(null);
  const [editingNote, setEditingNote] = useState("");

  const handleAddMemo = () => {
    if (!newNote.trim()) return;

    const newMemo: Memo = {
      id: Date.now().toString(),
      note: newNote.trim(),
      createdDate: new Date().toISOString(),
      creator: {
        firstName: "Jed",
        lastName: "Gray",
        email: "jedgray@gmail.com",
      },
    };

    setMemoData([newMemo, ...memos]);
    setNewNote("");
  };

  const handleRemoveMemo = (id: string) => {
    setMemoData((prev) => prev.filter((memo) => memo.id !== id));
  };

  const handleEditClick = (memo: Memo) => {
    setEditingMemoId(memo.id);
    setEditingNote(memo.note);
  };

  const handleEditSave = (id: string) => {
    setMemoData((prev) =>
      prev.map((memo) =>
        memo.id === id ? { ...memo, note: editingNote } : memo
      )
    );
    setEditingMemoId(null);
    setEditingNote("");
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        right: 0,
        height: "100vh",
        width: 400,
        bgcolor: "background.paper",
        boxShadow: 6,
        padding: 2,
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.3s ease-in-out",
        overflowY: "scroll",
        maxHeight: "97vh",
      }}
    >
      {memoData.length > 0 ? (
        <>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">Patient Memos</Typography>
            <IconButton onClick={onClose}>
              <Close />
            </IconButton>
          </Box>
          {editMode === false ? (
            <Button
              onClick={() => setEditMode(true)}
              sx={{ display: "flex", justifyContent: "flex-start", mb: 1 }}
            >
              Add Memo <Add />
            </Button>
          ) : (
            <Button
              onClick={() => setEditMode(false)}
              sx={{ display: "flex", justifyContent: "flex-start", mb: 1 }}
            >
              Back <Remove />
            </Button>
          )}
          {editMode === true ? (
            <Box
              component="form"
              onSubmit={(e) => {
                e.preventDefault();
                handleAddMemo();
              }}
              mb={3}
            >
              <TextField
                fullWidth
                label="New Memo"
                multiline
                minRows={3}
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                variant="outlined"
              />
              <Button
                type="submit"
                variant="outlined"
                sx={{ mt: 1, display: "flex", justifyContent: "flex-end" }}
                disabled={!newNote.trim()}
              >
                Add Memo <Add />
              </Button>
            </Box>
          ) : null}
          <List>
            {memoData.map((memo) => (
              <ListItem
                key={memo.id}
                alignItems="flex-start"
                sx={{ flexDirection: "column", alignItems: "flex-start" }}
              >
                {editingMemoId === memo.id ? (
                  <>
                    <TextField
                      fullWidth
                      multiline
                      value={editingNote}
                      onChange={(e) => setEditingNote(e.target.value)}
                    />
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                      mt={1}
                      gap={1}
                    >
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => setEditingMemoId(null)}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => handleEditSave(memo.id)}
                        disabled={!editingNote.trim()}
                      >
                        Save
                      </Button>
                    </Box>
                  </>
                ) : (
                  <>
                    <ListItemText
                      primary={memo.note}
                      secondary={`${memo.creator.firstName} ${
                        memo.creator.lastName
                      } — ${new Date(memo.createdDate).toLocaleString()}`}
                    />
                    <Box display="flex" gap={1} mt={1}>
                      <IconButton
                        edge="end"
                        onClick={() => handleEditClick(memo)}
                        size="small"
                      >
                        <Edit fontSize="small" />
                      </IconButton>
                      <IconButton
                        edge="end"
                        onClick={() => handleRemoveMemo(memo.id)}
                        size="small"
                      >
                        <Delete fontSize="small" />
                      </IconButton>
                    </Box>
                  </>
                )}
              </ListItem>
            ))}
          </List>
        </>
      ) : (
        <Typography>No Memos</Typography>
      )}
    </Box>
  );
};

export default MemoPanel;
