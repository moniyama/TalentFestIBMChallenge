import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonCardSubtitle
} from "@ionic/react";
import { happy, sad } from "ionicons/icons";

type RecommendationCardProps = {
  name: string;
  recomendation: boolean;
};

export const RecommendationCard: React.FC<RecommendationCardProps> = props => (
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
