import React from 'react'

import { Link } from 'react-router-dom';
import '../css/index.css';
import '../css/home.css';
// import '../utils/images/';

const LandingPage = () => {
  const date_ = new Date();
  const date = date_.getFullYear();
//   const currentMonth = date_.getMonth();

  return (
    <React.Fragment>
        <div className="container-fluid px-0">
            
                <div className='row my-5 bg-padding-x' style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className='col'>
                    <h1 className="front-heading">Your one stop hub for the most vetted talents</h1>
                    <p className="front-p">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    </p>
                    <button type='button' className="btn btn-lg btn-primary me-3">Hire Developers</button>
                    <button type='button' className="btn btn-lg btn-outline-primary">Explore Services</button>
                </div>
                <div className='col'><img src="https://images.pexels.com/photos/3862372/pexels-photo-3862372.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>
                <p className="mt-2">Looking for jobs instead? <Link to=''>Apply for jobs</Link></p>
                </div>
                <div className='text-center my-5 bgg-padding-y light-grey'>
                    <h2>Traditional recruiting is over. Welcome to the Talent Cloud</h2>
                    <p>Join hundreds of individuals and companies that trust WorkConnect</p>
                    <div className="gx-5">
                            <span className='fs-3 fst-italic fw-thin me-4'>Facebook</span>
                            <span className='fs-3 fst-italic fw-thin me-4'>Apple</span>
                            <span className='fs-3 fst-italic fw-thin me-4'>Google</span>
                            <span className='fs-3 fst-italic fw-thin'>Microsoft</span>
                    </div>
                </div>
                <div className='my-5 bg-padding row display-flex gx-5'>
                    <div className='col'>
                    <h3 className='small-heading'>COMPANIES</h3>
                    <h2>Hire deeply vetted software developers</h2>
                    <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    </p>
                    <button className='btn btn-lg btn-primary my-btn'>Hire developers</button>
                    </div>
                    <div className='col'>
                        <img src="https://images.pexels.com/photos/7688454/pexels-photo-7688454.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                </div>
                <div className='bg-padding row display-flex light-grey gx-5'>
                    <div className="col"><img src="https://images.pexels.com/photos/5899079/pexels-photo-5899079.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='img-addrr' /></div>
                    <div className="col">
                        <h3 className='small-heading'>COMPANIES</h3>
                        <h2>Get fully managed services</h2>
                        <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        </p>
                        <button className="btn btn-lg btn-primary">More about Services</button>
                    </div>
                </div>
                <div className='bg-padding row display-flex'>
                    <div className='col'>
                        <h3 className='small-heading'>DEVELOPERS</h3>
                        <h2>Apply for jobs</h2>
                        <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        </p>
                        <button className="btn btn-lg btn-primary">Apply for jobs</button>
                    </div>
                    <div className='col'><img src="https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>
                </div>
                <div className='bgg-padding text-center light-grey'>
                    <h2 className='mb-5'>Why businesses choose WorkConnect</h2>
                    <div className='row'>
                        <div className='col'>
                            <div>
                                <span className='success-light bi-battery-charging fs-3'></span>
                                <h3 className='d-inline ms-2'>Speed</h3>
                            </div>
                            <h1 className='success-light'>4 days</h1>
                            <p className='fs-5'>to fill most roles, sometimes same day</p>
                        </div>
                        <div className='col'>
                            <div>
                                <span className='success-light bi bi-alarm-fill fs-3'></span>
                                <h3 className='d-inline ms-2'>Time saved</h3>
                            </div>
                            <h1 className='success-light'>50+ hours</h1>
                            <p className='fs-5'>of engineering team time saved per developer for interviewing</p>
                        </div>
                        <div className='col'>
                            <div>
                                <span className='success-light bi bi-hand-thumbs-up-fill fs-3'></span>
                                <h3 className='d-inline ms-2'>Retention</h3>
                            </div>
                            <h1 className='success-light'>97%</h1>
                            <p className='fs-5'>engagement success rate</p>
                        </div>
                    </div>
                </div>
                <div className='bg-padding bg-primary row text-white'>
                    <div className='col'>
                    <h1>2 Million+ developers from 150+ countries have already joined WorkConnect</h1>
                    <div className='row'>
                        <div className='col'>
                            <h1>15+</h1>
                            <p>job types</p>
                        </div>
                        <div className='col'>
                            <h1>100+</h1>
                            <p>Technologies</p>
                        </div>
                        <div className='col'>
                            <h1>7+</h1>
                            <p>Seniority levels</p>
                        </div>
                    </div>
                    <div className=''>
                        <button className="btn btn-lg btn-light text-primary">Hire developers</button>
                        <button className="btn btn-lg btn-outline-white">Apply for jobs</button>
                    </div>
                    </div>
                    <div className='col'>
                        <img src="https://images.pexels.com/photos/6930549/pexels-photo-6930549.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                </div>
                <div  className='row my-5 bg-padding gx-5'>
                    <div className='col'><img src="https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>
                    <div className='col'>
                        <h2>Why are the best developers joining WorkConnect?
                            Because they want careers, not gigs.
                        </h2>
                        <ul className='list-unstyled gx-3'>
                            <li className='fs-4 my-4'><span className='bi bi-person-check-fill text-primary me-3'></span>Vetted once, eligible for life</li>
                            <li className='fs-4 mb-4'><span className='bi bi-star-fill text-primary me-3'></span>Exclusive WorkConnect developer success rate</li>
                            <li className='fs-4 mb-4'><span className='bi bi-wrench-adjustable text-primary me-3'></span>Income stability, thanks to 99% rematch rate</li>
                        </ul>
                        <button className="btn btn-lg btn-primary">Apply for jobs</button>
                    </div>
                </div>
                <hr className='hr' />
                <div className='my-5 bg-padding text-center'>
                    <h1>People <i className='material-icons fs-3' style={{color: 'red'}}>favorite</i> WorkConnect</h1>
                    <h3>See what others have to say about us</h3>
                
                        <div id="carouselExampleControls" className="carousel slide text-center carousel-dark" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img className="rounded-circle shadow-1-strong mb-4"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" />
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-8">
                                <h5 className="mb-3">Maria Kate</h5>
                                <p>Django Developer</p>
                                <p className="text-muted">
                                    <i className="fas fa-quote-left pe-2"></i>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                    nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                                    fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                                    doloremque.
                                </p>
                                </div>
                            </div>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="far fa-star fa-sm"></i></li>
                            </ul>
                            </div>
                            <div className="carousel-item">
                            <img className="rounded-circle shadow-1-strong mb-4"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar" />
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-8">
                                <h5 className="mb-3">Jerry Thomas</h5>
                                <p>Web Developer</p>
                                <p className="text-muted">
                                    <i className="fas fa-quote-left pe-2"></i>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                    nesciunt sint eligendi reprehenderit reiciendis.
                                </p>
                                </div>
                            </div>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="far fa-star fa-sm"></i></li>
                            </ul>
                            </div>
                            <div className="carousel-item">
                            <img className="rounded-circle shadow-1-strong mb-4"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar" />
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-8">
                                <h5 className="mb-3">Anna Deynah</h5>
                                <p>UX Designer</p>
                                <p className="text-muted">
                                    <i className="fas fa-quote-left pe-2"></i>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                    nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                                    fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                                    doloremque.
                                </p>
                                </div>
                            </div>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="far fa-star fa-sm"></i></li>
                            </ul>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
            </div>

                <div className='mt-5 text-center mild-dark bgg-padding-y text-white'>
                    <h2>Hire remote developers</h2>
                    <h3>Tell us the skills you need and we will find the best developer for you</h3>
                    <button className="btn btn-lg btn-primary">Hire developers</button>
                </div>
                <footer className='p-5 text-bg-dark'>
                    <div className='row me-3 gx-4'>
                        <div className='col'>
                            <h2 className='smaller-heading'><Link to='/'>WorkConnect</Link></h2>
                        </div>
                        <div className='col'>
                            <h2 className='smaller-heading'>Companies</h2>
                            <ul className='list-unstyled'>
                                <li>Hire developers</li>
                                <li>Book a call</li>
                                <li>Explore services</li>
                                <li>Our Service offerings</li>
                                <li>Hire Specific Skills</li>
                                <li>Customer reviews</li>
                                <li>How to Hire</li>
                            </ul>
                        </div>
                        <div className='col'>
                            <h2 className='smaller-heading'>Developers</h2>
                            <ul className='list-unstyled'>
                                <li>Apply for Jobs</li>
                                <li>Developer Login</li>
                                <li>Remote Developer Jobs</li>
                            </ul>
                        </div>
                        <div className='col'>
                            <h2 className='smaller-heading'>Company</h2>
                            <ul className='list-unstyled'>
                                <li>Blog</li>
                                <li>Press</li>
                                <li>About Us</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div className='col'>
                            <h2 className='smaller-heading'>Contact</h2>
                            <ul className='list-unstyled'>
                                <li>Contact Us</li>
                                <li>Health Center</li>
                                <li>Developer Support</li>
                                <li>Customer Support</li>
                            </ul>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col'>
                        <div className=''>
                            <span className='bi bi-facebook fs-3 me-3' style={{color: '#3b5998'}}></span>
                            <span className='bi bi-twitter fs-3 me-3' style={{color: '#00acee'}}></span>
                            <span className='bi bi-youtube fs-3 me-3' style={{color: '#c4302b'}}></span>
                            <span className='bi bi-instagram fs-3' style={{color: '#fccc63'}}></span>
                        </div>
                        <p>Copyright &copy; {date} WorkConnect</p>
                        <small>6, Lekki phase 1, Lagos state, Nigeria.</small>
                        </div>
                        <div className='col display-flex'>

                            <p className="me-3">Site Map</p>
                            <p className="me-3">Terms of Service</p>
                            <p className="me-3">Privacy Policy</p>
                        </div>
                    </div>
                </footer>
            </div>
        </React.Fragment>
  )
}

export default LandingPage;