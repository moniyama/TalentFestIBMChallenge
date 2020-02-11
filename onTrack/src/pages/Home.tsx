import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonListHeader,
} from "@ionic/react";
import firebase from "../database/firebaseConfig";
import Card from "../components/card";

const Home: React.FC = () => {
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

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Woman OnTrack</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonListHeader>Avaliações</IonListHeader>
      <IonContent>
        {evaluations.map((evaluation: any, index: any) => (
          <Card
            key={index}
            name={evaluation.company}
            recomendation={evaluation.recomendation}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Home;
