

export default function ProjectCard({ image, title }) {
    return (
        <div className="rounded-xl overflow-hidden h-[100%] w-full flex flex-col justify-center items-center">
            <img src={image} alt={title} className="h-[85%] w-full object-cover object-center" />
            <div className="bg-[#201F23] w-full h-[15%] flex flex-col justify-center px-4">
                <h4 className="text-whiteText text-xl">{title}</h4>
                <span className="text-whiteText text-md after:w-12 after:h-0.5 after:bottom-2  after:mx-2 after:bg-gray-600 after:absolute relative">Show Project</span>
            </div>
        </div>
    );
}
