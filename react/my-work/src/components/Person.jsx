import React from 'react'


const Person = ({ name, tel, img}) => {
     return (
    <div>
    <Msg name={name} />
        <img style={{width:"300px"}}src={img} alt="" />
        <p>tel {tel}</p>
    </div>
  )
}

export default Person