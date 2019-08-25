import React from 'react';

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import axios from 'axios';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton
} from '@ionic/react';
import './App.css';

class App extends React.Component {
 
  API_KEY = '';
  API_URL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`;

  state = {
    items: []
  }
 
  componentDidMount() {
    axios.get(this.API_URL).then(response => response.data)
    .then((data) => {
      this.setState({ items: data.articles })
      console.log(this.state.items)
     })
  }

  render() {
    return (
       <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>NewsO</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      {this.state.items.map((item) => (
        <IonCard>
        
        <img src={item.urlToImage}/>
                <IonCardHeader>

                <IonCardTitle>
                {item.title}

                </IonCardTitle>
                 <IonCardSubtitle>
                    {item.author}
                  </IonCardSubtitle>

                </IonCardHeader>
                <IonCardContent>
                  <p>{item.content}</p>
                  <IonButton href={item.url}> Read</IonButton>
                </IonCardContent>



        </IonCard>
          ))}
       </IonContent>
    </IonApp>

    );
  }
  }
  export default App;
