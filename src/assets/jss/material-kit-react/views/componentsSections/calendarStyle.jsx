import { container, title} from "assets/jss/material-kit-react.jsx";
import image from "assets/img/calendar-background.jpg";

const calendarStyle = {
    section: {
        minHeight: "110vh",
        maxHeight: "1600px",
        overflow: "hidden",
        padding: "70px 0",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        margin: "0",
        border: "0",
        display: "flex",
        alignItems:"center",
        backgroundImage: "url(" + image + ")"
    },
    section2:{
        minHeight: "110vh",
        maxHeight: "1600px",
        minWidth: "400px",
        maxWidth: "800px",
        overflow: "hidden",
        margin: "0",
        border: "0",
        display: "flex",
        alignItems: "center",
        background: "#EEEEEE"
    },
    container,
    title: {
        ...title,
        color: "#FFFFFF",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none",
        justify: "center"
    },
};

export default calendarStyle;
