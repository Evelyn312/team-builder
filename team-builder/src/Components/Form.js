import React, {useState} from "react";
import ReactDom from "react-dom";

const Form = () => {
    const[memberData, setMemberData] = useState({
        fName: "",
        lName: "",
        email: "",
        role: ""
    });

    console.log("THis is the info",memberData);

    const valueOnChange = (event) => {
        setMemberData({...memberData, 
        [event.target.name]: event.target.value
        })
    }

    return(
        <div>
            <form onSubmit={(event) => {
                event.preventDefault();
                // setMemberData({
                //     fName: "",
                //     lName: "",
                //     email: "",
                //     role: ""
                // })
            }}>
                <label>
                    First Name:
                    <input 
                        placeholder="Enter First Name"
                        onChange={valueOnChange}
                        name="fName"
                    />
                </label> 
                <label>
                    Last Name:
                    <input
                        placeholder="Enter Last Name"
                        onChange={valueOnChange}
                        name="lName"
                    />
                </label> 
                <label>
                    Email:
                    <input
                        placeholder="Enter Email"
                        onChange={valueOnChange}
                        name="Email"
                    />
                </label> 
                <label>
                    Role:
                    <select>
                        <option>Backend</option>
                        <option>Frontend</option>
                        <option>Fullstack</option>
                        <option>Designer</option>
                        <option>Project Manager</option>
                    </select>
                </label>
                <button>Send</button>
            </form>

            <h2>This is {memberData.fName}</h2>
        </div>
    );
}

export default Form;