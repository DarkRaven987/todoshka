import React, {Component} from 'react';

class TaskList extends Component {
    render(){
        const {tasks, doneTask, deleteTask}= this.props;

        return(
            <div>
                {tasks.map((el,i)=>{
                    return(
                        <li key={i}>
                            {el.name}
                            {el.done? '':<button onClick={(e)=>doneTask(el.id)}>Done</button>}
                            <button onClick={(e)=>deleteTask(el.id)}>Delete</button>
                        </li>
                    );
                })}
            </div>
        );
    }
}

export default TaskList;