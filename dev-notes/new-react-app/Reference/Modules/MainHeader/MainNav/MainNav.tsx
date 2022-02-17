import { ReactElement } from "react";
import { Link } from "react-router-dom";

export default function MainNav(): ReactElement {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  );
}
