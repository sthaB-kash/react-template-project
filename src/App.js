import logo from './logo.svg';
import './App.css';
import { Suspense, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from './axios';

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    axios.get('/todos/1').then(response => {
      console.log(response.data);
    }).catch( err => console.log(err.message));
  }, []);


  return (
    <Suspense fallback="loading">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('learnReact', { lng: 'de', ns: 'translation'})}
          </a>
        </header>
      </div>
    </Suspense>
  );
}

export default App;
