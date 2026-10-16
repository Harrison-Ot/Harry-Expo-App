import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';



import { Link } from 'expo-router';

export default function App() {
	return (
		<View style={styles.container}>
          <Text style={styles.text}>Welcome to Green Lab CONTACT PAGE</Text>
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
        
    },
    image: {
        
        resizeMode: 'cover',  
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%',  
    },
    link: {
        marginHorizontal: 'auto',
    },
    button: {
        backgroundColor: 'black',
        padding: 10,   
        
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },


});
