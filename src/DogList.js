import React from "react";
import './DogList.css'
import { NavLink, Routes, Route, useParams } from "react-router-dom";
import DogDetails from "./DogDetails";

const DogList = ({ dogs }) => {
    const { name } = useParams();

    return (
        <nav>
            <div >
                {dogs.map(dog => (
                    <NavLink className="dog-links" key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
                        {dog.name.toLowerCase()}
                    </NavLink>
                ))}
            </div>
            <div className="Dog-routes">
                <Routes>
                    <Route exact path="dogs/:name" element={<DogDetails dogs={dogs} />}></Route>
                    <Route></Route>
                </Routes>
            </div>
        </nav>
    )
}

export default DogList;
