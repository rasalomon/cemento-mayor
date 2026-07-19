# Registro en Google Search Console

## Antes de empezar

Publicar el build en `https://www.cementomayor.com.uy` y comprobar estas URLs:

- `https://www.cementomayor.com.uy/robots.txt`
- `https://www.cementomayor.com.uy/sitemap.xml`

## Alta y verificación

1. Abrir Google Search Console con la cuenta de la empresa.
2. Elegir **Añadir propiedad**.
3. Recomendado: seleccionar **Dominio** e ingresar `cementomayor.com.uy` (sin
   `https://`, sin `www` y sin `/`).
4. Copiar el registro TXT que entrega Google y agregarlo al DNS del dominio.
5. Esperar la propagación y pulsar **Verificar**.

En Hostinger, abrir **Dominios > cementomayor.com.uy > DNS/Nameservers >
Registros DNS** y crear un registro con estos campos:

- Tipo: `TXT`
- Nombre/Host: `@`
- Valor: el texto completo entregado por Google, comenzando por
  `google-site-verification=`
- TTL: valor predeterminado

El registro debe agregarse como uno nuevo. No se deben editar ni eliminar los
registros TXT de correo existentes, como SPF o DKIM. Si los nameservers del dominio
apuntan a otro proveedor, el TXT debe agregarse en ese proveedor y no en Hostinger.

La propiedad de dominio incluye `www`, el dominio sin `www`, HTTP y HTTPS. Si no se
tiene acceso al DNS, se puede crear una propiedad de **Prefijo de URL** para
`https://www.cementomayor.com.uy/` y usar el archivo HTML de verificación que entrega
Google. Ese archivo debe copiarse sin modificar dentro de `public/` y volver a
publicar el sitio.

La propiedad creada por error para `cementomayor.com` no cubre el dominio
`cementomayor.com.uy`. Puede eliminarse de la cuenta desde **Ajustes > Quitar
propiedad** después de verificar la propiedad correcta.

## Enviar el sitemap

1. Entrar a la propiedad verificada.
2. Abrir **Sitemaps**.
3. Ingresar `sitemap.xml` y pulsar **Enviar**.
4. Usar **Inspección de URLs** para revisar la página principal y solicitar su
   indexación.

No es necesario enviar `robots.txt`: Google lo descubre automáticamente en la raíz
del sitio.
