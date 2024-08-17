import React , {useState} from 'react';



// setText("Enter The Text According To You"); //currect way
export default function TextForm(props) {
const onclickUphandle = () => {
      let newText = text.toUpperCase();
    setText(newText);
}
const onclickLohandle = () => {
      let newText = text.toLowerCase();
    setText(newText);
}
const onclickclearhandle = () => {
      let newText = '';
    setText(newText);
}

const speak = () => {
    let mgs = new SpeechSynthesisUtterance();
    mgs.text = text;
    window.speechSynthesis.speak(mgs);
}

const onchangehandle = (event) => {
    // console.log("change");
    setText(event.target.value);
    // console.log(event)
}
let cssprop ={
    color: "black",
    border: "1px solid black",
    padding: "2px"
}

const [mystyle , setmystyle] = useState({
  color:"black",
  backgroundcolor:"white"
}) 

    const [text , setText] = useState(""); //ish text ko badlne ke liye setText se badla jayega
  return (
    <div className='textform' style={mystyle}>
        <h1 className='title' style={mystyle}>{props.title}</h1>
       <textarea type="text" style={mystyle} className='inp' onChange={onchangehandle} value={text}/>
       <div className="btn-container" style={mystyle}>
       <button onClick={onclickUphandle}>UpperCase</button>
       <button onClick={onclickLohandle}>LowerCase</button>
       <button onClick={speak}>Speak</button>
       <button onClick={onclickclearhandle}>Clear</button>
       </div>

       <div>
        <h1 className='count-heading' style={mystyle}>Text Your Summery</h1>
        <p className='count-word' style={mystyle}><b>{text.split(" ").length}</b> Words and <b>{text.length}</b> charecters</p>
        <p className='count-word' style={mystyle}><b>{0.008 * text.split(" ").length}</b> Minute Read</p>
       </div>

       <div className="preview">
        <h3 style={mystyle}>Preview</h3>
        <div><p style={cssprop}>{text}</p></div>
       </div>
    </div>
  )
}
