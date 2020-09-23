import React, { useState } from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Header() {
    const history = useHistory();
    const [input, setInput] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        history.push(`/search/${input}`)
    };
    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
            </Link>

            <div className='header__center'>
                <form>
                    <input type="text" value={input}
                        onChange={(e) => setInput(e.target.value)} />
                    <SearchIcon />
                    <button onClick={handleSubmit} type="submit" hidden />
                </form>
            </div>

            <div className='header__right'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar src="https://i.ibb.co/GPqdyv1/dotq.jpg" />
            </div>
        </div>
    )
}

export default Header
