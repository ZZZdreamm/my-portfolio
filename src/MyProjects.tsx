import { useEffect, useRef } from "react";
import { ObserverIsVisible } from "./ObserverIsVisible";
import useEffectAfterSecondRender from "./useEffectAfterSecondRender";
import GoBack from "./GoBack";
import ThreePhoto from "./ThreePhoto";
import * as THREE from "three";
import { ReadyImagesURL } from "./publicPaths";
import { useNavigate } from "react-router-dom";
import Project, { ProjectProps } from "./Project";

export default function MyProjects() {
  // useEffect(() => {
  //   const projectsSection = document.getElementById("projects-section");
  //   if (projectsSection) {
  //     const numSteps = 20.0;

  //     const projectsSection = document.getElementById("projects-section");
  //     window.addEventListener(
  //       "load",
  //       (event) => {
  //         createObserver(projectsSection);
  //       },
  //       false
  //     );
  //   }
  // }, []);
  // function createObserver(element: any) {
  //   let observer;

  //   let options = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: buildThresholdList(),
  //   };

  //   observer = new IntersectionObserver(handleIntersect, options);
  //   observer.observe(element);
  // }
  // function buildThresholdList() {
  //   let thresholds = [];
  //   let numSteps = 20;

  //   for (let i = 1.0; i <= numSteps; i++) {
  //     let ratio = i / numSteps;
  //     thresholds.push(ratio);
  //   }

  //   thresholds.push(0);
  //   return thresholds;
  // }
  // let prevRatio = 0.0;
  // let increasingColor = "rgba(40, 40, 190, ratio)";
  // let decreasingColor = "rgba(190, 40, 40, ratio)";

  // function handleIntersect(entries: any, observer: any) {
  //   const aboutme = document.getElementById("about");
  //   entries.forEach((entry: any) => {
  //     if (entry.intersectionRatio > prevRatio) {
  //       entry.target.style.backgroundColor = increasingColor.replace(
  //         "ratio",
  //         entry.intersectionRatio
  //       );
  //       aboutme!.style.backgroundColor = increasingColor.replace(
  //         "ratio",
  //         entry.intersectionRatio
  //       );
  //     } else {
  //       entry.target.style.backgroundColor = decreasingColor.replace(
  //         "ratio",
  //         entry.intersectionRatio
  //       );
  //       aboutme!.style.backgroundColor = decreasingColor.replace(
  //         "ratio",
  //         entry.intersectionRatio
  //       );
  //     }

  //     prevRatio = entry.intersectionRatio;
  //   });
  // }

  // const scene = new THREE.Scene();
  // const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  // const renderer = new THREE.WebGLRenderer();
  // renderer.setSize( window.innerWidth, window.innerHeight );
  // document.body.appendChild( renderer.domElement );

  // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  // const cube = new THREE.Mesh( geometry, material );
  // scene.add( cube );

  // camera.position.z = 5;

  // function animate() {
  // 	requestAnimationFrame( animate );

  // 	cube.rotation.x += 0.01;
  // 	cube.rotation.y += 0.01;

  // 	renderer.render( scene, camera );
  // }

  // animate();
  const navi = useNavigate();
  const myProjects = [
    {
      icon: "social_media.webp",
      name: "Social media app",
      side: "left",
      link: "https://zzzdreamm.github.io/Facebug/",
    },
    { icon: "chess.webp", name: "Chess app", side: "right", link: "https://zzzdreamm.github.io/Chesshub/" },
  ];
  return (
    <>
      <span id="refMyProjects"></span>
      <div className="my-projects change-color">
        <h1 style={{ marginTop: "100px" }}>
          Some of my projects are right below
        </h1>
        <h3>But anyway most of my projects are only on Github</h3>

        {myProjects.map((project) => (
          <Project
            icon={project.icon}
            name={project.name}
            side={project.side}
            link={project.link}
          />
        ))}
      </div>
      <GoBack />
    </>
  );
}
