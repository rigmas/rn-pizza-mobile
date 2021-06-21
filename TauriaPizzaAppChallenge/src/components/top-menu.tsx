import React, { FC } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import styled from "styled-components/native";

import { IconMenu, IconCart, IconBack, IconHome } from '../../public/favicons'
import Constant from '../layouts/constants';
import { normalize } from "../layouts/responsive";
import Theme from '../layouts/theme.style';


const Container = styled.View({
  flex: 0.075, 
  flexDirection: "row",
  borderTopWidth: 0.25, 
  paddingVertical: 15, 
  paddingHorizontal: 20,  
  borderTopColor: '#DADAE5'
})

const TextStore = styled.Text({
  ...Theme.TextButtonDefault,
  color: Constant.COLOR_PURPLE_DEFAULT,
  marginLeft: '27.5%',
  marginRight: '27.5%'
})


const TopMenu: FC = () => {

  return (
    
       <Container>

          <IconBack width={normalize(18)} heigth={normalize(18)}/>
          <TextStore>{Constant.TEXT_STORE}</TextStore>
          <IconHome width={normalize(18)} height={normalize(18)}/>

        </Container>
    
  )
}

export default TopMenu;