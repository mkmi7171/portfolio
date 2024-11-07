
export default function Contact() {
    const Arrow = () => {
        return <div className="absolute top-1 right-1 group-hover:">
            <svg data-v-21a5ab71="" width="20" height="12" viewBox="0 0 18 17" fill="none" class="icon-svg | w-[1.8rem] h-auto"><path data-v-21a5ab71="" d="M4.75928 4.96442L13.3288 4.50811L12.5375 12.7426" class="stroke-current"></path><path data-v-21a5ab71="" d="M13.3857 4.39875L4.90039 12.884" class="stroke-current"></path></svg>
        </div>
    }
    return (
        <div>
            <div className='flex gap-4'>
                <div className='flex-[1.05] px-24 flex flex-col border border-black items-center justify-center'>
                    <p className='w-1/2 leading-loose'>Thanks for stopping by, I’m currently looking to join a new team of creative designers and developers. If you think we might be a good fit for one another, send me an  email<span>
                    </span>
                    </p>
                    <div>
                        <ul className='flex gap-3 my-24'>
                            <li className='overflow-hidden relative group border w-28 h-6 border-gray-500 px-2 py-1 rounded-3xl'>
                                <div className="flex items-center">
                                    <p className='absolute top-1 text-xs group-hover:absolute group-hover:-top-[55%] group-hover:tracking-widest tracking-tighter transition-all duration-300 ease-in-out group-hover:opacity-0'>
                                        LINKEDIN
                                    </p>
                                    <Arrow />
                                </div>
                                <p className='text-xs absolute -bottom-[60%] group-hover:bottom-1 transition-all tracking-widest group-hover:tracking-tighter duration-300 ease-in-out opacity-0 group-hover:opacity-100'>
                                    LINKEDIN
                                </p>
                            </li>

                            <li className='overflow-hidden relative group border w-28 border-gray-500 px-2 py-1 rounded-3xl'>
                                <div className="flex items-center">
                                    <p className='absolute top-1 text-xs group-hover:absolute  group-hover:-top-[55%] group-hover:tracking-widest tracking-tighter transition-all duration-300 ease-in-out group-hover:opacity-0'>
                                        GITHUB
                                    </p>
                                    <Arrow />
                                </div>
                                <p className='text-xs absolute -bottom-[60%] group-hover:bottom-1 transition-all tracking-widest group-hover:tracking-tighter duration-300 ease-in-out opacity-0 group-hover:opacity-100'>
                                    GITHUB
                                </p>
                            </li>
                            <li className='overflow-hidden relative group border w-28 border-gray-500 px-2 py-1 rounded-3xl'>

                                <div className="flex items-center">
                                    <p className='absolute top-1 text-xs group-hover:absolute  group-hover:-top-[55%] group-hover:tracking-widest tracking-tighter transition-all duration-300 ease-in-out group-hover:opacity-0'>
                                        EMAIL
                                    </p>
                                    <Arrow />
                                </div>
                                <p className='text-xs absolute -bottom-[60%] group-hover:bottom-1 transition-all tracking-widest group-hover:tracking-tighter duration-300 ease-in-out opacity-0 group-hover:opacity-100' >
                                    EMAIL
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex-[0.95]'>
                    <div className='border border-gray-800 p-4 relative rounded-3xl m-4 overflow-hidden relative'>
                        <div className='flex justify-between'>
                            {/* <img src={Ui} alt='ui designer' className='absolute bottom-0 right-0 w-44' /> */}
                        </div>
                        <blockquote className='my-4 leading-loose'>Mahsa is an incredibly talented and dedicated mobile app developer who consistently delivers high-quality work. Her technical expertise is top-notch, particularly in iOS and Android development, and she has a great ability to translate complex requirements into intuitive and user-friendly apps.
                        </blockquote>
                        <span className='font-bold block'>- Behdad Montazerin </span>
                        <span className='font-din-condensed'>Product Designer</span>
                    </div>
                    <div className='border border-gray-800 p-4 rounded-3xl m-4 overflow-hidden relative'>
                        <div className='flex justify-between'>
                            {/* <img src={Back} alt='backend' className='absolute bottom-0 right-0 w-44' /> */}
                        </div>
                        <blockquote className='my-4 leading-loose'>
                            Mrs. Mahsa Karami is one of the most delightful people I had the pleasure of working for in my career. Not only did she have a unique ability to keep our team organized and on schedule, but her constant communication helped lift our spirits in challenging situations.
                        </blockquote>
                        <span className='font-bold block'>- Seyed Amirreza Ardebili</span>
                        <span className='font-din-condensed'>Backend Developer</span>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}
