import React, { Component } from "react";
import './App.css';
import Tasklist from './components/Tasklist';
import AddTask from './components/AddTask';
import Filter from './components/Filter'
import store from "./store";

class App extends Component {
  state = { 
  id:2,
  filter:"All",
  filters:["All","Completed","Pending"],
  tasks:[
    {title:"Feed Fish", status:false},
    {title:"Bake Cake", status:true}
    ]
  }
 /*
 Functions: 
 switchStatus(task) - Returns Nothing - Changes the status of a given task (parameter) from false to true and vice versa 
 deleteTask(task) - Returns Nothing - Deletes the the given task(parameter) from the Todo List
 filterTasks(task) - Returns Boolean - Based on currently active filter, Tells if a given task(parameter) should be shown or not.
 addTask() - Returns Nothing - Adds the task in the input field to the Todo List.
 */

  switchStatus=(task)=>{
    const tasks = [...this.state.tasks];
    const index = tasks.indexOf(task);
    tasks[index].status=task.status?false:true;
    this.setState(tasks);
    console.log(this.state.tasks[index].status)
    // Redux
    store.dispatch({type:"STATUS_CHANGE",payload:{id:0}})
    console.log(store.getState())
  }

   deleteTask=(task)=>{
    let tasks = [...this.state.tasks];
    tasks=tasks.filter((i)=>(i!==task));
    this.setState({tasks:tasks});
    console.log(tasks);
    //redux
    store.dispatch({type:"TASK_DELETED",payload:{"id":0}});
    console.log(store.getState())
  }

   filterTasks=(task)=>{
    if(this.state.filter==="All"){return true}
    else{
      if(this.state.filter==="Completed") {return (task.status)}
      else{return (!task.status) }
    }
  }

   addTask=(title)=>{
    //let title = document.getElementById("newTaskTitle").value;
    if(title.trim()!==""){
      store.dispatch({
        type: "ADD_TASK",
        payload:{"title":title}
      })
      //redux
    let tasks=this.state.tasks;
    tasks.push({title:title, status:false});
    this.setState(tasks);
      document.getElementById("newTaskTitle").value="";
    }
    console.log(store.getState());
  }
/*
Returns the following Components:
Filter
AddTask
TaskList
*/ 
  render() { 
    return (
      <div>
        <Filter
          filter={this.state.filter}
          handleUpdateFilter={(i) => this.setState({ filter: i })}
          filters={this.state.filters}
        />
        
        <AddTask handleAddTask={(title)=>this.addTask(title)} />
        
        <Tasklist
          tasks={this.state.tasks}
          handleFilterTasks={(i) => this.filterTasks(i)}
          handleSwitchStatus={(i) => this.switchStatus(i)}
          handleDeleteTask={(i) => this.deleteTask(i)}
        ></Tasklist>
      </div>
    );
  }
}
 
export default App;