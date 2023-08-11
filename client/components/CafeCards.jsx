import React from "react";
import axios from "axios";
import { useEffect, useState, useRef, useContext } from "react";
import notFavBoba from '../components/pics/bubble-tea.png'
import favBoba from '../components/pics/boba-fav.png'
import yelp from "../components/pics/yelp.png"
import DataContext from "../components/DataContext.jsx";

export default function CafeCards(props){

    const {bobaRating, setBobaRating} = useContext(DataContext)

    const {storeName, storePic, storeLocation, storeRating, storeReview, storeId, storeUrl, toggleFav, isFav, editMode} = props

    console.log(props)
    
    const sendFav =  async (e) => {
      e.preventDefault();
      
      // Send a POST request to the server

      try{
        const response = await axios.post('/api/submit', {storeName, storeLocation, storeId, storeUrl, isFav: true, editMode: false, bobaRating})
        console.log('Data submitted to MongoDB succesfully')
      }
      catch (err){
        console.log('Failed to favorite cafe data to MongoDB:', err)
      }

    }
      
    return (
            <div className = 'card-container'>
                <img className = 'storePic' src = {storePic}></img>
                <h1 className = 'storeName'>{storeName}</h1>
                <p className = 'storeLocation'>{storeLocation}</p>


                <div className = 'rating-container'>
                    <div className = 'storeRating'>
                        <p className = 'rating-title'>Rating</p>
                        <p className = 'rating'>{storeRating} ⭐</p>
                    </div>
                    <div className = 'storeReview'>
                        <p className = 'review-title'>Reviews</p>
                        <p className = 'review'>{storeReview}</p>
                    </div>
                </div>

                <div className = 'card-footer'>
                    <a href = {storeUrl} target = "_blank"> <img className = 'url' src = {yelp} alt = 'boba-shop' /></a>
                    <img 
                    onClick = {(e) => {toggleFav(e, storeId, storeLocation); sendFav(e, storeName, storeLocation, storeId, storeUrl, isFav, bobaRating, editMode)}}
                    className = 'boba' src = {isFav ? favBoba : notFavBoba } />
                </div>
            </div>
    )
}


// Correctly making a fetch request to server which makes a request to API

// useEffect(() => {

  //   const controller = new AbortController();
  //   const signal = controller.signal;

  //   const fetchData = async () => {
  //     setError(false);
  //     setIsPending(true);

  //     try{
  //       const response = await fetch('/api', {signal});
  //       console.log(response)
  //       const stores = await response.json()
  //       setCafe(stores.users)
  //     }
  //     catch(err){
  //       setError(true);
  //     }
  //     setIsPending(false)
  //   }

  //   fetchData()
  //   return () => {controller.abort()}
  // }, [])




