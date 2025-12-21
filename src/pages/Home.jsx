import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectSection } from "../components/ProjectSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { ContactMe } from "../components/ContactMe"

export const Home =()=>{
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle />

            <StarBackground/>

            <Navbar />

            <main>
                <HeroSection/>
                <AboutSection/>
                <SkillsSection/>
                <ProjectSection/>
                <ContactMe/>
            </main>
        </div>
    );
}