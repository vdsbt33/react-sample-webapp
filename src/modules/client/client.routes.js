import { Route } from 'react-router-dom';

import { ClientForm } from './containers/client.form';
import { ClientGrid } from './containers/client.grid';
import { ClientView } from './containers/client.view';

export function ClientRoutes() {
    return <>
        <Route exact path="/client"><ClientView /></Route>
        <Route exact path="/client/add"><ClientForm readonly="false" /></Route>
        <Route exact path="/client/view/:id"><ClientForm readonly="true" /></Route>
        <Route exact path="/client/edit/:id"><ClientForm readonly="false" /></Route>
        </>
}
