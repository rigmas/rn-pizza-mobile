import React, { FC } from "react"
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'

import { IconMenu, IconCart, IconBack, IconHome } from '../../public/favicons'
import Constant from '../layouts/constants';
import { normalize } from "../layouts/responsive";
import Theme from '../layouts/theme.style';
import TopMenu from "../components/top-menu";

const Container = styled.SafeAreaView({
  flex: 1,
})

const Title = styled.Text({
  ...Theme.TitlePre,
  color: Constant.COLOR_PURPLE_DEFAULT
})



const Home: FC = () => {


  return (

      <Container>

        <TopMenu/>    

        <IconMenu/>

        <IconCart/>
        
        <Title>HALAO</Title>
        <Text style={Theme.TitlePre}>HAIHAI</Text>
        <Text style={Theme.TitlePre}>HOME</Text>

      </Container>
  )
}

export default Home;

