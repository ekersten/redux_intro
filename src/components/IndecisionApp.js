import React from 'react';

import Header from  './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }

        } catch (e) {

        }
        
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined}));
    }

    handleAddOption = (option) => {
        if(!option) {
            return 'Enter a valid value!';
        }else if(this.state.options.indexOf(option) > -1) {
            return 'The option is duplicated!'
        }
        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    }

    handlePickOption = () => {
        const option = this.state.options[Math.floor(Math.random() * this.state.options.length)];
        alert(option);
    }

    

    render() {
        return (
            <div>
                <Header title="Indecision App" subtitle="Put your life in the hands of a computer."/>
                <Action
                    hasOptions={!!this.state.options.length}
                    handlePickOption={this.handlePickOption}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}