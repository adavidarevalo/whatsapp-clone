//TODO
import { Meta, StoryObj } from '@storybook/react';
import CallTimes from '../../../../../components/chat/conversation/call/times';

const withProvider = ({
  totalSecondsInCall,
  callAccepted,
}: {
  totalSecondsInCall: number;
  callAccepted: boolean;
}) => {
  return (
    <CallTimes
      totalSecondsInCall={totalSecondsInCall}
      callAccepted={callAccepted}
      setTotalSecondsInCall={() => {}}
    />
  );
};

const meta = {
  title: 'Components/Chat/Conversation/Call/RingRing',
  component: withProvider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof withProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    totalSecondsInCall: 0,
    callAccepted: true,
  },
};