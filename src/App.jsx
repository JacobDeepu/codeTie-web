import Body from "./components/Body";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./components/Login";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Feed from "./components/Feed";
import Modal from "./components/Error";
import Profile from "./components/Profile";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/feed" element={<Feed />} />
              <Route path="/error" element={<Modal />} />
              <Route path="/usercard" element={<UserCard/>} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
