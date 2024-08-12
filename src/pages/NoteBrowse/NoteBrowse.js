import { TextCard } from "components/TextCard/TextCard";
import s from "./style.module.css";
import { NoteList } from "containers/NoteList/NoteList";

export function NoteBrowse(props) {
  const toUpperCase = (str) => {
    return str.toUpperCase();
  };

  return (
    <div>
      <NoteList />
    </div>
  );
}
