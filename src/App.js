import React from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
import { PostList, PostCreate } from './posts';
import { UserList } from './users';

import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');


const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={EditGuesser} create={PostCreate} />
        <Resource name="users" list={UserList} edit={EditGuesser}/>
    </Admin>
);
export default App;
