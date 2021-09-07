import React,{useState} from 'react';
import Swal from 'sweetalert2';
import './Payment.css'


const Payment = (props) => {
    const [result, setResult] = useState('')
    const [clear, setClear] = useState('')
    const [password, setPassword] = useState(false)
    const [formErrors, setFormError] = useState({})

    const errors ={}


    const handleClick = (e) => {
        setResult(result.concat(e.target.name))
    }


    const handleChange = (e) => { 
        setResult(e.target.value)
        setResult(password)
        setResult(result)
    }

    const handleShow = (e) => {
        e.preventDefault()
        setPassword(!password)
        alert(result)
    }
    
    const handleClear = (e) => {
        setResult(result.slice(0,-1))
    }
            
    const runValidation = () => {
        if(result.trim().length === 0 ){
        errors.result = "Enter Your 4Digit pin"
         }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        runValidation()
        if(Object.keys(errors).length === 0){
            setFormError({})
            const pinNumber = {
                result:result,
            }
            console.log('pinNumber',pinNumber)
            Swal.fire({text: 'Successfully Completed Your Transaction',
            icon :'success'})
            setResult('')
            setClear('')
            props.history.push('/home')  
        } else {
            console.log('pinNumber',errors)
            setFormError(errors)
            Swal.fire(
                'Canceled',
                "Your Transaction interrupted",
                'error'
            )
            props.history.push('/payhere')
        }
    }  
    
    return(
        <div>
            <>
                <div>
                    
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className="heading">Enter your UPI pin here!!</label> <br />
                            <input  type="password" 
                                    placeholder="_ _ _ _ _ _"
                                    onChange={handleChange} 
                                    name="password"
                                    value={result} 
                                    /><br />
                                     <button className="showHide"  onClick={handleShow}>Show</button>
                                     {
                                         formErrors.result && <span style={{textAlign:'center',color:'red'}}>{formErrors.result}</span>
                                     }
                        </div>
                    </form>

                    <div className="buttonStyle">
                        <button className="button1" name="1" value={result} onClick={handleClick}>1</button>
                        <button className="button2" name="2" value={result} onClick={handleClick}>2</button>
                        <button className="button3" name="3" value={result} onClick={handleClick}>3</button> <br />
                        <button className="button4" name="4" value={result} onClick={handleClick}>4</button>
                        <button className="button5" name="5" value={result} onClick={handleClick}>5</button>
                        <button className="button6" name="6" value={result} onClick={handleClick}>6</button> <br />
                        <button className="button7" name="7" value={result} onClick={handleClick}>7</button>
                        <button className="button8" name="8" value={result} onClick={handleClick}>8</button>
                        <button className="button9" name="9" value={result} onClick={handleClick}>9</button> <br />
                        <button className="buttonClear" name="clear"value={clear} onClick={handleClear}>clear</button>
                        <button className="button0" name="0" value={result} onClick={handleClick}>0</button>
                        <button className="buttonSubmit" onClick={handleSubmit}>submit</button>
                    </div>
                </div>
            </>
        </div>
    )
}

export default Payment