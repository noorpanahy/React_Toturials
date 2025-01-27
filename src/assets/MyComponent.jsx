
import React, {useState} from "react"

function MyComponent(){

    const [name, setName] = useState('Guest');
    const [age , setAage] = useState(0);
    const [isEmployee , ChangeCondation] = useState(false);
    const [Coments , setComents] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    const changeName = () =>{
        setName('Noor');
    }

    const changeAge = () => {
        setAage(age +1);
    }

    const ToggleIsEmployee = () => {
        ChangeCondation(!isEmployee);
    }
    
    const HundleComentChange = (Event) => {
        setComents(event.target.value);
    }

    const paymentHundler = (event) => {
        setPayment(event.target.value);
    }

    const shippingHandler = (event) => {
        setShipping(event.target.value);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={changeName}>Change Name</button>

            <p>AGE: {age}</p>
            <button onClick={changeAge}>Change AGE</button>

            <p>Is Employee: {isEmployee ? 'True' : "No"}</p>
            <button onClick={ToggleIsEmployee}>Toggel Is Employee</button>
            <br/><br/>
            <textarea value={Coments} onChange={HundleComentChange} placeholder="Enter Your Coment"/>
            <p>Coments: {Coments}</p>
            
            <select value={payment} onChange={paymentHundler}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Master Card">Master Card</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" 
                       onChange={shippingHandler} checked={shipping === 'Pick Up'} />
                Pick Up
            </label>
            <br />
            <label>
            <input type="radio" value="Delivery" 
                   onChange={shippingHandler} checked={shipping === 'Delivery'} />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>

        
    );


}export default MyComponent