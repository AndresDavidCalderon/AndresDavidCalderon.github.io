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
        'contact.meeting' : 'Schedule a meeting'
    },
    'es':{
        'top.name':"Soy David",
        'top.profession':'Desarrollador front end',
        'top.description':"Ayudo a individuos y pequeños equipos a convertir sus ideas en"+
        " productos funcionales y pulidos",
        'top.fiverr':'en fiverr',
        'top.offer':'Ofrezco',
        'top.devservices':'servicios de desarrollo',
        'top.classes':'clases uno a uno',
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
        'contact.meeting' : 'Agendar una reunión'
    }
}

export function getUI(element){
    const lang=navigator.language
    const simplelang = lang.length > 2 ? lang.substring(0, 2) : lang
    console.log(simplelang)
    return ui[simplelang] ? ui[simplelang][element] : ui['en'][element]
}
