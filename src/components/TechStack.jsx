const TechStack = () => {
    // List of technologies using skillicons.dev
    // Theme is dynamic based on user preference, but for these icons, 'dark' usually looks better or distinct.
    // We can use per-icon configuration or unified.

    const techs = [
        { name: "Node.js", icon: "nodejs" },
        { name: "JavaScript", icon: "js" },
        { name: "TypeScript", icon: "typescript" },
        { name: "HTML5", icon: "html" },
        { name: "CSS3", icon: "css" },
        { name: "Python", icon: "python" },
        { name: "Rust", icon: "rust" },
        { name: "Tauri", icon: "tauri" },
        { name: "Electron", icon: "electron" },
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "Vite", icon: "vite" },
        { name: "Svelte", icon: "svelte" },
        { name: "Tailwind CSS", icon: "tailwindcss" },
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "Supabase", icon: "supabase" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "Firebase", icon: "firebase" },
        { name: "MongoDB", icon: "mongodb" },
    ];

    return (
        <section className="py-20 px-4 md:px-0 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
                        Our <span className="text-yellow-500">Toolbox</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        We leverage the latest technologies to build robust, scalable, and modern applications.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {techs.map((tech) => (
                        <div
                            key={tech.name}
                            className="group flex flex-col items-center gap-3 transition-transform duration-300 hover:-translate-y-2"
                        >
                            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white dark:bg-gray-700 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-600 flex items-center justify-center p-3 group-hover:shadow-yellow-400/20 group-hover:border-yellow-400 transition-all duration-300">
                                <img
                                    src={`https://skillicons.dev/icons?i=${tech.icon}&theme=light`}
                                    alt={tech.name}
                                    className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                                    loading="lazy"
                                />
                            </div>
                            <span className="text-sm font-bold text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300 absolute -bottom-8 whitespace-nowrap">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
