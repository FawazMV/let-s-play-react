import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getTurfView } from "../../../../../../API/ServerRequests/Turf/TurfsApi"
import Shimmer from "./Shimmer"

const AllReviews = ({ update }) => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        getReview()
    }, [update])
    const { id } = useParams()
    const getReview = async () => {
        const response = await getTurfView(id)
        if (response?.status === 200) setReviews(response.data)
        console.log(response)
    }
    return (


        <>
            {!reviews ? <NotAvailable /> : reviews?.length === 0 ? <Shimmer /> :
                reviews.map((review) => (
                    <article className="py-5">
                        <div className="flex items-center mb-4 space-x-4">
                            <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                            <div className="space-y-1 font-medium text-white">
                                <p>{review?.user[0]?.username} </p>
                            </div>
                        </div>
                        <div className="flex items-center mb-1">
                            {Array(5).fill('').map((e, index) => (
                                <svg aria-hidden="true" className={`w-5 h-5 ${index < review.rating ? 'text-yellow-400' : 'text-gray-400'} `} fill="currentColor" viewBox="0 0 20 20" ><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            ))}


                        </div>
                        <footer className="mb-5 text-sm  text-gray-400"><p>{new Date(review.createdAt).toDateString()}</p></footer>
                        <p className="mb-5 font-light capitalize  text-gray-400">{review.review}</p>
                        <hr className="opacity-30" />
                    </article>
                ))}
        </>
    )
}


export default AllReviews

const NotAvailable = () => (
    <div className="w-full text-center font-semibold text-2xl pt-10">
        No reviews are avilable
    </div>
)