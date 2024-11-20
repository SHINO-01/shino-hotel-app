// src/utils/api.ts

import axios from 'axios';
import { Hotel } from '@/types/hotel';

export const fetchHotelData = async (hotelId: string): Promise<Hotel | null> => {
  try {
    const response = await axios.get<Hotel>(`http://localhost:3000/api/hotel/${hotelId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching hotel data:', error);
    return null;
  }
};
