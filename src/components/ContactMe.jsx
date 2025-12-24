import { cn } from "@/lib/utils";
import { Instagram, Linkedin } from "lucide-react";

export const ContactMe = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const response = await fetch("https://formspree.io/f/mdanvgbe", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        })

        if (response.ok) {
            alert("Message sent successfully!")
            e.target.reset()
        } else {
            alert("Something went wrong. Please try again.")
        }
    }

    return <section id="contact" className="py-24 px-4 relative bg-secondary/10">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
                Contact <span className="text-primary">Me</span>
            </h2>

            <p className="text-center mb-9 max-w-2xl mx-auto">
                Fell free to reach out! I am always open to discuss new opportunities
            </p>

            <div className="bg-card max-w-3xl mx-auto p-8 rounded-lg shadow-xs">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="name">Your name</label>
                        <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary mt-1"
                            placeholder="Enter name here...." />
                    </div>
                    <div>
                        <label htmlFor="email">Your email</label>
                        <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary mt-1"
                            placeholder="Enter your mail...." />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary mt-1 resize-none"
                            placeholder="Enter message here...." />
                    </div>

                    <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>Submit</button>
                </form>
            </div>

            <div className="my-3 flex gap-6 justify-center items-center">
                <div className="flex gap-2 bg-secondary/70 py-2 px-3 rounded-3xl cursor-pointer hover:bg-secondary/90 hover:scale-[1.05] transition-transform duration-300 ">
                    <Instagram></Instagram>
                    <a className="text-bold" href="https://www.instagram.com/manjapallil_amal07?igsh=MTFlNTE3aGd5MXdvdw==" target="_blank">INSTAGRAM</a>
                </div>

                <div className="flex gap-2 bg-secondary/70 py-2 px-3 rounded-3xl cursor-pointer hover:bg-secondary/90 hover:scale-[1.05] transition-transform duration-300 ">
                    <Linkedin></Linkedin>
                    <a className="text-bold" href="https://www.linkedin.com/in/amal-manjapallil-706ba6281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">LINKEDIN</a>
                </div>
            </div>
        </div>
    </section>
}