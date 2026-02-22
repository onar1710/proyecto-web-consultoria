import image1 from "../../public/imagenes/image-home/consultaria-2.jpg";
import image2 from "../../public/imagenes/image-home/consultaria-4.jpg";
import image3 from "../../public/linceciado-lergio.jpg";
import image4 from "../../public/imagenes/image-home/consultoria-5.jpg";
import image5 from "../../public/imagenes/image-home/consultoria-7.jpg";
import image6 from "../../public/imagenes/image-home/consultoria-8.jpg";

const servicesData = [
    {
        id: 'servicios-contables',
        icon: <i className="flaticon-corporate"></i>,
        title: 'Servicios Contables',
        description: 'Ofrecemos contabilidad integral y registro financiero preciso para tu empresa',
        number: '1',
        image: image1,
    },
    {
        id: 'auditorias-financieras',
        icon: <i className="flaticon-consultant-services"></i>,
        title: 'Auditorías Financieras',
        description: 'Verificación independiente de estados financieros y controles internos',
        number: '2',
        image: image2,
    },
    {
        id: 'asesoria-tributaria',
        icon: <i className="flaticon-data-science"></i>,
        title: 'Asesoría Tributaria',
        description: 'Optimización fiscal y cumplimiento de obligaciones tributarias',
        number: '3',
        image: image3,
    },
    {
        id: 'consultoria-empresarial',
        icon: <i className="flaticon-analysis"></i>,
        title: 'Consultoría Empresarial',
        description: 'Asesoramiento estratégico para el crecimiento y optimización de tu negocio',
        number: '4',
        image: image4,
    },
    {
        id: 'gestion-nomina',
        icon: <i className="flaticon-creative"></i>,
        title: 'Gestión de Nómina',
        description: 'Procesamiento completo de nóminas y cumplimiento laboral',
        number: '5',
        image: image5,
    },
    {
        id: 'declaraciones-renta',
        icon: <i className="flaticon-resource"></i>,
        title: 'Declaraciones de Renta',
        description: 'Preparación y presentación de declaraciones fiscales anuales',
        number: '6',
        image: image6,
    },
];

export default servicesData;