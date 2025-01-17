import { Fade } from "@mui/material";
import { useState, useEffect } from "react";
import Grow from '@mui/material/Grow';
export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);
    return (
        <Fade in={isLoaded} timeout={1000}>
            <div id="home" className="bg-gray-900/90 py-24 sm:py-32">
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-center text-base font-semibold text-indigo-400">
                        Hey it's me
                    </h2>
                    <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-gray-200 sm:text-5xl">
                        Atharv Kadole
                    </p>
                    <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                        {/* Card 1 */}
                        <div className="relative lg:row-span-2">
                            <div className="absolute inset-px rounded-lg bg-gray-800 bg-opacity-30 backdrop-blur-md lg:rounded-l-[2rem] border border-gray-700"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                    <div className="relative min-h-[20rem] w-full grow max-lg:mx-auto max-lg:max-w-sm ">
                                        <div className="absolute inset-x-2 bottom-2 top-2 overflow-hidden rounded-[12cqw] border-x-[2cqw] border-y-[2cqw] border-t-[2cqw] border-gray-700 bg-gray-900 shadow-2xl">
                                            <img
                                                className="size-full object-cover object-top"
                                                src="/public/assets/mek.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-100 max-lg:text-center">
                                        Full-stack developer—I can make your app crash... in style!
                                    </p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                                        From startups to stardom 🌟, I craft websites that (hopefully) don’t crash. Whether it's building an e-commerce platform for pickles or a portfolio generator for the world, I bring quirky ideas to life with clean code. Fueled by chai ☕ and good vibes, I’m your go-to dev for turning concepts into click-worthy creations!"
                                    </p>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow-lg ring-1 ring-gray-700 lg:rounded-l-[2rem]"></div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative max-lg:row-start-1">
                            <div className="absolute inset-px rounded-lg bg-gray-800 bg-opacity-30 backdrop-blur-md max-lg:rounded-t-[2rem] border border-gray-700"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-100 max-lg:text-center">Code Whisperer</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                                        I speak fluent JavaScript... and sarcasm. 💻😜
                                    </p>
                                </div>
                                <div className="flex flex-1 items-center justify-center mt-0 lg:mt-5 px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2 lg:pt-0 ">
                                    <img
                                        className="w-full max-lg:max-w-xs lg:max-w-sm rounded-lg"
                                        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjA3NGwzbmU4Zm5qZnU1YncxanBndm5reG13dTduOHdlY2dpMGo4NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RbDKaczqWovIugyJmW/giphy.gif"
                                        // src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXZ4eG1ibmw5ZHQ5Z3ltYWk3aXI4cjM4OWQwNjJhMGdmNDJpMGE0ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ws6T5PN7wHv3cY8xy8/giphy.gif"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow-lg ring-1 ring-gray-700 max-lg:rounded-t-[2rem]"></div>
                        </div>

                        {/* Card 3 */}
                        <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                            <div className="absolute inset-px rounded-lg bg-gray-800 bg-opacity-30 backdrop-blur-md border border-gray-700"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-100 max-lg:text-center">Coffee-Fueled Coder ☕</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                                        I write code as fast as I drink coffee... which is dangerously fast. ☕💨
                                    </p>
                                </div>
                                <div className="flex flex-1 items-center justify-center mt-0 lg:mt-5 px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2 lg:pt-0">
                                    <img
                                        className="w-full max-lg:max-w-xs lg:max-w-sm rounded-lg"
                                        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXZ4eG1ibmw5ZHQ5Z3ltYWk3aXI4cjM4OWQwNjJhMGdmNDJpMGE0ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ws6T5PN7wHv3cY8xy8/giphy.gif"
                                        // src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow-lg ring-1 ring-gray-700"></div>
                        </div>

                        {/* Card 4 */}
                        <div className="relative lg:row-span-2">
                            <div className="absolute inset-px rounded-lg bg-gray-800 bg-opacity-30 backdrop-blur-md lg:rounded-r-[2rem] border border-gray-700"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-100 max-lg:text-center">
                                        Error 404: Fun Not Found
                                    </p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                                        I fix bugs, but sometimes I cause them... oops! 🐞🤷‍♂️ Debugging in progress!
                                    </p>
                                </div>
                                <div className="relative min-h-[30rem] w-full grow">
                                    <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                                        <div className="flex bg-gray-800/40 ring-1 ring-gray-700">
                                            <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                                                <div className="border-b border-r border-b-gray-700 border-r-gray-700 bg-gray-800 px-4 py-2 text-gray-100">
                                                    NotificationSetting.jsx
                                                </div>
                                                <div className="border-r border-gray-700 px-4 py-2">App.jsx</div>
                                            </div>
                                        </div>
                                        <div className="px-6 pb-14 pt-6">import React from "react";const NotFound = () = (
                                            <div style={{ textAlign: "center", paddingTop: "50px" }}>
                                                <h1 style={{ fontSize: "80px", color: "#FF6347" }}>Oops! 404</h1>
                                                <p style={{ fontSize: "24px", color: "#FF8C00" }}>
                                                    Page not found... <span role="img" aria-label="explosion">💥</span>
                                                </p>
                                                <p style={{ fontSize: "20px" }}>
                                                    Looks like you've traveled to the wrong galaxy. <span role="img" aria-label="rocket">🚀</span>
                                                </p>
                                            </div>
                                            );

                                            export default NotFound;
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow-lg ring-1 ring-gray-700 lg:rounded-r-[2rem]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
}
