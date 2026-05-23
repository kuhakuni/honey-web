import { useState } from "react";
import {
	MapPin,
	Phone,
	Mail,
	Clock,
	MessageCircle,
	Send,
	CheckCircle,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

function ContactHero() {
	return (
		<div className="relative overflow-hidden bg-white py-[80px] flex flex-col items-center">
			{/* Subtle honeycomb pattern top-right */}
			<svg
				className="absolute top-0 right-0 w-[300px] h-[300px] opacity-[0.07] text-[#f69d00]"
				viewBox="0 0 200 200"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				aria-hidden="true"
			>
				{[0, 1, 2, 3, 4, 5].map((row) =>
					[0, 1, 2, 3, 4].map((col) => {
						const x = col * 34 + (row % 2 === 1 ? 17 : 0);
						const y = row * 29;
						return (
							<polygon
								key={`${row}-${col}`}
								points={`${x + 17},${y} ${x + 34},${y + 10} ${x + 34},${
									y + 29
								} ${x + 17},${y + 38} ${x},${y + 29} ${x},${y + 10}`}
							/>
						);
					})
				)}
			</svg>
			{/* Bottom-left honeycomb */}
			<svg
				className="absolute bottom-0 left-0 w-[200px] h-[200px] opacity-[0.07] text-[#f69d00]"
				viewBox="0 0 200 200"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				aria-hidden="true"
			>
				{[0, 1, 2, 3].map((row) =>
					[0, 1, 2, 3].map((col) => {
						const x = col * 34 + (row % 2 === 1 ? 17 : 0);
						const y = row * 29;
						return (
							<polygon
								key={`${row}-${col}`}
								points={`${x + 17},${y} ${x + 34},${y + 10} ${x + 34},${
									y + 29
								} ${x + 17},${y + 38} ${x},${y + 29} ${x},${y + 10}`}
							/>
						);
					})
				)}
			</svg>

			<div className="relative z-10 flex flex-col items-center gap-[16px] text-center px-[32px]">
				<span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#f69d00]">
					Kontak
				</span>
				<h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[48px] leading-[60px] tracking-[-0.96px] text-[#181d27]">
					Hubungi Kami
				</h1>
				<p className="font-['Inter:Regular',sans-serif] font-normal text-[20px] leading-[30px] text-[#535862] max-w-[600px]">
					Ada pertanyaan tentang produk kami? Tim kami siap membantu Anda
					menemukan madu terbaik untuk kebutuhan Anda.
				</p>
			</div>
		</div>
	);
}

function InfoCard({
	icon,
	label,
	value,
	sub,
	href,
}: {
	icon: React.ReactNode;
	label: string;
	value: string;
	sub?: string;
	href?: string;
}) {
	const inner = (
		<div className="flex flex-col gap-[4px]">
			<p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] leading-[28px] text-[#181d27]">
				{value}
			</p>
			{sub && (
				<p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#717680]">
					{sub}
				</p>
			)}
		</div>
	);

	return (
		<div className="flex gap-[16px] items-start bg-white rounded-[16px] p-[24px] border border-[#e9eaeb] shadow-[0px_2px_8px_rgba(0,0,0,0.04)] hover:border-[#f69d00] hover:shadow-[0px_4px_16px_rgba(246,157,0,0.12)] transition-all group">
			<div className="shrink-0 w-[48px] h-[48px] rounded-[12px] bg-[#fff7e6] flex items-center justify-center text-[#f69d00] group-hover:bg-[#f69d00] group-hover:text-white transition-colors">
				{icon}
			</div>
			<div className="flex flex-col gap-[4px]">
				<p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] leading-[18px] tracking-[0.5px] uppercase text-[#717680]">
					{label}
				</p>
				{href ? (
					<a href={href} className="hover:text-[#f69d00] transition-colors">
						{inner}
					</a>
				) : (
					inner
				)}
			</div>
		</div>
	);
}

function ContactInfo() {
	return (
		<div className="flex flex-col gap-[24px]">
			<div>
				<h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[30px] leading-[38px] tracking-[-0.6px] text-[#181d27] mb-[8px]">
					Informasi Kontak
				</h2>
				<p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[24px] text-[#535862]">
					Kami tersedia untuk menjawab pertanyaan dan membantu pesanan Anda.
				</p>
			</div>

			<div className="flex flex-col gap-[16px]">
				<InfoCard
					icon={<MessageCircle size={22} />}
					label="WhatsApp"
					value="+62 81-5500-1505"
					sub="Respon dalam 15 menit"
					href="https://wa.me/628155001505"
				/>
				<InfoCard
					icon={<Mail size={22} />}
					label="Email"
					value="altasman18@gmail.com"
					sub="Balasan dalam 1×24 jam"
					href="mailto:altasman18@gmail.com"
				/>
				<InfoCard
					icon={<Phone size={22} />}
					label="Telepon"
					value="+62 81-5500-1505"
					sub="Senin – Sabtu, 08.00–17.00"
					href="tel:+628155001505"
				/>
				<InfoCard
					icon={<MapPin size={22} />}
					label="Alamat"
					value="Puri Indah"
					sub="Sidoarjo, Jawa Timur 61271, Indonesia"
				/>
				<InfoCard
					icon={<Clock size={22} />}
					label="Jam Operasional"
					value="Senin – Sabtu"
					sub="08.00 – 17.00 WIB"
				/>
			</div>

			{/* WhatsApp CTA */}
			<a
				href="https://wa.me/628155001505"
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center justify-center gap-[10px] bg-[#25D366] text-white font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] px-[24px] py-[14px] rounded-[10px] hover:bg-[#1ebe5d] transition-colors shadow-[0px_2px_8px_rgba(37,211,102,0.3)] w-full"
			>
				<MessageCircle size={20} />
				Chat di WhatsApp
			</a>
		</div>
	);
}

function ContactForm() {
	const [sent, setSent] = useState(false);
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});

	function handleChange(
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	}

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setSent(true);
	}

	const inputClass =
		"w-full font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[24px] text-[#181d27] bg-white border border-[#d5d7da] rounded-[8px] px-[14px] py-[12px] outline-none placeholder:text-[#a4a7ae] focus:border-[#f69d00] focus:ring-2 focus:ring-[#f69d00]/20 transition-all";

	if (sent) {
		return (
			<div className="flex flex-col items-center gap-[24px] text-center py-[64px]">
				<div className="w-[72px] h-[72px] rounded-full bg-[#fff7e6] flex items-center justify-center">
					<CheckCircle size={36} className="text-[#f69d00]" />
				</div>
				<div>
					<p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] leading-[32px] text-[#181d27] mb-[8px]">
						Pesan Terkirim!
					</p>
					<p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[24px] text-[#535862]">
						Terima kasih, {form.name}. Kami akan menghubungi Anda melalui email{" "}
						<strong>{form.email}</strong> dalam waktu 1×24 jam.
					</p>
				</div>
				<button
					onClick={() => {
						setSent(false);
						setForm({
							name: "",
							email: "",
							phone: "",
							subject: "",
							message: "",
						});
					}}
					className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#f69d00] hover:underline"
				>
					Kirim pesan lain
				</button>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
			<div>
				<h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[30px] leading-[38px] tracking-[-0.6px] text-[#181d27] mb-[8px]">
					Kirim Pesan
				</h2>
				<p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[24px] text-[#535862]">
					Isi formulir di bawah dan kami akan segera merespons.
				</p>
			</div>

			<div className="flex gap-[16px] flex-wrap">
				<div className="flex flex-col gap-[6px] flex-1 min-w-[180px]">
					<label className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#414651]">
						Nama Lengkap <span className="text-[#f69d00]">*</span>
					</label>
					<input
						required
						name="name"
						value={form.name}
						onChange={handleChange}
						placeholder="Budi Santoso"
						className={inputClass}
					/>
				</div>
				<div className="flex flex-col gap-[6px] flex-1 min-w-[180px]">
					<label className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#414651]">
						Nomor WhatsApp / HP
					</label>
					<input
						name="phone"
						value={form.phone}
						onChange={handleChange}
						placeholder="+62 812-xxxx-xxxx"
						className={inputClass}
					/>
				</div>
			</div>

			<div className="flex flex-col gap-[6px]">
				<label className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#414651]">
					Email <span className="text-[#f69d00]">*</span>
				</label>
				<input
					required
					type="email"
					name="email"
					value={form.email}
					onChange={handleChange}
					placeholder="budi@email.com"
					className={inputClass}
				/>
			</div>

			<div className="flex flex-col gap-[6px]">
				<label className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#414651]">
					Topik
				</label>
				<select
					name="subject"
					value={form.subject}
					onChange={handleChange}
					className={inputClass}
				>
					<option value="">Pilih topik...</option>
					<option value="order">Pemesanan Produk</option>
					<option value="info">Informasi Produk</option>
					<option value="reseller">Kerjasama Reseller</option>
					<option value="complaint">Keluhan / Saran</option>
					<option value="other">Lainnya</option>
				</select>
			</div>

			<div className="flex flex-col gap-[6px]">
				<label className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#414651]">
					Pesan <span className="text-[#f69d00]">*</span>
				</label>
				<textarea
					required
					name="message"
					value={form.message}
					onChange={handleChange}
					rows={5}
					placeholder="Tulis pesan Anda di sini..."
					className={`${inputClass} resize-none`}
				/>
			</div>

			<button
				type="submit"
				disabled={true}
				className="flex items-center justify-center gap-[8px] bg-[#f69d00] text-white font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] px-[24px] py-[14px] rounded-[10px] hover:bg-[#e08c00] active:bg-[#c97a00] transition-colors shadow-[0px_2px_8px_rgba(246,157,0,0.35)] w-full disabled:opacity-50 disabled:cursor-not-allowed"
			>
				<Send size={18} />
				Kirim Pesan
			</button>
		</form>
	);
}

function LocationSection() {
	return (
		<div className="w-full bg-[#fafafa] py-[80px] flex flex-col items-center">
			<div className="w-[1280px] max-w-full px-[32px] flex flex-col gap-[40px]">
				<div className="flex flex-col items-center gap-[12px] text-center">
					<span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#f69d00] uppercase tracking-[0.5px]">
						Lokasi Kami
					</span>
					<h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[36px] leading-[44px] tracking-[-0.72px] text-[#181d27]">
						Temukan Kami di Sini
					</h2>
					<p className="font-['Inter:Regular',sans-serif] font-normal text-[18px] leading-[28px] text-[#535862] max-w-[560px]">
						Kunjungi langsung atau hubungi kami sebelum datang untuk memastikan
						ketersediaan produk.
					</p>
				</div>

				<div className="flex gap-[32px] items-stretch flex-wrap">
					{/* Map placeholder with image */}
					<div className="flex-[2_1_0] min-w-[280px] rounded-[20px] overflow-hidden h-[360px] relative shadow-[0px_4px_16px_rgba(0,0,0,0.08)]">
						<ImageWithFallback
							src="https://images.unsplash.com/photo-1660743474053-c50c114340af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
							alt="Lokasi kebun lebah Madu Al Tasman"
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
						<div className="absolute bottom-0 left-0 p-[24px] flex items-end gap-[12px]">
							<div className="w-[40px] h-[40px] rounded-full bg-[#f69d00] flex items-center justify-center shrink-0">
								<MapPin size={20} className="text-white" />
							</div>
							<div>
								<p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-white">
									Madu Al Tasman
								</p>
								<p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-white/80">
									Puri Indah Sidoarjo
								</p>
							</div>
						</div>
					</div>

					{/* Quick info sidebar */}
					<div className="flex-[1_1_0] min-w-[240px] flex flex-col gap-[16px]">
						{[
							{ label: "Hari Buka", value: "Senin – Sabtu" },
							{ label: "Jam Layanan", value: "08.00 – 17.00 WIB" },
							{ label: "Pengiriman", value: "Seluruh Indonesia" },
							{ label: "Minimum Order", value: "Tidak ada minimum" },
						].map((item) => (
							<div
								key={item.label}
								className="flex justify-between items-center bg-white rounded-[12px] px-[20px] py-[16px] border border-[#e9eaeb]"
							>
								<p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#717680]">
									{item.label}
								</p>
								<p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#181d27] text-right">
									{item.value}
								</p>
							</div>
						))}

						<a
							href="https://wa.me/628155001505"
							target="_blank"
							rel="noopener noreferrer"
							className="mt-[8px] flex items-center justify-center gap-[8px] border-2 border-[#f69d00] text-[#f69d00] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] leading-[24px] px-[20px] py-[12px] rounded-[10px] hover:bg-[#f69d00] hover:text-white transition-colors"
						>
							<MapPin size={16} />
							Petunjuk Arah
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function Contact() {
	return (
		<div className="flex flex-col items-center w-full">
			<ContactHero />

			{/* Main contact grid */}
			<div className="w-full py-[80px] flex flex-col items-center bg-[#fafafa]">
				<div className="w-[1280px] max-w-full px-[32px]">
					<div className="flex gap-[64px] items-start flex-wrap">
						<div className="flex-[1_1_0] min-w-[280px]">
							<ContactInfo />
						</div>
						<div className="flex-[1_1_0] min-w-[320px] bg-white rounded-[20px] p-[40px] border border-[#e9eaeb] shadow-[0px_4px_24px_rgba(0,0,0,0.06)]">
							<ContactForm />
						</div>
					</div>
				</div>
			</div>

			<LocationSection />
		</div>
	);
}
