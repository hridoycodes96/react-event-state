import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0);
    const handleIncease = ()=>{
        setCount(count + 1)
    }

    return(
        <div>
            <h2>Counter</h2>
            <p>Cunter value:{count}</p>
            <button onClick={handleIncease}>Increase</button>

        </div>
    )
}