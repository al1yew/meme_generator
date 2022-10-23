import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Meme() {

    const [memes, setMemes] = useState([]);

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        leftText: "",
        rightText: "",
        url: ""
    });

    useEffect(() => {
        axios.get("https://api.imgflip.com/get_memes")
            .then(res => setMemes(res.data));
    }, []);

    let randomNum;

    function handleClick() {
        randomNum = Math.floor(Math.random() * memes?.data?.memes?.length);

        setMeme((prevValue) => {
            return ({ ...prevValue, url: memes?.data?.memes[randomNum]?.url });
        });
    }

    function handleChange(e) {
        const { name, value } = e.target;

        setMeme(prevValue => {
            return ({ ...prevValue, [name]: value });
        });
    }

    return (
        <main>
            <div className="container">
                <div className="row all">
                    <p className="text-center firstp">Get a random meme image and write your own text!</p>
                    <div className="memeform" >
                        <input
                            type="text"
                            placeholder="Top text"
                            className="col-lg-5-8 col-5-8"
                            value={meme.topText}
                            onChange={handleChange}
                            name="topText"
                        />
                        <input
                            type="text"
                            placeholder="Bottom text"
                            className="col-lg-5-8 col-5-8"
                            value={meme.bottomText}
                            onChange={handleChange}
                            name="bottomText"
                        />
                        <input
                            type="text"
                            placeholder="Left text"
                            className="col-lg-5-8 col-5-8"
                            value={meme.leftText}
                            onChange={handleChange}
                            name="leftText"
                        />
                        <input
                            type="text"
                            placeholder="Right text"
                            className="col-lg-5-8 col-5-8"
                            value={meme.rightText}
                            onChange={handleChange}
                            name="rightText"
                        />
                        <button
                            type="button"
                            className="col-12 col-lg-12"
                            onClick={handleClick}
                        >
                            Create meme!
                        </button>
                    </div>

                    <div className="memecontainer">
                        <div className="imgcont">
                            <img src={meme.url} />
                            <span className="toptext">{meme.topText}</span>
                            <span className="lefttext">{meme.leftText}</span>
                            <span className="righttext">{meme.rightText}</span>
                            <span className="bottomtext">{meme.bottomText}</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}