import { useState } from 'react'
import myLogo from './assets/bitmap.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
	<head>
		<meta name="google-site-verification" content="CF8HUecBnTDokhzFnU2iNVPbX6-BnFz4-BJhu4FFsS0" />
	</head>
	<p className="read-the-docs">
        This is the home page of developer Solsands.
      </p>
      <div>
          <img src={myLogo} className="logo" alt="Vite logo" />
      </div>
	<h2>Projects</h2>
	<h3>AlienNFT</h3>
	<a href="https://phantomsands.github.io/AlienNFT"> View Project Alien NFT</a>
	<h3>On Chain Enigma</h3>
	<a href="https://opensea.io/collection/onchainenigma"> View Project On Chain Enigma </a>
	<h3>Glitch</h3>
	<a href="https://play.google.com/store/apps/details?id=org.godotengine.glitch"> View Project Glitch </a>
	<h2>Contact Details </h2>
	<p className="read-the-docs">
		<ul><li> sandilesibongumenzi@gmail.com </li>
			<li> X: @001Node </li>
		</ul>
	</p>
    </>
  )
}

export default App
