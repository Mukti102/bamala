import { DarkThemeToggle, Navbar } from "flowbite-react";
import { ModeToggle } from "./ui/ToggleDarkMode";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import Logo from "../../public/logo.jpeg";

export default function Header() {
  const linksMenu = [
    { name: "Beranda", link: "/", isScroll: true },
    { name: "Layanan", link: "layanan", isScroll: true },
    { name: "Projects", link: "/projects", isScroll: false },
    { name: "Blog", link: "/blog", isScroll: false },
    { name: "Tentang Kami", link: "/about", isScroll: false },
  ];

  return (
    <Navbar
      fluid
      rounded
      className="bg-background w-full top-0 z-40  items-center"
    >
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          <div className="dark:hidden">
            <img
              src={Logo}
              alt=""
              className="sm:w-32 w-20 mix-blend-multiply"
            />
          </div>
          <div className="hidden dark:block">BAMALA</div>
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {linksMenu.map((link, index) =>
          link.isScroll ? (
            <Navbar.Link key={index}>
              <Link
                to={link.link}
                smooth={true}
                duration={500}
                className="cursor-pointer border-none text-foreground text-lg"
              >
                {link.name}
              </Link>
            </Navbar.Link>
          ) : (
            <Navbar.Link key={index}>
              <NavLink
                to={link.link}
                className="text-foreground border-none text-lg"
              >
                {link.name}
              </NavLink>
            </Navbar.Link>
          )
        )}
        <div className="block m-2 sm:hidden">
          <ModeToggle />
        </div>
      </Navbar.Collapse>
      <div className="sm:block  hidden">
        <ModeToggle />
      </div>
    </Navbar>
  );
}
