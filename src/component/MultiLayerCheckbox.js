import React, { useEffect, useState } from 'react';
import AndLayer from './AndLayer';
import Constant from './Constanct';


const MultiLayerCheckbox = ({ setResult, args, argsSelectHandler }) => {
    // const [args, setArgs] = useState([
    //     { id: 1, title: "My Args", value: false },
    // ])
    const [addOp, setAddOp] = useState([''])
    const [matchArg, setMatchArg] = useState()
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
    // const [result, setResult] = useState()
    const [constant, setConstant] = useState(false)
    const [result1, setResult1] = useState(false)
    const [result2, setResult2] = useState(false)
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
        setMatchArg(matchArg)
        setResult(matchArg.value)
        console.log("matchArg", value, matchArg.value)
    }

    useEffect(() => {
        if (opSelect === 'argument' && matchArg) {
            setResult(matchArg.value)
        }
        else if (opSelect == 'argument' || opSelect == '') {
            setResult(false)
        }else if(opSelect==="and"){
            if(result1===true && result2===true){
                setResult(true)
            }
            else(
                setResult(false)
            )
        }
        else if(opSelect==="or"){
            setResult(result1 || result2)
        }
        else (
            setResult('undefined')
        )
    }, [args, matchArg])
    console.log("result",result1, result2)
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


    return (
        <div>
            {!opSelect &&
                <div>
                    <select value={opSelect ? opSelect : ''} onChange={opSelectHandler}>
                        <option value="" disabled>select..</option>
                        <option value="constant">constant</option>
                        <option value="argument">argument</option>
                        <option value="and">and</option>
                        <option value="or">or</option>
                    </select>
                    <button>X</button>
                </div>
            }
            {/* constant sction start */}

            {opSelect == 'constant' &&
                // <Constant />
                <div>
                    <select value={constant} onChange={constantHandler}>
                        <option value={true} >true</option>
                        <option value={false}>false</option>
                    </select>
                    <button onClick={deleteHandler}>X</button>
                </div>
            }
            {/* constant sction end */}


            {/* argument sction start */}

            {opSelect === "argument" &&
                <div>
                    <select onChange={opArgsHandler} >
                        {args.map(arg =>
                            <option value={arg.title} key={arg.id}>
                                {arg.title}
                            </option>
                        )}
                    </select>
                    <button onClick={deleteHandler}>X</button>
                </div>
            }

            {/* argument section end */}


            {/* and section start */}

            {opSelect === "and" &&
                <div>
                    <div className='and-or-section'>
                        <select onChange={oprationHandler} >
                            <option value="and">AND</option>
                            <option value="or">OR</option>
                        </select>
                        <button onClick={deleteHandler}>X</button>
                    </div>
                    {addOp.map(()=>
                    <div>
                        <div>
                            <AndLayer setResult={setResult1} args={args} argsSelectHandler={argsSelectHandler} />
                            <AndLayer setResult={setResult2} args={args} argsSelectHandler={argsSelectHandler} />
                        </div>
                        <button className='' onClick={()=>setAddOp([...addOp, ''])}>add op</button>
                    </div>)}
                    {/* <div>
              <select onChange={opArgsHandler} >
                <option value="" >select...</option>
                {args.map(arg =>
                  <option value={arg.title} key={arg.id}>
                    {arg.title}
                  </option>
                )}
              </select>
              <button onClick={deleteHandler}>X</button>
            </div> */}
                </div>
            }

            {/* end section end
            <div>
                <select value={op1} onChange={op1SelectHandler}>
                    <option value="" disabled>select..</option>
                    <option value="constant">constant</option>
                    <option value="argument">argument</option>
                    <option value="and">and</option>
                    <option value="or">or</option>
                </select>
                <button>X</button>
            </div>
            <div>
                <select value={op2} onChange={op2SelectHandler}>
                    <option value="" disabled>select..</option>
                    <option value="constant">constant</option>
                    <option value="argument">argument</option>
                    <option value="and">and</option>
                    <option value="or">or</option>
                </select>
                <button>X</button>
            </div> */}
        </div>
    );
};

export default MultiLayerCheckbox;
