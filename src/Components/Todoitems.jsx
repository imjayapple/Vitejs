import './CSS/Todoitems.css'
import tick from './Assets/tick.png'
import box from './Assets/box.png'
import cross from './Assets/cross.png'


const TodoItems = ({no,display,text}) => {
  return (
    <div className='todoitems'>
      <div className="todoitems-container">
        <img src={box} alt=""/>
        <img src={tick} alt=""/>
        <div className="todoitems-text">{text}</div>
      </div>
      <img src={cross} alt=""/>
    </div>
  )
}

export default TodoItems
