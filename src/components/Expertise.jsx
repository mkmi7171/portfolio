import Front from '../assets/front.png'
import Mobile from '../assets/mobile.png'

export default function Expertise() {
  return (
    <div className='flex relative flex-col item-center justify-center flex-wrap py-12 px-40' style={{ perspective: '1000px' }}>
      <h2 after="Expertise" className='text-whiteText mb-8 font-mark-pro-bold font-black experties-title after:content-[attr(after)]'> Expertise</h2>
      <div className='grid grid-cols-6 grid-rows-3 gap-0 relative'>
        <div className='p-3 flex items-end col-start-5 col-end-7 row-start-1 row-end-3 relative rounded-3xl' style={{
          backgroundImage: `url(${Front})`,
          backgroundSize: 'contain',
          backgroundPosition: 'top',
          backgroundRepeat: 'repeat'
        }}>
          {/* <img src={Front} /> */}
          <div className='bg-white rounded-3xl p-3 border'>
            <h3 className=' text-xl uppercase leading-relaxed'>Frontend Development</h3>
            <div className='flex p-4'>
              <p className=' leading-loose text-lg'>Over 4 years of development experience in React and Next.js frameworks.</p>
              <div className="text-whiteText flex flex-col justify-between p-3 w-40 h-32 rounded-2xl bg-[#553F46] absolute top-6 -right-28 ">
                <h3 className='font-black'>React JS</h3>
                <span className='border after:w-1 after:h-2 after:bg-rose-200 after:absolute relative after:left-0 after:rounded after:top-1/2 p-0'>4 years <span className='text-xs'>experience</span></span>
              </div>
              <div className="w-36 h-32 rounded-2xl mat-bg absolute top-1/3 -left-20">
                <h3>Next JS</h3>
              </div>
            </div>
          </div>

        </div>
        <div className='flex items-end col-start-1 col-end-3 row-start-2 row-end-4 h-[36rem] bg-[#C4E4B5] relative rounded-3xl p-3' style={{
          backgroundImage: `url(${Mobile})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}>
          {/* <img src={Mobile} /> */}
          <div className='mat-bg rounded-3xl p-4'>
            <h3 className='text-whiteText text-xl uppercase leading-relaxed'>Mobile App Development</h3>
            <div className='flex p-4'>
              <p className='text-whiteText leading-loose text-lg'>
                Skilled in developing hybrid mobile apps and cross-platform solutions using React Native framework.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
