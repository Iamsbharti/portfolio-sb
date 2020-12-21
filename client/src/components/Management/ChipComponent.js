import React, { useEffect, useState } from "react";
import { InputLabel, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ChipInput from "material-ui-chip-input";
const ChipComponent = ({ chips, type, updateChipContent }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      listStyle: "none",
      padding: theme.spacing(0.5),
      margin: 0,
    },
    chip: {
      margin: theme.spacing(0.5),
      backgroundColor: "white",
      color: "black",
    },
  }));
  const chipClasses = useStyles();
  const [chipValues, setChipValues] = useState();
  useEffect(() => {
    setChipValues(chips);
  }, [chips]);

  const updateChip = (chip, action) => {
    console.log("updating chip", chip, action);
    switch (action) {
      case "add":
        let addedChips = [...chipValues, chip];
        console.log("addedChips:", addedChips);
        setChipValues(addedChips);
        updateChipContent(addedChips, type);

        break;
      case "delete":
        let deletedChips = chipValues.filter((val) => val !== chip);
        setChipValues(deletedChips);
        updateChipContent(deletedChips, type);
        break;
      default:
    }
  };
  return (
    <>
      <InputLabel htmlFor={type}>{type}</InputLabel>
      <Paper className={chipClasses.root}>
        <ChipInput
          value={chipValues}
          onAdd={(chip) => updateChip(chip, "add")}
          onDelete={(chip, index) => updateChip(chip, "delete")}
        />
      </Paper>
    </>
  );
};
export default ChipComponent;
