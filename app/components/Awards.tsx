import React from 'react'
import gsap from 'gsap';

function Awards() {

    var tl = gsap.timeline();

   tl.to(".ex",{duration:2,x:500});

    const stats = [
        {   
            src:"/Awarded-by-White-1.png",
            data: " Ministry of Agriculture & Farmers Welfare",
            desc: "Customers consectetur adipiscing elit."
        },
        {
            src:"/Awarded-by-White-1.png",
            data: "Ministry of Science and Technology (MOST)",
            desc: "Downloads efficitur id eu nulla facilisis turpis"
        },
        {
            src:"/Awarded-by-White-1.png",
            data: "Ministry of Housing and Urban Affairs",
            desc: "Countries maximus sit amet auctor sed,"
        },
        {
            src:"/FICCI.png",
            data: "Federation of Indian Chambers of Commerce and Industry",
            desc: "Total revenue consectetur adipiscing elit"
        },
        {
            src:"/national.png",
            data: " National Startup Awards - NSA 2022",
            desc: "Total revenue consectetur adipiscing elit"
        },
        {
            src:"/sankalp.png",
            data: " Sankalp Forum",
            desc: "Total revenue consectetur adipiscing elit"
        },
    ]

    return (
        <section className="py-28 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl xl:mx-auto xl:text-center">
                    <h3 className="text-white text-3xl font-semibold sm:text-4xl ex ">
                    CityGreens is India's most awarded Agriculture Technology startup*
                    </h3>
                    <p className="mt-3 text-gray-300 ">
                    We are proud to share that CityGreens has been awarded a collective grant award of 6.5 Million by the Ministry of Agriculture, Ministry of Science & Technology and Ministry of Housing & Urban Affairs.

</p>
                </div>
                <div className="mt-12 ">
                    <ul className="flex-wrap gap-x-12 gap-y-10   text-center space-y-8 sm:space-y-0 sm:flex xl:justify-center">
                        {
                            stats.map((item, idx) => (
                                <li key={idx} className="sm:max-w-[15rem] ">
                                   <div className="grid justify-items-center ">
                                    <img 
                                        src={item.src}
                                        width={150} 
                                        height={70}
                                         alt="award"
                                    ></img>
                                    </div>
                                    <h6 className=" text-white font-semibold">{item.data}</h6>
                                    {/* <p className="mt-3 text-gray-400 font-medium">{item.desc}</p> */}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="pt-20 max-w-2xl xl:mx-auto xl:text-center ">
                    
                    <p className="mt-3 text-gray-300 px-5">
                    "Making India proud by creating world-class Sustainable Agricultural Technologies; creating significant impact for the farmers and the environment."
                    </p>
                    <p className=' text-white px-5'>
                    *The Financial Express, Aug 2022
                    </p>
                </div>
            <div className="absolute inset-0 max-w-md mx-auto h-80 blur-[118px] sm:h-72" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
        </section>
    )
}

export default Awards
