import React from "react";
import AddTask from './AddTask'
import {FiTrash2,} from 'react-icons/fi'
import {AiTwotoneEdit} from 'react-icons/ai'

class Task extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editForm: false
        }
    }
    list = this.props.list
    render() {
        return(
            <div className="list">
                 <FiTrash2 onClick={() =>this.props.onDelete(this.list.id)} className="delete-icon" />
                 <AiTwotoneEdit onClick={() => {
                    this.setState({
                        editForm: !this.state.editForm
                    })
                 }} className="edit-icon" />
                <h3>{this.list.name}</h3>
                {this.state.editForm && <AddTask list={this.list} onAdd={this.props.onEdit}  />}
            </div>
        )
    }
}

export default Task