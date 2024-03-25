import React, { useEffect, useState } from 'react'


const ShoeList = () => {
    const [shoes, setShoes] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3005/shoes")
        .then((response)=> response.json())
        .then((json) => {
            setShoes(json)
        })
    }, [])
  return (

    <ul>
        {shoes.map((shoe)=>{
            return(
            <li key={shoe.model}>{shoe.model}</li>)
        })}

    </ul>

  )
}

export default ShoeList