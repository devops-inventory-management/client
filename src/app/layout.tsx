import type { Metadata } from "next";
import { Inter } from "next/font/google";
import DashboardWrapper from "./dashboardWrapper";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Fuck yeah it works!",
	description:
		"Super simple inventory management for Technifutur DevOps 2023 - 2024",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<DashboardWrapper>{children}</DashboardWrapper>
			</body>
		</html>
	);
}
