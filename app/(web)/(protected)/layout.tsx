import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="min-h-full w-full flex flex-col gap-y-10 items-center justify-start bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 to-slate-400 overflow-auto pb-10">
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
