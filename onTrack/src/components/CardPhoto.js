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

function PhotoCard(props) {
  return (
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
}
export default PhotoCard