import React from 'react';
import {
  HeaderContainer,
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  SideNavLink,
  SkipToContent,
} from '@carbon/react';
import { Search, Notification, Switcher } from '@carbon/react/icons';

const Shell: React.FC = (props) => {
  return (
    <div>
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <>
            <Header aria-label="Carbon Remix">
              <SkipToContent />
              <HeaderMenuButton
                aria-label="Open menu"
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
              />
              <HeaderName href="#" prefix="Carbon">
                Remix
              </HeaderName>
              <HeaderNavigation aria-label="Carbon Remix">
                <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
                <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
                <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
                <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                  <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                  <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
                  <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
                </HeaderMenu>
              </HeaderNavigation>
              <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
                  <Search size={20} />
                </HeaderGlobalAction>
                <HeaderGlobalAction
                  aria-label="Notifications"
                  onClick={() => {}}
                >
                  <Notification size={20} />
                </HeaderGlobalAction>
                <HeaderGlobalAction
                  aria-label="App Switcher"
                  onClick={() => {}}
                >
                  <Switcher size={20} />
                </HeaderGlobalAction>
              </HeaderGlobalBar>
              <SideNav
                aria-label="Side navigation"
                expanded={isSideNavExpanded}
              >
                <SideNavItems>
                  <SideNavMenu title="Category title">
                    <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                      Link
                    </SideNavMenuItem>
                    <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                      Link
                    </SideNavMenuItem>
                    <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                      Link
                    </SideNavMenuItem>
                  </SideNavMenu>
                  <SideNavMenu title="Category title" isActive={true}>
                    <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                      Link
                    </SideNavMenuItem>
                    <SideNavMenuItem
                      aria-current="page"
                      href="https://www.carbondesignsystem.com/"
                    >
                      Link
                    </SideNavMenuItem>
                    <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                      Link
                    </SideNavMenuItem>
                  </SideNavMenu>
                  <SideNavMenu title="Category title">
                    <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                      Link
                    </SideNavMenuItem>
                    <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                      Link
                    </SideNavMenuItem>
                    <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                      Link
                    </SideNavMenuItem>
                  </SideNavMenu>
                  <SideNavLink href="https://www.carbondesignsystem.com/">
                    Link
                  </SideNavLink>
                  <SideNavLink href="https://www.carbondesignsystem.com/">
                    Link
                  </SideNavLink>
                </SideNavItems>
              </SideNav>
            </Header>
          </>
        )}
      />
      <main className="app-container">{props.children}</main>
    </div>
  );
};

export default Shell;
