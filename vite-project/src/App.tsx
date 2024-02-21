import { LandingPage } from "./pages/LandingPage";
import { Header } from "./components/Header";
import { IRoute } from "./interfaces";

function App() {
  const links: IRoute[] = [
    {
      id: 1,
      name: "Random beer",
      path: "/",
    },
    {
      id: 2,
      name: "Search Page",
      path: "/search",
    },
  ];
  return (
    <>
      <Header links={links} />
      <LandingPage />
    </>
  );
}
export default App;
