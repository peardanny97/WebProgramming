import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
} from "@mui/material";

function HintDialog({left, right, handleClose, showHint}) {
    return (
        <>
            <Dialog open={showHint} onClose={handleClose}>
                <DialogTitle>힌트</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {left.title}: {left.hint}<br/><br/>
                        {right.title}: {right.hint}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>확인</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default HintDialog;