import React from 'react';
import ReactDOM from 'react-dom';
import StudentManagementSystem from './StudentEduSystem';
function StudentEdu()
{
  return(
    <div>
       <StudentManagementSystem/>
    </div>
  )
}
ReactDOM.render(<StudentEdu/>,document.getElementById("root"));