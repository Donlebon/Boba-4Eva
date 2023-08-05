import React from "react"
import blankStar from '../pics/blankStar.png'
import yellowStar from '../pics/yellowStar.png'

export default function BobaRatings(props){

    const {bobaComments, bobaRatings, editName} = props

    const handleChange = (e) => {
        e.preventDefault()
        setBobaRating(prev => {
            return !prev
        })
    }

    console.log('this is the first boba comment', bobaComments)
    console.log('this is the first boba rating', bobaRatings)


    // const toggleFav = (e, storeId, storeLocation) => {
    //     setCafe((prev) => {
    //       return prev.map((item) => {
    //         return item.id === storeId ? {...item, isFav: !item.isFav} : item
    //       })
    //     })
    //   }
  

   

    return (
        <div className = 'drinks-container'>
            {editName ? <input onChange = {(e) => handleChange(e)} className = 'drinks' /> : <h1>{bobaRatings}</h1>}
                <div className = 'star-container'>
                    <img src={blankStar} 
                    alt="" className = 'blankStar'/>
                    <img src={blankStar} 
                    alt="" className = 'blankStar'/>
                    <img src={blankStar} alt="" className = 'blankStar'/>
                    <img src={blankStar} alt="" className = 'blankStar'/>
                    <img src={blankStar} alt="" className = 'blankStar'/>
                </div>
    </div>
    )
}