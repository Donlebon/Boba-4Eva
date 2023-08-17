// Dependencies Import
import React from 'react';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useNavigate, Navigate } from 'react-router-dom';

// Component Imports
import Navbar from './Navbar.jsx';
import CafeCards from './CafeCards.jsx';
import Homepage from './Homepage.jsx';
import Attr from './Attribute.jsx';
import Favorites from './Favorites.jsx'
import { DataProvider } from '../components/DataContext.jsx'

export default function App(){

  const [homePage, setHomePage] = useState(true)
  const [favPage, setFavPage] = useState(false)
  const [isPending, setIsPending] = useState(false)
  const [userZip, setUserZip] = useState("")

  // Record User Input

  const getUserZip = (e) => {
    setUserZip(e.target.value)
  }

  // Fetch Data Request

  const [cafe, setCafe] = useState([])
  const [error, setError] = useState(false)  

  const fetchData = async (e) => {
    setHomePage(false)
    setIsPending(true)

    try {
        const response = await axios.get('/api/search', {
          params: {
            location: userZip, // User Zip Code
          }  
        })
        if (response) {
            setCafe(response.data.businesses.map(({name, id, image_url, rating, review_count, url, location}) => {
              return ({name, id, image_url, rating, review_count, url, location: location.city, isFav: false, editMode: false})
            }));
            setIsPending(false)
        }

    } catch (error) {
        console.log('Error fetching data:', error);
        setIsPending(false)
    }
    
    };


    // Favorite Boba Cafes

    const toggleFav = (e, storeId, storeLocation) => {
      setCafe((prev) => {
        return prev.map((item) => {
          return item.id === storeId ? {...item, isFav: !item.isFav} : item
        })
      })
    }


  return (
    <DataProvider>
    <BrowserRouter>
        <div>
        <Routes>
              <Route path = '/' element = {homePage && <Homepage 
              getUserZip = {getUserZip}
              fetchData = {fetchData}
              />} />
                <Route path = '/favorites' element = {<Favorites 
                setFavPage = {setFavPage}
                />} />
        </Routes>      
            {(!homePage && !favPage) && <Navbar 
            getUserZip = {getUserZip}
            fetchData = {fetchData}
            setFavPage = {setFavPage}
            />}
            {(!homePage && isPending) && <h1 className = 'loading'>Loading Boba Cafes...</h1>}
            {(!homePage && !favPage) && 
              <div className = 'card'>
                {cafe.map((item, index) => {
                return (
                  <CafeCards 
                  key = {index}
                  storeName = {item.name}
                  storePic = {item.image_url}
                  storeLocation = {item.location}
                  storeRating = {item.rating}
                  storeReview = {item.review_count}
                  storeId = {item.id}
                  storeUrl = {item.url}
                  isFav = {item.isFav}
                  editMode = {item.editMode}
                  toggleFav = {toggleFav}
                  />)
                })}
              </div>
            }
          {/* {(homePage) && <Attr />} */}
        </div>
    </BrowserRouter>
    </DataProvider>
  )

}