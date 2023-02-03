import { IonButton, IonCol, IonGrid, IonInput, IonItem, IonLabel, IonRow, useIonAlert } from "@ionic/react";
import axios from "axios";
import { useState } from "react";
import { baseUrl } from "../util/Api";

export const FormLogin = () => {

    const [email, setEmail] = useState("admin@gmail.com");
    const [mdp, setMdp] = useState("admin");
    const [presentAlert] = useIonAlert();

    function login() {
        const url = baseUrl + "/loginAdmin?email=" + email + "&mdp=" + mdp;
        console.log(url);
        axios.get(url).then((response) => {
            if (response.data === "") {
                presentAlert({
                    header: 'Erreur',
                    message: 'Email et/ou mdp incorrecte',
                    buttons: ['OK'],
                });
            } else {
                console.log(response.data);
                localStorage.setItem("admin", JSON.stringify(response.data));
                window.location.assign("/listeEnchere");
            }

        });
    }

    return (
        <>
            <IonGrid fixed={true}>
                <IonRow>
                    <IonCol></IonCol>

                    <IonCol size="7">
                        <IonItem>
                            <IonLabel position='stacked'>Email</IonLabel>
                            <IonInput
                                type="email"
                                placeholder="admin@gmail.com"
                                onIonInput={(e: any) => setEmail(e.target.value)} />
                        </IonItem>
                        <IonItem>
                            <IonLabel position='stacked'>Mot de passe</IonLabel>
                            <IonInput 
                                clearInput={true}
                                // type="password"
                                placeholder="admin"
                                onIonInput={(e: any) => setMdp(e.target.value)} />
                        </IonItem>
                        <IonButton
                            expand="block"
                            onClick={() => login()}
                        >Continue</IonButton>
                    </IonCol>

                    <IonCol></IonCol>
                </IonRow>
            </IonGrid>
        </>
    );
}