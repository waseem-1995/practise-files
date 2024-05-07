import React from "react";

const Form = ({
  title,
  setTitle,
  desc,
  setDesc,
  date,
  setDate,
  notes,
  setNotes,
}) => {
  const handler = (e) => {
    if (e.target.id === "T") {
      setTitle(e.target.value);
    } else if (e.target.id === "D") {
      setDesc(e.target.value);
    } else {
      setDate(e.target.value);
    }
    console.log(title, desc, date);
  };
  const notehandler = (e) => {
    e.preventDefault();
    if (title !== "" && desc !== "") {
      setNotes((note) => {
        return [
          ...note,
          {
            title: title,
            desc: desc,
            date: date,
            id: new Date().getTime(),
          },
        ];
      });
    }
    setTitle("");
    setDate("");
    setDesc("");
  };
  return (
    <>
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <form
              style={{
                border: "2px solid #ced4da",
                borderRadius: "10px",
                padding: "30px",
              }}
            >
              <div className="mb-3">
                <label for="T" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="T"
                  aria-describedby="emailHelp"
                  placeholder="Add a Title"
                  value={title}
                  onChange={handler}
                />
              </div>
              <div className="mb-3">
                <label for="D" className="form-label">
                  Description
                </label>
                <textarea
                  name="desc"
                  id="D"
                  rows="3"
                  className="form-control"
                  placeholder="Add a Description"
                  value={desc}
                  onChange={handler}
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label" for="date">
                  Add Date
                </label>
                <input
                  type="Date"
                  className="form-control"
                  id="date"
                  value={date}
                  onChange={handler}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={notehandler}
              >
                Add Notes
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
