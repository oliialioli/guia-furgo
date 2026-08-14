import type { VanSpecs } from './types'

/**
 * Datos técnicos de la furgoneta.
 * SUSTITUIR todos los valores marcados antes de entregar la guía a los viajeros.
 */
export const van: VanSpecs = {
  name: 'La furgo',
  plate: '0000 XXX',
  fuel: 'Diésel · tapón a la izquierda',
  height: '2,70 m',
  heightMeters: 2.7,
  length: '5,99 m',
  width: '2,05 m (sin espejos)',
  waterCapacity: 'Depósito limpia · 80 L (ejemplo)',
  greyWaterCapacity: 'Aguas grises · 70 L (ejemplo)',
  auxBattery: 'Litio auxiliar · 100 Ah (ejemplo)',
  contactPhone: '+34 600 000 000',
  contactName: 'Equipo de alquiler',
  insurance: {
    company: 'Aseguradora (sustituir)',
    policyNumber: 'PÓLIZA-000000',
    roadsidePhone: '+34 900 000 000',
    documents: [
      'Permiso de circulación (guantera)',
      'Póliza y parte amistoso (carpeta gris)',
      'ITV en vigor',
    ],
  },
  editorNote:
    'Sustituir matrícula, medidas reales, depósitos, batería, teléfono y datos del seguro.',
}

/** Rutas de vídeo que se cachearán offline cuando se añadan archivos reales. */
export const OFFLINE_VIDEOS: string[] = [
  // Ejemplo: '/media/ducha.mp4',
]
