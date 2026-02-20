import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import AdminLayout from "./pages/adminPage/AdminLayout";
import AdminDashboard from "./pages/adminPage/AdminDashboard";
import AdminTeacher from "./pages/adminPage/AdminTeacher";
import AdminStudents from "./pages/adminPage/AdminStudents";
import AdminNew from "./pages/adminPage/AdminNew";
import AdminProfile from "./pages/adminPage/AdminProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: "teachers", element: <AdminTeacher /> },
      { path: "students", element: <AdminStudents /> },
      { path: "news", element: <AdminNew /> },
      { path: "profile", element: <AdminProfile /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
