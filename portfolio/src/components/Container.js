import React, { useState } from "react";
import Project from "./Project";
import Contact from "./Contact";
import About from "./About";

export default function Container() {
    const [currentPage, setCurrentPage] = useState('About');
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
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
            <About currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}
