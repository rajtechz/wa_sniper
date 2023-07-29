import FusePageCarded from "@fuse/core/FusePageCarded";
import withReducer from "../../../store/withReducer";
import useThemeMediaQuery from "@fuse/hooks/useThemeMediaQuery";
import reducer from "../../../store";
import MultiMediaPostHeader from "./CtaPostHeader";
import CtaPostMain from "./CtaPostMain";
import CreateNewPost from "./CreateCtaPost";

function CtaPostApp() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down("lg"));

  return (
    <>
      <FusePageCarded
        //   header={<MultiMediaPostHeader />}
        content={<CtaPostMain />}
        scroll={isMobile ? "normal" : "content"}
      />
    </>     
  );
}

export default withReducer("eCommerceApp", reducer)(CtaPostApp);
