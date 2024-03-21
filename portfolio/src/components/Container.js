import React, { useState } from "react";
import Project from "./Project";
import About from "./About";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Skills from "./Skills";
import Contact from "./Contact";


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
        return <About />
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Contact />
            <Footer />
        </div>
    );
}
