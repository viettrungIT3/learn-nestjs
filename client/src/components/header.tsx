"use client";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="sticky top-0"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <div>
        <Image src="/vercel.svg" alt="Logo" width={100} height={50} />
      </div>
      <nav>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {localStorage.getItem("sessionToken") != "" ? (
            <>
              <li style={{ marginRight: "1rem" }}>
                <Link href="/me">Thông tin cá nhân</Link>
              </li>
              <li style={{ marginRight: "1rem" }}>
                <Link href="/logout">Đăng xuất</Link>
              </li>
            </>
          ) : (
            <>
              <li style={{ marginRight: "1rem" }}>
                <Link href="/login">Đăng nhập</Link>
              </li>
              <li style={{ marginRight: "1rem" }}>
                <Link href="/register">Đăng ký</Link>
              </li>
            </>
          )}
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
