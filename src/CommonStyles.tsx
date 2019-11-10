/** @jsx jsx */
import * as React from "react";

import { css, jsx } from "@emotion/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

export const vertical = css`
  display: flex;
  flex-direction: column;
`;

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

// React.FC の中で使用可
export class FCHelper {
  private classes = useStyles();

  public button = (message: string, onClick: () => void) => {
    return (
      <Button
        className={this.classes.button}
        onClick={onClick}
        variant="contained"
        color="primary"
      >
        {message}
      </Button>
    );
  };
}
