import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";
import SectionLayout from "@/components/SectionLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <PageHeader />
      {/* hero section */}
      <SectionLayout>
        <div className="grid gap-8">
          <div className="grid gap-1">
            <h1 className="font-bold text-4xl lg:max-w-96">
              Ang Epekto ng Social Media sa Kalusugang Pangkaisipan
            </h1>
            <p className="text-slate-500">
              Isang mundo ng koneksyon. Isang tanong: Kumusta ka talaga?
            </p>
          </div>
          <Button
            size={"lg"}
            className="cursor-pointer max-w-56"
            onClick={() => navigate("/feedback")}
          >
            Ibahagi ang Nararamdaman
          </Button>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-1">
            <h2 className="text-2xl font-bold">
              Sa panahon ng mabilisang likes, endless scrolls, at online
              validation... paano na ang ating sarili?
            </h2>
            <p className="leading-8">
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
      </SectionLayout>
      <SectionLayout>
        <div className="grid gap-1 leading-8">
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
        <div className="grid gap-1 leading-8">
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
        <div className="grid gap-1 leading-8">
          <h2 className="text-2xl font-bold">Layunin</h2>
          <ul className="list-disc pl-8 grid gap-2">
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
        <div className="grid gap-4">
          <h2 className="text-2xl font-bold">
            Buod ng Natuklasan at mga Rekomendasyon
          </h2>
          <p className="leading-8 border-l-4 pl-4 border-[#00Bfff]">
            Batay sa resulta ng pananaliksik, mataas ang antas ng paggamit ng
            social media ng mga mag-aaral ng Batangas State University Lipa
            Campus. Karamihan ay gumagamit nito araw-araw para sa{" "}
            <strong>libangan</strong>,<strong> impormasyon</strong>,
            <strong> at pakikipagkomunikasyon</strong>, ayon sa kanilang mga
            sagot sa “oras ng paggamit,” “madalas na paggamit,” at “layunin ng
            paggamit,” na may mean scores mula 3.07 hanggang 3.45.
          </p>
          <div className="grid gap-2 leading-8">
            <p className="border-l-4 pl-4 border-[#00Bfff]">
              Sa aspeto ng <strong> kalusugang pangkaisipan</strong>, lumabas na
              may negatibong epekto gaya ng <strong> stress</strong>,
              <strong> pagkaadik</strong>, <strong> pagkabalisa</strong>,
              <strong> at pagbaba ng self-esteem</strong>, ngunit may indikasyon
              din ng positibong mekanismo ng pagharap ng mga estudyante. Ayon sa
              Pearson’s r analysis:
            </p>
            <ul className="list-disc pl-8 space-y-2">
              <li>
                May <strong>malakas na ugnayan</strong> sa pagitan ng tagal ng
                paggamit at epekto sa mental health (r = 0.68)
              </li>
              <li>
                <strong>Katamtamang ugnayan</strong> sa pakikisalamuha (r =
                0.55)
              </li>
              <li>
                <strong>Mahinang ugnayan</strong> sa uri ng paggamit (active o
                passive) (r = 0.31)
              </li>
            </ul>
          </div>
          <p className="border-l-4 pl-4 border-[#00Bfff]">
            Dahil dito, inirerekomenda ang pagsasagawa ng{" "}
            <strong>
              seminar, support programs, at integrasyon ng media literacy sa
              kurikulum
            </strong>{" "}
            upang matugunan ang epekto ng social media sa mental health ng mga
            mag-aaral.
          </p>
        </div>
      </SectionLayout>
    </PageLayout>
  );
};

export default HomePage;
