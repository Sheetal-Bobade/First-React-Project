import {React, memo} from "react";

function ChildA({Learning, count1}){
return(
 console.log("child component")
)
}

export default memo(ChildA);