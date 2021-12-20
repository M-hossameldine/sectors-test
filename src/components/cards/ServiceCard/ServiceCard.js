import React from 'react'
import './style.css'
export default function ServiceCard(props) {
  const {
    title,
    imgUrl,
    imgAlt,
    body,
  } = props;

  return (
    <div className="service-card text-light-1">
      <div className="service-card__head">
        <img src={imgUrl} alt={imgAlt} />
        <h3>{title}</h3>
      </div>
      <div className="service-card__body">
        <p>{body}</p>
      </div>
    </div>
  )
}
