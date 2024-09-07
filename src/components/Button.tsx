import React from 'react';

interface buttonProps {
  symbol: string;
  handleClick: (symbol: string) => void; 
  color?: string;
}

const Button: React.FC<buttonProps> = ({ symbol, handleClick, color }) => {
  return (
    <div className='flex justify-center items-center'>
      <button 
        className='w-full md:w-[100px] h-[60px] text-lg md:text-xl font-semibold'
        style={{ backgroundColor: color || '#c9c9c9' }}
        onClick={() => handleClick(symbol)}
      >
        {symbol}
      </button>
    </div>
  );
};

export default Button;
