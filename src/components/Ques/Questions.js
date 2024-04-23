import React, { useState } from "react";
import "./Questions.scss";
import {AiOutlineCaretDown,AiOutlineCaretUp} from 'react-icons/ai'

function Questions({ques,ans}) {
    const [isOpen ,setOpen] = useState(false);
  return (
    <div className="Questions container center">
      <div className="title-box center" onClick={()=> setOpen(!isOpen)}>
        <h3 className="question">{ques}</h3>
        <div className="icon-box">
        {isOpen?<AiOutlineCaretUp className="icon"/>: <AiOutlineCaretDown className="icon"/>}
        </div>
      </div>
      { isOpen && <div className="answer-box">
        <p className="content">
        {ans}
        </p>
      </div>}
    </div>
  );
}

export default Questions;
