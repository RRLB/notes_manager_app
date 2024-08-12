import { ButtonSubmit } from "components/ButtonSubmit/ButtonSubmit";
import s from "./style.module.css";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import { useState } from "react";
import { ValidatorService } from "services/formValidate";
import { FieldError } from "components/FieldError/FieldError";

const VALIDATORS = {
  title: (value) => {
    return ValidatorService.min(value, 3) || ValidatorService.max(value, 20);
  },
  content: (value) => {
    return ValidatorService.min(value, 3);
  },
};

export function NoteForm({ title, onClickEdit, onClickTrash, onSubmit }) {
  const [formValues, setFormValues] = useState({ title: "", content: "" });
  const [formErrors, setFormErrors] = useState({
    title: true,
    content: true,
  });

  function updateFormValuese(e) {
    //set form values to previous values with spread operator,
    //access the values being passed through the key [e.target.name]
    //key : value pair => [e.target.name]: e.target.value
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({ ...formValues, [name]: value });
    validate(name, value);
  }

  function validate(fieldName, fieldValue) {
    setFormErrors({
      ...formErrors,
      [fieldName]: VALIDATORS[fieldName](fieldValue),
    });
  }

  function hasError() {
    for (const fieldName in formErrors) {
      if (formErrors[fieldName]) {
        return true;
      }
    }
    return false;
    // return Object.values(formErrors).some((error) => error !== undefined);
  }

  const actionIcons = (
    <>
      <div className={`col-1 `}>
        {
          /*if onClickEdit is present */ onClickEdit && (
            <PencilFill onClick={onClickEdit} className={`${s.edit}`} />
          )
        }
      </div>
      <div className={`col-1`}>
        {
          /*if onClickTrash is present */ onClickTrash && (
            <TrashFill onClick={onClickTrash} className={` ${s.trash}`} />
          )
        }
      </div>
    </>
  );

  const titleInput = (
    <div className="mb-5">
      <label className="from-label">Title</label>
      <input
        onChange={updateFormValuese}
        type="text"
        className="form-control"
        name="title"
      />
      <FieldError msg={formErrors.title} />
    </div>
  );

  const contentInput = (
    <div className="mb-5">
      <label className="from-label">Content</label>
      <textarea
        onChange={updateFormValuese}
        type="text"
        className="form-control"
        name="content"
        row="5"
      />
      <FieldError msg={formErrors.content} />
    </div>
  );

  const submitButton = (
    <div className={s.submit_button}>
      <ButtonSubmit
        isDisabled={hasError()}
        onClick={() => onSubmit(formValues)}
      >
        Submit
      </ButtonSubmit>
    </div>
  );

  return (
    <form className={s.container}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className="mb-3">{title}</h2>
        </div>
        {actionIcons}
      </div>
      <div className={s.titleInput}> {titleInput}</div>
      <div className={s.contentInput}>{contentInput}</div>
      {onSubmit && submitButton}
    </form>
  );
}
