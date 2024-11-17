import Main from "layout/Main";
import NotFound from "pages/NotFound";
import UserForm from "pages/userForm";
import UserTable from "pages/userTable";
import { createBrowserRouter } from "react-router-dom";
import EditFrom from "src/pages/userForm/EditForm";
import Paths from "./Path";
import Chart from "src/pages/Chart";

const router = createBrowserRouter([
  {
    path: Paths.HOME,
    element: <Main />,
    children: [
      {
        index: true,
        element: <UserForm />,
      },
      {
        path: Paths.TABLE,
        element: <UserTable />,
      },
      {
        path: Paths.EDIT,
        element: <EditFrom />,
      },
      {
        path: Paths.CHART,
        element: <Chart />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
