import React from 'react'
import {Link} from "react-router-dom"
import ProjectCard from './Project'
import Contact from './Contact'
import projects from '../projects.json'

const name = "KC Ifeakor"

const Home = () => {
    return (
        <div>
          <section class="jumbotron jumbotron-fluid herogrid">
            <div class="container-fluid">
              <div class="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                            <img className="profilePic" src={require("./images1/img.png")}width="200" height="auto" alt='profile'/>
                        </div>
                <div class="col-lg-8 col-md-8 col-sm-12">
                    <div class="heading">
                        <h1 class="typing-text">Hello my name {name}</h1>
                    </div>
                    <div class="subHeading">
                        <h2>A UX/UI Frontend developer</h2>
                        <p class="lead">With great focus on accessibility and mobile-first responsive designs. Web development allows me to combine my creative and technical skills in a way that is both challenging and rewarding.</p>
                        <Link to="contact" class="btn bt-cta btn-lg">Contact Me</Link>
                    </div>
                </div> 
                <hr class="my-4"></hr> 
            </div>
          </div>
        </section> 
        <div className='portfolio'>
           <h2 class="sectionHeading">Work Portfolio</h2>
        </div>
        {projects.map((data) => <ProjectCard key={data.id}
        image={`${data.image}`}
        alt={data.alt}
        title={data.title}
        description ={data.description}
        repo={data.repo}
        deployed={data.deployed}/>
        )}
        
        <Contact/>
        </div>
      
    )
}
export default Home