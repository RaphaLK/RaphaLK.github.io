import React from 'react'
import './ExperienceCard.css'
const ExperienceCard = ({ image, title, date, description }) => {
  return (
    <div className="experience-card">
      <img src={image} alt={title} className="experience-image" />
      <div className="experience-info">
        <h3>{title}</h3>
        <p className="experience-date">{date}</p>
        <p className="experience-description">{description}</p>
      </div>
    </div>
  )
}

export default ExperienceCard
