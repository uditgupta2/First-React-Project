import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState(" ");

  const handleUpClick = () => {
    console.log(" upper case wala button clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper Case", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const spaceHandleClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Spaces handled", "success");
  };

  return (
    <>
      <div className="container">
        <h1 className="m-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            rows="8"
            style={{
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
          ></textarea>
          <button className="btn btn-primary my-3" onClick={handleUpClick}>
            Convert to Upper Case
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>
            Convert to lower case
          </button>
          <button className="btn btn-primary" onClick={handleClearClick}>
            Clear text
          </button>
          <button className="btn btn-primary mx-2" onClick={spaceHandleClick}>
            Clear Extra Spaces
          </button>
        </div>
      </div>
      <div className="container my-2">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>Time taken to read {0.008 * text.split(" ").length} minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
