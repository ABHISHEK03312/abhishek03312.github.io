import {NavLink,Link} from 'react-router-dom';
import { BsPersonFill } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { AiFillProject } from 'react-icons/ai';
import { BsMap ,BsTelephone} from 'react-icons/bs';

const Navbar = () => {
    return (
        <div className='navbar-parent'>
            <div className='navbar'>
                {/* <div className="links"> */}
                    {/* <div class="sti_container" > */}
                        <NavLink to="/" target="_self" rel="noreferrer" className={({ isActive }) => (isActive ? "linkactive" : "link")}>
                            <button className="btn">
                                <span class="btn-text">Home</span>
                                <span class="btn-icon"><FaHome style={{ height: 35, width: 35, verticalAlign: 'middle', color:'rgb(255, 255, 255)'}}/></span>
                            </button>
                        </NavLink>
                    {/* </div> */}
                    <div class="sti_container">
                        <NavLink to="/workexperience" target="_self" rel="noreferrer" className={({ isActive }) => (isActive ? "linkactive" : "link")}>
                            <button class="btn">
                                <span class="btn-text">Experience</span>
                                <span class="btn-icon"><MdWork style={{ height: 35, width: 35, verticalAlign: 'middle', color:'rgb(255, 255, 255)'}}/></span>
                            </button>
                        </NavLink>
                    </div>
                    <div class="sti_container">
                        <NavLink to="/projects" target="_self" rel="noreferrer" className={({ isActive }) => (isActive ? "linkactive" : "link")}>
                            <button class="btn">
                                <span class="btn-text">Projects</span>
                                <span class="btn-icon"><AiFillProject style={{ height: 35, width: 35, verticalAlign: 'middle', color:'rgb(255, 255, 255)'}}/></span>
                            </button>
                        </NavLink>
                    </div>
                    <div class="sti_container">
                        <NavLink to="/about" target="_self" rel="noreferrer" className={({ isActive }) => (isActive ? "linkactive" : "link")}>
                            <button class="btn">
                                <span class="btn-text">About</span>
                                <span class="btn-icon"><BsPersonFill style={{ height: 35, width: 35, verticalAlign: 'middle', color:'rgb(255, 255, 255)'}}/></span>
                            </button>
                        </NavLink>
                    </div>
                {/* </div> */}
            </div>
        </div>
      );
}
 
export default Navbar;