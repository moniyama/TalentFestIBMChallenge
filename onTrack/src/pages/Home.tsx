import React, { useEffect, useState } from "react";
import { IonContent, IonPage } from "@ionic/react";
import firebase from "../database/firebaseConfig";
import RecommendationCard from "../components/RecommendationCard";
import Header from "../components/Header";

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
      <Header title={"Avaliações"} />
      <IonContent>
        {evaluations.map((evaluation: any, index: any) => (
          <RecommendationCard
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
