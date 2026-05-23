import svgPaths from "../../imports/Desktop/svg-02xrwvybo0";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

function HeroSection() {
	return (
		<div className="content-stretch flex flex-col gap-[50px] items-center justify-center relative shrink-0 w-full overflow-hidden min-h-screen">
			{/* Background image layer */}
			<img
				src="/src/imports/Desktop/Scene.png"
				alt=""
				className="absolute object-cover object-center opacity-50"
			/>

			{/* Content */}
			<div className="content-stretch flex flex-col items-center relative shrink-0 w-full overflow-hidden min-h-screen pt-8">
				<div className="flex flex-col gap-[48px] items-center w-full">
					<div className="flex flex-col gap-[24px] items-center not-italic text-center max-w-[1024px]">
						<p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[72px] text-[60px] text-black tracking-[-1.2px]">
							<span>Dari Lebah Untuk </span>
							<span className="text-[#f69d00]">Kesehatan</span>
						</p>
						<p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] text-[#535862] text-[20px] max-w-[768px]">
							Madu murni penuh kebaikan, langsung dari sarang lebah pilihan.
							Setiap tetesnya menghadirkan energi, menjaga daya tahan tubuh, dan
							menemani momen berharga bersama keluarga
						</p>
					</div>
					<div className="flex gap-[12px] items-center">
						<a
							href="#contact"
							className="bg-[#f69d00] text-white font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] px-[24px] py-[12px] rounded-[8px] hover:bg-[#e08c00] transition-colors shadow-[0px_2px_8px_rgba(246,157,0,0.4)]"
						>
							Beli Sekarang
						</a>
						<a
							href="/about"
							className="bg-white/80 backdrop-blur-sm text-[#414651] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] px-[24px] py-[12px] rounded-[8px] border border-[#d5d7da] hover:bg-white transition-colors"
						>
							Pelajari Lebih
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

function ProductCard({
	image,
	title,
	description,
}: {
	image: string;
	title: string;
	description: string;
}) {
	return (
		<div className="bg-white content-stretch flex flex-col gap-[16px] items-center overflow-hidden relative rounded-[12px] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] w-[250px] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.12)] transition-shadow">
			<div className="relative w-full h-[250px] overflow-hidden">
				<ImageWithFallback
					src={image}
					alt={title}
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="px-[20px] pb-[20px] flex flex-col gap-[8px] w-full">
				<p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[18px] text-black">
					{title}
				</p>
				<p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[14px] text-[#535862]">
					{description}
				</p>
			</div>
		</div>
	);
}

function ProductsSection() {
	const products = [
		{
			image:
				"https://images.unsplash.com/photo-1587049352851-8d4e89133924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
			title: "Madu Multiflora",
			description: "Madu dengan rasa manis lembut dari berbagai bunga",
		},
		{
			image:
				"https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
			title: "Madu Randu",
			description: "Madu segar dengan aroma eksotis khas bunga randu",
		},
		{
			image:
				"https://images.unsplash.com/photo-1613548058193-1cd24c1bebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
			title: "Madu Hutan",
			description: "Madu pekat dengan aroma khas dari hutan tropis",
		},
		{
			image:
				"https://images.unsplash.com/photo-1625600243103-1dc6824c6c8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
			title: "Madu Kelengkeng",
			description: "Madu manis dengan aroma bunga kelengkeng",
		},
	];

	return (
		<div className="bg-white content-stretch flex flex-col gap-[64px] items-center overflow-clip py-[96px] relative shrink-0 w-full">
			<div className="content-stretch flex flex-col items-start px-[32px] relative shrink-0 w-[1280px] max-w-full">
				<div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
					<div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 text-center max-w-[986px]">
						<div className="content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[12px] items-start relative shrink-0 w-full">
							<p className="leading-[24px] relative shrink-0 text-[#f69d00] text-[16px] w-full">
								Products
							</p>
							<p className="leading-[44px] relative shrink-0 text-[#181d27] text-[36px] tracking-[-0.72px] w-full">
								Beragam Varian, Satu Kemurnian
							</p>
						</div>
						<p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#535862] text-[20px] w-full">
							Dari manis lembut madu multiflora, segar eksotis madu randu,
							hingga pekat beraroma khas madu hutan. Setiap varian menghadirkan
							cita rasa alami dengan manfaat yang berbeda—pilih yang sesuai
							dengan selera dan kebutuhan kesehatan Anda.
						</p>
					</div>
				</div>
			</div>

			<div className="content-stretch flex gap-[32px] items-center justify-center px-[32px] relative shrink-0 w-[1280px] max-w-full flex-wrap">
				{products.map((product, index) => (
					<ProductCard key={index} {...product} />
				))}
			</div>
		</div>
	);
}

function TestimonialSection() {
	return (
		<div className="bg-[#fafafa] content-stretch flex flex-col items-center overflow-clip py-[96px] relative shrink-0 w-full">
			<div className="content-stretch flex flex-col items-start px-[32px] relative shrink-0 w-[1280px] max-w-full">
				<div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full">
					<div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full">
						<p className="font-['Inter:Medium',sans-serif] font-medium leading-[60px] not-italic relative shrink-0 text-[#181d27] text-[48px] text-center tracking-[-0.96px] max-w-[900px]">
							"Madu Al Tasman telah menjadi bagian dari rutinitas pagi keluarga
							kami. Kualitasnya luar biasa dan rasanya sangat alami!"
						</p>
						<div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
							<div className="relative rounded-[200px] shrink-0 size-[64px] bg-[#f69d00] flex items-center justify-center">
								<p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[24px]">
									BS
								</p>
							</div>
							<div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-center w-full">
								<p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">
									Budi Santoso
								</p>
								<p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">
									Pelanggan Setia
								</p>
							</div>
						</div>
					</div>
					<div className="content-stretch flex gap-[10px] items-end justify-center relative shrink-0">
						<div className="relative shrink-0 size-[10px]">
							<svg
								className="absolute block inset-0 size-full"
								fill="none"
								preserveAspectRatio="none"
								viewBox="0 0 10 10"
							>
								<circle cx="5" cy="5" fill="#F69D00" r="5" />
							</svg>
						</div>
						<div className="relative shrink-0 size-[10px]">
							<svg
								className="absolute block inset-0 size-full"
								fill="none"
								preserveAspectRatio="none"
								viewBox="0 0 10 10"
							>
								<circle cx="5" cy="5" fill="#C7C7CC" r="5" />
							</svg>
						</div>
						<div className="relative shrink-0 size-[10px]">
							<svg
								className="absolute block inset-0 size-full"
								fill="none"
								preserveAspectRatio="none"
								viewBox="0 0 10 10"
							>
								<circle cx="5" cy="5" fill="#C7C7CC" r="5" />
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function ContactSection() {
	return (
		<div
			id="contact"
			className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip py-[96px] relative shrink-0 w-full"
		>
			<div className="content-stretch flex gap-[64px] items-center justify-center px-[32px] relative shrink-0 w-[1280px] max-w-full flex-wrap">
				<div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-w-[300px] relative">
					<div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
						<p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[60px] not-italic relative shrink-0 text-[#181d27] text-[48px] tracking-[-0.96px] w-full">
							Hubungi Kami Untuk Informasi Lebih Lanjut
						</p>
						<div className="relative shrink-0 w-full">
							<div className="content-stretch flex flex-col gap-[20px] items-start pl-[16px] relative size-full">
								<div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
									<div className="bg-[#f4ebff] overflow-clip relative rounded-[14px] shrink-0 size-[28px]">
										<div className="absolute inset-[29.65%_23.56%_26.58%_26.46%]">
											<svg
												className="absolute block inset-0 size-full"
												fill="none"
												preserveAspectRatio="none"
												viewBox="0 0 13.9961 12.2552"
											>
												<path
													clipRule="evenodd"
													d={svgPaths.p3ef9ad00}
													fill="#F69D00"
													fillRule="evenodd"
												/>
											</svg>
										</div>
									</div>
									<div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
										<p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#535862] text-[18px] w-full">
											Gratis konsultasi produk
										</p>
									</div>
								</div>
								<div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
									<div className="bg-[#f4ebff] overflow-clip relative rounded-[14px] shrink-0 size-[28px]">
										<div className="absolute inset-[29.65%_23.56%_26.58%_26.46%]">
											<svg
												className="absolute block inset-0 size-full"
												fill="none"
												preserveAspectRatio="none"
												viewBox="0 0 13.9961 12.2552"
											>
												<path
													clipRule="evenodd"
													d={svgPaths.p3ef9ad00}
													fill="#F69D00"
													fillRule="evenodd"
												/>
											</svg>
										</div>
									</div>
									<div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
										<p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#535862] text-[18px] w-full">
											Pengiriman ke seluruh Indonesia
										</p>
									</div>
								</div>
								<div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
									<div className="bg-[#f4ebff] overflow-clip relative rounded-[14px] shrink-0 size-[28px]">
										<div className="absolute inset-[29.65%_23.56%_26.58%_26.46%]">
											<svg
												className="absolute block inset-0 size-full"
												fill="none"
												preserveAspectRatio="none"
												viewBox="0 0 13.9961 12.2552"
											>
												<path
													clipRule="evenodd"
													d={svgPaths.p3ef9ad00}
													fill="#F69D00"
													fillRule="evenodd"
												/>
											</svg>
										</div>
									</div>
									<div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
										<p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#535862] text-[18px] w-full">
											Respon cepat 24/7
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="content-stretch flex gap-[12px] items-start relative shrink-0">
						<a
							href="mailto:altasman18@gmail.com"
							className="content-stretch flex items-start relative rounded-[8px] shrink-0 hover:opacity-90 transition-opacity"
						>
							<div className="bg-white relative rounded-[8px] shrink-0">
								<div className="content-stretch flex items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[inherit] size-full">
									<p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#414651] text-[16px] whitespace-nowrap">
										Email Kami
									</p>
								</div>
								<div className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
							</div>
						</a>
						<a
							href="https://wa.me/628155001505"
							target="_blank"
							rel="noopener noreferrer"
							className="content-stretch flex items-start relative rounded-[8px] shrink-0 hover:opacity-90 transition-opacity"
						>
							<div className="bg-[#f69d00] relative rounded-[8px] shrink-0">
								<div className="content-stretch flex items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[inherit] size-full">
									<p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
										WhatsApp
									</p>
								</div>
								<div className="absolute border border-[#f69d00] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
							</div>
						</a>
					</div>
				</div>
				<div className="flex-[1_0_0] min-w-[300px] relative">
					<div className="w-full h-[400px] bg-[#f5f5f5] rounded-[12px] flex items-center justify-center">
						<ImageWithFallback
							src="https://images.unsplash.com/photo-1654515722385-c684c5331c04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
							alt="Madu berkualitas"
							className="w-full h-full object-cover rounded-[12px]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function Home() {
	return (
		<div className="content-stretch flex flex-col items-center relative w-full">
			<HeroSection />
			<ProductsSection />
			<TestimonialSection />
			<ContactSection />
		</div>
	);
}
