import DashboardPage from "../containers/DashboardPage.js";
import AttendancePage from "../containers/AttendancePage.js";
import StudentsPage from "../containers/StudentsPage.js";

import { Dashboard, Person, CheckCircle } from "material-ui-icons";

const rollCallAppRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/attendance",
    sidebarName: "Attendance",
    navbarName: "Attendance",
    icon: CheckCircle,
    component: AttendancePage
  },
  {
    path: "/students",
    sidebarName: "Students",
    navbarName: "Students",
    icon: Person,
    component: StudentsPage
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default rollCallAppRoutes;
