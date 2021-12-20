import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Upper case was Clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  };

  const handleTitleClick = () => {
    let newText =
      text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
    setText(newText);
    props.showAlert("Converted to title!","success");
  };

  const handleDownloadClick = () => {
    const newText = document.createElement("a");
    const file = new Blob([document.getElementById("myBox").value], {
      type: "text/plain; charset=utf-8",
    });
    newText.href = URL.createObjectURL(file);
    newText.download = "NewDocumnet.txt";
    document.body.appendChild(newText);
    newText.click();
    props.showAlert("Downloaded Text!","success");
  };

  const handleCopy = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Copied to clipboard!","success");
  };

  const handleExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!","success");
  }

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!","success");
  };


  const handleOnChange = (event) => {
    //console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //   text ="new text"; // wrong way to change the state
  // setText("new text"); // correct way to change th estate
  return (
    <>
      <div className="container" style={{color:props.mode ==='dark'?'white':'#094866'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white', color:props.mode ==='dark'?'white':'#094866'}} id="myBox" rows="8"></textarea>
            </div>

            <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to Upper Case</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}> Convert to Lower Case</button>
            <button className="btn btn-primary mx-2" onClick={handleTitleClick}>Title Text</button>
            <button className="btn btn-primary mx-2" onClick={handleDownloadClick}> Download Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2 my-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
         </div>

          <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#094866'}}>
              <h2>Your Text Summery</h2>
              <p>{text.split(" ").length} words and {text.length} charcter</p>
              <p>{0.008 * text.split(" ").length} Minute read</p>
              <h2>Preview</h2>
              <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
          </div>
    </>
  );
}
