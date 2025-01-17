export default function Contact() {
    return (
        <div id="contact" className="bg-gray-900 py-16 sm:py-24">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <h2 className="text-center text-base font-semibold text-indigo-400 uppercase tracking-wider">
                    Get In Touch
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-center text-4xl font-bold text-gray-200 sm:text-5xl">
                    Contact Me
                </p>
                <p className="mt-4 text-center text-gray-400 text-lg">
                    I’d love to hear from you! Feel free to reach out via email or phone.
                </p>
                <div className="mt-10 flex flex-col items-center space-y-8 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-16">
                    {/* Email Card */}
                    <div className="flex items-center space-x-4 ">
                        <div className="flex items-center justify-center h-12 w-12 p-1 rounded-full bg-indigo-500 text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="h-full w-full"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-200">Email</h3>
                            <p className="text-sm text-gray-400">
                                <a
                                    href="mailto:atharvkadole16@gmail.com"
                                    className="text-indigo-400 hover:underline"
                                >
                                    atharvkadole16@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Phone Card */}
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center h-12 w-12 p-1 rounded-full bg-indigo-500 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -4 30 30" fill="none" stroke="currentColor" strokeWidth="2">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"
                                />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-200">Phone</h3>
                            <p className="text-sm text-gray-400">
                                <a
                                    href="tel:+916361529496"
                                    className="text-indigo-400 hover:underline"
                                >
                                    +91 6361529496
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                {/* Decorative Divider */}
                <div className="mt-16 border-t border-gray-700">
                    <p className="mt-6 text-center text-sm text-gray-500">
                        Let’s collaborate and build something amazing together! 🚀
                    </p>
                </div>
            </div>
        </div>
    );
}
