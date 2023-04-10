

import React, { useEffect, useState } from 'react';
import StarRating from './Components/StarRating'

const Turfs = ({ courtName, location, rating, reviews, images, mobile, loction_Details, distric, event, openingTime, Price, closingTime, Holiday }) => {

    return (
        <>
            <div className="bg-slate-800 min-h-screen  w-full sm:px-10 md:px-32 lg:px-60 xl:px-80 py-6">
                <PhotoManagement photos={images} />
                <div className='px-11 xl:px-28 py-5 w-full'>
                    <div className="w-full flex justify-between">
                        <h2 className='font-extrabold text-3xl uppercase tracking-widest'>{courtName}</h2>
                        <div className='font-bold flex mt-2'><p className='mr-1'>(</p> {event} <p className='ml-1'> )</p> </div>
                    </div>
                    <div className='flex justify-between'>
                        <p className='mt-1 font-semibold'>{location} , {distric}</p>
                        <p className='mt-1 font-normal text-gray-400'>{loction_Details}</p>
                    </div>

                    <div className='flex justify-between'>
                        <div className="mt-2">
                            <StarRating rating={rating} />
                        </div>
                        <p className='mt-2 flex font-light text-sm'>
                            <svg width="14" height="14" fill="currentColor" className="mr-2 mt-1 bi bi-telephone-fill text-gray-300" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                            {mobile}
                        </p>
                    </div>
                </div>
            </div>
            <div className='bg-slate-800  w-full px-3 sm:px-5 md:px-20 lg:px-44 xl:px-[200px] md:py-6 mb-4'>
                <ChangingTabs bookings={{ openingTime, Price, closingTime, Holiday }} reviews={reviews} />
            </div>
        </>

    );
}










    ;


import { useParams } from 'react-router-dom';
import { getTurfDetails } from '../../../API/ServerRequests/Turf/TurfsApi';
import ChangingTabs from './Components/ChangingTabs';
import PhotoManagement from './Components/PhotoManagement';


const TurfDetails = () => {
    const { id } = useParams()
    const [turf, setTurf] = useState({
        rating: 0,
        reviews: [],
        images: [],
        openingTime: '00:00',
        closingTime: '00;00'
    })
    useEffect(() => {
        getTurfDetails(id).then(data => {
            setTurf({ ...turf, ...data, })
        })

    }, [])

    return <div className='pt-20 bg-slate-800 text-gray-50'> <Turfs {...turf} /></div>;
};

export default TurfDetails;

