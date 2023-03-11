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
                        <Link Class="nav-link active" to="project">project</Link>
                        <Link class="nav-link active" to="aboutme">About Me</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header