import { RestaurantConfig } from '../types';

export const config: RestaurantConfig = {
  name: "MAC ROYAL",
  tagline: "Eatery & Drink",
  phone: "+90 555 000 0000", // Düzenlenebilir Yer Tutucu
  address: "Örnek Mah. Royal Cad. No:1, Şişli / İstanbul", // Düzenlenebilir Yer Tutucu
  mapsUrl: "https://maps.google.com/?q=istanbul", // Düzenlenebilir Yer Tutucu
  openingHours: [
    { days: "Pazartesi - Perşembe", hours: "09:00 - 23:00" },
    { days: "Cuma - Cumartesi", hours: "09:00 - 00:00" },
    { days: "Pazar", hours: "10:00 - 23:00" }
  ],
  social: {
    instagram: "#", // Düzenlenebilir Yer Tutucu
  },
  reservationUrl: "#", // Rezervasyon linkiniz varsa buraya ekleyin
  aboutText: "MAC ROYAL, modern şehir hayatının dinamizmini şık ve sıcak bir atmosferde sunan yeni nesil bir eatery & drink konseptidir. [BURAYA RESTORAN HAKKINDA GERÇEK BİLGİLER GELECEKTİR. Bu alan restoran sahibinin kendi hikayesini eklemesi için ayrılmıştır.]"
};
