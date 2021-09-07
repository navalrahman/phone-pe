import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Payhere.css'

const PayHere= (props) => {
    const [number, setNumber] = useState('')
    const [message, setMessage] = useState('')
    const [bank, setBank] = useState("")
    const [terms, setTerms] = useState(false)
    const [formErrors, setFormErrors] = useState({})

    const errors = {}

    const handleChnage = (e) => {
        const attr = e.target.name
        if(attr === 'number'){
            setNumber(e.target.value)
        } else if(attr === 'message'){
            setMessage(e.target.value)
        } else if(attr === 'bank'){
            setBank(e.target.value)
        }
    }

    
    const handleTermsChnage = (e) => {
        setTerms(e.target.checked)
    }

    const runValidation = () => {
        if(number.trim().length === 0){
            errors.number = "field can't be empty"
        }
        if(message.trim().length === 0) {
            errors.message = "Not Mandatory"
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        runValidation()

        if(Object.keys(errors).length === 0){
            setFormErrors({})

            const formData = {
                number:number,
                message:message,
                bank:bank,
                terms:terms                
            }
            console.log('formDta',formData)
            setNumber('')
            setMessage('')
            setBank('')
            setTerms('')

        }else {
            console.log('formData',errors)
            setFormErrors(errors)
        }
        
    }


    return (
        <div className="body">
            <div className="heading"><h2>Cash Details</h2></div>
            
            <div className="formPage"> 
                <form onSubmit={handleSubmit}>
                    <div className="textField">
                        <input 
                            type="number" 
                            value={number} 
                            name="number" 
                            placeholder="Enter the Amount."  
                            onChange={handleChnage} 
                        /><br />
                        {formErrors.number && <span>{formErrors.number}</span>}<br/>
                        
                        <input 
                            type="text" 
                            value={message} 
                            name="message" 
                            placeholder="Add Message here" 
                            onChange={handleChnage}
                        /><br />
                        {formErrors.message && <span>{formErrors.message}</span>}<br/>
                    </div>
                        <hr />
                            <p className="pTag">please select Bank</p>
                                <div className="alignment">
                                    <label>State Bank of India </label>
                                        <input 
                                            type="radio" 
                                            name="bank" 
                                            value="statebankofindia" 
                                            checked={bank === "statebankofindia"} 
                                            onChange={handleChnage}
                                        /> <br />
                                </div>

                                <div className="alignment">
                                    <label> FEDRAL BANK </label>
                                        <input 
                                            type="radio" 
                                            name="bank" 
                                            value="fedralbank" 
                                            checked={bank === "fedralbank"} 
                                            onChange={handleChnage}
                                        />  <br />
                                </div>

                                <div className="alignment">
                                    <label> AXIS BANK </label>
                                        <input 
                                            type="radio" 
                                            name="bank" 
                                            value="axisbank" 
                                            checked={bank === "axisbank"} 
                                            onChange={handleChnage}
                                        /> <br /> <br />
                                </div>
                                
                               <div className="checkbox">
                                    <input 
                                        type="checkbox" 
                                        checked={terms} 
                                        onChange={handleTermsChnage}
                                        /> Agree to pay the Amount <br />
                                </div>
                        <Link to="/payment">
                            <input 
                                className="button" 
                                type="submit" 
                                value="proceed_forward" 
                                disabled={!terms}
                            /></Link>
                </form>
            </div>
        </div>
    )
}
export default PayHere