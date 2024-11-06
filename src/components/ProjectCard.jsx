

export default function ProjectCard({title, index, image }) {
    return (
        <div
            className={`h-24 border border-gray-600 w-24 flex justify-center items-center relative div${index + 1} group hover:scale-105 transition`}>
            <div
                className="h-full w-full rounded-full"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
            </div>
        </div>
    );
}
