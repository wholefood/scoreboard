import React from 'react';
import logo from './logo.svg';
import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

//////////////////////////////////////////////////////////




// 펑션컴포넌트가 되는 조건
// 첫글자는 대문자
// react element를 리턴

let Header = ({title, players}) => {
  //console.log(props);
  return (
    <header className="header">
      <h1 className="h1">{title}</h1>
      <span className="stats">Players : {players}</span>
    </header>
  );
}

class Counter extends React.Component{
  state = {
    score : 10
  }

  handleScore = (delta) => {
    console.log(this); //
    //this.state.score  += 1;
    this.setState(prevState => ({
      score: prevState.score + delta
    }));
    console.log(this.state.score);
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={()=>this.handleScore(-1)}> - </button>
        <span className="counter-score"> {this.state.score} </span>
        <button className="counter-action increment" onClick={()=>this.handleScore(1)}> - </button>
      </div>
    );
  }
}


let Player = (props) => {
  return (
    <div className="player">
      <span className='player-name'>
        <button className='remove-player' onClick={()=>props.removePlayer(props.id)}></button>
      </span>

      <span className="player-name">{props.name}</span>

      <Counter score={props.score} ></Counter>
    </div>
  );
}

class App extends React.Component{
  state = {
    players: [
      {name: 'LDK', score: 30, id:1},
      {name: 'HONG', score: 40, id:2},
      {name: 'KIM', score: 50, id:3},
      {name: 'PARK', score: 60, id:4},
    ]
  }

  handleRemovePlayer = (id) => {
    console.log('handleRemovePlayer : ', id );

    //로직작성
    this.setState((prevState) =>{
      //id를 제외한 상태를 업데이트해야 함.

      const players =  prevState.players.filter((player)=>{player.id !== id});
      return {players: players};
    })


  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard프랍" players={2}></Header>

        {
          this.state.players.map(player => {
            return <Player name={player.name} score={player.score} key={player.id} removePlayer={this.handleRemovePlayer} />
          })
        }

      </div>
    );
  }

}

// let App = (props) => {
//
// }

//ReactDOM.render(<div><Header></Header><Player></Player></div>, document.getElementById('root'));
//ReactDOM.render(<App></App>, document.getElementById('root'));


export default App;