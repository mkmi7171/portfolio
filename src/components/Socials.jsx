import React from 'react'

export default function Socials({ulClass}) {
    const Arrow = ({ className }) => {
        return <div className={`transition-all duration-200 ease-in-out ${className}`}>
            <svg data-v-21a5ab71="" width="20" height="12" viewBox="0 0 18 17" fill="none" class="icon-svg | w-[1.8rem] h-auto"><path data-v-21a5ab71="" d="M4.75928 4.96442L13.3288 4.50811L12.5375 12.7426" class="stroke-current"></path><path data-v-21a5ab71="" d="M13.3857 4.39875L4.90039 12.884" class="stroke-current"></path></svg>
        </div>
    }
  return (
    <div>
          <ul className={`${ulClass}`}>
              <li className='overflow-hidden relative group border w-24 h-6 border-gray-500 px-2 py-1 rounded-3xl'>
                  <div className="flex items-center">
                      <p className='absolute top-1 text-xs group-hover:absolute group-hover:-top-[55%] group-hover:tracking-widest tracking-tighter transition-all duration-300 ease-in-out group-hover:opacity-0'>
                          LINKEDIN
                      </p>
                      <Arrow className={`absolute top-1 right-1 group-hover:-top-full group-hover:-right-4 group-hover:scale-50`} />
                  </div>
                  <p className='text-xs absolute -bottom-[60%] group-hover:bottom-1 transition-all tracking-widest group-hover:tracking-tighter duration-300 ease-in-out opacity-0 group-hover:opacity-100'>
                      LINKEDIN
                  </p>
                  <Arrow className={'absolute top-full right-4 scale-50 group-hover:top-1 group-hover:right-1 group-hover:scale-100'} />
              </li>

              <li className='overflow-hidden relative group border w-24 h-6 border-gray-500 px-2 py-1 rounded-3xl'>
                  <div className="flex items-center">
                      <p className='absolute top-1 text-xs group-hover:absolute group-hover:-top-[55%] group-hover:tracking-widest tracking-tighter transition-all duration-300 ease-in-out group-hover:opacity-0'>
                          GITHUB
                      </p>
                      <Arrow className={`absolute top-1 right-1 group-hover:-top-full group-hover:-right-4 group-hover:scale-50`} />
                  </div>
                  <p className='text-xs absolute -bottom-[60%] group-hover:bottom-1 transition-all tracking-widest group-hover:tracking-tighter duration-300 ease-in-out opacity-0 group-hover:opacity-100'>
                      GITHUB
                  </p>
                  <Arrow className={'absolute top-full right-4 scale-50 group-hover:top-1 group-hover:right-1 group-hover:scale-100'} />
              </li>
              <li className='overflow-hidden relative group border w-24 h-6 border-gray-500 px-2 py-1 rounded-3xl'>

                  <div className="flex items-center">
                      <p className='absolute top-1 text-xs group-hover:absolute  group-hover:-top-[55%] group-hover:tracking-widest tracking-tighter transition-all duration-300 ease-in-out group-hover:opacity-0'>
                          EMAIL
                      </p>
                      <Arrow className={`absolute top-1 right-1 group-hover:-top-full group-hover:-right-4 group-hover:scale-50`} />
                  </div>
                  <p className='text-xs absolute -bottom-[60%] group-hover:bottom-1 transition-all tracking-widest group-hover:tracking-tighter duration-300 ease-in-out opacity-0 group-hover:opacity-100' >
                      EMAIL
                  </p>
                  <Arrow className={'absolute top-full right-4 scale-50 group-hover:top-1 group-hover:right-1 group-hover:scale-100'} />
              </li>
          </ul>
    </div>
  )
}