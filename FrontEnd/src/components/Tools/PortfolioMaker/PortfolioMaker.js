import React from 'react'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BackGround from './PortfolioComponents/BackGround';

const PortfolioMaker = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <BackGround/>
    </DndProvider>
      

  )
}

export default PortfolioMaker
