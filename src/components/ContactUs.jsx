function ContactUs() {
    return (
        <div className="bg-slate-300 py-20 px-10 lg:px-20 mt-4 ">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center">
                <div className="w-full lg:w-1/2 lg:mr-10 my-10 mb-80 mt-0 ">
                    <h2 className="text-4xl lg:text-6xl font-semibold text-slate-800 ">Contact Us</h2>
                    <p className="text-lg text-gray-600">We'd love to hear from you! Reach out to us with any questions, comments, or feedback.</p>
                </div>
                <form className="w-full lg:w-1/2 mt-8 lg:mt-0 ">
                    <div className="flex flex-col mb-6">
                        <label htmlFor="name" className="text-lg font-semibold text-gray-800 mb-2">Name:</label>
                        <input type="text" id="name" name="name" className="border border-gray-300 p-3 rounded focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="flex flex-col mb-6">
                        <label htmlFor="email" className="text-lg font-semibold text-gray-800 mb-2">Email:</label>
                        <input type="email" id="email" name="email" className="border border-gray-300 p-3 rounded focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="flex flex-col mb-6">
                        <label htmlFor="message" className="text-lg font-semibold text-gray-800 mb-2">Message:</label>
                        <textarea id="message" name="message" rows="5" className="border border-gray-300 p-3 rounded focus:outline-none focus:border-blue-500"></textarea>
                    </div>
                    <button type="submit" className="bg-slate-700 text-white font-semibold py-3 px-6 rounded-full hover:bg-slate-500 transition-colors duration-300">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs
