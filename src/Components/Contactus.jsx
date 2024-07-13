import './Contactus.css';
import { FaPhone, FaLinkedinIn,FaXTwitter,FaDiscord,FaYoutube   } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
export default function Contactus(){
    return(
<>
<section id="section-wrapper">
        <div class="box-wrapper">
            <div class="info-wrap">
                <h2 class="info-title">Contact Information</h2>
                <h3 class="info-sub-title">Fill up the form and our Team will get back to you within 24 hours</h3>
                <ul class="info-details">
                    <li>
                       <i><FaPhone style={{width:"20px",height:"20px",marginLeft:"2px",marginBottom:"5px"}}/></i>
                        <span>Phone:</span> <a href="tel:+ 91 123 456 7890">+ 123 456 7890</a>
                    </li>
                    <li>
                    <i><IoMdMail style={{width:"20px",height:"20px",marginLeft:"2px",marginBottom:"5px"}}/></i>
                        <span>Email:</span> <a href="mailto:protoEdge@gmail.com">Protoedge@gmail.com</a>
                    </li>
                    <li>
                    <i><CgWebsite style={{width:"20px",height:"20px",marginLeft:"2px",marginBottom:"5px"}}/></i>
                        <span>Website:</span> <a href="#">protoEdge.com</a>
                    </li>
                </ul>
                <ul class="social-icons">
                    <li><a href="#"><i><FaLinkedinIn  style={{width:"20px",height:"20px",marginLeft:"2px",marginBottom:"4px"}}/></i></a></li>
                    <li><a href="#"><i><FaXTwitter style={{width:"20px",height:"20px",marginLeft:"2px",marginBottom:"4px"}}/></i></a></li>
                    <li><a href="#"><i><FaDiscord  style={{width:"20px",height:"25px",marginLeft:"2px",marginBottom:"5px"}}/></i></a></li>
                    <li><a href="#"><i><FaYoutube  style={{width:"20px",height:"20px",marginLeft:"2px",marginBottom:"5px"}}/></i></a></li>
                </ul>
            </div>
            <div class="form-wrap">
                <form action="#" method="POST">
                    <h2 class="form-title">Send us a message</h2>
                    <div class="form-fields">
                        <div class="form-group">
                            <input type="text" class="fname" placeholder="First Name" />
                        </div>
                        <div class="form-group">
                            <input type="email" class="lname" placeholder="Email"/>
                        </div>
                        <div class="form-group">
                            <input type="lname" class="email" placeholder="subject"/>
                        </div>
                        <div class="form-group">
                            <input type="number" class="phone" placeholder="Phone"/>
                        </div>
                        <div class="form-group">
                            <textarea name="message" id="" placeholder="Write your message"/><textarea/>
                        </div>
                    </div>
                    <input type="submit" value="Send Message" class="submit-button"/>
                </form>
            </div>
        </div>
    </section>
</>
    );}