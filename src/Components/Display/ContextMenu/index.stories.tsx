import * as React from 'react'
import * as update from 'react-addons-update'

import { storiesOf } from '@storybook/react'

import UpContextMenuTrigger from './UpContextMenuTrigger'
import UpContextMenu from './UpContextMenu'
import UpContextMenuItem from './UpContextMenuItem'
import UpContextMenuItemDivider from './UpContextMenuItemDivider'

const MENU_TYPE = 'SIMPLE';

export interface SimpleMenuState {
    logs:Array<string> 
}

export default class SimpleMenu extends React.PureComponent<any, SimpleMenuState> {
    constructor(props) {
        super(props);
        this.state = { logs: [] };
    }

    handleClick = (e, data) => {
        this.setState(update(this.state, {
            logs: {$push : [`Clicked on menu ${data.item}`]}
        }));
    }

    render() {
        return (
            <div>
                <h3>Simple Menu</h3>
                <p>Mise en oeuvre d'un utilisation du menu contextuel sur un paragraphe :</p>
                <UpContextMenuTrigger id={MENU_TYPE} holdToDisplay={1000}>
                    <div className='well' style={{cursor: 'pointer', margin: "30px", padding: "10px", borderRadius: "6px",
                        border:"1px solid #369"}}>Cliquez avec le bouton droit de votre souris pour afficher le menu</div>
                </UpContextMenuTrigger>
                <div>
                    {this.state.logs.map((log, i) => (<p key={i}>{log}</p>))}
                </div>
                <UpContextMenu id={MENU_TYPE}>
                    <UpContextMenuItem onClick={this.handleClick} data={{item: 'item 1'}}>Menu Item 1</UpContextMenuItem>
                    <UpContextMenuItem onClick={this.handleClick} data={{item: 'item 2'}}>Menu Item 2</UpContextMenuItem>
                    <UpContextMenuItemDivider size= {2} />
                    <UpContextMenuItem onClick={this.handleClick} data={{item: 'item 2'}}>Menu Item 3</UpContextMenuItem>
                </UpContextMenu>
            </div>
        );
    }
}

storiesOf('UpContextMenu', module)
.addWithInfo('Simple usage', 'Utilisation du composant en lui passant les données à afficher',
 () => (
  <SimpleMenu />
))