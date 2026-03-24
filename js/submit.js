// ============================================================
//  BLOCKIVIA — ENVÍO A GOOGLE SHEETS
//
//  INSTRUCCIONES PARA CONFIGURAR (una sola vez):
//
//  1. Abre tu Google Sheets en drive.google.com
//  2. Ve a Extensiones → Apps Script
//  3. Borra el código que aparece y pega el código que está
//     al final de este archivo en el comentario "APPS SCRIPT"
//  4. Haz clic en "Implementar" → "Nueva implementación"
//  5. Tipo: "Aplicación web"
//     Ejecutar como: "Yo"
//     Quién tiene acceso: "Cualquier persona"
//  6. Copia la URL que te da y pégala abajo en SHEET_URL
// ============================================================

const SHEET_URL = "PEGA_AQUÍ_TU_URL_DE_APPS_SCRIPT";

async function submitToSheets(answers) {
  const overlay = document.getElementById('sending-overlay');
  overlay.classList.add('active');

  // Construimos el payload
  const payload = {
    timestamp: new Date().toISOString(),
    ...answers
  };

  try {
    await fetch(SHEET_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    // no-cors no devuelve respuesta, asumimos éxito
  } catch (e) {
    console.warn("Error al enviar a Sheets:", e);
  } finally {
    overlay.classList.remove('active');
  }
}


/* ============================================================
   CÓDIGO PARA GOOGLE APPS SCRIPT
   (Copia esto en tu Apps Script, NO en este archivo)

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  // Si es la primera fila, agrega encabezados
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(Object.keys(data));
  }

  sheet.appendRow(Object.values(data));

  return ContentService
    .createTextOutput(JSON.stringify({ result: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}

   ============================================================ */
