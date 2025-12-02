import { render, screen } from '@testing-library/react';
import { Countdown } from './Countdown';

describe('Countdown', () => {
  it('renders the countdown when the target date is in the future', () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 7);
    render(<Countdown targetDate={futureDate.toISOString()} />);
    expect(screen.getByText('Days')).toBeInTheDocument();
    expect(screen.getByText('Hours')).toBeInTheDocument();
    expect(screen.getByText('Minutes')).toBeInTheDocument();
    expect(screen.getByText('Seconds')).toBeInTheDocument();
  });

  it('renders the expired message when the target date is in the past', () => {
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 7);
    render(<Countdown targetDate={pastDate.toISOString()} />);
    expect(screen.getByText('🚀 Launch Complete!')).toBeInTheDocument();
  });
});
