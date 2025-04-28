
import React from "react";

interface Skill {
  category: string;
  items: {
    name: string;
    icon: string;
    level: number;
  }[];
}

const TechSkillsSection = () => {
  // Updated skills data based on your CV
  const skills: Skill[] = [
    {
      category: "Game Engines",
      items: [
        { name: "Unity", icon: "🎮", level: 80 },
        { name: "Unreal Engine", icon: "🎮", level: 60 },
        { name: "Godot", icon: "🎮", level: 45 },
      ],
    },
    {
      category: "Programming",
      items: [
        { name: "C#", icon: "💻", level: 85 },
        { name: "C++", icon: "💻", level: 65 },
        { name: "JavaScript", icon: "💻", level: 70 },
        { name: "Python", icon: "💻", level: 60 },
      ],
    },
    {
      category: "3D Modeling & Animation",
      items: [
        { name: "Blender", icon: "🎨", level: 65 },
        { name: "Maya", icon: "🎨", level: 55 },
        { name: "ZBrush", icon: "🎨", level: 40 },
      ],
    },
    {
      category: "2D Art & Design",
      items: [
        { name: "Photoshop", icon: "🖌️", level: 75 },
        { name: "Aseprite", icon: "🖌️", level: 80 },
        { name: "Illustrator", icon: "🖌️", level: 60 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="h-full w-full bg-pixel-pattern"></div>
      </div>

      <div className="container">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-arcade text-arcade-cyan mb-4 relative">
            TECH & SKILLS
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-arcade-cyan opacity-70"></span>
          </h2>
          <p className="font-pixel text-white text-xl max-w-2xl mx-auto">
            Tools of the trade for crafting digital worlds
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((skillCategory, index) => (
            <div 
              key={index} 
              className="bg-arcade-dark-purple p-6 rounded-pixel border-2 border-arcade-cyan/50 crt-screen"
            >
              <h3 className="font-arcade text-xl text-arcade-cyan mb-6">
                {skillCategory.category}
              </h3>

              <div className="space-y-6">
                {skillCategory.items.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <span className="font-pixel text-white text-2xl mr-2">{skill.icon}</span>
                        <span className="font-pixel text-white">{skill.name}</span>
                      </div>
                      <span className="font-pixel text-arcade-cyan">{skill.level}%</span>
                    </div>
                    
                    <div className="skill-bar">
                      <div 
                        className={`skill-progress ${
                          skill.level >= 80 
                            ? 'bg-arcade-purple' 
                            : skill.level >= 60 
                              ? 'bg-arcade-blue' 
                              : 'bg-arcade-cyan'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                      
                      {/* Level indicators */}
                      <div className="absolute inset-0 flex">
                        {[...Array(10)].map((_, i) => (
                          <div 
                            key={i} 
                            className="flex-1 border-r border-white/10 last:border-0"
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech icons grid */}
        <div className="mt-16">
          <h3 className="font-arcade text-2xl text-arcade-orange text-center mb-10">
            TECHNOLOGIES I USE
          </h3>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 justify-items-center">
            {[...Array(16)].map((_, index) => (
              <div 
                key={index} 
                className="w-16 h-16 flex items-center justify-center bg-arcade-dark-purple rounded-pixel border-2 border-arcade-orange/30 hover:border-arcade-orange transition-all duration-300 group"
              >
                <div className="font-pixel text-3xl group-hover:animate-glow">
                  {['🎮', '💻', '🎨', '🖌️', '🎧', '📱', '🎬', '📊'][index % 8]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSkillsSection;
