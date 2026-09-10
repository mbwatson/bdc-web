import {
  type ButtonProps,
  Button as TrussworksButton,
} from '@trussworks/react-uswds';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { IconGlyph } from '../icon/Icon';

// Keep this URL classification logic aligned with `src/link/Link.tsx`.
// If one changes, the other should usually change too.
const HTTP_PROTOCOLS = new Set(['http:', 'https:']);

const isGovHostname = (hostname: string): boolean => {
  const normalized = hostname.toLowerCase().replace(/\.+$/, '');
  return normalized === 'gov' || normalized.endsWith('.gov');
};

const requiresExitNotice = (url: string): boolean => {
  let parsed: URL;

  try {
    parsed = new URL(url);
  } catch {
    return false;
  }

  return HTTP_PROTOCOLS.has(parsed.protocol) && !isGovHostname(parsed.hostname);
};

const isExternalHttpUrl = (url: string): boolean =>
  url.startsWith('https://') || url.startsWith('http://');

const hasExplicitScheme = (url: string): boolean =>
  /^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(url);

type ExitNoticeSetting = 'auto' | 'always' | 'never';
type LinkIndicatorSetting = 'auto' | 'none';

type TrussworksVariantProps = Pick<
  ButtonProps,
  | 'secondary'
  | 'base'
  | 'accentStyle'
  | 'outline'
  | 'inverse'
  | 'size'
  | 'unstyled'
>;

type LinkButtonProps = TrussworksVariantProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'children'> & {
    href: string;
    children: ReactNode;
    exitNotice?: ExitNoticeSetting;
    linkIndicator?: LinkIndicatorSetting;
    type?: never;
    disabled?: never;
  };

type NativeButtonProps = ButtonProps & {
  href?: undefined;
};

export type Props = NativeButtonProps | LinkButtonProps;

const variantClassNames = ({
  secondary,
  base,
  accentStyle,
  outline,
  inverse,
  size,
  unstyled,
}: TrussworksVariantProps) =>
  [
    'usa-button',
    secondary && 'usa-button--secondary',
    base && 'usa-button--base',
    accentStyle === 'cool' && 'usa-button--accent-cool',
    accentStyle === 'warm' && 'usa-button--accent-warm',
    outline && 'usa-button--outline',
    inverse && 'usa-button--inverse',
    size === 'big' && 'usa-button--big',
    unstyled && 'usa-button--unstyled',
  ]
    .filter(Boolean)
    .join(' ');

export default function Button(props: Props) {
  if ('href' in props && props.href) {
    const {
      children,
      className,
      secondary,
      base,
      accentStyle,
      outline,
      inverse,
      size,
      unstyled,
      exitNotice = 'auto',
      linkIndicator = 'auto',
      rel,
      target,
      'data-requires-exit-notice': exitNoticeDataAttribute,
      ...anchorProps
    } = props;
    const isExternal = isExternalHttpUrl(props.href);
    const shouldRequireExitNotice =
      exitNotice === 'always'
        ? true
        : exitNotice === 'never'
          ? false
          : requiresExitNotice(props.href);
    const indicatorIcon =
      linkIndicator === 'none'
        ? undefined
        : isExternal
          ? 'Launch'
          : hasExplicitScheme(props.href)
            ? undefined
            : 'ArrowForward';
    const externalRel = rel ?? (isExternal ? 'noopener noreferrer' : undefined);
    const externalTarget = target ?? (isExternal ? '_blank' : undefined);

    return (
      <a
        {...anchorProps}
        className={[variantClassNames(props), className]
          .filter(Boolean)
          .join(' ')}
        rel={externalRel}
        target={externalTarget}
        data-requires-exit-notice={
          shouldRequireExitNotice
            ? 'true'
            : (exitNoticeDataAttribute as string | undefined)
        }
      >
        {children}
        {indicatorIcon && (
          <IconGlyph
            aria-hidden
            name={indicatorIcon}
            size={2}
            className="margin-left-05 text-middle"
          />
        )}
      </a>
    );
  }

  return <TrussworksButton {...props} />;
}
