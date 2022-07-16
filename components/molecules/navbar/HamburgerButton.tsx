import cx from "classnames";

interface HumbergerButtonProps {
  onClick?: any;
  hamburgerActive?: boolean;
}

export default function HamburgerButton(props: Partial<HumbergerButtonProps>) {
  const { hamburgerActive, onClick } = props;

  const classname = cx({
    "block absolute right-4 lg:hidden": true,
    hamburgerActive,
  });
  return (
    <button
      id="hamburger"
      name="hamburger"
      type="button"
      className={classname}
      onClick={onClick}
    >
      <span className="hamburger-line origin-top-left transition duration-300 ease-in-out" />
      <span className="hamburger-line" />
      <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out" />
    </button>
  );
}
