

const Projects = () => {
    console.log('Projects component rendered')  
    return (
        <section className="p-8">
            <h2 className="text-3xl font-semibold text-center  mb-8">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold">Project Title</h3>
                <p className="mt-4"> A brief project description...</p>
            </div>
            </div>
        </section>
    )
}


export default Projects