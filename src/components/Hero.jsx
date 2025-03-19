import logo from '../assets/studio-molly-logo.png'

const Hero = () => {
    console.log('Hero component rendered')  
    return (
<section className="bg-neutral-300 p-15 text-white text-center py-20 font-megrim">
   <img src={logo} alt="Homepage" className="w-100 h-100 object-contain rounded-md ml-40 mt-8" /> 
   <h1 className="font-alice text-4xl">Hi, I'm Molly McKenna</h1>
   <p className="font-alice text-lg font-bold p-15">I am a passionate front-end developer creating user-friendly websites.</p>
   <p className="mt-2">A passionate web designer with a love for creating beautiful, functional online experiences. With a background in Wilderness & Outdoor Therapy and Psychology, I blend creativity with empathy to craft websites that not only look great but also connect with people on a deeper level. When I'm not designing, you’ll find me exploring the outdoors, creating art, or dreaming about my future farm. Let’s build something amazing together!</p>
   <a href="#projects" className="mt-8 inline-block bg-sky-500 text-black py-2 px-6 rounded-full"> Explore My Work</a>
</section>

    )
}

export default Hero