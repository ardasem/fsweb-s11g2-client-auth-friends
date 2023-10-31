import "./App.css";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./pages/Login";
import AddFriends from "./components/AddFriends";
import FriendsPage from "./pages/FriendsPage";
import ProtectedPage from './pages/ProtectedPage'

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/friends">
        <ProtectedPage PageComponent ={FriendsPage} fromURL={'/friends'}/>
      </Route>
      <Route path="/add-friends">
        <AddFriends />
      </Route>
     
    </div>
  );
}

export default App;
