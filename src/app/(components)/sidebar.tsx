"use client";

import {
	ArchiveIcon,
	CircleDollarSignIcon,
	ClipboardIcon,
	LayoutIcon,
	LucideIcon,
	MenuIcon,
	SlidersHorizontalIcon,
	UserIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
	href: string;
	icon: LucideIcon;
	label: string;
	isCollapsed: boolean;
}

const SidebarLink = ({
	href,
	icon: Icon,
	label,
	isCollapsed,
}: SidebarLinkProps) => {
	const pathname = usePathname();
	const isActive =
		pathname === href || (pathname === "/" && href === "/dashboard");

	return (
		<Link href={href}>
			<div
				className={`cursor-pointer flex items-center ${
					isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
				}
        hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
					isActive ? "bg-blue-200 text-white" : ""
				}
      }`}
			>
				<Icon className="w-6 h-6 !text-gray-700" />

				<span
					className={`${
						isCollapsed ? "hidden" : "block"
					} font-medium text-gray-700`}
				>
					{label}
				</span>
			</div>
		</Link>
	);
};

export default function Sidebar() {
	return (
		<div
			className={`fixed flex flex-col "w-72 md:w-64"
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`}
		>
			{/* TOP LOGO */}
			<div
				className={`flex gap-3 justify-between md:justify-normal items-center pt-8`}
			>
				Logo
				<h1 className={`font-extrabold text-2xl`}>DevOps</h1>
				<button
					className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
					onClick={() => {}}
				>
					<MenuIcon className="w-4 h-4" />
				</button>
			</div>

			{/* LINKS */}
			<div className="flex-grow mt-8">
				<SidebarLink
					href="/dashboard"
					icon={LayoutIcon}
					label="Dashboard"
					isCollapsed={false}
				/>
				<SidebarLink
					href="/inventory"
					icon={ArchiveIcon}
					label="Inventory"
					isCollapsed={false}
				/>
				<SidebarLink
					href="/products"
					icon={ClipboardIcon}
					label="Products"
					isCollapsed={false}
				/>
				<SidebarLink
					href="/users"
					icon={UserIcon}
					label="Users"
					isCollapsed={false}
				/>
				<SidebarLink
					href="/settings"
					icon={SlidersHorizontalIcon}
					label="Settings"
					isCollapsed={false}
				/>
				<SidebarLink
					href="/expenses"
					icon={CircleDollarSignIcon}
					label="Expenses"
					isCollapsed={false}
				/>
			</div>

			{/* FOOTER */}
			<div className={`mb-10`}>
				<p className="text-center text-xs text-gray-500">&copy; 2024 DevOps</p>
			</div>
		</div>
	);
}
