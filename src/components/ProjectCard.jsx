

export default function ProjectCard({ image, title }) {
    return (
        <div className="rounded-xl overflow-hidden">
            <img src={image} alt={title} />
            <div className="bg-[#201F23] p-4">
                <h4 className="text-whiteText text-2xl">{title}</h4>
                <span className="text-whiteText text-md after:w-12 after:h-0.5 after:bottom-2  after:mx-2 after:bg-gray-600 after:absolute relative">Show Project</span>
            </div>
        </div>
    );
}
