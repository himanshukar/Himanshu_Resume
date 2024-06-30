import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Redirect = () => {
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            // redirects to an external URL  
            window.location.replace("https://www.google.com/search?q="+searchText);
        }, 5000);
        return () => clearTimeout(timeout);
    }, [searchText]);

    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <div>
            <input type="text" value={searchText} onChange={handleSearchTextChange} />
            <p>Will redirect in 5 seconds...</p>
        </div>
    );
};

const RedirectToGoogleSearch = (searchText) => {
 
    window.open(`https://www.google.com/search?q=${searchText}`, "_blank");

};

export { Redirect, RedirectToGoogleSearch };