import React, {Component} from 'react';
import textNodes from './textNodes.js';
import healthIcon from './imgs/health.png';
import goldIcon from './imgs/gold.jpg';
import bgs from './images'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        health: 100,
        gold: 10,
        wolfPelt: false,
        stage: 0,
        currentNode: {},
        bgSwitch: false,
    }
    this.baseState = this.state
    this.handleNext = this.handleNext.bind(this)
    this.handleAlterState = this.handleAlterState.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.changeBg = this.changeBg.bind(this)
    this.handleBgSwitch = this.handleBgSwitch.bind(this)
  }

  handleReset(){
    this.setState(this.baseState)
    this.setState((state)=> {return {currentNode:textNodes.find(textNode => textNode.id === 1)}})
    if(!this.state.bgSwitch){
      document.body.style.backgroundImage = `url(${bgs[1]})` 
    }
  }

handleBgSwitch(e){
  const name = e.target.name
  const value = e.target.checked
  this.setState({[name]:value},()=>{this.changeBg()});
}

changeBg(){
  if(!this.state.bgSwitch){
    try{
      const image = bgs[this.state.stage]
      document.body.style.backgroundImage = `url(${image})` 
    }catch{
      const image = bgs[0]
      document.body.style.backgroundImage = `url(${image})`
    }
  }else{
    document.body.style.backgroundImage = ``
  }
}

handleAlterState(nodeObj){
  nodeObj.stateData.forEach(data => {
      const name = data.name
      const value = data.value
      if(typeof(value)=== 'number'&&name !== "stage"){
       this.setState(updater => {return{[name]: updater[name] + value}})
      }else{
        this.setState({[name]:value}, ()=>{if(name === `stage`){
          this.changeBg()
        }})
      }   
    });
  }
  
  handleNext(nodeObj){
    const nextNode = nodeObj.nextNode? nodeObj.nextNode: nodeObj.condition(this.state[nodeObj.checks])
    if(nextNode === -1){
      return this.handleReset()
    }
    if(this.state.health <= 0){
      return this.setState((state)=> { return {currentNode:textNodes.find(textNode => textNode.id === 5000)}})
    }
    if(nodeObj.altersState){
      this.handleAlterState(nodeObj)
    }
    this.setState((state)=> { return {currentNode:textNodes.find(textNode => textNode.id === nextNode)}})
  }
  
  componentDidMount(){
    this.setState((state)=> { return {currentNode:textNodes.find(textNode => textNode.id === 0)}})
    this.changeBg()
  }

  render() {
    return(
      <div>
          <div className="container">
                  {this.state.currentNode.chapter && <h2>{this.state.currentNode.chapter}</h2>}
                  <div>
                    {this.state.currentNode.text}
                    {this.state.currentNode.id === 21&&<div>
                      <a href="https://github.com/ada-tasbasi">Github</a> 
                      <br />Text Adventure concept based on:<a href="https://www.youtube.com/watch?v=R1S_NhKkvGA">https://www.youtube.com/watch?v=R1S_NhKkvGA</a>
                      </div>}
                  </div>
                  {this.state.currentNode.infoText && <div className="info-txt">{this.state.currentNode.infoText}</div>}
                  <div id="option-btn" className="btn-grid">
                  {this.state.currentNode.options? this.state.currentNode.options.map((option, index)=>{
                        return <button className="btn" key={index} onClick={() => this.handleNext(option)}>{option.text}</button>
                      }
                 ):
                  (<button className="btn" id="next-btn" onClick={() => this.handleNext(this.state.currentNode)}> 
                  {this.state.currentNode.nextNode>0||this.state.currentNode.checks? 'Next': 'Restart'} 
                  </button>)
                }
                 </div>
            </div>
            {
              <div className="stats">
              <ul>
                <li><img src={healthIcon} alt="health" />Health: {this.state.health}</li>
                <li><img src={goldIcon} alt="gold" />Gold: {this.state.gold}</li>
              </ul>   
            </div>
            }
            <div className="chbox">
              BGs Off:
              <input type="checkbox" name="bgSwitch" checked={this.state.bgSwitch} onChange={this.handleBgSwitch}/>
            </div>
        </div>
    );
  }
}

export default App;