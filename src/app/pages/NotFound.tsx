import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[120px] relative w-full bg-white min-h-[600px]">
      <div className="content-stretch flex flex-col items-center gap-[32px] px-[32px] relative shrink-0 max-w-[600px]">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] text-[120px] text-[#f69d00] tracking-[-2.4px]">
          404
        </p>
        <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full text-center">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[44px] relative shrink-0 text-[#181d27] text-[36px] tracking-[-0.72px]">
            Halaman Tidak Ditemukan
          </p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#535862] text-[18px]">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. Silakan kembali ke halaman utama.
          </p>
        </div>
        <Link
          to="/"
          className="content-stretch flex items-start relative rounded-[8px] shrink-0 hover:opacity-90 transition-opacity"
        >
          <div className="bg-[#f69d00] relative rounded-[8px] shrink-0">
            <div className="content-stretch flex items-center justify-center overflow-clip px-[24px] py-[12px] relative rounded-[inherit] size-full">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
                Kembali ke Beranda
              </p>
            </div>
            <div className="absolute border border-[#f69d00] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
          </div>
        </Link>
      </div>
    </div>
  );
}
