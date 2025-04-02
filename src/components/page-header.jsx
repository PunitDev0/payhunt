
  export default function PageHeader({ title, description }) {
    return (
      <section className="bg-gradient-to-b from-white to-slate-50 pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl text-[#43B2A8] font-bold tracking-tight mb-4">{title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{description}</p>
        </div>
      </section>
    );
  }
  