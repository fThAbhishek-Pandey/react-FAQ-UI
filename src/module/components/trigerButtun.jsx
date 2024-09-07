import { FaBookOpen,FaRegWindowClose } from "react-icons/fa";
export default function TrigerBtn(flag){
    console.log("flag", typeof flag)
    console.log(flag);
   return (
    <>
     {flag.show ? <FaRegWindowClose/>: <FaBookOpen />}
     {/* condition redering */}

    </>
   )
}