import React from "react";
import Task from "./Task";

class Tasks extends React.Component {
    render() {
        if(this.props.lists.length > 0)
        return(<div>
            {this.props.lists.map((el) => (
                <Task onEdit={this.props.onEdit} onDelete={this.props.onDelete} key={el.id} list={el} />
            ))}
            </div>)
            else
            return(<div className="list">
              <h4>No tasks</h4>
            </div>)
        
    }
}

export default Tasks