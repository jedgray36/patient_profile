import { Box, List, ListItem, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import eventsData from "../../sample_patient_data/events.json";
import { AppointmentEvent } from "../../types";
import { useAppointmentStyles } from "./styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { EventNote } from "@mui/icons-material";

const AppointmentsList = () => {
  const [appointments, setAppointments] = useState<AppointmentEvent[]>(
    eventsData as AppointmentEvent[]
  );
  const [collapsed, setCollapsed] = useState(true);

  const styles = useAppointmentStyles();

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <Box
        sx={{
          width: collapsed ? "3rem" : "25rem",
          transition: "width 0.3s ease",
          borderRight: "1px solid #ccc",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <IconButton
          onClick={() => setCollapsed((prev) => !prev)}
          sx={{
            position: "absolute",
            top: 24,
            right: 12,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            zIndex: 1,
          }}
        >
          {collapsed ? <EventNote /> : <ChevronLeftIcon />}
        </IconButton>

        {!collapsed && (
          <>
            <Typography sx={{ margin: "1rem", fontSize: "1.4rem" }}>
              Appointments
            </Typography>

            {appointments.length === 0 ? (
              <Typography sx={{ mx: 2 }}>No appointments found.</Typography>
            ) : (
              <List
                sx={{
                  overflowY: "auto",
                  listStyle: "none",
                  padding: 0,
                  px: 2,
                  height: "100%",
                }}
              >
                {appointments.map((appt) => (
                  <ListItem
                    key={appt.id}
                    sx={{
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderBottom: "1px solid #ccc",
                      py: 1.5,
                      mb: 1.5,
                      gap: 0.5,
                    }}
                  >
                    <Typography variant="h6" component="h3" gutterBottom>
                      {appt.title}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 0.5,
                      }}
                    >
                      <Typography variant="body2" color="textSecondary">
                        <strong>When:</strong>{" "}
                        {new Date(appt.start).toLocaleString()}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        <strong>Organizer:</strong> {appt.organizer.firstName}{" "}
                        {appt.organizer.lastName}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        <strong>Location:</strong>{" "}
                        {appt.location.isVirtual
                          ? "Virtual"
                          : appt.location.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        <strong>Reason:</strong> {appt.appointment.reason}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        <strong>Status:</strong> {appt.status}
                      </Typography>
                    </Box>
                  </ListItem>
                ))}
              </List>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default AppointmentsList;
