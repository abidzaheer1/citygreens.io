import React from 'react'

function GridLogo() {
    return (
        <div className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <h3 className="pb-14 font-semibold text-sm text-gray-600 text-center">
                    TRUSTED BY COMPANIES FROM AROUND THE WORLD
                </h3>
                <div className="flex justify-center">
                    <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">
                        {/* LOGO 1 */}
                      <li>
                       <img src='/bigB.png' className='h-10'/>
                      </li>

                        {/* LOGO 2 */}
                      <li>
                      <img src='/bigB.png' className='h-10'/>

                      </li>

                        {/* LOGO 3 */}
                      <li>
                      <img src='/bigB.png' className='h-10'/>

                      </li>

                        {/* LOGO 4 */}
                      <li>
                      <img src='/bigB.png' className='h-10'/>

                      </li>
                      
                        {/* LOGO 5 */}
                      <li>
                      <img src='/bigB.png' className='h-10'/>

                      </li>


                        {/* LOGO 6 */}
                      <li>
                      <img src='/bigB.png' className='h-10'/>

                      </li>

                        {/* LOGO 7 */}
                      <li>
                      <img src='/bigB.png' className='h-10'/>
                      </li>


                        {/* LOGO 8 */}
                      <li>
                      <img src='/bigB.png' className='h-10'/>
                      </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default GridLogo
