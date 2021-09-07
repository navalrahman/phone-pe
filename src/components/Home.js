import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
    return(
        <div>
            <div className="header">
                <h2>PhOne Pe</h2>
                <p>scan & pay</p>
                <Link to="/payhere"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX///8AAABVwtN+AAACsElEQVR4nO3QQXbDMAxDwfr+l+6yLw6BgLJSS8nHKq1ECuOfH0IIIYQQQgghhBCybI7Xqe79/U8ulev9bKsVQoQINxIGp+l+CUlnW62SIERYTiDMXhvs3DMEVfuGwaWpHyFChJsL5SOHinxIziJEiPCLhX5B8E36swgRIvxAoT893TtUZs/2OyNEiHBRoY/s++ZfQSuECBHuIWzltLrq5gsGs/cG4cMBQoRTS/uCcqy6HDQPZlv3ECJEuLywlYmGtGW1aoLEPodQ1ELonqwef082F1YV+pHdqof8bLUAIUKEWwqDkdbrfl8wW12RYwgRItxDKA1y12xSMBa0ehGE4jLC5ysIxVjQ6kUOlX6ZOX5frYdDiBDhIsLTQvl6sP8yWP6aFIQIEd4gDMocj/Gz1URr1i8YACNEiPB+Yaug/xzyinxNjvW/CUKECJcX+g3Bm6nhir9qgBAhwt2E3loV9K+nX0zSJ2kQIkR4v3BwYfAR5NiVJwfUCBtjCJ+vIHSzcQ6VqkJ1OkhKD2RThAgR7iYMXpf7+1V9ab+gh0OIEOEiwtQa9K1qpWA5cd0VPILweQvCxuOnX5fyqcKgvnzJH/ivI+l+YsCKECHCRYTpafW6hKRfrLrnhT0mQoQIFxH6grJ0y+D93ho8iRAhwpWF1cKqkTz1l70m9U/CIUSIcE1hdSDrV2NyvdwiScF6hAgRLiqUb8rTiST5mkwPhxAhwkWEaeT+liGdDd6dHoQI9VKEV4XH6wzuOxVMwf2xuBHC7r5+VYRj+RJh/03561RLfqxgyyQrQoQIVxJWZbxBamRfX9p/GIQIEX6+MPjzit/jqnsIESL8VKEvI/2BRp7KuggRItxSGPj9gaxV1fdb5GWECBHuK/Sp7s0heaFvihAhwo2EhBBCCCGEEEIIIeTf8wtuwkI3fXofnwAAAABJRU5ErkJggg==" alt="qr_code"/></Link>
                <Link to="/payhere">Pay here</Link>   
            </div>
            
        </div>
    )
}

export default Home