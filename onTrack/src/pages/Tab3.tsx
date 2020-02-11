import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonListHeader, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/react';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Woman OnTrack</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonListHeader>Avaliações</IonListHeader>
      <IonList>
      <IonItem>
        <IonSelect placeholder="Recomendação">
          <IonSelectOption value="f">Alta</IonSelectOption>
          <IonSelectOption value="m">Baixa</IonSelectOption>
        </IonSelect>
      </IonItem>
      </IonList>
      <IonContent>
      <IonCard>
      <IonCardHeader>
        <IonCardTitle>Tech Inn</IonCardTitle>
        <IonCardSubtitle>Empresa de Tecnologia</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <p>Maternidade</p>
        <p>Carreira</p>
        <p>Ambiente Inclusivo</p>
      </IonCardContent>
    </IonCard>
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Tech X</IonCardTitle>
        <IonCardSubtitle>Empresa de Tecnologia</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <p>Maternidade</p>
        <p>Carreira</p>
        <p>Ambiente Inclusivo</p>
      </IonCardContent>
    </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
