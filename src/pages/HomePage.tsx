import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <PageHeader />
      {/* hero section */}
      <div className="py-5 grid gap-4">
        <div className="grid gap-4">
          <div className="grid gap-1">
            <h1 className="font-bold text-4xl lg:max-w-96">
              Ang Epekto ng Social Media sa Kalusugang Pangkaisipan
            </h1>
            <p className="text-slate-500">
              Isang mundo ng koneksyon. Isang tanong: Kumusta ka talaga?
            </p>
          </div>
          <Button size={"lg"} className="cursor-pointer max-w-56" onClick={() => navigate('/feedback')}>
            Ibahagi ang Nararamdaman
          </Button>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-1">
            <h2 className="text-2xl font-bold">
              Sa panahon ng mabilisang likes, endless scrolls, at online
              validation... paano na ang ating sarili?
            </h2>
            <p>
              Ang website na ito ay nilikha upang tuklasin, talakayin, at
              tugunan ang epekto ng social media sa mental health ng mga
              mag-aaral. Mula sa mga datos ng pananaliksik, tips para sa mas
              malusog na pag-iisip, hanggang sa espasyong ligtas para magbahagi
              ng iyong saloobin—lahat ng ito, nasa isang click lang.
            </p>
          </div>
          {/* cards */}
          <div className="flex flex-col gap-2 sm:flex-row justify-around">
            <Card className="bg-cyan-200 sm:max-w-[236px] w-full hover:scale-110 transition-all ease-in">
              <CardContent>
                <span className="flex justify-center text-xl mb-2 ">🔍</span>
                <p className="text-center font-semibold">
                  Alamin ang katotohanan.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-cyan-200 sm:max-w-[236px] w-full hover:scale-110 transition-all ease-in">
              <CardContent>
                <span className="flex justify-center text-xl mb-2">🧠</span>
                <p className="text-center font-semibold">Alagaan ang sarili.</p>
              </CardContent>
            </Card>
            <Card className="bg-cyan-200 sm:max-w-[236px] w-full hover:scale-110 transition-all ease-in">
              <CardContent>
                <span className="flex justify-center text-xl mb-2">💬</span>
                <p className="text-center font-semibold">
                  Makilahok sa usapan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="py-5 grid gap-4">
        <div className="grid gap-1">
          <h2 className="text-2xl font-bold">Panimula</h2>
          <p className="border-l-4 pl-4 border-[#00Bfff]">
            Ang teknolohiya ay patuloy na umuusbong at palaging ginagamit ng mga
            tao. Dahil sa patuloy na pag-usbong ng teknolohiya, nagkakaroon ng
            mga imbensiyon tulad na lamang ng mga gadget at Internet, na kung
            saan may mahalagang papel ang gampanin nila sa panahon ngayon. Isa
            rin sa mga may malalaking papel ay ang social media. Dahil sa social
            media, posibleng makisalamuha ang mga tao digitally, pinapadali ang
            pakikipag-usap sa iba at madali na makakuha ng impormasyon ang mga
            nagamit ng social media. Gayunpaman, nagkakaroon ng parte ang social
            media sa kalusugang pangkaisipan at pagpapahalaga sa sarili.
          </p>
        </div>
        <div className="grid gap-1">
          <h2 className="text-2xl font-bold">Kahalagahan Nito</h2>
          <p className="border-l-4 pl-4 border-[#00Bfff]">
            Malalaman dito kung sino ang mga nakakakuha ng benepisyo sa layunin
            ng proyekto na masuri ang epekto ng social media sa kalusugang
            pangkaiisipan at pagpapahalaga sa sarili. Dito, nakapaloob ang mga
            matutulungan ng malaki:
          </p>
          <ul className="list-decimal pl-4 grid gap-2">
            <li>
              <strong>Mga Mag-aaral</strong> – Matutulungan silang maging mas
              mapanuri sa kanilang paggamit ng social media upang mapanatili ang
              kalusugang pangkaisipan.
            </li>
            <li>
              <strong>Mga Magulang</strong> – Magbibigay ito ng kaalaman sa
              epekto ng social media upang mas magabayan nila ang kanilang mga
              anak.
            </li>
            <li>
              <strong>Mga Guro</strong> – Maaaring gamitin ang impormasyon sa
              pagtuturo at paggabay sa mga mag-aaral tungkol sa tamang paggamit
              ng social media.
            </li>
            <li>
              <strong>Mga Mananaliksik</strong> – Maglilingkod bilang sanggunian
              para sa mga susunod pang pag-aaral sa paksang ito.
            </li>
          </ul>
        </div>
        <div className="grid gap-1">
          <h2 className="text-2xl font-bold">Layunin</h2>
          <ul className="list-disc pl-4 grid gap-2">
            <li>
              Bigyan ng kaalaman ang mga tao ukol sa nadudulot ng social media
              sa kalusugang pangkaisipan at pagpapahalaga sa sarili.
            </li>
            <li>
              Masukat kung gaano na nakakaapekto ang social media sa kanila.
            </li>
            <li>
              Mabigyan ng mga payo kung paano ang wastong paggamit ng social
              media.
            </li>
            <li>
              Mabigyan kaalaman kung paano aalagaan ang sarili at kalusugang
              pangkaisipan.
            </li>
            <li>Mapabuti ang kalusugang pangkaisipan.</li>
            <li>Maiwasan ang mga nakakasamang parte ng social media.</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default HomePage;
