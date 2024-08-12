import { NoteForm } from "components/NoteForms/NoteForm";
import s from "./style.module.css";
import { NoteAPI } from "api/note";
import { useDispatch } from "react-redux";
import { addNote } from "store/note/note-slice";
import { useNavigate } from "react-router-dom";

export function NoteCreate(props) {
  //call action
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async function createNote(formValues) {
    const createNote = await NoteAPI.create({
      ...formValues,
      created_at: new Date().toLocaleDateString(),
    });
    //dispatch response
    dispatch(addNote(createNote));
    alert("This note has been created");
    navigate("/");
  };

  return (
    <div>
      <div>
        <NoteForm title="New Note" onSubmit={submit} />
      </div>
    </div>
  );
}
