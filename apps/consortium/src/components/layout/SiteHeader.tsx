import { Header, Title } from '@trussworks/react-uswds';
import bdcLogo from '../../assets/bdc-logo.svg';

export function SiteHeader() {
  return (
    <div>
      <Header basic>
        <div className="usa-nav-container">
          <div className="usa-navbar flex-align-center padding-1">
            <Title style={{ display: 'none' }}>BioData Catalyst Consortium</Title>
            <a href="/" className="display-flex">
              <img src={bdcLogo.src} height="50" alt="BioData Catalyst Consortium home" />
            </a>
          </div>
        </div>
      </Header>
    </div>
  );
}
