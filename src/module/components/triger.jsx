import { useState } from "react";

export default function Triger (show){
      const [myShow, setMyShow] = useState(show);
      setMyShow(!show);
      return myShow;
}