import React from "react"
import blankStar from '../pics/blankStar.png'
import yellowStar from '../pics/yellowStar.png'

export default function BobaRatings(props){

    const {bobaRating, setBobaRating} = props

    // console.log(bobaRating)
    // const handleClick = () => {
    //     setBobaRating((prev) => {
    //         return {...prev, prev['fav1']['rating']: 1}
    //     })
    // }

    return (
        <div className = 'drinks-container'>
            <input className = 'drinks' />
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