import React from 'react'

function POPOSSpace(props) {
  const { name, image, address } = props
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}images/${props.image}`} width="300" height="300" alt="Hello" />
      <h1>{props.name}</h1>
      <div>{props.address}</div>
    </div>
  )
}

export default POPOSSpace
