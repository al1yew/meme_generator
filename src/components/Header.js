import React from "react";
import img from "../img/Trollface_non-free.png"

export default function Header() {
    return (
        <header className="header">
            <img src={img} />
            <span>Meme generator</span>
        </header>
    );
}