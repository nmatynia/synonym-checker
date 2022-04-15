import React, {useEffect, useState} from 'react';
import './App.css';
import { APIKEY } from './api-key'
import { Axios, AxiosResponse } from 'axios';
import SearchBar from './Components/SearchBar';
import Nav from './Components/Nav';
import Synonyms from './Components/Synonyms';


export interface IState {
  word: string,
  synonyms: [],
  operationType: string
}
const App:React.FC = () => {

const [word,setWord] = useState<IState["word"]>("");
const [synonyms,setSynonyms] = useState<IState["synonyms"]>([]);
//scaling possibility
const [operationType,setOperationType] = useState<IState["operationType"]>("synonyms");

const axios= require("axios");

const options = {
  method: 'GET',
  url: `https://wordsapiv1.p.rapidapi.com/words/${word}/${operationType}`,
  headers: {
    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
    'X-RapidAPI-Key': APIKEY
  }
};


useEffect(()=>{
  axios.request(options).then((response: AxiosResponse) => {
    setSynonyms(response.data.synonyms);
  }).catch((error: TypeError) => {
    console.error(error);
  });
},[word])

const mapResponse = ( ) =>{

}
  return (
    <div className="App">
      <div className="header">
        <h2>Norbert Matynia's</h2>
        <h1>Synonym Checker</h1>
      </div>
      <Nav/>
      <SearchBar word={word} setWord ={setWord}/>
      <Synonyms word={word} synonyms={synonyms}/>
    </div>
  );
}

export default App;
