import React from 'react';
import './mobileapp.css';
import edit from "../assets/images/edit.png";
import link from "../assets/images/link.png";
import add from "../assets/images/plus.png";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import filter from "../assets/images/filter.png";
import today from "../assets/images/today.png";
import share from "../assets/images/share.png";
import equal from "../assets/images/equal.png";
import four from "../assets/images/four_dot.png";
import person3 from "../assets/images/3person.png";
import person2 from "../assets/images/2person.png";
import comment from "../assets/images/comment.png";
import file from "../assets/images/file.png";
import img1 from "../assets/images/img1.png";
import  img2 from "../assets/images/img2.png";
import  img3 from "../assets/images/img3.png";


function Mobileapp(){
   
    return(
        <div>
             <div className='top-nav navbar navbar-expand-lg'>
                <div><p>Mobile App</p></div>
                   <ul> 
                     <li><img src={edit} alt='no' /></li>
                     <li><img src={link} alt='no' /></li>
                   </ul>
                   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mobile" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                       <img src='https://img.icons8.com/?size=1x&id=Y9aaMCohZ2Md&format=png' style={{width:25}} alt='no' />
                    </button>

                        <div class="collapse navbar-collapse invite" id="mobile" >
                            <div className='d-flex'>
                                    <div className='row'>
                                        <div className='col '>
                                            <img src={add} alt='no' style={{width:18}}></img>
                                        </div>
                                            <div className='col p-0'>
                                               <p style={{fontSize:16,color:'#5030E5'}}>invite</p>
                                            </div>
                                    </div> 
                                      <div class="logo">
                                            <div class="c1 circle"><img src={p1}></img></div>
                                            <div class="c2 circle"><img src={p2}></img></div>
                                            <div class="c3 circle"><img src={p3}></img></div>
                                            <div class="c4 circle"><img src={p4}></img></div>
                                            <div class="c5 circle"><p>+2</p></div>
                                        </div>
                            </div>
                        </div>
             </div>
              
               <div className='nav-bootom d-flex pl-2'>
                            <div className='d-flex drop'>
                                <div class="dropdown  ">
                                        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img  src={filter} style={{width:16}}></img>
                                            Filter
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                </div>
                                <div class="dropdown"  >
                                        <button style={{fontSize:16}} class="btn   dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img  src={today} style={{width:16}}></img> Today
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                </div>
                            </div>

                            <div class="bottom-right d-flex">
                                <button>
                                 <img src={share} style={{width:16}} alt='no'></img>    Share
                                </button>
                                <div class="vl"></div>
                                <div >
                                    <img src={equal} alt='no' style={{width:40}} />
                                </div>
                                <div >
                                    <img src={four} alt='no' style={{width:21}} />
                                </div>
                            </div>

               </div>

                <div className='body-content'>
                       
                        <div class="row  p-4 ">
                            <div class="col col-lg-4">
                                <div className='todo '> 
                                    <div className='top-menu d-flex '>
                                                    <span style={{color:'#0D062D',marginTop:-2}}>&#9679;</span>
                                                    <h5 style={{fontSize:16}}>To Do</h5>
                                                    <div className='num'><p style={{marginLeft:6}}>4</p></div>
                                                    <div>
                                                        <img style={{width:20,marginLeft:200}} src={add}></img>
                                                    </div>
                                    </div>
                                    <div className='slide-holder'>
                                        <div className='slide ' >
                                              <div className='slide-top-menu d-flex'>
                                                       <div style={{width:36,height:23,backgroundColor:'#f4e2d0',textAlign:'center',borderRadius:4    }}>
                                                          <p style={{fontSize:12, color:'#D58D49',}}>Low</p>
                                                       </div>
                                                       <div className='menu' style={{fontSize:10,marginLeft:220}}> &#9679;&#9679;&#9679;</div>
                                              </div>
                                              <div style={{paddingTop:10}}>
                                                <p style={{fontSize:18,fontWeight:'bold'}}>Brainstorming</p>
                                                <p style={{fontSize:12,color:'#787486'  }}>Brainstorming brings team member's diverse experience into play. </p>
                                              </div>
                                                <br></br>
                                              <div className='slide-top-menu d-flex'>
                                                   <img src={person3} style={{width:63,height:30}}></img>
                                                   <div>
                                                       <ul style={{listStyle:'none',display:'inline-flex',gap:10}}>
                                                          <li className='d-flex '>
                                                            <img style={{width:16,height:16,marginTop:8,  }} src={comment}></img>
                                                            <p  style={{fontSize:12,marginTop:8,marginLeft:5}}>12 comments</p>
                                                          </li>
                                                          <li className='d-flex '>
                                                            <img style={{width:16,height:16,marginTop:8,  }} src={file}></img>
                                                            <p  style={{fontSize:12,marginTop:8,marginLeft:5}}>0 files</p>
                                                          </li>
                                                       </ul>
                                                   </div>
                                              </div>
                                        </div>
                                        <br></br>
                                        <div className='slide '>
                                              <div className='slide-top-menu d-flex'>
                                                       <div style={{width:36,height:23,backgroundColor:'#f4e2d0',textAlign:'center',borderRadius:4    }}>
                                                          <p style={{fontSize:12, color:'#D58D49',}}>High</p>
                                                       </div>
                                                       <div className='menu' style={{fontSize:10,marginLeft:220}}> &#9679;&#9679;&#9679;</div>
                                              </div>
                                              <div style={{paddingTop:10}}>
                                                <p style={{fontSize:18,fontWeight:'bold'}}>Research</p>
                                                <p style={{fontSize:12,color:'#787486'  }}>User research helps you to create an optimal product for users. </p>
                                              </div>
                                                <br></br>
                                              <div className='slide-top-menu d-flex'>
                                                   <img src={person2} style={{width:50,height:30}}></img>
                                                   <div>
                                                       <ul style={{listStyle:'none',display:'inline-flex',gap:15}}>
                                                          <li className='d-flex '>
                                                            <img style={{width:16,height:16,marginTop:8,  }} src={comment}></img>
                                                            <p  style={{fontSize:12,marginTop:8,marginLeft:5}}>10 comments</p>
                                                          </li>
                                                          <li className='d-flex '>
                                                            <img style={{width:16,height:16,marginTop:8,  }} src={file}></img>
                                                            <p  style={{fontSize:12,marginTop:8,marginLeft:5}}>3 files</p>
                                                          </li>
                                                       </ul>
                                                   </div>
                                              </div>
                                        </div>
                                         
                                        
                                         
                                    </div>

                                </div>
                            </div>
                            <div class="col col-md-auto">
                            <div className='todo '> 
                                    <div className='top-menu d-flex ' style={{borderBottom:'3px solid #FFA500'}}>
                                                    <span style={{color:'#FFA500',marginTop:-2}}>&#9679;</span>
                                                    <h5 style={{fontSize:16,}}>On Progress</h5>
                                                    <div className='num'><p style={{marginLeft:6}}>3</p></div>
                                    </div>
                                    <div className='slide-holder' >
                                        <div className='slide ' draggable>
                                              <div className='slide-top-menu d-flex'>
                                                       <div style={{width:36,height:23,backgroundColor:'#f4e2d0',textAlign:'center',borderRadius:4    }}>
                                                          <p style={{fontSize:12, color:'#D58D49',}}>Low</p>
                                                       </div>
                                                       <div className='menu' style={{fontSize:10,marginLeft:220}}> &#9679;&#9679;&#9679;</div>
                                              </div>
                                              <div style={{paddingTop:10}}>
                                                <p style={{fontSize:18,fontWeight:'bold'}}>Onboarding Illustrations </p>
                                                 <img src={img1} style={{ width:281}}></img>
                                              </div>
                                                <br></br>
                                              <div className='slide-top-menu d-flex'>
                                                   <img src={person3} style={{width:63,height:30}}></img>
                                                   <div>
                                                       <ul style={{listStyle:'none',display:'inline-flex',gap:10}}>
                                                          <li className='d-flex '>
                                                            <img style={{width:16,height:16,marginTop:8,  }} src={comment}></img>
                                                            <p  style={{fontSize:12,marginTop:8,marginLeft:5}}>14 comments</p>
                                                          </li>
                                                          <li className='d-flex '>
                                                            <img style={{width:16,height:16,marginTop:8,  }} src={file}></img>
                                                            <p  style={{fontSize:12,marginTop:8,marginLeft:5}}>15 files</p>
                                                          </li>
                                                       </ul>
                                                   </div>
                                              </div>
                                        </div>
                                        <br></br>
                                        <div className='slide '>
                                              <div className='slide-top-menu d-flex'>
                                                       <div style={{width:36,height:23,backgroundColor:'#f4e2d0',textAlign:'center',borderRadius:4    }}>
                                                          <p style={{fontSize:12, color:'#D58D49',}}>Low</p>
                                                       </div>
                                                       <div className='menu' style={{fontSize:10,marginLeft:220}}> &#9679;&#9679;&#9679;</div>
                                              </div>
                                              <div style={{paddingTop:10}}>
                                                <p style={{fontSize:18,fontWeight:'bold'}}>Moodboard</p>
                                                <img src={img2} style={{ width:281}}></img>
                                              </div>
                                                <br></br>
                                              <div className='slide-top-menu d-flex'>
                                                   <img src={person2} style={{width:50,height:30}}></img>
                                                   <div>
                                                       <ul style={{listStyle:'none',display:'inline-flex',gap:15}}>
                                                          <li className='d-flex '>
                                                            <img style={{width:16,height:16,marginTop:8,  }} src={comment}></img>
                                                            <p  style={{fontSize:12,marginTop:8,marginLeft:5}}>9 comments</p>
                                                          </li>
                                                          <li className='d-flex '>
                                                            <img style={{width:16,height:16,marginTop:8,  }} src={file}></img>
                                                            <p  style={{fontSize:12,marginTop:8,marginLeft:5}}>10 files</p>
                                                          </li>
                                                       </ul>
                                                   </div>
                                              </div>
                                        </div>
                                         
                                        
                                         
                                    </div>

                                </div>
                            </div>
                            <div class="col col-lg-4">
                            <div className='todo '> 
                                    <div className='top-menu d-flex '>
                                                    <span style={{color:'#0D062D',marginTop:-2}}>&#9679;</span>
                                                    <h5 style={{fontSize:16}}>Done</h5>
                                                    <div className='num'><p style={{marginLeft:6}}>4</p></div>
                                                    <div>
                                                        <img style={{width:20,marginLeft:200}} src={add}></img>
                                                    </div>
                                    </div>
                                    <div className='slide-holder'>
                                        <div className='slide '>
                                              <div className='slide-top-menu d-flex'>
                                                       <div style={{width:80,height:23,backgroundColor:'#f4e2d0',textAlign:'center',borderRadius:4    }}>
                                                          <p style={{fontSize:12, color:'#D58D49',}}>Completed</p>
                                                       </div>
                                                       <div className='menu' style={{fontSize:10,marginLeft:200}}> &#9679;&#9679;&#9679;</div>
                                              </div>
                                              <div style={{paddingTop:10}}>
                                                <p style={{fontSize:18,fontWeight:'bold'}}>Mobile App Design</p>
                                                <img src={img3} style={{ width:281}}></img>
                                              </div>
                                                <br></br>
                                              <div className='slide-top-menu d-flex'>
                                                   <img src={person3} style={{width:63,height:30}}></img>
                                                   <div>
                                                       <ul style={{listStyle:'none',display:'inline-flex',gap:10}}>
                                                          <li className='d-flex '>
                                                            <img style={{width:16,height:16,marginTop:8,  }} src={comment}></img>
                                                            <p  style={{fontSize:12,marginTop:8,marginLeft:5}}>12 comments</p>
                                                          </li>
                                                          <li className='d-flex '>
                                                            <img style={{width:16,height:16,marginTop:8,  }} src={file}></img>
                                                            <p  style={{fontSize:12,marginTop:8,marginLeft:5}}>0 files</p>
                                                          </li>
                                                       </ul>
                                                   </div>
                                              </div>
                                        </div>
                                        <br></br>
                                        <div className='slide '>
                                              <div className='slide-top-menu d-flex'>
                                                  <div style={{width:80,height:23,backgroundColor:'#f4e2d0',textAlign:'center',borderRadius:4    }}>
                                                          <p style={{fontSize:12, color:'#D58D49',}}>Completed</p>
                                                       </div>
                                                       <div className='menu' style={{fontSize:10,marginLeft:200}}> &#9679;&#9679;&#9679;</div>
                                              </div>
                                              <div style={{paddingTop:10}}>
                                                <p style={{fontSize:18,fontWeight:'bold'}}>Design System</p>
                                                <p style={{fontSize:12,color:'#0D062D'  }}>It just needs to adapt the UI from what you did before </p>
                                              </div>
                                                <br></br>
                                              <div className='slide-top-menu d-flex'>
                                                   <img src={person2} style={{width:50,height:30}}></img>
                                                   <div>
                                                       <ul style={{listStyle:'none',display:'inline-flex',gap:15}}>
                                                          <li className='d-flex '>
                                                            <img style={{width:16,height:16,marginTop:8,  }} src={comment}></img>
                                                            <p  style={{fontSize:12,marginTop:8,marginLeft:5}}>10 comments</p>
                                                          </li>
                                                          <li className='d-flex '>
                                                            <img style={{width:16,height:16,marginTop:8,  }} src={file}></img>
                                                            <p  style={{fontSize:12,marginTop:8,marginLeft:5}}>3 files</p>
                                                          </li>
                                                       </ul>
                                                   </div>
                                              </div>
                                        </div>
                                         
                                        
                                         
                                    </div>

                                </div>
                            </div>
                        </div>
               </div>
                 
            
               
        </div>
    );
}

export default Mobileapp;