import React from "react";
import { Link } from 'react-router-dom';

function theNavbar() {
    return (
        // Navbar is functional
        <nav class="navbar navbar-expand-lg navbar-dark ">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">MarketManager</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item" id="lol">
                            <Link class="nav-link text-white" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white" to="/signIn">My Account</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white" to="/news">News</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default theNavbar;