import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Button from './Button';

describe('Button', () => {
  it('renders a native button when href is not provided', () => {
    render(<Button type="button">Trigger action</Button>);

    const button = screen.getByRole('button', { name: 'Trigger action' });
    expect(button.tagName).toBe('BUTTON');
  });

  it('renders an anchor when href is provided', () => {
    render(<Button href="/about">Go to About</Button>);

    const link = screen.getByRole('link', { name: 'Go to About' });
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', '/about');
    expect(link).toHaveTextContent('Go to About');
  });

  it('adds an internal arrow icon for internal href values', () => {
    render(<Button href="/about">Go to About</Button>);

    const link = screen.getByRole('link', { name: 'Go to About' });
    const icon = link.querySelector('svg');

    expect(icon).not.toBeNull();
    expect(icon).toHaveClass('margin-left-05');
  });

  it('supports disabling the link indicator icon', () => {
    render(
      <Button href="/about" linkIndicator="none">
        Go to About
      </Button>,
    );

    const link = screen.getByRole('link', { name: 'Go to About' });
    const icon = link.querySelector('svg');

    expect(icon).toBeNull();
  });

  it('adds external affordances for external href values', () => {
    render(<Button href="https://example.com">Visit partner site</Button>);

    const link = screen.getByRole('link', { name: 'Visit partner site' });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveAttribute('data-requires-exit-notice', 'true');
  });

  it('does not require exit notice for external .gov links by default', () => {
    render(<Button href="https://nih.gov">Visit NIH</Button>);

    const link = screen.getByRole('link', { name: 'Visit NIH' });
    expect(link).not.toHaveAttribute('data-requires-exit-notice');
  });

  it('applies USWDS variant classes in link mode', () => {
    render(
      <Button href="/join" secondary outline size="big">
        Join now
      </Button>,
    );

    const link = screen.getByRole('link', { name: 'Join now' });
    expect(link).toHaveClass('usa-button');
    expect(link).toHaveClass('usa-button--secondary');
    expect(link).toHaveClass('usa-button--outline');
    expect(link).toHaveClass('usa-button--big');
  });
});
