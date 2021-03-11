import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./components/Pages/MainPage/MainPage";
import Nav from "./components/Nav/Nav";
import SettingsPage from "./components/Pages/SettingsPage/SettingsPage";
import { MainProvider } from "./context/MainContext";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <MainProvider>
      <TodoProvider>
        <Router>
          <div className="App">
            <Nav />
            <Switch>
              <Route exact path="/">
                <MainPage />
              </Route>
              <Route path="/settings">
                <SettingsPage />
              </Route>
            </Switch>
          </div>
        </Router>
      </TodoProvider>
    </MainProvider>
  );
}

export default App;
