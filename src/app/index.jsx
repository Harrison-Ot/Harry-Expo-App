import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';



import { Link } from 'expo-router';

export default function App() {
	return (
		<View style={styles.container}>
            <Text style={styles.text1}>Good Morning!</Text>
            
			<Text style={styles.text}>Welcome to Green Lab</Text>
            <Link href="/explore" style={styles.link} asChild>
               
            </Link>
            <TextInput
                placeholder="Enter your name"
                style={styles.input}
            />
             <TextInput
                placeholder="Enter Password"
                style={styles.input}
                secureTextEntry
                
            />
             <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
        flexDirection: 'column',
		justifyContent: 'center',
        backgroundColor: 'white',
	},
    text: {
        color: '#4F7942',
        fontSize: 35,
        marginBottom: 20,
        fontWeight: 'bold',
        interlineHeight: 40,
        underlineColorAndroid: 'green',
        textAlign: 'center',
        
    },
     text1: {
        color: '#50C878',
        fontSize: 35,
        marginBottom: 20,
        fontWeight: 'bold',
        interlineHeight: 40,
        underlineColorAndroid: 'green',
        textAlign: 'center',
        
    },
    input: {
        borderWidth: 2,
        borderColor: 'gray',
        padding: 10,
        marginVertical: 10,
        width: '80%',
        borderRadius: 10,
        backgroundColor: '#f0f0f027',

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
