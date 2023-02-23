import React from 'react';

const WorkItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="projectImage" className="work__img" width={"295px"} height={"295px"} />
      <h3 className="work__title">{item.title}</h3>
      <a href={item.link} target="_blank" className="work__button" rel="noopener noreferrer">
        Demo <i className="bx bx-right-arrow-alt work__button-icon">

        </i>
      </a>
    </div>
  )
}

export default WorkItems
