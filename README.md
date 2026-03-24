# BlockivIA — Encuesta Tech

Encuesta gamificada de tecnología (Seguridad Digital, Cripto & Blockchain, IA) con perfil personalizado al finalizar.

---

## 📁 Estructura de archivos

```
blockivia-encuesta/
├── index.html              ← Página principal (no tocar)
├── css/
│   └── styles.css          ← Diseño visual (colores, fuentes, etc.)
├── js/
│   ├── survey.js           ← Lógica de navegación entre preguntas
│   ├── animations.js       ← Transiciones y efectos
│   ├── results.js          ← Cálculo de perfil y gráfico final
│   └── submit.js           ← Envío de respuestas a Google Sheets
├── data/
│   └── questions.js        ← ⭐ TUS PREGUNTAS — edita solo este archivo
└── assets/
    ├── logo-dark.png       ← Logo para fondo oscuro
    └── logo-light.png      ← Logo para fondo claro
```

---

## 🚀 Cómo subir a GitHub y publicar en Vercel

### Paso 1 — Subir a GitHub
1. Ve a [github.com](https://github.com) y crea una cuenta si no tienes
2. Crea un nuevo repositorio (botón verde "+ New")
3. Nómbralo `blockivia-encuesta`, márcalo como **Public**
4. Sube todos los archivos de esta carpeta (arrastra y suelta)

### Paso 2 — Publicar en Vercel
1. Ve a [vercel.com](https://vercel.com) y entra con tu cuenta de GitHub
2. Haz clic en "Add New Project"
3. Selecciona el repositorio `blockivia-encuesta`
4. Haz clic en **Deploy** (sin cambiar nada más)
5. En ~1 minuto tendrás una URL como `blockivia-encuesta.vercel.app`

---

## 📊 Configurar Google Sheets (recibir respuestas)

### Paso 1 — Crear la hoja
1. Crea un Google Sheets nuevo en [sheets.google.com](https://sheets.google.com)
2. Nómbralo "Respuestas BlockivIA"

### Paso 2 — Crear el script receptor
1. En Google Sheets: menú **Extensiones → Apps Script**
2. Borra todo el código que aparece
3. Copia y pega el código que está al final del archivo `js/submit.js`
4. Haz clic en 💾 Guardar

### Paso 3 — Publicar el script
1. Clic en **Implementar → Nueva implementación**
2. Tipo de implementación: **Aplicación web**
3. Ejecutar como: **Yo**
4. Quién tiene acceso: **Cualquier persona**
5. Haz clic en **Implementar** y copia la URL que aparece

### Paso 4 — Conectar con la encuesta
1. Abre el archivo `js/submit.js`
2. Busca esta línea:
   ```
   const SHEET_URL = "PEGA_AQUÍ_TU_URL_DE_APPS_SCRIPT";
   ```
3. Reemplaza el texto con tu URL
4. Guarda el archivo y vuelve a subir a GitHub (Vercel se actualiza solo)

---

## ✏️ Modificar preguntas

Solo tienes que editar el archivo `data/questions.js`.
Cada pregunta tiene:
- `id` — identificador único (no cambiar)
- `text` — el texto de la pregunta
- `type` — `"single"` para opción múltiple, `"text"` para respuesta abierta
- `options` — lista de opciones con su texto

---

## 🎨 Cambiar colores

Abre `css/styles.css` y busca la sección `:root { ... }` al inicio.
Los colores principales son:
- `--cyan`: color de acento principal (verde agua)
- `--bg`: fondo oscuro
- `--text`: color del texto

---

## 📞 Contacto BlockivIA
- WhatsApp: +591 64428987
- Web: www.blockivia.xyz
