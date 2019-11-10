import * as React from "react";

//import { css, jsx } from "@emotion/core";
import Drawer from "@material-ui/core/Drawer";
import TextField from "@material-ui/core/TextField";
import { Todo } from "./types";
import { FCHelper } from "./CommonStyles";
//const buttonStyle = css`margin 4px`;
/*
const styles = (theme: Theme): StyleRules => ({
  button: {
    margin: theme.spacing(1)
  }
});
*/
interface Props {
  //interface Props extends WithStyles<typeof styles> {
  todos: Todo[];
  onClickAddButton: (todo: string) => void;
  gotoHoge: () => void;
}

interface State {
  text: string;
}
/*
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));
*/
const TodoComponent: React.FC<Props> = ({
  todos,
  onClickAddButton,
  gotoHoge
}) => {
  const [state, setState] = React.useState<State>({ text: "" });
  const [drawerOpen, openDrawer] = React.useState(false);
  //const classes = useStyles();
  const helper = new FCHelper();
  const { text } = state;
  return (
    <div style={{ width: "500px", margin: "0 auto" }}>
      <h1>TODO</h1>
      <TextField
        value={text}
        onChange={e => setState({ text: e.currentTarget.value })}
      />
      {helper.button("Add todo", () => onClickAddButton(state.text))}
      {helper.button("Drawer", () => openDrawer(true))}
      {helper.button("Hoge", gotoHoge)}
      <ul>
        {todos.map((o, i) => (
          <li key={i}>{o.title}</li>
        ))}
      </ul>
      <Drawer open={drawerOpen} onClose={() => openDrawer(false)}>
        Drawer
      </Drawer>
    </div>
  );
};

//export default withStyles(styles)(TodoComponent);

export default TodoComponent;
