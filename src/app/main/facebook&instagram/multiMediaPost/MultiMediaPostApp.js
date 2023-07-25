import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from '../../../store/withReducer';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import reducer from '../../../store';
import MultiMediaPostHeader from './MultiMediaPostHeader';
import MultiMediaPostMain from './MultiMediaPostMain';

function MultiMediaPostApp() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <>
    
    <FusePageCarded
    //   header={<MultiMediaPostHeader />}
    content={<MultiMediaPostMain/>}
    scroll={isMobile ? 'normal' : 'content'}
    />
    <FusePageCarded
    content
    
    
    />
    </>
  );
}

export default withReducer('eCommerceApp', reducer)(MultiMediaPostApp);


