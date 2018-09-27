// LOGIN SCREEN COMPONENT
import React from 'react';

import { View, ScrollView, Text, Button } from 'react-native';

class Login extends React.Component{
  constructor(props) {
    super(props);
    
  }

  render(){
    return (
      <ScrollView>
        <View>
          <Text>
            Login Screen!!!
          </Text>

          <Text>
            Nothing else yet. Thanks
          </Text>
        </View>
      </ScrollView>
    );
  }
  
}

export default Login;