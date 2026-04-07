import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '8976278477';
  const message = 'Hello Mhatre Brothers Sports, I am interested in your products.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" />
    </a>
  );
}
