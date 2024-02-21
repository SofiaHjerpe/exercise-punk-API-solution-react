import { IRoute } from "../interfaces";

interface IHeaderProps {
    links: IRoute[]
}
export function Header(props: IHeaderProps): JSX.Element {
  
  return (
    <header className="header">
      <h1>Welcome to punk api</h1>
      <nav className="navbar">
        {props.links.map((link) => (
          <a key={link.id} className="link" href={link.path}>
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
