import {
  Link,
  Outlet,
  useLoaderData,
} from "react-router-dom";
import { getContacts } from "../contacts";

export async function loader({ request }: any) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts };
}

export default function Root() {
  const { contacts } = useLoaderData();
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"  
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`contacts/2PACX-1vRw4Y8-rAKlBgO4_KgfnHa4tV8I0xT-26c9Erf7zXKl-_G3nRjBTTzy5eDtOe32txP4-LfMMNNESSis`}>MVP</Link>
            </li>
            <li>
              <Link to={`contacts/2PACX-1vRbQsv2Jt8kx0VEDz8DODDHiSmMw_jRwXE3yksdgRoCUn-S0GQBuzyyttCj9h4m5vdQh2q0t7-ae_f4`}>Product Market Fit</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
