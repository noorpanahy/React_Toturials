import React,{useState, createContext} from "react";
import ComponentB from "./ComponentB";

export const con = createContext();

function ComponentA(){
    
    const [user, setUser] = useState("Noor");

    return(
    <div className="hh">
        <h1>container A</h1>
        <h2>Hellodear {user}</h2>
        <con.Provider value={user}>
            <ComponentB  user={user}/>
        </con.Provider>
        
    </div>
    );
}export default ComponentA