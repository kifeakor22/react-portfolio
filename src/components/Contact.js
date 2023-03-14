import React from 'react'

import {Link} from "react-router-dom"

const Contact = () => {
    return (
        <div>
        <section className="contactMe">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <h2 class="contact">Get in touch</h2>
              <div class="social d-flex justify-content-center">
                <Link class="mx-2" href="mailto:kifeakor@yahoo.com">
                  <i class="fas fa-envelope fa-2x"></i>
                </Link>
                <a class="mx-2" href="https://twitter.com/?lang=en">
                  <i class="fab fa-twitter fa-2x"></i>
                </a>
                <a class="mx-2" href="https://en-gb.facebook.com/">
                  <i class="fab fa-facebook-f fa-2x"></i>
                </a>
                <a class="mx-2" href="https://github.com/kifeakor22">
                  <i class="fab fa-github fa-2x"></i>
                </a>
                <a class="mx-2" href="https://https://www.linkedin.com/in/kc-ifeakor-b79a6031/">
                  <i class="fab fa-linkedin fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}

export default Contact