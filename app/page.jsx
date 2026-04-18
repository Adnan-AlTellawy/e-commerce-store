import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]" dir="ltr">
      <HeaderSlider />
      <HomeProducts />
      <Banner />
      <NewsLetter />
    </main>
  );
}
