
import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    products: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Formular trimis cu succes!",
      description: "Echipa noastră te va contacta în curând pentru a discuta despre oferta personalizată.",
    });
    
    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      products: '',
      message: ''
    });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container-custom py-20">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Solicită o ofertă personalizată</h2>
          <p className="text-body max-w-3xl mx-auto">
            Completează formularul de mai jos și reprezentanții noștri te vor contacta în cel mai scurt timp 
            pentru a-ți oferi informații personalizate despre cerealele și semințele de care ai nevoie.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nume și prenume</Label>
              <Input 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company">Companie</Label>
              <Input 
                id="company" 
                name="company" 
                value={formData.company} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Telefon</Label>
              <Input 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="products">Produse de interes</Label>
              <Input 
                id="products" 
                name="products" 
                value={formData.products} 
                onChange={handleChange} 
                placeholder="Ex: grâu, porumb, secară" 
                required 
              />
            </div>
            
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="message">Mesaj (cantități, specificații, termene)</Label>
              <Textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                rows={4} 
              />
            </div>
            
            <div className="md:col-span-2 flex justify-center mt-4">
              <Button type="submit" className="btn-primary w-full md:w-auto">
                Trimite solicitarea
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
