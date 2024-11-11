import { createBoard } from '@wixc3/react-board';
import MyReactAdminComponent from '../../../src/components/my-react-admin-component/my-react-admin-component';

export default createBoard({
    name: 'MyReactAdminComponent',
    Board: () => <MyReactAdminComponent />,
});
