import React, {useEffect, useState} from 'react';
import './TweetCreator.css';
import {Tweets} from "../Tweets/Tweets";


export const TweetCreator = () => {

    const [data, setData] = useState({text: '', user: ''})


    const handleFormSubmit = () => {
        fetch("http://localhost/api/tweet", {
            method: "post",
            mode: "cors",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            });
    };

        const handleChange = (key, newValue) => {
            setData({...data, [key]: newValue});
        }


        return (

            <div className="MakeTweet">
                <input
                    type="text"
                    onChange={e => handleChange('text', e.target.value)}
                    placeholder="¿Qué está pasando?"
                    value={data.text}/>
                <button onClick={handleFormSubmit}
                >Twittear
                </button>
            </div>
        );
    }