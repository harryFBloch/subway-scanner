import React, {Component} from 'react';
import {IonLabel} from '@ionic/react'
import { TesseractWorker } from 'tesseract.js';
import myImage from './bedfordave.jpg'
const worker = new TesseractWorker();

export default class App extends Component {

  constructor(){
    super()
    this.state = {
      imageText: ""
    }
  }

  componentDidMount(){
    worker.recognize(myImage)
    .progress( p => console.log('progress', p))
    .then( result => {
      console.log(result)
      this.setState({imageText: result.text})
    })

  }

  render(){
    return (
          <IonLabel>{this.state.imageText}</IonLabel>
    )
  }
}
