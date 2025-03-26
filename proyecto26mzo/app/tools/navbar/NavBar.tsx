import { Props } from "../active-link/ActiveLink";

export const NavBar = () => {
  const navItems: Props[] = [
    {
      path: "./about",
      text: "About",
    },
    {
      path: "./product",
      text: "Product",
    },
  ];

  return (
    <nav className="flex  bg-amber-700 bg-opacity-30 p-2 m-3 rounded h-16">
      {navItems.map((item) => (
        <a
          className="p-2 text-white hover:border-b-2 font-bold hover:opacity-50"
          key={item.path}
          href={item.path}
        >
          {item.text}
        </a>
      ))}
    </nav>
  );
};
