import Link from "next/link"
import { useRouter } from "next/router";
import { useState, useEffect } from "react"

export default function Navbar(){
    const router = useRouter();

    // Tracks whether viewport is in mobile mode.
    const [isMobile, setIsMobile] = useState(false);
    // Toggles the navbar only in mobile mode.
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        function handleResize() {
          setIsMobile(window.innerWidth < 900);
        }
    
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Call handleResize initially to set the initial window size
        handleResize();
    
        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    return (
        <>
        {
            // Navigation html and CSS adapted from evlearn
            // https://www.youtube.com/watch?v=dIFNHeHTja0
        }
        <div className="navHead">
            <div className="logo">labibkow<span className="green">.</span></div>
            <div className="hamburger" onClick={() => {
                if (isMobile) setMenuOpen(!isMenuOpen);
            }}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        
            <nav className={(isMobile && !isMenuOpen) ? "hideNav" : ""}>
                <ul>
                    <li><Link href="/" className={(router.pathname == '/')? "active": ""} >Home</Link></li>
                    <li><Link href="/projects" className={(router.pathname.includes('/projects'))? "active": ""}>Projects</Link></li>
                    <li><Link href="/resume" className={(router.pathname.includes('/resume'))? "active": ""} style={{
                        display: "none"
                    }}>Resume</Link></li>
                    <li><Link href="/contact" className={(router.pathname.includes('/contact'))? "active": ""}>Contact</Link></li>
                </ul>
            </nav>
        </div>
        {
            // Does nothing but align the main content with the navbar
        }
        <div id="blockAlign"></div>
        </>
    )
}