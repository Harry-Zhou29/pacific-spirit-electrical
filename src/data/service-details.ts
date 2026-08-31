import type { Lang } from './i18n';

type ServiceCopy = {
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  includedTitle: string;
  included: string[];
  approachTitle: string;
  approach: string;
};

export type ServiceDetail = {
  slug: string;
  icon: 'troubleshoot' | 'panel' | 'plug' | 'bulb' | 'clipboard-check';
  contactValue: string;
  copy: Record<Lang, ServiceCopy>;
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'electrical-troubleshooting-repairs', icon: 'troubleshoot', contactValue: 'Electrical Troubleshooting & Repairs',
    copy: {
      en: { title:'Electrical Troubleshooting & Repairs', metaTitle:'Electrical Troubleshooting & Repairs in Vancouver | Pacific Spirit Electrical', description:'Methodical electrical troubleshooting and repair services for Vancouver homes and light commercial properties.', eyebrow:'Troubleshooting & Repairs', intro:'Electrical problems are easier to solve when the symptoms, circuit conditions, and likely causes are checked methodically. We identify practical next steps and explain what the repair involves.', includedTitle:'Common reasons to call', included:['Outlets, switches, or lights not working','Breakers that trip repeatedly','Flickering, intermittent, or unusual electrical behaviour','Targeted repairs after the issue is identified'], approachTitle:'Clear diagnosis before repair', approach:'The work starts with understanding when the problem occurs and what has already been tried. Testing then narrows down the affected circuit or equipment before repair options are discussed.' },
      zh: { title:'电气故障排查与维修', metaTitle:'温哥华电气故障排查与维修 | Pacific Spirit Electrical', description:'为温哥华住宅及轻型商业物业提供有条理的电气故障排查与维修。', eyebrow:'故障排查与维修', intro:'通过了解故障现象、检查线路状态并逐步测试，更准确地确定电气问题及合理的维修方向。', includedTitle:'常见服务情况', included:['插座、开关或灯具无法工作','断路器反复跳闸','灯光闪烁、间歇性或异常电气现象','确定问题后的针对性维修'], approachTitle:'先诊断，再维修', approach:'先了解问题出现的时间和规律，再通过测试缩小故障线路或设备范围，并清楚说明可行的维修方案。' },
      es: { title:'Diagnóstico y reparaciones eléctricas', metaTitle:'Diagnóstico eléctrico en Vancouver | Pacific Spirit Electrical', description:'Diagnóstico metódico y reparaciones eléctricas para viviendas y propiedades comerciales ligeras.', eyebrow:'Diagnóstico y reparación', intro:'Revisamos los síntomas y las condiciones del circuito de forma metódica para identificar el problema y explicar los siguientes pasos.', includedTitle:'Motivos habituales para llamar', included:['Tomas, interruptores o luces que no funcionan','Disyuntores que se disparan repetidamente','Parpadeos o comportamiento eléctrico intermitente','Reparaciones específicas después del diagnóstico'], approachTitle:'Diagnóstico claro antes de reparar', approach:'Primero entendemos cuándo ocurre el problema y después realizamos pruebas para localizar el circuito o equipo afectado.' }
    }
  },
  {
    slug: 'electrical-panel-upgrades', icon: 'panel', contactValue: 'Electrical Panel Upgrades',
    copy: {
      en: { title:'Electrical Panel Upgrades', metaTitle:'Electrical Panel Upgrades in Vancouver | Pacific Spirit Electrical', description:'Electrical panel upgrade planning and installation support for Vancouver homes and changing electrical loads.', eyebrow:'Panel Upgrades', intro:'A panel upgrade should be planned around the existing service, the home’s current loads, and equipment you may add in the future.', includedTitle:'Panel-related work', included:['Existing panel and service review','Planning for changing household electrical loads','Coordination with renovation or electrification work','Permit and inspection considerations'], approachTitle:'Capacity in context', approach:'The panel is one part of the electrical system. Existing circuits, service capacity, planned equipment, and property conditions should be reviewed together before the work is defined.' },
      zh: { title:'住宅配电箱升级', metaTitle:'温哥华住宅配电箱升级 | Pacific Spirit Electrical', description:'根据现有供电、住宅负载及未来设备需求规划温哥华住宅配电箱升级。', eyebrow:'配电箱升级', intro:'配电箱升级需要结合现有供电容量、当前用电负载以及未来可能增加的设备进行规划。', includedTitle:'配电箱相关工作', included:['检查现有配电箱和供电情况','规划不断变化的住宅用电负载','配合装修或住宅电气化项目','考虑 Permit 与 Inspection 要求'], approachTitle:'从整体容量出发', approach:'配电箱只是整个电气系统的一部分。施工范围确定前，应综合评估现有线路、供电容量、计划设备和物业现场情况。' },
      es: { title:'Mejoras de panel eléctrico', metaTitle:'Mejoras de panel eléctrico en Vancouver | Pacific Spirit Electrical', description:'Planificación de mejoras de panel para viviendas de Vancouver y nuevas cargas eléctricas.', eyebrow:'Mejoras de panel', intro:'Una mejora de panel debe considerar el servicio existente, las cargas actuales y los equipos que se añadirán en el futuro.', includedTitle:'Trabajo relacionado con paneles', included:['Revisión del panel y servicio existente','Planificación de nuevas cargas domésticas','Coordinación con renovaciones y electrificación','Consideraciones de permisos e inspección'], approachTitle:'Capacidad dentro del sistema completo', approach:'Revisamos conjuntamente circuitos, capacidad, equipos previstos y condiciones de la propiedad antes de definir el trabajo.' }
    }
  },
  {
    slug: 'ev-charger-installation', icon: 'plug', contactValue: 'EV Charger Installation',
    copy: {
      en: { title:'EV Charger Installation', metaTitle:'EV Charger Installation in Vancouver | Pacific Spirit Electrical', description:'Home EV charger electrical planning and installation in Vancouver and the Lower Mainland.', eyebrow:'Home EV Charging', intro:'A home charging circuit should fit the vehicle, charger, parking location, electrical capacity, and the way the household uses power.', includedTitle:'Installation planning', included:['Charger and parking-location review','Electrical capacity and circuit planning','Dedicated wiring and connection work','Permit and inspection considerations'], approachTitle:'Plan the complete charging path', approach:'We look at the route from the electrical supply to the parking location, along with available capacity and equipment requirements, before recommending the installation approach.' },
      zh: { title:'电动车充电桩安装', metaTitle:'温哥华电动车充电桩安装 | Pacific Spirit Electrical', description:'为温哥华及大温地区住宅提供 EV 充电桩电路规划与安装。', eyebrow:'家用 EV 充电', intro:'家用充电电路需要结合车辆、充电桩、停车位置、现有电气容量及家庭用电方式进行规划。', includedTitle:'安装规划内容', included:['确认充电桩和停车位置','评估电气容量与专用线路','完成布线和设备连接','考虑 Permit 与 Inspection 要求'], approachTitle:'规划完整充电线路', approach:'先评估从电源到停车位置的线路路径、可用容量及设备要求，再确定合适的安装方式。' },
      es: { title:'Instalación de cargadores EV', metaTitle:'Instalación de cargadores EV en Vancouver | Pacific Spirit Electrical', description:'Planificación e instalación eléctrica de cargadores domésticos EV en Vancouver y Lower Mainland.', eyebrow:'Carga doméstica EV', intro:'El circuito debe adaptarse al vehículo, cargador, estacionamiento, capacidad eléctrica y uso energético del hogar.', includedTitle:'Planificación de la instalación', included:['Revisión del cargador y estacionamiento','Evaluación de capacidad y circuito','Cableado dedicado y conexión','Permisos e inspección'], approachTitle:'Planificar toda la ruta', approach:'Revisamos el recorrido desde el suministro hasta el estacionamiento y los requisitos del equipo antes de recomendar la instalación.' }
    }
  },
  {
    slug: 'lighting-installation', icon: 'bulb', contactValue: 'Lighting Installation',
    copy: {
      en: { title:'Lighting Installation', metaTitle:'Lighting Installation in Vancouver | Pacific Spirit Electrical', description:'Residential and light commercial lighting installation and control upgrades in Vancouver.', eyebrow:'Lighting & Controls', intro:'Good lighting work considers the fixture, switching or dimming, the existing wiring, and how the space is used.', includedTitle:'Lighting work', included:['Fixture replacement and new installations','Switch and compatible dimmer upgrades','Bathroom, kitchen, and general room lighting','Light commercial lighting improvements'], approachTitle:'Function, comfort, and compatibility', approach:'Fixtures and controls are reviewed together so the completed installation works reliably and provides the level of control the space needs.' },
      zh: { title:'照明安装与控制升级', metaTitle:'温哥华照明安装 | Pacific Spirit Electrical', description:'温哥华住宅及轻型商业灯具安装、开关和调光控制升级。', eyebrow:'照明与控制', intro:'合适的照明工程需要综合考虑灯具、开关或调光控制、现有线路以及空间的实际使用方式。', includedTitle:'照明相关工作', included:['更换灯具及新增照明安装','开关与兼容调光器升级','浴室、厨房及一般房间照明','轻型商业照明改善'], approachTitle:'兼顾功能、舒适与兼容性', approach:'统一评估灯具与控制方式，确保安装可靠，并提供适合空间需求的照明控制。' },
      es: { title:'Instalación de iluminación', metaTitle:'Instalación de iluminación en Vancouver | Pacific Spirit Electrical', description:'Instalación de iluminación y mejoras de control para viviendas y comercios ligeros en Vancouver.', eyebrow:'Iluminación y controles', intro:'Un buen proyecto considera la luminaria, interruptores o reguladores, cableado existente y uso del espacio.', includedTitle:'Trabajo de iluminación', included:['Sustitución e instalación de luminarias','Interruptores y reguladores compatibles','Iluminación de baños, cocinas y habitaciones','Mejoras de iluminación comercial ligera'], approachTitle:'Función, comodidad y compatibilidad', approach:'Revisamos luminarias y controles conjuntamente para lograr una instalación fiable y adecuada al espacio.' }
    }
  },
  {
    slug: 'commercial-electrical-maintenance', icon: 'clipboard-check', contactValue: 'Other electrical work',
    copy: {
      en: { title:'Commercial Electrical Maintenance', metaTitle:'Commercial Electrical Maintenance in Vancouver | Pacific Spirit Electrical', description:'Practical electrical maintenance, troubleshooting, lighting, and small upgrade support for light commercial properties.', eyebrow:'Light Commercial', intro:'Ongoing electrical maintenance helps property operators address faults, worn equipment, lighting issues, and small upgrades before they become larger disruptions.', includedTitle:'Maintenance support', included:['Electrical troubleshooting and targeted repairs','Lighting and control maintenance','Small equipment and circuit upgrades','Clear documentation of recommended next steps'], approachTitle:'Practical support for occupied properties', approach:'Work is planned around the property’s operating needs, access conditions, and priorities, with clear communication about findings and follow-up work.' },
      zh: { title:'商业电气维护', metaTitle:'温哥华商业电气维护 | Pacific Spirit Electrical', description:'为温哥华轻型商业物业提供电气维护、故障排查、照明维修及小型升级支持。', eyebrow:'轻型商业电气', intro:'持续的电气维护有助于物业及时处理故障、老化设备、照明问题和小型升级，减少更大的运营影响。', includedTitle:'维护支持内容', included:['电气故障排查和针对性维修','照明及控制设备维护','小型设备和线路升级','清楚记录建议的后续工作'], approachTitle:'适合在用物业的实用支持', approach:'结合物业运营需求、现场通行条件和工作优先级安排施工，并清楚说明检查结果及后续建议。' },
      es: { title:'Mantenimiento eléctrico comercial', metaTitle:'Mantenimiento eléctrico comercial en Vancouver | Pacific Spirit Electrical', description:'Mantenimiento, diagnóstico, iluminación y pequeñas mejoras para propiedades comerciales ligeras.', eyebrow:'Comercial ligero', intro:'El mantenimiento continuo permite resolver fallos, equipos desgastados, iluminación y pequeñas mejoras antes de que causen más interrupciones.', includedTitle:'Apoyo de mantenimiento', included:['Diagnóstico y reparaciones específicas','Mantenimiento de iluminación y controles','Pequeñas mejoras de equipos y circuitos','Próximos pasos claramente documentados'], approachTitle:'Apoyo práctico para propiedades ocupadas', approach:'Planificamos el trabajo según las operaciones, acceso y prioridades de la propiedad, con comunicación clara sobre hallazgos y seguimiento.' }
    }
  }
];

export const serviceSlugs = serviceDetails.map((service) => service.slug);
export function getServiceDetail(slug: string) { return serviceDetails.find((service) => service.slug === slug); }
