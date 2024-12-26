import Create from "./Pages/Create/Create";
import Home from "./Pages/Home/Home";
import Logout from "./Pages/Logout/Logout";
import Root from "./Pages/Root";
import Setting from "./Pages/Setting/Setting";
import Profile from "./Pages/Profile/Profile";
import ErrorPage from "./Pages/Error/ErrorPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route 
    path="" 
    element={<Root />}                                                   
    errorElement={<ErrorPage />}>

      <Route path="/" element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="profile" element={<Profile />} />
      <Route path="setting" element={<Setting />} />
      <Route path="logout" element={<Logout />} />

    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
