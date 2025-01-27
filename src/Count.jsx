
import React, {useState} from "react"

function Count(){

    const [name, setName] = useState({name: "ali", class: "SE" });
    const [counter, setcounter] = useState(0);
    const [food, setFood] = useState(["apple", "orange", "apple"]);
// add student elements    
    const [student, setStudent] = useState([]);
    const [studentName, setStudentName] = useState("");
    const [studentAge, setStudentAge] = useState();
    const [studentAddress, setStudentAddress] = useState("");
    const [studentRegistrationYear, setStudentRegistrationYear] = useState(new Date().getFullYear());

    const Increase = () => {
        setcounter(c => c + 1);
        setcounter(c => c + 1);
    }

    const Decrease = () => {
        setcounter(c => c - 1);
        setcounter(c => c - 1);
    }

    const Resset = () => {
        setcounter(c => c = 0);
    }

    const handleChangeName = (event) => {
        setName(c => ({...c, name: event.target.value}));
    }

    
    const handleChangeClass = (event) => {
        setName(c => ({...c, class: event.target.value}));
    }

    const handleAddFood = () =>{
        const addfood = document.getElementById("foodinput").value;
        document.getElementById("foodinput").value = "";
        
        setFood(f => [...f, addfood]);
    }

    const handleRemoveFood = (index) =>{
        setFood(food.filter((_,i) => i !== index));
    }

// set sudent funtions
    const AddStudent = () => {
        const newStudent = {Name: studentName,
                            Age: studentAge,
                            Address: studentAddress,
                            RagistrationYear: studentRegistrationYear
        }

        setStudent(s => [...s, newStudent]);
        setStudentName("");
        setStudentAge("");
        setStudentAddress("");
        setStudentRegistrationYear(new Date().getFullYear());

    }
    const RemoveStudent = (index) => {
        setStudent(s => s.filter((_, i) => i !== index ));
    }
    const StudentName = (event) => {
        setStudentName(event.target.value);
    }
    const StudentAge = (event) => {
        setStudentAge(event.target.value);
    }
    const StudentAddrees = (event) => {
        setStudentAddress(event.target.value);
    }
    const StudentRagisterYear = (event) => {
        setStudentRegistrationYear(event.target.value);
    }
    return(
        <div className="counter-container">
            <p className="count-display">Counter: {counter}</p>
            <button className="counter-button" onClick={Decrease}>Decrease</button>
            <button className="counter-button" onClick={Resset}>Resset</button>
            <button className="counter-button" onClick={Increase}>Increase</button>
            

            // edit student
            <div className="content">
            <div className="add-container">
                <p>Dear {name.name} You are in {name.class} class</p>
                <div>
                Name:  
                <input type="text" onChange={handleChangeName} /><br />
                Class: 
                <input type="text" onChange={handleChangeClass} /><br />
                </div>
            </div>

        
            <div className="add-container">
                <h2>Food List</h2>
                <ul>
                    {food.map((food,index) => 
                    <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>
                    )}
                    <input type="text" placeholder="Add New Food" id="foodinput" />
                    <button  onClick={handleAddFood}>Add Food</button>
                </ul>
            </div>

            <div className="add-container">
                <h2>Student List</h2>
                <ul>
                    {student.map((student, index) => 
                    <li key={index} onClick={() => RemoveStudent(index)}>
                                    {student.Name} {student.Age} {student.Address} {student.RagistrationYear}
                    </li>
                    )}
                </ul>
                <input type="text" value={studentName} onChange={StudentName} placeholder="Enter Student Name" />
                <input type="number" value={studentAge} onChange={StudentAge} placeholder="Enter Age" />
                <input type="text" value={studentAddress} onChange={StudentAddrees} placeholder="Enter Address" />
                <input type="number" value={studentRegistrationYear} onChange={StudentRagisterYear} placeholder="Enter Registeration Year" />
                <button onClick={AddStudent}>Add Student</button>

            </div>
        </div>
        </div>
    );

}
export default Count