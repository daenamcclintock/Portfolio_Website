import React, { useEffect, useRef, useState } from "react";
import { Card } from 'react-bootstrap'
import { init } from "ityped";
import Link from 'next/link';
import Modal from 'react-modal';

import Button from '../../styles/GlobalComponents/Button';
import MobileButton from "../../styles/GlobalComponents/mobileButton";
import { LeftSection, MeSection, MeText, Container, DownloadButton, SectionTitle } from './MeStyles';
import { MdFileDownload } from "react-icons/md";
import Three from "../ThreeJS/Three";
import Earth from "../Earth/Earth";
import Bitcoin from "../ThreeJS/Bitcoin";
import { Canvas, Suspense } from '@react-three/fiber'
import Box from "../ThreeJS/Box";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '100vh',
    overflowY: 'auto',
  },
};

const Me = ({ open }) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Fullstack Engineer", "Blockchain Developer", "Freelance Developer"],
    });
  }, []);

  // function setBurger() {
  //   setOpenBurger(openBurgerNav)
  // }

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <MeSection row open={open}>
        <LeftSection>
          <SectionTitle main center>
              Daena McClintock
            </SectionTitle>
          <Container>
            <MeText>
              <h3>
                I am a <span style={{color: 'rgba(255, 255, 255, 0.95)'}} ref={textRef}></span>
              </h3>
            </MeText>
          </Container>
          <Container style={{marginTop: '10rem', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
              <Link href={'https://github.com/daenamcclintock/resume/raw/main/Daena%20McClintock%20-%20Web3%20Resume.pdf'} target="_blank">
                  <MobileButton>Resume</MobileButton>
              </Link>
              <Button onClick={openModal}>Resume &nbsp;</Button>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Resume Modal"
                >
                <a className="close" onClick={closeModal}></a>
                <img src="/images/resume.png" alt="Resume" width="700" height="800"/>
              </Modal>
                <Link href={'https://github.com/daenamcclintock/resume/raw/main/Daena%20McClintock%20-%20Web3%20Resume.pdf'} target="_blank">
                    <DownloadButton><MdFileDownload size={'1.7rem'}/></DownloadButton>
                </Link>
          </Container>
          <div>
          {/* <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
          </Canvas> */}
            {/* <Canvas>
              <ambientLight color={0xffffff} intensity={0.5} />
              <pointLight color={0xff4422} intensity={1} position={[-1, -1, 3]} />
              <pointLight color={0x44ff88} intensity={1} position={[1, 2, 3]} />
              <pointLight color={0xdd3311} intensity={1} position={[0, 3, 2]} />
              <Suspense>
              <Three position={[-3, 1, 2]}/>
              </Suspense>
            </Canvas> */}
          </div>
        </LeftSection>
        {/* <div> */}
            {/* <Canvas
              camera={{ position: [0, 0, 10], fov: 40, far: 10000 }}
              onCreated={({ gl }) => {
                gl.gammaInput = true
                gl.toneMapping = THREE.ACESFilmicToneMapping
              }}>
              <pointLight intensity={0.1} position={[10, 10, 10]} />
              <rectAreaLight intensity={3} position={[0, 10, -10]} width={30} height={30} onUpdate={(self) => self.lookAt(new THREE.Vector3(0, 0, 0))} />
              <Suspense fallback={null}>
                <Earth />
              </Suspense>
            </Canvas> */}
          {/* </div> */}
      </MeSection>
    </>
  )
};

export default Me;