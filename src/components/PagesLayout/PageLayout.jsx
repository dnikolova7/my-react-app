import React from "react";
import Content from "../Content/Content";
import Footer from "../Footers/Footer";
import Header from "../Headers/Header";

function PageLayout(){
    return (
        <div className="layout"> 
            <Header />
            <Content />
            <Footer />
            
        </div>
    );
}

export default PageLayout;