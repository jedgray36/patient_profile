

export const useModalStyles = () => {
    return {
        modal: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90vw',
            borderRadius: '1rem',
            boxShadow: '24',
            paddingLeft: '3rem',
            paddingRight: '3rem',
            paddingBottom: '2rem',
            paddingTop: '1rem',
            bgcolor: 'background.paper',
            minHeight: '10rem',
            maxHeight: '85vh',
            maxWidth: '60rem',
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem'
        },
        footer: {
            display: 'flex',
            width: 'vw',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            borderTop: "1px solid #ccc",
            marginTop: '3rem',
             maxWidth: '55rem',
            paddingBottom: '1rem'
        },
        overflow: {
            maxHeight: '68vh',
            overflowY: 'scroll'
        }
    }

}