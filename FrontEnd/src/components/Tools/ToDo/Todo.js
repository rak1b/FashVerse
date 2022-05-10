import { useState } from "react";
import "./ToDo.css";
const ToDo = () => {
  const [item, setitem] = useState();
  const [item_list, set_item_list] = useState([]);
  const grab_input = (e) => {
    setitem(e.target.value);
  };
  const add_item = () => {
    if(item !==''){
      set_item_list((useState_array) => {
        return [...useState_array, item];
      });
    }else{
      alert('Please Write Something....')
    }
    
    setitem("");
  };

  const delete_items = (index) => {
    set_item_list((list) => {
      return list.filter((item, id) => {
        return id !== index
      });
    });
  };

  const ToDoItems = (props) => {
    return (
      <>
        <div className="todo__items" key={props.index}>
          <i class="bx bx-trash" onClick={()=>{
              console.log('clicked',props.index)
              return props.onClick_func(props.index)
          }}></i>
          <p>{props.item}</p>
        </div>
      </>
    );
  };
  

  return (
    <>
      <div className="bg__sky bg__fullwh todo__bg">
        <div className="bg__container todo">
          <h4 className="text__center bg__warning todo__header">ToDo</h4>
          <div className="todo__add">
            <input
              type="text"
              onInput={grab_input}
              className="todo__input"
              value={item}
              placeholder="What's the plan?"
            />

            <i onClick={add_item} className="todo__plus bx bx-plus"></i>
          </div>
          <div>
            {item_list.map((item, index) => {
              console.log(index);
              return (
                <ToDoItems
                  onClick_func={delete_items}
                  index={index}
                  item={item}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
