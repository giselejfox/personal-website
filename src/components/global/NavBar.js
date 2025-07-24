import React from "react";
import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand fw-bold py-0 mt-4" href="/">
                    Gisele Fox
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#basic-navbar-nav"
                    aria-controls="basic-navbar-nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="basic-navbar-nav">
                    <ul className="navbar-nav fw-bold">
                        <li className="nav-item">
                            <Link href="/creations" className="nav-link">
                                Creations
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/journal" className="nav-link">
                                Journal
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}