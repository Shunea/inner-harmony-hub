export const ErrorMessage = ({ message }: { message?: string }) => (
  <div className="bg-destructive/10 text-destructive p-4 rounded-lg text-center">
    <p className="font-medium">{message || 'A apărut o eroare. Vă rugăm încercați din nou.'}</p>
  </div>
);
