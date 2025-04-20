
import React from "react";

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

const ExperienceSection = () => {
  // Mock experience data
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Senior Game Developer",
      company: "Pixel Studios",
      period: "2021 - Present",
      description: "Lead development of multiple game projects using Unity and Unreal Engine.",
      achievements: [
        "Shipped 3 successful mobile games with over 500,000 combined downloads",
        "Optimized rendering pipeline resulting in 40% performance improvement",
        "Mentored junior developers and established team coding standards",
        "Implemented innovative AI systems for NPC behavior",
      ],
    },
    {
      id: 2,
      title: "Game Developer",
      company: "Arcade Interactive",
      period: "2018 - 2021",
      description: "Worked on various PC and console game projects in a collaborative team environment.",
      achievements: [
        "Developed core gameplay systems for award-winning action RPG",
        "Created shaders and VFX for enhanced visual experience",
        "Optimized memory usage and loading times for console platforms",
        "Integrated third-party analytics and monetization systems",
      ],
    },
    {
      id: 3,
      title: "Junior Programmer",
      company: "Indie Games Collective",
      period: "2016 - 2018",
      description: "Contributed to indie game development projects and participated in game jams.",
      achievements: [
        "Developed prototype games that secured funding for full production",
        "Created custom tools to streamline level design workflow",
        "Collaborated with artists to implement visual assets and animations",
        "Won Best Technical Achievement at Regional Game Jam 2017",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-arcade text-arcade-orange mb-4 relative">
            EXPERIENCE
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-arcade-orange opacity-70"></span>
          </h2>
          <p className="font-pixel text-white text-xl max-w-2xl mx-auto">
            My journey in game development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-arcade-orange/30 transform md:translate-x-[-50%]"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-[-8px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-arcade-orange animate-pulse md:transform md:translate-x-[-50%]"></div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}>
                  <div className="pixel-card border-arcade-orange hover:border-arcade-orange/80">
                    <div className="bg-arcade-orange/10 -m-4 mb-4 p-4 border-b border-arcade-orange/30">
                      <h3 className="font-arcade text-xl text-arcade-orange">{exp.title}</h3>
                      <p className="font-pixel text-white mt-1">{exp.company}</p>
                      <p className="font-pixel text-white/70 text-sm mt-1">{exp.period}</p>
                    </div>
                    
                    <p className="font-body text-white mb-4">{exp.description}</p>
                    
                    <div>
                      <h4 className="font-pixel text-arcade-orange mb-2">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="inline-block text-arcade-orange mr-2 mt-1">►</span>
                            <span className="font-body text-white text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* End point */}
          <div className="absolute left-[-8px] md:left-1/2 bottom-[-40px] w-6 h-6 rounded-full bg-arcade-orange animate-glow md:transform md:translate-x-[-50%]">
            <div className="absolute inset-1 rounded-full bg-arcade-dark-purple"></div>
          </div>
        </div>
        
        {/* Education */}
        <div className="mt-24 flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="pixel-card border-arcade-orange md:max-w-xs w-full">
            <div className="flex items-center mb-4">
              <span className="font-pixel text-3xl text-arcade-orange mr-3">🎓</span>
              <h3 className="font-arcade text-xl text-arcade-orange">EDUCATION</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="font-pixel text-white">Computer Science, BS</p>
                <p className="font-body text-white/70">Tech University, 2016</p>
              </div>
              
              <div>
                <p className="font-pixel text-white">Game Design Certificate</p>
                <p className="font-body text-white/70">Game Dev Academy, 2017</p>
              </div>
            </div>
          </div>
          
          <div className="pixel-card border-arcade-orange md:max-w-xs w-full">
            <div className="flex items-center mb-4">
              <span className="font-pixel text-3xl text-arcade-orange mr-3">🏆</span>
              <h3 className="font-arcade text-xl text-arcade-orange">AWARDS</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="font-pixel text-white">Best Mobile Game</p>
                <p className="font-body text-white/70">Indie Game Awards, 2020</p>
              </div>
              
              <div>
                <p className="font-pixel text-white">Technical Excellence</p>
                <p className="font-body text-white/70">Game Dev Conference, 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
