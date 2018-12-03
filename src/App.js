import React, { Component } from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
import { UserList } from './users';
import ApolloClient from 'apollo-boost';

import buildGraphcoolProvider from 'ra-data-graphcool';

const client = new ApolloClient({ uri: 'http://localhost:8529/test-admin' });

class App extends Component {
    constructor() {
        super();
        this.state = { dataProvider: null };
    }
    componentDidMount() {
        buildGraphcoolProvider({ clientOptions: { uri: 'http://localhost:8529/test-admin' }})
            .then(dataProvider => this.setState({ dataProvider }));
    }

    render() {
        const { dataProvider } = this.state;

        if (!dataProvider) {
            return <div>Loading</div>;
        }

        return (
            <Admin dataProvider={dataProvider}>
                <Resource name="User" list={UserList} edit={EditGuesser} />
            </Admin>
        );
    }
}

export default App;
