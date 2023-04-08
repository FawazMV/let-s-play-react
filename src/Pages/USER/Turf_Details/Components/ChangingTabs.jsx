import { useState } from "react";
import BookingCalendar from "./BookingCalendar/BookingCalendar";
import ReviewTab from "./Review/ReviewTab";

const ChangingTabs = ({ reviews, bookings }) => {
    const [activeTab, setActiveTab] = useState("booking");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="w-full shadow">
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex" aria-label="Tabs">
                    <button className={`${activeTab === "booking"
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200"
                        } w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm uppercase`}
                        onClick={() => handleTabClick("booking")} > Book Your Spot
                    </button>
                    <button className={`${activeTab === "reviews"
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200"
                        } w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm uppercase`}
                        onClick={() => handleTabClick("reviews")}  >  Reviews & Ratings
                    </button>
                </nav>
            </div>
            <div className="py-8 px-4 bg-[#0f172af1]">
                {activeTab === "booking" && (
                    <div>
                        <BookingCalendar bookings={bookings} />
                    </div>
                )}
                {activeTab === "reviews" && (
                    <div>
                        <ReviewTab />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ChangingTabs









