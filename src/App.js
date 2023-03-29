import './App.css';
import { useState } from 'react';
import Constant from './component/Constanct';
import MultiLayerCheckbox from './component/MultiLayerCheckbox';
// import MultiLayerCheckbox from './component/MultiLayerCheckbox';

function App() {
  const [args, setArgs] = useState([
    { id: 1, title: "My Args", value: false },
  ])

  const [oprators, setOprators] = useState([
    // [
    //   { id: 1, title: "My Args", value: false },
    //   { id: 2, title: "My Args", value: false }
    // ],
    // [
    //   { id: 1, title: "My Args", value: false },
    //   { id: 2, title: "My Args", value: false }
    // ]
  ])
  const [optaion, setOpration] = useState()
  const [opSelect, setOpSelect] = useState()
  const [result, setResult] = useState()
  const [constant, setConstant] = useState(false)
  const [op1, setOp1] = useState()
  const [op2, setOp2] = useState()

  const argInputHandler = (e, index) => {
    const newArg = [...args]
    newArg[index].title = e.target.value
    setArgs(newArg)
  }

  const argsSelectHandler = (e, index) => {
    const newArg = [...args]
    newArg[index].value = e.target.value
    setArgs(newArg)
    // setResult(e.target.value)
    // if (opSelect === "argument") {
    // }
  }

  const addArgsHandler = () => {
    const newArgs = [...args]
    const arg = { id: args.length + 1, title: "", value: false }
    newArgs.push(arg)
    setArgs(newArgs)
  }

  // op
  const opSelectHandler = (e) => {
    const { value } = e.target
    setOpSelect(value)
    if (value === 'argument') {
      // const matchArg = args.filter(arg=> arg.title === value)[0]
      setResult(args[0].value)
    } else {
      setResult(false)
    }
  }

  const constantHandler = (e) => {
    setConstant(e.target.value)
    setResult(e.target.value)
  }

  // op args
  const opArgsHandler = (e) => {
    const { value } = e.target
    const matchArg = args.filter(arg => arg.title === value)[0]
    setResult(matchArg.value)
    console.log("matchArg", value, matchArg)
  }

  // and or
  const oprationHandler = (e) => {
    setOpration(e.target.value)
  }

  const operatorHandler = (e) => {
    const { value } = e.target
    // const matchArg = oprators.filter(arg => arg !== value)
    // const matchArg = args.filter(arg => arg.id == value)[0]
    // setOprators([matchArg])
    // console.log('e', value)
  }

  // delete 
  const deleteHandler = (e) => {
    setOpSelect('')
    setResult()
  }

  console.log('oprator', oprators)
  // total args
  const totalArgs = args?.map((arg, index) => {
    const { title, value } = arg

    return (
      <div key={index}>
        <input type="text" value={title} onChange={(e) => argInputHandler(e, index)} />
        <select value={value} onChange={(e) => argsSelectHandler(e, index)}>
          <option value={true} >true</option>
          <option value={false}>false</option>
        </select>
      </div>)
  })

  return (
    <div className="App">
      <div className=''>
        {totalArgs}
        <button onClick={addArgsHandler}>Add Args</button>
      </div>

      <div className='opretion-section'>

       
        {/* end section end */}
        <MultiLayerCheckbox setResult={setResult} args={args} argsSelectHandler={argsSelectHandler}/>
      </div>
      <div className='result-section'>
        result : {result !== undefined ? result.toString() : 'undefined'}
      </div>
    </div>
  );
}

export default App;
