import React, { useState } from "react";
import { Paper, Grid } from "@material-ui/core";
import "./style.css";

export default function Fernando() {
  const [x, setX] = useState({
    position: "sticky",
    display: "table-cell",
    left: 0,
    backgroundColor: "purple",
  });
  return (
    <table>
      <div id="pai">
        <tbody>
          <tr class="first">
            <Grid style={x}>Name</Grid>
            <td>Town</td>
            <td>County</td>
            <td>Age</td>
            <td>Profession</td>
            <td>Anual Income</td>
            <td>Matital Status</td>
            <td>Children</td>
          </tr>
          <tr>
            <Grid id="v123" style={x}>
              John Smith
            </Grid>
            <td>Macelsfield</td>
            <td>Cheshire</td>
            <td>52</td>
            <td>Brewer</td>
            <td>£47,000</td>
            <td>Married</td>
            <td>2</td>
          </tr>
          <tr>
            <td style={x}>Jenny Jones</td>
            <td>Threlkeld</td>
            <td>Cumbria</td>
            <td>34</td>
            <td>Shepherdess</td>
            <td>£28,000</td>
            <td>Single</td>
            <td>0</td>
          </tr>
          <tr>
            <td style={x}>Peter Frampton</td>
            <td>Avebury</td>
            <td>Wiltshire</td>
            <td>57</td>
            <td>Musician</td>
            <td>£124,000</td>
            <td>Married</td>
            <td>4</td>
          </tr>
          <tr>
            <td style={x}>Simon King</td>
            <td>Malvern</td>
            <td>Worchestershire</td>
            <td>48</td>
            <td>Naturalist</td>
            <td>£65,000</td>
            <td>Married</td>
            <td>2</td>
          </tr>
          <tr>
            <td style={x}>Lucy Diamond</td>
            <td>St Albans</td>
            <td>Hertfordshire</td>
            <td>67</td>
            <td>Pharmasist</td>
            <td>Retired</td>
            <td>Married</td>
            <td>3</td>
          </tr>
          <tr>
            <td style={x}>Austin Stevenson</td>
            <td>Edinburgh</td>
            <td>Lothian </td>
            <td>36</td>
            <td>Vigilante</td>
            <td>£86,000</td>
            <td>Single</td>
            <td>Unknown</td>
          </tr>
          <tr>
            <td style={x}>Wilma Rubble</td>
            <td>Bedford</td>
            <td>Bedfordshire</td>
            <td>43</td>
            <td>Housewife</td>
            <td>N/A</td>
            <td>Married</td>
            <td>1</td>
          </tr>
          <tr>
            <td style={x}>Kat Dibble</td>
            <td>Manhattan</td>
            <td>New York</td>
            <td>55</td>
            <td>Policewoman</td>
            <td>$36,000</td>
            <td>Single</td>
            <td>1</td>
          </tr>
          <tr>
            <td style={x}>Henry Bolingbroke</td>
            <td>Bolingbroke</td>
            <td>Lincolnshire</td>
            <td>45</td>
            <td>Landowner</td>
            <td>Lots</td>
            <td>Married</td>
            <td>6</td>
          </tr>
          <tr>
            <td style={x}>Alan Brisingamen</td>
            <td>Alderley</td>
            <td>Cheshire</td>
            <td>352</td>
            <td>Arcanist</td>
            <td>A pile of gems</td>
            <td>Single</td>
            <td>0</td>
          </tr>
        </tbody>
      </div>
    </table>
  );
}
