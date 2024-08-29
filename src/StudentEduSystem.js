import React from "react";
import './StudentEduSystem.css';
import Hicet1 from './hicet1.png'
import { IoMdContacts } from "react-icons/io";
import { LuGanttChartSquare } from "react-icons/lu";
import { TbSettingsStar } from "react-icons/tb";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { BiFileBlank } from "react-icons/bi";
import { RiContactsFill } from "react-icons/ri";
function StudentManagementSystem()
{
    return(
        <div className="body">
            <div className="gridcontainer">
                <ul>
                    <li> <img src={Hicet1} alt='hicet'></img></li>
                    <li className="icons"><IoMdContacts /></li>
                    <li className="listitems">Student Management</li>
                    <li className="icons"><LuGanttChartSquare /></li>
                    <li className="listitems">Functional Management</li>
                    <li className="icons"><TbSettingsStar /></li>
                    <li className="listitems">Quality Control</li>
                    <li className="icons"><HiOutlineViewGridAdd /></li>
                    <li className="listitems">Report Delivery</li>
                    <li className="icons"><BiFileBlank /></li>
                    <li className="listitems1">Attendance</li>
                </ul>
            </div>
            <div className="Mainbody">
            <div className="header">
                <h1>Student Management System</h1>
            </div>
            <div className="boxes">
              <div className="red">
                <ul>
                   <li className="icon"><RiContactsFill /></li>
                   <li className="item">Regular Students</li>
                </ul>  
              </div>
              <div className="violet">
                <ul>
                   <li className="icon"><RiContactsFill /></li>
                   <li className="item">Regular Students</li>
                </ul>  
              </div>
              <div className="green">
                <ul>
                   <li className="icon"><RiContactsFill /></li>
                   <li className="item">Regular Students</li>
                </ul>  
              </div>

            </div>
            </div>
            
        
        </div>
    )
}
export default StudentManagementSystem;