import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from '../../../store/withReducer';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import reducer from '../../../store';
import OtnBroadcastHeader from './OtnBroadcastHeader';
import OtnBroadcastMain from './OtnBroadcastMain';

function OtnBroadcast() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <FusePageCarded
      header={<OtnBroadcastHeader />}
      content={<OtnBroadcastMain/>}
      scroll={isMobile ? 'normal' : 'content'}
    />
  );
}

export default withReducer('eCommerceApp', reducer)(OtnBroadcast);


