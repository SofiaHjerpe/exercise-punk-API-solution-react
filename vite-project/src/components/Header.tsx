import { NavLink } from "react-router-dom";
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
          <NavLink key={link.id} className="link" to={link.path}>
            {link.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
