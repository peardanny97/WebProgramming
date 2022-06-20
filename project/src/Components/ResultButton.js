import "./ResultButton.css";
import { Backdrop } from "@mui/material";

function ResultButton(props) {
    setTimeout(() => {
        props.setOpen(false);
    }, 1500);

    return (
        <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={props.open}
        >
            {props.component}
        </Backdrop>
    );
}

function CorrectButton(props) {
    return (
        <ResultButton
            {...props}
            component={
                <div className="result-alert" style={{backgroundColor:"green"}}>
                    정답!
                </div>
            }
        />
    );
}

function WrongButton(props){
    return (
        <ResultButton
            {...props}
            component={
                <div className="result-alert" style={{backgroundColor:"red"}}>
                    오답!
                </div>
            }
        />
    );
}

export { CorrectButton, WrongButton };
