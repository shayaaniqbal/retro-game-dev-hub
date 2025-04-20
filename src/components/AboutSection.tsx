
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
            Creating digital worlds and interactive experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="crt-screen bg-arcade-dark-purple p-6 rounded-pixel border-2 border-arcade-purple/50">
            <div className="prose prose-invert max-w-none">
              <p className="font-body text-lg mb-4">
                I'm a passionate game developer with over 5 years of experience in creating
                engaging and immersive gaming experiences. My journey started with a love for
                retro arcade games that inspired me to build worlds of my own.
              </p>
              <p className="font-body text-lg mb-4">
                Specializing in gameplay mechanics and interactive systems, I bring technical
                expertise and creative vision to every project. I've worked across various
                platforms including PC, mobile, and console.
              </p>
              <p className="font-body text-lg">
                When I'm not coding, I'm exploring new game design concepts, participating in
                game jams, or studying the latest advancements in real-time rendering and
                procedural generation.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-arcade text-2xl text-arcade-pink mb-6">MY SKILLS</h3>
            
            {/* Skill bars */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-pixel text-white">Game Development</span>
                  <span className="font-pixel text-arcade-pink">95%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress bg-arcade-pink animate-pulse" style={{ width: "95%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-pixel text-white">C# Programming</span>
                  <span className="font-pixel text-arcade-blue">90%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress bg-arcade-blue animate-pulse" style={{ width: "90%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-pixel text-white">Unity Engine</span>
                  <span className="font-pixel text-arcade-purple">85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress bg-arcade-purple animate-pulse" style={{ width: "85%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-pixel text-white">3D Modeling</span>
                  <span className="font-pixel text-arcade-cyan">70%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress bg-arcade-cyan animate-pulse" style={{ width: "70%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-pixel text-white">Unreal Engine</span>
                  <span className="font-pixel text-arcade-orange">65%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress bg-arcade-orange animate-pulse" style={{ width: "65%" }}></div>
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
