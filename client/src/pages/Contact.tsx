import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Função auxiliar para abrir WhatsApp (mesma lógica do projeto de carros)
  const openWhatsApp = (phoneNumber: string, message: string) => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    try {
      const newWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
        window.location.href = whatsappUrl;
      }
    } catch (error) {
      window.location.href = whatsappUrl;
    }
  };

  // Validação de email (mesma lógica do projeto de carros)
  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Validação de telefone (mesma lógica do projeto de carros)
  const validatePhone = (phone: string) => {
    const phoneValue = phone.replace(/\D/g, '');
    const validDDDs = ['11','12','13','14','15','16','17','18','19','21','22','24','27','28','31','32','33','34','35','37','38','41','42','43','44','45','46','47','48','49','51','53','54','55','61','62','63','64','65','66','67','68','69','71','73','74','75','77','79','81','82','83','84','85','86','87','88','89','91','92','93','94','95','96','97','98','99'];
    
    if (phoneValue.length === 11) {
      // Celular: 9 dígitos após DDD
      const ddd = phoneValue.substring(0, 2);
      const number = phoneValue.substring(2);
      if (validDDDs.includes(ddd) && number.length === 9 && number.startsWith('9')) {
        return true;
      }
    } else if (phoneValue.length === 10) {
      // Fixo: 8 dígitos após DDD
      const ddd = phoneValue.substring(0, 2);
      const number = phoneValue.substring(2);
      if (validDDDs.includes(ddd) && number.length === 8) {
        return true;
      }
    }
    
    return false;
  };

  // Validação completa do formulário (mesma lógica do projeto de carros)
  const validateForm = () => {
    let isValid = true;
    const errors: {[key: string]: string} = {};

    // Validar campos obrigatórios
    if (!formData.name.trim()) {
      errors.name = 'Este campo é obrigatório';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Este campo é obrigatório';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Por favor, insira um email válido';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Este campo é obrigatório';
      isValid = false;
    } else if (!validatePhone(formData.phone)) {
      errors.phone = 'Por favor, insira um telefone válido (ex: (11) 99999-9999 ou (11) 3333-4444)';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Este campo é obrigatório';
      isValid = false;
    }

    setFieldErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Limpar erros anteriores
    setFieldErrors({});
    
    // Validar formulário antes de enviar (mesma lógica do projeto de carros)
    if (!validateForm()) {
      return; // Impede o envio se houver erros
    }

    // Iniciar processo de envio
    setIsSubmitting(true);

    setTimeout(() => {
      const whatsappNumber = "5551996940564"; // Formato: 55 + DDD + número (mesma lógica do projeto de carros)
      const assunto = "Contato Site - Clínica";
      
      // Formata a mensagem para WhatsApp (mesma estrutura do projeto de carros)
      const whatsappMessage = 
        `🏥 *Nova Mensagem de Contato - Site de Clínica*\n\n` +
        `👤 *Nome:* ${formData.name}\n` +
        `📧 *Email:* ${formData.email}\n` +
        `📞 *Telefone:* ${formData.phone}\n` +
        `📝 *Assunto:* ${assunto}\n\n` +
        `💬 *Mensagem:*\n${formData.message}`;
      
      openWhatsApp(whatsappNumber, whatsappMessage);
      
      alert("✅ Redirecionando para WhatsApp! Complete o envio da mensagem lá.");
      
      // Limpa o formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    
    // Limpar erro do campo quando o usuário começar a digitar
    if (fieldErrors[e.target.name]) {
      setFieldErrors({
        ...fieldErrors,
        [e.target.name]: ''
      });
    }
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
              <Label htmlFor="name">Nome *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Seu nome completo"
                className={fieldErrors.name ? 'border-red-500 focus:border-red-500' : ''}
              />
              {fieldErrors.name && (
                <div className="flex items-center gap-1 text-red-600 text-sm mt-1">
                  <AlertCircle size={16} />
                  <span>{fieldErrors.name}</span>
                </div>
              )}
            </div>
            <div>
              <Label htmlFor="email">E-mail *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu@email.com"
                className={fieldErrors.email ? 'border-red-500 focus:border-red-500' : ''}
              />
              {fieldErrors.email && (
                <div className="flex items-center gap-1 text-red-600 text-sm mt-1">
                  <AlertCircle size={16} />
                  <span>{fieldErrors.email}</span>
                </div>
              )}
            </div>
            <div>
              <Label htmlFor="phone">Telefone *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="(00) 00000-0000"
                className={fieldErrors.phone ? 'border-red-500 focus:border-red-500' : ''}
              />
              {fieldErrors.phone && (
                <div className="flex items-center gap-1 text-red-600 text-sm mt-1">
                  <AlertCircle size={16} />
                  <span>{fieldErrors.phone}</span>
                </div>
              )}
            </div>
            <div>
              <Label htmlFor="message">Mensagem *</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Sua mensagem"
                rows={5}
                className={fieldErrors.message ? 'border-red-500 focus:border-red-500' : ''}
              />
              {fieldErrors.message && (
                <div className="flex items-center gap-1 text-red-600 text-sm mt-1">
                  <AlertCircle size={16} />
                  <span>{fieldErrors.message}</span>
                </div>
              )}
            </div>
            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar via WhatsApp'}
            </Button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
