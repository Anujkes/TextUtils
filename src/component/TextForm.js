import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    let newText =text.toUpperCase();
    setText(newText);

  }

  const handleLowerClick=()=>{
    let newText =text.toLowerCase();
    setText(newText);

  }
  const handleOnChange=(event)=>{

    setText(event.target.value);


  }
  const handleClearClick=(event)=>{

    setText('');


  }

  const handleCopyClick=()=>{

   let str= document.getElementById("myBox");
    str.select();
    navigator.clipboard.writeText(str.value);
  }

  const handleExtraSpacesClick=()=>{

    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));

  }

   



  const [text,setText]=useState('');
  return (
    <>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}} >
          <h1  >{props.heading}</h1>
          <div className="mb-3"   >
          <textarea className='form-control' value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='light'?'black':'white'}} id="myBox" row="40"></textarea>
          </div>
          <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
          <button className='btn btn-primary mx-2' onClick={handleLowerClick}>Convert to LowerCase</button>
          <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear</button>
          <button className='btn btn-primary mx-2' onClick={handleCopyClick}>Copy Text</button>
          <button className='btn btn-primary mx-2' onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>


    </div>

    <div className="container my-4" style={{color: props.mode==='light'?'black':'white'}} >
      <h2>Your text summary</h2>
      <p>{text.split(" ").length-1} words and {text.length} chareacters</p>
      <p>{(text.split(" ").length-1)*0.008} Minutes read</p>
      <h2>Preview </h2>
      <p >{text}</p>
    </div>
    </>
  )
}

