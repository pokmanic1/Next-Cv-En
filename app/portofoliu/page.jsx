'use client'

import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import Link from 'next/link';
import { motion } from 'framer-motion';

let arrSafeNetJunior = [
    {
        id: 1,
        img: "/SafeNet-1.png"
    },
    {
        id: 2,
        img: "/SafeNet-2.png"
    },
    {
        id: 3,
        img: "/SafeNet-3.png"
    },
    {
        id: 4,
        img: "/SafeNet-4.png"
    },
    {
        id: 5,
        img: "/SafeNet-6.png"
    },
    {
        id: 6,
        img: "/SafeNet-5.png"
    },
]
let arrPetCare = [

    {
        id: 1,
        img: '/PetCare-1.png'
    },
    {
        id: 2,
        img: '/PetCare-2.png'
    },
    {
        id: 3,
        img: '/PetCare-3.png'
    },

]
let arrRestaurant = [
    {
        id: 1,
        img: '/Restaurant.png'
    },
    {
        id: 2,
        img: '/Restaurant1.png'
    },
    {
        id: 3,
        img: '/Restaurant2.png'
    },
    {
        id: 3,
        img: '/Restaurant3.png'
    },
]
let arrKarta = [
    {
        id: 1,
        img: '/image 32.png'
    },
    {
        id: 2,
        img: '/image 33.png'
    },
    {
        id: 3,
        img: '/image 34.png'
    },
  
]

