"use client"
import { faHotTub, faSplotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";
import AudioPlayer from 'react-h5-audio-player'



export default function Home() {
  const audio = new Audio("https://firebasestorage.googleapis.com/v0/b/asteroid-cdc13.appspot.com/o/Across%20Worlds%2FJakoTako%2FAcross%20Worlds.mp3?alt=media&token=fe1ecc57-ce81-4082-8ecd-54dcd89c9c13")
  const [data, setData] = useState([])

  useEffect(()=>{
    let memory: any = []
    for(let i=0;i<10;i++){
      memory.push({
        "name": "song "+i,
        "img": "https://static1.squarespace.com/static/56454c01e4b0177ad4141742/56f3eeaa6e06f2df013dd6cd/56f3ef166e06f2df013de90e/1458827030471/Im-Gonna-Be-500-Miles-Cover.jpg?format=original",
        "url": "https://firebasestorage.googleapis.com/v0/b/asteroid-cdc13.appspot.com/o/Across%20Worlds%2FJakoTako%2FAcross%20Worlds.mp3?alt=media&token=fe1ecc57-ce81-4082-8ecd-54dcd89c9c13"
      })
    }
    setData(memory)
  },[])



  return (
    <div>
      <div className="bg-white shadow-lg w-full h-20 block">
        <h1 className="text-black font-bold text-2xl pt-6 pl-6">Test Web</h1>
      </div>

      <div className="pt-10 pl-10">
        <h1 className="text-black font-bold">
          <FontAwesomeIcon icon={faSplotch} className="w-10 inline-block mr-4"/>
          Top Music</h1>
      </div>

      <div className="flex mt-8 pl-6">
        {
          data.map(item=>(
            <>
            <img src={item['img']} width={200} height={200} className="mx-2 shadow-lg round-md" onClick={()=>{
              console.log('play')
              audio.play()
            }}/>
            </>
          ))
        }
      </div>

      
    </div>
  );
}
