import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
    return (
          <section class="jumbotron jumbotron-fluid herogrid">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="heading">
                        <h1 class="typing-text">Hello my name is KC</h1>
                    </div>
                    <div class="subHeading">
                        <h2>A UX/UI Frontend developer</h2>
                        <p class="lead">With great focus on accessibility and mobile-first responsive designs. Web development allows me to combine my creative and technical skills in a way that is both challenging and rewarding.</p>
                        <hr class="my-4"></hr>
                        <Link to="contact" class="btn bt-cta btn-lg">Contact Me</Link>
                    </div>
                </div>  
            </div>
          </div>
        </section>
      
    )
}
export default Home