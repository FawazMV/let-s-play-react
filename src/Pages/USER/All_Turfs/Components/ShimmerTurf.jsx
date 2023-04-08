const ShimmerTurf = () => {
    return (
        <>
            {Array(8)
                .fill("")
                .map((e, index) => (
                    <div key={index} className=" bg-gray-900  animate-pulse">
                        <div className="h-52 bg-gray-500 "></div>
                        <div className="flex flex-col flex-1 p-6">
                            <div className="h-3 bg-gray-700 rounded w-1/3"></div>
                            <div className="flex justify-between mt-3">
                                <div className="h-5 bg-gray-700 rounded w-28"></div>
                                <div className="h-4 bg-gray-700 rounded w-20 "></div>
                            </div>
                            <div className="flex justify-between mt-4 mb-2">
                                <div className="h-3 bg-gray-700 rounded w-8"></div>
                                <div className="h-3 bg-gray-700 rounded w-16 "></div>
                            </div>
                        </div>
                    </div>

                ))}
        </>
    );
};

export default ShimmerTurf;




