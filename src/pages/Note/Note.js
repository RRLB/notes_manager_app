import { useNavigate, useParams } from "react-router-dom";
import s from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { NoteForm } from "components/NoteForms/NoteForm";
import { useState } from "react";
import { NoteAPI } from "api/note";
import { deleteNote, updateNote } from "store/note/note-slice";

export function Note(props) {
  const [isEditable, setIsEditable] = useState(false);
  const dispatch = useDispatch();
  const { noteId } = useParams();
  //to return key/value pais :
  //can then return value by doing searchParams.get("key")
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();
  //UseSelector finds in the store the path set as NOTE that we created
  //find works like some but returns value matched, we itterate through notes, so for each note we look at id
  //and return the value thaat matches the noteId that we pass in
  const note = useSelector((store) =>
    store.NOTE.noteList.find((note) => note.id == noteId)
  );
  // console.log("**id**", note.id);
  async function submit(formValues) {
    const updatedNote = await NoteAPI.updatePatch({
      ...formValues,
      id: note.id,
      // id: note.id,
    });
    dispatch(updateNote(updatedNote));
    setIsEditable(false);
  }

  function deleteNote_(note) {
    if (window.confirm("Delete note?")) {
      NoteAPI.deleteById(note.id);
      dispatch(deleteNote(note));
      navigate("/");
    }
  }

  return (
    <div>
      {note && (
        <NoteForm
          isEditable={isEditable}
          title={isEditable ? "Edit note" : note.title}
          note={note}
          onClickEdit={() => setIsEditable(!isEditable)}
          onClickTrash={() => deleteNote_(note)}
          onSubmit={isEditable && submit}
        />
      )}
    </div>
  );
}
