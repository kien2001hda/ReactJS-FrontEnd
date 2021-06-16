import React from 'react'
import Footer from '../components/website/footer';
import Header from '../components/website/header';
const LayoutWebsite = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default LayoutWebsite
