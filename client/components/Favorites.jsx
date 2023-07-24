import React from "react";
import axios from "axios";
import { useEffect, useState, useRef, useContext } from "react";
import cat from '../components/pics/cat.png'
import elephant from "../components/pics/elephant.png"
import { useNavigate, Navigate } from "react-router-dom";
import trash from '../components/pics/trash.png'
import yelp from '../components/pics/yelp.png'
import DataContext from "../components/DataContext.jsx";

// Import Boba Ratings 

import Boba1 from './BobaRatings/Boba1.jsx'
import Boba2 from './BobaRatings/Boba2.jsx'
import Boba3 from './BobaRatings/Boba3.jsx'
import Boba4 from './BobaRatings/Boba4.jsx'
import Boba5 from './BobaRatings/Boba5.jsx'



export default function Navbar(props){

    // Rating for Boba Favorite Cards
    const {bobaRating, setBobaRating} = useContext(DataContext)

    const [allBobaCafes, setAllBobaCafes] = useState([])
    const {setFavPage} = props
    const navigate = useNavigate()

    const handleReturn = (e) => {
        e.preventDefault()
        setFavPage(false)
        navigate("/")
    }

    useEffect(() => {
        const getAllBobaCafes = async () => {
            const response = await fetch('/api/favorites', {
                method: "GET"
            })
            const data = await response.json()
            if(data){
                setAllBobaCafes(data)
            }
        }
        getAllBobaCafes()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('saved')
    }

    const handleBobaFavs = {
        fav2(e){
            console.log(e.target)
            console.log('hello1')
        },
        fav2(e){
            console.log(e.target)
            console.log('hello2')
        }
    }

    console.log(allBobaCafes)
    // console.log(bobaRating)

    return (
    <>
        <a href="/favorites" onClick={(e) => handleReturn(e)} className="favorite">Back</a>
       <div className = 'fav-container'>
                {allBobaCafes.map((cafes) => {
                    return (
                        <div key = {cafes.storeId}>
                            <h2>{cafes.storeName}</h2>
                            <p>{cafes.storeLocation}</p>
                            <form onSubmit = {(e) => handleSubmit(e)}>
                                <Boba1 
                                bobaRating = {bobaRating}
                                setBobaRating = {setBobaRating}
                                />
                                <Boba2 
                                bobaRating = {bobaRating}
                                setBobaRating = {setBobaRating}
                                />
                                <Boba3 
                                bobaRating = {bobaRating}
                                setBobaRating = {setBobaRating}
                                />
                                <Boba4 
                                bobaRating = {bobaRating}
                                setBobaRating = {setBobaRating}
                                />
                                <Boba5 
                                bobaRating = {bobaRating}
                                setBobaRating = {setBobaRating}
                                />
                            <div className = 'delete-container'>
                                <a href = {`${cafes.storeUrl}`} target = "_blank"> <img className = 'yelp' src = {yelp} alt = 'boba-rating' /></a>
                                <button type = 'submit'>Edit</button>
                                <img className = 'trash' src = {trash}/>
                           </div>
                           </form>
                        </div>
                        
                    )
                })}
       </div>
    </>
    )

}
