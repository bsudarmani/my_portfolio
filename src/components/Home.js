import img from '../images/black.jpg';
import graduation from '../images/graduation-cap.svg'
import project from '../images/project.png';
import programming from '../images/programming.png';
import certificate from '../images/certificate.svg';
// import gfg from '../images/greeksforgeeks.png';
import tool from '../images/tool.svg';
import developer from '../images/web-developer.svg'
import html from '../images/html-5.svg';
import css from '../images/css-3.svg';
import js from '../images/js.svg';
import git from '../images/git.svg';
import github  from '../images/github1.svg';
import c from '../images/c-original.svg';
import cplus from '../images/c++.svg';
import java from '../images/java-original-wordmark.svg';
import php from '../images/php.svg';
import react from '../images/react.svg';
import node from '../images/node-js.svg';
import express from '../images/expressjs.svg';
import vscode from '../images/vscode.svg';
import bootstrap from '../images/bootstrap.svg';
import mongodb from '../images/mongodb.svg';
import mysql from '../images/mysql.svg';
// import npm from '../images/npm.svg';
// import xampp from '../images/xampp.svg';
import weather from  '../images/weather.svg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import { useTypewriter } from 'react-simple-typewriter';
import React, { useRef,useState ,useEffect} from 'react';
import emailjs from '@emailjs/browser';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import PuffLoader from "react-spinners/PuffLoader";
const Home=()=>
{
   const [loading,setloading]=useState(false);
   useEffect(()=>
   {
    setloading(true)
    setTimeout(()=>{
    setloading(false);
    },5000)
   },[])
     const [text]=useTypewriter({
    words:[   "MERN Stack developer."," Web developer ." ,"Java developer .","Js Developer."],
   loop:false,
    typeSpeed:50,
    deleteSpeed:100,
    delaySpeed:2000,
  }) ;
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };
  const form = useRef();
