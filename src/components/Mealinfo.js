import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Mealinfo = () => {
    const { mealid } = useParams();
    const [info, setInfo] = useState(null);

    useEffect(() => {
        const getInfo = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
                const jsonData = await response.json();
                if (jsonData.meals && jsonData.meals.length > 0) {
                    setInfo(jsonData.meals[0]);
                } else {
                    setInfo(null); 
                }
            } catch (error) {
                console.error('Error fetching meal data:', error);
                setInfo(null); 
            }
        };

        getInfo();
    }, [mealid]);

    return (
        <div className="relative ">
            {info ? (
                <div className="mealInfo flex flex-col md:flex-row">
                    <img src={info.strMealThumb} alt={info.strMeal} className="md:w-1/2 md:mb-0 mb-4  lg:flex hidden" style={{ maxWidth: '300px' }} />
                    <div className="info md:w-1/2 p-4">
                        <h1 className="text-3xl mt-[4.5rem] text-[#402d21] underline">Recipe Detail</h1>
                        <button className="mt-2">{info.strMeal}</button>
                        <h3 className="text-xl text-[#402d21] mt-2">INSTRUCTIONS:</h3>
                        <p className="text-[#805b43]">{info.strInstructions}</p>
                    </div>
                </div>
            ) : (
                <p>Data Not Found</p>
            )}
        </div>
    );
};

export default Mealinfo;
