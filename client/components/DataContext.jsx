import { createContext, useState, useEffect } from "react";
import React from "react";

const DataContext = createContext({})

export const DataProvider = ({children}) => {

    const [bobaRating, setBobaRating] = useState({
        fav1: {
          comments: '-',
          rating: 0,
        },
        fav2: {
          comments: '-',
          rating: 0,
        },
        fav3: {
          comments: '-',
          rating: 0,
        },
        fav4: {
          comments: '-',
          rating: 0,
        },
        fav5: {
          comments: '-',
          rating: 0,
        },
    })

    return (
        <DataContext.Provider value = {{
            bobaRating, setBobaRating
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext