// ProductCard.tsx
import React from 'react';

interface ProductCardProps {
  img: string;
  imgAlt: string;
  eyebrow: string;
  title: string;
  pricing: string;
  url: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  img,
  imgAlt,
  eyebrow,
  title,
  pricing,
  url,
}) => {
  return (
    <div>
      <img className="rounded" src={img} alt={imgAlt} />
      <div className="mt-2">
        <div>
          <div className="text-xs text-slate-600 uppercase font-bold tracking-wider">
            {eyebrow}
          </div>
          <div className="font-bold text-slate-700 leading-snug">
            <a href={url} className="hover:underline">
              {title}
            </a>
          </div>
          <div className="mt-2 text-sm text-slate-600">{pricing}</div>
        </div>
      </div>
    </div>
  );
};

{
    /*
    implementacion de ProductCard
    <ProductCard
      img="/img/erin-lindford.jpg"
      imgAlt="Woman's Face"
      eyebrow="Product Engineer"
      title="Erin Lindford"
      pricing="$19.99"
      url="/producto/123"
    */
}
export default ProductCard;
