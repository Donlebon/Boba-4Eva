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

    const [isLoading, setIsLoading] = useState(true)
    const [allBobaCafes, setAllBobaCafes] = useState([])
    const {setFavPage} = props
    const navigate = useNavigate()

    const handleReturn = (e) => {
        e.preventDefault()
        setFavPage(false)
        navigate("/")
    }

    const getAllBobaCafes = async () => {
        const response = await fetch('/api/favorites', {
            method: "GET"
        })
        const data = await response.json()
        if(data){
            setAllBobaCafes(data)
            setIsLoading(false)
        }
    }

    const removeFav = async (e, cafeId) => {
        const response = await fetch(`/api/favorites/${cafeId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await response.json()
        if(data){
            getAllBobaCafes()
        }
    }

    const editFav = async (e, cafeId, allBobaCafes) => {
        const response = await fetch(`/api/favorites/${cafeId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(allBobaCafes)
        })
        const data = await response.json()
        if(data){
            console.log('Successfully edited data')
        }
    }

    useEffect(() => {
        getAllBobaCafes()
    }, [])
    
    const handleToggle = async (e, cafeId, editMode) => {
        e.preventDefault()
        setAllBobaCafes((prev) => {
            return prev.map(cafe => {
                return cafe["_id"] === cafeId ? {...cafe, editMode: !editMode} : cafe
            })
        })
        if(editMode){
            editFav(e, cafeId, allBobaCafes)
        }
    }
    
    if(isLoading){
        return (
            <>
                <a href="/favorites" onClick={(e) => handleReturn(e)} className="favorite back backEmpty">Back</a>
                <h1 className = 'add'>Loading...</h1>
            </>
        )
    } else if(allBobaCafes.length === 0){
        return (
            <>
                <a href="/favorites" onClick={(e) => handleReturn(e)} className="favorite back backEmpty">Back</a>
                <h1 className = 'add'>No Cafes Found...</h1>
            </>
        )
    } 
    else{
        return (
        <div className = 'favorites'>
            <a href="/favorites" onClick={(e) => handleReturn(e)} className="favorite back">Back</a>
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
                                    removeFav = {removeFav}
                                    />
                            </form>
                            </div>
                        )
                    })}
            </div>
        </div>
        )
    }
}
