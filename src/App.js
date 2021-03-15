import React, { useReducer } from 'react';
import * as actions from './actions/index'
import reducer, { initialState } from './reducers/index';
import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const applyNumber = (num) => {
    dispatch(actions.applyNumber(num))
  }
  const changeOperation = (operation) => {
    dispatch(actions.changeOperation(operation))
  }
  const clear = () => {
    dispatch(actions.clearDisplay())
  }

  const addMemory = () => {
    dispatch(actions.addMemory())
  }
  const updateMemory = () => {
    dispatch(actions.updateMemory())
  }
  const clearMemory = () => {
    dispatch(actions.clearMemory())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={()=>addMemory()} value={"M+"}/>
              <CalcButton onClick={()=>updateMemory()} value={"MR"}/>
              <CalcButton onClick={()=>clearMemory()} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>(applyNumber(1))} value={1}/>
              <CalcButton onClick={()=>(applyNumber(2))} value={2}/>
              <CalcButton onClick={()=>(applyNumber(3))} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>(applyNumber(4))} value={4}/>
              <CalcButton onClick={()=>(applyNumber(5))} value={5}/>
              <CalcButton onClick={()=>(applyNumber(6))} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>(applyNumber(7))} value={7}/>
              <CalcButton onClick={()=>(applyNumber(8))} value={8}/>
              <CalcButton onClick={()=>(applyNumber(9))} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>(changeOperation('+'))} value={"+"}/>
              <CalcButton onClick={()=>(changeOperation('*'))} value={"*"}/>
              <CalcButton onClick={()=>(changeOperation('-'))} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={()=>(clear())} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
