import React from 'react'

const TeamCardUi = (props) => {
  return (
    <>
      <div className="card my-3 team-card border-light position-relative">
        <img src={props.image} />
        <ul className="team-icon position-absolute top-0 list-unstyled">
          <li><i class="fa-brands fa-instagram"></i></li>
          <li><i class="fa-brands fa-facebook"></i></li>
          <li><i class="fa-brands fa-twitter"></i></li>
          <li> <i class="fa-brands fa-linkedin-in"></i></li>
        </ul>
        <div className="card-body">
          <h4>{props.title}</h4>
          <h5>{props.designation}</h5>
        </div>
      </div>
    </>
  )
}

export default TeamCardUi
