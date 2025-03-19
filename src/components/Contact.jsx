

const Contact = () => {
    return (
        <section className="p-8">
            <h2 className="text-3xl font-semibold text-center  mb-8">Contact Me</h2>
            <form action="#" className="max-w-xl mx-auto space-y-6">
                <div>
                    <label htmlFor="name" className="block text-lg">Name</label>
                    <input type="text" id="name" className="w-full p-3 mt-2 border rounded" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-lg">Email</label>
                    <input type="email" id="email" className="w-full p-3 mt-2 border rounded" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-lg">Message</label>
                    <textarea id="message" className="w-full p-3 mt-2 border rounded"></textarea>
                </div>
                <button type="submit" className="w-full bg-neutral-300 py-3 rounded-full">Send Message</button>
            </form>
        </section>
    )
}

export default Contact