import React, { memo } from "react";

const logoDefinitions = {
  primary: {
    alt: "Logotipo principal de Guerrero de Troya",
    src: "/assets/logo_1.jpeg",
  },
  secondary: {
    alt: "Variación secundaria del logotipo de Guerrero de Troya",
    src: "/assets/logo_2.jpeg",
  },
  symbolic: {
    alt: "Isotipo de Guerrero de Troya",
    src: "/assets/logo_3.jpeg",
  },
};

function BrandLogoComponent({ className, variant }) {
  const definition = logoDefinitions[variant];

  return (
    <img
      src={definition.src}
      alt={definition.alt}
      loading="lazy"
      decoding="async"
      className={className}
    />
  );
}

export const BrandLogo = memo(BrandLogoComponent);

