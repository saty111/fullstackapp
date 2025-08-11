import { useEffect, useState } from "react";
import { motion } from 'motion/react';
import "./heroSection.css";
const HeroSection = () => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    
const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = ((e.clientX / innerWidth) - 0.6) * 100; // max 15deg left/right
    const y = ((e.clientY / innerHeight) - 0.5) * -30; // max 15deg up/down
    setRotate({ x, y });
  };

useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

    return (
        <div className="heroSectionWrapper" id='home'>
            <div className="heroSection">
                <div className="heroContent">
                    <h1>Agentic AI</h1>
                    <h3>Financial Technology Solutions</h3>
                    <p>Transforming US Merchant Cash Advance and FinTech operations with autonomous AI agents, intelligent decision-making, and seamless automation.</p>
                    <a href="/">Start Your Transformation <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" /></svg></span></a>
                </div>
                <div className="heromedia">
                    <div className="heroIcons">
                        <motion.div
                            animate={{
                                x: ["7%", "40%", "22%", "-40%", "9%"],
                                y: ["29%", "-40%", "24%", "40%", "17%"],

                            }}
                            transition={{
                                duration: 16, // slow and smooth
                                repeat: Infinity,
                            }}

                            className="icon icf"><img src="src/assets/icon1.png" alt="Icon" /></motion.div>
                        <motion.div
                            animate={{
                                x: ["-7%", "-40%", "-22%", "40%", "-9%"],
                                y: ["-29%", "40%", "-24%", "-40%", "-17%"],


                            }}
                            transition={{
                                duration: 14, // slow and smooth
                                repeat: Infinity,
                            }}
                            className="icon ics"><img src="src/assets/icon2.png" alt="Icon" /></motion.div>
                        <motion.div
                            animate={{
                                x: ["-27%", "-30%", "-11%", "30%", "-9%"],
                                y: ["-2%", "30%", "-44%", "-30%", "-27%"],


                            }}
                            transition={{
                                duration: 12, // slow and smooth
                                repeat: Infinity,
                            }}
                            className="icon ict"><img src="src/assets/icon3.png" alt="Icon" /></motion.div>
                        <motion.div
                            animate={{
                                x: ["7%", "-40%", "32%", "-27%", "9%"],
                                y: ["29%", "-27%", "24%", "40%", "17%"],

                            }}
                            transition={{
                                duration: 10, // slow and smooth
                                repeat: Infinity,
                            }}
                            className="icon icfr"><img src="src/assets/icon4.png" alt="Icon" /></motion.div>
                    </div>
                    <div className="heroCircle">
                        <div className="centerImage">
                            <motion.img
                            
animate={{
          rotateX: rotate.y,
          rotateY: rotate.x,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}

src="src/assets/center1.png" alt="Robot" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;