import React, {useEffect, useState} from 'react';
import './App.css';
import { APIKEY } from './api-key'
import { Axios, AxiosResponse } from 'axios';
import SearchBar from './Components/SearchBar';

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
    setSynonyms(response.data);
  }).catch((error: TypeError) => {
    console.error(error);
  });
},[word])



  return (
    <div className="App">
      <div className="Header">
        <h2>Norbert Matynia's</h2>
        <h1>Synonym Checker</h1>
      </div>
      <SearchBar word={word}/>
    </div>
  );
}

export default App;
