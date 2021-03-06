import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Column } from './UpDataGrid'
import { ICellFormatter, UpCellFormatter } from './UpDefaultCellFormatter'

export interface UpDataGridCellState {
    isSelected: boolean;
}

export interface UpDataGridCellProps {
    value?: any;
    column?: Column;
}

export default class UpDataGridCell extends React.Component<UpDataGridCellProps, UpDataGridCellState> {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isSelected: false
        }
    }

    render() {
        return (
            <td className="up-data-grid-cell">
                <UpCellFormatter value={this.props.value} column={this.props.column}>
                    {this.props.children}
                </UpCellFormatter>
            </td>
        )
    }
}