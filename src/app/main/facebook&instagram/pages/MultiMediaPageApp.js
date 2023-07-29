import FusePageCarded from "@fuse/core/FusePageCarded";
import withReducer from "../../../store/withReducer";
import useThemeMediaQuery from "@fuse/hooks/useThemeMediaQuery";
import reducer from "../../../store";
import MultiMediaPageMain from "./MultiMediaPageMain";
import MultiMediaPageHeader from "./MultiMediaPageHeader";

function MultiMediaPageApp() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down("lg"));

  return (
    <>
      <FusePageCarded
        header={<MultiMediaPageHeader />}
        content={<MultiMediaPageMain />}
        scroll={isMobile ? "normal" : "content"}
      />
    </> 
  );
}

export default withReducer("eCommerceApp", reducer)(MultiMediaPageApp);
