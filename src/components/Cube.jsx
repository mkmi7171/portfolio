
export default function Cube() {
  return (
    <div className="cube-container opacity-65 flex-wrap flex justify-center absolute w-full h-full pt-24">
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
      <div className="cube absolute -left-4 top-1/12">
        <div className="face front"></div>
        <div className="face right"></div>
        <div className="face top"></div>
      </div>
      <div className="cube-large mt-20 absolute -left-4 top-1/12">
        <div className="face front large-front"></div>
        <div className="face right large-right"></div>
        <div className="face bottom large-bottom"></div>
      </div>
    </div>
  )
}
