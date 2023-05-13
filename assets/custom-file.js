
import { getToken } from 'firebase/messaging';
import { messaging, vapIdKey } from './firebase';


const requestPermission = () => {
        console.log('Requesting permission...');
        Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                         console.log('Notification permission granted.');
                }
        }); 
}

requestPermission();
      

getToken(messaging,{ vapidKey: vapIdKey}).then((token) => {
  console.log(`FCM token: ${token}`);
});
