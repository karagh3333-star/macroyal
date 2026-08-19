import { config } from '../../data/config';

export function About() {
  return (
    <section id="about" className="py-20 bg-mac-charcoal-dark border-t border-mac-gold/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 mx-auto rounded-full border border-mac-gold flex items-center justify-center text-mac-gold font-serif font-bold text-2xl mb-8">
          M
        </div>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-mac-ivory mb-6 uppercase tracking-wider">
          Hakkımızda
        </h2>
        <div className="text-mac-muted leading-relaxed space-y-4 md:text-lg">
          {config.aboutText.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
