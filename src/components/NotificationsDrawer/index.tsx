import { Close, DeleteOutline, Notifications } from "@mui/icons-material";
import {
  Box,
  Button,
  Badge,
  Slide,
  Paper,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import { useEffect, useState } from "react";
import { NotificationI } from "../../types";
import { useNotificationDrawer } from "./styles";

interface NotificationDrawerProps {
  notifications: NotificationI[];
}

const NotificationDrawer = ({ notifications }: NotificationDrawerProps) => {
  const [open, setOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(notifications.length);
  const styles = useNotificationDrawer();

  const [localNotifications, setLocalNotifications] =
    useState<NotificationI[]>(notifications);

  const toggleDrawer = () => {
    setOpen((prev) => {
      const newState = !prev;
      if (newState) setUnreadCount(0);
      return newState;
    });
  };

  const removeNotification = (id: string) => {
    setLocalNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  return (
    <>
      <Box sx={styles.container}>
        <Button
          onClick={toggleDrawer}
          startIcon={
            <Badge badgeContent={unreadCount} color="error">
              <Notifications />
            </Badge>
          }
          sx={styles.header}
        >
          Notifications
        </Button>
      </Box>

      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <Paper sx={styles.popup}>
          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography variant="h6">Notifications</Typography>
            <IconButton onClick={toggleDrawer} size="small">
              <Close />
            </IconButton>
          </Box>

          {localNotifications.length === 0 ? (
            <Typography variant="body2" color="text.secondary">
              No notifications.
            </Typography>
          ) : (
            localNotifications.map((alert, index) => {
              const { id, type, data, createdDate } = alert;
              const patient = data?.patient || {};
              const timestamp = new Date(createdDate).toLocaleString();

              return (
                <Box key={id} sx={{ mb: 2 }}>
                  <Box display="flex" justifyContent="space-between">
                    <Box sx={{ flex: 1, pr: 1 }}>
                      {type === "FORM_SUBMITTED" && (
                        <>
                          <Typography variant="subtitle1" fontWeight="bold">
                            Form Submitted: {data.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {patient.firstName} {patient.lastName} · {timestamp}
                          </Typography>
                        </>
                      )}

                      {type === "APPOINTMENT_SCHEDULED" && (
                        <>
                          <Typography variant="subtitle1" fontWeight="bold">
                            Appointment: {data.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {new Date(data.start).toLocaleString()} with Dr.{" "}
                            {data.organizer.firstName} {data.organizer.lastName}
                          </Typography>
                        </>
                      )}

                      {type === "MESSAGE_RECEIVED" && (
                        <>
                          <Typography variant="subtitle1" fontWeight="bold">
                            Message from {patient.firstName} {patient.lastName}
                          </Typography>
                          <Typography variant="body2" sx={{ mt: 0.5 }}>
                            {data.message}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {timestamp}
                          </Typography>
                        </>
                      )}
                    </Box>

                    <IconButton
                      size="small"
                      onClick={() => removeNotification(id)}
                      sx={{ alignSelf: "flex-start", mt: 0.5 }}
                    >
                      <DeleteOutline fontSize="small" />
                    </IconButton>
                  </Box>

                  {index < localNotifications.length - 1 && (
                    <Divider sx={{ mt: 2 }} />
                  )}
                </Box>
              );
            })
          )}
        </Paper>
      </Slide>
    </>
  );
};

export default NotificationDrawer;
