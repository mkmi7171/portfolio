import Hand from '../assets/hand.png'

export default function Cube() {
  return (
    <div className="cube-containe flex-wrap flex justify-center absolute w-full h-full pt-24">
      {/* <div className='w-full flex justify-center items-center'>
        <div className="block rounded-full h-12 w-12 m-0 sphere">
          <span></span>
        </div>
      </div> */}
      <img src={Hand} className='object-contain absolute -left-24 top-0' alt='Hand' />
      <div className="cube absolute right-0 top-1/2">
        <div className="face front"></div>
        <div className="face right"></div>
        <div className="face top"></div>
      </div>
      <div className="cube-large mt-20 absolute right-0 top-1/2">
        <div className="face front large-front"></div>
        <div className="face right large-right"></div>
        <div className="face bottom large-bottom"></div>
      </div>
      {/* <div className='cylinder-container w-full flex justify-center items-center shodow-bottom relative after:w-9/12'>
        <div className='w-12 h-36 bg-blue-300 bottom_cylinder relative'>
          <div className='w-12 h-12 rounded-full top_cylinder absolute z-10'></div>
        </div>
        <div class="w-32 h-40 bg_shape rounded rotate-45 relative before:content-[''] before:w-full before:h-full before:absolute before:translate-x-1 before:translate-y-1 before:rounded before:z-0 z-10"></div>
      </div> */}
    </div>
  )
}
