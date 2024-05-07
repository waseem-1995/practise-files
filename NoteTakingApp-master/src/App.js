import React, { useState } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import "./App.css";

export default function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState(getLSData);
  localStorage.setItem("notes", JSON.stringify(notes));
  console.log(notes);
  return (
    <>
      <Navbar />
      <Form
        title={title}
        setTitle={setTitle}
        desc={desc}
        setDesc={setDesc}
        date={date}
        setDate={setDate}
        notes={notes}
        setNotes={setNotes}
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h1 className="mb-3">My Notes</h1>
            {notes.length === 0 ? (
              <div className="card mb-3">
                <div className="card-body">
                  <p className="p1" >No Notes Are Added</p>
                </div>
              </div>
            ) : (
              notes.map((el) => {
                return <Notes el={el} key={el.id} notes={notes} setNotes={setNotes}/>;
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
  function getLSData() {
    const note = JSON.parse(localStorage.getItem("notes"));
    if (note) {
      return note;
    } else {
      return [];
    }
  }
}
