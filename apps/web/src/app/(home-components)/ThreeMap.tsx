"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { LoaderIcon } from "lucide-react";
const Scene = (props: {url: string}) => {

  const obj = useLoader(GLTFLoader, props.url);

  return <primitive object={obj.scene} scale={0.008} />;
};

export default function MapScene(props: {url: string}) {
  return (
    <div className=" w-full h-full">
      <Suspense
        fallback={
          <div className="w-full h-full  flex flex-col justify-center items-center">
            <LoaderIcon className="animate-spin" size={"50"} />
            <h1 className="text-sm">Loading 3D...</h1>
          </div>
        }
      >
        <Canvas camera={{ fov: 45, position: [10, 5, 0] }}>
          <Scene url={props.url} />
          <OrbitControls minPolarAngle={1.2} maxPolarAngle={1.2} />

          <ambientLight />
          <hemisphereLight color="white" />
        </Canvas>
      </Suspense>
    </div>
  );
}
