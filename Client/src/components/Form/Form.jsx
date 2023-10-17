import React, { useState } from "react";
import validation from './validation';
import Styles from './Form.module.css';


// import { Link } from "react-router-dom";

let {myError} = Styles;

const Form = ({ login })=>{

    let [userData, setUserData] = useState({
        username: '',
        password: '' 
    });

    const [errors, setErrors] = useState({
        username: '', 
        password: '' 
    });

    let handleImputChange=(e)=>{
        setUserData({
            ...userData,
            [e.target.name] : e.target.value
        })

        setErrors(
            validation({
                ...userData,
                [e.target.name] : e.target.value
            })
        );
    }
    let handleSubmit=(e)=>{
        e.preventDefault();
        // console.log("USERDATA", userData);
        login(userData);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <img src="https://m.media-amazon.com/images/I/81dH1faXr7L._AC_SL1500_.jpg"></img>
                <label htmlFor="username">Email</label>
                <input 
                    type="text" 
                    placeholder="algo@email.com" 
                    name="username" 
                    value={userData.username} 
                    onChange={handleImputChange}
                    className={errors.username && myError }
                />
                { errors.username ? <p className={myError}>{errors.username}</p> : undefined }
        
                <label htmlFor="password">Password</label>
                <input 
                    type="text" 
                    placeholder="secreto!!!" 
                    name="password" 
                    value={userData.password} 
                    onChange={handleImputChange}
                    className={errors.password && myError }
                />
                { errors.password ? <p className={myError}>{errors.password}</p> : undefined }

        
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Form;