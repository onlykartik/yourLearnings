import { db } from '../../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export const addAppointment = async (appointmentData) => {
    await addDoc(collection(db, "appointments"), appointmentData);
};

export const getAppointments = async () => {
    const querySnapshot = await getDocs(collection(db, "appointments"));
    return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    }));
};

export const getUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    if (!querySnapshot.empty) {
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
    } else {
        return []; // Return an empty array if no documents are found
    }
};


export const updateUser = async (appointmentData) => {
    await addDoc(collection(db, "users"), appointmentData);
};


