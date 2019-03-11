import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleChange } from '../actions/handleChange';

class Form extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <input
                    type="text"
                    label="Enter comment"
                    value={this.props.comment || ''}
                    onChange={e => this.props.handleChange({ name: "comment", value: e.target.value })}
                />

                <input
                    type="text"
                    label="Enter text"
                    value={this.props.text || ''}
                    onChange={e => this.props.handleChange({ name: "text", value: e.target.value })}
                />
               
            </div>

        );
    }
}
const mapStateToProps = state => {
    const { comment, text } = state.handleChange
    return { comment, text }
}

export default connect(mapStateToProps, { handleChange })(Form);