import DashboardPage from "../containers/DashboardPage.js";
import AttendancePage from "../containers/AttendancePage/AttendancePage.js";
import StudentsPage from "../containers/StudentsPage/StudentsPage.js";
import GeoPage from "../containers/GeoPage/GeoPage.js";

import { Dashboard, Person, CheckCircle, Map } from "material-ui-icons";

const centralAreaRoutes = [
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
  {
    path: "/geo",
    sidebarName: "Map",
    headerName: "Geo-location",
    icon: Map,
    component: GeoPage
  },
  {
    path: "/student/{id}",
    component: StudentsPage
  }
];

export default centralAreaRoutes;
