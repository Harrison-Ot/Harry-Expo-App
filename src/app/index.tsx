import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import BG from './assets/images/bg4.jpg';

export default function App() {
	return (
		<View style={styles.container}>
            <ImageBackground
                source={BG}
                style={styles.image}
            >
			<Text style={styles.text}>Welcome to React Native!</Text>
            </ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
        flexDirection: 'column',
		justifyContent: 'center',
	},
    text: {
        color: 'green',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
