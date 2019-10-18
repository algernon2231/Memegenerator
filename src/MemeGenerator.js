import React, {useState, useEffect}from "react";


function MemeGenerator() {
 const [topText, setTopText] = useState('')
 const [bottomText, setBottomText] = useState('')
 const [randomImg, setRandomImg]= useState('http://i.imgflip.com/1bij.jpg')
 const [allMeme, setAllMeme] = useState([])

useEffect(()=> {
  fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(res => setAllMeme(res.data.memes))
    
},[])
const handleTopText = (e) => setTopText(e.target.value)
const handleBottomText = (e) => setBottomText(e.target.value)
const handleSubmit = (e) => {
  e.preventDefault()
  
   const random = Math.floor(Math.random() * allMeme.length)
   setRandomImg(allMeme[random].url)
}
console.log(allMeme)
console.log(allMeme.length)
  return (
    <div> 
      <h1>MemeGenerator</h1>
      <form onSubmit = {handleSubmit}>  
        <input name="topText" placeholder = "Top Text" value = {topText} onChange = {handleTopText} /><br/><br/>
        <input name="bottomText" placeholder= "Bottom Text" value= {bottomText} onChange = {handleBottomText} /><br/><br/>
        <button type="submit">Gen</button>
      </form>
      <br/>
      <div className="meme">
      <span className="topText">{topText}</span>
      <img src= {randomImg}  alt="meme_img" width="400" />  
      <span className="bottomText">{bottomText}</span>
      </div>
    </div>
  )
}

export default MemeGenerator