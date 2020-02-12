import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonListHeader,
  IonItem,
  IonSelect,
  IonSelectOption
} from "@ionic/react";
import firebase from "../database/firebaseConfig";
import Card from '../components/card'

const Tab3: React.FC = () => {
  const [evaluations, setEvaluations] = useState([] as any);

  useEffect(() => {
    firebase
      .firestore()
      .collection("evaluation")
      .onSnapshot(querySnapshot => {
        const evaluationsData = querySnapshot.docs.map(doc => doc.data());
        setEvaluations(evaluationsData);
      });
  }, []);

  useEffect(() => {
    console.log("evaluations", evaluations);
  }, [evaluations]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Woman OnTrack</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonListHeader>Avaliações</IonListHeader>
      <IonSelect>
        <IonItem>
          <IonSelect placeholder="Recomendação">
            <IonSelectOption value="f">Alta</IonSelectOption>
            <IonSelectOption value="m">Baixa</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonSelect>
      <IonContent>
      {evaluations.map((evaluation: any, index:any) => <Card key={index} name={evaluation.company} recomendation={evaluation.recomendation}/>)}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
