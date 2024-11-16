import Main from "layout/Main";
import NotFound from "pages/NotFound";
import UserForm from "pages/userForm";
import UserTable from "pages/userTable";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <UserForm />,
      },
      {
        index: true,
        element: <UserTable />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  
]);

export default router;
