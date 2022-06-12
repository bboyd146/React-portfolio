import React, { useState } from "react";
import Project from "./Project";
import Contact from "./Contact";
import About from "./About";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Skills from "./Skills";


export default function Container() {
    const [currentPage, setCurrentPage] = useState('About');
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Skills') {
            return <Skills />;
        }
        if (currentPage === 'Project') {
            return <Project />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <About />
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            <Home />
            {renderPage()}
            <Footer />
        </div>
    );
}
