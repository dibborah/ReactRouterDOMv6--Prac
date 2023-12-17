// step 1:
// import 4 things

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Home, About, Contact, Posts, Error,PostDetail, Login } from "./Pages";
import RootLayout from "./layouts/RootLayout";
import RequireAuth from "./components/RequireAuth";
import AuthProvider from "./context/AuthProvider";
// import PostDetail from "./Pages/PostDetail";

// step 2:
// create router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>} />{/* Ye home index hain mera */}
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="posts" element={<RequireAuth><Posts/></RequireAuth>} />
      <Route path="login" element={<Login/>} />
      <Route path="posts/:id" element={<PostDetail/>} />
      <Route path="*" element={<Error/>} />
    </Route>
  )
);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  );
};

export default App;
