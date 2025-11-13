import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappUrl = `https://wa.me/51996940564?text=Olá,%20me%20chamo%20${encodeURIComponent(name)}.%20${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-50">
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">Contato</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Seu nome"
              />
            </div>
            <div>
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Sua mensagem"
                rows={5}
              />
            </div>
            <Button type="submit" className="w-full">
              Enviar via WhatsApp
            </Button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
