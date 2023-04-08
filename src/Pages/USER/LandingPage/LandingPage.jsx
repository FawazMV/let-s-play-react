import { Link } from 'react-router-dom'
import img from '../../../assets/meet-pals.png'
import Button from '../Layout/Button'
const LandingPage = () => {
    return (
        <div className="flex justify-evenly items-end bg-slate-800 p-10 md:p-24 w-full h-screen lg:flex-wrap flex-wrap-reverse">
            <div className='md:w-[65%] lg:w-[37%] xl:w-[32%] mt-5 lg:mt-8'>
                <h1 className='text-5xl text-white  font-extrabold'>Your Playground is just a tap away...</h1>
                <div className='flex w-full  lg:justify-between justify-evenly flex-wrap pt-5 lg:pt-8'>
                    <Link to={'/turfs'}> <Button color={'bg-green-500'}>To Book Avenue</Button> </Link>
                    <Link to={'/register-turf'}><Button color={'bg-yellow-400'}>To Get Listed</Button></Link>
                </div>
            </div>
            <div className='mt-[1000px] md:mt-0'>
                <img className='w-72' src={img} />
            </div>
        </div >
    )
}

export default LandingPage