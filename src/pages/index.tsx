import { Layout } from "@/components/Layout";
import { Sidebar } from "@/components/Sidebar";
import { Forecast } from "@/components/Forecast";
import { DateInput } from "@/components/DateInput";
import { NumberInput } from "@/components/NumberInput";
import { GeocoderInput } from "@/components/GeocoderInput";

const Home = () => {
  return (
    <Layout>
      <Sidebar>
        <NumberInput />
        <GeocoderInput />
        <DateInput />
      </Sidebar>
      <Forecast />
    </Layout>
  );
};

export default Home;
