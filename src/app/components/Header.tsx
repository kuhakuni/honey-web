import { Link, useLocation } from "react-router";
import svgPaths from "../../imports/Desktop/svg-02xrwvybo0";

function Logotype() {
	return (
		<div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
			<p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
				Madu Al Tasman
			</p>
		</div>
	);
}

function LogoWrap() {
	return (
		<div className="content-stretch flex gap-[12px] h-[53px] items-center justify-center relative shrink-0">
			<Logotype />
		</div>
	);
}

function Logo() {
	return (
		<Link to="/" className="content-stretch flex items-start relative shrink-0">
			<LogoWrap />
		</Link>
	);
}

function Navigation() {
	const location = useLocation();

	const isActive = (path: string) => {
		return location.pathname === path;
	};

	return (
		<div className="content-stretch flex gap-[20px] items-center relative shrink-0">
			<Link
				to="/"
				className="content-stretch flex items-start relative shrink-0"
			>
				<div className="content-stretch flex items-center justify-center relative shrink-0">
					<p
						className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] whitespace-nowrap ${
							isActive("/") ? "text-black" : "text-[#535862]"
						}`}
					>
						Home
					</p>
				</div>
			</Link>

			<Link
				to="/about"
				className="content-stretch flex items-start relative shrink-0"
			>
				<div className="content-stretch flex items-center justify-center relative shrink-0">
					<p
						className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] whitespace-nowrap ${
							isActive("/about") ? "text-black" : "text-[#535862]"
						}`}
					>
						About
					</p>
				</div>
			</Link>

			<Link
				to="/products"
				className="content-stretch flex flex-col items-center py-[4px] relative shrink-0"
			>
				<div className="content-stretch flex items-start relative shrink-0">
					<div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
						<p
							className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] whitespace-nowrap ${
								isActive("/products") ? "text-black" : "text-[#535862]"
							}`}
						>
							Products
						</p>
						<div className="overflow-clip relative shrink-0 size-[20px]">
							<div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]">
								<div className="absolute inset-[-16.7%_-8.35%]">
									<svg
										className="block size-full"
										fill="none"
										preserveAspectRatio="none"
										viewBox="0 0 11.67 6.67"
									>
										<path
											d={svgPaths.pe116dc0}
											stroke={isActive("/products") ? "#000" : "#535862"}
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.67"
										/>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Link>

			<Link
				to="/contact"
				className="content-stretch flex items-start relative shrink-0"
			>
				<div className="content-stretch flex items-center justify-center relative shrink-0">
					<p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">
						Contact
					</p>
				</div>
			</Link>
		</div>
	);
}

export default function Header() {
	return (
		<div className="content-stretch flex flex-col h-[80px] items-center justify-center px-[40px] w-full bg-white">
			<div className="flex-[1_0_0] min-h-px relative w-full">
				<div className="flex flex-row items-center justify-center size-full">
					<div className="content-center flex flex-wrap gap-0 items-center justify-center px-[32px] relative size-full">
						<div className="content-stretch flex gap-[32px] items-center relative shrink-0">
							<Logo />
							<Navigation />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
