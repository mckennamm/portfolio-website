

const Projects = () => {
    console.log('Projects component rendered')  

    const projects = [
        {
            title: "Portfolio Website",
            description: "A personal portfolio website built with React and Tailwind CSS to showcase my front-end development projects.",
            link: "https://github.com/mollymckenna/portfolio-website",
        },
        {
            title: "Cooking Ninja",
            description: "A recipe app built with React and Firebase, allowing users to search and save recipes.",
            link: "https://github.com/mollymckenna/cooking-ninja",
        },
        {
            title: "Wedding Website",
            description: "A wedding website built with HTML, CSS, and JavaScript to share details about the big day, including a personal login for each guest.",  
            link: "www.cameronandmolly.com",
        }
    ]

    return (
        <section className="p-8">
            <h2 className="text-3xl font-semibold text-center  mb-8">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold">{project.title}</h3>
                        <p className="mt-4">{projects.description}</p>
                        <a href={project.link} target="_blank" className="text-yellow-500 mt-6 inline-block">
                            View Project
                            </a>
                    </div>

            ))}
          
            </div>
        </section>
    )
}


export default Projects