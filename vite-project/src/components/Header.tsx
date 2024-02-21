interface IRoute {
  id: number;
  name: string;
  path: string;
}
export function Header(): JSX.Element {
  const routes: IRoute[] = [
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
    <header className="header">
      <h1>Welcome to punk api</h1>
      <nav className="navbar">
        {routes.map((route) => (
          <a className="link" href={route.path}>
            {route.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
