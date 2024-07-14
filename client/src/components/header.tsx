import ButtonLogout from "@/components/button-logout";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import Link from "next/link";

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
          <li style={{ marginRight: "1rem" }}>
            <Link href="/products">Sản phẩm</Link>
          </li>
          <li style={{ marginRight: "1rem" }}>
            |
          </li>
          {/* TODO: check sessionToken to show actions */}
          {/* if */}
          <li style={{ marginRight: "1rem" }}>
            <Link href="/me">Thông tin cá nhân</Link>
          </li>
          <li style={{ marginRight: "1rem" }}>
            <ButtonLogout />
          </li>
          {/* else */}
          <li style={{ marginRight: "1rem" }}>
            <Link href="/login">Đăng nhập</Link>
          </li>
          <li style={{ marginRight: "1rem" }}>
            <Link href="/register">Đăng ký</Link>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
