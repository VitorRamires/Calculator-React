
import React from 'react';
import Calculator from './containers/calculator.js'

 function App(){
    return(
        <div className="screen">
        <div className="divSuperiorGrid"/>
            <Calculator />
        <div className="divInferiorGrid"/>
        </div>
    )
}

export default App