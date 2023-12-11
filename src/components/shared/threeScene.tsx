"use client";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { Suspense, useMemo, useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
import { Rotate3D, LoaderIcon } from "lucide-react";
import { Camera, Euler, Group, OrthographicCamera, Vector3 } from "three";

export default function ThreeScene(props: { url: string }) {
  return (
    <div className="h-full min-h-[20rem] sm:min-h-0 md:min-h-[30rem] ">
      <Suspense
        fallback={
          <div className="w-full h-full  flex flex-col justify-center items-center">
            <LoaderIcon className="animate-spin" size={"50"} />
            <h1 className="text-sm">Loading 3D...</h1>
          </div>
        }
      >
        <Canvas
          camera={{
            fov: 65,
            position: [0.4, 100, 16],
          }}
        >
          <Scene file={"/agustino/Agustino.obj"} mat="/agustino/Agustino.mtl" />
          <ambientLight />
          <hemisphereLight color={"white"} />
        </Canvas>
      </Suspense>
    </div>
  );
}

const Scene = (props: { file: string; mat: string }) => {
  const three = useThree();

  const materials = useLoader(MTLLoader, "/agustino/Agustino.mtl");
  const obj = useLoader(OBJLoader, "/agustino/Agustino.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  return (
    <>
      <OrbitControls
        minPolarAngle={1.4}
        maxPolarAngle={1.4}
        maxDistance={21}
        enablePan={false}
        onChange={() => {
          three.camera.translateY(8);
        }}
      />
      <primitive object={obj} scale={10} />;{" "}
    </>
  );
};
