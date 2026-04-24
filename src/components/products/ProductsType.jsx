function ProductType({
  nombre,
  title,
  categoria,
  description,
  usos = [],
  beneficios = [],
  etiqueta,
  imagen,
}) {
  const productName = nombre || title;

  return (
    <article className="products-type">
      <div className="products-type__media" aria-hidden="true">
        <span>{categoria || "Producto"}</span>
      </div>

      <div className="products-type__body">
        <div className="products-type__header">
          {categoria ? <p className="products-type__category">{categoria}</p> : null}
          {etiqueta ? <span className="products-type__tag">{etiqueta}</span> : null}
        </div>

        <h3>{productName}</h3>
        <p>{description}</p>

        {usos.length > 0 ? (
          <div className="products-type__detail">
            <h4>Usos principales</h4>
            <ul>
              {usos.map((uso) => (
                <li key={uso}>{uso}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {beneficios.length > 0 ? (
          <div className="products-type__detail">
            <h4>Beneficios</h4>
            <ul>
              {beneficios.map((beneficio) => (
                <li key={beneficio}>{beneficio}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {imagen ? <span className="products-type__image-path">{imagen}</span> : null}
      </div>
    </article>
  );
}

export default ProductType;
