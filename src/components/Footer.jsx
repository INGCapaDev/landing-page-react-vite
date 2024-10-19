import { SOCIAL_MEDIA_LINKS } from "../constants";

const Footer = () => {
  return (
    <section className="mb-8 mt-20" id="footer">
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className="mt-8 text-center tracking-tighter text-neutral-500">
        &copy; Unico Desarrollos All rights reserved
      </p>
    </section>
  );
};

export default Footer;
