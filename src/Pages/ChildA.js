import {memo} from "react";

function ChildA({Learning}){
return(
 console.log("child component")
)
}

export default memo(ChildA);