
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
            Creative game developer with passion for immersive experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="crt-screen bg-arcade-dark-purple p-6 rounded-pixel border-2 border-arcade-purple/50">
            <div className="prose prose-invert max-w-none">
              <p className="font-body text-lg mb-4">
                I'm Umaar Awan, a passionate game developer with experience creating engaging
                and immersive gaming experiences. My journey in game development started with a fascination
                for interactive storytelling and creative problem-solving.
              </p>
              <p className="font-body text-lg mb-4">
                With a strong background in Unity and C#, I specialize in gameplay mechanics, 
                interactive systems, and game design. I've worked on various projects ranging from 
                adventure games to educational simulations across multiple platforms.
              </p>
              <p className="font-body text-lg">
                I'm particularly interested in developing games that combine compelling narratives 
                with innovative gameplay mechanics. When not coding, I'm expanding my knowledge in 
                procedural generation, AI systems, and game optimization techniques.
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
                  <span className="font-pixel text-arcade-pink">90%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress bg-arcade-pink animate-pulse" style={{ width: "90%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-pixel text-white">C# Programming</span>
                  <span className="font-pixel text-arcade-blue">85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress bg-arcade-blue animate-pulse" style={{ width: "85%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-pixel text-white">Unity Engine</span>
                  <span className="font-pixel text-arcade-purple">80%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress bg-arcade-purple animate-pulse" style={{ width: "80%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-pixel text-white">Game Design</span>
                  <span className="font-pixel text-arcade-cyan">75%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress bg-arcade-cyan animate-pulse" style={{ width: "75%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-pixel text-white">Unreal Engine</span>
                  <span className="font-pixel text-arcade-orange">60%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress bg-arcade-orange animate-pulse" style={{ width: "60%" }}></div>
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
