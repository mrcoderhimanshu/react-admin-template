
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SideNav from "../components/navigations/SideNav";
import MainPage from "../Pages/MainPage";


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },

}));

const AdminLayout = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div className={classes.root}>
            <SideNav />
            <MainPage />
        </div>
    );
}
export default AdminLayout;