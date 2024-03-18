import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p className="text-[14px] text-[#f1f1f1] font-extrabold mt-40 text-center translate-x-[-50%]">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
