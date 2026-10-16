import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';

import BG from "@/assets/images/bg4.jpg";

import { Link } from 'expo-router';

export default function App() {
	return (
		<View style={styles.container}>
            <ImageBackground
                source={BG}
                style={styles.image}
            >
			<Text style={styles.text}>Welcome to Green Lab</Text>
            <Link href="/explore" style={styles.link} asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Explore more</Text>
                </Pressable>
            </Link>
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
