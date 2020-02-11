import React from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonIcon, IonRadioGroup, IonRadio, IonInput, IonListHeader } from '@ionic/react';
import './Rating.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Woman OnTrack</IonTitle>
        </IonToolbar>
        <IonListHeader>
          <IonLabel>Avalie sua Empresa Aqui</IonLabel>
        </IonListHeader>
      </IonHeader>
      <IonContent>
        <div className="marginHome">
          <IonList>
          <IonInput placeholder=" Nome da Empresa"></IonInput>
          <IonInput placeholder=" Cargo"></IonInput>

          <IonRadioGroup>
            <IonListHeader>
              <IonLabel>
                Maternidade
              </IonLabel>
            </IonListHeader>

            <IonItem>
              <IonIcon name="happy-outline"> blabla</IonIcon>
              <IonRadio value="cord" />
            </IonItem>

            <IonItem>
              <IonLabel>Duesenberg</IonLabel>
              <IonRadio value="duesenberg" />
            </IonItem>

            <IonItem>
              <IonLabel>Cord</IonLabel>
              <IonRadio value="cord" />
            </IonItem>

            <IonItem>
              <IonLabel>Duesenberg</IonLabel>
              <IonRadio value="duesenberg" />
            </IonItem>

        </IonRadioGroup>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;