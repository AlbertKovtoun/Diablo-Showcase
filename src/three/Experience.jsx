import { Perf } from "r3f-perf"

import { Canvas } from "@react-three/fiber"
import { Camera } from "./Camera"
import { Model } from "./Model"
import { Lights } from "./Lights"
import { PostProcessing } from "./PostProcessing"

export function Experience() {
  console.log("Experience Loaded!")

  return (
    <>
      <Canvas>
        <Perf position="top-left" />
        <Camera />
        <Model />
        <Lights />
        <PostProcessing />
      </Canvas>
    </>
  )
}
