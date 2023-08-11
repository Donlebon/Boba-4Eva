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


export default function Navbar(props){

    // Rating for Boba Favorite Cards
    // const {bobaRating, setBobaRating} = useContext(DataContext)

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
    
    const handleToggle = async (e, cafeId, editMode) => {
        e.preventDefault()
        setAllBobaCafes((prev) => {
            return prev.map(cafe => {
                return cafe["_id"] === cafeId ? {...cafe, editMode: !editMode} : cafe
            })
        })
        console.log(allBobaCafes)
        // if(!editMode){
        //     console.log('we enter edit mode for ', cafeId)
        //     const response = await fetch(`/api/favorites/${1}`, {
        //         method: "PATCH",
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({hello: 'orange'})
        //     })
        //     const data = await response.json()
        //     console.log(data)
        // } else{
        //     console.log('we save the updates for ', cafeId)
        // }
    }
    
    
    if(allBobaCafes.length === 0){
        return (
            <a href="/favorites" onClick={(e) => handleReturn(e)} className="favorite">Back</a>
        )
    } 
    else{
        return (
        <>
            <a href="/favorites" onClick={(e) => handleReturn(e)} className="favorite">Back</a>
            <div className = 'fav-container'>
                    {allBobaCafes.map((cafes, index) => {
                        return (
                            <div className = "favCafe" key = {cafes.storeId}>
                                <h2>{cafes.storeName}</h2>
                                <p>{cafes.storeLocation}</p>
                                <form onSubmit = {(e) => handleToggle(e, cafes["_id"], cafes.editMode)}>
                                    <Boba1 
                                    index = {index}
                                    allBobaCafes = {allBobaCafes}
                                    setAllBobaCafes = {setAllBobaCafes}
                                    editMode = {cafes.editMode}
                                    cafeLink = {cafes.storeUrl}
                                    cafeId = {cafes["_id"]}
                                    />
                            </form>
                            </div>
                        )
                    })}
            </div>
        </>
        )
    }
}
