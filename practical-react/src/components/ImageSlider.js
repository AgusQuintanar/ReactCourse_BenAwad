import React from "react";

export default class ImageSlider extends React.Component {
    state = {
        images: [
            "https://image.winudf.com/v2/image/Y29tLm5pZ2h0c2t5d2FsbHBhcGVyLmhkLm5pZ2h0c2t5cGljdHVyZXMucGhvdG9zLmJhY2tncm91bmQuY3V0ZS5jb29sLmFydC5uaWdodHNreWltYWdlcy5oZC5mcmVlX3NjcmVlbl8xM18xNTMzMjUwMTk1XzA2OA/screen-13.jpg?fakeurl=1&type=.jpg",
            "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
            "https://www.acueducto.com.co/guatoc/Archivos/resources/seccion_gerente/images/Swan_large.jpg",
            "https://img3.goodfon.com/wallpaper/big/7/ce/iarkaia-krasochnaia-ptitsa-zimorodok-rybka-ulov-dobycha-voda.jpg"
        ],
        index: 0
    };

    handleNext = () => {
        this.setState({
            index: (this.state.index + 1) % this.state.images.length  
        });
    };

    render() {
        return (
            <div> 
                Image Slider

                <img
                    style={{
                        width: 100,
                        height: 100
                    }}
                    src={this.state.images[this.state.index]}
                    alt="Hola"
                ></img>
                <button onClick={this.handleNext}>Next</button>
            </div>
           
        );
    }
}