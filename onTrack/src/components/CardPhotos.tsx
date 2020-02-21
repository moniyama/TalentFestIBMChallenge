import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonRow,
  IonCol,
  IonCardTitle,
  IonIcon,
  IonItem
} from "@ionic/react";
import { logoGithub } from "ionicons/icons";

type CardPhotoProps = {
  name: string;
  surname: string;
  githubLink: string;
};

export const CardPhoto: React.FC<CardPhotoProps> = props => (
  <IonCard className="card">
    <IonCardHeader>
      <img className="photo" src={"../assets/" + props.name + ".jpeg"} alt="" />
      <IonCardTitle>
        <IonRow>
          <IonCol className="ion-align-items-center">
            {props.name} {props.surname}
          </IonCol>
          <IonItem detail={false} lines="none" href={props.githubLink}>
            <IonCol className="ion-align-items-center">
              <IonIcon icon={logoGithub} />
            </IonCol>
          </IonItem>
        </IonRow>
      </IonCardTitle>
    </IonCardHeader>
  </IonCard>
);
