import { GovBanner } from '@bdc/ui-react/banner/GovBanner';
import IconButton from '@bdc/ui-react/button/IconButton';
import { SearchInput } from '@components/layout/SearchInput';
import { navConfig } from '@config/navigation';
import {
  Header,
  Menu,
  NavDropDownButton,
  PrimaryNav,
  Title,
} from '@trussworks/react-uswds';
import { useCallback, useEffect, useRef, useState } from 'react';
import bdcLogo from '../../assets/bdc-logo.svg';
import classes from './layout.module.css';

export function SiteHeader() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null,
  );
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMobileNav = () => {
    setMobileNavOpen((prev) => {
      const nextOpen = !prev;

      if (!nextOpen) {
        setOpenDropdownIndex(null);
      }

      return nextOpen;
    });
  };

  const closeAll = useCallback(() => {
    setMobileNavOpen(false);
    setOpenDropdownIndex(null);
  }, []);

  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileNavOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [mobileNavOpen]);

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia('(min-width: 64em)');

    const handleDesktopLayout = (event: MediaQueryList | MediaQueryListEvent) => {
      if (event.matches) {
        closeAll();
      }
    };

    handleDesktopLayout(desktopMediaQuery);
    desktopMediaQuery.addEventListener('change', handleDesktopLayout);

    return () => {
      desktopMediaQuery.removeEventListener('change', handleDesktopLayout);
    };
  }, [closeAll]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        closeAll();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeAll();
      }
    };

    const handleNavigation = () => {
      closeAll();
    };

    const handleNavLinkClick = (event: MouseEvent) => {
      const target = event.target as Element | null;

      if (!target || !mobileNavOpen) {
        return;
      }

      if (target.closest('.usa-nav a')) {
        closeAll();
        mobileMenuButtonRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('astro:after-swap', handleNavigation);
    document.addEventListener('click', handleNavLinkClick);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('astro:after-swap', handleNavigation);
      document.removeEventListener('click', handleNavLinkClick);
    };
  }, [closeAll, mobileNavOpen]);

  const primaryNavItems = navConfig.map((item, index) => {
    if (item.items) {
      const menuId = `nav-menu-${index}`;
      const isOpen = openDropdownIndex === index;

      return (
        <div key={item.label}>
          <NavDropDownButton
            menuId={menuId}
            onToggle={() => toggleDropdown(index)}
            isOpen={isOpen}
            label={item.label}
          />
          <Menu
            id={menuId}
            items={item.items.map((subItem) => (
              <a
                href={subItem.href}
                key={subItem.label}
                className={subItem.external ? 'usa-link--external' : ''}
                {...(subItem.external
                  ? { rel: 'noopener noreferrer', target: '_blank' }
                  : {})}
              >
                {subItem.label}
              </a>
            ))}
            isOpen={isOpen}
          />
        </div>
      );
    }

    return (
      <a href={item.href} key={item.label} className="usa-nav__link">
        <span>{item.label}</span>
      </a>
    );
  });

  return (
    <div
      ref={headerRef}
      data-analytics-section="header"
      data-mobile-menu-open={mobileNavOpen ? 'true' : 'false'}
      className={`${classes.siteHeaderContainer} ${scrolled ? classes.scrolled : ''}`}
    >
      <GovBanner />
      <Header basic showMobileOverlay={mobileNavOpen}>
        <div className="usa-nav-container height-full">
          <div className="usa-navbar flex-align-center flex-justify padding-1 height-full">
            <Title style={{ display: 'none' }}>BioData Catalyst</Title>
            <a href="/" className="display-flex">
              <img src={bdcLogo.src} height="50" alt="BioData Catalyst home" />
            </a>
            <IconButton
              ref={mobileMenuButtonRef}
              icon="Menu"
              label={
                mobileNavOpen
                  ? 'Close site navigation menu'
                  : 'Open site navigation menu'
              }
              srText="Menu"
              onClick={toggleMobileNav}
              aria-expanded={mobileNavOpen}
              className={`usa-menu-btn margin-right-2 desktop:display-none ${classes.mobileMenuButton} ${mobileNavOpen ? classes.mobileMenuButtonOpen : ''}`}
            />
          </div>
          <PrimaryNav
            items={primaryNavItems}
            mobileExpanded={mobileNavOpen}
            onToggleMobileNav={toggleMobileNav}
          >
            <SearchInput />
          </PrimaryNav>
        </div>
      </Header>
    </div>
  );
}
