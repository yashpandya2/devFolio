import React from "react";
import { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import moonImage from "../../Images/moon.jpg";
import earthImage from "../../Images/earth.jpg";
import spaceImage from "../../Images/space.jpg";
import { Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import {
  SiWeb3Dotjs,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiSolidity,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonImage);
    const earthTexture = textureLoader.load(earthImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(3, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    moon.position.set(7, 4, 3);

    const earthGeometry = new THREE.SphereGeometry(3, 64, 64);
    const earthMaterial = new THREE.MeshStandardMaterial({ map: earthTexture });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    // const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

    pointLight.position.z = 20;
    // pointLight2.position.z = -10;

    // const lightHelper = new THREE.PointLightHelper(pointLight);

    // const controls = new OrbitControls(camera, renderer.domElement);
    scene.add(moon);
    scene.add(pointLight);
    // scene.add(pointLight2);

    // scene.add(lightHelper);
    scene.add(earth);
    scene.background = spaceTexture;

    // const speed = 0.001;
    // const speed1 = 0.005;
    // window.addEventListener("mousemove", (e) => {
    //     if(e.clientX <= window.innerWidth/2){
    //         earth.rotation.x -= speed1;
    //         earth.rotation.y += speed1;
    //         moon.rotation.x -= speed;
    //         moon.rotation.y += speed;
    //     }
    //     if(e.clientX > window.innerWidth/2){
    //         earth.rotation.x -= speed1;
    //         earth.rotation.y -= speed1;
    //         moon.rotation.x -= speed;
    //         moon.rotation.y -= speed;
    //     }
    //     if(e.clientY <= window.innerHeight/2){
    //         earth.rotation.x -= speed1;
    //         earth.rotation.y += speed1;
    //         moon.rotation.x -= speed;
    //         moon.rotation.y += speed;
    //         // earth.position.x = -4;
    //     }
    //     if(e.clientY > window.innerHeight/2){
    //         earth.rotation.x -= speed1;
    //         earth.rotation.y -= speed1;
    //         moon.rotation.x -= speed;
    //         moon.rotation.y -= speed;
    //         // earth.position.x = -4;
    //     }

    // });

    // mesh.rotation.y = 1;
    camera.position.set(4, 4, 8);
    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.001;
      earth.rotation.y += 0.005;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };
    animate();

    return window.addEventListener("scroll", () => {
      camera.rotation.z = window.scrollY * 0.001;
      camera.rotation.y = window.scrollY * 0.003;

      const skillsBox = document.getElementById("homeskillsBox");

      if (window.scrollY > 1500) {
        skillsBox.style.animationName = "homeskillsBoxAnimationOn";
      } else {
        skillsBox.style.animationName = "homeskillsBoxAnimationOff";
      }
    });
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>

      <div className="homeCanvasContainer">
        <Typography variant="h3">
          <p>Y</p>
          <p>A</p>
          <p>S</p>
          <p>H</p>
          <p>
            <br />
          </p>
          <p>P</p>
          <p>A</p>
          <p>N</p>
          <p>D</p>
          <p>Y</p>
          <p>A</p>
        </Typography>
        <div className="homeCanvasBox">
          <Typography variant="h2"> STUDENT</Typography>
          <Typography variant="h2">DEVELOPER</Typography>
          {/* <Typography variant="h2"></Typography> */}
          <Typography variant="h2">CONTENT CREATOR</Typography>
        </div>
        <Link to="/projects">VIEW WORK</Link>
      </div>

      <div className="homeContainer">
        <Typography variant="h2">TIMELINE</Typography>
        <TimeLine timelines={[1, 2, 3, 4]} />
      </div>

      <div className="homeSkills">
        <Typography variant="h2">SKILLS</Typography>

        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img
              src="https://static.vecteezy.com/system/resources/previews/004/776/472/non_2x/smart-system-web-3-0-or-with-technology-icons-managing-application-business-vector.jpg"
              alt="Face1"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img
              src="https://deerwalkcompware.com/training/uploads/courses/MernStack1.png"
              alt="Face2"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img
              src="https://ih1.redbubble.net/image.525157175.0839/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
              alt="Face3"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img
              src="https://cdn.dribbble.com/users/6569/screenshots/16471177/media/8bbfe7fd594073dc6271d5d852c7381a.png?compress=1&resize=400x300"
              alt="Face4"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/83/e258e0532611e5a5072321239ff4d4/jhep-coursera-course4.png?auto=format%2Ccompress&dpr=1"
              alt="Face5"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img
              src="https://cdn.tutsplus.com/net/uploads/2013/12/threejs-webgl-retina-preview.jpg"
              alt="Face6"
            />
          </div>
        </div>

        <div className="cubeShadow"></div>
        <div className="homeskillsBox" id="homeskillsBox">
          <SiWeb3Dotjs />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiSolidity />
          <SiThreedotjs />
        </div>
      </div>
      {/* <div className="homeYoutube">
        <Typography variant="h3">YP</Typography>
      </div>

      <div className="homeYoutubeWrapper"></div> */}
    </div>
  );
};

export default Home;
