import logo from './logo.svg';
import './App.css';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

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
            {t('learnReact', { lng: 'en', ns: 'translation'})}
          </a>
        </header>
      </div>
    </Suspense>
  );
}

export default App;
