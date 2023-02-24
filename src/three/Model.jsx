import { useGLTF } from "@react-three/drei"

export function Model() {
  const model = useGLTF("/models/Model2.glb")

  //   for (let child of model.scene.children) {
  //     child.castShadow = true
  //     child.receiveShadow = true
  //   }

  return (
    <>
      <primitive object={model.scene} />
    </>
  )
}
