import React, { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  role: string;
  links: {
    demo?: string;
    source?: string;
    download?: string;
  };
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Dungeon Escape",
      description: "A challenging 2D platformer where players navigate through dangerous dungeons filled with traps and enemies. Features procedurally generated levels, multiple character classes, and unique abilities.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Unity", "C#", "Procedural Generation"],
      role: "Lead Developer & Designer",
      links: {
        demo: "https://umaarawan19.wixsite.com/gamedev",
        download: "https://umaarawan19.wixsite.com/gamedev/blank-1",
      },
    },
    {
      id: 2,
      title: "Stellar Voyage",
      description: "An immersive space exploration game where players command their own starship, discover new planets, and engage in interstellar diplomacy or combat. Features a dynamic galaxy with unique procedural star systems.",
      image: "https://images.unsplash.com/photo-1518365050014-70fe7232897f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Unity", "C#", "FMOD Audio"],
      role: "Gameplay Programmer & System Designer",
      links: {
        demo: "https://umaarawan19.wixsite.com/gamedev",
      },
    },
    {
      id: 3,
      title: "Pixel Quests",
      description: "A retro-style RPG adventure with classic turn-based combat and an extensive quest system. Features pixel art aesthetics, character progression, and a deep crafting system.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Unity", "C#", "Pixel Art"],
      role: "Solo Developer",
      links: {
        demo: "https://umaarawan19.wixsite.com/gamedev",
        source: "https://github.com/umaarawan",
      },
    },
    {
      id: 4,
      title: "VR Training Simulator",
      description: "An educational VR application designed for corporate training scenarios. Features interactive environments, realistic physics, and progress tracking for trainees.",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Unity", "C#", "VR Development", "Oculus SDK"],
      role: "VR Developer",
      links: {
        demo: "https://umaarawan19.wixsite.com/gamedev",
      },
    },
  ];

  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-arcade text-arcade-pink mb-4 relative">
            PROJECTS
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-arcade-pink opacity-70"></span>
          </h2>
          <p className="font-pixel text-white text-xl max-w-2xl mx-auto">
            Explore my game development portfolio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group pixel-card border-arcade-purple overflow-hidden cursor-pointer"
              onClick={() => setActiveProject(project)}
            >
              <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-pixel">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-arcade/80 to-transparent opacity-60"></div>
                
                <div 
                  className="absolute inset-0 pointer-events-none opacity-30" 
                  style={{ 
                    backgroundImage: "repeating-linear-gradient(transparent, transparent 2px, rgba(0,0,0,0.3) 3px, transparent 3px)", 
                    backgroundSize: "100% 4px" 
                  }}>
                </div>
              </div>
              
              <h3 className="font-arcade text-xl text-arcade-cyan mb-2 group-hover:text-shadow-neon transition-all duration-300">
                {project.title}
              </h3>
              
              <p className="font-body text-white text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs font-pixel bg-arcade-dark-purple text-arcade-purple rounded-pixel"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-pixel text-sm text-arcade-blue">
                  {project.role}
                </span>
                <span className="font-pixel text-sm text-white/70">
                  Click for details
                </span>
              </div>
            </div>
          ))}
        </div>

        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-arcade/80 backdrop-blur-sm" onClick={() => setActiveProject(null)}>
            <div 
              className="bg-arcade-dark-purple border-4 border-arcade-purple rounded-pixel max-w-3xl w-full max-h-[90vh] overflow-y-auto crt-screen"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 flex justify-end p-2 bg-arcade-dark-purple z-10">
                <button 
                  className="w-8 h-8 flex items-center justify-center text-white hover:text-arcade-pink"
                  onClick={() => setActiveProject(null)}
                >
                  <span className="font-arcade text-xl">×</span>
                </button>
              </div>
              
              <div className="p-6">
                <div className="aspect-w-16 aspect-h-9 mb-6 overflow-hidden rounded-pixel">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                
                <h3 className="font-arcade text-2xl text-arcade-cyan mb-4">
                  {activeProject.title}
                </h3>
                
                <p className="font-body text-white mb-6">
                  {activeProject.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-pixel text-arcade-purple text-lg mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm font-pixel bg-arcade/50 text-arcade-purple rounded-pixel"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-pixel text-arcade-purple text-lg mb-2">My Role</h4>
                  <p className="font-body text-white">{activeProject.role}</p>
                </div>
                
                <div>
                  <h4 className="font-pixel text-arcade-purple text-lg mb-2">Links</h4>
                  <div className="flex flex-wrap gap-4">
                    {activeProject.links.demo && (
                      <a
                        href={activeProject.links.demo}
                        className="arcade-btn text-arcade-blue text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        PLAY DEMO
                      </a>
                    )}
                    {activeProject.links.source && (
                      <a
                        href={activeProject.links.source}
                        className="arcade-btn text-arcade-purple text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        SOURCE CODE
                      </a>
                    )}
                    {activeProject.links.download && (
                      <a
                        href={activeProject.links.download}
                        className="arcade-btn text-arcade-pink text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        DOWNLOAD
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
