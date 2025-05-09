import React from 'react'

const Content = () => {
    return (
        <div>
            <h2 className='text-xl font-bold mt-8 mb-4'>Unlock the Power of The Wizard</h2>
            <p className='text-base w-3/4 mb-8'>
            Explore our resources to master the Linux command line, navigate the file system, and automate tasks with confidence.
            Sharpen your skills and become unstoppable in the terminal.            </p>
            <a 
                href="https://intriguing-family-83c.notion.site/Linux-Workshop-1c212536ede080829133f283d00dfdda" 
                className="text-sm bg-[#2F4D4D] text-white py-2 px-4 rounded-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#2F4D4D] transition duration-300"
                target='__blank'
            >
                Start The Magic!
            </a>
        </div>
    )
}

export default Content