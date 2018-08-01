import React, { Component } from 'react';
export const TypeButton = (WrappedComponent, type, value) => {
    return class HOCComponent extends Component {
        render() {
            return (
                <WrappedComponent  {...this.props} type={type} value={value} />
            )
        }
    }
}
