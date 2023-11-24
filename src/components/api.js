import React, { useState, useRef } from "react";
import ImageComp from "./image";
import HomeSec from "./home";
import html2pdf from 'html2pdf.js';

// import Print from "./send.js";


const Home = () => {
    const [imageUrl, setImageUrl] = useState({});
    const [loading, setloading] = useState(false);
    const [InputVal, setInputVal] = useState({});
    const [Blank, setBlank] = useState(true)

    // ref hook
    const divRef = useRef(null);

    const Print = () => {
        //console.log('print');  
        let printContents = document.getElementById('imgBox').innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }


    const query = async (data) => {
        const response = await fetch(
            "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
            {
                headers: {
                    "Accept": "image/png",
                    "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(data),
            }
        );

        console.log(response);

        const result = await response.blob();
        return result;
    };

    // const func = async () => {
    //     try {
    //         setloading(true);
    //         const object = { "inputs": InputVal[id_] };
    //         const result = await query(object);
    //         setImageUrl((key)=>({...key,[id_]:URL.createObjectURL(result)}));
    //     } catch (error) {
    //         console.log(error);
    //     }

    //     setloading(false);
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setBlank(false);
        const { name } = e.target;
        try {
            setloading(true);
            const object = { "inputs": InputVal[name] };
            const result = await query(object);
            setImageUrl((key) => ({ ...key, [name]: URL.createObjectURL(result) }));
        } catch (err) {
            console.log(err);

        }
        setloading(false);
    };


    const handleChang = (e) => {
        const { name, value } = e.target;
        setInputVal((prev) => ({ ...prev, [name]: value }));
    }



    // generate pdf

    const generatePDF = (divElement) => {
        const pdfOptions = {
            margin: 10,
            filename: 'generated-document.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 5 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        };

        html2pdf(divElement, pdfOptions);
    };


    return (
        <>
            {loading && <div className="loading">
                <img src="https://i.gifer.com/YlWC.gif" alt="Loading..." />
            </div>}
            <div className="mainDiv">
                <div className="formSec">
                    <div className="head">Creat your own comic!</div>
                    <div className="form_elm">
                        <input type="text" name="char1" id="char1" required placeholder="Character's name" value={InputVal.char1 || ""} onChange={handleChang} />
                        <button className="btn" type="submit" name="char1" onClick={handleSubmit}>+</button>
                    </div>
                    <div className="form_elm">
                        <input type="text" name="char2" id="char2" required value={InputVal.char2 || ""} onChange={handleChang} />
                        <button className="btn" type="button" name="char2" onClick={handleSubmit}>+</button>
                    </div>
                    <div className="form_elm">
                        <input type="text" name="char3" id="char3" required value={InputVal.char3 || ""} onChange={handleChang} />
                        <button className="btn" type="button" name="char3" onClick={handleSubmit}>+</button>
                    </div>
                    <div className="form_elm">
                        <input type="text" name="char4" id="char4" required value={InputVal.char4 || ""} onChange={handleChang} />
                        <button className="btn" type="button" name="char4" onClick={handleSubmit}>+</button>
                    </div>
                    <div className="form_elm">
                        <input type="text" name="char5" id="char5" required value={InputVal.char5 || ""} onChange={handleChang} />
                        <button className="btn" type="button" name="char5" onClick={handleSubmit}>+</button>
                    </div>
                    <div className="form_elm">
                        <input type="text" name="char6" id="char6" required value={InputVal.char6 || ""} onChange={handleChang} />
                        <button className="btn" type="button" name="char6" onClick={handleSubmit}>+</button>
                    </div>
                    <div className="form_elm">
                        <input type="text" name="char7" id="char7" required value={InputVal.char7 || ""} onChange={handleChang} />
                        <button className="btn" type="button" name="char7" onClick={handleSubmit}>+</button>
                    </div>
                    <div className="form_elm">
                        <input type="text" name="char8" id="char8" required value={InputVal.char8 || ""} onChange={handleChang} />
                        <button className="btn" type="button" name="char8" onClick={handleSubmit}>+</button>
                    </div>
                    <div className="form_elm">
                        <input type="text" name="char9" id="char9" required value={InputVal.char9 || ""} onChange={handleChang} />
                        <button className="btn" type="button" name="char9" onClick={handleSubmit}>+</button>
                    </div>
                    <div className="form_elm">
                        <input type="text" name="char10" id="char10" required value={InputVal.char10 || ""} onChange={handleChang} />
                        <button className="btn" type="button" name="char10" onClick={handleSubmit}>+</button>
                    </div>
                    { !Blank && <button className="download" onClick={() => generatePDF(divRef.current)}>Download</button>}

                </div>
                {!Blank &&
                    <>
                        <div className="imgBox" ref={divRef}>
                            <ImageComp data={imageUrl.char1} />
                            <ImageComp data={imageUrl.char2} />
                            <ImageComp data={imageUrl.char3} />
                            <ImageComp data={imageUrl.char4} />
                            <ImageComp data={imageUrl.char5} />
                            <ImageComp data={imageUrl.char6} />
                            <ImageComp data={imageUrl.char7} />
                            <ImageComp data={imageUrl.char8} />
                            <ImageComp data={imageUrl.char9} />
                            <ImageComp data={imageUrl.char10} />

                        </div>



                    </>


                }

                {Blank && <HomeSec />}

            </div>
        </>

    );
};

export default Home;