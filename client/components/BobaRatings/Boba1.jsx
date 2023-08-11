import React from "react"
import blankStar from '../pics/blankStar.png'
import filledStar from '../pics/yellowStar.png'
import trash from '../pics/trash.png'
import yelp from '../pics/yelp.png'

export default function BobaRatings(props) {
    const { cafeId, cafeLink, editMode, allBobaCafes, setAllBobaCafes } = props;

    const handleChange = (e, ratingKey) => {
                const newRating = {
                    ...cafe.bobaRating[ratingKey],
                    comments: e.target.value,
                };
        
                setAllBobaCafes(prev => {
                    return prev.map(prevCafe => {
                        if (prevCafe._id === cafeId) {
                            return {
                                ...prevCafe,
                                bobaRating: {
                                    ...prevCafe.bobaRating,
                                    [ratingKey]: newRating,
                                },
                            };
                        }
                        return prevCafe;
                    });
                });
            };

    const cafe = allBobaCafes.find(cafe => cafe._id === cafeId);
    if (!cafe) {
        return null; // Cafe not found, handle this case
    }

    const handleRatingChange = (ratingKey, newRating) => {
        setAllBobaCafes(prev => {
            return prev.map(prevCafe => {
                if (prevCafe._id === cafeId) {
                    return {
                        ...prevCafe,
                        bobaRating: {
                            ...prevCafe.bobaRating,
                            [ratingKey]: {
                                ...prevCafe.bobaRating[ratingKey],
                                rating: newRating,
                            },
                        },
                    };
                }
                return prevCafe;
            });
        });
    };

    const removeFav = (e, cafeId) => {
        console.log(cafeId)
    }


    return (
        <>
            {Object.keys(cafe.bobaRating).map(ratingKey => (
                <div className='drinks-container' key={ratingKey}>
                    {editMode ? (
                        <>
                            <input
                                value={cafe.bobaRating[ratingKey].comments}
                                onChange={e => handleChange(e, ratingKey)}
                                className='drinks'
                            />
                            <div className='star-container'>
                                {[1, 2, 3, 4, 5].map(star => (
                                    <img
                                        key={star}
                                        src={star <= cafe.bobaRating[ratingKey].rating ? filledStar : blankStar}
                                        alt={`Star ${star}`}
                                        className='star'
                                        onClick={() => handleRatingChange(ratingKey, star)}
                                    />
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className='display-mode'>
                            <h1>{cafe.bobaRating[ratingKey].comments}</h1>
                            <div className='star-container'>
                                {[1, 2, 3, 4, 5].map(star => (
                                    <img
                                        key={star}
                                        src={star <= cafe.bobaRating[ratingKey].rating ? filledStar : blankStar}
                                        alt={`Star ${star}`}
                                        className='star'
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
            <div className='delete-container'>
                <a href={cafeLink} target="_blank">
                    <img className='yelp' src={yelp} alt='boba-rating' />
                </a>
                <button type='submit'>{editMode ? 'Save' : 'Edit'}</button>
                <img className='trash' src={trash} onClick = {(e) => removeFav(e, cafeId)} />
            </div>
        </>
    );
}
