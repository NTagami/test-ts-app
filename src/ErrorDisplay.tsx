import * as React from "react";
import { connect, DispatchProp } from "react-redux";

import { RootState, CommonState } from "./store";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from '@material-ui/core/DialogTitle';
import { CommonActionType } from "./action";
import { FCHelper } from "./CommonStyles";

type Props = CommonState & DispatchProp;

const ErrorDipsplay: React.FC<Props> = ({ dispatch, error }) => {
  const helper = new FCHelper();
  return (
    <Dialog
      open={error != null}
      onClose={() => {
        dispatch({ type: CommonActionType.CLEAR_ERROR });
      }}
    >
        <DialogTitle>Error</DialogTitle>
      <DialogContent>
        <DialogContentText>{error ?? ""}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {helper.button("OK", () => {
          dispatch({ type: CommonActionType.CLEAR_ERROR });
        })}
      </DialogActions>
    </Dialog>
  );
};

export default connect<CommonState, {}, {}, RootState>(st => st.common)(
  ErrorDipsplay
);
