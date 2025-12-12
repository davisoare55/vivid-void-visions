import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBaXTPgtOuBq8_6VGSzTk3E7Ha9uMsW94o",
    authDomain: "agendamentos-fooh.firebaseapp.com",
    projectId: "agendamentos-fooh",
    storageBucket: "agendamentos-fooh.firebasestorage.app",
    messagingSenderId: "795574878324",
    appId: "1:795574878324:web:03dee40bdc0d72b5bcd121",
    measurementId: "G-6JZ8RF5TEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Collection name
const BOOKINGS_COLLECTION = 'bookings';

// Save a booking
export const saveBooking = async (date: string, time: string, name: string, instagram: string, clinicName?: string) => {
    try {
        await addDoc(collection(db, BOOKINGS_COLLECTION), {
            date,
            time,
            name,
            instagram,
            clinicName: clinicName || '',
            createdAt: new Date().toISOString()
        });
        return true;
    } catch (error) {
        console.error('Error saving booking:', error);
        return false;
    }
};

// Get all booked slots
export const getBookedSlots = async (): Promise<string[]> => {
    try {
        const querySnapshot = await getDocs(collection(db, BOOKINGS_COLLECTION));
        const slots: string[] = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            if (data.date && data.time) {
                slots.push(`${data.date}_${data.time}`);
            }
        });
        return slots;
    } catch (error) {
        console.error('Error getting booked slots:', error);
        return [];
    }
};

// Check if a specific slot is booked
export const isSlotBooked = async (date: string, time: string): Promise<boolean> => {
    try {
        const q = query(
            collection(db, BOOKINGS_COLLECTION),
            where("date", "==", date),
            where("time", "==", time)
        );
        const querySnapshot = await getDocs(q);
        return !querySnapshot.empty;
    } catch (error) {
        console.error('Error checking slot:', error);
        return false;
    }
};

export { db };
