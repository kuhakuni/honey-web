import { ImageWithFallback } from "../components/figma/ImageWithFallback";

function AboutSection() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center py-[96px] relative shrink-0 w-full">
      <div className="content-stretch flex gap-[64px] items-center justify-center px-[32px] relative shrink-0 w-[1280px] max-w-full flex-wrap">
        <div className="flex-[1_0_0] min-w-[300px] relative">
          <div className="w-full h-[500px] bg-[#f5f5f5] rounded-[12px] overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1642067958024-1a2d9f836920?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Sarang lebah madu"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-[300px] relative">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[#f69d00] text-[16px]">
              Tentang Kami
            </p>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[60px] not-italic relative shrink-0 text-[#181d27] text-[48px] tracking-[-0.96px] w-full">
              Madu Murni dari Alam Indonesia
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#535862] text-[18px] w-full">
              Madu Al Tasman adalah produsen madu murni yang berkomitmen menghadirkan produk berkualitas tinggi langsung dari peternakan lebah pilihan di seluruh Indonesia.
            </p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#535862] text-[18px] w-full">
              Kami percaya bahwa madu bukan sekadar pemanis alami, tetapi juga sumber energi dan kesehatan yang telah dipercaya sejak zaman nenek moyang. Setiap tetes madu kami dipanen dengan hati-hati untuk memastikan kemurnian dan kualitas terbaik.
            </p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#535862] text-[18px] w-full">
              Dengan pengalaman lebih dari 10 tahun, kami telah melayani ribuan pelanggan yang mempercayakan kesehatan keluarga mereka pada produk kami.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GallerySection() {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      title: "Madu Murni dalam Toples Kaca"
    },
    {
      url: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      title: "Madu dengan Sarang Lebah"
    },
    {
      url: "https://images.unsplash.com/photo-1613548058193-1cd24c1bebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      title: "Proses Penuangan Madu"
    },
    {
      url: "https://images.unsplash.com/photo-1654515722385-c684c5331c04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      title: "Madu dengan Stick Kayu"
    },
    {
      url: "https://images.unsplash.com/photo-1625600243103-1dc6824c6c8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      title: "Honey Stick"
    },
    {
      url: "https://images.unsplash.com/photo-1718146921295-700b969e7c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      title: "Madu dari Sarang"
    },
    {
      url: "https://images.unsplash.com/photo-1641878067318-1d1f79a77785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      title: "Tetesan Madu Segar"
    },
    {
      url: "https://images.unsplash.com/photo-1642067958024-1a2d9f836920?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      title: "Sarang Lebah Alami"
    }
  ];

  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[64px] items-center py-[96px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[32px] relative shrink-0 w-[1280px] max-w-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full text-center">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[#f69d00] text-[16px]">
            Galeri
          </p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[44px] relative shrink-0 text-[#181d27] text-[36px] tracking-[-0.72px]">
            Perjalanan Madu Kami
          </p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#535862] text-[20px] max-w-[768px]">
            Dari peternakan lebah hingga ke tangan Anda, setiap langkah dipenuhi dengan dedikasi dan perhatian terhadap kualitas.
          </p>
        </div>
      </div>

      <div className="content-stretch flex flex-wrap gap-[24px] items-start justify-center px-[32px] relative shrink-0 w-[1280px] max-w-full">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="bg-white overflow-hidden relative rounded-[12px] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] w-[280px] h-[280px] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.12)] transition-shadow"
          >
            <ImageWithFallback
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function ValuesSection() {
  const values = [
    {
      title: "100% Murni",
      description: "Tanpa campuran gula atau bahan tambahan lainnya"
    },
    {
      title: "Kualitas Terjamin",
      description: "Dipanen dari peternakan lebah pilihan yang tersertifikasi"
    },
    {
      title: "Proses Higienis",
      description: "Dikemas dengan standar kebersihan dan kesehatan tertinggi"
    },
    {
      title: "Ramah Lingkungan",
      description: "Mendukung kelestarian lebah dan ekosistem alam"
    }
  ];

  return (
    <div className="bg-white content-stretch flex flex-col gap-[64px] items-center py-[96px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[32px] relative shrink-0 w-[1280px] max-w-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full text-center">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[#f69d00] text-[16px]">
            Nilai Kami
          </p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[44px] relative shrink-0 text-[#181d27] text-[36px] tracking-[-0.72px]">
            Mengapa Memilih Madu Al Tasman?
          </p>
        </div>
      </div>

      <div className="content-stretch flex flex-wrap gap-[32px] items-start justify-center px-[32px] relative shrink-0 w-[1280px] max-w-full">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[32px] relative rounded-[12px] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] w-[280px] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.12)] transition-shadow"
          >
            <div className="bg-[#f69d00] rounded-[12px] size-[48px] flex items-center justify-center">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[24px]">
                {index + 1}
              </p>
            </div>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] text-[20px] text-black">
              {value.title}
            </p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px] text-[#535862]">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="content-stretch flex flex-col items-center relative w-full">
      <AboutSection />
      <GallerySection />
      <ValuesSection />
    </div>
  );
}
