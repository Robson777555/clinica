import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-50">
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Sobre Nós</h2>
          <p className="text-lg text-gray-700 mb-8">
            Na Clínica Médica, nossa missão é conectar você aos melhores profissionais da saúde.
            Procure seu médico e ache seu especialista de forma rápida e fácil.
          </p>
          <p className="text-gray-600">
            Oferecemos uma plataforma intuitiva para encontrar médicos qualificados em diversas especialidades,
            garantindo que você tenha acesso aos cuidados que precisa, quando precisa.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
