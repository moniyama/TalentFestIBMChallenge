import React from "react";
import {
  IonRadioGroup,
  IonListHeader,
  IonItem,
  IonIcon,
  IonRadio,
  IonLabel
} from "@ionic/react";
import { happy, sad, closeCircle } from "ionicons/icons";

export default function RadioGroup(props) {
  return (
    <IonRadioGroup className="list">
      <IonListHeader className="list">{props.title}</IonListHeader>
      <div className="options">
        <IonItem>
          <IonIcon icon={closeCircle} />
          <IonRadio
            value="0"
            color="danger"
            onIonSelect={e => {
              props.setstate(e.target.value);
            }}
          />
        </IonItem>
        <IonItem>
          <IonIcon icon={sad} />
          <IonRadio
            value="1"
            color="danger"
            onIonSelect={e => {
              props.setstate(e.target.value);
            }}
          />
        </IonItem>
        <IonItem>
          <IonLabel>Neutro</IonLabel>
          <IonRadio
            value="2"
            onIonSelect={e => {
              props.setstate(e.target.value);
            }}
          />
        </IonItem>
        <IonItem>
          <IonIcon icon={happy} />
          <IonRadio
            value="3"
            color="success"
            onIonSelect={e => {
              props.setstate(e.target.value);
            }}
          />
        </IonItem>
      </div>
    </IonRadioGroup>
  );
}
