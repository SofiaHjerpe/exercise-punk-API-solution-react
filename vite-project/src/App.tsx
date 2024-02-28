import { LandingPage } from "./pages/LandingPage";

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";import RootLayout from "./components/RootLayout";
import SearchPage from "./pages/SearchPage";


function App() {
  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
      </Route>
    )
  );
  return (
    <>

      <RouterProvider router={router} />
    </>
  );
}
export default App;
