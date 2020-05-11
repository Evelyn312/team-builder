import React, {useState} from 'react';
import './App.css';
import Form from './Components/Form';
import MemberList from './Components/MemberList'

function App() {

  const [members, setMembers] = useState([{}]);

  const handleSubmit = member => {
    console.log('submit being called');
    setMembers([...members, member]);
  }; 

  return (
    <div className="App">
        <Form onSubmit={handleSubmit}/>
        <MemberList members={members}/>
    </div>
  );
}

export default App;
