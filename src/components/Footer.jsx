import gdgLogo from '../assets/gdg-logo.svg'

const Footer = () => {
    return (
        <div className='w-full flex flex-col md:flex-row itesm-start md:items-end gap-6 md:gap-0 justify-between'>
            <img src={gdgLogo} alt="gdg-logo" className='w-64 md:w-96' />
            <div className='flex gap-2'>
                <a href='https://www.instagram.com/gdgasu/' target='__blank' className='text-sm' >Instagram |</a>
                <a href='https://www.facebook.com/GDSCASU' target='__blank' className='text-sm' >Facebook |</a>
                <a href='https://www.linkedin.com/company/gdgasu/posts/?feedView=all' target='__blank' className='text-sm' >LinkedIn</a>
            </div>
        </div>
    )
}

export default Footer