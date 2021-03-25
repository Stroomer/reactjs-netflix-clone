import React, { Component } from 'react';
import Card from './Card.jsx';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';

class Students extends Component {
    constructor(props) {
        super(props);
    }    
    render() {
        const { students } = this.props;
        const studentList  = students.map(student => {
            return (
                <Card name={student.name} icon={student.gender==='m' ? faMars : faVenus} src={`students/${student.photo}`} key={student.id} />
            )
        }); 


        

        return (
            <div className="student-list">
                {studentList}
            </div>
        )
    }
}

export default Students;