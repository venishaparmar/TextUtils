import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText); 
    props.showAlert("Converted to UpperCase!","success")  
  }
  const handleLoClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!","success")    
  }
  const handleClearClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = ' ';
    setText(newText);   
    props.showAlert("Text Cleared !","success") 
  }
  
  const handleOnChange = (event) => {
    console.log("On Changed");
    setText(event.target.value);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text); 
    props.showAlert("Copied to Clipboard!", "success");
}

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra spaces removed!", "success");
}

  const [text, setText] = useState('');
  // text = "Hello"; // wrong way to change the text
  // setText("Hello"); // correct way to change the text
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
          <h3>{props.heading}</h3>
          <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'rgb(70 87 100)':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="10"></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to UpperCase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button> 
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>   
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} charaters </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
    </>
  )
}
