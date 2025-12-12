import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, Firestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBaXTPgtOuBq8_6VGSzTk3E7Ha9uMsW94o",
    authDomain: "agendamentos-fooh.firebaseapp.com",
    projectId: "agendamentos-fooh",
    storageBucket: "agendamentos-fooh.firebasestorage.app",
    messagingSenderId: "795574878324",
    appId: "1:795574878324:web:03dee40bdc0d72b5bcd121",
    measurementId: "G-6JZ8RF5TEL"
};

// Lazy initialization
let app: FirebaseApp | null = null;
let db: Firestore | null = null;

const getDb = () => {
    if (!db) {
        app = initializeApp(firebaseConfig);
        db = getFirestore(app);
    }
    return db;
};

// Collection name
const BOOKINGS_COLLECTION = 'bookings';

// Cache for booked slots
let slotsCache: string[] | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 30000; // 30 seconds

// Save a booking
export const saveBooking = async (date: string, time: string, name: string, instagram: string, clinicName?: string) => {
    try {
        const database = getDb();
        await addDoc(collection(database, BOOKINGS_COLLECTION), {
            date,
            time,
            name,
            instagram,
            clinicName: clinicName || '',
            createdAt: new Date().toISOString()
        });
        // Invalid cache after saving
        slotsCache = null;
        return true;
    } catch (error) {
        console.error('Error saving booking:', error);
        return false;
    }
};

// Get all booked slots with caching
export const getBookedSlots = async (): Promise<string[]> => {
    // Return cache if valid
    if (slotsCache && Date.now() - cacheTimestamp < CACHE_DURATION) {
        return slotsCache;
    }

    try {
        const database = getDb();
        const querySnapshot = await getDocs(collection(database, BOOKINGS_COLLECTION));
        const slots: string[] = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            if (data.date && data.time) {
                slots.push(`${data.date}_${data.time}`);
            }
        });
        // Update cache
        slotsCache = slots;
        cacheTimestamp = Date.now();
        return slots;
    } catch (error) {
        console.error('Error getting booked slots:', error);
        return slotsCache || [];
    }
};

// Preload Firebase in background (call this on page load)
export const preloadFirebase = () => {
    setTimeout(() => {
        getDb();
        getBookedSlots();
    }, 2000);
};
