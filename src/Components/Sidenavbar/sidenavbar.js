import React, { Children, useState } from 'react';
import './sidenavbar.css' 
import icon1 from '../assets/images/icon1.png';
import icon2 from '../assets/images/icon2.png';
import icon3 from '../assets/images/icon3.png';
import icon4 from '../assets/images/icon4.png';
import icon5 from '../assets/images/icon5.png';
import icon6 from '../assets/images/icon6.png';
import home from '../assets/images/home.png';
import message from '../assets/images/message.png';
import task from '../assets/images/task.png';
import members from '../assets/images/members.png';
import settings from '../assets/images/settings.png';
import plus from '../assets/images/plus.png';
import  blub from '../assets/images/blub.png'; 
import { Outlet, Link } from "react-router-dom";
 
function Sidenavbar({children}){

    const [navcollapse,setnavcollaspe] = useState(false)
    const [snavcollapse,setsnavcollaspe] = useState(false)
 

    return(
     
            <div className='containers'>
                  
                            <nav className='nav navbar navbar-expand-lg'>
                                <div className='namer'>
                                        <img className='icon' src={icon1}></img>
                                        <p className='name pt-2'>Project M.</p>
                                        <div className='large' onClick={err=>setnavcollaspe(!navcollapse)}><img className='icon' style={{width:15}} src={icon2}></img> </div>
                                        <div className='small' onClick={err=>setsnavcollaspe(!snavcollapse)}><img className='icon' style={{width:15}} src={icon2}></img> </div>
                                    
                                </div>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <img src='https://img.icons8.com/?size=1x&id=Y9aaMCohZ2Md&format=png' style={{width:25}} alt='no' />
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                            <div className="search-content">
                                                    <input  class="search" alt='no' type="search" placeholder="Search for anything..." />
                                                </div>  
                                    
                                            <div className='extra d-flex'>
                                                        <ul>
                                                                <li><img className='icon' alt='no' src={icon3}></img></li>
                                                                <li><img className='icon' alt='no' src={icon4}></img></li>
                                                                <li><img className='icon' alt='no' src={icon5}></img></li>
                                                                <li className='pt-4 naming'><p >
                                                                            Anima Agrawal 
                                                                            <br/> <span>U.P, India</span> 
                                                                            </p></li>
                                                                <li><img className='icon' style={{width:50}} alt='no' src={icon6}></img></li>
                                                                <li><img className='icon' src='https://cdn-icons-png.flaticon.com/128/2985/2985150.png'  alt='no'/></li>
                                                                        
                                                        </ul>
                                                        
                                            </div>
                                        
                                    </div>
                                    
                            
                            </nav>


                           <div className='body'>
                                        <div className='sidebar-content'>
                                                <div className={`${snavcollapse ? 'smallnav' : ''} sidebar-container ${navcollapse ? "navcollaspe" : ""}`}>
                                                <div className='side_top_menu'>
                                                        <div className='nav-option option1'>
                                                                <img className='icon' style={{width:24}} alt='no' src={home}></img>
                                                                <h5 >Home</h5>
                                                        </div>

                                                        <div className='nav-option option1'>
                                                                <img className='icon' style={{width:24}} alt='no' src={message}></img>
                                                                <h5 >Message</h5>
                                                        </div>

                                                        <div className='nav-option option1'>
                                                                <img className='icon' style={{width:24}} alt='no' src={task}></img>
                                                                <h5 >Task</h5>
                                                        </div>

                                                        <div className='nav-option option1'>
                                                                <img className='icon' style={{width:24}} alt='no' src={members}></img>
                                                                <h5 >Members</h5>
                                                        </div>

                                                        <div className='nav-option option1'>
                                                                <img className='icon' style={{width:24}} alt='no' src={settings}></img>
                                                                <h5 >Settings</h5>
                                                        </div>
                                                </div>
                                                <div className='side_bottom_menu'>
                                                        <div className='nav-option option2'> 
                                                        <h5 >My Projects</h5>
                                                        <img className='icon' style={{width:16}} alt='no' src={plus}></img>
                                                        </div>
                                                                <div className='p-2'>
                                                                        <Link to="/" style={{textDecorationColor:'white'}}>
                                                                                <div className='nav-option3 option3 pb-3'> 
                                                                                        
                                                                                        <div className='inner-t' >
                                                                                                <span style={{color:'green'}} >&#9679;</span>
                                                                                                <h5>Mobile App</h5>
                                                                                        </div>
                                                                                        <span className='menu'  style={{fontSize:10}}>&#9679;&#9679;&#9679;</span>
                                                                                </div>
                                                                        </Link>

                                                                       <Link to="/websitedesign"  style={{textDecorationColor:'white'}}>
                                                                       <div className='nav-option3 option3  pb-3'> 
                                                                                <div className='inner-t' >
                                                                                        <span style={{color:'orange'}}>&#9679;</span>
                                                                                        <h5> Website Redesign</h5>
                                                                                </div>
                                                                                <span  className='menu'  style={{fontSize:10}}>&#9679;&#9679;&#9679;</span>
                                                                        </div>
                                                                       </Link>

                                                                       <Link to="/designsystem"  style={{textDecorationColor:'white'}}>
                                                                       <div className='nav-option3 option3  pb-3'> 
                                                                                <div className='inner-t' >
                                                                                        <span style={{color:'#E4CCFD'}}>&#9679;</span>
                                                                                        <h5>Design System</h5>
                                                                                </div>
                                                                                <span className='menu'  style={{fontSize:10}}>&#9679;&#9679;&#9679;</span>
                                                                        </div>
                                                                       
                                                                       </Link>

                                                                        <Link to="/wireframes"  style={{textDecorationColor:'white'}}>
                                                                        <div className='nav-option3 option3  pb-3'> 
                                                                                <div className='inner-t' >
                                                                                        <span style={{color:'#76A5EA'}}>&#9679;</span>
                                                                                        <h5>Wireframes</h5>
                                                                                </div>
                                                                                <span className='menu' style={{fontSize:10}}>&#9679;&#9679;&#9679;</span>
                                                                        </div>
                                                                        </Link>
                                                                </div>
                                                                <div className='circle text-center'>
                                                                                <img src={blub} style={{width:45}} alt='no' className='icon'/>
                                                                        </div>

                                                                <div className='tips'>
                                                                        <br></br>
                                                                        <div class='tips_head'>
                                                                        <p>Thoughts Time</p>  
                                                                        </div>  
                                                                        <div  class='tips_body'>
                                                                        <p>
                                                                        We don’t have any notice for you, till then you can share your thoughts with your peers.
                                                                        </p>
                                                                        </div>
                                                                        <br></br>
                                                                        <div className='text'>
                                                                        <input type='text'  placeholder='Write a message' />
                                                                        </div>
                                                                        
                                                                </div>
                                                </div>
                                                </div>
                                        </div>
                                
                                
                                
                                                <div>
                                                   <main>{children}</main>
                                                </div>

                           </div>
                
            </div>
            
       
    );

}

export default Sidenavbar;