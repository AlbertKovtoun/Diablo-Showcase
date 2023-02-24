import { useRef } from "react"
import { useThree } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"

export function Camera() {
  const { camera } = useThree()
  camera.position.set(2, 1, 4)

  return (
    <>
      <OrbitControls camera={camera} />
    </>
  )
}
