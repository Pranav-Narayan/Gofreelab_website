// "use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import './Navbar.scss'
import { motion } from "framer-motion";


const  NavLink= ({link}) => {
    const pathName = usePathname();

  return (
        <Link href={link.url} className="text-md font-semibold hover:text-blue-800">
          {link.title}
      </Link>
  )
}

export default NavLink





// className={`navlink rounded p-1 hover:text-red-700 text-shadow-none ${pathName===link.url && "font-bold"}`}