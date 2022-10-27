import React from "react"

export default function Box(props) {

    const styles = {
        backgroundColor: props.on ? "#15667a" : "#9bc3cf",
        boxSizing: "border-box",
        height: "200px",
        width: "200px",
        border: "1px solid black",
        display: "inline-block",
        marginRight: "15px",
        borderRadius: "20px",
        borderColor: "white"
    }
    
    const textstyles = {
        display: "inline-block",
        marginLeft: "10px",
        fontFamily: "Georgia",
        marginRight: "5px",
        color: "white"
    }

    return (
        <div 
            style={styles} 
            className="box"
            onClick={()=>props.toggle(props.id)}
        >
        <p style={textstyles}>
        {props.display}
        </p>
        </div>
    )
}