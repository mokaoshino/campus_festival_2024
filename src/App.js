import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import TimeTable from "./components/TimeTable";

function Model({ rotationX }) {
  const { scene } = useGLTF("/takamatsu_c_3.gltf");
  const modelRef = useRef();

  // 毎フレーム実行される関数で、モデルの回転を更新
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = rotationX;
      modelRef.current.rotation.x = 0;
    }
  });

  return <primitive object={scene} ref={modelRef} />;
}

function App() {
  const [rotationX, setRotationX] = useState(0);

  // スクロールイベントに応じて回転を更新する
  useEffect(() => {
    const handleScroll = () => {
      // スクロール量に基づいてX軸の回転角度を計算
      const scrollPosition = window.scrollY;
      setRotationX(scrollPosition * 0.002); // スクロール量を適切に調整
    };

    // スクロールイベントを監視
    window.addEventListener("scroll", handleScroll);

    // クリーンアップ関数
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-98/100 h-full -z-40">
        {/* 背景に表示される Canvas */}
        <Canvas camera={{ fov: 30, position: [0, 0, 0] }}>
          <OrbitControls />
          <ambientLight intensity={1.4} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <Model rotationX={rotationX} />
        </Canvas>
      </div>
      <div className="fixed left-2 bg-black w-8 h-screen">
      </div>
      <div className="fixed right-2 bg-black w-8 h-screen">
      </div>
      <div className="fixed top-0 left-2 bg-black h-8 w-98/100">
      </div>
      <div className="fixed bottom-0 left-2 bg-black h-8 w-98/100">
      </div>
      <div className="text-3xl font-bold fixed top-8 left-10">
        夢ん舞台に招待したる！
      </div>

      <div className="w-4/5 mx-9 flex justify-center">
        <TimeTable />
      </div>
    </>
  );
}

export default App;
