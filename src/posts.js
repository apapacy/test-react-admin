import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  LongTextInput,
  TextInput,
  Create,
  Edit,
  DisabledInput,
  Filter,
} from 'react-admin';

const PostTitle = ({record}) => {
  return <span>Post {
      record
        ? `"${record.title}"`
        : ''
    }</span>;
};

const PostFilter = (props) => (<Filter {...props}>
  <TextInput label="Search" source="q" alwaysOn="alwaysOn"/>
  <ReferenceInput label="User" source="userId" reference="users" allowEmpty="allowEmpty">
    <SelectInput optionText="name"/>
  </ReferenceInput>
</Filter>);

export const PostList = props => (<List {...props} filters={<PostFilter/>}>
  <Datagrid rowClick="edit">
    <ReferenceField source="userId" reference="users">
      <TextField source="name"/>
    </ReferenceField>
    <TextField source="id"/>
    <TextField source="title"/>
    <TextField source="body"/>
  </Datagrid>
</List>);

export const PostCreate = props => (<Create {...props} undoable={false}>
  <SimpleForm>
    <ReferenceInput source="userId" reference="users">
      <SelectInput optionText="name"/>
    </ReferenceInput>
    <TextInput source="title"/>
    <LongTextInput source="body"/>
  </SimpleForm>
</Create>);

export const PostEdit = props => (<Edit {...props} title={<PostTitle/>} undoable={false}>
  <SimpleForm>
    <DisabledInput source="id"/>
    <ReferenceInput source="userId" reference="users">
      <SelectInput optionText="name"/>
    </ReferenceInput>
    <TextInput source="title"/>
    <LongTextInput source="body"/>
  </SimpleForm>
</Edit>);
