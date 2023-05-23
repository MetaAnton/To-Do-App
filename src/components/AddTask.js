import React from "react";

class AddTask extends React.Component {  
    listAdd = {}
    constructor(props) {
        super(props)
        this.state ={
            name:""
        }
    }
    render() {
        return (
            <form ref={(el) => this.myForm = el}>
            <input type="text" name="text" className="input" placeholder="Type here..." onChange={(e) => this.setState({name:e.target.value})}></input>
            <button type="button" class="button"onClick={() =>{ 
                this.myForm.reset()
                this.listAdd = {
                    name: this.state.name,
                }
                if(this.props.list)
                this.listAdd.id = this.props.list.id
                this.props.onAdd(this.listAdd)}}>
    <span class="button__text">Create</span>
  <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
</button>
</form>
        )
    }
}

export default AddTask