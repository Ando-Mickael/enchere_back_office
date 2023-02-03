import { IonButton, IonCol, IonGrid, IonInput, IonItem, IonLabel, IonRow, IonSelect, IonSelectOption } from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../util/Api";

export const FormUpdate = () => {

    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");

    const [nomProduit, setNomProduit] = useState("");
    const [descriProduit, setDescriProduit] = useState("");
    const [prix, setPrixProduit] = useState("");
    const [duree, setDuree] = useState("");
    const [status, setStatus] = useState("");

    const [encheres, setEnchere] = useState([]);
    const [categories, setCategorie] = useState([]);

    function update(id: any) {
        const url = baseUrl + "/updateEnchere?id=" + id
            + "&duree=" + duree
            + "&prixmin=" + prix
            + "&status=" + status
            + "&nomProduit=" + nomProduit
            + "&descriProduit=" + descriProduit;

        axios.get(url).then((response) => {
            console.log(response);
        });
        window.location.assign("/updateEnchere?id=" + id);
    }

    function deleteEnchere(id: any) {
        const url = baseUrl + "/deleteEnchere/" + id;
        console.log(url);
        axios.get(url).then((response) => {
            console.log(response);
        });
        // window.location.assign("/listeEnchere");
    }

    function getEncheres() {
        const url = baseUrl + "/encheres/" + id;
        axios.get(url).then((response) => {
            setEnchere(response.data);
        })
    }

    function getCategories() {
        const url = baseUrl + "/categories";
        axios.get(url).then((response) => {
            setCategorie(response.data);
        })
    }

    useEffect(() => {
        getEncheres();
        getCategories();
    }, []);

    return (
        <>
            <IonGrid fixed={true}>
                <IonRow>
                    <IonCol></IonCol>

                    <IonCol size="10">
                        {encheres.map((item) => {
                            return (
                                <>
                                    <IonItem>
                                        <IonLabel
                                            position="stacked">ID</IonLabel>
                                        <IonInput
                                            readonly={true}
                                            placeholder={item["id"]} />
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel
                                            position='stacked'>Categorie</IonLabel>
                                        <IonSelect
                                            interface="popover"
                                            placeholder={item["categorie"]["intitule"]}>
                                            {categories.map((categorie) => {
                                                return (
                                                    <IonSelectOption
                                                        value={categorie["id"]}>{categorie["intitule"]}
                                                    </IonSelectOption>
                                                )
                                            })}
                                        </IonSelect>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel
                                            position='stacked'>ID du Proprietaire
                                        </IonLabel>
                                        <IonInput
                                            readonly={true}
                                            placeholder={item["proprietaire"]["id"]} />
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel
                                            position='stacked'>Proprietaire
                                        </IonLabel>
                                        <IonInput
                                            readonly={true}
                                            placeholder={item["proprietaire"]["nom"]} />
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position='stacked'>Nom du Produit</IonLabel>
                                        <IonInput
                                            onIonInput={(e: any) => setNomProduit(e.target.value)}
                                            placeholder={item["nomProduit"]} />
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position='stacked'>Description du Produit</IonLabel>
                                        <IonInput
                                            onIonInput={(e: any) => setDescriProduit(e.target.value)}
                                            placeholder={item["descri"]} />
                                    </IonItem>

                                    <IonItem>
                                        <IonLabel position='stacked'>Prix minimum du produit</IonLabel>
                                        <IonInput
                                            onIonInput={(e: any) => setPrixProduit(e.target.value)}
                                            placeholder={item["prixMin"]} />
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position='stacked'>Date debut</IonLabel>
                                        <IonInput
                                            readonly={true}
                                            placeholder={item["dateDebut"]} />
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position='stacked'>Duree</IonLabel>
                                        <IonInput
                                            placeholder={item["duree"]}
                                            onIonInput={(e: any) => setDuree(e.target.value)}
                                        />
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position='stacked'>Status</IonLabel>
                                        <IonInput
                                            placeholder={item["status"]}
                                            onIonInput={(e: any) => setStatus(e.target.value)}
                                        />
                                    </IonItem>
                                    <IonButton
                                        onClick={() => update(item["id"])}>Modifier</IonButton>
                                    <IonButton
                                        color="danger"
                                        onClick={() => deleteEnchere(item["id"])}>Supprimer</IonButton>
                                </>
                            )
                        })}
                    </IonCol>

                    <IonCol></IonCol>
                </IonRow>
            </IonGrid>
        </>
    );
}