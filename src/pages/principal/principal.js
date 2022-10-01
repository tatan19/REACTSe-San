import React, { Component } from 'react'
import Navbar from '../../components/nav/Nav'
import He from '../../components/header/Header'
import Sec from '../../components/section1/Section'
import SectF from '../../components/sectionF/SectionF';
import Ubicanos from '../../components/Ubi/Ubicanos';
import Nosbox from '../../components/noscaja/CajaNos';
import Nosotro from '../../components/nos/CardsNos';
import Foo from '../../components/foo/Footer';

export default class principal extends Component {
    render() {
        return (
        <div>
            <Navbar />
            <He />
            <Sec />
            <SectF />
            <Ubicanos />
            <Nosbox />
            <Nosotro />
            <Foo />
        </div>
        )
    } 
}
