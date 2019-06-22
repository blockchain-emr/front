import React, { Component } from 'react';
import Banner from './Banner.js';
import Departments from './Departments';
import About from './About';
import Features from './Features';
import Footer from './Footer';
import Contact from './Contact';
import Gheader from './Gheader.js';


export default class All extends Component {
    render() {

        return (
            <div>
                <Gheader/>
                <Banner/>
                <Features/>
                <About/>
                <Departments/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}
