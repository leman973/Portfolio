import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-secondary/10">
        <div className="md:flex gap-2 justify-center items-center object-contain">
            <div className="hero-title container hero-image relative w-[260px] h-60 xl:w-[300px] xl:h-80 md:shrink-0 animate-drift my-8 mx-auto">
                <img className="me w-full h-full rounded-2xl animate-floating object-cover origin-center shadow-[0_0_40px_rgba(255,255,255,0.3)]" src="src/assets\projects\profile.jpeg" alt="Me" />

                <img className="absolute rocket rocket-right w-[70px] left-[167px] xl:left-[207px] xl:top-[86%] top-[85%]" src="src/assets\projects\rocket.gif" />
                <img className="absolute rocket rocket-left w-[70px] left-[-22px] top-[84%] xl:-left-2.5 xl:top-[86%] " src="src/assets\projects\rocket.gif" />

            </div>
            <div className="container max-w-4xl mx-auto text-center z-10 my-3">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Amal</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Manjapallil</span>
                    </h1>
                    <p className="hero-text text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I create stellar web experiences with modern technologies.
                        Specializing in front-end development, I build interfaces that are
                        both beautiful and functional.
                    </p>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="hero-button cosmic-button">
                            View Project
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
    </section>
}