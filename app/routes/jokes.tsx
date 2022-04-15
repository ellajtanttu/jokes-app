import { Link, Outlet, useLoaderData } from "@remix-run/react";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

import type { Joke } from "@prisma/client";
import { db } from "~/utils/db.server";

import jokesStylesUrl from "~/styles/jokes.css";

type LoaderData = {
  jokes: Array<{ id: string; name: string }>;
}

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: jokesStylesUrl }];
};

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    jokes: await db.joke.findMany(),
  }
  return json(data)
}


export default function JokesRoute() {
  const data = useLoaderData<LoaderData>();
  return (
    <div>
      <h1>J🤪KES</h1>
      <main className="jokes-main">
        <div className="container">
          <div className="jokes-list">
            <Link to=".">Get a random joke</Link>
            <p>Here are a few more jokes to check out:</p>
            <ul>
              {data.jokes.map((joke) => (
                <li key={joke.id}>
                  <Link to={joke.id}>{joke.name}</Link>
                </li>
              ))}
            </ul>
            <Link to="new" className="button">
              Add your own
            </Link>
          </div>
          <div className="jokes-outlet">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}