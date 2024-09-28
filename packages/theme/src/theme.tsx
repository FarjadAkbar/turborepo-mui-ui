"use client"
import { ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';

// Define your custom Material-UI theme here
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  // Add any additional customizations
});

const GlobalThemeStyles = () => (
  <GlobalStyles
    styles={{
      body: {
        backgroundColor: '#f9f9f9', // Change this to any color you want
      },
    }}
  />
);



interface AppThemeProviderProps {
  children: ReactNode;
}

export const AppThemeProvider = ({ children }: AppThemeProviderProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalThemeStyles />
    {children}
  </ThemeProvider>
);

export default theme;
