import classNames from "classnames";

interface BtnReadMoreProps {
  disabledBtn?: boolean;
  onClick?: any;
}
export default function BtnReadMore(props: Partial<BtnReadMoreProps>) {
  const { disabledBtn, onClick } = props;
  const classname = classNames({
    "w-30 bg-primary p-2 text-white font-semibold text-sm rounded-sm shadow-md hover:brightness-105 hover:shadow-lg transition duration-500 dark:bg-customyel dark:text-neutral-800":
      true,
    "disabled:bg-slate-400 disabled:text-slate-200 cursor-not-allowed":
      disabledBtn,
  });
  return (
    <button
      type="button"
      className={classname}
      disabled={disabledBtn}
      onClick={onClick}
    >
      Read More
    </button>
  );
}
