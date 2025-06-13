
export const useNotificationDrawer = () => {

    return {
        container: {
          position: "fixed",
          bottom: 0,
          right: 24,
          zIndex: 1300,
        },
        header: {
            borderRadius: "16px 16px 0 0",
            backgroundColor: "primary.main",
            color: "white",
            px: 2,
            py: 1,
            textTransform: "none",
        },
        popup: {
            position: "fixed",
            bottom: 48,
            right: 24,
            width: 360,
            maxHeight: "50vh",
            overflowY: "auto",
            bgcolor: "background.paper",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            p: 2,
            zIndex: 1301,
            boxShadow: 6,
        },
        popupDark: {
            position: "fixed",
            bottom: 48,
            right: 24,
            width: 360,
            maxHeight: "50vh",
            overflowY: "auto",
            bgcolor: "grey",
            color: '#fff',
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            p: 2,
            zIndex: 1301,
            boxShadow: 6,
        }
    }
}