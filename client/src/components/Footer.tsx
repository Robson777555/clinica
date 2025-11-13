import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12 sm:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">Clínica Médica</h4>
            <p className="text-gray-400 text-sm">Sua saúde é nossa prioridade. Contamos com os melhores profissionais.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Horário</h4>
            <p className="text-gray-400 text-sm">Seg-Sex: 08:00 - 18:00</p>
            <p className="text-gray-400 text-sm">Sábado: 08:00 - 12:00</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <a href="tel:+551155764897" className="text-gray-400 text-sm hover:text-white transition-colors block">(11) 5576-4897</a>
            <p className="text-gray-400 text-sm">contato@clinica.com</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Localização</h4>
            <p className="text-gray-400 text-sm">Av. Paulista, 1000</p>
            <p className="text-gray-400 text-sm">São Paulo, SP</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Clínica Médica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
