import React, { useState } from "react";
import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonIcon,
  IonRadioGroup,
  IonRadio,
  IonInput,
  IonListHeader,
  IonTextarea,
  IonButton,
  IonToggle
} from "@ionic/react";
import "./Rating.css";
import { happy, sad, closeCircle } from "ionicons/icons";
import firebase from "../database/firebaseConfig";
import Header from "../components/Header";

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
              placeholder=" Setor"
              data-value={sector}
              onIonChange={e => {
                setSector((e.target as any).value);
              }}
            />
            <IonList>
              <IonRadioGroup className="list">
                <IonListHeader className="list">
                  Plano de Carreira
                </IonListHeader>

                <div className="options">
                  <IonItem>
                    <IonIcon icon={sad} />
                    <IonRadio
                      value="1"
                      color="danger"
                      onIonSelect={e => {
                        console.log((e.target as any).value);
                        setCareerPlan((e.target as any).value);
                      }}
                    />
                  </IonItem>

                  <IonItem>
                    <IonLabel>Neutro</IonLabel>
                    <IonRadio
                      value="2"
                      onIonSelect={e => {
                        console.log((e.target as any).value);
                        setCareerPlan((e.target as any).value);
                      }}
                    />
                  </IonItem>

                  <IonItem>
                    <IonIcon icon={happy} />
                    <IonRadio
                      value="3"
                      color="success"
                      onIonSelect={e => {
                        console.log((e.target as any).value);
                        setCareerPlan((e.target as any).value);
                      }}
                    />
                  </IonItem>

                  <IonItem>
                    <IonIcon icon={closeCircle} />
                    <IonRadio
                      value="0"
                      onIonSelect={e => {
                        console.log((e.target as any).value);
                        setCareerPlan((e.target as any).value);
                      }}
                    />
                  </IonItem>
                </div>
              </IonRadioGroup>
            </IonList>
            <IonRadioGroup className="list">
              <IonListHeader className="list">Maternidade</IonListHeader>

              <div className="options">
                <IonItem>
                  <IonIcon icon={sad} />
                  <IonRadio
                    value="1"
                    color="danger"
                    onIonSelect={e => {
                      console.log((e.target as any).value);
                      setMaternity((e.target as any).value);
                    }}
                  />
                </IonItem>

                <IonItem>
                  <IonLabel>Neutro</IonLabel>
                  <IonRadio
                    value="2"
                    onIonSelect={e => {
                      console.log((e.target as any).value);
                      setMaternity((e.target as any).value);
                    }}
                  />
                </IonItem>

                <IonItem>
                  <IonIcon icon={happy} />
                  <IonRadio
                    value="3"
                    color="success"
                    onIonSelect={e => {
                      console.log((e.target as any).value);
                      setMaternity((e.target as any).value);
                    }}
                  />
                </IonItem>

                <IonItem>
                  <IonIcon icon={closeCircle} />
                  <IonRadio
                    value="0"
                    onIonSelect={e => {
                      console.log((e.target as any).value);
                      setMaternity((e.target as any).value);
                    }}
                  />
                </IonItem>
              </div>
            </IonRadioGroup>
            <IonRadioGroup className="list">
              <IonListHeader className="list">Flexibilidade</IonListHeader>

              <div className="options">
                <IonItem>
                  <IonIcon icon={sad} />
                  <IonRadio
                    value="1"
                    color="danger"
                    onIonSelect={e => {
                      console.log((e.target as any).value);
                      setFlexibility((e.target as any).value);
                    }}
                  />
                </IonItem>

                <IonItem>
                  <IonLabel>Neutro</IonLabel>
                  <IonRadio
                    value="2"
                    onIonSelect={e => {
                      console.log((e.target as any).value);
                      setFlexibility((e.target as any).value);
                    }}
                  />
                </IonItem>

                <IonItem>
                  <IonIcon icon={happy} />
                  <IonRadio
                    value="3"
                    color="success"
                    onIonSelect={e => {
                      console.log((e.target as any).value);
                      setFlexibility((e.target as any).value);
                    }}
                  />
                </IonItem>

                <IonItem>
                  <IonIcon icon={closeCircle} />
                  <IonRadio
                    value="0"
                    onIonSelect={e => {
                      console.log((e.target as any).value);
                      setFlexibility((e.target as any).value);
                    }}
                  />
                </IonItem>
              </div>
            </IonRadioGroup>
            <IonRadioGroup className="list">
              <IonListHeader className="list">Ambiente Inclusivo</IonListHeader>

              <div className="options">
                <IonItem>
                  <IonIcon icon={sad} />
                  <IonRadio
                    value="1"
                    color="danger"
                    onIonSelect={e => {
                      console.log((e.target as any).value);
                      setInclusive((e.target as any).value);
                    }}
                  />
                </IonItem>

                <IonItem>
                  <IonLabel>Neutro</IonLabel>
                  <IonRadio
                    value="2"
                    onIonSelect={e => {
                      console.log((e.target as any).value);
                      setInclusive((e.target as any).value);
                    }}
                  />
                </IonItem>

                <IonItem>
                  <IonIcon icon={happy} />
                  <IonRadio
                    value="3"
                    color="success"
                    onIonSelect={e => {
                      console.log((e.target as any).value);
                      setInclusive((e.target as any).value);
                    }}
                  />
                </IonItem>

                <IonItem>
                  <IonIcon icon={closeCircle} />
                  <IonRadio
                    value="0"
                    onIonSelect={e => {
                      console.log((e.target as any).value);
                      setInclusive((e.target as any).value);
                    }}
                  />
                </IonItem>
              </div>
            </IonRadioGroup>
            <IonRadioGroup className="list">
              <IonListHeader className="list">Representatividade</IonListHeader>

              <div className="options">
                <IonItem>
                  <IonIcon icon={sad} />
                  <IonRadio
                    value="1"
                    color="danger"
                    onIonSelect={e => {
                      console.log((e.target as any).value);
                      setRepresent((e.target as any).value);
                    }}
                  />
                </IonItem>

                <IonItem>
                  <IonLabel>Neutro</IonLabel>
                  <IonRadio
                    value="2"
                    onIonSelect={e => {
                      console.log((e.target as any).value);
                      setRepresent((e.target as any).value);
                    }}
                  />
                </IonItem>

                <IonItem>
                  <IonIcon icon={happy} />
                  <IonRadio
                    value="3"
                    color="success"
                    onIonSelect={e => {
                      console.log((e.target as any).value);
                      setRepresent((e.target as any).value);
                    }}
                  />
                </IonItem>

                <IonItem>
                  <IonIcon icon={closeCircle} />
                  <IonRadio
                    value="0"
                    onIonSelect={e => {
                      console.log((e.target as any).value);
                      setRepresent((e.target as any).value);
                    }}
                  />
                </IonItem>
              </div>
            </IonRadioGroup>
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
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Rating;
