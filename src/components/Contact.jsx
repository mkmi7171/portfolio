import Socials from "./Socials";

export default function Contact() {

    return (
        <div>
            <div className='flex gap-4'>
                <div className='flex-[1.05] px-24 flex flex-col items-center justify-center'>
                    <p className='w-1/2 leading-loose text-lg'>Thanks for stopping by, I’m currently looking to join a new team of creative designers and developers. If you think we might be a good fit for one another, send me an  email.<span>
                    </span>
                    </p>
                    <div>
                        <Socials ulClass={`flex gap-3 my-24`}/>
                    </div>
                </div>
                {/* <div className='flex-[0.85]'>
                    <div className='border border-gray-400 p-4 relative rounded-3xl m-4 overflow-hidden relative'>
                        <div className='flex justify-between'>
                        
                        </div>
                        <blockquote className='my-4 leading-loose'>Mahsa is an incredibly talented and dedicated mobile app developer who consistently delivers high-quality work. Her technical expertise is top-notch, particularly in iOS and Android development, and she has a great ability to translate complex requirements into intuitive and user-friendly apps.
                        </blockquote>
                        <span className='font-bold block'>- Behdad Montazerin </span>
                        <span className='font-din-condensed'>Product Designer</span>
                    </div>
                    <div className='border border-gray-400 p-4 rounded-3xl m-4 overflow-hidden relative'>
                        <div className='flex justify-between'>
                          
                        </div>
                        <blockquote className='my-4 leading-loose'>
                            Mrs. Mahsa Karami is one of the most delightful people I had the pleasure of working for in my career. Not only did she have a unique ability to keep our team organized and on schedule, but her constant communication helped lift our spirits in challenging situations.
                        </blockquote>
                        <span className='font-bold block'>- Seyed Amirreza Ardebili</span>
                        <span className='font-din-condensed'>Backend Developer</span>
                        
                    </div>
                </div> */}
            </div>
            <div className="text-[9px] m-6 uppercase w-fit">
                <span className="block">
                    All rights reserved</span>
                <span> ©2024 Mahsa Karami</span>
            </div>
        </div>
    )
}
