import React, { useState, useMemo } from 'react';
import { Search, MapPin, Phone, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  image: string;
  phone: string;
  email: string;
  crm: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Carlos Silva',
    specialty: 'Cardiologia',
    image: '/doctor-1.jpg',
    phone: '(11) 98765-4321',
    email: 'carlos.silva@clinica.com',
    crm: 'CRM-RJ 987654'
  },
  {
    id: 2,
    name: 'Dra. Marina Santos',
    specialty: 'Pediatria',
    image: '/doctor-2.jpg',
    phone: '(11) 98765-4322',
    email: 'marina.santos@clinica.com',
    crm: 'CRM-MG 045678'
  },
  {
    id: 3,
    name: 'Dr. Roberto Costa',
    specialty: 'Ortopedia',
    image: '/doctor-3.jpg',
    phone: '(11) 98765-4323',
    email: 'roberto.costa@clinica.com',
    crm: 'CRM-BA 210987'
  },
  {
    id: 4,
    name: 'Dra. Fernanda Oliveira',
    specialty: 'Dermatologia',
    image: '/doctor-4.jpg',
    phone: '(11) 98765-4324',
    email: 'fernanda.oliveira@clinica.com',
    crm: 'CRM-PR 334455'
  },
  {
    id: 5,
    name: 'Dr. André Martins',
    specialty: 'Neurologia',
    image: '/doctor-5.jpg',
    phone: '(11) 98765-4325',
    email: 'andre.martins@clinica.com',
    crm: 'CRM-RS 556677'
  },
  {
    id: 6,
    name: 'Dra. Patricia Alves',
    specialty: 'Ginecologia',
    image: '/doctor-6.jpg',
    phone: '(11) 98765-4326',
    email: 'patricia.alves@clinica.com',
    crm: 'CRM-PE 778899'
  },
  {
    id: 7,
    name: 'Dr. Felipe Rocha',
    specialty: 'Gastroenterologia',
    image: '/doctor-7.jpg',
    phone: '(11) 98765-4327',
    email: 'felipe.rocha@clinica.com',
    crm: 'CRM-CE 667788'
  },
  {
    id: 8,
    name: 'Dra. Juliana Ribeiro',
    specialty: 'Oftalmologia',
    image: '/doctor-8.jpg',
    phone: '(11) 98765-4328',
    email: 'juliana.ribeiro@clinica.com',
    crm: 'CRM-PA 112233'
  },
  {
    id: 9,
    name: 'Dr. Marcelo Gomes',
    specialty: 'Otorrinolaringologia',
    image: '/doctor-9.jpg',
    phone: '(11) 98765-4329',
    email: 'marcelo.gomes@clinica.com',
    crm: 'CRM-SC 223344'
  },
  {
    id: 10,
    name: 'Dra. Beatriz Ferreira',
    specialty: 'Psiquiatria',
    image: '/doctor-10.jpg',
    phone: '(11) 98765-4330',
    email: 'beatriz.ferreira@clinica.com',
    crm: 'CRM-DF 334566'
  },
  {
    id: 11,
    name: 'Dr. Lucas Pereira',
    specialty: 'Urologia',
    image: '/doctor-11.jpg',
    phone: '(11) 98765-4331',
    email: 'lucas.pereira@clinica.com',
    crm: 'CRM-ES 445577'
  },
  {
    id: 12,
    name: 'Dra. Camila Mendes',
    specialty: 'Endocrinologia',
    image: '/doctor-12.jpg',
    phone: '(11) 98765-4332',
    email: 'camila.mendes@clinica.com',
    crm: 'CRM-SP 563412'
  }
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const specialties = Array.from(new Set(doctors.map(d => d.specialty))).sort();

  const filteredDoctors = useMemo(() => {
    return doctors.filter(doctor => {
      const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSpecialty = !selectedSpecialty || doctor.specialty === selectedSpecialty;
      return matchesSearch && matchesSpecialty;
    });
  }, [searchTerm, selectedSpecialty]);

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-50">
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Search Section */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">Encontre seu Médico</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {/* Search by Name */}
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por nome do médico..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter by Specialty */}
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Todas as especialidades</option>
              {specialties.map(specialty => (
                <option key={specialty} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
          </div>

          {/* Results Count */}
          <p className="text-sm text-gray-600">
            {filteredDoctors.length} {filteredDoctors.length === 1 ? 'médico encontrado' : 'médicos encontrados'}
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map(doctor => (
              <div
                key={doctor.id}
                onClick={() => setSelectedDoctor(doctor)}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  loading="lazy"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                  <p className="text-sm text-blue-600 font-medium mb-3">{doctor.specialty}</p>
                  <p className="text-xs text-gray-500 mb-3">{doctor.crm}</p>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600 text-lg">Nenhum médico encontrado com os critérios selecionados.</p>
            </div>
          )}
        </div>
      </main>

      {/* Doctor Detail Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full max-h-96 overflow-y-auto">
            <div className="sticky top-0 flex justify-between items-center p-6 border-b bg-white">
              <h3 className="text-xl font-bold text-gray-900">Detalhes do Médico</h3>
              <button
                onClick={() => setSelectedDoctor(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <img
                src={selectedDoctor.image}
                alt={selectedDoctor.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-bold text-gray-900 mb-2">{selectedDoctor.name}</h4>
              <p className="text-blue-600 font-medium mb-4">{selectedDoctor.specialty}</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600">Telefone</p>
                    <p className="text-gray-900 font-medium">{selectedDoctor.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="text-gray-900 font-medium text-sm break-all">{selectedDoctor.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600">Registro Profissional</p>
                    <p className="text-gray-900 font-medium">{selectedDoctor.crm}</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedDoctor(null)}
                className="w-full mt-6 bg-gray-200 text-gray-900 py-2 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
