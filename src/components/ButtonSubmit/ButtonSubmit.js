//
import s from "./style.module.css";

export function ButtonSubmit({ children, onClick, isDisabled }) {
  return (
    <div>
      <button
        disabled={isDisabled}
        onClick={onClick}
        type="button"
        className={`btn btn-secondary ${s.button}`}
      >
        {children}
      </button>
    </div>
  );
}
