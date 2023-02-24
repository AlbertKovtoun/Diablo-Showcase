import { Environment, Lightformer } from "@react-three/drei"

export function Lights() {
  return (
    <>
      <Environment background>
        <color args={["#000"]} attach={"background"} />
        <Lightformer
          rotation-x={-Math.PI / 2}
          position={[0, 2, 0]}
          scale={10}
          intensity={1}
        />
        <Lightformer
          //   rotation-x={-Math.PI / 2}
          position={[0, 0, 5]}
          scale={10}
          intensity={1}
          color={"red"}
        />
      </Environment>
    </>
  )
}
