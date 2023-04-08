import { useEffect, useState } from "react"
import { getTurfs } from "../../../API/ServerRequests/Turf/TurfsApi"
import SearchLoacation from "./Components/SearchLocation";
import ShimmerTurf from "./Components/ShimmerTurf";
import TurfCard from "./Components/TurfCard";
import { Link } from "react-router-dom";






const Turf = () => {

    const [turfs, setTurfs] = useState(null)
    useEffect(() => {
        getTurfs().then(data => setTurfs(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='min-h-screen bg-gray-800 pt-[70px]'>
            <SearchLoacation setTurfs={setTurfs} />
            <section className="py-16 sm:py-16 bg-gray-800 text-gray-100">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold">Let's Play Together</h2>
                        <p className="font-serif text-sm text-gray-400">Select your playspots and book your playtime by a tap...</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        {!turfs ? <ShimmerTurf /> : turfs?.length === 0 ? <div className="w-full h-screen fixed left-0 top-0 z-[-1] flex justify-center items-center bg-gray-800 text-2xl  font-black">🙁 No Turfs Available</div> :
                            turfs.map(turf => (
                                <Link key={turf._id} to={'/turf/' + turf._id}> <TurfCard {...turf} /></Link>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Turf



