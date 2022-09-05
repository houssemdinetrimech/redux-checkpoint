import React from 'react'
import {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {add_task,delete_task,isNotDone_task,isDone_task,complete_task} from '../actions/Actions'
import {Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalEdit from './ModalEdit'




function Todolist() {

const [myInput,setMyInput]=useState("")
const todos= useSelector(state=> state.todos)
const dispatch=useDispatch()
const handleChange=(e)=>{
    setMyInput(e.target.value)
}
 useState(false);

useState('');
/* 
const handleAdd=()=>{
    todos.Add_task(myInput)

} */


    return (
        <div>
           <Card style={{ width: '50rem' }}  border="warning" bsPrefix="input">
            <Card.Body >
            <input onChange={handleChange} placeholder="Add a New Task" className="in"/>
            <Button  variant="warning" onClick={()=>dispatch(add_task({id:Math.random(),description:myInput}))}><span className="plus">+</span></Button>
            <Button className="done"  bsPrefix="war" onClick={()=>dispatch(isDone_task())}><span className="plus">Is Done</span></Button>
            <Button  className="notdone" bsPrefix="war" onClick={()=>dispatch(isNotDone_task())}><span className="plus">Is Not Done</span></Button>
            {/* <Button  className="done" bsPrefix="war" onClick={()=>dispatch(all_task())}><span className="plus">Show All</span></Button> */}
            </Card.Body>  </Card>
            <table >
            <div > {todos.map(todo=>
                
<Card style={{ width: '100rem' }} bsPrefix="input2" >
 <Card.Body  >
   <tr><td>
  {/*    {editable ? (
            <input
              type="text"
              className="form-control"
              placeholder={todo.description}
            value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          ) : (  */}
          <Card.Title bsPrefix="button1"  style={{textDecoration:todo.isDone ?"line-through":"none"}}>{todo.description}</Card.Title>
        {/*   )} */}
          </td>
  
  
  <div className="button"><td > <Button  bsPrefix="delete_btn"  onClick={()=>dispatch(delete_task(todo.id))}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="faTrash" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg></Button></td>
  <td  > <Button bsPrefix="complete_btn" onClick={()=>dispatch(complete_task(todo.id))} ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="faCheck" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path></svg></Button></td>
    <td  >
    <ModalEdit todo={todo}/>
   
     
        </td>
         </div></tr> 
  </Card.Body>
  </Card>)}
     </div>
     </table>
        </div>
    )
}

export default Todolist
