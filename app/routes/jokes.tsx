import { Outlet } from "@remix-run/react";

import jokesStylesUrl from "~/styles/jokes.css";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: jokesStylesUrl }];
};

export default function JokesRoute() {
  return (
    <div>
      <h1>J🤪KES</h1>
      <main>
        <Outlet />
      </main>
    </div>
  )
}