import { useState } from "react";
import TrigerBtn from "./trigerButtun";
export default function SingleQuestion(data) {
        const  ques = data.question;
        console.log("ans : ",data.ans);
        console.log("question : ",data.question);
        const ans = data.ans;
        console.log("i am in single question",ques, ans);
        const [show, setShow] = useState(0);
  return (
    <>
          <div className="question">
            {ques}
            <button
              className="btn"
              onClick={() => {
                console.log("i am triger button");
                return setShow(!show);
              }}
            >
              <TrigerBtn show={show} />
            </button>
          </div>
          <div className={show ? "show" : "hide"}>{ans}</div>
    </>
  );
}
