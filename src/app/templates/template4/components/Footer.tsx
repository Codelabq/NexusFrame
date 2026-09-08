import Link from "next/link";

interface FooterLink {
	label: string;
	href: string;
}

interface FooterColumn {
	header: string;
	links: FooterLink[];
}

const footerColumns: FooterColumn[] = [
	{
		header: "Get to Know Us",
		links: [
			{ label: "Careers", href: "#" },
			{ label: "PrimeMart Corporate Blog", href: "#" },
			{ label: "About PrimeMart", href: "#" },
			{ label: "Investor Relations", href: "#" },
			{ label: "PrimeMart Science & Lab", href: "#" },
		],
	},
	{
		header: "Make Money with Us",
		links: [
			{ label: "Sell products on PrimeMart", href: "#" },
			{ label: "Sell on PrimeMart Business", href: "#" },
			{ label: "Become an Affiliate", href: "#" },
			{ label: "Advertise Your Products", href: "#" },
			{ label: "Host an Hub Locker", href: "#" },
		],
	},
	{
		header: "Payment Products",
		links: [
			{ label: "PrimeMart Rewards Card", href: "#" },
			{ label: "Shop with Points", href: "#" },
			{ label: "Reload Your Balance", href: "#" },
			{ label: "PrimeMart Currency Converter", href: "#" },
		],
	},
	{
		header: "Let Us Help You",
		links: [
			{ label: "PrimeMart and COVID-19", href: "#" },
			{ label: "Your Account", href: "#" },
			{ label: "Your Orders", href: "#" },
			{ label: "Shipping Rates & Policies", href: "#" },
			{ label: "Returns & Replacements", href: "#" },
			{ label: "Help Center", href: "#" },
		],
	},
];

const bottomLinks = [
	{ label: "Conditions of Use", href: "#" },
	{ label: "Privacy Notice", href: "#" },
	{ label: "Consumer Health Data Privacy", href: "#" },
	{ label: "Your Ads Privacy Choices", href: "#" },
];

function FooterColumn({ column }: { column: FooterColumn }) {
	return (
		<div>
			<h3 className="text-lg font-bold text-slate-800 mb-4">{column.header}</h3>
			<ul className="space-y-2">
				{column.links.map((link, index) => (
					<li key={index}>
						<Link
							href={link.href}
							className="text-sm text-slate-600 hover:underline transition-colors duration-150"
						>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default function Footer() {
	return (
		<footer className="w-full bg-[#f2f4f8]">
			{/* Top Section - Links Grid */}
			<div className="max-w-7xl mx-auto py-10 px-4">
				<nav className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{footerColumns.map((column, index) => (
						<FooterColumn key={index} column={column} />
					))}
				</nav>
			</div>

			{/* Bottom Section - Legal/Copyright */}
			<div className="bg-[#e8ebf1]">
				<div className="max-w-7xl mx-auto py-8 flex flex-col items-center gap-2">
					{/* Bottom Inline Links */}
					<div className="flex flex-wrap justify-center gap-4 text-xs">
						{bottomLinks.map((link, index) => (
							<Link
								key={index}
								href={link.href}
								className="text-slate-600 hover:text-slate-900 hover:underline transition-colors duration-150"
							>
								{link.label}
							</Link>
						))}
					</div>

					{/* Copyright Text */}
					<p className="text-xs text-slate-600">
						© 2024 PrimeMart, Inc. or its affiliates. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
