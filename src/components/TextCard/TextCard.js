//
import { useState } from "react";
import s from "./style.module.css";
import { Trash as TrashIcon } from "react-bootstrap-icons";

export function TextCard({ title, subtitle, content, onClickTrash, onClick }) {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isTrashHovered, setIsTrashHovered] = useState(false);

  function onClickTrash_(e) {
    onClickTrash();
    e.stopPropagation(); //stops parent click
  }

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      style={{
        boxShadow: isCardHovered
          ? "0px 4px 15px rgba(0, 0, 255, 0.8)" // Blue shadow when hovered
          : "0px 2px 5px rgba(0, 0, 0, 0.1)", // Default subtle shadow
        transition: "box-shadow 0.2s ease-in-out", // Smooth transition
        borderRadius: "10px", // matches card's border-radius
      }}
    >
      <div className={`card ${s.container}`}>
        <div className={`card-body`}>
          <div className={s.title_row}>
            <h5 className={("card-title", s.title)}> {title} </h5>
            <TrashIcon
              onClick={onClickTrash_}
              size={20}
              onMouseEnter={() => setIsTrashHovered(true)}
              onMouseLeave={() => setIsTrashHovered(false)}
              className={s.trashCan}
              style={{
                color: isTrashHovered ? "#FF7373" : "#b8b8b8",
              }}
            />
          </div>

          <h6 className="card-subtitle mb-2 text-muted">{subtitle} </h6>
          <p className={`card-text ${s.text_content}`}> {content} </p>
        </div>
      </div>
    </div>
  );
}
