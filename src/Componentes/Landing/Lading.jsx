import React, {useState, useEffect} from 'react'
import './Landing.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars} from '@fortawesome/free-solid-svg-icons'

export default function Lading() {

// get 8 random numbers between 1 and 826

const [numbers, setNumbers] = useState([]);
const [characters, setCharacters] = useState()
let numArray = [];


useEffect(()=>{
    const setCharactersArr=async()=>{
        await getNumbers() 
        await getCharacters()
    }
    setCharactersArr()

    //  getNumbers()
    //  getCharacters();
     console.log(numbers,characters)
 },[])

const getNumbers = () =>{

    for(let i = 0; i <= 7; i++){
        //Generate random number
        let random = Math.floor(Math.random() * 826);
        const found = numArray.some(n => n === random); 

        if(found){
            getNumbers();
        }else{
            numArray.push(random);
        }
    } 
        setNumbers(numArray);
}



//fetch api

//using useffect only once



const numbersString = numbers.toString()
const url=(`https://rickandmortyapi.com/api/character/${numbersString}`);
const getCharacters = async()=>{

    const response = await fetch(url)
    const responseJSON = await response.json() 
    console.log(responseJSON)
    setCharacters(responseJSON)
}


//function para obtener las boxes de los characters
const newCharacter = ()=>{
    const characters = [];
    for (let i = 1; i <= 8; i++){
        characters.push(
            <button className="characterBox">
                dios
            </button>
        )
    }
    return characters; 
    }

    
return (
    <div className='areaColorLanding'>
        <div className='bordeTop'>
            <FontAwesomeIcon icon={faBars} className="icon" color="white" />
            <button onClick={getNumbers}>yes</button>
        </div>
        <div className='bordeMid'>
            <h1>hero header</h1>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
        </div>
        <div className='bordeBottom'>
            <div className='charactergrid gap-4 mt-auto'>
            {newCharacter()}
            </div>
        </div>
    </div>
  )
}
