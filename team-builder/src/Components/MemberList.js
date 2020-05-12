import React from "react"

const MemberList = props => {
    console.log('props ', props.members);
    return(
        <div>
            {
                props.members.length > 0 ? props.members.map((member,i) => {
                    return (
                        <div key={i}>
                            <h3>Team Member: {member.fName} {member.lName}</h3>
                            <h4>Email: {member.email}</h4>
                            <h4>Role: {member.role}</h4>
                        </div>
                    )
                }) : ''
            }
        </div>
    );
};

export default MemberList;