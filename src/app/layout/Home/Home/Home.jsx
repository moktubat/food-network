import ContentArea from "../ContentArea/ContentArea";
import MenuArea from "../MenuArea/MenuArea";
import SettingArea from "../SettingArea/SettingArea";

const Home = () => {
    return (
        <div className="bg-[#EEF0F2] ml-[70px] rounded-ss-3xl pt-3 pl-4 flex justify-between">
            <MenuArea></MenuArea>
            <ContentArea></ContentArea>
            <SettingArea></SettingArea>
        </div>
    );
};

export default Home;