const Shimmer = () => (
    <>
        {Array(4).fill('').map((e, index) => (
            < article key={index} className="py-5">
                <div className="flex items-center mb-4 space-x-4">
                    <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse"></div>
                    <div className="space-y-1 font-medium dark:text-white">
                        <div className="w-32 h-4 bg-gray-300 rounded animate-pulse"></div>
                    </div>
                </div>
                <div className="flex items-center mb-1">
                    <div className="w-5 h-5 bg-gray-300 rounded-full mr-2 animate-pulse"></div>
                    <div className="w-5 h-5 bg-gray-300 rounded-full mr-2 animate-pulse"></div>
                    <div className="w-5 h-5 bg-gray-300 rounded-full mr-2 animate-pulse"></div>
                    <div className="w-5 h-5 bg-gray-300 rounded-full mr-2 animate-pulse"></div>
                </div>
            </article>
        ))}
    </>
)

export default Shimmer