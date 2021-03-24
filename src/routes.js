/*!

=========================================================
* Now UI Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Informer from "views/Informer.jsx";
import Chateaus from "views/Chateaus.jsx";
import Listings from "views/Listings.jsx";
import Dashboard from "views/Dashboard.jsx";
import Orderlist from "views/Orderlist";
import Notifications from "views/Notifications.jsx";
import Icons from "views/Icons.jsx";
import Typography from "views/Typography.jsx";
import TableList from "views/TableList.jsx";
import Maps from "views/Maps.jsx";
import Upgrade from "views/Upgrade.jsx";
import UserPage from "views/UserPage.jsx";

var dashRoutes = [
  {
    path: "/informer",
    name: "Informer",
    icon: "media-2_sound-wave",
    component: Informer,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Depot",
    icon: "business_chart-bar-32",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/listings",
    name: "Weinangebot",
    icon: "shopping_box",
    component: Listings,
    layout: "/admin"
  },
  {
    path: "/all-chateaus/",
    name: "Châteaus",
    icon: "business_bank",
    component: Chateaus,
    layout: "/admin"
  },
  {
    path: "/orderlist",
    name: "Orderliste",
    icon: "education_agenda-bookmark",
    component: Orderlist,
    layout: "/admin"
  },
  // {
  //   path: "/extended-tables",
  //   name: "Meine Dokumente",
  //   icon: "files_paper",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/informer",
  //   name: "Sortiment",
  //   icon: "design_app",
  //   component: Informer,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "design_image",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "location_map-big",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "ui-1_bell-53",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user-page",
  //   name: "User Profile",
  //   icon: "users_single-02",
  //   component: UserPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "design-2_ruler-pencil",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "objects_spaceship",
  //   component: Upgrade,
  //   layout: "/admin"
  // }
];
export default dashRoutes;
