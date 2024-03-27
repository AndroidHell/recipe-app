import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          {" "}
          <Link to="/Lasagna"> Lasagna </Link>
        </li>
        <li>
          {" "}
          <Link to="/ItalianChickenSoup"> Italian Chicken Soup </Link>
        </li>
        <li>
          {" "}
          <Link to="/PastaWithPeas"> Pasta With Peas</Link>
        </li>
      </ul>
    </div>
  );
};
