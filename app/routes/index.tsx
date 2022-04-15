import type { LinksFunction } from "@remix-run/node";
import { Link } from "react-router-dom";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function IndexRoute() {
  return (
    <div className="container">
      <div className="content">
        <p>Hello Index Route</p>
        <Link to="/jokes">See all jokes</Link>
      </div>
    </div>);

}