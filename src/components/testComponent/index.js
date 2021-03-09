import React from "react"
export default function Test(props){
    console.log(props,"props")
    const {loginInfo,onAdd}=props
    return (
        <div>
            this is test page 
            {loginInfo}
            <button onClick={onAdd}>
                增加
            </button>
        </div>
    )
}