import { ButtonPrimary } from "@/components/ui/ButtonPrimary";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral flex flex-col items-center justify-center text-center px-6 gap-8">
      <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">404</p>
      <h1 className="font-display text-h1 font-medium text-primary">
        Page Not Found
      </h1>
      <div className="w-10 h-px bg-secondary/40" />
      <p className="font-body text-body text-secondary max-w-[45ch]">
        The page you are looking for does not exist.
      </p>
      <ButtonPrimary href="/">Return Home</ButtonPrimary>
    </div>
  );
}
