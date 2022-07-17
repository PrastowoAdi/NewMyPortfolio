/* eslint-disable react/jsx-tag-spacing */
import classNames from "classnames";
import { useState } from "react";
import Brand from "./Brand";
import HamburgerButton from "./HamburgerButton";
import NavItem from "./NavItem";

interface NavbarProps {
  activeNav: string;
}
export default function Navbar(props: NavbarProps) {
  const { activeNav } = props;
  const [hiddenNav, setHiddenNav] = useState(true);
  const classname = classNames({
    "bg-white bg-opacity-70 backdrop-blur-sm absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none lg:backdrop-blur-none":
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
                <li className="flex items-center pl-8 mt-3 lg:mt-0">
                  <div className="flex">
                    <span className="mr-2 text-sm text-slate-500">light</span>
                    <input
                      type="checkbox"
                      className="hidden"
                      id="dark-toggle"
                    />
                    <label htmlFor="dark-toggle">
                      <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                        <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out" />
                      </div>
                    </label>
                    <span className="ml-2 text-sm text-slate-500">dark</span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
