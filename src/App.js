import "./App.css";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./pages/Login";
import AddFriends from "./components/AddFriends";
import FriendsPage from "./pages/FriendsPage";
import ProtectedPage from "./pages/ProtectedPage";
import Header from "./layout/Header";

function App() {
  return (
    <div className="App">

      <Header />
      <Switch>
       
        <Route path="/friends">
          <ProtectedPage PageComponent={FriendsPage} fromURL={"/friends"} />
        </Route>
        <Route path="/add-friends">
          <AddFriends />
        </Route>
         <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
