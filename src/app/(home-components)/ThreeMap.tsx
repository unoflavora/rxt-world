"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Loader, LoaderIcon } from "lucide-react";
const Scene = () => {
  // const materials = useLoader(
  //   MTLLoader,
  //   "penang bitcoin _final.mtl",
  //   (loader) => {
  //     loader.setPath("/map/");
  //   }
  // );
  const obj = useLoader(GLTFLoader, "/models/penang_bitcoin.glb");

  return <primitive object={obj.scene} scale={0.008} />;
};

export default function MapScene() {
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
          <Scene />
          <OrbitControls/>

          <ambientLight />
          <hemisphereLight color="white" />
        </Canvas>
      </Suspense>
    </div>
  );
}
