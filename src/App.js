import './styles.css';
import React from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: [
        {
            id: 1,
            name: 'Jordan',
        },
        {
            id: 2,
            name:'Lorem'
        }
    ] 
    }
    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.editTask = this.editTask.bind(this)
  }
  render() {
  return (
  <div className='wrapper clear'>
    <header>
    <h1 className='name'>ToDo App</h1>
<AddTask onAdd={this.addTask } />
<main>
  <Tasks lists={this.state.lists } onEdit={this.editTask} onDelete={this.deleteTask} />
</main>
  </header>
  </div>)}

  deleteTask(id) {
      this.setState({
        lists: this.state.lists.filter((el) => el.id !== id)
      })
  }

  editTask(list) {
    let allTasks = this.state.lists
    allTasks[list.id - 1] = list

    this.setState({lists: []}, () => {
      this.setState({lists: [...allTasks] })
    })
  }

    addTask(list) {
     const id = this.state.lists.length + 1
     this.setState({lists: [...this.state.lists, {id, ...list}]})
    }
}


export default App;
