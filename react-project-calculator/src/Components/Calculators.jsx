import React, { useState } from 'react'

const Calculators = () => {
    const [data, setData] = useState("");
    function getValue(e) {
        console.log(e.target.value);
        setData(data.concat(e.target.value))

    }
    function calculation() {
        setData(eval(data).toString())
    }
    function backbtn() {
        setData(data.slice(0, -1))
    }
    function AllClear() {
        setData("")

    }



    return (
        <>
            <div className="container">
                <div>
                    <input placeholder='0' value={data} />
                </div>
                <br />
                <button onClick={getValue} value="(">(</button>
                <button onClick={getValue} value=")">)</button>
                <button onClick={getValue} value="%">%</button>
                <button onClick={AllClear} >AC</button>

                <button onClick={getValue} value="7">7</button>
                <button onClick={getValue} value="8">8</button>
                <button onClick={getValue} value="9">9</button>
                <button onClick={getValue} value="*">*</button>

                <button onClick={getValue} value="4">4</button>
                <button onClick={getValue} value="5">5</button>
                <button onClick={getValue} value="6">6</button>
                <button onClick={getValue} value="-">-</button>

                <button onClick={getValue} value="1">1</button>
                <button onClick={getValue} value="2">2</button>
                <button onClick={getValue} value="3">3</button>
                <button onClick={getValue} value="+">+</button>

                <button onClick={getValue} value="0">0</button>
                <button onClick={backbtn} >Back</button>
                <button onClick={calculation} >=</button>
                <button onClick={getValue} value="/">/</button>

            </div>
        </>
    )
}

export default Calculators
