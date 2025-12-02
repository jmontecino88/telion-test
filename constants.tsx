import { 
  Activity, 
  BarChart3, 
  Cpu, 
  Database, 
  Eye, 
  Globe2, 
  Layers, 
  LayoutDashboard, 
  LineChart, 
  Lock, 
  Network, 
  ShieldAlert, 
  Signal, 
  Wrench, 
  Zap 
} from 'lucide-react';
import { FeatureItem, ProcessStep, UseCase } from './types';

// Hero Section
export const HERO_CONTENT = {
  headline: "Convierta sus Datos Industriales en Dominio Operacional",
  subheadline: "Telion integra telemetría, automatización e inteligencia de datos para reducir costos y eliminar la incertidumbre en entornos críticos.",
  ctaPrimary: "Hablemos de su Desafío",
  ctaSecondary: "Nuestras Soluciones"
};

// Problems Section
export const PROBLEMS: FeatureItem[] = [
  {
    title: "Ceguera Operacional",
    description: "Decisiones críticas tomadas basadas en intuición o datos de ayer, no en la realidad del minuto a minuto.",
    icon: Eye
  },
  {
    title: "Datos en Silos",
    description: "Información valiosa atrapada en sistemas legados, hojas de cálculo dispersas y equipos desconectados.",
    icon: Database
  },
  {
    title: "Mantenimiento Reactivo",
    description: "Costos millonarios por fallas no planificadas que podrían haberse predicho con la telemetría adecuada.",
    icon: Wrench
  },
  {
    title: "Riesgo en Zonas Remotas",
    description: "Falta de control sobre activos en faenas lejanas debido a conectividad deficiente o nula.",
    icon: Signal
  }
];

// Solutions Section
export const SOLUTIONS: FeatureItem[] = [
  {
    title: "Visibilidad Total en Tiempo Real",
    description: "Dashboards ejecutivos y operativos que unifican el pulso de su operación. Sepa exactamente qué pasa, cuándo pasa.",
    icon: LayoutDashboard
  },
  {
    title: "Automatización Inteligente",
    description: "Elimine la carga manual de reportes y procesos repetitivos. Libere a su equipo para tareas de alto valor.",
    icon: Cpu
  },
  {
    title: "Integración de Datos Industriales",
    description: "Arquitecturas de datos robustas que ingesta, limpian y estructuran información de sensores, ERPs y maquinaria.",
    icon: Layers
  },
  {
    title: "Monitoreo Remoto & IoT",
    description: "Continuidad operacional en zonas extremas. Implementación de telemetría sobre redes satelitales (Starlink/VSAT).",
    icon: Globe2
  }
];

// Methodology Section
export const METHODOLOGY: ProcessStep[] = [
  {
    number: "01",
    title: "Diagnóstico Crítico",
    description: "No vendemos licencias, resolvemos problemas. Analizamos su infraestructura actual y puntos de dolor específicos."
  },
  {
    number: "02",
    title: "MVP Ágil",
    description: "Despliegue rápido de soluciones funcionales. Validamos valor en semanas, no en años."
  },
  {
    number: "03",
    title: "Escalamiento Robusto",
    description: "Industrializamos la solución integrándola completamente a sus flujos de trabajo corporativos."
  },
  {
    number: "04",
    title: "Soporte Continuo",
    description: "Acompañamiento técnico permanente para asegurar que la tecnología evolucione con su operación."
  }
];

// Experience Section
export const FOUNDER_EXPERIENCE = {
  title: "Experiencia Forjada en Terreno",
  description: "Telion nace de la experiencia real ejecutando proyectos de datos e infraestructura crítica. No somos teóricos; somos ingenieros que han resuelto desafíos complejos para líderes de la industria.",
  bullets: [
    "Arquitectura de datos masivos para Retail líder en LATAM.",
    "Sistemas de telemetría para faenas mineras de alta montaña.",
    "Automatización de procesos logísticos a escala nacional.",
    "Infraestructura de monitoreo para operaciones de telecomunicaciones."
  ]
};

// Use Cases
export const USE_CASES: UseCase[] = [
  {
    title: "Telemetría Predictiva en Flota Minera",
    industry: "Minería",
    challenge: "Downtime excesivo por fallas inesperadas en camiones de extracción.",
    solution: "Integración de sensores IoT para monitoreo de signos vitales del motor en tiempo real.",
    impact: "Reducción estimada del 15% en costos de mantenimiento correctivo y aumento de disponibilidad.",
  },
  {
    title: "Centro de Control Remoto (Sin Fibra)",
    industry: "Energía / Renovables",
    challenge: "Supervisión de parque fotovoltaico en zona aislada sin cobertura 4G/5G.",
    solution: "Despliegue de enlace satelital de baja latencia + Dashboard unificado en nube.",
    impact: "Visibilidad 24/7 de la generación energética y alertas inmediatas de seguridad.",
  },
  {
    title: "Unificación de Datos de Planta",
    industry: "Manufactura",
    challenge: "Gerencia operaba con reportes en Excel con 48 horas de desfase.",
    solution: "Pipeline de datos automatizado ingestado desde SCADA hacia Data Lake corporativo.",
    impact: "Toma de decisiones basada en datos con latencia menor a 5 minutos.",
  }
];

// About Content
export const ABOUT_CONTENT = {
  mission: "Empoderar a las industrias intensivas en activos con la tecnología necesaria para operar de manera más segura, eficiente y rentable.",
  values: ["Rigor Técnico", "Honestidad Radical", "Enfoque en Valor", "Seguridad Primero"]
};