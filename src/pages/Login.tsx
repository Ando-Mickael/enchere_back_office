import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { FormLogin } from '../components/FormLogin';

export const Login: React.FC = () => {

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Se connecter</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				<FormLogin />
			</IonContent>
		</IonPage>
	);
};
