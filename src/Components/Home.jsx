import { Link } from "react-router-dom";
import "./Home.css"
import Carousel from 'react-bootstrap/Carousel';


export default function Home() {
  return (
    <>

      <Carousel>
        <Carousel.Item>
          <div class="bg-image"><img src={"./homes2.jpg"} style={{ width: "1492px", height: "757px" }} alt="home background" /></div>
          <Carousel.Caption>
            <div class="bg-text">

              <div className="cen-text" style={{ display: "flex", gap: "2px", flexDirection: "column" }}>
                <h1 style={{ fontSize: "60px" }}>Welcome to <span style={{ color: "#0066b8" }}>ProtoEdge </span></h1>
                <span style={{ fontSize: "20px" }}>Empower your innovations with cutting-edge IoT solutions and embedded system expertise.<br />
                  Transform ideas into reality with our robust, scalable, and reliable technologies</span>
                <span style={{ color: "#0066b8", fontSize: "25px", fontFamily: "Segoe UI', Tahoma, Geneva, Verdana, sans-serif;", fontWeight: "bold" }}>"Innovation for Tomorrow"</span><br />
                <Link id="home1button" className="btn btn-info" style={{ width: "120px", marginLeft: "320px" }} to="/Contactus" >Get in Touch</Link>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item> 
        <Carousel.Item>
          <div class="bg-image"><img src={"./edits2.jpg"} style={{ width: "1492px", height: "757px" }} alt="home background" /></div>
          <Carousel.Caption>
            <div class="bg-text">

              <div className="mission-text" style={{ display: "flex", gap: "2px", flexDirection: "column" }}>
                <h1 style={{ fontSize: "60px" }}>Our <span style={{ color: "#0066b8" }}> Mission</span></h1>
                <span style={{ fontSize: "20px" }}>ProtoEdge is dedicated to empowering businesses and individuals through
                  cutting-edge IoT products and embedded systems. Our mission is to redefine
                  industry standards by delivering innovative, reliable, and scalable solutions that
                  exceed expectations. We are committed to enabling our clients to achieve their
                  goals with efficiency and excellence.."</span>

              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div class="bg-image"><img src={"./edit3.jpg"} style={{ width: "1492px", height: "757px" }} alt="home background" /></div>
          <Carousel.Caption>
            <div class="bg-text">

              <div className="cen-text" style={{ display: "flex", gap: "2px", flexDirection: "column" }}>
                <h1 style={{ fontSize: "60px" }}>Our <span style={{ color: "#0066b8" }}>Vision</span></h1>
                <span style={{ fontSize: "20px" }}>At ProtoEdge, we envision a future where IoT revolutionizes industries,
                  creating unprecedented opportunities for growth and sustainability. We aspire to
                  lead this transformation by constantly innovating and adapting, setting new
                  benchmarks in embedded system technology. Our vision drives us to collaborate
                  closely with our clients, pushing boundaries and unlocking new possibilities in
                  every project we undertake.</span>

              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div class="bg-image"><img src={"./home9.jpg"} style={{ width: "1492px", height: "757px" }} alt="home background" /></div>
          <Carousel.Caption>

            <div className="four-text" style={{ textAlign: "left" }} >
              <h1 style={{ fontSize: "30px", color: "#0066b8", width: "80%" }}>Tech Expertise in Agile Enivironment</h1> <br />
              <span  className="four-text-span" style={{ fontSize: "19px", color: "black", textAlign: "left" }}>We embrace Agile methodologies to deliver the most sustainable, efficient and secure loT systems that drive product engineering with utmost quality & digital transformation.
              <br />  <br /> We work on cutting edge technologies to deliver highly secure embedded products & loT solutions of critical business importance.</span>
                <br /><br />
                <br />
                <Link id="homebutton" className="btn btn-primary" to="/service" style={{backgroundColor:"#0066b8",height:"40px",width:"180px", marginLeft:"18s0px",borderRadius:"50px"}}> View all Services</Link>
              <div className="right">
                <ol className="firstol" style={{ display: "flex", gap: "30px", listStyleType: "none",marginLeft:"-35px" }}>
                  <li><img src="./atmel.svg" alt="icon" style={{ width: "100px", height: "100px" }} /></li>
                  <li><img src="./stmicroelectronics.svg" alt="icon" style={{ width: "100px", height: "100px" }} /></li>
                  <li><img src="./arm-26081.svg" alt="icon" style={{ width: "100px", height: "100px" }} /></li>
                  <li><img src="./raspberry-pi.svg" alt="icon" style={{ width: "100px", height: "100px" }} /></li>
                  <br/>
                     </ol>
                     <br />
                     <ol className="middleol" style={{ display: "flex", gap: "30px", listStyleType: "none" ,marginLeft:"-35px"}}>
                  <li><img src="./bluetooth-2.svg" alt="icon" style={{ width: "100px", height: "100px" }} /></li>
                  <li><img src="./lorawan.png" alt="icon" style={{ width: "120px", height: "80px" }} /></li>
                  <li><img src="./MQTT.png" alt="icon" style={{ width: "100px", height: "50px",marginTop:"20px" }} /></li>
                  <li><img src="./aws-2.svg" alt="icon" style={{ width: "100px", height: "100px" }} /></li><br />
                     </ol><br />
                     <ol  className="lastol" style={{ display: "flex", gap: "30px", listStyleType: "none",marginLeft:"-35px" }}>
                  <li><img src="./linux-tux.svg" alt="icon" style={{ width: "100px", height: "100px" }} /></li>
                  <li><img src="./c++.svg" alt="icon" style={{ width: "100px", height: "100px" }} /></li>
                  <li><img src="./nodejs.png" alt="icon" style={{ width: "120px", height: "80px", marginTop:"10px" }} /></li>
                  <li><img src="./mongodb-icon-2.svg" alt="icon" style={{ width: "100px", height: "100px" }} /></li><br />
                     </ol>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>


      </Carousel>


    </>
  );
}