import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Navigation text
      Language: "Language",
      Home: "Home",
      About: "About me",
      Projects: "Projects",
      Skills: "Skills",
      Education: "Education",
      Contact: "Contact",
      Menu: "Navigation",
      //Home section
      Hi: "Hi I'm",
      Developer: "Frontend Developer",
      "Home description":
        "I enjoy seeing how my creations materialize and become tangible experiences. My passion lies in designing aesthetic and functional interfaces that provide a comfortable experience for users.",
      "Alt programming": "Picture from someone programming on a laptop",
      "Contact me": "Contact me",
      // About me section
      "About info 1":
        "Hi I'm Jordan Herrera, an enthusiastic student pursuing a degree in Software Design Engineering, with a previous background as a graduate psychologist.",
      "About info 2":
        " Over a year ago, I discovered my passion for web development, and ever since, I've immersed myself in the world of Frontend development. My focus revolves around merging aesthetics and usability in my projects.",
      Resume: "Resume",
      pdf: "/portfolio/docs/resume-jordan-herrera.pdf",
      // Projects section
      "Tech": "Technologies",
      "Go to web": "Go to website",
      "Arch Studio": "A 4-page website that integrates map APIs using React Leaflet, also featuring form validation. This project was meticulously designed using Tailwind UI to provide an attractive and optimized user experience.",
      "Space Tourism": "4-page website simulating a space tourism platform. Showcases multiple sliders in each section to detail celestial destinations, astronaut equipment, and advanced technologies used in space travel.",
      "Audiophile E-commerce": "An e-commerce website that lets users browse products and categories, preserve cart state across page refreshes, and complete purchases with checkout validation.",
      "Age Calculator": "An app that calculates age in years, months, and days with dynamic updates. Validates input information to ensure accurate birthdates, emphasizing an intuitive and functional experience to precisely determine user's age.",
      "Advice Generator": " An app for quotes that utilizes the Advice Slip API to manage the received advice data. It updates each piece of advice upon clicking a button, which is animated to rotate when pressed.",
      "More Projects": "Explore more projects on ",
      "Photoverse": "Photoverse is a full-stack social network that harnesses the power of Laravel, Tailwind CSS, and Livewire to create a robust and visually appealing platform. Supported by an SQL database.",
      // contact section
      "Lets Work": "Lets work together",
      "Contact Paragraph": "As a frontend developer, I'm excited to collaborate on innovative projects. Do you have a project in mind or any questions? I'd be happy to help! Let's make your idea shine together in the digital world.",
    },
  },
  es: {
    translation: {
      //Texto de navegacion
      Language: "Idioma",
      Home: "Inicio",
      About: "Sobre mí",
      Projects: "Proyectos",
      Skills: "Habilidades",
      Education: "Educación",
      Contact: "Contacto",
      Menu: "Navegación",
      //Seccion principal
      "Contact me": "Contactame",
      Hi: "Hola, soy",
      Developer: "Desarrollador Frontend",
      "Home description":
        "Disfruto ver cómo mis creaciones se materializan y se convierten en experiencias tangibles. Mi pasión radica en diseñar interfaces estéticas y funcionales que proporcionen una experiencia cómoda a los usuarios. ",
      "Alt programming": "Foto de alguien programando en una laptop",
      // Seccion sobre mi
      "About info 1":
        "Hola soy Jordan Herrera, un estudiante entusiasta de Ingeniería en Diseño de Software, con una formación previa como licenciado en Psicología. ",
      "About info 2":
        " Hace más de un año, descubrí mi pasión por el desarrollo web y desde entonces me he sumergido en el mundo del desarrollo Frontend. Mi enfoque se centra en fusionar la estética y la usabilidad en mis proyectos.",
      Resume: "Currículum",
      pdf: "/portfolio/docs/curriculum-jordan-herrera.pdf",
      //Seccion de proyectos
      "Tech": "Tecnologías",
      "Go to web": "Ir a sitio web",
      "Arch Studio": "Un sitio web de 4 páginas que integra APIs de mapas usando React Leaflet, además de contar con validación de formularios. Este proyecto fue diseñado meticulosamente utilizando Tailwind UI para ofrecer una experiencia de usuario atractiva y optimizada.",
      "Space Tourism": "Sitio web de 4 páginas que simula una plataforma de turismo espacial. Destaca múltiples sliders en cada sección para detallar destinos celestiales, equipos de astronautas y tecnologías avanzadas utilizadas en viajes espaciales.",
      "Audiophile E-commerce": "Tienda en linea que permite a los usuarios navegar por productos y categorías, conservar el estado del carrito al actualizar la página, y completar compras tras validar la información en el formulario de pago.",
      "Age Calculator": " Aplicación que calcula la edad en años, meses y días con actualización dinámica. Valida la información de entrada para asegurar fechas de nacimiento correctas, resaltando una experiencia intuitiva y funcional para precisar la edad del usuario de manera exacta.",
      "Advice Generator": "Una aplicación de consejos que utiliza la API de Advice Slip para administrar los datos de consejos recibidos. Actualiza cada consejo al hacer clic en un botón, el cual está animado para girar al presionarlo.",
      "More Projects": "Descubrir más proyectos en ",
      "Photoverse": "Photoverse es una red social full stack que integra la potencia de Laravel, Tailwind CSS y Livewire para forjar una plataforma sólida y estéticamente atractiva. Respaldada por una base de datos SQL.",
      //Seccion de contacto
      "Lets Work": "¡Trabajemos juntos!",
      "Contact Paragraph": "Como desarrollador frontend, estoy emocionado por colaborar en proyectos innovadores. ¿Tienes un proyecto en mente o preguntas? ¡Estaré encantado de ayudar! Hagamos brillar tu idea juntos en el mundo digital.",
      
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Idioma predeterminado
  interpolation: {
    escapeValue: false, // React ya previene de XSS
  },
});

export default i18n;
