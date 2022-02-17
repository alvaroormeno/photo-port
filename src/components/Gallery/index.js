import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/small/commercial/0.jpg';

function Gallery() {

    const currentCategory = {
        name: "comercial",
        description: "Photos of grocery stores, food trucks, and other commercial projects"
    };

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.name}</p>
            <div>
                <img src={photo} alt="Comercial Example" className="img-thumbnail mx-1"></img>
            </div>
        </section>
    )
}

export default Gallery;