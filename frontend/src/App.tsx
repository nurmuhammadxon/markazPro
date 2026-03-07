import { useRoutes } from "react-router-dom"

import Layout from "./components/layouts/layout"
import LoginPage from "./pages/Login/login-page"
import DashboardPage from "./pages/Dashboard/dashboard-page"
import StudentsPage from "./pages/Students/students-page"

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      element: <Layout />,
      children: [
        {
          path: "/dashboard",
          element: <DashboardPage />,
        },
        {
          path: "/students",
          element: <StudentsPage />,
        },
      ],
    },
  ])

  return routes
}

export default App