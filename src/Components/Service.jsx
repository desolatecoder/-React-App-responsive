
import './Service.css';
import { Link  } from 'react-scroll';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
export default function Service() {
    return (
        <>
            <div className="overview">
                <span style={{ fontSize: "40px", color: "#0066b8", fontWeight: "400", fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}>Purpose</span>
                <br />
                <br />

                <div style={{ fontSize: "23px" }}>
                    To detail the services offered by ProtoEdge, providing potential clients with a clear
                    understanding of what the company can deliver.
                </div>
            </div>
            <div class="grid-3">
                <div class="thumb">
                    <img class="thumb-img" src="embeded.png" alt="card1" />
                    <div class="thumb-gradient"></div>
                    <div class="thumb-anim">
                        <h4 class="thumb-title">Embedded Firmware Development</h4>
                        <p class="thumb-description">
                            Embedded firmware development involves creating and modifying the firmware that runs on devices. </p>
                    </div>
                    <div class="thumb-author">view</div>
                </div>
                <div class="thumb">
                    <img class="thumb-img" src="iot.jpg" alt="card2" />
                    <div class="thumb-gradient"></div>
                    <div class="thumb-anim">
                        <h4 class="thumb-title">Connectivity & IoT Solutions</h4>
                        <p class="thumb-description">
                            IoT connectivity allows devices to connect to the internet, other devices, or a central hub to transmit and receive data.
                        </p>
                    </div>
                    <div class="thumb-author">view</div>
                </div>
                <div class="thumb">
                    <img class="thumb-img" src="poc.webp" alt="card3" />
                    <div class="thumb-gradient"></div>
                    <div class="thumb-anim">
                        <h4 class="thumb-title">PoC/Prototype Development</h4>
                        <p class="thumb-description">
                            prototype development involves creating a preliminary version of a product or system to demonstrate its feasibility & functionality.
                        </p>
                    </div>
                    <div class="thumb-author">view</div>
                </div>
                <div class="thumb" id='cardbottom'>
                    <img class="thumb-img" src="embededlinux.jpg" alt="card4" />
                    <div class="thumb-gradient"></div>
                    <div class="thumb-anim">
                        <h4 class="thumb-title">Embedded Linux</h4>
                        <p class="thumb-description">
                            Embedded Linux is the use of the Linux OS in embedded systems—devices designed for specific functions, often with resource constraints
                        </p>
                    </div>
                    <div class="thumb-author">view</div>
                </div>
            </div>


            <div className="after-tech" >
                <div className='name1' style={{position:"absolute", top:"132%",left:"-28%",fontSize:"28px",fontFamily:"Verdana, Geneva, Tahoma, sans-serif",color:"#0066b8"}}>Embeded Firmware Development</div>
                <div className="b1">
                <ButtonGroup aria-label="Basic example" style={{ height: "60px", width: "900px", }}  >
                    <Button variant="outline-primary" className='btngroup'><Link  spy={true}
                        smooth={true}
                        offset={-500}
                        duration={100} to="embededfirmware" style={{ textDecoration: "none", color: "black", fontSize: "18px" }} className='group'>Embeded firmware Development</Link ></Button>
                    <Button variant="outline-primary" className='btngroup'><Link  spy={true}
                        smooth={true}
                        offset={-20}
                        duration={100} style={{ textDecoration: "none", color: "black", fontSize: "18px" }} className='group' to="iot">Connectivity & IoT Solutions</Link ></Button>
                    <Button variant="outline-primary" className='btngroup'><Link  spy={true}
                        smooth={true}
                        offset={160}
                        duration={100} style={{ textDecoration: "none", color: "black", fontSize: "18px" }} className='group' to="prototype">PoC/Prototype Development</Link ></Button>
                    <Button variant="outline-primary" className='btngroup'><Link  spy={true}
                        smooth={true}
                        offset={50}
                        duration={100} style={{ textDecoration: "none", color: "black", fontSize: "18px" }} className='group' to="embededlinux">Embeded Linux</Link ></Button>
                </ButtonGroup>
                </div>
            </div>

           <div className="bgall">
             <div className="content">
                <div id="embededfirmware">
                    <div className="alignments">
                        <div class="maincontainer">

                            <div class="thecard">
                                <div style={{ color: "#0066b8", height: "3px" }}></div>

                                <div class="thefront">
                                    <div style={{ backgroundColor: "#0066b8", height: "3px" }}></div>
                                    <h1>Programming Languages</h1>
                                    <img src="card1.png" alt="card1" style={{ width: "150px", height: "150px", marginLeft: "70px", marginTop: "-34px" }} />

                                    <p className='view'>view more</p>
                                </div>
                                <div class="theback"><p> C, <br /> C++, <br />  CMake, <br /> Python
                                </p>
                                </div>
                            </div>
                        </div>
                        <div class="maincontainer1">

                            <div class="thecard">
                                <div style={{ color: "#0066b8", height: "3px" }}></div>

                                <div class="thefront">
                                    <div style={{ backgroundColor: "#0066b8", height: "3px" }}></div>
                                    <h1>Microcontrollers & Processors</h1> <img src="card2.jpg" alt="card1" style={{ width: "150px", height: "150px", marginLeft: "70px", marginTop: "-34px" }} /></div>

                                <div class="theback"><p> ARM, <br /> ATMEL, <br /> STMicroelectronics</p>
                                </div>

                            </div>
                        </div><div class="maincontainer2">

                            <div class="thecard">
                                <div style={{ color: "#0066b8", height: "3px" }}></div>

                                <div class="thefront">
                                    <div style={{ backgroundColor: "#0066b8", height: "3px" }}></div>
                                    <h1>Protocols</h1><img src="card3.jpg" alt="card1" style={{ width: "190px", height: "190px", marginLeft: "60px", marginTop: "-34px" }} /></div>

                                <div class="theback"><p style={{ marginTop: "-8px" }}> I2C, <br /> SPI, <br /> CAN, <br /> MOBUS, <br /> USB, <br /> MIPI</p>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
                <div className="content">
                    <div className='b2' style={{ position: 'absolute', top: "144%", left: "22%" }}>
                        <ButtonGroup aria-label="Basic example" style={{ height: "60px", width: "900px", }}  >
                            <Button variant="outline-primary" className='btngroup'><Link  spy={true}
                                smooth={true}
                                offset={-500}
                                duration={100} to="embededfirmware" style={{ textDecoration: "none", color: "black", fontSize: "18px" }} className='group'>Embeded firmware Development</Link ></Button>
                            <Button variant="outline-primary" className='btngroup'><Link  spy={true}
                                smooth={true}
                                offset={10}
                                duration={100} style={{ textDecoration: "none", color: "black", fontSize: "18px" }} className='group' to="iot">Connectivity & IoT Solutions</Link ></Button>
                            <Button variant="outline-primary" className='btngroup'><Link  spy={true}
                                smooth={true}
                                offset={150}
                                duration={100} style={{ textDecoration: "none", color: "black", fontSize: "18px" }} className='group' to="prototype">PoC/Prototype Development</Link ></Button>
                            <Button variant="outline-primary" className='btngroup'><Link  spy={true}
                                smooth={true}
                                offset={50}
                                duration={100} style={{ textDecoration: "none", color: "black", fontSize: "18px" }} className='group' to="embededlinux">Embeded Linux</Link ></Button>
                        </ButtonGroup>
                    </div>
                    <div className='name2' style={{position:"absolute", top:"154%",left:"5%",fontSize:"28px",fontFamily:"Verdana, Geneva, Tahoma, sans-serif",color:"#0066b8"}}>Connectivity & IoT Solutions</div>
                    <div id="iot">
                    </div><div class="maincontainer3">

                        <div class="thecard">
                            <div style={{ color: "#0066b8", height: "3px" }}></div>

                            <div class="thefront">
                                <div style={{ backgroundColor: "#0066b8", height: "3px" }}></div>
                                <h1>Device Technology</h1><img src="card4.png" alt="card1" style={{ width: "150px", height: "150px", marginLeft: "70px", marginTop: "-28px" }} /></div>

                            <div class="theback"><p>  Arduino, <br />  ESP32, <br />  Raspberry Pi</p>
                            </div>

                        </div>
                    </div>

                    <div class="maincontainer4">

                        <div class="thecard">
                            <div style={{ color: "#0066b8", height: "3px" }}></div>

                            <div class="thefront">
                                <div style={{ backgroundColor: "#0066b8", height: "3px" }}></div>
                                <h1>Protocols</h1><img src="card5.png" alt="card1" style={{ width: "150px", height: "140px", marginLeft: "70px", marginTop: "-28px" }} /></div>

                            <div class="theback"><p style={{marginTop:"40px"}} >  WiFi, <br /> MQTT, <br /> HTTP, <br /> CoAP</p>
                            </div>

                        </div>
                    </div> <div class="maincontainer5">

                        <div class="thecard">
                            <div style={{ color: "#0066b8", height: "3px" }}></div>

                            <div class="thefront">
                                <div style={{ backgroundColor: "#0066b8", height: "3px" }}></div>
                                <h1> Cloud Platforms</h1><img src="card6.png" alt="card1" style={{ width: "150px", height: "150px", marginLeft: "70px", marginTop: "-34px" }} /></div>

                            <div class="theback"><p style={{ marginTop: "60px" }}>Arduino IoT Cloud, <br /> AWS IoT Core</p>
                            </div>

                        </div>
                    </div> <div class="maincontainer6">

                        <div class="thecard">
                            <div style={{ color: "#0066b8", height: "3px" }}></div>

                            <div class="thefront">
                                <div style={{ backgroundColor: "#0066b8", height: "3px" }}></div>
                                <h1>Databases</h1><img src="card7.jpg" alt="card1" style={{ width: "150px", height: "150px", marginLeft: "70px", marginTop: "-28px" }} /></div>

                            <div class="theback"><p style={{marginTop:"50px"}}>MongoDB, <br /> InfluxDB, <br /> Grafana</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className='b3' style={{ position: 'absolute', top: "208%", left: "22%" }} >
                    <ButtonGroup aria-label="Basic example" style={{ height: "60px", width: "900px", }}  >
                        <Button variant="outline-primary" className='btngroup'><Link  spy={true}
                            smooth={true}
                            offset={-500}
                            duration={100} to="embededfirmware" style={{ textDecoration: "none", color: "black", fontSize: "18px" }} className='group'>Embeded firmware Development</Link ></Button>
                        <Button variant="outline-primary" className='btngroup'><Link  spy={true}
                            smooth={true}
                            offset={-20}
                            duration={100} style={{ textDecoration: "none", color: "black", fontSize: "18px" }} className='group' to="iot">Connectivity & IoT Solutions</Link ></Button>
                        <Button variant="outline-primary" className='btngroup'><Link  spy={true}
                            smooth={true}
                            offset={-20}
                            duration={100} style={{ textDecoration: "none", color: "black", fontSize: "18px" }} className='group' to="prototype">PoC/Prototype Development</Link ></Button>
                        <Button variant="outline-primary" className='btngroup'><Link  spy={true}
                            smooth={true}
                            offset={50}
                            duration={100} style={{ textDecoration: "none", color: "black", fontSize: "18px" }} className='group' to="embededlinux">Embeded Linux</Link ></Button>
                    </ButtonGroup>
                </div>
                <div className='name3' style={{position:"absolute", top:"218%",left:"5%",fontSize:"28px",fontFamily:"Verdana, Geneva, Tahoma, sans-serif",color:"#0066b8"}}>PoC/Prototype Development</div>
                <div id="prototype">
                    <div class="maincontainer7">

                        <div class="thecard">
                            <div style={{ color: "#0066b8", height: "3px" }}></div>

                            <div class="thefront">
                                <div style={{ backgroundColor: "#0066b8", height: "3px" }}></div>
                                <h1>PCB Tools</h1><img src="card8.png" alt="card1" style={{ width: "150px", height: "150px", marginLeft: "70px", marginTop: "-20px" }} /></div>

                            <div class="theback" ><p style={{marginTop:"50px"}}>KiCAD, <br /> AutoCAD</p>
                            </div>

                        </div>
                    </div> <div class="maincontainer8">

                        <div class="thecard">
                            <div style={{ color: "#0066b8", height: "3px" }}></div>

                            <div class="thefront">
                                <div style={{ backgroundColor: "#0066b8", height: "3px" }}></div>
                                <h1>Hardware Verification Tools</h1><img src="card9.jpg" alt="card1" style={{ width: "150px", height: "150px", marginLeft: "70px", marginTop: "-30px" }} /></div>

                            <div class="theback"><p style={{marginTop:"60px"}} >Multimeter, <br /> Oscilloscope</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
                <div className="content">
                    <div className="last">
                        <div className='b4' style={{ position: 'absolute', top: "271%", left: "22%" }}>
                            <ButtonGroup aria-label="Basic example" style={{ height: "60px", width: "900px", }}  >
                                <Button variant="outline-primary" className='btngroup'><Link  spy={true}
                                    smooth={true}
                                    offset={-350}
                                    duration={100} to="embededfirmware" style={{ textDecoration: "none", color: "black", fontSize: "18px" }} className='group'>Embeded firmware Development</Link ></Button>
                                <Button variant="outline-primary" className='btngroup'><Link  spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={100} style={{ textDecoration: "none", color: "black", fontSize: "18px" }} className='group' to="iot">Connectivity & IoT Solutions</Link ></Button>
                                <Button variant="outline-primary" className='btngroup'><Link  spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={100} style={{ textDecoration: "none", color: "black", fontSize: "18px" }} className='group' to="prototype">PoC/Prototype Development</Link ></Button>
                                <Button variant="outline-primary" className='btngroup'><Link  spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={100} style={{ textDecoration: "none", color: "black", fontSize: "18px" }} className='group' to="embededlinux">Embeded Linux</Link ></Button>
                            </ButtonGroup>
                        </div>
                        <div className='name4' style={{position:"absolute", top:"279%",left:"5%",fontSize:"28px",fontFamily:"Verdana, Geneva, Tahoma, sans-serif",color:"#0066b8"}}>Embedded Linux</div>
                        <div id="embededlinux">
                            <div class="maincontainer9">

                                <div class="thecard">
                                    <div style={{ color: "#0066b8", height: "3px" }}></div>

                                    <div class="thefront">
                                        <div style={{ backgroundColor: "#0066b8", height: "3px" }}></div>
                                        <h1>Boot Loaders</h1><img src="card11.png" alt="card1" style={{ width: "150px", height: "150px", marginLeft: "70px", marginTop: "-26px" }} /></div>

                                    <div class="theback"><p style={{marginTop:"60px"}}>U-Boot, <br /> GRUB</p>
                                    </div>

                                </div>
                            </div> <div class="maincontainer10">

                                <div class="thecard">
                                    <div style={{ color: "#0066b8", height: "3px" }}></div>

                                    <div class="thefront">
                                        <div style={{ backgroundColor: "#0066b8", height: "3px" }}></div>
                                        <h1>Operating Systems</h1><img src="card10.png" alt="card1" style={{ width: "170px", height: "150px", marginLeft: "70px", marginTop: "-3px" }} /></div>

                                    <div class="theback"><p > Linux, <br /> Bare Metal, <br /> FreeRTOS, <br /> Windows</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="content"></div>
           </div>

        </>

    );
}


