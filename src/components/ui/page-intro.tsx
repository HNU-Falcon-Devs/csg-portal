interface PageIntroProps {
  description: string;
  eyebrow?: string;
  title: string;
}

export function PageIntro({ description, eyebrow, title }: PageIntroProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold tracking-wide text-slate-600 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        {title}
      </h1>
      <p className="mt-5 text-lg leading-8 text-slate-700">{description}</p>
    </div>
  );
}
