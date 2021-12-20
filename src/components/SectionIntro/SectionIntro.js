import React from 'react'
import './SectionIntro.css';
export default function SectionIntro( props ) {
  const {header, description,} = props;
  const {
    span,
    spanStyle,
    title,
    titleStyle,
    imgSrc,
    imgAlt,
  } = header;
  
  return (
    <div className="intro">
      <h1 className={"intro__title fs-1000 " + titleStyle }>
        <span className={spanStyle}>{span}</span> {title}
        {imgSrc && <img src={imgSrc} alt={imgAlt} />} 
      </h1>
      <p className={description.style}>{description.content}</p>
      {props.children}
    </div>
  )
}
