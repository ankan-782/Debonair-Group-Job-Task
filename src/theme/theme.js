import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            bg: '#f9fafb',
            text: '#000000',
            fill: '#7AB259',
        }
    },
    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: 'lg',
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                    padding: '0.6rem 2.5rem',
                }
            },
            defaultProps: {
                variant: 'contained',
                color: 'primary',
            }
        }
    }
});