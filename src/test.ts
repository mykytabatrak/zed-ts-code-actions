import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import Rating from "@mui/material/Rating";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import LinearProgress from "@mui/material/LinearProgress";
import Fab from "@mui/material/Fab";
import Dialog from "@mui/material/Dialog";
import Checkbox from "@mui/material/Checkbox";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import { Alert, Avatar, Backdrop, Badge, Chip, Divider, Icon, List, SvgIcon, Table, TextField, ToggleButton, Tooltip, Typography } from "@mui/material";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  StrictMode({
    children: [
      App(),
      Autocomplete(),
      ButtonGroup(),
      Button(),
      Checkbox(),
      Fab(),
      Radio(),
      RadioGroup(),
      Rating(),
      Select(),
      Slider(),
      Switch(),
      TextField(),
      ToggleButton(),
      Avatar(),
      Badge(),
      Chip(),
      Divider(),
      Icon(),
      SvgIcon(),
      List(),
      Table(),
      Tooltip(),
      Typography(),
      Alert(),
      Backdrop(),
      Dialog(),
      LinearProgress(),
    ]
  }),
);
