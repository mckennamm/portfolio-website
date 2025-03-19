

const Hero = () => {
    console.log('Hero component rendered')  
    return (
    <section className="bg-blue-500 text-white text-center py-20">
         <h1 className="text-4xl font-bold">Hi, I'm Molly McKenna</h1>
         <p className="text-lg">I am a passionate front-end developer creating user-friendly websites.</p>
         <a href="#projects" className="mt-8 inline-block bg-yellow-500 text-black py-2 px-6 rounded-full"> Explore My Work</a>
    </section>
    )
}

export default Hero