"use client";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
import { LoaderIcon } from "lucide-react";
import { Html, useProgress } from "@react-three/drei";

export default function ThreeScene(props: { objUrl: string; matUrl: string }) {
  return (
    <div className="h-full min-h-[20rem] sm:min-h-0 md:min-h-[30rem] bg-gray-50 rounded-xl">
      <Canvas
        camera={{
          fov: 65,
          position: [0.4, 100, 16],
        }}
      >
        <Suspense fallback={<Progress />}>
          <Scene file={props.objUrl} mat={props.matUrl} />
          <ambientLight />
          <hemisphereLight color={"white"} />
        </Suspense>
      </Canvas>
    </div>
  );
}

const Scene = (props: { file: string; mat: string }) => {
  const three = useThree();
  const materials = useLoader(MTLLoader, props.mat);
  const obj = useLoader(OBJLoader, props.file, (loader) => {
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
      <primitive object={obj} scale={8} />;{" "}
    </>
  );
};

const Progress = () => {
  const { progress } = useProgress();

  return (
    <Html
      center
      className="min-w-full flex flex-col justify-center items-center font-semibold font-crimson"
    >
      <LoaderIcon className="animate-spin text-black" size={"50"} />
      <h1 className="text-sm text-black text-center min-w-max">Loading 3D</h1>

      <h2 className="text-sm text-black text-center">
        {Math.round(progress)}%
      </h2>
    </Html>
  );
};
