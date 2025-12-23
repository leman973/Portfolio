import { useState, useEffect } from "react"
import { cn } from "../lib/utils"
import { Menu, X } from "lucide-react"

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

export const Navbar = () => {
    const [isScrolled, setisScrolled] = useState(false)
    const [isMenuOpened, setisMenuOpened] = useState(false)

    useEffect(() => {
        if (isMenuOpened) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }

        return () => {
            document.body.style.overflow = "auto"
        }
    }, [isMenuOpened])

    useEffect(() => {
        const handleScroll = () => {
            setisScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (<nav className={cn("fixed w-full z-40 transition-all duration-300", isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>
        <div className="container flex items-center justify-between">
            <a className="text-xl font-bold text-primary flex item-centered" href="#hero">
                <span className="relative z-10">
                    <span className="text-glow text-foreground"> My </span> Portfolio
                </span>
            </a>
            <div className="hidden md:flex space-x-8">
                {navItems.map((item, key) => (
                    <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">{item.name}</a>
                ))}
            </div>

            <button onClick={() => setisMenuOpened((prev) => !prev)}
                className="md:hidden p-2 text-foreground z-50"
                aria-label={isMenuOpened ? "Close Menu" : "Open Menu"}>{isMenuOpened ? <X size={24} /> : <Menu size={24} />}</button>

            <div className={cn("fixed top-0 left-0 w-screen h-dvh bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden", isMenuOpened ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )} onClick={() => setisMenuOpened(false)}>
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">{item.name}</a>
                    ))}
                </div>
            </div>
        </div>
    </nav>);
}