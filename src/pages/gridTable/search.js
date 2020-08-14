import React, { useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Paper,
  Button,
  TextField,
  Chip,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import useStyles from "./style";
import clsx from "clsx";
import { categories as categoriesDataBase } from "../../variables/evaluation";
import { useCanvas } from "./Context/canvas.js";

export default function Search() {
  const { setCategories, categories, setSkills } = useCanvas();
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.paperInfoSquad);
  const [filteredSkills, setFilteredSkills] = useState([]); //lista dos netos encontrados.
  const [skillFilteredCategories, setSkillFilteredCategories] = useState([]); //lista de netos selecionados por TAG
  const [reloadTag, setReloadTag] = useState(true); //limpa Tags
  const [textSkill, setTextSkill] = useState(false); //mostra o texto no input skill
  const [showOptionText, setShowOptionText] = useState(true); //não mostra o erro quando true

  const searchSkills = (event) => {
    setFilteredSkills([]);

    if (event.target?.value?.length > 2) {
      setShowOptionText(false);
      categories.map((x) => {
        let a = x?.filho.map((y) => {
          let b = y?.neto.filter((z) => {
            if (
              z.name.toLowerCase().includes(event.target.value.toLowerCase())
            ) {
              setFilteredSkills((skill) => [...skill, z]);
              return z;
            }
            return null;
          });
          return b;
        });
        return a;
      });
    } else {
      setShowOptionText(true);
    }
  };

  const searchCategories = [];

  return (
    <Grid item xs={12}>
      <Paper className={fixedHeightPaper}>
        <Grid container spacing={1}>
          <Grid item lg={4} container direction="column">
            <Typography className={classes.typographyBold}>
              Categoria
            </Typography>
            <TextField
              margin="none"
              size="small"
              placeholder="Pesquisar"
              variant="outlined"
            />
            <Typography variant="caption">
              Digite no mínimo 3 caracteres
            </Typography>
          </Grid>
          <Grid item lg={4} container direction="column">
            <Typography className={classes.typographyBold}>
              Habilidade
            </Typography>
            <Autocomplete
              noOptionsText="Habilidade não encontrada"
              multiple
              size="small"
              limitTags={2}
              options={filteredSkills}
              freeSolo={showOptionText}
              filterSelectedOptions
              key={reloadTag}
              getOptionLabel={(option) => option.name}
              renderTags={(value, getTagProps) => {
                setSkillFilteredCategories(value);
                return value?.map((option, index) => (
                  <Chip
                    variant="outlined"
                    label={option.name}
                    size="small"
                    {...getTagProps({ index })}
                    color="primary"
                  />
                ));
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  margin="none"
                  size="small"
                  onFocus={() => {
                    setTextSkill(true);
                  }}
                  variant="outlined"
                  onChange={searchSkills}
                  onBlur={() => {
                    setTextSkill(false);
                  }}
                />
              )}
            />
            {textSkill && (
              <Typography variant="caption">
                Digite no mínimo 3 caracteres
              </Typography>
            )}
          </Grid>
          <Grid
            item
            lg={4}
            container
            alignItems="center"
            justify="flex-end"
            spacing={2}
          >
            <Button
              variant="outlined"
              onClick={() => {
                setFilteredSkills([]);
                setSkillFilteredCategories([]);
                setReloadTag((t) => !t);
                setCategories(categoriesDataBase);
              }}
            >
              Limpar
            </Button>
            <Box p={1} />
            <Button
              color="secondary"
              variant="contained"
              onClick={async () => {
                await setSkills(skillFilteredCategories?.map((x) => x.id));
                setCategories((x) =>
                  x.filter((pai) => {
                    let arrayFilhos = pai.filho.filter((filho) => {
                      let arrayNeto = filho.neto.filter((neto) => {
                        let skills = skillFilteredCategories.some((x) => {
                          return (
                            x.name.toLowerCase() === neto.name.toLowerCase()
                          );
                        });
                        return skills;
                      });
                      return arrayNeto.length > 0 && (filho.neto = arrayNeto);
                    });
                    return arrayFilhos.length > 0 && (pai.filho = arrayFilhos);
                  })
                );
              }}
            >
              Filtrar
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
