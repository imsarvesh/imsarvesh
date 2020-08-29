import * as React from 'react';
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';
import { CommandBarButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { DirectionalHint } from 'office-ui-fabric-react/lib/Callout';
import {
    IContextualMenuItemProps,
    ContextualMenuItem,
    IContextualMenuItemStyles,
    IContextualMenuStyles,
} from 'office-ui-fabric-react/lib/ContextualMenu';
import { getTheme, concatStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { IButtonStyles } from 'office-ui-fabric-react/lib/Button';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';
import styled from 'styled-components';

const StyledTaskBar = styled("div")`
    
`


const theme = getTheme();
// Styles for both command bar and overflow/menu items
const itemStyles: Partial<IContextualMenuItemStyles> = {
    label: { fontSize: 18 },
    icon: { color: theme.palette.red },
    iconHovered: { color: theme.palette.redDark },
};
// For passing the styles through to the context menus
const menuStyles: Partial<IContextualMenuStyles> = {
    subComponentStyles: { menuItem: itemStyles, callout: {} },
};

const getCommandBarButtonStyles = memoizeFunction(
    (originalStyles: IButtonStyles | undefined): Partial<IContextualMenuItemStyles> => {
        if (!originalStyles) {
            return itemStyles;
        }

        return concatStyleSets(originalStyles, itemStyles);
    },
);

// Custom renderer for main command bar items
const CustomButton: React.FunctionComponent<IButtonProps> = props => {
    return <CommandBarButton {...props} styles={getCommandBarButtonStyles(props.styles)} />;
};

// Custom renderer for menu items (these must have a separate custom renderer because it's unlikely
// that the same component could be rendered properly as both a command bar item and menu item).
// It's also okay to custom render only the command bar items without changing the menu items.
const CustomMenuItem: React.FunctionComponent<IContextualMenuItemProps> = props => {
    const buttonOnMouseClick = () => alert(`${props.item.text} clicked`);
    // Due to ContextualMenu implementation quirks, passing styles here doesn't work
    return <ContextualMenuItem {...props} onClick={buttonOnMouseClick} />;
};

const overflowProps: IButtonProps = {
    ariaLabel: 'More commands',
    menuProps: {
        contextualMenuItemAs: CustomMenuItem,
        // Styles are passed through to menu items here
        styles: menuStyles,
        items: [], // CommandBar will determine items rendered in overflow
        isBeakVisible: true,
        beakWidth: 20,
        gapSpace: 10,
        directionalHint: DirectionalHint.topCenter,
    },
};


const _overflowItems: ICommandBarItemProps[] = [
    // { key: 'move', text: 'Move to...', onClick: () => console.log('Move to'), iconProps: { iconName: 'MoveToFolder' } },
    // { key: 'copy', text: 'Copy to...', onClick: () => console.log('Copy to'), iconProps: { iconName: 'Copy' } },
    // { key: 'rename', text: 'Rename...', onClick: () => console.log('Rename'), iconProps: { iconName: 'Edit' } },
];

const time = () => `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;

const _farItems: ICommandBarItemProps[] = [
    {
        key: 'info',
        text: time(),
        ariaLabel: 'Info',
        iconOnly: false,
        onClick: () => console.log('Info'),
    },
];
const TaskBar = () => {
    return (
        <StyledTaskBar>
            <CommandBar
                overflowButtonProps={overflowProps}
                // Custom render all buttons
                buttonAs={CustomButton}
                items={[]}
                overflowItems={_overflowItems}
                farItems={_farItems}
                ariaLabel="Use left and right arrow keys to navigate between commands"
            />
        </StyledTaskBar>
    )
}

export default TaskBar;