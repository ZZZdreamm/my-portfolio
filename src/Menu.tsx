import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { ReadyImagesURL } from "./publicPaths";
import useEffectAfterSecondRender from "./useEffectAfterSecondRender"

export default function Menu(){
    let refHome:any;
    let refAboutMe:any;
    let refMyProjects:any;

    useEffect(()=>{
        refHome = document.getElementById('homeRef')
        console.log(refHome)
        refAboutMe = document.getElementById('refAboutMe')
        refMyProjects = document.getElementById('refMyProjects')
    },[])

    useEffect(()=>{
        const openMenuButton = document.getElementById('openmenu')
        const menu = document.getElementById('menu')
        openMenuButton?.addEventListener('click', ()=>{
            menu?.classList.add('menuOpen')
        })
        const menuClose = document.getElementById('menu-close')
        menuClose?.addEventListener('click', ()=>{
            menu?.classList.remove('menuOpen')
        })
    },[])
    function ScrollTo(part:any){
        console.log(part)
        part.scrollIntoView({ behavior: "smooth" })
    }
    return(
        <>
        <div id="openmenu" className="notOpened-menu"><img style={{height:'4vw', cursor:'pointer', width:'4vw'}} src={`${ReadyImagesURL}/options.png`} /></div>
        <div id='menu' className="menu">
            <span className="menu-option" onClick={()=>{ScrollTo(refHome!)}}>Home</span>
            <span className="menu-option" onClick={()=>{ScrollTo(refAboutMe!)}}>About me</span>
            <span className="menu-option" onClick={()=>{ScrollTo(refMyProjects!)}}>My projects</span>
            <span id="menu-close" style={{height:'50px', width:'30px'}} onClick={()=> {}}>X</span>
        </div>
        </>

    )
}