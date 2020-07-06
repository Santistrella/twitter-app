import React, {useEffect, useState} from 'react';
import './TweetCreator.css';
import {Tweets} from "../Tweets/Tweets";


export const TweetCreator = () => {

    const initialState = {
        id: '',
        user_id: '1',
        tweet: '',
        media_url: ''
    }
    const [data, setData] = useState(initialState)


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
                    id="user_id"
                    type="text"
                    onChange={e => handleChange('user_id', e.target.value)}
                    placeholder="User ID"
                    value={data.user_id}
                />
                <input
                    id="tweet"
                    type="text"
                    onChange={e => handleChange('tweet', e.target.value)}
                    placeholder="¿Qué está pasando?"
                    value={data.tweet}/>
                <input
                    id="media_url"
                    type="text"
                    onChange={e => handleChange('media_url', e.target.value)}
                    placeholder="Media Url"
                    value={data.media_url}
                />
                <img onChange={e => handleChange('media_url', e.target.value)} src={data.media_url} className="profile-thumbnail"/>
                <button onClick={() => handleFormSubmit()}
                >Twittear
                </button>
            </div>
        );
    }