import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonListHeader,
  IonCard,
  IonCardHeader,
  IonCardTitle
} from "@ionic/react";
import "./QuemSomos.css";

const QuemSomos: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="header">
        <div className="logo">
          <img src="/assets/logo.jpeg" alt=""/>
        </div>
      </IonHeader>

      <IonListHeader>
        <IonTitle className="title"> Quem Somos </IonTitle>
      </IonListHeader>

      <p className="about">
      Empresa especializada em pesquisa de clima organizacional, direcionado
      para usuárias profissionais afim de coletar informações de interesses
      relacionados a benefícios para mulheres, gerando assim engajamento para
      ingressar e permanecer na empresa. Além disso, trabalhamos em parceria com
      as empresas, com foco em fornecer dados detalhados e fieis, fornecidos
      pelos próprios colaboradores de forma anônima, com pontos específicos de
      melhoria e comparativo desses pontos com outras empresas.
      </p>
      
      <IonContent>
        <IonCard className="photos">
          <IonCardHeader>
            <img src="../assets/Aline.jpeg" alt="" />
            <IonCardTitle>Aline Mussi</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard className="photos">
          <IonCardHeader>
            <img src="../assets/Anannda.jpeg" alt="" />
            <IonCardTitle>Anannda Rios</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard className="photos">
          <IonCardHeader>
            <img src="../assets/Monica.jpeg" alt="" />
            <IonCardTitle>Monica Yamazaki</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard className="photos">
          <IonCardHeader>
            <img src="../assets/Natalia.jpeg" alt="" />
            <IonCardTitle>Natalia Thomé</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard className="photos">
          <IonCardHeader>
            <img src="../assets/Priscila.jpeg" alt="" />
            <IonCardTitle>Priscila Tiemi</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard className="photos">
          <IonCardHeader>
            <img src="../assets/Vanessa.jpeg" alt="" />
            <IonCardTitle>Vanessa Nery</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        
      </IonContent>
    </IonPage>
  );
};

export default QuemSomos;
