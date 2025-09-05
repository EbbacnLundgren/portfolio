type Props = {
  id?: string;
  title: string;
  caption?: string;
  children: React.ReactNode;
};

export function Section({ id, title, caption, children }: Props) {
  return (
    <section id={id} className="container-prose py-10">
      <header className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900">{title}</h2>
        {caption && <p className="text-slate-600 mt-1">{caption}</p>}
      </header>
      {children}
    </section>
  );
}
