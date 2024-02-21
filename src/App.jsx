import logo from "./logo.svg";
import "./App.css";
import { Suspense, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "./axios";
import { useNavigate, NavLink, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isLoggedIn, logout } from "./actions/user";
import UnAuthenticatedPage from "./pages/UnAuthenticatedPage";

function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("en");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

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

    dispatch(isLoggedIn());
  }, []);

  return (
    <Suspense fallback="loading">
      {!user.isLoggedIn === true ? (
        <UnAuthenticatedPage/>
      ) : (
        <>
          <header>
            <nav>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  `${isActive ? "active" : isPending ? "pending" : ""} nav-link`
                }
              >
                Home
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
              {user.isLoggedIn === true  && (
                <button
                  onClick={() => dispatch(logout())}
                  className={"nav-link btn-logout"
                  }
                >
                  Logout
                </button>)
              }
            </nav>
          </header>
          <div className="App">
            <main>
              <div
                id="page-content"
                className={navigation.state === "loading" ? "loading" : ""}
              >
                <Outlet />
              </div>
            </main>

            <section className="App-header">
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
            </section>
          </div>
        </>
      )}
    </Suspense>
  );
}

export default App;
