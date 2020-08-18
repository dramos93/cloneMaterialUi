import React, { useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Paper,
  Button,
  TextField,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
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
  const [filteredCategories, setFilteredCategories] = useState([]); //lista dos filhos encontrados.
  const [skillFilteredCategoriesTag, setSkillFilteredCategoriesTag] = useState(
    []
  ); //lista de netos selecionados por TAG
  const [categoryFilteredTag, setCategoryFilteredTag] = useState([]); //lista de netos selecionados por TAG
  const [reloadTag, setReloadTag] = useState(true); //limpa Tags
  const [textSkill, setTextSkill] = useState(false); //mostra o texto no input skill
  const [textCategory, setTextCategory] = useState(false); //mostra o texto no input skill
  const [showOptionTextSkill, setShowOptionTextSkill] = useState(true); //não mostra o erro quando true
  const [showOptionTextCategory, setShowOptionTextCategory] = useState(true); //não mostra o erro quando true
  const [openClear, setOpenClear] = useState(false);

  const searchSkills = (event) => {
    setFilteredSkills([]);

    if (event.target?.value?.length > 2) {
      setShowOptionTextSkill(false);
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
      setShowOptionTextSkill(true);
    }
  };

  const searchCategories = (event) => {
    setFilteredCategories([]);

    if (event.target?.value?.length > 2) {
      setShowOptionTextCategory(false);
      categories.map((x) => {
        let a = x?.filho.filter((y) => {
          if (y.name.toLowerCase().includes(event.target.value.toLowerCase())) {
            setFilteredCategories((category) => [...category, y]);
            return y;
          }
          return null;
        });
        return a;
      });
    } else {
      setShowOptionTextCategory(true);
    }
  };
  
  return (
    <Grid item xs={12} lg={12}>
      <Paper className={fixedHeightPaper}>
        <Grid container spacing={1}>
          <Grid item lg={4} xs={4} container direction="column">
            <Typography className={classes.typographyBold}>
              Categoria
            </Typography>
            <Autocomplete
              noOptionsText="Categoria não encontrada"
              multiple
              filterSelectedOptions
              size="small"
              limitTags={2}
              options={filteredCategories}
              freeSolo={showOptionTextCategory}
              key={reloadTag}
              getOptionLabel={(option) => option.name}
              renderTags={(value, getTagProps) => {
                setCategoryFilteredTag(value);
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
                  variant="outlined"
                  onFocus={() => {
                    setTextCategory(true);
                  }}
                  onChange={searchCategories}
                  onBlur={() => setTextCategory(false)}
                />
              )}
            />
            {textCategory && (
              <Typography variant="caption">
                Digite no mínimo 3 caracteres
              </Typography>
            )}
          </Grid>
          <Grid item lg={4} xs={4} container direction="column">
            <Typography className={classes.typographyBold}>
              Habilidade
            </Typography>
            <Autocomplete
              noOptionsText="Habilidade não encontrada"
              multiple
              size="small"
              limitTags={2}
              options={filteredSkills}
              freeSolo={showOptionTextSkill}
              filterSelectedOptions
              key={reloadTag}
              getOptionLabel={(option) => option.name}
              renderTags={(value, getTagProps) => {
                setSkillFilteredCategoriesTag(value);
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
                  variant="outlined"
                  onFocus={() => {
                    setTextSkill(true);
                  }}
                  onChange={searchSkills}
                  onBlur={() => setTextSkill(false)}
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
            xs={4}
            container
            alignItems="center"
            justify="flex-end"
            spacing={2}
          >
            <Button
              variant="outlined"
              disabled={
                !categoryFilteredTag.length &&
                !skillFilteredCategoriesTag.length
              }
              onClick={async () => {
                setOpenClear(true);
                await setCategories(categoriesDataBase);
                await setReloadTag((t) => !t);
              }}
            >
              Limpar
            </Button>
            <Box p={1} />
            <Button
              color="secondary"
              variant="contained"
              disabled={
                !categoryFilteredTag.length &&
                !skillFilteredCategoriesTag.length
              }
              onClick={async () => {
                await setCategories((x) =>
                  x.filter((pai) => {
                    let arrayFilhos = pai.filho.filter((filho) => {
                      if (
                        !categoryFilteredTag.some((f) => f.name === filho.name)
                      ) {
                        filho.neto = filho.neto.filter((neto) => {
                          let skills = skillFilteredCategoriesTag.some((x) => {
                            return (
                              x.name.toLowerCase() === neto.name.toLowerCase()
                            );
                          });
                          return skills;
                        });
                      }
                      return filho.neto.length > 0 && filho.neto;
                    });
                    return arrayFilhos.length > 0 && (pai.filho = arrayFilhos);
                  })
                );
                await setSkills(() => {
                  let skill = [];
                  categories.map((p) =>
                    p.filho.map((f) =>
                      f.neto.map((n) => (skill = [...skill, n.id]))
                    )
                  );
                  return skill;
                });
              }}
            >
              Filtrar
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Dialog open={openClear} close={setOpenClear}>
        <DialogTitle onClose>
          <Typography>Modal title</Typography>
        </DialogTitle>
        <DialogContent dividers>Aqui vai estar a mensagem</DialogContent>
        <DialogActions>
          <Button autoFocus color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}
