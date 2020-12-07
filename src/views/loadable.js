import React, { Component } from 'react';


const Loadable = ({ loader, loading: Loading }) => {
    return class LoadableComponent extends Component {
        state = {
            LoadedComponent: null
        }

        componentDidMount() {
            // loader() 等同于 import("...")，返回的是一个promise
            loader()
                .then(resp => {
                    console.log(resp)
                    this.setState({
                        LoadedComponent: resp.default
                    })
                })
        }

        render() {
            const { LoadedComponent } = this.state
            return (
                LoadedComponent
                    ?
                    <LoadedComponent />
                    :
                    <Loading />
            );
        }
    }
}

export default Loadable;