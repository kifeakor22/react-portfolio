import React from 'react'

import {Link} from "react-router-dom"

const Header = () => {
    return (
        <header ClassName="header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link Class="navbar-brand" to="/">Home</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div Class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link Class="nav-link active" to="contact">contact</Link>
                        <Link Class="nav-link active" to="projectCard">projects</Link>
                        <li class="nav-item">
                  <a class="nav-link active" href="https://docs.google.com/document/d/12MlTpLn4k6hYyWIFDeuN0ZgfGeh0kKkorC0kVvYLt5g/edit?usp=sharing">Resume</a>
                </li>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header