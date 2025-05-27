import React, { useState, useEffect, useRef } from "react";
import styles from "./ContactForm.module.css";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const allProducts = [
  "Grâu pentru panificație ecologic",
  "Grâu spelta ecologic",
  "Grâu dur ecologic",
  "Semințe de floarea-soarelui ecologice",
  "Miez de floarea-soarelui ecologic",
  "Ulei ecologic presat la rece din semințe de floarea-soarelui",
  "Mazăre ecologică",
  "Rapiță ecologică",
  "Muștar ecologic",
  "Porumb ecologic",
  "Orz ecologic",
];

interface SelectedProduct {
  name: string;
  quantity: string; // cantitate în tone, string ca să poți avea și input gol
}

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  // Produsele selectate cu cantitate
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>(
    []
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Închidem dropdown la click în afară
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Schimbare inputuri formular generale
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Toggle produs selectat
  const toggleProduct = (productName: string) => {
    setSelectedProducts((prev) => {
      const exists = prev.find((p) => p.name === productName);
      if (exists) {
        // Elimină produs
        return prev.filter((p) => p.name !== productName);
      } else {
        // Adaugă produs cu cantitate goală
        return [...prev, { name: productName, quantity: "" }];
      }
    });
  };

  // Schimbă cantitatea pentru un produs selectat
  const changeQuantity = (productName: string, quantity: string) => {
    setSelectedProducts((prev) =>
      prev.map((p) =>
        p.name === productName
          ? { ...p, quantity: quantity.replace(/[^0-9.,]/g, "") }
          : p
      )
    );
  };

  // Submitează formularul
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validare simplă: cel puțin un produs cu cantitate > 0
    if (
      selectedProducts.length === 0 ||
      selectedProducts.some(
        (p) =>
          !p.quantity ||
          p.quantity.trim() === "" ||
          Number(p.quantity.replace(",", ".")) <= 0
      )
    ) {
      toast({
        title: "Te rugăm să selectezi cel puțin un produs cu cantitate validă!",
        variant: "destructive",
      });
      return;
    }

    // Construim lista produse+cantitate ca string
    const productsString = selectedProducts
      .map((p) => `${p.name} (${p.quantity} tone)`)
      .join(", ");

    const payload = {
      ...formData,
      products: productsString,
    };

    console.log("Form submitted:", payload);

    toast({
      title: "Formular trimis cu succes!",
      description:
        "Echipa noastră te va contacta în curând pentru a discuta despre oferta personalizată.",
    });

    // Reset formular si produse
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    });
    setSelectedProducts([]);
    setDropdownOpen(false);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container-custom py-20">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Solicită o ofertă personalizată</h2>
          <p className="text-body max-w-3xl mx-auto">
            Completează formularul de mai jos și reprezentanții noștri te vor
            contacta în cel mai scurt timp pentru a-ți oferi informații
            personalizate despre cerealele și semințele de care ai nevoie.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Nume */}
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

            {/* Companie */}
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

            {/* Email */}
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

            {/* Telefon */}
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

            {/* Produse dropdown */}
            <div className="space-y-2 md:col-span-2" ref={dropdownRef}>
              <Label>Produse de interes</Label>
              {/* Container dropdown */}
              <div
                onClick={() => setDropdownOpen((open) => !open)}
                className="border rounded p-2 cursor-pointer select-none flex flex-wrap gap-2 items-center min-h-[38px] min-w-[200px]"
              >
                {selectedProducts.length === 0 ? (
                  <span className="text-gray-400 select-none">
                    Selectează produsele...
                  </span>
                ) : (
                  selectedProducts.map((product) => (
                    <span
                      key={product.name}
                      className="flex items-center bg-gray-200 rounded px-2 py-1 text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {product.name}
                      <button
                        type="button"
                        onClick={() => toggleProduct(product.name)}
                        className="ml-1 text-gray-600 hover:text-red-600 font-bold"
                        aria-label={`Șterge ${product.name}`}
                      >
                        ×
                      </button>
                    </span>
                  ))
                )}
              </div>

              {/* Dropdown listă produse */}
              {dropdownOpen && (
                <div className="border rounded mt-1 max-h-56 overflow-y-auto bg-white z-10 relative shadow-md p-2">
                  {allProducts.map((productName) => {
                    const checked = selectedProducts.some(
                      (p) => p.name === productName
                    );
                    return (
                      <label
                        key={productName}
                        className="flex items-center space-x-2 cursor-pointer py-1 px-2 rounded hover:bg-gray-100"
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleProduct(productName)}
                        />
                        <span>{productName}</span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Cantități per produs */}
            {selectedProducts.length > 0 && (
              <div className="md:col-span-2 space-y-4">
                <Label>Cantitate (în tone) pentru fiecare produs</Label>
                {selectedProducts.map((product) => (
                  <div key={product.name} className="flex items-center gap-4">
                    <span className="min-w-[250px]">{product.name}</span>
                    <Input
                      type="text"
                      value={product.quantity}
                      onChange={(e) =>
                        changeQuantity(product.name, e.target.value)
                      }
                      placeholder="Cantitate în tone"
                      required
                      className="max-w-xs"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Mesaj */}
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="message">
                Mesaj (cantități, specificații, termene)
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
              />
            </div>

            {/* Submit */}
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
