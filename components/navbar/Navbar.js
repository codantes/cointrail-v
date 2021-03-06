import {RiCopperCoinFill} from 'react-icons/ri'
import Link from 'next/link';
const Navbar = () => {
    return ( 
        <div className="flex px-6 py-4 items-center justify-between">
            <div className='flex space-x-reverse items-center '>
                <RiCopperCoinFill size='3rem' color='#94d1be' />
                <h1 className='font-mono text-2xl text-bluegreen'>
                    cointrail
                </h1>
            </div>
            <ul className='justify-self-end display-block'>
                <Link
                href='/'
                >
                    <li className='text-2xl font-mono text-bluegreen'>
                        Coins
                    </li>
                </Link>
            </ul>
        </div>
     );
}
 
export default Navbar;