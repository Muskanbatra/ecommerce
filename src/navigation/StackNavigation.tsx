import OTP from '../screens/auth/OTP';
import Login from '../screens/auth/Login';
import Profile from '../screens/auth/Profile';
import Register from '../screens/auth/Register';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/Home';
import Fashion from '../screens/fashion/Fashion';
import FashionShop from '../screens/fashion/FashionShop';

const Stack = createStackNavigator();

function StackNavigation() {
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }} >

            <Stack.Group>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="otp" component={OTP} />
                <Stack.Screen name="register" component={Register} />
                <Stack.Screen name="profile" component={Profile} />
            </Stack.Group>
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="fashion" component={Fashion} />
            <Stack.Screen name="shop_fashion" component={FashionShop} />

        </Stack.Navigator>
    );
}

export default StackNavigation