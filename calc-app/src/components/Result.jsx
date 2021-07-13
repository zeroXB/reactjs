import React from 'react';


const Result = ({value}) => {
   //debugger
    console.log("Renderizacion del Result : ", value)
    return ( 
        <div className="result">
            {value}
        </div>
    );
}

export default Result;
