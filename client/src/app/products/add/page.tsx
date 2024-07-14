import ProductAddForm from "@/app/products/add/product-add-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div>
      <div className="mb-4">Trang thêm sản phẩm mới</div>
      
      <ProductAddForm />
    </div>
  );
}
