import { useGLTF, MeshReflectorMaterial } from "@react-three/drei"

export function Model() {
  const model = useGLTF("/models/Model2.glb")

  //   for (let child of model.scene.children) {
  //     child.castShadow = true
  //     child.receiveShadow = true
  //   }

  return (
    <>
      <primitive object={model.scene} />

      <mesh rotation-x={-Math.PI / 2}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={50}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          // color="#ff0000"
          metalness={0.5}
        />
      </mesh>
    </>
  )
}
