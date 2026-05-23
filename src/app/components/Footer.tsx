import { Link } from "react-router";
import svgPaths from "../../imports/Desktop/svg-02xrwvybo0";

function SocialIcons() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px] hover:opacity-80 cursor-pointer">
        <div className="absolute inset-[4.17%_2.12%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.9816 22">
            <path clipRule="evenodd" d={svgPaths.p22bb1d00} fill="#A4A7AE" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px] hover:opacity-80 cursor-pointer">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p2ccee40} fill="#A4A7AE" />
        </svg>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px] hover:opacity-80 cursor-pointer">
        <div className="absolute inset-[0_0_0.61%_0]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 23.8542">
            <path d={svgPaths.p2334f790} fill="#A4A7AE" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px] hover:opacity-80 cursor-pointer">
        <div className="absolute inset-[0_15.23%_0_15.25%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6828 24">
            <path d={svgPaths.p3ae3b680} fill="#A4A7AE" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-center pb-[48px] pt-[64px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start px-[32px] relative shrink-0 w-[1280px] max-w-full">
          <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full flex-wrap">
            <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[320px]">
              <div className="content-stretch flex items-start relative shrink-0">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic text-[16px] text-black">
                  Madu Al Tasman
                </p>
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#535862] text-[16px] w-[min-content]">
                Madu murni penuh kebaikan, langsung dari sarang lebah pilihan. Setiap tetesnya menghadirkan energi dan kesehatan.
              </p>
            </div>

            <div className="content-stretch flex flex-[1_0_0] gap-[32px] items-start min-w-px relative flex-wrap">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-[150px] relative">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#717680] text-[14px] w-full">
                  Produk
                </p>
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                  <Link to="/products" className="content-stretch flex items-center relative shrink-0">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] hover:text-black whitespace-nowrap">
                      Semua Produk
                    </p>
                  </Link>
                  <Link to="/products" className="content-stretch flex items-center relative shrink-0">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] hover:text-black whitespace-nowrap">
                      Produk Baru
                    </p>
                  </Link>
                  <Link to="/products" className="content-stretch flex items-center relative shrink-0">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] hover:text-black whitespace-nowrap">
                      Favorit
                    </p>
                  </Link>
                </div>
              </div>

              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-[150px] relative">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#717680] text-[14px] w-full">
                  Perusahaan
                </p>
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                  <Link to="/about" className="content-stretch flex items-center relative shrink-0">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] hover:text-black whitespace-nowrap">
                      Tentang Kami
                    </p>
                  </Link>
                  <Link to="/about" className="content-stretch flex items-center relative shrink-0">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] hover:text-black whitespace-nowrap">
                      Galeri
                    </p>
                  </Link>
                  <Link to="/contact" className="content-stretch flex items-center relative shrink-0">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] hover:text-black whitespace-nowrap">
                      Kontak
                    </p>
                  </Link>
                </div>
              </div>

              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-[150px] relative">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#717680] text-[14px] w-full">
                  Legal
                </p>
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                  <a href="#" className="content-stretch flex items-center relative shrink-0">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] hover:text-black whitespace-nowrap">
                      Syarat & Ketentuan
                    </p>
                  </a>
                  <a href="#" className="content-stretch flex items-center relative shrink-0">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] hover:text-black whitespace-nowrap">
                      Privasi
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#fafafa] content-stretch flex flex-col items-center py-[48px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start px-[32px] relative shrink-0 w-[1280px] max-w-full">
          <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full flex-wrap">
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-px not-italic relative text-[#717680] text-[16px]">
              © 2026 Madu Al Tasman. All rights reserved.
            </p>
            <SocialIcons />
          </div>
        </div>
      </div>
    </div>
  );
}
