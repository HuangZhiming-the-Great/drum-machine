import React from 'react';

class DrumPad extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
    this.playMusic=this.playMusic.bind(this);
    this.displayText=this.displayText.bind(this);
    this.handleKeyDown=this.handleKeyDown.bind(this);
  }

  playMusic(){
    const audioElement=document.getElementById(this.props.text);
    audioElement.currentTime=0;
    audioElement.play();
  }

  displayText(){
    const displayElement=document.getElementById("display");
    displayElement.innerText=this.props.musicURL.match(/(?<=\/)[-\w]+(?=\.mp3)/)[0];
  }

  handleKeyDown(event) {
    if (String.fromCharCode(event.keyCode) === this.props.text) {
      this.playMusic();
      this.displayText();
    }
  }

  componentDidMount(){
    document.addEventListener('keydown',this.handleKeyDown);
  }
  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKeyDown);
  }
  render(){
    return (
      <div id={this.props.musicURL.match(/(?<=\/)[-\w]+(?=\.mp3)/)[0]} className={"drum-pad"} onClick={()=>{this.playMusic();this.displayText();}}>
        <p>{this.props.text}</p>
        <audio id={this.props.text} className={"clip"} src={this.props.musicURL}></audio>
      </div>
    );
  }
}

export default DrumPad;