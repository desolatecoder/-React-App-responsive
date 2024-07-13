import './team.css';

export default function Team() {
    return (
        <>
            <section className="section-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center" style={{position:"absolute",top:"15%",left:"-1%"}}>
                            <h1 className="section-title">Our Team</h1>
                            <p className="section-subtitle">
                            Meet the Experts: Discover the Dedicated ProtoEdge Team Behind Our Success
                            </p>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="team-item">
                                <img src="nopic.jpg" alt="team member" style={{ width: "170px", height: "170px" }} />
                                <h3>sai Rakesh</h3> <br />
                                <div className="team-info">
                                    <p> Cheif Executive Officer</p>
                                    <p>As an experienced leader with a strong background in embedded systems and project management, I oversee projects, handle client communication, and provide technical guidance.
                                    </p><p> Contact: Email, LinkedIn</p>

                                </div>
                            </div>
                        </div>


                        <div className="col-sm-6 col-md-4" >
                            <div className="team-item">
                                <img src="nopic.jpg" alt="team member" style={{ width: "170px", height: "170px" }} />
                                <h3>Name</h3><br />
                                <div className="team-info">
                                    <p>IoT Firmware Developer</p>
                                    
                                    <p>With expertise in developing and optimizing embedded firmware, I handle responsibilities related to firmware development, testing, and debugging
                                    </p><p> Contact: Email, LinkedIn</p>
                                </div>
                            </div>

                        </div>

                        <div className="col-sm-6 col-md-4">
                            <div className="team-item">
                                <img src="nopic.jpg" alt="team member" style={{ width: "170px", height: "170px" }} />
                                <h3>Harsha Varshab</h3>
                                <div className="team-info">
                                    <p>job role can be added</p>
                                    <p>description can be added</p>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>

    );
}