import * as React from 'react';
import * as RN from 'react-native';
import { database } from '../config/fb';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { AntDesign } from '@expo/vector-icons';

export default function Product({
    id,
    emoji,
    name,
    price,
    isSold
}) {


    const onEdit = () => {
        const docRef = doc(database, 'products', id);
        updateDoc(docRef, {
            isSold: true,
        })
    }

    const onDelete = () => {
        const docRef = doc(database, 'products', id);
        deleteDoc(docRef);
    }

    return (
        <RN.View style={styles.productContainer}>
            <RN.View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <RN.Text style={styles.emoji}>{emoji}</RN.Text>
                <AntDesign onPress={onDelete} name="delete" size={24} color="red" />
            </RN.View>
            <RN.Text style={styles.name}>{name}</RN.Text>
            <RN.Text style={styles.price}>${price}</RN.Text>
            {isSold ? (
                <RN.TouchableOpacity style={styles.button, {
                    backgroundColor: 'gray',
                    padding: 10,
                    marginVertical: 6,
                    borderRadius: 8,
                    alignItems: 'center',
                }}>
                    <RN.Text style={styles.buttonText}>Purchase</RN.Text>
                </RN.TouchableOpacity>
            ) : (
                <RN.TouchableOpacity onPress={onEdit} style={styles.button}>
                    <RN.Text style={styles.buttonText}>Purchase</RN.Text>
                </RN.TouchableOpacity>
            )}

        </RN.View>
    )
}

const styles = RN.StyleSheet.create({
    productContainer: {
        padding: 16, backgroundColor: '#fff',
        margin: 16,
        borderRadius: 8,
    },
    emoji: {
        fontSize: 100,
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'gray',
    },
    button: {
        backgroundColor: '#0FA5E9',
        padding: 10,
        marginVertical: 6,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
});