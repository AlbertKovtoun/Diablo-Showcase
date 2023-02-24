import { Canvas } from "@react-three/fiber"
import {
  Environment,
  AccumulativeShadows,
  RandomizedLight,
} from "@react-three/drei"
import { Camera } from "./Camera"
import { Model } from "./Model"
import { Lights } from "./Lights"

export function Experience() {
  console.log("Experience Loaded!")

  return (
    <>
      <Canvas>
        <Camera />
        <Model />
        <Environment preset="apartment" />
        <Lights />
      </Canvas>
    </>
  )
}
