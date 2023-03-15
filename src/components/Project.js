import React from 'react';


const ProjectCard = (props) => {

  return (
    <div>
          <div className="cardContainer col-lg-12 col-md-3 col-sm-12">
            <div className="card h-100">
              <img src={require(`${props.image}`)} className="card-img-top image-fluid"  height="350" alt={props.alt}/>
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.repo} className="btn btn-outline-secondary">Click here to Visit</a>
                <a href={props.deployed} className="btn btn-outline-secondary">Visit Github Repo<i className="fab fa-github"></i></a>
              </div>
            </div>
          </div>      
    </div>
    
  )

}

export default ProjectCard;
