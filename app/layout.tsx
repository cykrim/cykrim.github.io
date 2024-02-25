import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
	title: {
		default: "Mirko Renzelli | Penetration Tester | Software Engineer",
		template: "%s | Pentester | Software Engineer",
	},
	description: "Penetration Tester & Red Teamer Profile",
	openGraph: {
		title: "Mirko Renzelli | Penetration Tester | Software Engineer",
		description:
			"Penetration Tester & Red Teamer",
		url: "https://cykrim.github.io",
		siteName: "cykrim.github.io",
		images: [
			{
				url: "https://cykrim.github.io/cykrim.jpg",
				width: 1024,
				height: 530,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "cykrim",
		card: "summary_large_image",
		creator: '@cykrim'
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<head>
        		<Analytics />
      		</head>
			<body
				className="bg-black"
			>
				{children}
			</body>
		</html>
	);
}
