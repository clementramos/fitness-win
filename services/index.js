import { addDoc, collection, Timestamp } from 'firebase/firestore/lite';
import { firestore } from 'firebaseConfig';

export const sendContactForm = async ({ firstname, phone, message }) => {
    try {
        const ref = collection(firestore, "contact");
        await addDoc(ref, {
            firstname,
            phone,
            message,
            sentAt: Timestamp.now().toDate(),
        });
        return 0;
    } catch (err) {
        console.log(err)
        return -1;
    }
};