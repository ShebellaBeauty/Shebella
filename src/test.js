import { useState } from 'react'
import './test.css'



function Test() {
    // can use usestate to update stuff etc with btn click
    // const [largeFont, setLargeFont] = useState(false)
    const h1_style = {
        fontFamily: "Arial",
    }


    return (<div>
        <h1 
        className="test1"
        style={{
            fontFamily:"monospace",
        }}>
            CHANGES
        </h1>
    </div>)
}
export default Test