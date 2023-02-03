import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonCardContent, IonChip } from "@ionic/react";
import { ItemDemandeProps } from "../util/Interface";
import "../theme/enchere.css";
import axios from "axios";
import { baseUrl } from "../util/Api";

export const ItemDemande: React.FC<ItemDemandeProps> = ({ demande }) => {

	function accepter(id: any) {
		const url = baseUrl + "/acceptRechargeCompte/" + id;
		axios.get(url).then((response) => {
			console.log(response);
		});

		window.location.assign("/listeRecharge");
	}

	function refuser(id: any) {
		const url = baseUrl + "/declineRechargeCompte/" + id;
		axios.get(url).then((response) => {
			console.log(response);
		});
		window.location.assign("/listeRecharge");
	}

	let details;
	if (demande["estValide"] === 0) {
		details = <>
			<IonChip color="secondary">En attente</IonChip><br /><br />
			<IonButton
				onClick={() => accepter(demande["id"])}
			>Accepter</IonButton>
			<IonButton
				fill="outline"
				onClick={() => refuser(demande["id"])}
			>Refuser</IonButton>
		</>
	} else if (demande["estValide"] === 1) {
		details = <IonChip color="success">Acceptee</IonChip>
	} else if (demande["estValide"] === -1) {
		details = <IonChip color="danger">Refusee</IonChip>

	}

	return (
		<IonCard className="box">
			<IonCardHeader>
				<IonCardTitle>{demande["pseudo"]} </IonCardTitle>
				<IonCardSubtitle>{demande["dateDemande"]} </IonCardSubtitle>
			</IonCardHeader>
			<IonCardContent>
				<h3><b>{demande["montant"]}</b> Ar</h3>
				<br />
				{details}
			</IonCardContent>
		</IonCard>
	);
}