import { Box, List, ListItem, Typography } from "@mui/material";
import { useState } from "react";
import eventsData from "../../sample_patient_data/events.json";
import { AppointmentEvent } from "../../types";
import { useAppointmentStyles } from "./styles";

const AppointmentsList = () => {
  const [appointments, setAppointments] = useState<AppointmentEvent[]>(
    eventsData as AppointmentEvent[]
  );

  const styles = useAppointmentStyles();

  return (
    <>
      <Box sx={styles.container}>
        <Typography sx={{ margin: "1rem", fontSize: "1.4rem" }}>
          Appointments
        </Typography>
        {appointments.length === 0 && (
          <Typography>No appointments found.</Typography>
        )}
        <List
          sx={{
            overflowY: "scroll",
            listStyle: "none",
            padding: 0,
            width: "100%",
            height: "90%",
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

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                <Typography variant="body2" color="textSecondary">
                  <strong>When:</strong> {new Date(appt.start).toLocaleString()}
                </Typography>

                <Typography variant="body2" color="textSecondary">
                  <strong>Organizer:</strong> {appt.organizer.firstName}{" "}
                  {appt.organizer.lastName}
                </Typography>

                <Typography variant="body2" color="textSecondary">
                  <strong>Location:</strong>{" "}
                  {appt.location.isVirtual ? "Virtual" : appt.location.name}
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
      </Box>
    </>
  );
};

export default AppointmentsList;
