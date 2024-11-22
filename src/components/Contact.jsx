import Socials from "./Socials";

export default function Contact() {

    return (
        <div>
            <div className='flex gap-4 mt-12 after:w-32 after:h-28 after:absolute after:rounded-full after:bg-[#e3989f] md:after:hidden relative after:top-0 after:left-0 after:opacity-50 contact-circle'>
                <div className='flex-[1.05] px-8 md:px-24 flex flex-col items-center justify-center'>
                    <p className='w-10/12 lg:w-1/2 leading-loose text-lg'>Thanks for stopping by, I’m currently looking to join a new team of creative designers and developers. If you think we might be a good fit for one another, send me an  email.<span>
                    </span>
                    </p>
                    <div>
                        <Socials ulClass={`flex gap-3 my-10 md:my-24`}/>
                    </div>
                </div>
            </div>
            <div className="text-[9px] p-6 uppercase w-fit">
                <span className="block">
                    All rights reserved</span>
                <span> ©2024 Mahsa Karami</span>
            </div>
        </div>
    )
}
