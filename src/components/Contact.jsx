import LinkedinLogo from '../assets/linkedin.png'
import User from '../assets/user.png'

export default function Contact() {
    return (
        <div className='text-whiteText '>
            <h2 className='project-title'>comments</h2>
            <div className='flex gap-4'>
                <div className='bg-[#171e2f] rounded-xl p-4'>
                    <div className='flex justify-between'>
                        <img src={LinkedinLogo} alt='linkedin logo' className='w-8' />
                        <img src={User} alt='user' className='w-10' />
                    </div>
                    <blockquote>
                        I had the pleasure of working closely with Mahsa Karami on several mobile application development projects, and I can't recommend her highly enough. Mahsa is an incredibly talented and dedicated mobile app developer who consistently delivers high-quality work. Her technical expertise is top-notch, particularly in iOS and Android development, and she has a great ability to translate complex requirements into intuitive and user-friendly apps.

                        What sets Mahsa apart is her problem-solving mindset and her collaborative spirit. Beyond her technical skills, Mahsa brings a positive attitude to the team, even under tight deadlines. She’s reliable, creative, and always eager to learn and grow. Working with Mahsa has been a fantastic experience.
                    </blockquote>
                    <span>Behdad Montazerin <br />
                        Product Designer </span>
                </div>
                <div className='bg-[#171e2f] rounded-xl p-4'>
                    <div className='flex justify-between'>
                        <img src={LinkedinLogo} alt='linkedin logo' className='w-8' />
                        <img src={User} alt='user' className='w-10' />
                    </div>
                    <blockquote>
                        Mrs. Mahsa Karami is one of the most delightful people I had the pleasure of working for in my career. Not only did she have a unique ability to keep our team organized and on schedule, but her constant communication helped lift our spirits in challenging situations.

                        Her humor and empathy fostered a comforting work environment, . I highly recommend working with Mrs. Karami.
                    </blockquote>
                    <span>Seyed Amirreza Ardebili <br />Backend Developer </span>
                </div>
            </div>
            <p>Thanks for stopping by, I’m currently looking to join a new team of creative designers and developers. If you think we might be a good fit for one another, send me an  email</p>
        </div>
    )
}
