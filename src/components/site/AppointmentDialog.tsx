import { useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

const services = [
  "General Dentistry",
  "Root Canal Treatment",
  "Teeth Cleaning & Whitening",
  "Braces / Orthodontics",
  "Dental Implants",
  "Cosmetic Dentistry",
  "Tooth Extraction",
  "Pediatric Dentistry",
  "Emergency Dental Care",
];

export function AppointmentDialog({ trigger }: { trigger: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDone(true);
    toast.success("Appointment request received", {
      description: "We'll call you shortly to confirm.",
    });
    setTimeout(() => {
      setOpen(false);
      setDone(false);
      (e.target as HTMLFormElement).reset();
    }, 1800);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Book an Appointment</DialogTitle>
          <DialogDescription>We'll get back to you to confirm your slot.</DialogDescription>
        </DialogHeader>
        {done ? (
          <div className="flex flex-col items-center gap-3 py-8 text-center">
            <CheckCircle2 className="h-12 w-12 text-primary" />
            <p className="font-medium">Thank you! Your request has been received.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ap-name">Full name</Label>
              <Input id="ap-name" required maxLength={80} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ap-phone">Phone</Label>
              <Input id="ap-phone" type="tel" required pattern="[0-9+\s\-]{7,20}" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ap-service">Service</Label>
              <Select required>
                <SelectTrigger id="ap-service"><SelectValue placeholder="Select service" /></SelectTrigger>
                <SelectContent>
                  {services.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="ap-date">Preferred date & time</Label>
              <Input id="ap-date" type="datetime-local" required />
            </div>
            <Button type="submit" className="w-full" size="lg">Request Appointment</Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
