import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';
import Button from './components/Button';

const App: React.FC = () => {

  const [value, setValue] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const addToText = (val: string) => {
    setValue((text) => text + val + ' ');
  };
  const calculate = () => {
    try{
    const jointVal = value.split(' ').join('');
    const res = evaluate(jointVal);
    setResult(res.toString());
    setValue('');
    }
    catch(error){
     console.error();
      
    }
  }
  const handleClear = ()=>{
    const newValue = value.split(' ').join('').slice(0,-1);
    setValue(newValue);
    setResult('');
  }
  const buttonColor ='#eb7d34';

  return (
    <>
      <div className='flex justify-center items-center h-screen w-screen bg-slate-700 text-xl '>
        <div>
        <div className='w-[400px] h-[80px] bg-gray-300 flex flex-col items-end p-5 rounded-sm'>
          <div className='transition ease-out duration-300'>{value}</div>
          <div>{result}</div>
        </div>
        <div className='flex flex-col bg-slate-200' >
          <div className='flex'>
          <Button symbol='1' handleClick={addToText} />
          <Button symbol='2' handleClick={addToText} />
          <Button symbol='3' handleClick={addToText} />
          <Button symbol='+' handleClick={addToText} color={buttonColor} />
          </div>
          <div className='flex'>
            <Button symbol='4' handleClick={addToText} />
            <Button symbol='5' handleClick={addToText} />
            <Button symbol='6' handleClick={addToText} />
            <Button symbol='-' handleClick={addToText} color={buttonColor} />
          </div>
          <div className='flex'>
            <Button symbol='7' handleClick={addToText} />
            <Button symbol='8' handleClick={addToText} />
            <Button symbol='9' handleClick={addToText} />
            <Button symbol='*' handleClick={addToText} color={buttonColor} />
          </div>
          <div className='flex'>
            <Button symbol='0' handleClick={addToText} />
            <Button symbol='.' handleClick={addToText} />
            <Button symbol='=' handleClick={calculate} color={buttonColor}/>
            <Button symbol='/' handleClick={addToText} color={buttonColor} />
          </div>
          <div className='w-[400px] h-[50px] text-center p-3 bg-red-500' onClick={()=>handleClear()}>Clear</div>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
