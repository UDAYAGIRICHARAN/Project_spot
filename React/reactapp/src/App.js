import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './context';
import AppRoute from './router/Approute';

function App() {
  return (
    <>
     <ContextProvider>
        <BrowserRouter>
          <AppRoute />
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;