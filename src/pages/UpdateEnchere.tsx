import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { MenuSidebar } from "../components/MenuSidebar";
import { FormUpdate } from "../components/FormUpdate";

export const UpdateEnchere: React.FC = () => {

    return (
        <>
            <MenuSidebar />
            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Enchere</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <FormUpdate />
                </IonContent>
            </IonPage>
        </>
    );
};
