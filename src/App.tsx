import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* My imports */
import { Login } from './pages/Login';
import { ListeEnchere } from './pages/ListeEnchere';
import { ListeRecharge } from './pages/ListeRecharge';
import { UpdateEnchere } from './pages/UpdateEnchere';
import { Statistiques } from './pages/Statistiques';

setupIonicReact();

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<IonRouterOutlet>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route exact path="/listeEnchere">
					<ListeEnchere />
				</Route>
				<Route exact path="/listeRecharge">
					<ListeRecharge />
				</Route>
				<Route exact path="/updateEnchere">
					<UpdateEnchere />
				</Route>
				<Route exact path="/stat">
					<Statistiques />
				</Route>
				<Route exact path="/">
					<Redirect to="/login" />
				</Route>
			</IonRouterOutlet>
		</IonReactRouter>
	</IonApp>
);

export default App;
