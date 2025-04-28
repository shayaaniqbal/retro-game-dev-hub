
import React from "react";

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  location: {
    city: string;
    country: string;
  };
  description: string;
  achievements: string[];
}

const ExperienceSection = () => {
  // Updated experience data based on CV
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Firiz Games",
      period: "26/07/2021 - 17/06/2024",
      location: {
        city: "Lahore",
        country: "Pakistan"
      },
      description: "Worked as a Software Engineer developing game applications and systems",
      achievements: [
        "Game Design and Prototyping",
        "Scalable and Maintainable Code Architecture",
        "Published Multiple Titles (Android, iOS)",
        "Memory, Performance and Rendering Optimization",
        "Technical Leadership and Team Collaboration",
        "Integration with Tech/Publishing and Existing Systems",
        "Monetization Strategies (Ad Networks, In-App Purchases)",
        "Database Integration and Analytics",
        "Project and Resource Management",
        "Version Control (Git, SVN, Bitbucket)"
      ],
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "Microperts",
      period: "01/01/2021 - 20/07/2021",
      location: {
        city: "Lahore",
        country: "Pakistan"
      },
      description: "Developed game applications focusing on quality and performance",
      achievements: [
        "Rapid Prototyping and Agile Iteration",
        "Effective Team Collaboration",
        "Comprehensive Bug Analysis and Resolution",
        "Player Behavior Analytics",
        "Crash Monitoring and Stability Assurance"
      ],
    }
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
                      <p className="font-pixel text-white/70 text-sm mt-1">{exp.location.city}, {exp.location.country}</p>
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
                <p className="font-pixel text-white">Bachelors of Science in Computer Science</p>
                <p className="font-body text-white/70">University of Information and Technology, 2017-2021</p>
                <p className="font-body text-white/70 text-sm">
                  <a href="https://uit.edu.pk/" target="_blank" rel="noopener noreferrer" className="text-arcade-blue hover:underline">https://uit.edu.pk/</a>
                </p>
                <p className="font-body text-white/70 text-sm">Lahore, Pakistan</p>
              </div>
              
              <div>
                <p className="font-pixel text-white">F.Sc</p>
                <p className="font-body text-white/70">Punjab College, 2015-2017</p>
                <p className="font-body text-white/70 text-sm">
                  <a href="https://pgc.edu/campus/hafizabad/" target="_blank" rel="noopener noreferrer" className="text-arcade-blue hover:underline">https://pgc.edu/campus/hafizabad/</a>
                </p>
                <p className="font-body text-white/70 text-sm">Lahore, Pakistan</p>
              </div>
            </div>
          </div>
          
          <div className="pixel-card border-arcade-orange md:max-w-xs w-full">
            <div className="flex items-center mb-4">
              <span className="font-pixel text-3xl text-arcade-orange mr-3">🗣️</span>
              <h3 className="font-arcade text-xl text-arcade-orange">LANGUAGES</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="font-pixel text-white">Urdu</p>
                <p className="font-body text-white/70">Mother tongue</p>
              </div>
              
              <div>
                <p className="font-pixel text-white">English</p>
                <p className="font-body text-white/70">Proficient user</p>
                <p className="font-body text-white/70 text-sm">
                  Listening, Reading, Writing, Speaking: C1-C2 level
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
