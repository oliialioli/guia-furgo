# Guía de la furgo

App móvil para quien alquila la camper: cómo funciona cada cosa, checklists y ayuda. Sin backend.

## Arrancar

```bash
npm install
npm run dev
```

Abre la URL que muestre Vite (normalmente `http://localhost:5173`) en el móvil de la misma red, o en el navegador a 390 px de ancho.

## Contenido editable

Todo el texto vive en `src/content/`, separado de la UI:

- `guides.ts` — instrucciones paso a paso
- `situations.ts` — checklists (conducir, dormir, devolver…)
- `help.ts` — problemas y troubleshooting
- `van.ts` — matrícula, altura, depósitos, seguro
- `contact.ts` — WhatsApp y teléfono

Los campos `editorNote` y `placeholder: true` marcan lo que hay que sustituir por datos reales. No se muestran en la app.

Para añadir una guía: copia un objeto `Guide` en `guides.ts` y apúntalo en el array `guides`.

## Imágenes y vídeos

Pon archivos en `public/media/` y referencia la ruta en el contenido:

```ts
video: { kind: 'video', src: '/media/ducha.mp4', thumbnail: '/media/ducha.jpg', duration: '1:30' }
```

Si no hay `src`, se muestra un placeholder. Los vídeos no se precachean; cuando queráis algunos offline, añadid las rutas a `OFFLINE_VIDEOS` en `van.ts`.

## PWA

`npm run build` && `npm run preview`. En el móvil se puede instalar. Cachea interfaz, textos y fotos; los vídeos solo si se reproducen (y más adelante los de `OFFLINE_VIDEOS`).
