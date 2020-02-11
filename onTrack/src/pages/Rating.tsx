import React from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonIcon, IonRadioGroup, IonRadio, IonInput, IonListHeader, IonTextarea, IonFabButton, IonButton } from '@ionic/react';
import './Rating.css';
import { happy, sad, closeCircle } from 'ionicons/icons';


// const createEvaluation = () => {
//   const careerPlan = currentTarget
//   const maternity = document.querySelector('input[name=food]:checked').value;
//   const flexibility = document.querySelector('input[name=drinks]:checked').value;
//   const inclusive = document.querySelector('input[name=features]:checked').value;
//   const representativeness = document.querySelector('input[name=genre]:checked').value;
  
//   firebase.firestore().collection('evaluations').add({
//     careerPlan: careerPlan,
//     maternity: maternity,
//     flexibility: flexibility,
//     inclusive: inclusive,
//     representativeness: representativeness,
//     //userId: firebase.auth().currentUser.uid,
//     addedAt: (new Date()).toLocaleString('pt-BR'),
//   })
//     .then(() => {
//       window.location = '#home';
//     });
// }


const Rating: React.FC = () => {
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

            <IonInput placeholder=" Empresa"></IonInput>
            <IonInput placeholder=" Setor"></IonInput>

            <IonRadioGroup>
              <IonListHeader>
                Plano de Carreira
            </IonListHeader>

              <div className="options">
                <IonItem>
                  <IonIcon icon={sad} />
                  <IonRadio  value="1" />
                </IonItem>

                <IonItem>
                  <IonLabel>Neutro</IonLabel>
                  <IonRadio value="2" />
                </IonItem>

                <IonItem>
                  <IonIcon icon={happy} />
                  <IonRadio value="3" />
                </IonItem>

                <IonItem>
                  <IonIcon icon={closeCircle} />
                  <IonRadio value="0" />
                </IonItem>
              </div>
            </IonRadioGroup>
            <IonRadioGroup>
              <IonListHeader>
                Maternidade
            </IonListHeader>

              <div className="options">
                <IonItem>
                  <IonIcon icon={sad} />
                  <IonRadio value="1" />
                </IonItem>

                <IonItem>
                  <IonLabel>Neutro</IonLabel>
                  <IonRadio value="2" />
                </IonItem>

                <IonItem>
                  <IonIcon icon={happy} />
                  <IonRadio value="3" />
                </IonItem>

                <IonItem>
                  <IonIcon icon={closeCircle} />
                  <IonRadio value="0" />
                </IonItem>
              </div>
            </IonRadioGroup>
            <IonRadioGroup>
              <IonListHeader>
                Flexibilidade
            </IonListHeader>

              <div className="options">
                <IonItem>
                  <IonIcon icon={sad} />
                  <IonRadio value="1" />
                </IonItem>

                <IonItem>
                  <IonLabel>Neutro</IonLabel>
                  <IonRadio value="2" />
                </IonItem>

                <IonItem>
                  <IonIcon icon={happy} />
                  <IonRadio value="3" />
                </IonItem>

                <IonItem>
                  <IonIcon icon={closeCircle} />
                  <IonRadio value="0" />
                </IonItem>
              </div>
            </IonRadioGroup>
            <IonRadioGroup>
              <IonListHeader>
                Ambiente Incluisvo
            </IonListHeader>

              <div className="options">
                <IonItem>
                  <IonIcon icon={sad} />
                  <IonRadio value="1" />
                </IonItem>

                <IonItem>
                  <IonLabel>Neutro</IonLabel>
                  <IonRadio value="2" />
                </IonItem>

                <IonItem>
                  <IonIcon icon={happy} />
                  <IonRadio value="3" />
                </IonItem>

                <IonItem>
                  <IonIcon icon={closeCircle} />
                  <IonRadio value="0" />
                </IonItem>
              </div>
            </IonRadioGroup>
            <IonRadioGroup>
              <IonListHeader>
                Representatividade
            </IonListHeader>

              <div className="options">
                <IonItem>
                  <IonIcon icon={sad} />
                  <IonRadio value="1" />
                </IonItem>

                <IonItem>
                  <IonLabel>Neutro</IonLabel>
                  <IonRadio value="2" />
                </IonItem>

                <IonItem>
                  <IonIcon icon={happy} />
                  <IonRadio value="3" />
                </IonItem>

                <IonItem>
                  <IonIcon icon={closeCircle} />
                  <IonRadio value="0" />
                </IonItem>
              </div>
            </IonRadioGroup>
            <IonItem>
                <IonLabel>Você indicaria esta empresa?</IonLabel>
                <IonButton size="small">Sim</IonButton>
                <IonButton size="small">Não</IonButton>
              </IonItem>
            <IonItem>
              <IonTextarea placeholder="Deixe seu comentário aqui"></IonTextarea>
            </IonItem>
            <IonButton expand="block">Enviar Avaliação</IonButton>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Rating;