import {createTheme} from "@mui/material";
import {ReactComponent as ArrowBottom} from "../../assets/icon/arrow-bottom.svg";



const MaterialCustomConfig = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        root: ({ownerState, theme}) => ({
          margin: "0",
          display: "flex",
          justifyContent: 'space-between',
          fontWeight: 400,
          fontSize: 'var(--f-16)',
          lineHeight: '18px',
          textAlign: 'left',
          color: 'var(--text-black)',
          'label+&': {
            marginTop: 0,
          },
          '&::before': {
            display: 'none',
          },
          '&::after': {
            display: 'none',
          },
        }),
        select: ({ownerState, theme}) => ({
          backgroundColor: 'var(--white-bg)',
          borderRadius: '8px',
          position: 'relative',
          transition: 'border-color 0.25s ease-in-out',
          border: '1px solid transparent',
          cursor: 'pointer',
          padding: '8px 38px 8px 14px !important',
          boxSizing: 'border-box',
          fontWeight: '400',
          '&:active': {
            borderColor: 'var(--border-active)',
          },
        }),
        icon: {
          right: '8px',
          color: "var(--icon-secondary)",
        },
        nativeInput: {
          // opacity: 1,
          padding: '8px 38px 8px 14px !important',
          '.small &': {
            paddingTop: '8px',
            paddingBottom: '8px',
          },
        },
      },
      defaultProps: {
        variant: "standard",
        IconComponent: ArrowBottom,
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--white-bg) !important",
          borderRadius: "8px !important",
          color: "#383736",
          border: '1px solid transparent',
        },
        input: {
          borderRadius: "8px !important",
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ownerState}) => ({
          color: "#CDCFDB",
          '&:hover': {
            cursor: 'default',
            color: "#CDCFDB",
          },
          '&.Mui-focused': {
            color: "#383736",
          }
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: () => ({
          backgroundColor: "var(--white-bg)",
          color: "#383736",
          borderRadius: "8px",
          border: '1px solid transparent',
          '&:hover': {
            cursor: 'default',
            color: "#fff",
          },
        }),
      },
    },
    MuiFormControl: {
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: (props) => ({
          marginLeft: 0,
        }),
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        // component: ErrorMessage,
        error: true,
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: () => ({
          color: "white",
          '&:hover': {
            cursor: 'default',
            color: "#fff",
          },
        }),
      },
    },
  },
});
export default MaterialCustomConfig