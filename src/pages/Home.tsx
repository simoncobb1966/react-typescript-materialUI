import React, { FC, ReactElement, useState } from "react";
import { Helmet } from "react-helmet";
import TextField from "@material-ui/core/TextField";
import { makeStyles, createStyles } from "@material-ui/core/styles";

// components
import PageTitle from "../components/PageTitle";

// constants
import { APP_TITLE, PAGE_TITLE_HOME } from "../utils/constants";

// define css-in-js
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  })
);

const Home: FC<{}> = (): ReactElement => {
  const classes = useStyles();

  const [strName, setStrname] = useState("");
  const [objValidation, setObjvalidation] = useState({
    isValid: true,
    strValidationError: "1 is in the string",
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStrname(event.target.value);
    setObjvalidation({
      ...objValidation,
      isValid: event.target.value.search("1") === -1,
    });
  };

  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_HOME} | {APP_TITLE}
        </title>
      </Helmet>
      <div className={classes.root}>
        <PageTitle title={PAGE_TITLE_HOME} />
      </div>
      <TextField
        error={!objValidation.isValid}
        id="outlined-helperText"
        label="1 is not allowed"
        defaultValue="Default Value"
        helperText={
          objValidation.isValid ? "" : objValidation.strValidationError
        }
        variant="outlined"
        value={strName}
        onChange={changeHandler}
      />
    </>
  );
};

export default Home;
