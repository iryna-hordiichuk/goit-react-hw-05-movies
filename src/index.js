import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Toaster } from 'react-hot-toast';
import GlobalStyle from 'components/GlobalStyle';
import App from './components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Toaster position="top-center" />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
