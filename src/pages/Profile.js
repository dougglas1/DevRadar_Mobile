import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

function Profile({ navigation }){

    // capturar o parâmetro que está vindo
    const githubUsername = navigation.getParam('github_username');

    //return <View/>
    return <WebView style={{ flex: 1 }} source={{ uri: `https://github.com/${githubUsername}` }}/>
}

export default Profile;