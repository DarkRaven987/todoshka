import React, { Component } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTask, deleteTask, doneTask} from "./store/actions";


class App extends Component {
  render() {
      const {tasks, addTask, doneTask, deleteTask} = this.props;
    return (
        <div>
            <form action="" onSubmit={(e)=> {e.preventDefault(); addTask(e.target[0].value); e.target.reset();}}>
                <input type="text"/>
                <button>Add task</button>
            </form>
            <ul>
              <TaskList
                  tasks={tasks}
                  doneTask={doneTask}
                  deleteTask={deleteTask}
              />
            </ul>
        </div>
    );
  }
}

const putStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
};

const putActionsToProps = (dispatch) => {
    return {
        addTask: bindActionCreators(addTask, dispatch),
        doneTask: bindActionCreators(doneTask, dispatch),
        deleteTask: bindActionCreators(deleteTask, dispatch)
    }
};

export default connect(putStateToProps, putActionsToProps)(App);
