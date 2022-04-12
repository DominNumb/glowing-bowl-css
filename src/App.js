import './style.css'
import React, { Component, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'

function App() {
  const [bowlvis, setBowlvis] = useState(false)
  return (
    <>
      <section>
        <div hidden={bowlvis}>
          <div className="shadow" />
          <div onClick={() => setBowlvis(true)} className="bowl">
            <div className="liquid" />
          </div>
        </div>
        <div hidden={!bowlvis}>
          <h1 color="white">by DominNumb</h1>
        </div>
      </section>
    </>
  )
}

export default App
