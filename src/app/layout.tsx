import type { Metadata } from "next";
import { Inter } from "next/font/google";
import DashboardWrapper from "./dashboardWrapper";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "DevOps Inventory Management",
	description: "Inventory Management for DevOps",
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
