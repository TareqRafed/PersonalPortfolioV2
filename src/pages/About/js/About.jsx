import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

const About = () => {
    return (
        <Canvas height="100vh">
            <OrbitControls />
            <Stars />
        </Canvas>
    )
};

export default About;
