import React from "react";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import cat from '../components/pics/cat.png'
import elephant from "../components/pics/elephant.png"
import { useNavigate, Navigate, Link } from "react-router-dom";


export default function Homepage(props){

    const {getUserZip, fetchData} = props;

    return (
        <>            
            <div className = "nav-container">
                <h1>Boba Explorer</h1>
            </div>
            <main className = "home-container">
                <div className = "highlight"></div>
                <div className = "zip-container">
                    <img className = "elephant" src = {elephant}></img>
                    
                    <input placeholder = "Zip Code" className = "search" 
                    
                    onChange = {(e) => getUserZip(e)}
                    
                    >

                    </input>

                    <button className = "submit"
                    onClick = {(e) => fetchData(e)}
    
                    >Submit</button>

                    <img className = "cat" src = {cat}></img>
                </div>
                <div className = "footer"></div>
            </main>
        </>
    )


}
