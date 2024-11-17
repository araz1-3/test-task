import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import GlobalStyle from "./styles/app.style";

function App() {
  return (
    <>
      <GlobalStyle key="style" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
