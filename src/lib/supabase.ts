import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const SUPABASE_URL = 'https://zkptxeyarlzucwlqpoio.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprcHR4ZXlhcmx6dWN3bHFwb2lvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc5MTEzODYsImV4cCI6MjA4MzQ4NzM4Nn0.S1UaG5hLEdCjtACIFg-XTQX28-r4S1VXYCAXfaqN1nE';

// Create Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Types for bookings
export interface Booking {
    id?: string;
    date: string;          // YYYY-MM-DD format
    time: string;          // HH:mm format
    name: string;
    email: string;
    instagram: string;
    created_at?: string;
}

// Fetch all booked slots
export const getBookedSlots = async (): Promise<string[]> => {
    try {
        const { data, error } = await supabase
            .from('bookings')
            .select('date, time');

        if (error) {
            console.error('Error fetching slots:', error);
            return [];
        }

        // Convert to "YYYY-MM-DD_HH:mm" format
        return (data || []).map(row => `${row.date}_${row.time}`);
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
};

// Create a new booking
export const createBooking = async (booking: Omit<Booking, 'id' | 'created_at'>): Promise<boolean> => {
    try {
        const { error } = await supabase
            .from('bookings')
            .insert([booking]);

        if (error) {
            console.error('Error creating booking:', error);
            return false;
        }

        return true;
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
};

// Check if a slot is already booked
export const isSlotBooked = async (date: string, time: string): Promise<boolean> => {
    try {
        const { data, error } = await supabase
            .from('bookings')
            .select('id')
            .eq('date', date)
            .eq('time', time)
            .limit(1);

        if (error) {
            console.error('Error checking slot:', error);
            return false;
        }

        return (data?.length || 0) > 0;
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
};
