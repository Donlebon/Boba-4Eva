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
    // const {bobaRating, setBobaRating} = useContext(DataContext)

    const [allBobaCafes, setAllBobaCafes] = useState([])
    const [editName, setEditName] = useState(false)
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
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!editName){
            console.log('we enter edit mode')
            const response = await fetch(`/api/favorites/${1}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({hello: 'orange'})
            })
            const data = await response.json()
            console.log(data)
        } else{
            console.log('we save mode')
        }
        setEditName(prev => {
            return !prev
        })

    }
    
    console.log(allBobaCafes)
    
    if(allBobaCafes.length === 0){
        return <h1>Loading...</h1>
    } 
    else{
        console.log(allBobaCafes[0].bobaRating.fav1.rating)
        return (
        <>
            <a href="/favorites" onClick={(e) => handleReturn(e)} className="favorite">Back</a>
            <div className = 'fav-container'>
                    {allBobaCafes.map((cafes) => {
                        return (
                            <div className = "favCafe" key = {cafes.storeId}>
                                <h2>{cafes.storeName}</h2>
                                <p>{cafes.storeLocation}</p>
                                <form onSubmit = {(e) => handleSubmit(e)}>
                                    <Boba1 
                                    bobaComments = {cafes.bobaRating.fav1.comments}
                                    bobaRating = {cafes.bobaRating.fav1.rating}
                                    editName = {editName}
                                    />
                                    {/* <Boba2 
                                    bobaRating = {bobaRating}
                                    setBobaRating = {setBobaRating}
                                    editName = {editName}
                                    />
                                    <Boba3 
                                    bobaRating = {bobaRating}
                                    setBobaRating = {setBobaRating}
                                    editName = {editName}
                                    />
                                    <Boba4 
                                    bobaRating = {bobaRating}
                                    setBobaRating = {setBobaRating}
                                    editName = {editName}
                                    />
                                    <Boba5 
                                    bobaRating = {bobaRating}
                                    setBobaRating = {setBobaRating}
                                    editName = {editName}
                                    /> */}
                                <div className = 'delete-container'>
                                    <a href = {`${cafes.storeUrl}`} target = "_blank"> <img className = 'yelp' src = {yelp} alt = 'boba-rating' /></a>
                                    <button type = 'submit'>{editName ? "Save" : "Edit"}</button>
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
}
