"use client"

import { useState, useEffect } from "react"
import { Home, Briefcase, Users, Mail, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
    name: string
    href: string
    icon: React.ComponentType<{ className?: string }>
    label: string
}

export function MobileMoodNav() {
    const [activeSection, setActiveSection] = useState("home")
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    const navItems: NavItem[] = [
        { name: "home", href: "#home", icon: Home, label: "Home" },
        { name: "work", href: "#work", icon: Briefcase, label: "Work" },
        { name: "services", href: "#services", icon: Sparkles, label: "Services" },
        { name: "about", href: "#who-we-are", icon: Users, label: "About" },
        { name: "contact", href: "#contact", icon: Mail, label: "Contact" },
    ]

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Hide nav on scroll down, show on scroll up
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }
            setLastScrollY(currentScrollY)

            // Update active section based on scroll position
            const sections = navItems.map((item) => item.name)
            for (const section of sections) {
                const element = document.getElementById(section === "home" ? "home" : section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY])

    const handleNavClick = (href: string, name: string) => {
        setActiveSection(name)
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }

    return (
        <nav
            className={cn(
                "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden",
                "transition-all duration-500 ease-out",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"
            )}
        >
            {/* Glow effect background */}
            <div className="absolute inset-0 bg-[#00DF82] blur-2xl opacity-20 rounded-full scale-110" />

            {/* Main navigation container */}
            <div className="relative bg-[color:var(--color-card)]/80 backdrop-blur-xl border border-[color:var(--color-border)]/50 rounded-full px-4 py-3 shadow-2xl">
                {/* Mint glow shadow */}
                <div className="absolute inset-0 rounded-full shadow-[0_8px_32px_rgba(0,223,130,0.15)]" />

                <div className="relative flex items-center gap-2">
                    {navItems.map((item, index) => {
                        const Icon = item.icon
                        const isActive = activeSection === item.name

                        return (
                            <button
                                key={item.name}
                                onClick={() => handleNavClick(item.href, item.name)}
                                className={cn(
                                    "relative flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-2xl",
                                    "transition-all duration-300 ease-out",
                                    "group outline-none focus:outline-none",
                                    isActive
                                        ? "bg-[#00DF82]/10 scale-105"
                                        : "hover:bg-[color:var(--color-muted)]/30 active:scale-95"
                                )}
                                aria-label={item.label}
                            >
                                {/* Active indicator - animated blob */}
                                {isActive && (
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#00DF82]/20 to-[#00DF82]/5 rounded-2xl animate-pulse" />
                                )}

                                {/* Icon container with animation */}
                                <div className="relative">
                                    {/* Glow effect for active state */}
                                    {isActive && (
                                        <div className="absolute inset-0 bg-[#00DF82] blur-lg opacity-40 animate-pulse" />
                                    )}

                                    <Icon
                                        className={cn(
                                            "relative w-5 h-5 transition-all duration-300",
                                            isActive
                                                ? "text-[#00DF82] scale-110"
                                                : "text-[color:var(--color-muted-foreground)] group-hover:text-[color:var(--color-foreground)] group-hover:scale-105"
                                        )}
                                    />
                                </div>

                                {/* Label with fade animation */}
                                <span
                                    className={cn(
                                        "text-[10px] font-bold uppercase tracking-wider transition-all duration-300",
                                        isActive
                                            ? "text-[#00DF82] opacity-100"
                                            : "text-[color:var(--color-muted-foreground)] opacity-70 group-hover:opacity-100"
                                    )}
                                >
                                    {item.label}
                                </span>

                                {/* Active dot indicator */}
                                {isActive && (
                                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#00DF82] rounded-full animate-bounce" />
                                )}
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Bottom reflection effect */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-gradient-to-b from-[#00DF82]/10 to-transparent blur-xl rounded-full" />
        </nav>
    )
}
