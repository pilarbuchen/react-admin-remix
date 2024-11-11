import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import styles from './my-react-admin-component.module.scss';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const MyReactAdminComponent = () => (
    <div className={styles.container}>
        <Admin dataProvider={dataProvider}>
            <Resource name="users" list={ListGuesser} />
        </Admin>
    </div>
);

export default MyReactAdminComponent;
