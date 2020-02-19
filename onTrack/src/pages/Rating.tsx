import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonInput,
  IonTextarea,
  IonButton,
  IonToggle
} from "@ionic/react";
import "./Rating.css";
import firebase from "../database/firebaseConfig";
import Header from "../components/Header";
import RadioGroup from "../components/RadioGroup";

const Rating: React.FC = () => {
  const [company, setCompany] = useState("");
  const [sector, setSector] = useState("");
  const [coment, setComent] = useState("");
  const [careerPlan, setCareerPlan] = useState("");
  const [maternity, setMaternity] = useState("");
  const [flexibility, setFlexibility] = useState("");
  const [inclusive, setInclusive] = useState("");
  const [represent, setRepresent] = useState("");
  const [recomendation, setRecomendation] = useState(false);

  const cleanState = () => {
    setCareerPlan("");
    setMaternity("");
    setFlexibility("");
    setInclusive("");
    setRepresent("");
    setCompany("");
    setSector("");
    setComent("");
    setRecomendation(false);
  };

  const sendRequest = () => {
    if (sector && company) {
      firebase
        .firestore()
        .collection("evaluation")
        .add({
          careerPlan,
          maternity,
          flexibility,
          inclusive,
          represent,
          sector,
          company,
          coment,
          recomendation,
          timeSend: new Date().getTime(),
          status: "evaluation"
        });
      cleanState();
    }
  };

  return (
    <IonPage>
      <Header title={"Avalie sua Empresa Aqui"} />
      <IonContent>
        <div className="marginHome">
          <IonList>
            <IonInput
              name="company"
              type="text"
              placeholder="Empresa"
              data-value={company}
              onIonChange={e => {
                setCompany((e.target as any).value);
              }}
            />
            <IonInput
              name="sector"
              type="text"
              placeholder="Setor"
              data-value={sector}
              onIonChange={e => {
                setSector((e.target as any).value);
              }}
            />
            <IonList>
              <RadioGroup
                title={"Plano de Carreira"}
                setstate={setCareerPlan}
              />
              <RadioGroup title={"Maternidade"} setstate={setMaternity} />
              <RadioGroup
                title={"Ambiente Inclusivo"}
                setstate={setInclusive}
              />
              <RadioGroup title={"Flexibilidade"} setstate={setFlexibility} />
              <RadioGroup
                title={"Representatividade"}
                setstate={setRepresent}
              />

              <IonLabel className="list">
                <IonLabel>Você indicaria esta empresa?</IonLabel>
                <IonLabel>
                  <IonToggle
                    color="success"
                    onIonChange={() => {
                      setRecomendation(!recomendation);
                    }}
                  />
                  <IonLabel>SIM</IonLabel>
                </IonLabel>
              </IonLabel>
              <IonItem>
                <IonTextarea
                  placeholder="Deixe seu comentário aqui"
                  name="coment"
                  data-value={coment}
                  onIonChange={e => {
                    setComent((e.target as any).value);
                  }}
                />
              </IonItem>
              <IonButton expand="block" onClick={sendRequest} type={"submit"}>
                Enviar Avaliação
              </IonButton>
            </IonList>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Rating;
