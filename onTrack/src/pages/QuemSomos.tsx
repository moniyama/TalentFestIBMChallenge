import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import "./QuemSomos.css";
import Header from "../components/Header";
import PhotoCard from "../components/CardPhoto";

const QuemSomos: React.FC = () => {
  return (
    <IonPage>
      <Header title={"Quem Somos"} />
      <IonContent>
        <section className="about">
          Empresa especializada em pesquisa de clima organizacional, direcionado
          para usuárias profissionais afim de coletar informações de interesses
          relacionados a benefícios para mulheres, gerando assim engajamento
          para ingressar e permanecer na empresa. Além disso, trabalhamos em
          parceria com as empresas, com foco em fornecer dados detalhados e
          fieis, fornecidos pelos próprios colaboradores de forma anônima, com
          pontos específicos de melhoria e comparativo desses pontos com outras
          empresas.
        </section>
        <PhotoCard
          name={"Aline"}
          surname={"Mussi"}
          githubLink={"https://github.com/AlineMussi"}
        />
        <PhotoCard
          name={"Anannda"}
          surname={"Rios"}
          githubLink={"https://github.com/ananndarios"}
        />
        <PhotoCard
          name={"Monica"}
          surname={"Yamazaki"}
          githubLink={"https://github.com/moniyama"}
        />
        <PhotoCard
          name={"Natalia"}
          surname={"Thomé"}
          githubLink={"https://github.com/NatThome"}
        />
        <PhotoCard
          name={"Priscila"}
          surname={"Tiemi"}
          githubLink={"https://github.com/tiemimaeda"}
        />
        <PhotoCard
          name={"Vanessa"}
          surname={"Nery"}
          githubLink={"https://github.com/VanesNery"}
        />
      </IonContent>
    </IonPage>
  );
};

export default QuemSomos;
