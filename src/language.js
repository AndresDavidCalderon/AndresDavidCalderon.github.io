export const ui={
    'en':{
        'top.name':"I'm David",
        'top.profession':'Front end developer',
        'top.description':"I help individuals and small teams to turn their ideas into"+
        "functional, polished products",
        'top.fiverr':'on fiverr',
        'top.offer':'I offer',
        'top.devservices':'development services',
        'top.classes':'one on one classes',
        'and':'and',
        'contents.foliotitle':'What I have done',
        'contents.games': 'Games',
        'contents.apps': 'Apps',
        'contents.prototypes': 'Prototypes',
        'contents.play': 'Play',
        'contents.jam' : 'See game jam page',
        'contents.source':'See source',
        'contents.website': 'See website',
        'contents.desktop': 'Get for desktop',
        'contents.itch':'See on itch.io',
        'contact.title':'Get in touch',
        'contact.email': 'Send me an email',
        'contact.fiverr': 'Hire me on fiverr',
        'contact.whatsapp': 'Chat on WhatsApp',
        'contact.meeting' : 'Schedule a meeting',
        'contents.iqlab.desc' : 'An app to develop your abstract reasoning skills',
        'contents.smartnotes.desc' : 'A notes app with support for formatting and images',
        'contents.integralformulas.desc' : 'A watchface that helps you study for calculus, avalible for wear OS, formerly android wear.',
        'contents.pixelliquid.desc':'Liquid simulation with solute',
        'contents.exploragrafos.desc':'A tool for showing properties of undirected graphs',
        'contents.randamatch.desc':'A prototype for chunk-based 3D procedural generation.',
        'links.whatsapp':'https://wa.me/573155193851?text=Hello%2C%20I%27m%20interested%20in%20your%20development%20services%20or%20classes.'
    },
    'es':{
        'top.name':"Soy David",
        'top.profession':'Desarrollador front end',
        'top.description':"Ayudo a individuos y pequeños equipos a convertir sus ideas en"+
        " productos funcionales y pulidos",
        'top.fiverr':'en fiverr',
        'top.offer':'Ofrezco',
        'top.devservices':'servicios de desarrollo',
        'top.classes':'clases personalizadas',
        'and':'y',
        'contents.foliotitle':'Lo que he hecho',
        'contents.games': 'Juegos',
        'contents.apps': 'Aplicaciones',
        'contents.prototypes': 'Prototipos',
        'contents.play': 'Jugar',
        'contents.jam' : 'Ver página de game jam',
        'contents.source':'Ver código fuente',
        'contents.website': 'Ver sitio web',
        'contents.desktop': 'Descargar para escritorio',
        'contents.itch':'Ver en itch.io',
        'contact.title':'Ponte en contacto',
        'contact.email': 'Envíame un correo',
        'contact.fiverr': 'Contrátame en fiverr',
        'contact.whatsapp': 'Chatea en WhatsApp',
        'contact.meeting' : 'Agendar una reunión',
        'contents.iqlab.desc' : 'Una aplicación para desarrollar tus habilidades de razonamiento abstracto',
        'contents.smartnotes.desc' : 'Una aplicación de notas con soporte para formato e imágenes',
        'contents.integralformulas.desc' : 'Una carátula de reloj que te ayuda a estudiar para cálculo, disponible para wear OS, anteriormente android wear.',
        'contents.pixelliquid.desc':'Simulación de líquidos con soluto',
        'contents.exploragrafos.desc':'Una herramienta para mostrar propiedades de grafos no dirigidos',
        'contents.randamatch.desc':'Un prototipo para generación procedural 3D basada en chunks.',
        'links.whatsapp':'https://wa.me/573155193851?text=Hola%2C%20estoy%20interesad%40%20en%20tus%20servicios%20de%20desarrollo%20o%20clases'
    }
}

export function getUI(element){
    const lang=navigator.language
    const simplelang = lang.length > 2 ? lang.substring(0, 2) : lang
    return ui[simplelang] ? ui[simplelang][element] : ui['en'][element]
}
