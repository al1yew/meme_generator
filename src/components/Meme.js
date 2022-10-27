import axios from "axios";
import React, { useEffect, useState } from "react";
import { UilTimesCircle } from '@iconscout/react-unicons'

export default function Meme() {

    const [memes, setMemes] = useState([]);

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        leftText: "",
        rightText: "",
        topIsBlack: false,
        rightIsBlack: false,
        leftIsBlack: false,
        bottomIsBlack: false,
        url: ""
    });

    useEffect(() => {
        axios.get("https://api.imgflip.com/get_memes")
            .then(res => setMemes(res.data.data.memes));
    }, []);

    let randomNum;

    function handleClick() {
        randomNum = Math.floor(Math.random() * memes?.length);

        setMeme((prevValue) => {
            return ({ ...prevValue, url: memes[randomNum]?.url });
        });
    }

    function handleChange(e) {
        const { name, value, type, checked } = e.target

        setMeme(prevValue => {
            return {
                ...prevValue,
                [name]: type === "checkbox" ? checked : value
            }
        });
    }

    return (
        <main>
            <div className="container">
                <div className="row all">
                    <p className="text-center firstp">Get a random meme image and write your own text!</p>
                    <div className="memeform" >

                        <div className="col-lg-5-8 col-12">
                            <input
                                type="text"
                                placeholder="Top text"
                                className="col-lg-10 col-10"
                                value={meme.topText}
                                onChange={handleChange}
                                name="topText"
                            />
                            <input type="checkbox" hidden name="topIsBlack" value={meme.topIsBlack} className="inputcheckbox" onClick={handleChange} id="topIsBlack" />
                            <label htmlFor="topIsBlack">{meme.topIsBlack ? "White" : "Black"}</label>
                            {/* {meme.topText && <span className="closebtn" onClick={handleDelete("topText")}><UilTimesCircle /></span>} */}
                        </div>

                        <div className="col-lg-5-8 col-12">
                            <input
                                type="text"
                                placeholder="Bottom text"
                                className="col-lg-10 col-10"
                                value={meme.bottomText}
                                onChange={handleChange}
                                name="bottomText"
                            />
                            <input type="checkbox" hidden name="bottomIsBlack" value={meme.bottomIsBlack} className="inputcheckbox" onClick={handleChange} id="bottomIsBlack" />
                            <label htmlFor="bottomIsBlack">{meme.bottomIsBlack ? "White" : "Black"}</label>
                            {/* {meme.bottomText && <span className="closebtn"><UilTimesCircle /></span>} */}
                        </div>

                        <div className="col-lg-5-8 col-12">
                            <input
                                type="text"
                                placeholder="Left text"
                                className="col-lg-10 col-10"
                                value={meme.leftText}
                                onChange={handleChange}
                                name="leftText"
                            />
                            <input type="checkbox" hidden name="leftIsBlack" value={meme.leftIsBlack} className="inputcheckbox" onClick={handleChange} id="leftIsBlack" />
                            <label htmlFor="leftIsBlack">{meme.leftIsBlack ? "White" : "Black"}</label>
                            {/* {meme.leftText && <span className="closebtn"><UilTimesCircle /></span>} */}
                        </div>

                        <div className="col-lg-5-8 col-12">
                            <input
                                type="text"
                                placeholder="Right text"
                                className="col-lg-10 col-10"
                                value={meme.rightText}
                                onChange={handleChange}
                                name="rightText"
                            />
                            <input type="checkbox" hidden name="rightIsBlack" value={meme.rightIsBlack} className="inputcheckbox" onClick={handleChange} id="rightIsBlack" />
                            <label htmlFor="rightIsBlack">{meme.rightIsBlack ? "White" : "Black"}</label>
                            {/* {meme.rightText && <span className="closebtn"><UilTimesCircle /></span>} */}
                        </div>

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
                            <span className="toptext" style={{ color: meme.topIsBlack && 'black' }}>{meme.topText}</span>
                            <span className="lefttext" style={{ color: meme.leftIsBlack && 'black' }}>{meme.leftText}</span>
                            <span className="righttext" style={{ color: meme.rightIsBlack && 'black' }}>{meme.rightText}</span>
                            <span className="bottomtext" style={{ color: meme.bottomIsBlack && 'black' }}>{meme.bottomText}</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}