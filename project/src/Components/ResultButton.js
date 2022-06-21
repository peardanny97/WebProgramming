import "./ResultButton.css";
import { Backdrop } from "@mui/material";
import { useEffect } from "react";

function ResultButton(props) {
    useEffect(() => {
        setTimeout(() => {
            props.setOpen(false);
        }, 1000);
    }, [props.open]);

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
                <div
                    className="result-alert"
                    style={{
                         backgroundColor: "#95D03A",
                         borderRadius:"10%"
                        }}
                >
                    정답!
                </div>
            }
        />
    );
}

function WrongButton(props) {
    return (
        <ResultButton
            {...props}
            component={
                <div
                    className="result-alert"
                    style={{ 
                        backgroundColor: "#CB2027",
                        borderRadius:"10%"
                    }}
                >
                    오답!
                </div>
            }
        />
    );
}

export { CorrectButton, WrongButton };
