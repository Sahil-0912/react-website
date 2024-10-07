import React from 'react'

const ServiceCardUi = (props) => {
  return (
    <>
         <div className="card my-4  service-card border-light">
         <i className={props.icon}></i>
            <div className="card-body">
                <h3>{props.title}</h3>
                <p>{props.paragraph}</p>
                <span>{props.more}</span>
            </div>
        </div>
    </>
  )
}

export default ServiceCardUi
