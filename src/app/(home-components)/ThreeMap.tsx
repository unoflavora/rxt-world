"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
const Scene = () => {
  const materials = useLoader(
    MTLLoader,
    "penang bitcoin _final.mtl",
    (loader) => {
      loader.setPath("/map/");
    }
  );
  const obj = useLoader(OBJLoader, "penang bitcoin _final.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
    loader.setPath("/map/");
  });

  console.log(obj);
  return <primitive object={obj} scale={0.008} />;
};

export default function MapScene() {
  return (
    <div className=" w-full h-full">
      <Canvas camera={{ fov: 45, position: [10, 5, 0] }}>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls />

          <ambientLight />
          <hemisphereLight color="white" position={[0, 20, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
}
