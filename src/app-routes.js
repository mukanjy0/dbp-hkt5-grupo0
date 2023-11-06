import { HomePage, GroupsPage, GroupTypesPage, PersonsPage } from "./pages";
import { withNavigationWatcher } from "./contexts/navigation";

const routes = [
  {
    path: "/home",
    element: HomePage,
  },
  {
    path: "/groups",
    element: GroupsPage,
  },
  {
    path: "/persons",
    element: PersonsPage,
  },
  {
    path: "/grouptypes",
    element: GroupTypesPage,
  },
];

export default routes.map((route) => {
  return {
    ...route,
    element: withNavigationWatcher(route.element, route.path),
  };
});
