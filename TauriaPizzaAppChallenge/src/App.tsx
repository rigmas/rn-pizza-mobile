 import React, { FC } from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { Provider } from 'react-redux';
 import store from './store';
 import RootStackScreen from './routes';

 const App: FC = () => {
   return (
     <Provider store={store}>
       <NavigationContainer>
        <RootStackScreen/>
       </NavigationContainer>
     </Provider>
   )
 }

 
 export default App;
