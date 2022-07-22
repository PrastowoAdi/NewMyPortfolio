/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-tag-spacing */
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Brand from "./Brand";
import HamburgerButton from "./HamburgerButton";
import NavItem from "./NavItem";

interface NavbarProps {
  activeNav: string;
}
export default function Navbar(props: NavbarProps) {
  const { activeNav } = props;
  const [hiddenNav, setHiddenNav] = useState(true);

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          className="bg-transparent text-yellow-500 flex"
          onClick={() => setTheme("light")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>{" "}
        </button>
      );
    }
    return (
      <button
        className="bg-transparent text-yellow-500 flex"
        onClick={() => setTheme("dark")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>
    );
  };

  const classname = classNames({
    "bg-white dark:bg-neutral-900 bg-opacity-70 backdrop-blur-sm absolute py-5 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:dark:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none lg:backdrop-blur-none dark:bg-opacity-70":
      true,
    hidden: hiddenNav,
  });
  return (
    <header className="absolute left-0 w-full flex items-center z-10 bg-transparent">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <Brand />
          <div className="flex items-center px-4">
            {hiddenNav ? (
              <HamburgerButton onClick={() => setHiddenNav(false)} />
            ) : (
              <HamburgerButton
                hamburgerActive
                onClick={() => setHiddenNav(true)}
              />
            )}
            <nav id="nav-menu" className={classname}>
              <ul className="block lg:flex">
                <NavItem
                  href="/"
                  title="Beranda"
                  active={activeNav === "Beranda"}
                />
                <NavItem
                  href="/skill"
                  title="Skills"
                  active={activeNav === "Skill"}
                />
                <NavItem
                  href="/academy"
                  title="Academy"
                  active={activeNav === "Academy"}
                />
                <li className="ml-4 mt-3 lg:ml-5 lg:mt-1">
                  {renderThemeChanger()}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
