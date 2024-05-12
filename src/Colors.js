import React, { useState } from "react";
import { useParams, NavLink, Routes, Route, Navigate } from 'react-router-dom';
import Color from "./Color";
import NewColorForm from "./NewColorForm";

const INITIAL_STATE = ['red', 'green', 'blue'];

const Colors = () => {
    const { color } = useParams();
    const [colorsList, setColorsList] = useState(INITIAL_STATE);

    const addColor = (newColor) => {
        setColorsList([newColor.color, ...colorsList]);
    };
    const navStyle = { 
        margin: '20px',
        padding: '10px'
    }
    return (
        <div>
            <div>
                <h1>Welcome to the color factory.</h1>
                <NavLink exact to="/colors/new" element={<NewColorForm addColor={addColor} />}>Add a color</NavLink>
            </div>
            <div>
                {colorsList.map((colorItem) => (
                    <NavLink key={colorItem} style={navStyle} exact to={`/colors/${colorItem}`} >
                        {colorItem}
                    </NavLink>
                ))}
            </div>
            <Routes>
                <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />
                <Route path="/colors/:color" element={<Color colorsList={colorsList}/>} />
                <Route path="/colors/*" element={<Navigate to="/colors" />} />
                <Route path="*" element={<Navigate to="/colors" />} />
            </Routes>
        </div>
    );
};

export default Colors;
