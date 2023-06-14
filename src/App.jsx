import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RoutesWrapper from './RoutesWrapper';
import { theme } from './theme/theme';

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <RoutesWrapper />
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
