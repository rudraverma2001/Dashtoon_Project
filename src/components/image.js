import React from "react";

const ImageComp=(imageUrl)=>{
    return(
        <>
        <div className="mainImage">
        {imageUrl.data && <img src={imageUrl.data} className="image" alt="Astronaut riding a horse" />}
        </div>
        </>
    )
}

export default ImageComp;