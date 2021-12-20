import React from 'react'

export default function Button(props) {
  const {
    text
  } = props;

  return (
    <button className={props.style}>
      {text}
    </button>
  )
}
