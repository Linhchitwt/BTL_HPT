import React from "react";

import About from "../Components/About/About.js"
import WelcomeBox from '../Components/WelcomeBox/WelcomeBox.js'
import ImageSlider from '../Components/ImageSlider/ImageSlider.js'
import Footer from '../Components/Footer/Footer.js'
import Stats from '../Components/Stats/Stats.js'
import PopularBooks from '../Components/PopularBooks/PopularBooks.js'
function Apis(){
    return (
        <div id="apis" >
            <a href="http://localhost:5000/api/books/allbooks">http://localhost:5000/api/books/allbooks</a>

            <Footer/>
        </div>
    )
}

export default Apis