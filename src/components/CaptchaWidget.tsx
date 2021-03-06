// Copyright (C) 2021-2022 Prosopo (UK) Ltd.
// This file is part of procaptcha-react <https://github.com/prosopo-io/procaptcha-react>.
//
// procaptcha-react is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// procaptcha-react is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with procaptcha-react.  If not, see <http://www.gnu.org/licenses/>.
import { Avatar } from "@mui/material";
import { CaptchaResponseCaptcha } from "@prosopo/procaptcha";

import { useStyles } from "../styles";


export function CaptchaWidget({ challenge, solution, onChange }:
    {challenge: CaptchaResponseCaptcha, solution: number[], onChange: (index: number) => void}) {
    // TODO challenge.items
    //const items = Array.from(Array(9).keys());
    console.log("CHALLENGE", challenge);
    const items = challenge.captcha.items;
    const classes = useStyles();

    return (
      <>
        {items.map((item, index) => <Avatar
          key={index}
          src={item.path} // TODO challenge.items[].path...
          variant="square"
          className={classes.captchaItem + " " + (solution.includes(index) ? " " + classes.captchaItemSelected : "")}
          onClick={() => onChange(index)} />
        )}
      </>
    );
  }

  export default CaptchaWidget;
