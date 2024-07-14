import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div>
      <div>ProductsPage</div>
      <Button>
        <Link href="/products/add">Thêm sản phẩm</Link>
      </Button>
    </div>
  );
}
