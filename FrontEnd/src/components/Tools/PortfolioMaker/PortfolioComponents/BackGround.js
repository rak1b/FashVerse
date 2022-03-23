import React, { useState } from 'react'
import { DndProvider, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Card from './Card';

const ComponentList = [
  {
    id: 1,
    title:'Python',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsa.'
  },
  {
    id: 2,
    title:'Javascript',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsa.'
  },
  {
    id: 3,
    title:'Django',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsa.'
  },

];










const  BackGround = () => {

  const [board, setBoard] = useState([]);
  console.log(board);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "text",
    drop: (item) => addComponentToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));


 

  const addComponentToBoard = (id) => {
    const componentListFiltered = ComponentList.filter((Component) => id === Component.id);
    setBoard((board) => [...board, componentListFiltered[0]]);
  };









  return (
      <div className="bg-gray-50 flex w-3/4 m-auto" >
        <div className='w-1/4 bg-green-200 h-screen'>
          {/* <Card id='1' title='Python' text = 'Lorem ipsum dolor sit amet.'/>
          <Card id='2' title='Javascript' text = 'Lorem ipsum dolor sit amet.'/>
          <Card id='3' title='Django' text = 'Lorem ipsum dolor sit amet.'/> */}
          {ComponentList.map((Component) => {
          return <Card canDrag={1}  title={Component.title} text={Component.text} id={Component.id} />;
        })}
        </div>

        <div className='w-3/4 bg-red-200 h-screen ' ref={drop}>
        {board.map((Component) => {
          return <Card canDrag={0} title={Component.title} text={Component.text} id={Component.id} />;
        })}
        </div>
        
      </div>
    
  )
}

export default BackGround
