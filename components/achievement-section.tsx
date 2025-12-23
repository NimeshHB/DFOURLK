import { AwardIcon } from "lucide-react";

export function AchievementSection() {
    return (
        <section id="achievement" className="relative py-32 px-6 bg-[#030708] text-white overflow-hidden">
            {/* Background accent glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[color:var(--mint-green)]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto relative z-10">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="mb-8 text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white">
                        Numbers that
                        <br />
                        <span className="text-[color:var(--mint-green)]">Define Our Impact</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed mb-20 uppercase tracking-widest font-medium">
                        Crafting digital excellence through
                        <br className="hidden md:block" />
                        innovation and precision.
                    </p>

                    {/* Stats cards row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        <StatCard
                            icon={<AwardIcon />}
                            number="4+"
                            label="Years Experience"
                        />
                        <StatCard
                            icon={<UsersIcon />}
                            number="50+"
                            label="Satisfied Clients"
                        />
                        <StatCard
                            icon={<CheckIcon />}
                            number="200+"
                            label="Projects Completed"
                        />
                        <StatCard
                            icon={<ServerRackIcon />}
                            number="5+"
                            label="Hosting Solutions"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

function StatCard({ icon, number, label }: { icon: React.ReactNode; number: string; label: string }) {
    return (
        <div className="relative rounded-3xl p-8 flex flex-col items-center text-center gap-6 transition-all duration-500 hover:-translate-y-3 group overflow-hidden">
            {/* Glass Background */}
            <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-2xl transition-colors group-hover:bg-white/[0.06]" />
            <div className="absolute inset-0 border border-white/10 rounded-3xl" />

            {/* Hover Glow */}
            <div className="absolute -inset-px bg-gradient-to-br from-[color:var(--mint-green)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-2xl bg-[color:var(--mint-green)]/10 text-[color:var(--mint-green)] shadow-inner">
                {icon}
            </div>

            <div className="relative z-10">
                <div
                    className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-2"
                >
                    {number}
                </div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-[0.2em]">{label}</div>
            </div>

            {/* Shine effect on hover */}
            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-25deg] transition-all duration-1000 group-hover:left-[100%]" />
        </div>
    )
}

function UsersIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" stroke="#00DF82" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 7a4 4 0 110-8 4 4 0 010 8z" transform="translate(0,8)" stroke="#00DF82" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function GearCheckIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15.5A3.5 3.5 0 1012 8.5a3.5 3.5 0 000 7z" stroke="#00DF82" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33" stroke="#00DF82" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 12l2 2 4-4" stroke="#00DF82" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function CheckIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17l-5-5" stroke="#00DF82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function ServerRackIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="4" width="18" height="5" rx="1" stroke="#00DF82" strokeWidth="1.6" />
            <rect x="3" y="10" width="18" height="5" rx="1" stroke="#00DF82" strokeWidth="1.6" />
            <rect x="3" y="16" width="18" height="5" rx="1" stroke="#00DF82" strokeWidth="1.6" />
        </svg>
    )
}
