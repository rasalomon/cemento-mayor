# Registro en Google Search Console

## Antes de empezar

Publicar el build en `https://www.cementomayor.com` y comprobar estas URLs:

- `https://www.cementomayor.com/robots.txt`
- `https://www.cementomayor.com/sitemap.xml`

## Alta y verificación

1. Abrir Google Search Console con la cuenta de la empresa.
2. Elegir **Añadir propiedad**.
3. Recomendado: seleccionar **Dominio** e ingresar `cementomayor.com`.
4. Copiar el registro TXT que entrega Google y agregarlo al DNS del dominio.
5. Esperar la propagación y pulsar **Verificar**.

La propiedad de dominio incluye `www`, el dominio sin `www`, HTTP y HTTPS. Si no se
tiene acceso al DNS, se puede crear una propiedad de **Prefijo de URL** para
`https://www.cementomayor.com/` y usar el archivo HTML de verificación que entrega
Google. Ese archivo debe copiarse sin modificar dentro de `public/` y volver a
publicar el sitio.

## Enviar el sitemap

1. Entrar a la propiedad verificada.
2. Abrir **Sitemaps**.
3. Ingresar `sitemap.xml` y pulsar **Enviar**.
4. Usar **Inspección de URLs** para revisar la página principal y solicitar su
   indexación.

No es necesario enviar `robots.txt`: Google lo descubre automáticamente en la raíz
del sitio.
