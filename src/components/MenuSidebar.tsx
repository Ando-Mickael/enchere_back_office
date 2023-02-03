import {
	IonContent,
	IonHeader,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonMenu,
	IonTitle,
	IonToolbar
} from '@ionic/react';
import { addCircleOutline, barChartOutline, listOutline, logOutOutline } from 'ionicons/icons';

export const MenuSidebar: React.FC = () => {

	const items = [
		{
			"nom": "Encheres",
			"icon": listOutline,
			"url": "/listeEnchere"
		},
		{
			"nom": "Recharges Comptes",
			"icon": addCircleOutline,
			"url": "/listeRecharge"
		},
		{
			"nom": "Statistiques",
			"icon": barChartOutline,
			"url": "/stat"
		},
		{
			"nom": "Se deconnecter",
			"icon": logOutOutline,
			"url": "/login"
		}
	];

	return (
		<>
			<IonMenu contentId="main-content">
				<IonHeader>
					<IonToolbar color="tertiary">
						<IonTitle>Menu</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent className="ion-padding">
					<IonList>
						{items.map((item, index) => {
							return (
								<IonItem href={item["url"]} key={index} lines="none">
									<IonIcon
										slot='start'
										icon={item["icon"]} />
									<IonLabel>{item["nom"]}</IonLabel>
								</IonItem>
							);
						})}
					</IonList>
				</IonContent>
			</IonMenu>
		</>
	);
}