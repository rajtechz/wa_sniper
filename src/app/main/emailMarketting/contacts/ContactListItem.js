import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { AddCircleOutline, Update } from '@material-ui/icons';


function ContactListItem(props) {
  const { contact } = props;
  return (
    <>
      <ListItem
        className="px-32 py-16"
        sx={{ bgcolor: 'background.paper' }}
        button
        to={`/apps/contacts/${contact.id}`}
      >
        <FuseSvgIcon   size={20} style={{ marginRight: '10px' }}>heroicons-solid:user-group</FuseSvgIcon>

        <ListItemText
          classes={{ root: 'm-0', primary: 'font-medium leading-5 truncate' }}
          primary={contact.name}

        />
        

      <Button
       component={NavLinkAdapter}
       to="new/edit"
      >
      <FuseSvgIcon size={20}>heroicons-outline:plus</FuseSvgIcon>

      </Button>
      <Button>
      <FuseSvgIcon size={20}>heroicons-outline:pencil</FuseSvgIcon>
      </Button>
      <Button>
      <FuseSvgIcon size={20}>heroicons-outline:trash</FuseSvgIcon>
      </Button>
      </ListItem>
      <Divider />
    </>
  );
}

export default ContactListItem;
