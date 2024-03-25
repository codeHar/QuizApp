import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-white z-10 relative">
      <div className="container nav-container flex gap-3 justify-between items-center min-h-24">
        <Link to={"/"}>
          <h2 className="text-4xl font-semibold text-black text-primary">
            KBS
          </h2>
        </Link>
        <div className="menu ">
          <ul>
            <li>
              <Link to={"/my-collections"} className="text-primary">
                My Collections
              </Link>
            </li>
            <li>
              <Link to={"/stats"} className="text-primary">
                Stats
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
