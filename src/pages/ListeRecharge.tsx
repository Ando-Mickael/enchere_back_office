import { IonButtons, IonContent, IonHeader, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { MenuSidebar } from "../components/MenuSidebar";
import { baseUrl } from "../util/Api";
import '../theme/enchere.css';
import { ItemDemande } from "../components/ItemDemande";
export const ListeRecharge: React.FC = () => {

    const [demandes, setDemande] = useState([]);

    function getDemandes() {
        const url = baseUrl + "/rechargeComptes";
        axios.get(url).then((response) => {
            setDemande(response.data);
        });
    }

    useEffect(() => {
        getDemandes();
    }, []);

    return (
        <>
            <MenuSidebar />
            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Listes des recharges de compte</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonList className="flex-container">
                        {demandes.map((demande, index) => {
                            return (
                                <ItemDemande demande={demande} key={index} />
                            );
                        })}
                    </IonList>
                </IonContent>
            </IonPage>
        </>
    );
}
