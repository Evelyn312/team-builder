import React, {useState, useEffect} from "react";


const Form = props => {

    const[memberData, setMemberData] = useState({
        fName: "",
        lName: "",
        email: "",
        role: ""
    });

    const valueOnChange = (event) => {
        setMemberData({...memberData, 
        [event.target.name]: event.target.value
        })
        console.log("THis is the info",memberData);
    }

    return(
        <div>
            <form onSubmit={(event) => {
                event.preventDefault();
                props.onSubmit(memberData);
                setMemberData({
                    fName: "",
                    lName: "",
                    email: "",
                    role: ""
                });
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
                        name="email"
                    />
                </label> 
                <label>
                    Role:
                    <select 
                        onChange={valueOnChange}
                        name="role"
                    >   <option value="">Choose a Role</option>
                        <option value="Backend">Backend</option>
                        <option value="Frontend">Frontend</option>
                        <option value="Fullstack">Fullstack</option>
                        <option value="Designer">Designer</option>
                        <option value="Project Manager">Project Manager</option>
                    </select>
                </label>
                <button>Send</button>
            </form>
        </div>
    );
}

export default Form;