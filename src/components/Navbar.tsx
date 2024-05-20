import { Nav } from "../types/Nav";

const Navbar = () => {
  const nav: Nav[] = [
    {
      label: "India Game",
    },
    {
      label: "Entry Game",
    },
    {
      label: "Community",
    },
  ];

  return (
    <>
      <ul className="nav">
        {/* <button className="btn btn-outline-light">ABC</button> */}
        {nav.map((item, index) => (
          <li className="nav-item" key={index}>
            <a
              className="nav-link ml-2 text-decoration-none text-white"
              href="#"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
