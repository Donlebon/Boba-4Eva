import React from "react";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import cat from '../components/pics/cat.png'
import elephant from "../components/pics/elephant.png"
import { useNavigate, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar(props){

    const {getUserZip, fetchData, setFavPage} = props;

    const navigate = useNavigate()

    const handleNavigate = (e) => {
        e.preventDefault()
        setFavPage(true)
        navigate("/favorites")
    }

    return (
       <>
        <div className = "nav-container2">
                <div className = "title">
                    <h1>Boba</h1>
                    <h1 className = "ever">4eva</h1>
                </div>
                <div className = "zip-container">
                    <img className = "elephant" src = {elephant}></img>
                    <input placeholder = "Zip Code" className = "search"
                    
                    onChange = {(e) => getUserZip(e)}
                    
                    ></input>


                    <button className = "submit"
                    onClick = {(e) => fetchData(e)}
    

                >Submit</button>

                    <img className = "cat" src = {cat}></img>

                    <a href="/favorites" onClick={(e) => handleNavigate(e)} className="favorite">Favorites</a>

                </div>

        </div>
       </>
    )
}
