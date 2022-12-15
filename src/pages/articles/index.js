import React, { useState, useEffect } from 'react'
import { ReactNotifications } from 'react-notifications-component';
import Articles from '../../components/Articles/Articles';
import ArticlesHeader from '../../components/ArticlesHeader/ArticlesHeader';
import Footer from '../../components/Footer/Footer';
import Aos from 'aos'
import "aos/dist/aos.css"

const articles = () => {
    useEffect(() => {
	    Aos.init({})
}, [])


    return (
        <>
            <ReactNotifications />
            <ArticlesHeader />
            <Articles />
            <Footer />
        </>
    )
}

export default articles;