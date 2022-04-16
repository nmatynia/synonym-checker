import React, {useEffect, useState} from 'react';
import './App.css';
import { APIKEY } from './api-key'
import { Axios, AxiosResponse } from 'axios';
import SearchBar from './Components/SearchBar';
import Nav from './Components/Nav';
import Synonyms from './Components/Synonyms';
import {IWordData} from './interfaces';

export interface IState {
  word: string,
  wordData: IWordData,
  operationType: string
}
const App:React.FC = () => {

const [word,setWord] = useState<IState["word"]>("");
const [wordData,setWordData] = useState<IState["wordData"]>();
//scaling possibility
const [operationType,setOperationType] = useState<IState["operationType"]>("synonyms");

const axios= require("axios");

const options = {
  method: 'GET',
  url: `https://wordsapiv1.p.rapidapi.com/words/${word}`,
  headers: {
    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
    'X-RapidAPI-Key': APIKEY
  }
};


useEffect(()=>{
  axios.request(options).then((response: AxiosResponse) => {
    console.log(response.data)
    setWordData(response.data);
  }).catch((error: TypeError) => {
    console.error(error);
  });
},[word])



  return (
    <div className="App">
      <div className="header">
        <h2>Norbert Matynia's</h2>
        <h1>Synonym Checker</h1>
      </div>
      <Nav/>
      <SearchBar word={word} setWord ={setWord}/>
      
      {
        /* this exclamation mark is savior it says typescript even though something looks like it could be null, it can trust you that it's not*/
        (wordData !== undefined && wordData.hasOwnProperty('results')) ? <Synonyms word={word} wordData={wordData!}/>:""
      }

    </div>
  );
}

export default App;
