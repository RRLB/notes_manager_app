//
import "./index.css";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "store";
// import { store } from "./store";
import { App } from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import { NoteBrowse } from "./pages/NoteBrowse/NoteBrowse";
import { Note } from "./pages/Note/Note";
import { NoteCreate } from "./pages/NoteCreate/NoteCreate";
import { NoteUpdate } from "./pages/NoteUpdate/NoteUpdate";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<NoteBrowse />} />
            <Route path="/note/:id" element={<Note />} />
            <Route path="/note/new" element={<NoteCreate />} />
            <Route path="/note/update/:id" element={<NoteUpdate />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