const Portofoliu = () => {

    const [curectshowSection, setCurectshowSection] = useState(0)

    const setCurentSection = (x) => {
        console.log("currently shown section number:", curectshowSection)

        setCurectshowSection((prev) => {
            const next = prev + x;
            if (next > 4) return 0;
            if (next < 0) return 4;
            return next;
        });

    };

    const [currentIndexSafeNetJunior, setCurrentIndexSafeNetJunior] = useState(0);
    const [currentIndexPetCare, setCurrentIndexPetCare] = useState(0);
    const [currentIndexRestaurant, setCurrentIndexRestaurant] = useState(0);
    const [currentIndexKarta, setCurrentIndexKarta] = useState(0);




    const containerRef = useRef(null);
    let time = 1000 * 60 * 5;


    useGSAP(() => {
        if (localStorage.getItem('token')) return;
        const titlu1 = new SplitText(".card1 .titlu", { type: "chars" });
        const pDespreMine1 = new SplitText(".card1 .pDEspreMine", { type: "lines" });
        const detalii1 = new SplitText(".card1 .detalii", { type: "lines" });

        const titlu2 = new SplitText(".card2 .titlu", { type: "chars" });
        const pDespreMine2 = new SplitText(".card2 .pDEspreMine", { type: "lines" });
        const detalii2 = new SplitText(".card2 .detalii", { type: "lines" });

        const titlu3 = new SplitText(".card3 .titlu", { type: "chars" });
        const pDespreMine3 = new SplitText(".card3 .pDEspreMine", { type: "lines" });
        const detalii3 = new SplitText(".card3 .detalii", { type: "lines" });

        const tl = gsap.timeline({
            defaults: { ease: "power3.out", duration: 0.3 }
        });

        tl.from('.card1', {
            backgroundColor: "#000000",
            opacity: 0,
            y: 60,
            scale: 0.9,
            rotate: -2,
            duration: 0.6,
            ease: "back.out(1.5)",
        }).from(titlu1.chars, {
            opacity: 0,
            y: 40,
            rotate: 8,
            stagger: { each: 0.02, from: "center " },
            duration: 0.5,
            ease: "power4.out",
        }).from(pDespreMine1.lines, {
            opacity: 0,
            y: 30,
            stagger: 0.05,
            duration: 0.5,
            ease: "power2.out",
        }).from(detalii1.lines, {
            opacity: 0,
            x: -20,
            stagger: 0.06,
            duration: 0.4,
            ease: "power2.out",
        })
            .from('.card2', {
                backgroundColor: "#000000",
                opacity: 0,
                y: 60,
                scale: 0.9,
                rotate: 2,
                duration: 0.6,
                ease: "back.out(1.5)",
            }, "-=0.1")
            .from(titlu2.chars, {
                opacity: 0,
                y: 40,
                rotate: -8,
                stagger: { each: 0.02, from: "center" },
                duration: 0.5,
                ease: "power4.out",
            }).from(pDespreMine2.lines, {
                opacity: 0,
                y: 30,
                stagger: 0.05,
                duration: 0.5,
                ease: "power2.out",
            }).from(detalii2.lines, {
                opacity: 0,
                x: -20,
                stagger: 0.06,
                duration: 0.4,
                ease: "power2.out",
            })
            .from('.card3', {
                backgroundColor: "#000000",
                opacity: 0,
                y: 50,
                scale: 0.92,
                rotate: -2,
                duration: 0.4,
                ease: "back.out(1.6)",
            }, "-=0.15")
            .from(titlu3.chars, {
                opacity: 0,
                y: 30,
                rotate: 6,
                stagger: { each: 0.012, from: "center" },
                duration: 0.35,
                ease: "power4.out",
            }).from(pDespreMine3.lines, {
                opacity: 0,
                y: 25,
                stagger: 0.04,
                duration: 0.35,
                ease: "power2.out",
            }).from(detalii3.lines, {
                opacity: 0,
                x: -15,
                stagger: 0.045,
                duration: 0.3,
                ease: "power2.out",
            })
            .from('.heroButton', {
                opacity: 0,
                y: 40,
                scale: 0.5,
                rotate: -5,
                duration: 0.6,
                ease: "back.out(2.5)",
            }, "-=0.1");
    });


    if (typeof window !== 'undefined' && !localStorage.getItem('token')) {
        localStorage.setItem('token', 1)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            localStorage.removeItem('token');
        }, time);

        return () => clearInterval(timer);
    }, [time]);
    return (
        <>
            <section ref={containerRef} className=' flex-center relative w-full min-h-dvh bg-[linear-gradient(135deg,#3795DB_0%,#004CB2_50%,#001C66_100%)] py-8 px-4 sm:py-10 sm:px-6 md:py-12 md:px-10 lg:py-[50px] lg:px-[60px]'>
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                <div className={`col-center w-full h-full bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 rounded-2xl shadow-2xl p-[4px] sm:p-[6px] md:p-[8px] lg:p-[10px] ${curectshowSection === 0 ? 'flex' : 'hidden'}`}>



                    <div className='card1 w-full h-full col-center rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ring-1 ring-black/5'>
                        <div className='w-full h-full flex flex-col text-center p-5 sm:p-6 gap-4 sm:gap-6'>
                            <h1 className='titlu text-2xl sm:text-3xl font-semibold ' >SafeNet Junior</h1>
                            <div>
                                <p className='pDEspreMine block text-center text-black text-[15px] sm:text-[15px] md:text-[16px] mb-3'>
                                    <span className='font-semibold text-blue-800'>SafeNet Junior</span> is an educational platform created specially for students in grades 1–4, offering an interactive and engaging learning experience.
                                </p>

                                <ul className='detalii text-left mx-auto w-fit space-y-1.5 text-[14px] sm:text-[15px] text-black/80'>
                                    <li>&bull;  <span className='font-semibold text-blue-600'>4 core games</span> designed to teach cybersecurity in a fun way.</li>
                                    <li>&bull;  <span className='font-semibold text-blue-600'>Tests, missions, and badges page</span> for tracking student progress.</li>
                                    <li>&bull;  <span className='font-semibold text-blue-600'>Dark Mode</span> for a modern and comfortable visual experience.</li>
                                    <li>&bull;  <span className='font-semibold text-blue-600'>Authentication for students and teachers</span>, with data stored in Firebase.</li>
                                </ul></div>
                            <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] max-w-[550px] mx-auto mt-auto border-2 border-gray-800 rounded-xl overflow-hidden shadow-xl">
                                <img
                                    src={`${arrSafeNetJunior[currentIndexSafeNetJunior].img}`} alt=""
                                    className="w-full h-full max-w-[550px]   rounded-xl shadow-sm"
                                />

                                <button
                                    onClick={() =>
                                        setCurrentIndexSafeNetJunior(prev =>
                                            prev === 0 ? arrSafeNetJunior.length - 1 : prev - 1
                                        )
                                    }>
                                    <img
                                        src="/left-arrow.png" alt=""
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer"
                                    />
                                </button>
                                <button
                                    onClick={() =>
                                        setCurrentIndexSafeNetJunior(prev =>
                                            prev === arrSafeNetJunior.length - 1 ? 0 : prev + 1
                                        )
                                    }>
                                    <img
                                        src="/right-arrow.png" alt=""
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}


                    <div className='card2 w-full h-full col-center rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ring-1 ring-black/5'>
                        <div className='w-full h-full flex flex-col p-5 sm:p-6 text-center gap-4 sm:gap-6'>
                            <h1 className='titlu text-2xl sm:text-3xl font-semibold ' >Velvet Pour</h1>
                            <div>
                                <p className='pDEspreMine block text-center text-black text-[15px] sm:text-[15px] md:text-[16px]  mb-3'>
                                    <span className='font-semibold text-blue-800'>Velvet Pour</span> is a website created for a bar, giving users clear information about the services and the atmosphere of the venue.
                                </p>

                                <ul className='detalii text-left mx-auto w-fit space-y-1.5 text-[14px] sm:text-[15px] text-black/80'>
                                    <li>&bull; <span className='font-semibold text-blue-600'>Scroll effects</span>, interactive and fluid animations while scrolling.</li>
                                    <li>&bull; <span className='font-semibold text-blue-600'>Dedicated sections for images</span> and presenting the bar.</li>
                                    <li>&bull; <span className='font-semibold text-blue-600'>Focus on modern design</span> and a pleasant visual experience.</li>
                                    <li>&bull; Project built to deepen my skills in GSAP animations.</li>
                                </ul>
                            </div>
                            <video src="/Screen Recording 2026-07-03 132204.mp4" className='block w-full h-[180px] sm:h-[200px] md:h-[220px]   object-center rounded-xl mt-auto shadow-sm'
                                muted playsInline preload='auto' autoPlay loop></video>
                        </div>
                    </div>

                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}



                    <div className='card3 w-full h-full col-center rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ring-1 ring-black/5'>
                        <div className='w-full h-full flex flex-col p-5 sm:p-6 gap-4 sm:gap-6'>

                            <h1 className='titlu text-2xl sm:text-3xl font-semibold  text-center' >Pet Care</h1>
                            <div>
                                <p className='pDEspreMine block text-center text-black text-[15px] sm:text-[15px] md:text-[16px] mb-3'>
                                    <span className='font-semibold text-blue-800'>Pet Care</span> is a website created for a veterinary clinic, giving users quick access to useful information and services.
                                </p>

                                <ul className='detalii text-left mx-auto w-fit space-y-1.5 text-[14px] sm:text-[15px] text-black/80'>
                                    <li>&bull;  <span className='font-semibold text-blue-600'>Reviews and booking system</span> for different types of consultations.</li>
                                    <li>&bull;  <span className='font-semibold text-blue-600'>Dedicated sections for the medical team</span> and the services offered.</li>
                                    <li>&bull;  <span className='font-semibold text-blue-600'>Filtering system</span> for quickly finding the desired information.</li>
                                    <li>&bull;  <span className='font-semibold text-blue-600'>User authentication</span>, with data stored in PostgreSQL.</li>
                                </ul>
                            </div>
                            <div className="relative max-w-[550px] mx-auto w-full h-[180px] sm:h-[200px] md:h-[220px] mt-auto border-2 border-gray-800 rounded-xl overflow-hidden shadow-xl">
                                <img
                                    src={arrPetCare[currentIndexPetCare].img}
                                    className="w-full h-full max-w-[550px] rounded-xl shadow-sm"
                                    alt=""
                                />

                                <button
                                    onClick={() =>
                                        setCurrentIndexPetCare(
                                            prev => (prev - 1 + arrPetCare.length) % arrPetCare.length
                                        )
                                    }>
                                    <img
                                        src="/leftArrowWhite.png"
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer"
                                        alt=""
                                    />
                                </button>

                                <button
                                    onClick={() =>
                                        setCurrentIndexPetCare(
                                            prev => (prev + 1) % arrPetCare.length
                                        )
                                    }>
                                    <img
                                        src="/rightArrowWhite.png"
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer"
                                        alt=""
                                    />
                                </button>
                            </div>

                        </div>
                    </div>



                </div>

                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}

                <div className={`col-center w-full h-full bg-white  ${curectshowSection === 1 ? 'flex' : 'hidden'}`}>

                    <div className='col-center w-full h-full  '>


                        <h1 className='text-4xl sm:text-3xl font-semibold'>4 Express.js Projects</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-2 rounded-2xl shadow-2xl p-1 '>


                            <div className='card1 w-full h-full col-center rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ring-1 ring-black/5'>
                                <div className='w-full h-full flex flex-col text-center p-5 sm:p-3 gap-4 sm:gap-6'>
                                    <h1 className='titlu text-2xl sm:text-3xl font-semibold ' >Project 1</h1>
                                    <div>
                                        <p className='pDEspreMine block text-center text-black text-[15px] sm:text-[15px] md:text-[16px] mb-3'>
                                            <span className='font-semibold text-blue-800'>The first project</span> dedicated to learning Express, includes user authentication and submitting reviews
                                        </p>

                                        <ul className='detalii text-left mx-auto w-fit space-y-1.5 text-[14px] sm:text-[15px] text-black/80'>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>Express.js</span> for the backend</li>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>MongoDB</span> for the database.</li>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>Bcrypt</span> for password hashing.</li>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>JWT</span> for the token</li>
                                        </ul>
                                    </div>
                                    <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] max-w-[550px] mx-auto mt-auto border-2 border-gray-800 rounded-xl overflow-hidden shadow-xl">
                                        <img
                                            src='/image 20.png' alt=""
                                            className="w-full h-full max-w-[550px]   rounded-xl shadow-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}

                            <div className='card2 w-full h-full col-center rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ring-1 ring-black/5'>
                                <div className='w-full h-full flex flex-col text-center p-5 sm:p-3 gap-2 sm:gap-2'>
                                    <h1 className='titlu text-2xl sm:text-3xl font-semibold ' >Project 2</h1>
                                    <div>
                                        <p className='pDEspreMine block text-center text-black text-[15px] sm:text-[15px] md:text-[16px] mb-3'>
                                            <span className='font-semibold text-blue-800'>The 2nd project</span> was built to deepen my Express.js skills and includes user authentication and managing a movie platform, including adding, deleting, creating, and tracking the status of the user's movies
                                        </p>

                                        <ul className='detalii text-left mx-auto w-fit space-y-1.5 text-[14px] sm:text-[15px] text-black/80'>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>Express.js</span> for the backend</li>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>Neon and Prisma</span> for the database.</li>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>Bcrypt</span> for password hashing.</li>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>JWT</span> for the token</li>
                                        </ul>
                                    </div>
                                    <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] max-w-[550px] mx-auto mt-auto border-2 border-gray-800 rounded-xl overflow-hidden shadow-xl">
                                        <img
                                            src='/image 26.png' alt=""
                                            className="w-full h-full max-w-[550px]   rounded-xl shadow-sm"
                                        />
                                    </div>
                                </div>
                            </div>


                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}



                            <div className='card3 w-full h-full col-center rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ring-1 ring-black/5'>
                                <div className='w-full h-full flex flex-col p-5 sm:p-3 gap-4 sm:gap-6'>

                                    <h1 className='titlu text-2xl sm:text-3xl font-semibold  text-center' >Project 3</h1>
                                    <div>
                                        <p className='pDEspreMine block text-center text-black text-[15px] sm:text-[15px] md:text-[16px] mb-3'>
                                            <span className='font-semibold text-blue-800'>The 3rd project</span> dedicated to learning Express, includes user authentication and contact pages
                                        </p>

                                        <ul className='detalii text-left mx-auto w-fit space-y-1.5 text-[14px] sm:text-[15px] text-black/80'>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>Express.js</span> for the backend</li>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>MongoDB</span> for the database.</li>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>Bcrypt</span> for password hashing.</li>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>JWT</span> for the token</li>
                                        </ul>
                                    </div>
                                    <div className="relative max-w-[550px] mx-auto w-full h-[180px] sm:h-[200px] md:h-[220px] mt-auto border-2 border-gray-800 rounded-xl overflow-hidden shadow-xl">
                                        <img
                                            src='/image 22.png'
                                            className="w-full h-full max-w-[550px] rounded-xl shadow-sm"
                                            alt=""
                                        />
                                    </div>

                                </div>
                            </div>
                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}



                            <div className='card3 w-full h-full col-center rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ring-1 ring-black/5'>
                                <div className='w-full h-full flex flex-col p-5 sm:p-3 gap-4 sm:gap-6'>

                                    <h1 className='titlu text-2xl sm:text-3xl font-semibold  text-center' >Project 4</h1>
                                    <div>
                                        <p className='pDEspreMine block text-center text-black text-[15px] sm:text-[15px] md:text-[16px] mb-3'>
                                            <span className='font-semibold text-blue-800'>The 4th project</span> dedicated to learning Express, includes user authentication and a booking system
                                        </p>

                                        <ul className='detalii text-left mx-auto w-fit space-y-1.5 text-[14px] sm:text-[15px] text-black/80'>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>Express.js</span> for the backend</li>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>MongoDB</span> for the database.</li>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>Bcrypt</span> for password hashing.</li>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>JWT</span> for the token</li>
                                        </ul>
                                    </div>
                                    <div className="relative max-w-[550px] mx-auto w-full h-[180px] sm:h-[200px] md:h-[220px] mt-auto border-2 border-gray-800 rounded-xl overflow-hidden shadow-xl">
                                        <img
                                            src='/image 24.png'
                                            className="w-full h-full max-w-[550px] rounded-xl shadow-sm"
                                            alt=""
                                        />

                                    </div>

                                </div>
                            </div>

                        </div>


                    </div>


                </div>
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}

                <div className={`col-center w-full h-full bg-white  ${curectshowSection === 2 ? 'flex' : 'hidden'}`}>

                    <div className='col-center w-full h-full  '>


                        <h1 className='text-4xl sm:text-3xl font-semibold'>2 Next.js Projects</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-2 rounded-2xl shadow-2xl p-1 '>



                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}



                            <div className='card3 w-full h-full col-center rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ring-1 ring-black/5'>
                                <div className='w-full h-full flex flex-col p-5 sm:p-3 gap-4 sm:gap-6'>

                                    <h1 className='titlu text-2xl sm:text-3xl font-semibold  text-center' >Project 1</h1>
                                    <div>
                                        <p className='pDEspreMine block text-center text-black text-[15px] sm:text-[15px] md:text-[16px] mb-3'>
                                            <span className='font-semibold text-blue-800'>The first one</span>, dedicated to learning Next.js, focused on server-side rendering and efficient route management:
                                        </p>

                                        <ul className='detalii text-left mx-auto w-fit space-y-1.5 text-[14px] sm:text-[15px] text-black/80'>
                                            <li>&bull; <span className='font-semibold text-blue-600'>Server-Side Rendering (SSR)</span> for speed and SEO.</li>
                                            <li>&bull; <span className='font-semibold text-blue-600'>App Router</span> for modern page structuring.</li>
                                            <li>&bull; <span className='font-semibold text-blue-600'>Server Actions</span> for logic and data processing.</li>
                                            <li>&bull; <span className='font-semibold text-blue-600'>API Routes</span> for connecting the native backend.</li>
                                        </ul>

                                    </div>
                                    <div className="relative max-w-[550px] mx-auto w-full h-[180px] sm:h-[200px] md:h-[220px] mt-auto border-2 border-gray-800 rounded-xl overflow-hidden shadow-xl">
                                        <img
                                            src='/image 27 (1).png'
                                            className="w-full h-full max-w-[550px] rounded-xl shadow-sm"
                                            alt=""
                                        />
                                    </div>

                                </div>
                            </div>
                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}



                            <div className='card3 w-full h-full col-center rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ring-1 ring-black/5'>
                                <div className='w-full h-full flex flex-col p-5 sm:p-3 gap-4 sm:gap-6'>

                                    <h1 className='titlu text-2xl sm:text-3xl font-semibold  text-center ' >Project 2</h1>
                                    <div>
                                        <p className='pDEspreMine block text-center text-black text-[15px] sm:text-[15px] md:text-[16px] mb-3'>
                                            <span className='font-semibold text-blue-800'>The second project</span> represents an advanced step in mastering the Next.js ecosystem:
                                        </p>

                                        <ul className='detalii text-left mx-auto w-fit space-y-1.5 text-[14px] sm:text-[15px] text-black/80'>
                                            <li>&bull; <span className='font-semibold text-blue-600'>Hybrid Rendering</span> by optimizing pages directly on the server.</li>
                                            <li>&bull; <span className='font-semibold text-blue-600'>Dynamic Navigation</span> built with the new routing system.</li>
                                            <li>&bull; <span className='font-semibold text-blue-600'>Data Fetching</span>, direct and fast.</li>
                                        </ul>


                                    </div>
                                    <div className="relative max-w-[550px] mx-auto w-full h-[180px] sm:h-[200px] md:h-[220px] mt-auto border-2 border-gray-800 rounded-xl overflow-hidden shadow-xl">
                                        <img
                                            src='/image 19 (1).png'
                                            className="w-full h-full max-w-[550px] rounded-xl shadow-sm"
                                            alt=""
                                        />

                                    </div>

                                </div>
                            </div>

                        </div>


                    </div>


                </div>
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}


                <div className={`col-center w-full h-full bg-white  gap-4 sm:gap-5 md:gap-6 rounded-2xl shadow-2xl p-[4px] sm:p-[6px] md:p-[8px] lg:p-[10px] ${curectshowSection === 3 ? 'flex' : 'hidden'}`}>


                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    <div className='card1 w-full h-full col-center rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ring-1 ring-black/5'>
                        <div className='w-full h-full flex flex-col text-center p-5 sm:p-6 gap-4 sm:gap-6'>
                            <h1 className='titlu text-2xl sm:text-3xl font-semibold ' >1 Nest.js Project</h1>
                            <div>
                                <p className='pDEspreMine block text-center text-black text-[15px] sm:text-[15px] md:text-[16px] mb-3'>
                                    <span className='font-semibold text-blue-800'>Karta</span> is a platform for creating notes, built with the goal of practicing and mastering authentication in NestJS.
                                </p>

                                <ul className='detalii text-left mx-auto w-fit space-y-1.5 text-[14px] sm:text-[15px] text-black/80'>
                                    <li>&bull; <span className='font-semibold text-blue-600'>JWT:</span> Secure token-based authentication</li>
                                    <li>&bull; <span className='font-semibold text-blue-600'>Bcrypt & Security:</span> Advanced password encryption and a dedicated section for user reviews.</li>
                                    <li>&bull; <span className='font-semibold text-blue-600'>MongoDB database:</span> Integrated through REST APIs for secure data storage and management.</li>
                                    <li>&bull; <span className='font-semibold text-blue-600'>NestJS Architecture:</span> Use of Pipes, Controllers, Middleware, and Guards for a clear flow and intuitive feedback.</li>
                                </ul>

                            </div>
                            <div className="relative  mx-auto mt-auto rounded-xl  ">
                                <img
                                    src={`${arrKarta[currentIndexKarta].img}`}
                                    alt=""
                                    className="block w-full h-full max-w-[550px] rounded-xl shadow-sm object-cover border-2 border-gray-800 shadow-2xl "
                                />
                                <button
                                    onClick={() =>
                                        setCurrentIndexKarta(prev =>
                                            prev === 0 ? arrKarta.length - 1 : prev - 1
                                        )
                                    }>
                                    <img
                                        src="/leftArrowWhite.png" alt=""
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer border"
                                    />
                                </button>
                                <button
                                    onClick={() =>
                                        setCurrentIndexKarta(prev =>
                                            prev === arrKarta.length - 1 ? 0 : prev + 1
                                        )
                                    }>
                                    <img
                                        src="/rightArrowWhite.png" alt=""
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}



                </div>


                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}

                <div className={`col-center w-full h-full bg-white  gap-4 sm:gap-5 md:gap-6 rounded-2xl shadow-2xl p-[4px] sm:p-[6px] md:p-[8px] lg:p-[10px] ${curectshowSection === 4 ? 'flex' : 'hidden'}`}>


                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    <div className='card1 w-full h-full col-center rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ring-1 ring-black/5'>
                        <div className='w-full h-full flex flex-col text-center p-5 sm:p-6 gap-4 sm:gap-6'>
                            <h1 className='titlu text-2xl sm:text-3xl font-semibold ' >1 Next.js Project</h1>
                            <div>
                                <p className='pDEspreMine block text-center text-black text-[15px] sm:text-[15px] md:text-[16px] mb-3'>
                                    <span className='font-semibold text-blue-800'>Loughi</span> is a modern platform for a restaurant, equipped with a complete booking system and an interactive menu:
                                </p>

                                <ul className='detalii text-left mx-auto w-fit space-y-1.5 text-[14px] sm:text-[15px] text-black/80'>
                                    <li>&bull; <span className='font-semibold text-blue-600'>Premium animations</span> built with GSAP and Framer Motion for an attractive design.</li>
                                    <li>&bull; <span className='font-semibold text-blue-600'>Booking system</span> and a dedicated section for customer reviews.</li>
                                    <li>&bull; <span className='font-semibold text-blue-600'>MongoDB database</span> connected through APIs for secure data storage.</li>
                                    <li>&bull; <span className='font-semibold text-blue-600'>Error handling</span> with visual effects and intuitive messages for users.</li>
                                </ul>

                            </div>
                            <div className="relative  mx-auto mt-auto b">
                                <img
                                    src={`${arrRestaurant[currentIndexRestaurant].img}`}
                                    alt=""
                                    className="block w-full h-full max-w-[550px]  object-cover border-2 border-gray-800 rounded-xl  shadow-xl"
                                />
                                <button
                                    onClick={() =>
                                        setCurrentIndexRestaurant(prev =>
                                            prev === 0 ? arrRestaurant.length - 1 : prev - 1
                                        )
                                    }>
                                    <img
                                        src="/leftArrowWhite.png" alt=""
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer border"
                                    />
                                </button>
                                <button
                                    onClick={() =>
                                        setCurrentIndexRestaurant(prev =>
                                            prev === arrRestaurant.length - 1 ? 0 : prev + 1
                                        )
                                    }>
                                    <img
                                        src="/rightArrowWhite.png" alt=""
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}



                </div>




















                <div
                    onClick={() => setCurentSection(-1)}
                    className='absolute bottom-1/2  left-5 sm:left-10 md:left-17 lg:left-24 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-transparent '>
                    <img
                        src="/left-arrow.png" alt=""
                        className="scale-95 hover:scale-110 transition ease-in w-10 h-10 cursor-pointer"
                    />
                </div>

                <div
                    onClick={() => setCurentSection(1)}
                    className='absolute bottom-1/2  right-5 sm:right-10 md:right-17 lg:right-24 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-transparent '>
                    <img
                        src="/right-arrow.png" alt=""
                        className="scale-95 hover:scale-110 transition ease-in w-10 h-10 cursor-pointer"
                    />
                </div>

                <motion.div
                    whileHover={{
                        scale: 1.05,
                        y: -2,
                        x: 0,
                        rotate: 0,
                        opacity: 1,
                        backgroundColor: "#f3f4f6"
                    }}
                    whileTap={{
                        scale: 0.9,
                        y: 1
                    }}


                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 6,
                        mass: 0.8,
                        duration: 0.3,
                    }}
                    className='absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[140px] sm:min-w-[10%] py-2 px-6 sm:px-9 flex justify-center items-center border-2 bg-gray-200 border-black rounded-2xl shadow-2xl'>
                    <Link href="/" className='text-[14px] sm:text-[16px]'>Main Section</Link>
                </motion.div>

            </section>

        </>
    )
}

export default Portofoliu