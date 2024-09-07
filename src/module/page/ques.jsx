import React, { useState } from "react";
console.log("hi");
// import Triger from "../components/triger";

import QuestionAndAns from "../components/quesAndAns"
import SingleQuestion from "../components/singleQuestion";
console.log("QuesAnd answer : ",QuestionAndAns)

export default function Ques (){
    const data = QuestionAndAns();
    console.log("data : ",data)
    // function Triger (){
    //     console.log( "i am called");
    //     setMyShow(!show);
    // }
    console.log("i am question adding");
    return (
           
          <div className="container"> 
          <h3>Five famous Interview Question</h3> 
          <div>{
            data.map((ques)=>{
                console.log(`Ques ${ques.id}`, ques);
            return ( <SingleQuestion key={ques.id} {...ques} />)
            })
          }
          </div>
        </div>
    )
}