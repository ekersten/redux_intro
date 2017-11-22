import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        const option = e.target.elements.optionText.value.trim();
        const error = this.props.handleAddOption(option);
        
        if(error) {
            this.setState(() => ({error}));
        } else {
            e.target.reset();
            e.target.elements.optionText.focus();
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>  }
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" name="optionText" />
                    <button>Add Option</button>
                </form>
            </div>
            
        )
    }
}