import React from 'react';

import TextField from '@material-ui/core/TextField';

export default function Information(props) {
  return (
    <div>
      <React.Fragment>
      <TextField
        placeholder="Enter Your Name"
        label="Name"
        onChange={props.handleInfoChange('name')}
        defaultValue={props.information.name}
        margin="normal"
        fullWidth
      />
      <br />
      <TextField
        placeholder="Enter Your Address"
        label="Address"
        onChange={props.handleInfoChange('address')}
        defaultValue={props.information.address}
        margin="normal"
        fullWidth
      />
      <br /><TextField
        placeholder="Enter Any Note for Driver"
        label="Driver Note"
        onChange={props.handleInfoChange('driverNote')}
        defaultValue={props.information.driverNote}
        margin="normal"
        fullWidth
      />
      <br /><TextField
        placeholder="Enter Your Credit Card Number"
        label="Credit Card"
        onChange={props.handleInfoChange('cc')}
        defaultValue={props.information.cc}
        margin="normal"
        fullWidth
      />
      <br /><TextField
        placeholder="Enter Your Credit Card's Expiration Date"
        label="Exp"
        onChange={props.handleInfoChange('exp')}
        defaultValue={props.information.exp}
        margin="normal"
        fullWidth
      />
      <br /><TextField
        placeholder="Enter Your Credit Card's CVV"
        label="CVV"
        onChange={props.handleInfoChange('cvv')}
        defaultValue={props.information.cvv}
        margin="normal"
        fullWidth
      />
      <br />
      </React.Fragment>
    </div>
  )
}
