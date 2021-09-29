import React from 'react';
import './Banner.css';

function Banner() {

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: 'url("https://www.gamespot.com/a/uploads/screen_kubrick/1557/15576725/3586018-stranger-things-4.jpg")',
            backgroundPosition: "center center"
        }}>
            <div className="banner_contents">
                <h1 className="banner_title">Movie Name</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                    <h1 className="banner_description">
                        {truncate(`This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description`, 150)}

                    </h1>
                </div>

            <div className="banner_fadeButton" />
            </div>
        </header>
    )
}

export default Banner
