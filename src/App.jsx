import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GridBox from './components/GridBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from './components/Button';
function App() {
  const gridSize=8;

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="ml-8 border-1 w-[480px] h-[480px] grid grid-cols-8 grid-rows-8">
      {Array.from({ length: 64 }).map((_, index) => {
          const y = index % gridSize; // Row index (previously X)
          const x = Math.floor(index / gridSize); // Column index (previously Y)
          return <GridBox key={index} x={x} y={y} />;
        })}
      </div>
      <Button />
    </div>

    
  )
}

export default App
