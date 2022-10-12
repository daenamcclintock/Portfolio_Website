import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import Bitcoin from './Bitcoin.png'
import * as THREE from 'three'
import { NavItem } from 'react-bootstrap'
import { MdDoNotDisturbOnTotalSilence } from 'react-icons/md'

const Three = (props) => {
    // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.02, ref.current.rotation.y += 0.05))
  // Return the view, these are regular Threejs elements expressed in JSX
  const bitcoinTexture = new THREE.TextureLoader().load('');
  const material = new THREE.MeshStandardMaterial({
      map: bitcoinTexture
  })
  console.log(material)
  Bitcoin.width = 1
  Bitcoin.height = 1
  const etherTexter = new THREE.TextureLoader().load(Bitcoin)
  console.log(bitcoinTexture)
  console.log(etherTexter)
  console.log(bitcoin)
  console.log(Bitcoin)

  const loader = new THREE.TextureLoader()
  loader.load(Bitcoin, function ( texture ) {
      let material = new THREE.MeshStandardMaterial({
          map: texture
      })
      console.log(material)
  })
  

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(e) => click(!clicked)}
      onPointerOver={(e) => hover(true)}
      onPointerOut={(e) => hover(false)}>
      <cylinderGeometry args={[0.7, 0.7, 0.12, 100]} />
      <meshStandardMaterial metalness={0.7} roughness={0.3} />
    </mesh>
  )
}

export default Three;
