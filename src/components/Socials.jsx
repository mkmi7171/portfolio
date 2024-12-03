import { Arrow } from "./Arrow"
import { useDarkMode } from "./DarkModeContext"

export default function Socials({ ulClass }) {
    const {isDarkMode} = useDarkMode()
  return (
    <div>
          <ul className={`${ulClass}`}>
              <li className={`cursor-pointer overflow-hidden relative group border w-24 h-8 ${isDarkMode ? 'border-gray-100' : 'border-gray-500'} flex items-center rounded-xl`}>
                  <a href='https://www.linkedin.com/in/mahsa-karami/' target="_blank" rel="noreferrer" className='w-24 h-6 relative overflow-hidden px-2 py-1'>
                      <div className="flex items-center">
                          <p className='absolute top-1 text-xs group-hover:absolute group-hover:-top-[55%] group-hover:tracking-widest tracking-tighter transition-all duration-500 ease-in-out group-hover:opacity-0'>
                              LINKEDIN
                          </p>
                          <Arrow className={`absolute top-1 right-1 group-hover:-top-full group-hover:-right-4 group-hover:scale-50`} />
                      </div>
                      <p className='text-xs absolute -bottom-[60%] group-hover:bottom-1 transition-all tracking-widest group-hover:tracking-tighter duration-500 ease-in-out opacity-0 group-hover:opacity-100'>
                          LINKEDIN
                      </p>
                      <Arrow className={'absolute top-full right-4 scale-50 group-hover:top-1 group-hover:right-1 group-hover:scale-100'} />
                  </a>
              </li>

              <li className={`cursor-pointer overflow-hidden relative group border w-24 h-8 ${isDarkMode ? 'border-gray-100' : 'border-gray-500'} flex items-center rounded-xl`}>
                  <a href='https://github.com/mkmi7171' target="_blank" rel="noreferrer" className='w-24 h-6 relative overflow-hidden px-2 py-1'>
                      <div className="flex items-center">
                          <p className='absolute top-1 text-xs group-hover:absolute group-hover:-top-[55%] group-hover:tracking-widest tracking-tighter transition-all duration-500 ease-in-out group-hover:opacity-0'>
                              GITHUB
                          </p>
                          <Arrow className={`absolute top-1 right-1 group-hover:-top-full group-hover:-right-4 group-hover:scale-50`} />
                      </div>
                      <p className='text-xs absolute -bottom-[60%] group-hover:bottom-1 transition-all tracking-widest group-hover:tracking-tighter duration-500 ease-in-out opacity-0 group-hover:opacity-100'>
                          GITHUB
                      </p>
                      <Arrow className={'absolute top-full right-4 scale-50 group-hover:top-1 group-hover:right-1 group-hover:scale-100'} />
                  </a>
              </li>
              <li className={`cursor-pointer overflow-hidden relative group border w-24 h-8 ${isDarkMode ? 'border-gray-100' : 'border-gray-500'} flex items-center rounded-xl`}>
                  <a href='mailto:mahsakarami.dev@gmail.com' target="_blank" rel="noreferrer" className='w-24 h-6 relative overflow-hidden px-2 py-1'>
                      <div className="flex items-center">
                          <p className='absolute top-1 text-xs group-hover:absolute group-hover:-top-[55%] group-hover:tracking-widest tracking-tighter transition-all duration-500 ease-in-out group-hover:opacity-0'>
                              EMAIL
                          </p>
                          <Arrow className={`absolute top-1 right-1 group-hover:-top-full group-hover:-right-4 group-hover:scale-50`} />
                      </div>
                      <p className='text-xs absolute -bottom-[60%] group-hover:bottom-1 transition-all tracking-widest group-hover:tracking-tighter duration-500 ease-in-out opacity-0 group-hover:opacity-100'>
                          EMAIL
                      </p>
                      <Arrow className={'absolute top-full right-4 scale-50 group-hover:top-1 group-hover:right-1 group-hover:scale-100'} />
                  </a>
              </li>
          </ul>
    </div>
  )
}