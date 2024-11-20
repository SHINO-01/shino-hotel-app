// src/components/BookingCard.tsx

import React, { useState } from 'react';
import { Hotel } from '@/types/hotel';
import Modal from './Modal';

interface BookingCardProps {
  hotel: Hotel;
}

const BookingCard = ({ hotel }: BookingCardProps) => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [guests, setGuests] = useState<number>(1);
  const [isTravelerModalOpen, setTravelerModalOpen] = useState<boolean>(false);

  const handleBooking = () => {
    // Handle booking logic
    alert('Booking functionality not implemented yet.');
  };

  return (
    <aside>
      <h2>{`$150 per night`}</h2>
      <div>
        <label>Start Date</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </div>
      <div>
        <label>End Date</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>
      <div onClick={() => setTravelerModalOpen(true)}>
        <label>Guests</label>
        <input type="number" value={guests} readOnly />
      </div>
      {isTravelerModalOpen && (
        <Modal isOpen={isTravelerModalOpen} onClose={() => setTravelerModalOpen(false)}>
          {/* Traveler modal content */}
          <div>
            <button onClick={() => setGuests((prev) => (prev > 1 ? prev - 1 : prev))}>-</button>
            <span>{guests}</span>
            <button onClick={() => setGuests((prev) => prev + 1)}>+</button>
          </div>
          <button onClick={() => setTravelerModalOpen(false)}>Done</button>
        </Modal>
      )}
      <button onClick={handleBooking}>Book Now</button>
    </aside>
  );
};

export default BookingCard;
