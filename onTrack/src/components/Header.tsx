import React from "react";
import { IonHeader, IonTitle, IonListHeader } from "@ionic/react";

type HeaderProps = {
  title: string;
};

export const Header: React.FC<HeaderProps> = (props) => (
  <>
    <IonHeader className="header">
      <div className="logo">
        <img src="/assets/logo.jpeg" alt="" />
      </div>
    </IonHeader>
    <IonListHeader>
      <IonTitle className="title"> {props.title} </IonTitle>
    </IonListHeader>
  </>
);
