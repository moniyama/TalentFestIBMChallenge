import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonListHeader
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
      <IonHeader className="header">
        <div className="logo">
          <img src="/assets/logo.jpeg"  alt=""/>
        </div>
      </IonHeader>

      <IonListHeader>
        <IonTitle className="title">Avaliações</IonTitle>
      </IonListHeader>
      
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
