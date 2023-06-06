import { createUseStyles } from "react-jss"

const styles = createUseStyles({
  login: {
    display: 'flex',
    flexFlow: 'column nowrap',
    backgroundColor: 'white',
    padding: '1rem',
    gap: '0.5rem',
    minWidth:'230px',
    borderRadius: '1em',
    color: 'black',
    margin: 'auto',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '& button': {
      color: 'white',
      marginLeft: 'auto',
      width: 'fit-content',
      border: '1px solid black',
      padding: '6px 12px',
      fontSize: '1rem',
      marginTop: '1rem',
      fontWeight: '500',
      borderRadius: '1rem',
      backgroundColor: 'black'
    },
    '& .input': {
      display: 'flex',
      flexFlow: 'column nowrap',
      gap: '0.5rem',
    },
    '& input': {
      boxSizing: 'border-box',
      width: '100%',
      padding: '10px',
      height: '1.8rem',
      backgroundColor: '#e2e8f0',
      border: '1px solid #e2e8f0',
      borderRadius: '10px'
    },
    '& input:focus': {
      outline: 'none',
      borderColor: '#a7abb1',
    },
    '& h3': {
      marginBottom: '0'
    }
  },
});


export default styles
