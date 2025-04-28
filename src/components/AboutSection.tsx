
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Background grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="h-full w-full bg-grid-pattern"></div>
      </div>

      <div className="container">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-arcade text-arcade-blue mb-4 relative">
            ABOUT ME
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-arcade-blue opacity-70"></span>
          </h2>
          <p className="font-pixel text-white text-xl max-w-2xl mx-auto">
            Experienced game developer specializing in C# and mobile games
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="crt-screen bg-arcade-dark-purple p-6 rounded-pixel border-2 border-arcade-purple/50">
            <div className="prose prose-invert max-w-none">
              <p className="font-body text-lg mb-4">
                I'm Muhammad Umar, an experienced game developer with 4+ years in designing and developing engaging mobile games,
                specializing in C#, gameplay mechanics, and performance optimization.
              </p>
              <p className="font-body text-lg mb-4">
                Passionate about crafting smooth, immersive experiences and solving complex problems
                in fast-paced environments. As an avid PC FPS gamer, I understand player engagement
                firsthand and thrive in collaborative teams pushing game development forward.
              </p>
              <p className="font-body text-lg">
                Currently based in Lahore, Pakistan, I'm continuously expanding my knowledge in
                game development technologies while delivering high-quality gaming experiences.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="text-arcade-blue mr-2">📍</span>
                <span className="font-pixel text-white text-sm">G-617 near LACAS School johar town, Lahore, 54782, Pakistan</span>
              </div>
              <div className="flex items-center">
                <span className="text-arcade-blue mr-2">📧</span>
                <a href="mailto:umarawan19@gmail.com" className="font-pixel text-white text-sm hover:text-arcade-blue transition-colors">umarawan19@gmail.com</a>
              </div>
              <div className="flex items-center">
                <span className="text-arcade-blue mr-2">📱</span>
                <span className="font-pixel text-white text-sm">(+92) 3249730081</span>
              </div>
              <div className="flex items-center">
                <span className="text-arcade-blue mr-2">🌐</span>
                <a href="https://umaarawan19.wixsite.com/gamedev" target="_blank" rel="noopener noreferrer" className="font-pixel text-white text-sm hover:text-arcade-blue transition-colors">umaarawan19.wixsite.com/gamedev</a>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="text-arcade-pink mr-2">🎂</span>
                <span className="font-pixel text-white text-sm">Born: 12/05/2000</span>
              </div>
              <div className="flex items-center">
                <span className="text-arcade-pink mr-2">🏳️</span>
                <span className="font-pixel text-white text-sm">Nationality: Pakistani</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-arcade text-2xl text-arcade-pink mb-6">MY SKILLS</h3>
            
            {/* Skill bars */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-pixel text-white">C# Programming</span>
                  <span className="font-pixel text-arcade-pink">90%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress bg-arcade-pink animate-pulse" style={{ width: "90%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-pixel text-white">Game Development</span>
                  <span className="font-pixel text-arcade-blue">85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress bg-arcade-blue animate-pulse" style={{ width: "85%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-pixel text-white">Unity 2D/3D</span>
                  <span className="font-pixel text-arcade-purple">80%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress bg-arcade-purple animate-pulse" style={{ width: "80%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-pixel text-white">Performance Optimization</span>
                  <span className="font-pixel text-arcade-cyan">85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress bg-arcade-cyan animate-pulse" style={{ width: "85%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-pixel text-white">Game Design</span>
                  <span className="font-pixel text-arcade-orange">75%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress bg-arcade-orange animate-pulse" style={{ width: "75%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
