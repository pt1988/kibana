/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar } from '../../../components/sidebar';
import { Toolbar } from '../../../components/toolbar';
import { Workpad } from '../../../components/workpad';
import { WorkpadHeader } from '../../../components/workpad_header';

export class WorkpadApp extends React.PureComponent {
  static propTypes = {
    editing: PropTypes.bool,
    deselectElement: PropTypes.func,
    initializeWorkpad: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.initializeWorkpad();
  }

  render() {
    const { editing, deselectElement } = this.props;

    return (
      <div className="canvasLayout">
        <div className="canvasLayout__rows">
          <div className="canvasLayout__cols">
            <div className="canvasLayout__stage">
              <div className="canvasLayout__stageHeader">
                <WorkpadHeader />
              </div>

              <div className="canvasLayout__stageContent" onMouseDown={deselectElement}>
                {/* NOTE: canvasWorkpadContainer is used for exporting */}
                <div className="canvasWorkpadContainer canvasLayout__stageContentOverflow">
                  <Workpad />
                </div>
              </div>
            </div>

            {editing && (
              <div className="canvasLayout__sidebar hide-for-sharing">
                <Sidebar />
              </div>
            )}
          </div>

          {editing ? (
            <div className="canvasLayout__footer hide-for-sharing">
              <Toolbar />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
