import { useState } from "react";
import { Send, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/api/forms";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
}

const ContactModal = ({ isOpen, onClose, serviceTitle }: ContactModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare message with service title if provided
      const fullMessage = serviceTitle
        ? `Serviciu solicitat: ${serviceTitle}\n\n${formData.message}`
        : formData.message;

      await submitContactForm({
        fullName: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: fullMessage,
      });

      toast({
        title: "Mesaj trimis cu succes!",
        description: "Vă voi contacta în cel mai scurt timp posibil pentru a stabili o întâlnire.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      onClose();
    } catch (error) {
      toast({
        title: "Eroare",
        description: "Mesajul nu a putut fi trimis. Vă rugăm încercați din nou.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading">
            Programează o ședință
          </DialogTitle>
          <DialogDescription>
            {serviceTitle
              ? `Completează formularul pentru serviciul: ${serviceTitle}`
              : "Completează formularul și te voi contacta în cel mai scurt timp."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="modal-name">Numele complet <span className="text-red-500">*</span></Label>
            <Input
              id="modal-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Introduceți numele complet"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="modal-email">Email <span className="text-red-500">*</span></Label>
            <Input
              id="modal-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@exemplu.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="modal-phone">Telefon</Label>
            <Input
              id="modal-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+373 ..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="modal-message">Mesaj <span className="text-red-500">*</span></Label>
            <Textarea
              id="modal-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={serviceTitle
                ? `Vreau să programez o ședință pentru ${serviceTitle}. Disponibilitatea mea este...`
                : "Descrieți pe scurt motivul pentru care doriți să programați o ședință..."}
              rows={4}
              required
              className="bg-accent"
            />
          </div>

          <div className="bg-secondary/30 rounded-lg p-3 text-sm text-muted-foreground">
            <p>
              🔒 Informațiile tale sunt confidențiale și vor fi folosite doar pentru a te contacta
              în legătură cu programarea.
            </p>
          </div>

          <div className="flex gap-3 pt-2">
            <Button type="submit" className="flex-1" disabled={isSubmitting}>
              {isSubmitting ? (
                "Se trimite..."
              ) : (
                <>
                  Trimite mesajul
                  <Send className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Anulează
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
