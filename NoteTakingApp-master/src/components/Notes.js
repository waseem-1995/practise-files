import React from "react";

const Notes = ({ el, notes, setNotes }) => {
  const removeHandler = (id) => {
    const newNotes = notes.filter((e) => {
      if (e.id !== id) {
        return e;
      }
    });
    setNotes(newNotes);
  };
  return (
    <div className="cont" style={{display:"inline-block",marginLeft:"10px"}}>
      <div className="card mb-3" style={{width : "250px",display:"flex"}}>
        <div
          className="card-body"
          style={{ color: "green" }}
        >
          <h5 className="card-title">{el.title}</h5>
          <p className="card-text">{el.desc}</p>
          <p style={{display:"inline-block"}}>{el.date}</p>
          <button
            className="btn btn-danger mx-2" style={{marginLeft : "20px"}}
            onClick={() => {
              removeHandler(el.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notes;
