import { useRoutes } from "react-router-dom"

import Layout from "./components/layouts/layout"
import LoginPage from "./pages/Login/login-page"
import DashboardPage from "./pages/Dashboard/dashboard-page"
import StudentsPage from "./pages/Students/students-page"
import TeachersPage from "./pages/Teachers/teachers-page"
import GroupsPage from "./pages/Groups/groups-page"
import SettingsPage from "./pages/Settings/settings-page"
import FinancePage from "./pages/Finance/finance-page"
import ReportsPage from "./pages/Reports/reports-page"

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
        {
          path: "/teachers",
          element: <TeachersPage />
        },
        {
          path: "/groups",
          element: <GroupsPage />
        },
        {
          path: "/settings",
          element: <SettingsPage />
        },
        {
          path: "/finance",
          element: <FinancePage />
        },
        {
          path: "/reports",
          element: <ReportsPage />
        }
      ],
    },
  ])

  return routes
}

export default App