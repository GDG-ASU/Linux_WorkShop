import sjLogo from '../../assets/icons8-linux-96.png'


const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-center max-w-4xl mx-auto space-y-12 h-[100dvh]'>
            <h1 className='flex flex-col md:flex-row items-center text-xl gap-3 font-bold scale-[1.5]'>
                <img src={sjLogo} alt="sj-logo" className='w-36 md:w-auto' /> | Linux Workshop
            </h1>
            <p className='text-base text-center'>
            🧙‍♂️ The Linux Workshop has ended, but your journey doesn't stop here.
Explore the shared resources, revisit the lessons, and keep honing your command-line craft.
The path to becoming a true Linux wizard is still yours to follow.
Keep the magic alive!</p>
            <a 
                href="https://intriguing-family-83c.notion.site/Linux-Workshop-1c212536ede080829133f283d00dfdda" 
                className="text-sm bg-[#092621] text-white py-2 px-4 rounded-lg hover:bg-[#3C5959] focus:outline-none focus:ring-2 focus:ring-[#3C5959] transition duration-300"
                target='__blank'
            >
                Start The Magic!
            </a>
        </div>
    )
}

export default Hero