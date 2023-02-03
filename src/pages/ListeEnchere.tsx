import { IonButtons, IonContent, IonHeader, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { MenuSidebar } from "../components/MenuSidebar";
import { baseUrl } from "../util/Api";
import '../theme/enchere.css';
import { ItemEnchere } from "../components/ItemEnchere";

export const ListeEnchere: React.FC = () => {

    const [encheres, setEncheres] = useState([]);

    function getEncheres() {
        const url = baseUrl + "/encheres";

        axios.get(url).then((response) => {
            setEncheres(response.data);
        })
    }

    useEffect(() => {
        getEncheres();
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
                        <IonTitle>Listes des Encheres</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonList className="flex-container">
                        {encheres.map((enchere, index) => {
                            return (
                                <ItemEnchere enchere={enchere} key={index} />
                            )
                        })}
                    </IonList>

                    <div className="graph"></div>
                </IonContent>
            </IonPage>
        </>
    );
}
