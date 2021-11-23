import { ThemeProvider } from 'styled-components';
import theme, { GlobalStyle } from 'theme';
import { Provider } from 'react-redux';
import configureStore from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
//import { AppWrapper } from 'containers';

const { store, persistor } = configureStore();

function App({ Component, pageProps }) {
  const allProps = {
    theme,
    ...pageProps,
  };

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
       
            <Component {...allProps} />
        
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
