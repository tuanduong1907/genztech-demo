import HeadSeo from "../../components/SEO";
import TablePriceIntro from "./TablePriceIntro";

export default function TablePricePage() {
  return (
    <>
      <HeadSeo title="Bảng Giá | Genztech.vn" />
      <div className="container content distance-header">
        <TablePriceIntro></TablePriceIntro>
      </div>
    </>
  );
}
