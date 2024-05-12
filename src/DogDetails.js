import React from "react";
import { useParams } from "react-router";

const DogDetails = ({dogs}) => {
    const { name } = useParams();
    const foundDog = dogs.find(dog=>dog.name.toLowerCase() === name.toLowerCase());

    return (
        <div>
            <h2>{foundDog.name}</h2>
            <img src={foundDog.src} alt={foundDog.name} />
            <ul>
                {foundDog.facts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                ))}
            </ul>
        </div>
    );
}
export default DogDetails;