import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonCardSubtitle
} from "@ionic/react";
import { happy, sad } from "ionicons/icons";

export default function RecommendationCard(props) {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{props.name}</IonCardTitle>
        <IonCardSubtitle>
          Recomendação: 
          {props.recomendation ? (
            <IonIcon icon={happy} />
          ) : (
            <IonIcon icon={sad} />
          )}
        </IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
  );
}
