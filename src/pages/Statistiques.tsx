import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton } from "@ionic/react";
import { Graph } from "../components/Graph";
import { MenuSidebar } from "../components/MenuSidebar";

export const Statistiques: React.FC = () => {
	return (
		<>
			<MenuSidebar />
			<IonPage id="main-content">
				<IonHeader>
					<IonToolbar>
						<IonButtons slot="start">
							<IonMenuButton />
						</IonButtons>
						<IonTitle>Statistiques</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent className="ion-padding">
					<Graph />
					<h2>Statistiques des encheres par categorie</h2>
				</IonContent>
			</IonPage>
		</>
	);
}