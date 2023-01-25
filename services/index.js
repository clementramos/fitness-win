import Link from 'next/link';
import { addDoc, collection, Timestamp } from 'firebase/firestore/lite';
import { firestore } from 'firebaseConfig';

export const sendContactForm = async ({ firstname, lastname, email, phone }) => {
    try {
        const ref = collection(firestore, "contact");
        await addDoc(ref, {
            firstname,
            lastname,
            email,
            phone,
            sentAt: Timestamp.now().toDate(),
        });
        return 0;
    } catch (err) {
        console.log(err)
        return -1;
    }
};