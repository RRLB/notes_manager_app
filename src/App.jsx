import { Outlet } from "react-router-dom";
import s from "./style.module.css";
import { Header } from "./components/Header/Header";
import { useEffect } from "react";
import { NoteAPI } from "../src/api/note";
import { useDispatch } from "react-redux";
import { setNoteList } from "store/note/note-slice";
// import { setNoteList } from "";

export function App() {
  const dispatch = useDispatch();

  async function fetchAllNotes() {
    try {
      const noteList = await NoteAPI.fetchAll();
      dispatch(setNoteList(noteList));
    } catch (error) {
      console.error("Failed to fetch notes:", error);
    }
  }

  useEffect(() => {
    fetchAllNotes();
  }, []);

  return (
    <div className="container-fluid">
      <Header />
      <div className={s.OutletContainer}>
        <Outlet />
      </div>
    </div>
  );
}
