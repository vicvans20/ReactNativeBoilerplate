// LOGIN SCREEN COMPONENT
import React from 'react';

import { View, ScrollView, Text, Button } from 'react-native';

class Register extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <ScrollView>
        <View>
          <Text>
            Register Screen!!!
          </Text>

          <Text>
            Nothing else yet. Thanks
          </Text>

          <Button 
            title="Login Go!"
            color="#333333"
            onPress={ () => this.props.navigation.navigate("Login") } />
        </View>
      </ScrollView>
    );
  }

}

export default Register;