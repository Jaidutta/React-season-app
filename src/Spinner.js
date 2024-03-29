import React from 'react';

const Spinner = props => {
  return(
    <div class="ui active dimmer">
      {/* From Semantic ui  */}
       <div class="ui large text loader">{props.message}</div>
    </div>
  )
}

Spinner.defaultProps = {
  message: 'Loading'
};

export default Spinner;