const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = 'service_oulqk5p';
    const templateId = 'template_pg90q55';
    const publicKey = 'urn3bEssDhA5i_HhV';
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Web Wizard',
      message: message,
    };
   
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

  //cursor
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
    return(
 <div className='container overflow-hidden ' >
  <div className=''>
  {/* navbar */}
  {/* <Navbar expand="sm" >
      <Container >
        <Navbar.Brand href="/home" ><span className='text-light h2'>S  </span><span className='text-success h2'>M</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" type='button' />
        <Navbar.Collapse id="navbarScroll" className='navbar-toggle ' >
          <Nav className='text m-auto'  >
            <Nav.Link href="#home" className='f-w nav-space'>Home</Nav.Link>
            <Nav.Link href="#about"  className='f-w nav-space'>About</Nav.Link>
            <Nav.Link href="#skills"  className='f-w nav-space'>Skills</Nav.Link>
            <Nav.Link href="#project"  className='f-w nav-space'>Project</Nav.Link>
            <Nav.Link href="#contact"  className='f-w nav-space'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
  {/* cursor  control*/}
  {
    loading ?  
    <div className="pre-loader-container">
      <PuffLoader
        color={"#198957"}
        loading={loading}
        size={100}
        className='pre-loader'
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div> 
  :
<div>
<div className="custom-cursor-outer " style={{ left: `${position.x}px`, top: `${position.y}px` }} />
 <div className="custom-cursor-inner " style={{ left: `${position.x}px`, top: `${position.y}px` }} />
 {/* home */}
<div className=' row  home ' id='home'>
       <div className=' col-sm-12 col-md-12 col-lg-12 col-xl-6 py-1'>
             <div className='m-5'>
                 <div className='align-item-center'>
                    {/* <h4 className='text-light'>WELCOME TO  MY WEB PAGE</h4> */}
                    <h1 className='text-light'>Hi My name {" "}
                     <span className='  h7 '>Sudarmani</span>
                      </h1>
                     <h2 className='text-light'>
                      I'm an Aspiring <span className='text-light '>{text}</span>
                     </h2>
                     <br></br>
                     <p className='lead'> Welcome to my web development portfolio .</p>
                 </div>
                 <div className='fa-head'>
                 <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'>
                <i className='fa fa-envelope fa-home'></i>
                </a>
                <a href='https://github.com/bsudarmani/'>
                <i className='fa fa-github fa-home'></i>
                </a>
                <a href='https://in.linkedin.com/in/sudarmani-b-564ba7280?trk=public_profile_browsemap'>
                <i className='fa fa-linkedin fa-home'></i>
                </a>
                <a href='https://www.instagram.com/sudarmani05/'>
                <i className='fa fa-instagram fa-home'></i>
                </a>
                <a href='https://www.facebook.com/checkpoint/1501092823525282/?next=https%3A%2F%2Fwww.facebook.com%2Fconfirmemail.php%3Fnext%3Dhttps%253A%252F%252Fwww.facebook.com%252F'>
                <i className='fa fa-facebook fa-home'></i>
                </a>
  
                 </div>
             </div>
        </div>
        <div className='  col-sm-12 col-md-6 col-lg-6 col-xl-6    '>
          <div className=''>
          <img className='home-img rounded ' src={img} alt='img' width={350} height={350}></img>
          </div>
        </div>
</div>
 {/* About  */}
 <div className=' m-5' id='about'>
  <h1 className='text-center'>About <span className='text-success'>Me</span></h1>
   <p className='text-center h5'>My <span className='text-success'>Self</span></p>
 </div>
 <div className='row container m-1' >
  <div className='container col-sm-12 col-md-6 col-lg-6 col-xl-6 '>
  <div className='row py-5'>
     <div className='col-6 my-2'>
      <img className='about' src={graduation} alt='' width={80} height={80}></img> 
      <br></br>
      <span className='h5 about-letter'>2<span className='text-success'>+</span>Yrs of experience</span>
     </div>
     <div className='col-6 my-2'>
      <img className='about' src={project} alt='' width={80} height={80}></img> 
      <br></br>
      <span className='h5 about-letter'>5<span className='text-success'>+</span>Completed</span>
     </div>
     <div className='col-6 my-2'>
      <img className='about' src={certificate} alt='' width={80} height={80}></img> 
      <br></br>
      <span className='h5 about-letter'>10<span className='text-success'>+</span>Certification</span>
     </div>
     <div className='col-6 my-2'>
      <img className='about' src={tool} alt='' width={80} height={80}></img> 
      <br></br>
      <span className='h5 about-letter'>20<span className='text-success'>+</span>Tools</span>
     </div>
     <div className='col-6 my-2'>
      <img className='about' src={programming} alt='' width={80} height={80}></img> 
      <br></br>
      <span className='h5 about-letter'>5<span className='text-success'>+</span>Programming language </span>
     </div>
     {/* <div className='col-6 my-3'>
      <img className='rounded about' src={gfg} alt='' width={50} height={50}></img> 
      <br></br>
      <span className='h5 about-letter'>30<span className='text-success'>+</span>Problem Solved</span>
     </div> */}
  </div>
  </div>
  <div className='col-sm-10 col-md-6 col-lg-6 col-xl-6 my-5'>
     <p className=' lead container'>Greetings !✨, Welcome! I'm Sudarmani, a web developer with a passion for crafting digital wonders.
      🌐 Armed with  a 🎓 BSc in Computer Science from ANJAC College 🏫, Sivakasi, I've been on a quest to innovate and create, I specialize in [Im self-starter also always eager to learn new technology.]
       💻 My code is a fusion of creativity and precision, ensuring seamless and visually stunning websites.
        🎨 From concept to execution, I transform ideas into interactive experiences that leave a lasting impact. 
        Let's collaborate and bring your digital vision to life! 🔧 Explore my portfolio for a glimpse into the world where innovation meets code.</p>
  
     <button className='btn btn-success b-w  btn-lg get-resume'>Get My Resume</button>
  </div>
 </div>
{/* Skills */}
<div className='  m-5'  id='skills'>
<h2 className=''>My <span className='text-success'>Skills</span></h2>
  <p className=' lead  '>Dedicated to crafting aesthetic user experiences with modern front-end architecture, I embrace the responsibility of creating visually compelling digital journeys.</p>
  <div className='row'>
    <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
     <h3 className='m-1 h4'>Language & Script </h3>
    <img className='m-3' src={c} alt='' width={50} height={50}></img> 
    <img className='m-3' src={cplus} alt='' width={50} height={50}></img> 
    <img className='m-3' src={java} alt='' width={50} height={50}></img> 
    <img className='m-3' src={php} alt='' width={50} height={50}></img> 
    <img className='m-3' src={html} alt='' width={50} height={50}></img> 
    <img className='m-3' src={css} alt='' width={50} height={50}></img> 
    <img className='m-3' src={js} alt='' width={50} height={50}></img> 
    <img className='m-3' src={git} alt='' width={50} height={50}></img> 
    <img className='m-3' src={github} alt='' width={50} height={50}></img> 
    </div>
    <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
     <h3 className='m-1 h4'>Framework & Libaries & Tools </h3>
    <img className='m-3' src={bootstrap} alt='' width={50} height={50}></img> 
    <img className='m-3' src={react} alt='' width={50} height={50}></img> 
    <img className='m-3' src={node} alt='' width={50} height={50}></img> 
    <img className='m-3' src={express} alt='' width={100} height={100}></img> 
    <img className='m-3' src={vscode} alt='' width={50} height={50}></img> 
    </div>
    <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
     <h3 className='m-1 h4'>Databases </h3>
    <img className='m-3 ' src={mongodb} alt='' width={50} height={50}></img> 
    <img className='m-3' src={mysql} alt='' width={50} height={50}></img> 
    {/* <h3 className='m-4 h4'>Others</h3>
    <img className='mx-2' src={npm} alt='' width={50} height={50}></img> 
    <img className='mx-2' src={xampp} alt='' width={50} height={50}></img>  */}
    </div>
  </div>
</div>
 {/* Projects*/}
 <h2 className='text-center m-2'>My <span className='text-success'>Projects</span></h2>
 <p className='text-center lead'>Showcasing my web development projects to demonstrate creativity and technical proficiency on my portfolio.</p>
 <div className=' row' id='project'>

      <div className='container col-sm-6 col-md-6 col-lg-4 col-xl-4'>
    <div className='container card  text-light '>
       <div class="container card-body ">
        <img src={developer} class="card-img-top" width={120} height={120} alt="..."/>
       <h5 className="card-title text-center text-success">Portfolio</h5>
      <p className="card-text text-center">Explore my accomplished portfolio projects, showcasing expertise and creativity in one click.</p>
      <div className="d-flex justify-content-center">
      <a href='https://github.com/bsudarmani/my_portfolio/'>
          <i className='fa fa-github fa-home'></i>
      </a>
      <a href='https://sudarmani.netlify.app/home'>
          <i className='fa fa-chrome fa-home'></i>
      </a>
      </div>
      </div>
    </div>
    </div>
    <div className='container col-sm-6 col-md-6 col-lg-4 col-xl-4'>
    <div className='container card  text-light '>
       <div class="container card-body ">
        <img src={weather} class="card-img-top" width={120} height={120} alt="..."/>
       <h5 className="card-title text-center text-success">Portfolio</h5>
      <p className="card-text text-center">Explore my accomplished portfolio projects, showcasing expertise and creativity in one click.</p>
      <div className="d-flex justify-content-center">
      <a href='https://github.com/bsudarmani/weather_app'>
          <i className='fa fa-github fa-home'></i>
      </a>
      <a href='https://sudarweather.netlify.app/'>
          <i className='fa fa-chrome fa-home'></i>
      </a>
      </div>
      </div>
    </div>
    </div>
    {/* <div className='container col-sm-6 col-md-6 col-lg-4 col-xl-4'>
    <div className='card text-light my-4'>
    <div class="card-body m-2">
        <img src={img} class="card-img-top" width={100} height={250} alt="..."/>
         <div class="card-body">
         <h5 class="card-title text-center  text-success ">Netflix Clone <span><i className='fa fa-github text-success   rounded mx-2 '></i><i className='fa fa-globe text-success rounded mx-2'></i></span></h5>
         <p class="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
         </div>
      </div> 
    </div>
    </div> */}
    {/* <div className='container col-sm-6 col-md-6 col-lg-4 col-xl-4'>
    <div className='card text-light my-4'>
    <div className="card-body m-2">
        <img src={img} class="card-img-top" width={100} height={250} alt="..."/>
         <div class="card-body">
         <h5 class="card-title text-center  text-success ">java Application<span><i className='fa fa-github text-success   rounded mx-2'></i><i className='fa fa-globe text-success rounded mx-2'></i></span></h5>
         <p class="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
         </div>
      </div>
      </div>
      </div> */}
      {/* <div className='container col-sm-6 col-md-6 col-lg-4 col-xl-4'>
     <div className='card text-light my-4'>
     <div class="card-body m-2">
        <img src={img} class="card-img-top" width={100} height={250} alt="..."/>
         <div class="card-body">
         <h5 class="card-title text-center  text-success ">java Appliaction 2<span><i className='fa fa-github text-success   rounded mx-2'></i><i className='fa fa-globe text-success rounded mx-2'></i></span></h5>
         <p class="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
         </div>
      </div>
      </div>
      </div> */}
        {/* </Slider> */}
 </div>
 {/* contact */}
 <div id='contact'>
 <h1 className='text-center h2 m-3 p-3 mb-5'>Contact <span class='text-success'> Me</span></h1>
 <div className='container row' >
  <div className=' container col-sm-10 col-md-6 col-lg-6 col-xl-6 align-item-center justify-content-center '>
        <form onSubmit={handleSubmit } className='emailForm' ref={form}>
      <input
        type="text"
        className='mb-5 form-control'
        placeholder="enter your name"
        name='your_name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
      type='email'
        className='mb-5 form-control'
        placeholder="enter your Email"
        name='your_email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        cols="30"
        rows="4"
        type="message"
        className='form-control mb-5'
        placeholder='enter your message'
        name='your_message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      >
      </textarea>
      <button className='btn btn-success mb-5 btn-block btn-lg submit' type='submit' value='send' >Send Message<span><i className='fa fa-paper-plane mx-2'></i></span></button>
    </form>

    </div>
 </div>
 </div>
 {/* footer */}
 <h3 className='text-light h2 text-center align-item-center m-3 p-3 let-connect'>Let's <span className='text-success'> connect</span></h3>
 <div className='container row   my-3  '>
  <div className=' col-sm-12  col-md-12 col-lg-12 col-xl-12 '>
    <div className=' d-flex  fa-footer '>
    <a href='https://github.com/bsudarmani/'>
        <i className='fa fa-github fa-home  fa-foot-icon ' ></i>
    </a>
    <a href='https://www.facebook.com/checkpoint/1501092823525282/?next=https%3A%2F%2Fwww.facebook.com%2Fconfirmemail.php%3Fnext%3Dhttps%253A%252F%252Fwww.facebook.com%252F'>
        <i className='fa fa-facebook fa-home fa-foot-icon'></i>
    </a>
    <a href='https://in.linkedin.com/in/sudarmani-b-564ba7280?trk=public_profile_browsemap' >
      <i className='fa fa-linkedin fa-home  fa-foot-icon'></i>
    </a>
    </div>
  </div>
 </div>
 <h1 className='text-center h6'> Developed  By <span className='text-success'>Sudarmani</span> <span className='text-ligh '>🤍 </span> </h1>
 </div>
}
</div>
</div> 

) 
}
export default Home;                                           
