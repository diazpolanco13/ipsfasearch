const diccionarioParentezco = key => {
  const dict = {
    "PD": "PADRES",
    "HJ": "HIJOS"
  }

  return dict[key]
}

export default diccionarioParentezco
