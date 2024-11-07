export default function ProjectCard({ title, index, image, color }) {
    return (
        <div
            className={`gap-5 flex justify-center items-center relative div${index + 1} group hover:scale-105 transition`}>
            <div
                className="absolute h-48 w-48 rounded-full"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
            </div>
            <div className="mat-bg w-44 h-44 rounded-full flex flex-col justify-between items-center outline outline-[0.5px] outline-offset-4 outline-gray-400 dots p-3 relative">
                <span className="text-xs">No {index + 1}</span>
                <p className="text-lg font-bold">{title}</p>
                <span className="text-xs">Y 2024</span>
            </div>
        </div>
    );
}