import React from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
import { PostList, PostCreate, PostEdit } from './posts';
import { UserList } from './users';

// import jsonServerProvider from 'ra-data-json-server';
import jsonServerProvider from './data-provider';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');


const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
        <Resource name="users" list={UserList} edit={EditGuesser}/>
    </Admin>
);
export default App;
