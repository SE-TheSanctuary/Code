/* eslint-disable max-len, no-return-assign */

import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import messageEditor from '../../modules/message-editor.js';

export default class MessageEditor extends React.Component {
  componentDidMount() {
    messageEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="body"]').focus(); }, 0);
  }

  render() {
    const { doc } = this.props;
    console.log("Message editor");
    console.log(receiveId);
    return (<form
      ref={ form => (this.messageEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >

      <FormGroup>
        <ControlLabel>Message</ControlLabel>
        <FormControl
          componentClass="textarea"
          name="body"
          defaultValue={ doc && doc.body }
          placeholder="Congratulations! Today is your day. You're off to Great Places! You're off and away!"
        />
      </FormGroup>
      <Button type="submit" bsStyle="success">
        { doc && doc._id ? 'Save Changes' : 'Add Document' }
      </Button>
    </form>);
  }
}

MessageEditor.propTypes = {
  doc: PropTypes.object,
};
