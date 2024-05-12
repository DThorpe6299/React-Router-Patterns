import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';

const NewColorForm = ({addColor})=>{
    const INITIAL_STATE = {
        color: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const navigate = useNavigate();

    const handleChange = (e) =>{
        const {name} = e.target;
        setFormData(formData=>({...formData, [name]: e.target.value}))
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        addColor({...formData});
        setFormData(INITIAL_STATE);
        navigate('/colors');
    }

    return(
        <>
            <p>Please choose a color</p>
            <form className="color-form" onSubmit={handleSubmit}>
                <label htmlFor="color">Color</label>
                <input type="text"
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
                placeholder="Enter a color"/>
                <button>Get new color</button>
            </form>
        </>
    )
}
export default NewColorForm;