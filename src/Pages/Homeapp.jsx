import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Cpmponents/Header';

const Homeapp = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <nav></nav>
            <main>
                <section className='left_nav' ></section>
                <section className='main_section' >
                    <Outlet></Outlet>
                </section>
                <section className='right_nav' ></section>
            </main>
            <aside></aside>
        </div>
    );
};

export default Homeapp;