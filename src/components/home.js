import React from "react";
import hm_img from '../image/pngwing.com.png'
const HomeSec=()=>{
    return(
        <>
        <div className="homeSec">
            <div className="hm_left">
                <div className="hm_txt">The comic book hub of the city.</div>
                {/* <div className="hm_txt">The only only things you need, to put them here!</div> */}
            </div>
            <div className="hm_right">
                <img src={hm_img} alt="Loading" />
            </div>
        </div>
        </>
    )
}

export default HomeSec;