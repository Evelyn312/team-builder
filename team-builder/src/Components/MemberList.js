import React from "react"

const MemberList = props => {
    return(
        <div>
            {props.members.map((member,i) => (
                <h4 key={i}>{member.fName}</h4>
            ))
            }
        </div>
    );
};

export default MemberList;