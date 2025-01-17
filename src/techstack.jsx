import Grow from '@mui/material/Grow';
import { useState, useEffect } from "react";
export default function TechStack() {
    const techStack = [
      { name: 'HTML', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg' },
      { name: 'CSS', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg' },
      { name: 'React.js', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg' },
      { name: 'SQL', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' },
      { name: 'Tailwind CSS', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042' },
    ];

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);
  
    return (
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-white">
              My Tech Stack
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              The tools and technologies I use to bring ideas to life.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {techStack.map((tech) => (
              <Grow in={isLoaded} timeout={1000}>
              <li key={tech.name}>
                <div className="group relative flex flex-col items-center p-4 bg-gray-800/90 rounded-lg shadow-md backdrop-blur-md border border-gray-700 transition-transform transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50">
                  <div className="absolute -inset-0.5 rounded-lg border border-gray-700 blur-sm opacity-20"></div>
                  <img
                    src={tech.logoUrl}
                    alt={tech.name}
                    className="relative w-20 h-20 mb-2"
                  />
                  <h3 className="relative text-sm font-medium text-white">
                    {tech.name}
                  </h3>
                </div>
              </li>
              </Grow>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  