import Header from "./components/atoms/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";

import store from "./redux/store";
import Footer from "./components/atoms/Footer";
import "./assets/css/main.scss";
import Home from "./components/pages/Home";
import Projects from "./components/pages/projects/Projects";
import Contact from "./components/pages/contact/Contact";
import About from "./components/pages/about/About";
import { ROUTE_CONSTANTS } from "./constants/url";

function App() {
  return (
    <div className="App">
      <Router>
        <HelmetProvider>
          <Provider store={store}>
            <div className="components">
              <Header />
              <Routes>
                <Route index element={<Home />} />
                <Route path={ROUTE_CONSTANTS.HOME} element={<Home />} />
                <Route path={ROUTE_CONSTANTS.ABOUT} element={<About />}>
                  <Route
                    path={`${ROUTE_CONSTANTS.ABOUT}/:tab`}
                    element={<About />}
                  />
                </Route>
                <Route path={ROUTE_CONSTANTS.PROJECTS} element={<Projects />} />
                <Route path={ROUTE_CONSTANTS.CONTACT} element={<Contact />} />
              </Routes>
              <Footer />
            </div>
          </Provider>
        </HelmetProvider>
      </Router>
    </div>
  );
}

export default App;

// write about music, your favorite songs, artists, genres, playlists, etc.
