

export const useOtherInfoStyles = () => {

return {
    container: {
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      mt: 4,
      borderLeft: '1px solid #e0e0e0',
    },
    containerDark: {
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      mt: 4,
      borderLeft: '1px solid #e0e0e0',
      background: '#333'
    },
    section: {
      flex: 1,
      px: 2,
      borderRight: '1px solid #e0e0e0',
      '&:last-of-type': {
        borderRight: 'none', 
      },
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      background: 'transparent',
      color: '#fff'
    },
    listItem: {
      pl: 0,
      textDecoration: 'none',
      backgroundColor: '#fff'
    },
      listItemDark: {
      pl: 0,
      textDecoration: 'none',
      backgroundColor: 'dark-grey',
      color: '#fff'
    },
    alternateRow: {
      backgroundColor: '#fff',
      color: '#000'
    },
    alternateRowDark: {
      backgroundColor: '#656565',
      color: '#fff'
    },
  };
}
