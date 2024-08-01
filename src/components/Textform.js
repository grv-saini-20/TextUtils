import React from 'react'
import { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () =>{
        // console.log("button is clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = () =>{
        // console.log("button is clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }
    const clearText = () =>{
        // console.log("button is clicked" + text);
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    const handleOnChange = (event) =>{
        // console.log("change");
        setText(event.target.value);
    }
    const copyTxt = () =>{
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied To Clipboard", "success");
    }
    const [text,setText] = useState("Enter text here");
    //text = "new text"; //wrong way to change the state
    //setText("new text"); //right way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==="dark"? "white":"black"}}>
            <h1 className='mb-3'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange = {handleOnChange} style = {{backgroundColor: props.mode==="#877844" ? "white":"black", color: props.mode==="#877844" ? "black":"white"}} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 mb-3" disabled={text.length === 0} onClick={handleUpClick}>convert to uppercase</button>
            <button className="btn btn-primary mx-2 mb-3" disabled={text.length === 0} onClick={handleLoClick}>convert to lowercase</button>
            <button className="btn btn-primary mx-2 mb-3" disabled={text.length === 0} onClick={clearText}>clear</button>
            <button className="btn btn-primary mx-2 mb-3" disabled={text.length === 0} onClick={copyTxt}>copy text</button>
        </div>
        <div className="container" style={{color: props.mode==="dark"? "white":"black"}}>
        <h2 className="my-2">Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
        <h2>Time to read</h2>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"nothing to preview!"}</p>
        </div>
        </>
    )
}
