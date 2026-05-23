import { ImageWithFallback } from "../components/figma/ImageWithFallback";

function ProductCard({
  image,
  title,
  description,
  price,
  badge
}: {
  image: string;
  title: string;
  description: string;
  price: string;
  badge?: string;
}) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-hidden relative rounded-[12px] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] w-[280px] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.12)] transition-shadow">
      <div className="relative w-full h-[280px] overflow-hidden">
        {badge && (
          <div className="absolute top-[12px] right-[12px] z-10">
            <div className="bg-[#f69d00] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[16px] shrink-0">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-white text-[12px] text-center whitespace-nowrap">
                {badge}
              </p>
            </div>
          </div>
        )}
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-[20px] pb-[20px] flex flex-col gap-[12px] w-full">
        <div className="flex flex-col gap-[8px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[18px] text-black">
            {title}
          </p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[14px] text-[#535862]">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-between w-full pt-[8px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] text-[20px] text-[#f69d00]">
            {price}
          </p>
          <button className="bg-[#f69d00] hover:bg-[#d88900] transition-colors content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-white text-[14px] whitespace-nowrap">
              Beli
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center justify-center py-[80px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[32px] relative shrink-0 w-[1280px] max-w-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full text-center">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[#f69d00] text-[16px]">
            Produk Kami
          </p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[60px] relative shrink-0 text-[#181d27] text-[48px] tracking-[-0.96px] max-w-[800px]">
            Koleksi Lengkap Madu Berkualitas
          </p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#535862] text-[20px] max-w-[768px]">
            Temukan berbagai varian madu murni pilihan kami, dari yang klasik hingga yang terbaru dengan manfaat kesehatan yang luar biasa.
          </p>
        </div>
      </div>
    </div>
  );
}

function NewProductsSection() {
  const newProducts = [
    {
      image: "https://images.unsplash.com/photo-1641878067318-1d1f79a77785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      title: "Madu Klanceng Premium",
      description: "Madu dari lebah tanpa sengat dengan khasiat antioksidan tinggi",
      price: "Rp 185.000",
      badge: "Baru"
    },
    {
      image: "https://images.unsplash.com/photo-1718146921295-700b969e7c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      title: "Madu Manuka Indonesia",
      description: "Madu dengan kandungan antibakteri setara madu manuka",
      price: "Rp 225.000",
      badge: "Baru"
    },
    {
      image: "https://images.unsplash.com/photo-1642067958024-1a2d9f836920?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      title: "Raw Honeycomb",
      description: "Sarang madu murni yang dapat dimakan langsung",
      price: "Rp 165.000",
      badge: "Baru"
    },
    {
      image: "https://images.unsplash.com/photo-1654515722385-c684c5331c04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      title: "Madu Propolis",
      description: "Kombinasi madu dan propolis untuk daya tahan tubuh",
      price: "Rp 145.000",
      badge: "Baru"
    }
  ];

  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[48px] items-center py-[96px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[32px] relative shrink-0 w-[1280px] max-w-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[44px] relative shrink-0 text-[#181d27] text-[36px] tracking-[-0.72px]">
            Produk Terbaru
          </p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#535862] text-[18px] max-w-[768px]">
            Produk madu terbaru kami dengan varian dan manfaat yang lebih beragam
          </p>
        </div>
      </div>

      <div className="content-stretch flex flex-wrap gap-[32px] items-start justify-center px-[32px] relative shrink-0 w-[1280px] max-w-full">
        {newProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

function FavoriteProductsSection() {
  const favoriteProducts = [
    {
      image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      title: "Madu Multiflora",
      description: "Madu paling populer dengan rasa manis lembut",
      price: "Rp 95.000",
      badge: "Favorit"
    },
    {
      image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      title: "Madu Randu",
      description: "Pilihan favorit dengan aroma eksotis khas",
      price: "Rp 105.000",
      badge: "Favorit"
    },
    {
      image: "https://images.unsplash.com/photo-1613548058193-1cd24c1bebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      title: "Madu Hutan",
      description: "Madu premium dari hutan Indonesia",
      price: "Rp 135.000",
      badge: "Favorit"
    },
    {
      image: "https://images.unsplash.com/photo-1625600243103-1dc6824c6c8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      title: "Madu Kelengkeng",
      description: "Madu manis dengan aroma bunga kelengkeng",
      price: "Rp 115.000",
      badge: "Favorit"
    }
  ];

  return (
    <div className="bg-white content-stretch flex flex-col gap-[48px] items-center py-[96px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[32px] relative shrink-0 w-[1280px] max-w-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[44px] relative shrink-0 text-[#181d27] text-[36px] tracking-[-0.72px]">
            Produk Favorit
          </p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#535862] text-[18px] max-w-[768px]">
            Produk pilihan yang paling banyak dipilih pelanggan kami
          </p>
        </div>
      </div>

      <div className="content-stretch flex flex-wrap gap-[32px] items-start justify-center px-[32px] relative shrink-0 w-[1280px] max-w-full">
        {favoriteProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

function AllProductsSection() {
  const allProducts = [
    {
      image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      title: "Madu Multiflora 500ml",
      description: "Madu dari berbagai bunga dengan rasa manis seimbang",
      price: "Rp 95.000"
    },
    {
      image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      title: "Madu Randu 500ml",
      description: "Madu segar dengan aroma khas bunga randu",
      price: "Rp 105.000"
    },
    {
      image: "https://images.unsplash.com/photo-1613548058193-1cd24c1bebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      title: "Madu Hutan 500ml",
      description: "Madu pekat dari hutan tropis Indonesia",
      price: "Rp 135.000"
    },
    {
      image: "https://images.unsplash.com/photo-1625600243103-1dc6824c6c8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      title: "Madu Kelengkeng 500ml",
      description: "Madu manis dengan aroma bunga kelengkeng",
      price: "Rp 115.000"
    },
    {
      image: "https://images.unsplash.com/photo-1641878067318-1d1f79a77785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      title: "Madu Klanceng 250ml",
      description: "Madu dari lebah tanpa sengat, kaya antioksidan",
      price: "Rp 185.000"
    },
    {
      image: "https://images.unsplash.com/photo-1718146921295-700b969e7c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      title: "Madu Manuka 250ml",
      description: "Madu dengan kandungan antibakteri tinggi",
      price: "Rp 225.000"
    },
    {
      image: "https://images.unsplash.com/photo-1642067958024-1a2d9f836920?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      title: "Raw Honeycomb 300g",
      description: "Sarang madu murni yang dapat dimakan",
      price: "Rp 165.000"
    },
    {
      image: "https://images.unsplash.com/photo-1654515722385-c684c5331c04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      title: "Madu Propolis 300ml",
      description: "Kombinasi madu dan propolis untuk imunitas",
      price: "Rp 145.000"
    }
  ];

  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[48px] items-center py-[96px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[32px] relative shrink-0 w-[1280px] max-w-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[44px] relative shrink-0 text-[#181d27] text-[36px] tracking-[-0.72px]">
            Semua Produk
          </p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#535862] text-[18px] max-w-[768px]">
            Jelajahi seluruh koleksi madu murni kami
          </p>
        </div>
      </div>

      <div className="content-stretch flex flex-wrap gap-[32px] items-start justify-center px-[32px] relative shrink-0 w-[1280px] max-w-full">
        {allProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <div className="content-stretch flex flex-col items-center relative w-full">
      <HeroSection />
      <NewProductsSection />
      <FavoriteProductsSection />
      <AllProductsSection />
    </div>
  );
}
