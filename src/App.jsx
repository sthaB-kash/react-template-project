import logo from "./logo.svg";
import "./App.css";
import { Suspense, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "./axios";
import { useNavigate, NavLink, Outlet } from "react-router-dom";

function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("en");

  const navigation = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  useEffect(() => {
    axios
      .get("/todos/1")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <Suspense fallback="loading">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("learnReact", { lng: lang, ns: "translation" })}
          </a>
          <div>
            <button
              className="btn lang-btn"
              onClick={() => changeLanguage("en")}
            >
              English
            </button>
            <button
              className="btn lang-btn"
              onClick={() => changeLanguage("np")}
            >
              नेपाली
            </button>
            <button
              className="btn lang-btn"
              onClick={() => changeLanguage("it")}
            >
              Italian
            </button>
          </div>
        </header>
        <main>
          <section>
            <h1> this is main section</h1>
            <nav>
              <NavLink
                to="/users/4"
                className={({ isActive, isPending }) =>
                  `${isActive ? "active" : isPending ? "pending" : ""} nav-link`
                }
              >
                User 4
              </NavLink>
              <NavLink
                to="/users/5"
                className={({ isActive, isPending }) =>
                  `${isActive ? "active" : isPending ? "pending" : ""} nav-link`
                }
              >
                User 5
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  `${isActive ? "active" : isPending ? "pending" : ""} nav-link`
                }
              >
                About
              </NavLink>
            </nav>
          </section>
          <div
            id="page-content"
            className={navigation.state === "loading" ? "loading" : ""}
          >
            <Outlet />
          </div>
        </main>
      </div>
    </Suspense>
  );
}

export default App;
