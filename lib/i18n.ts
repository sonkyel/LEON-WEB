export type Lang = "es" | "en";

export const LANGS: Lang[] = ["es", "en"];

// Diccionario bilingüe. `es` y `en` comparten exactamente la misma estructura.
export const dict = {
  es: {
    nav: {
      home: "Inicio",
      catalog: "Catálogo",
      sell: "Vende tu reloj",
      about: "Nosotros",
      contact: "Contacto",
      cta: "Consultar",
    },
    hero: {
      eyebrow: "Relojes de lujo · Autenticidad garantizada",
      title: "Piezas excepcionales para coleccionistas exigentes",
      subtitle:
        "Compra y vende relojes de lujo certificados. Rolex, Patek Philippe, Audemars Piguet, Richard Mille y más, verificados pieza por pieza.",
      ctaPrimary: "Ver catálogo",
      ctaSecondary: "Vender mi reloj",
      scroll: "Desliza",
      drag: "Arrastra para girar",
      claim: "Cada detalle, verificado. Cada pieza, garantizada.",
    },
    trust: {
      eyebrow: "Por qué CL Collectibles",
      items: [
        {
          title: "Autenticidad garantizada",
          desc: "Cada reloj es verificado por especialistas. 100% genuino o te devolvemos tu dinero.",
        },
        {
          title: "Envío asegurado",
          desc: "Empaque discreto y envío con seguro a todo el mundo, con seguimiento en cada etapa.",
        },
        {
          title: "Atención directa",
          desc: "Trato personal por WhatsApp. Resolvemos tus dudas y cerramos la compra a tu ritmo.",
        },
      ],
    },
    brands: {
      eyebrow: "Las casas más codiciadas del mundo",
    },
    featured: {
      eyebrow: "Selección destacada",
      title: "Recién llegados",
      intro:
        "Una curaduría rotativa de las piezas más buscadas, listas para un nuevo dueño.",
      viewAll: "Ver todo el catálogo",
    },
    spotlight: {
      eyebrow: "La pieza del momento",
      lead: "Selección del fundador — la pieza que define el mes en CL Collectibles.",
      cta: "Descubrir esta pieza",
    },
    categories: {
      eyebrow: "Explora por estilo",
      title: "Encuentra tu próxima pieza",
      items: {
        sport: { name: "Deportivos", desc: "Íconos de acero y alto rendimiento." },
        classic: { name: "Clásicos", desc: "Elegancia atemporal para cada día." },
        gold: { name: "Oro", desc: "Lujo en oro amarillo, rosa y blanco." },
        diamond: { name: "Diamantes", desc: "Piezas engastadas, brillo absoluto." },
      },
    },
    process: {
      eyebrow: "Comprar es simple",
      title: "Cómo funciona",
      steps: [
        { title: "Explora", desc: "Recorre el catálogo y elige la pieza que te enamora." },
        { title: "Consulta", desc: "Escríbenos por WhatsApp; te enviamos fotos, videos y detalles reales." },
        { title: "Verifica", desc: "Te entregamos la documentación y la garantía de autenticidad." },
        { title: "Recibe", desc: "Coordinamos el pago seguro y el envío asegurado hasta tu puerta." },
      ],
    },
    sell: {
      eyebrow: "Vende con confianza",
      title: "¿Tienes un reloj que quieras vender?",
      desc: "Pagamos precios justos por relojes de lujo. Valuación rápida, pago inmediato y proceso transparente.",
      cta: "Cotizar mi reloj",
      points: [
        "Valuación sin compromiso",
        "Pago inmediato y seguro",
        "Aceptamos consignación",
      ],
    },
    testimonials: {
      eyebrow: "Clientes que confían",
      title: "Lo que dicen de nosotros",
      items: [
        {
          quote:
            "Compré un Submariner y la experiencia fue impecable. Fotos reales, todo verificado y un trato de primera.",
          name: "Andrés M.",
          role: "Coleccionista",
        },
        {
          quote:
            "Vendí mi Daytona en menos de 48 horas. Pago inmediato y cero complicaciones. Totalmente recomendados.",
          name: "Carla R.",
          role: "Cliente",
        },
        {
          quote:
            "La confianza que transmiten es lo que marca la diferencia. Mi Nautilus llegó perfecto y bien asegurado.",
          name: "Diego F.",
          role: "Coleccionista",
        },
      ],
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Resolvemos tus dudas",
      items: [
        {
          q: "¿Cómo garantizan la autenticidad?",
          a: "Cada reloj pasa por una verificación especializada de movimiento, número de serie y componentes. Entregamos garantía de autenticidad por escrito.",
        },
        {
          q: "¿Cómo realizo la compra?",
          a: "Escríbenos por WhatsApp desde la ficha del reloj. Te enviamos material real, coordinamos el pago seguro y el envío asegurado.",
        },
        {
          q: "¿Hacen envíos internacionales?",
          a: "Sí. Enviamos a todo el mundo con empaque discreto, seguro y seguimiento en cada etapa.",
        },
        {
          q: "¿Puedo vender o dar mi reloj a cuenta?",
          a: "Claro. Valuamos tu pieza sin compromiso y aceptamos parte de pago o consignación.",
        },
      ],
    },
    footer: {
      tagline: "Relojes de lujo certificados para coleccionistas exigentes.",
      explore: "Explorar",
      contact: "Contacto",
      rights: "Todos los derechos reservados.",
      disclaimer:
        "Las marcas mencionadas son propiedad de sus respectivos dueños. CL Collectibles es un revendedor independiente y no está afiliado a dichas marcas.",
    },
    product: {
      ask: "Consultar por WhatsApp",
      askMsg: (model: string) =>
        `Hola CL Collectibles, me interesa el ${model}. ¿Sigue disponible?`,
      price: "Precio",
      onRequest: "Precio a consultar",
      year: "Año",
      ref: "Referencia",
      box: "Caja y papeles",
      condition: "Condición",
      specs: "Especificaciones",
      related: "También te puede interesar",
      back: "Volver al catálogo",
      authBadge: "Autenticidad garantizada",
      notFound: "Reloj no encontrado",
    },
    conditions: {
      new: "Nuevo",
      "like-new": "Como nuevo",
      excellent: "Excelente",
      "very-good": "Muy bueno",
    },
    specLabels: {
      movement: "Movimiento",
      case: "Caja",
      bracelet: "Brazalete",
      dial: "Esfera",
      diameter: "Diámetro",
      papers: "Caja y papeles",
    },
    catalog: {
      title: "Catálogo",
      intro: "Piezas seleccionadas, verificadas y listas para entrega.",
      filterBrand: "Marca",
      filterCategory: "Estilo",
      filterPrice: "Precio máximo",
      all: "Todas",
      allCat: "Todos",
      results: (n: number) => `${n} ${n === 1 ? "reloj" : "relojes"}`,
      empty: "No hay relojes con esos filtros. Prueba ampliar la búsqueda.",
      clear: "Limpiar filtros",
    },
    sellPage: {
      eyebrow: "Vende tu reloj",
      title: "Convierte tu reloj en efectivo, sin complicaciones",
      intro:
        "Compramos y tomamos a cuenta relojes de lujo. Proceso transparente, valuación honesta y pago inmediato.",
      stepsTitle: "El proceso",
      steps: [
        { title: "Envíanos los datos", desc: "Marca, modelo, referencia y fotos por WhatsApp." },
        { title: "Recibe tu valuación", desc: "Te damos una oferta justa basada en el mercado actual." },
        { title: "Cierra el trato", desc: "Acordamos pago inmediato o consignación, como prefieras." },
      ],
      cta: "Cotizar mi reloj por WhatsApp",
      waMsg: "Hola CL Collectibles, quiero vender mi reloj. Les comparto los datos:",
    },
    aboutPage: {
      eyebrow: "Nosotros",
      title: "Pasión por la alta relojería",
      lead: "CL Collectibles nace de la pasión por las piezas que trascienden el tiempo.",
      body1:
        "Somos especialistas en relojes de lujo de segunda mano y nuevos. Curamos cada pieza con criterio de coleccionista: solo entra a nuestro catálogo lo que compraríamos para nosotros mismos.",
      body2:
        "Nuestra prioridad es la confianza. Por eso verificamos cada reloj, mostramos material real y acompañamos a cada cliente de forma personal, desde la primera consulta hasta la entrega.",
      pledgeTitle: "Nuestra promesa de autenticidad",
      pledge:
        "Cada reloj que vendemos es 100% genuino y verificado por especialistas. Entregamos garantía por escrito. Si un reloj no es auténtico, te devolvemos el 100% de tu dinero.",
      stats: [
        { value: "100%", label: "Piezas verificadas" },
        { value: "24/7", label: "Atención por WhatsApp" },
        { value: "Global", label: "Envíos asegurados" },
      ],
    },
    contactPage: {
      eyebrow: "Contacto",
      title: "Hablemos",
      intro:
        "Escríbenos por WhatsApp o Instagram. Respondemos rápido y resolvemos cualquier duda.",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      email: "Correo",
      waMsg: "Hola CL Collectibles, quisiera más información.",
      formName: "Nombre",
      formEmail: "Correo",
      formMessage: "Mensaje",
      formSend: "Enviar por WhatsApp",
      formMsgDefault: "Hola CL Collectibles,",
    },
    common: {
      from: "Desde",
    },
  },

  en: {
    nav: {
      home: "Home",
      catalog: "Catalog",
      sell: "Sell your watch",
      about: "About",
      contact: "Contact",
      cta: "Inquire",
    },
    hero: {
      eyebrow: "Luxury watches · Authenticity guaranteed",
      title: "Exceptional timepieces for discerning collectors",
      subtitle:
        "Buy and sell certified luxury watches. Rolex, Patek Philippe, Audemars Piguet, Richard Mille and more, verified piece by piece.",
      ctaPrimary: "Browse catalog",
      ctaSecondary: "Sell my watch",
      scroll: "Scroll",
      drag: "Drag to rotate",
      claim: "Every detail, verified. Every piece, guaranteed.",
    },
    trust: {
      eyebrow: "Why CL Collectibles",
      items: [
        {
          title: "Authenticity guaranteed",
          desc: "Every watch is verified by specialists. 100% genuine or your money back.",
        },
        {
          title: "Insured shipping",
          desc: "Discreet packaging and fully insured worldwide shipping, tracked every step of the way.",
        },
        {
          title: "Direct service",
          desc: "Personal attention over WhatsApp. We answer your questions and close the deal at your pace.",
        },
      ],
    },
    brands: {
      eyebrow: "The world's most coveted houses",
    },
    featured: {
      eyebrow: "Featured selection",
      title: "New arrivals",
      intro:
        "A rotating curation of the most sought-after pieces, ready for a new owner.",
      viewAll: "View full catalog",
    },
    spotlight: {
      eyebrow: "The piece of the moment",
      lead: "A founder's pick — the watch that defines the month at CL Collectibles.",
      cta: "Discover this piece",
    },
    categories: {
      eyebrow: "Browse by style",
      title: "Find your next piece",
      items: {
        sport: { name: "Sport", desc: "Steel icons built for performance." },
        classic: { name: "Classic", desc: "Timeless elegance for every day." },
        gold: { name: "Gold", desc: "Luxury in yellow, rose and white gold." },
        diamond: { name: "Diamond", desc: "Set pieces, absolute brilliance." },
      },
    },
    process: {
      eyebrow: "Buying is simple",
      title: "How it works",
      steps: [
        { title: "Explore", desc: "Browse the catalog and pick the piece you love." },
        { title: "Inquire", desc: "Message us on WhatsApp; we send real photos, videos and details." },
        { title: "Verify", desc: "We provide documentation and the authenticity guarantee." },
        { title: "Receive", desc: "We arrange secure payment and insured shipping to your door." },
      ],
    },
    sell: {
      eyebrow: "Sell with confidence",
      title: "Have a watch you'd like to sell?",
      desc: "We pay fair prices for luxury watches. Fast valuation, immediate payment and a transparent process.",
      cta: "Get a quote",
      points: [
        "No-obligation valuation",
        "Immediate, secure payment",
        "Consignment available",
      ],
    },
    testimonials: {
      eyebrow: "Trusted by clients",
      title: "What people say",
      items: [
        {
          quote:
            "I bought a Submariner and the experience was flawless. Real photos, everything verified, first-class service.",
          name: "Andrew M.",
          role: "Collector",
        },
        {
          quote:
            "I sold my Daytona in under 48 hours. Immediate payment, zero hassle. Highly recommended.",
          name: "Carla R.",
          role: "Client",
        },
        {
          quote:
            "The trust they convey is what sets them apart. My Nautilus arrived perfect and well insured.",
          name: "Diego F.",
          role: "Collector",
        },
      ],
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "Your questions, answered",
      items: [
        {
          q: "How do you guarantee authenticity?",
          a: "Every watch goes through specialist verification of the movement, serial number and components. We provide a written authenticity guarantee.",
        },
        {
          q: "How do I buy?",
          a: "Message us on WhatsApp from the watch page. We send real material, arrange secure payment and insured shipping.",
        },
        {
          q: "Do you ship internationally?",
          a: "Yes. We ship worldwide with discreet, insured packaging and tracking at every step.",
        },
        {
          q: "Can I sell or trade in my watch?",
          a: "Of course. We value your piece with no obligation and accept trade-ins or consignment.",
        },
      ],
    },
    footer: {
      tagline: "Certified luxury watches for discerning collectors.",
      explore: "Explore",
      contact: "Contact",
      rights: "All rights reserved.",
      disclaimer:
        "Brand names mentioned are the property of their respective owners. CL Collectibles is an independent reseller and is not affiliated with those brands.",
    },
    product: {
      ask: "Inquire on WhatsApp",
      askMsg: (model: string) =>
        `Hi CL Collectibles, I'm interested in the ${model}. Is it still available?`,
      price: "Price",
      onRequest: "Price on request",
      year: "Year",
      ref: "Reference",
      box: "Box & papers",
      condition: "Condition",
      specs: "Specifications",
      related: "You may also like",
      back: "Back to catalog",
      authBadge: "Authenticity guaranteed",
      notFound: "Watch not found",
    },
    conditions: {
      new: "New",
      "like-new": "Like new",
      excellent: "Excellent",
      "very-good": "Very good",
    },
    specLabels: {
      movement: "Movement",
      case: "Case",
      bracelet: "Bracelet",
      dial: "Dial",
      diameter: "Diameter",
      papers: "Box & papers",
    },
    catalog: {
      title: "Catalog",
      intro: "Curated pieces, verified and ready to ship.",
      filterBrand: "Brand",
      filterCategory: "Style",
      filterPrice: "Max price",
      all: "All",
      allCat: "All",
      results: (n: number) => `${n} ${n === 1 ? "watch" : "watches"}`,
      empty: "No watches match those filters. Try widening your search.",
      clear: "Clear filters",
    },
    sellPage: {
      eyebrow: "Sell your watch",
      title: "Turn your watch into cash, hassle-free",
      intro:
        "We buy and trade in luxury watches. Transparent process, honest valuation and immediate payment.",
      stepsTitle: "The process",
      steps: [
        { title: "Send the details", desc: "Brand, model, reference and photos via WhatsApp." },
        { title: "Get your valuation", desc: "We give you a fair offer based on the current market." },
        { title: "Close the deal", desc: "We agree on immediate payment or consignment, your choice." },
      ],
      cta: "Get a quote on WhatsApp",
      waMsg: "Hi CL Collectibles, I'd like to sell my watch. Here are the details:",
    },
    aboutPage: {
      eyebrow: "About",
      title: "A passion for fine watchmaking",
      lead: "CL Collectibles was born from a passion for pieces that transcend time.",
      body1:
        "We specialize in pre-owned and new luxury watches. We curate every piece with a collector's eye: only what we would buy for ourselves makes it into our catalog.",
      body2:
        "Trust is our priority. That's why we verify every watch, show real material and guide each client personally, from the first message to delivery.",
      pledgeTitle: "Our authenticity pledge",
      pledge:
        "Every watch we sell is 100% genuine and verified by specialists. We provide a written guarantee. If a watch isn't authentic, we refund 100% of your money.",
      stats: [
        { value: "100%", label: "Verified pieces" },
        { value: "24/7", label: "WhatsApp support" },
        { value: "Global", label: "Insured shipping" },
      ],
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Let's talk",
      intro:
        "Message us on WhatsApp or Instagram. We respond fast and answer any question.",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      email: "Email",
      waMsg: "Hi CL Collectibles, I'd like more information.",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      formSend: "Send via WhatsApp",
      formMsgDefault: "Hi CL Collectibles,",
    },
    common: {
      from: "From",
    },
  },
} as const;

export type Dict = (typeof dict)["es"];
