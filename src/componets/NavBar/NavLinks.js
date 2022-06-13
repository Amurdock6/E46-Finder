import Logo from '../../logos-icons/e46-logo.jpg'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const NavLinks = () => {
    let navigate = useNavigate();

    // Checks for Logged-In Cookie
    function getCookie(name) {
        var dc = document.cookie;
        var prefix = name + "=";
        var begin = dc.indexOf("; " + prefix);
        if (begin === -1) {
            begin = dc.indexOf(prefix);
            if (begin !== 0) return null;
        }
        else {
            begin += 2;
            var end = document.cookie.indexOf(";", begin);
            if (end === -1) {
                end = dc.length;
            }
        }
        return decodeURI(dc.substring(begin + prefix.length, end));
    }


    // Logsout current user
    const onSuccess = async () => {
        try {
            await axios.get('https://backend.e46finder.app/googlelogout', {
                withCredentials: true
            });

        } catch (error) {
            console.log(error);
        };
        navigate('/logout');
    };


    // Redirect to confirmation page to delete users account
    const deleteAccount = async () => {
        navigate('/deleted');
    }

    // Logic that sets links in nav based off of the result of the function getCookie(name)
    var loggedInCookie = getCookie("LoggedIn");

    if (loggedInCookie == null) {
        if (window.location.href === 'https://www.e46finder.app/') {
            return (

                <>
                    <div id="left-nav">
                        <Link to='/about'>
                            <h3>About</h3>
                        </Link>

                    </div>
                    <div id="middle-nav">
                        <Link to="/">
                            <img src={Logo} alt='E46 Logo' />
                        </Link>
                    </div>
                    <div id='right-nav'>
                        <Link to="/login">
                            <h3>Login</h3>
                        </Link>
                        <Link to="/register">
                            <h3>Sign Up</h3>
                        </Link>

                    </div>
                </>

            )
        }

        if (window.location.href === 'https://www.e46finder.app/account') {
            return (

                <>
                    <div id="left-nav">
                        <Link to='/about'>
                            <h3>About</h3>
                        </Link>

                        <Link to='/'>
                            <h3>Listings</h3>
                        </Link>

                    </div>
                    <div id="middle-nav">
                        <Link to="/">
                            <img src={Logo} alt='E46 Logo' />
                        </Link>
                    </div>
                    <div id='right-nav'>
                        <Link to="/login">
                            <h3>Login</h3>
                        </Link>
                        <Link to="/register">
                            <h3>Sign Up</h3>
                        </Link>

                    </div>
                </>

            )
        }

        if (window.location.href === 'https://www.e46finder.app/about') {
            return (
                <>
                    <div id="left-nav">
                        <Link to='/'>
                            <h3>Listings</h3>
                        </Link>

                    </div>
                    <div id="middle-nav">
                        <Link to="/">
                            <img src={Logo} alt='E46 Logo' />
                        </Link>
                    </div>
                    <div id='right-nav'>
                        <Link to="/login">
                            <h3>Login</h3>
                        </Link>
                        <Link to="/register">
                            <h3>Sign Up</h3>
                        </Link>

                    </div>
                </>

            )
        }

        return (
            <>
                <div id="left-nav">
                    <Link to='/about'>
                        <h3>About</h3>
                    </Link>

                    <Link to='/'>
                        <h3>Listings</h3>
                    </Link>

                </div>
                <div id="middle-nav">
                    <Link to="/">
                        <img src={Logo} alt='E46 Logo' />
                    </Link>
                </div>
                <div id='right-nav'>
                    <Link to="/login">
                        <h3>Login</h3>
                    </Link>
                    <Link to="/register">
                        <h3>Sign Up</h3>
                    </Link>

                </div>
            </>
        )



    }
    else if (loggedInCookie) {
        if (window.location.href === 'https://www.e46finder.app/') {
            return (
                <>
                    <div id="left-nav">
                        <Link to='/about'>
                            <h3>About</h3>
                        </Link>
                    </div>
                    <div id="middle-nav">
                        <Link to="/">
                            <img src={Logo} alt='E46 Logo' />
                        </Link>
                    </div>
                    <div id='right-nav'>
                        <Link to="/account">
                            <h3>View Account</h3>
                        </Link>

                        <GoogleLogout
                            clientId="793531866299-a0lqtj70qp6s1200hhpl08rba6195m7h.apps.googleusercontent.com"
                            render={renderProps => (
                                <button id="logout" onClick={renderProps.onClick} disabled={renderProps.disabled}>Log Out</button>
                            )}
                            buttonText={"Logout"}
                            onLogoutSuccess={onSuccess}
                        />

                    </div>
                </>
            )
        }

        if (window.location.href === 'https://www.e46finder.app/account') {
            return (
                <>
                    <div id="left-nav">
                        <Link to='/about'>
                            <h3>About</h3>
                        </Link>

                        <Link to='/'>
                            <h3>Listings</h3>
                        </Link>
                    </div>
                    <div id="middle-nav">
                        <Link to="/">
                            <img src={Logo} alt='E46 Logo' />
                        </Link>
                    </div>
                    <div id='right-nav'>
                        <h3>
                            <button onClick={deleteAccount} id="delete">Delete Account</button>
                        </h3>

                        <GoogleLogout
                            clientId="793531866299-a0lqtj70qp6s1200hhpl08rba6195m7h.apps.googleusercontent.com"
                            render={renderProps => (
                                <button id="logout" onClick={renderProps.onClick} disabled={renderProps.disabled}>Log Out</button>
                            )}
                            buttonText={"Logout"}
                            onLogoutSuccess={onSuccess}
                        />

                    </div>
                </>

            )
        }

        if (window.location.href === 'https://www.e46finder.app/about') {
            return (
                <>
                    <div id="left-nav">
                        <Link to='/'>
                            <h3>Listings</h3>
                        </Link>

                    </div>
                    <div id="middle-nav">
                        <Link to="/">
                            <img src={Logo} alt='E46 Logo' />
                        </Link>
                    </div>
                    <div id='right-nav'>
                    <Link to="/account">
                            <h3>View Account</h3>
                        </Link>

                        <GoogleLogout
                            clientId="793531866299-a0lqtj70qp6s1200hhpl08rba6195m7h.apps.googleusercontent.com"
                            render={renderProps => (
                                <button id="logout" onClick={renderProps.onClick} disabled={renderProps.disabled}>Log Out</button>
                            )}
                            buttonText={"Logout"}
                            onLogoutSuccess={onSuccess}
                        />
                    </div>
                </>

            )
        }

        return (
            <>
                <div id="left-nav">
                    <Link to='/about'>
                        <h3>About</h3>
                    </Link>

                    <Link to='/'>
                        <h3>Listings</h3>
                    </Link>
                </div>
                <div id="middle-nav">
                    <Link to="/">
                        <img src={Logo} alt='E46 Logo' />
                    </Link>
                </div>
                <div id='right-nav'>
                    <Link to="/account">
                        <h3>View Account</h3>
                    </Link>

                    <GoogleLogout
                        clientId="793531866299-a0lqtj70qp6s1200hhpl08rba6195m7h.apps.googleusercontent.com"
                        render={renderProps => (
                            <button id="logout" onClick={renderProps.onClick} disabled={renderProps.disabled}>Log Out</button>
                        )}
                        buttonText={"Logout"}
                        onLogoutSuccess={onSuccess}
                    />

                </div>
            </>
        )
    }



}

export default NavLinks;