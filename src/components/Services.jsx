import React from "react";

function Services() {
    return (
        <div className="bg-gradient-to-r from-slate-300 to-slate-500 py-20 px-10 lg:px-20 mt-4">
            <h1 className="text-4xl lg:text-6xl font-semibold text-black mb-10">Websites</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="relative overflow-hidden rounded-lg">
                    <img src="sneh.jpg" alt="Website" className="object-cover w-full h-full " />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition duration-300 opacity-0 hover:opacity-100">
                        <button className="text-white border-2  py-1 px-3 rounded-full text-xs tracking-tighter">©2023-2024</button>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                    <img src="sneh3.jpg" alt="Website" className="object-cover w-full h-full" />
                </div>
            </div>
        </div>
    );
}

export default Services;
