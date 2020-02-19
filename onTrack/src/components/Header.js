import React from "react";
import { IonHeader, IonTitle, IonListHeader } from "@ionic/react";

export default function Header(props) {
  return (
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
}
