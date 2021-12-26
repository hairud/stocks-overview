import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { Auth } from '#pages/Auth';
import { Overview } from '#pages/Overview';
import configuredStore from '#utils/configuredStore';

import { Header } from '#components/Header';

import * as S from './styled';

import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <StoreProvider store={configuredStore}>
    <ToastContainer pauseOnHover draggable />
    <S.GlobalStyle />
    <BrowserRouter>
      <Header />
      <S.Container>
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/">
            <Overview />
          </Route>
        </Switch>
      </S.Container>
    </BrowserRouter>
  </StoreProvider>
);

export { App };
