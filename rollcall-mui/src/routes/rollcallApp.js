import DashboardPage from "../containers/DashboardPage.js";
import AttendancePage from "../containers/AttendancePage/AttendancePage.js";
import StudentsPage from "../containers/StudentsPage.js";

import { Dashboard, Person, CheckCircle } from "material-ui-icons";

const rollCallAppRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    headerName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/attendance",
    sidebarName: "Attendance",
    headerName: "Attendance",
    icon: CheckCircle,
    component: AttendancePage
  },
  {
    path: "/students",
    sidebarName: "Students",
    headerName: "Students",
    icon: Person,
    component: StudentsPage
  },
  { redirect: true, path: "/", to: "/dashboard", headerName: "Redirect" }
];

export default rollCallAppRoutes;
