import Link from 'next/link'
import React from 'react'
import { useTheme } from '@/Context/ThemeContext'

function Footer() {
    const {theme} = useTheme()

    return (
        <div className={`footerContainer justify-evenly mt-14 ${theme==='dark' && 'dark'}`}>
            <div className='w-[20%]'>
                <Link className='flex justify-center' href={'/'}>
                    <img className="w-[100px]" src="/techlogo.png" alt="logo" />
                </Link>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className='w-[20%]'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus assumenda nulla excepturi, veritatis rem porro quia, officiis facere labore distinctio vitae incidunt blanditiis cumque, voluptatem eos. Quibusdam reprehenderit dolorem facilis!</p>
            </div>

            <div className='linksFooter'>
                <div>
                    <Link className="w-[100px] link" href={'/'}>Home
                    </Link>
                </div>

                <div>
                    <Link className="w-[100px] link" href={'/products/ProductsPage'}>Products
                    </Link>
                </div>

                <div>
                    <Link className="w-[100px] link" href={'/testPage/TestPage'}>Test Page
                    </Link>
                </div>
            </div>

            <div className='linksFooter'>
                <div>
                    <Link className="w-[100px] link" href={'/usestate/Usestate'}>UseState
                    </Link>
                </div>

                <div>
                    <Link className="w-[100px] link" href={'/inputs/Inputs'}>Inputs
                    </Link>
                </div>

                <div>
                    <Link className="w-[100px] link" href={'/filter/Filter'}>Games
                    </Link>
                </div>
            </div>

            <div className='w-[20%]'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus assumenda nulla excepturi</p>
            </div>
        </div>
    )
}

export default Footer