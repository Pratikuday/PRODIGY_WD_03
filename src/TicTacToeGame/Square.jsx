import React from "react";

const Square = (props) =>{
    return(
        <div 
        onClick={props.onClick}
        style={{border: "1.5px solid",
            height: "150px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontsize:"100px",
            
        }}
        className="square">
          <h5>{props.value}</h5>
        </div>
    );
};

export default Square;
